#!/usr/bin/env node
/**
 * scripts/verify_arched_question_bank.mjs
 * 
 * Comprehensive Dynamic Verification Engine for the ARCHED Question Bank.
 * Features:
 * 1. Dynamic Knowledge Graph Extraction from src/data/artData.js (21 periods, 66 figures, 154 works).
 * 2. 157-Entity Adversarial Blacklist Full-Field Scanner (zero out-of-scope leakages).
 * 3. Cross-Question Content Uniqueness Engine (stem, explanation, and option distinctness).
 * 4. Fuzzy Semantic Overlap Guard (Jaccard similarity > 0.85).
 * 5. Strict Visual ID Artwork Asset Verification (no avatar image substitutions).
 * 6. Uniform Option Balance & Chi-Square Goodness-of-Fit Validation.
 * 7. Physical Disk Asset Verification (file existence and byte size >= 100B).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

export const VALID_DOMAINS = [
  'chronology',
  'visual_id',
  'avant_garde',
  'artist_movement',
  'renaissance_classical'
];

export const DOMAIN_LABELS = {
  chronology: '1. Chronological Movement Sequencing (年代序列)',
  visual_id: '2. Visual Artwork & Author ID (图像识别与作者归属)',
  avant_garde: '3. 20th-Century Avant-Garde (20世纪先锋与建筑思潮)',
  artist_movement: '4. Artist Movement Categorization (流派归属与理论)',
  renaissance_classical: '5. Renaissance & Classical Mastery (文艺复兴与古典巨匠)'
};

export const MIN_TOTAL_QUESTIONS = 300;
export const MIN_DOMAIN_QUESTIONS = 60;

/**
 * 157-Entity Adversarial Blacklist
 * Historical entities strictly out-of-scope of canonical artData.js.
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

/**
 * Dynamic Knowledge Graph Loader from canonical src/data/artData.js
 */
