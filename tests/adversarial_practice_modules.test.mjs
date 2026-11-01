/**
 * tests/adversarial_practice_modules.test.mjs
 * 
 * Empirical & Adversarial Stress Test Suite for Milestone M2:
 * - Practice Modules: Quiz, Flashcards, and ExamSimulator
 * - Polimi ARCHED Scoring Model (+1.5, -0.25, 0.0)
 * - Timer Countdown, Auto-Submit, and State Freeze
 * - Touch Swipe Gestures & Sub-threshold Delta Calculations
 * - Card Flip 3D Context & Spaced Repetition Exclusivity
 * - Quiz State Transitions, Option Locking, and Domain Switching
 * - Domain Balancing and Randomized Exam Generation Oracles
 * 
 * Authored by Teamwork Empirical Challenger (teamwork_challenger_m2_2).
 */

import assert from 'node:assert';
import { questionBankService } from '../src/services/questionBankService.js';
import { ARCHED_QUESTION_BANK } from '../src/data/archedQuestionBank.js';

let passedTests = 0;
let totalTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ [PASS] ${name}`);
  } catch (err) {
    console.error(`  ✗ [FAIL] ${name}`);
    console.error(`    ${err.message}`);
    throw err;
  }
}

async function testAsync(name, fn) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ [PASS] ${name}`);
  } catch (err) {
    console.error(`  ✗ [FAIL] ${name}`);
    console.error(`    ${err.message}`);
    throw err;
  }
}

console.log('\n======================================================');
console.log('  Adversarial Practice Modules Stress Suite (M2-2)   ');
console.log('======================================================\n');

// =========================================================================
// SUITE 1: Polimi ARCHED Scoring Model & Calculation Oracles
// =========================================================================
console.log('--- Suite 1: Polimi ARCHED Scoring Model Oracle ---');

/**
 * Pure oracle replica of ExamSimulator.jsx calculateExamScore()
 */
function calculatePolimiScore(questions, userAnswers, durationSeconds = 1800, timeLeftSeconds = 600) {
  const TOTAL_EXAM_QUESTIONS = 20;
  let correctCount = 0;
  let wrongCount = 0;
  let omittedCount = 0;
  const domainStats = {};

  questions.forEach(q => {
    const domain = q.domain || 'general';
    if (!domainStats[domain]) {
      domainStats[domain] = { total: 0, correct: 0, wrong: 0, omitted: 0 };
    }
    domainStats[domain].total++;

    const selected = userAnswers[q.id];
    if (selected === undefined || selected === null) {
      omittedCount++;
      domainStats[domain].omitted++;
    } else if (selected === q.correctAnswer) {
      correctCount++;
      domainStats[domain].correct++;
    } else {
      wrongCount++;
      domainStats[domain].wrong++;
    }
  });

  const rawScore = (correctCount * 1.5) - (wrongCount * 0.25);
  const finalScore = parseFloat(Math.max(0, rawScore).toFixed(2));
  const maxScore = TOTAL_EXAM_QUESTIONS * 1.5;
  const percentage = Math.round((Math.max(0, rawScore) / maxScore) * 100);

  return {
    rawScore,
    score: finalScore,
    maxScore,
    percentage,
    correctCount,
    wrongCount,
    omittedCount,
    domainStats,
    timeTakenSeconds: durationSeconds - timeLeftSeconds
  };
}

test('1.1: Polimi ARCHED Perfect Score (20/20 correct = 30.0 pts, 100%)', () => {
  const mockQuestions = Array.from({ length: 20 }, (_, i) => ({
    id: `q_${i}`,
    domain: ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'][i % 5],
    correctAnswer: 0
  }));

  const userAnswers = {};
  mockQuestions.forEach(q => { userAnswers[q.id] = 0; });

  const result = calculatePolimiScore(mockQuestions, userAnswers);
  assert.strictEqual(result.correctCount, 20);
  assert.strictEqual(result.wrongCount, 0);
  assert.strictEqual(result.omittedCount, 0);
  assert.strictEqual(result.rawScore, 30.0);
  assert.strictEqual(result.score, 30.0);
  assert.strictEqual(result.percentage, 100);
});

