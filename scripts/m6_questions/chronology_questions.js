/**
 * scripts/m6_questions/chronology_questions.js
 * 
 * 42 In-Scope Chronology Questions:
 * - 18 Replacement Questions (for slots 5, 8, 12, 13, 14, 15, 17, 19, 20, 23, 26, 27, 29, 31, 32, 35, 37, 40)
 * - 24 Expansion Questions (for slots 211 to 234)
 * 
 * Strict compliance with artData.js: 21 periods, 66 figures, 154 works.
 * Target Answer Key distribution:
 * Correct Answer counts to reach 16 of each key across all 64 chronology questions:
 * 0 (A): 11
 * 1 (B): 10
 * 2 (C): 9
 * 3 (D): 12
 * Total: 42
 */

export const CHRONOLOGY_REPLACEMENTS = {
  // Slot 5 (Replacement for Fauvism/Matisse) - Target Ans: 1 (B)
  arched_005: {
    id: 'arched_005',
    domain: 'chronology',
    subCategory: 'Architectural Movement Progression',
    era: '10th - 20th Century',
    questionZh: '请按历史演进的先后顺序排列以下西方经典建筑运动与流派：',
    questionEn: 'Place the following Western architectural movements in their correct chronological order of emergence:',
    optionsZh: [
      '哥特式建筑 -> 文艺复兴建筑 -> 罗马式建筑 -> 新古典主义建筑',
      '罗马式建筑 -> 哥特式建筑 -> 文艺复兴建筑 -> 巴洛克建筑 -> 新古典主义建筑',
      '文艺复兴建筑 -> 罗马式建筑 -> 哥特式建筑 -> 巴洛克建筑 -> 现代主义建筑',
      '新古典主义建筑 -> 巴洛克建筑 -> 文艺复兴建筑 -> 哥特式建筑 -> 罗马式建筑'
    ],
    optionsEn: [
      'Gothic -> Renaissance -> Romanesque -> Neoclassical',
      'Romanesque -> Gothic -> Renaissance -> Baroque -> Neoclassical',
      'Renaissance -> Romanesque -> Gothic -> Baroque -> Modernist',
      'Neoclassical -> Baroque -> Renaissance -> Gothic -> Romanesque'
    ],
    correctAnswer: 1,
    explanationZh: '西方经典建筑史的核心发展主线为：罗马式建筑（盛行于10-12世纪，以厚重墙体与半圆拱为特征） -> 哥特式建筑（12-14世纪，以尖拱与飞扶壁为特征） -> 文艺复兴建筑（15-16世纪，以古典柱式与数学对称复兴为特征） -> 巴洛克建筑（16世纪末-18世纪中叶，以动感椭圆与光影雕塑为特征） -> 新古典主义建筑（18世纪中叶-19世纪中叶，以理性几何与严谨希腊罗马规制为特征）。',
    explanationEn: 'The canonical progression of Western historic architecture is: Romanesque (10th–12th c., massive masonry and semicircular arches) -> Gothic (12th–14th c., pointed arches and flying buttresses) -> Renaissance (15th–16th c., classical orders and mathematical proportion) -> Baroque (late 16th–mid 18th c., undulating plasticity and theatrical chiaroscuro) -> Neoclassical (mid 18th–mid 19th c., Enlightenment rationalism and severe Greco-Roman revival).',
    tags: ['Chronology', 'Architecture', 'Romanesque', 'Gothic', 'Renaissance', 'Baroque', 'Neoclassical'],
    difficulty: 1
  },

  // Slot 8 (Replacement for Ancient Greece/Rome) - Target Ans: 0 (A)
  arched_008: {
    id: 'arched_008',
    domain: 'chronology',
    subCategory: 'Monumental Landmarks Progression',
    era: '11th - 20th Century',
    questionZh: '请按主要营建或落成落成年代的先后顺序排列以下意大利与欧洲历史地标建筑：',
    questionEn: 'Arrange the following monumental European architectural landmarks in chronological order of their inception or completion:',
    optionsZh: [
      '米兰圣安布罗焦圣殿 (1099) -> 佛罗伦萨百花大教堂穹顶 (1436) -> 罗马圣依佛堂 (1660) -> 巴黎埃菲尔铁塔 (1889)',
      '佛罗伦萨百花大教堂穹顶 (1436) -> 米兰圣安布罗焦圣殿 (1099) -> 巴黎埃菲尔铁塔 (1889) -> 罗马圣依佛堂 (1660)',
      '罗马圣依佛堂 (1660) -> 米兰圣安布罗焦圣殿 (1099) -> 佛罗伦萨百花大教堂穹顶 (1436) -> 巴黎埃菲尔铁塔 (1889)',
      '巴黎埃菲尔铁塔 (1889) -> 罗马圣依佛堂 (1660) -> 佛罗伦萨百花大教堂穹顶 (1436) -> 米兰圣安布罗焦圣殿 (1099)'
    ],
    optionsEn: [
      'Basilica di Sant\'Ambrogio (1099) -> Florence Cathedral Dome (1436) -> Sant\'Ivo alla Sapienza (1660) -> Eiffel Tower (1889)',
      'Florence Cathedral Dome (1436) -> Basilica di Sant\'Ambrogio (1099) -> Eiffel Tower (1889) -> Sant\'Ivo alla Sapienza (1660)',
      'Sant\'Ivo alla Sapienza (1660) -> Basilica di Sant\'Ambrogio (1099) -> Florence Cathedral Dome (1436) -> Eiffel Tower (1889)',
      'Eiffel Tower (1889) -> Sant\'Ivo alla Sapienza (1660) -> Florence Cathedral Dome (1436) -> Basilica di Sant\'Ambrogio (1099)'
    ],
    correctAnswer: 0,
    explanationZh: '正确建造顺序为：米兰圣安布罗焦圣殿（伦巴第罗曼建筑顶峰，主体中殿与肋拱重建于1099年前后） -> 佛罗伦萨圣母百花大教堂八角形双层穹顶（布鲁内莱斯基于1420-1436年营建） -> 罗马圣依佛堂（博罗米尼巴洛克星形六角平面杰作，落成于1660年） -> 巴黎埃菲尔铁塔（居斯塔夫·埃菲尔为1889年世博会建造的锻铁塔）。',
    explanationEn: 'The chronological sequence is: Basilica di Sant\'Ambrogio (Lombard Romanesque nave and ribbed vaults rebuilt c. 1099) -> Florence Cathedral Dome (Brunelleschi\'s double-shell dome erected 1420–1436) -> Sant\'Ivo alla Sapienza (Borromini\'s Baroque hexagonal star church completed 1660) -> Eiffel Tower (Gustave Eiffel\'s wrought-iron lattice monument for the 1889 Paris Exposition).',
    tags: ['Chronology', 'Landmarks', 'Romanesque', 'Renaissance', 'Baroque', 'Industrial'],
    difficulty: 2
  },

  // Slot 12 (Replacement for Giotto/Masaccio) - Target Ans: 3 (D)
  arched_012: {
    id: 'arched_012',
    domain: 'chronology',
    subCategory: 'Italian Renaissance Architects Succession',
    era: '15th - 16th Century',
    questionZh: '下列哪个序列准确反映了意大利文艺复兴五位伟大建筑大师的代际传承与历史先后？',
    questionEn: 'Which sequence accurately traces the chronological progression and generational lineage of Italian Renaissance architectural masters?',
    optionsZh: [
      '安德烈·帕拉第奥 -> 莱昂·巴蒂斯塔·阿尔贝蒂 -> 菲利波·布鲁内莱斯基 -> 多纳托·伯拉孟特',
      '多纳托·伯拉孟特 -> 菲利波·布鲁内莱斯基 -> 米开朗基罗 -> 安德烈·帕拉第奥',
      '莱昂·巴蒂斯塔·阿尔贝蒂 -> 安德烈·帕拉第奥 -> 菲利波·布鲁内莱斯基 -> 多纳托·伯拉孟特',
      '菲利波·布鲁内莱斯基 -> 莱昂·巴蒂斯塔·阿尔贝蒂 -> 多纳托·伯拉孟特 -> 米开朗基罗 -> 安德烈·帕拉第奥'
    ],
    optionsEn: [
      'Andrea Palladio -> Leon Battista Alberti -> Filippo Brunelleschi -> Donato Bramante',
      'Donato Bramante -> Filippo Brunelleschi -> Michelangelo -> Andrea Palladio',
      'Leon Battista Alberti -> Andrea Palladio -> Filippo Brunelleschi -> Donato Bramante',
      'Filippo Brunelleschi -> Leon Battista Alberti -> Donato Bramante -> Michelangelo -> Andrea Palladio'
    ],
    correctAnswer: 3,
    explanationZh: '意大利文艺复兴建筑大师的谱系为：菲利波·布鲁内莱斯基（1377-1446，早期文艺复兴奠基人，百花大教堂穹顶） -> 莱昂·巴蒂斯塔·阿尔贝蒂（1404-1472，建筑理论奠基人，《论建筑》） -> 多纳托·伯拉孟特（1444-1514，盛期文艺复兴开创者，坦比哀多） -> 米开朗基罗·博那罗蒂（1475-1564，手法主义与圣彼得穹顶重构） -> 安德烈·帕拉第奥（1508-1580，晚期文艺复兴与帕拉第奥主义奠基人）。',
    explanationEn: 'The lineage of Italian Renaissance architects is: Filippo Brunelleschi (1377–1446, Early Renaissance pioneer) -> Leon Battista Alberti (1404–1472, architectural theorist, De re aedificatoria) -> Donato Bramante (1444–1514, High Renaissance master, Tempietto) -> Michelangelo Buonarroti (1475–1564, Mannerism and St. Peter\'s Basilica) -> Andrea Palladio (1508–1580, Late Renaissance, Villa Rotonda).',
    tags: ['Chronology', 'Renaissance', 'Architects', 'Brunelleschi', 'Alberti', 'Bramante', 'Michelangelo', 'Palladio'],
    difficulty: 1
  },

  // Slot 13 (Replacement for Michelangelo/Bernini David sculptures) - Target Ans: 0 (A)
  arched_013: {
    id: 'arched_013',
    domain: 'chronology',
    subCategory: 'Centralized Dome Evolution',
    era: '15th - 18th Century',
    questionZh: '请按营建年份的先后顺序排列以下四座展现集中式穹顶结构演进的意大利经典礼拜堂与教堂：',
    questionEn: 'Arrange the following Italian centralized domed chapels and basilicas in chronological order of their construction:',
    optionsZh: [
      '帕齐礼拜堂 (1443) -> 坦比哀多礼拜堂 (1502) -> 罗马四喷泉圣卡罗堂 (1638) -> 都灵苏佩尔加大教堂 (1717)',
      '坦比哀多礼拜堂 (1502) -> 帕齐礼拜堂 (1443) -> 都灵苏佩尔加大教堂 (1717) -> 罗马四喷泉圣卡罗堂 (1638)',
      '罗马四喷泉圣卡罗堂 (1638) -> 帕齐礼拜堂 (1443) -> 坦比哀多礼拜堂 (1502) -> 都灵苏佩尔加大教堂 (1717)',
      '都灵苏佩尔加大教堂 (1717) -> 罗马四喷泉圣卡罗堂 (1638) -> 坦比哀多礼拜堂 (1502) -> 帕齐礼拜堂 (1443)'
    ],
    optionsEn: [
      'Pazzi Chapel (1443) -> Tempietto di San Pietro (1502) -> San Carlo alle Quattro Fontane (1638) -> Basilica of Superga (1717)',
      'Tempietto di San Pietro (1502) -> Pazzi Chapel (1443) -> Basilica of Superga (1717) -> San Carlo alle Quattro Fontane (1638)',
      'San Carlo alle Quattro Fontane (1638) -> Pazzi Chapel (1443) -> Tempietto di San Pietro (1502) -> Basilica of Superga (1717)',
      'Basilica of Superga (1717) -> San Carlo alle Quattro Fontane (1638) -> Tempietto di San Pietro (1502) -> Pazzi Chapel (1443)'
    ],
    correctAnswer: 0,
    explanationZh: '集中式穹顶演进脉络为：布鲁内莱斯基设计的佛罗伦萨圣十字圣殿帕齐礼拜堂（1443年启动，早期文艺复兴正方形与伞形穹顶几何基准） -> 伯拉孟特设计的蒙托里奥圣彼得坦比哀多（1502年，盛期文艺复兴多立克柱廊纯圆集中式圣殿） -> 博罗米尼设计的四喷泉圣卡罗堂（1638年动工，巴洛克动态椭圆形复合几何穹顶） -> 菲利波·尤瓦拉设计的新古典/晚期巴洛克都灵苏佩尔加大教堂（1717-1731年，高耸鼓座大穹顶）。',
    explanationEn: 'The progression of centralized Italian dome designs is: Brunelleschi\'s Pazzi Chapel (begun 1443, Early Renaissance square and umbrella dome) -> Bramante\'s Tempietto (1502, High Renaissance pure circular Doric tholos) -> Borromini\'s San Carlo alle Quattro Fontane (begun 1638, Baroque undulating oval dome) -> Juvarra\'s Basilica of Superga (1717–1731, monumental late Baroque/Neoclassical dome).',
    tags: ['Chronology', 'Domes', 'Renaissance', 'Baroque', 'Neoclassical'],
    difficulty: 2
  },

  // Slot 14 (Replacement for 19th c. painters Courbet/Manet/Monet) - Target Ans: 2 (C)
  arched_014: {
    id: 'arched_014',
    domain: 'chronology',
    subCategory: 'Modern Structural Innovation Progression',
    era: '1851 - 1925',
    questionZh: '下列哪组序列正确展现了从19世纪工业金属结构到现代主义建筑成熟的结构演变轨迹？',
    questionEn: 'Which sequence correctly reflects the historical evolution of modern tectonic structures from 19th-century metal engineering to mature Modernism?',
    optionsZh: [
      '德绍包豪斯校舍 (1925) -> 巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 卡森·皮里·斯科特百货大楼 (1899)',
      '卡森·皮里·斯科特百货大楼 (1899) -> 伦敦水晶宫 (1851) -> 德绍包豪斯校舍 (1925) -> 巴黎埃菲尔铁塔 (1889)',
      '伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 芝加哥卡森·皮里·斯科特百货 (1899) -> 德绍包豪斯校舍 (1925)',
      '巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 德绍包豪斯校舍 (1925) -> 芝加哥卡森·皮里·斯科特百货 (1899)'
    ],
    optionsEn: [
      'Bauhaus Dessau (1925) -> Eiffel Tower (1889) -> Crystal Palace (1851) -> Carson Pirie Scott (1899)',
      'Carson Pirie Scott (1899) -> Crystal Palace (1851) -> Bauhaus Dessau (1925) -> Eiffel Tower (1889)',
      'The Crystal Palace (1851) -> Eiffel Tower (1889) -> Carson Pirie Scott Building (1899) -> Bauhaus Dessau (1925)',
      'Eiffel Tower (1889) -> Crystal Palace (1851) -> Bauhaus Dessau (1925) -> Carson Pirie Scott (1899)'
    ],
    correctAnswer: 2,
    explanationZh: '现代工程与建筑结构的演变关键节点为：约瑟夫·帕克斯顿设计的伦敦水晶宫（1851年，预制装配式铸铁与平板玻璃结构） -> 居斯塔夫·埃菲尔设计的巴黎埃菲尔铁塔（1889年，超高层熟铁桁架结构） -> 路易斯·沙利文设计的芝加哥卡森·皮里·斯科特百货大楼（1899年，标准钢框架结构与大面积芝加哥窗） -> 瓦尔特·格罗皮乌斯设计的德绍包豪斯校舍工坊楼（1925-1926年，钢筋混凝土框架结构与外挂三层全玻璃幕墙）。',
    explanationEn: 'The progression of modern engineering spans: Paxton\'s Crystal Palace (1851, prefabricated modular cast iron and plate glass) -> Eiffel Tower (1889, soaring wrought-iron lattice engineering) -> Sullivan\'s Carson Pirie Scott Building (1899, steel frame and broad horizontal Chicago windows) -> Gropius\'s Bauhaus Dessau (1925–1926, reinforced concrete frame wrapped in a non-structural glazed curtain wall).',
    tags: ['Chronology', 'Engineering', 'Industrial', 'Skyscrapers', 'Modernism'],
    difficulty: 2
  },

  // Slot 15 (Replacement for Russian Constructivism) - Target Ans: 1 (B)
  arched_015: {
    id: 'arched_015',
    domain: 'chronology',
    subCategory: 'European Avant-Garde Declarations',
    era: '1909 - 1926',
    questionZh: '请按宣言或刊物创刊的年份先后排列以下20世纪欧洲前卫艺术与建筑理论里程碑：',
    questionEn: 'Place the following seminal avant-garde theoretical milestones in chronological order of their founding publication:',
    optionsZh: [
      '意大利理性主义“七人团”宣言 -> 未来主义第一宣言 -> 荷兰风格派创刊 -> 超现实主义第一宣言',
      '马里内蒂《未来主义第一宣言》 (1909) -> 杜斯堡创办《风格派》杂志 (1917) -> 布勒东《超现实主义宣言》 (1924) -> 意大利“七人团”理性主义宣言 (1926)',
      '杜斯堡创办《风格派》杂志 (1917) -> 马里内蒂《未来主义第一宣言》 (1909) -> 意大利“七人团”理性主义宣言 (1926) -> 布勒东《超现实主义宣言》 (1924)',
      '布勒东《超现实主义宣言》 (1924) -> 意大利“七人团”理性主义宣言 (1926) -> 马里内蒂《未来主义第一宣言》 (1909) -> 杜斯堡创办《风格派》杂志 (1917)'
    ],
    optionsEn: [
      'Gruppo 7 Rationalist Manifesto -> First Futurist Manifesto -> De Stijl Magazine -> First Surrealist Manifesto',
      'Marinetti\'s First Futurist Manifesto (1909) -> Theo van Doesburg launches De Stijl (1917) -> Breton\'s Surrealist Manifesto (1924) -> Gruppo 7 Rationalist Manifesto (1926)',
      'De Stijl Magazine (1917) -> First Futurist Manifesto (1909) -> Gruppo 7 Rationalist Manifesto (1926) -> Surrealist Manifesto (1924)',
      'Surrealist Manifesto (1924) -> Gruppo 7 Rationalist Manifesto (1926) -> First Futurist Manifesto (1909) -> De Stijl Magazine (1917)'
    ],
    correctAnswer: 1,
    explanationZh: '欧洲前卫思潮宣言的先后顺序为：马里内蒂在巴黎《费加罗报》发表《未来主义第一宣言》（1909年2月） -> 特奥·范·杜斯堡在莱顿创办《风格派》（De Stijl）杂志（1917年） -> 安德烈·布勒东在巴黎发表《超现实主义宣言》（1924年10月） -> 意大利理性主义核心团队“七人团”（Gruppo 7，泰拉尼、菲吉尼、波利尼等）在《意大利评论》发表第一篇理性主义建筑纲领（1926年12月）。',
    explanationEn: 'The sequence of manifestos is: Marinetti\'s Futurist Manifesto in Le Figaro (Feb 1909) -> Theo van Doesburg\'s founding of De Stijl journal (1917) -> André Breton\'s First Manifesto of Surrealism (Oct 1924) -> Gruppo 7\'s first Rationalist manifesto in Rassegna Italiana (Dec 1926).',
    tags: ['Chronology', 'Manifestos', 'Futurism', 'DeStijl', 'Surrealism', 'Rationalism'],
    difficulty: 2
  },

  // Slot 17 (Replacement for Raphael/Pre-Raphaelites) - Target Ans: 0 (A)
  arched_017: {
    id: 'arched_017',
    domain: 'chronology',
    subCategory: 'Architectural Treatises Timeline',
    era: '15th - 16th Century',
    questionZh: '西方建筑理论在文艺复兴时期由四部划时代典籍系统奠定，其问世年代的先后顺序是：',
    questionEn: 'Western classical architectural theory was codified by pivotal Renaissance treatises; what is their correct chronological sequence?',
    optionsZh: [
      '阿尔贝蒂《论建筑》 (1452) -> 维尼奥拉《五种柱式规范》 (1562) -> 帕拉第奥《建筑四书》 (1570)',
      '维尼奥拉《五种柱式规范》 (1562) -> 阿尔贝蒂《论建筑》 (1452) -> 帕拉第奥《建筑四书》 (1570)',
      '帕拉第奥《建筑四书》 (1570) -> 维尼奥拉《五种柱式规范》 (1562) -> 阿尔贝蒂《论建筑》 (1452)',
      '阿尔贝蒂《论建筑》 (1452) -> 帕拉第奥《建筑四书》 (1570) -> 维尼奥拉《五种柱式规范》 (1562)'
    ],
    optionsEn: [
      'Alberti\'s De re aedificatoria (1452) -> Vignola\'s Regola delli cinque ordini (1562) -> Palladio\'s I quattro libri (1570)',
      'Vignola\'s Regola delli cinque ordini (1562) -> Alberti\'s De re aedificatoria (1452) -> Palladio\'s I quattro libri (1570)',
      'Palladio\'s I quattro libri (1570) -> Vignola\'s Regola delli cinque ordini (1562) -> Alberti\'s De re aedificatoria (1452)',
      'Alberti\'s De re aedificatoria (1452) -> Palladio\'s I quattro libri (1570) -> Vignola\'s Regola delli cinque ordini (1562)'
    ],
    correctAnswer: 0,
    explanationZh: '文艺复兴三大建筑理论典籍的成书出版顺序为：莱昂·巴蒂斯塔·阿尔贝蒂撰写《论建筑》（De re aedificatoria，1452年完成，文艺复兴首部建筑理论体系） -> 贾科莫·巴罗齐·达·维尼奥拉出版《五种柱式规范》（Regola delli cinque ordini d\'architettura，1562年，极度简明实用的五柱式比例图解） -> 安德烈·帕拉第奥出版《建筑四书》（I quattro libri dell\'architettura，1570年，总结古典法则、别墅设计与古罗马复原的传世典籍）。',
    explanationEn: 'The sequence of Renaissance treatises is: Leon Battista Alberti\'s De re aedificatoria (presented 1452, first Renaissance architectural treatise) -> Giacomo Barozzi da Vignola\'s Regola delli cinque ordini d\'architettura (1562, standardizing classical column proportions) -> Andrea Palladio\'s I quattro libri dell\'architettura (1570, illustrated canon of villas, bridges, and antique orders).',
    tags: ['Chronology', 'Treatises', 'Renaissance', 'Alberti', 'Vignola', 'Palladio'],
    difficulty: 2
  },

  // Slot 19 (Replacement for Cubism Picasso/Braque) - Target Ans: 3 (D)
  arched_019: {
    id: 'arched_019',
    domain: 'chronology',
    subCategory: 'Italian & European Avant-Garde Arts',
    era: '1909 - 1958',
    questionZh: '下列哪组序列正确展现了从未来主义到战后空间主义先锋艺术运动的发展脉络？',
    questionEn: 'Which sequence accurately traces the chronological progression of Italian and European avant-garde art movements from Futurism to Spatialism?',
    optionsZh: [
      '超现实主义 -> 空间主义 -> 未来主义 -> 形而上画派',
      '空间主义 -> 未来主义 -> 形而上画派 -> 超现实主义',
      '形而上画派 -> 空间主义 -> 超现实主义 -> 未来主义',
      '未来主义 (1909) -> 形而上画派 (1917) -> 超现实主义 (1924) -> 空间主义 (1946)'
    ],
    optionsEn: [
      'Surrealism -> Spatialism -> Futurism -> Metaphysical Art',
      'Spatialism -> Futurism -> Metaphysical Art -> Surrealism',
      'Metaphysical Art -> Spatialism -> Surrealism -> Futurism',
      'Futurism (1909) -> Metaphysical Art (1917) -> Surrealism (1924) -> Spatialism (1946)'
    ],
    correctAnswer: 3,
    explanationZh: '意大利与欧洲先锋运动演变逻辑为：未来主义（1909年由马里内蒂、薄邱尼创立，崇尚机器、速度与动能） -> 形而上画派（1917年前后由基里科、卡拉在费拉拉创立，探索静止、空旷与哲学神秘） -> 超现实主义（1924年布勒东在巴黎发表宣言，探索潜意识梦境） -> 空间主义（1946年封塔纳发表《白色的宣言》，以划破画布探索四维时空统一）。',
    explanationEn: 'The historical sequence of avant-garde movements is: Futurism (founded 1909 by Marinetti and Boccioni, dynamic speed and technology) -> Metaphysical Art (crystallized c. 1917 in Ferrara by De Chirico and Carrà, timeless philosophical silence) -> Surrealism (codified 1924 by Breton, dream subconsciousness) -> Spatialism (inaugurated 1946 by Fontana\'s White Manifesto, puncturing canvases to unite light and space).',
    tags: ['Chronology', 'AvantGarde', 'Futurism', 'Metaphysics', 'Surrealism', 'Spatialism'],
    difficulty: 1
  },

  // Slot 20 (Replacement for Malevich/Tatlin) - Target Ans: 3 (D)
  arched_020: {
    id: 'arched_020',
    domain: 'chronology',
    subCategory: 'Modern Architecture Milestones',
    era: '1911 - 1935',
    questionZh: '请按落成年代的先后顺序排列以下四座20世纪国际现代主义先驱建筑杰作：',
    questionEn: 'Arrange the following four foundational Modernist architectural landmarks in chronological order of their completion:',
    optionsZh: [
      '流水别墅 (1935) -> 法古斯鞋楦厂 (1911) -> 德绍包豪斯校舍 (1925) -> 萨伏伊别墅 (1931)',
      '德绍包豪斯校舍 (1925) -> 法古斯鞋楦厂 (1911) -> 萨伏伊别墅 (1931) -> 流水别墅 (1935)',
      '萨伏伊别墅 (1931) -> 德绍包豪斯校舍 (1925) -> 法古斯鞋楦厂 (1911) -> 流水别墅 (1935)',
      '法古斯鞋楦厂 (1911) -> 德绍包豪斯校舍 (1925) -> 萨伏伊别墅 (1931) -> 流水别墅 (1935)'
    ],
    optionsEn: [
      'Fallingwater (1935) -> Fagus Factory (1911) -> Bauhaus Dessau (1925) -> Villa Savoye (1931)',
      'Bauhaus Dessau (1925) -> Fagus Factory (1911) -> Villa Savoye (1931) -> Fallingwater (1935)',
      'Villa Savoye (1931) -> Bauhaus Dessau (1925) -> Fagus Factory (1911) -> Fallingwater (1935)',
      'Fagus Factory (1911) -> Bauhaus Dessau (1925) -> Villa Savoye (1931) -> Fallingwater (1935)'
    ],
    correctAnswer: 3,
    explanationZh: '现代主义建筑里程碑落成顺序为：格罗皮乌斯设计的阿尔费尔德法古斯鞋楦厂（1911年，现代建筑史上首次实现无立柱转角玻璃幕墙） -> 格罗皮乌斯设计的德绍包豪斯校舍（1925-1926年，现代设计教育总根据地与玻璃工坊楼） -> 勒·柯布西耶设计的普瓦西萨伏伊别墅（1928-1931年，“新建筑五点”集大成者） -> 弗兰克·劳埃德·赖特设计的流水别墅（1935年，有机建筑悬挑混凝土阳台巅峰）。',
    explanationEn: 'The chronological sequence is: Walter Gropius\'s Fagus Factory (1911, pioneering column-free glazed corner curtain walls) -> Bauhaus Dessau Building (1925–1926, Pinwheel functionalist campus) -> Le Corbusier\'s Villa Savoye (1928–1931, apotheosis of the Five Points of Architecture) -> Frank Lloyd Wright\'s Fallingwater (1935, organic cantilevered concrete terraces).',
    tags: ['Chronology', 'Modernism', 'Gropius', 'LeCorbusier', 'Wright'],
    difficulty: 2
  },

  // Slot 23 (Replacement for Sant'Elia futurist manifestos) - Target Ans: 1 (B)
  arched_023: {
    id: 'arched_023',
    domain: 'chronology',
    subCategory: 'Boccioni Futurist Works Timeline',
    era: '1910 - 1913',
    questionZh: '请按创作完成年份的先后顺序排列翁贝托·薄邱尼（Umberto Boccioni）以下三件未来主义巅峰杰作：',
    questionEn: 'Place the following three Futurist masterpieces by Umberto Boccioni in their correct chronological order of creation:',
    optionsZh: [
      '《空间中连续性的唯一形体》 (1913) -> 《街道进入房屋》 (1911) -> 《崛起中的城市》 (1910)',
      '《崛起中的城市》 (1910) -> 《街道进入房屋》 (1911) -> 《空间中连续性的唯一形体》 (1913)',
      '《街道进入房屋》 (1911) -> 《崛起中的城市》 (1910) -> 《空间中连续性的唯一形体》 (1913)',
      '《崛起中的城市》 (1910) -> 《空间中连续性的唯一形体》 (1913) -> 《街道进入房屋》 (1911)'
    ],
    optionsEn: [
      'Unique Forms of Continuity in Space (1913) -> The Street Enters the House (1911) -> The City Rises (1910)',
      'The City Rises (1910) -> The Street Enters the House (1911) -> Unique Forms of Continuity in Space (1913)',
      'The Street Enters the House (1911) -> The City Rises (1910) -> Unique Forms of Continuity in Space (1913)',
      'The City Rises (1910) -> Unique Forms of Continuity in Space (1913) -> The Street Enters the House (1911)'
    ],
    correctAnswer: 1,
    explanationZh: '薄邱尼三部名作的创作时间顺序为：《崛起中的城市》（La città che sale，1910年，展现米兰现代电站与工地狂暴劳动力的未来派第一幅油画巨制） -> 《街道进入房屋》（La strada entra nella casa，1911年，阳台母亲视点与室外市声街景同时渗透的共时性油画） -> 《空间中连续性的唯一形体》（Forme uniche della continuità nello spazio，1913年，将空气阻力与气流塑性固化的青铜迈步雕塑）。',
    explanationEn: 'The sequence of Boccioni\'s masterworks is: The City Rises (1910, explosive canvas celebrating Milan\'s industrial expansion) -> The Street Enters the House (1911, simultaneous penetration of sound and city traffic into a domestic balcony) -> Unique Forms of Continuity in Space (1913, aerodynamic striding bronze sculpture).',
    tags: ['Chronology', 'Futurism', 'Boccioni', 'Painting', 'Sculpture'],
    difficulty: 2
  },

  // Slot 26 (Replacement for French 19th c. paintings) - Target Ans: 0 (A)
  arched_026: {
    id: 'arched_026',
    domain: 'chronology',
    subCategory: 'High-Tech to Contemporary Architecture',
    era: '1977 - 2012',
    questionZh: '请按落成开馆年份的先后顺序排列以下四座国际当代先锋博物馆与公共建筑地标：',
    questionEn: 'Arrange the following four contemporary architectural landmarks in chronological order of their opening:',
    optionsZh: [
      '巴黎蓬皮杜国家艺术文化中心 (1977) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 罗马国立二十一世纪艺术博物馆MAXXI (2009) -> 伦敦碎片大厦 (2012)',
      '毕尔巴鄂古根海姆博物馆 (1997) -> 巴黎蓬皮杜国家艺术文化中心 (1977) -> 伦敦碎片大厦 (2012) -> 罗马国立二十一世纪艺术博物馆MAXXI (2009)',
      '罗马国立二十一世纪艺术博物馆MAXXI (2009) -> 巴黎蓬皮杜国家艺术文化中心 (1977) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 伦敦碎片大厦 (2012)',
      '巴黎蓬皮杜国家艺术文化中心 (1977) -> 罗马国立二十一世纪艺术博物馆MAXXI (2009) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 伦敦碎片大厦 (2012)'
    ],
    optionsEn: [
      'Centre Pompidou (1977) -> Guggenheim Bilbao (1997) -> MAXXI Rome (2009) -> The Shard London (2012)',
      'Guggenheim Bilbao (1997) -> Centre Pompidou (1977) -> The Shard London (2012) -> MAXXI Rome (2009)',
      'MAXXI Rome (2009) -> Centre Pompidou (1977) -> Guggenheim Bilbao (1997) -> The Shard London (2012)',
      'Centre Pompidou (1977) -> MAXXI Rome (2009) -> Guggenheim Bilbao (1997) -> The Shard London (2012)'
    ],
    correctAnswer: 0,
    explanationZh: '当代标志性建筑落成顺序为：伦佐·皮亚诺与理查德·罗杰斯设计的高技派巴黎蓬皮杜艺术中心（1977年落成） -> 弗兰克·盖里设计的解构主义毕尔巴鄂古根海姆博物馆（1997年落成，钛金属双曲面表皮） -> 扎哈·哈迪德设计的罗马二十一世纪艺术博物馆MAXXI（2009年落成，流体混凝土曲线空间） -> 伦佐·皮亚诺设计的伦敦碎片大厦（2012年落成，八个倾斜低铁玻璃立面晶体尖塔）。',
    explanationEn: 'The sequence of contemporary landmarks is: Piano & Rogers\' High-Tech Centre Pompidou (1977) -> Frank Gehry\'s Deconstructivist Guggenheim Bilbao (1997, titanium-clad curvilinear landmark) -> Zaha Hadid\'s MAXXI National Museum of 21st Century Arts in Rome (2009, fluid concrete pathways) -> Renzo Piano\'s The Shard in London (2012, crystalline glass spire).',
    tags: ['Chronology', 'HighTech', 'Deconstructivism', 'Contemporary', 'Museums'],
    difficulty: 2
  },

  // Slot 27 (Replacement for British historic bridges) - Target Ans: 2 (C)
  arched_027: {
    id: 'arched_027',
    domain: 'chronology',
    subCategory: 'Iron & Art Nouveau Progression',
    era: '1851 - 1906',
    questionZh: '请按营建或落成年代先后排列以下四座从工业革命铁构到新艺术运动/现代主义的金属与有机建筑名作：',
    questionEn: 'Arrange the following four landmarks from Industrial iron engineering to Art Nouveau and Catalan Modernisme in chronological order:',
    optionsZh: [
      '高迪巴塞罗那米拉之家 (1906) -> 伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 维克多·奥塔塔塞尔饭店 (1893)',
      '维克多·奥塔塔塞尔饭店 (1893) -> 伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 高迪巴塞罗那米拉之家 (1906)',
      '伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 维克多·奥塔布鲁塞尔塔塞尔饭店 (1893) -> 安东尼·高迪巴塞罗那米拉之家 (1906)',
      '巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 高迪巴塞罗那米拉之家 (1906) -> 维克多·奥塔塔塞尔饭店 (1893)'
    ],
    optionsEn: [
      'Casa Milà (1906) -> The Crystal Palace (1851) -> Eiffel Tower (1889) -> Hôtel Tassel (1893)',
      'Hôtel Tassel (1893) -> The Crystal Palace (1851) -> Eiffel Tower (1889) -> Casa Milà (1906)',
      'The Crystal Palace (1851) -> Eiffel Tower (1889) -> Hôtel Tassel, Brussels (1893) -> Antoni Gaudí\'s Casa Milà (1906)',
      'Eiffel Tower (1889) -> The Crystal Palace (1851) -> Casa Milà (1906) -> Hôtel Tassel (1893)'
    ],
    correctAnswer: 2,
    explanationZh: '结构与流派演进顺序为：约瑟夫·帕克斯顿设计的伦敦水晶宫（1851年万国博览会，预制铸铁玻璃结构） -> 埃菲尔铁塔（1889年巴黎世博会，300米高锻铁网架） -> 维克多·奥塔在布鲁塞尔设计的塔塞尔饭店（Hôtel Tassel，1893年，首次将外露铸铁构件与植物藤蔓鞭绳曲线融为一体的新艺术运动宣言之作） -> 安东尼·高迪设计的米拉之家（Casa Milà，1906-1912年，无承重外墙的天然石材与波浪形有机公寓）。',
    explanationEn: 'The correct chronological progression is: Paxton\'s Crystal Palace (1851) -> Eiffel Tower (1889) -> Victor Horta\'s Hôtel Tassel in Brussels (1893, inaugural masterpiece of Art Nouveau featuring exposed decorative ironwork) -> Antoni Gaudí\'s Casa Milà in Barcelona (1906–1912, undulating organic stone facade).',
    tags: ['Chronology', 'ArtNouveau', 'Gaudi', 'Industrial', 'IronArchitecture'],
    difficulty: 2
  },

  // Slot 29 (Replacement for Die Brücke) - Target Ans: 3 (D)
  arched_029: {
    id: 'arched_029',
    domain: 'chronology',
    subCategory: 'Dada & Surrealism Ready-Made Milestones',
    era: '1913 - 1931',
    questionZh: '请按创作年代先后排序以下四件颠覆传统艺术媒介定义的达达与超现实主义里程碑作品：',
    questionEn: 'Place the following four groundbreaking Dada and Surrealist objects/readymades in chronological order of their creation:',
    optionsZh: [
      '达利《记忆的永恒》 (1931) -> 杜尚《自行车轮》 (1913) -> 曼·雷《礼物》 (1921) -> 杜尚《泉》 (1917)',
      '杜尚《泉》 (1917) -> 杜尚《自行车轮》 (1913) -> 达利《记忆的永恒》 (1931) -> 曼·雷《礼物》 (1921)',
      '曼·雷《礼物》 (1921) -> 杜尚《自行车轮》 (1913) -> 杜尚《泉》 (1917) -> 达利《记忆的永恒》 (1931)',
      '杜尚《自行车轮》 (1913) -> 杜尚《泉》 (1917) -> 曼·雷《礼物》 (1921) -> 达利《记忆的永恒》 (1931)'
    ],
    optionsEn: [
      'Persistence of Memory (1931) -> Bicycle Wheel (1913) -> The Gift (1921) -> Fountain (1917)',
      'Fountain (1917) -> Bicycle Wheel (1913) -> Persistence of Memory (1931) -> The Gift (1921)',
      'The Gift (1921) -> Bicycle Wheel (1913) -> Fountain (1917) -> Persistence of Memory (1931)',
      'Marcel Duchamp\'s Bicycle Wheel (1913) -> Duchamp\'s Fountain (1917) -> Man Ray\'s The Gift (1921) -> Salvador Dalí\'s The Persistence of Memory (1931)'
    ],
    correctAnswer: 3,
    explanationZh: '先锋现成品与超现实主义时间序列为：马塞尔·杜尚的《自行车轮》（Bicycle Wheel，1913年，将倒置前车轮固定于圆凳上的首个现成品） -> 杜尚署名R. Mutt提交的陶瓷小便斗《泉》（Fountain，1917年） -> 曼·雷在平底铁熨斗底面黏贴一排十四颗铜钉的《礼物》（Le Cadeau / The Gift，1921年） -> 萨尔瓦多·达利的瘫软融化钟表超现实主义名画《记忆的永恒》（The Persistence of Memory，1931年）。',
    explanationEn: 'The sequence of Dada and Surrealist icons is: Duchamp\'s Bicycle Wheel (1913, the first readymade) -> Duchamp\'s Fountain (1917, the porcelain urinal signed R. Mutt) -> Man Ray\'s The Gift (1921, flatiron with brass tacks glued to the sole) -> Dalí\'s The Persistence of Memory (1931, melting soft watches in a Catalonian dreamscape).',
    tags: ['Chronology', 'Dadaism', 'Surrealism', 'Duchamp', 'ManRay', 'Dali'],
    difficulty: 2
  },

  // Slot 31 (Replacement for Ancient Greek/Roman column orders) - Target Ans: 1 (B)
  arched_031: {
    id: 'arched_031',
    domain: 'chronology',
    subCategory: 'Vault & Structural Vaulting Progression',
    era: '11th - 17th Century',
    questionZh: '欧洲建筑史中大跨度拱顶与穹顶营造技术的演变先后顺序是：',
    questionEn: 'What is the correct historical sequence of vaulted roof systems in European architectural development?',
    optionsZh: [
      '哥特式交叉肋拱顶与飞扶壁 -> 罗马式筒形拱与十字拱 -> 布鲁内莱斯基双层八角砖石穹顶 -> 博罗米尼动态椭圆复曲面穹顶',
      '罗马式筒形拱与十字拱 -> 哥特式交叉肋骨拱顶与飞扶壁 -> 布鲁内莱斯基双层八角砖石穹顶 -> 博罗米尼动感椭圆曲面穹顶',
      '布鲁内莱斯基双层八角砖石穹顶 -> 罗马式筒形拱与十字拱 -> 哥特式交叉肋拱顶与飞扶壁 -> 博罗米尼动感椭圆曲面穹顶',
      '博罗米尼动感椭圆曲面穹顶 -> 布鲁内莱斯基双层八角砖石穹顶 -> 哥特式交叉肋拱顶与飞扶壁 -> 罗马式筒形拱与十字拱'
    ],
    optionsEn: [
      'Gothic ribbed vault and flying buttress -> Romanesque barrel vault -> Brunelleschi double-shell dome -> Borromini undulating oval dome',
      'Romanesque barrel vault and groin vault -> Gothic ribbed vault and flying buttress -> Brunelleschi double-shell octagonal masonry dome -> Borromini undulating elliptical compound dome',
      'Brunelleschi double-shell dome -> Romanesque barrel vault -> Gothic ribbed vault -> Borromini undulating dome',
      'Borromini undulating dome -> Brunelleschi double-shell dome -> Gothic ribbed vault -> Romanesque barrel vault'
    ],
    correctAnswer: 1,
    explanationZh: '欧洲大跨度拱顶技术的历史演变历程为：1. 罗马式筒形拱与十字拱（11世纪，以实体承重厚墙与半圆厚拱顶支撑自重）；2. 哥特式交叉肋骨拱顶与外部飞扶壁（12-13世纪，骨架受力、侧推力外传，摆脱重墙限制）；3. 布鲁内莱斯基双层八角形无支架鱼骨砌砖穹顶（1420-1436年，文艺复兴机械与几何力学革命）；4. 博罗米尼四喷泉圣卡罗堂动态椭圆复合几何穹顶（1638-1646年，巴洛克空间变形与光影剧场）。',
    explanationEn: 'The structural evolution of masonry vaulting spans: Romanesque heavy barrel and groin vaults (11th c., thick load-bearing masonry) -> Gothic ribbed vaulting with flying buttresses (12th–13th c., skeletal framework channeling lateral thrusts outward) -> Brunelleschi\'s Florence Cathedral double-shell octagonal dome (1420–1436, herringbone masonry constructed without centering) -> Borromini\'s San Carlo alle Quattro Fontane elliptical dome (1638–1646, undulating Baroque spatial geometry).',
    tags: ['Chronology', 'Vaults', 'Romanesque', 'Gothic', 'Renaissance', 'Baroque'],
    difficulty: 2
  },

  // Slot 32 (Replacement for Caravaggio paintings) - Target Ans: 0 (A)
  arched_032: {
    id: 'arched_032',
    domain: 'chronology',
    subCategory: 'Roman Baroque Architectural Progression',
    era: '1584 - 1667',
    questionZh: '请按工程落成年代的先后顺序排列以下四座确立罗马巴洛克巅峰风貌的建筑与城市杰作：',
    questionEn: 'Place the following four masterworks defining Roman Baroque architecture and urbanism in chronological order of completion:',
    optionsZh: [
      '耶稣堂立面 (1584) -> 圣彼得大教堂青铜华盖 (1633) -> 四喷泉圣卡罗堂 (1646) -> 圣伯多禄大广场列柱廊 (1667)',
      '圣彼得大教堂青铜华盖 (1633) -> 耶稣堂立面 (1584) -> 圣伯多禄大广场列柱廊 (1667) -> 四喷泉圣卡罗堂 (1646)',
      '四喷泉圣卡罗堂 (1646) -> 耶稣堂立面 (1584) -> 圣彼得大教堂青铜华盖 (1633) -> 圣伯多禄大广场列柱廊 (1667)',
      '圣伯多禄大广场列柱廊 (1667) -> 四喷泉圣卡罗堂 (1646) -> 圣彼得大教堂青铜华盖 (1633) -> 耶稣堂立面 (1584)'
    ],
    optionsEn: [
      'Façade of Church of the Gesù (1584) -> St. Peter\'s Baldachin (1633) -> San Carlo alle Quattro Fontane (1646) -> St. Peter\'s Square Colonnade (1667)',
      'St. Peter\'s Baldachin (1633) -> Façade of Church of the Gesù (1584) -> St. Peter\'s Square Colonnade (1667) -> San Carlo alle Quattro Fontane (1646)',
      'San Carlo alle Quattro Fontane (1646) -> Façade of Church of the Gesù (1584) -> St. Peter\'s Baldachin (1633) -> St. Peter\'s Square Colonnade (1667)',
      'St. Peter\'s Square Colonnade (1667) -> San Carlo alle Quattro Fontane (1646) -> St. Peter\'s Baldachin (1633) -> Façade of Church of the Gesù (1584)'
    ],
    correctAnswer: 0,
    explanationZh: '罗马巴洛克发展的时间链条为：德拉·波尔塔设计的罗马耶稣堂立面（1584年，带有侧翼巨大涡卷饰，巴洛克教堂立面原型） -> 贝尔尼尼在圣彼得大教堂建造的青铜华盖（Baldacchino，1624-1633年，29米高扭转所罗门柱） -> 弗朗切斯科·博罗米尼设计的四喷泉圣卡罗教堂（1638-1646年，波浪起伏凹凸曲面立面） -> 贝尔尼尼设计的圣伯多禄大广场四重多立克环形列柱廊（1656-1667年，象征母仪天下教会的张开双臂）。',
    explanationEn: 'The sequence of Roman Baroque masterworks is: Giacomo della Porta\'s facade of the Gesù (1584, inaugurating the Baroque facade archetype with massive lateral volutes) -> Bernini\'s bronze Baldachin in St. Peter\'s (1624–1633, monumental Solomonic columns) -> Borromini\'s San Carlo alle Quattro Fontane (1638–1646, undulating plastic facade) -> Bernini\'s St. Peter\'s Square Colonnade (1656–1667, quadruple Doric colonnade).',
    tags: ['Chronology', 'Baroque', 'Bernini', 'Borromini', 'DellaPorta', 'Rome'],
    difficulty: 2
  },

  // Slot 35 (Replacement for Germano Celant Arte Povera) - Target Ans: 3 (D)
  arched_035: {
    id: 'arched_035',
    domain: 'chronology',
    subCategory: 'Italian Post-War Avant-Garde Arts',
    era: '1946 - 1961',
    questionZh: '请按发生年份的先后顺序排列以下20世纪中叶意大利先锋艺术的关键转折事件：',
    questionEn: 'Place the following pivotal post-war Italian avant-garde milestones in chronological order:',
    optionsZh: [
      '曼佐尼制作《艺术家之粪》 (1961) -> 封塔纳发表《白色的宣言》 (1946) -> 封塔纳创作《空间概念·穿孔》 (1949)',
      '封塔纳创作《空间概念·穿孔》 (1949) -> 曼佐尼制作《艺术家之粪》 (1961) -> 封塔纳发表《白色的宣言》 (1946)',
      '封塔纳创作《空间概念·等待》划痕画 (1958) -> 封塔纳发表《白色的宣言》 (1946) -> 曼佐尼制作《艺术家之粪》 (1961)',
      '封塔纳发表《白色的宣言》 (1946) -> 封塔纳开创打孔画《空间概念》(Buchi) (1949) -> 封塔纳开创割破画《空间概念·等待》(Attese) (1958) -> 曼佐尼制作罐头装置《艺术家之粪》 (1961)'
    ],
    optionsEn: [
      'Manzoni\'s Artist\'s Shit (1961) -> Fontana\'s White Manifesto (1946) -> Fontana\'s Buchi (1949)',
      'Fontana\'s Buchi (1949) -> Manzoni\'s Artist\'s Shit (1961) -> Fontana\'s White Manifesto (1946)',
      'Fontana\'s Attese (1958) -> Fontana\'s White Manifesto (1946) -> Manzoni\'s Artist\'s Shit (1961)',
      'Fontana\'s White Manifesto (1946) -> Fontana\'s perforated Buchi (1949) -> Fontana\'s slashed Attese (1958) -> Manzoni\'s Artist\'s Shit cans (1961)'
    ],
    correctAnswer: 3,
    explanationZh: '意大利战后当代艺术的演变逻辑为：卢齐欧·封塔纳在布宜诺斯艾利斯发表《白色的宣言》（Manifesto Blanco，1946年，创立空间主义理论） -> 封塔纳在米兰开创打孔画布系列《空间概念》（Concetto spaziale, Buchi，1949年） -> 封塔纳以利刃单刀划破单色平整画布开创《等待》系列（Concetto spaziale, Attese，1958年起） -> 皮耶罗·曼佐尼将30克排泄物密封于90只马口铁罐头并按黄金等重定价制作《艺术家之粪》（Merda d\'artista，1961年，激进观念艺术里程碑）。',
    explanationEn: 'The sequence of Italian post-war breakthroughs is: Lucio Fontana\'s White Manifesto in Buenos Aires (1946, founding Spatialism) -> Fontana\'s perforated canvases (Buchi, 1949) -> Fontana\'s iconic slashed canvases (Attese, begun 1958) -> Piero Manzoni\'s conceptual provocation Artist\'s Shit (Merda d\'artista, May 1961, 90 tin cans priced by weight in gold).',
    tags: ['Chronology', 'ContemporaryArt', 'Spatialism', 'Fontana', 'Manzoni'],
    difficulty: 2
  },

  // Slot 37 (Replacement for Giotto/Masaccio paintings) - Target Ans: 1 (B)
  arched_037: {
    id: 'arched_037',
    domain: 'chronology',
    subCategory: 'Early Renaissance Florence Architecture',
    era: '1420 - 1482',
    questionZh: '请按工程开工或设计的年代先后排列以下四座奠定佛罗伦萨早期文艺复兴建筑规范的名作：',
    questionEn: 'Arrange the following four foundational masterpieces of Early Renaissance Florentine architecture in chronological order of inception:',
    optionsZh: [
      '布鲁内莱斯基圣灵大教堂 (1444) -> 佛罗伦萨圣母百花穹顶 (1420) -> 帕齐礼拜堂 (1443) -> 阿尔贝蒂鲁切拉宫 (1450)',
      '佛罗伦萨百花大教堂穹顶 (1420) -> 帕齐礼拜堂 (1443) -> 圣灵大教堂 (1444) -> 阿尔贝蒂鲁切拉宫 (1450)',
      '阿尔贝蒂鲁切拉宫 (1450) -> 佛罗伦萨百花大教堂穹顶 (1420) -> 圣灵大教堂 (1444) -> 帕齐礼拜堂 (1443)',
      '帕齐礼拜堂 (1443) -> 佛罗伦萨百花大教堂穹顶 (1420) -> 阿尔贝蒂鲁切拉宫 (1450) -> 圣灵大教堂 (1444)'
    ],
    optionsEn: [
      'Santo Spirito (1444) -> Florence Cathedral Dome (1420) -> Pazzi Chapel (1443) -> Palazzo Rucellai (1450)',
      'Florence Cathedral Dome (1420) -> Pazzi Chapel (1443) -> Basilica of Santo Spirito (1444) -> Alberti\'s Palazzo Rucellai (1450)',
      'Palazzo Rucellai (1450) -> Florence Cathedral Dome (1420) -> Santo Spirito (1444) -> Pazzi Chapel (1443)',
      'Pazzi Chapel (1443) -> Florence Cathedral Dome (1420) -> Palazzo Rucellai (1450) -> Santo Spirito (1444)'
    ],
    correctAnswer: 1,
    explanationZh: '佛罗伦萨早期文艺复兴代表作先后为：布鲁内莱斯基开始营建圣母百花大教堂八角形穹顶（1420年） -> 布鲁内莱斯基设计圣十字圣殿帕齐礼拜堂（1443年启动，古典纯几何与灰砂岩对比） -> 布鲁内莱斯基设计圣灵大教堂（Santo Spirito，1444年，严格的古典巴西利卡立柱比例模数） -> 莱昂·巴蒂斯塔·阿尔贝蒂设计鲁切拉宫立面（Palazzo Rucellai，1450年前后，首次将古罗马叠落柱式运用于三层民用宫殿外立面）。',
    explanationEn: 'The sequence in Florence is: Brunelleschi begins constructing the Florence Cathedral Dome (1420) -> Brunelleschi designs the Pazzi Chapel (1443) -> Brunelleschi designs Santo Spirito (1444) -> Leon Battista Alberti designs Palazzo Rucellai (c. 1450, introducing superimposed classical pilasters to residential palace facades).',
    tags: ['Chronology', 'Renaissance', 'Florence', 'Brunelleschi', 'Alberti'],
    difficulty: 2
  },

  // Slot 40 (Replacement for I.M. Pei Louvre Pyramid) - Target Ans: 0 (A)
  arched_040: {
    id: 'arched_040',
    domain: 'chronology',
    subCategory: 'World Museum Architecture Evolution',
    era: '1929 - 2009',
    questionZh: '请按落成开馆年份先后排序以下四座代表不同时期建筑哲学转折的世界著名博物馆地标：',
    questionEn: 'Arrange the following four landmark museums in chronological order of their completion, reflecting evolving architectural paradigms:',
    optionsZh: [
      '密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 赖特纽约古根海姆博物馆 (1959) -> 皮亚诺与罗杰斯巴黎蓬皮杜中心 (1977) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009)',
      '赖特纽约古根海姆博物馆 (1959) -> 密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 巴黎蓬皮杜中心 (1977) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009)',
      '巴黎蓬皮杜中心 (1977) -> 密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 赖特纽约古根海姆博物馆 (1959) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009)',
      '密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009) -> 赖特纽约古根海姆博物馆 (1959) -> 巴黎蓬皮杜中心 (1977)'
    ],
    optionsEn: [
      'Mies\'s Barcelona Pavilion (1929) -> Wright\'s Solomon R. Guggenheim Museum (1959) -> Piano & Rogers\' Centre Pompidou (1977) -> Zaha Hadid\'s MAXXI Rome (2009)',
      'Wright\'s Guggenheim (1959) -> Mies\'s Barcelona Pavilion (1929) -> Centre Pompidou (1977) -> MAXXI Rome (2009)',
      'Centre Pompidou (1977) -> Mies\'s Barcelona Pavilion (1929) -> Wright\'s Guggenheim (1959) -> MAXXI Rome (2009)',
      'Mies\'s Barcelona Pavilion (1929) -> MAXXI Rome (2009) -> Wright\'s Guggenheim (1959) -> Centre Pompidou (1977)'
    ],
    correctAnswer: 0,
    explanationZh: '世界经典展览与博物馆地标落成时间线为：密斯·凡·德·罗设计的巴塞罗那世博会德国馆（1929年，十字镀铬钢柱与流动空间展馆典范） -> 弗兰克·劳埃德·赖特设计的纽约所罗门·R·古根海姆博物馆（1959年，由下而上连续盘旋的倒锥形螺旋展廊） -> 伦佐·皮亚诺与理查德·罗杰斯设计的巴黎蓬皮杜艺术中心（1977年，外露管道机电设备的高技派巨作） -> 扎哈·哈迪德设计的罗马国立二十一世纪艺术博物馆MAXXI（2009年，流动混凝土与重叠悬挑的当代建筑典范）。',
    explanationEn: 'The progression of iconic exhibition architecture is: Mies van der Rohe\'s Barcelona Pavilion (1929, flowing open space and cruciform chrome pillars) -> Frank Lloyd Wright\'s Solomon R. Guggenheim Museum, New York (1959, continuous inverted spiral ramp) -> Renzo Piano & Richard Rogers\' Centre Pompidou, Paris (1977, exposed High-Tech structural systems) -> Zaha Hadid\'s MAXXI Rome (2009, fluid overlapping concrete ribbons).',
    tags: ['Chronology', 'Museums', 'Mies', 'Wright', 'HighTech', 'Contemporary'],
    difficulty: 2
  }
};


