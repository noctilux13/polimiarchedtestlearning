// scripts/generateArchedBank.mjs
// Compiles and validates the complete 210-question ARCHED Art & Architecture History Question Bank
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// =========================================================================
// Domain 1: Chronological Movement & Architecture Sequencing (40 questions)
// =========================================================================
export const chronologyQuestions = [
  {
    id: "arched_001",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "19th_century",
    questionEn: "Place the following artistic movements in the correct chronological order of emergence:",
    questionZh: "请将以下艺术运动按照历史出现的先后顺序正确排列：",
    optionsEn: [
      "Neoclassicism, Impressionism, Expressionism, Pop Art",
      "Impressionism, Pop Art, Expressionism, Neoclassicism",
      "Impressionism, Expressionism, Neoclassicism, Pop Art",
      "Neoclassicism, Expressionism, Pop Art, Impressionism"
    ],
    optionsZh: [
      "新古典主义、印象派、表现主义、波普艺术",
      "印象派、波普艺术、表现主义、新古典主义",
      "印象派、表现主义、新古典主义、波普艺术",
      "新古典主义、表现主义、波普艺术、印象派"
    ],
    correctAnswer: 0,
    explanationEn: "Neoclassicism emerged in the mid-18th century (c. 1760s). French Impressionism formed in the 1870s. Expressionism emerged with Die Brücke in 1905. Pop Art originated in the mid-1950s.",
    explanationZh: "新古典主义兴起于18世纪中叶（约1760年代）；印象派形成于19世纪70年代（1874年首展）；表现主义爆发于1905年（德累斯顿桥社）；波普艺术兴起于20世纪50年代中叶。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
    fallbackImage: "/images/artworks/arc-de-triomphe.jpg",
    tags: ["Chronology", "Neoclassicism", "Impressionism", "Expressionism", "Pop Art"],
    difficulty: 1
  },
  {
    id: "arched_002",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "medieval",
    questionEn: "What is the correct historical sequence of Western architectural epochs from Antiquity to Modernity?",
    questionZh: "西方建筑史从古代至现代发展演变的主要历史分期正确顺序是：",
    optionsEn: [
      "Romanesque -> Gothic -> Renaissance -> Baroque -> Neoclassical -> Modern",
      "Gothic -> Romanesque -> Baroque -> Renaissance -> Modern -> Neoclassical",
      "Romanesque -> Renaissance -> Gothic -> Neoclassical -> Baroque -> Modern",
      "Renaissance -> Romanesque -> Gothic -> Baroque -> Modern -> Neoclassical"
    ],
    optionsZh: [
      "罗马风 (Romanesque) -> 哥特式 (Gothic) -> 文艺复兴 -> 巴洛克 -> 新古典主义 -> 现代主义",
      "哥特式 -> 罗马风 -> 巴洛克 -> 文艺复兴 -> 现代主义 -> 新古典主义",
      "罗马风 -> 文艺复兴 -> 哥特式 -> 新古典主义 -> 巴洛克 -> 现代主义",
      "文艺复兴 -> 罗马风 -> 哥特式 -> 巴洛克 -> 现代主义 -> 新古典主义"
    ],
    correctAnswer: 0,
    explanationEn: "Romanesque dominated the 10th-12th centuries, Gothic from c. 1140 to the 16th century, Renaissance in the 15th-16th centuries, Baroque in the 17th-early 18th centuries, Neoclassicism in the late 18th-early 19th centuries, followed by Modernism in the 20th century.",
    explanationZh: "罗马风盛行于10-12世纪，哥特式始于1140年代圣丹尼斯圣殿并延续至16世纪，文艺复兴于15-16世纪兴起，巴洛克风行17世纪，新古典主义主导18世纪晚期至19世纪初，20世纪进入现代主义。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Amiens_cathedral_exterior_facade.jpg/800px-Amiens_cathedral_exterior_facade.jpg",
    fallbackImage: "/images/artworks/amiens-cathedral.jpg",
    tags: ["Chronology", "Architecture", "Romanesque", "Gothic", "Renaissance", "Baroque", "Neoclassical", "Modern"],
    difficulty: 1
  },
  {
    id: "arched_003",
    domain: "chronology",
    subCategory: "Manifesto Chronology",
    era: "20th_avant_garde",
    questionEn: "Identify the correct chronological order of the publication of these pivotal avant-garde manifestos:",
    questionZh: "请按发表年份的时间先后排列以下20世纪关键前卫艺术运动宣言：",
    optionsEn: [
      "Futurist Manifesto (1909) -> Bauhaus Manifesto (1919) -> Surrealist Manifesto (1924)",
      "Bauhaus Manifesto (1919) -> Futurist Manifesto (1909) -> Surrealist Manifesto (1924)",
      "Surrealist Manifesto (1924) -> Futurist Manifesto (1909) -> Bauhaus Manifesto (1919)",
      "Futurist Manifesto (1909) -> Surrealist Manifesto (1924) -> Bauhaus Manifesto (1919)"
    ],
    optionsZh: [
      "未来主义宣言 (1909) -> 包豪斯宣言 (1919) -> 超现实主义第一宣言 (1924)",
      "包豪斯宣言 (1919) -> 未来主义宣言 (1909) -> 超现实主义第一宣言 (1924)",
      "超现实主义第一宣言 (1924) -> 未来主义宣言 (1909) -> 包豪斯宣言 (1919)",
      "未来主义宣言 (1909) -> 超现实主义第一宣言 (1924) -> 包豪斯宣言 (1919)"
    ],
    correctAnswer: 0,
    explanationEn: "Marinetti published the Futurist Manifesto in Le Figaro in 1909. Walter Gropius founded the Bauhaus and published its manifesto in Weimar in 1919. André Breton published the Manifeste du surréalisme in Paris in 1924.",
    explanationZh: "马里内蒂于1909年在《费加罗报》发表《未来主义宣言》；格罗皮乌斯于1919年创立魏玛包豪斯并发表建校宣言；安德烈·布勒东于1924年在巴黎发表《超现实主义第一宣言》。",
    tags: ["Chronology", "Manifesto", "Futurism", "Bauhaus", "Surrealism"],
    difficulty: 2
  },
  {
    id: "arched_004",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "renaissance",
    questionEn: "Which of the following sequences accurately reflects Italian Renaissance architectural evolution?",
    questionZh: "下列哪个序列准确反映了意大利文艺复兴建筑大师的代际传承与发展？",
    optionsEn: [
      "Brunelleschi (Early) -> Bramante (High) -> Giulio Romano (Mannerism) -> Palladio (Late)",
      "Bramante -> Brunelleschi -> Palladio -> Giulio Romano",
      "Giulio Romano -> Brunelleschi -> Bramante -> Palladio",
      "Brunelleschi -> Palladio -> Bramante -> Giulio Romano"
    ],
    optionsZh: [
      "布鲁内莱斯基 (早期) -> 伯拉孟特 (盛期) -> 朱利奥·罗马诺 (样式主义) -> 帕拉第奥 (晚期)",
      "伯拉孟特 -> 布鲁内莱斯基 -> 帕拉第奥 -> 朱利奥·罗马诺",
      "朱利奥·罗马诺 -> 布鲁内莱斯基 -> 伯拉孟特 -> 帕拉第奥",
      "布鲁内莱斯基 -> 帕拉第奥 -> 伯拉孟特 -> 朱利奥·罗马诺"
    ],
    correctAnswer: 0,
    explanationEn: "Filippo Brunelleschi pioneered the Early Renaissance (1420s). Donato Bramante defined the High Renaissance in Rome (c. 1500). Giulio Romano pioneered Mannerism at Palazzo Te in Mantua (1520s-1530s). Andrea Palladio synthesized classical harmony in the late 16th century (1550s-1570s).",
    explanationZh: "布鲁内莱斯基开创早期文艺复兴（1420年代佛罗伦萨穹顶）；伯拉孟特奠定罗马盛期文艺复兴（约1500年坦比哀多）；朱利奥·罗马诺在曼托瓦苔庄园开创样式主义颠覆（1530年代）；帕拉第奥在16世纪下半叶确立晚期古典规范。",
    tags: ["Chronology", "Renaissance", "Architecture", "Brunelleschi", "Bramante", "Palladio"],
    difficulty: 2
  },
  {
    id: "arched_005",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "19th_century",
    questionEn: "Arrange these late 19th-century and early 20th-century French painting currents in chronological order:",
    questionZh: "请将19世纪末至20世纪初法国主要绘画流派按时间顺序排列：",
    optionsEn: [
      "Post-Impressionism -> Fauvism -> Cubism -> Purism",
      "Fauvism -> Post-Impressionism -> Cubism -> Purism",
      "Cubism -> Post-Impressionism -> Fauvism -> Purism",
      "Post-Impressionism -> Cubism -> Fauvism -> Purism"
    ],
    optionsZh: [
      "后印象派 -> 野兽派 -> 立体主义 -> 纯粹主义",
      "野兽派 -> 后印象派 -> 立体主义 -> 纯粹主义",
      "立体主义 -> 后印象派 -> 野兽派 -> 纯粹主义",
      "后印象派 -> 立体主义 -> 野兽派 -> 纯粹主义"
    ],
    correctAnswer: 0,
    explanationEn: "Post-Impressionism developed in the 1880s (Cézanne, Van Gogh, Gauguin). Fauvism erupted at the 1905 Salon d'Automne. Analytical Cubism was founded by Picasso and Braque in 1907-1909. Purism was launched by Le Corbusier and Ozenfant in 1918.",
    explanationZh: "后印象派形成于1880年代（塞尚、梵高、高更）；野兽派爆发于1905年秋季沙龙；立体主义于1907年毕加索创作《阿维尼翁的少女》后形成；纯粹主义由勒·柯布西耶与奥占芳于1918年确立。",
    tags: ["Chronology", "Post-Impressionism", "Fauvism", "Cubism", "Purism"],
    difficulty: 2
  },
  {
    id: "arched_006",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "industrial",
    questionEn: "Trace the chronological lineage of Modernist design reform movements:",
    questionZh: "请按时代先后追踪现代设计改良运动的历史谱系：",
    optionsEn: [
      "Arts and Crafts -> Art Nouveau -> Deutscher Werkbund -> Bauhaus",
      "Art Nouveau -> Arts and Crafts -> Bauhaus -> Deutscher Werkbund",
      "Bauhaus -> Deutscher Werkbund -> Art Nouveau -> Arts and Crafts",
      "Arts and Crafts -> Bauhaus -> Art Nouveau -> Deutscher Werkbund"
    ],
    optionsZh: [
      "工艺美术运动 -> 新艺术运动 -> 德意志制造联盟 -> 包豪斯",
      "新艺术运动 -> 工艺美术运动 -> 包豪斯 -> 德意志制造联盟",
      "包豪斯 -> 德意志制造联盟 -> 新艺术运动 -> 工艺美术运动",
      "工艺美术运动 -> 包豪斯 -> 新艺术运动 -> 德意志制造联盟"
    ],
    correctAnswer: 0,
    explanationEn: "William Morris started the Arts and Crafts movement in Britain in the 1880s. Art Nouveau flourished internationally in the 1890s. The Deutscher Werkbund was established in 1907 to integrate crafts with industrial mass production. The Bauhaus was founded in 1919.",
    explanationZh: "威廉·莫里斯于1880年代在英国领导工艺美术运动；新艺术运动在1890年代风靡欧洲；德意志制造联盟于1907年成立以协调工艺与工业化大生产；包豪斯于1919年继承并升华了这一传统。",
    tags: ["Chronology", "Architecture", "Design", "Arts and Crafts", "Bauhaus"],
    difficulty: 2
  },
  {
    id: "arched_007",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "20th_avant_garde",
    questionEn: "Which chronological sequence of 20th-century avant-garde movements is correct?",
    questionZh: "下列哪组20世纪先锋艺术运动的先后顺序是完全正确的？",
    optionsEn: [
      "Dada -> Surrealism -> Abstract Expressionism -> Pop Art",
      "Surrealism -> Dada -> Pop Art -> Abstract Expressionism",
      "Dada -> Pop Art -> Surrealism -> Abstract Expressionism",
      "Abstract Expressionism -> Dada -> Surrealism -> Pop Art"
    ],
    optionsZh: [
      "达达主义 -> 超现实主义 -> 抽象表现主义 -> 波普艺术",
      "超现实主义 -> 达达主义 -> 波普艺术 -> 抽象表现主义",
      "达达主义 -> 波普艺术 -> 超现实主义 -> 抽象表现主义",
      "抽象表现主义 -> 达达主义 -> 超现实主义 -> 波普艺术"
    ],
    correctAnswer: 0,
    explanationEn: "Dada was born in Zurich in 1916. Surrealism coalesced in Paris in 1924. Abstract Expressionism flourished in New York during the 1940s-1950s. Pop Art gained prominence from the mid-1950s into the 1960s.",
    explanationZh: "苏黎世达达主义诞生于1916年；超现实主义于1924年在巴黎建立；抽象表现主义在1940年代战后纽约崛起；波普艺术在1950年代中期起席卷英美。",
    tags: ["Chronology", "Dada", "Surrealism", "Abstract Expressionism", "Pop Art"],
    difficulty: 1
  },
  {
    id: "arched_008",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "ancient",
    questionEn: "Order these monumental architectural landmarks chronologically by completion date:",
    questionZh: "请将下列地标性历史建筑按照其落成或主要营建时间先后排序：",
    optionsEn: [
      "Parthenon in Athens -> Pantheon in Rome -> Hagia Sophia in Constantinople -> Speyer Cathedral",
      "Pantheon in Rome -> Parthenon in Athens -> Speyer Cathedral -> Hagia Sophia",
      "Parthenon in Athens -> Hagia Sophia -> Pantheon in Rome -> Speyer Cathedral",
      "Speyer Cathedral -> Parthenon in Athens -> Pantheon in Rome -> Hagia Sophia"
    ],
    optionsZh: [
      "雅典帕特农神庙 -> 罗马万神庙 -> 君士坦丁堡圣索菲亚大教堂 -> 施佩耶尔主教座堂",
      "罗马万神庙 -> 雅典帕特农神庙 -> 施佩耶尔主教座堂 -> 圣索菲亚大教堂",
      "雅典帕特农神庙 -> 圣索菲亚大教堂 -> 罗马万神庙 -> 施佩耶尔主教座堂",
      "施佩耶尔主教座堂 -> 雅典帕特农神庙 -> 罗马万神庙 -> 圣索菲亚大教堂"
    ],
    correctAnswer: 0,
    explanationEn: "Parthenon: 438 BC (Classical Greece). Pantheon: c. 125 AD (Imperial Rome). Hagia Sophia: 537 AD (Byzantine Empire). Speyer Cathedral: begun 1030 AD, vaulted 1082-1106 AD (Imperial Romanesque).",
    explanationZh: "雅典帕特农神庙落成于公元前438年（古希腊）；罗马万神庙由哈德良皇帝建于约公元125年；拜占庭圣索菲亚大教堂建成于公元537年；德国施佩耶尔大教堂拱顶营建于11世纪末罗马风盛期（1082-1106年）。",
    tags: ["Chronology", "Architecture", "Ancient", "Byzantine", "Romanesque"],
    difficulty: 2
  },
  {
    id: "arched_009",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "baroque",
    questionEn: "Trace the progression of post-Renaissance European architectural styles from 1600 to 1850:",
    questionZh: "请按时代顺序排列从1600年至1850年间欧洲主流建筑与艺术风格演进：",
    optionsEn: [
      "Baroque -> Rococo -> Neoclassicism -> Romanticism",
      "Rococo -> Baroque -> Neoclassicism -> Romanticism",
      "Baroque -> Neoclassicism -> Rococo -> Romanticism",
      "Neoclassicism -> Baroque -> Rococo -> Romanticism"
    ],
    optionsZh: [
      "巴洛克 -> 洛可可 -> 新古典主义 -> 浪漫主义",
      "洛可可 -> 巴洛克 -> 新古典主义 -> 浪漫主义",
      "巴洛克 -> 新古典主义 -> 洛可可 -> 浪漫主义",
      "新古典主义 -> 巴洛克 -> 洛可可 -> 浪漫主义"
    ],
    correctAnswer: 0,
    explanationEn: "Baroque dominated the 17th century (c. 1600-1700). Rococo emerged in France around the 1720s-1730s. Neoclassicism revived Greco-Roman antiquity in the 1760s-1800. Romanticism arose in the early 19th century.",
    explanationZh: "巴洛克主导17世纪欧洲；洛可可于18世纪前中叶盛行法国与中欧；新古典主义以考古学复兴在1760年代至1800年代成为主流；浪漫主义在19世纪初全面展开。",
    tags: ["Chronology", "Baroque", "Rococo", "Neoclassical", "Romanticism"],
    difficulty: 1
  },
  {
    id: "arched_010",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "industrial",
    questionEn: "Order these modern architectural milestones chronologically from 19th-century engineering to the International Style:",
    questionZh: "请将下列从19世纪工业工程到国际主义风格的现代建筑里程碑按建造年代排序：",
    optionsEn: [
      "Crystal Palace (1851) -> Eiffel Tower (1889) -> Bauhaus Dessau (1925) -> Villa Savoye (1929)",
      "Eiffel Tower (1889) -> Crystal Palace (1851) -> Villa Savoye (1929) -> Bauhaus Dessau (1925)",
      "Crystal Palace (1851) -> Bauhaus Dessau (1925) -> Eiffel Tower (1889) -> Villa Savoye (1929)",
      "Bauhaus Dessau (1925) -> Crystal Palace (1851) -> Eiffel Tower (1889) -> Villa Savoye (1929)"
    ],
    optionsZh: [
      "伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 德绍包豪斯校舍 (1925) -> 萨伏伊别墅 (1929)",
      "巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 萨伏伊别墅 (1929) -> 德绍包豪斯校舍 (1925)",
      "伦敦水晶宫 (1851) -> 德绍包豪斯校舍 (1925) -> 巴黎埃菲尔铁塔 (1889) -> 萨伏伊别墅 (1929)",
      "德绍包豪斯校舍 (1925) -> 伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 萨伏伊别墅 (1929)"
    ],
    correctAnswer: 0,
    explanationEn: "Paxton's Crystal Palace was built for the 1851 Great Exhibition. The Eiffel Tower was completed for the 1889 Paris Exposition. Gropius's Bauhaus in Dessau opened in 1925. Le Corbusier completed Villa Savoye in 1929.",
    explanationZh: "帕克斯顿的水晶宫建于1851年伦敦万国博览会；埃菲尔铁塔落成于1889年巴黎世博会；格罗皮乌斯设计的德绍包豪斯于1925年落成；柯布西耶的萨伏伊别墅于1929年完工。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bauhaus_Dessau_workshop_wing_2005.jpg/800px-Bauhaus_Dessau_workshop_wing_2005.jpg",
    fallbackImage: "/images/artworks/bauhaus-dessau.jpg",
    tags: ["Chronology", "Architecture", "Modern", "Crystal Palace", "Bauhaus", "Le Corbusier"],
    difficulty: 2
  },
  {
    id: "arched_011",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "medieval",
    questionEn: "Trace the structural evolution of Gothic vaulting chronologically:",
    questionZh: "请按结构技术演进的时间先后排列中世纪至哥特式拱券技术的发展：",
    optionsEn: [
      "Romanesque Barrel Vault -> Sexpartite Ribbed Vault -> Quadripartite Ribbed Vault -> English Fan Vault",
      "Sexpartite Ribbed Vault -> Romanesque Barrel Vault -> English Fan Vault -> Quadripartite Ribbed Vault",
      "Romanesque Barrel Vault -> English Fan Vault -> Sexpartite Ribbed Vault -> Quadripartite Ribbed Vault",
      "English Fan Vault -> Quadripartite Ribbed Vault -> Sexpartite Ribbed Vault -> Romanesque Barrel Vault"
    ],
    optionsZh: [
      "罗马风连续筒形拱 -> 早期哥特六分肋骨拱 -> 盛期哥特四分肋骨拱 -> 英国垂直哥特扇形拱",
      "早期哥特六分肋骨拱 -> 罗马风连续筒形拱 -> 英国垂直哥特扇形拱 -> 盛期哥特四分肋骨拱",
      "罗马风连续筒形拱 -> 英国垂直哥特扇形拱 -> 早期哥特六分肋骨拱 -> 盛期哥特四分肋骨拱",
      "英国垂直哥特扇形拱 -> 盛期哥特四分肋骨拱 -> 早期哥特六分肋骨拱 -> 罗马风连续筒形拱"
    ],
    correctAnswer: 0,
    explanationEn: "Continuous barrel vaults characterized Romanesque basilicas (11th c.). Six-part rib vaults appeared in Early Gothic (Notre-Dame de Paris, c. 1163). Four-part quadripartite vaults simplified bays in High Gothic (Chartres, c. 1194). Fan vaulting peaked in English Perpendicular Gothic (King's College Chapel, early 16th c.).",
    explanationZh: "11世纪罗马风多用重厚筒形拱；12世纪中叶早期哥特（如巴黎圣母院）采用六分肋骨拱；12世纪末盛期哥特（如沙特尔大教堂）精简为四分肋骨拱以强化开窗；15-16世纪英国垂直哥特发展出极致装饰的扇形拱。",
    tags: ["Chronology", "Architecture", "Gothic", "Vaulting"],
    difficulty: 2
  },
  {
    id: "arched_012",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "renaissance",
    questionEn: "Arrange these four Italian masters of painterly naturalism in chronological order:",
    questionZh: "请将以下四位开创写实透视与人文主义的意大利绘画巨匠按出生与活跃年代先后排序：",
    optionsEn: [
      "Cimabue -> Giotto -> Masaccio -> Leonardo da Vinci",
      "Giotto -> Cimabue -> Masaccio -> Leonardo da Vinci",
      "Masaccio -> Cimabue -> Giotto -> Leonardo da Vinci",
      "Cimabue -> Masaccio -> Giotto -> Leonardo da Vinci"
    ],
    optionsZh: [
      "奇马布埃 (Cimabue) -> 乔托 (Giotto) -> 马萨乔 (Masaccio) -> 达·芬奇 (Leonardo da Vinci)",
      "乔托 -> 奇马布埃 -> 马萨乔 -> 达·芬奇",
      "马萨乔 -> 奇马布埃 -> 乔托 -> 达·芬奇",
      "奇马布埃 -> 马萨乔 -> 乔托 -> 达·芬奇"
    ],
    correctAnswer: 0,
    explanationEn: "Cimabue was active c. 1270-1302. His pupil Giotto transformed Trecento art c. 1300-1337. Masaccio introduced mathematical linear perspective in the 1420s. Leonardo da Vinci represented the High Renaissance (1452-1519).",
    explanationZh: "奇马布埃活跃于13世纪晚期；乔托于14世纪初（1303-1305年斯克罗威尼礼拜堂）彻底革新中世纪画风；马萨乔在1420年代开创精确透视与体量感；达·芬奇代表盛期文艺复兴顶峰（15世纪末至16世纪初）。",
    tags: ["Chronology", "Renaissance", "Giotto", "Masaccio", "Leonardo"],
    difficulty: 1
  },
  {
    id: "arched_013",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "renaissance",
    questionEn: "Trace the chronological evolution of sculptural 'David' masterworks from the 15th to the 17th century:",
    questionZh: "请按创作时间先后排列15至17世纪欧洲三座最具代表性的《大卫》雕塑名作：",
    optionsEn: [
      "Donatello's bronze David (c. 1440) -> Michelangelo's marble David (1504) -> Bernini's dynamic marble David (1624)",
      "Michelangelo's David -> Donatello's David -> Bernini's David",
      "Donatello's David -> Bernini's David -> Michelangelo's David",
      "Bernini's David -> Michelangelo's David -> Donatello's David"
    ],
    optionsZh: [
      "多纳泰罗青铜大卫 (约1440) -> 米开朗基罗大理石大卫 (1504) -> 贝尼尼巴洛克大卫 (1624)",
      "米开朗基罗大卫 -> 多纳泰罗大卫 -> 贝尼尼大卫",
      "多纳泰罗大卫 -> 贝尼尼大卫 -> 米开朗基罗大卫",
      "贝尼尼大卫 -> 米开朗基罗大卫 -> 多纳泰罗大卫"
    ],
    correctAnswer: 0,
    explanationEn: "Donatello created the first freestanding bronze nude David c. 1440. Michelangelo carved his heroic High Renaissance marble David in 1501-1504. Gian Lorenzo Bernini created his dramatic, twisting Baroque David in 1623-1624.",
    explanationZh: "多纳泰罗于1440年左右创作古希腊罗马后第一尊独立裸体青铜大卫；米开朗基罗于1504年完成盛期文艺复兴雄伟庄严的大理石大卫；贝尼尼于1624年创作充满旋转张力与戏剧爆发力的巴洛克大卫。",
    tags: ["Chronology", "Renaissance", "Baroque", "Sculpture", "Donatello", "Michelangelo", "Bernini"],
    difficulty: 1
  },
  {
    id: "arched_014",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "19th_century",
    questionEn: "Which sequence correctly traces the development of 19th-century French avant-garde painting?",
    questionZh: "下列哪组序列正确展现了19世纪法国绘画从写实到前卫探索的发展轨迹？",
    optionsEn: [
      "Realism (Courbet 1855) -> Impressionism (1874) -> Pointillism (Seurat 1886) -> Fauvism (1905)",
      "Impressionism -> Realism -> Pointillism -> Fauvism",
      "Realism -> Pointillism -> Impressionism -> Fauvism",
      "Fauvism -> Realism -> Impressionism -> Pointillism"
    ],
    optionsZh: [
      "现实主义 (库尔贝 1855) -> 印象派 (1874) -> 点彩派/新印象派 (修拉 1886) -> 野兽派 (1905)",
      "印象派 -> 现实主义 -> 点彩派 -> 野兽派",
      "现实主义 -> 点彩派 -> 印象派 -> 野兽派",
      "野兽派 -> 现实主义 -> 印象派 -> 点彩派"
    ],
    correctAnswer: 0,
    explanationEn: "Courbet held his Pavilion of Realism in 1855. The Impressionists held their first independent exhibition in 1874. Seurat exhibited 'A Sunday on La Grande Jatte' in 1886 launching Neo-Impressionism. Fauvism was baptized at the 1905 Salon d'Automne.",
    explanationZh: "库尔贝于1855年建立“写实主义馆”；印象派于1874年举办首次联合展览；修拉于1886年展出《大碗岛的星期天下午》开创点彩新印象派；野兽派于1905年秋季沙龙正式亮相。",
    tags: ["Chronology", "Realism", "Impressionism", "Pointillism", "Fauvism"],
    difficulty: 2
  },
  {
    id: "arched_015",
    domain: "chronology",
    subCategory: "Manifesto Chronology",
    era: "20th_avant_garde",
    questionEn: "Arrange these modern art and architecture milestones of the interwar period chronologically:",
    questionZh: "请将两次世界大战之间的现代艺术与建筑重要事件按发生先后排列：",
    optionsEn: [
      "De Stijl founded (1917) -> Bauhaus founded (1919) -> Inkhuk Constructivism (1920) -> First CIAM Congress (1928)",
      "Bauhaus founded -> De Stijl founded -> First CIAM Congress -> Inkhuk Constructivism",
      "Inkhuk Constructivism -> De Stijl founded -> Bauhaus founded -> First CIAM Congress",
      "De Stijl founded -> First CIAM Congress -> Bauhaus founded -> Inkhuk Constructivism"
    ],
    optionsZh: [
      "风格派成立 (1917) -> 包豪斯成立 (1919) -> 莫斯科构成主义工作组 (1920) -> 第一届CIAM国际现代建筑大会 (1928)",
      "包豪斯成立 -> 风格派成立 -> 第一届CIAM大会 -> 莫斯科构成主义工作组",
      "莫斯科构成主义工作组 -> 风格派成立 -> 包豪斯成立 -> 第一届CIAM大会",
      "风格派成立 -> 第一届CIAM大会 -> 包豪斯成立 -> 莫斯科构成主义工作组"
    ],
    correctAnswer: 0,
    explanationEn: "Theo van Doesburg founded De Stijl in Leiden in 1917. Gropius founded the Bauhaus in 1919. The First Working Group of Constructivists was established at Inkhuk in Moscow in 1920-1921. CIAM held its inaugural congress in Switzerland in 1928.",
    explanationZh: "杜斯堡等于1917在荷兰莱顿创办《风格派》期刊；格罗皮乌斯于1919年创立包豪斯；莫斯科艺术文化研究所于1920-1921年成立构成主义工作组；首届国际现代建筑会议（CIAM）于1928年在瑞士拉萨拉成立。",
    tags: ["Chronology", "Modern", "De Stijl", "Bauhaus", "Constructivism", "CIAM"],
    difficulty: 2
  },
  {
    id: "arched_016",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "renaissance",
    questionEn: "Order these monumental Italian church and facade designs chronologically:",
    questionZh: "请按建造启动年代先后排列以下四座意大利建筑经典名作：",
    optionsEn: [
      "Sant'Andrea in Mantua (Alberti 1472) -> Villa Rotonda (Palladio 1566) -> San Carlo alle Quattro Fontane (Borromini 1638) -> Superga Basilica (Juvarra 1717)",
      "Villa Rotonda -> Sant'Andrea in Mantua -> San Carlo alle Quattro Fontane -> Superga Basilica",
      "Sant'Andrea in Mantua -> San Carlo alle Quattro Fontane -> Villa Rotonda -> Superga Basilica",
      "Superga Basilica -> Sant'Andrea in Mantua -> Villa Rotonda -> San Carlo alle Quattro Fontane"
    ],
    optionsZh: [
      "曼托瓦圣安德肋圣殿 (阿尔伯蒂 1472) -> 圆厅别墅 (帕拉第奥 1566) -> 四喷泉圣卡罗堂 (博罗米尼 1638) -> 苏佩加圣殿 (尤瓦拉 1717)",
      "圆厅别墅 -> 圣安德肋圣殿 -> 四喷泉圣卡罗堂 -> 苏佩加圣殿",
      "圣安德肋圣殿 -> 四喷泉圣卡罗堂 -> 圆厅别墅 -> 苏佩加圣殿",
      "苏佩加圣殿 -> 圣安德肋圣殿 -> 圆厅别墅 -> 四喷泉圣卡罗堂"
    ],
    correctAnswer: 0,
    explanationEn: "Alberti's Sant'Andrea began in 1472 (Early Renaissance). Palladio's Villa Rotonda was designed in 1566 (High/Late Renaissance). Borromini began San Carlo in 1638 (High Roman Baroque). Juvarra built Superga near Turin in 1717-1731 (Late Baroque).",
    explanationZh: "阿尔伯蒂设计的曼托瓦圣安德肋教堂建于1472年（早期文艺复兴）；帕拉第奥的圆厅别墅始建于1566年（晚期文艺复兴）；博罗米尼的四喷泉圣卡罗堂建于1638年（罗马巴洛克盛期）；尤瓦拉在都灵近郊设计的苏佩加圣殿始建于1717年（晚期巴洛克）。",
    tags: ["Chronology", "Architecture", "Alberti", "Palladio", "Borromini", "Baroque"],
    difficulty: 2
  },
  {
    id: "arched_017",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "19th_century",
    questionEn: "Place these 19th-century British and Continental movements in chronological order:",
    questionZh: "请将19世纪欧洲以下艺术思想与社团按诞生年代先后排序：",
    optionsEn: [
      "Pre-Raphaelite Brotherhood (1848) -> Impressionism (1874) -> Symbolism Manifesto (1886) -> Fauvism (1905)",
      "Symbolism Manifesto -> Pre-Raphaelite Brotherhood -> Impressionism -> Fauvism",
      "Pre-Raphaelite Brotherhood -> Symbolism Manifesto -> Impressionism -> Fauvism",
      "Impressionism -> Pre-Raphaelite Brotherhood -> Fauvism -> Symbolism Manifesto"
    ],
    optionsZh: [
      "拉斐尔前派兄弟会 (1848) -> 印象派 (1874) -> 象征主义宣言 (1886) -> 野兽派 (1905)",
      "象征主义宣言 -> 拉斐尔前派兄弟会 -> 印象派 -> 野兽派",
      "拉斐尔前派兄弟会 -> 象征主义宣言 -> 印象派 -> 野兽派",
      "印象派 -> 拉斐尔前派兄弟会 -> 野兽派 -> 象征主义宣言"
    ],
    correctAnswer: 0,
    explanationEn: "The Pre-Raphaelite Brotherhood was founded in London in 1848. French Impressionism debuted in 1874. Jean Moréas published the Symbolist Manifesto in 1886. Fauvism was launched in Paris in 1905.",
    explanationZh: "拉斐尔前派兄弟会于1848年在伦敦建立；法国印象派于1874年首展；让·莫雷阿斯于1886年在《费加罗报》发表《象征主义宣言》；野兽派于1905年席卷巴黎。",
    tags: ["Chronology", "Pre-Raphaelite", "Impressionism", "Symbolism", "Fauvism"],
    difficulty: 2
  },
  {
    id: "arched_018",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "modern",
    questionEn: "Arrange these pioneers of modern commercial and industrial architecture chronologically:",
    questionZh: "请按落成年代先后排列以下现代工业与商业建筑先驱里程碑：",
    optionsEn: [
      "Wainwright Building (Sullivan 1891) -> AEG Turbine Factory (Behrens 1909) -> Fagus Factory (Gropius 1911) -> Barcelona Pavilion (Mies 1929)",
      "AEG Turbine Factory -> Wainwright Building -> Fagus Factory -> Barcelona Pavilion",
      "Wainwright Building -> Fagus Factory -> AEG Turbine Factory -> Barcelona Pavilion",
      "Fagus Factory -> Wainwright Building -> Barcelona Pavilion -> AEG Turbine Factory"
    ],
    optionsZh: [
      "温赖特大厦 (沙利文 1891) -> AEG透平机车间 (贝伦斯 1909) -> 法古斯工厂 (格罗皮乌斯 1911) -> 巴塞罗那德国馆 (密斯 1929)",
      "AEG透平机车间 -> 温赖特大厦 -> 法古斯工厂 -> 巴塞罗那德国馆",
      "温赖特大厦 -> 法古斯工厂 -> AEG透平机车间 -> 巴塞罗那德国馆",
      "法古斯工厂 -> 温赖特大厦 -> 巴塞罗那德国馆 -> AEG透平机车间"
    ],
    correctAnswer: 0,
    explanationEn: "Sullivan completed the steel-framed Wainwright Building in St. Louis in 1891. Peter Behrens designed the AEG Turbine Factory in Berlin in 1909. Gropius designed the glass curtain-walled Fagus Factory in 1911. Mies created the Barcelona Pavilion in 1929.",
    explanationZh: "沙利文于1891年建成圣路易斯钢框架温赖特大厦；贝伦斯于1909年建成柏林AEG透平机车间；格罗皮乌斯于1911年建成无转角立柱玻璃幕墙的法古斯工厂；密斯于1929年落成巴塞罗那德国馆。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barcelona_Pavilion%2C_2010.jpg/800px-Barcelona_Pavilion%2C_2010.jpg",
    fallbackImage: "/images/artworks/barcelona-pavilion.jpg",
    tags: ["Chronology", "Architecture", "Modern", "Sullivan", "Gropius", "Mies"],
    difficulty: 2
  },
  {
    id: "arched_019",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "20th_avant_garde",
    questionEn: "Trace the progression of Cubism and its interwar offshoots in proper chronological order:",
    questionZh: "请按时间先后顺序梳理立体主义及其延伸流派的发展脉络：",
    optionsEn: [
      "Analytical Cubism (1909-1912) -> Synthetic Cubism (1912-1914) -> Purism (1918) -> Art Deco Exhibition (1925)",
      "Synthetic Cubism -> Analytical Cubism -> Purism -> Art Deco Exhibition",
      "Analytical Cubism -> Purism -> Synthetic Cubism -> Art Deco Exhibition",
      "Purism -> Analytical Cubism -> Synthetic Cubism -> Art Deco Exhibition"
    ],
    optionsZh: [
      "分析立体主义 (1909-1912) -> 综合立体主义 (1912-1914) -> 纯粹主义 (1918) -> 巴黎装饰艺术博览会 (1925)",
      "综合立体主义 -> 分析立体主义 -> 纯粹主义 -> 巴黎装饰艺术博览会",
      "分析立体主义 -> 纯粹主义 -> 综合立体主义 -> 巴黎装饰艺术博览会",
      "纯粹主义 -> 分析立体主义 -> 综合立体主义 -> 巴黎装饰艺术博览会"
    ],
    correctAnswer: 0,
    explanationEn: "Analytical Cubism deconstructed form in monochrome facets (1909-1912). Synthetic Cubism introduced papier collé and flat color planes (1912-1914). Purism advocated clear, rational geometric objects (1918). Art Deco reached its international peak at the 1925 Paris Exposition.",
    explanationZh: "分析立体主义在1909-1912年解构形体；综合立体主义在1912-1914年通过拼贴与平涂重构形象；纯粹主义于1918年主张机械时代的严谨理性秩序；装饰艺术（Art Deco）在1925年巴黎现代装饰与工业艺术展达到鼎盛。",
    tags: ["Chronology", "Cubism", "Purism", "Art Deco"],
    difficulty: 2
  },
  {
    id: "arched_020",
    domain: "chronology",
    subCategory: "Manifesto Chronology",
    era: "20th_avant_garde",
    questionEn: "Order these revolutionary milestones of abstract art and design chronologically:",
    questionZh: "请将20世纪抽象艺术与设计革命的代表性标志事件按年份排列：",
    optionsEn: [
      "Malevich's Black Square / 0.10 Exhibition (1915) -> De Stijl Journal (1917) -> Constructivist Productivism (1921) -> Neue Sachlichkeit Exhibition (1925)",
      "De Stijl Journal -> Malevich's Black Square -> Neue Sachlichkeit Exhibition -> Constructivist Productivism",
      "Malevich's Black Square -> Neue Sachlichkeit Exhibition -> De Stijl Journal -> Constructivist Productivism",
      "Constructivist Productivism -> Malevich's Black Square -> De Stijl Journal -> Neue Sachlichkeit Exhibition"
    ],
    optionsZh: [
      "马列维奇《黑方块》0.10展 (1915) -> 风格派创刊 (1917) -> 莫斯科构成主义生产主义 (1921) -> 新客观主义曼海姆展览 (1925)",
      "风格派创刊 -> 马列维奇《黑方块》 -> 新客观主义展览 -> 构成主义生产主义",
      "马列维奇《黑方块》 -> 新客观主义展览 -> 风格派创刊 -> 构成主义生产主义",
      "构成主义生产主义 -> 马列维奇《黑方块》 -> 风格派创刊 -> 新客观主义展览"
    ],
    correctAnswer: 0,
    explanationEn: "Malevich unveiled the Black Square at the 0.10 exhibition in Petrograd in December 1915. De Stijl was founded in 1917. Russian Constructivists formed the Productivist Group in 1921. Gustav Hartlaub mounted the landmark Neue Sachlichkeit exhibition in Mannheim in 1925.",
    explanationZh: "马列维奇于1915年底在彼得格勒0.10展揭幕至上主义《黑方块》；风格派于1917年建立；苏联构成主义于1921年转向生产主义实用设计；哈特劳布于1925年在曼海姆举办划时代的“新客观主义”展。",
    tags: ["Chronology", "Suprematism", "De Stijl", "Constructivism", "Neue Sachlichkeit"],
    difficulty: 2
  }
];

export const chronologyQuestionsPart2 = [
  {
    id: "arched_021",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "medieval",
    questionEn: "Trace the chronological evolution of architectural arch and pediment typologies:",
    questionZh: "请按历史先后排列欧洲建筑中拱券与山花形态的典型演变顺序：",
    optionsEn: [
      "Romanesque round arch -> Gothic pointed arch -> Renaissance semicircular classical arch -> Baroque broken pediment",
      "Gothic pointed arch -> Romanesque round arch -> Baroque broken pediment -> Renaissance classical arch",
      "Romanesque round arch -> Baroque broken pediment -> Gothic pointed arch -> Renaissance classical arch",
      "Baroque broken pediment -> Gothic pointed arch -> Romanesque round arch -> Renaissance classical arch"
    ],
    optionsZh: [
      "罗马风半圆拱 -> 哥特式尖券 -> 文艺复兴半圆复古拱 -> 巴洛克断山花 (Broken Pediment)",
      "哥特式尖券 -> 罗马风半圆拱 -> 巴洛克断山花 -> 文艺复兴半圆拱",
      "罗马风半圆拱 -> 巴洛克断山花 -> 哥特式尖券 -> 文艺复兴半圆拱",
      "巴洛克断山花 -> 哥特式尖券 -> 罗马风半圆拱 -> 文艺复兴半圆拱"
    ],
    correctAnswer: 0,
    explanationEn: "Semicircular heavy arches characterized the Romanesque (11th century). Pointed arches defined Gothic lightness (12th-13th centuries). Renaissance restored Greco-Roman semicircular symmetry (15th century). Broken and undulating pediments became a hallmark of the Baroque (17th century).",
    explanationZh: "罗马风在11世纪盛行纯半圆拱；哥特式在12-13世纪以尖券突破跨度与开窗限制；文艺复兴在15世纪回归古罗马半圆拱券比例；17世纪巴洛克大师打破传统几何山花创造断山花与波浪曲线。",
    tags: ["Chronology", "Architecture", "Romanesque", "Gothic", "Renaissance", "Baroque"],
    difficulty: 2
  },
  {
    id: "arched_022",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "renaissance",
    questionEn: "Order the publication of these foundational Italian Renaissance architectural treatises chronologically:",
    questionZh: "请按出版年代先后排列以下四部奠定西方建筑学典范的意大利文艺复兴理论著作：",
    optionsEn: [
      "Alberti (De re aedificatoria, 1452) -> Serlio (Tutte l'opere d'architettura, 1537) -> Vignola (Regola delli cinque ordini, 1562) -> Palladio (I quattro libri, 1570)",
      "Palladio (1570) -> Vignola (1562) -> Serlio (1537) -> Alberti (1452)",
      "Alberti (1452) -> Palladio (1570) -> Vignola (1562) -> Serlio (1537)",
      "Vignola (1562) -> Alberti (1452) -> Serlio (1537) -> Palladio (1570)"
    ],
    optionsZh: [
      "阿尔伯蒂《论建筑》(1452) -> 塞尔利奥《建筑通论》(1537) -> 维尼奥拉《五种柱式规范》(1562) -> 帕拉第奥《建筑四书》(1570)",
      "帕拉第奥《建筑四书》(1570) -> 维尼奥拉《五种柱式规范》(1562) -> 塞尔利奥《建筑通论》(1537) -> 阿尔伯蒂《论建筑》(1452)",
      "阿尔伯蒂《论建筑》(1452) -> 帕拉第奥《建筑四书》(1570) -> 维尼奥拉《五种柱式规范》(1562) -> 塞尔利奥《建筑通论》(1537)",
      "维尼奥拉《五种柱式规范》(1562) -> 阿尔伯蒂《论建筑》(1452) -> 塞尔利奥《建筑通论》(1537) -> 帕拉第奥《建筑四书》(1570)"
    ],
    correctAnswer: 0,
    explanationEn: "Leon Battista Alberti completed De re aedificatoria in 1452 (printed 1485). Sebastiano Serlio published Book IV in 1537. Giacomo Barozzi da Vignola published his Canon of the Five Orders in 1562. Andrea Palladio published I quattro libri dell'architettura in Venice in 1570.",
    explanationZh: "阿尔伯蒂于1452年撰写《论建筑》（1485年印行）；塞尔利奥于1537年出版图文柱式专著；维尼奥拉于1562年出版《五种柱式规范》系统化柱式模数；帕拉第奥于1570年在威尼斯出版《建筑四书》。",
    tags: ["Chronology", "Architecture", "Treatise", "Renaissance", "Alberti", "Palladio"],
    difficulty: 3
  },
  {
    id: "arched_023",
    domain: "chronology",
    subCategory: "Manifesto Chronology",
    era: "20th_avant_garde",
    questionEn: "Trace the chronological publication order of the Italian Futurist manifestos across disciplines:",
    questionZh: "请按发表年份先后排列意大利未来主义运动跨学科宣言的诞生序列：",
    optionsEn: [
      "Marinetti's Founding Manifesto (1909) -> Boccioni's Sculpture Manifesto (1912) -> Sant'Elia's Architecture Manifesto (1914) -> Balla & Depero's Futurist Reconstruction of the Universe (1915)",
      "Boccioni's Sculpture Manifesto (1912) -> Marinetti's Founding Manifesto (1909) -> Sant'Elia's Architecture Manifesto (1914) -> Futurist Reconstruction (1915)",
      "Marinetti's Founding Manifesto (1909) -> Sant'Elia's Architecture Manifesto (1914) -> Boccioni's Sculpture Manifesto (1912) -> Futurist Reconstruction (1915)",
      "Sant'Elia's Architecture Manifesto (1914) -> Marinetti's Founding Manifesto (1909) -> Boccioni's Sculpture Manifesto (1912) -> Futurist Reconstruction (1915)"
    ],
    optionsZh: [
      "马里内蒂创校总宣言 (1909) -> 薄邱尼未来主义雕塑宣言 (1912) -> 圣埃利亚未来主义建筑宣言 (1914) -> 巴拉与德佩罗未来主义宇宙重建 (1915)",
      "薄邱尼未来主义雕塑宣言 (1912) -> 马里内蒂创校总宣言 (1909) -> 圣埃利亚未来主义建筑宣言 (1914) -> 未来主义宇宙重建 (1915)",
      "马里内蒂创校总宣言 (1909) -> 圣埃利亚未来主义建筑宣言 (1914) -> 薄邱尼未来主义雕塑宣言 (1912) -> 未来主义宇宙重建 (1915)",
      "圣埃利亚未来主义建筑宣言 (1914) -> 马里内蒂创校总宣言 (1909) -> 薄邱尼未来主义雕塑宣言 (1912) -> 未来主义宇宙重建 (1915)"
    ],
    correctAnswer: 0,
    explanationEn: "Marinetti published the literary manifesto in February 1909. Boccioni published the Technical Manifesto of Futurist Sculpture in April 1912. Antonio Sant'Elia launched the Futurist Architecture manifesto in July 1914. Giacomo Balla and Fortunato Depero published the Futurist Reconstruction of the Universe in March 1915.",
    explanationZh: "马里内蒂于1909年发表创立宣言；薄邱尼于1912年发表雕塑技术宣言；圣埃利亚于1914年米兰新趋势展发表建筑宣言；巴拉与德佩罗于1915年发表《未来主义重建宇宙》将未来主义拓展至全方位设计。",
    tags: ["Chronology", "Manifesto", "Futurism", "Marinetti", "Boccioni", "Sant'Elia"],
    difficulty: 2
  },
  {
    id: "arched_024",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "postwar_contemporary",
    questionEn: "Arrange these pivotal American and international postwar artistic movements in chronological order:",
    questionZh: "请按兴起时间先后排列以下战后国际现代主义与当代艺术运动：",
    optionsEn: [
      "Abstract Expressionism (c. 1947) -> Pop Art (mid-1950s) -> Minimal Art (mid-1960s) -> Conceptual Art (late 1960s)",
      "Pop Art -> Abstract Expressionism -> Minimal Art -> Conceptual Art",
      "Abstract Expressionism -> Minimal Art -> Pop Art -> Conceptual Art",
      "Minimal Art -> Abstract Expressionism -> Conceptual Art -> Pop Art"
    ],
    optionsZh: [
      "抽象表现主义 (约1947) -> 波普艺术 (1950年代中) -> 极简主义 (1960年代中) -> 概念艺术 (1960年代末)",
      "波普艺术 -> 抽象表现主义 -> 极简主义 -> 概念艺术",
      "抽象表现主义 -> 极简主义 -> 波普艺术 -> 概念艺术",
      "极简主义 -> 抽象表现主义 -> 概念艺术 -> 波普艺术"
    ],
    correctAnswer: 0,
    explanationEn: "Abstract Expressionism (Action Painting/Color Field) flourished from 1947. Pop Art emerged in Britain and the US in 1955-1960. Minimal Art (Judd, Morris) consolidated around 1965. Conceptual Art (LeWitt, Kosuth) asserted intellectual ideas over form from 1967.",
    explanationZh: "抽象表现主义在1947-1950年成熟；波普艺术在1955-1960年崛起；极简主义在1965年前后确立工业特定物体美学；概念艺术于1967年以观念超越物态形式占据主导。",
    tags: ["Chronology", "Abstract Expressionism", "Pop Art", "Minimalism", "Conceptual Art"],
    difficulty: 1
  },
  {
    id: "arched_025",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "renaissance",
    questionEn: "What is the correct chronological sequence of the master architects who directed the rebuilding of New Saint Peter's Basilica in Rome?",
    questionZh: "罗马新圣彼得大教堂长达一个半世纪的重建历程中，主持主建筑师的更迭顺序是：",
    optionsEn: [
      "Bramante (1506) -> Michelangelo (1546) -> Maderno (1607) -> Bernini (1656)",
      "Michelangelo -> Bramante -> Bernini -> Maderno",
      "Bramante -> Maderno -> Michelangelo -> Bernini",
      "Bramante -> Bernini -> Michelangelo -> Maderno"
    ],
    optionsZh: [
      "伯拉孟特 (1506) -> 米开朗基罗 (1546) -> 马代尔诺 (1607) -> 贝尼尼 (1656)",
      "米开朗基罗 -> 伯拉孟特 -> 贝尼尼 -> 马代尔诺",
      "伯拉孟特 -> 马代尔诺 -> 米开朗基罗 -> 贝尼尼",
      "伯拉孟特 -> 贝尼尼 -> 米开朗基罗 -> 马代尔诺"
    ],
    correctAnswer: 0,
    explanationEn: "Bramante laid the cornerstone in 1506 with a Greek-cross plan. Michelangelo took over in 1546, designing the colossal dome. Carlo Maderno lengthened the nave into a Latin cross and completed the facade (1607-1614). Bernini designed the piazza colonnade and Baldacchino from 1656.",
    explanationZh: "伯拉孟特于1506年奠基确立希腊十字集中式方案；米开朗基罗于1546年接掌主持并设计了宏伟的双层穹顶；卡洛·马代尔诺于1607-1614年将平面拉长为拉丁十字并建成立面；贝尼尼于1656年营建椭圆形广场柱廊与室内青铜华盖。",
    tags: ["Chronology", "Architecture", "Renaissance", "Baroque", "St Peters", "Bramante", "Michelangelo", "Bernini"],
    difficulty: 2
  },
  {
    id: "arched_026",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "19th_century",
    questionEn: "Trace the progression of landmark French modern paintings chronologically:",
    questionZh: "请按创作完成年份排序以下四幅法兰西现代绘画史里程碑杰作：",
    optionsEn: [
      "Manet's Le Déjeuner sur l'herbe (1863) -> Monet's Impression, Sunrise (1872) -> Seurat's Sunday on La Grande Jatte (1886) -> Cézanne's Mont Sainte-Victoire (c. 1904)",
      "Monet's Impression, Sunrise -> Manet's Le Déjeuner sur l'herbe -> Seurat's Sunday on La Grande Jatte -> Cézanne's Mont Sainte-Victoire",
      "Manet's Le Déjeuner sur l'herbe -> Seurat's Sunday on La Grande Jatte -> Monet's Impression, Sunrise -> Cézanne's Mont Sainte-Victoire",
      "Cézanne's Mont Sainte-Victoire -> Manet's Le Déjeuner sur l'herbe -> Monet's Impression, Sunrise -> Seurat's Sunday on La Grande Jatte"
    ],
    optionsZh: [
      "马奈《草地上的午餐》(1863) -> 莫奈《日出·印象》(1872) -> 修拉《大碗岛的星期天下午》(1886) -> 塞尚《圣维克多山》(约1904)",
      "莫奈《日出·印象》 -> 马奈《草地上的午餐》 -> 修拉《大碗岛的星期天下午》 -> 塞尚《圣维克多山》",
      "马奈《草地上的午餐》 -> 修拉《大碗岛的星期天下午》 -> 莫奈《日出·印象》 -> 塞尚《圣维克多山》",
      "塞尚《圣维克多山》 -> 马奈《草地上的午餐》 -> 莫奈《日出·印象》 -> 修拉《大碗岛的星期天下午》"
    ],
    correctAnswer: 0,
    explanationEn: "Manet exhibited the provocative Déjeuner at the Salon des Refusés in 1863. Monet painted Impression, Sunrise in 1872 (giving Impressionism its name in 1874). Seurat finished his Pointillist manifesto painting in 1886. Cézanne painted his proto-Cubist landscapes of Mont Sainte-Victoire around 1902-1906.",
    explanationZh: "马奈于1863年落选者沙龙展出《草地上的午餐》；莫奈于1872年创作《日出·印象》（1874年以此定名印象派）；修拉于1886年完成新印象派点彩巨作《大碗岛》；塞尚于1904年前后创作剖析几何形体的《圣维克多山》。",
    tags: ["Chronology", "Manet", "Monet", "Seurat", "Cezanne", "Impressionism"],
    difficulty: 1
  },
  {
    id: "arched_027",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "industrial",
    questionEn: "Trace the engineering chronology of 18th- and 19th-century British iron structural bridges:",
    questionZh: "请按建造年代排序以下代表工业革命金属结构技术飞跃的英国著名桥梁：",
    optionsEn: [
      "The Iron Bridge at Coalbrookdale (1779) -> Menai Suspension Bridge (1826) -> Britannia Tubular Bridge (1850) -> Forth Bridge (1890)",
      "Menai Suspension Bridge -> The Iron Bridge -> Forth Bridge -> Britannia Tubular Bridge",
      "The Iron Bridge -> Britannia Tubular Bridge -> Menai Suspension Bridge -> Forth Bridge",
      "Forth Bridge -> The Iron Bridge -> Menai Suspension Bridge -> Britannia Tubular Bridge"
    ],
    optionsZh: [
      "科尔布鲁克代尔铁桥 (1779) -> 梅奈海峡悬索桥 (1826) -> 不列颠尼亚管状铁桥 (1850) -> 福斯铁路桥 (1890)",
      "梅奈海峡悬索桥 -> 科尔布鲁克代尔铁桥 -> 福斯铁路桥 -> 不列颠尼亚管状铁桥",
      "科尔布鲁克代尔铁桥 -> 不列颠尼亚管状铁桥 -> 梅奈海峡悬索桥 -> 福斯铁路桥",
      "福斯铁路桥 -> 科尔布鲁克代尔铁桥 -> 梅奈海峡悬索桥 -> 不列颠尼亚管状铁桥"
    ],
    correctAnswer: 0,
    explanationEn: "Abraham Darby III built the world's first cast-iron arch bridge at Coalbrookdale in 1779. Thomas Telford opened the wrought-iron Menai Suspension Bridge in 1826. Robert Stephenson opened the wrought-iron Britannia Tubular Bridge in 1850. Fowler and Baker opened the monumental cantilever steel Forth Bridge in 1890.",
    explanationZh: "达比三世于1779年在科尔布鲁克代尔建成世界首座铸铁拱桥；特尔福德于1826年建成锻铁梅奈悬索桥；史蒂芬森于1850年建成跨度极大的管状箱型锻铁桥；福勒与贝克于1890年建成里程碑式双悬臂平衡钢结构福斯铁路桥。",
    tags: ["Chronology", "Architecture", "Engineering", "Industrial", "Bridges"],
    difficulty: 3
  },
  {
    id: "arched_028",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "modern",
    questionEn: "Arrange these central European institutions of modern craft and design reform chronologically:",
    questionZh: "请按创立年份先后排列以下德奥地区工艺美术与现代设计改良机构：",
    optionsEn: [
      "Vienna Secession (1897) -> Wiener Werkstätte (1903) -> Deutscher Werkbund (1907) -> Bauhaus (1919)",
      "Deutscher Werkbund -> Vienna Secession -> Wiener Werkstätte -> Bauhaus",
      "Vienna Secession -> Deutscher Werkbund -> Wiener Werkstätte -> Bauhaus",
      "Wiener Werkstätte -> Vienna Secession -> Bauhaus -> Deutscher Werkbund"
    ],
    optionsZh: [
      "维也纳分离派 (1897) -> 维也纳工坊 (1903) -> 德意志制造联盟 (1907) -> 包豪斯学院 (1919)",
      "德意志制造联盟 -> 维也纳分离派 -> 维也纳工坊 -> 包豪斯学院",
      "维也纳分离派 -> 德意志制造联盟 -> 维也纳工坊 -> 包豪斯学院",
      "维也纳工坊 -> 维也纳分离派 -> 包豪斯学院 -> 德意志制造联盟"
    ],
    correctAnswer: 0,
    explanationEn: "Klimt and Olbrich founded the Vienna Secession in 1897. Josef Hoffmann and Koloman Moser created the Wiener Werkstätte craft enterprise in 1903. Hermann Muthesius and designers launched the Deutscher Werkbund in Munich in 1907. Gropius unified these traditions at the Bauhaus in Weimar in 1919.",
    explanationZh: "克里姆特等建立维也纳分离派于1897年；霍夫曼等创立维也纳工坊于1903年；穆特修斯等在慕尼黑成立德意志制造联盟于1907年；格罗皮乌斯融合工艺与机器工业创办包豪斯于1919年。",
    tags: ["Chronology", "Design", "Vienna Secession", "Werkbund", "Bauhaus"],
    difficulty: 2
  },
  {
    id: "arched_029",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "20th_avant_garde",
    questionEn: "Order the emergence of these early 20th-century avant-garde groups and centers:",
    questionZh: "请按成立时间先后排列以下20世纪初前卫艺术社团与策源地：",
    optionsEn: [
      "Die Brücke in Dresden (1905) -> Der Blaue Reiter in Munich (1911) -> Dada at Cabaret Voltaire (1916) -> Surrealism in Paris (1924)",
      "Der Blaue Reiter -> Die Brücke -> Dada -> Surrealism",
      "Die Brücke -> Dada -> Der Blaue Reiter -> Surrealism",
      "Dada -> Die Brücke -> Der Blaue Reiter -> Surrealism"
    ],
    optionsZh: [
      "德累斯顿桥社 (1905) -> 慕尼黑青骑士 (1911) -> 苏黎世伏尔泰酒馆达达 (1916) -> 巴黎超现实主义 (1924)",
      "慕尼黑青骑士 -> 德累斯顿桥社 -> 苏黎世达达 -> 巴黎超现实主义",
      "德累斯顿桥社 -> 苏黎世达达 -> 慕尼黑青骑士 -> 巴黎超现实主义",
      "苏黎世达达 -> 德累斯顿桥社 -> 慕尼黑青骑士 -> 巴黎超现实主义"
    ],
    correctAnswer: 0,
    explanationEn: "Kirchner and fellow students founded Die Brücke in Dresden in 1905. Kandinsky and Marc founded Der Blaue Reiter in Munich in 1911. Hugo Ball opened the Cabaret Voltaire for Dada in Zurich in 1916. Breton published the Surrealist Manifesto in Paris in 1924.",
    explanationZh: "基希纳等在德累斯顿成立桥社于1905年；康定斯基与马尔克在慕尼黑成立青骑士社于1911年；雨果·鲍尔等在苏黎世伏尔泰酒馆创立达达于1916年；布勒东在巴黎发表宣言创立超现实主义于1924年。",
    tags: ["Chronology", "Expressionism", "Die Brucke", "Der Blaue Reiter", "Dada", "Surrealism"],
    difficulty: 2
  },
  {
    id: "arched_030",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "modern",
    questionEn: "Trace the chronological evolution of commercial design and decorative styling from 1890 to 1960:",
    questionZh: "请按时代演进顺序排列现代装饰与大众商业造型风格的发展流变：",
    optionsEn: [
      "Art Nouveau (c. 1895) -> Art Deco (1925) -> Streamline Moderne (1935) -> Mid-Century Modern (1950s)",
      "Art Deco -> Art Nouveau -> Streamline Moderne -> Mid-Century Modern",
      "Art Nouveau -> Streamline Moderne -> Art Deco -> Mid-Century Modern",
      "Streamline Moderne -> Art Nouveau -> Art Deco -> Mid-Century Modern"
    ],
    optionsZh: [
      "新艺术运动 (约1895) -> 装饰艺术风格 (1925) -> 流线型现代主义 (1935) -> 中世纪现代主义 (1950年代)",
      "装饰艺术风格 -> 新艺术运动 -> 流线型现代主义 -> 中世纪现代主义",
      "新艺术运动 -> 流线型现代主义 -> 装饰艺术风格 -> 中世纪现代主义",
      "流线型现代主义 -> 新艺术运动 -> 装饰艺术风格 -> 中世纪现代主义"
    ],
    correctAnswer: 0,
    explanationEn: "Organic floral Art Nouveau dominated the 1890s-1905. Geometric luxury Art Deco peaked at the 1925 Paris Expo. Aerodynamic teardrop Streamline Moderne flourished in the 1930s. Functional organic Mid-Century Modern dominated postwar architecture and furniture (1950s).",
    explanationZh: "以有机植物曲线为特征的新艺术运动盛于1890-1905年；几何奢华的装饰艺术（Art Deco）在1925年达到顶峰；强调风阻与泪滴形态的流线型风格在1930年代普及；以伊姆斯与沙里宁为代表的中世纪现代主义风行于1950年代。",
    tags: ["Chronology", "Design", "Art Nouveau", "Art Deco", "Streamline Moderne"],
    difficulty: 2
  },
  {
    id: "arched_031",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "ancient",
    questionEn: "What is the chronological sequence of the historical emergence of the primary Classical architectural orders?",
    questionZh: "古典古代建筑柱式在希腊与罗马历史上最初成熟出现的先后顺序是：",
    optionsEn: [
      "Doric (6th c. BC) -> Ionic (5th c. BC) -> Corinthian (late 5th c. BC) -> Composite (1st c. AD)",
      "Ionic -> Doric -> Corinthian -> Composite",
      "Doric -> Corinthian -> Ionic -> Composite",
      "Composite -> Corinthian -> Ionic -> Doric"
    ],
    optionsZh: [
      "多立克柱式 (公元前6世纪) -> 爱奥尼柱式 (公元前5世纪) -> 科林斯柱式 (公元前5世纪末) -> 复合柱式 (公元1世纪)",
      "爱奥尼柱式 -> 多立克柱式 -> 科林斯柱式 -> 复合柱式",
      "多立克柱式 -> 科林斯柱式 -> 爱奥尼柱式 -> 复合柱式",
      "复合柱式 -> 科林斯柱式 -> 爱奥尼柱式 -> 多立克柱式"
    ],
    correctAnswer: 0,
    explanationEn: "The sturdy Doric order developed in Archaic Greece in the 6th c. BC. The graceful Ionic developed along the Ionian coast and Aegean islands in the 5th c. BC. The Corinthian foliage capital emerged at Bassae in the late 5th c. BC. The Romans fused Ionic volutes and Corinthian leaves to create the Composite order on triumphal arches in the 1st c. AD.",
    explanationZh: "古风时期多立克柱式在公元前6世纪率先规范；优雅的爱奥尼柱式在公元前5世纪盛期雅典普及；科林斯柱式最早见于公元前5世纪末巴赛阿波罗神庙；古罗马人于公元1世纪（如提图斯凯旋门）将爱奥尼涡卷与科林斯茛苕叶结合确立复合柱式。",
    tags: ["Chronology", "Architecture", "Classical", "Orders", "Doric", "Ionic", "Corinthian"],
    difficulty: 2
  },
  {
    id: "arched_032",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "baroque",
    questionEn: "Arrange these four Baroque painting masterworks chronologically by completion date:",
    questionZh: "请按完成年份先后排列以下四幅17世纪巴洛克绘画顶峰之作：",
    optionsEn: [
      "Caravaggio's Calling of Saint Matthew (1600) -> Rubens's Descent from the Cross (1614) -> Rembrandt's Night Watch (1642) -> Vermeer's Girl with a Pearl Earring (1665)",
      "Rubens's Descent from the Cross -> Caravaggio's Calling of Saint Matthew -> Vermeer's Girl with a Pearl Earring -> Rembrandt's Night Watch",
      "Caravaggio's Calling of Saint Matthew -> Rembrandt's Night Watch -> Rubens's Descent from the Cross -> Vermeer's Girl with a Pearl Earring",
      "Rembrandt's Night Watch -> Caravaggio's Calling of Saint Matthew -> Rubens's Descent from the Cross -> Vermeer's Girl with a Pearl Earring"
    ],
    optionsZh: [
      "卡拉瓦乔《圣玛窦蒙召》(1600) -> 鲁本斯《下十字架》(1614) -> 伦勃朗《夜巡》(1642) -> 维米尔《戴珍珠耳环的少女》(1665)",
      "鲁本斯《下十字架》 -> 卡拉瓦乔《圣玛窦蒙召》 -> 维米尔《戴珍珠耳环的少女》 -> 伦勃朗《夜巡》",
      "卡拉瓦乔《圣玛窦蒙召》 -> 伦勃朗《夜巡》 -> 鲁本斯《下十字架》 -> 维米尔《戴珍珠耳环的少女》",
      "伦勃朗《夜巡》 -> 卡拉瓦乔《圣玛窦蒙召》 -> 鲁本斯《下十字架》 -> 维米尔《戴珍珠耳环的少女》"
    ],
    correctAnswer: 0,
    explanationEn: "Caravaggio completed the Contarelli Chapel canvases in 1600. Rubens completed his Antwerp triptych in 1612-1614. Rembrandt painted the Civic Guard (Night Watch) in Amsterdam in 1642. Johannes Vermeer painted the tronie of the girl with the pearl earring in Delft c. 1665.",
    explanationZh: "卡拉瓦乔于1600年完成罗马孔塔雷利礼拜堂《圣玛窦蒙召》；鲁本斯于1614年完成安特卫普大教堂《下十字架》；伦勃朗于1642年完成阿姆斯特丹民兵连巨作《夜巡》；维米尔于约1665年完成代尔夫特名作《戴珍珠耳环的少女》。",
    tags: ["Chronology", "Baroque", "Caravaggio", "Rubens", "Rembrandt", "Vermeer"],
    difficulty: 2
  },
  {
    id: "arched_033",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "modern",
    questionEn: "Trace the chronological evolution of Le Corbusier's architectural trajectory:",
    questionZh: "请按落成年代先后排列勒·柯布西耶四座最具历史转折意义的建筑名作：",
    optionsEn: [
      "Pavillon de l'Esprit Nouveau (1925) -> Villa Savoye (1929) -> Unité d'Habitation Marseille (1952) -> Chapel of Notre-Dame du Haut at Ronchamp (1955)",
      "Villa Savoye -> Pavillon de l'Esprit Nouveau -> Ronchamp -> Unité d'Habitation",
      "Pavillon de l'Esprit Nouveau -> Unité d'Habitation -> Villa Savoye -> Ronchamp",
      "Villa Savoye -> Pavillon de l'Esprit Nouveau -> Unité d'Habitation -> Ronchamp"
    ],
    optionsZh: [
      "新精神馆 (1925) -> 萨伏伊别墅 (1929) -> 马赛公寓 (1952) -> 朗香圣母礼拜堂 (1955)",
      "萨伏伊别墅 -> 新精神馆 -> 朗香教堂 -> 马赛公寓",
      "新精神馆 -> 马赛公寓 -> 萨伏伊别墅 -> 朗香教堂",
      "萨伏伊别墅 -> 新精神馆 -> 马赛公寓 -> 朗香教堂"
    ],
    correctAnswer: 0,
    explanationEn: "Le Corbusier showcased his standardized apartment cell at the 1925 Paris Expo. Villa Savoye manifested the Five Points of Architecture in 1929. The rough-cast concrete (béton brut) Unité in Marseille opened in 1952. The sculpted expressionist Chapel at Ronchamp opened in 1955.",
    explanationZh: "柯布西耶于1925年巴黎博览会展示标准模数化新精神馆；1929年完成纯粹主义白派巅峰萨伏伊别墅；1952年建成粗野主义混凝土巨作马赛公寓；1955年建成雕塑感神秘光影的朗香教堂。",
    tags: ["Chronology", "Architecture", "Modern", "Le Corbusier", "Brutalism"],
    difficulty: 2
  },
  {
    id: "arched_034",
    domain: "chronology",
    subCategory: "Manifesto Chronology",
    era: "20th_avant_garde",
    questionEn: "Arrange these key moments of Italian Rationalism (Razionalismo Italiano) in chronological order:",
    questionZh: "请按年份先后排列意大利理性主义建筑运动（Razionalismo）的关键发展节点：",
    optionsEn: [
      "Gruppo 7 founding articles in Rassegna Italiana (1926) -> First National Exhibition of Rationalist Architecture (1928) -> Casa del Fascio in Como completed (1936) -> EUR masterplan and Palazzo della Civiltà Italiana (c. 1938-1942)",
      "First National Exhibition -> Gruppo 7 articles -> Casa del Fascio -> EUR masterplan",
      "Gruppo 7 articles -> Casa del Fascio -> First National Exhibition -> EUR masterplan",
      "Casa del Fascio -> Gruppo 7 articles -> First National Exhibition -> EUR masterplan"
    ],
    optionsZh: [
      "七人小组在《意大利评论》发表四篇理性主义宣言 (1926) -> 罗马第一届全国理性主义建筑展 (1928) -> 科莫法西斯大楼完工 (1936) -> 罗马新城EUR主规划与意大利文明宫 (约1938-1942)",
      "第一届全国理性主义建筑展 -> 七人小组宣言 -> 科莫法西斯大楼 -> EUR主规划",
      "七人小组宣言 -> 科莫法西斯大楼 -> 第一届全国理性主义建筑展 -> EUR主规划",
      "科莫法西斯大楼 -> 七人小组宣言 -> 第一届全国理性主义建筑展 -> EUR主规划"
    ],
    correctAnswer: 0,
    explanationEn: "Gruppo 7 published their seminal manifestos between 1926-1927. The first exhibition took place in Rome in 1928 leading to MIAR. Giuseppe Terragni's Casa del Fascio was completed in 1936. Marcello Piacentini and rationalist-monumental architects planned the E42/EUR district between 1938-1942.",
    explanationZh: "七人小组（泰拉尼等）于1926-1927年发表创立文章；1928年在罗马举办首届展览并组建MIAR；泰拉尼的科莫法西斯宫于1936年竣工；皮亚琴蒂尼等统领的罗马1942世博会（EUR新城）于1938-1942年建设。",
    tags: ["Chronology", "Architecture", "Rationalism", "Terragni", "Gruppo 7", "EUR"],
    difficulty: 2
  },
  {
    id: "arched_035",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "postwar_contemporary",
    questionEn: "Trace the sequence of late 20th-century movements and critical exhibitions in chronological order:",
    questionZh: "请按发生时间先后排列以下20世纪下半叶关键当代艺术与建筑流派：",
    optionsEn: [
      "Arte Povera coined by Celant (1967) -> Land Art / Earthworks (late 1960s) -> Venice Architecture Biennale Strada Novissima (1980) -> Deconstructivist Architecture MoMA (1988)",
      "Land Art -> Arte Povera -> Deconstructivist Architecture -> Strada Novissima",
      "Arte Povera -> Strada Novissima -> Land Art -> Deconstructivist Architecture",
      "Strada Novissima -> Arte Povera -> Land Art -> Deconstructivist Architecture"
    ],
    optionsZh: [
      "切兰特确立“贫穷艺术” (1967) -> 大地艺术/地景艺术 (1960年代末) -> 威尼斯建筑双年展首届“斯特拉达诺维西玛” (1980) -> 纽约MoMA解构主义建筑展 (1988)",
      "大地艺术 -> 贫穷艺术 -> 解构主义建筑展 -> 斯特拉达诺维西玛",
      "贫穷艺术 -> 斯特拉达诺维西玛 -> 大地艺术 -> 解构主义建筑展",
      "斯特拉达诺维西玛 -> 贫穷艺术 -> 大地艺术 -> 解构主义建筑展"
    ],
    correctAnswer: 0,
    explanationEn: "Germano Celant coined Arte Povera in Genoa in 1967. Land Art emerged with Smithson and Heizer c. 1968-1970. Paolo Portoghesi organized the 1st Venice Architecture Biennale featuring the Postmodern 'Strada Novissima' in 1980. Philip Johnson and Mark Wigley curated the Deconstructivist Architecture show at MoMA in 1988.",
    explanationZh: "热尔马诺·切兰特于1967年发表贫穷艺术宣言；史密森等大地艺术在1960年代末至1970年成型；波特盖西于1980年策划第一届威尼斯建筑双年展确立后现代主义街巷假立面；约翰逊与维格利于1988年纽约现代艺术博物馆策划解构主义建筑七人展。",
    tags: ["Chronology", "Architecture", "Arte Povera", "Postmodern", "Deconstructivism"],
    difficulty: 2
  },
  {
    id: "arched_036",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "medieval",
    questionEn: "Place these major French Gothic cathedrals in the order their construction began:",
    questionZh: "请按大教堂主殿或唱诗班工程启动的先后顺序排列法国哥特式四大地标：",
    optionsEn: [
      "Basilica of Saint-Denis (c. 1140) -> Notre-Dame de Paris (1163) -> Chartres Cathedral (rebuilt 1194) -> Amiens Cathedral (1220)",
      "Notre-Dame de Paris -> Basilica of Saint-Denis -> Amiens Cathedral -> Chartres Cathedral",
      "Chartres Cathedral -> Basilica of Saint-Denis -> Notre-Dame de Paris -> Amiens Cathedral",
      "Basilica of Saint-Denis -> Chartres Cathedral -> Amiens Cathedral -> Notre-Dame de Paris"
    ],
    optionsZh: [
      "圣丹尼斯圣殿修道院 (约1140) -> 巴黎圣母院 (1163) -> 沙特尔大教堂 (1194火灾后重建) -> 亚眠大教堂 (1220)",
      "巴黎圣母院 -> 圣丹尼斯圣殿修道院 -> 亚眠大教堂 -> 沙特尔大教堂",
      "沙特尔大教堂 -> 圣丹尼斯圣殿修道院 -> 巴黎圣母院 -> 亚眠大教堂",
      "圣丹尼斯圣殿修道院 -> 沙特尔大教堂 -> 亚眠大教堂 -> 巴黎圣母院"
    ],
    correctAnswer: 0,
    explanationEn: "Abbot Suger consecrated the choir of Saint-Denis in 1144 (birth of Gothic). Maurice de Sully began Notre-Dame de Paris in 1163 (Early Gothic). The current High Gothic Chartres was begun after the 1194 fire. High Gothic Amiens was begun in 1220 by Robert de Luzarches.",
    explanationZh: "苏热修道院长于1140-1144年落成圣丹尼斯唱诗班回廊（哥特式诞生）；1163年莫里斯·德·苏利启动巴黎圣母院（早期哥特）；1194年大火后沙特尔按盛期哥特四分肋拱与巨型彩窗重建；1220年亚眠大教堂开工达到法国哥特垂直高度最高比例之一。",
    tags: ["Chronology", "Architecture", "Gothic", "Cathedral", "Chartres", "Amiens"],
    difficulty: 2
  },
  {
    id: "arched_037",
    domain: "chronology",
    subCategory: "Movement Sequencing",
    era: "renaissance",
    questionEn: "Trace the evolution of mathematical perspective and pictorial space across these four masterworks:",
    questionZh: "请按创作完成年份排列以下四幅标志着西方绘画空间透视与人文精神跨越的史诗杰作：",
    optionsEn: [
      "Giotto's Arena Chapel Lamentation (1305) -> Masaccio's Holy Trinity (1427) -> Leonardo's Last Supper (1498) -> Raphael's School of Athens (1511)",
      "Masaccio's Holy Trinity -> Giotto's Arena Chapel Lamentation -> Leonardo's Last Supper -> Raphael's School of Athens",
      "Giotto's Arena Chapel Lamentation -> Leonardo's Last Supper -> Masaccio's Holy Trinity -> Raphael's School of Athens",
      "Masaccio's Holy Trinity -> Giotto's Arena Chapel Lamentation -> Raphael's School of Athens -> Leonardo's Last Supper"
    ],
    optionsZh: [
      "乔托《哀悼基督》(1305) -> 马萨乔《圣三位一体》(1427) -> 达·芬奇《最后的晚餐》(1498) -> 拉斐尔《雅典学院》(1511)",
      "马萨乔《圣三位一体》 -> 乔托《哀悼基督》 -> 达·芬奇《最后的晚餐》 -> 拉斐尔《雅典学院》",
      "乔托《哀悼基督》 -> 达·芬奇《最后的晚餐》 -> 马萨乔《圣三位一体》 -> 拉斐尔《雅典学院》",
      "马萨乔《圣三位一体》 -> 乔托《哀悼基督》 -> 拉斐尔《雅典学院》 -> 达·芬奇《最后的晚餐》"
    ],
    correctAnswer: 0,
    explanationEn: "Giotto introduced intuitive human volume in Padua (1305). Masaccio applied Brunelleschi's exact mathematical one-point linear perspective in Santa Maria Novella (1427). Leonardo mastered dynamic vanishing-point composition in Milan (1498). Raphael painted the High Renaissance humanist synthesis in Rome (1511).",
    explanationZh: "乔托在1305年帕多瓦壁画确立人文体量感；马萨乔于1427年首次将布鲁内莱斯基的单点科学透视绘制于佛罗伦萨墙面；达·芬奇于1498年将消失点完美定格于基督头部；拉斐尔于1511年完成盛期文艺复兴宏大透视空间与哲人汇聚的《雅典学院》。",
    tags: ["Chronology", "Renaissance", "Perspective", "Giotto", "Masaccio", "Leonardo", "Raphael"],
    difficulty: 1
  },
  {
    id: "arched_038",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "renaissance",
    questionEn: "Arrange these monumental Renaissance palaces and villas chronologically by initial construction:",
    questionZh: "请按始建年代先后排列以下四座文艺复兴庄园与宫殿代表作：",
    optionsEn: [
      "Palazzo Medici Riccardi in Florence (Michelozzo 1444) -> Palazzo Farnese in Rome (Sangallo 1515) -> Palazzo Te in Mantua (Romano 1524) -> Villa Rotonda in Vicenza (Palladio 1566)",
      "Palazzo Farnese -> Palazzo Medici Riccardi -> Villa Rotonda -> Palazzo Te",
      "Palazzo Medici Riccardi -> Palazzo Te -> Palazzo Farnese -> Villa Rotonda",
      "Villa Rotonda -> Palazzo Medici Riccardi -> Palazzo Farnese -> Palazzo Te"
    ],
    optionsZh: [
      "美第奇-里卡尔迪宫 (米开罗佐 1444) -> 法尔内塞宫 (小桑加洛 1515) -> 苔庄园 (朱利奥·罗马诺 1524) -> 圆厅别墅 (帕拉第奥 1566)",
      "法尔内塞宫 -> 美第奇-里卡尔迪宫 -> 圆厅别墅 -> 苔庄园",
      "美第奇-里卡尔迪宫 -> 苔庄园 -> 法尔内塞宫 -> 圆厅别墅",
      "圆厅别墅 -> 美第奇-里卡尔迪宫 -> 法尔内塞宫 -> 苔庄园"
    ],
    correctAnswer: 0,
    explanationEn: "Michelozzo began the Early Renaissance Palazzo Medici in 1444 (tripartite rustication). Sangallo the Younger began the High Renaissance Palazzo Farnese in 1515. Giulio Romano designed the Mannerist Palazzo Te from 1524. Palladio designed the Late Renaissance Villa Rotonda in 1566.",
    explanationZh: "米开罗佐于1444年设计佛罗伦萨早期文艺复兴粗面石工美第奇宫；小桑加洛于1515年启动罗马盛期法尔内塞宫；朱利奥·罗马诺于1524年开工曼托瓦样式主义苔庄园；帕拉第奥于1566年营建维琴察晚期古典纯粹对称的圆厅别墅。",
    tags: ["Chronology", "Architecture", "Renaissance", "Palladio", "Mannerism"],
    difficulty: 2
  },
  {
    id: "arched_039",
    domain: "chronology",
    subCategory: "Historical Transition",
    era: "modern",
    questionEn: "Trace the chronological development of early 20th-century social housing and urban typologies:",
    questionZh: "请按年份先后排列20世纪前期现代集体住宅与城市住区探索里程碑：",
    optionsEn: [
      "Frankfurt Kitchen / Ernst May housing (1926) -> Weissenhofsiedlung in Stuttgart (1927) -> Karl Marx-Hof in Vienna (1930) -> Le Corbusier's Ville Radieuse plan (1930)",
      "Weissenhofsiedlung -> Frankfurt Kitchen -> Le Corbusier's Ville Radieuse -> Karl Marx-Hof",
      "Karl Marx-Hof -> Frankfurt Kitchen -> Weissenhofsiedlung -> Le Corbusier's Ville Radieuse",
      "Le Corbusier's Ville Radieuse -> Weissenhofsiedlung -> Frankfurt Kitchen -> Karl Marx-Hof"
    ],
    optionsZh: [
      "法兰克福厨房与恩斯特·梅住宅区 (1926) -> 斯图加特魏森霍夫住宅展 (1927) -> 维也纳卡尔·马克思大院 (1930) -> 柯布西耶“光辉城市”方案 (1930)",
      "魏森霍夫住宅展 -> 法兰克福厨房 -> 光辉城市 -> 卡尔·马克思大院",
      "卡尔·马克思大院 -> 法兰克福厨房 -> 魏森霍夫住宅展 -> 光辉城市",
      "光辉城市 -> 魏森霍夫住宅展 -> 法兰克福厨房 -> 卡尔·马克思大院"
    ],
    correctAnswer: 0,
    explanationEn: "Margarete Schütte-Lihotzky designed the standardized Frankfurt Kitchen in 1926. The Werkbund Weissenhofsiedlung exhibition opened in Stuttgart in 1927. The monumental 'Red Vienna' Karl Marx-Hof opened in 1930. Le Corbusier presented his Radiant City urban model at CIAM in 1930.",
    explanationZh: "利霍茨基等在1926年研发标准化法兰克福厨房；制造联盟斯图加特魏森霍夫白派住宅展于1927年向公众开放；维也纳红色政权象征卡尔·马克思集体大院于1930年落成；柯布西耶于1930年CIAM会议提出集中塔楼绿地的“光辉城市”理想。",
    tags: ["Chronology", "Architecture", "Modern", "Housing", "Weissenhofsiedlung"],
    difficulty: 3
  },
  {
    id: "arched_040",
    domain: "chronology",
    subCategory: "Architectural Era Progression",
    era: "postwar_contemporary",
    questionEn: "Order these monumental museum icons of late 20th- and early 21st-century architecture chronologically:",
    questionZh: "请按落成开馆年份先后排序以下四座当代世界著名博物馆地标建筑：",
    optionsEn: [
      "Centre Pompidou in Paris (Piano & Rogers 1977) -> Louvre Glass Pyramid (Pei 1989) -> Guggenheim Museum Bilbao (Gehry 1997) -> MAXXI Museum in Rome (Hadid 2009)",
      "Louvre Glass Pyramid -> Centre Pompidou -> Guggenheim Bilbao -> MAXXI Museum",
      "Centre Pompidou -> Guggenheim Bilbao -> Louvre Glass Pyramid -> MAXXI Museum",
      "Guggenheim Bilbao -> Centre Pompidou -> Louvre Glass Pyramid -> MAXXI Museum"
    ],
    optionsZh: [
      "巴黎蓬皮杜艺术中心 (皮亚诺与罗杰斯 1977) -> 卢浮宫玻璃金字塔 (贝聿铭 1989) -> 毕尔巴鄂古根海姆博物馆 (盖里 1997) -> 罗马MAXXI二十一世纪国家美术馆 (哈迪德 2009)",
      "卢浮宫玻璃金字塔 -> 巴黎蓬皮杜中心 -> 毕尔巴鄂古根海姆 -> 罗马MAXXI",
      "巴黎蓬皮杜中心 -> 毕尔巴鄂古根海姆 -> 卢浮宫玻璃金字塔 -> 罗马MAXXI",
      "毕尔巴鄂古根海姆 -> 巴黎蓬皮杜中心 -> 卢浮宫玻璃金字塔 -> 罗马MAXXI"
    ],
    correctAnswer: 0,
    explanationEn: "The High-Tech Pompidou Centre opened in 1977. I.M. Pei's modernist Glass Pyramid at the Louvre was inaugurated in 1989. Frank Gehry's titanium deconstructivist Guggenheim Bilbao opened in 1997. Zaha Hadid's fluid concrete MAXXI in Rome was inaugurated in 2009.",
    explanationZh: "皮亚诺与罗杰斯设计的高技派蓬皮杜中心落成于1977年；贝聿铭设计的卢浮宫玻璃金字塔于1989年揭幕；弗兰克·盖里设计的钛合金解构主义毕尔巴鄂古根海姆于1997年开放；扎哈·哈迪德设计的流动混凝土罗马MAXXI美术馆于2009年竣工。",
    tags: ["Chronology", "Architecture", "Contemporary", "Pompidou", "Guggenheim", "Hadid"],
    difficulty: 2
  }
];

// =========================================================================
// Domain 2: Visual Artwork & Author Identification (45 questions)
// =========================================================================
export const visualIdQuestionsPart1 = [
  {
    id: "arched_041",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Who is the painter of the iconic non-figurative composition with thick black orthogonal lines and primary color rectangles reproduced below?",
    questionZh: "下图中展示的以加粗黑色正交网格与红黄蓝纯原色色块构成的纯粹几何抽象画作的作者是谁？",
    optionsEn: ["Piet Mondrian", "Georges Braque", "René Magritte", "Kazimir Malevich"],
    optionsZh: ["皮特·蒙德里安 (Piet Mondrian)", "乔治·布拉克 (Georges Braque)", "勒内·马格里特 (René Magritte)", "卡齐米尔·马列维奇 (Kazimir Malevich)"],
    correctAnswer: 0,
    explanationEn: "Piet Mondrian is the primary master of Neoplasticism (De Stijl), famous for non-figurative compositions using primary colors, white planes, and black intersecting orthogonal lines.",
    explanationZh: "皮特·蒙德里安是荷兰风格派（新造型主义）的核心领袖，以纯原色色块、非对称平衡与黑色水平垂直正交网格的纯粹抽象构图著称。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/800px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
    fallbackImage: "/images/artworks/piet-mondrian.jpg",
    tags: ["VisualID", "Mondrian", "De Stijl", "Neoplasticism", "Abstract Art"],
    difficulty: 1
  },
  {
    id: "arched_042",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which artist created the lyrical surrealist painting characterized by whimsical biomorphic creatures, dancing stars, and celestial signs ('The Harlequin's Carnival')?",
    questionZh: "以有机变形虫形态、星芒月亮符号与充满童真诗意的抒情超现实主义画作《丑角的狂欢》作者是：",
    optionsEn: ["Joan Miró", "Salvador Dalí", "Max Ernst", "Yves Tanguy"],
    optionsZh: ["胡安·米罗 (Joan Miró)", "萨尔瓦多·达利 (Salvador Dalí)", "马克斯·恩斯特 (Max Ernst)", "伊夫·唐吉 (Yves Tanguy)"],
    correctAnswer: 0,
    explanationEn: "Joan Miró created a personal lyrical language of poetic biomorphic pictograms that bridge psychic automatism, Surrealism, and spontaneous color rhythm.",
    explanationZh: "西班牙大师胡安·米罗以独特的生物形态符号学（星体、飞鸟、眼睛）与自发性潜意识漫步，开创了富于诗性童趣的超现实主义语汇。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Joan_Mir%C3%B3_in_1967.jpg/800px-Joan_Mir%C3%B3_in_1967.jpg",
    fallbackImage: "/images/artworks/joan-miro.jpg",
    tags: ["VisualID", "Joan Miró", "Surrealism", "Biomorphic Art"],
    difficulty: 1
  },
  {
    id: "arched_043",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "postwar_contemporary",
    questionEn: "Identify the author of the monumental drip-and-pour action painting 'Autumn Rhythm (Number 30)' created in 1950:",
    questionZh: "创作于1950年、采用将未经拉伸画布铺在地面上进行泼洒与滴流技法的行动绘画巨作《秋之韵（第30号）》作者是：",
    optionsEn: ["Jackson Pollock", "Mark Rothko", "Willem de Kooning", "Franz Kline"],
    optionsZh: ["杰克逊·波洛克 (Jackson Pollock)", "马克·罗斯科 (Mark Rothko)", "威廉·德·库宁 (Willem de Kooning)", "弗朗兹·克莱因 (Franz Kline)"],
    correctAnswer: 0,
    explanationEn: "Jackson Pollock revolutionized postwar painting by dripping liquid enamel and synthetic gloss paint directly onto raw unstretched canvas on the floor, embodying Action Painting.",
    explanationZh: "杰克逊·波洛克开创了“滴流画法”（Drip Painting），将工业搪瓷漆通过手腕与身体全身律动挥洒于地面画布，成为纽约画派行动绘画的标杆象征。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jackson_Pollock_working.jpg/800px-Jackson_Pollock_working.jpg",
    fallbackImage: "/images/artworks/autumn-rhythm.jpg",
    tags: ["VisualID", "Pollock", "Action Painting", "Abstract Expressionism"],
    difficulty: 1
  },
  {
    id: "arched_044",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "postwar_contemporary",
    questionEn: "Which Pop Art icon created the 1962 screenprint diptych featuring fifty repeated photographic portraits of Marilyn Monroe?",
    questionZh: "在1962年通过丝网版画套印50张重复的玛丽莲·梦露肖像、深刻揭示大众媒介与明星商品拜物教的波普大师是：",
    optionsEn: ["Andy Warhol", "Roy Lichtenstein", "Richard Hamilton", "Jasper Johns"],
    optionsZh: ["安迪·沃霍尔 (Andy Warhol)", "罗伊·利希滕斯坦 (Roy Lichtenstein)", "理查德·汉密尔顿 (Richard Hamilton)", "贾斯珀·琼斯 (Jasper Johns)"],
    correctAnswer: 0,
    explanationEn: "Andy Warhol produced the 'Marilyn Diptych' in 1962 using silkscreen photo-stenciling with synthetic polymer paints, contrasting vivid saturated colors on the left with fading black and white on the right.",
    explanationZh: "安迪·沃霍尔于1962年梦露猝逝后采用感光丝网版画，左侧套印高饱和艳丽色彩，右侧呈现墨色脱落的黑白残影，将商业偶像转化为崇拜图符。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    fallbackImage: "/images/artworks/andy-warhol.jpg",
    tags: ["VisualID", "Andy Warhol", "Pop Art", "Marilyn Diptych", "Silkscreen"],
    difficulty: 1
  },
  {
    id: "arched_045",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "postwar_contemporary",
    questionEn: "Who exhibited thirty-two synthetic polymer paintings of Campbell's Soup Cans at the Ferus Gallery in Los Angeles in 1962?",
    questionZh: "1962年于洛杉矶费鲁斯画廊展出由32幅对应不同汤品口味罐头组成的《金宝汤罐头》系列作品的作者是：",
    optionsEn: ["Andy Warhol", "Claes Oldenburg", "Robert Rauschenberg", "Tom Wesselmann"],
    optionsZh: ["安迪·沃霍尔 (Andy Warhol)", "克拉斯·奥登伯格 (Claes Oldenburg)", "罗伯特·劳森伯格 (Robert Rauschenberg)", "汤姆·韦塞尔曼 (Tom Wesselmann)"],
    correctAnswer: 0,
    explanationEn: "Andy Warhol made thirty-two canvases of Campbell's Soup Cans, one for each flavor offered by the company in 1962, arranged in grocery-shelf rows.",
    explanationZh: "安迪·沃霍尔于1962年手绘兼半丝网印制了32幅对应金宝公司当时所有不同风味的汤罐画作，如超市货架陈列般排布，开启波普艺术先河。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    fallbackImage: "/images/artworks/andy-warhol.jpg",
    tags: ["VisualID", "Andy Warhol", "Pop Art", "Campbells Soup"],
    difficulty: 1
  },
  {
    id: "arched_046",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "postwar_contemporary",
    questionEn: "Who designed the famous peelable yellow banana cover for the 1967 album 'The Velvet Underground & Nico'?",
    questionZh: "1967年地下丝绒乐队首张专辑封面上那根带有“Peel slowly and see”（慢慢剥开看）指示的可撕开黄色香蕉视觉设计者是：",
    optionsEn: ["Andy Warhol", "Keith Haring", "Peter Blake", "Jean-Michel Basquiat"],
    optionsZh: ["安迪·沃霍尔 (Andy Warhol)", "凯斯·哈林 (Keith Haring)", "彼得·布莱克 (Peter Blake)", "让-米歇尔·巴斯奎特 (Jean-Michel Basquiat)"],
    correctAnswer: 0,
    explanationEn: "Andy Warhol managed and produced The Velvet Underground in 1966-1967 and created the provocative interactive sticker album cover of a yellow banana peeling to reveal flesh-colored fruit underneath.",
    explanationZh: "沃霍尔作为地下丝绒乐队的赞助人与经理人，亲自设计了这一极具挑衅感与互动性的波普艺术标志贴纸唱片封面。",
    tags: ["VisualID", "Andy Warhol", "Pop Art", "Album Cover", "Banana"],
    difficulty: 1
  },
  {
    id: "arched_047",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "postwar_contemporary",
    questionEn: "Which artist created the silkscreened wooden replicas of 'Brillo Boxes' shown at the Stable Gallery in 1964?",
    questionZh: "1964年于纽约稳定画廊堆叠展出、以精密复制肥皂丝洗洁垫包装箱挑战雕塑概念的《布里洛盒子》作者是：",
    optionsEn: ["Andy Warhol", "Donald Judd", "Sol LeWitt", "Dan Flavin"],
    optionsZh: ["安迪·沃霍尔 (Andy Warhol)", "唐纳德·贾德 (Donald Judd)", "索尔·勒维特 (Sol LeWitt)", "丹·弗拉文 (Dan Flavin)"],
    correctAnswer: 0,
    explanationEn: "Andy Warhol fabricated plywood boxes identical in size and silkscreen printed packaging graphics to commercial Brillo soap pad shipping cartons, famously prompting philosopher Arthur Danto to proclaim the 'end of art'.",
    explanationZh: "安迪·沃霍尔使用胶合板按超市运输纸箱真实尺寸打造箱体，并套印肥皂丝商标图案。哲学家阿瑟·丹托由此提出著名的“艺术终结论”。",
    tags: ["VisualID", "Andy Warhol", "Brillo Box", "Pop Art", "Sculpture"],
    difficulty: 2
  },
  {
    id: "arched_048",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Who submitted a porcelain urinal titled 'Fountain' and signed 'R. Mutt 1917' to the Society of Independent Artists?",
    questionZh: "1917年向纽约独立艺术家协会大展提交署名“R. Mutt 1917”的白色陶瓷男用小便斗《泉》（Fountain）的先锋大师是：",
    optionsEn: ["Marcel Duchamp", "Man Ray", "Francis Picabia", "Kurt Schwitters"],
    optionsZh: ["马塞尔·杜尚 (Marcel Duchamp)", "曼·雷 (Man Ray)", "弗朗西斯·毕卡比亚 (Francis Picabia)", "库尔特·施威特斯 (Kurt Schwitters)"],
    correctAnswer: 0,
    explanationEn: "Marcel Duchamp overturned traditional aesthetic standards by purchasing a commercial Bedfordshire model urinal, rotating it 90 degrees, signing it 'R. Mutt 1917', and designating it as a readymade artwork.",
    explanationZh: "马塞尔·杜尚从卫生洁具店购得标准陶瓷小便斗，将其旋转90度并以“R. Mutt 1917”签名命名为《泉》，以“现成品”（Readymade）颠覆了数百年西方传统视觉艺术定义。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Duchamp_Fountaine.jpg/800px-Duchamp_Fountaine.jpg",
    fallbackImage: "/images/artworks/bicycle-wheel.jpg",
    tags: ["VisualID", "Duchamp", "Dada", "Readymade", "Fountain"],
    difficulty: 1
  },
  {
    id: "arched_049",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which scandalous proto-Cubist and Futurist painting by Marcel Duchamp caused an uproar at the 1913 New York Armory Show?",
    questionZh: "在1913年纽约军械库博览会上引发巨大轰动与嘲讽、被评论家讽为“瓦砾厂爆炸”的杜尚动态分析名作是：",
    optionsEn: [
      "Nude Descending a Staircase, No. 2",
      "The Bride Stripped Bare by Her Bachelors, Even",
      "Bicycle Wheel",
      "Network of Stoppages"
    ],
    optionsZh: [
      "《下楼梯的裸女第二号》(Nude Descending a Staircase, No. 2)",
      "《大玻璃 / 甚至新娘被她的光棍们剥光了衣服》",
      "《自行车轮》",
      "《停顿的网络》"
    ],
    correctAnswer: 0,
    explanationEn: "Duchamp's 'Nude Descending a Staircase, No. 2' (1912) synthesized Cubist faceted analysis with chronophotographic movement lines, creating a national sensation at the 1913 Armory Show.",
    explanationZh: "杜尚创作于1912年的《下楼梯的裸女第二号》融合了立体主义分面几何与连续摄影的动态分解，在1913年纽约军械库画展彻底震动了美国现代艺术界。",
    tags: ["VisualID", "Duchamp", "Armory Show", "Cubism", "Chronophotography"],
    difficulty: 2
  },
  {
    id: "arched_050",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Identify the author of the 1919 assisted readymade featuring a postcard reproduction of Leonardo's Mona Lisa with a penciled mustache and goatee and the title 'L.H.O.O.Q.':",
    questionZh: "1919年在一张达·芬奇《蒙娜丽莎》明信片上添画八字胡与山羊胡，并在底部题写双关谐音字母“L.H.O.O.Q.”的达达主义艺术家是：",
    optionsEn: ["Marcel Duchamp", "Hans Arp", "Max Ernst", "Raoul Hausmann"],
    optionsZh: ["马塞尔·杜尚 (Marcel Duchamp)", "汉斯·阿尔普 (Hans Arp)", "马克斯·恩斯特 (Max Ernst)", "拉乌尔·豪斯曼 (Raoul Hausmann)"],
    correctAnswer: 0,
    explanationEn: "Marcel Duchamp created 'L.H.O.O.Q.' in 1919 as a modified readymade; the French letters phonetically sound like 'Elle a chaud au cul' ('She has a hot ass'), poking iconoclastic satire at high-art fetishism.",
    explanationZh: "杜尚在达·芬奇逝世四百周年之际创作改动现成品《L.H.O.O.Q.》，其法文字母发音构成诙谐亵渎俚语，以达达反叛精神解构古典神话与资产阶级审美神坛。",
    tags: ["VisualID", "Duchamp", "Dada", "Mona Lisa", "Readymade"],
    difficulty: 1
  },
  {
    id: "arched_051",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Which work, created in 1913 by mounting an inverted bicycle wheel onto a painted wooden kitchen stool, is recognized as Marcel Duchamp's first readymade?",
    questionZh: "1913年将一个倒置的前自行车轮固定在白色四腿木凳上、被视为杜尚第一件“现成品”雕塑的作品是：",
    optionsEn: ["Bicycle Wheel (Roue de bicyclette)", "Bottle Rack (Porte-bouteilles)", "In Advance of the Broken Arm", "Fresh Widow"],
    optionsZh: ["《自行车轮》(Bicycle Wheel)", "《瓶架》(Bottle Rack)", "《折断手臂之前》(雪铲)", "《新鲜的寡妇》(带黑色皮革的法式窗)"],
    correctAnswer: 0,
    explanationEn: "In 1913, Duchamp assembled 'Bicycle Wheel' in his Paris studio to watch the wheel spin like flames in a fireplace, marking his first kinetic assemblage and assisted readymade.",
    explanationZh: "杜尚于1913年在巴黎画室将倒置自行车车轮与厨房木凳组装成《自行车轮》，既能以手转动轮辐观赏动态虚影，又开创了辅助现成品装配艺术。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Duchamp_Bicycle_Wheel.jpg/800px-Duchamp_Bicycle_Wheel.jpg",
    fallbackImage: "/images/artworks/bicycle-wheel.jpg",
    tags: ["VisualID", "Duchamp", "Bicycle Wheel", "Readymade", "Kinetic"],
    difficulty: 1
  },
  {
    id: "arched_052",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Who painted 'The Song of Love' (Le chant d'amour, 1914), showing a red rubber glove, a green ball, and a Classical marble bust of the Apollo Belvedere pinned to a building wall?",
    questionZh: "在1914年创作《爱之歌》（Le chant d'amour），将红色医用橡胶手套、绿球与古典阿波罗大理石胸像诡异并置于建筑墙面的形而上绘画大师是：",
    optionsEn: ["Giorgio de Chirico", "Carlo Carrà", "Giorgio Morandi", "Alberto Savinio"],
    optionsZh: ["乔治·德·基里科 (Giorgio de Chirico)", "卡洛·卡拉 (Carlo Carrà)", "乔治·莫兰迪 (Giorgio Morandi)", "阿尔贝托·萨维尼奥 (Alberto Savinio)"],
    correctAnswer: 0,
    explanationEn: "Giorgio de Chirico painted 'The Song of Love' in Paris in 1914. Its mysterious poetic juxtaposition of unrelated ordinary objects directly inspired Magritte to take up surrealist painting.",
    explanationZh: "形而上画派宗师乔治·德·基里科在1914年创作《爱之歌》，将毫不相干的物件在凝固梦境中并置，深深震撼了雷内·马格里特并促使其转向超现实主义。",
    tags: ["VisualID", "De Chirico", "Pittura Metafisica", "Song of Love"],
    difficulty: 2
  },
  {
    id: "arched_053",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which famous metaphysical painting by Giorgio de Chirico depicts mannequin figures with tailored dressmaker heads standing in a silent Italian piazza overlooking the Castello Estense in Ferrara?",
    questionZh: "基里科哪幅代表作描绘了静穆空旷的费拉拉埃斯滕塞城堡广场上、伫立着无面目裁缝人偶假人与色彩神秘标尺的场景？",
    optionsEn: [
      "The Disquieting Muses (Le Muse inquietanti, 1918)",
      "The Mystery and Melancholy of a Street",
      "The Enigma of an Autumn Afternoon",
      "The Double Dream of Spring"
    ],
    optionsZh: [
      "《不安的缪斯》(The Disquieting Muses / Le Muse inquietanti)",
      "《一条街的神秘与忧郁》",
      "《秋日午后的谜》",
      "《春天的双重梦》"
    ],
    correctAnswer: 0,
    explanationEn: "De Chirico painted 'The Disquieting Muses' in 1917-1918 in Ferrara, featuring monumental classical draped mannequins cast in long haunting shadows before the red brick Renaissance castle.",
    explanationZh: "德·基里科于1917-1918年在费拉拉创作《不安的缪斯》，以红砖城堡为背景，广场上矗立着身着古典衣褶却安插裁缝模型头颅的人偶，弥漫着形而上孤寂。",
    tags: ["VisualID", "De Chirico", "Pittura Metafisica", "Disquieting Muses"],
    difficulty: 2
  },
  {
    id: "arched_054",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which 1910 canvas by Giorgio de Chirico, painted in Florence after reading Nietzsche in Piazza Santa Croce, is considered the inaugural work of Metaphysical Painting?",
    questionZh: "基里科于1910年在佛罗伦萨圣十字广场领悟尼采哲学后创作、被史学界视为形而上画派奠基开山之作的画作是：",
    optionsEn: [
      "The Enigma of an Autumn Afternoon (L'enigma di un pomeriggio d'autunno)",
      "The Great Metaphysician",
      "The Nostalgia of the Infinite",
      "Héctor and Andrómache"
    ],
    optionsZh: [
      "《秋日午后的谜》(L'enigma di un pomeriggio d'autunno)",
      "《伟大的形而上学家》",
      "《无限的乡愁》",
      "《赫克托尔与安德洛玛刻》"
    ],
    correctAnswer: 0,
    explanationEn: "'The Enigma of an Autumn Afternoon' (1910) captured de Chirico's epiphany at Santa Croce, showing an ancient statue of Dante obscured into a headless figure under an austere classical portico.",
    explanationZh: "德·基里科于1910年创作《秋日午后的谜》，源于他在圣十字教堂广场长凳上突发的顿悟：熟悉的城市立面与古典雕像在斜阳下拉长阴影，呈现出脱离现实经验的神秘存在本质。",
    tags: ["VisualID", "De Chirico", "Pittura Metafisica", "Inaugural"],
    difficulty: 3
  },
  {
    id: "arched_055",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Who painted the surrealist masterpiece 'The Persistence of Memory' (1931), featuring limp, melting pocket watches draped over a barren branch and an organic monster on the Catalan coast?",
    questionZh: "在1931年创作超现实主义经典名作《记忆的永恒》（软表），以瘫软熔化的怀表搭挂在枯枝、石台与异化面部生物之上的大师是：",
    optionsEn: ["Salvador Dalí", "René Magritte", "Paul Delvaux", "Yves Tanguy"],
    optionsZh: ["萨尔瓦多·达利 (Salvador Dalí)", "勒内·马格里特 (René Magritte)", "保罗·德尔沃 (Paul Delvaux)", "伊夫·唐吉 (Yves Tanguy)"],
    correctAnswer: 0,
    explanationEn: "Salvador Dalí painted 'The Persistence of Memory' in 1931 based on his paranoiac-critical method, famously inspired by the softness of Camembert cheese melting in the sun against the cliffs of Port Lligat.",
    explanationZh: "萨尔瓦多·达利于1931年采用其“偏执狂批判法”创作《记忆的永恒》，以卡达克斯海岸悬崖为背景，将机械精准的钟表异化为如同卡芒贝尔奶酪般融软变形，反思时间的相对性与消亡。",
    tags: ["VisualID", "Salvador Dali", "Surrealism", "Persistence of Memory"],
    difficulty: 1
  },
  {
    id: "arched_056",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Identify the monstrous 1936 premonitory canvas by Salvador Dalí showing self-mutilating human limbs tearing themselves apart under a sunlit blue sky, subtitled 'Premonition of Civil War':",
    questionZh: "达利在1936年西班牙内战爆发前夕创作的预言性震撼巨作，以一具怪诞自残撕扯的肉体肢块构架横跨在加泰罗尼亚荒原上，这幅作品是：",
    optionsEn: [
      "Soft Construction with Boiled Beans (Premonition of Civil War)",
      "The Burning Giraffe",
      "Swans Reflecting Elephants",
      "Metamorphosis of Narcissus"
    ],
    optionsZh: [
      "《煮熟的蚕豆软结构 / 内战的预兆》(Soft Construction with Boiled Beans)",
      "《燃烧的长颈鹿》",
      "《天鹅倒影为大象》",
      "《那耳喀索斯的蜕变》"
    ],
    correctAnswer: 0,
    explanationEn: "Dalí completed 'Soft Construction with Boiled Beans' six months before the Spanish Civil War began in 1936, depicting an agonized colossus ripping itself apart as an allegory of national fratricide.",
    explanationZh: "达利于1936年西班牙内战爆发前六个月完成《煮豆的软结构：内战的预兆》，画面中相互撕扯绞杀的巨大肢体残块与散落的熟蚕豆，深刻隐喻同胞自相残杀的民族炼狱。",
    tags: ["VisualID", "Salvador Dali", "Surrealism", "Civil War"],
    difficulty: 2
  },
  {
    id: "arched_057",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Who created the surrealist gouache 'Face of Mae West Which May Be Used as an Apartment' (1935) and the iconic satin 'Mae West Lips Sofa'?",
    questionZh: "1935年构想将好莱坞艳星梅·韦斯特的面庞转化为包含红唇沙发、壁炉鼻梁与画作双眼的公寓室内设计，并打造出著名“唇形沙发”的艺术家是：",
    optionsEn: ["Salvador Dalí", "Man Ray", "Meret Oppenheim", "Leonor Fini"],
    optionsZh: ["萨尔瓦多·达利 (Salvador Dalí)", "曼·雷 (Man Ray)", "梅雷特·奥本海姆 (Meret Oppenheim)", "莱奥诺·菲尼 (Leonor Fini)"],
    correctAnswer: 0,
    explanationEn: "Salvador Dalí designed the 'Mae West Lips Sofa' in 1937 in collaboration with British patron Edward James, turning an optical double-image painting of an apartment into a real piece of furniture.",
    explanationZh: "萨尔瓦多·达利于1935年创作《可用作超现实公寓的梅·韦斯特面孔》，随后与赞助人爱德华·詹姆斯合作制作了著名的红唇缎面沙发，成为超现实主义功能家具典范。",
    tags: ["VisualID", "Salvador Dali", "Surrealism", "Mae West Sofa"],
    difficulty: 2
  },
  {
    id: "arched_058",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "postwar_contemporary",
    questionEn: "Which Swiss-Italian sculptor created the iconic emaciated bronze figure 'Walking Man I' (L'Homme qui marche I, 1960)?",
    questionZh: "创作于1960年、以极度消瘦修长、斑驳粗糙的青铜躯体坚定迈步向前、象征战后人类存在主义孤绝与坚韧的雕塑名作《行走的人I》作者是：",
    optionsEn: ["Alberto Giacometti", "Constantin Brancusi", "Marino Marini", "Giacomo Manzù"],
    optionsZh: ["阿尔贝托·贾科梅蒂 (Alberto Giacometti)", "康斯坦丁·布朗库西 (Constantin Brancusi)", "马里诺·马里尼 (Marino Marini)", "贾科莫·曼祖 (Giacomo Manzù)"],
    correctAnswer: 0,
    explanationEn: "Alberto Giacometti pioneered rough, elongated, stick-like bronze figures in postwar Paris, capturing existential alienation and Sartre's philosophy of human solitude in physical space.",
    explanationZh: "瑞士籍雕塑巨匠阿尔贝托·贾科梅蒂在战后以细长如骨骼、表面凹凸斑驳的青铜铸像闻名，让-保罗·萨特称其雕塑精准抓住了现代人“在虚无之中的坚毅存在”。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Alberto_Giacometti_1960.jpg/800px-Alberto_Giacometti_1960.jpg",
    fallbackImage: "/images/artworks/alberto-giacometti.jpg",
    tags: ["VisualID", "Giacometti", "Sculpture", "Existentialism", "Walking Man"],
    difficulty: 1
  },
  {
    id: "arched_059",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Identify the 1932 surrealist wood, wire, and glass construction 'The Palace at 4 a.m.' created by:",
    questionZh: "1932年以木条、琴弦线条与玻璃搭建骨架宫殿，内部悬浮着骨骼脊椎与异化飞鸟的超现实主义装置《清晨四点的宫殿》作者是：",
    optionsEn: ["Alberto Giacometti", "Alexander Calder", "Kurt Schwitters", "Jean Arp"],
    optionsZh: ["阿尔贝托·贾科梅蒂 (Alberto Giacometti)", "亚历山大·考尔德 (Alexander Calder)", "库尔特·施威特斯 (Kurt Schwitters)", "让·阿尔普 (Jean Arp)"],
    correctAnswer: 0,
    explanationEn: "During his Surrealist period in Paris, Alberto Giacometti constructed 'The Palace at 4 a.m.', an open-cage architectural dreamscape of memory, fragility, and romantic obsession.",
    explanationZh: "贾科梅蒂在1930年代巴黎超现实主义时期创作《清晨四点的宫殿》，以透空笼状建筑结构构筑如脆弱记忆般的梦境剧场，被纽约现代艺术博物馆收藏。",
    tags: ["VisualID", "Giacometti", "Surrealism", "Palace at 4am"],
    difficulty: 2
  },
  {
    id: "arched_060",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Who is the Milanese founder of Spatialism celebrated for slashing monochromatic canvases in the series 'Concetto spaziale, Attese'?",
    questionZh: "创立“空间主义”（Spatialism）运动、以利刃划破单色平整画布创作《空间概念·期待》（Attese）割痕系列的艺术家是：",
    optionsEn: ["Lucio Fontana", "Alberto Burri", "Piero Manzoni", "Enrico Castellani"],
    optionsZh: ["卢齐欧·封塔纳 (Lucio Fontana)", "阿尔贝托·布里 (Alberto Burri)", "皮耶罗·曼佐尼 (Piero Manzoni)", "恩里科·卡斯特拉尼 (Enrico Castellani)"],
    correctAnswer: 0,
    explanationEn: "Lucio Fontana founded Spatialism in Milan in 1947. In his 'Tagli' (slashes) series begun in 1958, he sliced through pristine canvases with a stanley blade, penetrating the 2D surface to reveal real physical infinite space behind it.",
    explanationZh: "意大利先锋大师卢齐欧·封塔纳于1947年在米兰发起空间主义，1958年起以锋利刀片划破纯色亚麻布（Tagli），穿透二维绘画表层将真实的三维物理空间引入艺术体验。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lucio_Fontana_1960.jpg/800px-Lucio_Fontana_1960.jpg",
    fallbackImage: "/images/artworks/lucio-fontana.jpg",
    tags: ["VisualID", "Fontana", "Spatialism", "Attese", "Italian Postwar"],
    difficulty: 1
  },
  {
    id: "arched_061",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "What was the technique used by Lucio Fontana in his 'Buchi' series begun in 1949?",
    questionZh: "卢齐欧·封塔纳在1949年率先开创的《空间概念》（Buchi）系列主要采用了哪种突破画面的破坏性手法？",
    optionsEn: [
      "Puncturing the canvas with spiral patterns of rough holes",
      "Burning holes into burlap sacks with a welding blowtorch",
      "Stitching torn sailcloth with coarse black thread",
      "Dripping molten lead across raw wooden panels"
    ],
    optionsZh: [
      "用锥子与粗针在画布表面穿凿孔洞与星丛漩涡 (Buchi / Punctures)",
      "用喷火枪在粗麻布袋上烧灼焦黑破洞",
      "用黑色粗线缝合破损的帆布碎片",
      "将熔化的铅水浇筑在原木板上"
    ],
    correctAnswer: 0,
    explanationEn: "In 1949, Fontana launched his 'Buchi' (holes) series by perforating the canvas surface with an awl, allowing real light and shadow to circulate through the painting.",
    explanationZh: "封塔纳于1949年创作最初的《空间概念》“孔洞”（Buchi）系列，用尖锥刺透画布留下粗糙突起的破孔阵列，让光线穿透画布开创宇宙与空间维度。",
    tags: ["VisualID", "Fontana", "Spatialism", "Buchi"],
    difficulty: 2
  },
  {
    id: "arched_062",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Which French Nouveau Réalisme artist patented 'IKB' (International Klein Blue) and directed 'living brushes' in his Anthropometries performances?",
    questionZh: "注册了具有极高发光强度的群青蓝色专利“IKB”，并在现场交响乐伴奏下指导涂满蓝色颜料的裸体女模特充当“活体画笔”进行表演的法国新写实主义大师是：",
    optionsEn: ["Yves Klein", "Arman", "Jean Tinguely", "César Baldaccini"],
    optionsZh: ["伊夫·克莱因 (Yves Klein)", "阿尔曼 (Arman)", "让·丁格利 (Jean Tinguely)", "塞萨尔 (César Baldaccini)"],
    correctAnswer: 0,
    explanationEn: "Yves Klein patented International Klein Blue (IKB) in 1960. In his 'Anthropométries' series, he directed female models coated in IKB pigment to press their bodies against paper sheets to record dynamic corporeal imprints.",
    explanationZh: "伊夫·克莱因于1960年将其与化学家合作研发的高纯度群青合成树脂颜料注册为“国际克莱因蓝”（IKB），并在《人体测量学》表演中让模特以身体印记记录纯粹精神能量。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Yves_Klein_1961.jpg/800px-Yves_Klein_1961.jpg",
    fallbackImage: "/images/artworks/yves-klein.jpg",
    tags: ["VisualID", "Yves Klein", "IKB", "Anthropometries", "Nouveau Realisme"],
    difficulty: 1
  },
  {
    id: "arched_063",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "What binding medium allowed Yves Klein's 'Blue Monochrome' (IKB) paintings to preserve the dry, powdery brilliance of raw ultramarine pigment?",
    questionZh: "伊夫·克莱因与巴黎颜料商让·亚当合作研发的IKB单色画，之所以能彻底保留纯群青粉末的天鹅绒般干爽光泽与发光感，是因为使用了哪种特殊黏合剂？",
    optionsEn: [
      "Synthetic resin Rhodopas M60A thinned in alcohol and ethyl acetate",
      "Traditional cold-pressed refined linseed oil",
      "Egg yolk emulsion with rabbit-skin glue",
      "Pure beeswax encaustic compound"
    ],
    optionsZh: [
      "溶于酒精与乙酸乙酯的聚醋酸乙烯酯合成树脂 (Rhodopas M60A)",
      "传统冷榨精炼亚麻籽油",
      "加入兔皮胶的蛋黄乳液 (Tempera)",
      "古希腊纯蜂蜡热蜡配方 (Encaustic)"
    ],
    correctAnswer: 0,
    explanationEn: "Traditional oils dulled the intensity of ultramarine; Klein solved this by suspending pigment in Rhodopas M60A, a synthetic polymer resin fixative that preserved the matte, luminescent radiance of raw pigment.",
    explanationZh: "传统干性植物油会浸润色粉使其失去亮度，克莱因采用合成树脂固定剂Rhodopas M60A，使溶剂挥发后色粉颗粒保持天然微孔与原本天鹅绒般的纯粹光彩。",
    tags: ["VisualID", "Yves Klein", "IKB", "Materiality"],
    difficulty: 3
  },
  {
    id: "arched_064",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Which Italian Arte Povera artist constructed hemispherical domes ('Igloos') wrapped with slate slabs, wire mesh, neon tubes, and Fibonacci mathematical sequences?",
    questionZh: "意大利“贫穷艺术”（Arte Povera）核心人物中，以金属网架、石板泥土与明亮霓虹灯管搭建“圆顶冰屋”（Igloo）并贯穿斐波那契数列的是：",
    optionsEn: ["Mario Merz", "Jannis Kounellis", "Michelangelo Pistoletto", "Giulio Paolini"],
    optionsZh: ["马里奥·梅尔茨 (Mario Merz)", "扬尼斯·库奈里斯 (Jannis Kounellis)", "米开朗基罗·皮斯特莱托 (Michelangelo Pistoletto)", "朱利奥·保利尼 (Giulio Paolini)"],
    correctAnswer: 0,
    explanationEn: "Mario Merz began constructing his iconic 'Igloos' in 1968, utilizing nomadic dwelling forms combined with contemporary industrial neon numbers tracing Fibonacci growth sequences.",
    explanationZh: "马里奥·梅尔茨自1968年起创作《冰屋》系列，选用游牧庇护所半球结构，结合碎石板、蜡块与书写自然增长法则的斐波那契数字霓虹灯，探讨游牧生存与空间有机演进。",
    tags: ["VisualID", "Arte Povera", "Mario Merz", "Igloo", "Fibonacci"],
    difficulty: 2
  },
  {
    id: "arched_065",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Which Greek-Italian Arte Povera pioneer famously exhibited twelve live horses tied to the white walls of the Galleria L'Attico in Rome in 1969?",
    questionZh: "1969年在罗马阿蒂科画廊（Galleria L'Attico）洁白展厅内拴系了12匹活生生的真马进行展览、用粗麻袋与煤炭唤醒原初感官体验的贫穷艺术大师是：",
    optionsEn: ["Jannis Kounellis", "Alighiero Boetti", "Pino Pascali", "Gilberto Zorio"],
    optionsZh: ["扬尼斯·库奈里斯 (Jannis Kounellis)", "阿里吉耶罗·博埃蒂 (Alighiero Boetti)", "皮诺·帕斯卡利 (Pino Pascali)", "吉尔伯托·佐里奥 (Gilberto Zorio)"],
    correctAnswer: 0,
    explanationEn: "Jannis Kounellis staged his legendary installation of twelve live horses in Rome in 1969, merging real animal life, breath, and historical equestrian mythology into the pristine gallery cube.",
    explanationZh: "扬尼斯·库奈里斯于1969年在罗马展出12匹鲜活骏马，伴随马匹的鼻息与温度，将生命实体、历史骑士神话与原始物质（铁、煤、麻袋、咖啡豆）注入当代艺术空间。",
    tags: ["VisualID", "Arte Povera", "Jannis Kounellis", "Horses"],
    difficulty: 2
  }
];

export const visualIdQuestionsPart2 = [
  {
    id: "arched_066",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Which landmark Arte Povera installation by Michelangelo Pistoletto (1967) juxtaposes an ancient classical plaster goddess with a towering pile of discarded colorful fabric rags?",
    questionZh: "米开朗基罗·皮斯特莱托于1967年创作的贫穷艺术经典装置，将一尊仿古罗马古典石膏维纳斯雕像背对观众埋入巨大五彩废旧衣物堆中的作品是：",
    optionsEn: [
      "Venus of the Rags (Venere degli stracci)",
      "Mirror Paintings (Quadri specchianti)",
      "Minus Objects (Oggetti in meno)",
      "The Third Paradise"
    ],
    optionsZh: [
      "《破布中的维纳斯》(Venere degli stracci / Venus of the Rags)",
      "《镜画系列》(Quadri specchianti)",
      "《减法物件》(Oggetti in meno)",
      "《第三天堂》"
    ],
    correctAnswer: 0,
    explanationEn: "Pistoletto created 'Venus of the Rags' in 1967, contrasting the eternal, idealized beauty of Western classical sculpture with the disposable, cheap consumerist waste of modern textile rags.",
    explanationZh: "皮斯特莱托于1967年创作《破布中的维纳斯》，将代表西方永恒典雅理想的古典石膏维纳斯与代表现代工业社会消费主义废弃物的斑斓旧衣物剧烈对比，碰撞出震撼张力。",
    tags: ["VisualID", "Arte Povera", "Pistoletto", "Venus of Rags"],
    difficulty: 2
  },
  {
    id: "arched_067",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Which Italian conceptual and Arte Povera artist commissioned female Afghan embroiderers in Kabul to hand-stitch world maps showing national flags on every country territory ('Mappa')?",
    questionZh: "在1970至1990年代委托阿富汗喀布尔女性刺绣艺人手工缝制、以不同国家国旗填充领土边界的著名织锦世界地图《地图》（Mappa）系列的作者是：",
    optionsEn: ["Alighiero Boetti", "Mario Merz", "Giulio Paolini", "Luciano Fabro"],
    optionsZh: ["阿里吉耶罗·博埃蒂 (Alighiero Boetti)", "马里奥·梅尔茨 (Mario Merz)", "朱利奥·保利尼 (Giulio Paolini)", "卢恰诺·法布罗 (Luciano Fabro)"],
    correctAnswer: 0,
    explanationEn: "Alighiero Boetti conceived the 'Mappa' series in 1971, allowing Afghan artisans in Kabul and Peshawar to embroider political world maps reflecting shifting geopolitical boundaries and collective labor.",
    explanationZh: "阿里吉耶罗·博埃蒂于1971年启动《地图》系列，将地缘政治国旗图像交给阿富汗女性绣工刺绣，通过偶发色彩变化与时间推移，记录了冷战及全球边界变迁的集体智慧。",
    tags: ["VisualID", "Arte Povera", "Alighiero Boetti", "Mappa", "Conceptual"],
    difficulty: 2
  },
  {
    id: "arched_068",
    domain: "visual_id",
    subCategory: "Spatial & Material Art",
    era: "postwar_contemporary",
    questionEn: "Who created ninety numbered tin cans containing 30 grams of the artist's feces titled 'Artist's Shit' (Merda d'artista, 1961), originally priced equivalent to their weight in pure 18k gold?",
    questionZh: "1961年将30克人体排泄物密封于90个带有四种语言标签的马口铁罐头中、按等重纯金价值出售的激进意大利观念大师是：",
    optionsEn: ["Piero Manzoni", "Lucio Fontana", "Maurizio Cattelan", "Alberto Burri"],
    optionsZh: ["皮耶罗·曼佐尼 (Piero Manzoni)", "卢齐欧·封塔纳 (Lucio Fontana)", "莫瑞吉奥·卡特兰 (Maurizio Cattelan)", "阿尔贝托·布里 (Alberto Burri)"],
    correctAnswer: 0,
    explanationEn: "Piero Manzoni produced 'Merda d'artista' in May 1961 as an extreme parody of capitalist artistic commodity value, authenticating 90 sealed tin cans with his signature and fingerprint.",
    explanationZh: "皮耶罗·曼佐尼于1961年创作《艺术家的粪便》（Merda d'artista），以90个密封铁罐严格对应当时黄金牌价出售，对资本主义商业社会中只要带有艺术签名即可点石成金的荒诞机制进行极尽嘲讽。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Piero_Manzoni_Merda_d%27artista.jpg/800px-Piero_Manzoni_Merda_d%27artista.jpg",
    fallbackImage: "/images/artworks/artists-shit.jpg",
    tags: ["VisualID", "Piero Manzoni", "Conceptual Art", "Merda d artista"],
    difficulty: 1
  },
  {
    id: "arched_069",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Which Romanian-French master sculpted 'Bird in Space' (L'Oiseau dans l'espace), a series of soaring, highly polished bronze and marble shafts capturing the pure essence of flight?",
    questionZh: "创作《空间中的鸟》（Bird in Space），以极致光洁流线的大理石与抛光青铜纯粹形体剔除羽毛与双翼、捕捉飞翔本质精神的现代雕塑奠基人是：",
    optionsEn: ["Constantin Brancusi", "Alberto Giacometti", "Jean Arp", "Naum Gabo"],
    optionsZh: ["康斯坦丁·布朗库西 (Constantin Brancusi)", "阿尔贝托·贾科梅蒂 (Alberto Giacometti)", "让·阿尔普 (Jean Arp)", "瑙姆·加博 (Naum Gabo)"],
    correctAnswer: 0,
    explanationEn: "Constantin Brancusi created 'Bird in Space' starting in 1923, reducing the bird not to its realistic anatomical plumage, but to an aerodynamic bronze curve radiating vertical ascension and optical light.",
    explanationZh: "罗马尼亚裔法籍雕塑巨匠康斯坦丁·布朗库西于1923年起雕琢《空间中的鸟》，摒弃解剖具象外壳，以极致镜面反光的修长曲线提炼出摆脱重力、直冲霄汉的“飞翔之纯粹意象”。",
    tags: ["VisualID", "Brancusi", "Sculpture", "Modernism", "Bird in Space"],
    difficulty: 1
  },
  {
    id: "arched_070",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Identify the compact, primitive stone carving of two lovers locked in a geometric cubic embrace ('The Kiss') created in 1907-1908 by:",
    questionZh: "1907-1908年以整块未经繁琐打磨的原始石灰石雕刻、两位恋人紧密相拥融为一体的几何块体雕塑《吻》（The Kiss）作者是：",
    optionsEn: ["Constantin Brancusi", "Auguste Rodin", "Aristide Maillol", "Jacob Epstein"],
    optionsZh: ["康斯坦丁·布朗库西 (Constantin Brancusi)", "奥古斯特·罗丹 (Auguste Rodin)", "阿里斯蒂德·马约尔 (Aristide Maillol)", "雅各布·爱泼斯坦 (Jacob Epstein)"],
    correctAnswer: 0,
    explanationEn: "Brancusi's 'The Kiss' (1907-1908) broke decisively with Rodin's dramatic theatrical modeling, returning to direct carving (taille directe) preserving the original integrity of the rectangular stone block.",
    explanationZh: "布朗库西在离开罗丹画室后创作《吻》（1907-1908），摆脱了学院派与罗丹繁复的泥塑翻铜，回归直接石雕（Taille directe），用极简对称几何线条保留了石块本初的力量与温情。",
    tags: ["VisualID", "Brancusi", "The Kiss", "Direct Carving", "Sculpture"],
    difficulty: 2
  },
  {
    id: "arched_071",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Which Italian Futurist master created the dynamic 1913 bronze sculpture 'Unique Forms of Continuity in Space', featuring a striding, flame-winged humanoid figure depicted on the Italian 20-cent euro coin?",
    questionZh: "被印在意大利20欧分硬币背面、塑造了一尊肌肉如火焰撕裂气流破空迈步前行的人形青铜雕塑《空间中连续性的唯一形体》（1913）作者是：",
    optionsEn: ["Umberto Boccioni", "Giacomo Balla", "Fortunato Depero", "Arturo Martini"],
    optionsZh: ["翁贝托·薄邱尼 (Umberto Boccioni)", "贾科莫·巴拉 (Giacomo Balla)", "福图纳托·德佩罗 (Fortunato Depero)", "阿尔图罗·马蒂尼 (Arturo Martini)"],
    correctAnswer: 0,
    explanationEn: "Umberto Boccioni created 'Unique Forms of Continuity in Space' in 1913, synthesizing Futurist 'lines of force' and bodily movement through air into aerodynamic cast bronze surfaces.",
    explanationZh: "翁贝托·薄邱尼于1913年创作《空间中连续性的唯一形体》，将物体运动与周围空间气流交织的力量线凝固在青铜曲面之中，被公认为未来主义雕塑最高典范。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Umberto_Boccioni_1913_Unique_Forms_of_Continuity_in_Space.jpg/800px-Umberto_Boccioni_1913_Unique_Forms_of_Continuity_in_Space.jpg",
    fallbackImage: "/images/artworks/unique-forms.jpg",
    tags: ["VisualID", "Boccioni", "Futurism", "Unique Forms", "Sculpture"],
    difficulty: 1
  },
  {
    id: "arched_072",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Who painted 'The City Rises' (La città che sale, 1910), capturing the frenetic urban modernization of Milan through monumental galloping draft horses, scaffolding, and swirling Divisionist light?",
    questionZh: "在1910年创作《上升的城市》（La città che sale），以狂暴飞奔的巨硕红马、脚手架与旋转的分色主义笔触展现米兰现代化都会建设热潮的未来主义大师是：",
    optionsEn: ["Umberto Boccioni", "Carlo Carrà", "Gino Severini", "Luigi Russolo"],
    optionsZh: ["翁贝托·薄邱尼 (Umberto Boccioni)", "卡洛·卡拉 (Carlo Carrà)", "吉诺·塞韦里尼 (Gino Severini)", "路易吉·鲁索洛 (Luigi Russolo)"],
    correctAnswer: 0,
    explanationEn: "Boccioni painted 'The City Rises' in 1910, depicting the industrial growth of Milan with workers straining beside towering workhorses amidst newly electrified power station construction.",
    explanationZh: "薄邱尼于1910年创作《上升的城市》，描绘米兰近郊变电所与现代楼宇施工现场，巨马奔腾与工人的劳作在绚烂光影中融为一体，宣告未来工业都市的崛起。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_City_Rises_by_Umberto_Boccioni_1910.jpg/800px-The_City_Rises_by_Umberto_Boccioni_1910.jpg",
    fallbackImage: "/images/artworks/city-rises.jpg",
    tags: ["VisualID", "Boccioni", "Futurism", "City Rises"],
    difficulty: 2
  },
  {
    id: "arched_073",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which Belgian Surrealist created 'The Treachery of Images' (1929), featuring a photorealistic briar pipe above the cursive text 'Ceci n'est pas une pipe' ('This is not a pipe')?",
    questionZh: "比利时超现实主义宗师中，在1929年绘制了一支逼真烟斗并在下方书写优雅花体法文“这不是一支烟斗”（Ceci n'est pas une pipe）的大师是：",
    optionsEn: ["René Magritte", "Paul Delvaux", "Marcel Broodthaers", "James Ensor"],
    optionsZh: ["勒内·马格里特 (René Magritte)", "保罗·德尔沃 (Paul Delvaux)", "马塞尔·布罗达斯 (Marcel Broodthaers)", "詹姆斯·恩索尔 (James Ensor)"],
    correctAnswer: 0,
    explanationEn: "René Magritte painted 'The Treachery of Images' (1929) to interrogate the epistemological gap between an actual physical object, its painted linguistic signifier, and its visual representation.",
    explanationZh: "勒内·马格里特于1929年创作《图像的背叛》，画中只是一幅由颜料构成的烟斗图像而无法填丝点燃，深刻揭示了语言概念、视觉符号与客观实体之间的裂隙与张力。",
    tags: ["VisualID", "Magritte", "Surrealism", "Treachery of Images"],
    difficulty: 1
  },
  {
    id: "arched_074",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which iconic painting by René Magritte depicts a man in an overcoat and bowler hat standing before a sea wall with his facial features obscured by a hovering green apple?",
    questionZh: "马格里特哪幅广为人知的代表作描绘了一位头戴黑色圆顶硬礼帽、身着风衣的男子站立在矮墙海景前，面容恰好被一颗悬浮的青苹果遮挡？",
    optionsEn: [
      "The Son of Man (Le fils de l'homme, 1964)",
      "Golconda",
      "The False Mirror",
      "The Lovers"
    ],
    optionsZh: [
      "《人类之子》(The Son of Man / Le fils de l'homme)",
      "《戈尔孔达》(Golconda / 雨燕人)",
      "《错误的镜子》",
      "《爱人》"
    ],
    correctAnswer: 0,
    explanationEn: "Magritte painted 'The Son of Man' in 1964 as a self-portrait exploring how visible things continually hide other visible things, sparking curious desire to see what is hidden.",
    explanationZh: "马格里特于1964年创作自画像《人类之子》，男子目光被垂悬绿苹果掩蔽，探讨了“我们所看见之物总是遮掩着另一件可见之物”的视觉与哲学悖论。",
    tags: ["VisualID", "Magritte", "Surrealism", "Son of Man"],
    difficulty: 1
  },
  {
    id: "arched_075",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "postwar_contemporary",
    questionEn: "Who painted the colossal 1963 comic-book diptych 'Whaam!', depicting a fighter plane destroying an enemy jet in a fiery explosion rendered in Ben-Day dots and primary colors?",
    questionZh: "在1963年创作双联波普巨作《呜嗡！》（Whaam!），直接挪用战争连环画分镜，以大片机械感本戴半调网点（Ben-Day dots）表现战机击毁爆炸瞬间的画家是：",
    optionsEn: ["Roy Lichtenstein", "Andy Warhol", "James Rosenquist", "Keith Haring"],
    optionsZh: ["罗伊·利希滕斯坦 (Roy Lichtenstein)", "安迪·沃霍尔 (Andy Warhol)", "詹姆斯·罗森奎斯特 (James Rosenquist)", "凯斯·哈林 (Keith Haring)"],
    correctAnswer: 0,
    explanationEn: "Roy Lichtenstein appropriated a panel from DC Comics' 'All-American Men of War' to create 'Whaam!' (1963), meticulously simulating commercial photomechanical Ben-Day dots on a monumentally scaled canvas.",
    explanationZh: "罗伊·利希滕斯坦从DC漫画《全美战争英雄》中截取战斗机空战画面，放大至4米长宽画布上，以标志性手工模板仿造工业印刷本戴网点（Ben-Day dots），成为波普艺术标志。",
    tags: ["VisualID", "Roy Lichtenstein", "Pop Art", "Whaam", "Ben Day dots"],
    difficulty: 1
  },
  {
    id: "arched_076",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "postwar_contemporary",
    questionEn: "Which Pop sculptor pioneered colossal 'soft sculptures' of American fast food, including 'Floor Burger' (Giant Hamburger, 1962) made of stitched sailcloth stuffed with foam rubber?",
    questionZh: "开创以缝制帆布、发泡橡胶与乙烯基塑料打造巨型软雕塑，创作了硕大瘫软的《地板汉堡》（Giant Hamburger, 1962）的波普雕塑巨匠是：",
    optionsEn: ["Claes Oldenburg", "George Segal", "Edward Kienholz", "Tom Wesselmann"],
    optionsZh: ["克拉斯·奥登伯格 (Claes Oldenburg)", "乔治·西格尔 (George Segal)", "爱德华·金霍尔茨 (Edward Kienholz)", "汤姆·韦塞尔曼 (Tom Wesselmann)"],
    correctAnswer: 0,
    explanationEn: "Claes Oldenburg subverted classical rigid monumentality by sewing giant 'soft sculptures' of hamburgers, ice cream cones, and typewriters, deflating everyday mass-consumer goods into organic, comic gravity.",
    explanationZh: "克拉斯·奥登伯格于1962年推出《地板汉堡》等软雕塑，将原本坚挺冰冷的商业食物和日用品转化为瘫软下垂的巨大布艺体量，幽默讽刺大众消费社会的膨胀。",
    tags: ["VisualID", "Claes Oldenburg", "Pop Art", "Soft Sculpture", "Floor Burger"],
    difficulty: 2
  },
  {
    id: "arched_077",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Identify the author of the revolutionary non-objective painting 'Black Suprematic Square' (1915), hung high in the corner of the gallery like a traditional Russian Orthodox icon at the 0.10 Exhibition:",
    questionZh: "在1915年彼得格勒“0.10最后一届未来主义画展”上，将一幅极简黑方块像俄罗斯传统东正教圣像般高悬于展厅墙角顶端的至上主义领袖是：",
    optionsEn: ["Kazimir Malevich", "El Lissitzky", "Alexander Rodchenko", "Wassily Kandinsky"],
    optionsZh: ["卡齐米尔·马列维奇 (Kazimir Malevich)", "埃尔·利西茨基 (El Lissitzky)", "亚历山大·罗德琴科 (Alexander Rodchenko)", "瓦西里·康定斯基 (Wassily Kandinsky)"],
    correctAnswer: 0,
    explanationEn: "Kazimir Malevich exhibited 'Black Square' at the 0.10 Exhibition in 1915 in Petrograd, placing it in the sacred 'red corner' (krasny ugol) of the room to proclaim the 'zero of form' and the supremacy of pure feeling.",
    explanationZh: "卡齐米尔·马列维奇于1915年展出《黑方块》，悬挂于居室神圣的“红角”（圣像角），宣称彻底斩断与自然物象的一切纽带，抵达非客观纯粹感性至上境界的“形体之零”。",
    tags: ["VisualID", "Malevich", "Suprematism", "Black Square", "Russian Avant-Garde"],
    difficulty: 1
  },
  {
    id: "arched_078",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Who designed the iconic architectural wooden and iron model for the 'Monument to the Third International' (Tatlin's Tower, 1919-1920), featuring a 400-meter leaning double helix enclosing rotating geometric volumes?",
    questionZh: "设计了400米高倾斜双螺旋钢架、内部悬挂各自按不同周期自转的立方体、金字塔与圆柱体大厅的《第三国际纪念碑》（塔特林之塔）构成主义建筑大师是：",
    optionsEn: ["Vladimir Tatlin", "Konstantin Melnikov", "Moisei Ginzburg", "Ivan Leonidov"],
    optionsZh: ["弗拉基米尔·塔特林 (Vladimir Tatlin)", "康斯坦丁·梅尔尼科夫 (Konstantin Melnikov)", "莫伊谢·金兹堡 (Moisei Ginzburg)", "伊万·列奥尼多夫 (Ivan Leonidov)"],
    correctAnswer: 0,
    explanationEn: "Vladimir Tatlin designed the Monument to the Third International in 1919-1920 as an open steel twin-helix spiral tower taller than the Eiffel Tower, embodying dynamic communist kinetic architecture and material culture.",
    explanationZh: "弗拉基米尔·塔特林于1919-1920年构想《第三国际纪念碑》，斜倚的双螺旋钢构件象征人类向前飞跃的动力，内部旋转玻璃体容纳立法、行政与宣传机构，被誉为构成主义图腾。",
    tags: ["VisualID", "Tatlin", "Constructivism", "Tatlins Tower", "Monument to 3rd International"],
    difficulty: 2
  },
  {
    id: "arched_079",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "20th_avant_garde",
    questionEn: "Which American engineer and artist invented kinetic 'mobiles' consisting of delicately balanced cantilevered wire rods and flat sheet-metal biomorphic shapes moved by air currents?",
    questionZh: "以工程师背景开创精巧悬挂平衡的“活动雕塑”（Mobile），利用悬臂铁丝与剪切薄钢片随自然气流轻盈律动的大师是：",
    optionsEn: ["Alexander Calder", "David Smith", "Isamu Noguchi", "Richard Serra"],
    optionsZh: ["亚历山大·考尔德 (Alexander Calder)", "大卫·史密斯 (David Smith)", "野口勇 (Isamu Noguchi)", "理查德·塞拉 (Richard Serra)"],
    correctAnswer: 0,
    explanationEn: "Alexander Calder trained as a mechanical engineer before inventing kinetic suspended 'mobiles' (named by Marcel Duchamp in 1931), introducing physical real-time movement and chance balance to 20th-century sculpture.",
    explanationZh: "亚历山大·考尔德开创了由杜尚命名的“活动雕塑”（Mobiles），利用支点平衡力学，使有机彩色铁片随室内自然微风悬浮自转，彻底解除了雕塑固定底座与沉重静态传统。",
    tags: ["VisualID", "Calder", "Mobile", "Kinetic Art", "Sculpture"],
    difficulty: 1
  },
  {
    id: "arched_080",
    domain: "visual_id",
    subCategory: "Sculptural Form",
    era: "postwar_contemporary",
    questionEn: "Which British sculptor is renowned worldwide for monumental undulating bronze and marble 'Reclining Figures' pierced with organic interior voids and hollow spaces?",
    questionZh: "以起伏如山川丘壑的抽象《斜倚人体》（Reclining Figure）闻名，并在坚固的青铜与石材中雕凿贯通内部透空孔洞（Pierced Voids）的英国现代雕塑巨擘是：",
    optionsEn: ["Henry Moore", "Barbara Hepworth", "Anthony Caro", "Lynn Chadwick"],
    optionsZh: ["亨利·摩尔 (Henry Moore)", "芭芭拉·赫普沃斯 (Barbara Hepworth)", "安东尼·卡洛 (Anthony Caro)", "林恩·查德威克 (Lynn Chadwick)"],
    correctAnswer: 0,
    explanationEn: "Henry Moore drew inspiration from natural river pebbles, pre-Columbian Chacmool figures, and rolling Yorkshire landscapes to sculpt his iconic pierced reclining females, making negative space as expressive as solid mass.",
    explanationZh: "亨利·摩尔受前哥伦布时期恰克穆尔神像与约克郡起伏丘陵启发，其《斜倚人体》开创性地在实体中开凿空洞（Voids），使实体与负空间光影相通，融汇大自然母体之美。",
    tags: ["VisualID", "Henry Moore", "Sculpture", "Reclining Figure", "Voids"],
    difficulty: 1
  },
  {
    id: "arched_081",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "postwar_contemporary",
    questionEn: "Who painted 'Orange and Yellow' (1956), featuring monumental luminous floating color rectangles with soft, hazy feathered edges designed to elicit spiritual contemplative ecstasy?",
    questionZh: "在1956年创作《橙与黄》（Orange and Yellow），在巨大画布上涂绘两三块边界朦胧晕化、宛如发光浮动的半透明色彩长方形的色域绘画大师是：",
    optionsEn: ["Mark Rothko", "Barnett Newman", "Ad Reinhardt", "Clyfford Still"],
    optionsZh: ["马克·罗斯科 (Mark Rothko)", "巴内特·纽曼 (Barnett Newman)", "阿德·莱因哈特 (Ad Reinhardt)", "克莱福特·斯蒂尔 (Clyfford Still)"],
    correctAnswer: 0,
    explanationEn: "Mark Rothko created monumental Color Field multiforms of soft-edged chromatic rectangles layered with thin washes, aiming to communicate basic human emotions — tragedy, ecstasy, doom — through sublime color vibration.",
    explanationZh: "马克·罗斯科以多层极稀薄的油彩在画布上叠染出边缘柔和羽化的巨幅色块，让观者在沉浸式的近距离注视中体验直击心灵深处的悲剧感、崇高与神圣颤栗。",
    tags: ["VisualID", "Mark Rothko", "Color Field", "Abstract Expressionism"],
    difficulty: 1
  },
  {
    id: "arched_082",
    domain: "visual_id",
    subCategory: "Visual Recognition",
    era: "20th_avant_garde",
    questionEn: "Which late masterpiece by Piet Mondrian (1942-1943) abandoned rigid black grid lines in favor of vibrating, syncopated yellow, red, and blue mosaic squares inspired by Manhattan jazz and subway traffic?",
    questionZh: "皮特·蒙德里安流亡纽约晚期创作的巅峰杰作（1942-1943），打破以往黑色粗线条框，改由黄、红、蓝、灰碎密跳跃方格织就、律动感十足的作品是：",
    optionsEn: [
      "Broadway Boogie Woogie",
      "Victory Boogie Woogie",
      "Composition with Yellow and Blue",
      "Trafalgar Square"
    ],
    optionsZh: [
      "《百老汇爵士乐》(Broadway Boogie Woogie)",
      "《胜利爵士乐》(Victory Boogie Woogie)",
      "《黄与蓝的构图》",
      "《特拉法加广场》"
    ],
    correctAnswer: 0,
    explanationEn: "Mondrian painted 'Broadway Boogie Woogie' in 1942-1943 after emigrating to New York, replacing black outlines with vibrant syncopated yellow bands dotted with primary color accents echoing Manhattan street grids and jazz tempo.",
    explanationZh: "蒙德里安在1942-1943年客居曼哈顿期间创作《百老汇爵士乐》，彻底告别凝重黑线，用黄色正交脉络中闪烁跳跃的原色小方块，淋漓尽致地谱写出曼哈顿网格街道的车流与布吉乌吉摇摆乐节奏。",
    tags: ["VisualID", "Mondrian", "Broadway Boogie Woogie", "De Stijl", "Jazz"],
    difficulty: 1
  },
  {
    id: "arched_083",
    domain: "visual_id",
    subCategory: "Architectural Recognition",
    era: "modern",
    questionEn: "Which Italian Rationalist masterpiece in Como (1932-1936) was designed by Giuseppe Terragni as a pristine geometric cube clad in white Botticino marble following golden-ratio grid proportions?",
    questionZh: "由建筑师朱塞佩·泰拉尼于1932-1936年在科莫设计的意大利理性主义建筑丰碑，以纯白博蒂奇诺大理石立面、黄金分割开窗网格与玻璃中庭构筑纯净立方体的是：",
    optionsEn: [
      "Casa del Fascio in Como",
      "Novocomum Apartment Building",
      "Palazzo della Civiltà Italiana",
      "Casa Rustici in Milan"
    ],
    optionsZh: [
      "科莫法西斯宫 / 法西斯大楼 (Casa del Fascio in Como)",
      "诺沃科蒙公寓 (Novocomum)",
      "意大利文明宫 (Colosseo Quadrato)",
      "米兰鲁斯蒂奇住宅 (Casa Rustici)"
    ],
    correctAnswer: 0,
    explanationEn: "Terragni designed the Casa del Fascio in Como as a perfect 33.2 x 16.6 m prism based on pure mathematical ratios, celebrated for its subtle variations in 3D frame depth, structural glass walls, and rationalist clarity.",
    explanationZh: "朱塞佩·泰拉尼设计的科莫法西斯大楼（现为意税务警察指挥部）严格依照黄金分割网格，四座立面虚实各异却和谐统一，大面积玻璃幕墙与透明中庭使其成为世界理性主义建筑教科书典范。",
    tags: ["VisualID", "Architecture", "Rationalism", "Terragni", "Casa del Fascio"],
    difficulty: 2
  },
  {
    id: "arched_084",
    domain: "visual_id",
    subCategory: "Architectural Recognition",
    era: "modern",
    questionEn: "Identify the iconic white Modernist villa in Poissy, France (1928-1931), designed by Le Corbusier as the purest physical embodiment of his 'Five Points of a New Architecture':",
    questionZh: "勒·柯布西耶在法国普瓦西设计的现代主义白派独立住宅（1928-1931），将“新建筑五点”（底层架空、屋顶花园、自由平面、条形窗、自由立面）完美落地的住宅是：",
    optionsEn: [
      "Villa Savoye",
      "Villa Stein-de Monzie",
      "Villa Cook",
      "Maison La Roche"
    ],
    optionsZh: [
      "萨伏伊别墅 (Villa Savoye)",
      "斯坦因-德·蒙齐别墅 (Villa Stein)",
      "库克别墅 (Villa Cook)",
      "拉罗什住宅 (Maison La Roche)"
    ],
    correctAnswer: 0,
    explanationEn: "Villa Savoye (1929) in Poissy is Le Corbusier's canonical masterpiece, exemplifying pilotis, roof garden, free plan, horizontal ribbon windows, and cantilevered free facade inside a landscape meadow.",
    explanationZh: "萨伏伊别墅（1929）是柯布西耶“居住机器”理念的最高体现。底层纤细立柱架空、水平连续横向长窗通透观景、室内平缓坡道（建筑散步道）直通屋顶花园，堪称现代建筑史上最耀眼的地标。",
    tags: ["VisualID", "Architecture", "Le Corbusier", "Villa Savoye", "Modernism"],
    difficulty: 1
  },
  {
    id: "arched_085",
    domain: "visual_id",
    subCategory: "Architectural Recognition",
    era: "modern",
    questionEn: "Which landmark pavilion at the 1929 International Exposition, designed by Mies van der Rohe, featured an open-flowing plan, cruciform chrome steel columns, golden onyx dorée walls, and Georg Kolbe's 'Dawn' statue by a reflection pool?",
    questionZh: "密斯·凡·德·罗为1929年国际博览会设计的德国国家馆，以流动空间、十字形镀铬钢柱、名贵金色玛瑙石墙与水池边的青铜雕像《晨曦》开创现代空间美学新纪元的是：",
    optionsEn: [
      "The German Pavilion in Barcelona (Barcelona Pavilion)",
      "Tugendhat House in Brno",
      "Farnsworth House in Plano",
      "Crown Hall at IIT"
    ],
    optionsZh: [
      "巴塞罗那博览会德国馆 (Barcelona Pavilion)",
      "捷克布尔诺图根哈特别墅",
      "美国范斯沃斯住宅",
      "伊利诺伊理工学院皇冠大厅"
    ],
    correctAnswer: 0,
    explanationEn: "Ludwig Mies van der Rohe created the Barcelona Pavilion in 1929, seamlessly blending indoor and outdoor space with luxurious polished stone planes (Roman travertine, green alpine marble, golden onyx) and eight cruciform chrome columns.",
    explanationZh: "密斯·凡·德·罗设计的1929年巴塞罗那博览会德国馆摒弃传统封闭房间，利用非承重隔断墙滑移组织流动空间（Flowing Space），八根精钢镀铬十字立柱顶起轻盈屋顶，成为“少即是多”的永恒丰碑。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barcelona_Pavilion%2C_2010.jpg/800px-Barcelona_Pavilion%2C_2010.jpg",
    fallbackImage: "/images/artworks/barcelona-pavilion.jpg",
    tags: ["VisualID", "Architecture", "Mies van der Rohe", "Barcelona Pavilion", "Modernism"],
    difficulty: 1
  }
];

// =========================================================================
// Domain 3: 20th-Century Avant-Garde Differentiation & Modern Architecture (45 questions)
// =========================================================================
export const avantGardeQuestionsPart1 = [
  {
    id: "arched_086",
    domain: "avant_garde",
    subCategory: "Italian Rationalism",
    era: "20th_avant_garde",
    questionEn: "Which group of seven young Milan Polytechnic architecture graduates founded Italian Rationalism (Razionalismo Italiano) in December 1926 with a manifesto series in 'Rassegna Italiana'?",
    questionZh: "1926年12月在《意大利评论》上连续发表四篇理性主义宣言、标志着意大利理性主义建筑运动（Razionalismo）正式诞生的青年建筑师团体是：",
    optionsEn: [
      "Gruppo 7 (Figini, Pollini, Terragni, Frette, Larco, Libera, Rava)",
      "BBPR (Banfi, Belgiojoso, Peressutti, Rogers)",
      "Novecento Italiano Group",
      "Futurist Architectural Guild"
    ],
    optionsZh: [
      "七人小组 / Gruppo 7 (菲吉尼、波利尼、泰拉尼、弗雷特、拉尔科、利贝拉、拉瓦)",
      "BBPR建筑师事务所 (班菲、贝尔焦约索、佩雷苏蒂、罗杰斯)",
      "意大利二十世纪画派社团 (Novecento Italiano)",
      "未来主义建筑行会"
    ],
    correctAnswer: 0,
    explanationEn: "Gruppo 7 was formed in 1926 by seven Milan Polytechnic graduates (including Giuseppe Terragni, Luigi Figini, and Gino Pollini), advocating a synthesis between European modernism and timeless Mediterranean classical proportion.",
    explanationZh: "七人小组（Gruppo 7）由米兰理工大学刚毕业的7位年轻建筑师于1926年组建，倡导将欧洲现代主义逻辑与地中海古典纯粹比例熔铸为一体，开启意大利理性主义大幕。",
    tags: ["AvantGarde", "Architecture", "Rationalism", "Gruppo 7", "Terragni"],
    difficulty: 2
  },
  {
    id: "arched_087",
    domain: "avant_garde",
    subCategory: "Italian Rationalism",
    era: "20th_avant_garde",
    questionEn: "What primary architectural proportioning principle governs the structural grid and facade rhythm of Giuseppe Terragni's Casa del Fascio in Como (1932-1936)?",
    questionZh: "朱塞佩·泰拉尼在科莫法西斯大楼（Casa del Fascio, 1932-1936）的立面开窗网格与柱网划分中，主要遵循了哪种严密的古典几何比例准则？",
    optionsEn: [
      "The Golden Section (Divine Proportion, 1:1.618)",
      "The Modular System of Le Corbusier",
      "Strict square modular arithmetic progression (1:1 only)",
      "Fibonacci irrational helical spiral progression"
    ],
    optionsZh: [
      "黄金分割比 (Golden Section, 1:1.618)",
      "勒·柯布西耶模度理论 (Modulor)",
      "绝对均分的纯正方形加减模数 (1:1)",
      "斐波那契无理数空间渐开线"
    ],
    correctAnswer: 0,
    explanationEn: "Terragni designed the Casa del Fascio using complex proportional subdivisions derived from the Golden Section, establishing a 33.2 x 16.6 m prism whose height equals half its base width.",
    explanationZh: "泰拉尼在科莫法西斯宫中巧妙应用黄金分割比（长宽比与立面虚实窗洞均遵循约1:1.618），将现代钢筋混凝土柱梁骨架与古典几何神圣比例无缝衔接。",
    tags: ["AvantGarde", "Architecture", "Rationalism", "Terragni", "Golden Section"],
    difficulty: 2
  },
  {
    id: "arched_088",
    domain: "avant_garde",
    subCategory: "Italian Rationalism",
    era: "20th_avant_garde",
    questionEn: "Which daring 1927-1929 apartment building in Como, designed by Giuseppe Terragni with rounded glass balconies wrapping its corner, was mockingly dubbed 'Il Transatlantico' (The Ocean Liner)?",
    questionZh: "泰拉尼于1927-1929年在科莫设计的哪座先锋现代公寓，因其转角大胆采用悬挑弧形玻璃圆柱体、被守旧保守派嘲弄为“大西洋邮轮”（Il Transatlantico）？",
    optionsEn: [
      "Novocomum Apartment Building",
      "Casa Rustici in Milan",
      "Villa Bianca in Seveso",
      "Asilo Sant'Elia"
    ],
    optionsZh: [
      "诺沃科蒙公寓 (Novocomum)",
      "米兰鲁斯蒂奇住宅 (Casa Rustici)",
      "塞韦索白别墅 (Villa Bianca)",
      "圣埃利亚幼儿园 (Asilo Sant'Elia)"
    ],
    correctAnswer: 0,
    explanationEn: "Terragni submitted traditional academic drawings to pass municipal building permits, but secretly constructed the radical avant-garde 'Novocomum' (1927-1929) with continuous cantilevered glass cylinders at the corners, sparking an international sensation.",
    explanationZh: "泰拉尼在科莫建造诺沃科蒙公寓时，送审虚构了古典假图纸，施工时却建成了极具俄罗斯构成主义与机器美学特征的弧形玻璃圆角公寓，被誉为意大利现代建筑破冰之作。",
    tags: ["AvantGarde", "Architecture", "Rationalism", "Terragni", "Novocomum"],
    difficulty: 2
  },
  {
    id: "arched_089",
    domain: "avant_garde",
    subCategory: "Italian Rationalism",
    era: "modern",
    questionEn: "Which landmark industrial rationalist complex was designed by Luigi Figini and Gino Pollini between 1934 and 1957 in Ivrea, celebrated for its continuous daylighting glass curtain facades?",
    questionZh: "建筑师路易吉·菲吉尼与吉诺·波利尼于1934至1957年间在伊夫雷亚（Ivrea）为哪家著名工业先驱企业设计了采用全明通透玻璃幕墙的理性主义总部与厂房典范？",
    optionsEn: [
      "Olivetti Headquarters and Factory Complex",
      "Fiat Lingotto Factory in Turin",
      "Pirelli Industrial Plant in Bicocca",
      "Alfa Romeo Factory in Portello"
    ],
    optionsZh: [
      "奥利维蒂打字机厂房与总部建筑群 (Olivetti Complex in Ivrea)",
      "菲亚特灵格托汽车厂 (Fiat Lingotto)",
      "倍耐力比可卡工业园",
      "阿尔法·罗密欧波尔泰洛车间"
    ],
    correctAnswer: 0,
    explanationEn: "Figini & Pollini designed the ICO factory complex for Adriano Olivetti in Ivrea, featuring a revolutionary 100-meter continuous glass curtain wall and human-centered social welfare architecture (now a UNESCO World Heritage site).",
    explanationZh: "菲吉尼与波利尼受人道主义实业家阿德里亚诺·奥利维蒂委托，在伊夫雷亚建造了拥有百米长透亮玻璃幕墙的打字机工业综合体，成为战前及战后结合人本关怀与理性结构的世界遗产。",
    tags: ["AvantGarde", "Architecture", "Rationalism", "Figini Pollini", "Olivetti"],
    difficulty: 2
  },
  {
    id: "arched_090",
    domain: "avant_garde",
    subCategory: "Italian Rationalism",
    era: "postwar_contemporary",
    questionEn: "Which iconic 1958 Milan skyscraper by the studio BBPR reinterpreted medieval Tuscan fortified towers through an overhanging upper residential cantilever supported by diagonal struts?",
    questionZh: "由BBPR建筑事务所于1958年在米兰历史中心落成的哪座地标摩天大楼，以顶部向外悬挑扩张的蘑菇形体量和斜向支撑，现代转译了中世纪托斯卡纳防御城堡？",
    optionsEn: [
      "Torre Velasca",
      "Pirelli Tower (Pirellone)",
      "Torre Galfa",
      "Palazzo Lombardia"
    ],
    optionsZh: [
      "维拉斯加塔楼 (Torre Velasca)",
      "倍耐力大厦 (Pirelli Tower / Gio Ponti)",
      "加尔法塔 (Torre Galfa)",
      "伦巴第大区宫"
    ],
    correctAnswer: 0,
    explanationEn: "BBPR (Banfi, Belgiojoso, Peressutti, Rogers) designed the Torre Velasca in Milan (1956-1958) with an overhanging upper cantilever inspired by Lombard medieval defensive towers like the Sforza Castle, pioneering Neoliberty contextualism.",
    explanationZh: "BBPR事务所设计的维拉斯加塔楼下窄上宽，顶部住宅层向外悬挑由粗壮斜撑托举，巧妙呼应了斯福尔扎城堡等伦巴第中世纪城楼轮廓，成为现代主义与历史文脉对话的传奇里程碑。",
    tags: ["AvantGarde", "Architecture", "BBPR", "Torre Velasca", "Milan"],
    difficulty: 2
  },
  {
    id: "arched_091",
    domain: "avant_garde",
    subCategory: "Italian Rationalism",
    era: "20th_avant_garde",
    questionEn: "What ideological conflict divided Italian architecture in the 1930s between Marcello Piacentini and the Rationalists?",
    questionZh: "20世纪30年代意大利建筑界在法西斯国家工程中，马塞洛·皮亚琴蒂尼（Marcello Piacentini）与理性主义阵营（MIAR）的核心争论焦点是：",
    optionsEn: [
      "Monumental historicist Neoclassicism (Stile Littorio) versus honest functional Modernist tectonic transparency",
      "Handmade Gothic craftsmanship versus Beaux-Arts academic painting",
      "Constructivist kinetic spirals versus Art Nouveau floral curves",
      "Precast concrete panels versus traditional timber log cabin construction"
    ],
    optionsZh: [
      "帝国式折衷古典复兴（国家风格 Stile Littorio）与诚实功能主义现代构造透明度之争",
      "手工中世纪哥特手工艺与学院派古典绘画之争",
      "俄国动态螺旋塔构架与新艺术植物花纹之争",
      "预制轻质混凝土大板与传统原木木屋结构之争"
    ],
    correctAnswer: 0,
    explanationEn: "Marcello Piacentini promoted a bombastic monumental classicism (Stile Littorio) with stripped arches and marble colonnades glorifying the Fascist state, opposing the Rationalists' progressive socialist embrace of international functionalism.",
    explanationZh: "皮亚琴蒂尼代表官方推崇剥离细节但体量膨胀的帝国纪念性古典复古（罗马斗兽场式巨柱假拱），而理性主义者则坚守钢筋混凝土结构诚实表达与欧洲国际主义现代性。",
    tags: ["AvantGarde", "Architecture", "Rationalism", "Piacentini", "Stile Littorio"],
    difficulty: 2
  },
  {
    id: "arched_092",
    domain: "avant_garde",
    subCategory: "Expressionism & Secession",
    era: "20th_avant_garde",
    questionEn: "Which pivotal German Expressionist group was founded in Dresden in 1905 by four architecture students: Ernst Ludwig Kirchner, Fritz Bleyl, Erich Heckel, and Karl Schmidt-Rottluff?",
    questionZh: "1905年由四位德累斯顿理工大学建筑系学生（基希纳、布莱尔、赫克尔、施密特-罗特卢夫）创立的德国表现主义开山社团是：",
    optionsEn: [
      "Die Brücke (The Bridge)",
      "Der Blaue Reiter (The Blue Rider)",
      "Novembergruppe (November Group)",
      "Neue Sachlichkeit (New Objectivity)"
    ],
    optionsZh: [
      "桥社 (Die Brücke)",
      "青骑士社 (Der Blaue Reiter)",
      "十一月小组 (Novembergruppe)",
      "新客观主义社 (Neue Sachlichkeit)"
    ],
    correctAnswer: 0,
    explanationEn: "Die Brücke was founded in Dresden in 1905; its name, inspired by Nietzsche's 'Thus Spoke Zarathustra', symbolized a bridge from decadent bourgeois art to a revolutionary, emotionally authentic future.",
    explanationZh: "桥社（Die Brücke）于1905年在德累斯顿成立，取名自尼采《查拉图斯特拉如是说》中“人类是一座通向未来的桥梁”，以质朴粗粝的木刻版画与狂暴色彩打破学院派桎梏。",
    tags: ["AvantGarde", "Expressionism", "Die Brucke", "Kirchner", "Dresden"],
    difficulty: 1
  },
  {
    id: "arched_093",
    domain: "avant_garde",
    subCategory: "Expressionism & Secession",
    era: "20th_avant_garde",
    questionEn: "What visual techniques and thematic qualities distinctively characterized the art of Die Brücke in Dresden?",
    questionZh: "德累斯顿“桥社”表现主义画家在视觉风格与版画技法上最鲜明的特征是：",
    optionsEn: [
      "Rough, jagged woodcuts, angular distorted silhouettes, acidic contrasting colors, and urban alienation",
      "Smooth academic chiaroscuro, harmonious aerial perspective, and courtly mythology",
      "Pristine primary color grids, orthogonal black lines, and mathematical non-objectivity",
      "Delicate pastel stippling, decorative gold leaf patterns, and serene idyllic landscapes"
    ],
    optionsZh: [
      "粗粝棱角分明的直接木刻、扭曲的人物轮廓、刺目的对比撞色以及现代都会的异化不安",
      "平滑细腻的古典明暗对比法、和谐的大气透视与宫廷神话题材",
      "规整纯净的原色正交网格、黑色直线条与数学式非客观抽象",
      "细腻柔和的粉彩点彩技法、华丽的黄金金箔贴花与宁静田园牧歌"
    ],
    correctAnswer: 0,
    explanationEn: "Die Brücke artists revived primitive woodblock cutting with raw gouges, jagged lines, jarring green and violet flesh tones, and themes of metropolitan psychological tension (e.g., Kirchner's Street Scenes).",
    explanationZh: "桥社艺术家复兴中世纪粗切木刻版画，以刀凿的尖锐折线、带有病态与焦虑感的绿黄狂乱色彩，深刻揭示世纪初工业都市中个体的精神撕裂与性心理压抑。",
    tags: ["AvantGarde", "Expressionism", "Die Brucke", "Woodcut", "Kirchner"],
    difficulty: 2
  },
  {
    id: "arched_094",
    domain: "avant_garde",
    subCategory: "Expressionism & Secession",
    era: "20th_avant_garde",
    questionEn: "How did Munich's Der Blaue Reiter (founded 1911 by Kandinsky and Franz Marc) fundamentally differ in artistic philosophy from Dresden's Die Brücke?",
    questionZh: "1911年由康定斯基与马尔克在慕尼黑创立的“青骑士社”（Der Blaue Reiter），其艺术哲学与德累斯顿“桥社”的根本区别在于：",
    optionsEn: [
      "Der Blaue Reiter pursued transcendental spiritual resonance, musical abstraction, and universal harmony, rather than Die Brücke's physical angst and raw urban eroticism",
      "Der Blaue Reiter rejected painting entirely in favor of industrial factory architecture",
      "Der Blaue Reiter focused purely on photographic documentary realism of the proletariat",
      "Der Blaue Reiter advocated strict state propaganda neoclassicism"
    ],
    optionsZh: [
      "青骑士追求内在精神共鸣、通感音乐抽象与宇宙永恒和谐，而非桥社那种充满肉欲煎熬、都市异化与暴力情绪的宣泄",
      "青骑士彻底放弃绘画，完全转向工业厂房建筑工程设计",
      "青骑士专注于对无产阶级底层苦难进行照相式写实记录",
      "青骑士全面倒向国家官方古典主义宣传壁画"
    ],
    correctAnswer: 0,
    explanationEn: "While Die Brücke channeled visceral angst and primitive figuration, Der Blaue Reiter (Kandinsky, Marc, Klee) explored synesthesia, the spiritual in art, folk icons, and non-representational lyrical abstraction.",
    explanationZh: "康定斯基在《论艺术里的精神》中指引青骑士超越物质表象，将色彩视为敲击心灵的琴键，追求超越具象形骸的崇高灵性共振与抒情抽象宇宙。",
    tags: ["AvantGarde", "Expressionism", "Der Blaue Reiter", "Kandinsky", "Franz Marc"],
    difficulty: 2
  },
  {
    id: "arched_095",
    domain: "avant_garde",
    subCategory: "Constructivism & Suprematism",
    era: "20th_avant_garde",
    questionEn: "What was the fundamental premise of Kazimir Malevich's Suprematism as declared in his 1915 manifesto?",
    questionZh: "卡齐米尔·马列维奇在其1915年发表的《从立体主义到至上主义》宣言中，确立的核心美学纲领是：",
    optionsEn: [
      "The supremacy of pure feeling and non-objective geometry over any imitation of external reality",
      "The utilitarian subordination of fine art to industrial manufacturing and engineering",
      "The photographic glorification of military aviation and industrial labor",
      "The restoration of classical Byzantine iconography in domestic spaces"
    ],
    optionsZh: [
      "纯粹感性至上与纯粹几何抽象，彻底摆脱对客观外部现实任何形式的描摹再现",
      "纯艺术必须绝对服从于实用工业制造与社会主义工程技术（生产主义）",
      "以照相写实主义赞颂现代军事航空与机器流水线劳动",
      "在现代家庭空间中全面复兴传统东正教拜占庭圣像画"
    ],
    correctAnswer: 0,
    explanationEn: "Malevich defined Suprematism as 'the supremacy of pure artistic feeling' emancipated from the dead weight of the real world, reducing form to primary geometric figures (squares, circles, crosses) floating in cosmic white space.",
    explanationZh: "马列维奇宣告至上主义是“艺术中纯粹感觉的至高无上”，彻底卸下具象现实世界的重担，让黑方块、圆与十字在纯白无限的虚空宇宙中漂浮运动。",
    tags: ["AvantGarde", "Suprematism", "Malevich", "Russian Avant-Garde"],
    difficulty: 2
  },
  {
    id: "arched_096",
    domain: "avant_garde",
    subCategory: "Constructivism & Suprematism",
    era: "20th_avant_garde",
    questionEn: "How did Russian Constructivism (Tatlin, Rodchenko, Stepanova) diametrically oppose Malevich's Suprematism?",
    questionZh: "以塔特林、罗德琴科与斯捷潘诺娃为首的俄罗斯“构成主义”，在理念上如何与马列维奇的“至上主义”产生根本针锋相对的分歧？",
    optionsEn: [
      "Constructivism rejected spiritual, metaphysical contemplation, demanding that artists become engineer-constructors producing functional utilitarian objects (tekhnika, faktura, konstruktsiya) for communist society",
      "Constructivism demanded a return to ancient Greek marble carving",
      "Constructivism banned all industrial materials like iron, glass, and plywood",
      "Constructivism advocated pure romantic easel landscape painting"
    ],
    optionsZh: [
      "构成主义彻底唾弃形而上的唯灵论沉思，要求艺术家化身技术工程师与制造者，直接投入为新社会服务的功能性工业设计、建筑与实用物品（材质、结构、技术）",
      "构成主义主张退回古希腊大理石传统圆雕手工传统",
      "构成主义明令禁止使用任何钢材、平板玻璃与胶合板等现代工业材料",
      "构成主义主张退居画室纯粹从事浪漫主义风景油画"
    ],
    correctAnswer: 0,
    explanationEn: "Constructivists declared 'Death to Art!' and easel painting in 1921, demanding 'Productivism' where material truth (faktura) and industrial construction served the collective practical needs of daily Soviet life.",
    explanationZh: "构成主义者在1921年莫斯科艺术文化研究所宣告架上绘画死亡，提出“艺术走向生产”，主张材料的质感（Faktura）与真实建构必须服务于大众衣食住行、排版与建筑工业。",
    tags: ["AvantGarde", "Constructivism", "Tatlin", "Rodchenko", "Productivism"],
    difficulty: 2
  },
  {
    id: "arched_097",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "20th_avant_garde",
    questionEn: "Which state-sponsored Moscow avant-garde art and technical school, founded in 1920 by decree of Lenin, served as the direct Russian counterpart to the German Bauhaus?",
    questionZh: "1920年由列宁签署法令在莫斯科成立、在设计教学体系上与德国包豪斯遥相呼应的俄罗斯高等艺术暨技术创作学校是：",
    optionsEn: [
      "Vkhutemas (Higher Art and Technical Studios)",
      "Inkhuk (Institute of Artistic Culture)",
      "Stieglitz Museum Academy",
      "Imperial Academy of Arts in Petrograd"
    ],
    optionsZh: [
      "呼捷玛斯 / Vkhutemas (莫斯科高等艺术暨技术工作室)",
      "因库克 / Inkhuk (艺术文化研究所)",
      "施蒂格利茨实用艺术学院",
      "彼得格勒帝国美术学院"
    ],
    correctAnswer: 0,
    explanationEn: "Vkhutemas (1920-1930) was the premier Soviet state design institute with 2,500 students, organized into faculties of Architecture, Wood, Metal, Ceramics, Graphics, and Textiles, mirroring and collaborating with the Bauhaus.",
    explanationZh: "呼捷玛斯（Vkhutemas）设有基础课程与建筑、金属、木工、纺织等工科院系，由康定斯基、罗德琴科、利西茨基等执教，被誉为“俄罗斯的包豪斯”。",
    tags: ["AvantGarde", "Vkhutemas", "Bauhaus", "Constructivism", "Design Education"],
    difficulty: 2
  },
  {
    id: "arched_098",
    domain: "avant_garde",
    subCategory: "Expressionism & Secession",
    era: "19th_century",
    questionEn: "Which French regional center of Art Nouveau was founded in 1901 by Émile Gallé, Louis Majorelle, and Eugène Vallin, renowned for organic plant marquetry furniture and acid-etched cameo glass?",
    questionZh: "1901年由玻璃大师加莱（Émile Gallé）与家具大师马若雷勒（Louis Majorelle）共同创立、以洛林植物有机藤蔓造型与套色酸蚀玻璃闻名的新艺术运动重要流派是：",
    optionsEn: [
      "The Nancy School (École de Nancy)",
      "The Glasgow Four",
      "The Vienna Secession",
      "The Barcelona Modernisme Guild"
    ],
    optionsZh: [
      "南锡学派 (École de Nancy)",
      "格拉斯哥四人组 (Glasgow Four)",
      "维也纳分离派 (Vienna Secession)",
      "巴塞罗那加泰罗尼亚现代主义公会"
    ],
    correctAnswer: 0,
    explanationEn: "The École de Nancy (Alliance Provinciale des Industries d'Art) in Lorraine celebrated natural botanical forms (insects, orchids, ginkgo leaves) in luxurious carved wooden furniture, wrought iron, and multi-layered blown cameo glassware.",
    explanationZh: "南锡学派立足法国东北部洛林地区，将显微镜下的植物茎脉、蜻蜓、兰花等大自然生态转化为流光溢彩的套色浮雕玻璃瓶与流线雕刻家具，成为法国新艺术鼎盛象征。",
    tags: ["AvantGarde", "Art Nouveau", "Ecole de Nancy", "Galle", "Majorelle"],
    difficulty: 2
  },
  {
    id: "arched_099",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which Catalan Modernisme genius designed the Sagrada Família, Casa Batlló, and Park Güell, pioneering structural catenary arches and 'trencadís' ceramic tile mosaics?",
    questionZh: "设计了圣家族大教堂、巴特罗之家与米拉之家，开创悬链线抛物线拱（Catenary Arches）与碎瓷拼贴（Trencadís）工艺的加泰罗尼亚现代主义巨匠是：",
    optionsEn: ["Antoni Gaudí", "Lluís Domènech i Montaner", "Josep Puig i Cadafalch", "Josep Maria Jujol"],
    optionsZh: ["安东尼·高迪 (Antoni Gaudí)", "路易斯·多梅内克·蒙塔内尔 (Lluís Domènech i Montaner)", "何塞普·普伊格·卡达法尔克 (Josep Puig i Cadafalch)", "何塞普·玛丽亚·茹若尔 (Josep Maria Jujol)"],
    correctAnswer: 0,
    explanationEn: "Antoni Gaudí revolutionized architecture by calculating structural equilibrium using inverted hanging weighted cord models (catenary arches) and embellishing undulating organic stone surfaces with colorful broken glazed tiles (trencadís).",
    explanationZh: "安东尼·高迪利用颠倒倒吊重力绳索模型推导出最合理的反向纯受压悬链线拱，打破直线死板秩序，将巴塞罗那打造成充满加泰罗尼亚民族自豪感与自然有机生命的幻境。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg",
    fallbackImage: "/images/artworks/sagrada-familia.jpg",
    tags: ["AvantGarde", "Architecture", "Gaudi", "Catalan Modernisme", "Catenary Arch"],
    difficulty: 1
  },
  {
    id: "arched_0100",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which Catalan architect designed the breathtaking Palau de la Música Catalana in Barcelona (1905-1908), featuring an immense inverted glass skylight dome framed in exposed ironwork?",
    questionZh: "设计了巴塞罗那加泰罗尼亚音乐宫（Palau de la Música Catalana, 1905-1908）、以其倒垂的水滴状彩色玻璃穹顶与外露雕花钢构架享誉世界的建筑大师是：",
    optionsEn: [
      "Lluís Domènech i Montaner",
      "Antoni Gaudí",
      "Josep Puig i Cadafalch",
      "Enric Sagnier"
    ],
    optionsZh: [
      "路易斯·多梅内克·蒙塔内尔 (Lluís Domènech i Montaner)",
      "安东尼·高迪 (Antoni Gaudí)",
      "何塞普·普伊格·卡达法尔克 (Josep Puig i Cadafalch)",
      "恩里克·萨涅尔 (Enric Sagnier)"
    ],
    correctAnswer: 0,
    explanationEn: "Domènech i Montaner built the Palau de la Música Catalana as a masterwork of Catalan Modernisme, blending structural steel skeleton curtains with floral stained glass and exuberant sculptural ornament (UNESCO World Heritage).",
    explanationZh: "多梅内克·蒙塔内尔在加泰罗尼亚音乐宫中开创性地采用大跨度钢框架与玻璃幕墙，中央倒悬金黄色玻璃天窗如同光芒四射的太阳，被联合国教科文组织列入世界文化遗产。",
    tags: ["AvantGarde", "Architecture", "Catalan Modernisme", "Domenech i Montaner", "Palau Musica"],
    difficulty: 2
  },
  {
    id: "arched_101",
    domain: "avant_garde",
    subCategory: "Expressionism & Secession",
    era: "19th_century",
    questionEn: "Which architect designed the iconic Vienna Secession Building (1898), featuring the motto 'Der Zeit ihre Kunst, der Kunst ihre Freiheit' beneath a gilded openwork dome of laurel leaves ('the golden cabbage')?",
    questionZh: "设计了维也纳分离派会馆（Secession Building, 1898），在入口上方镌刻“时代有其艺术，艺术有其自由”，并以金色镂空月桂树叶圆顶闻名的奥地利建筑师是：",
    optionsEn: ["Joseph Maria Olbrich", "Otto Wagner", "Josef Hoffmann", "Adolf Loos"],
    optionsZh: ["约瑟夫·玛丽亚·欧尔布里希 (Joseph Maria Olbrich)", "奥托·瓦格纳 (Otto Wagner)", "约瑟夫·霍夫曼 (Josef Hoffmann)", "阿道夫·路斯 (Adolf Loos)"],
    correctAnswer: 0,
    explanationEn: "Joseph Maria Olbrich, a pupil of Otto Wagner, designed the white cubic Secession Pavilion in 1898 as a temple of art crowned with a gilded laurel leaf dome, housing Gustav Klimt's famous Beethoven Frieze.",
    explanationZh: "约瑟夫·玛丽亚·欧尔布里希设计了纯白立方体体量的分离派展览馆，顶部冠以由三千片铜镀金月桂叶构成的镂空穹顶（被维也纳人戏称为金甘蓝），地下室永久陈列克里姆特的《贝多芬饰带》。",
    tags: ["AvantGarde", "Architecture", "Vienna Secession", "Olbrich", "Klimt"],
    difficulty: 2
  },
  {
    id: "arched_102",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "Which masterpiece of early modern functionalism by Otto Wagner in Vienna (1904-1906) featured thin marble facade slabs bolted in place with exposed aluminum-capped rivets and a glass-vaulted banking hall?",
    questionZh: "奥托·瓦格纳在维也纳设计的哪座早期现代功能主义划时代巨作（1904-1906），在外墙直接露出固结大理石薄板的铝制铆钉，并在营业大厅采用透亮弧形玻璃天窗与双层热风柱？",
    optionsEn: [
      "Austrian Postal Savings Bank (Postsparkasse)",
      "Majolikahaus on Linke Wienzeile",
      "Kirche am Steinhof",
      "Karlsplatz Stadtbahn Station"
    ],
    optionsZh: [
      "奥地利邮政储蓄银行 (Postsparkasse)",
      "维也纳左岸马约利卡公寓 (Majolikahaus)",
      "施泰因霍夫教堂 (Kirche am Steinhof)",
      "卡尔广场轻轨车站"
    ],
    correctAnswer: 0,
    explanationEn: "Otto Wagner's Postsparkasse (1904-1906) discarded heavy stone masonry in favor of thin stone cladding visibly fastened by 17,000 aluminum bolts, honestly celebrating structural technology and hygiene.",
    explanationZh: "奥托·瓦格纳在邮政储蓄银行中打破厚重承重石墙虚假假象，直接裸露固定花岗岩与大理石薄板的1.7万颗铝制螺栓铆钉，大厅以无任何浮夸雕饰的铸铁双层玻璃穹顶宣告现代建筑的诞生。",
    tags: ["AvantGarde", "Architecture", "Otto Wagner", "Postsparkasse", "Modernism"],
    difficulty: 2
  },
  {
    id: "arched_103",
    domain: "avant_garde",
    subCategory: "Expressionism & Secession",
    era: "modern",
    questionEn: "Which landmark palace in Brussels (1905-1911) was designed by Josef Hoffmann for banker Adolphe Stoclet as the supreme culmination of the 'Gesamtkunstwerk' (total work of art) featuring Gustav Klimt's mosaic friezes?",
    questionZh: "由约瑟夫·霍夫曼在布鲁塞尔设计（1905-1911），将建筑、家具、银器及克里姆特亲自绘制的马赛克壁画融为一体、被公认为“总体艺术杰作”（Gesamtkunstwerk）巅峰的是：",
    optionsEn: [
      "Palais Stoclet",
      "Sanatorium Purkersdorf",
      "Villa Primavesi",
      "Villa Beer"
    ],
    optionsZh: [
      "斯托克莱宫 (Palais Stoclet in Brussels)",
      "普克斯多夫疗养院 (Sanatorium Purkersdorf)",
      "普里马韦西别墅 (Villa Primavesi)",
      "比尔别墅 (Villa Beer)"
    ],
    correctAnswer: 0,
    explanationEn: "Josef Hoffmann and the Wiener Werkstätte realized the Palais Stoclet in Brussels with absolute geometric rectilinear precision, Norwegian marble facades trimmed in gilded bronze, and Klimt's dining room 'Tree of Life' mosaic frieze.",
    explanationZh: "斯托克莱宫由霍夫曼携维也纳工坊全员耗时六年打造，外部覆盖挪威白大理石并以镀金青铜包边，餐厅内嵌克里姆特黄金时期的《生命之树》马赛克壁画，是欧洲现代主义初期的无价瑰宝。",
    tags: ["AvantGarde", "Architecture", "Vienna Secession", "Palais Stoclet", "Hoffmann", "Klimt"],
    difficulty: 2
  },
  {
    id: "arched_104",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "Which Viennese architectural pioneer wrote the scathing 1908 polemic 'Ornament and Crime' (Ornament und Verbrechen) and developed the 3D interlocking 'Raumplan' spatial design method?",
    questionZh: "在1908年撰写颠覆性檄文《装饰即罪恶》（Ornament und Verbrechen），并开创由不同标高立体相互咬合交错的“空间规划”（Raumplan）的维也纳现代建筑先锋是：",
    optionsEn: ["Adolf Loos", "Peter Behrens", "Hendrik Petrus Berlage", "Tony Garnier"],
    optionsZh: ["阿道夫·路斯 (Adolf Loos)", "彼得·贝伦斯 (Peter Behrens)", "亨德里克·贝尔拉格 (Hendrik Petrus Berlage)", "托尼·加尼耶 (Tony Garnier)"],
    correctAnswer: 0,
    explanationEn: "Adolf Loos condemned surface applied ornament as a sign of cultural degeneracy in his 1908 essay 'Ornament and Crime', designing austere unadorned exteriors with complex 3D split-level interior volumes ('Raumplan') such as Villa Müller in Prague.",
    explanationZh: "阿道夫·路斯痛斥非生产性的附着装饰是劳民伤财的文明退化，其设计的普拉哈穆勒别墅与维也纳施泰纳住宅外观极简冷峻，内部则通过不同净高的功能性三维空间错层联动（Raumplan）。",
    tags: ["AvantGarde", "Architecture", "Adolf Loos", "Ornament and Crime", "Raumplan"],
    difficulty: 2
  },
  {
    id: "arched_105",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which building in Chicago (1884-1885), engineered by William Le Baron Jenney, is widely recognized as the world's first skyscraper utilizing an internal metal skeleton frame that carried exterior masonry walls?",
    questionZh: "由威廉·勒·巴隆·珍妮设计建于芝加哥（1884-1885），世界建筑史上公认第一座采用完全承重内部铁钢结构骨架支撑自承重外墙的现代摩天大楼是：",
    optionsEn: [
      "Home Insurance Building",
      "Monadnock Building",
      "Rookery Building",
      "Reliance Building"
    ],
    optionsZh: [
      "家庭保险大楼 (Home Insurance Building)",
      "莫纳德诺克大厦 (Monadnock Building)",
      "鲁克里大厦 (Rookery Building)",
      "信赖大厦 (Reliance Building)"
    ],
    correctAnswer: 0,
    explanationEn: "Jenney's Home Insurance Building in Chicago used cast-iron and Bessemer structural steel columns embedded in masonry, freeing external walls from load-bearing thickness and inaugurating the modern skyscraper era.",
    explanationZh: "珍妮在家庭保险大楼中首次使用铸铁立柱与贝塞麦转炉钢梁形成整体内骨架，外墙不再作为沉重的承重厚墙，从而允许开设大面积采光窗，揭开芝加哥学派与摩天楼时代序幕。",
    tags: ["AvantGarde", "Architecture", "Chicago School", "Jenney", "Skyscraper", "Steel Frame"],
    difficulty: 1
  },
  {
    id: "arched_106",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which Chicago School architect coined the famous functionalist dictum 'Form ever follows function' in his 1896 essay 'The Tall Office Building Artistically Considered'?",
    questionZh: "在1896年论文《高层办公楼的艺术考量》中提出举世闻名的现代设计格言“形式永远追随功能”（Form ever follows function）的芝加哥学派代表人物是：",
    optionsEn: ["Louis Sullivan", "Frank Lloyd Wright", "Daniel Burnham", "John Wellborn Root"],
    optionsZh: ["路易斯·沙利文 (Louis Sullivan)", "弗兰克·劳埃德·赖特 (Frank Lloyd Wright)", "丹尼尔·伯纳姆 (Daniel Burnham)", "约翰·维尔伯恩·鲁特 (John Wellborn Root)"],
    correctAnswer: 0,
    explanationEn: "Louis Sullivan formulated 'form ever follows function' to articulate that a skyscraper's exterior tripartite articulation (base, shaft, attic) should naturally derive from its internal human and mechanical functions.",
    explanationZh: "路易斯·沙利文确立了“形式追随功能”金科玉律，其设计的圣路易斯温赖特大厦与芝加哥卡森·皮里·斯科特百货商店以经典三段式（入口基座、垂直标准层、出檐顶部）展现钢结构内部逻辑。",
    tags: ["AvantGarde", "Architecture", "Chicago School", "Louis Sullivan", "Form follows function"],
    difficulty: 1
  },
  {
    id: "arched_107",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "What technological distinction sets Burnham and Root's Monadnock Building (1891) in Chicago apart in skyscraper history?",
    questionZh: "伯纳姆与鲁特在芝加哥设计的莫纳德诺克大厦（Monadnock Building, 1891），在世界摩天大楼建筑工程技术史上的独特分水岭地位是：",
    optionsEn: [
      "It was the tallest commercial office building ever erected with load-bearing masonry walls (16 stories with 6-foot thick ground-floor brick)",
      "It was the first high-rise building constructed entirely of prestressed reinforced concrete",
      "It was the earliest residential tower with aluminum curtain walls",
      "It introduced the world's first external diagonal wind-bracing trusses"
    ],
    optionsZh: [
      "它是人类历史上建造的最高完全由传统砌体自承重的砖石商用摩天大楼（高16层，底层砖墙厚达1.8米）",
      "它是世界上首座全部采用预应力钢筋混凝土建造的高层塔楼",
      "它是世界上最早采用全铝合金连续悬挂幕墙的高层公寓",
      "它开创了世界上首个外露大型对角X型防风剪刀撑桁架系统"
    ],
    correctAnswer: 0,
    explanationEn: "The 16-story Monadnock Building pushed traditional masonry engineering to its absolute physical limits: without a steel skeleton, its ground floor brick walls had to be six feet thick to support the immense vertical weight above.",
    explanationZh: "莫纳德诺克大厦（北翼）代表传统承重砖石砌体建筑的高度极限。由于没有采用轻质钢框架，其一层底层墙厚达1.8米，促使建筑界彻底转向骨架结构体系。",
    tags: ["AvantGarde", "Architecture", "Chicago School", "Monadnock", "Masonry"],
    difficulty: 2
  },
  {
    id: "arched_108",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "20th_avant_garde",
    questionEn: "When Walter Gropius founded the State Bauhaus in Weimar in April 1919, what central ideological goal was proclaimed in his Founding Manifesto?",
    questionZh: "瓦尔特·格罗皮乌斯于1919年4月在魏玛创立国立包豪斯学院时，在其建校宣言中宣告的核心办学理想是：",
    optionsEn: [
      "The ultimate aim of all visual arts is the complete building; dissolving the arrogant barrier between craftsman and artist in a unified collaborative guild",
      "Promoting mechanical reproduction of classical Roman oil painting copies for working-class homes",
      "Restoring the medieval feudal guilds to eliminate electrical machinery from workshops",
      "Banning all architectural instruction in order to focus exclusively on graphic typography"
    ],
    optionsZh: [
      "一切造型艺术的终极目的就是完整的建筑！打破工匠与艺术家之间傲慢的阶级壁垒，在“大营造”（Baukunst）中实现跨学科协作",
      "推动流水线机械印刷古罗马传统古典油画，以装饰工人阶级廉价住宅",
      "复辟中世纪封建行会，在手工工坊中严禁使用任何现代电力机械",
      "全面取缔建筑学专业教学，将学院完全缩减为平面字体排版专科学校"
    ],
    correctAnswer: 0,
    explanationEn: "Gropius illustrated the 1919 Weimar Manifesto with Lyonel Feininger's 'Cathedral of Socialism' woodcut, calling for artists, sculptors, and craftsmen to unite to create the 'building of the future'.",
    explanationZh: "格罗皮乌斯在费宁格木刻版画《大教堂》衬托下发表宣言：“让我们建立一个没有阶级壁垒的工匠与艺术家新行会，共同构想并创造未来的新建筑大厦！”",
    tags: ["AvantGarde", "Bauhaus", "Gropius", "Manifesto", "Weimar"],
    difficulty: 1
  }
];

export const avantGardeQuestionsPart2 = [
  {
    id: "arched_109",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "20th_avant_garde",
    questionEn: "Who created the foundational preliminary course ('Vorkurs') at the Weimar Bauhaus, focusing on emotional gymnastics, elemental color spheres, and contrasts of rough and smooth materials?",
    questionZh: "在魏玛包豪斯首创“预科基础课程”（Vorkurs），以静思冥想、色彩对比理论及探究材料天然质感为教学核心的瑞士表现主义导师是：",
    optionsEn: ["Johannes Itten", "László Moholy-Nagy", "Josef Albers", "Paul Klee"],
    optionsZh: ["约翰·伊顿 (Johannes Itten)", "拉兹洛·莫霍利-纳吉 (László Moholy-Nagy)", "约瑟夫·阿尔伯斯 (Josef Albers)", "保罗·克利 (Paul Klee)"],
    correctAnswer: 0,
    explanationEn: "Johannes Itten directed the Bauhaus Vorkurs from 1919 to 1923, training students to free their creative intuition through physical exercises, polar contrasts (light/dark, rough/smooth), and his famous 12-part color wheel.",
    explanationZh: "约翰·伊顿于1919至1923年主持包豪斯预科课程，主张通过身体热身运动与极性对比（明暗、软硬、粗滑）唤醒学生的感知天性，后因神秘主义倾向与格罗皮乌斯产生分歧离职。",
    tags: ["AvantGarde", "Bauhaus", "Johannes Itten", "Vorkurs", "Color Theory"],
    difficulty: 2
  },
  {
    id: "arched_110",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "What revolutionary architectural feature characterized the workshop wing of Walter Gropius's 1925-1926 Bauhaus building in Dessau?",
    questionZh: "瓦尔特·格罗皮乌斯设计的德绍包豪斯校舍工坊楼（1925-1926），最震撼世界现代建筑史的先驱结构构造特征是：",
    optionsEn: [
      "A three-story non-load-bearing structural glass curtain wall (Glasvorhangfassade) wrapping continuously around reinforced concrete cantilevered slab edges",
      "Monumental Doric stone colonnades supporting a triangular pediment",
      "Load-bearing solid masonry walls pierced by medieval lancet windows",
      "A massive timber space-frame dome clad in cedar wood shingles"
    ],
    optionsZh: [
      "悬挑于后退混凝土柱网之外、连续三层包裹建筑转角且不承重的全玻璃幕墙 (Glasvorhangfassade)",
      "支撑巨大三角形山花的纪念性多立克古典石柱廊",
      "开凿狭窄哥特尖拱柳叶窗的厚重砖石实墙",
      "外覆雪松木瓦片的大型空间木构穹顶"
    ],
    correctAnswer: 0,
    explanationEn: "Gropius cantilevered the concrete floor slabs beyond the interior columns, allowing the steel-framed glass curtain wall to wrap continuously around corners without any corner masonry support, providing brilliant daylight to student workshops.",
    explanationZh: "格罗皮乌斯将承重钢筋混凝土柱向室内后退，楼板边缘向外悬挑，使无立柱遮挡的三层整体铁框玻璃幕墙（Glasvorhangfassade）晶莹通透地包裹转角，实现了现代建筑内外空间交融与轻盈体量感。",
    tags: ["AvantGarde", "Architecture", "Bauhaus", "Gropius", "Curtain Wall", "Dessau"],
    difficulty: 1
  },
  {
    id: "arched_111",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "modern",
    questionEn: "Which Swiss Marxist architect succeeded Walter Gropius as the second director of the Bauhaus in 1928, prioritizing scientific functionalism under the slogan 'Volksbedarf statt Luxusbedarf' (the people's needs instead of luxury)?",
    questionZh: "1928年接替格罗皮乌斯担任包豪斯第二任校长，提出“人民的需要而非奢华的需要”（Volksbedarf statt Luxusbedarf）并全面强化科学建筑系教学的瑞士建筑师是：",
    optionsEn: ["Hannes Meyer", "Ludwig Mies van der Rohe", "Mart Stam", "Ernst May"],
    optionsZh: ["汉斯·迈耶 (Hannes Meyer)", "路德维希·密斯·凡·德·罗 (Ludwig Mies van der Rohe)", "马特·斯塔姆 (Mart Stam)", "恩斯特·梅 (Ernst May)"],
    correctAnswer: 0,
    explanationEn: "Hannes Meyer directed the Bauhaus from 1928 to 1930, rejecting aesthetic formalism in favor of social utility, low-cost cooperative housing, and systematic ergonomics until his dismissal for political radicalism.",
    explanationZh: "汉斯·迈耶（Hannes Meyer）强调建筑是严谨的组织生活过程而非纯形式游戏，倡导为普通劳工阶级设计平价标准化家具与合作社住宅，极大地强化了包豪斯的社会学与工程学底色。",
    tags: ["AvantGarde", "Bauhaus", "Hannes Meyer", "Functionalism"],
    difficulty: 2
  },
  {
    id: "arched_112",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "modern",
    questionEn: "Who served as the third and final director of the Bauhaus (1930-1933), striving to depoliticize the school before moving it to an abandoned telephone factory in Berlin where it was forced to dissolve by the Nazi regime?",
    questionZh: "在1930至1933年间担任包豪斯第三任兼最后一任校长，在纳粹压力下将学校迁至柏林废弃电话厂最终被迫解散的建筑大师是：",
    optionsEn: ["Ludwig Mies van der Rohe", "Walter Gropius", "Marcel Breuer", "Wassily Kandinsky"],
    optionsZh: ["路德维希·密斯·凡·德·罗 (Ludwig Mies van der Rohe)", "瓦尔特·格罗皮乌斯 (Walter Gropius)", "马塞尔·布劳耶 (Marcel Breuer)", "瓦西里·康定斯基 (Wassily Kandinsky)"],
    correctAnswer: 0,
    explanationEn: "Mies van der Rohe became director in 1930, restructuring the Bauhaus as a private institute focused strictly on architectural technique until Gestapo padlocks forced the faculty to vote for closure in July 1933.",
    explanationZh: "密斯·凡·德·罗于1930年临危受命接任校长，试图以纯粹的建筑与空间构成教学对抗政治干涉；1932年德绍市议会右翼关闭校舍后，密斯自费在柏林坚持办学，直至1933年7月遭纳粹警察查封关闭。",
    tags: ["AvantGarde", "Bauhaus", "Mies van der Rohe", "Berlin", "History"],
    difficulty: 2
  },
  {
    id: "arched_113",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "20th_avant_garde",
    questionEn: "What bicycle component inspired Marcel Breuer in 1925 to create the revolutionary tubular steel Model B3 'Wassily Chair' at the Bauhaus?",
    questionZh: "马塞尔·布劳耶于1925年在包豪斯设计划时代钢管椅“瓦西里椅”（Model B3）时，其灵感直接源于哪种现代交通工具的金属部件？",
    optionsEn: [
      "Bent tubular steel bicycle handlebars (Adler bicycles)",
      "Spoke wheels of an automobile chassis",
      "Cast-iron locomotive steam pistons",
      "Aluminum airplane wing struts"
    ],
    optionsZh: [
      "阿德勒自行车的弯曲无缝冷拔无接缝钢管车把 (Bicycle Handlebars)",
      "汽车底盘钢丝辐条轮毂",
      "蒸汽机车铸铁活塞连杆",
      "双翼螺旋桨飞机的铝合金翼肋撑杆"
    ],
    correctAnswer: 0,
    explanationEn: "Marcel Breuer bought an Adler bicycle in Dessau and marveled at how lightweight yet strong curved cold-drawn tubular steel was; he hired a local plumber to help bend steel tubes into the frame of the Wassily Chair.",
    explanationZh: "布劳耶在德绍骑自行车时顿悟：弯曲的无缝钢管坚韧无比且轻盈，随即与曼内斯曼钢管厂工艺结合，配合皮革拉带设计出著名的“瓦西里椅”（因康定斯基赞赏而命名）。",
    tags: ["AvantGarde", "Bauhaus", "Marcel Breuer", "Wassily Chair", "Tubular Steel"],
    difficulty: 1
  },
  {
    id: "arched_114",
    domain: "avant_garde",
    subCategory: "Industrial Design & Schools",
    era: "20th_avant_garde",
    questionEn: "Which trailblazing female Bauhaus designer became head of the metal workshop in 1928, creating iconic prototypes including the MT 49 tea infuser and adjustable Kandem desk lamps?",
    questionZh: "打破男性垄断并在1928年执掌包豪斯金属工坊、设计了半球形MT 49小巧茶壶与坎登可调台灯等经典工业原型的杰出女设计师是：",
    optionsEn: ["Marianne Brandt", "Gunta Stölzl", "Anni Albers", "Alma Siedhoff-Buscher"],
    optionsZh: ["玛丽安·布兰特 (Marianne Brandt)", "昆塔·斯托尔策尔 (Gunta Stölzl)", "安妮·阿尔伯斯 (Anni Albers)", "阿尔玛·布舍尔 (Alma Siedhoff-Buscher)"],
    correctAnswer: 0,
    explanationEn: "Marianne Brandt was the sole woman in the Bauhaus metal workshop in the 1920s, designing geometrically pure teapots, ashtrays, and lighting fixtures licensed for mass industrial production.",
    explanationZh: "玛丽安·布兰特（Marianne Brandt）以纯粹几何形（球体、圆柱、半球）结合银镍、黄铜与乌木手柄，设计了世界上最昂贵的现代设计拍卖品MT 49茶壶，并成功将包豪斯灯具推向商业规模化量产。",
    tags: ["AvantGarde", "Bauhaus", "Marianne Brandt", "Metalwork", "Industrial Design"],
    difficulty: 2
  },
  {
    id: "arched_115",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "How did 19th-century Historicism and Eclecticism fundamentally differ from the emerging 20th-century Modernist architectural movement?",
    questionZh: "19世纪下半叶盛行的“折衷主义与历史主义”（Historicism & Eclecticism）与20世纪现代主义建筑在对待形式与构造关系上的本质分歧在于：",
    optionsEn: [
      "Historicism masked modern industrial iron and brick structures behind ornamental pastiches of past historical styles (Gothic, Baroque, Renaissance), whereas Modernism demanded honest expression of structure, materials, and internal function",
      "Historicism completely banned all religious and civic buildings",
      "Modernism required all exterior facades to be carved in marble bas-reliefs",
      "Historicism only built lightweight temporary wooden structures"
    ],
    optionsZh: [
      "历史折衷主义将现代铁构架等工业技术掩藏在古希腊罗马、哥特或巴洛克的历史外衣与石膏雕花之后；现代主义则坚决主张形式必须诚实裸露结构材料与内部真实功能",
      "历史折衷主义明令禁止兴建任何宗教大教堂与公共市政建筑",
      "现代主义要求所有外立面必须手工雕琢神话大理石高浮雕",
      "历史折衷主义仅允许搭建临时性的轻质木结构展览用房"
    ],
    correctAnswer: 0,
    explanationEn: "19th-century Eclecticism treated style as an applied, decorative wardrobe selected arbitrarily for status or nostalgia, while the 20th-century Modernist avant-garde stripped away historicist ornament to align form directly with industrial reality.",
    explanationZh: "19世纪折衷主义把建筑风格当成根据业主阶级趣味随意套用的“历史面具”（如火车站外贴哥特尖券、商场外贴巴洛克雕花），现代主义先锋派则发起审美断裂，要求构造逻辑与现代材料本体赤裸可见。",
    tags: ["AvantGarde", "Architecture", "Historicism", "Eclecticism", "Modernism"],
    difficulty: 1
  },
  {
    id: "arched_116",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which opulent monument in Paris, designed by Charles Garnier (1861-1875) during Haussmann's urban renovation, stands as the crowning supreme masterpiece of Second Empire Beaux-Arts Eclecticism?",
    questionZh: "由建筑师夏尔·加尼叶（Charles Garnier）于1861至1875年间在巴黎奥斯曼改造核心区建成的哪座华丽殿堂，被公认为法兰西第二帝国布杂艺术（Beaux-Arts）折衷主义的集大成顶峰？",
    optionsEn: [
      "Palais Garnier (Paris Opera House)",
      "Panthéon in Paris",
      "Gare d'Orsay",
      "Grand Palais"
    ],
    optionsZh: [
      "巴黎歌剧院 / 加尼叶歌剧院 (Palais Garnier)",
      "巴黎先贤祠 (Panthéon)",
      "奥赛火车站 (Gare d'Orsay)",
      "巴黎大皇宫 (Grand Palais)"
    ],
    correctAnswer: 0,
    explanationEn: "Charles Garnier's Opéra de Paris is the quintessential Beaux-Arts monument, layering Neo-Baroque marble colonnades, gilded stucco, polychrome sculpture, and a grand theatrical staircase over a hidden structural iron frame.",
    explanationZh: "加尼叶歌剧院融合了新巴洛克、新古典与新文艺复兴多元折衷语汇，内部拥有华丽的多彩大理石大楼梯与黄金镜厅，同时在拱顶暗处使用了大型工业锻铁桁架支撑，是19世纪布杂学院折衷主义最高范本。",
    tags: ["AvantGarde", "Architecture", "Eclecticism", "Garnier", "Paris Opera"],
    difficulty: 2
  },
  {
    id: "arched_117",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which British architectural theorists campaigned for the Gothic Revival (e.g. Palace of Westminster, 1840-1870) by arguing that medieval Gothic craftsmanship embodied moral and spiritual honesty superior to soulless industrial manufacturing?",
    questionZh: "在19世纪英国哥特复兴运动中（如威斯敏斯特议会大厦），力主中世纪天主教哥特手工建造体现了超越工业机器文明冷酷虚伪之崇高道德与精神诚实性的理论家是：",
    optionsEn: [
      "Augustus Pugin and John Ruskin",
      "Christopher Wren and Inigo Jones",
      "Norman Foster and Richard Rogers",
      "Robert Adam and John Soane"
    ],
    optionsZh: [
      "奥古斯都·普金与约翰·罗斯金 (Augustus Pugin & John Ruskin)",
      "克里斯托弗·雷恩与伊尼戈·琼斯 (Christopher Wren & Inigo Jones)",
      "诺曼·福斯特与理查德·罗杰斯 (Norman Foster & Richard Rogers)",
      "罗伯特·亚当与约翰·索恩 (Robert Adam & John Soane)"
    ],
    correctAnswer: 0,
    explanationEn: "Augustus Welby Pugin ('Contrasts', 1836) and John Ruskin ('The Seven Lamps of Architecture', 1849) asserted that architectural beauty is tied to moral Christian virtue and authentic hand-craftsmanship, making Gothic the only ethical national style.",
    explanationZh: "普金（《对比》）与罗斯金（《建筑的七盏明灯》）深刻批判工业流水线将工人异化为无脑工具，呼吁复兴中世纪石雕木作匠人的虔诚劳动，共同指导了查尔斯·巴里设计的英国议会大厦哥特细节。",
    tags: ["AvantGarde", "Architecture", "Gothic Revival", "Pugin", "Ruskin"],
    difficulty: 2
  },
  {
    id: "arched_118",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "19th_century",
    questionEn: "Which French preservationist architect authored 'Entretiens sur l'architecture' (1863), advocating that iron structural trusses and cast-iron columns should be boldly visible rather than concealed behind classical stonework?",
    questionZh: "在修复巴黎圣母院等古迹之余撰写《建筑学讲义》（Entretiens sur l'architecture, 1863），极力倡导生铁立柱与外露拱肋桁架应当直率展现、深刻启发了高迪与现代主义的法国结构理性主义先锋是：",
    optionsEn: [
      "Eugène Viollet-le-Duc",
      "Henri Labrouste",
      "Victor Baltard",
      "Gustave Eiffel"
    ],
    optionsZh: [
      "欧仁·维奥莱-勒-杜克 (Eugène Viollet-le-Duc)",
      "亨利·拉布鲁斯特 (Henri Labrouste)",
      "维克多·巴尔塔尔 (Victor Baltard)",
      "居斯塔夫·埃菲尔 (Gustave Eiffel)"
    ],
    correctAnswer: 0,
    explanationEn: "Viollet-le-Duc argued in 'Entretiens' that architecture must develop new forms reflecting new industrial materials (iron and masonry combined), inspiring Art Nouveau (Horta, Guimard) and modernist tectonic truth.",
    explanationZh: "维奥莱-勒-杜克在《讲义》中绘制了倾斜铁管支架与砖石相交的大跨度空间构想，坚定提出“新材料必产生新形式”，是连接哥特力学逻辑与现代钢铁结构理性主义的理论枢纽。",
    tags: ["AvantGarde", "Architecture", "Viollet-le-Duc", "Rationalism", "Structural Theory"],
    difficulty: 2
  },
  {
    id: "arched_119",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "industrial",
    questionEn: "What prefabrication innovation allowed Joseph Paxton to erect the monumental Crystal Palace in London in less than nine months for the 1851 Great Exhibition?",
    questionZh: "约瑟夫·帕克斯顿在1851年伦敦第一届万国博览会建造巨大水晶宫（Crystal Palace）时，能在短短不到九个月内完工的革命性技术创举是：",
    optionsEn: [
      "Standardized modular prefabricated cast-iron columns, wrought-iron girders, and uniform glass panes assembled mechanically on site without mortar",
      "Pouring massive monolithic reinforced concrete foundations using steam pumps",
      "Pre-carving Portland stone ashlar blocks by hand in nearby royal quarries",
      "Inflatable rubber tensile membranes anchored by steel cables"
    ],
    optionsZh: [
      "利用温室经验研发的标准模数化预制铸铁立柱、锻铁桁架与统一规格玻璃板，在现场无砂浆完全螺栓干式装配",
      "使用蒸汽泵连续浇筑高强度一体化无缝钢筋混凝土巨型深基础",
      "在皇家采石场由数千名石匠全手工预先雕凿波特兰石灰石砌块",
      "使用钢缆锚固由橡胶充气膜构成的张拉膜结构大厅"
    ],
    correctAnswer: 0,
    explanationEn: "Joseph Paxton adapted his greenhouse engineering (Chatsworth) to design a modular grid of identical cast-iron posts and gutters accommodating 300,000 panes of sheet glass, introducing industrial prefabricated assembly to world architecture.",
    explanationZh: "园艺温室建造专家帕克斯顿采用24英尺（约7.3米）标准模数，利用火车将工厂预制铸铁构件与标准玻璃运至海德公园现场快速螺栓拼装，宣告建筑产业由手工作业迈向现代预制工业化装配时代。",
    tags: ["AvantGarde", "Architecture", "Crystal Palace", "Paxton", "Prefabrication", "Industrial"],
    difficulty: 1
  },
  {
    id: "arched_120",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "Which of the following correctly enumerates Le Corbusier's canonical 'Five Points of a New Architecture' (Les 5 points d'une architecture nouvelle, 1926)?",
    questionZh: "下列哪项准确完整地列出了勒·柯布西耶于1926年发表的“新建筑五点”（Five Points of a New Architecture）？",
    optionsEn: [
      "1. Pilotis (stilts); 2. Roof garden; 3. Free plan; 4. Horizontal ribbon windows; 5. Free facade",
      "1. Massive stone walls; 2. Semicircular arches; 3. Coffered dome; 4. Campanile; 5. Central atrium",
      "1. Steel cantilever trusses; 2. Stained glass rose; 3. Buttress; 4. Bell tower; 5. Slate shingles",
      "1. Wooden log walls; 2. Thatched roof; 3. Central fireplace; 4. Dormer window; 5. Porch"
    ],
    optionsZh: [
      "1. 底层架空柱 (Pilotis)；2. 屋顶花园 (Toit-jardin)；3. 自由平面 (Plan libre)；4. 水平横向长窗 (Fenêtre en longueur)；5. 自由立面 (Façade libre)",
      "1. 厚重砌石实墙；2. 半圆复古拱门；3. 藻井半球穹顶；4. 独立钟楼；5. 露天中央中庭",
      "1. 钢结构大悬挑；2. 染色玻璃玫瑰花窗；3. 飞扶壁；4. 哥特钟楼；5. 鱼鳞状石板瓦",
      "1. 规则原木搭接；2. 坡面茅草屋顶；3. 居中砌砖火炉；4. 欧式老虎窗；5. 环绕回廊木门廊"
    ],
    correctAnswer: 0,
    explanationEn: "Le Corbusier declared the Five Points in 1926 made possible by the reinforced concrete frame: pilotis elevating the living floor, flat roof gardens recovering ground, non-load-bearing walls for flexible interior partition (free plan) and uninterrupted ribbons of light, and an independent curtain facade.",
    explanationZh: "柯布西耶基于钢筋混凝土骨架提出五点新建筑：柱体架空地面让自然穿流；屋顶平顶花园弥补绿化；非承重隔断实现室内自由划分；横向长窗均匀采光；外立面脱离承重自由悬挑构图。",
    tags: ["AvantGarde", "Architecture", "Le Corbusier", "Five Points", "Modernism"],
    difficulty: 1
  },
  {
    id: "arched_121",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "What was Le Corbusier's 'Maison Dom-Ino' (1914), and what structural principle did it establish for 20th-century housing?",
    questionZh: "勒·柯布西耶于1914年提出的“多米诺体系”（Maison Dom-Ino）原型，为20世纪现代住宅结构确立的核心原理是：",
    optionsEn: [
      "A standardized reinforced concrete frame consisting of six slender columns, three flat cantilevered horizontal slabs, and an independent perimeter staircase, completely liberating interior walls from carrying loads",
      "A prefabricated wooden mobile trailer designed for rail transport",
      "A triangular tensile tent supported by central steel masts",
      "A modular brick vaulted masonry dome constructed without mortar"
    ],
    optionsZh: [
      "由六根纤细钢筋混凝土立柱、三块水平平整悬挑楼板与独立轻质阶梯构成的标准化骨架原型，使墙体彻底摆脱承重束缚",
      "专用于铁轨长途运输的装配式原木拖车箱房",
      "由中央钢桅杆拉结钢丝绳索固定的三角形张拉帐篷体系",
      "无需砂浆粘结、依靠砖块自重相互锁扣的拱形双曲面砖穹顶"
    ],
    correctAnswer: 0,
    explanationEn: "Patented in 1914 for rapid post-WWI reconstruction, the Dom-Ino system (playing on 'domus' and domino tiles) decoupled structural support from enclosing partition walls, enabling infinite spatial combinations and modern mass production.",
    explanationZh: "多米诺（Dom-Ino）体系将“柱-板”结构与围护墙体彻底解耦，如同多米诺骨牌般可自由拼合连缀，奠定了现代多层住宅与公建“自由平面与自由立面”的全部工程基石。",
    tags: ["AvantGarde", "Architecture", "Le Corbusier", "Maison Dom-Ino", "Structural Frame"],
    difficulty: 2
  },
  {
    id: "arched_122",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "What anthropomorphic proportioning scale was developed by Le Corbusier in 1948, fusing human bodily stature with the Fibonacci sequence and the Golden Ratio?",
    questionZh: "勒·柯布西耶于1948年出版发表、将成年人身体尺度与斐波那契数列和黄金分割比融为一体的人体工程空间比例体系是：",
    optionsEn: [
      "The Modulor",
      "The Vitruvian Triad",
      "The Ken System",
      "The Raumplan"
    ],
    optionsZh: [
      "模度 / 模数体系 (The Modulor)",
      "维特鲁威三原则 (Vitruvian Triad)",
      "日本榻榻米间矩体系 (Ken System)",
      "空间规划体系 (Raumplan)"
    ],
    correctAnswer: 0,
    explanationEn: "Le Corbusier's Modulor is a scale of proportions based on a standardized 1.83 m (6 foot) tall man with an upraised arm (2.26 m), generating blue and red series measurements to harmonize furniture, room heights, and urban buildings.",
    explanationZh: "勒·柯布西耶以身高1.83米（举臂高达2.26米）的健美男子人体为基准，按照黄金分割递增递减推导出“红尺”与“蓝尺”系列尺寸（The Modulor），并在马赛公寓建筑中全面应用。",
    tags: ["AvantGarde", "Architecture", "Le Corbusier", "Modulor", "Golden Ratio"],
    difficulty: 2
  },
  {
    id: "arched_123",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "20th_avant_garde",
    questionEn: "Which Utrecht residence (1924), designed by Gerrit Rietveld in collaboration with Truus Schröder-Schräder, represents the definitive 3D architectural realization of De Stijl neoplastic principles?",
    questionZh: "由赫里特·里特费尔德（Gerrit Rietveld）于1924年在荷兰乌得勒支设计的哪座私人住宅，被公认为风格派（De Stijl）新造型主义绘画在三维建筑空间中的最纯粹落脚点？",
    optionsEn: [
      "Rietveld Schröder House",
      "Café De Unie in Rotterdam",
      "Van Doesburg House in Meudon",
      "Sonneveld House in Rotterdam"
    ],
    optionsZh: [
      "施罗德住宅 (Rietveld Schröder House in Utrecht)",
      "鹿特丹统一咖啡馆 (Café De Unie)",
      "凡·杜斯堡墨东画室住宅",
      "索内费尔德住宅"
    ],
    correctAnswer: 0,
    explanationEn: "The Rietveld Schröder House realized De Stijl painting in living space: an asymmetrical collage of primary red, yellow, and blue accents, black-and-grey planar slabs, sliding interior partitions, and a corner window that opens completely without a corner post.",
    explanationZh: "施罗德住宅犹如蒙德里安抽象绘画的立体复活：纯白灰黑平板与红黄蓝金属构件交错穿插，二楼采用可推拉滑移隔断实现完全通透自由流动的大开间，转角窗扇外开后无任何角柱遮挡。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rietveld_Schr%C3%B6der_House_in_Utrecht.jpg/800px-Rietveld_Schr%C3%B6der_House_in_Utrecht.jpg",
    fallbackImage: "/images/artworks/piet-mondrian.jpg",
    tags: ["AvantGarde", "Architecture", "De Stijl", "Rietveld", "Schroder House"],
    difficulty: 1
  },
  {
    id: "arched_124",
    domain: "avant_garde",
    subCategory: "Constructivism & Suprematism",
    era: "20th_avant_garde",
    questionEn: "What doctrinal disagreement over composition caused Piet Mondrian to resign in protest from Theo van Doesburg's De Stijl movement in 1924?",
    questionZh: "1924年皮特·蒙德里安愤而宣布退出其亲手共创的荷兰“风格派”，其与领袖特奥·凡·杜斯堡爆发决裂的核心形式争论是：",
    optionsEn: [
      "Van Doesburg introduced 45-degree dynamic diagonal lines ('Elementarism'), which Mondrian viewed as a betrayal of pure orthogonal horizontal and vertical balance",
      "Van Doesburg demanded that De Stijl adopt traditional portrait painting",
      "Mondrian wanted to use curved Art Nouveau floral ornaments",
      "Van Doesburg refused to publish any architectural projects in the journal"
    ],
    optionsZh: [
      "凡·杜斯堡在“要素主义”（Elementarism）中引入45度动态对角斜线，被蒙德里安痛斥为背叛了宇宙永恒水平与垂直正交平衡信条",
      "凡·杜斯堡强制要求风格派改画古典写实肖像画以维持期刊赞助",
      "蒙德里安突然主张在色块中重新加入新艺术运动的植物柔韧曲线",
      "凡·杜斯堡拒绝在《风格派》杂志上刊载任何建筑与家具实物设计方案"
    ],
    correctAnswer: 0,
    explanationEn: "Mondrian believed only strictly orthogonal horizontal and vertical lines could capture cosmic spiritual harmony; when Van Doesburg championed dynamic diagonals in his 1924 'Elementarism' manifesto and paintings, Mondrian quit the group in outrage.",
    explanationZh: "蒙德里安恪守水平与垂直相交代表阴阳与万物宇宙恒常秩序；杜斯堡则认为引入45度倾斜斜线能唤醒现代机械动能与速度，两人的几何美学分歧最终导致风格派分裂走向尾声。",
    tags: ["AvantGarde", "De Stijl", "Mondrian", "Van Doesburg", "Elementarism"],
    difficulty: 2
  },
  {
    id: "arched_125",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "20th_avant_garde",
    questionEn: "Which visionary architect drafted drawings for the 'Città Nuova' (New City) in 1914, depicting towering terraced skyscrapers with external glass elevators and multi-level traffic bridges before dying in WWI at age 28?",
    questionZh: "在1914年绘制《新城市》（Città Nuova）宏伟草图、构想了带有室外高速透明电梯与多层立体分离交通干道之梯级式摩天大楼，随后在28岁战死沙场的未来主义建筑天才先驱是：",
    optionsEn: ["Antonio Sant'Elia", "Mario Chiattone", "Giacomo Balla", "Virgilio Marchi"],
    optionsZh: ["安东尼奥·圣埃利亚 (Antonio Sant'Elia)", "马里奥·基亚托内 (Mario Chiattone)", "贾科莫·巴拉 (Giacomo Balla)", "维尔吉利奥·马尔基 (Virgilio Marchi)"],
    correctAnswer: 0,
    explanationEn: "Antonio Sant'Elia published the Manifesto of Futurist Architecture in 1914, envisioning the modern city as an immense, tumultuous shipyard of steel, concrete, and soaring mechanical speed; his drawings profoundly inspired 20th-century metropolis planning.",
    explanationZh: "安东尼奥·圣埃利亚在科莫与米兰创作出令人叹为观止的未来都市巨构草图，宣告建筑必须如同机器般瞬息万变、大胆赞美水力发电站与钢筋混凝土飞桥，是现代高技派与大都市幻想的源头。",
    tags: ["AvantGarde", "Architecture", "Futurism", "Sant'Elia", "Citta Nuova"],
    difficulty: 2
  },
  {
    id: "arched_126",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "20th_avant_garde",
    questionEn: "Which German Expressionist masterpiece by Erich Mendelsohn in Potsdam (1920-1921) features an astrophysical laboratory within an aerodynamic, sculptured organic tower intended to test Einstein's theory of general relativity?",
    questionZh: "由埃里克·门德尔松于1920-1921年在波茨坦设计的德国表现主义建筑孤本杰作，以雕塑般流线有机混凝土造型包裹天体物理实验室用于验证爱因斯坦相对论的是：",
    optionsEn: [
      "The Einstein Tower (Einsteinturm)",
      "The Glass Pavilion at Cologne (Bruno Taut)",
      "Grosses Schauspielhaus in Berlin",
      "Chilehaus in Hamburg"
    ],
    optionsZh: [
      "爱因斯坦天文台塔 (Einsteinturm in Potsdam)",
      "科隆玻璃展馆 (Bruno Taut)",
      "柏林大剧院 (Hans Poelzig)",
      "汉堡智利大厦 (Chilehaus)"
    ],
    correctAnswer: 0,
    explanationEn: "Erich Mendelsohn sculpted the Einsteinturm in Potsdam with dynamic organic curvilinear contours; due to postwar material shortages, it was crafted from brick and covered in smooth stucco to simulate a seamless monolithic concrete casting.",
    explanationZh: "门德尔松设计的爱因斯坦塔（Einsteinturm）充满流体动感雕塑张力，虽然因一战后混凝土短缺实际采用砖块砌筑后涂覆厚粉刷层，但其生物形态外轮廓被爱因斯坦亲自赞叹为“有机自然之美”。",
    tags: ["AvantGarde", "Architecture", "Expressionism", "Mendelsohn", "Einstein Tower"],
    difficulty: 2
  },
  {
    id: "arched_127",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "Which tuberculosis sanatorium in southwest Finland (1929-1933), designed by Alvar and Aino Aalto with rooftop sun terraces, splash-free sinks, and organic bentwood armchairs, epitomized humanistic Nordic Modernism?",
    questionZh: "由阿尔瓦·阿尔托与妻子埃诺于1929至1933年在芬兰西南部设计的哪座肺结核疗养院，以朝阳日光露台、防溅水无声水槽和有机弯曲白桦木胶合板扶手椅成为北欧人本现代主义代表作？",
    optionsEn: [
      "Paimio Sanatorium",
      "Viipuri Library",
      "Villa Mairea",
      "Saynatsalo Town Hall"
    ],
    optionsZh: [
      "帕伊米奥疗养院 (Paimio Sanatorium)",
      "维堡图书馆 (Viipuri Library)",
      "玛丽亚别墅 (Villa Mairea)",
      "珊纳特赛罗市政厅"
    ],
    correctAnswer: 0,
    explanationEn: "Alvar Aalto conceived the Paimio Sanatorium as a 'medical instrument', tailoring lighting, acoustics, gentle colors, and heated bent plywood furniture (the iconic Paimio Chair 41) to psychologically and physically comfort recovering patients.",
    explanationZh: "阿尔托将帕伊米奥疗养院整体视为一台治愈人心的医疗仪器，细致入微地设计了消除病患眩光的吊灯、避免敲击回音的吊顶与符合病人呼吸倾角的胶合板41号扶手椅，展现了温暖人性的北欧有机现代主义。",
    tags: ["AvantGarde", "Architecture", "Alvar Aalto", "Paimio", "Nordic Modernism"],
    difficulty: 2
  },
  {
    id: "arched_128",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "Which domestic masterwork designed by Frank Lloyd Wright in rural Pennsylvania (1935) anchored dramatic reinforced concrete cantilever terraces directly above a natural mountain waterfall?",
    questionZh: "由弗兰克·劳埃德·赖特于1935年在宾夕法尼亚州山谷中设计的哪座私人度假住宅，以大胆探出岩石的钢筋混凝土巨大悬挑阳台横跨在瀑布急流之上，成为“有机建筑”不朽丰碑？",
    optionsEn: [
      "Fallingwater (Kaufmann House)",
      "Robie House in Chicago",
      "Taliesin West in Arizona",
      "Hollyhock House in Los Angeles"
    ],
    optionsZh: [
      "落水山庄 / 流水别墅 (Fallingwater / Kaufmann House)",
      "罗比住宅 (Robie House in Chicago)",
      "西塔里埃森 (Taliesin West in Arizona)",
      "蜀葵住宅 (Hollyhock House)"
    ],
    correctAnswer: 0,
    explanationEn: "Frank Lloyd Wright's Fallingwater integrates architecture with nature by projecting bold reinforced concrete cantilevered balconies over the Bear Run waterfall, anchoring local quarry stone chimneys directly into the native bedrock.",
    explanationZh: "赖特为考夫曼百货巨头设计的落水山庄（Fallingwater）颠覆了“在瀑布旁看瀑布”的平庸做法，让建筑悬挑直接生长在飞瀑之上，天然溪石铺就室内地面，使人与潺潺水声、森林季相融为一体。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Fallingwater_FLW_1935.jpg/800px-Fallingwater_FLW_1935.jpg",
    fallbackImage: "/images/artworks/fallingwater.jpg",
    tags: ["AvantGarde", "Architecture", "Frank Lloyd Wright", "Fallingwater", "Organic Architecture"],
    difficulty: 1
  },
  {
    id: "arched_129",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "What was the international architectural significance of the 1927 Weissenhofsiedlung exhibition in Stuttgart, directed by Ludwig Mies van der Rohe?",
    questionZh: "由路德维希·密斯·凡·德·罗统领策划的1927年斯图加特魏森霍夫住宅展（Weissenhofsiedlung），在国际现代主义建筑发展史上的决定性意义是：",
    optionsEn: [
      "It assembled leading European avant-garde architects (including Le Corbusier, Gropius, Mies, and J.J.P. Oud) in a unified neighborhood showcase of flat roofs, white cubic forms, and modern prefabricated housing, crystallizing the 'International Style'",
      "It established the first international commercial theme park in Europe",
      "It mandated that all future German homes be constructed in traditional timber half-timbering",
      "It marked the end of reinforced concrete usage in domestic construction"
    ],
    optionsZh: [
      "它汇聚了欧洲当时最前卫的17位现代先锋建筑大师（柯布西耶、格罗皮乌斯、密斯、奥德等），首次在同一片示范住区中统一展示平屋顶、白色立体几何体与工业装配住宅，标志着“国际式风格”（International Style）的正式成型",
      "它建立了欧洲历史上首个集游乐场与历史民俗表演于一体的商业主题公园",
      "它通过立法明令今后所有德国民宅必须回归传统木构半木结构风格",
      "它标志着全欧洲住宅建设中彻底废弃钢筋混凝土技术"
    ],
    correctAnswer: 0,
    explanationEn: "The 1927 Weissenhof Estate organized by the Deutscher Werkbund proved to the global public that the new architecture — clean white plaster, flat roofs, steel window frames, and flexible open spaces — was a viable, coherent international movement.",
    explanationZh: "魏森霍夫住宅展建造了33栋现代住宅（其中柯布西耶设计的双联住宅与独立住宅被列为世界遗产），以毋庸置疑的集群力量向世界证实了去装饰、平屋顶、工业化构件的现代主义已成为不可逆转的世界共同语言。",
    tags: ["AvantGarde", "Architecture", "Weissenhofsiedlung", "Mies van der Rohe", "International Style"],
    difficulty: 2
  },
  {
    id: "arched_130",
    domain: "avant_garde",
    subCategory: "Modernist Architecture",
    era: "modern",
    questionEn: "What four functional urban zones were codified as the universal doctrine of modern town planning in the 1933 Athens Charter produced by CIAM (Congrès Internationaux d'Architecture Moderne)?",
    questionZh: "国际现代建筑大会（CIAM）在勒·柯布西耶主导下于1933年第四次会议起草的《雅典宪章》（Athens Charter）中，将现代城市空间规划核心功能严格划分为哪四大独立区域？",
    optionsEn: [
      "Dwelling (Living), Working, Recreation (Leisure), and Transportation (Circulation)",
      "Religion, Military Defense, Royal Palaces, and Agriculture",
      "Heavy Industry, Shipping Docks, Coal Mining, and Railroad Yards",
      "Commercial Shopping, Entertainment, Tourism, and Banking"
    ],
    optionsZh: [
      "居住 (Dwelling)；工作 (Working)；游憩/休闲 (Recreation)；交通 (Transportation/Circulation)",
      "宗教祭祀；军事要塞防御；皇家宫殿行政；农业耕作种植",
      "重化工业；海港货运码头；煤炭开采矿区；铁路调度编组",
      "商业步行购物；文化娱乐演艺；跨国观光旅游；金融证券银行"
    ],
    correctAnswer: 0,
    explanationEn: "The 1933 CIAM Athens Charter proclaimed that rational urbanism must segregate cities into four distinct functions: living (housing), work (industry/offices), leisure (parks/green space), and circulation (high-speed transit arteries) to eliminate chaotic historic urban crowding.",
    explanationZh: "《雅典宪章》批判传统历史城市工业与居住混杂的恶劣卫生状况，主张以高层塔楼置于广阔绿地之中，将城市划分为清晰的“居住、工作、游憩、交通”四大功能分区，深刻塑造了战后半个世纪的全球城市规划实践。",
    tags: ["AvantGarde", "Architecture", "CIAM", "Athens Charter", "Urbanism", "Le Corbusier"],
    difficulty: 2
  }
];

// =========================================================================
// Domain 4: Artist Movement Categorization & Theory (35 questions)
// =========================================================================
export const artistMovementQuestions = [
  {
    id: "arched_131",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "20th_avant_garde",
    questionEn: "How did André Breton formally define 'Surrealism' in his historic First Surrealist Manifesto published in Paris in October 1924?",
    questionZh: "安德烈·布勒东（André Breton）于1924年10月在巴黎发表《超现实主义第一宣言》时，对“超现实主义”作出的权威学术定义是：",
    optionsEn: [
      "Psychic automatism in its pure state, by which one proposes to express — verbally, by the written word, or in any other manner — the actual functioning of thought in the absence of all control exercised by reason",
      "The mechanical photographic capture of working-class struggles under factory assembly lines",
      "The systematic application of Euclidean geometry and primary colors to architectural floor plans",
      "A restoration of medieval French stained glass craftsmanship dedicated to religious piety"
    ],
    optionsZh: [
      "纯粹的精神自动主义 (Psychic automatism)，企图运用口头、书面或其他任何方式，表达思想在没有任何理性控制与审美道德干预下的真实运作",
      "通过机械摄影写实捕捉现代工厂流水线下产业工人阶级的苦难斗争",
      "将欧几里得几何与三原色严格排布于现代建筑平面图与立面之中的形式规律",
      "复兴中世纪法国彩绘教堂镶嵌玻璃手工艺以表达宗教虔诚与冥想"
    ],
    optionsCorrectAnswer: 0,
    correctAnswer: 0,
    explanationEn: "André Breton drew upon Sigmund Freud's psychoanalytic discoveries of the unconscious and dream analysis, defining Surrealism as pure psychic automatism free from reason, aesthetic conventions, or moral constraints.",
    explanationZh: "受西格蒙德·弗洛伊德精神分析学与梦的解析启发，布勒东将超现实主义界定为摆脱理性、逻辑与道德审查的“纯粹精神自动主义”，旨在将清醒现实与潜意识梦境熔铸为一种“绝对超现实”（Sur-realité）。",
    tags: ["ArtistMovement", "Surrealism", "Andre Breton", "Manifesto", "Automatism"],
    difficulty: 2
  },
  {
    id: "arched_132",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which of the following cohorts of master painters and sculptors were centrally affiliated with the international Surrealist movement in the 1920s and 1930s?",
    questionZh: "下列哪组大师级艺术家均在20世纪20至30年代作为正式核心成员深入参与了国际超现实主义运动？",
    optionsEn: [
      "Salvador Dalí, René Magritte, Max Ernst, Joan Miró, and Yves Tanguy",
      "Piet Mondrian, Theo van Doesburg, Gerrit Rietveld, and Bart van der Leck",
      "Claude Monet, Pierre-Auguste Renoir, Camille Pissarro, and Edgar Degas",
      "Kazimir Malevich, Vladimir Tatlin, El Lissitzky, and Alexander Rodchenko"
    ],
    optionsZh: [
      "萨尔瓦多·达利、勒内·马格里特、马克斯·恩斯特、胡安·米罗、伊夫·唐吉",
      "皮特·蒙德里安、特奥·凡·杜斯堡、赫里特·里特费尔德、巴特·凡·德·莱克",
      "克劳德·莫奈、皮埃尔-奥古斯特·雷诺阿、卡米耶·毕沙罗、埃德加·德加",
      "卡齐米尔·马列维奇、弗拉基米尔·塔特林、埃尔·利西茨基、亚历山大·罗德琴科"
    ],
    correctAnswer: 0,
    explanationEn: "Breton's Surrealist group gathered Salvador Dalí, René Magritte, Max Ernst, Joan Miró, Yves Tanguy, Paul Delvaux, and Alberto Giacometti in exploring dreamscapes, automatism, and bizarre symbolic collage.",
    explanationZh: "巴黎超现实主义运动汇聚了达利（偏执狂批判法）、马格里特（语言哲学迷宫）、恩斯特（擦印磨拓法）、米罗（生物符号）、唐吉（异星梦境）等大师，构成了20世纪超现实主义最辉煌的方阵。",
    tags: ["ArtistMovement", "Surrealism", "Dali", "Magritte", "Ernst", "Miro"],
    difficulty: 1
  },
  {
    id: "arched_133",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which German Surrealist master invented the automatic drawing techniques of 'frottage' (rubbing graphite over textured wooden floorboards) and 'grattage' (scraping paint across textured surfaces)?",
    questionZh: "在1925年首创将纸张铺在凹凸不平的粗糙木地板上用石墨摩擦拓印的“擦印法”（Frottage）与“刮色法”（Grattage）以激发潜意识想象的德国超现实主义大师是：",
    optionsEn: ["Max Ernst", "Otto Dix", "George Grosz", "Paul Klee"],
    optionsZh: ["马克斯·恩斯特 (Max Ernst)", "奥托·迪克斯 (Otto Dix)", "乔治·格罗兹 (George Grosz)", "保罗·克利 (Paul Klee)"],
    correctAnswer: 0,
    explanationEn: "Max Ernst invented 'frottage' in 1925 by taking pencil rubbings of textured wood grain, leaves, and textiles, interpreting the emerging accidental patterns as monstrous forests and mythological chimeras without conscious preconception.",
    explanationZh: "马克斯·恩斯特受达·芬奇观察老旧斑驳墙面的启发，开创“拓印法”（Frottage）与刮痕法（Grattage），让自然偶发的随机纹理唤醒深层梦境，创作出神秘莫测的《自然史》与原始森林景象。",
    tags: ["ArtistMovement", "Surrealism", "Max Ernst", "Frottage", "Technique"],
    difficulty: 2
  },
  {
    id: "arched_134",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "20th_avant_garde",
    questionEn: "What was the core working mechanism of Salvador Dalí's 'Paranoiac-Critical Method' formulated around 1930?",
    questionZh: "萨尔瓦多·达利于1930年前后系统阐述的“偏执狂批判法”（Paranoiac-Critical Method），其核心运作机制是：",
    optionsEn: [
      "A spontaneous method of irrational knowledge based upon the critical and systematic objectification of delirious associations and double-images without losing conscious lucid control",
      "Entering a deep hypnotic trance induced by mescaline or ether to paint blindly in complete darkness",
      "Painting precisely calculated scientific mathematical grids according to astronomical star charts",
      "Using commercial advertising stencils to replicate supermarket brand packaging"
    ],
    optionsZh: [
      "一种基于对幻觉联想与双重歧义意象进行批判性、系统性物化重构的自发非理性认知方法，在清醒状态下将偏执狂般的妄想变为客观超写实实体",
      "借助致幻剂或乙醚进入重度催眠状态并在完全黑暗中盲目涂抹画布",
      "根据精确的天文星图数据在画布上用圆规直尺绘制严密科学几何网格",
      "使用商业广告模板在画布上机械批量套印超市商品包装商标"
    ],
    correctAnswer: 0,
    explanationEn: "Dalí defined the paranoiac-critical method as an active, conscious process where the painter deliberately hallucinates multi-layered illusions (such as a horse that simultaneously forms an elephant or a face), anchoring delirium into academic trompe-l'œil realism.",
    explanationZh: "达利强调其方法不同于消极被动的精神自动主义，而是由艺术家主动模拟偏执狂的妄想联想能力，以拉斐尔式的细密写实古典技法，把梦幻中的多重并置意象（如白天鹅倒影即为大象）固定在三维画幅上。",
    tags: ["ArtistMovement", "Surrealism", "Salvador Dali", "Paranoiac Critical Method"],
    difficulty: 2
  },
  {
    id: "arched_135",
    domain: "artist_movement",
    subCategory: "Cultural Ideology",
    era: "20th_avant_garde",
    questionEn: "What was René Magritte's primary intellectual objective in paintings like 'The Treachery of Images' and 'Words and Images'?",
    questionZh: "勒内·马格里特在《图像的背叛》与《词语与图像》等哲学画作中，所致力于探索的深层智识目标是：",
    optionsEn: [
      "Subverting the arbitrary relationship between language conventions, pictorial representations, and physical reality, exposing the illusion of habitual perception",
      "Expressing raw violent political revolution against royalist governments",
      "Developing optical pointillist dot techniques for landscape painting",
      "Celebrating the mechanical speed and roar of internal combustion engines"
    ],
    optionsZh: [
      "颠覆语言符号、图像表征与物理实体之间被人们习惯性混淆的武断契约关系，揭示日常感知的欺骗性与神秘感",
      "以血腥暴力场面直接号召发动针对君主立宪政权的无产阶级武装暴动",
      "研发用于野外写生风景画的高精细点彩光学混色实验技法",
      "热烈歌颂内燃机引擎与战机轰鸣所带来的机械速度与战争崇拜"
    ],
    correctAnswer: 0,
    explanationEn: "Magritte operated as a philosophical poet with paint, juxtaposing clear everyday objects with mismatched verbal labels to reveal that a painted pipe is merely flat pigment on canvas, challenging the viewer's unthinking trust in linguistic and visual reality.",
    explanationZh: "马格里特如同一位穿西装的哲学刺客，他用最冷峻写实的学院笔法将词语与图像错位拼贴，指明“烟斗的图像绝非烟斗本身”，迫使观者反思日常语言概念如何遮蔽了对世界本真奥秘的观照。",
    tags: ["ArtistMovement", "Surrealism", "Rene Magritte", "Semiotics", "Philosophy"],
    difficulty: 2
  },
  {
    id: "arched_136",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "20th_avant_garde",
    questionEn: "Which Italian poet founded Futurism on February 20, 1909, by publishing its fiery founding manifesto on the front page of Paris's 'Le Figaro'?",
    questionZh: "1909年2月20日在法国巴黎《费加罗报》头版头条刊登激进宣言，狂热赞美机械文明、速度与战争，标志着“未来主义”诞生的意大利诗人是：",
    optionsEn: [
      "Filippo Tommaso Marinetti",
      "Gabriele D'Annunzio",
      "Guillaume Apollinaire",
      "Giovanni Papini"
    ],
    optionsZh: [
      "菲利波·托马索·马里内蒂 (Filippo Tommaso Marinetti)",
      "加布里埃尔·邓南遮 (Gabriele D'Annunzio)",
      "纪尧姆·阿波利奈尔 (Guillaume Apollinaire)",
      "乔瓦尼·帕皮尼 (Giovanni Papini)"
    ],
    correctAnswer: 0,
    explanationEn: "F.T. Marinetti launched Italian Futurism with his Le Figaro manifesto, famously shouting: 'A roaring motor car which seems to run on machine-gun fire is more beautiful than the Victory of Samothrace!'",
    explanationZh: "马里内蒂以炸裂般的情绪宣称“飞驰的赛车比萨莫色雷斯的胜利女神更加美丽”，主张摧毁博物馆、图书馆等一切旧日陈规，全身心拥抱电力、速度、钢铁与大都市狂暴节奏。",
    tags: ["ArtistMovement", "Futurism", "Marinetti", "Manifesto", "Le Figaro"],
    difficulty: 1
  },
  {
    id: "arched_137",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "20th_avant_garde",
    questionEn: "Which Futurist painter and sculptor authored the 'Technical Manifesto of Futurist Painting' (1910) and introduced the concepts of 'lines of force' and 'physical transcendentalism'?",
    questionZh: "1910年执笔起草《未来主义画家宣言与技术宣言》，并率先在艺术界提出“力量线”（Lines of Force）与“物理超越主义”核心概念的未来派大师是：",
    optionsEn: [
      "Umberto Boccioni",
      "Giacomo Balla",
      "Carlo Carrà",
      "Luigi Russolo"
    ],
    optionsZh: [
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "贾科莫·巴拉 (Giacomo Balla)",
      "卡洛·卡拉 (Carlo Carrà)",
      "路易吉·鲁索洛 (Luigi Russolo)"
    ],
    correctAnswer: 0,
    explanationEn: "Umberto Boccioni formulated that all moving bodies project directional 'lines of force' into surrounding atmospheric space, declaring: 'The gesture for us will no longer be a fixed moment in universal dynamism: it shall simply be the dynamic sensation made eternal.'",
    explanationZh: "薄邱尼在宣言中论述运动中的物体与其周围环境的相互渗透，提出“画中人物的奔跑并非瞬间的定格，而是连续力量线对周围空间的穿透与撕裂”，奠定了未来主义动态造型基石。",
    tags: ["ArtistMovement", "Futurism", "Boccioni", "Lines of Force", "Theory"],
    difficulty: 2
  },
  {
    id: "arched_138",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which Italian Futurist master analyzed kinetic locomotion and chronophotography in paintings like 'Dynamism of a Dog on a Leash' (1912) and 'Flight of the Swallows'?",
    questionZh: "在1912年创作名作《系在链条上的狗的动态》（Dynamism of a Dog on a Leash），受连续摄影启发以多重重叠残影描绘腊肠犬疾行乱步的未来派大师是：",
    optionsEn: ["Giacomo Balla", "Umberto Boccioni", "Gino Severini", "Fortunato Depero"],
    optionsZh: ["贾科莫·巴拉 (Giacomo Balla)", "翁贝托·薄邱尼 (Umberto Boccioni)", "吉诺·塞韦里尼 (Gino Severini)", "福图纳托·德佩罗 (Fortunato Depero)" ],
    correctAnswer: 0,
    explanationEn: "Giacomo Balla studied Étienne-Jules Marey's chronophotography, painting the simultaneous sequential positions of the dog's twinkling feet, swaying leash, and owner's fluttering skirt to visualize continuous time and motion on a single plane.",
    explanationZh: "贾科莫·巴拉深入研究早期运动摄影与马雷的连续曝光底片，在画布上层叠排布小狗四蹄、尾巴与妇人裙摆的运动轨迹多重透光重影，将运动的物理感知转化为极富童趣的未来主义视觉律动。",
    tags: ["ArtistMovement", "Futurism", "Giacomo Balla", "Dynamism of a Dog", "Chronophotography"],
    difficulty: 1
  },
  {
    id: "arched_139",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "20th_avant_garde",
    questionEn: "Which Italian artist painted the iconic Futurist masterpiece 'The Funeral of the Anarchist Galli' (1911) before renouncing Futurism in 1917 to co-found Pittura Metafisica and later embrace classical 'Valori Plastici'?",
    questionZh: "在1911年创作未来主义代表作《无政府主义者加利的葬礼》，随后于1917年在费拉拉转入“形而上画派”，最终在战后倡导“造型价值”（Valori Plastici）古典秩序回归的大师是：",
    optionsEn: ["Carlo Carrà", "Umberto Boccioni", "Giorgio de Chirico", "Ardengo Soffici"],
    optionsZh: ["卡洛·卡拉 (Carlo Carrà)", "翁贝托·薄邱尼 (Umberto Boccioni)", "乔治·德·基里科 (Giorgio de Chirico)", "阿尔登戈·索菲奇 (Ardengo Soffici)"],
    correctAnswer: 0,
    explanationEn: "Carlo Carrà was a signatory of the 1910 Futurist manifestos, famously painting the swirling riot of Galli's funeral in Milan; in 1917 he met de Chirico in Ferrara, transitioning to metaphysical dreamscapes and Giotto-inspired archaic solid figures.",
    explanationZh: "卡洛·卡拉（Carlo Carrà）的艺术生涯浓缩了20世纪意大利艺术变迁：从早期未来派的红黑警棍与马匹暴动冲击波，到一战期间转入形而上人偶静物，再到20年代倡导乔托式的质朴庄严古典秩序。",
    tags: ["ArtistMovement", "Futurism", "Carlo Carra", "Metaphysical", "Funeral of Galli"],
    difficulty: 2
  },
  {
    id: "arched_140",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which Paris-based Italian Futurist painter depicted dynamic cabaret nightclub life and swirling dancers using Divisionist color dots and glittering sequins in 'Dynamic Hieroglyphic of the Bal Tabarin' (1912)?",
    questionZh: "常驻巴黎、将未来主义动感与法国分色主义（Divisionism）及立体主义分面巧妙融合，并在画作《塔巴兰舞厅的动态象形图》（1912）中率先贴上真实发光金箔亮片的大师是：",
    optionsEn: ["Gino Severini", "Umberto Boccioni", "Giacomo Balla", "Enrico Prampolini"],
    optionsZh: ["吉诺·塞韦里尼 (Gino Severini)", "翁贝托·薄邱尼 (Umberto Boccioni)", "贾科莫·巴拉 (Giacomo Balla)", "恩里科·普兰波利尼 (Enrico Prampolini)"],
    correctAnswer: 0,
    explanationEn: "Gino Severini served as the vital cultural link between Milanese Futurism and the Parisian avant-garde (Picasso, Braque), celebrated for his kaleidoscopic portrayals of Montmartre dancers and night revelers.",
    explanationZh: "吉诺·塞韦里尼旅居巴黎，充当意大利未来派与立体主义桥梁；他在描绘蒙马特夜总会康康舞娘旋转裙摆与铜管乐声浪时，运用如碎钻棱镜般的几何碎面与真实亮片，展现了未来主义对都会感官狂欢的陶醉。",
    tags: ["ArtistMovement", "Futurism", "Severini", "Bal Tabarin", "Divisionism"],
    difficulty: 2
  },
  {
    id: "arched_141",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "20th_avant_garde",
    questionEn: "In which Italian Renaissance city did Giorgio de Chirico, his brother Alberto Savinio, and Carlo Carrà meet in a military convalescent hospital in 1917 to consolidate Pittura Metafisica (Metaphysical Painting)?",
    questionZh: "1917年第一次世界大战期间，基里科兄弟（德·基里科与萨维尼奥）与卡洛·卡拉在意大利哪座历史文艺复兴名城的神经军医院相遇，从而促成了“形而上画派”（Pittura Metafisica）的正式结盟与确立？",
    optionsEn: ["Ferrara", "Florence", "Milan", "Venice"],
    optionsZh: ["费拉拉 (Ferrara)", "佛罗伦萨 (Florence)", "米兰 (Milan)", "威尼斯 (Venice)"],
    correctAnswer: 0,
    explanationEn: "In 1917, Giorgio de Chirico and Carlo Carrà were hospitalized for neurosis at the Villa del Seminario military hospital in Ferrara; the ancient Renaissance city's geometry, red brick castle, and bakery biscuits deeply defined Metaphysical iconography.",
    explanationZh: "费拉拉（Ferrara）特殊的文艺复兴城市严谨街道网格、埃斯滕塞城堡的深红砖墙、以及犹太区烘焙店里形态怪异的面包饼干，成为形而上画派大师们静默诡异梦境的取景摇篮。",
    tags: ["ArtistMovement", "Pittura Metafisica", "Ferrara", "De Chirico", "Carra"],
    difficulty: 2
  },
  {
    id: "arched_142",
    domain: "artist_movement",
    subCategory: "Cultural Ideology",
    era: "20th_avant_garde",
    questionEn: "What quintessential iconographical motifs define the metaphysical visual universe of Giorgio de Chirico during his golden period (1910-1919)?",
    questionZh: "乔治·德·基里科在形而上画派黄金时期（1910-1919）画面中最具辨识度、反复出现的标志性视觉符码体系是：",
    optionsEn: [
      "Empty arcaded Italian piazzas, deeply cast diagonal shadows, faceless tailoring mannequins, distant steam trains, ticking clocks, and classical marble statues",
      "Violent explosions of tanks, flying airplanes, and roaring factory sirens",
      "Lush impressionist water lilies in natural shimmering sunlight",
      "Dynamic overlapping typography slogans with communist hammers and sickles"
    ],
    optionsZh: [
      "空旷寂寥的拱廊意大利广场、拉长的深黑斜阳阴影、无面部五官的裁缝假人人偶、地平线远处的蒸汽火车冒烟、停滞的钟表与古代大理石雕塑",
      "装甲坦克的剧烈爆炸、俯冲轰炸机与呼啸的现代军工厂汽笛",
      "自然波光倒影中繁茂摇曳的印象派睡莲与野外阳光",
      "拼贴动态重叠印刷字体口号与苏维埃铁锤镰刀政治宣传徽章"
    ],
    correctAnswer: 0,
    explanationEn: "De Chirico synthesized Friedrich Nietzsche's melancholy of autumn afternoons with Arthur Schopenhauer's enigma of objects to construct uncanny Renaissance plazas where time has frozen in perpetual philosophical unease.",
    explanationZh: "基里科将尼采与叔本华的悲观虚无哲学视觉化，在其画中，熟悉的现实街道被抽离一切喧闹生命，仅留下拉长的斜阳死寂阴影、孤独的人偶与停滞的挂钟，营造出令人毛骨悚然的永恒神秘氛围。",
    tags: ["ArtistMovement", "Pittura Metafisica", "De Chirico", "Iconography"],
    difficulty: 1
  },
  {
    id: "arched_143",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which Bolognese master, affiliated with Metaphysical painting and Valori Plastici, spent his entire life in a quiet studio in Via Fondazza painting meditative, dust-covered still lifes of bottles, jars, and vases?",
    questionZh: "与形而上画派及“造型价值”派深有渊源、一生绝大部分时光隐居在博洛尼亚芳达扎街朴素画室中，终生以非凡耐心描绘落满灰尘的瓶罐容器与静穆静物的大师是：",
    optionsEn: ["Giorgio Morandi", "Mario Sironi", "Felice Casorati", "Massimo Campigli"],
    optionsZh: ["乔治·莫兰迪 (Giorgio Morandi)", "马里奥·西罗尼 (Mario Sironi)", "费利切·卡索拉蒂 (Felice Casorati)", "马西莫·坎皮格利 (Massimo Campigli)"],
    correctAnswer: 0,
    explanationEn: "Giorgio Morandi stripped painting of dramatic narrative, returning daily to the same humble glass bottles and ceramic vessels, subtly modulating tonal greys, terracottas, and ochres to achieve monastic contemplation.",
    explanationZh: "乔治·莫兰迪（Giorgio Morandi）是20世纪最纯粹的色彩与形式修士。他不问外界政权喧嚣，反复在简陋画室里微调几个药瓶、油壶与陶罐的相对位置，以极其低饱和的莫兰迪灰调抵达艺术的极致永恒。",
    tags: ["ArtistMovement", "Giorgio Morandi", "Still Life", "Metaphysical", "Bologna"],
    difficulty: 1
  },
  {
    id: "arched_144",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Who was Alberto Savinio (born Andrea de Chirico), and what was his unique contribution to the Metaphysical movement?",
    questionZh: "阿尔贝托·萨维尼奥（Alberto Savinio，原名安德烈·德·基里科）在形而上画派与欧洲现代先锋派中的独特身份与艺术贡献是：",
    optionsEn: [
      "The multi-talented brother of Giorgio de Chirico; a novelist, playwright, composer, and painter known for surreal, ironic portraits of hybrid figures with animal and bird heads in classical domestic interiors",
      "The chief structural engineer who designed the Fiat Lingotto factory in Turin",
      "The political commissar who authored the Communist Manifesto in Moscow",
      "A stained glass restorer who worked exclusively on Gothic cathedrals"
    ],
    optionsZh: [
      "乔治·德·基里科的亲弟弟；精通文学、戏剧、音乐与绘画的博学大师，以在典雅古典室内场景中描绘带有鸟兽鸟首禽头异化面孔的荒诞肖像画闻名于世",
      "负责计算并营建都灵菲亚特灵格托汽车厂屋顶赛道的首席土木工程师",
      "在莫斯科负责审查取缔现代先锋艺术的苏维埃文化委员",
      "终生只在法国乡村修复中世纪哥特式彩色玻璃窗的工匠匠师"
    ],
    correctAnswer: 0,
    explanationEn: "Alberto Savinio (1891-1952) was a polymath who enriched Metaphysical art with deep literary wit, mythology, and dream symbolism, frequently replacing the heads of dignified bourgeois sitters with pelicans, dogs, or owls.",
    explanationZh: "萨维尼奥是基里科的胞弟，其画风较兄长更为辛辣怪诞与幽默，常在安详体面的资产阶级华丽客厅中安置长着鸭头、鹈鹕或绵羊脑袋的半人半兽神话形象，将形而上神秘感与讽刺戏剧推向极致。",
    tags: ["ArtistMovement", "Alberto Savinio", "Pittura Metafisica", "De Chirico Brother"],
    difficulty: 2
  },
  {
    id: "arched_145",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "postwar_contemporary",
    questionEn: "Which British artist produced the iconic 1956 collage 'Just what is it that makes today's homes so different, so appealing?', celebrated by art historians as the catalyst of Pop Art?",
    questionZh: "在1956年伦敦“这就是明天”展览上展出拼贴画《究竟是什么使今天的家庭如此不同，如此具有吸引力？》、被公认为波普艺术（Pop Art）真正开山之作的英国艺术家是：",
    optionsEn: ["Richard Hamilton", "Eduardo Paolozzi", "Peter Blake", "David Hockney"],
    optionsZh: ["理查德·汉密尔顿 (Richard Hamilton)", "爱德华多·鲍洛齐 (Eduardo Paolozzi)", "彼得·布莱克 (Peter Blake)", "大卫·霍克尼 (David Hockney)"],
    correctAnswer: 0,
    explanationEn: "Richard Hamilton created the small photo-collage for the Independent Group's 1956 'This is Tomorrow' show, assembling American magazine cutouts of a muscular bodybuilder holding a 'POP' Tootsie Pop lollipop, a TV, a vacuum cleaner, and a pin-up girl.",
    explanationZh: "理查德·汉密尔顿在拼贴画中汇聚了肌肉健美男（手握醒目POP棒棒糖）、女模特贴片、吸尘器、电视机与罐头，首次在大英帝国展厅中将战后大众消费主义快餐文化升格为前卫严肃艺术议题。",
    tags: ["ArtistMovement", "Pop Art", "Richard Hamilton", "Collage", "Independent Group"],
    difficulty: 1
  },
  {
    id: "arched_146",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "postwar_contemporary",
    questionEn: "What was the 'Independent Group', which met at the Institute of Contemporary Arts (ICA) in London between 1952 and 1955?",
    questionZh: "1952年至1955年间在伦敦当代艺术学会（ICA）定期聚会、被公认为孕育英美波普艺术摇篮的“独立小组”（Independent Group），其核心成员包括：",
    optionsEn: [
      "A collective of painters, sculptors, architects, and critics (including Richard Hamilton, Eduardo Paolozzi, Alison and Peter Smithson, and Reyner Banham) who championed mass popular culture, advertising, and science fiction",
      "A guild of conservative Royal Academicians seeking to ban abstract art from London museums",
      "A group of French landscape painters working en plein air in Sussex",
      "A trade union of commercial billboard printers in post-war Soho"
    ],
    optionsZh: [
      "由理查德·汉密尔顿、爱德华多·鲍洛齐、史密森夫妇（建筑师）及雷纳·班汉姆（评论家）组成的跨界团体，率先拥抱好莱坞电影、美式广告、大众流行文化与科幻工业",
      "致力于通过向议会游说在英国全面封杀抽象艺术的保守皇家艺术学会老院士联盟",
      "专程移居英国南部苏塞克斯乡村从事印象派外光写生的法国画家团体",
      "战后在伦敦索霍区组织街头商业广告牌印刷工人的职业工会组织"
    ],
    correctAnswer: 0,
    explanationEn: "The Independent Group rejected high-modernist elitism, initiating the critical examination of comic strips, mass media, automobile styling, and rock-and-roll, laying the entire theoretical bedrock for international Pop Art.",
    explanationZh: "独立小组打破了传统精英艺术与大众通俗文化的森严鸿沟。鲍洛齐在1947年幻灯放映剪贴画率先打出“Pop”字样，汉密尔顿则明确提出了波普艺术应具备的“通俗、短暂、可消费、廉价、量产、年轻、性感”特征。",
    tags: ["ArtistMovement", "Pop Art", "Independent Group", "London", "Theory"],
    difficulty: 2
  },
  {
    id: "arched_147",
    domain: "artist_movement",
    subCategory: "Cultural Ideology",
    era: "postwar_contemporary",
    questionEn: "What was the ideological significance of Andy Warhol christening his New York studio 'The Factory' in the 1960s?",
    questionZh: "安迪·沃霍尔在20世纪60年代将其位于纽约东47街的银色艺术工作室命名为“工厂”（The Factory），其深刻的文化批判与艺术观念意义是：",
    optionsEn: [
      "It subverted the romantic myth of the lone artistic genius, openly adopting industrial assembly-line division of labor and mechanical silkscreen mass-production",
      "He was secretly running an underground textile sweatshop manufacturing military parachutes",
      "He was paying homage to medieval monastic scriptoriums copying Latin scrolls",
      "He was complying with federal municipal zoning laws for heavy steel mills"
    ],
    optionsZh: [
      "它颠覆了欧洲古典主义中艺术家作为孤高原创天才的浪漫主义神话，公然采用流水线分工合作与机械丝网批量套印生产，将艺术品赤裸化为标准化商品",
      "他在纽约秘密开办生产军用降落伞的地下廉价纺织作坊以规避税收",
      "他意在向中世纪僧侣在修道院抄经房里纯手工抄写羊皮卷致敬",
      "这完全是为了符合纽约曼哈顿市政关于重工业钢铁冶炼厂的用地分区规范"
    ],
    correctAnswer: 0,
    explanationEn: "Warhol famously said, 'I want to be a machine.' By hiring assistants (Gerard Malanga and 'superstars') to produce screenprints en masse in a foil-draped loft, Warhol exposed how capitalism manufactures both celebrity and art as consumer items.",
    explanationZh: "沃霍尔宣称“我想成为一台机器”。他在银箔包裹的“工厂”中，由助手协助大批量机械化印制可口可乐瓶与名人肖像，把艺术家的身份从“独创手艺人”转换为“商业品牌策划人”，彻底重构了当代艺术运作逻辑。",
    tags: ["ArtistMovement", "Pop Art", "Andy Warhol", "The Factory", "Ideology"],
    difficulty: 1
  },
  {
    id: "arched_148",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "postwar_contemporary",
    questionEn: "How did Roy Lichtenstein produce his trademark simulations of commercial printing Ben-Day dots in the 1960s?",
    questionZh: "罗伊·利希滕斯坦在60年代创作波普画作时，是如何在巨大画布上制作出具有机械印刷质感的标志性“本戴网点”（Ben-Day dots）的？",
    optionsEn: [
      "By rubbing oil paint through perforated metal or paper stencils with a stiff bristle brush, then outlining forms in bold black magna lines",
      "By using modern laser digital inkjet printing machinery imported from Japan",
      "By stamping each individual dot using rubber finger thimbles dipped in gouache",
      "By splattering enamel paint randomly from a spinning electric fan"
    ],
    optionsZh: [
      "使用打有细密均匀圆孔的金属或厚纸网板模板，用硬毛刷将油彩颜料涂抹穿透网眼，再以黑色高反差油画轮廓线圈定形体",
      "直接使用从日本进口的高精度大型激光数码喷绘机进行大幅面打印",
      "用手套戴上特制圆形橡胶印章逐个浸蘸水粉颜料在画布上手工盖印",
      "利用高速旋转的电风扇将瓷漆无规则喷溅抛洒在倾斜画布上"
    ],
    correctAnswer: 0,
    explanationEn: "Lichtenstein projected small comic book panels with an opaque projector, drew them onto large primed canvas, and manually dabbed paint through perforated metal screens to reproduce the cheap halftone dots of pulp magazines with heroic monumental precision.",
    explanationZh: "利希滕斯坦通过幻灯投影将小幅廉价漫画底稿投射在大型画布上，随后借助定制的带孔穿孔金属网板与粗刷，以纯手工极其严谨的匠心在巨幅画布上复现廉价杂志报刊的四色半调网点效果。",
    tags: ["ArtistMovement", "Pop Art", "Roy Lichtenstein", "Ben Day dots", "Technique"],
    difficulty: 2
  },
  {
    id: "arched_149",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "postwar_contemporary",
    questionEn: "Which artistic partnership is celebrated for fabricating monumental, whimsical outdoor civic sculptures of oversized everyday utensils, including 'Spoonbridge and Cherry' in Minneapolis and 'Clothespin' in Philadelphia?",
    questionZh: "在明尼阿波利斯雕塑花园创作巨型《勺桥与樱桃》（Spoonbridge and Cherry），在费城市政厅旁竖立高大《晒衣夹》（Clothespin）的著名波普公共雕塑艺术搭档是：",
    optionsEn: [
      "Claes Oldenburg and Coosje van Bruggen",
      "Christo and Jeanne-Claude",
      "Gilbert & George",
      "Bernd and Hilla Becher"
    ],
    optionsZh: [
      "克拉斯·奥登伯格与库西·范·布鲁根 (Claes Oldenburg & Coosje van Bruggen)",
      "克里斯托与让娜-克劳德夫妇 (Christo & Jeanne-Claude)",
      "吉尔伯特与乔治 (Gilbert & George)",
      "贝恩德与希拉·贝歇尔夫妇 (Bernd & Hilla Becher)"
    ],
    correctAnswer: 0,
    explanationEn: "Claes Oldenburg and his wife Coosje van Bruggen collaborated on colossal civic monuments that blew up ordinary domestic tools (shuttlecocks, clothespins, spoons, trowels) to gigantic proportions, transforming public plazas into playful urban landscapes.",
    explanationZh: "奥登伯格与范·布鲁根夫妇携手几十年，将最不起眼的日常家庭小器具（晾衣夹、园艺铲、羽毛球、打字机橡皮擦）放大几十甚至上百倍置入市政广场与城市公园，以幽默诙谐重塑公共艺术与市民的关系。",
    tags: ["ArtistMovement", "Pop Art", "Oldenburg", "Van Bruggen", "Public Sculpture"],
    difficulty: 2
  },
  {
    id: "arched_150",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "postwar_contemporary",
    questionEn: "Which American Pop artist, who trained as a billboard sign painter in Times Square, created the monumental 86-foot-long anti-war painting 'F-111' (1964-1965) intertwining fighter jet chrome with spaghetti and a hairdryer?",
    questionZh: "早年在纽约时代广场从事高空商业巨幅广告牌油漆绘制工作，在1964-1965年创作长达26米、将F-111战斗轰炸机机身与番茄意面、卷发吹风机拼合的波普巨作《F-111》的画家是：",
    optionsEn: ["James Rosenquist", "Tom Wesselmann", "Jim Dine", "Robert Indiana"],
    optionsZh: ["詹姆斯·罗森奎斯特 (James Rosenquist)", "汤姆·韦塞尔曼 (Tom Wesselmann)", "吉姆·戴恩 (Jim Dine)", "罗伯特·印第安纳 (Robert Indiana)"],
    correctAnswer: 0,
    explanationEn: "James Rosenquist adapted sign-painting techniques in 'F-111' to span four walls of the Leo Castelli Gallery, collaging the American supersonic military-industrial fighter plane with consumer products, a smiling girl under a hair salon dome, and a mushroom cloud explosion.",
    explanationZh: "罗森奎斯特将商业喷绘广告技法引入纯艺术，在长达26米的《F-111》环形全景画幅中，将美军越战核轰炸机碎片穿插在儿童防毒面具、洋伞蛋糕与核爆蘑菇云之间，尖锐讽刺了美国军工复合体与消费繁荣的畸形结合。",
    tags: ["ArtistMovement", "Pop Art", "James Rosenquist", "F-111", "Billboard"],
    difficulty: 2
  },
  {
    id: "arched_151",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "20th_avant_garde",
    questionEn: "At which Parisian exhibition did art critic Louis Vauxcelles coin the epithet 'Fauves' (Wild Beasts) upon seeing Albert Marquet's classical bust surrounded by explosive unmixed canvases by Henri Matisse and André Derain?",
    questionZh: "艺术评论家路易·沃克塞尔（Louis Vauxcelles）是在哪届巴黎展览上，看到马蒂斯与德兰等人刺目纯色画作环绕着一尊多纳泰罗风格古典雕塑时，脱口惊呼“多纳泰罗落入野兽群中”（Fauves）的？",
    optionsEn: [
      "The 1905 Salon d'Automne",
      "The 1874 Nadar Studio Exhibition",
      "The 1863 Salon des Refusés",
      "The 1913 Armory Show"
    ],
    optionsZh: [
      "1905年巴黎秋季沙龙 (Salon d'Automne 1905)",
      "1874年纳达尔摄影工作室印象派首展",
      "1863年落选者沙龙 (Salon des Refusés)",
      "1913年纽约军械库博览会"
    ],
    correctAnswer: 0,
    explanationEn: "At the 1905 Salon d'Automne (Room VII), Vauxcelles pointed to a Florentine-style bronze cherub amidst saturated raw canvases by Matisse ('Woman with a Hat') and Derain, exclaiming 'Donatello chez les fauves!' ('Donatello among the wild beasts!').",
    explanationZh: "在1905年秋季沙龙第七展厅，马蒂斯展出色彩狂野违背常规解剖的《戴帽子的妇人》，沃克塞尔在展评中写道“多纳泰罗被野兽包围了”，野兽派（Fauvism）之名遂正式载入世界现代美术史册。",
    tags: ["ArtistMovement", "Fauvism", "Salon d Automne", "Matisse", "Vauxcelles"],
    difficulty: 1
  },
  {
    id: "arched_152",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "20th_avant_garde",
    questionEn: "What visual and compositional characteristics definitively distinguish 'Analytical Cubism' (c. 1909-1912) practiced by Pablo Picasso and Georges Braque?",
    questionZh: "毕加索与布拉克在“分析立体主义”（Analytical Cubism, 约1909-1912）阶段最根本的视觉处理手法与色彩构图特征是：",
    optionsEn: [
      "Deconstructing physical objects into multiple simultaneous viewpoints, fragmented overlapping facets, and an austere monochromatic palette of earthy browns, greys, and ochres",
      "Applying unmixed fiery red, cobalt blue, and canary yellow in thick expressive impasto strokes",
      "Gluing real printed wallpaper, sheet music, and sand directly onto the wooden canvas",
      "Pasting photographic advertisements and commercial labels across metallic gold leaf backgrounds"
    ],
    optionsZh: [
      "将三维物理实体解构为多个同时并存的观察视点，碎裂成交错重叠的晶体分面，并严格克制色彩而采用极简单色调（赭石、灰褐、橄榄绿）",
      "以狂暴粗厚的厚涂笔触将未经调和的原色纯红、纯蓝与柠檬黄甩在画面上",
      "把真实带印花的壁纸、报纸乐谱与河沙直接黏贴在画布木板表面",
      "在金属金箔背景上大面积粘贴商业照片广告与商品商标标签"
    ],
    correctAnswer: 0,
    explanationEn: "Analytical Cubism analyzed 3D space by breaking down guitars, pipes, and portraits into crystalline shifting facets observed simultaneously from multiple angles, deliberately restraining color to avoid optical distractions from pure form analysis.",
    explanationZh: "分析立体主义致力于理智分析物体在多重视点下的立体存在，画中肖像与静物被彻底粉碎为浅浮雕般的半透明折射晶体切面，为了专注于空间结构推演，两位大师刻意将调色板限制在极素净的灰褐色阶。",
    tags: ["ArtistMovement", "Cubism", "Analytical Cubism", "Picasso", "Braque"],
    difficulty: 2
  },
  {
    id: "arched_153",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "20th_avant_garde",
    questionEn: "What radical structural innovation marked the transition from Analytical Cubism to 'Synthetic Cubism' around 1912 (e.g. Picasso's 'Still Life with Chair Caning')?",
    questionZh: "约在1912年（以毕加索《藤椅静物》为标志），从分析立体主义迈向“综合立体主义”（Synthetic Cubism）的根本性革命创举是：",
    optionsEn: [
      "The invention of 'collage' and 'papier collé', incorporating real non-art materials (printed oilcloth, newspaper clippings, wallpaper, rope) directly onto the picture plane and synthesizing flat, larger color planes",
      "The abandonment of geometric shapes in order to return to traditional Renaissance oil glazing",
      "Switching from studio easel painting to monumental outdoor concrete mural carving",
      "Eliminating all lines and using purely circular airbrushed dots"
    ],
    optionsZh: [
      "发明“拼贴”（Collage）与“贴纸”（Papier collé），将现实生活中的非艺术异质材料（印花油布、报纸剪报、乐谱壁纸、麻绳）直接贴在画布上，合成更明快平面化的大色块",
      "彻底放弃一切几何分面，全面退回文艺复兴传统多层油画透明罩染技法",
      "彻底告别室内架上绘画，全面转向户外大型混凝土纪念壁画雕刻",
      "完全抹去所有骨架轮廓线条，仅使用喷笔在画面上喷涂同心圆渐变网点"
    ],
    correctAnswer: 0,
    explanationEn: "In May 1912, Picasso pasted a piece of mass-manufactured oilcloth printed with a wicker chair-caning pattern onto an oval canvas framed with real maritime rope in 'Still Life with Chair Caning', bridging illusionistic representation and real tactile materials.",
    explanationZh: "综合立体主义不再像分析期那样费力解构形体，而是“由零件组装整体”：毕加索将印有藤编花纹的油布贴入椭圆画布并用真实粗麻绳封边，宣告拼贴（Collage）诞生，打通了现实世界物质与艺术虚构的边界。",
    tags: ["ArtistMovement", "Cubism", "Synthetic Cubism", "Collage", "Picasso"],
    difficulty: 2
  },
  {
    id: "arched_154",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which poetic art movement was christened by Guillaume Apollinaire in 1912 to describe the lyrical, prismatic color harmonies and rotating circular disks painted by Robert and Sonia Delaunay?",
    questionZh: "诗人纪尧姆·阿波利奈尔于1912年创造了哪个带有希腊神话乐神意蕴的流派名称，来专门赞誉罗伯特·德劳内与索尼亚·德劳内夫妇充满纯粹色彩光谱交响与旋转同心圆盘的绘画？",
    optionsEn: [
      "Orphism (Orphic Cubism)",
      "Synchromism",
      "Rayonism",
      "Purism"
    ],
    optionsZh: [
      "奥费主义 / 奥菲斯主义 (Orphism / Orphic Cubism)",
      "同步主义 (Synchromism)",
      "辐射主义 (Rayonism)",
      "纯粹主义 (Purism)"
    ],
    correctAnswer: 0,
    explanationEn: "Apollinaire named 'Orphism' after the mythical Greek musician Orpheus to describe how the Delaunays' vibrant simultaneous contrasting color discs created pure abstract visual music without requiring figurative subjects.",
    explanationZh: "阿波利奈尔借用希腊神话中琴声能感化万物的乐仙奥菲斯之名创立“奥费主义”（Orphism），指出德劳内夫妇利用互补色并置与同时对比旋转光盘，在画布上谱写出如同无标题纯音乐般激昂的纯色彩交响诗。",
    tags: ["ArtistMovement", "Orphism", "Delaunay", "Apollinaire", "Abstract Art"],
    difficulty: 2
  },
  {
    id: "arched_155",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "20th_avant_garde",
    questionEn: "At which Zurich tavern did Hugo Ball, Emmy Hennings, Tristan Tzara, and Hans Arp establish the Dada movement in February 1916 amidst the horrors of the First World War?",
    questionZh: "1916年2月第一次世界大战炮火连天之际，雨果·鲍尔、特里斯唐·查拉与汉斯·阿尔普等人在中立国瑞士苏黎世的哪座传奇酒馆宣告了“达达”（Dada）反战反理性运动的诞生？",
    optionsEn: [
      "Cabaret Voltaire (Spiegelgasse 1)",
      "Café de Flore in Paris",
      "The Red Lion Tavern in London",
      "Café Central in Vienna"
    ],
    optionsZh: [
      "伏尔泰酒馆 / 伏尔泰卡巴莱 (Cabaret Voltaire)",
      "巴黎花神咖啡馆 (Café de Flore)",
      "伦敦红狮酒馆 (The Red Lion)",
      "维也纳中央咖啡馆 (Café Central)"
    ],
    correctAnswer: 0,
    explanationEn: "Dada erupted at the Cabaret Voltaire in Zurich in 1916 as a furious, nonsensical, anti-bourgeois revolt against the European civilization and nationalist rationalism that had engineered the slaughter of World War I.",
    explanationZh: "伏尔泰酒馆（Cabaret Voltaire）见证了达达主义诞生：艺术家们朗诵无意义语音诗（Sound Poetry）、佩戴怪诞非洲木面具狂舞、抛掷撕碎纸片拼贴，用绝对的胡闹与虚无主义，对将人类拖入一战大屠杀的理性资产阶级文明进行最决绝的唾弃。",
    tags: ["ArtistMovement", "Dada", "Cabaret Voltaire", "Zurich", "Hugo Ball", "Tzara"],
    difficulty: 1
  },
  {
    id: "arched_156",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "20th_avant_garde",
    questionEn: "Which Berlin Dada pioneer created the monumental 1919-1920 photomontage 'Cut with the Kitchen Knife Dada through the Last Weimar Beer-Belly Cultural Epoch of Germany'?",
    questionZh: "在1919-1920年创作长名政治讽刺蒙太奇代表作《用达达厨房菜刀切开德国最后的魏玛啤酒肚文化时代》的柏林达达女艺术家先锋是：",
    optionsEn: ["Hannah Höch", "Käthe Kollwitz", "Sophie Taeuber-Arp", "Gabriele Münter"],
    optionsZh: ["汉娜·赫希 (Hannah Höch)", "凯绥·珂勒惠支 (Käthe Kollwitz)", "索菲·陶伯-阿尔普 (Sophie Taeuber-Arp)", "加布里埃莱·闵特尔 (Gabriele Münter)"],
    correctAnswer: 0,
    explanationEn: "Hannah Höch revolutionized modern political collage with 'Cut with the Kitchen Knife', pasting newspaper clippings, gear wheels, female dancers, and Weimar politicians into a chaotic, razor-sharp feminist and anti-militarist critique.",
    explanationZh: "汉娜·赫希（Hannah Höch）开创了照相蒙太奇（Photomontage）独立艺术语言，将爱因斯坦、凯撒皇帝、机械轴承齿轮与现代女运动员照片以厨房菜刀碎切式拼合，极其尖锐地解构了魏玛共和国初期的父权与军国主义乱象。",
    tags: ["ArtistMovement", "Dada", "Hannah Hoch", "Photomontage", "Berlin Dada"],
    difficulty: 2
  },
  {
    id: "arched_157",
    domain: "artist_movement",
    subCategory: "Cultural Ideology",
    era: "20th_avant_garde",
    questionEn: "What was Marcel Duchamp's radical philosophical motivation in selecting ordinary industrially manufactured objects as 'Readymades'?",
    questionZh: "马塞尔·杜尚选择自行车轮、雪铲与小便斗等普通工业批量制成品作为“现成品”（Readymade）艺术的核心哲学动机是：",
    optionsEn: [
      "To eliminate 'retinal art' (pleasing to the eye) in favor of conceptual intellectual choice, demonstrating that an object becomes art purely through the artist's conceptual designation and new point of view",
      "To showcase his superior technical metal-forging skills to the French Academy",
      "To assist commercial hardware factories in selling surplus sanitation inventory",
      "To prove that machine-made plastic was visually identical to Greek marble"
    ],
    optionsZh: [
      "彻底废除只取悦眼球肉体的“视网膜艺术”（Retinal Art），将艺术从手艺劳动升华为纯粹观念智性抉择——物品之所以成为艺术，仅仅因为艺术家的命名与赋予的新语境视界",
      "向法国美术学院证明自己具有超越常人的卓越精密金属锻压技艺",
      "协助当时面临倒闭危机的纽约五金建材厂推销滞销积压的下水道卫浴洁具",
      "证明工业流水线塑料在光学折射上与帕罗斯古希腊大理石完全无法区分"
    ],
    correctAnswer: 0,
    explanationEn: "Duchamp rejected the centuries-old requirement of manual craftsmanship, asserting that art resides entirely in the mind: by selecting an ordinary object and placing it in a museum, the artist creates a new thought for that object.",
    explanationZh: "杜尚反对画家沦为颜料的奴隶（“像画家一样愚蠢”的俗语）。现成品的关键在于“审美冷漠”：不因为它美，也不因为它丑，仅凭艺术家的概念指认抽离其实用功能，完成了艺术史上从“视觉手艺”向“哲学观念”的根本转向。",
    tags: ["ArtistMovement", "Duchamp", "Readymade", "Conceptual Art", "Theory"],
    difficulty: 1
  },
  {
    id: "arched_158",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "postwar_contemporary",
    questionEn: "Which influential American art critic coined the term 'Action Painting' in his famous 1952 essay 'The American Action Painters'?",
    questionZh: "在1952年发表划时代著名评论文章《美国行动画家们》（The American Action Painters），率先创造并定义了“行动绘画”（Action Painting）一词的批评家是：",
    optionsEn: ["Harold Rosenberg", "Clement Greenberg", "Leo Steinberg", "Meyer Schapiro"],
    optionsZh: ["哈罗德·罗森伯格 (Harold Rosenberg)", "克莱门特·格林伯格 (Clement Greenberg)", "利奥·施坦伯格 (Leo Steinberg)", "迈耶·夏皮罗 (Meyer Schapiro)"],
    correctAnswer: 0,
    explanationEn: "Harold Rosenberg famously wrote in 1952: 'At a certain moment the canvas began to appear to one American painter after another as an arena in which to act — rather than as a space in which to reproduce, re-design, analyze or \"express\" an object.'",
    explanationZh: "哈罗德·罗森伯格在1952年写下名句：“在某一时刻，画布对于一个接一个的美国画家来说，不再是一个用来描摹、分析客观对象的平淡空间，而是一个供人在其中‘行动’的决斗场！”从而确立了波洛克等人行动画派理论。",
    tags: ["ArtistMovement", "Abstract Expressionism", "Action Painting", "Harold Rosenberg", "Criticism"],
    difficulty: 2
  },
  {
    id: "arched_159",
    domain: "artist_movement",
    subCategory: "Cultural Ideology",
    era: "postwar_contemporary",
    questionEn: "What formalist principle did critic Clement Greenberg define as the historical destiny and pure essence of Modernist painting in essays like 'Modernist Painting' (1960)?",
    questionZh: "艺术批评泰斗克莱门特·格林伯格（Clement Greenberg）在《现代主义绘画》（1960）等经典论述中，将现代绘画不可回避的历史宿命与纯粹本质归结为：",
    optionsEn: [
      "Medium specificity and the progressive, self-critical acknowledgment of the literal flatness of the canvas surface",
      "The photographic narrative storytelling of religious salvation and historical wars",
      "The illusionistic three-dimensional depth rendering of sculptural perspective trompe-l'œil",
      "The total subordination of painting to theatrical literature and operatic stage sets"
    ],
    optionsZh: [
      "媒介的自律性（Medium Specificity）以及对画布物理“二维平面性”（Flatness）的自觉批判与纯粹坚守",
      "借助照相写实叙事手法宣讲基督教神圣救赎与重大历史战争史诗",
      "对三维立体纵深感和雕塑式透视障眼法（Trompe-l'œil）的逼真复活",
      "油画应当绝对从属于舞台戏剧文学与歌剧舞台布景叙事的附属地位"
    ],
    correctAnswer: 0,
    explanationEn: "Greenberg argued that each art medium must purify itself by eliminating features borrowed from other arts: since sculpture has three dimensions, painting must purge the illusion of depth to celebrate its unique irreducible flat canvas.",
    explanationZh: "格林伯格的形式主义现代性纲领强调：绘画不可模仿雕塑的三维实体虚幻透视，必须清除一切多余的文学叙事，坦然承认画布底板“不可削减的纯粹平面性”（Flatness），以此捍卫高级艺术对大众庸俗媚俗（Kitsch）的抵御。",
    tags: ["ArtistMovement", "Clement Greenberg", "Formalism", "Flatness", "Modernist Painting"],
    difficulty: 2
  },
  {
    id: "arched_160",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "postwar_contemporary",
    questionEn: "How did 'Color Field Painting' (Rothko, Newman, Still) diverge stylistically from the gestural branch of Abstract Expressionism (Pollock, De Kooning)?",
    questionZh: "以马克·罗斯科、巴内特·纽曼为代表的“色域绘画”（Color Field），在形式语言与审美体验上与以波洛克、德·库宁为代表的“姿态行动绘画”的根本分野在于：",
    optionsEn: [
      "Color Field eliminated agitated, muscular physical brushwork in favor of vast, meditative, unbroken expanses of luminous color inducing transcendental quietude",
      "Color Field returned to hyper-realistic figurative portraiture of working fishermen",
      "Color Field abandoned color entirely to work only in monochrome charcoal rubbings",
      "Color Field replaced canvas with welded industrial scrap iron beams"
    ],
    optionsZh: [
      "色域派彻底摒弃了狂躁、肌肉发力的肢体痕迹与厚涂笔触，代之以无边际广阔、柔和发光的静穆大色块，诱发冥想与崇高精神超验体验",
      "色域派完全退回到超写实主义的人像肖像写生技法",
      "色域派彻底剔除所有彩色颜料，仅在木板上使用炭笔进行单色摩擦排线",
      "色域派彻底废除布面绘画，改用废弃工字钢与火车铁轨进行焊接堆砌"
    ],
    correctAnswer: 0,
    explanationEn: "While Action Painting was dynamic, chaotic, and corporeal, Color Field painting employed expansive flat chromatic fields (or Newman's vertical 'zips') to immerse the viewer in contemplative, sublime spiritual vibration.",
    explanationZh: "姿态行动画派如暴风骤雨般记录身体狂野搏斗，而色域画派（如纽曼垂直分割画面的“拉链”Zip与罗斯科边缘呼吸的色团）则如澄明深邃的色彩海洋，引导观者进入深沉静谧的宗教般崇高冥想境界。",
    tags: ["ArtistMovement", "Abstract Expressionism", "Color Field", "Rothko", "Barnett Newman"],
    difficulty: 1
  },
  {
    id: "arched_161",
    domain: "artist_movement",
    subCategory: "Artistic Affiliations",
    era: "postwar_contemporary",
    questionEn: "Which pioneer of Post-Painterly Abstraction invented the 'soak-stain' method in 1952 with 'Mountains and Sea', pouring thinned oil paints directly onto raw, unprimed cotton duck canvas?",
    questionZh: "在1952年以代表作《山与海》（Mountains and Sea）开创“渗染技法”（Soak-stain）、将稀释油画颜料直接倾倒浸透在未经打底的生棉帆布纤维中的女画家先锋是：",
    optionsEn: ["Helen Frankenthaler", "Joan Mitchell", "Lee Krasner", "Elaine de Kooning"],
    optionsZh: ["海伦·弗兰肯瑟勒 (Helen Frankenthaler)", "琼·米切尔 (Joan Mitchell)", "李·克拉斯纳 (Lee Krasner)", "伊莱恩·德·库宁 (Elaine de Kooning)"],
    correctAnswer: 0,
    explanationEn: "Helen Frankenthaler diluted oil paint with turpentine and poured it onto unprimed canvas, allowing raw color to soak deeply into the fabric fibers like watercolor, directly inspiring Morris Louis and Kenneth Noland.",
    explanationZh: "弗兰肯瑟勒将松节油高度稀释的液态颜料倾倒在未作石膏涂层的原色棉布上，使色彩完全融渗并成为画布肌理本身（Soak-stain），抹去了颜料堆积在画布表层的物理厚度，启发了后绘画抽象与色域绘画发展。",
    tags: ["ArtistMovement", "Post-Painterly Abstraction", "Helen Frankenthaler", "Soak Stain"],
    difficulty: 2
  },
  {
    id: "arched_162",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "postwar_contemporary",
    questionEn: "What radical definition did Donald Judd assert in his landmark 1965 essay 'Specific Objects' to define Minimalist three-dimensional structures?",
    questionZh: "唐纳德·贾德（Donald Judd）在其1965年里程碑式论文《特定物体》（Specific Objects）中，对极简主义立体空间形态作出的开创性断言是：",
    optionsEn: [
      "The new three-dimensional work is neither painting nor sculpture; it employs industrial prefabricated materials (galvanized iron, plexiglass, aluminum) as unitary, non-relational wholes free from European illusionism",
      "Sculpture must always carve human figures from white Carrara marble blocks",
      "Art must strictly imitate the anatomical proportions of Michelangelo's Sistine Chapel",
      "Artists must manufacture functional household furniture for department stores"
    ],
    optionsZh: [
      "这种全新的三维立体艺术既不是传统的绘画，也不是传统的雕塑，它采用工业预制原材（镀锌铁皮、亚克力有机玻璃、铝型材）构成单一不可分割、摒弃欧洲关系构图与错觉的“特定物体”",
      "一切雕塑必须终生在卡拉拉白大理石巨石中雕刻神圣人体姿态",
      "艺术必须严格模拟米开朗基罗西斯廷礼拜堂天顶画中的解剖学黄金比例",
      "艺术家必须在百货公司地下室亲自手工制作供普通家庭使用的功能性橱柜"
    ],
    correctAnswer: 0,
    explanationEn: "Judd rejected both painterly illusionism and anthropomorphic sculptural pedestal traditions, designing serially stacked wall boxes fabricated in industrial sheet-metal factories without internal metaphorical meaning ('It is what it is').",
    explanationZh: "贾德彻底打破了“画就是画、雕塑就是雕塑”的旧分类，提出“特定物体”（Specific Objects）——由工业钣金厂标准化加工的无缝金属箱体等距排布，不隐喻任何神话情绪，“你看到什么就是什么”。",
    tags: ["ArtistMovement", "Minimalism", "Donald Judd", "Specific Objects", "Theory"],
    difficulty: 2
  },
  {
    id: "arched_163",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "postwar_contemporary",
    questionEn: "Which Italian art critic coined the movement 'Arte Povera' (Poor Art) in 1967 with the manifesto 'Notes for a Guerrilla War' published in 'Flash Art'?",
    questionZh: "在1967年热那亚展览并于《闪电艺术》（Flash Art）杂志发表《游击战争札记》，正式确立“贫穷艺术”（Arte Povera）运动纲领的意大利著名策展人与批评家是：",
    optionsEn: ["Germano Celant", "Achille Bonito Oliva", "Renato Barilli", "Gillo Dorfles"],
    optionsZh: ["热尔马诺·切兰特 (Germano Celant)", "阿基莱·博尼托·奥利瓦 (Achille Bonito Oliva)", "雷纳托·巴里利 (Renato Barilli)", "吉洛·多尔弗莱斯 (Gillo Dorfles)"],
    correctAnswer: 0,
    explanationEn: "Germano Celant launched Arte Povera in September 1967 (invoking Jerzy Grotowski's 'Poor Theatre'), championing the use of non-commercial raw, organic, and base materials (dirt, rags, sticks, coal, lettuce) as a guerrilla resistance against consumerist spectacle.",
    explanationZh: "热尔马诺·切兰特（Germano Celant）借用格洛托夫斯基“质朴戏剧”概念，提出艺术家应如游击队员般摆脱资本主义艺术市场机器控制，使用树枝、碎石、泥土、废铁与新鲜蔬菜等未经修饰的原始“贫乏”材质展开身体与自然对话。",
    tags: ["ArtistMovement", "Arte Povera", "Germano Celant", "Manifesto", "Italian Art"],
    difficulty: 1
  },
  {
    id: "arched_164",
    domain: "artist_movement",
    subCategory: "Theoretical Manifestos",
    era: "postwar_contemporary",
    questionEn: "Which seminal dictum was proclaimed by Sol LeWitt in his 1967 essay 'Paragraphs on Conceptual Art'?",
    questionZh: "索尔·勒维特（Sol LeWitt）在其1967年发表的观念艺术奠基性论文《关于观念艺术的短评》（Paragraphs on Conceptual Art）中提出的核心金句是：",
    optionsEn: [
      "The idea becomes a machine that makes the art",
      "Less is more",
      "Form follows function",
      "Art is dead, long live machine art"
    ],
    optionsZh: [
      "观念本身即成为制造艺术的机器 (The idea becomes a machine that makes the art)",
      "少即是多 (Less is more)",
      "形式追随功能 (Form follows function)",
      "艺术已死，机器艺术万岁！"
    ],
    correctAnswer: 0,
    explanationEn: "Sol LeWitt formulated that in Conceptual Art, planning and intellectual conception are paramount, while physical execution is a perfunctory secondary step that can be carried out by draftsmen following written instructions.",
    explanationZh: "索尔·勒维特指出：观念艺术中最具决定性的是思想观念（Idea/Concept），观念是一台自动运转制造艺术的机器；物理制作过程只是一套照章办事的执行程序（如他在墙上预留文本说明由助手绘制的墙画）。",
    tags: ["ArtistMovement", "Conceptual Art", "Sol LeWitt", "Theory"],
    difficulty: 2
  },
  {
    id: "arched_165",
    domain: "artist_movement",
    subCategory: "Movement Categorization",
    era: "postwar_contemporary",
    questionEn: "Which Italian Neo-Expressionist movement was launched in 1979 by critic Achille Bonito Oliva, featuring figurative painters like Sandro Chia, Francesco Clemente, Enzo Cucchi, Nicola De Maria, and Mimmo Paladino?",
    questionZh: "1979年由批评家阿基莱·博尼托·奥利瓦（Achille Bonito Oliva）发起，倡导告别严苛冷酷的观念与极简抽象、全面回归具象表现与传统绘画手工性的意大利流派是：",
    optionsEn: [
      "Transavanguardia (Transavantgarde)",
      "Arte Povera",
      "Novecento Italiano",
      "Spazialismo"
    ],
    optionsZh: [
      "超前卫 / 超先锋派 (Transavanguardia)",
      "贫穷艺术 (Arte Povera)",
      "意大利二十世纪画派 (Novecento Italiano)",
      "空间主义 (Spazialismo)"
    ],
    correctAnswer: 0,
    explanationEn: "Achille Bonito Oliva christened the 'Transavanguardia' in 1979, championing an uninhibited, nomadic return to emotional figurative brushwork, mythic regional imagery, and free historical pastiche across Italy (Chia, Clemente, Cucchi, Paladino).",
    explanationZh: "奥利瓦提出的“超前卫”（Transavanguardia）宣告了战后极简与冷硬观念艺术霸权的终结，率领奇亚、克莱门特、库基、帕拉迪诺“五虎将”游牧般自由穿梭于神话、梦魇与传统画意笔触之间，掀起80年代欧洲新具象表现狂澜。",
    tags: ["ArtistMovement", "Transavanguardia", "Bonito Oliva", "Italian Art", "Neo-Expressionism"],
    difficulty: 2
  }
];

// =========================================================================
// Domain 5: Renaissance & Classical Mastery (45 questions)
// =========================================================================
export const renaissanceClassicalPart1 = [
  {
    id: "arched_166",
    domain: "renaissance_classical",
    subCategory: "Classical Antiquity & Orders",
    era: "classical",
    questionEn: "What is the canonical superposition of Classical orders applied to the exterior facade of the Roman Colosseum (Flavian Amphitheater)?",
    questionZh: "罗马斗兽场（弗拉维安圆形剧场，公元1世纪）外立面四层拱券柱式自下而上的标准叠套规范是：",
    optionsEn: [
      "Tuscan / Doric (ground) -> Ionic (second) -> Corinthian (third) -> Corinthian pilasters (attic)",
      "Corinthian (ground) -> Ionic (second) -> Doric (third) -> Tuscan (attic)",
      "Ionic (ground) -> Doric (second) -> Corinthian (third) -> Composite (attic)",
      "Composite (ground) -> Corinthian (second) -> Ionic (third) -> Doric (attic)"
    ],
    optionsZh: [
      "一层托斯卡纳 / 多立克柱式 -> 二层爱奥尼柱式 -> 三层科林斯柱式 -> 顶层科林斯壁柱附墙",
      "一层科林斯柱式 -> 二层爱奥尼柱式 -> 三层多立克柱式 -> 顶层托斯卡纳柱式",
      "一层爱奥尼柱式 -> 二层多立克柱式 -> 三层科林斯柱式 -> 顶层复合柱式",
      "一层复合柱式 -> 二层科林斯柱式 -> 三层爱奥尼柱式 -> 顶层多立克柱式"
    ],
    correctAnswer: 0,
    explanationEn: "The Colosseum codified the Roman architectural rule of superposition: placing the heaviest, sturdiest order (Tuscan/Doric) at the base, followed by the lighter Ionic in the middle, and the most slender, decorative Corinthian at the upper levels.",
    explanationZh: "罗马斗兽场确立了西方柱式叠晕（Superposition）古典法则：底层采用最敦厚稳重的托斯卡纳/多立克式承担视觉重力，二层过渡为优雅的爱奥尼式，三层与四层顶楼则采用修长奢华的科林斯柱式与壁柱。",
    tags: ["RenaissanceClassical", "Architecture", "Classical", "Colosseum", "Orders", "Superposition"],
    difficulty: 1
  },
  {
    id: "arched_167",
    domain: "renaissance_classical",
    subCategory: "Classical Antiquity & Orders",
    era: "classical",
    questionEn: "What structural detail fundamentally distinguishes the Greek Doric column from the Roman Doric and other Classical orders?",
    questionZh: "古希腊正统多立克柱式（Greek Doric）在柱身下端构造上，与古罗马多立克柱式及其他所有古典柱式最根本的区别是：",
    optionsEn: [
      "The Greek Doric fluted column shaft rests directly on the stylobate (stepped floor) with no individual column base",
      "The Greek Doric has two massive spiral volutes curling beneath the abacus",
      "The Greek Doric column is carved entirely out of poured liquid glass",
      "The Greek Doric capital is wrapped in double rows of acanthus leaves"
    ],
    optionsZh: [
      "古希腊多立克凹槽柱身直接矗立在神庙台基（Stylobate）上，完全没有独立的柱础垫座 (No Base)",
      "古希腊多立克柱头在顶板下方拥有两个巨大的侧向涡卷",
      "古希腊多立克柱身完全由液态熔融水晶玻璃一次性浇筑成型",
      "古希腊多立克柱头被双层茂密的茛苕叶雕刻环绕包裹"
    ],
    correctAnswer: 0,
    explanationEn: "In genuine Greek Doric architecture (such as the Parthenon in Athens), the column shaft has no base (torus/plinth) and rises directly from the temple platform (stylobate); Romans later modified this by adding a base to Roman Doric.",
    explanationZh: "古希腊多立克柱式体现质朴阳刚力学美，凹槽柱身直接扎根于三层石台基（Stylobate）之上而绝无独立柱础；古罗马人在改造发展罗马多立克与托斯卡纳柱式时，则普遍增设了圆形凸线柱础（Torus）。",
    tags: ["RenaissanceClassical", "Architecture", "Classical", "Doric", "Stylobate", "Orders"],
    difficulty: 2
  },
  {
    id: "arched_168",
    domain: "renaissance_classical",
    subCategory: "Classical Antiquity & Orders",
    era: "classical",
    questionEn: "What three horizontal components comprise the Classical architectural entablature resting above columns?",
    questionZh: "古典柱式结构中，横置在立柱柱头上方的大梁水平檐部（Entablature），自下而上由哪三大部分精确构成？",
    optionsEn: [
      "Architrave (epistyle) -> Frieze (containing triglyphs & metopes in Doric) -> Cornice (geison)",
      "Pediment -> Tympanum -> Acroterion",
      "Plinth -> Torus -> Scotia",
      "Stylobate -> Crepidoma -> Stereobate"
    ],
    optionsZh: [
      "下层主梁 / 额枋 (Architrave) -> 中层檐壁 / 饰带 (Frieze) -> 上层挑檐 / 檐口 (Cornice)",
      "三角形山花 (Pediment) -> 山花内壁 (Tympanum) -> 屋脊装饰 (Acroterion)",
      "方垫石 (Plinth) -> 凸圆线 (Torus) -> 凹圆线 (Scotia)",
      "基座顶层 (Stylobate) -> 阶梯台基 (Crepidoma) -> 基础地梁 (Stereobate)"
    ],
    correctAnswer: 0,
    explanationEn: "The Classical entablature comprises the load-bearing Architrave resting on column capitals, the intermediate Frieze (sculpted or divided into triglyphs and metopes in the Doric order), and the projecting overhanging Cornice.",
    explanationZh: "古典檐部（Entablature）分为三层：直接承载于柱顶的大梁额枋（Architrave）、承载浮雕叙事或在多立克柱式中划分三道槽与间板的檐壁（Frieze）、以及最上方悬挑挡雨的挑檐（Cornice）。",
    tags: ["RenaissanceClassical", "Architecture", "Classical", "Entablature", "Orders"],
    difficulty: 2
  },
  {
    id: "arched_169",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "medieval",
    questionEn: "How did Giotto di Bondone's 'Ognissanti Madonna' (c. 1310) revolutionize Trecento Italian painting compared to his master Cimabue's 'Santa Trinita Maestà' (c. 1285)?",
    questionZh: "乔托的《万圣圣母》（Ognissanti Madonna, 约1310）与他的老师奇马布埃的《圣三位一体圣母》（Santa Trinita Maestà, 约1285）相比，在西方绘画史上实现的最根本突破在于：",
    optionsEn: [
      "Giotto replaced Byzantine gold-threaded flat drapery with volumetric bodily weight, tactile three-dimensional mass, natural shadow chiaroscuro, and a credible spatial throne",
      "Giotto used industrial airbrushing on metallic sheets",
      "Giotto eliminated all religious figures and painted a pure abstract landscape",
      "Giotto painted with synthetic acrylic colors imported from China"
    ],
    optionsZh: [
      "乔托用具有真实人体重量感、实体三维雕塑体量、真实投射阴影与具有可居住纵深透视的哥特式大理石宝座，取代了拜占庭扁平金线褶皱与不食人间烟火的等级比例",
      "乔托在金属镀层底板上使用了现代工业气泵喷枪",
      "乔托完全抹除了圣母圣子，画成了纯粹无人的抽象风景画",
      "乔托使用了从中国进口的高分子人工丙烯水性涂料"
    ],
    correctAnswer: 0,
    explanationEn: "In the Uffizi Gallery, Giotto's Madonna sits as a solid, earth-bound peasant mother whose knees and breasts push against realistic white drapery, inaugurating the humanist observation of nature that birthed the Renaissance.",
    explanationZh: "在乌菲齐美术馆比邻陈列的这两幅画见证了划时代转折：奇马布埃仍残留拜占庭超现实金色线条与扁平漂浮感；而乔托笔下的圣母不仅具有结实圆润的人性母躯、清晰的乳房与膝盖轮廓，更坐在一座可测定三维透视空间的哥特大理石宝座之中。",
    tags: ["RenaissanceClassical", "Giotto", "Cimabue", "Naturalism", "Proto-Renaissance"],
    difficulty: 1
  },
  {
    id: "arched_170",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "medieval",
    questionEn: "In Giotto's fresco masterpiece 'The Lamentation' (Compianto sul Cristo morto, 1303-1305) in the Scrovegni Chapel in Padua, what compositional device powerfully directs the viewer's gaze toward Christ and the Virgin Mary?",
    questionZh: "在帕多瓦斯克罗威尼礼拜堂（Arena Chapel）的乔托湿壁画巅峰《哀悼基督》（1303-1305）中，画家运用了哪种强有力的构图线条将所有戏剧张力聚焦于左下角的基督与圣母？",
    optionsEn: [
      "A steep, diagonal rocky landscape ridge sloping downward across the fresco directly pointing to the grief-stricken faces of Mary and Christ",
      "A soaring vertical Doric marble column placed dead-center in the composition",
      "A symmetrical Roman triumphal arch framing Christ's head",
      "A golden halo radiating concentric laser beams across the blue sky"
    ],
    optionsZh: [
      "一道自右上向左下急剧倾斜倾泻的荒芜天然岩石山峦对角线，如同一支无形箭头将视线导向圣母与基督深情贴面的悲恸焦点",
      "一根贯穿画幅中央、笔直顶天立地的多立克式白色大理石巨柱",
      "一座严格居中对称、将基督头颅完全框在正下方的古罗马凯旋门",
      "从群青色天空中放射出呈同心圆扩散的数千道金色闪烁激光线条"
    ],
    correctAnswer: 0,
    explanationEn: "Giotto uses a dramatic descending diagonal rock ledge to anchor the emotional focus in the lower-left, reinforced by figures with their backs turned to the viewer (creating pictorial depth) and weeping angels tumbling through ultramarine blue skies.",
    explanationZh: "乔托打破中世纪中央对称圣像法则，利用一道向下倾斜的嶙峋岩壁将全画焦点压在左下角，背对观众的信徒身影更构建出真实围拢观看的空间深度，空中天使撕心裂肺俯冲悲啼，堪称人类情感戏剧写实的破晓曙光。",
    tags: ["RenaissanceClassical", "Giotto", "Scrovegni Chapel", "Lamentation", "Perspective"],
    difficulty: 1
  },
  {
    id: "arched_171",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "Which Early Renaissance milestone by Masaccio in the Brancacci Chapel (Santa Maria del Carmine, Florence, c. 1425-1427) unified continuous biblical narrative with consistent natural light streaming from the chapel's actual right-hand window?",
    questionZh: "马萨乔在佛罗伦萨卡尔米内圣母圣殿布兰卡契礼拜堂创作的早期文艺复兴划时代湿壁画（约1425-1427），将三段式连续圣经故事与礼拜堂右侧真实窗户采光完全融合的名作是：",
    optionsEn: [
      "The Tribute Money (Il tributo)",
      "The Expulsion of Adam and Eve from Paradise",
      "Saint Peter Healing the Sick with his Shadow",
      "The Raising of the Son of Theophilus"
    ],
    optionsZh: [
      "《纳税钱》(The Tribute Money / Il tributo)",
      "《逐出伊甸园》(Expulsion of Adam and Eve)",
      "《圣彼得用影子治愈病人》",
      "《狄奥菲鲁斯之子的复活》"
    ],
    correctAnswer: 0,
    explanationEn: "In 'The Tribute Money', Masaccio depicted three sequential scenes on one canvas (tax collector demanding coins, Peter catching fish, Peter paying collector) under unified atmospheric lighting that casts consistent ground shadows matching the real window of the Brancacci Chapel.",
    explanationZh: "《纳税钱》展现了马萨乔无与伦比的天才：画面不仅以透视缩头法在中央、左侧和右侧融合连续叙事，更使画中基督与使徒所投下的深厚地面阴影方向，与礼拜堂右侧真实物理日光完全吻合，创造了令人信服的沉浸式空间。",
    tags: ["RenaissanceClassical", "Masaccio", "Brancacci Chapel", "Tribute Money", "Chiaroscuro"],
    difficulty: 1
  },
  {
    id: "arched_172",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "Which fresco by Masaccio in Santa Maria Novella, Florence (c. 1425-1427), represents the earliest surviving painting to execute Brunelleschi's exact mathematical one-point linear perspective in a deep coffered barrel-vaulted chapel?",
    questionZh: "马萨乔于约1425-1427年在佛罗伦萨新圣母大殿绘制的哪幅纪念碑式湿壁画，是艺术史上首幅精确运用布鲁内莱斯基单点科学线性透视法、描绘深邃藻井筒形拱穹顶与骨骼警世箴言的不朽名作？",
    optionsEn: [
      "The Holy Trinity (Santa Trinità)",
      "The Annunciation",
      "The San Giovenale Triptych",
      "The Pisa Polyptych"
    ],
    optionsZh: [
      "《圣三位一体》(The Holy Trinity / Santa Trinità)",
      "《受胎告知》",
      "《圣乔韦纳莱三联画》",
      "《比萨多联多面画》"
    ],
    correctAnswer: 0,
    explanationEn: "Masaccio's 'Holy Trinity' fresco simulates a deep triumphal chapel opening through the wall using Brunelleschi's perspective system, structured above an open tomb displaying Adam's skeleton with the chilling memento mori: 'What you are I once was; what I am you will be.'",
    explanationZh: "马萨乔在《圣三位一体》中以精确的数学消失点（位于观者视平线祈祷者平台高度），在平整墙面上魔术般开辟出一座深凹入墙的罗马式藻井桶拱礼拜堂，下方骷髅墓穴刻着“现在的你正是我过去，现在的我正是你未来”，成为透视科学的永恒丰碑。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Masaccio_trinity.jpg/800px-Masaccio_trinity.jpg",
    fallbackImage: "/images/artworks/masaccio-trinity.jpg",
    tags: ["RenaissanceClassical", "Masaccio", "Holy Trinity", "Perspective", "Brunelleschi"],
    difficulty: 1
  },
  {
    id: "arched_173",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "How did Filippo Brunelleschi miraculously erect the colossal 45-meter-wide octagonal dome of Santa Maria del Fiore in Florence (1420-1436) without timber scaffolding centering from the ground?",
    questionZh: "菲利波·布鲁内莱斯基在营建佛罗伦萨圣母百花大教堂跨度达45米的八角形巨型穹顶（1420-1436）时，在没有从地面搭建传统满堂木支架支撑的情况下，实现的工程奇迹核心技术是：",
    optionsEn: [
      "Inventing a self-supporting double octagonal shell tied with hidden stone and iron chains, laid with interlocking herringbone brickwork (spina di pesce) and hoisted with novel ox-powered crane machinery",
      "Inflating a giant balloon membrane filled with lighter-than-air hydrogen gas",
      "Pouring liquid Roman pozzolanic volcanic concrete over an immense mound of earth mixed with gold coins",
      "Constructing a solid dome of glued pine timber ribs covered in sheet copper"
    ],
    optionsZh: [
      "首创内外双层自承重八角穹壳系统，内嵌石材铁扣箍紧环链，采用交错自锁的“鱼骨状砌砖法”（Spina di pesce），并自主研发多速公牛动力提升起重机械",
      "向穹顶下方注入比空气轻的热气球巨大气囊以托举石材",
      "堆填填满金币的数万吨泥土作为内模，并连续浇注古罗马火山灰混凝土",
      "使用榫卯胶合松木板拼接成实心木肋拱壳，表面外包薄紫铜板"
    ],
    correctAnswer: 0,
    explanationEn: "Brunelleschi avoided the impossible cost and timber shortages of falsework by employing an ingenious self-supporting herringbone masonry pattern that locked bricks horizontally between 8 major and 16 minor radial ribs, hoisting materials with his patented reversable hoist.",
    explanationZh: "百花穹顶跨度巨大且高达54米无法搭建满堂木支架，布鲁内莱斯基采用内外双壳中空构造以大幅减重，利用斜插的鱼骨砌法让砖石在自重下相互咬合不向内坍塌，并以24根大理石肋条与水平木铁环箍收紧，宣告文艺复兴大营造时代的降临。",
    tags: ["RenaissanceClassical", "Architecture", "Brunelleschi", "Florence Dome", "Engineering"],
    difficulty: 1
  },
  {
    id: "arched_174",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which civic loggia in Florence, designed by Filippo Brunelleschi in 1419, inaugurated Renaissance architecture with its modular square bay rhythm, semicircular arches on slender composite columns, and glazed terracotta roundels by Andrea della Robbia?",
    questionZh: "由布鲁内莱斯基受丝绸行会资助在佛罗伦萨圣母安农齐亚塔广场设计的哪座育婴堂回廊（1419），以精准的纯正立方体进深模数、纤细柱头半圆拱与德拉·罗比亚婴儿彩陶圆盘，正式宣告了文艺复兴建筑学诞生？",
    optionsEn: [
      "Ospedale degli Innocenti (Foundling Hospital)",
      "Pazzi Chapel at Santa Croce",
      "Sagrestia Vecchia at San Lorenzo",
      "Loggia dei Lanzi"
    ],
    optionsZh: [
      "孤儿院 / 育婴堂敞廊 (Ospedale degli Innocenti)",
      "帕齐礼拜堂 (Pazzi Chapel)",
      "圣洛伦佐老圣器室 (Sagrestia Vecchia)",
      "兰奇敞廊 (Loggia dei Lanzi)"
    ],
    correctAnswer: 0,
    explanationEn: "The Ospedale degli Innocenti (begun 1419) established Renaissance spatial modularity: each bay is an exact cube where column height equals intercolumniation and porch depth, adorned with blue-and-white glazed terracotta roundels of swaddled infants.",
    explanationZh: "佛罗伦萨育婴堂（Ospedale degli Innocenti）以纯粹的理性几何重新定义公共建筑：柱高、柱距与敞廊进深严格等于一模数，九个半圆帆拱轻灵舒展，拱脚上方镶嵌安德烈·德拉·罗比亚蓝白釉陶婴儿圆盘，是文艺复兴建筑最典雅的人文主义开山之作。",
    tags: ["RenaissanceClassical", "Architecture", "Brunelleschi", "Ospedale degli Innocenti", "Modularity"],
    difficulty: 2
  },
  {
    id: "arched_175",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "In his foundational architectural treatise 'De re aedificatoria' (1452), how did Leon Battista Alberti famously define the concept of 'Beauty' (concinnitas)?",
    questionZh: "莱昂·巴蒂斯塔·阿尔伯蒂在其1452年撰写的奠基性理论巨著《论建筑》（De re aedificatoria）中，对“美”（Concinnitas / 和谐）给出的至高经典定义是：",
    optionsEn: [
      "The harmony of all parts, in whatsoever subject it appears, fitted together with such proportion and connection, that nothing could be added, taken away, or altered, but for the worse",
      "Whatever building costs the most gold and contains the richest gilded ornament",
      "The random chaotic asymmetry produced by automatic dream painting",
      "The functional efficiency of a steam engine running at maximum velocity"
    ],
    optionsZh: [
      "各组成部分之间的和谐统一，无论在何种对象中，它们都以极其完美的比例与秩序契合在一起，以至于任何增添、删减或改动都只会破坏这种完美而变得更糟",
      "凡是耗费最多黄金库银、镶嵌最浓密镀金浮雕与名贵宝石的建筑就是最美的",
      "由无意识梦幻联想所产生的无序、偶发与完全不对称结构形态",
      "蒸汽机动力引擎在极限最高机械运转速度下所展现的工业功耗比"
    ],
    correctAnswer: 0,
    explanationEn: "Alberti's Latin concept of 'concinnitas' (harmonious design) was grounded in cosmic musical and geometric ratios, asserting that true beauty is not superficial ornament but organic, structural mathematical perfection.",
    explanationZh: "阿尔伯蒂将古罗马西塞罗与维特鲁威思想升华，提出“美是各组成部分之间的严格协和统一（Concinnitas），使人无法在其中增减更动一砖一瓦而不损伤整体”，成为古典与文艺复兴建筑理论的最高信条。",
    tags: ["RenaissanceClassical", "Architecture", "Alberti", "De re aedificatoria", "Concinnitas", "Beauty"],
    difficulty: 2
  },
  {
    id: "arched_176",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which Florentine Renaissance palace facade designed by Leon Battista Alberti (c. 1446-1451) was the very first to superimpose the Classical pilaster orders (Doric/Tuscan, Ionic, Corinthian) across three stories derived from the Roman Colosseum?",
    questionZh: "阿尔伯蒂在佛罗伦萨设计的哪座文艺复兴私人府邸（约1446-1451），在历史上率先将古罗马斗兽场的三层古典壁柱叠套法则（一层托斯卡纳、二层爱奥尼、三层科林斯）精巧平刻在光滑琢石立面之上？",
    optionsEn: [
      "Palazzo Rucellai",
      "Palazzo Medici Riccardi",
      "Palazzo Strozzi",
      "Palazzo Pitti"
    ],
    optionsZh: [
      "鲁切拉宫 (Palazzo Rucellai)",
      "美第奇-里卡尔迪宫 (Palazzo Medici Riccardi)",
      "斯特罗齐宫 (Palazzo Strozzi)",
      "皮蒂宫 (Palazzo Pitti)"
    ],
    correctAnswer: 0,
    explanationEn: "Palazzo Rucellai marked a decisive intellectual departure from Michelozzo's rugged rusticated fortress-like Palazzo Medici, applying smooth ashlar masonry divided by delicate classical pilasters and friezes reflecting Roman antique erudition.",
    explanationZh: "阿尔伯蒂为富商鲁切拉设计的府邸彻底脱离了美第奇宫沉重粗犷的防御性石块，以古罗马斗兽场为楷模，在三层细腻平整琢石墙面上分别嵌入托斯卡纳、爱奥尼与科林斯平壁柱，奠定了文艺复兴贵族府邸知性文雅典范。",
    tags: ["RenaissanceClassical", "Architecture", "Alberti", "Palazzo Rucellai", "Orders", "Superposition"],
    difficulty: 2
  },
  {
    id: "arched_177",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which monumental basilica in Mantua, begun in 1472 by Leon Battista Alberti, fused a Roman triumphal arch and a temple front onto its facade and abolished traditional side aisles in favor of a colossal coffered barrel vault flanked by chapels?",
    questionZh: "阿尔伯蒂于1472年在曼托瓦始建的哪座纪念碑式宏伟大教堂，在立面上完美将古罗马凯旋门与神庙三角山花融为一体，并在室内彻底取消传统侧廊、改以巨型通体藻井筒形拱横跨中央大厅？",
    optionsEn: [
      "Basilica of Sant'Andrea in Mantua",
      "San Sebastiano in Mantua",
      "Santa Maria Novella in Florence",
      "Tempio Malatestiano in Rimini"
    ],
    optionsZh: [
      "曼托瓦圣安德肋圣殿 (Sant'Andrea in Mantua)",
      "曼托瓦圣塞巴斯蒂亚诺教堂 (San Sebastiano)",
      "佛罗伦萨新圣母大殿立面",
      "里米尼马拉泰斯塔圣殿 (Tempio Malatestiano)"
    ],
    correctAnswer: 0,
    explanationEn: "Sant'Andrea in Mantua replaced traditional Gothic colonnaded aisles with deep alternating chapels under an immense 18-meter-wide coffered barrel vault inspired by the Basilica of Maxentius in Rome, establishing the blueprint for counter-reformation Baroque church plans (e.g. Il Gesù).",
    explanationZh: "阿尔伯蒂在曼托瓦圣安德肋教堂中汲取了罗马马克森提乌斯巴西利卡遗址灵感，以罗马凯旋门图案雕刻入口立面，内部用跨度惊人的宏大单廊藻井筒拱取代林立细柱侧廊，两翼排布交替深浅礼拜堂，直接催生了后世耶稣会教堂乃至罗马圣彼得大教堂中殿空间母题。",
    tags: ["RenaissanceClassical", "Architecture", "Alberti", "Sant Andrea Mantua", "Triumphal Arch"],
    difficulty: 2
  },
  {
    id: "arched_178",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which Franciscan church in Rimini was remodeled by Leon Battista Alberti around 1450 for ruler Sigismondo Pandolfo Malatesta, encasing the Gothic building in a revolutionary white Istrian marble shell celebrating the Roman Arch of Augustus?",
    questionZh: "阿尔伯蒂于约1450年在里米尼受统治者马拉泰斯塔委托，将一座中世纪旧方济各会教堂用洁白伊斯特拉大理石整体包裹、巧妙转译里米尼奥古斯都古凯旋门的是：",
    optionsEn: [
      "Tempio Malatestiano (San Francesco in Rimini)",
      "Certosa di Pavia",
      "Santa Maria delle Grazie in Milan",
      "Basilica of San Petronio in Bologna"
    ],
    optionsZh: [
      "马拉泰斯塔圣殿 / 里米尼圣方济各圣殿 (Tempio Malatestiano in Rimini)",
      "帕维亚加尔都西会修道院 (Certosa di Pavia)",
      "米兰圣母感恩教堂 (Santa Maria delle Grazie)",
      "博洛尼亚圣白托略大殿"
    ],
    correctAnswer: 0,
    explanationEn: "The Tempio Malatestiano was the first Renaissance building to adapt the Roman triumphal arch for a Christian facade, placing deep rounded blind arcades along the lateral flanks to shelter the sarcophagi of Malatesta's court humanists.",
    explanationZh: "马拉泰斯塔圣殿被史学家誉为第一座纯正复兴古罗马凯旋门母题的基督教堂。建筑两侧以雄浑连续半圆拱券盲廊收纳学者石棺，内部饰有皮耶罗·德拉·弗朗切斯卡的壁画，虽穹顶未竟却名垂青史。",
    tags: ["RenaissanceClassical", "Architecture", "Alberti", "Tempio Malatestiano", "Rimini"],
    difficulty: 2
  },
  {
    id: "arched_179",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "Which enigmatic mathematical masterpiece by Piero della Francesca (c. 1455-1460), housed in the Ducal Palace of Urbino, divides pictorial space into an open-air classical portico where Christ is whipped and an enigmatic foreground conversation trio bathed in morning light?",
    questionZh: "皮耶罗·德拉·弗朗切斯卡创作于约1455-1460年、现藏于乌尔比诺总督宫的极具几何数学理性神秘感的小幅代表作，将画幅精准划分为右侧近景伫立交谈的三位贵族与左侧古典柱廊深处受鞭笞的基督，这幅画作是：",
    optionsEn: [
      "The Flagellation of Christ (Flagellazione di Cristo)",
      "The Resurrection in Sansepolcro",
      "The Baptism of Christ",
      "The Montefeltro Altarpiece"
    ],
    optionsZh: [
      "《基督受鞭笞》(The Flagellation of Christ / Flagellazione di Cristo)",
      "《基督复活》(Sansepolcro)",
      "《基督受洗》",
      "《蒙特费尔特罗祭坛画》"
    ],
    correctAnswer: 0,
    explanationEn: "Piero della Francesca's 'Flagellation of Christ' is hailed as a supreme monument of linear perspective, rigorously calibrated to geometric grid intervals and optical proportions with cold, crystalline mathematical equilibrium.",
    explanationZh: "皮耶罗作为数学透视理论专著学者，在《基督受鞭笞》中将透视地砖棋盘网格推演至几何巅峰：前景明媚晨光下的沉静三人与深处柱廊阴影里受苦受难的基督形成极度深奥的光学与政治哲学隐喻。",
    tags: ["RenaissanceClassical", "Piero della Francesca", "Flagellation", "Urbino", "Perspective"],
    difficulty: 2
  },
  {
    id: "arched_180",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "In which Tuscan basilica did Piero della Francesca paint the luminous fresco cycle 'The History of the True Cross' (1452-1466), celebrated for the early masterpiece of nocturnal illumination 'The Dream of Constantine'?",
    questionZh: "皮耶罗·德拉·弗朗切斯卡在托斯卡纳阿雷佐（Arezzo）哪座教堂主祭坛唱诗班礼拜堂内，绘制了气势磅礴的《真十字架传奇》（1452-1466）湿壁画连环画，并创作了西方美术史上首批夜景聚光杰作《君士坦丁之梦》？",
    optionsEn: [
      "San Francesco in Arezzo",
      "Santa Croce in Florence",
      "Sant'Agostino in San Gimignano",
      "San Domenico in Siena"
    ],
    optionsZh: [
      "阿雷佐圣方济各圣殿 (San Francesco in Arezzo)",
      "佛罗伦萨圣十字圣殿 (Santa Croce)",
      "圣吉米尼亚诺圣奥古斯丁堂",
      "锡耶纳圣多明我圣殿"
    ],
    correctAnswer: 0,
    explanationEn: "In the Bacci Chapel of San Francesco in Arezzo, Piero depicted the True Cross cycle; 'The Dream of Constantine' is renowned for an angel descending from heaven casting dramatic divine spotlight into a conical military tent during the night.",
    explanationZh: "阿雷佐圣方济各教堂巴奇礼拜堂的《真十字架传奇》以剔透通亮的色调与古希腊式的静穆雕塑人物著称，其中《君士坦丁之梦》天使凌空降临发出的天国神圣光束划破营帐深夜，开启了西方早期夜景光影探索奇迹。",
    tags: ["RenaissanceClassical", "Piero della Francesca", "Arezzo", "True Cross", "Constantine Dream"],
    difficulty: 2
  },
  {
    id: "arched_181",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "Which iconic Renaissance diptych by Piero della Francesca (c. 1472, Uffizi Gallery) presents strict profile portraits of a Duke with a notched broken nose and his pale porcelain-skinned Duchess facing each other against sweeping panoramic landscape backgrounds?",
    questionZh: "皮耶罗·德拉·弗朗切斯卡于约1472年创作、现藏于乌菲齐美术馆的双联木板画，以严格正侧面剪影描绘了因比武被削掉鼻梁的独眼公爵与其肤如白瓷的公爵夫人凝神对视，背景为广袤大地的名作是：",
    optionsEn: [
      "Diptych of the Duke and Duchess of Urbino (Federico da Montefeltro and Battista Sforza)",
      "Portrait of Lionello d'Este (Pisanello)",
      "Portrait of Giovanna Tornabuoni (Ghirlandaio)",
      "Portrait of a Young Lady (Pollaiuolo)"
    ],
    optionsZh: [
      "《乌尔比诺公爵夫妇双联肖像》(Federico da Montefeltro & Battista Sforza)",
      "《利奥内洛·德·埃斯特肖像》(皮萨内洛)",
      "《焦万娜·托纳布奥尼肖像》(吉兰达约)",
      "《年轻贵妇肖像》(波拉约洛)"
    ],
    correctAnswer: 0,
    explanationEn: "Piero della Francesca painted Federico da Montefeltro and his late wife Battista Sforza in strict profile (modeled on ancient Roman imperial coins), balancing psychological dignity against panoramic Tuscan-Umbrian vistas receding into atmospheric haze.",
    explanationZh: "这幅双联画汲取古罗马硬币肖像规范，公爵特意展示完好无损的左脸轮廓，夫人则高额盘发皮肤晶莹。画背附有二人在天使与美德簇拥下的古典寓意凯旋战车图，是文艺复兴人文君主统治与爱的最高纪念碑。",
    tags: ["RenaissanceClassical", "Piero della Francesca", "Montefeltro", "Portrait", "Urbino"],
    difficulty: 2
  },
  {
    id: "arched_182",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "Which masterpiece of extreme dramatic foreshortening (scorcio) by Andrea Mantegna (c. 1480, Pinacoteca di Brera) depicts the cold, pale body of Christ lying on a marble unction slab observed directly from the soles of his pierced feet?",
    questionZh: "安德烈·曼特尼亚（Andrea Mantegna）于约1480年创作、现藏于米兰布雷拉美术馆的极限透视缩头法（Scorcio）震撼名作，将观者视线直接置于基督脚底板前方沿足底向头顶穿透观察的是：",
    optionsEn: [
      "Lamentation over the Dead Christ (Cristo morto)",
      "The Agony in the Garden",
      "Saint Sebastian",
      "The Adoration of the Magi"
    ],
    optionsZh: [
      "《死去的基督 / 哀悼死去的基督》(Lamentation over the Dead Christ / Cristo morto)",
      "《客西马尼园的祈祷》",
      "《圣塞巴斯蒂安》",
      "《东方三博士朝圣》"
    ],
    correctAnswer: 0,
    explanationEn: "Mantegna executed 'The Dead Christ' with radical anatomical foreshortening from an extreme low angle, slightly reducing the perspective size of the feet so they would not obscure Christ's torso and grieving faces of John and Mary.",
    explanationZh: "曼特尼亚以令人屏息的冷酷解剖学写实与极度前冲缩头透视，将躺在涂油石上的基督呈现眼前。脚底钉孔伤痕触目惊心，画家故意将大脚丫按艺术直觉适度收缩比例以露出胸膛与圣母落泪侧脸，被誉为透视学神技。",
    tags: ["RenaissanceClassical", "Mantegna", "Foreshortening", "Dead Christ", "Perspective"],
    difficulty: 1
  },
  {
    id: "arched_183",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "In the Camera degli Sposi (Ducal Palace, Mantua, 1465-1474), what groundbreaking trompe-l'œil ceiling illusion did Andrea Mantegna paint to simulate an open sky surrounded by mischievous foreshortened putti looking downward ('di sotto in sù')?",
    questionZh: "曼特尼亚在曼托瓦公爵宫为贡扎加家族绘制的“新娘房”（Camera degli Sposi, 1465-1474）天顶中央，创造了艺术史上首个仰角透视“假天窗”（Di sotto in sù），其视觉形态是：",
    optionsEn: [
      "An illusionistic open oculus balustrade against a blue sky, through which foreshortened winged putti and ladies peer down playfully, with a tub of oranges precariously balanced on a wooden beam",
      "A massive golden cross emerging from a thunderstorm with flying dragons",
      "A dark Gothic vaulted dungeon pierced by cast-iron chandeliers",
      "A realistic map of the Mediterranean sea painted in green oil glaze"
    ],
    optionsZh: [
      "一处被绘成通透蓝天白云的仰视圆形天井圆窗（Oculus），顽皮的小天使（Putti）与宫女伏在栏杆上嬉笑俯瞰，一盆植株盆栽悬危架在栏杆横木边缘",
      "从雷暴雨云层中破空而出的巨大发光黄金十字架与喷火飞龙",
      "由多排重型铸铁吊灯垂挂下沉的阴暗中世纪地牢铁栅栏",
      "在绿油油透明油画罩染中细密绘制的真实地中海古海图航海罗盘"
    ],
    correctAnswer: 0,
    explanationEn: "Mantegna invented the 'di sotto in sù' (seen from below) perspective technique in the Camera degli Sposi oculus, creating the first complete illusion of a punctured ceiling in Renaissance art that later inspired Correggio and Baroque dome ceilings.",
    explanationZh: "曼特尼亚在新娘房天顶开创了“从下向上看”（Di sotto in sù）的障眼透视法天眼（Oculus）：顽皮的胖小天使将脑袋探过栏杆向下张望，甚至故意有一只小天使把小屁股卡在孔隙中，彻底瓦解了天花板物理实体的封闭感。",
    tags: ["RenaissanceClassical", "Mantegna", "Camera degli Sposi", "Di sotto in su", "Oculus", "Mantua"],
    difficulty: 2
  }
];

export const renaissanceClassicalPart2 = [
  {
    id: "arched_184",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "Which lyrical Neoplatonic allegory by Sandro Botticelli (c. 1482, Uffizi Gallery) features Venus in a golden orange grove beneath a blindfolded Cupid, flanked by Mercury, the Three Graces, and Zephyrus pursuing the nymph Chloris who transforms into Flora?",
    questionZh: "桑德罗·波提切利创作于约1482年、现藏于乌菲齐美术馆的新柏拉图主义抒情巨作《春》（Primavera），画中从右至左生动展现的人物序列是：",
    optionsEn: [
      "Zephyrus pursuing Chloris who transforms into Flora, with Venus at center, Cupid overhead, the Three Graces dancing, and Mercury dispelling clouds",
      "Apollo slaying the python, surrounded by the nine Muses on Mount Parnassus",
      "Christ flanked by the twelve Apostles at the Last Supper in Jerusalem",
      "Alexander the Great meeting the Persian king Darius at the battle of Issus"
    ],
    optionsZh: [
      "西风之神泽菲罗斯抓捕宁芙克洛里斯使其蜕变为花神芙罗拉，中央圣母般纯洁的维纳斯与盲眼丘比特，左侧三美惠女神起舞，墨丘利驱散冬日阴霾",
      "阿波罗在帕纳索斯山战胜巨蟒皮同，周围环绕着司掌诗歌音乐的九位缪斯",
      "耶稣与十二门徒在耶路撒冷共进逾越节晚餐并洗礼",
      "亚历山大大帝在伊苏斯战役中与波斯国王大流士正面交锋"
    ],
    correctAnswer: 0,
    explanationEn: "Botticelli painted 'Primavera' for the Medici circle, translating Marsilio Ficino's Neoplatonic philosophy into rhythmic graceful contours, where carnal passion (Zephyrus/Chloris) is transformed through Venus into spiritual contemplation (Mercury).",
    explanationZh: "波提切利在美第奇家族斐奇诺的新柏拉图主义哲学启发下创作《春》，画中细致描绘了上百种托斯卡纳真实花卉，用哥特流线与古典神话相融的修长轮廓线，象征从肉欲尘世之爱升华为理性神圣之爱。",
    tags: ["RenaissanceClassical", "Botticelli", "Primavera", "Neoplatonism", "Medici"],
    difficulty: 1
  },
  {
    id: "arched_185",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "Which poetic masterpiece by Sandro Botticelli (c. 1485, Uffizi Gallery) depicts the goddess of love arriving ashore on a giant gilded scallop shell propelled by the blowing Zephyrs, received by a welcoming Hora with a flowered cloak?",
    questionZh: "波提切利在约1485年完成的《维纳斯的诞生》（The Birth of Venus），描绘爱与美之神赤裸伫立于巨型扇贝贝壳之上破浪而来的经典画面细节是：",
    optionsEn: [
      "The nude Venus drifts ashore upon a scallop shell blown by the intertwined west winds Zephyr and Aura, greeted by a Hora (Spring) offering a rose-embroidered pink mantle",
      "Venus rises from a marble fountain in an ornate Gothic cathedral courtyard",
      "Venus is crowned queen by Roman emperor Augustus in the Forum",
      "Venus emerges from a volcanic crater surrounded by bronze sirens"
    ],
    optionsZh: [
      "裸体维纳斯以轻盈优美的S形体态立于海面巨扇贝之上，相拥的西风之神泽菲罗斯与微风仙子奥拉吹拂粉红落樱，时序女神霍拉手持繁花粉红斗篷在岸边迎候",
      "维纳斯从哥特大教堂庭院中一座带雕花喷泉的大理石水池中冉冉升起",
      "奥古斯都大帝在罗马古广场上亲自为身着丝绒长袍的维纳斯加冕为后",
      "维纳斯从火山炽热熔岩火山口中跃出，周围环绕着敲击锣鼓的青铜海妖"
    ],
    correctAnswer: 0,
    explanationEn: "Botticelli's 'Birth of Venus' stands as the first monumental, non-religious female nude painted on canvas in Tuscany since antiquity, prioritizing ethereal decorative linear curves and floating hair over rigid anatomical realism.",
    explanationZh: "《维纳斯的诞生》是文艺复兴时期首幅大尺寸世俗布面女性人体杰作。波提切利有意拉长维纳斯脖颈与削肩，重现波利齐亚诺抒情诗中“风拂金发、天降玫瑰”的纯洁古典美，成为佛罗伦萨文艺复兴永恒图腾。",
    tags: ["RenaissanceClassical", "Botticelli", "Birth of Venus", "Uffizi", "Mythology"],
    difficulty: 1
  },
  {
    id: "arched_186",
    domain: "renaissance_classical",
    subCategory: "Proto & Early Renaissance",
    era: "renaissance",
    questionEn: "Why is Donatello's bronze statue of 'David' (c. 1440, Museo Nazionale del Bargello, Florence) hailed as a revolutionary landmark in the history of Western sculpture?",
    questionZh: "多纳泰罗创作于约1440年、现藏于佛罗伦萨巴杰罗国立美术馆的青铜《大卫》，在西方雕塑史上被奉为革命性分水岭的里程碑原因在于：",
    optionsEn: [
      "It was the first freestanding, life-sized nude bronze statue created in Western art since Classical Greco-Roman antiquity",
      "It was the first statue to incorporate dynamic steam-driven clockwork internal movement",
      "It was carved from a single block of translucent Brazilian emerald quartz",
      "It was commissioned by the Pope to crown the peak of the Roman Pantheon"
    ],
    optionsZh: [
      "它是自古希腊古罗马古典古代落幕以来，欧洲艺术史上第一尊全圆雕独立的等身裸体青铜立像 (Freestanding Nude Bronze)",
      "它是雕塑史上第一尊内部装配有蒸汽动力齿轮传动机构的可活动发条雕像",
      "它是由一整块开采自南美洲巴西高原的半透明天然祖母绿翡翠雕琢而成",
      "它是教皇下令铸造用于安装在罗马万神庙圆顶透光孔顶部的纪念碑"
    ],
    correctAnswer: 0,
    explanationEn: "Commissioned for the courtyard of the Palazzo Medici, Donatello's youthful, sensual bronze David re-established the classical Greek contrapposto stance and celebration of the human nude for the first time in over a thousand years.",
    explanationZh: "受美第奇家族委托，多纳泰罗复活了沉睡一千多年的古希腊裸体青铜铸造与古典平衡对偶姿态（Contrapposto）：俊美修长的大卫头戴月桂牧童帽，脚踏歌利亚铠甲巨头，不仅颂扬了人体的神圣健美，更成为佛罗伦萨共和国击溃僭主强权的自由象征。",
    tags: ["RenaissanceClassical", "Donatello", "David", "Bronze", "Contrapposto"],
    difficulty: 1
  },
  {
    id: "arched_187",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which circular martyrium in Rome, designed by Donato Bramante in 1502 in the courtyard of San Pietro in Montorio, is celebrated as the premier architectural embodiment of High Renaissance classical perfection?",
    questionZh: "由多纳托·伯拉孟特（Donato Bramante）于1502年在罗马蒙托里奥圣彼得堂狭小庭院内设计营建的哪座小神殿，以其纯圆神圣集中式构图与多立克环柱廊被公认为盛期文艺复兴建筑美学的绝对典范？",
    optionsEn: [
      "The Tempietto di San Pietro in Montorio",
      "The Pantheon",
      "Santa Maria della Consolazione in Todi",
      "Sant'Ivo alla Sapienza"
    ],
    optionsZh: [
      "坦比哀多礼拜堂 (Tempietto di San Pietro in Montorio)",
      "罗马万神庙 (Pantheon)",
      "托迪慰藉圣母堂 (Santa Maria della Consolazione)",
      "圣依弗堂 (Sant'Ivo alla Sapienza)"
    ],
    correctAnswer: 0,
    explanationEn: "Bramante's Tempietto, marking the purported site of Saint Peter's crucifixion, was the first Renaissance building to employ the Classical Doric order correctly with an authentic frieze of triglyphs and metopes, crowned by a hemispherical dome.",
    explanationZh: "伯拉孟特设计的坦比哀多（Tempietto）标记圣彼得殉道之所。建筑严格遵循维特鲁威原则，以16根花岗岩古罗马多立克式柱廊环绕圆柱形圣坛，配以精致的檐壁三道槽间板与半球形小穹顶，帕拉第奥破例将其与古代神庙并列载入建筑经典。",
    tags: ["RenaissanceClassical", "Architecture", "Bramante", "Tempietto", "High Renaissance", "Orders"],
    difficulty: 1
  },
  {
    id: "arched_188",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "How did Donato Bramante ingeniously resolve the severe site constraint at Santa Maria presso San Satiro in Milan (1482-1486), where a public street prevented building a real longitudinal choir behind the altar?",
    questionZh: "伯拉孟特在米兰建造圣萨蒂罗圣母堂（Santa Maria presso San Satiro, 1482-1486）时，面对主祭坛后方因紧邻公共街道而只有不到1米进深的极端局限，所采取的惊世骇俗的建筑创举是：",
    optionsEn: [
      "Creating an illusionistic trompe-l'œil relief perspective choir in painted stucco and terracotta only 97 centimeters deep that visually appears as a deep, barrel-vaulted three-bay choir",
      "Demolishing the entire municipal street under cover of darkness",
      "Excavating a subterranean church three stories underground beneath the crypt",
      "Suspending the choir room over the street using steel cantilever suspension cables"
    ],
    optionsZh: [
      "在仅有97厘米（不足1米）的浅狭墙面进深中，利用高超的单点浮雕假透视（Trompe-l'œil），以抹灰与彩绘在视觉上生动创造出进深达数十米、带三进藻井筒拱的假唱诗班礼拜堂",
      "在黑夜掩护下强行拆除隔壁公共街道的所有民宅与市政设施",
      "在地下室下方向下深挖三层地宫作为地下隐秘唱诗班祈祷室",
      "利用现代钢缆悬索桥结构将唱诗班悬空挑在繁忙公共街道上方"
    ],
    correctAnswer: 0,
    explanationEn: "Unable to build a traditional deep eastern arm, Bramante sculpted a shallow 97 cm stucco bas-relief that, when viewed from the nave entrance, perfectly deceives the human eye into seeing a monumental barrel-vaulted perspective choir.",
    explanationZh: "伯拉孟特展示了魔术般的透视计算力：当信徒步入中殿向主祭坛望去，眼前的唱诗班与两侧横跨翼廊比例浑然天成，唯有走至祭坛近前才会震惊地发现宏大的罗马式藻井拱廊竟是一面仅有97厘米浅浮雕的“透视障眼法奇迹”。",
    tags: ["RenaissanceClassical", "Architecture", "Bramante", "San Satiro", "Perspective", "Trompe l oeil"],
    difficulty: 2
  },
  {
    id: "arched_189",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "What pure geometric plan was proposed by Donato Bramante in 1506 for the reconstruction of New Saint Peter's Basilica under Pope Julius II, as recorded on Caradosso's foundation medal?",
    questionZh: "伯拉孟特于1506年为教皇儒略二世重建罗马新圣彼得大教堂设计的最初方案（镌刻在卡拉多索奠基纪念章上），所确立的核心纯粹几何平面形态是：",
    optionsEn: [
      "A monumental Greek-cross central plan crowned by a colossal hemispherical dome inspired by the Pantheon, flanked by four smaller corner Greek crosses and four corner towers",
      "A long, narrow three-aisled medieval Gothic Latin-cross basilica",
      "An open elliptical outdoor arena surrounded by tiered wooden bleachers",
      "A triangular fort with three bastions oriented toward the Tiber River"
    ],
    optionsZh: [
      "以万神庙为蓝本的巨大中央半球穹顶统领的“希腊十字”（Greek Cross）纯粹集中式平面，四角各辅以一座次级希腊十字礼拜堂与四座角楼",
      "狭长封闭的三廊道式中世纪哥特风格拉丁十字大教堂",
      "由木质阶梯看台层层环绕的露天椭圆形斗兽场竞技场",
      "朝向台伯河防御的三堡垒三角形坚固军事要塞平面"
    ],
    correctAnswer: 0,
    explanationEn: "Bramante's radical central plan for St. Peter's placed a 42-meter hemispherical dome over the intersection of four equal Greek-cross arms, proclaiming the High Renaissance belief that the circle and sphere represent divine cosmic perfection.",
    explanationZh: "伯拉孟特豪迈宣告要“把万神庙的巨大穹顶架在马克森提乌斯巴西利卡之上”。他摒弃了具有等级序列的传统拉丁十字中殿长轴，采用绝对等臂的希腊十字集中式方案，将几何的完美对称与上帝宇宙创世秩序划上等号。",
    tags: ["RenaissanceClassical", "Architecture", "Bramante", "St Peters", "Greek Cross", "High Renaissance"],
    difficulty: 2
  },
  {
    id: "arched_190",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "In Leonardo da Vinci's monumental mural 'The Last Supper' (Il Cenacolo, 1495-1498, Santa Maria delle Grazie, Milan), where is the optical vanishing point of the linear perspective grid located?",
    questionZh: "达·芬奇在米兰感恩圣母修道院食堂创作的千古巨作《最后的晚餐》（1495-1498）中，全画透视网格的所有射线消失点（Vanishing Point）精确汇聚在哪个位置？",
    optionsEn: [
      "Exactly at Christ's right temple / head, framed against the light of the central rectangular window",
      "On Judas Iscariot's clenched hand clutching the bag of thirty silver coins",
      "At the feet of Saint Peter gripping a bread knife",
      "In the distant landscape clouds above the left horizon"
    ],
    optionsZh: [
      "精确位于耶稣基督的右太阳穴/头部，并在身后中央背光矩形窗户的光辉映衬下成为整座建筑透视与神圣焦点",
      "紧握三十块犹大银币钱袋的叛徒犹大右手拳头之上",
      "手持切面包餐刀因愤怒而身体前倾的使徒彼得脚踝处",
      "地平线左上方远处暴风雨云团与雪山山峦的消隐点中"
    ],
    correctAnswer: 0,
    explanationEn: "Leonardo converged all architectural orthogonal lines (ceiling coffers, wall tapestries) onto Christ's right temple, ensuring that perspective geometry, theological majesty, and human drama unite at the calm center of the apostles' shock.",
    explanationZh: "达·芬奇以钉子敲入墙体拉线计算透视：天花板藻井透视线与两侧挂毯视平线全部直指基督头部。当基督平静说出“你们中间有一个人要出卖我”，十二门徒三三一组爆发出激昂的心理波澜，而基督却如金字塔般安详伫立于数学与神圣中心。",
    tags: ["RenaissanceClassical", "Leonardo da Vinci", "Last Supper", "Perspective", "Vanishing Point"],
    difficulty: 1
  },
  {
    id: "arched_191",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "What pictorial technique, meaning 'vanished like smoke', was perfected by Leonardo da Vinci in the 'Mona Lisa' (begun 1503) to eliminate harsh contours around the eyes and lips?",
    questionZh: "达·芬奇在《蒙娜丽莎》（1503年起）眼角与嘴角处运用的炉火纯青的“晕涂法”（Sfumato，意如轻烟消散），其核心视觉与物理技艺原理是：",
    optionsEn: [
      "Layering ultra-thin, translucent oil glazes without abrupt boundaries or visible pencil lines, allowing shadow and tone to blend seamlessly like smoke disappearing into air",
      "Stippling dry wax pigments with stiff boar-bristle brushes to create a coarse sand texture",
      "Spraying diluted ink through brass stencils to generate sharp graphic halftone dots",
      "Using heavy impasto palette knives to sculpt raised plaster contours on wooden panels"
    ],
    optionsZh: [
      "以多层极其稀薄半透明的微量油彩罩染层层重叠，完全消除生硬的边缘轮廓线与笔触，使色彩与明暗过渡如同轻烟般自然融入空气之中",
      "使用粗硬野猪鬃毛刷在干燥蜡块上戳击点彩以制造粗糙的砂纸质感",
      "借助黄铜模板用嘴喷吹稀释墨水以产生高反差的黑白印刷半调网点",
      "使用沉重有力的油画调色刀在木板上堆砌凸出画面的立体石膏轮廓"
    ],
    correctAnswer: 0,
    explanationEn: "Leonardo's sfumato (derived from Italian 'fumo', smoke) applied dozens of microscopic glazes (often just 1-2 microns thick) over years, creating the living, ambiguous mystery of the Mona Lisa's corners of the mouth and eyes.",
    explanationZh: "达·芬奇在笔记中写道：“画家的光影交界不应有生硬的边界，而应如同烟雾弥漫消散。”他耗费数年层叠涂抹达三四十层厚度仅数微米的半透明微细树脂清漆罩染，赋予蒙娜丽莎随观者视线飘忽不定的神秘微笑与生命体温。",
    tags: ["RenaissanceClassical", "Leonardo da Vinci", "Mona Lisa", "Sfumato", "Glazing"],
    difficulty: 1
  },
  {
    id: "arched_192",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "Which celebrated ink drawing by Leonardo da Vinci (c. 1490, Gallerie dell'Accademia, Venice) illustrates the 1st-century BC Roman architect Vitruvius's treatise on human bodily proportions inscribed in both a circle and a square?",
    questionZh: "达·芬奇于约1490年绘制、现藏于威尼斯学院美术馆的著名钢笔水墨素描手稿，依据公元前1世纪古罗马建筑师维特鲁威论述，将人体四肢展开分别完美内接于一个正方形与一个圆形之中的是：",
    optionsEn: [
      "The Vitruvian Man (L'Uomo Vitruviano)",
      "Studies of the Deluge",
      "Embryo in the Womb",
      "Study of the Head of Leda"
    ],
    optionsZh: [
      "《维特鲁威人》(The Vitruvian Man / L'Uomo Vitruviano)",
      "《大洪水灾难习作》",
      "《子宫中的胚胎解剖图》",
      "《勒达头部习作》"
    ],
    correctAnswer: 0,
    explanationEn: "Leonardo's 'Vitruvian Man' translated Book III of Vitruvius's 'De architectura' into image, showing that the human navel is the center of a circle encompassed by outstretched hands and feet, while the pubic bone centers a square equal to the height of the head-to-toe span, epitomizing the human body as the cosmic microcosm.",
    explanationZh: "《维特鲁威人》是文艺复兴人本主义与科学宇宙观的至高象征：以肚脐为圆心画圆，双臂双足平展恰抵圆周；以两足并拢身高为边长画正方形，双臂平展宽度与其相等（会阴部为中心）。人即小宇宙（Microcosm），是古典建筑神殿柱式尺度的天然源泉。",
    tags: ["RenaissanceClassical", "Leonardo da Vinci", "Vitruvian Man", "Proportion", "Vitruvius"],
    difficulty: 1
  },
  {
    id: "arched_193",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "Which narrative cycle occupies the central nine ceiling panels painted by Michelangelo Buonarroti on the vault of the Sistine Chapel in Rome (1508-1512)?",
    questionZh: "米开朗基罗于1508至1512年间在罗马梵蒂冈西斯廷礼拜堂天顶中央，历尽艰辛仰头绘制的九大核心矩形湿壁画所依据的圣经叙事是：",
    optionsEn: [
      "The Book of Genesis (from the Creation of Light, the Creation of Adam, to the Fall of Man and the Drunkenness of Noah)",
      "The Twelve Labors of Hercules and the Labors of the Months",
      "The Life and Miracles of Saint Francis of Assisi",
      "The Apocalypse and Seven Seals from the Book of Revelation"
    ],
    optionsZh: [
      "《创世纪》九个核心场景（从神分光暗、创造亚当与夏娃、逐出伊甸园，直至挪亚方舟大洪水与挪亚醉酒）",
      "希腊神话大力神赫拉克勒斯的十二伟绩与十二月份世俗耕作图",
      "圣方济各在阿西西修道院所展现的生平救死扶伤神迹",
      "《启示录》中描绘的世界末日七印揭开与末日四骑士审判"
    ],
    correctAnswer: 0,
    explanationEn: "Michelangelo painted over 300 monumental muscular figures across the 500-square-meter Sistine ceiling, structuring nine Genesis panels flanked by colossal Old Testament Prophets, pagan Sibyls, and athletic nude youths ('Ignudi').",
    explanationZh: "米开朗基罗独自在二十米高脚手架上仰天作画四年半，在西斯廷天顶500平米宏幅中布局了九幅《创世纪》历史场景。其中《创造亚当》上帝与亚当指尖相触即将注入生命灵魂的一瞬，成为人类艺术史上最震撼心魄的定格。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    fallbackImage: "/images/artworks/creation-of-adam.jpg",
    tags: ["RenaissanceClassical", "Michelangelo", "Sistine Chapel", "Creation of Adam", "Genesis"],
    difficulty: 1
  },
  {
    id: "arched_194",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "In Michelangelo's apocalyptic altar fresco 'The Last Judgment' (Sistine Chapel, 1536-1541), where did the tortured master hide his tragic, distorted self-portrait?",
    questionZh: "米开朗基罗于1536-1541年重返西斯廷礼拜堂在祭坛后墙绘制巨幅《最后的审判》时，将自己苍老受折磨的绝望自画像巧妙隐藏在哪个惊心动魄的人物身上？",
    optionsEn: [
      "In the sagging, empty flayed skin of Saint Bartholomew held in the martyr's hand below Christ",
      "On the face of the demon boatman Charon striking souls with his oar",
      "On the youthful, beardless muscular face of Christ the Judge",
      "On the winged helmet of the Archangel Michael sounding the trumpet"
    ],
    optionsZh: [
      "在殉道圣徒圣巴多罗买手中提着的那张空洞松垮、被剥下的人皮面庞之上 (Flayed Skin of Saint Bartholomew)",
      "在地狱冥河撑船挥舞船桨抽打罪孽亡魂的恶魔卡戎面具上",
      "在中央如雷霆般降临、健硕无须的救世主基督裁判者面庞上",
      "在天顶上方奋力吹响世界末日复活号角的米迦勒大天使头盔上"
    ],
    correctAnswer: 0,
    explanationEn: "Saint Bartholomew was martyred by being flayed alive; in the Sistine Last Judgment, the saint holds the flaying knife in one hand and his limp skin in the other, whose distorted facial likeness was deciphered as Michelangelo's tortured confession of sin and physical exhaustion.",
    explanationZh: "圣巴多罗买因活活被剥皮殉道，米开朗基罗画中圣徒右手持刀，左手拎着一张软塌塌被剥下的人皮。人皮上扭曲痛苦的五官正是年逾六旬、心力交瘁的米开朗基罗本人的真实肖像，流露出晚年深沉的宗教焦虑与忏悔。",
    tags: ["RenaissanceClassical", "Michelangelo", "Last Judgment", "Self-Portrait", "Sistine Chapel"],
    difficulty: 2
  },
  {
    id: "arched_195",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "Why did Michelangelo deliberately carve the right hand and head of his monumental marble 'David' (1501-1504, Galleria dell'Accademia, Florence) with slightly enlarged proportions?",
    questionZh: "米开朗基罗在雕琢高逾5米的大理石《大卫》（1501-1504）时，特意将其右手与头部比例雕刻得比常规真实人体略微偏大偏重，其深刻的艺术与视错觉考量是：",
    optionsEn: [
      "Because the statue was originally commissioned to be installed high atop the buttresses of Florence Cathedral, requiring an enlarged head and right hand to correct optical foreshortening from an extreme low angle looking upward, while symbolically signifying David's 'manu fortis' (strong hand)",
      "Because the Carrara marble block had a fracture that forced him to expand the right side",
      "Because the young model had a rare bone disease affecting his extremities",
      "Because Michelangelo lacked formal measurement compasses during carving"
    ],
    optionsZh: [
      "因为该巨像最初是受托安放在佛罗伦萨百花大教堂数十米高的屋顶飞扶壁之上，放大头部与右手能抵消地面仰视时产生的透视缩水视觉形变，同时象征大卫战胜强敌的“坚强之手”（Manu fortis）",
      "因为采石场运来的整块卡拉拉大理石内部藏有一道斜向暗裂纹迫使其向右膨胀",
      "因为当时充当大卫模特的青年苦力患有严重的末端肥大症",
      "因为米开朗基罗当时拒绝使用任何传统的圆规与比例卡尺进行测量"
    ],
    correctAnswer: 0,
    explanationEn: "Carved from an abandoned 17-foot block of marble dubbed 'the Giant', David's oversized right hand ('manu fortis' signifies David's divine courage in biblical etymology) and enlarged expressive brow anticipated viewing from 40 feet below on the cathedral roofline, embodying Renaissance civic heroic virility.",
    explanationZh: "《大卫》原计划高踞百花大教堂高耸的侧廊屋脊，从广场仰望时头部与上半身会因透视缩短，米开朗基罗天才地通过视错觉修正对其比例适度夸大。同时大卫右手暴起的青筋与紧扣的石弹，充满未发一击前的凝神戒备，成为力与美的最高凝结。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_original_in_the_Galleria_dell%27Accademia_in_Florence.jpg/800px-Michelangelo%27s_David_-_original_in_the_Galleria_dell%27Accademia_in_Florence.jpg",
    fallbackImage: "/images/artworks/michelangelo-david.jpg",
    tags: ["RenaissanceClassical", "Michelangelo", "David", "Marble", "Sculpture", "Florence"],
    difficulty: 1
  },
  {
    id: "arched_196",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "How does the vestibule (Ricetto) of Michelangelo's Laurentian Library in Florence (San Lorenzo, begun 1524) revolutionary manifest Mannerist architectural tension and subversion of classical tectonic logic?",
    questionZh: "米开朗基罗于1524年开始在佛罗伦萨圣洛伦佐设计的劳伦齐亚纳图书馆前厅（Ricetto），在建筑史上如何以颠覆性的样式主义（Mannerism）张力打破了古典构造逻辑？",
    optionsEn: [
      "By recessing paired load-bearing columns backward into wall niches where they appear to support nothing, while a dramatic triple stone staircase flows outward and downward like frozen lava",
      "By building walls entirely of hollow bronze pipes without any stonework",
      "By placing classical pediments upside down on the floor",
      "By substituting Greek ionic columns with Egyptian obelisks"
    ],
    optionsZh: [
      "将粗壮的双联承重立柱深深嵌入平整墙体壁龛之内使其看似未承担任何重量，同时中央三联大理石楼梯如熔岩般从高处倾泻奔涌而下，充满矛盾张力",
      "整个前厅立面完全用空心青铜水管搭建而无任何砖石材料",
      "将神庙三角形古典山花全部倒立颠倒安装在脚底地面之上",
      "将所有希腊爱奥尼柱式完全撤换为埃及方尖碑造型"
    ],
    correctAnswer: 0,
    explanationEn: "In the Ricetto, Michelangelo subverted Vitruvian classical rules: paired columns sit inside carved recesses supported by non-functional volute corbels, while the triple staircase designed by Michelangelo (completed by Ammannati) pours out like a sculptural cascade, pioneering Mannerist emotional spatial anxiety.",
    explanationZh: "劳伦齐亚纳图书馆前厅是样式主义建筑开山巨构：原本应当傲然挺立承重的柱子被深陷在墙壁凹槽壁龛中，下方托以无承载功能的涡卷牛腿；而通向阅览室的三股大理石台阶如波浪流水般向外流淌，展现了米开朗基罗向古典规则发起的震撼心理叛逆。",
    tags: ["RenaissanceClassical", "Architecture", "Michelangelo", "Laurentian Library", "Mannerism"],
    difficulty: 2
  },
  {
    id: "arched_197",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which masterstroke of urban design was devised by Michelangelo on Rome's Capitoline Hill (Piazza del Campidoglio, begun 1536) to visually harmonize two existing non-parallel palace facades facing the Roman Forum?",
    questionZh: "米开朗基罗于1536年起规划罗马卡比托利欧广场（Piazza del Campidoglio）时，为化解两座原本互不平行、夹角古怪的历史宫殿立面，所采取的天才城市设计构想是：",
    optionsEn: [
      "Designing a trapezoidal piazza bounded by a matching third new palace (Palazzo Nuovo), centered upon a dynamic twelve-pointed star inscribed in an oval paving pattern surrounding the equestrian statue of Marcus Aurelius",
      "Demolishing the ancient Senatorial Palace and flattening the entire historic hill with cannons",
      "Erecting a high perimeter moat filled with water from the Tiber River",
      "Constructing a circular Colosseum arcade enclosing the summit in total darkness"
    ],
    optionsZh: [
      "构想了一座面向圣彼得教廷的梯形广场平面，新建一座完全对称的“新宫”以平衡非平行夹角，中央镶嵌由十二芒星交织的动态椭圆形石材铺装，环绕马可·奥勒留皇帝骑马青铜像",
      "下令彻底爆破平毁历史悠久的罗马元老院宫殿并将整座小山削平为平地",
      "在广场外围挖掘深不见底的环形护城河并注入台伯河泥水",
      "建造一座四层封闭的圆形斗兽场石廊将整个山顶围合在阴暗之中"
    ],
    correctAnswer: 0,
    explanationEn: "Michelangelo converted a difficult acute angle into a glorious trapezoidal piazza opening toward papal Rome rather than the ancient ruins below, using colossal pilasters and a raised convex oval paving pattern (the 'caput mundi' star) to create the premier unified public square of the Renaissance.",
    explanationZh: "米开朗基罗展现了举世无双的城市设计气魄：他不拆除旧宫，反而在另一侧新建与之成等角度外扩的“新宫”，创造出将人视线引向元老宫中央钟楼的梯形透视效果；地面的微拱椭圆十二角星铺地宛如世界中心（Caput Mundi），重新确立了罗马市政光荣。",
    tags: ["RenaissanceClassical", "Architecture", "Michelangelo", "Campidoglio", "Urbanism", "Rome"],
    difficulty: 2
  }
];

export const renaissanceClassicalPart3 = [
  {
    id: "arched_198",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "When Michelangelo took over the direction of New Saint Peter's Basilica in 1546 at age 71, what was his decisive structural and aesthetic contribution?",
    questionZh: "米开朗基罗于1546年以71岁高龄执掌罗马新圣彼得大教堂总建筑师重任时，对大教堂外观与穹顶作出的决定性结构与美学贡献是：",
    optionsEn: [
      "Unifying the exterior with a colossal Corinthian giant order of pilasters and designing the soaring double-shell ribbed dome supported on a drum of paired columns",
      "Demolishing all existing foundations to replace them with a Gothic timber hall",
      "Replacing the stone dome with an open glass pyramid",
      "Adding seven concentric rings of minarets around the perimeter"
    ],
    optionsZh: [
      "以统贯数层的巨型科林斯壁柱（Colossal Order）包裹外墙，并设计了由十六对双联外立柱鼓座支撑的宏伟双壳肋骨穹顶",
      "拆除当时已建好的所有柱墩基础，改建为中世纪哥特式木构大厅",
      "将石结构穹顶完全撤换为现代透光玻璃金字塔",
      "在大教堂外围周边环绕建造七个同心圆尖塔"
    ],
    correctAnswer: 0,
    explanationEn: "Michelangelo stripped away Sangallo's cluttered additions, returning to Bramante's centralized plan while sculpting the exterior with massive giant-order pilasters and calculating the double-shell masonry dome completed after his death by Giacomo della Porta.",
    explanationZh: "米开朗基罗摈弃了小桑加洛繁琐琐碎的折衷方案，回归集中式纯粹体量，创造了高达27米贯穿两层的巨型科林斯壁柱。他设计的双层加肋圆穹顶成为统领罗马天际线、乃至影响全人类（如伦敦圣保罗大教堂与美国国会大厦）的穹顶之王。",
    tags: ["RenaissanceClassical", "Architecture", "Michelangelo", "St Peters", "Dome", "Giant Order"],
    difficulty: 2
  },
  {
    id: "arched_199",
    domain: "renaissance_classical",
    subCategory: "High Renaissance & Mannerism",
    era: "renaissance",
    questionEn: "In Raphael's High Renaissance fresco 'The School of Athens' (Scuola di Atene, 1509-1511, Stanza della Segnatura, Vatican), who are the two central philosophers gesturing toward heaven and earth beneath the monumental barrel-vaulted basilica?",
    questionZh: "拉斐尔在梵蒂冈签字厅创作的盛期文艺复兴巅峰巨作《雅典学院》（1509-1511）中，在宏伟古典藻井巴西利卡拱门正中央并肩漫步、分别以手势指向苍穹与大地的两位古希腊哲学泰斗是：",
    optionsEn: [
      "Plato (pointing upward to the realm of ideal forms, painted with Leonardo's likeness) and Aristotle (gesturing downward with flat palm to earthly empirical observation)",
      "Socrates and Epicurus debating the nature of pleasure",
      "Pythagoras and Euclid calculating geometric proofs",
      "Ptolemy and Zoroaster holding celestial spheres"
    ],
    optionsZh: [
      "柏拉图（手持《蒂迈欧篇》手指苍穹理念世界，以达·芬奇面庞为原型）与亚里士多德（手持《伦理学》掌心向下按向大地经验观察）",
      "苏格拉底与伊壁鸠鲁在廊柱旁辩论享乐主义本质",
      "毕达哥拉斯与欧几里得在石板上计算几何三角形定理证明",
      "托勒密与琐罗亚斯德手持浑天仪与地球天球仪研讨星象"
    ],
    correctAnswer: 0,
    explanationEn: "Raphael visualizes the reconciliation of classical philosophy with Christian theology: Plato points to metaphysical heavenly ideas (pointing to the heavens), while his student Aristotle points forward toward physical, earthly empirical reality, perfectly balanced beneath a Bramante-inspired vaulted temple.",
    explanationZh: "《雅典学院》是人文主义最辉煌的殿堂：柏拉图指天代表唯心论理念世界，亚里士多德抚地代表唯物经验科学。拉斐尔更将同时代的大师画入其中——达·芬奇化身柏拉图，米开朗基罗化身倚案沉思的赫拉克利特，拉斐尔自己则在右侧角落含蓄自画像回眸观者。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_di_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_di_Urbino.jpg",
    fallbackImage: "/images/artworks/school-of-athens.jpg",
    tags: ["RenaissanceClassical", "Raphael", "School of Athens", "Philosophy", "Perspective"],
    difficulty: 1
  },
  {
    id: "arched_200",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which landmark architectural treatise was published by Andrea Palladio in Venice in 1570, featuring woodcut plans and elevations of his own villas and becoming the most influential pattern book across Britain and America?",
    questionZh: "安德烈·帕拉第奥（Andrea Palladio）于1570年在威尼斯出版的哪部里程碑式建筑专著，附有大量自己庄园府邸的精准实测木刻平立面图，成为深刻塑造英美世界建筑形态的圣经？",
    optionsEn: [
      "I quattro libri dell'architettura (The Four Books of Architecture)",
      "De re aedificatoria",
      "L'idea della architettura universale",
      "Regola delli cinque ordini d'architettura"
    ],
    optionsZh: [
      "《建筑四书》(I quattro libri dell'architettura)",
      "《论建筑》(De re aedificatoria)",
      "《通识建筑理念》(L'idea della architettura universale)",
      "《五种建筑柱式规范》(Regola delli cinque ordini)"
    ],
    correctAnswer: 0,
    explanationEn: "Andrea Palladio's 'I quattro libri dell'architettura' (1570) combined theoretical discussions of classical orders with clear woodcut plans of his villas and public buildings, sparking the international 'Palladianism' phenomenon from Inigo Jones to Thomas Jefferson's Monticello.",
    explanationZh: "帕拉第奥在《建筑四书》中首次由建筑师系统出版自己的实际工程图样与黄金音阶空间长宽比，文字简明、图板精美，通过伊尼戈·琼斯传至英国，并跨大西洋成为托马斯·杰斐逊设计弗吉尼亚大学与蒙蒂塞洛庄园的范本（帕拉第奥主义）。",
    tags: ["RenaissanceClassical", "Architecture", "Palladio", "Treatise", "Palladianism"],
    difficulty: 1
  },
  {
    id: "arched_201",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "Which iconic villa outside Vicenza, designed by Andrea Palladio in 1566 for canon Paolo Almerico, features a completely symmetrical square plan with a central domed rotunda hall and four identical hexastyle Ionic temple porticoes?",
    questionZh: "由安德烈·帕拉第奥于1566年在维琴察近郊为保罗·阿尔梅利科教士设计的哪座举世闻名的乡间庄园，以完全轴对称正方形平面、中央半球圆厅穹顶以及朝向四面田野的四个相同六柱爱奥尼神庙门廊著称？",
    optionsEn: [
      "Villa Capra 'La Rotonda'",
      "Villa Foscari 'La Malcontenta'",
      "Villa Barbaro at Maser",
      "Villa Emo at Fanzolo"
    ],
    optionsZh: [
      "圆厅别墅 / 摩羯庄园 (Villa Capra 'La Rotonda')",
      "福斯卡里别墅 / 恶妇别墅 (Villa Foscari)",
      "马塞尔的巴巴罗别墅 (Villa Barbaro)",
      "范佐洛的埃莫别墅 (Villa Emo)"
    ],
    correctAnswer: 0,
    explanationEn: "Villa Rotonda (Villa Almerico-Capra) is Palladio's most imitated domestic building; designed as a hilltop belvedere rather than a working farm, each of its four identical temple porticoes embraces the surrounding landscape in pure geometrical harmony.",
    explanationZh: "圆厅别墅（La Rotonda）被视为文艺复兴几何神圣秩序与景观融合的极致：它坐落于山丘之巅，正方形平面的东西南北四面各伸出一座宏伟的爱奥尼古典神庙山花门廊，中央冠以圆厅穹顶，无论从哪个方向眺望皆呈现绝对对称的古典尊严。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Villa_Rotonda_1.jpg/800px-Villa_Rotonda_1.jpg",
    fallbackImage: "/images/artworks/basilica-palladiana.jpg",
    tags: ["RenaissanceClassical", "Architecture", "Palladio", "Villa Rotonda", "Symmetry"],
    difficulty: 1
  },
  {
    id: "arched_202",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "What is the 'Palladian Motif' (Serliana) masterfully employed by Andrea Palladio to wrap the Gothic council hall in Vicenza (Basilica Palladiana, begun 1549)?",
    questionZh: "安德烈·帕拉第奥在改造维琴察中世纪市政厅外立面（帕拉第奥巴西利卡，1549年开工）时，巧妙运用的“塞尔利奥式 / 帕拉第奥母题”（Serliana / Palladian Motif）构造是指：",
    optionsEn: [
      "A tripartite bay opening consisting of a central semicircular arch flanked by two lower rectangular openings framed by coupled classical columns",
      "A heavy Gothic pointed arch filled with stained glass tracery",
      "A continuous row of Greek Doric columns supporting a flat entablature without arches",
      "A staggered flying buttress anchoring outward thrust into ground piers"
    ],
    optionsZh: [
      "一种三段式柱跨开洞母题：中央为半圆券拱，两侧各辅以一处由双联立柱支撑的较矮水平矩形开口（两开间过梁夹一圆拱）",
      "用彩色镶嵌玻璃花窗封闭的厚重高耸哥特式尖券开洞",
      "排布平整连续的希腊多立克列柱，其上方仅支撑平梁而无任何圆拱",
      "将外推力通过飞扶壁斜向支撑引导至地面墩座的受力构件"
    ],
    correctAnswer: 0,
    explanationEn: "Palladio solved the structural irregularity of the Gothic building's bays by using the Serliana (Palladian arch): by adjusting the width of the flat lateral rectangular openings while keeping the central arch fixed, he created the illusion of flawless classical uniformity.",
    explanationZh: "面对中世纪旧建筑跨度宽窄不一的棘手难题，帕拉第奥采用三联开间的“帕拉第奥母题”（Serliana）：保持中央圆拱跨度不变，仅弹性微调两侧平梁矩形过梁的宽度，成功在整座两层巴西利卡外围覆上了统一和谐、光影通透的大理石古典外衣。",
    tags: ["RenaissanceClassical", "Architecture", "Palladio", "Basilica Palladiana", "Serliana"],
    difficulty: 2
  },
  {
    id: "arched_203",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "renaissance",
    questionEn: "How did Andrea Palladio solve the centuries-old architectural challenge of designing a classical facade for a Christian basilica with a high central nave and lower side aisles (e.g. San Giorgio Maggiore and Il Redentore in Venice)?",
    questionZh: "帕拉第奥在威尼斯设计圣乔治马焦雷圣殿（San Giorgio Maggiore）与救主堂（Il Redentore）时，是如何从根本上破解了中世纪以来“高耸中殿与矮小侧廊”难以披上古典神庙外衣的历史立面难题？",
    optionsEn: [
      "By interlocking two classical temple fronts: a tall, narrow pedimented temple on colossal Corinthian composite columns for the high nave, superimposed over a wider, lower pedimented temple front for the side aisles",
      "By hiding the entire church behind a windowless fortress wall",
      "By completely cutting down the roof of the nave to make the entire building flat",
      "By carving the facade into the shape of a Venetian merchant galley"
    ],
    optionsZh: [
      "创造性地交织叠合了两座不同尺度的古典神庙山花立面：由巨柱式支撑的高挑神庙正面对应高耸中殿，叠合穿插一座横向延展平缓的低矮神庙山花对应两侧低矮副廊",
      "建造一面高过教堂屋脊的无窗巨大平顶护城墙将整座教堂完全遮掩在后",
      "将高耸的中殿屋顶完全拆除削平，使整座教堂变为单层平顶结构",
      "将教堂立面大理石整体雕刻成一艘威尼斯商贸划桨大帆船的船艏造型"
    ],
    correctAnswer: 0,
    explanationEn: "Palladio interlaced two temple porticoes on one unified facade plane: four colossal composite columns support the tall central triangle matching the nave vault, while broken lower half-pediments on smaller pilasters correspond to the sloping side aisle roofs, creating logical tectonic unity.",
    explanationZh: "帕拉第奥的双重神庙立面交错重叠堪称神来之笔：高耸的巨柱式托起中央大山花直冲云霄，而两侧较低的水平山花边缘与侧廊斜屋顶天衣无缝接轨，优雅解决了自早期基督教巴西利卡以来柱式难以涵盖高低落差断层的千古难题。",
    tags: ["RenaissanceClassical", "Architecture", "Palladio", "San Giorgio Maggiore", "Temple Front", "Venice"],
    difficulty: 2
  },
  {
    id: "arched_204",
    domain: "renaissance_classical",
    subCategory: "Baroque & Counter-Reformation",
    era: "baroque",
    questionEn: "In Caravaggio's Baroque masterpiece 'The Calling of Saint Matthew' (Contarelli Chapel, San Luigi dei Francesi, Rome, 1599-1600), how does the artist revolutionize the depiction of divine grace?",
    questionZh: "卡拉瓦乔在罗马圣路易堂孔塔雷利礼拜堂创作的巴洛克开山巨作《圣玛窦蒙召》（1599-1600）中，是如何革命性地颠覆表现神圣救赎时刻的？",
    optionsEn: [
      "Through dramatic Tenebrism, where a piercing diagonal shaft of divine sunlight cuts through the murky darkness of a contemporary Roman tavern, mirroring Christ's outstretched hand that quotes Michelangelo's Adam",
      "By surrounding Christ with hundreds of hovering winged golden angels",
      "By placing the scene on Mount Olympus in classical Greek robes",
      "By painting the entire background in reflective gold leaf mosaic"
    ],
    optionsZh: [
      "通过极富戏剧性的“暗色调主义”（Tenebrism/明暗对照），一道强烈的斜向神圣阳光刺破当代罗马昏暗酒馆的浓黑阴影，基督伸出的召唤食指呼应了米开朗基罗《创造亚当》中的手势",
      "在基督四周环绕着数百位悬浮在云端弹奏竖琴的金翅小天使",
      "将整个税关场景搬到希腊奥林匹斯山顶并让人人身披古希腊大理石托加长袍",
      "在画面全背景镶嵌不透气且反光的拜占庭式纯金箔马赛克贴花"
    ],
    correctAnswer: 0,
    explanationEn: "Caravaggio brought divine revelation into the grimy realism of street life: tax collector Levi points to himself in disbelief under a harsh diagonal beam of illumination, while Christ's relaxed hand gesture echoes God creating Adam, inaugurating Baroque naturalism.",
    explanationZh: "卡拉瓦乔将神圣奇迹拉入尘世底层：逼仄的收税暗室里，穿着17世纪时尚佩剑服饰的少年赌徒清点铜钱，一道神圣光束如利刃般劈开黑暗，基督赤足隐入阴影，其手指微微扬起（向西斯廷亚当致敬），定格了罪人蒙受恩召的震撼瞬间。",
    tags: ["RenaissanceClassical", "Caravaggio", "Calling of Saint Matthew", "Tenebrism", "Baroque"],
    difficulty: 1
  },
  {
    id: "arched_205",
    domain: "renaissance_classical",
    subCategory: "Baroque & Counter-Reformation",
    era: "baroque",
    questionEn: "Why was Caravaggio's deeply moving altarpiece 'Death of the Virgin' (Morte della Vergine, 1605-1606, Louvre) scandalously rejected by the Discalced Carmelite friars of Santa Maria della Scala in Rome?",
    questionZh: "卡拉瓦乔为罗马阶梯圣母堂绘制的祭坛画《圣母之死》（1605-1606，现藏卢浮宫），为何遭到委托方加尔默罗赤足修会修士们以“严重亵渎教规”为由愤怒退件拒收？",
    optionsEn: [
      "Because Caravaggio depicted the Virgin Mary as a bloated, bare-legged corpse with swollen feet lying in common clothes, allegedly using a drowned prostitute retrieved from the Tiber River as his model, lacking proper theological decorum",
      "Because Caravaggio failed to deliver the painting within the contract deadline",
      "Because Caravaggio painted Mary holding a Protestant German bible",
      "Because the canvas was painted entirely in bright monochrome yellow"
    ],
    optionsZh: [
      "因为卡拉瓦乔将圣母描绘成一具双腿赤裸、腹部浮肿、赤脚外露的底层平民女尸，传言甚至雇用了从台伯河捞起的溺水妓女充当模特，被修会痛斥毫无神圣庄严得体性 (Decorum)",
      "因为卡拉瓦乔严重拖延工期，比教会合同约定的交付期限迟了整整五年",
      "因为卡拉瓦乔在圣母手中画上了一本印刷着马丁·路德德语翻译的新教圣经",
      "因为整幅画作完全采用了高反差的纯单色刺目柠檬黄色丙烯涂料"
    ],
    correctAnswer: 0,
    explanationEn: "The Carmelites demanded a joyful Assumption of Mary into heaven; Caravaggio instead presented the raw, physical reality of mortality — a lifeless peasant woman surrounded by genuinely weeping barefoot apostles beneath a dramatic canopy of blood-red drapery.",
    explanationZh: "修道院期待看到的是天使簇拥、容颜永驻升天的圣洁圣母；而卡拉瓦乔呈现在祭坛前的却是一位疲惫贫穷、躯体冰凉死去的凡间母亲。头顶鲜血般浓重的红幔与使徒们掩面抽泣的粗粝光头，展现了反宗教改革时期最深沉的人性慈悲与肉身终结之痛。",
    tags: ["RenaissanceClassical", "Caravaggio", "Death of the Virgin", "Decorum", "Baroque"],
    difficulty: 2
  },
  {
    id: "arched_206",
    domain: "renaissance_classical",
    subCategory: "Baroque & Counter-Reformation",
    era: "baroque",
    questionEn: "Which marble tour-de-force by Gian Lorenzo Bernini (Galleria Borghese, Rome, 1622-1625) captures the split-second climax of Ovid's Metamorphoses, as the terrified nymph's fingertips sprout delicate laurel leaves and her toes take root into the earth?",
    questionZh: "吉安·洛伦佐·贝尼尼（Gian Lorenzo Bernini）于1622-1625年创作、现藏于罗马博尔盖塞美术馆的巴洛克大理石绝技巅峰之作，生动捕捉了奥维德《变形记》中仙女为逃避阿波罗追逐而在指尖抽出翠绿月桂树叶、脚趾化为树根瞬间的是：",
    optionsEn: [
      "Apollo and Daphne (Apollo e Dafne)",
      "The Rape of Proserpina",
      "David",
      "Aeneas, Anchises, and Ascanius"
    ],
    optionsZh: [
      "《阿波罗与达芙妮》(Apollo and Daphne / Apollo e Dafne)",
      "《普洛塞庇娜的被掳》(Rape of Proserpina)",
      "《大卫》(Bernini's David)",
      "《埃涅阿斯、安喀塞斯与阿斯卡尼俄斯》"
    ],
    correctAnswer: 0,
    explanationEn: "Bernini pushed white Carrara marble beyond all known limits of fragility in 'Apollo and Daphne', carving paper-thin translucent leaves fluttering in the wind, bark wrapping around warm living flesh, and hair flying dynamically in space.",
    explanationZh: "贝尼尼在大理石雕塑中创造了不可思议的奇迹：阿波罗的手指刚触及达芙妮温热柔软的腰肢，仙女惊恐回眸尖叫，手指已化作薄如蝉翼、在逆光下半透明的月桂嫩叶，粗糙树皮正由双腿向上蔓延包裹，将运动的最极致刹那定格为永恒诗意。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Apollo_and_Daphne_%28Bernini%29.jpg/800px-Apollo_and_Daphne_%28Bernini%29.jpg",
    fallbackImage: "/images/artworks/apollo-daphne.jpg",
    tags: ["RenaissanceClassical", "Bernini", "Apollo and Daphne", "Marble", "Baroque", "Sculpture"],
    difficulty: 1
  },
  {
    id: "arched_207",
    domain: "renaissance_classical",
    subCategory: "Baroque & Counter-Reformation",
    era: "baroque",
    questionEn: "How did Gian Lorenzo Bernini orchestrate a multi-sensory 'total work of art' in the Cornaro Chapel (Santa Maria della Vittoria, Rome, 1647-1652) for 'The Ecstasy of Saint Teresa'?",
    questionZh: "贝尼尼在罗马胜利圣母堂科尔纳罗礼拜堂创作《圣德列萨的狂喜》（1647-1652）时，是如何将建筑、雕塑、光线与剧场舞台艺术融为一体的？",
    optionsEn: [
      "By integrating pure white marble figures of Teresa and the angel beneath gilded bronze rays illuminated by a hidden yellow-glass skylight, flanked by theatre opera boxes containing marble portraits of the Cornaro family watching the miracle",
      "By placing Teresa inside a real fountain of flowing holy water",
      "By projecting animated magic-lantern slides on the ceiling",
      "By playing recorded organ choir music from concealed pipes"
    ],
    optionsZh: [
      "将悬浮云端的圣德列萨与带金色箭镞的天使纯白大理石主像置于神龛中，上方由隐藏的黄色玻璃天窗引下真实自然光照亮镀金青铜光芒，两侧包厢浮雕中科尔纳罗家族贵族如剧院观众般围坐观摩神迹",
      "将圣德列萨雕像直接安放在汩汩流淌着圣水喷泉的大理石水池中央",
      "利用安装在讲坛底部的魔灯放映机在拱顶上投射连续动态幻灯片动画",
      "利用隐蔽在祭坛下方的地下铜管定时播放留声机录制的唱诗班风琴合唱"
    ],
    correctAnswer: 0,
    explanationEn: "Bernini orchestrated the Cornaro Chapel as a theatrical Bel Composto (unification of arts): a concealed upper amber skylight casts real sunlight down gilded bronze beams onto Teresa's sensuous folds, while opera-box donors converse at the sides.",
    explanationZh: "贝尼尼创造了“综合艺术”（Bel composto）典范：天顶暗藏的黄色天窗将自然天光导入神龛，金色光束如倾泻的光之瀑布打在德列萨瘫软迷醉的身躯上，天使手中神爱之箭正欲刺入圣女心扉，展现了巴洛克艺术将神秘宗教通灵与肉体精神狂喜合二为一的魔力。",
    tags: ["RenaissanceClassical", "Bernini", "Ecstasy of Saint Teresa", "Baroque", "Cornaro Chapel"],
    difficulty: 1
  },
  {
    id: "arched_208",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "baroque",
    questionEn: "What powerful theological metaphor guided Gian Lorenzo Bernini's design of the colossal quadruple colonnade enclosing Saint Peter's Square in Rome (1656-1667)?",
    questionZh: "吉安·洛伦佐·贝尼尼在规划罗马梵蒂冈圣彼得大教堂大广场（Piazza San Pietro, 1656-1667）由284根巨型多立克柱构成的宏伟弧形四排柱廊时，所依据的核心宗教象征寓意是：",
    optionsEn: [
      "The motherly arms of the Catholic Church opening outwards to embrace the faithful, reunite heretics, and welcome non-believers into the fold",
      "A military fortress wall designed to repel Ottoman artillery fire",
      "An astronomical clock dial calculating the vernal equinox",
      "A replica of King Solomon's Temple courtyard in ancient Jerusalem"
    ],
    optionsZh: [
      "罗马天主教会慈母般的双手张开双臂，以包容寰宇的博大胸怀拥抱信徒、感化异端并接纳全世界所有朝圣者回归信仰怀抱",
      "用于抵抗奥斯曼帝国加农重炮轰击的坚不可摧军事防御城墙体系",
      "用来精准测算春分点与行星公转周期的巨型露天日晷天文仪器",
      "完全按原样等比例复刻古耶路撒冷所罗门第一圣殿的祭祀外院"
    ],
    correctAnswer: 0,
    explanationEn: "Bernini explicitly stated in his architectural memoirs that the curved elliptical colonnades represent 'the arms of the Church which are opened wide to embrace Catholics to reinforce their belief, heretics to re-unite them, and agnostics to enlighten them'.",
    explanationZh: "贝尼尼在设计说明中明确写道：“既然圣彼得教堂是万堂之母，其柱廊就必须如同慈母张开的双臂。”两道巨大的四排多立克立柱椭圆弧形柱廊如环抱的巨手，无论从视觉震撼力还是宗教神学象征上，都将巴洛克都市空间的庄严与宽广推向了顶峰。",
    tags: ["RenaissanceClassical", "Architecture", "Bernini", "St Peters Square", "Baroque", "Urbanism"],
    difficulty: 1
  },
  {
    id: "arched_209",
    domain: "renaissance_classical",
    subCategory: "Baroque & Counter-Reformation",
    era: "baroque",
    questionEn: "Which colossal 29-meter-high gilded bronze canopy was erected by Gian Lorenzo Bernini beneath Michelangelo's dome in Saint Peter's (1624-1633), supported by four spiraling Solomonic columns adorned with Barberini bees?",
    questionZh: "由贝尼尼受教皇乌尔班八世委托、在圣彼得大教堂米开朗基罗穹顶正下方殉道墓穴之上耸立的29米高巨型贴金青铜华盖是：",
    optionsEn: [
      "The Baldacchino in Saint Peter's Basilica (Baldacchino di San Pietro)",
      "The Cathedra Petri (Throne of Saint Peter)",
      "The Tomb of Pope Urban VIII",
      "The Scala Regia"
    ],
    optionsZh: [
      "圣彼得大教堂青铜华盖 (St. Peter's Baldacchino / Baldacchino di San Pietro)",
      "圣彼得宗座圣椅 (Cathedra Petri)",
      "乌尔班八世教皇陵墓",
      "梵蒂冈王家阶梯 (Scala Regia)"
    ],
    correctAnswer: 0,
    explanationEn: "Bernini melted ancient bronze beams stripped from the Roman Pantheon to cast the immense 66-ton Baldacchino, featuring four spiraling Solomonic columns evoking the Temple of Jerusalem and crowned with angels holding palms beneath the papal cross.",
    explanationZh: "圣彼得青铜华盖高近10层楼，重达66吨。四根巨大螺旋盘旋的所罗门扭柱将视线引向穹顶苍穹，表面雕刻藤蔓植物与巴贝里尼家族的标志金蜜蜂，以令人叹为观止的巴洛克宏大尺度锁定了整座天主教世界中枢圣地。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Saint_Peter%27s_Baldachin.jpg/800px-Saint_Peter%27s_Baldachin.jpg",
    fallbackImage: "/images/artworks/baldacchino.jpg",
    tags: ["RenaissanceClassical", "Architecture", "Bernini", "Baldacchino", "St Peters", "Baroque"],
    difficulty: 1
  },
  {
    id: "arched_210",
    domain: "renaissance_classical",
    subCategory: "Architectural Treatises & Masters",
    era: "baroque",
    questionEn: "Which Roman Baroque church facade and interior by Francesco Borromini (San Carlo alle Quattro Fontane, 1638-1646) discarded flat classical planes in favor of an undulating wave of alternating concave and convex curves under a complex oval coffered dome?",
    questionZh: "弗朗切斯科·博罗米尼（Francesco Borromini）在罗马设计的哪座巴洛克殿堂杰作（1638-1646），彻底颠覆平直古典墙面，以交替起伏的凹凸波浪形动感曲面立面和饰有八角形与十字形藻井的复杂椭圆穹顶震撼世界？",
    optionsEn: [
      "San Carlo alle Quattro Fontane (San Carlino)",
      "Sant'Ivo alla Sapienza",
      "Sant'Agnese in Agone at Piazza Navona",
      "Santa Maria della Pace"
    ],
    optionsZh: [
      "四喷泉圣卡罗堂 / 小圣卡罗 (San Carlo alle Quattro Fontane / San Carlino)",
      "圣依弗堂 (Sant'Ivo alla Sapienza)",
      "纳沃纳广场阿格尼丝堂 (Sant'Agnese in Agone)",
      "和平圣母堂 (Santa Maria della Pace)"
    ],
    correctAnswer: 0,
    explanationEn: "Borromini designed San Carlino on a cramped corner site for poor Spanish Trinitarians, using complex geometric interlocking triangles to generate an elastic undulating oval interior and a two-story wave-like facade that breathes dynamic sculptural life into architectural stone.",
    explanationZh: "博罗米尼在四喷泉圣卡罗教堂中展现了纯粹的数学几何天才：在极其狭小的转角地块上，他将整面大理石外墙处理成如同受挤压波动的流体波浪（凸-凹-凸交替），穹顶椭圆深槽藻井（八角、六角与十字）伴随透视渐变缩小，光芒从采光天窗倾泻，成为高潮巴洛克空间最具创新性的奇葩。",
    tags: ["RenaissanceClassical", "Architecture", "Borromini", "San Carlo alle Quattro Fontane", "Baroque", "Undulating Facade"],
    difficulty: 2
  }
];

// =========================================================================
// Aggregation & Validation Engine
// =========================================================================
const visualImageEnrichments = {
  arched_046: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    fallbackImage: "/images/artworks/andy-warhol.jpg"
  },
  arched_047: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    fallbackImage: "/images/artworks/andy-warhol.jpg"
  },
  arched_050: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    fallbackImage: "/images/artworks/mona-lisa.jpg"
  },
  arched_052: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Carlo_Carr%C3%A0_1920s.jpg/800px-Carlo_Carr%C3%A0_1920s.jpg",
    fallbackImage: "/images/artworks/song-of-love.jpg"
  },
  arched_055: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/The_Persistence_of_Memory_Dali.jpg/800px-The_Persistence_of_Memory_Dali.jpg",
    fallbackImage: "/images/artworks/persistence-of-memory.jpg"
  },
  arched_069: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Constantin_Brancusi%2C_1923%2C_Bird_in_Space%2C_marble%2C_Metropolitan_Museum_of_Art.jpg/800px-Constantin_Brancusi%2C_1923%2C_Bird_in_Space%2C_marble%2C_Metropolitan_Museum_of_Art.jpg",
    fallbackImage: "/images/artworks/bird-in-space.jpg"
  },
  arched_070: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/The_Kiss_Brancusi.jpg/800px-The_Kiss_Brancusi.jpg",
    fallbackImage: "/images/artworks/the-kiss.jpg"
  },
  arched_077: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/800px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg",
    fallbackImage: "/images/artworks/black-square.jpg"
  },
  arched_078: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tatlin_Tower_model.jpg/800px-Tatlin_Tower_model.jpg",
    fallbackImage: "/images/artworks/tatlin-tower.jpg"
  },
  arched_083: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Como_-_Casa_del_Fascio.jpg/800px-Como_-_Casa_del_Fascio.jpg",
    fallbackImage: "/images/artworks/casa-del-fascio.jpg"
  },
  arched_084: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/VillaSavoye.jpg/800px-VillaSavoye.jpg",
    fallbackImage: "/images/artworks/villa-savoye.jpg"
  }
};

export function assembleBank() {
  const rawList = [
    ...chronologyQuestions,
    ...chronologyQuestionsPart2,
    ...visualIdQuestionsPart1,
    ...visualIdQuestionsPart2,
    ...avantGardeQuestionsPart1,
    ...avantGardeQuestionsPart2,
    ...artistMovementQuestions,
    ...renaissanceClassicalPart1,
    ...renaissanceClassicalPart2,
    ...renaissanceClassicalPart3
  ];

  const bank = rawList.map(q => {
    if (visualImageEnrichments[q.id]) {
      return {
        ...q,
        image: visualImageEnrichments[q.id].image,
        fallbackImage: visualImageEnrichments[q.id].fallbackImage
      };
    }
    return q;
  });

  console.log(`Assembled total raw questions: ${bank.length}`);
  return bank;
}

export function writeArchedBankFile() {
  const bank = assembleBank();
  const targetFile = path.resolve(projectRoot, 'src/data/archedQuestionBank.js');
  
  // Validate counts
  if (bank.length !== 210) {
    throw new Error(`Expected exactly 210 questions, got ${bank.length}`);
  }

  const fileContent = `/**
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

export const ARCHED_QUESTION_BANK = ${JSON.stringify(bank, null, 2)};

export const archedQuestions = ARCHED_QUESTION_BANK;
export const realPdfQuestions = ARCHED_QUESTION_BANK;
export default ARCHED_QUESTION_BANK;
`;

  fs.writeFileSync(targetFile, fileContent, 'utf8');
  console.log(`Successfully wrote ${bank.length} questions to ${targetFile}`);
}

// Execute when run as script
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  writeArchedBankFile();
}