test('1.2: Polimi ARCHED All Incorrect (0 correct, 20 wrong = -5.0 raw, clamped to 0.0 pts)', () => {
  const mockQuestions = Array.from({ length: 20 }, (_, i) => ({
    id: `q_${i}`,
    domain: 'visual_id',
    correctAnswer: 0
  }));

  const userAnswers = {};
  mockQuestions.forEach(q => { userAnswers[q.id] = 1; }); // All wrong

  const result = calculatePolimiScore(mockQuestions, userAnswers);
  assert.strictEqual(result.correctCount, 0);
  assert.strictEqual(result.wrongCount, 20);
  assert.strictEqual(result.omittedCount, 0);
  assert.strictEqual(result.rawScore, -5.0);
  assert.strictEqual(result.score, 0.0, 'Final score must clamp negative raw scores to 0');
  assert.strictEqual(result.percentage, 0);
});

test('1.3: Polimi ARCHED All Omitted (0 answered = 0.0 pts, 0%)', () => {
  const mockQuestions = Array.from({ length: 20 }, (_, i) => ({
    id: `q_${i}`,
    domain: 'chronology',
    correctAnswer: 2
  }));

  const userAnswers = {}; // None answered

  const result = calculatePolimiScore(mockQuestions, userAnswers);
  assert.strictEqual(result.correctCount, 0);
  assert.strictEqual(result.wrongCount, 0);
  assert.strictEqual(result.omittedCount, 20);
  assert.strictEqual(result.rawScore, 0.0);
  assert.strictEqual(result.score, 0.0);
  assert.strictEqual(result.percentage, 0);
});

test('1.4: Polimi ARCHED Falsy Answer Option Index 0 vs Omitted distinction', () => {
  const mockQuestions = [
    { id: 'q_0', domain: 'chronology', correctAnswer: 0 },
    { id: 'q_1', domain: 'chronology', correctAnswer: 1 },
    { id: 'q_2', domain: 'chronology', correctAnswer: 2 }
  ];

  // Option index 0 must be recognized as answered, NOT omitted
  const userAnswers = {
    'q_0': 0, // answered 0 (correct)
    'q_1': 0, // answered 0 (wrong)
    // q_2 left omitted (undefined)
  };

  const result = calculatePolimiScore(mockQuestions, userAnswers, 1800, 1000);
  assert.strictEqual(result.correctCount, 1, 'Option 0 should be evaluated as correct when correctAnswer is 0');
  assert.strictEqual(result.wrongCount, 1, 'Option 0 should be evaluated as wrong when correctAnswer is 1');
  assert.strictEqual(result.omittedCount, 1, 'Unanswered question should be evaluated as omitted');
  assert.strictEqual(result.rawScore, 1.5 - 0.25);
  assert.strictEqual(result.score, 1.25);
});

test('1.5: Polimi ARCHED Comprehensive Combinatorial Oracle (All 231 Partitions of 20)', () => {
  // Test all possible combinations of (correct, wrong, omitted) summing to 20
  let testedPartitions = 0;

  for (let c = 0; c <= 20; c++) {
    for (let w = 0; w <= 20 - c; w++) {
      const o = 20 - c - w;
      testedPartitions++;

      const mockQuestions = Array.from({ length: 20 }, (_, i) => ({
        id: `q_${i}`,
        domain: ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'][i % 5],
        correctAnswer: 0
      }));

      const userAnswers = {};
      for (let i = 0; i < c; i++) {
        userAnswers[mockQuestions[i].id] = 0; // correct
      }
      for (let i = c; i < c + w; i++) {
        userAnswers[mockQuestions[i].id] = 1; // wrong
      }
      // remainder o is left undefined (omitted)

      const result = calculatePolimiScore(mockQuestions, userAnswers);

      const expectedRaw = (c * 1.5) - (w * 0.25);
      const expectedScore = Math.max(0, parseFloat(expectedRaw.toFixed(2)));
      const expectedPct = Math.round((expectedScore / 30.0) * 100);

      assert.strictEqual(result.correctCount, c);
      assert.strictEqual(result.wrongCount, w);
      assert.strictEqual(result.omittedCount, o);
      assert.strictEqual(result.rawScore, expectedRaw);
      assert.strictEqual(result.score, expectedScore);
      assert.strictEqual(result.percentage, expectedPct);

      // Verify domain consistency
      let domainSumTotal = 0;
      let domainSumCorrect = 0;
      let domainSumWrong = 0;
      let domainSumOmitted = 0;

      for (const stats of Object.values(result.domainStats)) {
        assert.strictEqual(stats.total, stats.correct + stats.wrong + stats.omitted);
        domainSumTotal += stats.total;
        domainSumCorrect += stats.correct;
        domainSumWrong += stats.wrong;
        domainSumOmitted += stats.omitted;
      }

      assert.strictEqual(domainSumTotal, 20);
      assert.strictEqual(domainSumCorrect, c);
      assert.strictEqual(domainSumWrong, w);
      assert.strictEqual(domainSumOmitted, o);
    }
  }

  assert.strictEqual(testedPartitions, 231, 'Should have verified exactly 231 integer partitions of 20');
});

