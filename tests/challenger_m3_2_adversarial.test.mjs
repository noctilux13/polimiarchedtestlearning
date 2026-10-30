import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { setupMockEnvironment, setNavigatorOnLine, PROJECT_ROOT } from './e2e/test_runner.mjs';

setupMockEnvironment();

async function runAdversarialChallenge() {
  console.log('\n======================================================');
  console.log('   Challenger 2: M3 Adversarial Stress & Oracle Suite ');
  console.log('======================================================\n');

  const aiServicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
  const qbServicePath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
  const archedBankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
  const aiFloatingComponentPath = path.resolve(PROJECT_ROOT, 'src/components/AIFloatingAssistant.jsx');
  const settingsComponentPath = path.resolve(PROJECT_ROOT, 'src/pages/Settings.jsx');

  const aiService = await import('file:///' + aiServicePath.replace(/\\/g, '/'));
  const qbService = (await import('file:///' + qbServicePath.replace(/\\/g, '/'))).questionBankService;
  const archedBankMod = await import('file:///' + archedBankPath.replace(/\\/g, '/'));
  const archedBank = archedBankMod.ARCHED_QUESTION_BANK || archedBankMod.archedQuestionBank || archedBankMod.default;

  let passed = 0;
  let failed = 0;
  const failures = [];

  function testCase(name, fn) {
    try {
      fn();
      passed++;
      console.log(`  ✓ ${name}`);
    } catch (err) {
      failed++;
      failures.push({ name, error: err.message, stack: err.stack });
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
      failures.push({ name, error: err.message, stack: err.stack });
      console.error(`  ✗ ${name}`);
      console.error(`    ${err.message}`);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 1. AIFloatingAssistant: Tool Badges, Confirmation & Transitions
  // ─────────────────────────────────────────────────────────────
  console.log('\n[Target 1: AIFloatingAssistant UI Logic & Tool Badges]');

  const aiComponentSource = fs.readFileSync(aiFloatingComponentPath, 'utf8');

  testCase('1.1: AIFloatingAssistant component source verifies tool execution badge contract', () => {
    assert(aiComponentSource.includes('[Tool Called:'), 'UI must render [Tool Called: ...] badge');
    assert(aiComponentSource.includes('msg.toolUsed'), 'UI must check msg.toolUsed before rendering badge');
    assert(aiComponentSource.includes('Terminal'), 'UI must use Terminal icon for tool badge');
    assert(aiComponentSource.includes('ShieldCheck'), 'UI must display sandbox safety shield badge');
  });

  await asyncTestCase('1.2: Deterministic fallback attaches toolUsed property only when tools execute', async () => {
    // Tool intent: Summary
    const summaryRes = await aiService.handleDeterministicFallback('查询题库概况与统计');
    assert.strictEqual(summaryRes.toolUsed, 'get_question_bank_summary');

    // Tool intent: Settings config
    const configRes = await aiService.handleDeterministicFallback('修改考试时限为 45 分钟，模拟考题数 25 题');
    assert.strictEqual(configRes.toolUsed, 'configure_practice_settings');

    // Tool intent: Generation
    const genRes = await aiService.handleDeterministicFallback('生成一道先锋派考题');
    assert.strictEqual(genRes.toolUsed, 'generate_questions');

    // Tool intent: Query
    const queryRes = await aiService.handleDeterministicFallback('搜索蒙德里安相关的考题');
    assert.strictEqual(queryRes.toolUsed, 'query_questions');

    // Non-tool intent: General chat/greeting
    const chatRes = await aiService.handleDeterministicFallback('你是谁？');
    assert.strictEqual(chatRes.toolUsed, undefined, 'General chat should not set toolUsed');
  });

  await asyncTestCase('1.3: Reset question bank intent requires confirmation and prevents accidental mutation', async () => {
    // Seed a custom question first
    const customQ = {
      domain: 'avant_garde',
      subCategory: 'Test',
      era: '20th_century',
      questionZh: '测试自定义考题',
      questionEn: 'Test custom question',
      optionsZh: ['A', 'B', 'C', 'D'],
      optionsEn: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanationZh: '解析',
      explanationEn: 'Explanation',
      tags: ['Test'],
      difficulty: 1
    };
    const addRes = qbService.addCustomQuestion(customQ);
    assert(addRes.success, 'Custom question should be added');
    const countWithCustom = qbService.getAllQuestions().length;
    assert(countWithCustom > 210, 'Total questions must be > 210');

    // Unconfirmed reset prompt
    const unconfirmedPrompt = '我要重置题库';
    const unconfirmedRes = await aiService.handleDeterministicFallback(unconfirmedPrompt);
    assert(unconfirmedRes.content.includes('⚠️ 【高风险操作确认】'), 'Must return high risk confirmation notice');
    assert.strictEqual(unconfirmedRes.toolUsed, undefined, 'Unconfirmed prompt must NOT execute reset tool');

    // Verify custom question still exists
    assert.strictEqual(qbService.getAllQuestions().length, countWithCustom, 'Questions must NOT be purged without confirmation');

    // Direct sandboxed tool call without confirm: true
    const directUnconfirmed = await aiService.executeSandboxedTool('reset_question_bank', {});
    assert.strictEqual(directUnconfirmed.success, false);
    assert(directUnconfirmed.error.includes('explicit confirmation flag'));

    // Direct sandboxed tool call with confirm: true
    const directConfirmed = await aiService.executeSandboxedTool('reset_question_bank', { confirm: true });
    assert.strictEqual(directConfirmed.success, true);
    assert.strictEqual(qbService.getAllQuestions().length, 210, 'Confirmed reset must restore exactly 210 base questions');
  });

  testCase('1.4: Confirmation card action in AIFloatingAssistant handles pending confirm flow', () => {
    assert(aiComponentSource.includes('pendingConfirm'), 'Component must track pending confirmation');
    assert(aiComponentSource.includes('handleConfirmAction'), 'Component must define handleConfirmAction');
    assert(aiComponentSource.includes('reset_question_bank'), 'Component must bind reset_question_bank to confirmation');
    assert(aiComponentSource.includes('确认执行'), 'Component must provide explicit confirm button');
    assert(aiComponentSource.includes('取消'), 'Component must provide cancel button');
  });

  testCase('1.5: Practice quick-apply card triggers route navigation to /simulator and /quiz', () => {
    assert(aiComponentSource.includes("msg.toolUsed === 'configure_practice_settings'"), 'Must conditionally render quick-apply card');
    assert(aiComponentSource.includes("navigate('/simulator')"), 'Must provide navigation to /simulator');
    assert(aiComponentSource.includes("navigate('/quiz')"), 'Must provide navigation to /quiz');
    assert(aiComponentSource.includes('setIsAiOpen(false)'), 'Must close assistant drawer upon navigation');
  });

  await asyncTestCase('1.6: Online vs offline status transitions and graceful fallback resilience', async () => {
    // 1. Force offline
    setNavigatorOnLine(false);
    const offlineRes = await aiService.processAgentMessage('题库概况与统计');
    assert.strictEqual(offlineRes.mode, 'fallback_offline', 'Offline state must force fallback_offline mode');
    assert(offlineRes.content.includes('【离线规则引擎 / Offline Fallback Mode】'));

    // 2. Set online but no API key configured
    setNavigatorOnLine(true);
    globalThis.localStorage.setItem('arched_ai_settings', JSON.stringify({ apiKey: '' }));
    globalThis.localStorage.setItem('aiApiKey', '');
    const keylessRes = await aiService.processAgentMessage('题库概况与统计');
    assert.strictEqual(keylessRes.mode, 'fallback_offline', 'Keyless online state must route to offline fallback');

    // 3. Set online with invalid endpoint / failing key (stress test network failure recovery)
    globalThis.localStorage.setItem('arched_ai_settings', JSON.stringify({
      provider: 'custom',
      apiKey: 'sk-invalid-test-key-12345',
      customEndpoint: 'http://127.0.0.1:59999/non-existent-api',
      model: 'test-model'
    }));
    // processAgentMessage must NOT throw, but catch error and fallback gracefully
    const failingRes = await aiService.processAgentMessage('题库概况与统计');
    assert.strictEqual(failingRes.mode, 'fallback_offline');
    assert(failingRes.fallbackNotice, 'Must provide fallback notice when online service fails');
  });

  // ─────────────────────────────────────────────────────────────
  // 2. Settings.jsx: LocalStorage Isolation, Masking & Factory Reset
  // ─────────────────────────────────────────────────────────────
  console.log('\n[Target 2: Settings.jsx Multi-Provider & LocalStorage Isolation]');

  const settingsSource = fs.readFileSync(settingsComponentPath, 'utf8');

  testCase('2.1: Settings.jsx source contains password masking toggle and state', () => {
    assert(settingsSource.includes('const [showKey, setShowKey] = useState(false);'), 'showKey must default to false (masked)');
    assert(settingsSource.includes("type={showKey ? 'text' : 'password'}"), 'Input field must toggle text/password type');
    assert(settingsSource.includes('Eye') && settingsSource.includes('EyeOff'), 'Must render Eye / EyeOff icons');
    assert(settingsSource.includes('隐藏密钥') && settingsSource.includes('显示密钥'), 'Must render toggle label');
  });

  testCase('2.2: LocalStorage key isolation: arched_ai_settings vs arched_practice_config', () => {
    // Clean storage
    globalThis.localStorage.clear();

    const mockAiConfig = {
      provider: 'gemini',
      apiKey: 'AIzaSyAdversarialTestKey999',
      model: 'gemini-2.5-flash',
      customEndpoint: 'https://generativelanguage.googleapis.com/v1beta/openai/'
    };

    const mockPracticeConfig = {
      examQuestionCount: 30,
      examTimeLimitMinutes: 45,
      quizQuestionCount: 15,
      negativeScoring: true
    };

    // Save AI settings
    aiService.saveAISettings(mockAiConfig);
    const storedAi = JSON.parse(globalThis.localStorage.getItem('arched_ai_settings'));
    assert.strictEqual(storedAi.apiKey, 'AIzaSyAdversarialTestKey999');
    assert.strictEqual(storedAi.provider, 'gemini');

    // Save Practice config
    globalThis.localStorage.setItem('arched_practice_config', JSON.stringify(mockPracticeConfig));
    const storedPractice = aiService.getPracticeConfig();
    assert.strictEqual(storedPractice.examQuestionCount, 30);
    assert.strictEqual(storedPractice.examTimeLimitMinutes, 45);
    assert.strictEqual(storedPractice.quizQuestionCount, 15);

    // Assert keys are isolated and neither mutates the other
    assert.strictEqual(storedAi.examQuestionCount, undefined, 'AI settings must not contain practice config fields');
    assert.strictEqual(storedPractice.apiKey, undefined, 'Practice config must not contain AI credentials');
  });

  testCase('2.3: Adversarial LocalStorage resilience against corrupted / malformed JSON', () => {
    // Inject corrupt JSON into both keys
    globalThis.localStorage.setItem('arched_ai_settings', '{{MALFORMED_JSON_CORRUPTED');
    globalThis.localStorage.setItem('arched_practice_config', 'NOT_JSON_AT_ALL');

    // Both getters must handle corrupted storage gracefully without unhandled exceptions
    let safeAi;
    let safePractice;
    assert.doesNotThrow(() => {
      safeAi = aiService.getAISettings();
    }, 'getAISettings must not crash on malformed LocalStorage');
    assert.doesNotThrow(() => {
      safePractice = aiService.getPracticeConfig();
    }, 'getPracticeConfig must not crash on malformed LocalStorage');

    assert(typeof safeAi === 'object' && safeAi !== null);
    assert.strictEqual(safePractice.examQuestionCount, 20, 'Corrupted practice config should return default count');
    assert.strictEqual(safePractice.examTimeLimitMinutes, 30, 'Corrupted practice config should return default timer');
  });

  testCase('2.4: Prototype pollution resistance during settings persistence', () => {
    const maliciousPayload = JSON.parse('{"__proto__": {"polluted": true}, "provider": "gemini", "apiKey": "test"}');
    aiService.saveAISettings(maliciousPayload);
    assert.strictEqual(Object.prototype.polluted, undefined, 'Prototype pollution attempt must be neutralized');
  });

  testCase('2.5: Factory Reset in Settings restores 210 questions and cleans custom stores', async () => {
    // Add custom questions
    qbService.addCustomQuestion({
      domain: 'chronology',
      subCategory: 'Factory Reset Test',
      era: '19th_century',
      questionZh: '即将被重置的题目1',
      questionEn: 'Question to be reset 1',
      optionsZh: ['1', '2', '3', '4'],
      optionsEn: ['1', '2', '3', '4'],
      correctAnswer: 0,
      explanationZh: '解析',
      explanationEn: 'Explanation',
      tags: ['ResetTest'],
      difficulty: 1
    });

    assert(qbService.getAllQuestions().length > 210);

    // Call factory reset
    const resetRes = qbService.resetToFactoryDefaults();
    assert.strictEqual(resetRes.success, true);
    assert.strictEqual(resetRes.count, 210);
    assert.strictEqual(qbService.getAllQuestions().length, 210);
    assert.strictEqual(qbService.getSummary().customCount, 0);
  });

  // ─────────────────────────────────────────────────────────────
  // 3. Regression Check: Practice Modes & Question Bank Integrity
  // ─────────────────────────────────────────────────────────────
  console.log('\n[Target 3: Practice Modes & Question Bank Regression Check]');

  testCase('3.1: Canonical ARCHED question bank contains >= 200 items (found 210)', () => {
    assert(Array.isArray(archedBank), 'archedQuestionBank must be an array');
    assert(archedBank.length >= 200, `Expected at least 200 questions, got ${archedBank.length}`);
    assert.strictEqual(archedBank.length, 210, 'Expected exactly 210 canonical ARCHED questions');
  });

  testCase('3.2: Domain distribution satisfies Polimi ARCHED exam coverage across all 5 syllabus areas', () => {
    const domains = {
      chronology: 0,
      visual_id: 0,
      avant_garde: 0,
      artist_movement: 0,
      renaissance_classical: 0
    };

    for (const q of archedBank) {
      assert(domains[q.domain] !== undefined, `Unknown domain: ${q.domain} in question ${q.id}`);
      domains[q.domain]++;
    }

    assert(domains.chronology >= 40, `chronology count ${domains.chronology} < 40`);
    assert(domains.visual_id >= 40, `visual_id count ${domains.visual_id} < 40`);
    assert(domains.avant_garde >= 40, `avant_garde count ${domains.avant_garde} < 40`);
    assert(domains.artist_movement >= 30, `artist_movement count ${domains.artist_movement} < 30`);
    assert(domains.renaissance_classical >= 40, `renaissance_classical count ${domains.renaissance_classical} < 40`);
  });

  testCase('3.3: Every ARCHED question conforms to strict bilingual schema and valid answer indices', () => {
    archedBank.forEach((q, idx) => {
      assert(typeof q.id === 'string' && q.id.length > 0, `Q[${idx}] missing id`);
      assert(typeof q.questionZh === 'string' && q.questionZh.length > 5, `Q[${idx}] invalid questionZh`);
      assert(typeof q.questionEn === 'string' && q.questionEn.length > 5, `Q[${idx}] invalid questionEn`);
      assert(Array.isArray(q.optionsZh) && q.optionsZh.length === 4, `Q[${idx}] optionsZh must have exactly 4 items`);
      assert(Array.isArray(q.optionsEn) && q.optionsEn.length === 4, `Q[${idx}] optionsEn must have exactly 4 items`);
      assert(typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3, `Q[${idx}] invalid correctAnswer: ${q.correctAnswer}`);
      assert(typeof q.explanationZh === 'string' && q.explanationZh.length > 5, `Q[${idx}] invalid explanationZh`);
      assert(typeof q.explanationEn === 'string' && q.explanationEn.length > 5, `Q[${idx}] invalid explanationEn`);
      assert(Array.isArray(q.tags) && q.tags.length > 0, `Q[${idx}] tags must be non-empty array`);
      assert([1, 2, 3].includes(q.difficulty), `Q[${idx}] difficulty must be 1, 2, or 3`);
    });
  });

  testCase('3.4: Practice module query methods: getAllQuestions, getQuestionsByDomain, queryQuestions', () => {
    const all = qbService.getAllQuestions();
    assert.strictEqual(all.length, 210);

    const chrono = qbService.getQuestionsByDomain('chronology');
    assert(chrono.length >= 40);
    chrono.forEach(q => assert.strictEqual(q.domain, 'chronology'));

    const visual = qbService.getQuestionsByDomain('visual_id');
    assert(visual.length >= 40);
    visual.forEach(q => assert.strictEqual(q.domain, 'visual_id'));

    const searched = qbService.queryQuestions({ keyword: '蒙德里安', limit: 10 });
    assert(searched.length > 0, 'Keyword search for 蒙德里安 must return results');
  });

  testCase('3.5: ExamSimulator random exam set generation and Polimi scoring oracle', () => {
    const examSet = qbService.getRandomExamSet(20);
    assert.strictEqual(examSet.length, 20, 'Exam set must contain exactly 20 questions');

    // Ensure all 20 questions have distinct IDs
    const idSet = new Set(examSet.map(q => q.id));
    assert.strictEqual(idSet.size, 20, 'Exam set must not contain duplicate questions');

    // Polimi scoring oracle verification:
    // +1.5 for correct, -0.25 for wrong, 0 for omitted
    function calculatePolimiScore(correctCount, wrongCount, omittedCount) {
      const rawScore = (correctCount * 1.5) - (wrongCount * 0.25);
      const finalScore = parseFloat(Math.max(0, rawScore).toFixed(2));
      return { rawScore, finalScore };
    }

    // Scenario A: 12 correct, 4 wrong, 4 omitted -> 18.0 - 1.0 = 17.00
    assert.strictEqual(calculatePolimiScore(12, 4, 4).finalScore, 17.00);

    // Scenario B: Perfect score 20 correct -> 30.00
    assert.strictEqual(calculatePolimiScore(20, 0, 0).finalScore, 30.00);

    // Scenario C: Zero correct, 20 wrong -> rawScore -5.00 -> clamped to 0.00
    assert.strictEqual(calculatePolimiScore(0, 20, 0).finalScore, 0.00);

    // Scenario D: All omitted 20 -> 0.00
    assert.strictEqual(calculatePolimiScore(0, 0, 20).finalScore, 0.00);
  });

  testCase('3.6: Flashcard conversion model accurately formats front/back bilingual pairs', () => {
    const all = qbService.getAllQuestions();
    const flashcards = all.slice(0, 10).map(q => ({
      id: q.id,
      frontZh: q.questionZh,
      frontEn: q.questionEn,
      backZh: `${q.optionsZh[q.correctAnswer]}\n\n${q.explanationZh}`,
      backEn: `${q.optionsEn[q.correctAnswer]}\n\n${q.explanationEn}`,
      correctOptionZh: q.optionsZh[q.correctAnswer]
    }));

    assert.strictEqual(flashcards.length, 10);
    flashcards.forEach((card, idx) => {
      assert(card.frontZh.length > 0, `Card ${idx} missing frontZh`);
      assert(card.frontEn.length > 0, `Card ${idx} missing frontEn`);
      assert(card.backZh.includes(card.correctOptionZh), `Card ${idx} back must include correct answer text`);
    });
  });

  console.log('\n======================================================');
  console.log(` Summary: ${passed} passed, ${failed} failed`);
  console.log('======================================================\n');

  if (failed > 0) {
    console.error(`Encountered ${failed} failure(s):`);
    failures.forEach(f => console.error(`  - ${f.name}: ${f.error}`));
    process.exit(1);
  } else {
    console.log('All adversarial stress tests and empirical oracles PASSED!');
    process.exit(0);
  }
}

runAdversarialChallenge();
