import fs from 'fs';
import path from 'path';
import assert from 'assert';

import { setupMockEnvironment, setNavigatorOnLine, PROJECT_ROOT } from './e2e/test_runner.mjs';

setupMockEnvironment();

async function runAdversarialM3Suite() {
  console.log('\n================================================================');
  console.log('   Empirical Challenger M3: Adversarial AI Agent Probe Suite   ');
  console.log('================================================================\n');

  const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
  assert(fs.existsSync(servicePath), 'aiAgentService.js must exist');
  const mod = await import('file:///' + servicePath.replace(/\\/g, '/'));

  const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
  const qbMod = await import('file:///' + qbPath.replace(/\\/g, '/'));
  const qb = qbMod.questionBankService || qbMod;

  let passed = 0;
  let failed = 0;
  const probeFindings = [];

  function logPass(name) {
    passed++;
    console.log(`  [PASS] ${name}`);
  }

  function logFail(name, err) {
    failed++;
    const errMsg = err?.message || String(err);
    console.error(`  [FAIL] ${name}`);
    console.error(`         Reason: ${errMsg}`);
    probeFindings.push({ test: name, error: errMsg });
  }

  // Helper runner
  async function runProbe(name, fn) {
    try {
      await fn();
      logPass(name);
    } catch (err) {
      logFail(name, err);
    }
  }

  console.log('--- Category 1: Tool Authorization & Sandbox Isolation ---');

  // Probe 1.1: Rejection of unauthorized tools
  const unauthorizedTools = [
    'eval',
    'eval_code',
    'new_function',
    'read_file',
    'write_file',
    'system_exec',
    'bash',
    'cmd',
    'fetch_external',
    'get_env',
    'localStorage_dump',
    '__proto__',
    'constructor',
    'prototype',
    'toString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    '',
    null,
    undefined,
    12345,
    true,
    ['get_question_bank_summary'],
    { tool: 'get_question_bank_summary' },
    'get_question_detail', // legacy unwhitelisted tool
    'query_all_database'
  ];

  for (const tool of unauthorizedTools) {
    await runProbe(`1.1: Rejects unauthorized tool name: ${JSON.stringify(tool)}`, async () => {
      const res = await mod.executeSandboxedTool(tool, {});
      assert.strictEqual(res.success, false, `Tool ${JSON.stringify(tool)} must be rejected`);
      assert(typeof res.error === 'string' && res.error.length > 0, 'Error message must be present');
    });
  }

  // Probe 1.2: Boundary inputs for rawParams
  const degenerateParams = [
    null,
    undefined,
    0,
    -1,
    false,
    true,
    '',
    'simple string',
    [1, 2, 3],
    { [Symbol('sym')]: 'hidden' }
  ];

  for (const p of degenerateParams) {
    await runProbe(`1.2: Handles degenerate rawParams: ${typeof p} (${JSON.stringify(p)}) without crash`, async () => {
      const res = await mod.executeSandboxedTool('get_question_bank_summary', p);
      assert.strictEqual(res.success, true);
      assert(res.data && res.data.total >= 200);
    });
  }

  // Probe 1.3: Oversized Payload Rejection
  await runProbe('1.3: Rejects payload exceeding 50KB boundary', async () => {
    const hugeString = 'A'.repeat(60000);
    const res = await mod.executeSandboxedTool('query_questions', { keyword: hugeString });
    assert.strictEqual(res.success, false);
    assert(res.error.includes('limit exceeded') || res.error.includes('50 KB'));
  });

  // Probe 1.4: Prototype Pollution Attacks
  await runProbe('1.4a: Neutralizes shallow prototype pollution via __proto__', async () => {
    const maliciousPayload = JSON.parse('{"__proto__": {"polluted_m3_alpha": "compromised"}}');
    await mod.executeSandboxedTool('query_questions', maliciousPayload);
    assert.strictEqual(Object.prototype.polluted_m3_alpha, undefined, 'Object.prototype must not be polluted');
    assert.strictEqual(({}).polluted_m3_alpha, undefined, 'Empty object must not have polluted property');
  });

  await runProbe('1.4b: Neutralizes constructor.prototype pollution', async () => {
    const maliciousPayload = {
      constructor: {
        prototype: {
          polluted_m3_beta: 'compromised'
        }
      }
    };
    await mod.executeSandboxedTool('query_questions', maliciousPayload);
    assert.strictEqual(Object.prototype.polluted_m3_beta, undefined, 'Object.prototype must not be polluted');
    assert.strictEqual(({}).polluted_m3_beta, undefined, 'Empty object must not have polluted property');
  });

  await runProbe('1.4c: Neutralizes deep nested prototype pollution', async () => {
    const maliciousPayload = {
      nested: {
        deeper: {
          __proto__: {
            polluted_m3_gamma: 'compromised'
          },
          constructor: {
            prototype: {
              polluted_m3_delta: 'compromised'
            }
          }
        }
      }
    };
    await mod.executeSandboxedTool('query_questions', maliciousPayload);
    assert.strictEqual(Object.prototype.polluted_m3_gamma, undefined);
    assert.strictEqual(Object.prototype.polluted_m3_delta, undefined);
  });

  // Probe 1.5: XSS & Script Injection in add_question
  const xssPayloads = [
    '<script>alert("XSS1")</script>',
    '<SCRIPT SRC="https://evil.com/xss.js"></SCRIPT>',
    '<img src="x" onerror="alert(1)">',
    '<svg/onload=alert("SVG_XSS")>',
    '<iframe src="javascript:alert(1)"></iframe>',
    '<body onload=alert(1)>',
    '<a href="javascript:alert(1)">Click Me</a>',
    '<<SCRIPT>alert("NESTED");//<</SCRIPT>',
    '<scr<script>ipt>alert(1)</script>',
    '<div onmouseover="alert(1)">Hover</div>',
    '"><script>alert(1)</script>'
  ];

  for (let i = 0; i < xssPayloads.length; i++) {
    const payload = xssPayloads[i];
    await runProbe(`1.5.${i + 1}: Sanitizes XSS vector: ${payload.slice(0, 30)}...`, async () => {
      const sanitized = mod.sanitizeInput(payload);
      assert(!/<script\b/i.test(sanitized), 'Must not contain script opening tag');
      assert(!/<\/script>/i.test(sanitized), 'Must not contain script closing tag');
      assert(!/\bon\w+\s*=/i.test(sanitized), 'Must not contain event handlers');
      assert(!/javascript\s*:/i.test(sanitized), 'Must not contain javascript: pseudo-protocol');
      assert(!/<[^>]+>/i.test(sanitized), 'Must not contain any HTML tags');
    });
  }

  // Probe 1.6: Disallowed Image Protocol Injection
  const maliciousImageUrls = [
    'javascript:alert("XSS")',
    'JAVASCRIPT:alert("XSS")',
    '   javascript:void(0)',
    'data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
    'data:text/html,<script>alert(1)</script>'
  ];

  for (const badImg of maliciousImageUrls) {
    await runProbe(`1.6: Rejects malicious image URL protocol: ${badImg.slice(0, 30)}`, async () => {
      const res = await mod.executeSandboxedTool('add_question', {
        domain: 'visual_id',
        questionZh: '测试恶意图片注入',
        questionEn: 'Test malicious image URL injection',
        optionsZh: ['A', 'B', 'C', 'D'],
        optionsEn: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        explanationZh: '解析',
        explanationEn: 'Explanation',
        image: badImg
      });
      assert.strictEqual(res.success, false, `Image URL ${badImg} must be rejected`);
      assert(res.error.includes('Disallowed image URL') || res.error.includes('protocol'));
    });
  }

  console.log('\n--- Category 2: Parameter Boundaries & Tool Handlers ---');

  // Probe 2.1: query_questions parameter boundaries
  await runProbe('2.1a: query_questions clamps negative and zero limits to at least 1', async () => {
    const resNeg = await mod.executeSandboxedTool('query_questions', { limit: -5 });
    assert.strictEqual(resNeg.success, true);
    assert(Array.isArray(resNeg.data) && resNeg.data.length >= 1 && resNeg.data.length <= 1);

    const resZero = await mod.executeSandboxedTool('query_questions', { limit: 0 });
    assert.strictEqual(resZero.success, true);
    assert(Array.isArray(resZero.data) && resZero.data.length >= 1 && resZero.data.length <= 1);
  });

  await runProbe('2.1b: query_questions clamps oversized limits to maximum 20', async () => {
    const resHuge = await mod.executeSandboxedTool('query_questions', { limit: 999999 });
    assert.strictEqual(resHuge.success, true);
    assert(Array.isArray(resHuge.data) && resHuge.data.length <= 20);
  });

  await runProbe('2.1c: query_questions handles non-existent filter queries gracefully', async () => {
    const res = await mod.executeSandboxedTool('query_questions', {
      keyword: 'NON_EXISTENT_ARCHED_KEYWORD_XYZ_999999',
      domain: 'non_existent_domain_xyz',
      difficulty: 99
    });
    assert.strictEqual(res.success, true);
    assert.deepStrictEqual(res.data, []);
  });

  // Probe 2.2: add_question and update_question boundaries
  let createdCustomId = null;
  await runProbe('2.2a: add_question enforces presence of question prompt', async () => {
    const res = await mod.executeSandboxedTool('add_question', {
      domain: 'chronology',
      optionsZh: ['A', 'B', 'C', 'D'],
      optionsEn: ['A', 'B', 'C', 'D']
    });
    assert.strictEqual(res.success, false);
    assert(res.error.includes('questionZh or questionEn'));
  });

  await runProbe('2.2b: add_question clamps out-of-range correctAnswer and difficulty', async () => {
    const res = await mod.executeSandboxedTool('add_question', {
      domain: 'avant_garde',
      questionZh: '边界测试考题：达达主义诞生于苏黎世的哪间酒馆？',
      questionEn: 'Boundary test: In which Zurich cabaret was Dada born?',
      optionsZh: ['伏尔泰酒馆', '黑猫酒馆', '双叟咖啡馆', '花神咖啡馆'],
      optionsEn: ['Cabaret Voltaire', 'Le Chat Noir', 'Les Deux Magots', 'Café de Flore'],
      correctAnswer: 999, // out of range
      difficulty: 99, // out of range
      explanationZh: '伏尔泰酒馆（Cabaret Voltaire）。',
      explanationEn: 'Cabaret Voltaire.'
    });
    assert.strictEqual(res.success, true);
    assert(res.data.id);
    createdCustomId = res.data.id;
    assert.strictEqual(res.data.correctAnswer, 0, 'Out-of-range correctAnswer clamped to 0');
    assert.strictEqual(res.data.difficulty, 2, 'Out-of-range difficulty defaulted to 2');
  });

  await runProbe('2.2c: update_question requires valid id and rejects missing id', async () => {
    const resNoId = await mod.executeSandboxedTool('update_question', { updates: { difficulty: 3 } });
    assert.strictEqual(resNoId.success, false);

    const resBadId = await mod.executeSandboxedTool('update_question', { id: 'non_existent_id_9999', updates: { difficulty: 3 } });
    assert.strictEqual(resBadId.success, false);
    assert(resBadId.error.includes('not found'));
  });

  await runProbe('2.2d: update_question successfully applies sanitized updates to custom question', async () => {
    assert(createdCustomId, 'createdCustomId must exist');
    const res = await mod.executeSandboxedTool('update_question', {
      id: createdCustomId,
      updates: {
        difficulty: 3,
        explanationZh: '<script>alert("hack")</script>更新后的解析：苏黎世伏尔泰酒馆',
        explanationEn: 'Updated explanation: Cabaret Voltaire, Zurich'
      }
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.data.difficulty, 3);
    assert(!res.data.explanationZh.includes('<script>'), 'Script tag in update stripped');
    assert(res.data.explanationZh.includes('苏黎世伏尔泰酒馆'));
  });

  // Probe 2.3: delete_question safeguards
  await runProbe('2.3a: delete_question rejects deleting built-in immutable questions', async () => {
    const res1 = await mod.executeSandboxedTool('delete_question', { id: 'arched_001' });
    assert.strictEqual(res1.success, false);
    assert(res1.error.includes('immutable'));

    const res2 = await mod.executeSandboxedTool('delete_question', { id: 'arched_210' });
    assert.strictEqual(res2.success, false);
    assert(res2.error.includes('immutable'));
  });

  await runProbe('2.3b: delete_question requires id and succeeds on custom question', async () => {
    const resMissing = await mod.executeSandboxedTool('delete_question', {});
    assert.strictEqual(resMissing.success, false);

    assert(createdCustomId, 'createdCustomId must exist');
    const resDel = await runSandboxedToolDelete(mod, createdCustomId);
    assert.strictEqual(resDel.success, true);
    assert.strictEqual(resDel.id, createdCustomId);
  });

  async function runSandboxedToolDelete(module, id) {
    return await module.executeSandboxedTool('delete_question', { id });
  }

  // Probe 2.4: generate_questions boundaries
  await runProbe('2.4a: generate_questions handles unknown domain with graceful fallback', async () => {
    const res = await mod.executeSandboxedTool('generate_questions', {
      domain: 'quantum_architecture_unknown',
      count: 2
    });
    assert.strictEqual(res.success, true);
    assert(Array.isArray(res.data));
    assert.strictEqual(res.data.length, 2);
    // falls back to avant_garde
    assert.strictEqual(res.data[0].domain, 'avant_garde');
  });

  await runProbe('2.4b: generate_questions clamps count between 1 and 5', async () => {
    const resMin = await mod.executeSandboxedTool('generate_questions', { count: -10 });
    assert.strictEqual(resMin.success, true);
    assert.strictEqual(resMin.data.length, 1);

    const resMax = await mod.executeSandboxedTool('generate_questions', { count: 100 });
    assert.strictEqual(resMax.success, true);
    assert.strictEqual(resMax.data.length, 5);
  });

  await runProbe('2.4c: generate_questions with autoAdd persists questions into custom bank', async () => {
    const beforeCount = qb.getAllQuestions().length;
    const res = await mod.executeSandboxedTool('generate_questions', {
      domain: 'artist_movement',
      count: 2,
      autoAdd: true
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.data.length, 2);
    const afterCount = qb.getAllQuestions().length;
    assert.strictEqual(afterCount, beforeCount + 2, 'Two questions auto-persisted');
  });

  // Probe 2.5: configure_practice_settings boundaries
  await runProbe('2.5: configure_practice_settings enforces parameter bounds (time: 5-180, count: 5-100)', async () => {
    const resTooLow = await mod.executeSandboxedTool('configure_practice_settings', {
      examTimeLimitMinutes: -99,
      examQuestionCount: 0,
      quizQuestionCount: 1,
      negativeScoring: false
    });
    assert.strictEqual(resTooLow.success, true);
    assert.strictEqual(resTooLow.data.examTimeLimitMinutes, 5, 'Time clamped to min 5');
    assert.strictEqual(resTooLow.data.examQuestionCount, 5, 'Exam count clamped to min 5');
    assert.strictEqual(resTooLow.data.quizQuestionCount, 5, 'Quiz count clamped to min 5');
    assert.strictEqual(resTooLow.data.negativeScoring, false);

    const resTooHigh = await mod.executeSandboxedTool('configure_practice_settings', {
      examTimeLimitMinutes: 1000,
      examQuestionCount: 500,
      quizQuestionCount: 200,
      negativeScoring: true
    });
    assert.strictEqual(resTooHigh.success, true);
    assert.strictEqual(resTooHigh.data.examTimeLimitMinutes, 180, 'Time clamped to max 180');
    assert.strictEqual(resTooHigh.data.examQuestionCount, 100, 'Exam count clamped to max 100');
    assert.strictEqual(resTooHigh.data.quizQuestionCount, 50, 'Quiz count clamped to max 50');
    assert.strictEqual(resTooHigh.data.negativeScoring, true);
  });

  // Probe 2.6: reset_question_bank safety check
  await runProbe('2.6: reset_question_bank strictly requires confirm: true and resets custom bank', async () => {
    // Missing confirm flag
    const res1 = await mod.executeSandboxedTool('reset_question_bank', {});
    assert.strictEqual(res1.success, false);
    assert(res1.error.includes('confirm'));

    // String "true" rather than boolean true
    const res2 = await mod.executeSandboxedTool('reset_question_bank', { confirm: 'true' });
    assert.strictEqual(res2.success, false);

    // confirm: false
    const res3 = await mod.executeSandboxedTool('reset_question_bank', { confirm: false });
    assert.strictEqual(res3.success, false);

    // Valid confirm: true
    const res4 = await mod.executeSandboxedTool('reset_question_bank', { confirm: true });
    assert.strictEqual(res4.success, true);

    const summary = qb.getSummary();
    assert.strictEqual(summary.customCount, 0, 'All custom questions wiped on reset');
    assert.strictEqual(summary.total, 210, 'Base 210 questions preserved');
  });

  console.log('\n--- Category 3: Deterministic Offline Fallback Engine ---');

  // Probe 3.1: Natural Language Casing & Punctuation Stress Test
  const casingScenarios = [
    { prompt: 'SUMMARY', intent: 'get_question_bank_summary' },
    { prompt: 'Overview of question bank', intent: 'get_question_bank_summary' },
    { prompt: 'sTaTs and HoW mAnY qUeStIoNs?', intent: 'get_question_bank_summary' },
    { prompt: 'SEARCH Mondrian', intent: 'query_questions' },
    { prompt: 'fInD bAuHaUs questions', intent: 'query_questions' },
    { prompt: 'LOOK UP De Chirico', intent: 'query_questions' },
    { prompt: 'TIMER 45 min, COUNT 30 questions', intent: 'configure_practice_settings' },
    { prompt: 'SET TIMER 25 and negative false', intent: 'configure_practice_settings' },
    { prompt: 'GENERATE question', intent: 'generate_questions' },
    { prompt: 'Synthetic Renaissance question', intent: 'generate_questions' },
    { prompt: 'CREATE QUESTION', intent: 'generate_questions' }
  ];

  for (const scenario of casingScenarios) {
    await runProbe(`3.1: Fallback parses casing/punctuation variant: "${scenario.prompt}"`, async () => {
      const res = await mod.handleDeterministicFallback(scenario.prompt);
      assert.strictEqual(res.mode, 'fallback_offline');
      assert.strictEqual(res.toolUsed, scenario.intent, `Expected intent ${scenario.intent}, got ${res.toolUsed}`);
    });
  }

  // Probe 3.2: Domain-specific question generation intent
  const domainGenerationPrompts = [
    { prompt: '出题：文艺复兴与古典透视', expectedDomain: 'renaissance_classical' },
    { prompt: '生成一道时间轴排序考题', expectedDomain: 'chronology' },
    { prompt: '出考题：艺术品识图名作雕塑', expectedDomain: 'visual_id' },
    { prompt: '出题：流派归属未来主义超现实', expectedDomain: 'artist_movement' },
    { prompt: '生成一道现代前卫建筑题', expectedDomain: 'avant_garde' }
  ];

  for (const d of domainGenerationPrompts) {
    await runProbe(`3.2: Fallback generates question for intent: "${d.prompt}"`, async () => {
      const res = await mod.handleDeterministicFallback(d.prompt);
      assert.strictEqual(res.mode, 'fallback_offline');
      assert.strictEqual(res.toolUsed, 'generate_questions');
      assert(res.content.includes('【离线规则引擎 / Offline Fallback Mode】'));
      assert(res.content.includes(d.expectedDomain));
    });
  }

  // Probe 3.3: Reset question bank two-step confirmation flow
  await runProbe('3.3a: Fallback intercepts unconfirmed reset with safety warning card', async () => {
    const res = await mod.handleDeterministicFallback('我想重置题库恢复出厂');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert(res.content.includes('高风险操作确认') || res.content.includes('确认重置题库'));
    assert.strictEqual(res.toolUsed, undefined, 'Must not execute reset tool without confirmation');
  });

  await runProbe('3.3b: Fallback executes reset tool when confirmation keyword provided', async () => {
    const res = await mod.handleDeterministicFallback('确认重置题库');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert.strictEqual(res.toolUsed, 'reset_question_bank');
    assert(res.content.includes('成功重置恢复至官方 210 道'));
  });

  // Probe 3.4: Degraded, empty, and gibberish inputs
  const degradedInputs = [
    { input: '', desc: 'empty string' },
    { input: '   \n\t   ', desc: 'whitespace only' },
    { input: '??????????????', desc: 'punctuation only' },
    { input: '!@#$%^&*()_+~`{}|:"<>?', desc: 'symbol barrage' },
    { input: 'asdkjhqwueyasuydgasjdkh', desc: 'random alpha string' },
    { input: 'A'.repeat(5000), desc: '5,000 char long prompt' }
  ];

  for (const item of degradedInputs) {
    await runProbe(`3.4: Handles degraded input safely: ${item.desc}`, async () => {
      const res = await mod.handleDeterministicFallback(item.input);
      assert.strictEqual(res.mode, 'fallback_offline');
      assert(typeof res.content === 'string' && res.content.length > 0);
    });
  }

  console.log('\n--- Category 4: Multi-Provider Declarations & ProcessAgentMessage ---');

  // Probe 4.1: Gemini tool declarations schema completeness
  await runProbe('4.1: GEMINI_TOOL_DECLARATIONS covers all 8 tools with valid parameters', async () => {
    assert.strictEqual(mod.GEMINI_TOOL_DECLARATIONS.length, 8);
    const declaredNames = mod.GEMINI_TOOL_DECLARATIONS.map(d => d.name);
    for (const tool of mod.ALLOWED_TOOLS) {
      assert(declaredNames.includes(tool), `Gemini declarations must include ${tool}`);
    }
    for (const decl of mod.GEMINI_TOOL_DECLARATIONS) {
      assert(decl.name && decl.description);
      assert.strictEqual(decl.parameters.type, 'OBJECT');
    }
  });

  // Probe 4.2: OpenAI tool declarations schema completeness
  await runProbe('4.2: OPENAI_TOOL_DECLARATIONS covers all 8 tools with valid parameters', async () => {
    assert.strictEqual(mod.OPENAI_TOOL_DECLARATIONS.length, 8);
    const declaredNames = mod.OPENAI_TOOL_DECLARATIONS.map(d => d.function.name);
    for (const tool of mod.ALLOWED_TOOLS) {
      assert(declaredNames.includes(tool), `OpenAI declarations must include ${tool}`);
    }
    for (const decl of mod.OPENAI_TOOL_DECLARATIONS) {
      assert.strictEqual(decl.type, 'function');
      assert(decl.function.name && decl.function.description);
      assert.strictEqual(decl.function.parameters.type, 'object');
    }
  });

  // Probe 4.3: Air-Gapped / Offline execution guarantee
  await runProbe('4.3: processAgentMessage operates 100% offline without network calls when keyless', async () => {
    globalThis.localStorage.removeItem('arched_ai_settings');
    globalThis.localStorage.removeItem('aiApiKey');
    setNavigatorOnLine(false);

    const res = await mod.processAgentMessage('题库概况与统计');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert.strictEqual(res.toolUsed, 'get_question_bank_summary');
    assert(res.content.includes('210'));

    setNavigatorOnLine(true);
  });

  console.log('\n================================================================');
  console.log(` Adversarial Probe Summary: ${passed} passed, ${failed} failed`);
  console.log('================================================================\n');

  if (probeFindings.length > 0) {
    console.error('Probe Failures Detail:');
    probeFindings.forEach((f, idx) => {
      console.error(`  ${idx + 1}. [${f.test}] -> ${f.error}`);
    });
  }

  if (failed > 0) {
    process.exit(1);
  }
}

runAdversarialM3Suite().catch(err => {
  console.error('Adversarial probe suite fatal error:', err);
  process.exit(1);
});
