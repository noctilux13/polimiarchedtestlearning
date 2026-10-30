import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const qbFile = path.resolve(projectRoot, 'src/data/archedQuestionBank.js');
const rawMod = await import('file:///' + qbFile.replace(/\\/g, '/'));
const bank = rawMod.ARCHED_QUESTION_BANK;

function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(12345);
function makeBalancedArray(counts) {
  const arr = [];
  counts.forEach((c, val) => {
    for (let i = 0; i < c; i++) arr.push(val);
  });
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const d1 = makeBalancedArray([10, 10, 10, 10]); // chronology (40)
const d2 = makeBalancedArray([12, 11, 11, 11]); // visual_id (45)
const d3 = makeBalancedArray([11, 12, 11, 11]); // avant_garde (45)
const d4 = makeBalancedArray([9, 9, 9, 8]);     // artist_movement (35)
const d5 = makeBalancedArray([11, 11, 11, 12]); // renaissance_classical (45)
const targets = [...d1, ...d2, ...d3, ...d4, ...d5];

const visualStimuli = {
  arched_049: { image: '/images/artworks/nude-descending.jpg', fallbackImage: '/images/artworks/nude-descending.jpg' },
  arched_053: { image: '/images/artworks/disquieting-muses.jpg', fallbackImage: '/images/artworks/disquieting-muses.jpg' },
  arched_054: { image: '/images/artworks/song-of-love.jpg', fallbackImage: '/images/artworks/song-of-love.jpg' },
  arched_056: { image: '/images/artworks/persistence-of-memory.jpg', fallbackImage: '/images/artworks/persistence-of-memory.jpg' },
  arched_057: { image: '/images/artists/salvador-dali.jpg', fallbackImage: '/images/artists/salvador-dali.jpg' },
  arched_059: { image: '/images/artworks/walking-man-i.jpg', fallbackImage: '/images/artworks/walking-man-i.jpg' },
  arched_061: { image: '/images/artworks/concetto-spaziale-punctures.jpg', fallbackImage: '/images/artworks/concetto-spaziale-punctures.jpg' },
  arched_063: { image: '/images/artworks/composition-red-blue-yellow.jpg', fallbackImage: '/images/artworks/composition-red-blue-yellow.jpg' },
  arched_064: { image: '/images/artworks/artists-shit.jpg', fallbackImage: '/images/artworks/artists-shit.jpg' },
  arched_065: { image: '/images/artworks/artists-shit.jpg', fallbackImage: '/images/artworks/artists-shit.jpg' },
  arched_066: { image: '/images/artworks/artists-shit.jpg', fallbackImage: '/images/artworks/artists-shit.jpg' },
  arched_067: { image: '/images/artworks/artists-shit.jpg', fallbackImage: '/images/artworks/artists-shit.jpg' },
  arched_073: { image: '/images/artworks/treachery-of-images.jpg', fallbackImage: '/images/artworks/treachery-of-images.jpg' },
  arched_074: { image: '/images/artworks/son-of-man.jpg', fallbackImage: '/images/artworks/son-of-man.jpg' },
  arched_075: { image: '/images/artworks/whaam.jpg', fallbackImage: '/images/artworks/whaam.jpg' },
  arched_076: { image: '/images/artworks/campbell-soup.jpg', fallbackImage: '/images/artworks/campbell-soup.jpg' },
  arched_079: { image: '/images/artworks/unique-forms.jpg', fallbackImage: '/images/artworks/unique-forms.jpg' },
  arched_080: { image: '/images/artworks/walking-man-i.jpg', fallbackImage: '/images/artworks/walking-man-i.jpg' },
  arched_081: { image: '/images/artworks/autumn-rhythm.jpg', fallbackImage: '/images/artworks/autumn-rhythm.jpg' },
  arched_082: { image: '/images/artworks/broadway-boogie-woogie.jpg', fallbackImage: '/images/artworks/broadway-boogie-woogie.jpg' }
};

const fallbackOverrides = {
  arched_041: '/images/artists/piet-mondrian.jpg',
  arched_042: '/images/artists/joan-miro.jpg',
  arched_044: '/images/artworks/shot-marilyns.jpg',
  arched_045: '/images/artworks/campbell-soup.jpg',
  arched_046: '/images/artworks/la-banana.jpg',
  arched_047: '/images/artists/andy-warhol.jpg',
  arched_050: '/images/artworks/lhooq.jpg',
  arched_058: '/images/artworks/walking-man-i.jpg',
  arched_060: '/images/artworks/concetto-spaziale-slashes.jpg',
  arched_123: '/images/artists/piet-mondrian.jpg',
  arched_209: '/images/artworks/st-peters-baldachin.jpg'
};

const updatedBank = bank.map((q, idx) => {
  let id = q.id;
  if (id === 'arched_0100') id = 'arched_100';

  const targetIdx = targets[idx];
  const newOptionsZh = [...q.optionsZh];
  const newOptionsEn = [...q.optionsEn];
  if (targetIdx !== 0) {
    [newOptionsZh[0], newOptionsZh[targetIdx]] = [newOptionsZh[targetIdx], newOptionsZh[0]];
    [newOptionsEn[0], newOptionsEn[targetIdx]] = [newOptionsEn[targetIdx], newOptionsEn[0]];
  }

  const item = {
    ...q,
    id,
    optionsEn: newOptionsEn,
    optionsZh: newOptionsZh,
    correctAnswer: targetIdx
  };

  if (visualStimuli[id]) {
    item.image = visualStimuli[id].image;
    item.fallbackImage = visualStimuli[id].fallbackImage;
  }

  if (fallbackOverrides[id]) {
    item.fallbackImage = fallbackOverrides[id];
  }

  return item;
});

const header = `/**
 * src/data/archedQuestionBank.js
 * 
 * Official Polimi ARCHED Core Question Bank (210 Comprehensive Items)
 * Covering all 5 syllabus domains:
 * 1. Chronological Movement & Architectural Sequencing (40 questions, arched_001 - arched_040)
 * 2. Visual Artwork & Author Identification (45 questions, arched_041 - arched_085)
 * 3. 20th-Century Avant-Garde & Modernist Architecture (45 questions, arched_086 - arched_130)
 * 4. Artist Movement Categorization & Theory (35 questions, arched_131 - arched_165)
 * 5. Renaissance & Classical Mastery (45 questions, arched_166 - arched_210)
 * 
 * Strict Bilingual Schema: questionZh, questionEn, optionsZh [4], optionsEn [4],
 * correctAnswer (0..3), explanationZh, explanationEn, tags, difficulty (1..3).
 */

export const ARCHED_QUESTION_BANK = `;

const code = header + JSON.stringify(updatedBank, null, 2) + ';\n';
fs.writeFileSync(qbFile, code, 'utf8');

console.log('Successfully wrote updated archedQuestionBank.js');
console.log('Total questions:', updatedBank.length);

const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
updatedBank.forEach(q => counts[q.correctAnswer]++);
console.log('Answer distribution across 0..3:', counts);
