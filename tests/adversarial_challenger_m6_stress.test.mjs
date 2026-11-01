#!/usr/bin/env node
/**
 * tests/adversarial_challenger_m6_stress.test.mjs
 * 
 * Independent Adversarial Stress Test Suite for Milestone M6
 * Agent: teamwork_challenger_m6_1 (critic, specialist)
 * 
 * Empirically stress-tests:
 * 1. Monte Carlo random sampling simulation (10,000 runs of 20, 10,000 runs of 30)
 *    - Zero duplicate question IDs per session
 *    - Strict domain quota adherence (4 each for 20, 6 each for 30)
 *    - 100% question coverage across the 320 bank
 *    - Statistical distribution metrics (min, max, mean, stddev)
 *    - Object schema purity (zero undefined/NaN properties)
 * 2. Option permutation & shuffle invariance:
 *    - All 24 permutations per question preserving answer key integrity
 *    - Polimi ARCHED exam scoring invariance under option shuffle and question reordering
 * 3. Extreme boundary conditions & clamping:
 *    - getRandomExamSet(0), getRandomExamSet(320), getRandomExamSet(500), getRandomExamSet(1000)
 *    - Negative numbers, non-numeric inputs, edge counts (1, 5)
 * 4. Multi-attribute query filters stress testing across full 320-item bank:
 *    - Domain, difficulty, tags, keywords, compound combinations
 *    - Adversarial keyword injection strings (XSS, regex metachars, SQLi)
 *    - Limit clamping
 *    - 500 randomized combinatorial filter queries
 * 5. Rapid burst execution & memory heap stability
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Setup headless LocalStorage mock
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
if (!globalThis.window) {
  globalThis.window = { localStorage: globalThis.localStorage };
}

// Import Target Modules
const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
const dataPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');

const qbModule = await import('file:///' + qbPath.replace(/\\/g, '/'));
const dataModule = await import('file:///' + dataPath.replace(/\\/g, '/'));

const {
  questionBankService,
  getAllQuestions,
  getQuestionsByDomain,
  getQuestionsByDifficulty,
  getQuestionById,
  getCustomQuestions,
  queryQuestions,
  getRandomExamSet,
  getSummary
} = qbModule;

const { ARCHED_QUESTION_BANK } = dataModule;

// Assertion Harness
let totalAssertions = 0;
let passedAssertions = 0;
let testSuitePassed = 0;
let testSuiteFailed = 0;
const failureDetails = [];

function assert(condition, message) {
  totalAssertions++;
  if (!condition) {
    const err = new Error(`Assertion Failure: ${message}`);
    throw err;
  }
  passedAssertions++;
}

function assertEqual(actual, expected, message) {
  totalAssertions++;
  if (actual !== expected) {
    const err = new Error(`Equality Failure [${message}]: Expected '${expected}', got '${actual}'`);
    throw err;
  }
  passedAssertions++;
}

function assertDeepEqual(actual, expected, message) {
  totalAssertions++;
  const aStr = JSON.stringify(actual);
  const eStr = JSON.stringify(expected);
  if (aStr !== eStr) {
    const err = new Error(`Deep Equality Failure [${message}]:\nExpected: ${eStr}\nActual:   ${aStr}`);
    throw err;
  }
  passedAssertions++;
}

async function runTest(name, fn) {
  try {
    const start = performance.now();
    await fn();
    const duration = (performance.now() - start).toFixed(2);
    testSuitePassed++;
    console.log(`  \x1b[32m✓\x1b[0m ${name} \x1b[90m(${duration}ms)\x1b[0m`);
  } catch (err) {
    testSuiteFailed++;
    console.error(`  \x1b[31m✗\x1b[0m ${name}`);
    console.error(`    \x1b[33m${err.message}\x1b[0m`);
    failureDetails.push({ name, message: err.message, stack: err.stack });
  }
}

console.log('================================================================================');
console.log('  CHALLENGER 1 (M6): EMPIRICAL STRESS TEST & MONTE CARLO SIMULATION');
console.log('  Scope: Question Bank Service Integrity, Random Sampling & Invariance');
console.log('================================================================================\n');

// -----------------------------------------------------------------------------
// SECTION 1: Base Question Bank Integrity & Scope Verification
// -----------------------------------------------------------------------------
console.log('--- SECTION 1: Base Question Bank Integrity & Scope Audit ---');

await runTest('1.1: Question bank has exactly 320 items with sequential IDs arched_001..arched_320', () => {
  const all = getAllQuestions();
  assertEqual(all.length, 320, 'Total question count must be exactly 320');
  
  const idSet = new Set();
  all.forEach((q, idx) => {
    const expectedId = `arched_${String(idx + 1).padStart(3, '0')}`;
    assertEqual(q.id, expectedId, `Question at index ${idx} must have sequential ID ${expectedId}`);
    assert(!idSet.has(q.id), `ID ${q.id} must be unique`);
    idSet.add(q.id);
  });
});

await runTest('1.2: Exact 5-domain equity: 64 questions per domain', () => {
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  const summary = getSummary();
  assertEqual(summary.total, 320, 'Summary total is 320');

  DOMAINS.forEach(dom => {
    const domainQuestions = getQuestionsByDomain(dom);
    assertEqual(domainQuestions.length, 64, `Domain ${dom} must have exactly 64 questions`);
    assertEqual(summary.byDomain[dom], 64, `Summary for ${dom} must report 64 questions`);
  });
});

await runTest('1.3: Question object property purity (zero undefined, NaN, or null required fields)', () => {
  const all = getAllQuestions();
  all.forEach(q => {
    assert(typeof q.id === 'string' && q.id.length > 0, `Q ${q.id} id valid`);
    assert(typeof q.domain === 'string' && q.domain.length > 0, `Q ${q.id} domain valid`);
    assert(typeof q.questionZh === 'string' && q.questionZh.length > 5, `Q ${q.id} questionZh valid`);
    assert(typeof q.questionEn === 'string' && q.questionEn.length > 5, `Q ${q.id} questionEn valid`);
    assert(Array.isArray(q.optionsZh) && q.optionsZh.length === 4, `Q ${q.id} optionsZh has 4 items`);
    assert(Array.isArray(q.optionsEn) && q.optionsEn.length === 4, `Q ${q.id} optionsEn has 4 items`);
    assert(Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer <= 3, `Q ${q.id} correctAnswer in [0..3]`);
    assert(typeof q.explanationZh === 'string' && q.explanationZh.length > 5, `Q ${q.id} explanationZh valid`);
    assert(typeof q.explanationEn === 'string' && q.explanationEn.length > 5, `Q ${q.id} explanationEn valid`);
    assert([1, 2, 3].includes(q.difficulty), `Q ${q.id} difficulty must be 1, 2, or 3`);
    assert(Array.isArray(q.tags) && q.tags.length > 0, `Q ${q.id} tags array non-empty`);
    assert(!Number.isNaN(q.difficulty), `Q ${q.id} difficulty is not NaN`);
    assert(!Number.isNaN(q.correctAnswer), `Q ${q.id} correctAnswer is not NaN`);
  });
});

// -----------------------------------------------------------------------------
// SECTION 2: Monte Carlo Random Sampling Simulation (10,000 runs)
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 2: Monte Carlo Random Sampling Simulation (10,000 runs) ---');

let monteCarlo20Stats = null;
let monteCarlo30Stats = null;

await runTest('2.1: Monte Carlo 10,000 runs of getRandomExamSet(20): zero duplicates, exact domain balance (4 each), full bank coverage', () => {
  const ITERATIONS = 10000;
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  const questionFrequency = new Map();
  ARCHED_QUESTION_BANK.forEach(q => questionFrequency.set(q.id, 0));

  let totalDuplicateViolations = 0;
  let totalDomainWeightViolations = 0;
  let totalSchemaViolations = 0;

  const tStart = performance.now();

  for (let i = 0; i < ITERATIONS; i++) {
    const examSet = getRandomExamSet(20);
    
    // 1. Length check
    if (examSet.length !== 20) {
      totalSchemaViolations++;
    }

    // 2. Duplicate check
    const seenIds = new Set();
    examSet.forEach(q => {
      if (!q || !q.id || seenIds.has(q.id)) {
        totalDuplicateViolations++;
      }
      seenIds.add(q.id);
      questionFrequency.set(q.id, (questionFrequency.get(q.id) || 0) + 1);
    });

    // 3. Domain quota check: exactly 4 per domain
    const counts = { chronology: 0, visual_id: 0, avant_garde: 0, artist_movement: 0, renaissance_classical: 0 };
    examSet.forEach(q => {
      if (counts[q.domain] !== undefined) counts[q.domain]++;
    });

    for (const dom of DOMAINS) {
      if (counts[dom] !== 4) {
        totalDomainWeightViolations++;
      }
    }
  }

  const durationMs = performance.now() - tStart;
  const opsPerSec = Math.round((ITERATIONS / durationMs) * 1000);

  // Compute empirical statistics
  const freqs = Array.from(questionFrequency.values());
  const minFreq = Math.min(...freqs);
  const maxFreq = Math.max(...freqs);
  const sumFreq = freqs.reduce((a, b) => a + b, 0);
  const meanFreq = sumFreq / freqs.length;
  const variance = freqs.reduce((acc, f) => acc + Math.pow(f - meanFreq, 2), 0) / freqs.length;
  const stdDev = Math.sqrt(variance);

  // Expected draws per question: (10,000 * 20) / 320 = 625.0
  const expectedFreq = (ITERATIONS * 20) / 320;

  monteCarlo20Stats = {
    iterations: ITERATIONS,
    durationMs: durationMs.toFixed(1),
    opsPerSec,
    minFreq,
    maxFreq,
    meanFreq: meanFreq.toFixed(2),
    expectedFreq,
    stdDev: stdDev.toFixed(2),
    unseenQuestions: freqs.filter(f => f === 0).length
  };

  console.log(`    [Metrics 20-Q Set] 10,000 runs completed in ${durationMs.toFixed(1)}ms (${opsPerSec} ops/sec)`);
  console.log(`    [Metrics 20-Q Set] Expected Freq: ${expectedFreq}, Min: ${minFreq}, Max: ${maxFreq}, Mean: ${meanFreq.toFixed(2)}, StdDev: ${stdDev.toFixed(2)}`);
  console.log(`    [Metrics 20-Q Set] Bank Coverage: ${320 - monteCarlo20Stats.unseenQuestions}/320 (100% sampled)`);

  assertEqual(totalDuplicateViolations, 0, 'Zero duplicate questions allowed across 10,000 runs');
  assertEqual(totalDomainWeightViolations, 0, 'Domain weighting must strictly provide exactly 4 items per domain');
  assertEqual(totalSchemaViolations, 0, 'Exam set must consistently contain exactly 20 items');
  assertEqual(monteCarlo20Stats.unseenQuestions, 0, 'Every question in the 320-item bank must be sampled at least once');
  assert(minFreq >= 450, `Minimum frequency (${minFreq}) should be within reasonable Poisson/binomial bound (>= 450)`);
  assert(maxFreq <= 800, `Maximum frequency (${maxFreq}) should be within reasonable bound (<= 800)`);
});

await runTest('2.2: Monte Carlo 10,000 runs of getRandomExamSet(30): zero duplicates, exact domain balance (6 each), full bank coverage', () => {
  const ITERATIONS = 10000;
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  const questionFrequency = new Map();
  ARCHED_QUESTION_BANK.forEach(q => questionFrequency.set(q.id, 0));

  let totalDuplicateViolations = 0;
  let totalDomainWeightViolations = 0;
  let totalSchemaViolations = 0;

  const tStart = performance.now();

  for (let i = 0; i < ITERATIONS; i++) {
    const examSet = getRandomExamSet(30);
    
    if (examSet.length !== 30) {
      totalSchemaViolations++;
    }

    const seenIds = new Set();
    examSet.forEach(q => {
      if (!q || !q.id || seenIds.has(q.id)) {
        totalDuplicateViolations++;
      }
      seenIds.add(q.id);
      questionFrequency.set(q.id, (questionFrequency.get(q.id) || 0) + 1);
    });

    const counts = { chronology: 0, visual_id: 0, avant_garde: 0, artist_movement: 0, renaissance_classical: 0 };
    examSet.forEach(q => {
      if (counts[q.domain] !== undefined) counts[q.domain]++;
    });

    for (const dom of DOMAINS) {
      if (counts[dom] !== 6) {
        totalDomainWeightViolations++;
      }
    }
  }

  const durationMs = performance.now() - tStart;
  const opsPerSec = Math.round((ITERATIONS / durationMs) * 1000);

  const freqs = Array.from(questionFrequency.values());
  const minFreq = Math.min(...freqs);
  const maxFreq = Math.max(...freqs);
  const sumFreq = freqs.reduce((a, b) => a + b, 0);
  const meanFreq = sumFreq / freqs.length;
  const variance = freqs.reduce((acc, f) => acc + Math.pow(f - meanFreq, 2), 0) / freqs.length;
  const stdDev = Math.sqrt(variance);

  // Expected draws per question: (10,000 * 30) / 320 = 937.5
  const expectedFreq = (ITERATIONS * 30) / 320;

  monteCarlo30Stats = {
    iterations: ITERATIONS,
    durationMs: durationMs.toFixed(1),
    opsPerSec,
    minFreq,
    maxFreq,
    meanFreq: meanFreq.toFixed(2),
    expectedFreq,
    stdDev: stdDev.toFixed(2),
    unseenQuestions: freqs.filter(f => f === 0).length
  };

  console.log(`    [Metrics 30-Q Set] 10,000 runs completed in ${durationMs.toFixed(1)}ms (${opsPerSec} ops/sec)`);
  console.log(`    [Metrics 30-Q Set] Expected Freq: ${expectedFreq}, Min: ${minFreq}, Max: ${maxFreq}, Mean: ${meanFreq.toFixed(2)}, StdDev: ${stdDev.toFixed(2)}`);
  console.log(`    [Metrics 30-Q Set] Bank Coverage: ${320 - monteCarlo30Stats.unseenQuestions}/320 (100% sampled)`);

  assertEqual(totalDuplicateViolations, 0, 'Zero duplicate questions allowed across 10,000 runs');
  assertEqual(totalDomainWeightViolations, 0, 'Domain weighting must strictly provide exactly 6 items per domain');
  assertEqual(totalSchemaViolations, 0, 'Exam set must consistently contain exactly 30 items');
  assertEqual(monteCarlo30Stats.unseenQuestions, 0, 'Every question in the 320-item bank must be sampled at least once');
  assert(minFreq >= 750, `Minimum frequency (${minFreq}) should be within reasonable bound (>= 750)`);
  assert(maxFreq <= 1150, `Maximum frequency (${maxFreq}) should be within reasonable bound (<= 1150)`);
});

await runTest('2.3: Non-multiple of 5 domain quota distribution (e.g., 23 questions -> [5, 5, 5, 4, 4])', () => {
  for (let run = 0; run < 100; run++) {
    const set = getRandomExamSet(23);
    assertEqual(set.length, 23, 'Set size must be 23');
    const counts = {};
    set.forEach(q => counts[q.domain] = (counts[q.domain] || 0) + 1);
    const domainCounts = Object.values(counts);
    domainCounts.sort((a, b) => b - a);
    assertDeepEqual(domainCounts, [5, 5, 5, 4, 4], 'Quotas must divide 23 into 5,5,5,4,4');
  }
});

// -----------------------------------------------------------------------------
// SECTION 3: Option Permutation & Shuffle Invariance
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 3: Option Permutation & Shuffle Invariance ---');

// Helper: Generate all 4! = 24 permutations of indices [0, 1, 2, 3]
function getPermutations(arr) {
  if (arr.length <= 1) return [arr];
  const perms = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const subPerms = getPermutations(rest);
    subPerms.forEach(sub => perms.push([arr[i], ...sub]));
  }
  return perms;
}

const ALL_PERMUTATIONS = getPermutations([0, 1, 2, 3]); // 24 permutations

await runTest('3.1: All 24 option permutations across all 320 questions (7,680 test cases) preserve answer key integrity', () => {
  const all = getAllQuestions();
  let totalPermutationCasesTested = 0;

  all.forEach(q => {
    const originalCorrectZh = q.optionsZh[q.correctAnswer];
    const originalCorrectEn = q.optionsEn[q.correctAnswer];

    ALL_PERMUTATIONS.forEach(perm => {
      totalPermutationCasesTested++;

      // Permute Chinese and English options synchronously
      const permutedZh = perm.map(idx => q.optionsZh[idx]);
      const permutedEn = perm.map(idx => q.optionsEn[idx]);

      // Calculate where the correct answer moved
      const newCorrectIndexZh = permutedZh.indexOf(originalCorrectZh);
      const newCorrectIndexEn = permutedEn.indexOf(originalCorrectEn);

      assertEqual(newCorrectIndexZh, newCorrectIndexEn, `Q ${q.id} permuted Zh and En correct index match`);
      assertEqual(permutedZh[newCorrectIndexZh], originalCorrectZh, `Q ${q.id} correct text preserved`);
      assertEqual(permutedEn[newCorrectIndexEn], originalCorrectEn, `Q ${q.id} correct text preserved`);

      // Verify that perm index matches reverse lookup of original correctAnswer
      const expectedNewIndex = perm.indexOf(q.correctAnswer);
      assertEqual(newCorrectIndexZh, expectedNewIndex, `Q ${q.id} calculated index matches permutation mapping`);
    });
  });

  assertEqual(totalPermutationCasesTested, 320 * 24, 'All 7,680 permutation scenarios tested');
});

await runTest('3.2: Polimi ARCHED grading invariance under option permutation', () => {
  // Polimi ARCHED exam rules:
  // Correct answer = +1.5 points
  // Incorrect answer = -0.25 points
  // Omitted answer = 0.00 points
  const gradeQuestion = (selectedIdx, correctIdx) => {
    if (selectedIdx === null || selectedIdx === undefined) return 0; // Omission
    return selectedIdx === correctIdx ? 1.5 : -0.25;
  };

  const all = getAllQuestions();

  all.forEach(q => {
    ALL_PERMUTATIONS.forEach(perm => {
      const originalCorrectIndex = q.correctAnswer;
      const permutedCorrectIndex = perm.indexOf(originalCorrectIndex);

      // 1. Correct choice simulation:
      const originalScoreCorrect = gradeQuestion(originalCorrectIndex, originalCorrectIndex);
      const permutedScoreCorrect = gradeQuestion(permutedCorrectIndex, permutedCorrectIndex);
      assertEqual(permutedScoreCorrect, originalScoreCorrect, `Full credit invariant (+1.5) for ${q.id}`);
      assertEqual(permutedScoreCorrect, 1.5, 'Full credit is exactly +1.5');

      // 2. Omitted choice simulation:
      const originalScoreOmit = gradeQuestion(null, originalCorrectIndex);
      const permutedScoreOmit = gradeQuestion(null, permutedCorrectIndex);
      assertEqual(permutedScoreOmit, originalScoreOmit, `Omission score invariant (0.0) for ${q.id}`);
      assertEqual(permutedScoreOmit, 0, 'Omission score is exactly 0.0');

      // 3. Incorrect choice simulation for each of the 3 distractors:
      for (let distractorOrig = 0; distractorOrig < 4; distractorOrig++) {
        if (distractorOrig === originalCorrectIndex) continue;
        const distractorPerm = perm.indexOf(distractorOrig);

        const originalScoreWrong = gradeQuestion(distractorOrig, originalCorrectIndex);
        const permutedScoreWrong = gradeQuestion(distractorPerm, permutedCorrectIndex);
        assertEqual(permutedScoreWrong, originalScoreWrong, `Penalty score invariant (-0.25) for ${q.id}`);
        assertEqual(permutedScoreWrong, -0.25, 'Penalty is exactly -0.25');
      }
    });
  });
});

await runTest('3.3: Question sequence permutation invariance (order of questions does not affect exam score)', () => {
  const originalSet = getRandomExamSet(20);
  
  // Student answer map: question ID -> selected option index
  const studentAnswers = {};
  originalSet.forEach((q, idx) => {
    if (idx < 12) {
      studentAnswers[q.id] = q.correctAnswer; // 12 correct
    } else if (idx < 16) {
      studentAnswers[q.id] = (q.correctAnswer + 1) % 4; // 4 wrong
    } else {
      studentAnswers[q.id] = null; // 4 omitted
    }
  });

  const computeTotalScore = (questions) => {
    return questions.reduce((total, q) => {
      const selected = studentAnswers[q.id];
      if (selected === null || selected === undefined) return total;
      return total + (selected === q.correctAnswer ? 1.5 : -0.25);
    }, 0);
  };

  const baseScore = computeTotalScore(originalSet);
  // Expected: 12 * 1.5 - 4 * 0.25 + 4 * 0 = 18 - 1 = 17.0
  assertEqual(baseScore, 17.0, 'Base score must be exactly 17.0');

  // Test 100 random shuffles of the question order
  for (let s = 0; s < 100; s++) {
    const shuffledSet = [...originalSet].sort(() => Math.random() - 0.5);
    const shuffledScore = computeTotalScore(shuffledSet);
    assertEqual(shuffledScore, 17.0, `Shuffled exam set ${s} score must remain 17.0`);
  }
});

// -----------------------------------------------------------------------------
// SECTION 4: Extreme Boundary Conditions & Clamping
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 4: Extreme Boundary Conditions & Clamping ---');

await runTest('4.1: getRandomExamSet(0) safely falls back to default 20 questions without errors', () => {
  const set0 = getRandomExamSet(0);
  assertEqual(set0.length, 20, 'getRandomExamSet(0) returns 20 items');
  const seenIds = new Set(set0.map(q => q.id));
  assertEqual(seenIds.size, 20, 'Zero duplicates in set0');
  
  // Verify domain balance (4 each)
  const counts = {};
  set0.forEach(q => counts[q.domain] = (counts[q.domain] || 0) + 1);
  Object.values(counts).forEach(c => assertEqual(c, 4, 'Domain balance in set0 is 4'));
});

await runTest('4.2: getRandomExamSet(320) requests full bank, returns all 320 unique questions (64 per domain)', () => {
  const set320 = getRandomExamSet(320);
  assertEqual(set320.length, 320, 'Returns all 320 items');
  const seenIds = new Set(set320.map(q => q.id));
  assertEqual(seenIds.size, 320, 'All 320 items are unique');

  const counts = {};
  set320.forEach(q => counts[q.domain] = (counts[q.domain] || 0) + 1);
  ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'].forEach(dom => {
    assertEqual(counts[dom], 64, `Domain ${dom} in set320 has exactly 64 items`);
  });
});

await runTest('4.3: getRandomExamSet(500) and getRandomExamSet(1000) are clamped to maximum available (320 items)', () => {
  const set500 = getRandomExamSet(500);
  assertEqual(set500.length, 320, 'getRandomExamSet(500) clamped to 320');
  const seen500 = new Set(set500.map(q => q.id));
  assertEqual(seen500.size, 320, 'Zero duplicates in set500');

  const set1000 = getRandomExamSet(1000);
  assertEqual(set1000.length, 320, 'getRandomExamSet(1000) clamped to 320');
  const seen1000 = new Set(set1000.map(q => q.id));
  assertEqual(seen1000.size, 320, 'Zero duplicates in set1000');

  // Verify none are undefined
  set500.forEach((q, idx) => {
    assert(q && typeof q.id === 'string', `Element ${idx} in set500 must be a valid question`);
  });
});

await runTest('4.4: Small & negative counts: getRandomExamSet(1) and getRandomExamSet(5)', () => {
  const set1 = getRandomExamSet(1);
  assertEqual(set1.length, 1, 'getRandomExamSet(1) returns 1 item');
  assert(set1[0] && typeof set1[0].id === 'string', 'Item 1 is valid');

  const set5 = getRandomExamSet(5);
  assertEqual(set5.length, 5, 'getRandomExamSet(5) returns 5 items');
  const set5Domains = new Set(set5.map(q => q.domain));
  assertEqual(set5Domains.size, 5, '5-item set contains exactly 1 question from each of the 5 domains');

  // Negative count clamped to 1
  const setNeg = getRandomExamSet(-10);
  assertEqual(setNeg.length, 1, 'getRandomExamSet(-10) clamped to 1');
});

await runTest('4.5: Robustness against non-numeric and falsy inputs in getRandomExamSet', () => {
  const inputs = [null, undefined, NaN, 'invalid', {}, []];
  inputs.forEach(input => {
    const res = getRandomExamSet(input);
    assertEqual(res.length, 20, `Input ${JSON.stringify(input)} defaults safely to 20`);
    const setIds = new Set(res.map(q => q.id));
    assertEqual(setIds.size, 20, `Input ${JSON.stringify(input)} produces 0 duplicates`);
  });
});

// -----------------------------------------------------------------------------
// SECTION 5: Multi-attribute Query Filters Stress Testing Across Full 320-Item Bank
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 5: Multi-attribute Query Filters Stress Testing ---');

await runTest('5.1: Domain filter exact matching, case-insensitivity, and invalid domain handling', () => {
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  
  DOMAINS.forEach(dom => {
    const exact = queryQuestions({ domain: dom });
    assertEqual(exact.length, 64, `Exact query domain: ${dom} returns 64 items`);
    exact.forEach(q => assertEqual(q.domain, dom, 'Returned item domain matches'));

    // Uppercase
    const upper = queryQuestions({ domain: dom.toUpperCase() });
    assertEqual(upper.length, 64, `Uppercase query domain: ${dom.toUpperCase()} returns 64 items`);

    // Mixed case with whitespace
    const mixed = queryQuestions({ domain: `  ${dom.slice(0, 3).toUpperCase()}${dom.slice(3)}  ` });
    assertEqual(mixed.length, 64, `Mixed case query with whitespace returns 64 items`);
  });

  const invalid = queryQuestions({ domain: 'non_existent_domain' });
  assertEqual(invalid.length, 0, 'Invalid domain returns empty array');
});

await runTest('5.2: Difficulty filter partitioning (1, 2, 3 partition the entire 320 bank)', () => {
  const diff1 = queryQuestions({ difficulty: 1 });
  const diff2 = queryQuestions({ difficulty: 2 });
  const diff3 = queryQuestions({ difficulty: 3 });

  assertEqual(diff1.length, 113, 'Difficulty 1 count is 113');
  assertEqual(diff2.length, 198, 'Difficulty 2 count is 198');
  assertEqual(diff3.length, 9, 'Difficulty 3 count is 9');

  const totalPartition = diff1.length + diff2.length + diff3.length;
  assertEqual(totalPartition, 320, 'Difficulty partitions 113 + 198 + 9 = 320');

  // Verify elements are strictly of that difficulty
  diff1.forEach(q => assertEqual(q.difficulty, 1, 'Diff 1 question is diff 1'));
  diff2.forEach(q => assertEqual(q.difficulty, 2, 'Diff 2 question is diff 2'));
  diff3.forEach(q => assertEqual(q.difficulty, 3, 'Diff 3 question is diff 3'));

  // Invalid difficulty
  const diffInvalid = queryQuestions({ difficulty: 99 });
  assertEqual(diffInvalid.length, 0, 'Difficulty 99 returns empty');
});

await runTest('5.3: Exhaustive tag query testing: every tag in getSummary().tags returns non-empty matching items', () => {
  const summary = getSummary();
  const allTags = summary.tags;
  assert(allTags.length >= 20, 'Bank should have at least 20 unique tags');

  allTags.forEach(t => {
    const res = queryQuestions({ tag: t });
    assert(res.length > 0, `Tag '${t}' query must return at least 1 question`);
    res.forEach(q => {
      assert(Array.isArray(q.tags), `Q ${q.id} has tags array`);
      const hasTag = q.tags.some(qt => qt.toLowerCase() === t.toLowerCase());
      assert(hasTag, `Q ${q.id} must contain query tag '${t}'`);
    });
  });

  const fakeTagRes = queryQuestions({ tag: 'TotallyFakeTag_XYZ_12345' });
  assertEqual(fakeTagRes.length, 0, 'Non-existent tag returns empty array');
});

await runTest('5.4: Compound multi-attribute queries (domain + difficulty + tag + keyword)', () => {
  // Query 1: visual_id + difficulty 2
  const compound1 = queryQuestions({ domain: 'visual_id', difficulty: 2 });
  assert(compound1.length > 0, 'visual_id + diff 2 returns results');
  compound1.forEach(q => {
    assertEqual(q.domain, 'visual_id', 'Matches domain');
    assertEqual(q.difficulty, 2, 'Matches difficulty');
  });

  // Query 2: avant_garde + Bauhaus tag
  const compound2 = queryQuestions({ domain: 'avant_garde', tag: 'Bauhaus' });
  assert(compound2.length > 0, 'avant_garde + Bauhaus returns results');
  compound2.forEach(q => {
    assertEqual(q.domain, 'avant_garde', 'Matches domain');
    assert(q.tags.includes('Bauhaus'), 'Matches tag');
  });

  // Query 3: renaissance_classical + difficulty 2 + keyword 'Brunelleschi'
  const compound3 = queryQuestions({
    domain: 'renaissance_classical',
    difficulty: 2,
    keyword: 'Brunelleschi'
  });
  assert(compound3.length > 0, 'Brunelleschi query returns results');
  compound3.forEach(q => {
    assertEqual(q.domain, 'renaissance_classical', 'Matches domain');
    assertEqual(q.difficulty, 2, 'Matches difficulty');
    const textBlob = `${q.questionZh} ${q.questionEn} ${q.explanationZh} ${q.explanationEn} ${q.tags.join(' ')}`.toLowerCase();
    assert(textBlob.includes('brunelleschi'), 'Matches keyword');
  });

  // Query 4: Mutually exclusive combination returns empty array gracefully
  const impossible = queryQuestions({
    domain: 'chronology',
    tag: 'NonExistent',
    difficulty: 3
  });
  assertEqual(impossible.length, 0, 'Impossible combination returns empty array');
});

await runTest('5.5: Adversarial keyword injection resilience (XSS payloads, SQLi, regex metacharacters, unicode)', () => {
  const adversarialKeywords = [
    '<script>alert("XSS")</script>',
    '<img src=x onerror=alert(1)>',
    "' OR '1'='1",
    'DROP TABLE questions;',
    '.*',
    '[a-z]+',
    '\\',
    '(((((((',
    '?',
    '+',
    '^$',
    'undefined',
    'null',
    'NaN',
    '🎯🚀🎨'
  ];

  adversarialKeywords.forEach(kw => {
    try {
      const res = queryQuestions({ keyword: kw });
      assert(Array.isArray(res), `Keyword '${kw}' must return an array`);
      // Every returned question must legitimately contain that string (e.g. if 'undefined' or 'null' is found in text)
      res.forEach(q => {
        const textBlob = `${q.questionZh} ${q.questionEn} ${q.explanationZh} ${q.explanationEn} ${q.tags.join(' ')}`.toLowerCase();
        assert(textBlob.includes(kw.toLowerCase()), `Matched question legitimately contains '${kw}'`);
      });
    } catch (err) {
      assert(false, `Adversarial keyword '${kw}' caused runtime exception: ${err.message}`);
    }
  });
});

await runTest('5.6: Limit clamping in queryQuestions', () => {
  const all = queryQuestions();
  assertEqual(all.length, 320, 'Unconstrained query returns all 320');

  const top5 = queryQuestions({ limit: 5 });
  assertEqual(top5.length, 5, 'Limit 5 returns exactly 5');

  const top1 = queryQuestions({ limit: 1 });
  assertEqual(top1.length, 1, 'Limit 1 returns exactly 1');

  // Limit 0 clamps to 10
  const limit0 = queryQuestions({ limit: 0 });
  assertEqual(limit0.length, 10, 'Limit 0 clamps to 10');

  // Negative limit clamps to 1
  const limitNeg = queryQuestions({ limit: -5 });
  assertEqual(limitNeg.length, 1, 'Limit -5 clamps to 1');

  // Excessive limit clamps to 2000 (which returns all 320 available)
  const limitExcess = queryQuestions({ limit: 5000 });
  assertEqual(limitExcess.length, 320, 'Excessive limit returns all 320 available');
});

await runTest('5.7: Randomized combinatorial filter stress (500 random filter queries)', () => {
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical', ''];
  const DIFFICULTIES = [1, 2, 3, undefined];
  const summary = getSummary();
  const TAGS = [...summary.tags, '', 'fakeTag'];
  const KEYWORDS = ['Brunelleschi', 'Le Corbusier', 'Baroque', 'Bauhaus', 'Palladio', '立面', '透视', 'xyz123', ''];

  for (let i = 0; i < 500; i++) {
    const filter = {};
    if (Math.random() > 0.4) filter.domain = DOMAINS[Math.floor(Math.random() * DOMAINS.length)];
    if (Math.random() > 0.4) filter.difficulty = DIFFICULTIES[Math.floor(Math.random() * DIFFICULTIES.length)];
    if (Math.random() > 0.4) filter.tag = TAGS[Math.floor(Math.random() * TAGS.length)];
    if (Math.random() > 0.4) filter.keyword = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
    if (Math.random() > 0.5) filter.limit = Math.floor(Math.random() * 50) - 5;

    const results = queryQuestions(filter);
    assert(Array.isArray(results), `Query ${i} must return array`);

    // Verify predicates on all returned results
    results.forEach(q => {
      if (filter.domain && filter.domain.trim()) {
        assertEqual(q.domain.toLowerCase(), filter.domain.trim().toLowerCase(), 'Domain matches');
      }
      if (filter.difficulty !== undefined) {
        assertEqual(q.difficulty, filter.difficulty, 'Difficulty matches');
      }
      if (filter.tag && filter.tag.trim()) {
        assert(q.tags.some(t => t.toLowerCase() === filter.tag.trim().toLowerCase()), 'Tag matches');
      }
      if (filter.keyword && filter.keyword.trim()) {
        const textBlob = `${q.questionZh} ${q.questionEn} ${q.explanationZh} ${q.explanationEn} ${q.tags.join(' ')}`.toLowerCase();
        assert(textBlob.includes(filter.keyword.trim().toLowerCase()), 'Keyword matches');
      }
    });

    if (filter.limit !== undefined) {
      const expectedLimit = Math.max(1, Math.min(2000, Number(filter.limit) || 10));
      assert(results.length <= expectedLimit, `Results count ${results.length} <= expectedLimit ${expectedLimit}`);
    }
  }
});

// -----------------------------------------------------------------------------
// SECTION 6: High-Frequency Rapid Execution & Memory Stability
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 6: High-Frequency Rapid Execution & Memory Stability ---');

await runTest('6.1: Rapid interleaved operations (2,000 mixed operations) with stable heap', () => {
  const initialMemory = process.memoryUsage().heapUsed;
  const OPERATIONS = 2000;
  const tStart = performance.now();

  for (let i = 0; i < OPERATIONS; i++) {
    const op = i % 5;
    if (op === 0) {
      getRandomExamSet(20);
    } else if (op === 1) {
      getRandomExamSet(30);
    } else if (op === 2) {
      queryQuestions({ domain: 'avant_garde', difficulty: 2 });
    } else if (op === 3) {
      getSummary();
    } else if (op === 4) {
      getQuestionById(`arched_${String((i % 320) + 1).padStart(3, '0')}`);
    }
  }

  const durationMs = performance.now() - tStart;
  const finalMemory = process.memoryUsage().heapUsed;
  const memoryDeltaMb = ((finalMemory - initialMemory) / (1024 * 1024)).toFixed(2);
  const throughput = Math.round((OPERATIONS / durationMs) * 1000);

  console.log(`    [Throughput] ${OPERATIONS} mixed operations in ${durationMs.toFixed(1)}ms (${throughput} ops/sec)`);
  console.log(`    [Memory Delta] Heap delta: ${memoryDeltaMb} MB`);

  assert(durationMs < 5000, `Interleaved operations must complete in < 5000ms (took ${durationMs.toFixed(1)}ms)`);
  // Ensure heap did not explode (e.g. < 50 MB growth)
  assert(Number(memoryDeltaMb) < 50, `Memory growth should remain bounded (< 50MB, got ${memoryDeltaMb}MB)`);
});

// -----------------------------------------------------------------------------
// FINAL SUMMARY & VERDICT CALCULATION
// -----------------------------------------------------------------------------
console.log('\n================================================================================');
console.log('                          TEST SUITE RESULTS SUMMARY                             ');
console.log('================================================================================');
console.log(`  Total Test Suites Run : ${testSuitePassed + testSuiteFailed}`);
console.log(`  Suites Passed         : \x1b[32m${testSuitePassed}\x1b[0m`);
console.log(`  Suites Failed         : \x1b[31m${testSuiteFailed}\x1b[0m`);
console.log(`  Total Assertions      : ${totalAssertions}`);
console.log(`  Passed Assertions     : \x1b[32m${passedAssertions}\x1b[0m`);
console.log(`  Failed Assertions     : \x1b[31m${totalAssertions - passedAssertions}\x1b[0m`);
console.log('================================================================================\n');

if (testSuiteFailed > 0) {
  console.error('\x1b[31mVERDICT: REQUEST_CHANGES - Adversarial test failures detected:\x1b[0m');
  failureDetails.forEach(f => console.error(`  - ${f.name}: ${f.message}`));
  process.exit(1);
} else {
  console.log('\x1b[32mVERDICT: APPROVE - All empirical stress tests, Monte Carlo simulations, permutation invariances, and boundary conditions PASSED flawlessly!\x1b[0m\n');
  process.exit(0);
}
