#!/usr/bin/env node
/**
 * scripts/verify_arched_question_bank.mjs
 * 
 * Standalone automated verification script for the ARCHED Art & Architecture History Question Bank.
 * Validates data schema, domain distribution, bilingual fields, option counts, answer indexes,
 * tag presence, and image URL formatting.
 * 
 * Exit codes:
 *   0: Validation PASSED (total >= 200, all domains >= 30, schema 100% valid)
 *   1: Validation FAILED (schema violations, missing required fields, or under-count)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const VALID_DOMAINS = [
  'chronology',
  'visual_id',
  'avant_garde',
  'artist_movement',
  'renaissance_classical'
];

const DOMAIN_LABELS = {
  chronology: '1. Chronological Movement Sequencing (年代序列)',
  visual_id: '2. Visual Artwork & Author ID (图像识别与作者归属)',
  avant_garde: '3. 20th-Century Avant-Garde (20世纪先锋与建筑思潮)',
  artist_movement: '4. Artist Movement Categorization (流派归属与理论)',
  renaissance_classical: '5. Renaissance & Classical Mastery (文艺复兴与古典巨匠)'
};

const MIN_TOTAL_QUESTIONS = 200;
const MIN_DOMAIN_QUESTIONS = 30;

export async function verifyQuestionBank(targetPath = null) {
  const filePath = targetPath || path.resolve(projectRoot, 'src/data/archedQuestionBank.js');
  console.log(`\n======================================================`);
  console.log(` ARCHED Question Bank Integrity & Schema Verification `);
  console.log(` Target: ${path.relative(projectRoot, filePath)}`);
  console.log(`======================================================\n`);

  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Question bank file does not exist at: ${filePath}`);
    console.error(`Status: FAILED - Target file not found.\n`);
    return { success: false, error: 'File not found', total: 0 };
  }

  let rawModule;
  try {
    const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
    rawModule = await import(fileUrl);
  } catch (err) {
    console.error(`[ERROR] Failed to import question bank module: ${err.message}`);
    return { success: false, error: err.message, total: 0 };
  }

  const bank = rawModule.ARCHED_QUESTION_BANK ||
               rawModule.archedQuestions ||
               rawModule.realPdfQuestions ||
               rawModule.default ||
               rawModule.questions;

  if (!Array.isArray(bank)) {
    console.error(`[ERROR] Question bank export is not an array. Found: ${typeof bank}`);
    return { success: false, error: 'Export is not an array', total: 0 };
  }

  console.log(`Found ${bank.length} raw question entries.`);

  const errors = [];
  const warnings = [];
  const seenIds = new Set();
  const domainCounts = {
    chronology: 0,
    visual_id: 0,
    avant_garde: 0,
    artist_movement: 0,
    renaissance_classical: 0
  };
  const difficultyCounts = { 1: 0, 2: 0, 3: 0, other: 0 };
  let imageCount = 0;

  bank.forEach((q, idx) => {
    const qLabel = q?.id ? `[${q.id} (#${idx + 1})]` : `[Index #${idx + 1}]`;

    if (!q || typeof q !== 'object') {
      errors.push(`${qLabel}: Entry is not a valid object.`);
      return;
    }

    // 1. ID verification
    if (!q.id || typeof q.id !== 'string' || q.id.trim() === '') {
      errors.push(`${qLabel}: Missing or empty 'id' field.`);
    } else {
      if (seenIds.has(q.id)) {
        errors.push(`${qLabel}: Duplicate question id '${q.id}'.`);
      }
      seenIds.add(q.id);
    }

    // 2. Domain verification
    if (!q.domain || !VALID_DOMAINS.includes(q.domain)) {
      errors.push(`${qLabel}: Invalid or missing 'domain': '${q.domain}'. Must be one of: ${VALID_DOMAINS.join(', ')}`);
    } else {
      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    }

    // 3. SubCategory & Era
    if (!q.subCategory || typeof q.subCategory !== 'string') {
      errors.push(`${qLabel}: Missing or non-string 'subCategory'.`);
    }
    if (!q.era || typeof q.era !== 'string') {
      errors.push(`${qLabel}: Missing or non-string 'era'.`);
    }

    // 4. Bilingual Questions
    if (!q.questionZh || typeof q.questionZh !== 'string' || q.questionZh.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'questionZh'.`);
    }
    if (!q.questionEn || typeof q.questionEn !== 'string' || q.questionEn.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'questionEn'.`);
    }

    // 5. Bilingual Options (exactly 4 options each)
    if (!Array.isArray(q.optionsZh) || q.optionsZh.length !== 4) {
      errors.push(`${qLabel}: 'optionsZh' must be an array of exactly 4 strings. Found: ${Array.isArray(q.optionsZh) ? q.optionsZh.length : typeof q.optionsZh}`);
    } else {
      q.optionsZh.forEach((opt, optIdx) => {
        if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
          errors.push(`${qLabel}: 'optionsZh[${optIdx}]' is empty or not a string.`);
        }
      });
    }

    if (!Array.isArray(q.optionsEn) || q.optionsEn.length !== 4) {
      errors.push(`${qLabel}: 'optionsEn' must be an array of exactly 4 strings. Found: ${Array.isArray(q.optionsEn) ? q.optionsEn.length : typeof q.optionsEn}`);
    } else {
      q.optionsEn.forEach((opt, optIdx) => {
        if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
          errors.push(`${qLabel}: 'optionsEn[${optIdx}]' is empty or not a string.`);
        }
      });
    }

    // 6. CorrectAnswer index (0..3)
    if (typeof q.correctAnswer !== 'number' || !Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) {
      errors.push(`${qLabel}: 'correctAnswer' must be an integer between 0 and 3. Found: ${q.correctAnswer}`);
    }

    // 7. Bilingual Explanations
    if (!q.explanationZh || typeof q.explanationZh !== 'string' || q.explanationZh.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'explanationZh'.`);
    }
    if (!q.explanationEn || typeof q.explanationEn !== 'string' || q.explanationEn.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'explanationEn'.`);
    }

    // 8. Tags
    if (!Array.isArray(q.tags) || q.tags.length === 0) {
      errors.push(`${qLabel}: 'tags' must be a non-empty array of strings.`);
    }

    // 9. Difficulty
    if (q.difficulty === 1 || q.difficulty === 2 || q.difficulty === 3) {
      difficultyCounts[q.difficulty]++;
    } else {
      difficultyCounts.other++;
      errors.push(`${qLabel}: 'difficulty' must be 1, 2, or 3. Found: ${q.difficulty}`);
    }

    // 10. Image URLs (optional, but if present must be valid)
    if (q.image) {
      imageCount++;
      if (typeof q.image !== 'string' || (!q.image.startsWith('http://') && !q.image.startsWith('https://') && !q.image.startsWith('/images/') && !q.image.startsWith('images/'))) {
        warnings.push(`${qLabel}: Suspicious image URL format: '${q.image}'.`);
      }
    }
  });

  // Check total quantity
  if (bank.length < MIN_TOTAL_QUESTIONS) {
    errors.push(`Total question count (${bank.length}) is below the required minimum of ${MIN_TOTAL_QUESTIONS}.`);
  }

  // Check domain distributions
  VALID_DOMAINS.forEach(dom => {
    const count = domainCounts[dom] || 0;
    if (count < MIN_DOMAIN_QUESTIONS) {
      errors.push(`Domain '${dom}' count (${count}) is below the substantive minimum threshold of ${MIN_DOMAIN_QUESTIONS}.`);
    }
  });

  // Diagnostics output
  console.log(`\n--- Domain Distribution Analysis ---`);
  VALID_DOMAINS.forEach(dom => {
    const count = domainCounts[dom] || 0;
    const ok = count >= MIN_DOMAIN_QUESTIONS;
    console.log(`  ${ok ? '✓' : '✗'} ${DOMAIN_LABELS[dom].padEnd(58)} : ${count} questions (min ${MIN_DOMAIN_QUESTIONS})`);
  });

  console.log(`\n--- Difficulty & Asset Statistics ---`);
  console.log(`  Difficulty 1 (Beginner/Foundational) : ${difficultyCounts[1]}`);
  console.log(`  Difficulty 2 (Intermediate/ARCHED)  : ${difficultyCounts[2]}`);
  console.log(`  Difficulty 3 (Advanced/Mastery)     : ${difficultyCounts[3]}`);
  console.log(`  Questions with visual stimulus      : ${imageCount}`);

  if (warnings.length > 0) {
    console.log(`\n--- Warnings (${warnings.length}) ---`);
    warnings.slice(0, 10).forEach(w => console.warn(`  ! ${w}`));
    if (warnings.length > 10) console.warn(`  ... and ${warnings.length - 10} more warnings.`);
  }

  console.log(`\n--- Schema Integrity Summary ---`);
  if (errors.length === 0) {
    console.log(`\n🎉 SUCCESS: All ${bank.length} questions strictly conform to ARCHED specification!`);
    console.log(`✓ 5-domain distribution verified.`);
    console.log(`✓ Bilingual text & 4-option sets verified.`);
    console.log(`✓ Answer index & explanation validation passed.\n`);
    return {
      success: true,
      total: bank.length,
      domainCounts,
      difficultyCounts,
      imageCount,
      errors: []
    };
  } else {
    console.error(`\n❌ FAILED: Found ${errors.length} validation errors:`);
    errors.slice(0, 20).forEach(err => console.error(`  - ${err}`));
    if (errors.length > 20) {
      console.error(`  ... and ${errors.length - 20} more errors.`);
    }
    console.error(`\nQuestion bank validation FAILED.`);
    return {
      success: false,
      total: bank.length,
      errors,
      domainCounts,
      difficultyCounts
    };
  }
}

// CLI runner
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  const customTarget = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : null;
  verifyQuestionBank(customTarget)
    .then(res => {
      process.exit(res.success ? 0 : 1);
    })
    .catch(err => {
      console.error('Fatal execution error:', err);
      process.exit(1);
    });
}
