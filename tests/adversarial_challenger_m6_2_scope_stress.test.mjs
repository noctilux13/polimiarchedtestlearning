#!/usr/bin/env node
/**
 * tests/adversarial_challenger_m6_2_scope_stress.test.mjs
 * 
 * Empirical Adversarial Challenger Test Suite (Milestone 6 Challenger 2)
 * 
 * Tests:
 * 1. Blacklist of 150+ out-of-scope historical entities (cross-checked against artData.js).
 * 2. Full-field scan across all 320 ARCHED questions.
 * 3. Edge-case parser stress: malformed IDs, empty strings, non-string fields, negative difficulties, duplicate options.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Load canonical artData.js
const artDataModule = await import('file:///' + path.resolve(projectRoot, 'src/data/artData.js').replace(/\\/g, '/'));
const artData = artDataModule.artData || artDataModule.default;

// 2. Load archedQuestionBank.js
const qBankModule = await import('file:///' + path.resolve(projectRoot, 'src/data/archedQuestionBank.js').replace(/\\/g, '/'));
const questionBank = qBankModule.ARCHED_QUESTION_BANK || qBankModule.default;

// Extract canonical IDs & names from artData to cross-check blacklist validity
const canonicalArtists = new Set();
const canonicalWorks = new Set();
const canonicalPeriods = new Set();

artData.forEach(p => {
  canonicalPeriods.add(p.id);
  canonicalPeriods.add(p.name);
  (p.artists || []).forEach(a => {
    canonicalArtists.add(a.id);
    canonicalArtists.add(a.name);
    canonicalArtists.add(a.englishName);
    (a.artworks || []).forEach(w => {
      canonicalWorks.add(w.id);
      canonicalWorks.add(w.titleZh);
      canonicalWorks.add(w.titleEn);
    });
  });
});

/**
 * ADVERSARIAL BLACKLIST: Over 120 historical entities NOT present in artData.js
 * Each item has a label, matching patterns, and rationale.
 */