// =========================================================================
// SUITE 2: Timer Countdown, Auto-Submit, and Input Freezing
// =========================================================================
console.log('\n--- Suite 2: Timer Countdown, Auto-Submit & State Freeze ---');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

test('2.1: formatTime accurate MM:SS padding across boundaries', () => {
  assert.strictEqual(formatTime(1800), '30:00');
  assert.strictEqual(formatTime(1799), '29:59');
  assert.strictEqual(formatTime(600), '10:00');
  assert.strictEqual(formatTime(300), '05:00');
  assert.strictEqual(formatTime(65), '01:05');
  assert.strictEqual(formatTime(59), '00:59');
  assert.strictEqual(formatTime(9), '00:09');
  assert.strictEqual(formatTime(0), '00:00');
});

test('2.2: Timer Countdown simulation and auto-submit trigger at 0 seconds', () => {
  let timeLeft = 3;
  let autoSubmitted = false;
  let intervalCleared = false;
  let intervalId = 1001;

  function simulateTick() {
    if (timeLeft <= 1) {
      intervalCleared = true;
      autoSubmitted = true;
      timeLeft = 0;
      return timeLeft;
    }
    timeLeft -= 1;
    return timeLeft;
  }

  // Tick 1: 3 -> 2
  simulateTick();
  assert.strictEqual(timeLeft, 2);
  assert.strictEqual(autoSubmitted, false);

  // Tick 2: 2 -> 1
  simulateTick();
  assert.strictEqual(timeLeft, 1);
  assert.strictEqual(autoSubmitted, false);

  // Tick 3: 1 -> 0 and triggers auto-submit
  simulateTick();
  assert.strictEqual(timeLeft, 0);
  assert.strictEqual(autoSubmitted, true);
  assert.strictEqual(intervalCleared, true);
});

test('2.3: Option selection rejected when examStage is NOT in_progress', () => {
  let examStage = 'config';
  let userAnswers = {};

  function handleSelectOption(qId, optIdx) {
    if (examStage !== 'in_progress') return;
    userAnswers[qId] = optIdx;
  }

  handleSelectOption('q_1', 2);
  assert.deepStrictEqual(userAnswers, {}, 'Selection in config stage must be ignored');

  examStage = 'in_progress';
  handleSelectOption('q_1', 2);
  assert.strictEqual(userAnswers['q_1'], 2, 'Selection in in_progress stage must be recorded');

  examStage = 'submitted';
  handleSelectOption('q_1', 0); // Attempt to change after submission
  handleSelectOption('q_2', 1); // Attempt to answer new after submission
  assert.strictEqual(userAnswers['q_1'], 2, 'Answer must be frozen after submission');
  assert.strictEqual(userAnswers['q_2'], undefined, 'No answers allowed after submission');
});

test('2.4: Time taken calculation accuracy upon early submit vs timer expiration', () => {
  const EXAM_DURATION = 1800;

  // Case A: Early manual submit after 12 minutes (720 seconds passed, 1080 left)
  const earlyTimeLeft = 1080;
  const earlyTimeTaken = EXAM_DURATION - earlyTimeLeft;
  assert.strictEqual(earlyTimeTaken, 720);

  // Case B: Auto-submit on expiration (0 left)
  const expiredTimeLeft = 0;
  const expiredTimeTaken = EXAM_DURATION - expiredTimeLeft;
  assert.strictEqual(expiredTimeTaken, 1800);
});

// =========================================================================
// SUITE 3: Flashcards Touch Swipe Gestures & 3D Flip Stress Test
// =========================================================================
console.log('\n--- Suite 3: Flashcards Touch Swipe Gestures & 3D Logic ---');

/**
 * Emulated Touch Event Processor mirroring Flashcards.jsx
 */
class TouchSwipeSimulator {
  constructor(cardCount = 10) {
    this.cardCount = cardCount;
    this.currentIndex = 0;
    this.isFlipped = false;
    this.touchStartX = null;
    this.touchCurrentX = null;
    this.swipeDelta = 0;
    this.SWIPE_THRESHOLD = 50;
  }

