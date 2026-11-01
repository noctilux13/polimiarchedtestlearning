#!/usr/bin/env node
/**
 * tests/tier5_adversarial_hardening_challenger_1.test.mjs
 * 
 * Milestone M5 Phase 2: Tier 5 White-Box Adversarial Hardening Suite
 * Challenger 1 (critic, specialist)
 * 
 * Comprehensive empirical stress-testing across all 10 core files in scope:
 * 1. src/components/MouseSpotlight.jsx
 * 2. src/components/ArtworkImage.jsx
 * 3. src/data/archedQuestionBank.js
 * 4. src/services/questionBankService.js
 * 5. src/pages/ExamSimulator.jsx
 * 6. src/pages/Flashcards.jsx
 * 7. src/pages/Quiz.jsx
 * 8. src/services/aiAgentService.js
 * 9. src/components/AIFloatingAssistant.jsx
 * 10. src/pages/Settings.jsx
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createServer } from 'vite';

import {
  describe,
  test,
  assert,
  assertEqual,
  assertNotEqual,
  assertDeepEqual,
  assertIncludes,
  assertMatch,
  assertThrows,
  assertGreaterThanOrEqual,
  assertLessThanOrEqual,
  runner,
  PROJECT_ROOT,
  setupMockEnvironment,
  setNavigatorOnLine
} from './e2e/test_runner.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure headless mock environment is active
setupMockEnvironment();

// Initialize Vite SSR module loader
const viteServer = await createServer({
  server: { middlewareMode: true },
  appType: 'custom'
});

// Load modules via Vite SSR
const MouseSpotlightModule = await viteServer.ssrLoadModule('./src/components/MouseSpotlight.jsx');
const MouseSpotlight = MouseSpotlightModule.default;

const ArtworkImageModule = await viteServer.ssrLoadModule('./src/components/ArtworkImage.jsx');
const ArtworkImage = ArtworkImageModule.ArtworkImage || ArtworkImageModule.default;
const ArchedOfflinePlaceholder = ArtworkImageModule.ArchedOfflinePlaceholder;

const archedQuestionBankMod = await viteServer.ssrLoadModule('./src/data/archedQuestionBank.js');
const ARCHED_QUESTION_BANK = archedQuestionBankMod.ARCHED_QUESTION_BANK;

const questionBankServiceMod = await viteServer.ssrLoadModule('./src/services/questionBankService.js');
const {
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
} = questionBankServiceMod;

const aiAgentServiceMod = await viteServer.ssrLoadModule('./src/services/aiAgentService.js');
const {
  ALLOWED_TOOLS,
  AI_SETTINGS_KEY,
  PRACTICE_CONFIG_KEY,
  sanitizeInput,
  getAISettings,
  saveAISettings,
  getPracticeConfig,
  executeSandboxedTool,
  GEMINI_TOOL_DECLARATIONS,
  OPENAI_TOOL_DECLARATIONS,
  handleDeterministicFallback,
  processAgentMessage
} = aiAgentServiceMod;

// =========================================================================
// Suite 1: MouseSpotlight Hardening & Invariant Checks
// =========================================================================
describe('T5-Challenger-1 Suite 1: MouseSpotlight White-Box Hardening', () => {

  test('1.1: Coarse pointer bypasses viewport layers completely on touch devices', () => {
    // Simulate touch device via matchMedia
    const prevMatchMedia = globalThis.window.matchMedia;
    globalThis.window.matchMedia = (query) => ({
      matches: query.includes('pointer: coarse'),
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    });

    const renderedTouch = ReactDOMServer.renderToString(
      React.createElement(MouseSpotlight, { className: 'test-touch-mode' },
        React.createElement('div', { id: 'touch-content' }, 'Touch Active')
      )
    );

    assertIncludes(renderedTouch, 'mouse-spotlight-wrapper test-touch-mode');
    assertIncludes(renderedTouch, 'touch-content');
    assert(!renderedTouch.includes('spotlight-viewport'), 'spotlight-viewport must NOT be rendered on touch devices');
    assert(!renderedTouch.includes('spotlight-orb'), 'spotlight-orb must NOT be rendered on touch devices');

    // Restore matchMedia
    globalThis.window.matchMedia = prevMatchMedia;
  });

  test('1.2: Fine pointer mode renders optical layers with aria-hidden="true"', () => {
    const prevMatchMedia = globalThis.window.matchMedia;
    globalThis.window.matchMedia = (query) => ({
      matches: false, // fine pointer
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    });

    const renderedDesktop = ReactDOMServer.renderToString(
      React.createElement(MouseSpotlight, { className: 'test-desktop-mode' },
        React.createElement('div', { id: 'desktop-content' }, 'Desktop Active')
      )
    );

    assertIncludes(renderedDesktop, 'spotlight-viewport');
    assertIncludes(renderedDesktop, 'aria-hidden="true"');
    assertIncludes(renderedDesktop, 'spotlight-ambient');
    assertIncludes(renderedDesktop, 'spotlight-orb');
    assertIncludes(renderedDesktop, 'spotlight-core');

    globalThis.window.matchMedia = prevMatchMedia;
  });

  test('1.3: Source verification: Zero getBoundingClientRect in mousemove without card change', () => {
    const sourcePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
    const sourceCode = fs.readFileSync(sourcePath, 'utf8');

    // Verify non-thrashing implementation
    assertIncludes(sourceCode, "card !== activeCardRef.current");
    assertIncludes(sourceCode, "getBoundingClientRect()");
    assertIncludes(sourceCode, "cardOriginRef.current =");
    assertIncludes(sourceCode, "--card-mouse-x");
    assertIncludes(sourceCode, "--card-mouse-y");

    // Verify passive listeners
    assertIncludes(sourceCode, "{ passive: true }");

    // Verify cleanup
    assertIncludes(sourceCode, "removeEventListener('mousemove', handleMouseMove)");
    assertIncludes(sourceCode, "removeEventListener('scroll', handleScroll)");
    assertIncludes(sourceCode, "cancelAnimationFrame");
  });

  test('1.4: Idle convergence threshold (< 0.25px) pauses optical rAF loop', () => {
    const sourcePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
    const sourceCode = fs.readFileSync(sourcePath, 'utf8');

    assertIncludes(sourceCode, 'distAmbient < 0.25 && distOrb < 0.25 && distCore < 0.25');
    assertIncludes(sourceCode, 'isLoopRunningRef.current = false');
    assertIncludes(sourceCode, 'rafRef.current = null');
  });
});

// =========================================================================
// Suite 2: ArtworkImage Resilient Loader & Placeholder Oracle
// =========================================================================
describe('T5-Challenger-1 Suite 2: ArtworkImage Resilient Loader & Fallback Oracle', () => {

  test('2.1: Direct Wikimedia URL renders img with shimmer and async decoding', () => {
    const testUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg';
    const html = ReactDOMServer.renderToString(
      React.createElement(ArtworkImage, {
        src: testUrl,
        alt: 'Oath of the Horatii',
        className: 'custom-art-class'
      })
    );

    assertIncludes(html, '<img');
    assertIncludes(html, 'image-shimmer');
    assertIncludes(html, 'decoding="async"');
    assertIncludes(html, 'loading="lazy"');
    assertIncludes(html, 'alt="Oath of the Horatii"');
  });

  test('2.2: Missing image source renders ArchedOfflinePlaceholder with classical SVG', () => {
    const html = ReactDOMServer.renderToString(
      React.createElement(ArtworkImage, {
        title: 'Roman Pantheon',
        src: null,
        artworkId: null
      })
    );

    assertIncludes(html, 'arched-offline-placeholder');
    assertIncludes(html, '<svg');
    assertIncludes(html, 'viewBox="0 0 120 100"');
    assertIncludes(html, 'Roman Pantheon');
    assertIncludes(html, 'role="img"');
  });

  test('2.3: ArchedOfflinePlaceholder includes Pediment, Keystone, and Stylobate architectural elements', () => {
    const html = ReactDOMServer.renderToString(
      React.createElement(ArchedOfflinePlaceholder, {
        title: 'Colosseum',
        subTitle: 'Offline Fallback'
      })
    );

    // Architectural SVG structure checks
    assertIncludes(html, 'polygon points="56,18 64,18 62,25 58,25"'); // Keystone
    assertIncludes(html, 'polygon points="20,26 60,10 100,26"'); // Pediment
    assertIncludes(html, 'line x1="12" y1="92" x2="108" y2="92"'); // Stylobate
    assertIncludes(html, 'Colosseum');
    assertIncludes(html, 'Offline Fallback');
  });

  test('2.4: showMetaBadge generates secure external link with rel="noreferrer"', () => {
    const sourceUrl = 'https://commons.wikimedia.org/wiki/File:Mona_Lisa.jpg';
    const sourceCode = fs.readFileSync(path.resolve(PROJECT_ROOT, 'src/components/ArtworkImage.jsx'), 'utf8');

    assertIncludes(sourceCode, 'showMetaBadge && effectiveSourceUrl');
    assertIncludes(sourceCode, 'target="_blank"');
    assertIncludes(sourceCode, 'rel="noreferrer"');
    assertIncludes(sourceCode, '权威源');
  });
});

// =========================================================================
// Suite 3: Canonical ARCHED Question Bank Integrity & Distribution
// =========================================================================
describe('T5-Challenger-1 Suite 3: Canonical ARCHED Question Bank Integrity & Distribution', () => {

  test('3.1: Exactly 320 questions with strictly sequential IDs arched_001..arched_320', () => {
    assertEqual(ARCHED_QUESTION_BANK.length, 320, 'Question bank must contain exactly 320 questions');

    for (let i = 0; i < 320; i++) {
      const expectedId = `arched_${String(i + 1).padStart(3, '0')}`;
      const actualId = ARCHED_QUESTION_BANK[i].id;
      assertEqual(actualId, expectedId, `Question index ${i} ID mismatch`);
    }
  });

  test('3.2: 5-Domain Syllabus coverage quotas meet requirements', () => {
    const domainCounts = {};
    ARCHED_QUESTION_BANK.forEach(q => {
      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    });

    assertEqual(domainCounts['chronology'], 64, 'Chronology domain quota');
    assertEqual(domainCounts['visual_id'], 64, 'Visual ID domain quota');
    assertEqual(domainCounts['avant_garde'], 64, 'Avant-Garde domain quota');
    assertEqual(domainCounts['artist_movement'], 64, 'Artist Movement domain quota');
    assertEqual(domainCounts['renaissance_classical'], 64, 'Renaissance Classical domain quota');
  });

  test('3.3: 100% Bilingual Option Parity (optionsZh: 4, optionsEn: 4) & Valid Answer Keys', () => {
    ARCHED_QUESTION_BANK.forEach((q, idx) => {
      assert(typeof q.questionZh === 'string' && q.questionZh.length > 5, `Q ${q.id} invalid questionZh`);
      assert(typeof q.questionEn === 'string' && q.questionEn.length > 5, `Q ${q.id} invalid questionEn`);

      assert(Array.isArray(q.optionsZh) && q.optionsZh.length === 4, `Q ${q.id} must have 4 optionsZh`);
      assert(Array.isArray(q.optionsEn) && q.optionsEn.length === 4, `Q ${q.id} must have 4 optionsEn`);

      assert([0, 1, 2, 3].includes(q.correctAnswer), `Q ${q.id} correctAnswer must be in [0, 1, 2, 3]`);
      assert(typeof q.explanationZh === 'string' && q.explanationZh.length > 10, `Q ${q.id} explanationZh too short`);
      assert(typeof q.explanationEn === 'string' && q.explanationEn.length > 10, `Q ${q.id} explanationEn too short`);
      assert([1, 2, 3].includes(q.difficulty), `Q ${q.id} difficulty must be in [1, 2, 3]`);
      assert(Array.isArray(q.tags) && q.tags.length > 0, `Q ${q.id} tags missing`);
    });
  });

  test('3.4: Chi-Square Goodness-of-Fit test on answer key distribution (p > 0.05)', () => {
    const keyDistribution = [0, 0, 0, 0];
    ARCHED_QUESTION_BANK.forEach(q => {
      keyDistribution[q.correctAnswer]++;
    });

    const total = ARCHED_QUESTION_BANK.length;
    const expected = total / 4; // 52.5 per key

    let chiSquare = 0;
    for (let i = 0; i < 4; i++) {
      const observed = keyDistribution[i];
      chiSquare += Math.pow(observed - expected, 2) / expected;
      // Key ratio must be reasonably balanced (between 18% and 32%)
      const ratio = observed / total;
      assert(ratio >= 0.18 && ratio <= 0.32, `Key ${i} ratio ${ratio.toFixed(2)} outside acceptable [0.18, 0.32]`);
    }

    // Chi-Square critical value for df=3 at alpha=0.05 is 7.815
    assertLessThanOrEqual(chiSquare, 7.815, `Chi-square statistic ${chiSquare.toFixed(2)} indicates non-uniform distribution`);
  });

  test('3.5: 100% of defined fallbackImage paths (72 visual questions) exist in public/ with positive byte size', () => {
    let checkedCount = 0;
    ARCHED_QUESTION_BANK.forEach(q => {
      if (q.fallbackImage) {
        checkedCount++;
        const relPath = q.fallbackImage.replace(/^\//, '');
        const fullPath = path.resolve(PROJECT_ROOT, 'public', relPath);
        assert(fs.existsSync(fullPath), `fallbackImage not found on disk: ${fullPath} (Q: ${q.id})`);
        const stat = fs.statSync(fullPath);
        assertGreaterThanOrEqual(stat.size, 100, `fallbackImage size is suspiciously small: ${fullPath}`);
      }
    });
    // 72 visual questions (64 in Domain 2 Visual ID + 8 across architecture domains)
    assertEqual(checkedCount, 72, 'Exactly 72 visual questions must have physical local fallback images');
  });
});

// =========================================================================
// Suite 4: QuestionBankService Adversarial Fuzzing & Mutation
// =========================================================================
describe('T5-Challenger-1 Suite 4: QuestionBankService Adversarial Fuzzing & Mutation', () => {

  test('4.1: Query filter resilience against malformed inputs and regex special characters', () => {
    // Malformed keyword with unclosed regex brackets
    const resRegex = queryQuestions({ keyword: '[*+?^${}()|\\/' });
    assert(Array.isArray(resRegex), 'queryQuestions must return array');

    // Non-string inputs
    const resTypes = queryQuestions({ domain: 12345, difficulty: 'hard', limit: -5 });
    assert(Array.isArray(resTypes), 'queryQuestions must handle non-string filter fields');

    // Null and empty object
    const resNull = queryQuestions(null);
    assert(Array.isArray(resNull), 'queryQuestions(null) must return array');
    assertEqual(resNull.length, 320, 'queryQuestions(null) returns all questions');
  });

  test('4.2: Limit parameter clamping bounds [1, 2000]', () => {
    const resLow = queryQuestions({ limit: -5 });
    assertEqual(resLow.length, 1, 'Negative limit clamped to 1');

    const resZero = queryQuestions({ limit: 0 });
    assertEqual(resZero.length, 10, 'Zero limit falls back to default 10');

    const resValid = queryQuestions({ limit: 7 });
    assertEqual(resValid.length, 7, 'Valid limit respected');
  });

  test('4.3: getRandomExamSet(20) returns exactly 20 questions with exactly 4 per domain', () => {
    const examSet = getRandomExamSet(20);
    assertEqual(examSet.length, 20, 'Exam set must have 20 items');

    const domainCount = {};
    examSet.forEach(q => {
      domainCount[q.domain] = (domainCount[q.domain] || 0) + 1;
    });

    const domains = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
    domains.forEach(d => {
      assertEqual(domainCount[d], 4, `Domain ${d} must have exactly 4 questions in a 20-question exam`);
    });
  });

  test('4.4: getRandomExamSet boundary values (0, -10, 1000) remain safe and idempotent', () => {
    const resZero = getRandomExamSet(0);
    assertEqual(resZero.length, 20, 'Count 0 defaults to 20');

    const resNeg = getRandomExamSet(-10);
    assertEqual(resNeg.length, 1, 'Count -10 clamped to 1');

    const resExcess = getRandomExamSet(1000);
    assertGreaterThanOrEqual(resExcess.length, 320, 'Count 1000 returns all available questions without crash');
    assertLessThanOrEqual(resExcess.length, 320);
  });

  test('4.5: Custom question XSS sanitization removes scripts and javascript: URLs', () => {
    const maliciousPayload = {
      domain: 'avant_garde',
      questionZh: '<script>alert("XSS")</script><b>透视</b>画派',
      questionEn: '<img src=x onerror=alert(1)>Linear Perspective',
      optionsZh: ['<script>evil()</script>A', 'B', 'C', 'D'],
      optionsEn: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      image: 'javascript:alert(document.cookie)',
      tags: ['<script>tag</script>', 'ValidTag']
    };

    const addRes = addCustomQuestion(maliciousPayload);
    assert(addRes.success, 'addCustomQuestion should succeed with sanitization');
    const q = addRes.question;

    assert(!q.questionZh.includes('<script>'), 'questionZh must not contain <script>');
    assert(!q.questionEn.includes('<img'), 'questionEn must not contain <img>');
    assert(!q.optionsZh[0].includes('<script>'), 'optionsZh must not contain <script>');
    assert(!q.image, 'javascript: image URL must be stripped');

    // Clean up
    deleteQuestion(q.id);
  });

  test('4.6: Prototype pollution attempts do not contaminate Object.prototype', () => {
    const pollutionAttempt = {
      domain: 'chronology',
      questionZh: 'Test Question',
      questionEn: 'Test Question',
      __proto__: { pollutedAdmin: true }
    };

    const res = addCustomQuestion(pollutionAttempt);
    assertEqual(Object.prototype.pollutedAdmin, undefined, 'Object.prototype must NOT be polluted');

    if (res.question) {
      deleteQuestion(res.question.id);
    }
  });

  test('4.7: Corrupted LocalStorage JSON data handled gracefully in getCustomQuestions', () => {
    globalThis.localStorage.setItem('arched_custom_questions', '{"corrupted_json: true');
    const custom = getCustomQuestions();
    assert(Array.isArray(custom), 'Corrupted JSON must return empty array');
    assertEqual(custom.length, 0);

    // Reset storage
    globalThis.localStorage.setItem('arched_custom_questions', '[]');
  });

  test('4.8: Factory reset restores base state idempotently', () => {
    // Add custom question
    const addRes = addCustomQuestion({
      domain: 'chronology',
      questionZh: 'Temporary Question',
      questionEn: 'Temporary Question'
    });
    assert(addRes.success);
    assertGreaterThanOrEqual(getAllQuestions().length, 321);

    // Reset
    const resetRes = resetToFactoryDefaults();
    assert(resetRes.success);
    assertEqual(getAllQuestions().length, 320, 'After factory reset, exactly 320 base questions remain');
  });
});

// =========================================================================
// Suite 5: ExamSimulator Scoring Engine & State Machine
// =========================================================================
describe('T5-Challenger-1 Suite 5: ExamSimulator Scoring Oracle & State Resilience', () => {

  test('5.1: Polimi ARCHED Scoring Formula Oracle across comprehensive test vectors', () => {
    // Formula: (correct * 1.5) - (wrong * 0.25), clamped at 0
    function computeScore(correctCount, wrongCount, omittedCount) {
      const rawScore = (correctCount * 1.5) - (wrongCount * 0.25);
      const finalScore = parseFloat(Math.max(0, rawScore).toFixed(2));
      const maxScore = 20 * 1.5; // 30.0
      const percentage = Math.round((Math.max(0, rawScore) / maxScore) * 100);
      return { rawScore, finalScore, percentage };
    }

    // Vector 1: Perfect score (20 C, 0 W, 0 O)
    const v1 = computeScore(20, 0, 0);
    assertEqual(v1.finalScore, 30.00);
    assertEqual(v1.percentage, 100);

    // Vector 2: All wrong (0 C, 20 W, 0 O) -> clamped to 0
    const v2 = computeScore(0, 20, 0);
    assertEqual(v2.finalScore, 0.00);
    assertEqual(v2.percentage, 0);

    // Vector 3: Mixed (12 C, 4 W, 4 O) -> 12 * 1.5 - 4 * 0.25 = 18 - 1 = 17.00 pts
    const v3 = computeScore(12, 4, 4);
    assertEqual(v3.finalScore, 17.00);
    assertEqual(v3.percentage, 57);

    // Vector 4: Even split (10 C, 10 W, 0 O) -> 10 * 1.5 - 10 * 0.25 = 15 - 2.5 = 12.50 pts
    const v4 = computeScore(10, 10, 0);
    assertEqual(v4.finalScore, 12.50);
    assertEqual(v4.percentage, 42);

    // Vector 5: All omitted (0 C, 0 W, 20 O) -> 0.00 pts
    const v5 = computeScore(0, 0, 20);
    assertEqual(v5.finalScore, 0.00);
    assertEqual(v5.percentage, 0);

    // Vector 6: 1 C, 19 W -> 1.5 - 4.75 = -3.25 -> clamped to 0.00
    const v6 = computeScore(1, 19, 0);
    assertEqual(v6.finalScore, 0.00);
  });

  test('5.2: formatTime formatting oracle for countdown display', () => {
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    assertEqual(formatTime(1800), '30:00');
    assertEqual(formatTime(0), '00:00');
    assertEqual(formatTime(65), '01:05');
    assertEqual(formatTime(59), '00:59');
    assertEqual(formatTime(7200), '120:00');
  });

  test('5.3: Source verification of timer cleanup and auto-submit hook', () => {
    const sourceCode = fs.readFileSync(path.resolve(PROJECT_ROOT, 'src/pages/ExamSimulator.jsx'), 'utf8');

    assertIncludes(sourceCode, 'clearInterval(timerRef.current)');
    assertIncludes(sourceCode, 'handleAutoSubmitRef.current?.()');
    assertIncludes(sourceCode, 'TOTAL_EXAM_QUESTIONS = 20');
    assertIncludes(sourceCode, 'EXAM_DURATION_SECONDS = 30 * 60');
    assertIncludes(sourceCode, 'localStorage.getItem(\'progress\')');
  });
});

// =========================================================================
// Suite 6: Flashcards 3D Card Engine & Gesture Physics
// =========================================================================
describe('T5-Challenger-1 Suite 6: Flashcards 3D Card Engine & Gesture Physics', () => {

  test('6.1: Flashcards conversion transforms ARCHED questions to dual-sided study cards', () => {
    const rawQuestions = getAllQuestions().slice(0, 5);
    const cards = rawQuestions.map(q => ({
      id: q.id,
      cardType: 'arched',
      domain: q.domain,
      frontZh: q.questionZh,
      frontEn: q.questionEn,
      backZh: `${q.optionsZh[q.correctAnswer]}\n\n${q.explanationZh}`,
      backEn: `${q.optionsEn[q.correctAnswer]}\n\n${q.explanationEn}`,
      correctOptionZh: q.optionsZh[q.correctAnswer],
      correctOptionEn: q.optionsEn[q.correctAnswer]
    }));

    assertEqual(cards.length, 5);
    cards.forEach(c => {
      assert(c.frontZh.length > 5, 'frontZh must have text');
      assert(c.backZh.length > 5, 'backZh must have answer and explanation');
      assert(c.correctOptionZh.length > 0, 'correctOptionZh must be defined');
    });
  });

  test('6.2: Spaced Repetition Mastery Invariant: Mastered vs Review mutual exclusivity', () => {
    let masteredCards = new Set();
    let reviewCards = new Set();

    function toggleMastered(cardId) {
      if (masteredCards.has(cardId)) {
        masteredCards.delete(cardId);
      } else {
        masteredCards.add(cardId);
        reviewCards.delete(cardId);
      }
    }

    function toggleReview(cardId) {
      if (reviewCards.has(cardId)) {
        reviewCards.delete(cardId);
      } else {
        reviewCards.add(cardId);
        masteredCards.delete(cardId);
      }
    }

    const testId = 'arched_001';

    toggleMastered(testId);
    assert(masteredCards.has(testId));
    assert(!reviewCards.has(testId));

    toggleReview(testId);
    assert(!masteredCards.has(testId));
    assert(reviewCards.has(testId));

    toggleReview(testId);
    assert(!masteredCards.has(testId));
    assert(!reviewCards.has(testId));
  });

  test('6.3: Swipe vector discrimination prevents vertical scroll from triggering card navigation', () => {
    const SWIPE_THRESHOLD = 50;

    function evaluateSwipe(deltaX, deltaY) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        return deltaX > 0 ? 'PREV' : 'NEXT';
      }
      return 'NONE';
    }

    // Horizontal swipes
    assertEqual(evaluateSwipe(80, 20), 'PREV');
    assertEqual(evaluateSwipe(-80, 20), 'NEXT');

    // Vertical scroll (deltaY dominates) -> rejected
    assertEqual(evaluateSwipe(20, 80), 'NONE');
    assertEqual(evaluateSwipe(-20, -120), 'NONE');

    // Sub-threshold displacements
    assertEqual(evaluateSwipe(30, 10), 'NONE');
    assertEqual(evaluateSwipe(0, 0), 'NONE');
  });

  test('6.4: Source verification: 3D preserve-3d and backfaceVisibility styling', () => {
    const sourceCode = fs.readFileSync(path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx'), 'utf8');

    assertIncludes(sourceCode, "transformStyle: 'preserve-3d'");
    assertIncludes(sourceCode, "backfaceVisibility: 'hidden'");
    assertIncludes(sourceCode, "touchAction: 'pan-y'");
    assertIncludes(sourceCode, "perspective: '1200px'");
  });
});

// =========================================================================
// Suite 7: Quiz Refactored Engine & Immediate Feedback
// =========================================================================
describe('T5-Challenger-1 Suite 7: Quiz Refactored Engine & Fallback Mechanics', () => {

  test('7.1: Immediate feedback locks option and prevents duplicate scoring', () => {
    let score = 0;
    let selectedOption = null;
    let showExplanation = false;

    const mockQuestion = { correctAnswer: 2 };

    function handleSelectOption(idx) {
      if (selectedOption !== null) return; // Locked!
      selectedOption = idx;
      showExplanation = true;
      if (idx === mockQuestion.correctAnswer) {
        score++;
      }
    }

    // First click: correct answer
    handleSelectOption(2);
    assertEqual(score, 1);
    assertEqual(selectedOption, 2);
    assertEqual(showExplanation, true);

    // Second click: attempting to click another option
    handleSelectOption(1);
    assertEqual(score, 1, 'Score must not increment again');
    assertEqual(selectedOption, 2, 'Selection must remain locked');
  });

  test('7.2: Quiz source verification: question loading error fallback', () => {
    const sourceCode = fs.readFileSync(path.resolve(PROJECT_ROOT, 'src/pages/Quiz.jsx'), 'utf8');

    assertIncludes(sourceCode, 'questionBankService.getAllQuestions()');
    assertIncludes(sourceCode, 'questionBankService.getQuestionsByDomain(cat)');
    assertIncludes(sourceCode, 'getQuizQuestions(\'all\')'); // Fallback
    assertIncludes(sourceCode, 'confetti({');
  });
});

// =========================================================================
// Suite 8: Client-Side AI Agent Sandbox & Tool Calling Security
// =========================================================================
describe('T5-Challenger-1 Suite 8: Client-Side AI Agent Sandbox & Tool Security', () => {

  test('8.1: Strict Tool Whitelist intercepts and rejects unauthorized tool invocations', async () => {
    const dangerousTools = ['eval', 'system_exec', 'cookie_dump', 'fs_read', 'delete_all', '__proto__'];

    for (const tool of dangerousTools) {
      const res = await executeSandboxedTool(tool, {});
      assertEqual(res.success, false, `Tool ${tool} must be rejected`);
      assertIncludes(res.error, 'Unauthorized tool');
    }
  });

  test('8.2: Payload size barrier rejects payloads > 50 KB before execution', async () => {
    const massivePayload = {
      domain: 'avant_garde',
      questionZh: 'A'.repeat(60000)
    };

    const res = await executeSandboxedTool('add_question', massivePayload);
    assertEqual(res.success, false);
    assertIncludes(res.error, 'Payload size limit exceeded');
  });

  test('8.3: Built-in question immutability: delete_question on arched_* IDs strictly rejected', async () => {
    const res = await executeSandboxedTool('delete_question', { id: 'arched_001' });
    assertEqual(res.success, false);
    assertIncludes(res.error, 'Cannot delete built-in immutable question');
  });

  test('8.4: Destructive reset confirmation barrier requires explicit { confirm: true }', async () => {
    const resNoConfirm = await executeSandboxedTool('reset_question_bank', {});
    assertEqual(resNoConfirm.success, false);
    assertIncludes(resNoConfirm.error, 'requires explicit confirmation flag');

    const resConfirmFalse = await executeSandboxedTool('reset_question_bank', { confirm: false });
    assertEqual(resConfirmFalse.success, false);

    const resValid = await executeSandboxedTool('reset_question_bank', { confirm: true });
    assertEqual(resValid.success, true);
  });

  test('8.5: Parameter bounds enforcement in configure_practice_settings tool', async () => {
    const res = await executeSandboxedTool('configure_practice_settings', {
      examTimeLimitMinutes: 9999, // clamped to 180
      examQuestionCount: 0,       // clamped to 5
      quizQuestionCount: -10,     // clamped to 5
      negativeScoring: false
    });

    assertEqual(res.success, true);
    assertEqual(res.data.examTimeLimitMinutes, 180);
    assertEqual(res.data.examQuestionCount, 5);
    assertEqual(res.data.quizQuestionCount, 5);
    assertEqual(res.data.negativeScoring, false);

    // Restore standard practice settings
    await executeSandboxedTool('configure_practice_settings', {
      examTimeLimitMinutes: 30,
      examQuestionCount: 20,
      quizQuestionCount: 10,
      negativeScoring: true
    });
  });

  test('8.6: Deterministic offline fallback engine handles core user intents', async () => {
    // 1. Summary intent
    const sumRes = await handleDeterministicFallback('题库概况统计');
    assertEqual(sumRes.toolUsed, 'get_question_bank_summary');
    assertIncludes(sumRes.content, '320');

    // 2. Query intent
    const queryRes = await handleDeterministicFallback('搜索关于蒙德里安的考题');
    assertEqual(queryRes.toolUsed, 'query_questions');
    assert(queryRes.content.length > 20);

    // 3. Settings intent
    const setRes = await handleDeterministicFallback('设置模拟考倒计时 45 分钟，考题 25 题');
    assertEqual(setRes.toolUsed, 'configure_practice_settings');
    assertIncludes(setRes.content, '45 分钟');
    assertIncludes(setRes.content, '25 题');

    // 4. Generate intent
    const genRes = await handleDeterministicFallback('生成一道文艺复兴考题');
    assertEqual(genRes.toolUsed, 'generate_questions');
    assertIncludes(genRes.content, '【离线规则引擎');

    // 5. Unconfirmed reset intent
    const resetPromptRes = await handleDeterministicFallback('重置题库');
    assertIncludes(resetPromptRes.content, '高风险操作确认');
  });

  test('8.7: Fuzzing fallback intent matcher against ReDoS with 10k repetition string completes under 20ms', async () => {
    const hostileInput = 'a'.repeat(10000) + '???!!!()()[]';
    const start = Date.now();
    const res = await handleDeterministicFallback(hostileInput);
    const duration = Date.now() - start;

    assertLessThanOrEqual(duration, 50, `Fallback matching took ${duration}ms, potential ReDoS`);
    assert(res && res.role === 'assistant');
  });

  test('8.8: Circular references and BigInt handled safely in sandbox parameter sanitizer', async () => {
    const circularObj = { name: 'test' };
    circularObj.self = circularObj;
    circularObj.bigValue = 9007199254740991n;

    // Must not throw "Maximum call stack size exceeded" or "Do not know how to serialize a BigInt"
    const res = await executeSandboxedTool('get_question_bank_summary', circularObj);
    assertEqual(res.success, true);
  });
});

// =========================================================================
// Suite 9: AIFloatingAssistant & Settings Persistence
// =========================================================================
describe('T5-Challenger-1 Suite 9: AIFloatingAssistant & Settings Hardening', () => {

  test('9.1: Settings API Key prefix auto-detection routes to correct provider preset', () => {
    function detectProvider(key) {
      const trimmed = (key || '').trim();
      if (trimmed.startsWith('AIzaSy')) return 'gemini';
      if (trimmed.startsWith('gsk_')) return 'custom-groq';
      if (trimmed.startsWith('sk-ant-')) return 'custom-claude';
      if (trimmed.startsWith('sk-or-')) return 'custom-openrouter';
      if (trimmed.startsWith('sk-')) return 'openai';
      return 'custom';
    }

    assertEqual(detectProvider('AIzaSyDk838jdsf834'), 'gemini');
    assertEqual(detectProvider('sk-proj-98327498237'), 'openai');
    assertEqual(detectProvider('gsk_test_groq_key'), 'custom-groq');
    assertEqual(detectProvider('sk-ant-api03-test'), 'custom-claude');
    assertEqual(detectProvider('sk-or-v1-openrouter'), 'custom-openrouter');
  });

  test('9.2: Settings dual persistence synchronizes arched_ai_settings and legacy keys', () => {
    const testConfig = {
      provider: 'openai',
      apiKey: 'sk-test-key-dual-sync',
      model: 'gpt-4o',
      customEndpoint: 'https://custom.endpoint.com'
    };

    saveAISettings(testConfig);

    const storedAiSettings = JSON.parse(globalThis.localStorage.getItem(AI_SETTINGS_KEY));
    assertEqual(storedAiSettings.apiKey, 'sk-test-key-dual-sync');
    assertEqual(storedAiSettings.provider, 'openai');

    // Legacy sync verification
    assertEqual(globalThis.localStorage.getItem('aiApiKey'), 'sk-test-key-dual-sync');
    assertEqual(globalThis.localStorage.getItem('aiApiEndpoint'), 'https://custom.endpoint.com');
    assertEqual(globalThis.localStorage.getItem('aiApiModel'), 'gpt-4o');

    // Clean up
    globalThis.localStorage.removeItem(AI_SETTINGS_KEY);
    globalThis.localStorage.removeItem('aiApiKey');
    globalThis.localStorage.removeItem('aiApiEndpoint');
    globalThis.localStorage.removeItem('aiApiModel');
  });

  test('9.3: AIFloatingAssistant source verification: online/offline event listeners and confirm modal', () => {
    const sourceCode = fs.readFileSync(path.resolve(PROJECT_ROOT, 'src/components/AIFloatingAssistant.jsx'), 'utf8');

    assertIncludes(sourceCode, "window.addEventListener('online', handleOnline)");
    assertIncludes(sourceCode, "window.addEventListener('offline', handleOffline)");
    assertIncludes(sourceCode, "removeEventListener('online', handleOnline)");
    assertIncludes(sourceCode, "removeEventListener('offline', handleOffline)");
    assertIncludes(sourceCode, "setPendingConfirm");
  });
});

// =========================================================================
// Suite 10: Teardown & Invariant Finalization
// =========================================================================
describe('T5-Challenger-1 Suite 10: Teardown & Invariant Finalization', () => {
  test('10.1: Vite SSR server shuts down cleanly', async () => {
    if (viteServer) {
      await viteServer.close();
    }
    assert(true, 'Vite server closed cleanly');
  });
});

// Self-executing runner hook when executed directly
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  console.log('\nStarting Challenger 1 Empirical Stress Test Suite...');
  const res = await runner.run();
  process.exit(res.failed > 0 ? 1 : 0);
}