export const ADVERSARIAL_BLACKLIST = [
  // --- Italian Renaissance & Gothic Painters ---
  { name: 'Giotto', patterns: [/\bGiotto\b/i, /乔托/] },
  { name: 'Cimabue', patterns: [/\bCimabue\b/i, /契马布埃/] },
  { name: 'Duccio', patterns: [/\bDuccio\b/i, /杜乔/] },
  { name: 'Masaccio', patterns: [/\bMasaccio\b/i, /马萨乔/] },
  { name: 'Piero della Francesca', patterns: [/Piero della Francesca/i, /皮耶罗·德拉·弗朗切斯卡/, /德拉·弗朗切斯卡/] },
  { name: 'Fra Angelico', patterns: [/Fra Angelico/i, /安吉利科修士/, /安吉利科/] },
  { name: 'Filippo Lippi', patterns: [/Filippo Lippi/i, /菲利普·利皮/] },
  { name: 'Paolo Uccello', patterns: [/Paolo Uccello/i, /乌切洛/] },
  { name: 'Sandro Botticelli', patterns: [/\bBotticelli\b/i, /波提切利/] },
  { name: 'Andrea Mantegna', patterns: [/\bMantegna\b/i, /曼特尼亚/] },
  { name: 'Giovanni Bellini', patterns: [/Giovanni Bellini/i, /乔凡尼·贝利尼/] },
  { name: 'Giorgione', patterns: [/\bGiorgione\b/i, /乔尔乔内/] },
  { name: 'Titian', patterns: [/\bTitian\b/i, /提香/, /提齐安诺/] },
  { name: 'Tintoretto', patterns: [/\bTintoretto\b/i, /丁托列托/] },
  { name: 'Paolo Veronese', patterns: [/\bVeronese\b/i, /委罗内塞/] },
  { name: 'Perugino', patterns: [/\bPerugino\b/i, /佩鲁吉诺/] },
  { name: 'Parmigianino', patterns: [/\bParmigianino\b/i, /帕米贾尼诺/] },
  { name: 'Bronzino', patterns: [/\bBronzino\b/i, /布龙齐诺/] },
  { name: 'Benvenuto Cellini', patterns: [/\bCellini\b/i, /切利尼/] },
  { name: 'Giambologna', patterns: [/\bGiambologna\b/i, /詹博洛尼亚/] },

  // --- Northern Renaissance Painters ---
  { name: 'Jan van Eyck', patterns: [/Van Eyck/i, /凡·艾克/, /凡艾克/] },
  { name: 'Rogier van der Weyden', patterns: [/van der Weyden/i, /凡德魏登/, /范德魏登/] },
  { name: 'Hieronymus Bosch', patterns: [/\bBosch\b/i, /希罗尼穆斯·博斯/, /画家博斯/] },
  { name: 'Albrecht Dürer', patterns: [/\bDürer\b/i, /\bDurer\b/i, /阿尔布雷希特·丢勒/, /画家丢勒/] },
  { name: 'Matthias Grünewald', patterns: [/\bGrünewald\b/i, /\bGrunewald\b/i, /格吕内瓦尔德/] },
  { name: 'Lucas Cranach', patterns: [/\bCranach\b/i, /克拉纳赫/] },
  { name: 'Hans Holbein', patterns: [/\bHolbein\b/i, /霍尔拜因/] },
  { name: 'Pieter Bruegel', patterns: [/\bBruegel\b/i, /\bBrueghel\b/i, /勃鲁盖尔/] },

  // --- Baroque & Rococo Painters / Sculptors ---
  { name: 'Caravaggio', patterns: [/\bCaravaggio\b/i, /卡拉瓦乔/] },
  { name: 'Artemisia Gentileschi', patterns: [/Gentileschi/i, /真蒂莱斯基/] },
  { name: 'Annibale Carracci', patterns: [/\bCarracci\b/i, /阿尼巴莱·卡拉奇/, /卡拉奇兄弟/] },
  { name: 'Guido Reni', patterns: [/Guido Reni/i, /圭多·雷尼/] },
  { name: 'Peter Paul Rubens', patterns: [/\bRubens\b/i, /彼得·保罗·鲁本斯/, /画家鲁本斯/] },
  { name: 'Anthony van Dyck', patterns: [/Van Dyck/i, /凡戴克/, /范·戴克/] },
  { name: 'Rembrandt van Rijn', patterns: [/\bRembrandt\b/i, /伦勃朗/] },
  { name: 'Johannes Vermeer', patterns: [/\bVermeer\b/i, /维米尔/] },
  { name: 'Frans Hals', patterns: [/Frans Hals/i, /弗朗斯·哈尔斯/] },
  { name: 'Diego Velázquez', patterns: [/Velázquez/i, /Velazquez/i, /委拉斯凯兹/, /委拉斯开兹/] },
  { name: 'Francisco de Zurbarán', patterns: [/Zurbarán/i, /Zurbaran/i, /苏巴朗/] },
  { name: 'Nicolas Poussin', patterns: [/\bPoussin\b/i, /尼古拉·普桑/, /画家普桑/] },
  { name: 'Claude Lorrain', patterns: [/Claude Lorrain/i, /克洛德·洛兰/] },
  { name: 'Jean-Antoine Watteau', patterns: [/\bWatteau\b/i, /让-安托万·华托/, /画家华托/] },
  { name: 'François Boucher', patterns: [/\bBoucher\b/i, /弗朗索瓦·布歇/, /画家布歇/] },
  { name: 'Jean-Honoré Fragonard', patterns: [/Fragonard/i, /弗拉戈纳尔/] },
  { name: 'Canaletto', patterns: [/\bCanaletto\b/i, /卡纳莱托/] },
  { name: 'Giovanni Battista Tiepolo', patterns: [/\bTiepolo\b/i, /提埃坡罗/] },

  // --- 18th & 19th Century Masters ---
  { name: 'Francisco Goya', patterns: [/\bGoya\b/i, /弗朗西斯科·戈雅/, /画家戈雅/] },
  { name: 'Jacques-Louis David', patterns: [/Jacques-Louis David/i, /雅克-路易·大卫/] },
  { name: 'Jean-Auguste-Dominique Ingres (as author/subject)', patterns: [/Dominique Ingres/i, /画家安格尔/] },
  { name: 'Eugène Delacroix', patterns: [/\bDelacroix\b/i, /德拉克罗瓦/, /德拉克洛瓦/] },
  { name: 'Théodore Géricault', patterns: [/Géricault/i, /Gericault/i, /席里柯/, /籍里柯/] },
  { name: 'Caspar David Friedrich', patterns: [/Caspar David Friedrich/i, /卡斯帕·大卫·弗里德里希/] },
  { name: 'J.M.W. Turner', patterns: [/J\.M\.W\. Turner/i, /William Turner/i, /透纳/] },
  { name: 'John Constable', patterns: [/\bConstable\b/i, /康斯太勃尔/] },
  { name: 'Gustave Courbet', patterns: [/\bCourbet\b/i, /居斯塔夫·库尔贝/, /画家库尔贝/] },
  { name: 'Jean-François Millet', patterns: [/Jean-François Millet/i, /让-弗朗索瓦·米勒/, /画家米勒/] },
  { name: 'Édouard Manet', patterns: [/\bManet\b/i, /爱德华·马奈/, /画家马奈/] },
  { name: 'Pierre-Auguste Renoir', patterns: [/\bRenoir\b/i, /雷诺阿/] },
  { name: 'Edgar Degas', patterns: [/\bDegas\b/i, /埃德加·德加/, /画家德加/] },
  { name: 'Paul Cézanne', patterns: [/Cézanne/i, /Cezanne/i, /保罗·塞尚/, /画家塞尚/] },
  { name: 'Paul Gauguin', patterns: [/\bGauguin\b/i, /保罗·高更/, /画家高更/] },
  { name: 'Vincent van Gogh', patterns: [/Van Gogh/i, /梵高/, /凡高/] },
  { name: 'Georges Seurat', patterns: [/\bSeurat\b/i, /乔治·修拉/, /画家修拉/] },
  { name: 'Auguste Rodin', patterns: [/\bRodin\b/i, /奥古斯特·罗丹/, /雕塑家罗丹/] },
  { name: 'Edvard Munch', patterns: [/\bMunch\b/i, /爱德华·蒙克/, /画家蒙克/] },
  { name: 'Gustav Klimt', patterns: [/\bKlimt\b/i, /克里姆特/] },
  { name: 'Egon Schiele', patterns: [/\bSchiele\b/i, /埃贡·席勒/, /画家席勒/] },

  // --- 20th Century Avant-Garde & Modern Figures ---
  { name: 'Henri Matisse', patterns: [/\bMatisse\b/i, /亨利·马蒂斯/, /画家马蒂斯/] },
  { name: 'André Derain', patterns: [/\bDerain\b/i, /安德烈·德兰/, /画家德兰/] },
  { name: 'Maurice de Vlaminck', patterns: [/Vlaminck/i, /弗拉曼克/] },
  { name: 'Ernst Ludwig Kirchner', patterns: [/\bKirchner\b/i, /基希纳/] },
  { name: 'Emil Nolde', patterns: [/\bNolde\b/i, /诺尔德/] },
  { name: 'Wassily Kandinsky', patterns: [/\bKandinsky\b/i, /康定斯基/] },
  { name: 'Paul Klee', patterns: [/Paul Klee/i, /保罗·克利/, /画家克利/] },
  { name: 'Pablo Picasso', patterns: [/\bPicasso\b/i, /毕加索/] },
  { name: 'Georges Braque', patterns: [/\bBraque\b/i, /乔治·布拉克/, /画家布拉克/] },
  { name: 'Kazimir Malevich', patterns: [/\bMalevich\b/i, /马列维奇/] },
  { name: 'Vladimir Tatlin', patterns: [/\bTatlin\b/i, /塔特林/] },
  { name: 'Alexander Rodchenko', patterns: [/\bRodchenko\b/i, /罗德琴科/] },
  { name: 'El Lissitzky', patterns: [/Lissitzky/i, /利西茨基/] },
  { name: 'Naum Gabo', patterns: [/\bGabo\b/i, /瑙姆·加博/] },
  { name: 'Max Ernst', patterns: [/Max Ernst/i, /马克斯·恩斯特/, /画家恩斯特/] },
  { name: 'Yves Tanguy', patterns: [/\bTanguy\b/i, /伊夫·唐吉/, /画家唐吉/] },
  { name: 'Paul Delvaux', patterns: [/Paul Delvaux/i, /保罗·德尔沃/] },
  { name: 'Leonor Fini', patterns: [/Leonor Fini/i, /莱奥诺·菲尼/] },
  { name: 'Meret Oppenheim', patterns: [/Meret Oppenheim/i, /梅雷特·奥本海姆/] },
  { name: 'Francis Picabia', patterns: [/Picabia/i, /毕卡比亚/] },
  { name: 'Kurt Schwitters', patterns: [/Schwitters/i, /施威特斯/, /施维特斯/] },
  { name: 'Lyonel Feininger', patterns: [/Feininger/i, /费宁格/] },
  { name: 'Mark Rothko', patterns: [/\bRothko\b/i, /罗斯科/] },
  { name: 'Willem de Kooning', patterns: [/de Kooning/i, /德库宁/] },
  { name: 'Barnett Newman', patterns: [/Barnett Newman/i, /巴内特·纽曼/] },
  { name: 'Yves Klein', patterns: [/Yves Klein/i, /伊夫·克莱因/] },
  { name: 'Jasper Johns', patterns: [/Jasper Johns/i, /贾斯珀·琼斯/] },
  { name: 'Robert Rauschenberg', patterns: [/Rauschenberg/i, /劳森伯格/] },
  { name: 'Donald Judd', patterns: [/\bJudd\b/i, /唐纳德·贾德/, /艺术家贾德/] },
  { name: 'Sol LeWitt', patterns: [/LeWitt/i, /勒维特/] },
  { name: 'Joseph Kosuth', patterns: [/\bKosuth\b/i, /科苏斯/] },
  { name: 'Joseph Beuys', patterns: [/\bBeuys\b/i, /博伊斯/] },
  { name: 'Germano Celant', patterns: [/\bCelant\b/i, /切兰特/] },
  { name: 'Mario Merz', patterns: [/Mario Merz/i, /马里奥·梅尔茨/] },
  { name: 'Jannis Kounellis', patterns: [/Kounellis/i, /库奈里斯/] },
  { name: 'Michelangelo Pistoletto', patterns: [/Pistoletto/i, /皮斯特莱托/] },
  { name: 'Maurizio Cattelan', patterns: [/Cattelan/i, /卡特兰/] },
  { name: 'Alberto Burri', patterns: [/Alberto Burri/i, /阿尔贝托·布里/] },
  { name: 'Enrico Castellani', patterns: [/Enrico Castellani/i, /恩里科·卡斯特拉尼/] },
  { name: 'Marcel Broodthaers', patterns: [/Broodthaers/i, /布罗达斯/] },
  { name: 'James Ensor', patterns: [/James Ensor/i, /詹姆斯·恩索尔/] },
  { name: 'Keith Haring', patterns: [/Keith Haring/i, /凯斯·哈林/] },
  { name: 'Jean-Michel Basquiat', patterns: [/Basquiat/i, /巴斯奎特/, /巴斯奇亚/] },
  { name: 'Peter Blake', patterns: [/Peter Blake/i, /彼得·布莱克/] },

  // --- Out-of-Scope Architects ---
  { name: 'SANAA', patterns: [/\bSANAA\b/i, /妹岛和世/, /西泽立卫/] },
  { name: 'Toyo Ito', patterns: [/Toyo Ito/i, /伊东丰雄/] },
  { name: 'Tadao Ando', patterns: [/Tadao Ando/i, /安藤忠雄/] },
  { name: 'Kenzo Tange', patterns: [/Kenzo Tange/i, /丹下健三/] },
  { name: 'Jørn Utzon', patterns: [/\bUtzon\b/i, /乌松/] },
  { name: 'Alvar Aalto', patterns: [/Alvar Aalto/i, /阿尔瓦·阿尔托/] },
  { name: 'Eero Saarinen', patterns: [/Saarinen/i, /沙里宁/] },
  { name: 'Louis Kahn', patterns: [/Louis Kahn/i, /路易斯·康/, /路易·康/] },
  { name: 'I. M. Pei', patterns: [/I\.?\s*M\.?\s*Pei/i, /贝聿铭/] },
  { name: 'Philip Johnson', patterns: [/Philip Johnson/i, /菲利普·约翰逊/] },
  { name: 'Robert Venturi', patterns: [/Robert Venturi/i, /罗伯特·文丘里/] },
  { name: 'Peter Eisenman', patterns: [/Peter Eisenman/i, /彼得·埃森曼/, /建筑理论家埃森曼/] },
  { name: 'Rem Koolhaas', patterns: [/Rem Koolhaas/i, /雷姆·库哈斯/, /库哈斯/] },

  // --- Out-of-Scope Movements ---
  { name: 'Die Brücke', patterns: [/Die Brücke/i, /Die Brucke/i, /德累斯顿桥社/, /桥社/] },
  { name: 'Der Blaue Reiter', patterns: [/Der Blaue Reiter/i, /青骑士/, /蓝骑士/] },
  { name: 'Suprematism', patterns: [/\bSuprematism\b/i, /至上主义/] },
  { name: 'Constructivism', patterns: [/\bConstructivism\b/i, /构成主义/] },
  { name: 'Fauvism', patterns: [/\bFauvism\b/i, /野兽派色彩分割/, /野兽主义/] },
  { name: 'Arte Povera', patterns: [/Arte Povera/i, /贫穷艺术/] },
  { name: 'Nancy School', patterns: [/Nancy School/i, /École de Nancy/i, /南锡学派/] },
  { name: 'Pre-Raphaelites', patterns: [/Pre-Raphaelite/i, /拉斐尔前派/] },

  // --- Out-of-Scope Artworks ---
  { name: "Michelangelo's David (sculpture)", patterns: [/大卫像/, /Michelangelo's David/i] },
  { name: "Michelangelo's Pietà", patterns: [/哀悼基督/, /圣殇/, /\bPietà\b/i, /\bPieta\b/i] },
  { name: "Michelangelo's Moses", patterns: [/摩西像/, /Michelangelo's Moses/i] },
  { name: "Michelangelo's Sistine Ceiling", patterns: [/西斯廷天顶画/, /Sistine Chapel ceiling/i] },
  { name: "Bernini's Apollo and Daphne", patterns: [/阿波罗与达芙妮/, /Apollo and Daphne/i] },
  { name: "Bernini's Ecstasy of Saint Teresa", patterns: [/圣德列萨/, /圣德兰/, /Ecstasy of Saint Teresa/i] },
  { name: "Bernini's Pluto and Proserpina", patterns: [/普路托与普洛塞庇娜/, /Pluto and Proserpina/i] },
  { name: "Leonardo's Mona Lisa", patterns: [/Mona Lisa/i, /《蒙娜丽莎》/] },
  { name: "Leonardo's Last Supper", patterns: [/The Last Supper/i, /《最后的晚餐》/] },
  { name: "Leonardo's Vitruvian Man", patterns: [/Vitruvian Man/i, /维特鲁威人/] },
  { name: "Picasso's Guernica", patterns: [/\bGuernica\b/i, /格尔尼卡/] },
  { name: "Picasso's Les Demoiselles d'Avignon", patterns: [/Demoiselles d'Avignon/i, /阿维尼翁的少女/] },
  { name: "Van Gogh's Starry Night", patterns: [/Starry Night/i, /《星夜》/, /《星空》/] },
  { name: "Van Gogh's Sunflowers", patterns: [/《向日葵》/, /Van Gogh's Sunflowers/i] },
  { name: "Munch's The Scream", patterns: [/《呐喊》/, /The Scream/i] },
  { name: "Malevich's Black Square", patterns: [/\bBlack Square\b/i, /黑方块/, /黑色正方形/] },
  { name: "Tatlin's Monument to Third International", patterns: [/Third International/i, /第三国际纪念碑/, /塔特林之塔/] },
  { name: "Andy Warhol's Brillo Box", patterns: [/Brillo Box/i, /布里洛盒子/] },
  { name: "Roy Lichtenstein's Whaam!", patterns: [/\bWhaam!\b/i, /《呜嗡！》/] },
  { name: "Roy Lichtenstein's Drowning Girl", patterns: [/Drowning Girl/i, /《溺水之女》/] },
  { name: "Man Ray's The Gift", patterns: [/\bThe Gift\b/i, /《礼物》\(Cadeau\)/i] },
  { name: "Miró's The Harlequin's Carnival", patterns: [/Harlequin's Carnival/i, /《丑角的狂欢》/] },
  { name: "Dalí's Soft Construction with Boiled Beans", patterns: [/Soft Construction with Boiled Beans/i, /煮熟的豆子的软结构/] },
  { name: "Dalí's Face of Mae West", patterns: [/Face of Mae West/i, /梅·韦斯特的面孔/, /Mae West Lips Sofa/i] },
  { name: "Yves Klein's IKB", patterns: [/\bIKB\b/i, /国际克莱因蓝/] }
];

console.log(`\n======================================================`);
console.log(` Challenger 2: Empirical Scope & Stress Test Harness `);
console.log(`======================================================\n`);

console.log(`1. Validating Adversarial Blacklist...`);
console.log(`   Total blacklist entries defined: ${ADVERSARIAL_BLACKLIST.length}`);

// Cross-check blacklist against canonical artData.js
let falsePositiveBlacklist = 0;
ADVERSARIAL_BLACKLIST.forEach(b => {
  if (canonicalArtists.has(b.name) || canonicalPeriods.has(b.name)) {
    console.error(`   [FATAL ERROR] In-scope entity wrongly included in blacklist: ${b.name}`);
    falsePositiveBlacklist++;
  }
});
if (falsePositiveBlacklist === 0) {
  console.log(`   ✓ All ${ADVERSARIAL_BLACKLIST.length} blacklist items are confirmed strictly OUT OF SCOPE of artData.js!`);
}

// 2. Scan every field of all 320 questions against the adversarial blacklist
console.log(`\n2. Scanning all 320 questions across all fields against Blacklist...`);

const scannedFields = [
  'id', 'domain', 'subCategory', 'era',
  'questionZh', 'questionEn',
  'optionsZh', 'optionsEn',
  'explanationZh', 'explanationEn',
  'tags'
];

const questionViolationsMap = new Map();

questionBank.forEach((q, idx) => {
  const qId = q.id || `index_${idx}`;
  
  ADVERSARIAL_BLACKLIST.forEach(b => {
    scannedFields.forEach(field => {
      let val = q[field];
      if (!val) return;
      let text = Array.isArray(val) ? val.join(' | ') : String(val);
      
      for (const pat of b.patterns) {
        if (pat.test(text)) {
          if (!questionViolationsMap.has(qId)) {
            questionViolationsMap.set(qId, {
              id: qId,
              domain: q.domain,
              subCategory: q.subCategory,
              leaks: new Set(),
              details: []
            });
          }
          const record = questionViolationsMap.get(qId);
          record.leaks.add(b.name);
          record.details.push({
            field,
            entity: b.name,
            matchedSnippet: text.substring(0, 100)
          });
          break;
        }
      }
    });
  });
});

console.log(`   Total Violating Questions Found: ${questionViolationsMap.size}`);

if (questionViolationsMap.size > 0) {
  console.log(`\n   --- COMPREHENSIVE OUT-OF-SCOPE LEAKAGE SUMMARY ---`);
  let itemCounter = 1;
  for (const [id, record] of questionViolationsMap.entries()) {
    console.log(`\n   [#${itemCounter++}] Question ID: ${id} | Domain: ${record.domain} | SubCategory: ${record.subCategory}`);
    console.log(`       Out-of-Scope Entities: ${Array.from(record.leaks).join(', ')}`);
    console.log(`       Impacted Fields: ${[...new Set(record.details.map(d => d.field))].join(', ')}`);
  }
}

// 3. Test Edge Cases in Parsing & Schema
console.log(`\n3. Empirical Edge-Case Testing & Negative Input Harness...`);
const edgeCaseErrors = [];

// 3.1 ID format and sequence continuity
questionBank.forEach((q, idx) => {
  const expectedId = `arched_${String(idx + 1).padStart(3, '0')}`;
  if (q.id !== expectedId) {
    edgeCaseErrors.push(`Question #${idx + 1}: Expected continuous ID '${expectedId}', found '${q.id}'`);
  }
});

// 3.2 Duplicate options check (all 4 options must be strictly distinct)
let duplicateOptionCount = 0;
questionBank.forEach((q, idx) => {
  if (Array.isArray(q.optionsZh)) {
    const setZh = new Set(q.optionsZh.map(s => String(s).trim()));
    if (setZh.size !== 4) {
      edgeCaseErrors.push(`${q.id}: optionsZh contains duplicate entries (size ${setZh.size}/4).`);
      duplicateOptionCount++;
    }
  }
  if (Array.isArray(q.optionsEn)) {
    const setEn = new Set(q.optionsEn.map(s => String(s).trim()));
    if (setEn.size !== 4) {
      edgeCaseErrors.push(`${q.id}: optionsEn contains duplicate entries (size ${setEn.size}/4).`);
      duplicateOptionCount++;
    }
  }
});
if (duplicateOptionCount === 0) {
  console.log(`   ✓ All 320 questions have strictly distinct 4 options in both languages.`);
}

// 3.3 Empty strings or non-string fields
let emptyStringErrors = 0;
questionBank.forEach((q, idx) => {
  ['questionZh', 'questionEn', 'explanationZh', 'explanationEn', 'subCategory', 'era'].forEach(f => {
    if (typeof q[f] !== 'string' || q[f].trim().length === 0) {
      edgeCaseErrors.push(`${q.id}: Field '${f}' is empty or non-string.`);
      emptyStringErrors++;
    }
  });
});
if (emptyStringErrors === 0) {
  console.log(`   ✓ 0 empty or non-string text fields detected.`);
}

// 3.4 Negative or invalid difficulty
let invalidDifficulty = 0;
questionBank.forEach(q => {
  if (typeof q.difficulty !== 'number' || ![1, 2, 3].includes(q.difficulty)) {
    edgeCaseErrors.push(`${q.id}: Invalid difficulty '${q.difficulty}'.`);
    invalidDifficulty++;
  }
});
if (invalidDifficulty === 0) {
  console.log(`   ✓ 0 invalid or negative difficulty values detected.`);
}

// 3.5 Fallback images physical integrity
let invalidImages = 0;
questionBank.forEach(q => {
  if (q.fallbackImage) {
    const p = path.resolve(projectRoot, 'public', q.fallbackImage.replace(/^\//, ''));
    if (!fs.existsSync(p)) {
      edgeCaseErrors.push(`${q.id}: Fallback image missing: ${p}`);
      invalidImages++;
    } else {
      const stat = fs.statSync(p);
      if (stat.size < 100) {
        edgeCaseErrors.push(`${q.id}: Fallback image abnormally small (${stat.size} bytes): ${p}`);
        invalidImages++;
      }
    }
  }
});
if (invalidImages === 0) {
  console.log(`   ✓ All referenced fallback images physically exist with valid size >= 100 bytes.`);
}

console.log(`\n======================================================`);
console.log(` Empirical Summary:`);
console.log(` - Blacklist Entities Tested : ${ADVERSARIAL_BLACKLIST.length}`);
console.log(` - Total Questions Scanned   : ${questionBank.length}`);
console.log(` - Violating Questions Found : ${questionViolationsMap.size}`);
console.log(` - Schema / Edge-case Errors : ${edgeCaseErrors.length}`);
console.log(`======================================================\n`);

if (questionViolationsMap.size > 0 || edgeCaseErrors.length > 0) {
  console.log(`VERDICT: REQUEST_CHANGES`);
  process.exit(1);
} else {
  console.log(`VERDICT: APPROVE`);
  process.exit(0);
}