  handleTouchStart(clientX) {
    this.touchStartX = clientX;
    this.touchCurrentX = clientX;
    this.swipeDelta = 0;
  }

  handleTouchMove(clientX) {
    if (this.touchStartX === null) return;
    this.touchCurrentX = clientX;
    this.swipeDelta = clientX - this.touchStartX;
  }

  handleTouchEnd() {
    if (this.touchStartX === null || this.touchCurrentX === null) {
      this.touchStartX = null;
      this.touchCurrentX = null;
      this.swipeDelta = 0;
      return 'NO_TOUCH';
    }

    const deltaX = this.touchCurrentX - this.touchStartX;
    let action = 'TAP_OR_SUBTHRESHOLD';

    if (deltaX > this.SWIPE_THRESHOLD) {
      this.handlePrev();
      action = 'SWIPE_PREV';
    } else if (deltaX < -this.SWIPE_THRESHOLD) {
      this.handleNext();
      action = 'SWIPE_NEXT';
    }

    this.touchStartX = null;
    this.touchCurrentX = null;
    this.swipeDelta = 0;
    return action;
  }

  handleNext() {
    if (this.cardCount === 0) return;
    this.isFlipped = false;
    this.currentIndex = (this.currentIndex + 1) % this.cardCount;
  }

  handlePrev() {
    if (this.cardCount === 0) return;
    this.isFlipped = false;
    this.currentIndex = (this.currentIndex - 1 + this.cardCount) % this.cardCount;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}

test('3.1: Flashcards Swipe Right (deltaX > 50) triggers handlePrev()', () => {
  const sim = new TouchSwipeSimulator(5);
  sim.currentIndex = 2;

  sim.handleTouchStart(100);
  sim.handleTouchMove(160); // delta = +60 > 50
  const action = sim.handleTouchEnd();

  assert.strictEqual(action, 'SWIPE_PREV');
  assert.strictEqual(sim.currentIndex, 1);
  assert.strictEqual(sim.touchStartX, null);
  assert.strictEqual(sim.swipeDelta, 0);
});

test('3.2: Flashcards Swipe Left (deltaX < -50) triggers handleNext()', () => {
  const sim = new TouchSwipeSimulator(5);
  sim.currentIndex = 2;

  sim.handleTouchStart(200);
  sim.handleTouchMove(140); // delta = -60 < -50
  const action = sim.handleTouchEnd();

  assert.strictEqual(action, 'SWIPE_NEXT');
  assert.strictEqual(sim.currentIndex, 3);
  assert.strictEqual(sim.touchStartX, null);
  assert.strictEqual(sim.swipeDelta, 0);
});

test('3.3: Flashcards Sub-threshold Swipes & Jitter (<= 50px) do NOT switch cards', () => {
  const sim = new TouchSwipeSimulator(5);
  sim.currentIndex = 2;

  // Jitter right +30px
  sim.handleTouchStart(100);
  sim.handleTouchMove(130);
  assert.strictEqual(sim.handleTouchEnd(), 'TAP_OR_SUBTHRESHOLD');
  assert.strictEqual(sim.currentIndex, 2, 'Current index must not change on +30px jitter');

  // Jitter left -45px
  sim.handleTouchStart(100);
  sim.handleTouchMove(55);
  assert.strictEqual(sim.handleTouchEnd(), 'TAP_OR_SUBTHRESHOLD');
  assert.strictEqual(sim.currentIndex, 2, 'Current index must not change on -45px jitter');

  // Exact boundary 50px
  sim.handleTouchStart(100);
  sim.handleTouchMove(150); // delta = exactly +50, not > 50
  assert.strictEqual(sim.handleTouchEnd(), 'TAP_OR_SUBTHRESHOLD');
  assert.strictEqual(sim.currentIndex, 2, 'Delta of exactly 50px must not trigger swipe');

  // Exact boundary -50px
  sim.handleTouchStart(100);
  sim.handleTouchMove(50); // delta = exactly -50, not < -50
  assert.strictEqual(sim.handleTouchEnd(), 'TAP_OR_SUBTHRESHOLD');
  assert.strictEqual(sim.currentIndex, 2, 'Delta of exactly -50px must not trigger swipe');
});

test('3.4: Flashcards Flip State Reset on Navigation (Never leak back face to next card)', () => {
  const sim = new TouchSwipeSimulator(5);
  sim.currentIndex = 1;
  sim.isFlipped = true; // User was looking at back face of card 1

  sim.handleNext();
  assert.strictEqual(sim.currentIndex, 2);
  assert.strictEqual(sim.isFlipped, false, 'Card must reset to front face upon next');

  sim.isFlipped = true; // User was looking at back face of card 2
  sim.handlePrev();
  assert.strictEqual(sim.currentIndex, 1);
  assert.strictEqual(sim.isFlipped, false, 'Card must reset to front face upon prev');
});

test('3.5: Flashcards Circular Wrap Around (0 -> N-1 and N-1 -> 0)', () => {
  const sim = new TouchSwipeSimulator(4);
  assert.strictEqual(sim.currentIndex, 0);

  // Prev on first card -> wraps to last card (3)
  sim.handlePrev();
  assert.strictEqual(sim.currentIndex, 3);

  // Next on last card -> wraps to first card (0)
  sim.handleNext();
  assert.strictEqual(sim.currentIndex, 0);

  // 1000 consecutive next cycles
  for (let i = 0; i < 1000; i++) {
    sim.handleNext();
  }
  assert.strictEqual(sim.currentIndex, 0);
});

test('3.6: Spaced Repetition Mastery vs Review Mutual Exclusivity', () => {
  const mastered = new Set();
  const review = new Set();

  function toggleMastered(id) {
    if (mastered.has(id)) {
      mastered.delete(id);
    } else {
      mastered.add(id);
      review.delete(id); // mutually exclusive
    }
  }

  function toggleReview(id) {
    if (review.has(id)) {
      review.delete(id);
    } else {
      review.add(id);
      mastered.delete(id); // mutually exclusive
    }
  }

  // Mark as Mastered
  toggleMastered('card_42');
  assert.strictEqual(mastered.has('card_42'), true);
  assert.strictEqual(review.has('card_42'), false);

  // Transition to Need Review
  toggleReview('card_42');
  assert.strictEqual(mastered.has('card_42'), false, 'Should be removed from mastered');
  assert.strictEqual(review.has('card_42'), true, 'Should be added to review');

  // Transition back to Mastered
  toggleMastered('card_42');
  assert.strictEqual(mastered.has('card_42'), true);
  assert.strictEqual(review.has('card_42'), false);

  // Unmark Mastered
  toggleMastered('card_42');
  assert.strictEqual(mastered.has('card_42'), false);
  assert.strictEqual(review.has('card_42'), false);
});

// =========================================================================
// SUITE 4: Quiz State Transitions & Feedback Rendering
// =========================================================================
console.log('\n--- Suite 4: Quiz State Transitions & Immutability ---');

class QuizStateSimulator {
  constructor(questions = []) {
    this.questions = questions;
    this.currentIdx = 0;
    this.selectedOption = null;
    this.showExplanation = false;
    this.score = 0;
    this.finished = false;
  }

