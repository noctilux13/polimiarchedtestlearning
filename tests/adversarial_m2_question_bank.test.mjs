/**
 * tests/adversarial_m2_question_bank.test.mjs
 * 
 * Empirical & Adversarial Stress Test Suite for Milestone M2.
 * Validates the 210 ARCHED questions and questionBankService.js.
 * 
 * Roles: critic, specialist (Empirical Challenger)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// =========================================================================
// Mock LocalStorage Implementation for Adversarial Testing
// =========================================================================
class MockLocalStorage {
  constructor() {
    this.store = new Map();
    this.shouldThrowQuota = false;
    this.shouldThrowSecurity = false;
  }

  getItem(key) {
    if (this.shouldThrowSecurity) {
      throw new Error('SecurityError: The operation is insecure.');
    }
    return this.store.has(key) ? this.store.get(key) : null;
  }

  setItem(key, value) {
    if (this.shouldThrowSecurity) {
      throw new Error('SecurityError: The operation is insecure.');
    }
    if (this.shouldThrowQuota) {
      const err = new Error('QuotaExceededError: The quota has been exceeded.');
      err.name = 'QuotaExceededError';
      throw err;
    }
    this.store.set(key, String(value));
  }

  removeItem(key) {
    if (this.shouldThrowSecurity) {
      throw new Error('SecurityError: The operation is insecure.');
    }
    this.store.delete(key);
  }

  clear() {
    if (this.shouldThrowSecurity) {
      throw new Error('SecurityError: The operation is insecure.');
    }
    this.store.clear();
  }

  get length() {
    return this.store.size;
  }

  key(index) {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }
}

// =========================================================================
// Test Runner Harness
// =========================================================================
export async function runAdversarialM2Suite() {
  console.log('\n======================================================');
  console.log('   M2 CHALLENGER ADVERSARIAL & EMPIRICAL HARNESS      ');
  console.log('======================================================\n');

  let passedTests = 0;
  let failedTests = 0;
  const findings = [];

  function assert(condition, message) {
    if (!condition) {
      throw new Error(`Assertion Failed: ${message}`);
    }
  }

  function assertEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(`Assertion Failed [${message}]: Expected '${expected}', but got '${actual}'`);
    }
  }

  async function testCase(name, fn) {
    try {
      await fn();
      passedTests++;
      console.log(`  \x1b[32m✓\x1b[0m ${name}`);
    } catch (err) {
      failedTests++;
      console.error(`  \x1b[31m✗\x1b[0m ${name}`);
      console.error(`    \x1b[33mError: ${err.message}\x1b[0m`);
      findings.push({ name, error: err.message, stack: err.stack });
    }
  }

  // Setup global mock localStorage for questionBankService
  const mockStorage = new MockLocalStorage();
  globalThis.localStorage = mockStorage;

  // Import target modules
  const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
  const dataPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');

  const qbModule = await import('file:///' + qbPath.replace(/\\/g, '/'));
  const dataModule = await import('file:///' + dataPath.replace(/\\/g, '/'));

  const questionBankService = qbModule.questionBankService || qbModule.default;
  const ARCHED_QUESTION_BANK = dataModule.ARCHED_QUESTION_BANK;
  const getCustomQuestions = qbModule.getCustomQuestions;

  // Reset storage before tests
  mockStorage.clear();

  // =========================================================================
  // Section 1: Question Bank Static & Semantic Validation (210 Questions)
  // =========================================================================
  console.log('\n--- Section 1: Question Bank Deep Schema & Asset Validation ---');

  await testCase('1.1: Exact question count is 210', () => {
    assertEqual(ARCHED_QUESTION_BANK.length, 210, 'Total questions');
  });

  await testCase('1.2: Question IDs are strictly sequential arched_001 to arched_210 without gaps, duplicates, or extra digits', () => {
    const seenIds = new Set();
    const badIds = [];
    for (let i = 1; i <= 210; i++) {
      const expectedId = `arched_${String(i).padStart(3, '0')}`;
      const q = ARCHED_QUESTION_BANK[i - 1];
      assert(q, `Question at index ${i - 1} must exist`);
      if (q.id !== expectedId) {
        badIds.push({ index: i - 1, expected: expectedId, actual: q.id });
      }
      seenIds.add(q.id);
    }
    if (badIds.length > 0) {
      throw new Error(`Found ${badIds.length} malformed question IDs: ${JSON.stringify(badIds)}`);
    }
  });

  await testCase('1.3: All 210 questions have required schema keys without undefined/null properties', () => {
    const requiredKeys = [
      'id', 'domain', 'subCategory', 'era',
      'questionZh', 'questionEn',
      'optionsZh', 'optionsEn',
      'correctAnswer',
      'explanationZh', 'explanationEn',
      'tags', 'difficulty'
    ];

    ARCHED_QUESTION_BANK.forEach((q, idx) => {
      requiredKeys.forEach(key => {
        assert(q[key] !== undefined, `Question ${q.id || idx} missing required key '${key}'`);
        assert(q[key] !== null, `Question ${q.id || idx} has null value for key '${key}'`);
      });
    });
  });

  await testCase('1.4: String fields have non-empty, trimmed content without placeholder artifacts', () => {
    const stringKeys = ['id', 'domain', 'subCategory', 'era', 'questionZh', 'questionEn', 'explanationZh', 'explanationEn'];
    const forbiddenPlaceholders = ['[TBD]', 'TODO', 'undefined', 'null', '[object Object]'];

    ARCHED_QUESTION_BANK.forEach(q => {
      stringKeys.forEach(k => {
        const val = q[k];
        assert(typeof val === 'string', `${q.id}: ${k} must be string`);
        const trimmed = val.trim();
        assert(trimmed.length > 0, `${q.id}: ${k} cannot be empty string`);
        forbiddenPlaceholders.forEach(ph => {
          assert(!trimmed.includes(ph), `${q.id}: ${k} contains forbidden placeholder '${ph}'`);
        });
      });
    });
  });

  await testCase('1.5: Bilingual optionsZh and optionsEn have exactly 4 non-empty options each', () => {
    ARCHED_QUESTION_BANK.forEach(q => {
      assert(Array.isArray(q.optionsZh), `${q.id}: optionsZh must be an array`);
      assertEqual(q.optionsZh.length, 4, `${q.id}: optionsZh count`);
      assert(Array.isArray(q.optionsEn), `${q.id}: optionsEn must be an array`);
      assertEqual(q.optionsEn.length, 4, `${q.id}: optionsEn count`);

      q.optionsZh.forEach((opt, idx) => {
        assert(typeof opt === 'string' && opt.trim().length > 0, `${q.id}: optionsZh[${idx}] is empty`);
      });
      q.optionsEn.forEach((opt, idx) => {
        assert(typeof opt === 'string' && opt.trim().length > 0, `${q.id}: optionsEn[${idx}] is empty`);
      });
    });
  });

  await testCase('1.6: Option uniqueness: No duplicate options within any question (optionsZh and optionsEn)', () => {
    ARCHED_QUESTION_BANK.forEach(q => {
      const uniqueZh = new Set(q.optionsZh.map(s => s.trim().toLowerCase()));
      assertEqual(uniqueZh.size, 4, `${q.id}: optionsZh has duplicate options`);

      const uniqueEn = new Set(q.optionsEn.map(s => s.trim().toLowerCase()));
      assertEqual(uniqueEn.size, 4, `${q.id}: optionsEn has duplicate options`);
    });
  });

  await testCase('1.7: correctAnswer is strictly an integer between 0 and 3', () => {
    ARCHED_QUESTION_BANK.forEach(q => {
      assert(Number.isInteger(q.correctAnswer), `${q.id}: correctAnswer must be an integer`);
      assert(q.correctAnswer >= 0 && q.correctAnswer <= 3, `${q.id}: correctAnswer must be 0, 1, 2, or 3`);
    });
  });

  await testCase('1.8: difficulty is strictly 1, 2, or 3 with reasonable distribution', () => {
    const diffCounts = { 1: 0, 2: 0, 3: 0 };
    ARCHED_QUESTION_BANK.forEach(q => {
      assert([1, 2, 3].includes(q.difficulty), `${q.id}: invalid difficulty ${q.difficulty}`);
      diffCounts[q.difficulty]++;
    });
    assert(diffCounts[1] >= 20, 'Difficulty 1 should have sufficient representation');
    assert(diffCounts[2] >= 50, 'Difficulty 2 should have substantive representation');
    assert(diffCounts[3] >= 5, 'Difficulty 3 should have advanced questions');
  });

  await testCase('1.9: tags is a non-empty array of valid strings', () => {
    ARCHED_QUESTION_BANK.forEach(q => {
      assert(Array.isArray(q.tags), `${q.id}: tags must be array`);
      assert(q.tags.length > 0, `${q.id}: tags array cannot be empty`);
      q.tags.forEach(t => {
        assert(typeof t === 'string' && t.trim().length > 0, `${q.id}: tag must be non-empty string`);
      });
    });
  });

  await testCase('1.10: 5 Syllabus domains have >= 30 questions each', () => {
    const VALID_DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
    const counts = {};
    VALID_DOMAINS.forEach(d => counts[d] = 0);

    ARCHED_QUESTION_BANK.forEach(q => {
      assert(VALID_DOMAINS.includes(q.domain), `${q.id}: invalid domain '${q.domain}'`);
      counts[q.domain]++;
    });

    VALID_DOMAINS.forEach(d => {
      assert(counts[d] >= 30, `Domain '${d}' count ${counts[d]} < 30`);
    });
  });

  await testCase('1.11: Image URLs have valid web protocols', () => {
    ARCHED_QUESTION_BANK.forEach(q => {
      if (q.image) {
        assert(typeof q.image === 'string', `${q.id}: image must be string`);
        const valid = q.image.startsWith('https://') || q.image.startsWith('http://') || q.image.startsWith('/');
        assert(valid, `${q.id}: image URL format invalid: ${q.image}`);
      }
    });
  });

  await testCase('1.12: Fallback images strictly exist as real files on disk with size > 0', () => {
    const publicDir = path.resolve(PROJECT_ROOT, 'public');
    const missing = [];

    ARCHED_QUESTION_BANK.forEach(q => {
      if (q.fallbackImage) {
        assert(typeof q.fallbackImage === 'string', `${q.id}: fallbackImage must be string`);
        const relativePath = q.fallbackImage.replace(/^\//, '');
        const fullDiskPath = path.resolve(publicDir, relativePath);
        if (!fs.existsSync(fullDiskPath)) {
          missing.push({ id: q.id, path: q.fallbackImage });
        } else {
          const stat = fs.statSync(fullDiskPath);
          assert(stat.size > 0, `${q.id}: fallbackImage is 0 bytes: ${fullDiskPath}`);
        }
      }
    });

    if (missing.length > 0) {
      throw new Error(`Found ${missing.length} missing fallback images on disk: ${JSON.stringify(missing.slice(0, 5))}...`);
    }
  });

  await testCase('1.13: Visual Stimulus Coverage in visual_id domain', () => {
    const visualQuestions = ARCHED_QUESTION_BANK.filter(q => q.domain === 'visual_id');
    assertEqual(visualQuestions.length, 45, 'visual_id questions count');

    const withoutImg = visualQuestions.filter(q => !q.image);
    if (withoutImg.length > 0) {
      throw new Error(`${withoutImg.length} of 45 visual_id questions lack image stimulus: ${withoutImg.map(q => q.id).join(', ')}`);
    }
  });

  // =========================================================================
  // Section 2: questionBankService Query & Filter Stress Testing
  // =========================================================================
  console.log('\n--- Section 2: questionBankService Query & Filter Stress Testing ---');

  await testCase('2.1: getAllQuestions() returns pristine 210 questions', () => {
    mockStorage.clear();
    const all = questionBankService.getAllQuestions();
    assertEqual(all.length, 210, 'getAllQuestions count');
  });

  await testCase('2.2: getQuestionsByDomain handles case-insensitivity and whitespace', () => {
    const upper = questionBankService.getQuestionsByDomain('CHRONOLOGY');
    const lower = questionBankService.getQuestionsByDomain('chronology');
    const padded = questionBankService.getQuestionsByDomain('  chronology  ');
    assertEqual(upper.length, 40, 'Upper case domain');
    assertEqual(lower.length, 40, 'Lower case domain');
    assertEqual(padded.length, 40, 'Padded domain');
  });

  await testCase('2.3: getQuestionsByDomain boundary inputs return empty array', () => {
    assertEqual(questionBankService.getQuestionsByDomain(null).length, 0, 'null domain');
    assertEqual(questionBankService.getQuestionsByDomain(undefined).length, 0, 'undefined domain');
    assertEqual(questionBankService.getQuestionsByDomain('').length, 0, 'empty domain');
    assertEqual(questionBankService.getQuestionsByDomain(12345).length, 0, 'number domain');
    assertEqual(questionBankService.getQuestionsByDomain('non_existent').length, 0, 'non-existent domain');
  });

  await testCase('2.4: getQuestionsByDifficulty handles 1, 2, 3 and numeric strings', () => {
    const d1 = questionBankService.getQuestionsByDifficulty(1);
    const d1Str = questionBankService.getQuestionsByDifficulty('1');
    assertEqual(d1.length, d1Str.length, 'numeric vs string difficulty 1');
    assert(d1.length > 0, 'difficulty 1 questions exist');
  });

  await testCase('2.5: getQuestionsByDifficulty boundary inputs return empty array', () => {
    assertEqual(questionBankService.getQuestionsByDifficulty(null).length, 0, 'null diff');
    assertEqual(questionBankService.getQuestionsByDifficulty(undefined).length, 0, 'undefined diff');
    assertEqual(questionBankService.getQuestionsByDifficulty(0).length, 0, '0 diff');
    assertEqual(questionBankService.getQuestionsByDifficulty(4).length, 0, '4 diff');
    assertEqual(questionBankService.getQuestionsByDifficulty(-1).length, 0, '-1 diff');
    assertEqual(questionBankService.getQuestionsByDifficulty('hard').length, 0, 'string diff');
  });

  await testCase('2.6: queryQuestions compound filter with domain, difficulty, and tag', () => {
    const res = questionBankService.queryQuestions({
      domain: 'renaissance_classical',
      difficulty: 1,
      tag: 'Renaissance'
    });
    assert(Array.isArray(res), 'queryQuestions returns array');
    res.forEach(q => {
      assertEqual(q.domain, 'renaissance_classical', 'domain matched');
      assertEqual(q.difficulty, 1, 'difficulty matched');
      assert(q.tags.some(t => t.toLowerCase() === 'renaissance'), 'tag matched');
    });
  });

  await testCase('2.7: queryQuestions keyword search matches Chinese and English fields', () => {
    const zhResults = questionBankService.queryQuestions({ keyword: '哥特' });
    assert(zhResults.length > 0, 'Chinese keyword search');

    const enResults = questionBankService.queryQuestions({ keyword: 'Bauhaus' });
    assert(enResults.length > 0, 'English keyword search');
  });

  await testCase('2.8: queryQuestions limit clamping (negative, 0, oversized)', () => {
    const negLimit = questionBankService.queryQuestions({ limit: -5 });
    assertEqual(negLimit.length, 1, 'Negative limit clamped to min 1');

    const zeroLimit = questionBankService.queryQuestions({ limit: 0 });
    // In questionBankService.js: limit || 10 gives 10 for 0
    assertEqual(zeroLimit.length, 10, 'Limit 0 falls back to 10');

    const overLimit = questionBankService.queryQuestions({ limit: 999999 });
    assertEqual(overLimit.length, 210, 'Oversized limit returns all 210 questions');
  });

  await testCase('2.9: queryQuestions handles undefined or empty filter without error', () => {
    const resNoArgs = questionBankService.queryQuestions();
    assertEqual(resNoArgs.length, 210, 'No args queryQuestions');

    const resEmptyObj = questionBankService.queryQuestions({});
    assertEqual(resEmptyObj.length, 210, 'Empty object queryQuestions');
  });

  await testCase('2.10: queryQuestions null filter vulnerability probe', () => {
    try {
      const res = questionBankService.queryQuestions(null);
      assert(Array.isArray(res), 'queryQuestions(null) handled safely');
    } catch (err) {
      throw new Error(`CRITICAL/HIGH: queryQuestions(null) throws unhandled exception: ${err.message}`);
    }
  });

  await testCase('2.11: getSummary returns accurate statistics', () => {
    const summary = questionBankService.getSummary();
    assertEqual(summary.total, 210, 'Summary total');
    assertEqual(summary.customCount, 0, 'Summary custom count');
    assertEqual(summary.byDomain.chronology, 40, 'Summary chronology');
    assertEqual(summary.byDomain.visual_id, 45, 'Summary visual_id');
    assertEqual(summary.byDomain.avant_garde, 45, 'Summary avant_garde');
    assertEqual(summary.byDomain.artist_movement, 35, 'Summary artist_movement');
    assertEqual(summary.byDomain.renaissance_classical, 45, 'Summary renaissance_classical');
    assert(Array.isArray(summary.tags) && summary.tags.length > 50, 'Summary tags list');
  });

  // =========================================================================
  // Section 3: getRandomExamSet Stress & Distribution
  // =========================================================================
  console.log('\n--- Section 3: getRandomExamSet Stress & Distribution ---');

  await testCase('3.1: getRandomExamSet() default returns exactly 20 questions', () => {
    const exam = questionBankService.getRandomExamSet();
    assertEqual(exam.length, 20, 'Default count is 20');
  });

  await testCase('3.2: getRandomExamSet with various counts (1, 5, 10, 20, 50, 100, 210)', () => {
    [1, 5, 10, 20, 50, 100, 210].forEach(cnt => {
      const set = questionBankService.getRandomExamSet(cnt);
      assertEqual(set.length, cnt, `Exam set count ${cnt}`);
      const uniqueIds = new Set(set.map(q => q.id));
      assertEqual(uniqueIds.size, cnt, `Zero duplicates in set of ${cnt}`);
    });
  });

  await testCase('3.3: getRandomExamSet count 0 returns 20 questions (documented fallback)', () => {
    const set0 = questionBankService.getRandomExamSet(0);
    assertEqual(set0.length, 20, 'Count 0 defaults to 20');

    const setNeg = questionBankService.getRandomExamSet(-10);
    assertEqual(setNeg.length, 1, 'Negative count clamped to 1');
  });

  await testCase('3.4: getRandomExamSet count > 210 caps at available pool without duplicates', () => {
    const set300 = questionBankService.getRandomExamSet(300);
    assertEqual(set300.length, 210, 'Set capped at total pool size 210');
    const uniqueIds = new Set(set300.map(q => q.id));
    assertEqual(uniqueIds.size, 210, 'No duplicates when overflowing available questions');
  });

  await testCase('3.5: getRandomExamSet non-numeric inputs (null, undefined, string)', () => {
    const setNull = questionBankService.getRandomExamSet(null);
    assertEqual(setNull.length, 20, 'Null count defaults to 20');

    const setUndef = questionBankService.getRandomExamSet(undefined);
    assertEqual(setUndef.length, 20, 'Undefined count defaults to 20');

    const setStr = questionBankService.getRandomExamSet('invalid');
    assertEqual(setStr.length, 20, 'Invalid string defaults to 20');
  });

  await testCase('3.6: Statistical balance & entropy across 100 simulations of getRandomExamSet(20)', () => {
    const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
    const firstQuestionCounts = new Map();

    for (let sim = 0; sim < 100; sim++) {
      const exam = questionBankService.getRandomExamSet(20);
      assertEqual(exam.length, 20, `Sim ${sim} length`);

      // Verify zero duplicates within the single exam set
      const ids = exam.map(q => q.id);
      assertEqual(new Set(ids).size, 20, `Sim ${sim} duplicate check`);

      // Verify exact domain balance: 20 / 5 = 4 questions per domain
      const domainCount = {};
      DOMAINS.forEach(d => domainCount[d] = 0);
      exam.forEach(q => domainCount[q.domain]++);
      DOMAINS.forEach(d => {
        assertEqual(domainCount[d], 4, `Sim ${sim} domain '${d}' balance`);
      });

      // Record first question to verify randomness/entropy
      const firstId = exam[0].id;
      firstQuestionCounts.set(firstId, (firstQuestionCounts.get(firstId) || 0) + 1);
    }

    // High entropy check: first question should not always be the same question
    assert(firstQuestionCounts.size > 20, `Entropy check: expected >20 distinct first questions, got ${firstQuestionCounts.size}`);
  });

  // =========================================================================
  // Section 4: LocalStorage Lifecycle & Custom Questions
  // =========================================================================
  console.log('\n--- Section 4: LocalStorage Lifecycle & Custom Questions ---');

  await testCase('4.1: Add valid custom question increases total question count to 211', () => {
    mockStorage.clear();
    const customPayload = {
      id: 'custom_001',
      domain: 'chronology',
      subCategory: 'Contemporary',
      era: '21st_century',
      questionZh: '测试自定义题目中文',
      questionEn: 'Test custom question English',
      optionsZh: ['选项1', '选项2', '选项3', '选项4'],
      optionsEn: ['Opt 1', 'Opt 2', 'Opt 3', 'Opt 4'],
      correctAnswer: 2,
      explanationZh: '解析中文',
      explanationEn: 'Explanation English',
      tags: ['Test', 'Custom'],
      difficulty: 2
    };

    const res = questionBankService.addCustomQuestion(customPayload);
    assert(res.success, `addCustomQuestion failed: ${res.error}`);
    assertEqual(res.question.id, 'custom_001', 'Custom question ID');

    const all = questionBankService.getAllQuestions();
    assertEqual(all.length, 211, 'Total questions after custom add');

    const retrieved = all.find(q => q.id === 'custom_001');
    assert(retrieved, 'Custom question found in getAllQuestions()');
    assertEqual(retrieved.questionZh, '测试自定义题目中文', 'Question text matches');
  });

  await testCase('4.2: Duplicate custom ID replaces existing entry without increasing total count', () => {
    const updatedPayload = {
      id: 'custom_001',
      domain: 'chronology',
      questionZh: '更新后的自定义题目中文',
      questionEn: 'Updated custom question English',
      optionsZh: ['A', 'B', 'C', 'D'],
      optionsEn: ['A', 'B', 'C', 'D'],
      correctAnswer: 0
    };

    const res = questionBankService.addCustomQuestion(updatedPayload);
    assert(res.success, 'Duplicate custom ID update succeeded');

    const all = questionBankService.getAllQuestions();
    assertEqual(all.length, 211, 'Total questions remains 211');

    const retrieved = all.find(q => q.id === 'custom_001');
    assertEqual(retrieved.questionZh, '更新后的自定义题目中文', 'Question text updated');
  });

  await testCase('4.3: Built-in question override via addCustomQuestion replaces built-in without count increase', () => {
    const overridePayload = {
      id: 'arched_001',
      domain: 'chronology',
      questionZh: '覆盖后的题目001',
      questionEn: 'Overridden Question 001',
      optionsZh: ['A1', 'B1', 'C1', 'D1'],
      optionsEn: ['A1', 'B1', 'C1', 'D1'],
      correctAnswer: 1
    };

    const res = questionBankService.addCustomQuestion(overridePayload);
    assert(res.success, 'Override built-in succeeded');

    const all = questionBankService.getAllQuestions();
    assertEqual(all.length, 211, 'Total length is 211 (210 built-in with 1 overridden + 1 custom_001)');

    const overridden = all.find(q => q.id === 'arched_001');
    assertEqual(overridden.questionZh, '覆盖后的题目001', 'Overridden text matches');
  });

  await testCase('4.4: updateQuestion modifies custom question and built-in overrides', () => {
    const res = questionBankService.updateQuestion('custom_001', {
      questionZh: '再次修改自定义题目'
    });
    assert(res.success, 'updateQuestion custom succeeded');

    const all = questionBankService.getAllQuestions();
    const q = all.find(item => item.id === 'custom_001');
    assertEqual(q.questionZh, '再次修改自定义题目', 'Updated via updateQuestion');
  });

  await testCase('4.5: deleteQuestion removes custom question', () => {
    const res = questionBankService.deleteQuestion('custom_001');
    assert(res.success, 'deleteQuestion custom succeeded');

    const all = questionBankService.getAllQuestions();
    assertEqual(all.length, 210, 'Count decreased back to 210');
    assert(!all.some(q => q.id === 'custom_001'), 'custom_001 no longer present');
  });

  await testCase('4.6: resetToFactoryDefaults restores original built-in questions and clears overrides', () => {
    const res = questionBankService.resetToFactoryDefaults();
    assert(res.success, 'resetToFactoryDefaults succeeded');

    const all = questionBankService.getAllQuestions();
    assertEqual(all.length, 210, 'Count is strictly 210');

    const arched001 = all.find(q => q.id === 'arched_001');
    assert(arched001.questionZh !== '覆盖后的题目001', 'Original questionZh restored');
  });

  await testCase('4.7: Corrupted LocalStorage handling (invalid JSON, wrong types, malformed entries)', () => {
    // 1. Invalid JSON in storage does not crash getAllQuestions()
    mockStorage.setItem('arched_custom_questions', '{ not valid json');
    const all1 = questionBankService.getAllQuestions();
    assertEqual(all1.length, 210, 'getAllQuestions recovers from corrupt JSON');

    // Test getCustomQuestions named export directly
    if (typeof getCustomQuestions === 'function') {
      const res1 = getCustomQuestions();
      assertEqual(res1.length, 0, 'Invalid JSON parsed as empty array');

      // 2. Non-array JSON
      mockStorage.setItem('arched_custom_questions', '{"id": "test"}');
      const res2 = getCustomQuestions();
      assertEqual(res2.length, 0, 'Object instead of array parsed as empty array');

      // 3. Array with malformed elements
      mockStorage.setItem('arched_custom_questions', JSON.stringify([
        null,
        12345,
        "a string",
        {},
        { id: 123, domain: 'chronology' }, // id not string
        { id: 'c1' }, // missing domain
        { id: 'valid_custom', domain: 'chronology' } // valid
      ]));
      const res3 = getCustomQuestions();
      assertEqual(res3.length, 1, 'Only valid entry retained from corrupted array');
      assertEqual(res3[0].id, 'valid_custom', 'Valid entry ID');
    }

    mockStorage.clear();
  });

  await testCase('4.8: LocalStorage Quota Exceeded error handling in addCustomQuestion', () => {
    mockStorage.shouldThrowQuota = true;

    const res = questionBankService.addCustomQuestion({
      id: 'quota_test',
      domain: 'chronology',
      questionZh: '测试配额超限'
    });

    assertEqual(res.success, false, 'Add question failed gracefully on quota exceeded');
    assertEqual(res.error, 'Failed to write to LocalStorage', 'Descriptive error message on quota error');

    mockStorage.shouldThrowQuota = false;
  });

  await testCase('4.9: Singleton Export Completeness: questionBankService includes getCustomQuestions', () => {
    if (typeof questionBankService.getCustomQuestions !== 'function') {
      throw new Error("API INCONSISTENCY: 'getCustomQuestions' is exported as named export but missing on 'questionBankService' singleton object.");
    }
  });

  // =========================================================================
  // Section 5: Adversarial Security & Injection Attacks
  // =========================================================================
  console.log('\n--- Section 5: Adversarial Security & Injection Attacks ---');

  await testCase('5.1: XSS tags in questionZh, questionEn, explanations are sanitized', () => {
    mockStorage.clear();
    const maliciousPayload = {
      id: 'xss_001',
      domain: 'chronology',
      questionZh: '<script>alert("XSS_ZH")</script>题目内容',
      questionEn: '<img src=x onerror=alert(1)>Question text',
      explanationZh: '<svg onload=alert(2)>解释说明',
      explanationEn: '<iframe src="javascript:alert(3)"></iframe>Explanation',
      optionsZh: ['<script>A</script>选项1', 'B', 'C', 'D'],
      optionsEn: ['<script>A</script>Opt 1', 'B', 'C', 'D'],
      tags: ['<script>evil_tag</script>', 'NormalTag']
    };

    const res = questionBankService.addCustomQuestion(maliciousPayload);
    assert(res.success, 'addCustomQuestion processed payload');

    const q = res.question;
    assert(!q.questionZh.includes('<script>'), 'script tag stripped from questionZh');
    assert(!q.questionZh.includes('</script>'), 'closing script tag stripped from questionZh');
    assertEqual(q.questionZh, 'alert("XSS_ZH")题目内容', 'Clean text retained');

    assert(!q.questionEn.includes('<img'), 'img tag stripped from questionEn');
    assert(!q.explanationZh.includes('<svg'), 'svg tag stripped from explanationZh');
    assert(!q.explanationEn.includes('<iframe'), 'iframe tag stripped from explanationEn');
    assert(!q.optionsZh[0].includes('<script>'), 'script tag stripped from optionsZh');
    assert(!q.tags[0].includes('<script>'), 'script tag stripped from tags');
  });

  await testCase('5.2: javascript: URI in image and fallbackImage is rejected/sanitized', () => {
    const maliciousUrls = [
      'javascript:alert(1)',
      'JAVASCRIPT:alert(document.cookie)',
      '   javascript:alert(window.location)   '
    ];

    maliciousUrls.forEach((badUrl, idx) => {
      const res = questionBankService.addCustomQuestion({
        id: `img_sec_${idx}`,
        domain: 'chronology',
        image: badUrl,
        fallbackImage: badUrl
      });
      assert(res.success, `Payload ${idx} processed`);
      assert(!res.question.image, `image with '${badUrl}' should be rejected`);
      assert(!res.question.fallbackImage, `fallbackImage with '${badUrl}' should be rejected`);
    });
  });

  await testCase('5.3: Malformed inputs to addCustomQuestion (null, string, array, invalid domain)', () => {
    assertEqual(questionBankService.addCustomQuestion(null).success, false, 'null payload rejected');
    assertEqual(questionBankService.addCustomQuestion(undefined).success, false, 'undefined payload rejected');
    assertEqual(questionBankService.addCustomQuestion('a string').success, false, 'string payload rejected');
    assertEqual(questionBankService.addCustomQuestion(12345).success, false, 'number payload rejected');

    const badDomainRes = questionBankService.addCustomQuestion({ domain: 'invalid_domain_xyz' });
    assertEqual(badDomainRes.success, false, 'invalid domain rejected');
    assert(badDomainRes.error.includes('Invalid domain'), 'error indicates invalid domain');
  });

  await testCase('5.4: Boundary values for correctAnswer and difficulty default safely in addCustomQuestion', () => {
    const res1 = questionBankService.addCustomQuestion({
      id: 'bounds_test_1',
      domain: 'chronology',
      correctAnswer: 99, // out of range
      difficulty: 99     // out of range
    });
    assert(res1.success, 'bounds_test_1 created');
    assertEqual(res1.question.correctAnswer, 0, 'Out of bounds correctAnswer defaults to 0');
    assertEqual(res1.question.difficulty, 2, 'Out of bounds difficulty defaults to 2');

    const res2 = questionBankService.addCustomQuestion({
      id: 'bounds_test_2',
      domain: 'chronology',
      correctAnswer: -5,
      difficulty: 'invalid'
    });
    assert(res2.success, 'bounds_test_2 created');
    assertEqual(res2.question.correctAnswer, 0, 'Negative correctAnswer defaults to 0');
    assertEqual(res2.question.difficulty, 2, 'String difficulty defaults to 2');
  });

  await testCase('5.5: Empty tag array sanitization vulnerability probe', () => {
    const res = questionBankService.addCustomQuestion({
      id: 'empty_tag_test',
      domain: 'chronology',
      tags: ['   ', ''] // elements trim to empty string
    });
    assert(res.success, 'empty_tag_test processed');
    // If tags filtered out to empty array, it violates non-empty tags requirement
    if (res.question.tags.length === 0) {
      throw new Error("SCHEMA VULNERABILITY: addCustomQuestion allows empty tags array when provided with whitespace-only tags.");
    }
  });

  // Cleanup storage after all tests
  mockStorage.clear();

  // =========================================================================
  // Summary & Findings Output
  // =========================================================================
  console.log('\n======================================================');
  console.log('             ADVERSARIAL SUITE SUMMARY                ');
  console.log('======================================================');
  console.log(` Total Test Cases : ${passedTests + failedTests}`);
  console.log(` \x1b[32mPassed           : ${passedTests}\x1b[0m`);
  console.log(` \x1b[31mFailed           : ${failedTests}\x1b[0m`);
  console.log('======================================================\n');

  if (findings.length > 0) {
    console.log('--- Adversarial Findings / Bugs Discovered ---');
    findings.forEach((f, idx) => {
      console.log(`\nFinding #${idx + 1}: ${f.name}`);
      console.log(`  Details: ${f.error}`);
    });
    console.log('\n');
  }

  return { passedTests, failedTests, findings };
}

// Auto-run if executed directly
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  runAdversarialM2Suite()
    .then(result => {
      process.exit(result.failedTests > 0 ? 1 : 0);
    })
    .catch(err => {
      console.error('Fatal Test Harness Error:', err);
      process.exit(1);
    });
}