export const CHRONOLOGY_EXPANSIONS = {
  // arched_211 - Target Ans: 0 (A)
  arched_211: {
    id: 'arched_211',
    domain: 'chronology',
    subCategory: 'Le Corbusier Architectural Evolution',
    era: '1914 - 1955',
    questionZh: '下列哪组序列准确反映了勒·柯布西耶建筑设计理论与实践的发展演进脉络？',
    questionEn: 'Which sequence accurately traces the chronological evolution of Le Corbusier\'s theoretical models and architectural masterworks?',
    optionsZh: [
      '多米诺体系 (1914) -> 新建筑五点 (1926) -> 萨伏伊别墅 (1931) -> 马赛公寓 (1952) -> 朗香教堂 (1955)',
      '萨伏伊别墅 (1931) -> 多米诺体系 (1914) -> 马赛公寓 (1952) -> 新建筑五点 (1926) -> 朗香教堂 (1955)',
      '新建筑五点 (1926) -> 多米诺体系 (1914) -> 朗香教堂 (1955) -> 萨伏伊别墅 (1931) -> 马赛公寓 (1952)',
      '朗香教堂 (1955) -> 马赛公寓 (1952) -> 萨伏伊别墅 (1931) -> 新建筑五点 (1926) -> 多米诺体系 (1914)'
    ],
    optionsEn: [
      'Maison Dom-Ino (1914) -> Five Points of Architecture (1926) -> Villa Savoye (1931) -> Unité d\'Habitation (1952) -> Ronchamp Chapel (1955)',
      'Villa Savoye (1931) -> Maison Dom-Ino (1914) -> Unité d\'Habitation (1952) -> Five Points (1926) -> Ronchamp (1955)',
      'Five Points (1926) -> Maison Dom-Ino (1914) -> Ronchamp (1955) -> Villa Savoye (1931) -> Unité d\'Habitation (1952)',
      'Ronchamp (1955) -> Unité d\'Habitation (1952) -> Villa Savoye (1931) -> Five Points (1926) -> Maison Dom-Ino (1914)'
    ],
    correctAnswer: 0,
    explanationZh: '柯布西耶的发展轨迹为：1914年提出标准化混凝土框架“多米诺体系”（Dom-Ino）；1926年系统发表“新建筑五点”（底层架空柱、屋顶花园、自由平面、横向长窗、自由立面）；1928-1931年建成五点集大成名作萨伏伊别墅；战后1947-1952年以粗野主义混凝土和模度理论建成马赛公寓；1950-1955年以雕塑感自由曲面落成朗香圣母朝圣所。',
    explanationEn: 'Le Corbusier\'s trajectory spans: Maison Dom-Ino skeleton concept (1914) -> The Five Points of a New Architecture (1926) -> Villa Savoye (1928–1931) -> Unité d\'Habitation in Marseille (1947–1952, introducing Béton Brut and the Modulor) -> Notre-Dame du Haut at Ronchamp (1950–1955, organic sculptural expressionism).',
    tags: ['Chronology', 'Modernism', 'LeCorbusier'],
    difficulty: 2
  },

  // arched_212 - Target Ans: 1 (B)
  arched_212: {
    id: 'arched_212',
    domain: 'chronology',
    subCategory: 'Mies van der Rohe Career Milestones',
    era: '1927 - 1958',
    questionZh: '请按落成或就任年份先后排列密斯·凡·德·罗（Ludwig Mies van der Rohe）的标志性建筑成就：',
    questionEn: 'Place the following landmark career achievements of Ludwig Mies van der Rohe in chronological order:',
    optionsZh: [
      '纽约西格拉姆大厦 -> 魏森霍夫住宅展主管 -> 巴塞罗那德国馆 -> 图根哈特别墅',
      '魏森霍夫住宅展主管 (1927) -> 巴塞罗那德国馆 (1929) -> 图根哈特别墅 (1930) -> 纽约西格拉姆大厦 (1958)',
      '巴塞罗那德国馆 (1929) -> 纽约西格拉姆大厦 (1958) -> 魏森霍夫住宅展主管 (1927) -> 图根哈特别墅 (1930)',
      '图根哈特别墅 (1930) -> 巴塞罗那德国馆 (1929) -> 魏森霍夫住宅展主管 (1927) -> 纽约西格拉姆大厦 (1958)'
    ],
    optionsEn: [
      'Seagram Building -> Weissenhof Director -> Barcelona Pavilion -> Villa Tugendhat',
      'Weissenhof Exhibition Director (1927) -> Barcelona Pavilion (1929) -> Villa Tugendhat (1930) -> Seagram Building (1958)',
      'Barcelona Pavilion (1929) -> Seagram Building (1958) -> Weissenhof Director (1927) -> Villa Tugendhat (1930)',
      'Villa Tugendhat (1930) -> Barcelona Pavilion (1929) -> Weissenhof Director (1927) -> Seagram Building (1958)'
    ],
    correctAnswer: 1,
    explanationZh: '密斯的重要成就时间线为：1927年统筹指导斯图加特魏森霍夫现代住宅展并设计其主公寓楼；1929年为巴塞罗那世博会设计德国馆（开创流动空间与十字镀铬柱）；1930年在捷克布尔诺落成图根哈特别墅（全钢结构通透私宅）；流亡美国后于1958年在纽约落成铜色玻璃幕墙摩天大楼西格拉姆大厦。',
    explanationEn: 'The sequence of Mies\'s career achievements is: Artistic Director of Stuttgart\'s Weissenhofsiedlung (1927) -> German Pavilion at Barcelona (1929) -> Villa Tugendhat in Brno (1930) -> Seagram Building in New York (1958, the archetype of the bronze-and-glass corporate high-rise).',
    tags: ['Chronology', 'Modernism', 'Mies'],
    difficulty: 2
  },

  // arched_213 - Target Ans: 2 (C)
  arched_213: {
    id: 'arched_213',
    domain: 'chronology',
    subCategory: 'Frank Lloyd Wright Masterworks Timeline',
    era: '1910 - 1959',
    questionZh: '下列哪组序列正确展现了弗兰克·劳埃德·赖特（Frank Lloyd Wright）三座传世代表作的营建年代顺序？',
    questionEn: 'Which sequence correctly reflects the chronological order of Frank Lloyd Wright\'s three iconic masterpieces?',
    optionsZh: [
      '流水别墅 (1935) -> 罗比住宅 (1910) -> 纽约古根海姆博物馆 (1959)',
      '纽约古根海姆博物馆 (1959) -> 流水别墅 (1935) -> 罗比住宅 (1910)',
      '罗比住宅 (1910) -> 流水别墅 (1935) -> 纽约古根海姆博物馆 (1959)',
      '罗比住宅 (1910) -> 纽约古根海姆博物馆 (1959) -> 流水别墅 (1935)'
    ],
    optionsEn: [
      'Fallingwater (1935) -> Robie House (1910) -> Solomon R. Guggenheim Museum (1959)',
      'Solomon R. Guggenheim Museum (1959) -> Fallingwater (1935) -> Robie House (1910)',
      'Robie House (1910) -> Fallingwater (1935) -> Solomon R. Guggenheim Museum (1959)',
      'Robie House (1910) -> Solomon R. Guggenheim Museum (1959) -> Fallingwater (1935)'
    ],
    correctAnswer: 2,
    explanationZh: '赖特三座名作的时间顺序为：1909-1910年在芝加哥落成草原学派（Prairie School）顶峰罗比住宅（水平挑檐与中央壁炉核心）；1935年在宾夕法尼亚山林落成悬挑混凝土有机建筑流水别墅（Fallingwater）；1959年在纽约曼哈顿落成倒锥形连续螺旋展廊所罗门·R·古根海姆博物馆。',
    explanationEn: 'The sequence of Wright\'s canonical works is: Frederick C. Robie House in Chicago (1910, Prairie School masterpiece) -> Fallingwater in Bear Run (1935, organic cantilevered concrete over a waterfall) -> Solomon R. Guggenheim Museum in New York (opened 1959, continuous upward-spiraling helical ramp).',
    tags: ['Chronology', 'Modernism', 'Wright', 'OrganicArchitecture'],
    difficulty: 1
  },

  // arched_214 - Target Ans: 3 (D)
  arched_214: {
    id: 'arched_214',
    domain: 'chronology',
    subCategory: 'Antoni Gaudi Landmarks Inception',
    era: '1882 - 1906',
    questionZh: '安东尼·高迪（Antoni Gaudí）在巴塞罗那主持营建三处绝世地标的启动或改建先后顺序是：',
    questionEn: 'What is the correct chronological sequence of inception for Antoni Gaudí\'s three legendary Barcelona landmarks?',
    optionsZh: [
      '米拉之家 -> 巴特罗之家 -> 圣家族大教堂',
      '巴特罗之家 -> 圣家族大教堂 -> 米拉之家',
      '圣家族大教堂 -> 米拉之家 -> 巴特罗之家',
      '圣家族大教堂 (接手于1883) -> 巴特罗之家改建 (1904) -> 米拉之家营建 (1906)'
    ],
    optionsEn: [
      'Casa Milà -> Casa Batlló -> Sagrada Família',
      'Casa Batlló -> Sagrada Família -> Casa Milà',
      'Sagrada Família -> Casa Milà -> Casa Batlló',
      'Sagrada Família (assumed 1883) -> Casa Batlló (1904) -> Casa Milà (1906)'
    ],
    correctAnswer: 3,
    explanationZh: '高迪巴塞罗那三大名作的先后顺序为：圣家族大教堂（Sagrada Família，1882年奠基，高迪于1883年正式接管总建筑师并倾注余生）；巴特罗之家（Casa Batlló，1904-1906年对旧建筑进行魔幻龙鳞碎瓷与波浪骨骼立面改建）；米拉之家（Casa Milà / La Pedrera，1906-1912年营建的采石场般全曲面无承重墙公寓）。',
    explanationEn: 'Gaudí\'s major architectural timeline is: Sagrada Família (groundbroken 1882, Gaudí assumed control in 1883) -> Casa Batlló remodel (1904–1906, organic dragon-spine roof and skeletal balconies) -> Casa Milà construction (1906–1912, undulating self-supporting stone facade and sculptural roof terrace).',
    tags: ['Chronology', 'Gaudi', 'CatalanModernisme', 'Barcelona'],
    difficulty: 2
  },

  // arched_215 - Target Ans: 0 (A)
  arched_215: {
    id: 'arched_215',
    domain: 'chronology',
    subCategory: 'Italian Rationalism Architecture Progression',
    era: '1929 - 1958',
    questionZh: '下列哪组序列准确排列了意大利理性主义与战后新现实主义现代建筑经典名作的落成年份？',
    questionEn: 'Which sequence accurately orders the completion dates of Italian Rationalist and post-war modernist architectural masterworks?',
    optionsZh: [
      '科莫诺沃科姆姆公寓 (1929) -> 科莫法西斯大楼 (1936) -> 奥利维蒂伊夫雷亚总部工厂 (1957) -> 米兰维拉斯加塔楼 (1958)',
      '科莫法西斯大楼 (1936) -> 科莫诺沃科姆姆公寓 (1929) -> 米兰维拉斯加塔楼 (1958) -> 奥利维蒂伊夫雷亚总部工厂 (1957)',
      '米兰维拉斯加塔楼 (1958) -> 科莫诺沃科姆姆公寓 (1929) -> 科莫法西斯大楼 (1936) -> 奥利维蒂伊夫雷亚总部工厂 (1957)',
      '科莫诺沃科姆姆公寓 (1929) -> 米兰维拉斯加塔楼 (1958) -> 科莫法西斯大楼 (1936) -> 奥利维蒂伊夫雷亚总部工厂 (1957)'
    ],
    optionsEn: [
      'Novocomum Como (1929) -> Casa del Fascio Como (1936) -> Olivetti Factory Ivrea (1957) -> Torre Velasca Milan (1958)',
      'Casa del Fascio Como (1936) -> Novocomum Como (1929) -> Torre Velasca Milan (1958) -> Olivetti Factory Ivrea (1957)',
      'Torre Velasca Milan (1958) -> Novocomum Como (1929) -> Casa del Fascio Como (1936) -> Olivetti Factory Ivrea (1957)',
      'Novocomum Como (1929) -> Torre Velasca Milan (1958) -> Casa del Fascio Como (1936) -> Olivetti Factory Ivrea (1957)'
    ],
    correctAnswer: 0,
    explanationZh: '意大利现代建筑演变时间线为：泰拉尼在科莫建成的诺沃科姆姆公寓（Novocomum，1927-1929年，理性主义住宅先锋） -> 泰拉尼在科莫设计的法西斯大楼（Casa del Fascio，1932-1936年，大理石正方几何与玻璃通透空间典范） -> 菲吉尼与波利尼主持扩建的奥利维蒂伊夫雷亚工业总部（1934-1957年） -> BBPR事务所在米兰历史中心落成的维拉斯加塔楼（Torre Velasca，1958年，将现代钢筋混凝土悬挑与中世纪伦巴第城堡意象融合）。',
    explanationEn: 'The sequence of Italian Rationalist and post-war milestones is: Giuseppe Terragni\'s Novocomum in Como (1929, rationalist apartment block) -> Terragni\'s Casa del Fascio in Como (1936, crystalline proportional marble cube) -> Figini & Pollini\'s Olivetti complex in Ivrea (completed 1957) -> BBPR\'s Torre Velasca in Milan (1958, contextual brutalist tower evoking medieval Lombard fortresses).',
    tags: ['Chronology', 'Rationalism', 'Terragni', 'BBPR', 'Milan'],
    difficulty: 2
  },

  // arched_216 - Target Ans: 1 (B)
  arched_216: {
    id: 'arched_216',
    domain: 'chronology',
    subCategory: 'De Chirico Metaphysical Paintings',
    era: '1911 - 1917',
    questionZh: '请按创作完成年份的先后顺序排列乔治·德·基里科（Giorgio de Chirico）以下三幅形而上画派经典名作：',
    questionEn: 'Place the following three Metaphysical paintings by Giorgio de Chirico in their correct chronological order of creation:',
    optionsZh: [
      '《不安的缪斯》 (1917) -> 《时间之谜》 (1911) -> 《爱之歌》 (1914)',
      '《时间之谜》 (1911) -> 《爱之歌》 (1914) -> 《不安的缪斯》 (1917)',
      '《爱之歌》 (1914) -> 《时间之谜》 (1911) -> 《不安的缪斯》 (1917)',
      '《时间之谜》 (1911) -> 《不安的缪斯》 (1917) -> 《爱之歌》 (1914)'
    ],
    optionsEn: [
      'The Disquieting Muses (1917) -> The Enigma of the Hour (1911) -> The Song of Love (1914)',
      'The Enigma of the Hour (1911) -> The Song of Love (1914) -> The Disquieting Muses (1917)',
      'The Song of Love (1914) -> The Enigma of the Hour (1911) -> The Disquieting Muses (1917)',
      'The Enigma of the Hour (1911) -> The Disquieting Muses (1917) -> The Song of Love (1914)'
    ],
    correctAnswer: 1,
    explanationZh: '基里科形而上名作的时间顺序为：《时间之谜》（The Enigma of the Hour，1911年，早期描绘空旷意大利拱廊、大钟与凝滞阴影的代表作） -> 《爱之歌》（The Song of Love，1914年，并置阿波罗石雕与红色橡胶手套） -> 《不安的缪斯》（The Disquieting Muses，1917-1918年，费拉拉城堡前的人偶缪斯与测量工具）。',
    explanationEn: 'The sequence of De Chirico\'s Metaphysical works is: The Enigma of the Hour (1911, early painting of arcaded shadow and frozen time) -> The Song of Love (1914, juxtaposition of Apollo bust and surgical rubber glove) -> The Disquieting Muses (1917–1918, mannequins in front of the Castello Estense in Ferrara).',
    tags: ['Chronology', 'Metaphysics', 'DeChirico'],
    difficulty: 2
  },

  // arched_217 - Target Ans: 2 (C)
  arched_217: {
    id: 'arched_217',
    domain: 'chronology',
    subCategory: 'De Stijl Evolution Timeline',
    era: '1917 - 1943',
    questionZh: '下列哪组事件准确排列了荷兰风格派（De Stijl）与新造型主义历史演进的关键时间节点？',
    questionEn: 'Which sequence accurately traces the chronological progression of De Stijl and Neoplasticism from founding to culmination?',
    optionsZh: [
      '蒙德里安《百老汇爵士乐》 -> 杜斯堡引入45度斜线要素主义 -> 莱顿创办《风格派》杂志 -> 蒙德里安发表《新造型主义》',
      '杜斯堡引入45度斜线要素主义 -> 莱顿创办《风格派》杂志 -> 蒙德里安发表《新造型主义》 -> 蒙德里安《百老汇爵士乐》',
      '杜斯堡在莱顿创办《风格派》杂志 (1917) -> 蒙德里安发表《新造型主义》理论 (1920) -> 杜斯堡提出要素主义引发分裂 (1924) -> 蒙德里安完成《百老汇爵士乐》 (1943)',
      '蒙德里安发表《新造型主义》理论 (1920) -> 杜斯堡在莱顿创办《风格派》杂志 (1917) -> 蒙德里安完成《百老汇爵士乐》 (1943) -> 杜斯堡提出要素主义引发分裂 (1924)'
    ],
    optionsEn: [
      'Broadway Boogie Woogie -> Van Doesburg\'s Elementarism -> De Stijl Magazine founded -> Neoplasticism published',
      'Van Doesburg\'s Elementarism -> De Stijl Magazine founded -> Neoplasticism published -> Broadway Boogie Woogie',
      'De Stijl Magazine founded in Leiden (1917) -> Mondrian publishes Le Néo-Plasticisme (1920) -> Van Doesburg introduces Elementarism causing schism (1924) -> Mondrian paints Broadway Boogie Woogie (1943)',
      'Mondrian publishes Le Néo-Plasticisme (1920) -> De Stijl Magazine founded in Leiden (1917) -> Broadway Boogie Woogie (1943) -> Van Doesburg introduces Elementarism (1924)'
    ],
    correctAnswer: 2,
    explanationZh: '风格派历史关键节点为：1917年特奥·范·杜斯堡在莱顿创办《风格派》（De Stijl）杂志；1920年蒙德里安在巴黎由莱昂斯·罗森伯格画廊出版法文小册子《新造型主义》（Le Néo-Plasticisme）；1924年杜斯堡在《反构图》系列中引入45度倾斜斜线开创要素主义（Elementarism），导致蒙德里安退社；1942-1943年蒙德里安流亡纽约完成晚期以跳跃彩色方块取代黑线的绝唱《百老汇爵士乐》（Broadway Boogie Woogie）。',
    explanationEn: 'The sequence of De Stijl milestones is: Theo van Doesburg launches De Stijl magazine in Leiden (1917) -> Piet Mondrian publishes Le Néo-Plasticisme booklet in Paris (1920) -> Van Doesburg introduces 45-degree diagonal Elementarism, triggering Mondrian\'s departure (1924) -> Mondrian paints Broadway Boogie Woogie in New York (1942–1943).',
    tags: ['Chronology', 'DeStijl', 'Mondrian', 'VanDoesburg'],
    difficulty: 2
  },

  // arched_218 - Target Ans: 3 (D)
  arched_218: {
    id: 'arched_218',
    domain: 'chronology',
    subCategory: 'Pop Art Breakthrough Timeline',
    era: '1962 - 1964',
    questionZh: '请按公开展出或创作年份先后排列1962至1964年间爆发的三件美国波普艺术巅峰杰作：',
    questionEn: 'Place the following three American Pop Art triumphs of 1962–1964 in chronological order of their debut:',
    optionsZh: [
      '安迪·沃霍尔《布里洛盒子》 -> 安迪·沃霍尔《金宝汤罐头》 -> 罗伊·利希滕斯坦《呜嗡！》',
      '罗伊·利希滕斯坦《呜嗡！》 -> 安迪·沃霍尔《金宝汤罐头》 -> 安迪·沃霍尔《布里洛盒子》',
      '安迪·沃霍尔《金宝汤罐头》 -> 安迪·沃霍尔《布里洛盒子》 -> 罗伊·利希滕斯坦《呜嗡！》',
      '安迪·沃霍尔《金宝汤罐头》(32幅) (1962年7月) -> 罗伊·利希滕斯坦《呜嗡！》 (1963) -> 安迪·沃霍尔《布里洛盒子》 (1964年4月)'
    ],
    optionsEn: [
      'Brillo Box -> Campbell\'s Soup Cans -> Whaam!',
      'Whaam! -> Campbell\'s Soup Cans -> Brillo Box',
      'Campbell\'s Soup Cans -> Brillo Box -> Whaam!',
      'Warhol\'s Campbell\'s Soup Cans (July 1962) -> Roy Lichtenstein\'s Whaam! (1963) -> Warhol\'s Brillo Box (April 1964)'
    ],
    correctAnswer: 3,
    explanationZh: '波普艺术爆炸阶段的先后顺序为：1962年7月安迪·沃霍尔在洛杉矶费鲁斯画廊展出32幅《金宝汤罐头》（标志其波普首展）；1963年罗伊·利希滕斯坦以漫画本戴网点完成双联空战名作《呜嗡！》（Whaam!）；1964年4月沃霍尔在纽约稳定画廊堆叠展出数百件实木丝网复刻纸箱《布里洛盒子》（Brillo Box）。',
    explanationEn: 'The sequence of early 1960s Pop Art breakthroughs is: Andy Warhol\'s Campbell\'s Soup Cans exhibited at Ferus Gallery (July 1962) -> Roy Lichtenstein\'s comic diptych Whaam! (1963) -> Warhol\'s installation of silkscreened wooden Brillo Box shipping cartons at the Stable Gallery (April 1964).',
    tags: ['Chronology', 'PopArt', 'Warhol', 'Lichtenstein'],
    difficulty: 2
  },

  // arched_219 - Target Ans: 0 (A)
  arched_219: {
    id: 'arched_219',
    domain: 'chronology',
    subCategory: 'High Gothic Cathedrals Timeline',
    era: '1163 - 1386',
    questionZh: '请按工程奠基启动的先后顺序排列以下四座欧洲哥特式大教堂里程碑：',
    questionEn: 'Arrange the following four monumental European Gothic cathedrals in chronological order of their groundbreaking:',
    optionsZh: [
      '巴黎圣母院 (1163) -> 亚眠大教堂 (1220) -> 科隆大教堂 (1248) -> 米兰大教堂 (1386)',
      '亚眠大教堂 (1220) -> 巴黎圣母院 (1163) -> 米兰大教堂 (1386) -> 科隆大教堂 (1248)',
      '科隆大教堂 (1248) -> 巴黎圣母院 (1163) -> 亚眠大教堂 (1220) -> 米兰大教堂 (1386)',
      '米兰大教堂 (1386) -> 科隆大教堂 (1248) -> 亚眠大教堂 (1220) -> 巴黎圣母院 (1163)'
    ],
    optionsEn: [
      'Notre-Dame de Paris (1163) -> Amiens Cathedral (1220) -> Cologne Cathedral (1248) -> Milan Cathedral (1386)',
      'Amiens Cathedral (1220) -> Notre-Dame de Paris (1163) -> Milan Cathedral (1386) -> Cologne Cathedral (1248)',
      'Cologne Cathedral (1248) -> Notre-Dame de Paris (1163) -> Amiens Cathedral (1220) -> Milan Cathedral (1386)',
      'Milan Cathedral (1386) -> Cologne Cathedral (1248) -> Amiens Cathedral (1220) -> Notre-Dame de Paris (1163)'
    ],
    correctAnswer: 0,
    explanationZh: '大教堂动工建造顺序为：巴黎圣母院（1163年由苏利主教奠基启动，早期至盛期哥特式大教堂） -> 亚眠大教堂（1220年动工，法兰西盛期哥特式垂直比例与交叉肋拱顶峰） -> 科隆大教堂（1248年动工，德意志高耸哥特式双尖塔地标） -> 米兰大教堂（1386年由吉安·加莱亚佐·维斯孔蒂公爵启动，意大利最大的火焰与辐射式白色大理石哥特教堂）。',
    explanationEn: 'The sequence of groundbreaking is: Notre-Dame de Paris (begun 1163 under Bishop Maurice de Sully) -> Amiens Cathedral (begun 1220, the canonical masterpiece of French High Gothic) -> Cologne Cathedral (begun 1248, twin-towered German Gothic titan) -> Milan Cathedral (Duomo di Milano, begun 1386, Italy\'s vast white Candoglia marble Gothic marvel).',
    tags: ['Chronology', 'Gothic', 'Cathedrals', 'NotreDame', 'Amiens', 'Milan'],
    difficulty: 2
  },

  // arched_220 - Target Ans: 1 (B)
  arched_220: {
    id: 'arched_220',
    domain: 'chronology',
    subCategory: 'Neoclassical Civic Landmarks Timeline',
    era: '1731 - 1807',
    questionZh: '欧洲与意大利新古典主义建筑在18至19世纪初的发展脉络中，以下地标落成先后顺序是：',
    questionEn: 'In the evolution of Italian and European Neoclassicism from the 18th to early 19th centuries, what is the correct chronological order of completion?',
    optionsZh: [
      '米兰斯卡拉大剧院 -> 都灵苏佩尔加大教堂 -> 卡塞塔王宫 -> 米兰和平门',
      '都灵苏佩尔加大教堂 (1731) -> 卡塞塔王宫 (1752动工) -> 米兰斯卡拉大剧院 (1778) -> 米兰和平门 (1807动工)',
      '卡塞塔王宫 -> 都灵苏佩尔加大教堂 -> 米兰和平门 -> 米兰斯卡拉大剧院',
      '米兰和平门 -> 米兰斯卡拉大剧院 -> 卡塞塔王宫 -> 都灵苏佩尔加大教堂'
    ],
    optionsEn: [
      'Teatro alla Scala -> Basilica of Superga -> Palace of Caserta -> Arco della Pace',
      'Basilica of Superga (1731) -> Royal Palace of Caserta (begun 1752) -> Teatro alla Scala (1778) -> Arco della Pace (begun 1807)',
      'Palace of Caserta -> Basilica of Superga -> Arco della Pace -> Teatro alla Scala',
      'Arco della Pace -> Teatro alla Scala -> Palace of Caserta -> Basilica of Superga'
    ],
    correctAnswer: 1,
    explanationZh: '新古典主义地标建造顺序为：菲利波·尤瓦拉设计的都灵苏佩尔加大教堂（1731年落成，古典柱廊圆厅） -> 路易吉·万维泰利为波旁王朝设计的卡塞塔王宫（1752年动工，欧洲最大矩形古典宫殿） -> 朱塞佩·皮尔马里尼设计的米兰斯卡拉大剧院（1778年落成，严谨新古典立面与马蹄形声学剧场） -> 路易吉·卡尼奥拉为拿破仑胜利设计的米兰和平门（Arco della Pace，1807年动工，新古典三跨凯旋门）。',
    explanationEn: 'The chronological sequence is: Juvarra\'s Basilica of Superga near Turin (completed 1731) -> Luigi Vanvitelli\'s Royal Palace of Caserta (begun 1752, colossal Neoclassical rectangular royal residence) -> Giuseppe Piermarini\'s Teatro alla Scala in Milan (completed 1778) -> Luigi Cagnola\'s Arco della Pace in Milan (begun 1807 under Napoleonic patronage).',
    tags: ['Chronology', 'Neoclassical', 'Juvarra', 'Vanvitelli', 'Piermarini', 'Milan'],
    difficulty: 2
  },

  // arched_221 - Target Ans: 2 (C)
  arched_221: {
    id: 'arched_221',
    domain: 'chronology',
    subCategory: 'Alberto Giacometti Sculptural Progression',
    era: '1932 - 1960',
    questionZh: '下列哪组序列正确反映了阿尔贝托·贾科梅蒂（Alberto Giacometti）从超现实主义装置到战后存在主义青铜雕塑的发展脉络？',
    questionEn: 'Which sequence accurately traces Alberto Giacometti\'s progression from Surrealist constructions to post-war existential bronze sculptures?',
    optionsZh: [
      '《行走的人I》 (1960) -> 《城市广场》 (1948) -> 《凌晨四点的宫殿》 (1932)',
      '《城市广场》 (1948) -> 《凌晨四点的宫殿》 (1932) -> 《行走的人I》 (1960)',
      '《凌晨四点的宫殿》 (1932) -> 《城市广场》 (1948) -> 《行走的人I》 (1960)',
      '《凌晨四点的宫殿》 (1932) -> 《行走的人I》 (1960) -> 《城市广场》 (1948)'
    ],
    optionsEn: [
      'Walking Man I (1960) -> City Square (1948) -> The Palace at 4 a.m. (1932)',
      'City Square (1948) -> The Palace at 4 a.m. (1932) -> Walking Man I (1960)',
      'The Palace at 4 a.m. (1932) -> City Square (La Place) (1948) -> Walking Man I (L\'Homme qui marche I) (1960)',
      'The Palace at 4 a.m. (1932) -> Walking Man I (1960) -> City Square (1948)'
    ],
    correctAnswer: 2,
    explanationZh: '贾科梅蒂创作演变顺序为：1932年创作超现实主义木质框架悬挂装置《凌晨四点的宫殿》（The Palace at 4 a.m.）；二战后1948年创作描绘数名瘦削人像在同一空旷平台各自交错行走的《城市广场》（City Square / La Place）；1960年创作等身大存在主义孤绝丰碑《行走的人I》（Walking Man I）。',
    explanationEn: 'Giacometti\'s artistic progression is: The Palace at 4 a.m. (1932, delicate Surrealist architectural cage) -> City Square (1948, post-war bronze plateau with isolated figures crossing paths without touching) -> Walking Man I (1960, monumental striding existentialist bronze).',
    tags: ['Chronology', 'Surrealism', 'Giacometti', 'Sculpture'],
    difficulty: 2
  },

  // arched_222 - Target Ans: 3 (D)
  arched_222: {
    id: 'arched_222',
    domain: 'chronology',
    subCategory: 'Rene Magritte Semiotic Artworks',
    era: '1929 - 1964',
    questionZh: '请按完成年代的先后顺序排列勒内·马格里特（René Magritte）以下四幅符号哲学名作：',
    questionEn: 'Arrange the following four semiotic surrealist paintings by René Magritte in chronological order of their completion:',
    optionsZh: [
      '《人子》 (1964) -> 《形象的叛逆》 (1929) -> 《错误的镜子》 (1929) -> 《戈尔孔达》 (1953)',
      '《错误的镜子》 (1929) -> 《戈尔孔达》 (1953) -> 《形象的叛逆》 (1929) -> 《人子》 (1964)',
      '《戈尔孔达》 (1953) -> 《人子》 (1964) -> 《错误的镜子》 (1929) -> 《形象的叛逆》 (1929)',
      '《形象的叛逆》(这不是一支烟斗) (1929) -> 《错误的镜子》 (1929) -> 《戈尔孔达》(戴礼帽的雨) (1953) -> 《人子》(青苹果挡脸) (1964)'
    ],
    optionsEn: [
      'The Son of Man (1964) -> The Treachery of Images (1929) -> The False Mirror (1929) -> Golconda (1953)',
      'The False Mirror (1929) -> Golconda (1953) -> The Treachery of Images (1929) -> The Son of Man (1964)',
      'Golconda (1953) -> The Son of Man (1964) -> The False Mirror (1929) -> The Treachery of Images (1929)',
      'The Treachery of Images (1929) -> The False Mirror (1929) -> Golconda (1953) -> The Son of Man (1964)'
    ],
    correctAnswer: 3,
    explanationZh: '马格里特代表作创作时间线为：1929年创作《形象的叛逆》（The Treachery of Images，题写“这不是一支烟斗”，颠覆词语与图像的指涉关系）；1929年创作《错误的镜子》（The False Mirror，巨大眼睛虹膜内反射白云蓝天）；1953年创作《戈尔孔达》（Golconda，无数身穿风衣戴圆顶帽的绅士如雨滴悬浮于红砖楼房之间）；1964年创作自画像寓意名作《人子》（The Son of Man，漂浮的绿色青苹果遮挡硬礼帽绅士的面孔）。',
    explanationEn: 'The sequence of Magritte\'s paintings is: The Treachery of Images (1929, "Ceci n\'est pas une pipe") -> The False Mirror (1929, sky reflected within a human eye) -> Golconda (1953, men in bowler hats suspended like raindrops) -> The Son of Man (1964, a green apple obscuring the bowler-hatted figure\'s face).',
    tags: ['Chronology', 'Surrealism', 'Magritte'],
    difficulty: 2
  },

  // arched_223 - Target Ans: 0 (A)
  arched_223: {
    id: 'arched_223',
    domain: 'chronology',
    subCategory: 'Joan Miro Painting Evolution',
    era: '1922 - 1941',
    questionZh: '请按创作完成年份排列西班牙超现实主义大师胡安·米罗（Joan Miró）以下经典杰作：',
    questionEn: 'Place the following seminal works by Joan Miró in chronological order of their creation:',
    optionsZh: [
      '《农场》 (1922) -> 《加泰罗尼亚景观（猎人）》 (1924) -> 《丑角的狂欢》 (1925) -> 《星宿系列·晨星》 (1941)',
      '《丑角的狂欢》 (1925) -> 《农场》 (1922) -> 《星宿系列·晨星》 (1941) -> 《加泰罗尼亚景观》 (1924)',
      '《星宿系列·晨星》 (1941) -> 《丑角的狂欢》 (1925) -> 《加泰罗尼亚景观》 (1924) -> 《农场》 (1922)',
      '《农场》 (1922) -> 《星宿系列·晨星》 (1941) -> 《加泰罗尼亚景观》 (1924) -> 《丑角的狂欢》 (1925)'
    ],
    optionsEn: [
      'The Farm (1922) -> Catalan Landscape (The Hunter) (1924) -> The Harlequin\'s Carnival (1925) -> Constellation: The Morning Star (1941)',
      'The Harlequin\'s Carnival (1925) -> The Farm (1922) -> The Morning Star (1941) -> Catalan Landscape (1924)',
      'The Morning Star (1941) -> The Harlequin\'s Carnival (1925) -> Catalan Landscape (1924) -> The Farm (1922)',
      'The Farm (1922) -> The Morning Star (1941) -> Catalan Landscape (1924) -> The Harlequin\'s Carnival (1925)'
    ],
    correctAnswer: 0,
    explanationZh: '胡安·米罗绘画风格演变历程为：1921-1922年创作精密写实魔幻风格的《农场》（The Farm，海明威所珍藏）；1923-1924年转向抽象生物符号写意创作《加泰罗尼亚景观（猎人）》（Catalan Landscape）；1924-1925年完成完全由潜意识幻觉驱动的抒情超现实主义代表作《丑角的狂欢》（The Harlequin\'s Carnival）；二战流亡期间于1940-1941年完成充满避难诗意的《星宿系列：晨星》（Constellations: The Morning Star）。',
    explanationEn: 'The sequence of Miró\'s milestones is: The Farm (1921–1922, detailed magical realism) -> Catalan Landscape (The Hunter) (1923–1924, transition to biomorphic ideograms) -> The Harlequin\'s Carnival (1924–1925, full Surrealist hallucination) -> Constellations: The Morning Star (1940–1941, gouache series created in wartime exile).',
    tags: ['Chronology', 'Surrealism', 'Miro'],
    difficulty: 2
  },

  // arched_224 - Target Ans: 1 (B)
  arched_224: {
    id: 'arched_224',
    domain: 'chronology',
    subCategory: 'Michelangelo Architectural Commissions',
    era: '1524 - 1564',
    questionZh: '米开朗基罗·博那罗蒂（Michelangelo Buonarroti）以下四处建筑设计与规划工程的受托启动顺序是：',
    questionEn: 'In what chronological order did Michelangelo undertake the following four architectural and urban commissions?',
    optionsZh: [
      '卡比托利欧广场规划 -> 佛罗伦萨劳伦齐阿纳图书馆 -> 罗马皮亚门 -> 主持圣彼得大教堂穹顶重建',
      '佛罗伦萨劳伦齐阿纳图书馆 (1524) -> 罗马卡比托利欧广场规划 (1536) -> 主持圣彼得大教堂重构与穹顶设计 (1546) -> 罗马皮亚门 (1561)',
      '主持圣彼得大教堂重构与穹顶设计 (1546) -> 佛罗伦萨劳伦齐阿纳图书馆 (1524) -> 罗马皮亚门 (1561) -> 罗马卡比托利欧广场规划 (1536)',
      '佛罗伦萨劳伦齐阿纳图书馆 (1524) -> 罗马皮亚门 (1561) -> 罗马卡比托利欧广场规划 (1536) -> 主持圣彼得大教堂重构与穹顶设计 (1546)'
    ],
    optionsEn: [
      'Piazza del Campidoglio -> Laurentian Library -> Porta Pia -> St. Peter\'s Dome',
      'Laurentian Library, Florence (1524) -> Piazza del Campidoglio, Rome (1536) -> St. Peter\'s Basilica Dome (1546) -> Porta Pia, Rome (1561)',
      'St. Peter\'s Basilica Dome (1546) -> Laurentian Library (1524) -> Porta Pia (1561) -> Piazza del Campidoglio (1536)',
      'Laurentian Library (1524) -> Porta Pia (1561) -> Piazza del Campidoglio (1536) -> St. Peter\'s Basilica Dome (1546)'
    ],
    correctAnswer: 1,
    explanationZh: '米开朗基罗建筑生涯时间线为：1524年受美第奇家族教宗克莱孟七世委托设计佛罗伦萨劳伦齐阿纳图书馆前厅与流体大台阶（手法主义空间典范）；1536年受保禄三世委托规划罗马卡比托利欧广场（梯形平面与十二角星地面）；1546年以71岁高龄接任圣彼得大教堂总建筑师，强化中央希腊十字平面并设计42米跨度双层大穹顶；1561年设计罗马奥勒良城墙上的皮亚门（Porta Pia，晚期手法主义城门突破）。',
    explanationEn: 'The sequence of Michelangelo\'s architectural masterworks is: Laurentian Library in Florence (commissioned 1524, Mannerist flowing staircase) -> Piazza del Campidoglio in Rome (commissioned 1536, trapezoidal civic plaza) -> Chief architect of St. Peter\'s Basilica (appointed 1546, redesigned the central plan and massive hemispherical dome) -> Porta Pia in Rome (1561, late Mannerist city gate).',
    tags: ['Chronology', 'Renaissance', 'Michelangelo', 'Rome', 'Florence'],
    difficulty: 2
  },

  // arched_225 - Target Ans: 2 (C)
  arched_225: {
    id: 'arched_225',
    domain: 'chronology',
    subCategory: 'Andrea Palladio Masterworks Timeline',
    era: '1549 - 1580',
    questionZh: '请按营建年份先后排列安德烈·帕拉第奥（Andrea Palladio）在威尼托地区的传世建筑杰作：',
    questionEn: 'Place the following celebrated architectural achievements by Andrea Palladio in chronological order of their inception:',
    optionsZh: [
      '圆厅别墅 (1567) -> 维琴察帕拉第奥巴西利卡 (1549) -> 威尼斯圣乔治马焦雷教堂 (1565)',
      '威尼斯圣乔治马焦雷教堂 (1565) -> 圆厅别墅 (1567) -> 维琴察帕拉第奥巴西利卡 (1549)',
      '维琴察帕拉第奥巴西利卡双层敞廊 (1549) -> 威尼斯圣乔治马焦雷教堂 (1565) -> 维琴察圆厅别墅(卡普拉别墅) (1567)',
      '维琴察帕拉第奥巴西利卡 (1549) -> 维琴察圆厅别墅 (1567) -> 威尼斯圣乔治马焦雷教堂 (1565)'
    ],
    optionsEn: [
      'Villa La Rotonda (1567) -> Basilica Palladiana (1549) -> San Giorgio Maggiore (1565)',
      'San Giorgio Maggiore (1565) -> Villa La Rotonda (1567) -> Basilica Palladiana (1549)',
      'Basilica Palladiana loggias, Vicenza (1549) -> San Giorgio Maggiore, Venice (1565) -> Villa La Rotonda (Villa Capra) (1567)',
      'Basilica Palladiana (1549) -> Villa La Rotonda (1567) -> San Giorgio Maggiore (1565)'
    ],
    correctAnswer: 2,
    explanationZh: '帕拉第奥代表作启动时间线为：1549年战胜诸多对手中标维琴察市政厅（巴西利卡）立面改造，设计著名的双层塞尔利奥拱大理石敞廊；1565年为威尼斯本笃会修道院设计圣乔治马焦雷教堂（巧妙重叠两座古典神庙山花立面）；1566-1567年受保罗·阿尔梅里科委托在维琴察郊外小丘设计圆厅别墅（Villa La Rotonda，四面对称六柱爱奥尼门廊与中央穹顶）。',
    explanationEn: 'The timeline of Palladio\'s masterpieces is: Basilica Palladiana in Vicenza (1549, wrapping the medieval hall in two-tiered Serliana loggias) -> San Giorgio Maggiore in Venice (1565, superimposed temple-front facade) -> Villa La Rotonda (begun 1566–1567, idealized centralized square villa with four Ionic porticoes).',
    tags: ['Chronology', 'Renaissance', 'Palladio', 'Veneto'],
    difficulty: 2
  },

  // arched_226 - Target Ans: 3 (D)
  arched_226: {
    id: 'arched_226',
    domain: 'chronology',
    subCategory: 'Borromini vs Bernini Baroque Progression',
    era: '1633 - 1670',
    questionZh: '罗马巴洛克盛期博罗米尼与贝尔尼尼交替闪耀，下列作品按照营建完成年份先后排序正确的是：',
    questionEn: 'During the zenith of Roman High Baroque architecture, what is the correct chronological sequence of completion for these works by Borromini and Bernini?',
    optionsZh: [
      '圣伯多禄大广场列柱廊 -> 圣彼得大教堂青铜华盖 -> 奎里纳尔圣安德肋堂 -> 圣依佛堂',
      '圣依佛堂 -> 圣伯多禄大广场列柱廊 -> 圣彼得大教堂青铜华盖 -> 奎里纳尔圣安德肋堂',
      '圣彼得大教堂青铜华盖 -> 奎里纳尔圣安德肋堂 -> 圣依佛堂 -> 圣伯多禄大广场列柱廊',
      '贝尔尼尼《圣彼得青铜华盖》 (1633) -> 博罗米尼《圣依佛堂》 (1660) -> 贝尔尼尼《圣伯多禄大广场列柱》 (1667) -> 贝尔尼尼《奎里纳尔圣安德肋堂》 (1670)'
    ],
    optionsEn: [
      'St. Peter\'s Square -> St. Peter\'s Baldachin -> Sant\'Andrea al Quirinale -> Sant\'Ivo alla Sapienza',
      'Sant\'Ivo alla Sapienza -> St. Peter\'s Square -> St. Peter\'s Baldachin -> Sant\'Andrea al Quirinale',
      'St. Peter\'s Baldachin -> Sant\'Andrea al Quirinale -> Sant\'Ivo alla Sapienza -> St. Peter\'s Square',
      'Bernini\'s St. Peter\'s Baldachin (1633) -> Borromini\'s Sant\'Ivo alla Sapienza (1660) -> Bernini\'s St. Peter\'s Square (1667) -> Bernini\'s Sant\'Andrea al Quirinale (1670)'
    ],
    correctAnswer: 3,
    explanationZh: '罗马巴洛克双雄建筑完成时间线为：1. 贝尔尼尼完成圣彼得大教堂29米高扭转铜柱青铜华盖（1633年）；2. 博罗米尼完成罗马智慧大学圣依佛堂（Sant\'Ivo alla Sapienza，1660年，六角星形与螺旋旋转尖顶）；3. 贝尔尼尼完成梵蒂冈圣伯多禄大广场四排多立克巨柱椭圆柱廊（1667年）；4. 贝尔尼尼完成奎里纳尔圣安德肋堂（Sant\'Andrea al Quirinale，1670年，横向椭圆平面与戏剧性光线）。',
    explanationEn: 'The sequence of High Baroque completions is: Bernini\'s Baldacchino in St. Peter\'s (1633) -> Borromini\'s Sant\'Ivo alla Sapienza (1660, geometric star-hexagon and spiraling lantern) -> Bernini\'s St. Peter\'s Square Colonnade (1667) -> Bernini\'s Sant\'Andrea al Quirinale (completed 1670, transverse oval plan).',
    tags: ['Chronology', 'Baroque', 'Bernini', 'Borromini', 'Rome'],
    difficulty: 2
  },

  // arched_227 - Target Ans: 0 (A)
  arched_227: {
    id: 'arched_227',
    domain: 'chronology',
    subCategory: 'Guarino Guarini Masterworks Timeline',
    era: '1668 - 1680',
    questionZh: '瓜里诺·瓜里尼（Guarino Guarini）在都灵留下的数学几何巴洛克建筑杰作的先后营建顺序是：',
    questionEn: 'What is the chronological sequence of Guarino Guarini\'s geometric Baroque architecture in Turin?',
    optionsZh: [
      '都灵裹尸布礼拜堂穹顶营建 (1668) -> 都灵卡里尼亚诺宫动工 (1679)',
      '都灵卡里尼亚诺宫动工 (1679) -> 都灵裹尸布礼拜堂穹顶营建 (1668)',
      '都灵卡里尼亚诺宫 (1668) -> 都灵裹尸布礼拜堂 (1680)',
      '两座建筑完全在同年同时设计并开工'
    ],
    optionsEn: [
      'Chapel of the Holy Shroud dome (1668) -> Palazzo Carignano (1679)',
      'Palazzo Carignano (1679) -> Chapel of the Holy Shroud dome (1668)',
      'Palazzo Carignano (1668) -> Chapel of the Holy Shroud (1680)',
      'Both buildings were designed and commenced simultaneously in the exact same year'
    ],
    correctAnswer: 0,
    explanationZh: '瓜里诺·瓜里尼（Guarino Guarini）在都灵的创作顺序为：1668年接手都灵大教堂后部的圣裹尸布礼拜堂（Cappella della Sacra Sindone），创造出由连续交错砖砌拱条套叠而成的透光锥形奇幻穹顶；1679年为萨伏伊王室支系卡里尼亚诺亲王设计卡里尼亚诺宫（Palazzo Carignano），开创了全红砖波浪凹凸起伏的民用宫殿立面。',
    explanationEn: 'Guarino Guarini\'s Turin chronology is: He took over the Chapel of the Holy Shroud (Cappella della Sacra Sindone) in 1668, engineering its famous telescopic lattice-rib dome; subsequently in 1679 he designed Palazzo Carignano, renowned for its undulating exposed brick facade.',
    tags: ['Chronology', 'Baroque', 'Guarini', 'Turin'],
    difficulty: 2
  },

  // arched_228 - Target Ans: 1 (B)
  arched_228: {
    id: 'arched_228',
    domain: 'chronology',
    subCategory: '20th Century Engineering & Movements',
    era: '1880s - 1990s',
    questionZh: '下列哪个序列准确排列了现代建筑五大关键流派的兴起时间先后？',
    questionEn: 'Which sequence accurately orders the historical emergence of these five modern architectural movements?',
    optionsZh: [
      '高技派建筑 -> 芝加哥学派 -> 包豪斯现代主义 -> 加泰罗尼亚现代主义 -> 解构主义建筑',
      '芝加哥学派 (1880s) -> 加泰罗尼亚现代主义 (1890s) -> 包豪斯现代主义 (1920s) -> 高技派建筑 (1970s) -> 解构主义建筑 (1988)',
      '包豪斯现代主义 -> 芝加哥学派 -> 高技派建筑 -> 加泰罗尼亚现代主义 -> 解构主义建筑',
      '解构主义建筑 -> 高技派建筑 -> 包豪斯现代主义 -> 加泰罗尼亚现代主义 -> 芝加哥学派'
    ],
    optionsEn: [
      'High-Tech -> Chicago School -> Bauhaus -> Catalan Modernisme -> Deconstructivism',
      'Chicago School (1880s) -> Catalan Modernisme (1890s) -> Bauhaus Modernism (1920s) -> High-Tech (1970s) -> Deconstructivism (1988)',
      'Bauhaus -> Chicago School -> High-Tech -> Catalan Modernisme -> Deconstructivism',
      'Deconstructivism -> High-Tech -> Bauhaus -> Catalan Modernisme -> Chicago School'
    ],
    correctAnswer: 1,
    explanationZh: '现代建筑运动的发展脉络为：1. 芝加哥学派（1880年代，珍妮与沙利文开创铁钢框架高层摩天大楼）；2. 加泰罗尼亚现代主义（1890-1900年代，高迪开创自然仿生与悬链拱）；3. 包豪斯与国际主义现代主义（1920年代，格罗皮乌斯与密斯提倡功能主义与玻璃钢框架）；4. 高技派建筑（1970年代，皮亚诺与罗杰斯暴露工业机械结构）；5. 解构主义建筑（1988年纽约MoMA解构建筑大展确立，盖里、哈迪德打破正交对称）。',
    explanationEn: 'The historical sequence of modern movements is: Chicago School (1880s, structural metal skeleton) -> Catalan Modernisme (1890s–1900s, Gaudí\'s organic catenary vaulting) -> Bauhaus & International Modernism (1920s, functionalist glass and steel) -> High-Tech Architecture (1970s, exposed engineering services) -> Deconstructivism (formalized in 1988 at MoMA).',
    tags: ['Chronology', 'ChicagoSchool', 'Modernism', 'HighTech', 'Deconstructivism'],
    difficulty: 1
  },

  // arched_229 - Target Ans: 2 (C)
  arched_229: {
    id: 'arched_229',
    domain: 'chronology',
    subCategory: 'Italian Civic Palaces Evolution',
    era: '1299 - 1541',
    questionZh: '请按营建启动年份的先后顺序排列以下四座意大利民用宫殿建筑里程碑：',
    questionEn: 'Arrange the following four monumental Italian civil palaces in chronological order of their inception:',
    optionsZh: [
      '美第奇-里卡迪宫 (1444) -> 佛罗伦萨旧宫 (1299) -> 罗马法尔内塞宫 (1517) -> 费拉拉钻石宫 (1493)',
      '罗马法尔内塞宫 (1517) -> 佛罗伦萨旧宫 (1299) -> 美第奇-里卡迪宫 (1444) -> 费拉拉钻石宫 (1493)',
      '佛罗伦萨旧宫(领主宫) (1299) -> 美第奇-里卡迪宫 (1444) -> 费拉拉钻石宫 (1493) -> 罗马法尔内塞宫 (1517)',
      '费拉拉钻石宫 (1493) -> 佛罗伦萨旧宫 (1299) -> 美第奇-里卡迪宫 (1444) -> 罗马法尔内塞宫 (1517)'
    ],
    optionsEn: [
      'Palazzo Medici Riccardi (1444) -> Palazzo Vecchio (1299) -> Palazzo Farnese (1517) -> Palazzo dei Diamanti (1493)',
      'Palazzo Farnese (1517) -> Palazzo Vecchio (1299) -> Palazzo Medici Riccardi (1444) -> Palazzo dei Diamanti (1493)',
      'Palazzo Vecchio (1299) -> Palazzo Medici Riccardi (1444) -> Palazzo dei Diamanti, Ferrara (1493) -> Palazzo Farnese, Rome (1517)',
      'Palazzo dei Diamanti (1493) -> Palazzo Vecchio (1299) -> Palazzo Medici Riccardi (1444) -> Palazzo Farnese (1517)'
    ],
    correctAnswer: 2,
    explanationZh: '意大利民用宫殿发展脉络为：阿诺尔福·迪·坎比奥主持的佛罗伦萨领主宫/旧宫（1299年动工，中世纪坚固粗石堡垒式市政厅） -> 米开罗佐设计的美第奇-里卡迪宫（1444年动工，早期文艺复兴糙石与三段式立面典范） -> 比亚焦·罗塞蒂设计的费拉拉钻石宫（Palazzo dei Diamanti，1493年动工，八千五百块琢形大理石块外墙） -> 小安东尼奥·达·桑加罗与米开朗基罗营建的罗马法尔内塞宫（1517-1541年，盛期文艺复兴宏伟贵族宫邸）。',
    explanationEn: 'The progression of Italian civil palace architecture is: Arnolfo di Cambio\'s Palazzo Vecchio (1299, fortified medieval communal seat) -> Michelozzo\'s Palazzo Medici Riccardi (1444, Early Renaissance tripartite rusticated palace) -> Biagio Rossetti\'s Palazzo dei Diamanti in Ferrara (1493, diamond-pointed ashlar facade) -> Sangallo & Michelangelo\'s Palazzo Farnese in Rome (begun 1517, High Renaissance monumental palace).',
    tags: ['Chronology', 'Palaces', 'Renaissance', 'Florence', 'Rome', 'Ferrara'],
    difficulty: 2
  },

  // arched_230 - Target Ans: 3 (D)
  arched_230: {
    id: 'arched_230',
    domain: 'chronology',
    subCategory: 'Italian Romanesque Landmarks Timeline',
    era: '1063 - 1196',
    questionZh: '请按工程奠基启动的先后顺序排列以下意大利罗马式建筑代表名作：',
    questionEn: 'Arrange the following Italian Romanesque architectural monuments in chronological order of their groundbreaking:',
    optionsZh: [
      '帕尔马洗礼堂 -> 比萨斜塔与奇迹广场 -> 米兰圣安布罗焦圣殿重建',
      '米兰圣安布罗焦圣殿重建 -> 帕尔马洗礼堂 -> 比萨斜塔与奇迹广场',
      '比萨斜塔与奇迹广场 -> 帕尔马洗礼堂 -> 米兰圣安布罗焦圣殿重建',
      '比萨大教堂奇迹广场 (1063) -> 米兰圣安布罗焦圣殿肋拱中殿 (c. 1099) -> 比萨斜塔钟楼 (1173) -> 帕尔马洗礼堂 (1196)'
    ],
    optionsEn: [
      'Parma Baptistery -> Leaning Tower of Pisa -> Sant\'Ambrogio',
      'Sant\'Ambrogio -> Parma Baptistery -> Leaning Tower of Pisa',
      'Leaning Tower of Pisa -> Parma Baptistery -> Sant\'Ambrogio',
      'Piazza dei Miracoli / Pisa Cathedral (1063) -> Basilica of Sant\'Ambrogio nave vaults (c. 1099) -> Leaning Tower of Pisa campanile (1173) -> Baptistery of Parma (1196)'
    ],
    correctAnswer: 3,
    explanationZh: '意大利罗曼式杰作动工顺序为：1. 比萨奇迹广场比萨主教座堂（1063年奠基动工，布斯凯托主持比萨罗曼学派）；2. 米兰圣安布罗焦圣殿肋架拱顶中殿大重建（1099年前后竣工，伦巴第罗曼行会拱顶标杆）；3. 比萨奇迹广场独立钟楼即比萨斜塔（1173年动工，博南诺·皮萨诺设计大理石叠落敞廊）；4. 贝内代托·安泰拉米主持营建的帕尔马独立洗礼堂（1196年动工，八角形粉红大理石罗曼过渡到哥特名作）。',
    explanationEn: 'The sequence of Italian Romanesque construction is: Pisa Cathedral in the Piazza dei Miracoli (begun 1063 by Buscheto) -> Rebuilding of the nave vaults at Basilica di Sant\'Ambrogio in Milan (c. 1099) -> Campanile of Pisa / Leaning Tower (begun 1173) -> Benedetto Antelami\'s octagonal Baptistery of Parma (begun 1196).',
    tags: ['Chronology', 'Romanesque', 'Pisa', 'Milan', 'Parma'],
    difficulty: 2
  },

  // arched_231 - Target Ans: 2 (C)
  arched_231: {
    id: 'arched_231',
    domain: 'chronology',
    subCategory: 'Walter Gropius Modernist Milestones',
    era: '1911 - 1928',
    questionZh: '下列哪组事件正确排列了瓦尔特·格罗皮乌斯（Walter Gropius）在德国开创现代主义的核心历史节点？',
    questionEn: 'Which sequence accurately reflects the chronological progression of Walter Gropius\'s foundational achievements in Germany?',
    optionsZh: [
      '德绍包豪斯校舍落成 -> 魏玛包豪斯学院创办 -> 阿尔费尔德法古斯鞋楦厂营建',
      '魏玛包豪斯学院创办 -> 阿尔费尔德法古斯鞋楦厂营建 -> 德绍包豪斯校舍落成',
      '阿尔费尔德法古斯鞋楦厂 (1911) -> 创立魏玛国立包豪斯学院并发表宣言 (1919) -> 德绍包豪斯校舍落成 (1925-1926)',
      '阿尔费尔德法古斯鞋楦厂 (1911) -> 德绍包豪斯校舍落成 (1925-1926) -> 创立魏玛国立包豪斯学院并发表宣言 (1919)'
    ],
    optionsEn: [
      'Bauhaus Dessau building -> Bauhaus founded in Weimar -> Fagus Factory',
      'Bauhaus founded in Weimar -> Fagus Factory -> Bauhaus Dessau building',
      'Fagus Factory, Alfeld (1911) -> Founding of the Staatliches Bauhaus in Weimar (1919) -> Bauhaus Dessau Campus completed (1925–1926)',
      'Fagus Factory (1911) -> Bauhaus Dessau completed (1925–1926) -> Founding of Bauhaus in Weimar (1919)'
    ],
    correctAnswer: 2,
    explanationZh: '格罗皮乌斯核心历史节点为：1911年与阿道夫·梅耶合作设计阿尔费尔德法古斯鞋楦厂（首创全通透转角玻璃幕墙）；1919年4月整合魏玛工艺美术学校创办“国立包豪斯学院”并撰写著名《包豪斯宣言》；1925-1926年因魏玛政局排挤迁址德绍，亲自设计具有风车形动态功能分区的德绍包豪斯新校舍与工坊楼。',
    explanationEn: 'The sequence of Walter Gropius\'s breakthroughs is: Fagus Factory in Alfeld (1911, revolutionary structural glass corners) -> Founding of the Staatliches Bauhaus in Weimar and issuing the Bauhaus Manifesto (April 1919) -> Designing and completing the Dessau Bauhaus headquarters (1925–1926).',
    tags: ['Chronology', 'Bauhaus', 'Gropius', 'Modernism'],
    difficulty: 1
  },

  // arched_232 - Target Ans: 3 (D)
  arched_232: {
    id: 'arched_232',
    domain: 'chronology',
    subCategory: 'Renzo Piano International Landmarks',
    era: '1977 - 1994',
    questionZh: '请按落成启用年代先后排列意大利高技派大师伦佐·皮亚诺（Renzo Piano）以下国际地标：',
    questionEn: 'Place the following international masterworks by Italian High-Tech architect Renzo Piano in chronological order of completion:',
    optionsZh: [
      '休斯敦梅尼尔收藏馆 -> 巴黎蓬皮杜艺术中心 -> 日本大阪关西国际机场航站楼',
      '日本大阪关西国际机场航站楼 -> 巴黎蓬皮杜艺术中心 -> 休斯敦梅尼尔收藏馆',
      '休斯敦梅尼尔收藏馆 -> 日本大阪关西国际机场航站楼 -> 巴黎蓬皮杜艺术中心',
      '巴黎蓬皮杜艺术中心 (1977) -> 休斯敦梅尼尔收藏馆 (1987) -> 日本大阪关西国际机场航站楼 (1994)'
    ],
    optionsEn: [
      'Menil Collection -> Centre Pompidou -> Kansai International Airport Terminal',
      'Kansai International Airport Terminal -> Centre Pompidou -> Menil Collection',
      'Menil Collection -> Kansai International Airport Terminal -> Centre Pompidou',
      'Centre Pompidou, Paris (1977) -> Menil Collection, Houston (1987) -> Kansai International Airport Terminal, Osaka (1994)'
    ],
    correctAnswer: 3,
    explanationZh: '伦佐·皮亚诺三大里程碑时间线为：1971-1977年与理查德·罗杰斯合作完成巴黎蓬皮杜国家艺术文化中心（高技派外露管线与彩色功能编码丰碑）；1982-1987年在美国得克萨斯完成休斯敦梅尼尔收藏馆（运用精密铸铁遮阳遮叶与静谧自然采光系统）；1991-1994年完成日本大阪人工岛关西国际机场航站楼（长达1.7公里的流线型波浪不锈钢屋面与空气动力学通风大空间）。',
    explanationEn: 'The sequence of Renzo Piano\'s major projects is: Centre Pompidou in Paris (1977, co-designed with Richard Rogers, High-Tech paradigm) -> Menil Collection in Houston (1987, ferro-concrete light louvres) -> Kansai International Airport Terminal in Osaka (1994, 1.7-kilometer aerodynamic airfoil roof on an artificial island).',
    tags: ['Chronology', 'HighTech', 'Piano', 'Contemporary'],
    difficulty: 2
  },

  // arched_233 - Target Ans: 2 (C)
  arched_233: {
    id: 'arched_233',
    domain: 'chronology',
    subCategory: 'Frank Gehry Deconstructivism Timeline',
    era: '1989 - 2003',
    questionZh: '下列哪组序列正确展现了解构主义大师弗兰克·盖里（Frank Gehry）标志性曲面建筑的落成年代顺序？',
    questionEn: 'Which sequence correctly reflects the chronological order of completion for Frank Gehry\'s signature Deconstructivist buildings?',
    optionsZh: [
      '毕尔巴鄂古根海姆博物馆 (1997) -> 德国莱茵河畔魏尔维特拉设计博物馆 (1989) -> 洛杉矶华特·迪士尼音乐厅 (2003)',
      '洛杉矶华特·迪士尼音乐厅 (2003) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 维特拉设计博物馆 (1989)',
      '德国维特拉设计博物馆 (1989) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 洛杉矶华特·迪士尼音乐厅 (2003)',
      '毕尔巴鄂古根海姆博物馆 (1997) -> 洛杉矶华特·迪士尼音乐厅 (2003) -> 维特拉设计博物馆 (1989)'
    ],
    optionsEn: [
      'Guggenheim Bilbao (1997) -> Vitra Design Museum (1989) -> Walt Disney Concert Hall (2003)',
      'Walt Disney Concert Hall (2003) -> Guggenheim Bilbao (1997) -> Vitra Design Museum (1989)',
      'Vitra Design Museum, Weil am Rhein (1989) -> Guggenheim Museum Bilbao (1997) -> Walt Disney Concert Hall, Los Angeles (2003)',
      'Guggenheim Bilbao (1997) -> Walt Disney Concert Hall (2003) -> Vitra Design Museum (1989)'
    ],
    correctAnswer: 2,
    explanationZh: '弗兰克·盖里解构主义演进序列为：1989年在德国莱茵河畔魏尔完成维特拉设计博物馆（白色抹灰与斜交体块拼贴，盖里欧洲首座名作）；1997年在西班牙落成毕尔巴鄂古根海姆博物馆（钛金属鱼鳞曲面与CATIA软件参数化建模巅峰）；2003年在洛杉矶落成不锈钢风帆曲面华特·迪士尼音乐厅（极具雕塑张力的城市音乐殿堂）。',
    explanationEn: 'The sequence of Frank Gehry\'s landmarks is: Vitra Design Museum in Weil am Rhein (1989, colliding geometric volumes in white plaster) -> Guggenheim Museum Bilbao (1997, CATIA-modeled titanium organic petals reviving the Basque post-industrial city) -> Walt Disney Concert Hall in Los Angeles (2003, stainless steel billowing sails).',
    tags: ['Chronology', 'Deconstructivism', 'Gehry'],
    difficulty: 2
  },

  // arched_234 - Target Ans: 3 (D)
  arched_234: {
    id: 'arched_234',
    domain: 'chronology',
    subCategory: 'Contemporary Pritzker Architecture Evolution',
    era: '1997 - 2012',
    questionZh: '请按落成开放年份先后排列以下四座由国际建筑大师设计的跨世纪当代先锋建筑：',
    questionEn: 'Place the following four contemporary architectural masterworks in chronological order of completion:',
    optionsZh: [
      '扎哈·哈迪德罗马MAXXI博物馆 -> 圣地亚哥·卡拉特拉瓦密尔沃基风之翼 -> 盖里毕尔巴鄂古根海姆 -> 伦佐·皮亚诺伦敦碎片大厦',
      '圣地亚哥·卡拉特拉瓦密尔沃基风之翼 -> 盖里毕尔巴鄂古根海姆 -> 伦佐·皮亚诺伦敦碎片大厦 -> 扎哈·哈迪德罗马MAXXI博物馆',
      '盖里毕尔巴鄂古根海姆 -> 扎哈·哈迪德罗马MAXXI博物馆 -> 伦佐·皮亚诺伦敦碎片大厦 -> 圣地亚哥·卡拉特拉瓦密尔沃基风之翼',
      '弗兰克·盖里毕尔巴鄂古根海姆 (1997) -> 圣地亚哥·卡拉特拉瓦密尔沃基艺术博物馆风之翼 (2001) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009) -> 伦佐·皮亚诺伦敦碎片大厦 (2012)'
    ],
    optionsEn: [
      'MAXXI Rome -> Calatrava Milwaukee Pavilion -> Guggenheim Bilbao -> The Shard London',
      'Calatrava Milwaukee Pavilion -> Guggenheim Bilbao -> The Shard London -> MAXXI Rome',
      'Guggenheim Bilbao -> MAXXI Rome -> The Shard London -> Calatrava Milwaukee Pavilion',
      'Frank Gehry\'s Guggenheim Bilbao (1997) -> Santiago Calatrava\'s Milwaukee Art Museum Pavilion (2001) -> Zaha Hadid\'s MAXXI Rome (2009) -> Renzo Piano\'s The Shard London (2012)'
    ],
    correctAnswer: 3,
    explanationZh: '当代大师杰作演变线为：1997年弗兰克·盖里落成毕尔巴鄂古根海姆博物馆（钛合金双曲面解构主义奇迹）；2001年圣地亚哥·卡拉特拉瓦落成密尔沃基艺术博物馆夸德拉奇展馆（活动遮阳翼如白色巨鸟扇动）；2009年扎哈·哈迪德落成罗马国立二十一世纪艺术博物馆MAXXI（流动交织的流体清水混凝土轨道）；2012年伦佐·皮亚诺落成伦敦碎片大厦（泰晤士河畔高耸的晶体金字塔）。',
    explanationEn: 'The chronological sequence of contemporary masterworks is: Frank Gehry\'s Guggenheim Bilbao (1997) -> Santiago Calatrava\'s Milwaukee Art Museum (2001, kinetic Burke Brise Soleil sunscreen) -> Zaha Hadid\'s MAXXI in Rome (2009, overlapping concrete ribbons) -> Renzo Piano\'s The Shard in London (2012, crystalline glass pyramid).',
    tags: ['Chronology', 'Contemporary', 'Hadid', 'Piano', 'Gehry', 'Calatrava'],
    difficulty: 2
  }
};
