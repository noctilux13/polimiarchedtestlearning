import assert from 'assert';
import path from 'path';
import { setupMockEnvironment, PROJECT_ROOT } from './e2e/test_runner.mjs';

setupMockEnvironment();

async function runChallengerStressHarness() {
  console.log('\n================================================================');
  console.log('   Empirical Challenger: Deep Stress Harness for M3 Remediation ');
  console.log('================================================================\n');

  const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
  const mod = await import('file:///' + servicePath.replace(/\\/g, '/'));

  let totalChecks = 0;
  let passedChecks = 0;
  const failures = [];

  async function asyncCheck(name, fn) {
    totalChecks++;
    try {
      await fn();
      console.log(`  [PASS] ${name}`);
      passedChecks++;
    } catch (err) {
      console.error(`  [FAIL] ${name}: ${err.message}`);
      failures.push({ name, error: err.message });
    }
  }

  // -------------------------------------------------------------
  // TEST SUITE 1: BUG-M3-01 Stress Probes (executeSandboxedTool)
  // -------------------------------------------------------------
  console.log('--- Suite 1: Stress-testing executeSandboxedTool with Extreme Inputs ---');

  await asyncCheck('1.1 Large BigInt beyond Number.isSafeInteger (e.g. 2^64)', async () => {
    const hugeBigInt = 18446744073709551615n;
    const res = await mod.executeSandboxedTool('query_questions', { id: hugeBigInt, count: 10n });
    assert.strictEqual(typeof res, 'object');
    assert.strictEqual(res.success, true);
  });

  await asyncCheck('1.2 Complex multi-node circular reference graph', async () => {
    const nodeA = { name: 'A' };
    const nodeB = { name: 'B', toA: nodeA };
    const nodeC = { name: 'C', toB: nodeB, toA: nodeA };
    nodeA.toC = nodeC;
    const res = await mod.executeSandboxedTool('query_questions', { graph: nodeA, limit: 5 });
    assert.strictEqual(typeof res, 'object');
    assert.strictEqual(res.success, true);
  });

  await asyncCheck('1.3 Degenerate non-object and primitive rawParams', async () => {
    const primitives = [null, undefined, 42, true, false, 'arbitrary string', Symbol('sym')];
    for (const prim of primitives) {
      const res = await mod.executeSandboxedTool('query_questions', prim);
      assert.strictEqual(typeof res, 'object');
      assert.strictEqual(res.success, true);
    }
  });

  await asyncCheck('1.4 Throwing getter in rawParams is caught safely without unhandled crash', async () => {
    const evilObj = {};
    Object.defineProperty(evilObj, 'boom', {
      get() {
        throw new Error('Exploding getter property');
      },
      enumerable: true
    });
    const res = await mod.executeSandboxedTool('query_questions', evilObj);
    assert.strictEqual(typeof res, 'object');
    assert.strictEqual(res.success, false);
    assert.ok(res.error.includes('Exploding getter property') || res.error.includes('serialization'));
  });

  await asyncCheck('1.5 Frozen and sealed rawParams objects', async () => {
    const frozen = Object.freeze({ limit: 3, keyword: 'Bauhaus' });
    const sealed = Object.seal({ limit: 4, keyword: 'Mondrian' });
    const res1 = await mod.executeSandboxedTool('query_questions', frozen);
    const res2 = await mod.executeSandboxedTool('query_questions', sealed);
    assert.strictEqual(res1.success, true);
    assert.strictEqual(res2.success, true);
  });

  // -------------------------------------------------------------
  // TEST SUITE 2: BUG-M3-02 Stress Probes (handleDeterministicFallback types)
  // -------------------------------------------------------------
  console.log('\n--- Suite 2: Stress-testing handleDeterministicFallback with Wild Types ---');

  const wildTypes = [
    { label: 'number zero', val: 0 },
    { label: 'negative number', val: -999 },
    { label: 'NaN', val: NaN },
    { label: 'Infinity', val: Infinity },
    { label: 'boolean true', val: true },
    { label: 'boolean false', val: false },
    { label: 'null', val: null },
    { label: 'undefined', val: undefined },
    { label: 'array with string', val: ['summary'] },
    { label: 'empty array', val: [] },
    { label: 'plain object', val: { query: 'test' } },
    { label: 'BigInt', val: 999999999999999999n }
  ];

  for (const wt of wildTypes) {
    await asyncCheck(`2.1 Fallback handles ${wt.label}`, async () => {
      const res = await mod.handleDeterministicFallback(wt.val);
      assert.strictEqual(typeof res, 'object');
      assert.strictEqual(res.role, 'assistant');
      assert.ok(typeof res.content === 'string' && res.content.length > 0);
    });
  }

  // -------------------------------------------------------------
  // TEST SUITE 3: BUG-M3-03 Natural Language Search Keyword Extraction
  // -------------------------------------------------------------
  console.log('\n--- Suite 3: Empirical Oracles for Natural Language Search Keywords ---');

  const verifiedSearchCases = [
    { input: 'Find questions about the Renaissance' },
    { input: 'Show me questions about Brunelleschi' },
    { input: 'Search for some questions on Bauhaus' },
    { input: 'Find questions about Bauhaus' },
    { input: 'Questions about Brunelleschi' },
    { input: 'Search for Mondrian' },
    { input: '请搜索蒙德里安' },
    { input: '帮我查找关于布鲁内莱斯基的题目' },
    { input: '帮我查一下关于蒙德里安的考题' },
    { input: '请帮我寻找布鲁内莱斯基相关的试题' },
    { input: '搜索文艺复兴试题' }
  ];

  for (const sc of verifiedSearchCases) {
    await asyncCheck(`3.1 Search query: "${sc.input}"`, async () => {
      const res = await mod.handleDeterministicFallback(sc.input);
      assert.strictEqual(res.toolUsed, 'query_questions', `Expected toolUsed="query_questions" but got "${res.toolUsed}"`);
      assert.ok(!res.content.includes('未检索到包含'), `Failed search for "${sc.input}". Content: ${res.content.split('\n')[0]}`);
      assert.ok(res.content.includes('相关考题'), `Expected results list for "${sc.input}"`);
    });
  }

  // -------------------------------------------------------------
  // TEST SUITE 4: BUG-M3-04 Practice Settings Phrasing & Clamping
  // -------------------------------------------------------------
  console.log('\n--- Suite 4: Empirical Oracles for Practice Settings Recognition ---');

  const settingsPhrases = [
    {
      input: 'Set exam time to 45 min',
      checkCfg: (cfg) => cfg.examTimeLimitMinutes === 45
    },
    {
      input: 'Set exam to 25 questions',
      checkCfg: (cfg) => cfg.examQuestionCount === 25
    },
    {
      input: 'Set quiz to 15 questions',
      checkCfg: (cfg) => cfg.quizQuestionCount === 15
    },
    {
      input: 'Exam time to 60 minutes',
      checkCfg: (cfg) => cfg.examTimeLimitMinutes === 60
    },
    {
      input: 'Timer to 40 min',
      checkCfg: (cfg) => cfg.examTimeLimitMinutes === 40
    },
    {
      input: 'Set time limit to 50 min and exam to 30 questions',
      checkCfg: (cfg) => cfg.examTimeLimitMinutes === 50 && cfg.examQuestionCount === 30
    },
    {
      input: '设置模拟考时限为 45 分钟，题数 30 题',
      checkCfg: (cfg) => cfg.examTimeLimitMinutes === 45 && cfg.examQuestionCount === 30
    },
    {
      input: '关闭倒扣分',
      checkCfg: (cfg) => cfg.negativeScoring === false
    },
    {
      input: 'Negative scoring off',
      checkCfg: (cfg) => cfg.negativeScoring === false
    },
    {
      input: '开启倒扣分',
      checkCfg: (cfg) => cfg.negativeScoring === true
    }
  ];

  for (const sp of settingsPhrases) {
    await asyncCheck(`4.1 Settings command: "${sp.input}"`, async () => {
      const res = await mod.handleDeterministicFallback(sp.input);
      assert.strictEqual(res.toolUsed, 'configure_practice_settings', `Expected tool configure_practice_settings, got "${res.toolUsed}"`);
      const cfg = mod.getPracticeConfig();
      assert.ok(sp.checkCfg(cfg), `Configuration oracle check failed for input "${sp.input}". Actual config: ${JSON.stringify(cfg)}`);
    });
  }

  // Clamping check for out-of-bounds parameters
  await asyncCheck('4.2 Clamping: extreme exam time (e.g. 500 min clamped to 180)', async () => {
    await mod.handleDeterministicFallback('Set exam time to 500 min');
    const cfg = mod.getPracticeConfig();
    assert.strictEqual(cfg.examTimeLimitMinutes, 180);
  });

  await asyncCheck('4.3 Clamping: negative or sub-minimum exam time (e.g. 1 min clamped to 5)', async () => {
    await mod.handleDeterministicFallback('Set exam time to 1 min');
    const cfg = mod.getPracticeConfig();
    assert.strictEqual(cfg.examTimeLimitMinutes, 5);
  });

  await asyncCheck('4.4 Clamping: extreme exam count (e.g. 500 questions clamped to 100)', async () => {
    await mod.handleDeterministicFallback('Set exam to 500 questions');
    const cfg = mod.getPracticeConfig();
    assert.strictEqual(cfg.examQuestionCount, 100);
  });

  // -------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------
  console.log('\n================================================================');
  console.log(` Challenger Remediation Stress Harness: ${passedChecks}/${totalChecks} PASSED`);
  if (failures.length > 0) {
    console.log(` FAILURES: ${failures.length}`);
    for (const f of failures) {
      console.log(`   - ${f.name}: ${f.error}`);
    }
  }
  console.log('================================================================\n');

  if (failures.length > 0) {
    throw new Error(`${failures.length} stress checks failed.`);
  }
}

runChallengerStressHarness().catch(err => {
  console.error('Fatal harness error:', err);
  process.exit(1);
});
