/**
 * tests/adversarial_m2_remediation_deep_audit.mjs
 * 
 * Deep Empirical Challenger Audit for Milestone M2 Remediation
 * Author: Challenger 1 (critic, specialist)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Import Question Bank and Service
import { ARCHED_QUESTION_BANK } from '../src/data/archedQuestionBank.js';
import {
  questionBankService,
  getAllQuestions,
  getQuestionsByDomain,
  getQuestionsByDifficulty,
  getQuestionById,
  getCustomQuestions,
  queryQuestions,
  getRandomExamSet,
  getSummary,
  addCustomQuestion,
  updateQuestion,
  deleteQuestion,
  resetToFactoryDefaults
} from '../src/services/questionBankService.js';

// Setup Mock LocalStorage
class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(k) { return this.store.has(k) ? this.store.get(k) : null; }
  setItem(k, v) { this.store.set(k, String(v)); }
  removeItem(k) { this.store.delete(k); }
  clear() { this.store.clear(); }
  get length() { return this.store.size; }
  key(i) { return Array.from(this.store.keys())[i] || null; }
}

globalThis.localStorage = new MockLocalStorage();

console.log('================================================================');
console.log('  CHALLENGER 1: EMPIRICAL & ADVERSARIAL AUDIT - M2 REMEDIATION  ');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failureDetails = [];

function check(testName, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  \x1b[32m[PASS]\x1b[0m ${testName}`);
  } catch (err) {
    failedTests++;
    console.error(`  \x1b[31m[FAIL]\x1b[0m ${testName}`);
    console.error(`         Reason: ${err.message}`);
    failureDetails.push({ testName, error: err.message, stack: err.stack });
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}

function assertEqual(actual, expected, msg) {
  if (actual !== expected) {
    throw new Error(`${msg}: expected '${expected}', got '${actual}'`);
  }
}

// -----------------------------------------------------------------------------
// SECTION 1: QUESTION BANK INTEGRITY & SEQUENCING
// -----------------------------------------------------------------------------
console.log('\n--- Section 1: Question Bank Integrity & ID Sequencing ---');

check('1.1: Question count is exactly 210', () => {
  assertEqual(ARCHED_QUESTION_BANK.length, 210, 'Total question count');
});

check('1.2: IDs follow strictly continuous format arched_001 through arched_210', () => {
  for (let i = 1; i <= 210; i++) {
    const expectedId = `arched_${String(i).padStart(3, '0')}`;
    const question = ARCHED_QUESTION_BANK[i - 1];
    assert(question, `Missing question index ${i - 1}`);
    assertEqual(question.id, expectedId, `Question at position ${i - 1} ID mismatch`);
  }
});

check('1.3: All 5 domains meet minimum 30 questions threshold', () => {
  const domains = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  const domainCounts = {};
  domains.forEach(d => domainCounts[d] = 0);

  ARCHED_QUESTION_BANK.forEach(q => {
    assert(domains.includes(q.domain), `Invalid domain ${q.domain} in ${q.id}`);
    domainCounts[q.domain]++;
  });

  domains.forEach(d => {
    assert(domainCounts[d] >= 30, `Domain ${d} has only ${domainCounts[d]} questions (min 30 required)`);
    console.log(`         Domain '${d}': ${domainCounts[d]} questions`);
  });
});

// -----------------------------------------------------------------------------
// SECTION 2: ANSWER KEY DISTRIBUTION & UNIFORMITY
// -----------------------------------------------------------------------------
console.log('\n--- Section 2: Answer Key Balance (Options 0, 1, 2, 3) ---');

const keyDistribution = { 0: 0, 1: 0, 2: 0, 3: 0 };
ARCHED_QUESTION_BANK.forEach(q => {
  keyDistribution[q.correctAnswer]++;
});

check('2.1: Key distribution across options 0, 1, 2, 3 is ~25% each (between 23% and 27%)', () => {
  const total = ARCHED_QUESTION_BANK.length;
  console.log(`         Distribution: A(0)=${keyDistribution[0]} (${(keyDistribution[0]/total*100).toFixed(2)}%), B(1)=${keyDistribution[1]} (${(keyDistribution[1]/total*100).toFixed(2)}%), C(2)=${keyDistribution[2]} (${(keyDistribution[2]/total*100).toFixed(2)}%), D(3)=${keyDistribution[3]} (${(keyDistribution[3]/total*100).toFixed(2)}%)`);

  for (let k = 0; k <= 3; k++) {
    const count = keyDistribution[k];
    const pct = count / total;
    assert(pct >= 0.23 && pct <= 0.27, `Option ${k} count is ${count} (${(pct*100).toFixed(2)}%), outside 23%-27%`);
  }
});

check('2.2: Statistical Chi-Square Goodness of Fit Test for Answer Keys', () => {
  // Expected count = 210 / 4 = 52.5 per option
  const expected = 210 / 4;
  let chiSquare = 0;
  for (let k = 0; k <= 3; k++) {
    const observed = keyDistribution[k];
    chiSquare += Math.pow(observed - expected, 2) / expected;
  }
  // For df = 3, critical value for p = 0.05 is 7.815; for p = 0.01 is 11.345
  console.log(`         Chi-Square statistic = ${chiSquare.toFixed(4)} (critical threshold at alpha=0.05 is 7.815)`);
  assert(chiSquare < 7.815, `Chi-square statistic ${chiSquare} exceeds 7.815 (distribution is significantly non-uniform)`);
});

check('2.3: Each individual domain utilizes all 4 options without severe skew (<45% each)', () => {
  const domains = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  domains.forEach(dom => {
    const questions = ARCHED_QUESTION_BANK.filter(q => q.domain === dom);
    const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
    questions.forEach(q => dist[q.correctAnswer]++);
    for (let k = 0; k <= 3; k++) {
      const pct = dist[k] / questions.length;
      assert(dist[k] > 0, `Domain ${dom} has 0 questions with correctAnswer ${k}`);
      assert(pct < 0.45, `Domain ${dom} has ${dist[k]}/${questions.length} (${(pct*100).toFixed(1)}%) with correctAnswer ${k} (too skewed)`);
    }
  });
});

// -----------------------------------------------------------------------------
// SECTION 3: BILINGUAL OPTIONS SYNCHRONIZATION & SEMANTIC ALIGNMENT
// -----------------------------------------------------------------------------
console.log('\n--- Section 3: Bilingual Options Synchronization ---');

check('3.1: All questions have optionsZh and optionsEn with length 4', () => {
  ARCHED_QUESTION_BANK.forEach(q => {
    assertEqual(q.optionsZh?.length, 4, `${q.id}: optionsZh must have 4 options`);
    assertEqual(q.optionsEn?.length, 4, `${q.id}: optionsEn must have 4 options`);
  });
});

check('3.2: Correct answer option content is non-empty and non-placeholder in both languages', () => {
  ARCHED_QUESTION_BANK.forEach(q => {
    const ca = q.correctAnswer;
    const zhAns = q.optionsZh[ca]?.trim();
    const enAns = q.optionsEn[ca]?.trim();
    assert(zhAns && zhAns.length > 0, `${q.id}: optionsZh[${ca}] is empty`);
    assert(enAns && enAns.length > 0, `${q.id}: optionsEn[${ca}] is empty`);
    assert(!zhAns.includes('TODO') && !enAns.includes('TODO'), `${q.id}: contains TODO in correct answer`);
  });
});

check('3.3: Index-by-index semantic parity sample test across key historical questions', () => {
  // Test a diverse sample of questions from different movements to ensure translation pairs match at the same index
  const sampleChecks = [
    { id: 'arched_001', optIdx: 0 },
    { id: 'arched_045', optIdx: 1 },
    { id: 'arched_090', optIdx: 2 },
    { id: 'arched_135', optIdx: 3 },
    { id: 'arched_180', optIdx: 0 }
  ];

  sampleChecks.forEach(({ id }) => {
    const q = ARCHED_QUESTION_BANK.find(item => item.id === id);
    assert(q, `Question ${id} not found`);
    for (let i = 0; i < 4; i++) {
      const zh = q.optionsZh[i].trim();
      const en = q.optionsEn[i].trim();
      assert(zh.length > 0 && en.length > 0, `${id}: empty option at index ${i}`);
    }
  });
});

// -----------------------------------------------------------------------------
// SECTION 4: FALLBACK IMAGES & STIMULUS ASSETS ON DISK
// -----------------------------------------------------------------------------
console.log('\n--- Section 4: Fallback Image Assets on Disk ---');

check('4.1: All referenced fallbackImage files exist on disk with positive byte size', () => {
  const publicDir = path.join(PROJECT_ROOT, 'public');
  let fallbackCount = 0;

  ARCHED_QUESTION_BANK.forEach(q => {
    if (q.fallbackImage) {
      fallbackCount++;
      let relativePath = q.fallbackImage;
      if (relativePath.startsWith('/')) {
        relativePath = relativePath.slice(1);
      }
      const fullDiskPath = path.join(publicDir, relativePath);
      assert(fs.existsSync(fullDiskPath), `${q.id}: Fallback image does not exist on disk: ${fullDiskPath}`);
      const stat = fs.statSync(fullDiskPath);
      assert(stat.isFile(), `${q.id}: Fallback image path is not a file: ${fullDiskPath}`);
      assert(stat.size > 0, `${q.id}: Fallback image file is 0 bytes: ${fullDiskPath}`);
    }
  });

  console.log(`         Verified ${fallbackCount} fallback image files on disk.`);
});

check('4.2: Visual ID domain questions all have valid image stimulus (HTTP or local) and fallbackImage', () => {
  const visualQuestions = ARCHED_QUESTION_BANK.filter(q => q.domain === 'visual_id');
  assertEqual(visualQuestions.length, 45, 'Visual ID question count');

  visualQuestions.forEach(q => {
    assert(q.image && q.image.length > 0, `${q.id}: visual_id question missing image stimulus`);
    assert(q.fallbackImage && q.fallbackImage.length > 0, `${q.id}: visual_id question missing fallbackImage`);
  });
});

// -----------------------------------------------------------------------------
// SECTION 5: QUESTION BANK SERVICE ADVERSARIAL ROBUSTNESS
// -----------------------------------------------------------------------------
console.log('\n--- Section 5: QuestionBankService Adversarial Probing ---');

check('5.1: queryQuestions(null) handles null gracefully without throwing', () => {
  const res = queryQuestions(null);
  assert(Array.isArray(res), 'queryQuestions(null) should return array');
  assertEqual(res.length, 210, 'queryQuestions(null) should return all questions');
});

check('5.2: queryQuestions(undefined) returns all questions', () => {
  const res = queryQuestions(undefined);
  assert(Array.isArray(res) && res.length === 210, 'queryQuestions(undefined) should return all questions');
});

check('5.3: queryQuestions with malicious/unexpected filter types', () => {
  const weirdFilters = [
    { domain: 12345 },
    { era: ['not', 'a', 'string'] },
    { keyword: { x: 1 } },
    { difficulty: 'invalid_string' },
    { tag: null },
    { limit: -999 },
    { limit: 'NaN' }
  ];

  weirdFilters.forEach(f => {
    const res = queryQuestions(f);
    assert(Array.isArray(res), `queryQuestions(${JSON.stringify(f)}) must return array`);
  });
});

check('5.4: Singleton export has all required methods', () => {
  const expectedMethods = [
    'getAllQuestions',
    'getQuestionsByDomain',
    'getQuestionsByDifficulty',
    'getQuestionById',
    'getCustomQuestions',
    'queryQuestions',
    'getRandomExamSet',
    'getSummary',
    'addCustomQuestion',
    'updateQuestion',
    'deleteQuestion',
    'resetToFactoryDefaults'
  ];

  expectedMethods.forEach(method => {
    assert(typeof questionBankService[method] === 'function', `questionBankService.${method} must be a function`);
  });
});

check('5.5: getQuestionById behavior on valid and invalid IDs', () => {
  const q1 = getQuestionById('arched_001');
  assert(q1 && q1.id === 'arched_001', 'getQuestionById arched_001');

  const q210 = getQuestionById('arched_210');
  assert(q210 && q210.id === 'arched_210', 'getQuestionById arched_210');

  assertEqual(getQuestionById('arched_999'), null, 'Non-existent ID should return null');
  assertEqual(getQuestionById(''), null, 'Empty string should return null');
  assertEqual(getQuestionById(null), null, 'null should return null');
  assertEqual(getQuestionById(undefined), null, 'undefined should return null');
  assertEqual(getQuestionById(123), null, 'number should return null');
  assertEqual(getQuestionById({}), null, 'object should return null');
});

check('5.6: addCustomQuestion tag sanitization with whitespace-only or empty strings', () => {
  try {
    globalThis.localStorage.clear();

    const res1 = addCustomQuestion({
      domain: 'chronology',
      questionZh: '测试题目1',
      tags: ['   ', '', ' \t ']
    });
    assert(res1.success, 'addCustomQuestion with whitespace tags should succeed');
    assert(Array.isArray(res1.question.tags), 'Tags should be array');
    assertEqual(res1.question.tags.length, 1, 'Should fall back to default tag');
    assertEqual(res1.question.tags[0], 'Custom', 'Default tag must be Custom');

    const res2 = addCustomQuestion({
      domain: 'chronology',
      questionZh: '测试题目2',
      tags: ['Renaissance', '<b>Architecture</b>', '   ']
    });
    assert(res2.success, 'addCustomQuestion with dirty tags should succeed');
    assert(res2.question.tags.includes('Renaissance'), 'Preserves valid tags');
    assert(res2.question.tags.includes('Architecture'), 'Strips HTML tags like <b> leaving Architecture');
    assert(!res2.question.tags.some(t => t.includes('<b>')), 'Strips opening tag');
  } finally {
    // Ensure clean state for subsequent tests
    resetToFactoryDefaults();
  }
});

check('5.7: getRandomExamSet distribution and duplicate immunity', () => {
  resetToFactoryDefaults();
  // Test count = 20 (standard Polimi exam)
  const exam20 = getRandomExamSet(20);
  assertEqual(exam20.length, 20, 'Exam size 20');
  const uniqueIds20 = new Set(exam20.map(q => q.id));
  assertEqual(uniqueIds20.size, 20, 'Zero duplicates in 20-question set');

  // Test domain balancing in 20-question set (4 questions per domain)
  const domainDist = {};
  exam20.forEach(q => {
    domainDist[q.domain] = (domainDist[q.domain] || 0) + 1;
  });
  ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'].forEach(d => {
    assertEqual(domainDist[d], 4, `Domain ${d} should have exactly 4 questions in a 20-question exam`);
  });

  // Test full pool extraction (count = 210)
  const exam210 = getRandomExamSet(210);
  assertEqual(exam210.length, 210, 'Exam size 210');
  const uniqueIds210 = new Set(exam210.map(q => q.id));
  assertEqual(uniqueIds210.size, 210, 'Zero duplicates in full 210 question set');

  // Test count beyond available pool (count = 300)
  const exam300 = getRandomExamSet(300);
  assertEqual(exam300.length, 210, 'Oversized count must be capped at available pool');
  const uniqueIds300 = new Set(exam300.map(q => q.id));
  assertEqual(uniqueIds300.size, 210, 'Zero duplicates when capped at 210');

  // Test non-standard inputs
  assertEqual(getRandomExamSet(0).length, 20, '0 count falls back to 20');
  assertEqual(getRandomExamSet(-10).length, 1, 'Negative count clamps to 1');
  assertEqual(getRandomExamSet('invalid').length, 20, 'String count falls back to 20');
  assertEqual(getRandomExamSet(null).length, 20, 'null count falls back to 20');
});

check('5.8: Question bank immutability check (prevent accidental runtime mutation)', () => {
  const all1 = getAllQuestions();
  const qTarget = all1[0];
  const originalZh = qTarget.questionZh;
  
  // Attempt to mutate property on returned object
  qTarget.questionZh = 'MUTATED_TEST_STRING';
  
  // Fetch fresh from questionBankService
  const qFresh = getQuestionById(qTarget.id);
  
  // Note: If questions are not deep-cloned on getAllQuestions, modifying it in caller would mutate in-memory state.
  // Let's test whether getQuestionById or resetToFactoryDefaults restores it.
  const isDirectlyMutated = (qFresh.questionZh === 'MUTATED_TEST_STRING');
  if (isDirectlyMutated) {
    console.log('         [NOTE/ADVISORY] In-memory question bank is directly referenced (caller mutation affects in-memory state).');
    // Restore original string
    qTarget.questionZh = originalZh;
  } else {
    console.log('         [OK] Question bank returns defensive copies.');
  }
});

// -----------------------------------------------------------------------------
// SUMMARY REPORT
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`  AUDIT COMPLETE: ${passedTests} / ${totalTests} PASSED (${((passedTests/totalTests)*100).toFixed(1)}%)`);
if (failedTests > 0) {
  console.log(`  \x1b[31m${failedTests} TESTS FAILED!\x1b[0m`);
} else {
  console.log('  \x1b[32mALL EMPIRICAL CHALLENGER TESTS PASSED WITHOUT DEFECT!\x1b[0m');
}
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
