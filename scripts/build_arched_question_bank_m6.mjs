/**
 * scripts/build_arched_question_bank_m6.mjs
 * 
 * Assembles the definitive 320-question ARCHED Question Bank.
 * Combines:
 * - 81 Keep base items
 * - 23 Rewrite patched base items
 * - 106 Replacement questions (authored for out-of-scope slots)
 * - 110 Expansion questions (authored for slots 211-320)
 * 
 * Total: 320 items (64 per domain).
 * Answer distribution: exactly 80 A, 80 B, 80 C, 80 D (16 each per domain).
 */

import fs from 'fs';
import path from 'path';

async function main() {
  console.log('Loading base question bank and modular M6 questions...');

  const { ARCHED_QUESTION_BANK: baseBank } = await import('../src/data/archedQuestionBank.js');
  const { REWRITE_PATCHES } = await import('./m6_questions/rewrite_patches.js');
  const { CHRONOLOGY_REPLACEMENTS, CHRONOLOGY_EXPANSIONS } = await import('./m6_questions/chronology_questions.js');
  const { VISUAL_ID_REPLACEMENTS, VISUAL_ID_EXPANSIONS } = await import('./m6_questions/visual_id_questions.js');
  const { AVANT_GARDE_REPLACEMENTS, AVANT_GARDE_EXPANSIONS } = await import('./m6_questions/avant_garde_questions.js');
  const { ARTIST_MOVEMENT_REPLACEMENTS, ARTIST_MOVEMENT_EXPANSIONS } = await import('./m6_questions/artist_movement_questions.js');
  const { RENAISSANCE_CLASSICAL_REPLACEMENTS, RENAISSANCE_CLASSICAL_EXPANSIONS } = await import('./m6_questions/renaissance_classical_questions.js');

  const allReplacements = {
    ...CHRONOLOGY_REPLACEMENTS,
    ...VISUAL_ID_REPLACEMENTS,
    ...AVANT_GARDE_REPLACEMENTS,
    ...ARTIST_MOVEMENT_REPLACEMENTS,
    ...RENAISSANCE_CLASSICAL_REPLACEMENTS
  };

  const expansionsByDomain = [
    { domain: 'chronology', items: CHRONOLOGY_EXPANSIONS, expectedStart: 211, count: 24 },
    { domain: 'visual_id', items: VISUAL_ID_EXPANSIONS, expectedStart: 235, count: 19 },
    { domain: 'avant_garde', items: AVANT_GARDE_EXPANSIONS, expectedStart: 254, count: 19 },
    { domain: 'artist_movement', items: ARTIST_MOVEMENT_EXPANSIONS, expectedStart: 273, count: 29 },
    { domain: 'renaissance_classical', items: RENAISSANCE_CLASSICAL_EXPANSIONS, expectedStart: 302, count: 19 }
  ];

  console.log('Total replacements loaded:', Object.keys(allReplacements).length);

  const finalBank = [];

  // 1. Process base slots 1 to 210
  for (let i = 1; i <= 210; i++) {
    const id = `arched_${String(i).padStart(3, '0')}`;
    if (allReplacements[id]) {
      const rep = allReplacements[id];
      finalBank.push({ ...rep, id });
    } else {
      const original = baseBank.find(item => item.id === id);
      if (!original) {
        throw new Error(`Missing original base question for slot ${id}`);
      }
      if (REWRITE_PATCHES[id]) {
        finalBank.push({
          ...original,
          ...REWRITE_PATCHES[id],
          id
        });
      } else {
        finalBank.push({ ...original, id });
      }
    }
  }

  // 2. Process expansions slots 211 to 320
  for (const group of expansionsByDomain) {
    const items = Array.isArray(group.items) ? group.items : Object.values(group.items);
    if (items.length !== group.count) {
      throw new Error(`Domain ${group.domain} expansion count mismatch: got ${items.length}, expected ${group.count}`);
    }
    for (let idx = 0; idx < items.length; idx++) {
      const slotNum = group.expectedStart + idx;
      const expectedId = `arched_${String(slotNum).padStart(3, '0')}`;
      const item = items[idx];
      finalBank.push({
        ...item,
        id: expectedId,
        domain: group.domain
      });
    }
  }

  console.log(`Final assembled bank size: ${finalBank.length}`);
  if (finalBank.length !== 320) {
    throw new Error(`Expected exactly 320 items, got ${finalBank.length}`);
  }

  // 3. Validation & Invariant Checking
  const domainCounts = {};
  const optionCounts = [0, 0, 0, 0];
  const domainOptionCounts = {};
  const domains = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  domains.forEach(d => {
    domainCounts[d] = 0;
    domainOptionCounts[d] = [0, 0, 0, 0];
  });

  const idsSeen = new Set();

  for (let i = 0; i < finalBank.length; i++) {
    const q = finalBank[i];
    const expectedId = `arched_${String(i + 1).padStart(3, '0')}`;
    if (q.id !== expectedId) {
      throw new Error(`Item at index ${i} has ID ${q.id}, expected ${expectedId}`);
    }
    if (idsSeen.has(q.id)) {
      throw new Error(`Duplicate ID: ${q.id}`);
    }
    idsSeen.add(q.id);

    if (!domainCounts[q.domain] && domainCounts[q.domain] !== 0) {
      throw new Error(`Invalid domain in ${q.id}: ${q.domain}`);
    }
    domainCounts[q.domain]++;

    if (q.correctAnswer < 0 || q.correctAnswer > 3) {
      throw new Error(`Invalid correctAnswer in ${q.id}: ${q.correctAnswer}`);
    }
    optionCounts[q.correctAnswer]++;
    domainOptionCounts[q.domain][q.correctAnswer]++;

    // Schema validation
    if (!q.questionZh || !q.questionEn) throw new Error(`Missing questionZh/En in ${q.id}`);
    if (!Array.isArray(q.optionsZh) || q.optionsZh.length !== 4) throw new Error(`Invalid optionsZh in ${q.id}`);
    if (!Array.isArray(q.optionsEn) || q.optionsEn.length !== 4) throw new Error(`Invalid optionsEn in ${q.id}`);
    if (!q.explanationZh || !q.explanationEn) throw new Error(`Missing explanation in ${q.id}`);
    if (!Array.isArray(q.tags) || q.tags.length === 0) throw new Error(`Missing tags in ${q.id}`);
    if (![1, 2, 3].includes(q.difficulty)) throw new Error(`Invalid difficulty in ${q.id}: ${q.difficulty}`);

    // If fallback image is specified, verify file existence in public/
    if (q.fallbackImage) {
      const relPath = path.join('public', q.fallbackImage.replace(/^\//, ''));
      const fullPath = path.resolve(relPath);
      if (!fs.existsSync(fullPath)) {
        throw new Error(`Missing local fallback image for ${q.id}: ${fullPath}`);
      }
    }
  }

  console.log('--- Domain Counts ---');
  for (const d of domains) {
    console.log(`  ${d}: ${domainCounts[d]} (Options: [${domainOptionCounts[d].join(', ')}])`);
    if (domainCounts[d] !== 64) {
      throw new Error(`Domain ${d} does not have exactly 64 questions (has ${domainCounts[d]})`);
    }
    const [a, b, c, e] = domainOptionCounts[d];
    if (a !== 16 || b !== 16 || c !== 16 || e !== 16) {
      throw new Error(`Domain ${d} option distribution is not [16, 16, 16, 16]: got [${[a, b, c, e].join(', ')}]`);
    }
  }

  console.log('--- Overall Option Balance ---');
  console.log(`  A (0): ${optionCounts[0]} (${(optionCounts[0] / 320 * 100).toFixed(1)}%)`);
  console.log(`  B (1): ${optionCounts[1]} (${(optionCounts[1] / 320 * 100).toFixed(1)}%)`);
  console.log(`  C (2): ${optionCounts[2]} (${(optionCounts[2] / 320 * 100).toFixed(1)}%)`);
  console.log(`  D (3): ${optionCounts[3]} (${(optionCounts[3] / 320 * 100).toFixed(1)}%)`);

  // Write out the question bank to src/data/archedQuestionBank.js
  const header = `/**
 * src/data/archedQuestionBank.js
 * 
 * Official Polimi ARCHED Core Question Bank (320 Comprehensive Items)
 * Covering all 5 syllabus domains (strictly 64 questions each):
 * 1. Chronological Movement & Architectural Sequencing (arched_001 - arched_040, arched_211 - arched_234)
 * 2. Visual Artwork & Author Identification (arched_041 - arched_085, arched_235 - arched_253)
 * 3. 20th-Century Avant-Garde & Modernist Architecture (arched_086 - arched_130, arched_254 - arched_272)
 * 4. Artist Movement Categorization & Theory (arched_131 - arched_165, arched_273 - arched_301)
 * 5. Renaissance & Classical Mastery (arched_166 - arched_210, arched_302 - arched_320)
 * 
 * Strict Knowledge Graph Boundary: 21 periods, 66 figures, 154 artworks in artData.js.
 * Balanced Distribution: Exactly 80 A (0), 80 B (1), 80 C (2), 80 D (3) (25.0% each, Chi-Square = 0.000).
 * Strict Bilingual Schema: questionZh, questionEn, optionsZh [4], optionsEn [4],
 * correctAnswer (0..3), explanationZh, explanationEn, tags, difficulty (1..3).
 */

export const ARCHED_QUESTION_BANK = `;

  const code = header + JSON.stringify(finalBank, null, 2) + ';\n';
  const targetPath = path.resolve('src/data/archedQuestionBank.js');
  fs.writeFileSync(targetPath, code, 'utf8');
  console.log(`Successfully wrote 320 questions to: ${targetPath}`);
}

main().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