export async function loadCanonicalKnowledgeGraph(projectRoot) {
  const artDataPath = path.resolve(projectRoot, 'src/data/artData.js');
  if (!fs.existsSync(artDataPath)) {
    throw new Error(`Canonical knowledge base not found at: ${artDataPath}`);
  }

  const fileUrl = 'file:///' + artDataPath.replace(/\\/g, '/');
  const mod = await import(fileUrl);
  const rawData = mod.artData || mod.default;

  if (!Array.isArray(rawData)) {
    throw new Error(`artData.js export is not an array. Found: ${typeof rawData}`);
  }

  const knowledge = {
    periods: new Map(),
    artists: new Map(),
    artworks: new Map(),
    canonicalIds: new Set(),
    canonicalNamesZh: new Set(),
    canonicalNamesEn: new Set(),
    canonicalArtworkImages: new Set(),
    canonicalArtistAvatars: new Set()
  };

  rawData.forEach(period => {
    knowledge.periods.set(period.id, period);
    knowledge.canonicalIds.add(period.id);
    if (period.name) knowledge.canonicalNamesZh.add(period.name.trim());
    if (period.englishName) knowledge.canonicalNamesEn.add(period.englishName.trim());

    (period.artists || []).forEach(artist => {
      knowledge.artists.set(artist.id, { ...artist, periodId: period.id });
      knowledge.canonicalIds.add(artist.id);
      if (artist.name) knowledge.canonicalNamesZh.add(artist.name.trim());
      if (artist.englishName) knowledge.canonicalNamesEn.add(artist.englishName.trim());
      if (artist.avatar) {
        knowledge.canonicalArtistAvatars.add(artist.avatar.replace(/^\//, ''));
      }

      (artist.artworks || []).forEach(artwork => {
        knowledge.artworks.set(artwork.id, { ...artwork, artistId: artist.id, periodId: period.id });
        knowledge.canonicalIds.add(artwork.id);
        if (artwork.titleZh) knowledge.canonicalNamesZh.add(artwork.titleZh.trim());
        if (artwork.titleEn) knowledge.canonicalNamesEn.add(artwork.titleEn.trim());
        if (artwork.title) knowledge.canonicalNamesEn.add(artwork.title.trim());
        if (artwork.image) {
          knowledge.canonicalArtworkImages.add(artwork.image.replace(/^\//, ''));
        }
      });
    });
  });

  const periodCount = knowledge.periods.size;
  const artistCount = knowledge.artists.size;
  const artworkCount = knowledge.artworks.size;

  if (periodCount !== 21 || artistCount !== 66 || artworkCount !== 154) {
    throw new Error(
      `Knowledge graph count mismatch: Expected 21 periods, 66 artists, 154 artworks. ` +
      `Found: ${periodCount} periods, ${artistCount} artists, ${artworkCount} artworks.`
    );
  }

  return knowledge;
}

// Tokenization and Similarity
function normalizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000]+/g, ' ')
    .replace(/[.,;:!?。，、；：！？（）()\[\]"'“”‘’`]/g, '');
}

function tokenize(str) {
  const clean = str.replace(/[^\w\u4e00-\u9fa5]/g, ' ').toLowerCase();
  const words = clean.split(/\s+/).filter(Boolean);
  const tokens = new Set();
  words.forEach(w => {
    if (/[a-z0-9]/.test(w)) {
      tokens.add(w);
    } else {
      for (let i = 0; i < w.length - 1; i++) {
        tokens.add(w.slice(i, i + 2));
      }
    }
  });
  return tokens;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  return intersection / (setA.size + setB.size - intersection);
}

/**
 * Main Question Bank Verification Engine
 */
export async function verifyQuestionBank(targetPath = null) {
  const filePath = targetPath || path.resolve(projectRoot, 'src/data/archedQuestionBank.js');
  console.log(`\n======================================================`);
  console.log(` ARCHED Question Bank Integrity & Schema Verification `);
  console.log(` Target: ${path.relative(projectRoot, filePath)}`);
  console.log(`======================================================\n`);

  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Question bank file does not exist at: ${filePath}`);
    return { success: false, error: 'File not found', total: 0 };
  }

  // 1. Dynamic Knowledge Base Loader
  const knowledge = await loadCanonicalKnowledgeGraph(projectRoot);

  // 2. Pre-flight Whitelist Cross-Check on Blacklist
  const falsePositives = [];
  ADVERSARIAL_BLACKLIST.forEach(b => {
    if (knowledge.canonicalNamesZh.has(b.name) || knowledge.canonicalNamesEn.has(b.name)) {
      falsePositives.push(b.name);
    }
  });
  if (falsePositives.length > 0) {
    throw new Error(`FATAL: In-scope entity wrongly included in blacklist: ${falsePositives.join(', ')}`);
  }

  console.log(`1. Canonical Knowledge Graph Loaded:`);
  console.log(`   - Periods  : ${knowledge.periods.size} (Expected: 21)`);
  console.log(`   - Artists  : ${knowledge.artists.size} (Expected: 66)`);
  console.log(`   - Artworks : ${knowledge.artworks.size} (Expected: 154)`);
  console.log(`   - Blacklist: ${ADVERSARIAL_BLACKLIST.length} Out-of-Scope Entities Verified`);

  // 3. Load Question Bank
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
               rawModule.default;

  if (!Array.isArray(bank)) {
    console.error(`[ERROR] Question bank export is not an array. Found: ${typeof bank}`);
    return { success: false, error: 'Export is not an array', total: 0 };
  }

  console.log(`\n2. Scanning ${bank.length} Question Entries...`);

  const errors = [];
  const warnings = [];
  const seenIds = new Set();

  // Content Uniqueness Maps
  const seenQuestionZh = new Map();
  const seenQuestionEn = new Map();
  const seenExplanationZh = new Map();
  const seenExplanationEn = new Map();
  const seenLongAnswersZh = new Map();

  const domainCounts = {
    chronology: 0,
    visual_id: 0,
    avant_garde: 0,
    artist_movement: 0,
    renaissance_classical: 0
  };
  const optionCounts = [0, 0, 0, 0];
  const domainOptionCounts = {
    chronology: [0, 0, 0, 0],
    visual_id: [0, 0, 0, 0],
    avant_garde: [0, 0, 0, 0],
    artist_movement: [0, 0, 0, 0],
    renaissance_classical: [0, 0, 0, 0]
  };
  const difficultyCounts = { 1: 0, 2: 0, 3: 0, other: 0 };
  let fallbackImageCount = 0;

  const scannedFields = [
    'id', 'domain', 'subCategory', 'era',
    'questionZh', 'questionEn',
    'optionsZh', 'optionsEn',
    'explanationZh', 'explanationEn',
    'tags'
  ];

  bank.forEach((q, idx) => {
    const qLabel = q?.id ? `[${q.id} (#${idx + 1})]` : `[Index #${idx + 1}]`;

    if (!q || typeof q !== 'object') {
      errors.push(`${qLabel}: Entry is not a valid object.`);
      return;
    }

    // A. ID verification and continuous sequence
    const expectedId = `arched_${String(idx + 1).padStart(3, '0')}`;
    if (!q.id || typeof q.id !== 'string') {
      errors.push(`${qLabel}: Missing or non-string 'id'.`);
    } else {
      if (q.id !== expectedId) {
        errors.push(`${qLabel}: Non-sequential ID. Expected '${expectedId}', got '${q.id}'.`);
      }
      if (seenIds.has(q.id)) {
        errors.push(`${qLabel}: Duplicate question id '${q.id}'.`);
      }
      seenIds.add(q.id);
    }

    // B. Domain verification
    if (!q.domain || !VALID_DOMAINS.includes(q.domain)) {
      errors.push(`${qLabel}: Invalid or missing 'domain': '${q.domain}'. Must be one of: ${VALID_DOMAINS.join(', ')}`);
    } else {
      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    }

    // C. SubCategory & Era
    if (!q.subCategory || typeof q.subCategory !== 'string' || q.subCategory.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'subCategory'.`);
    }
    if (!q.era || typeof q.era !== 'string' || q.era.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'era'.`);
    }

    // D. Bilingual Questions & Content Uniqueness
    if (!q.questionZh || typeof q.questionZh !== 'string' || q.questionZh.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'questionZh'.`);
    } else {
      const normZh = normalizeText(q.questionZh);
      if (seenQuestionZh.has(normZh)) {
        errors.push(`${qLabel}: Duplicate questionZh with [${seenQuestionZh.get(normZh)}].`);
      } else {
        seenQuestionZh.set(normZh, q.id);
      }
    }

    if (!q.questionEn || typeof q.questionEn !== 'string' || q.questionEn.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'questionEn'.`);
    } else {
      const normEn = normalizeText(q.questionEn);
      if (seenQuestionEn.has(normEn)) {
        errors.push(`${qLabel}: Duplicate questionEn with [${seenQuestionEn.get(normEn)}].`);
      } else {
        seenQuestionEn.set(normEn, q.id);
      }
    }

    // E. Bilingual Options (exactly 4 options each, mutually distinct)
    if (!Array.isArray(q.optionsZh) || q.optionsZh.length !== 4) {
      errors.push(`${qLabel}: 'optionsZh' must be an array of exactly 4 strings.`);
    } else {
      const uniqueZh = new Set(q.optionsZh.map(s => String(s).trim()));
      if (uniqueZh.size !== 4) {
        errors.push(`${qLabel}: 'optionsZh' contains duplicate options.`);
      }
      q.optionsZh.forEach((opt, optIdx) => {
        if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
          errors.push(`${qLabel}: 'optionsZh[${optIdx}]' is empty or not a string.`);
        }
      });
    }

    if (!Array.isArray(q.optionsEn) || q.optionsEn.length !== 4) {
      errors.push(`${qLabel}: 'optionsEn' must be an array of exactly 4 strings.`);
    } else {
      const uniqueEn = new Set(q.optionsEn.map(s => String(s).trim()));
      if (uniqueEn.size !== 4) {
        errors.push(`${qLabel}: 'optionsEn' contains duplicate options.`);
      }
      q.optionsEn.forEach((opt, optIdx) => {
        if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
          errors.push(`${qLabel}: 'optionsEn[${optIdx}]' is empty or not a string.`);
        }
      });
    }

    // F. CorrectAnswer index (0..3)
    if (typeof q.correctAnswer !== 'number' || !Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) {
      errors.push(`${qLabel}: 'correctAnswer' must be an integer between 0 and 3. Found: ${q.correctAnswer}`);
    } else {
      optionCounts[q.correctAnswer]++;
      if (domainOptionCounts[q.domain]) {
        domainOptionCounts[q.domain][q.correctAnswer]++;
      }

      // Check rotated duplicate answer text (> 50 characters, preventing multi-sentence copy-paste)
      const correctOptZh = q.optionsZh && q.optionsZh[q.correctAnswer]?.trim();
      if (correctOptZh && correctOptZh.length > 50) {
        if (seenLongAnswersZh.has(correctOptZh)) {
          errors.push(`${qLabel}: Duplicate correct answer explanation detected (identical to [${seenLongAnswersZh.get(correctOptZh)}])`);
        } else {
          seenLongAnswersZh.set(correctOptZh, q.id);
        }
      }
    }

    // G. Bilingual Explanations & Content Uniqueness
    if (!q.explanationZh || typeof q.explanationZh !== 'string' || q.explanationZh.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'explanationZh'.`);
    } else {
      const normExpZh = normalizeText(q.explanationZh);
      if (seenExplanationZh.has(normExpZh)) {
        errors.push(`${qLabel}: Duplicate explanationZh with [${seenExplanationZh.get(normExpZh)}].`);
      } else {
        seenExplanationZh.set(normExpZh, q.id);
      }
    }

    if (!q.explanationEn || typeof q.explanationEn !== 'string' || q.explanationEn.trim().length === 0) {
      errors.push(`${qLabel}: Missing or empty 'explanationEn'.`);
    } else {
      const normExpEn = normalizeText(q.explanationEn);
      if (seenExplanationEn.has(normExpEn)) {
        errors.push(`${qLabel}: Duplicate explanationEn with [${seenExplanationEn.get(normExpEn)}].`);
      } else {
        seenExplanationEn.set(normExpEn, q.id);
      }
    }

    // H. Tags
    if (!Array.isArray(q.tags) || q.tags.length === 0) {
      errors.push(`${qLabel}: 'tags' must be a non-empty array of strings.`);
    }

    // I. Difficulty
    if ([1, 2, 3].includes(q.difficulty)) {
      difficultyCounts[q.difficulty]++;
    } else {
      difficultyCounts.other++;
      errors.push(`${qLabel}: 'difficulty' must be 1, 2, or 3. Found: ${q.difficulty}`);
    }

    // J. Fallback Image Physical Existence & Visual ID Rules
    if (q.fallbackImage) {
      fallbackImageCount++;
      const relPath = q.fallbackImage.replace(/^\//, '');
      const fullPath = path.resolve(projectRoot, 'public', relPath);

      if (!fs.existsSync(fullPath)) {
        errors.push(`${qLabel}: Fallback image missing on disk: ${fullPath}`);
      } else {
        const stat = fs.statSync(fullPath);
        if (stat.size < 100) {
          errors.push(`${qLabel}: Fallback image abnormally small (<100B): ${fullPath} (${stat.size}B)`);
        }
      }

      // Strict Visual ID Rule: Must not use artist avatars as visual artwork stimulus
      if (q.domain === 'visual_id') {
        if (q.fallbackImage.includes('/artists/')) {
          errors.push(`${qLabel}: Visual recognition question uses artist avatar (${q.fallbackImage}) instead of canonical artwork image.`);
        }
      }
    }

    // K. Adversarial Blacklist Multi-Field Scan
    for (const b of ADVERSARIAL_BLACKLIST) {
      for (const field of scannedFields) {
        const val = q[field];
        if (!val) continue;
        const text = Array.isArray(val) ? val.join(' | ') : String(val);

        for (const pattern of b.patterns) {
          if (pattern.test(text)) {
            errors.push(`${qLabel}: Contains out-of-scope blacklist entity '${b.name}' in field '${field}'`);
            break;
          }
        }
      }
    }
  });

  // 4. Fuzzy Semantic Near-Duplicate Check across questions
  console.log(`\n3. Running Fuzzy Semantic Near-Duplicate Check (Jaccard > 0.85)...`);
  const tokenizedQuestions = bank.map(q => ({
    id: q.id,
    domain: q.domain,
    tokensZh: tokenize(q.questionZh || ''),
    tokensEn: tokenize(q.questionEn || '')
  }));

  for (let i = 0; i < tokenizedQuestions.length; i++) {
    for (let j = i + 1; j < tokenizedQuestions.length; j++) {
      const qA = tokenizedQuestions[i];
      const qB = tokenizedQuestions[j];
      if (qA.domain !== qB.domain) continue;

      const simZh = jaccardSimilarity(qA.tokensZh, qB.tokensZh);
      const simEn = jaccardSimilarity(qA.tokensEn, qB.tokensEn);

      if (simZh > 0.85 || simEn > 0.85) {
        warnings.push(`[HIGH_SEMANTIC_OVERLAP] [${qA.id}] and [${qB.id}] share >85% token overlap (Zh: ${(simZh * 100).toFixed(1)}%, En: ${(simEn * 100).toFixed(1)}%).`);
      }
    }
  }

  // 5. Quantity and Domain Balance Checks
  if (bank.length < MIN_TOTAL_QUESTIONS) {
    errors.push(`Total question count (${bank.length}) is below the required minimum of ${MIN_TOTAL_QUESTIONS}.`);
  }

  VALID_DOMAINS.forEach(dom => {
    const count = domainCounts[dom] || 0;
    if (count < MIN_DOMAIN_QUESTIONS) {
      errors.push(`Domain '${dom}' count (${count}) is below the substantive threshold of ${MIN_DOMAIN_QUESTIONS}.`);
    }
  });

  // 6. Option Key Balance & Chi-Square Goodness-of-Fit
  const expectedPerOption = bank.length / 4;
  let chiSquare = 0;
  for (let k = 0; k < 4; k++) {
    const observed = optionCounts[k];
    const diff = observed - expectedPerOption;
    chiSquare += (diff * diff) / expectedPerOption;
    const ratio = observed / bank.length;
    if (ratio < 0.20 || ratio > 0.30) {
      errors.push(`Option ${k} balance is skewed: ${observed}/${bank.length} (${(ratio * 100).toFixed(1)}%), expected 20%-30%`);
    }
  }
  if (chiSquare > 7.815) {
    errors.push(`Option distribution failed Chi-Square test: chi2 = ${chiSquare.toFixed(4)} (threshold 7.815)`);
  }

  // Diagnostics Output
  console.log(`\n--- Domain Distribution Analysis ---`);
  VALID_DOMAINS.forEach(dom => {
    const count = domainCounts[dom] || 0;
    const ok = count >= MIN_DOMAIN_QUESTIONS;
    const optStr = domainOptionCounts[dom] ? `[${domainOptionCounts[dom].join(', ')}]` : '';
    console.log(`  ${ok ? '✓' : '✗'} ${DOMAIN_LABELS[dom].padEnd(58)} : ${count} questions (min ${MIN_DOMAIN_QUESTIONS}) Options: ${optStr}`);
  });

  console.log(`\n--- Overall Option Balance & Chi-Square ---`);
  console.log(`  A (0): ${optionCounts[0]} (${(optionCounts[0] / bank.length * 100).toFixed(1)}%)`);
  console.log(`  B (1): ${optionCounts[1]} (${(optionCounts[1] / bank.length * 100).toFixed(1)}%)`);
  console.log(`  C (2): ${optionCounts[2]} (${(optionCounts[2] / bank.length * 100).toFixed(1)}%)`);
  console.log(`  D (3): ${optionCounts[3]} (${(optionCounts[3] / bank.length * 100).toFixed(1)}%)`);
  console.log(`  Chi-Square Statistic: ${chiSquare.toFixed(4)} (Threshold: 7.815)`);

  console.log(`\n--- Difficulty & Asset Statistics ---`);
  console.log(`  Difficulty 1 (Beginner/Foundational) : ${difficultyCounts[1]}`);
  console.log(`  Difficulty 2 (Intermediate/ARCHED)  : ${difficultyCounts[2]}`);
  console.log(`  Difficulty 3 (Advanced/Mastery)     : ${difficultyCounts[3]}`);
  console.log(`  Questions with fallback disk image  : ${fallbackImageCount}`);

  if (warnings.length > 0) {
    console.log(`\n--- Warnings (${warnings.length}) ---`);
    warnings.slice(0, 10).forEach(w => console.warn(`  ! ${w}`));
    if (warnings.length > 10) console.warn(`  ... and ${warnings.length - 10} more warnings.`);
  }

  console.log(`\n--- Verification Result ---`);
  if (errors.length === 0) {
    console.log(`\n🎉 SUCCESS: All ${bank.length} questions strictly conform to ARCHED specification!`);
    console.log(`✓ Dynamic Knowledge Graph validated against artData.js.`);
    console.log(`✓ Zero 157-entity out-of-scope blacklist mentions detected.`);
    console.log(`✓ 100% Cross-question content uniqueness verified (0 duplicate stems/explanations).`);
    console.log(`✓ Visual ID artwork image integrity verified (0 avatar substitutions).`);
    console.log(`✓ Option key distribution verified (Chi-Square: ${chiSquare.toFixed(4)}).\n`);
    return {
      success: true,
      total: bank.length,
      domainCounts,
      difficultyCounts,
      chiSquare,
      errors: []
    };
  } else {
    console.error(`\n❌ FAILED: Found ${errors.length} validation errors:`);
    errors.slice(0, 25).forEach(err => console.error(`  - ${err}`));
    if (errors.length > 25) {
      console.error(`  ... and ${errors.length - 25} more errors.`);
    }
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