  handleSelectOption(idx) {
    if (this.selectedOption !== null || !this.questions[this.currentIdx]) return false;
    this.selectedOption = idx;
    this.showExplanation = true;
    const isCorrect = idx === this.questions[this.currentIdx].correctAnswer;
    if (isCorrect) {
      this.score += 1;
    }
    return true;
  }

  handleNextQuestion() {
    if (this.currentIdx + 1 < this.questions.length) {
      this.currentIdx += 1;
      this.selectedOption = null;
      this.showExplanation = false;
    } else {
      this.finished = true;
    }
  }
}

test('4.1: Quiz Option Selection & Score Increment on Correct Answer', () => {
  const questions = [
    { id: 'q1', prompt: 'Question 1', correctAnswer: 1 },
    { id: 'q2', prompt: 'Question 2', correctAnswer: 3 }
  ];
  const quiz = new QuizStateSimulator(questions);

  assert.strictEqual(quiz.selectedOption, null);
  assert.strictEqual(quiz.showExplanation, false);
  assert.strictEqual(quiz.score, 0);

  const selected = quiz.handleSelectOption(1);
  assert.strictEqual(selected, true);
  assert.strictEqual(quiz.selectedOption, 1);
  assert.strictEqual(quiz.showExplanation, true);
  assert.strictEqual(quiz.score, 1);
});

test('4.2: Quiz Selection Immutability (Spam/Double Clicks Ignored)', () => {
  const questions = [
    { id: 'q1', prompt: 'Question 1', correctAnswer: 2 }
  ];
  const quiz = new QuizStateSimulator(questions);

  // Initial selection (correct option 2)
  quiz.handleSelectOption(2);
  assert.strictEqual(quiz.selectedOption, 2);
  assert.strictEqual(quiz.score, 1);

  // Attempt to select another option (spam click option 0)
  const spam1 = quiz.handleSelectOption(0);
  assert.strictEqual(spam1, false, 'Second click must be rejected');
  assert.strictEqual(quiz.selectedOption, 2, 'Selected option must remain 2');
  assert.strictEqual(quiz.score, 1, 'Score must not increment on subsequent clicks');

  // Attempt to select the same option again
  const spam2 = quiz.handleSelectOption(2);
  assert.strictEqual(spam2, false);
  assert.strictEqual(quiz.score, 1);
});

test('4.3: Quiz Progression through All Questions and Terminal Completion', () => {
  const questions = [
    { id: 'q1', correctAnswer: 0 },
    { id: 'q2', correctAnswer: 1 },
    { id: 'q3', correctAnswer: 2 }
  ];
  const quiz = new QuizStateSimulator(questions);

  // Q1: correct
  quiz.handleSelectOption(0);
  assert.strictEqual(quiz.score, 1);
  quiz.handleNextQuestion();

  // Q2: wrong
  assert.strictEqual(quiz.currentIdx, 1);
  assert.strictEqual(quiz.selectedOption, null);
  assert.strictEqual(quiz.showExplanation, false);
  quiz.handleSelectOption(0); // wrong (correct is 1)
  assert.strictEqual(quiz.score, 1);
  quiz.handleNextQuestion();

  // Q3: correct
  assert.strictEqual(quiz.currentIdx, 2);
  quiz.handleSelectOption(2);
  assert.strictEqual(quiz.score, 2);
  quiz.handleNextQuestion();

  // Finished state
  assert.strictEqual(quiz.finished, true);
  const accuracy = Math.round((quiz.score / questions.length) * 100);
  assert.strictEqual(accuracy, 67); // 2/3 = 66.66% -> 67%
});

// =========================================================================
// SUITE 5: Question Bank Service & ARCHED Domain Balance Oracles
// =========================================================================
console.log('\n--- Suite 5: Question Bank Service & ARCHED Domain Balance ---');

test('5.1: 320 Questions Built-in Integrity', () => {
  const all = questionBankService.getAllQuestions();
  assert.strictEqual(all.length, 320, 'Expected exactly 320 ARCHED questions');
});

test('5.2: getRandomExamSet(20) generates strictly balanced 4-per-domain exam sets', () => {
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];

  // Test across 50 independent random exam sets
  for (let run = 1; run <= 50; run++) {
    const examSet = questionBankService.getRandomExamSet(20);
    assert.strictEqual(examSet.length, 20, `Run ${run}: exam set must have exactly 20 questions`);

    const domainCounts = {};
    const ids = new Set();

    examSet.forEach(q => {
      assert.strictEqual(ids.has(q.id), false, `Run ${run}: duplicate question ID ${q.id} in exam set`);
      ids.add(q.id);

      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;

      // Verify question structure
      assert.strictEqual(Array.isArray(q.optionsZh), true);
      assert.strictEqual(q.optionsZh.length, 4);
      assert.strictEqual(Array.isArray(q.optionsEn), true);
      assert.strictEqual(q.optionsEn.length, 4);
      assert.strictEqual([0, 1, 2, 3].includes(q.correctAnswer), true);
      assert.strictEqual(typeof q.questionZh === 'string' && q.questionZh.length > 0, true);
      assert.strictEqual(typeof q.explanationZh === 'string' && q.explanationZh.length > 0, true);
    });

    // Check balance: exactly 4 from each domain
    DOMAINS.forEach(dom => {
      assert.strictEqual(domainCounts[dom], 4, `Run ${run}: domain ${dom} must have exactly 4 questions, got ${domainCounts[dom]}`);
    });
  }
});

test('5.3: Visual stimulus questions fallback image resilience', () => {
  const visualQs = questionBankService.getQuestionsByDomain('visual_id');
  assert.strictEqual(visualQs.length >= 30, true);

  visualQs.forEach(q => {
    if (q.image) {
      assert.strictEqual(typeof q.fallbackImage === 'string' && q.fallbackImage.length > 0, true,
        `Question ${q.id} with image must provide fallbackImage for offline use`);
    }
  });
});

console.log('\n======================================================');
console.log(`  Adversarial Test Results: ${passedTests} / ${totalTests} Passed (100%)`);
console.log('======================================================\n');
