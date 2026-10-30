import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { fileURLToPath } from 'url';

import { setupMockEnvironment, setNavigatorOnLine, PROJECT_ROOT } from './e2e/test_runner.mjs';

setupMockEnvironment();

async function runTests() {
  console.log('\n======================================================');
  console.log('       Milestone M3: AI Agent & Sandbox Test Suite    ');
  console.log('======================================================\n');

  const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
  assert(fs.existsSync(servicePath), 'aiAgentService.js must exist');
  const mod = await import('file:///' + servicePath.replace(/\\/g, '/'));

  const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
  const qbMod = await import('file:///' + qbPath.replace(/\\/g, '/'));
  const qb = qbMod.questionBankService || qbMod;

  let passed = 0;
  let failed = 0;

  function testCase(name, fn) {
    try {
      fn();
      passed++;
      console.log(`  ✓ ${name}`);
    } catch (err) {
      failed++;
      console.error(`  ✗ ${name}`);
      console.error(`    ${err.message}`);
    }
  }

  async function asyncTestCase(name, fn) {
    try {
      await fn();
      passed++;
      console.log(`  ✓ ${name}`);
    } catch (err) {
      failed++;
      console.error(`  ✗ ${name}`);
      console.error(`    ${err.message}`);
    }
  }

  // 1. Tool Whitelist & Registration
  testCase('1.1: ALLOWED_TOOLS contains exactly 8 whitelisted tools', () => {
    assert(Array.isArray(mod.ALLOWED_TOOLS), 'ALLOWED_TOOLS must be array');
    assert.strictEqual(mod.ALLOWED_TOOLS.length, 8, 'Must have exactly 8 tools');
    const expected = [
      'get_question_bank_summary',
      'query_questions',
      'add_question',
      'update_question',
      'delete_question',
      'generate_questions',
      'configure_practice_settings',
      'reset_question_bank'
    ];
    for (const tool of expected) {
      assert(mod.ALLOWED_TOOLS.includes(tool), `Missing tool: ${tool}`);
    }
  });

  await asyncTestCase('1.2: executeSandboxedTool rejects unauthorized tools', async () => {
    const res = await mod.executeSandboxedTool('eval_arbitrary_code', {});
    assert.strictEqual(res.success, false);
    assert(res.error.includes('Unauthorized tool'));
  });

  // 2. Tool 1: get_question_bank_summary
  await asyncTestCase('2.1: get_question_bank_summary returns total >= 200 and 5 domains', async () => {
    const res = await mod.executeSandboxedTool('get_question_bank_summary', {});
    assert.strictEqual(res.success, true);
    assert(res.data.total >= 200);
    assert(res.data.byDomain.chronology > 0);
    assert(res.data.byDomain.visual_id > 0);
    assert(res.data.byDomain.avant_garde > 0);
    assert(res.data.byDomain.artist_movement > 0);
    assert(res.data.byDomain.renaissance_classical > 0);
  });

  // 3. Tool 2: query_questions
  await asyncTestCase('3.1: query_questions filters by keyword and clamps limit', async () => {
    const res = await mod.executeSandboxedTool('query_questions', { keyword: '蒙德里安', limit: 3 });
    assert.strictEqual(res.success, true);
    assert(Array.isArray(res.data));
    assert(res.data.length <= 3);
  });

  // 4. Tool 3: add_question
  let customId = null;
  await asyncTestCase('4.1: add_question sanitizes XSS and stores custom question', async () => {
    const payload = {
      domain: 'visual_id',
      subCategory: 'Test Movement',
      era: '20th_century',
      questionZh: '<script>alert("xss")</script><b>测试题目</b>：哪位艺术家创立了冷抽象？',
      questionEn: '<i>Test</i>: Which artist founded De Stijl Neoplasticism?',
      optionsZh: ['蒙德里安', '毕加索', '马蒂斯', '康定斯基'],
      optionsEn: ['Mondrian', 'Picasso', 'Matisse', 'Kandinsky'],
      correctAnswer: 0,
      explanationZh: '蒙德里安创立风格派。',
      explanationEn: 'Mondrian founded De Stijl.',
      tags: ['De Stijl', 'Mondrian'],
      difficulty: 1
    };
    const res = await mod.executeSandboxedTool('add_question', payload);
    assert.strictEqual(res.success, true);
    assert(res.data.id);
    customId = res.data.id;
    assert(!res.data.questionZh.includes('<script>'), 'Script tag stripped');
    assert(!res.data.questionZh.includes('<b>'), '<b> tag stripped');
    assert(!res.data.questionEn.includes('<i>'), '<i> tag stripped');
  });

  // 5. Tool 4: update_question
  await asyncTestCase('5.1: update_question modifies question fields safely', async () => {
    assert(customId, 'Need valid customId');
    const res = await mod.executeSandboxedTool('update_question', {
      id: customId,
      updates: {
        difficulty: 3,
        explanationZh: '更新后的解析'
      }
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.data.difficulty, 3);
    assert.strictEqual(res.data.explanationZh, '更新后的解析');
  });

  // 6. Tool 5: delete_question
  await asyncTestCase('6.1: delete_question rejects deleting immutable arched_* questions', async () => {
    const res = await mod.executeSandboxedTool('delete_question', { id: 'arched_001' });
    assert.strictEqual(res.success, false);
    assert(res.error.includes('immutable'));
  });

  await asyncTestCase('6.2: delete_question successfully deletes custom question', async () => {
    assert(customId, 'Need valid customId');
    const res = await mod.executeSandboxedTool('delete_question', { id: customId });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.id, customId);
  });

  // 7. Tool 6: generate_questions
  await asyncTestCase('7.1: generate_questions generates authentic ARCHED schema questions', async () => {
    const res = await mod.executeSandboxedTool('generate_questions', {
      domain: 'renaissance_classical',
      count: 2
    });
    assert.strictEqual(res.success, true);
    assert(Array.isArray(res.data));
    assert.strictEqual(res.data.length, 2);
    const q = res.data[0];
    assert.strictEqual(q.domain, 'renaissance_classical');
    assert(q.questionZh && q.questionEn);
    assert.strictEqual(q.optionsZh.length, 4);
    assert.strictEqual(q.optionsEn.length, 4);
    assert(typeof q.correctAnswer === 'number');
    assert(q.explanationZh && q.explanationEn);
  });

  // 8. Tool 7: configure_practice_settings
  await asyncTestCase('8.1: configure_practice_settings saves parameters in arched_practice_config', async () => {
    const res = await mod.executeSandboxedTool('configure_practice_settings', {
      examTimeLimitMinutes: 45,
      examQuestionCount: 30,
      negativeScoring: false
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.data.examTimeLimitMinutes, 45);
    assert.strictEqual(res.data.examQuestionCount, 30);
    assert.strictEqual(res.data.negativeScoring, false);

    const stored = JSON.parse(globalThis.localStorage.getItem('arched_practice_config'));
    assert.strictEqual(stored.examTimeLimitMinutes, 45);
    assert.strictEqual(stored.examQuestionCount, 30);
    assert.strictEqual(stored.negativeScoring, false);
  });

  // 9. Tool 8: reset_question_bank
  await asyncTestCase('9.1: reset_question_bank enforces confirmation flag', async () => {
    const unconfirmed = await mod.executeSandboxedTool('reset_question_bank', {});
    assert.strictEqual(unconfirmed.success, false);
    assert(unconfirmed.error.includes('confirm'));

    const confirmed = await mod.executeSandboxedTool('reset_question_bank', { confirm: true });
    assert.strictEqual(confirmed.success, true);
  });

  // 10. Security Sandbox Validation
  testCase('10.1: Source code contains zero eval or new Function', () => {
    const content = fs.readFileSync(servicePath, 'utf8');
    assert(!/\beval\s*\(/.test(content), 'Must not use eval');
    assert(!/new\s+Function\s*\(/.test(content), 'Must not use new Function');
  });

  await asyncTestCase('10.2: Sandbox neutralizes prototype pollution', async () => {
    const payload = JSON.parse('{"__proto__": {"injected": true}}');
    await mod.executeSandboxedTool('query_questions', payload);
    assert.strictEqual(Object.prototype.injected, undefined);
  });

  await asyncTestCase('10.3: Disallows javascript: pseudo-protocol in image URLs', async () => {
    const res = await mod.executeSandboxedTool('add_question', {
      domain: 'visual_id',
      questionZh: '测试图片安全',
      questionEn: 'Test image security',
      optionsZh: ['A', 'B', 'C', 'D'],
      optionsEn: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanationZh: '解析',
      explanationEn: 'Explanation',
      image: 'javascript:alert("hacked")'
    });
    assert.strictEqual(res.success, false);
  });

  // 11. Deterministic Local Fallback across Intents
  await asyncTestCase('11.1: Fallback handles summary statistics prompt', async () => {
    const res = await mod.handleDeterministicFallback('题库总共有多少题？请给出统计概况');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert.strictEqual(res.toolUsed, 'get_question_bank_summary');
    assert(res.content.includes('210') || res.content.includes('五大'));
  });

  await asyncTestCase('11.2: Fallback handles search queries', async () => {
    const res = await mod.handleDeterministicFallback('搜索关于蒙德里安的考题');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert.strictEqual(res.toolUsed, 'query_questions');
    assert(res.content.includes('相关考题') || res.content.includes('蒙德里安'));
  });

  await asyncTestCase('11.3: Fallback handles practice configuration', async () => {
    const res = await mod.handleDeterministicFallback('设置模拟考题数为 25 题，倒计时 40 分钟');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert.strictEqual(res.toolUsed, 'configure_practice_settings');
    const config = JSON.parse(globalThis.localStorage.getItem('arched_practice_config'));
    assert.strictEqual(config.examQuestionCount, 25);
    assert.strictEqual(config.examTimeLimitMinutes, 40);
  });

  await asyncTestCase('11.4: Fallback handles question generation', async () => {
    const res = await mod.handleDeterministicFallback('请生成一道文艺复兴艺术考题');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert.strictEqual(res.toolUsed, 'generate_questions');
    assert(res.content.includes('生成一道') || res.content.includes('解析'));
  });

  await asyncTestCase('11.5: Fallback handles reset bank prompt with safety warning', async () => {
    const res = await mod.handleDeterministicFallback('恢复出厂重置题库');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert(res.content.includes('高风险') || res.content.includes('确认'));
  });

  await asyncTestCase('11.6: Fallback handles empty input with helpful instructions', async () => {
    const res = await mod.handleDeterministicFallback('');
    assert.strictEqual(res.mode, 'fallback_offline');
    assert(res.content.includes('离线规则引擎') || res.content.includes('指令'));
  });

  // 12. Multi-Provider Tool Declarations
  testCase('12.1: GEMINI_TOOL_DECLARATIONS and OPENAI_TOOL_DECLARATIONS are valid', () => {
    assert(Array.isArray(mod.GEMINI_TOOL_DECLARATIONS), 'GEMINI_TOOL_DECLARATIONS must be array');
    assert.strictEqual(mod.GEMINI_TOOL_DECLARATIONS.length, 8);
    assert(Array.isArray(mod.OPENAI_TOOL_DECLARATIONS), 'OPENAI_TOOL_DECLARATIONS must be array');
    assert.strictEqual(mod.OPENAI_TOOL_DECLARATIONS.length, 8);
    for (const tool of mod.OPENAI_TOOL_DECLARATIONS) {
      assert.strictEqual(tool.type, 'function');
      assert(tool.function.name);
      assert(tool.function.description);
      assert(tool.function.parameters);
    }
  });

  // 13. Settings Storage Isolation
  testCase('13.1: getAISettings and saveAISettings synchronize with arched_ai_settings', () => {
    mod.saveAISettings({
      provider: 'gemini',
      apiKey: 'AIzaSyTestKey123',
      model: 'gemini-2.5-flash',
      customEndpoint: 'https://generativelanguage.googleapis.com'
    });
    const retrieved = mod.getAISettings();
    assert.strictEqual(retrieved.provider, 'gemini');
    assert.strictEqual(retrieved.apiKey, 'AIzaSyTestKey123');
    assert.strictEqual(retrieved.model, 'gemini-2.5-flash');
    assert.strictEqual(globalThis.localStorage.getItem('aiApiKey'), 'AIzaSyTestKey123');
  });

  // 14. Universal processAgentMessage offline fallback
  await asyncTestCase('14.1: processAgentMessage activates deterministic fallback when offline', async () => {
    setNavigatorOnLine(false);
    const res = await mod.processAgentMessage('题库概况与统计');
    assert.strictEqual(res.mode, 'fallback_offline');
    setNavigatorOnLine(true);
  });

  // 15. Challenger Edge-Case Regression Suite
  await asyncTestCase('15.1: executeSandboxedTool handles BigInt and circular parameters safely', async () => {
    // BigInt parameter
    const res1 = await mod.executeSandboxedTool('query_questions', { count: 10n, limit: 5 });
    assert.strictEqual(res1.success, true);

    // Circular parameter
    const circular = { limit: 2 };
    circular.self = circular;
    const res2 = await mod.executeSandboxedTool('query_questions', circular);
    assert.strictEqual(res2.success, true);
  });

  await asyncTestCase('15.2: handleDeterministicFallback safely handles non-string inputs', async () => {
    const resNum = await mod.handleDeterministicFallback(12345);
    assert.strictEqual(resNum.role, 'assistant');
    assert.strictEqual(resNum.mode, 'fallback_offline');

    const resBool = await mod.handleDeterministicFallback(true);
    assert.strictEqual(resBool.role, 'assistant');

    const resNull = await mod.handleDeterministicFallback(null);
    assert.strictEqual(resNull.role, 'assistant');
  });

  await asyncTestCase('15.3: Fallback cleans natural language search queries without orphan characters', async () => {
    const res1 = await mod.handleDeterministicFallback('Find questions about Bauhaus');
    assert.strictEqual(res1.toolUsed, 'query_questions');
    assert(!res1.content.includes('未检索到'));

    const res2 = await mod.handleDeterministicFallback('请搜索蒙德里安');
    assert.strictEqual(res2.toolUsed, 'query_questions');
    assert(!res2.content.includes('未检索到'));
  });

  await asyncTestCase('15.4: Fallback recognizes natural English practice settings commands', async () => {
    const resTime = await mod.handleDeterministicFallback('Set exam time to 45 min');
    assert.strictEqual(resTime.toolUsed, 'configure_practice_settings');

    const resCount = await mod.handleDeterministicFallback('Set exam to 25 questions');
    assert.strictEqual(resCount.toolUsed, 'configure_practice_settings');
  });

  console.log(`\n======================================================`);
  console.log(` Results: ${passed} passed, ${failed} failed`);
  console.log(`======================================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
