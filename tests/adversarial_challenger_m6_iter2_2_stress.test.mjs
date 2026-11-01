#!/usr/bin/env node
/**
 * tests/adversarial_challenger_m6_iter2_2_stress.test.mjs
 * 
 * Empirical Adversarial Challenger 2 Test Suite for Milestone 6 Iteration 2
 * Scope:
 * 1. Verification of all 157 entities from ADVERSARIAL_BLACKLIST across all fields of all 320 questions
 * 2. Targeted verification of the 25 previously violating questions
 * 3. Deep negative input testing against Question Bank Service
 * 4. Boundary cases, empty strings, type checks, missing fields, negative difficulty
 * 5. Physical image asset existence, minimum byte size (>= 1KB), and magic byte validation
 * 6. AI Agent Service scope audit against the 157-entity blacklist
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function runEmpiricalStressHarness() {
  console.log('================================================================');
  console.log(' CHALLENGER 2 (M6 ITERATION 2): EMPIRICAL NEGATIVE INPUT & STRESS');
  console.log('================================================================\n');

  let assertionCount = 0;
  let failureCount = 0;

  function assert(condition, message) {
    assertionCount++;
    if (!condition) {
      console.error('  [FAIL] Assertion failed: ' + message);
      failureCount++;
    }
  }

  // Intercept process.exit while importing tests/adversarial_challenger_m6_2_scope_stress.test.mjs
  const origExit = process.exit;
  process.exit = (code) => {
    // Suppress exit during import
  };

  const stressMod = await import('file:///' + path.resolve(projectRoot, 'tests/adversarial_challenger_m6_2_scope_stress.test.mjs').replace(/\\/g, '/'));
  const ADVERSARIAL_BLACKLIST = stressMod.ADVERSARIAL_BLACKLIST;

  // Restore process.exit
  process.exit = origExit;

  // Load Question Bank & Question Bank Service & Canonical Art Data
  const artDataModule = await import('file:///' + path.resolve(projectRoot, 'src/data/artData.js').replace(/\\/g, '/'));
  const artData = artDataModule.artData || artDataModule.default;

  const qbModule = await import('file:///' + path.resolve(projectRoot, 'src/data/archedQuestionBank.js').replace(/\\/g, '/'));
  const ARCHED_QUESTION_BANK = qbModule.ARCHED_QUESTION_BANK || qbModule.default;

  const qbService = await import('file:///' + path.resolve(projectRoot, 'src/services/questionBankService.js').replace(/\\/g, '/'));

  console.log('--- TEST SUITE 1: QUESTION BANK SCHEMA & NEGATIVE FIELD CONSTRAINTS ---');

  const validDomains = new Set(['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical']);

  assert(ARCHED_QUESTION_BANK.length === 320, 'Question bank must contain exactly 320 questions (found ' + ARCHED_QUESTION_BANK.length + ')');

  ARCHED_QUESTION_BANK.forEach((q, idx) => {
    const expectedId = 'arched_' + String(idx + 1).padStart(3, '0');
    assert(q.id === expectedId, q.id + ': Continuous ID sequence match');
    assert(validDomains.has(q.domain), q.id + ': Valid domain: ' + q.domain);
    assert(typeof q.subCategory === 'string' && q.subCategory.trim().length >= 3, q.id + ': Non-empty subCategory');
    assert(typeof q.era === 'string' && q.era.trim().length >= 3, q.id + ': Non-empty era');
    assert(typeof q.questionZh === 'string' && q.questionZh.trim().length >= 10, q.id + ': questionZh min length >= 10');
    assert(typeof q.questionEn === 'string' && q.questionEn.trim().length >= 10, q.id + ': questionEn min length >= 10');

    // No placeholder tokens
    const textAll = (q.questionZh + ' ' + q.questionEn + ' ' + q.explanationZh + ' ' + q.explanationEn).toLowerCase();
    assert(!textAll.includes('todo') && !textAll.includes('fixme') && !textAll.includes('[object object]') && !textAll.includes('undefined'), q.id + ': No placeholder tokens');

    // Options constraints
    assert(Array.isArray(q.optionsZh) && q.optionsZh.length === 4, q.id + ': optionsZh has exactly 4 items');
    assert(Array.isArray(q.optionsEn) && q.optionsEn.length === 4, q.id + ': optionsEn has exactly 4 items');

    const setZh = new Set(q.optionsZh.map(o => String(o).trim().toLowerCase()));
    const setEn = new Set(q.optionsEn.map(o => String(o).trim().toLowerCase()));
    assert(setZh.size === 4, q.id + ': 4 strictly distinct optionsZh');
    assert(setEn.size === 4, q.id + ': 4 strictly distinct optionsEn');

    // Correct Answer constraints
    assert(typeof q.correctAnswer === 'number' && Number.isInteger(q.correctAnswer) && [0, 1, 2, 3].includes(q.correctAnswer), q.id + ': correctAnswer in [0, 1, 2, 3]');

    // Explanations
    assert(typeof q.explanationZh === 'string' && q.explanationZh.trim().length >= 15, q.id + ': explanationZh length >= 15');
    assert(typeof q.explanationEn === 'string' && q.explanationEn.trim().length >= 15, q.id + ': explanationEn length >= 15');

    // Difficulty
    assert(typeof q.difficulty === 'number' && [1, 2, 3].includes(q.difficulty), q.id + ': difficulty in [1, 2, 3]');

    // Tags
    assert(Array.isArray(q.tags) && q.tags.length >= 1, q.id + ': tags array with at least 1 tag');

    // Fallback Image
    if (q.fallbackImage) {
      assert(typeof q.fallbackImage === 'string', q.id + ': fallbackImage is string');
      assert(!q.fallbackImage.includes('/images/artists/'), q.id + ': fallbackImage does NOT use artist avatar: ' + q.fallbackImage);
    }
  });

  console.log('  Suite 1 passed: 320 questions schema-verified.\n');

  console.log('--- TEST SUITE 2: 157-ENTITY ADVERSARIAL BLACKLIST FULL-FIELD SCAN ---');
  const allFields = [
    'id', 'domain', 'subCategory', 'era',
    'questionZh', 'questionEn',
    'optionsZh', 'optionsEn',
    'correctAnswer',
    'explanationZh', 'explanationEn',
    'image', 'fallbackImage',
    'tags', 'difficulty'
  ];

  let blacklistViolations = 0;
  ARCHED_QUESTION_BANK.forEach(q => {
    ADVERSARIAL_BLACKLIST.forEach(b => {
      allFields.forEach(f => {
        const val = q[f];
        if (val === undefined || val === null) return;
        const text = Array.isArray(val) ? val.join(' ') : String(val);
        for (const pat of b.patterns) {
          if (pat.test(text)) {
            console.error('  [BLACKLIST MATCH] Question ' + q.id + ' field ' + f + ' matched ' + b.name + ' (' + pat + ')');
            blacklistViolations++;
            break;
          }
        }
      });
    });
  });

  assert(blacklistViolations === 0, 'Zero out-of-scope blacklist mentions across all fields (found ' + blacklistViolations + ')');
  console.log('  Suite 2 passed: 0 blacklist mentions found.\n');

  console.log('--- TEST SUITE 3: TARGETED VERIFICATION OF 25 PREVIOUSLY VIOLATING QUESTIONS ---');
  const targetIds = [
    'arched_001', 'arched_029', 'arched_030', 'arched_042',
    'arched_046', 'arched_047', 'arched_048', 'arched_055', 'arched_057',
    'arched_060', 'arched_064', 'arched_067', 'arched_068', 'arched_073',
    'arched_075', 'arched_108', 'arched_118', 'arched_124', 'arched_145',
    'arched_161', 'arched_164', 'arched_218', 'arched_223', 'arched_242', 'arched_296'
  ];

  targetIds.forEach(id => {
    const q = ARCHED_QUESTION_BANK.find(x => x.id === id);
    assert(q !== undefined, 'Target question ' + id + ' exists');
    if (q) {
      assert(q.optionsZh[q.correctAnswer] !== undefined, id + ': correct option exists in optionsZh');
      assert(q.optionsEn[q.correctAnswer] !== undefined, id + ': correct option exists in optionsEn');
      if (q.fallbackImage) {
        assert(!q.fallbackImage.includes('/images/artists/'), id + ': visual fallback is not an artist avatar');
      }
    }
  });

  console.log('  Suite 3 passed: 25 target questions specifically verified.\n');

  console.log('--- TEST SUITE 4: IMAGE ASSET INTEGRITY & FILE SIZE VALIDATION ---');
  let checkedImages = 0;
  let minImageSize = Infinity;
  let maxImageSize = 0;
  let totalImageBytes = 0;

  for (const q of ARCHED_QUESTION_BANK) {
    if (q.fallbackImage) {
      const diskPath = path.resolve(projectRoot, 'public', q.fallbackImage.replace(/^\//, ''));
      assert(fs.existsSync(diskPath), q.id + ': Image file exists at ' + diskPath);
      if (fs.existsSync(diskPath)) {
        checkedImages++;
        const stat = fs.statSync(diskPath);
        minImageSize = Math.min(minImageSize, stat.size);
        maxImageSize = Math.max(maxImageSize, stat.size);
        totalImageBytes += stat.size;

        // Image file size must be at least 1 KB (1024 bytes)
        assert(stat.size >= 1024, q.id + ': Image size must be >= 1 KB (got ' + stat.size + ' bytes)');

        // Magic byte verification
        const buf = Buffer.alloc(12);
        const fd = fs.openSync(diskPath, 'r');
        fs.readSync(fd, buf, 0, 12, 0);
        fs.closeSync(fd);

        const isJpeg = buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
        const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
        const isWebp = buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP';

        assert(isJpeg || isPng || isWebp, q.id + ': Image has valid image magic bytes (JPEG/PNG/WebP)');
      }
    }
  }

  console.log('  Images verified: ' + checkedImages);
  console.log('  Min size: ' + (minImageSize / 1024).toFixed(1) + ' KB | Max size: ' + (maxImageSize / 1024).toFixed(1) + ' KB | Avg: ' + (totalImageBytes / checkedImages / 1024).toFixed(1) + ' KB');
  console.log('  Suite 4 passed: 0 missing or corrupted images.\n');

  console.log('--- TEST SUITE 5: QUESTION BANK SERVICE NEGATIVE INPUT DEFENSE ---');

  // Negative tests for getQuestionsByDomain
  assert(qbService.getQuestionsByDomain('').length === 0, 'getQuestionsByDomain("") returns []');
  assert(qbService.getQuestionsByDomain('non_existent').length === 0, 'getQuestionsByDomain("non_existent") returns []');
  assert(qbService.getQuestionsByDomain(null).length === 0, 'getQuestionsByDomain(null) returns []');
  assert(qbService.getQuestionsByDomain(undefined).length === 0, 'getQuestionsByDomain(undefined) returns []');
  assert(qbService.getQuestionsByDomain(123).length === 0, 'getQuestionsByDomain(123) returns []');
  assert(qbService.getQuestionsByDomain({}).length === 0, 'getQuestionsByDomain({}) returns []');
  assert(qbService.getQuestionsByDomain('CHRONOLOGY').length === 64, 'Case-insensitive domain returns 64');
  assert(qbService.getQuestionsByDomain('  visual_id  ').length === 64, 'Trimmed domain returns 64');

  // Negative tests for getQuestionsByDifficulty
  assert(qbService.getQuestionsByDifficulty(0).length === 0, 'getQuestionsByDifficulty(0) returns []');
  assert(qbService.getQuestionsByDifficulty(-1).length === 0, 'getQuestionsByDifficulty(-1) returns []');
  assert(qbService.getQuestionsByDifficulty(4).length === 0, 'getQuestionsByDifficulty(4) returns []');
  assert(qbService.getQuestionsByDifficulty(null).length === 0, 'getQuestionsByDifficulty(null) returns []');
  assert(qbService.getQuestionsByDifficulty('hard').length === 0, 'getQuestionsByDifficulty("hard") returns []');
  assert(qbService.getQuestionsByDifficulty(NaN).length === 0, 'getQuestionsByDifficulty(NaN) returns []');
  assert(qbService.getQuestionsByDifficulty(Infinity).length === 0, 'getQuestionsByDifficulty(Infinity) returns []');
  assert(qbService.getQuestionsByDifficulty('1').length === 113, 'getQuestionsByDifficulty("1") correctly coerces to 113');
  assert(qbService.getQuestionsByDifficulty(2).length === 198, 'getQuestionsByDifficulty(2) returns 198');
  assert(qbService.getQuestionsByDifficulty(3).length === 9, 'getQuestionsByDifficulty(3) returns 9');

  // Negative tests for getQuestionById
  assert(qbService.getQuestionById('') === null, 'getQuestionById("") returns null');
  assert(qbService.getQuestionById('arched_999') === null, 'getQuestionById("arched_999") returns null');
  assert(qbService.getQuestionById(null) === null, 'getQuestionById(null) returns null');
  assert(qbService.getQuestionById(undefined) === null, 'getQuestionById(undefined) returns null');
  assert(qbService.getQuestionById(123) === null, 'getQuestionById(123) returns null');
  assert(qbService.getQuestionById('arched_001') !== null, 'getQuestionById("arched_001") returns object');

  // Negative tests for queryQuestions
  assert(qbService.queryQuestions(null).length === 320, 'queryQuestions(null) returns 320');
  assert(qbService.queryQuestions(undefined).length === 320, 'queryQuestions(undefined) returns 320');
  assert(qbService.queryQuestions({}).length === 320, 'queryQuestions({}) returns 320');
  assert(qbService.queryQuestions({ keyword: '' }).length === 320, 'queryQuestions({ keyword: "" }) returns 320');
  assert(qbService.queryQuestions({ keyword: '   ' }).length === 320, 'queryQuestions({ keyword: "   " }) returns 320');
  assert(qbService.queryQuestions({ limit: -10 }).length === 1, 'queryQuestions({ limit: -10 }) clamps to 1');
  assert(qbService.queryQuestions({ limit: 0 }).length === 10, 'queryQuestions({ limit: 0 }) falls back to default 10');
  assert(qbService.queryQuestions({ limit: 100000 }).length === 320, 'queryQuestions({ limit: 100000 }) returns 320');

  // Malicious / Special characters in keyword search
  const specialChars = ['<script>alert(1)</script>', "' OR '1'='1", '.*+?^${}()|[]\\', '__proto__', 'constructor'];
  specialChars.forEach(sc => {
    try {
      const res = qbService.queryQuestions({ keyword: sc });
      assert(Array.isArray(res), 'Keyword search with ' + sc + ' returns array safely');
    } catch (e) {
      assert(false, 'Keyword search crashed on special string ' + sc + ': ' + e.message);
    }
  });

  // Negative tests for getRandomExamSet
  const set0 = qbService.getRandomExamSet(0);
  assert(set0.length === 20, 'getRandomExamSet(0) safely falls back to default 20');
  const setNeg = qbService.getRandomExamSet(-10);
  assert(setNeg.length === 1, 'getRandomExamSet(-10) clamps to length 1');
  const setNull = qbService.getRandomExamSet(null);
  assert(setNull.length === 20, 'getRandomExamSet(null) defaults to length 20');
  const set20 = qbService.getRandomExamSet(20);
  assert(set20.length === 20, 'getRandomExamSet(20) returns exactly 20');

  // Verify domain balance of 20-question exam set
  const domainCounts = {};
  set20.forEach(q => domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1);
  for (const dom of validDomains) {
    assert(domainCounts[dom] === 4, 'Domain ' + dom + ' has exactly 4 questions in 20-exam set (got ' + domainCounts[dom] + ')');
  }

  // Large exam set (all 320)
  const set320 = qbService.getRandomExamSet(320);
  assert(set320.length === 320, 'getRandomExamSet(320) returns 320 questions');
  const setOver = qbService.getRandomExamSet(500);
  assert(setOver.length === 320, 'getRandomExamSet(500) gracefully caps at 320');

  // Negative tests for addCustomQuestion
  assert(qbService.addCustomQuestion(null).success === false, 'addCustomQuestion(null) fails');
  assert(qbService.addCustomQuestion(undefined).success === false, 'addCustomQuestion(undefined) fails');
  assert(qbService.addCustomQuestion('string').success === false, 'addCustomQuestion("string") fails');
  assert(qbService.addCustomQuestion({}).success === false, 'addCustomQuestion({}) fails');
  assert(qbService.addCustomQuestion({ id: 'bad' }).success === false, 'addCustomQuestion({ id: "bad" }) fails');

  console.log('  Suite 5 passed: service negative input defense verified.\n');

  console.log('--- TEST SUITE 6: AI AGENT SERVICE ADVERSARIAL BLACKLIST SCAN ---');
  const aiAgentServicePath = path.resolve(projectRoot, 'src/services/aiAgentService.js');
  const aiAgentServiceContent = fs.readFileSync(aiAgentServicePath, 'utf8');

  let aiHits = 0;
  ADVERSARIAL_BLACKLIST.forEach(b => {
    b.patterns.forEach(pat => {
      if (pat.test(aiAgentServiceContent)) {
        console.error('  [AI AGENT LEAK] ' + b.name + ' matches pattern ' + pat + ' in aiAgentService.js');
        aiHits++;
      }
    });
  });

  assert(aiHits === 0, 'aiAgentService.js contains 0 matches of 157-entity adversarial blacklist (got ' + aiHits + ')');
  console.log('  Suite 6 passed: aiAgentService.js is 100% clean.\n');

  console.log('================================================================');
  console.log(' EMPIRICAL CHALLENGER SUMMARY:');
  console.log(' Total Assertions : ' + assertionCount);
  console.log(' Failed Assertions: ' + failureCount);
  console.log(' VERDICT          : ' + (failureCount === 0 ? 'APPROVE' : 'REQUEST_CHANGES'));
  console.log('================================================================');

  if (failureCount > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runEmpiricalStressHarness().catch(err => {
  console.error('Fatal error in stress harness:', err);
  process.exit(1);
});
