/**
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

export const ARCHED_QUESTION_BANK = [
  {
    "id": "arched_001",
    "domain": "chronology",
    "subCategory": "Movement Sequencing",
    "era": "19th_century",
    "questionEn": "Place the following artistic movements in the correct chronological order of emergence:",
    "questionZh": "请将以下艺术运动按照历史出现的先后顺序正确排列：",
    "optionsEn": [
      "Neoclassicism, Impressionism, Expressionism, Pop Art",
      "Impressionism, Pop Art, Expressionism, Neoclassicism",
      "Impressionism, Expressionism, Neoclassicism, Pop Art",
      "Neoclassicism, Expressionism, Pop Art, Impressionism"
    ],
    "optionsZh": [
      "新古典主义、印象派、表现主义、波普艺术",
      "印象派、波普艺术、表现主义、新古典主义",
      "印象派、表现主义、新古典主义、波普艺术",
      "新古典主义、表现主义、波普艺术、印象派"
    ],
    "correctAnswer": 0,
    "explanationEn": "Neoclassicism emerged in the mid-18th century (c. 1760s). French Impressionism formed in the 1870s. Expressionist architecture emerged in the early 20th century with Erich Mendelsohn's Einstein Tower and Bruno Taut's Glass Pavilion. Pop Art originated in the mid-1950s.",
    "explanationZh": "新古典主义兴起于18世纪中叶（约1760年代）；印象派形成于19世纪70年代（1874年首展）；表现主义建筑兴起于20世纪初（埃里希·门德尔松爱因斯坦天文台与布鲁诺·陶特科隆玻璃展馆）；波普艺术兴起于20世纪50年代中叶。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Arc_Triomphe.jpg/800px-Arc_Triomphe.jpg",
    "fallbackImage": "/images/artworks/arc-de-triomphe.jpg",
    "tags": [
      "Chronology",
      "Neoclassicism",
      "Impressionism",
      "Expressionism",
      "Pop Art"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_002",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "medieval",
    "questionEn": "What is the correct historical sequence of Western architectural epochs from Antiquity to Modernity?",
    "questionZh": "西方建筑史从古代至现代发展演变的主要历史分期正确顺序是：",
    "optionsEn": [
      "Romanesque -> Renaissance -> Gothic -> Neoclassical -> Baroque -> Modern",
      "Gothic -> Romanesque -> Baroque -> Renaissance -> Modern -> Neoclassical",
      "Romanesque -> Gothic -> Renaissance -> Baroque -> Neoclassical -> Modern",
      "Renaissance -> Romanesque -> Gothic -> Baroque -> Modern -> Neoclassical"
    ],
    "optionsZh": [
      "罗马风 -> 文艺复兴 -> 哥特式 -> 新古典主义 -> 巴洛克 -> 现代主义",
      "哥特式 -> 罗马风 -> 巴洛克 -> 文艺复兴 -> 现代主义 -> 新古典主义",
      "罗马风 (Romanesque) -> 哥特式 (Gothic) -> 文艺复兴 -> 巴洛克 -> 新古典主义 -> 现代主义",
      "文艺复兴 -> 罗马风 -> 哥特式 -> 巴洛克 -> 现代主义 -> 新古典主义"
    ],
    "correctAnswer": 2,
    "explanationEn": "Romanesque dominated the 10th-12th centuries, Gothic from c. 1140 to the 16th century, Renaissance in the 15th-16th centuries, Baroque in the 17th-early 18th centuries, Neoclassicism in the late 18th-early 19th centuries, followed by Modernism in the 20th century.",
    "explanationZh": "罗马风盛行于10-12世纪，哥特式始于1140年代圣丹尼斯圣殿并延续至16世纪，文艺复兴于15-16世纪兴起，巴洛克风行17世纪，新古典主义主导18世纪晚期至19世纪初，20世纪进入现代主义。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Amiens_cathedral_exterior_facade.jpg/800px-Amiens_cathedral_exterior_facade.jpg",
    "fallbackImage": "/images/artworks/amiens-cathedral.jpg",
    "tags": [
      "Chronology",
      "Architecture",
      "Romanesque",
      "Gothic",
      "Renaissance",
      "Baroque",
      "Neoclassical",
      "Modern"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_003",
    "domain": "chronology",
    "subCategory": "Manifesto Chronology",
    "era": "20th_avant_garde",
    "questionEn": "Identify the correct chronological order of the publication of these pivotal avant-garde manifestos:",
    "questionZh": "请按发表年份的时间先后排列以下20世纪关键前卫艺术运动宣言：",
    "optionsEn": [
      "Bauhaus Manifesto (1919) -> Futurist Manifesto (1909) -> Surrealist Manifesto (1924)",
      "Futurist Manifesto (1909) -> Bauhaus Manifesto (1919) -> Surrealist Manifesto (1924)",
      "Surrealist Manifesto (1924) -> Futurist Manifesto (1909) -> Bauhaus Manifesto (1919)",
      "Futurist Manifesto (1909) -> Surrealist Manifesto (1924) -> Bauhaus Manifesto (1919)"
    ],
    "optionsZh": [
      "包豪斯宣言 (1919) -> 未来主义宣言 (1909) -> 超现实主义第一宣言 (1924)",
      "未来主义宣言 (1909) -> 包豪斯宣言 (1919) -> 超现实主义第一宣言 (1924)",
      "超现实主义第一宣言 (1924) -> 未来主义宣言 (1909) -> 包豪斯宣言 (1919)",
      "未来主义宣言 (1909) -> 超现实主义第一宣言 (1924) -> 包豪斯宣言 (1919)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Marinetti published the Futurist Manifesto in Le Figaro in 1909. Walter Gropius founded the Bauhaus and published its manifesto in Weimar in 1919. André Breton published the Manifeste du surréalisme in Paris in 1924.",
    "explanationZh": "马里内蒂于1909年在《费加罗报》发表《未来主义宣言》；格罗皮乌斯于1919年创立魏玛包豪斯并发表建校宣言；安德烈·布勒东于1924年在巴黎发表《超现实主义第一宣言》。",
    "tags": [
      "Chronology",
      "Manifesto",
      "Futurism",
      "Bauhaus",
      "Surrealism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_004",
    "domain": "chronology",
    "subCategory": "Movement Sequencing",
    "era": "renaissance",
    "questionEn": "Which of the following sequences accurately reflects Italian Renaissance architectural evolution?",
    "questionZh": "下列哪个序列准确反映了意大利文艺复兴建筑大师的代际传承与发展？",
    "optionsEn": [
      "Brunelleschi (Early) -> Bramante (High) -> Giulio Romano (Mannerism) -> Palladio (Late)",
      "Bramante -> Brunelleschi -> Palladio -> Giulio Romano",
      "Giulio Romano -> Brunelleschi -> Bramante -> Palladio",
      "Brunelleschi -> Palladio -> Bramante -> Giulio Romano"
    ],
    "optionsZh": [
      "布鲁内莱斯基 (早期) -> 伯拉孟特 (盛期) -> 朱利奥·罗马诺 (样式主义) -> 帕拉第奥 (晚期)",
      "伯拉孟特 -> 布鲁内莱斯基 -> 帕拉第奥 -> 朱利奥·罗马诺",
      "朱利奥·罗马诺 -> 布鲁内莱斯基 -> 伯拉孟特 -> 帕拉第奥",
      "布鲁内莱斯基 -> 帕拉第奥 -> 伯拉孟特 -> 朱利奥·罗马诺"
    ],
    "correctAnswer": 0,
    "explanationEn": "Filippo Brunelleschi pioneered the Early Renaissance (1420s). Donato Bramante defined the High Renaissance in Rome (c. 1500). Giulio Romano pioneered Mannerism at Palazzo Te in Mantua (1520s-1530s). Andrea Palladio synthesized classical harmony in the late 16th century (1550s-1570s).",
    "explanationZh": "布鲁内莱斯基开创早期文艺复兴（1420年代佛罗伦萨穹顶）；伯拉孟特奠定罗马盛期文艺复兴（约1500年坦比哀多）；朱利奥·罗马诺在曼托瓦苔庄园开创样式主义颠覆（1530年代）；帕拉第奥在16世纪下半叶确立晚期古典规范。",
    "tags": [
      "Chronology",
      "Renaissance",
      "Architecture",
      "Brunelleschi",
      "Bramante",
      "Palladio"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_005",
    "domain": "chronology",
    "subCategory": "Architectural Movement Progression",
    "era": "10th - 20th Century",
    "questionZh": "请按历史演进的先后顺序排列以下西方经典建筑运动与流派：",
    "questionEn": "Place the following Western architectural movements in their correct chronological order of emergence:",
    "optionsZh": [
      "哥特式建筑 -> 文艺复兴建筑 -> 罗马式建筑 -> 新古典主义建筑",
      "罗马式建筑 -> 哥特式建筑 -> 文艺复兴建筑 -> 巴洛克建筑 -> 新古典主义建筑",
      "文艺复兴建筑 -> 罗马式建筑 -> 哥特式建筑 -> 巴洛克建筑 -> 现代主义建筑",
      "新古典主义建筑 -> 巴洛克建筑 -> 文艺复兴建筑 -> 哥特式建筑 -> 罗马式建筑"
    ],
    "optionsEn": [
      "Gothic -> Renaissance -> Romanesque -> Neoclassical",
      "Romanesque -> Gothic -> Renaissance -> Baroque -> Neoclassical",
      "Renaissance -> Romanesque -> Gothic -> Baroque -> Modernist",
      "Neoclassical -> Baroque -> Renaissance -> Gothic -> Romanesque"
    ],
    "correctAnswer": 1,
    "explanationZh": "西方经典建筑史的核心发展主线为：罗马式建筑（盛行于10-12世纪，以厚重墙体与半圆拱为特征） -> 哥特式建筑（12-14世纪，以尖拱与飞扶壁为特征） -> 文艺复兴建筑（15-16世纪，以古典柱式与数学对称复兴为特征） -> 巴洛克建筑（16世纪末-18世纪中叶，以动感椭圆与光影雕塑为特征） -> 新古典主义建筑（18世纪中叶-19世纪中叶，以理性几何与严谨希腊罗马规制为特征）。",
    "explanationEn": "The canonical progression of Western historic architecture is: Romanesque (10th–12th c., massive masonry and semicircular arches) -> Gothic (12th–14th c., pointed arches and flying buttresses) -> Renaissance (15th–16th c., classical orders and mathematical proportion) -> Baroque (late 16th–mid 18th c., undulating plasticity and theatrical chiaroscuro) -> Neoclassical (mid 18th–mid 19th c., Enlightenment rationalism and severe Greco-Roman revival).",
    "tags": [
      "Chronology",
      "Architecture",
      "Romanesque",
      "Gothic",
      "Renaissance",
      "Baroque",
      "Neoclassical"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_006",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "industrial",
    "questionEn": "Trace the chronological lineage of Modernist design reform movements:",
    "questionZh": "请按时代先后追踪现代设计改良运动的历史谱系：",
    "optionsEn": [
      "Bauhaus -> Deutscher Werkbund -> Art Nouveau -> Arts and Crafts",
      "Art Nouveau -> Arts and Crafts -> Bauhaus -> Deutscher Werkbund",
      "Arts and Crafts -> Art Nouveau -> Deutscher Werkbund -> Bauhaus",
      "Arts and Crafts -> Bauhaus -> Art Nouveau -> Deutscher Werkbund"
    ],
    "optionsZh": [
      "包豪斯 -> 德意志制造联盟 -> 新艺术运动 -> 工艺美术运动",
      "新艺术运动 -> 工艺美术运动 -> 包豪斯 -> 德意志制造联盟",
      "工艺美术运动 -> 新艺术运动 -> 德意志制造联盟 -> 包豪斯",
      "工艺美术运动 -> 包豪斯 -> 新艺术运动 -> 德意志制造联盟"
    ],
    "correctAnswer": 2,
    "explanationEn": "William Morris started the Arts and Crafts movement in Britain in the 1880s. Art Nouveau flourished internationally in the 1890s. The Deutscher Werkbund was established in 1907 to integrate crafts with industrial mass production. The Bauhaus was founded in 1919.",
    "explanationZh": "威廉·莫里斯于1880年代在英国领导工艺美术运动；新艺术运动在1890年代风靡欧洲；德意志制造联盟于1907年成立以协调工艺与工业化大生产；包豪斯于1919年继承并升华了这一传统。",
    "tags": [
      "Chronology",
      "Architecture",
      "Design",
      "Arts and Crafts",
      "Bauhaus"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_007",
    "domain": "chronology",
    "subCategory": "Movement Sequencing",
    "era": "20th_avant_garde",
    "questionEn": "Which chronological sequence of 20th-century avant-garde movements is correct?",
    "questionZh": "下列哪组20世纪先锋艺术运动的先后顺序是完全正确的？",
    "optionsEn": [
      "Dada -> Pop Art -> Surrealism -> Abstract Expressionism",
      "Surrealism -> Dada -> Pop Art -> Abstract Expressionism",
      "Dada -> Surrealism -> Abstract Expressionism -> Pop Art",
      "Abstract Expressionism -> Dada -> Surrealism -> Pop Art"
    ],
    "optionsZh": [
      "达达主义 -> 波普艺术 -> 超现实主义 -> 抽象表现主义",
      "超现实主义 -> 达达主义 -> 波普艺术 -> 抽象表现主义",
      "达达主义 -> 超现实主义 -> 抽象表现主义 -> 波普艺术",
      "抽象表现主义 -> 达达主义 -> 超现实主义 -> 波普艺术"
    ],
    "correctAnswer": 2,
    "explanationEn": "Dada was born in Zurich in 1916. Surrealism coalesced in Paris in 1924. Abstract Expressionism flourished in New York during the 1940s-1950s. Pop Art gained prominence from the mid-1950s into the 1960s.",
    "explanationZh": "苏黎世达达主义诞生于1916年；超现实主义于1924年在巴黎建立；抽象表现主义在1940年代战后纽约崛起；波普艺术在1950年代中期起席卷英美。",
    "tags": [
      "Chronology",
      "Dada",
      "Surrealism",
      "Abstract Expressionism",
      "Pop Art"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_008",
    "domain": "chronology",
    "subCategory": "Monumental Landmarks Progression",
    "era": "11th - 20th Century",
    "questionZh": "请按主要营建或落成落成年代的先后顺序排列以下意大利与欧洲历史地标建筑：",
    "questionEn": "Arrange the following monumental European architectural landmarks in chronological order of their inception or completion:",
    "optionsZh": [
      "米兰圣安布罗焦圣殿 (1099) -> 佛罗伦萨百花大教堂穹顶 (1436) -> 罗马圣依佛堂 (1660) -> 巴黎埃菲尔铁塔 (1889)",
      "佛罗伦萨百花大教堂穹顶 (1436) -> 米兰圣安布罗焦圣殿 (1099) -> 巴黎埃菲尔铁塔 (1889) -> 罗马圣依佛堂 (1660)",
      "罗马圣依佛堂 (1660) -> 米兰圣安布罗焦圣殿 (1099) -> 佛罗伦萨百花大教堂穹顶 (1436) -> 巴黎埃菲尔铁塔 (1889)",
      "巴黎埃菲尔铁塔 (1889) -> 罗马圣依佛堂 (1660) -> 佛罗伦萨百花大教堂穹顶 (1436) -> 米兰圣安布罗焦圣殿 (1099)"
    ],
    "optionsEn": [
      "Basilica di Sant'Ambrogio (1099) -> Florence Cathedral Dome (1436) -> Sant'Ivo alla Sapienza (1660) -> Eiffel Tower (1889)",
      "Florence Cathedral Dome (1436) -> Basilica di Sant'Ambrogio (1099) -> Eiffel Tower (1889) -> Sant'Ivo alla Sapienza (1660)",
      "Sant'Ivo alla Sapienza (1660) -> Basilica di Sant'Ambrogio (1099) -> Florence Cathedral Dome (1436) -> Eiffel Tower (1889)",
      "Eiffel Tower (1889) -> Sant'Ivo alla Sapienza (1660) -> Florence Cathedral Dome (1436) -> Basilica di Sant'Ambrogio (1099)"
    ],
    "correctAnswer": 0,
    "explanationZh": "正确建造顺序为：米兰圣安布罗焦圣殿（伦巴第罗曼建筑顶峰，主体中殿与肋拱重建于1099年前后） -> 佛罗伦萨圣母百花大教堂八角形双层穹顶（布鲁内莱斯基于1420-1436年营建） -> 罗马圣依佛堂（博罗米尼巴洛克星形六角平面杰作，落成于1660年） -> 巴黎埃菲尔铁塔（居斯塔夫·埃菲尔为1889年世博会建造的锻铁塔）。",
    "explanationEn": "The chronological sequence is: Basilica di Sant'Ambrogio (Lombard Romanesque nave and ribbed vaults rebuilt c. 1099) -> Florence Cathedral Dome (Brunelleschi's double-shell dome erected 1420–1436) -> Sant'Ivo alla Sapienza (Borromini's Baroque hexagonal star church completed 1660) -> Eiffel Tower (Gustave Eiffel's wrought-iron lattice monument for the 1889 Paris Exposition).",
    "tags": [
      "Chronology",
      "Landmarks",
      "Romanesque",
      "Renaissance",
      "Baroque",
      "Industrial"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_009",
    "domain": "chronology",
    "subCategory": "Historical Transition",
    "era": "baroque",
    "questionEn": "Trace the progression of post-Renaissance European architectural styles from 1600 to 1850:",
    "questionZh": "请按时代顺序排列从1600年至1850年间欧洲主流建筑与艺术风格演进：",
    "optionsEn": [
      "Baroque -> Rococo -> Neoclassicism -> Romanticism",
      "Rococo -> Baroque -> Neoclassicism -> Romanticism",
      "Baroque -> Neoclassicism -> Rococo -> Romanticism",
      "Neoclassicism -> Baroque -> Rococo -> Romanticism"
    ],
    "optionsZh": [
      "巴洛克 -> 洛可可 -> 新古典主义 -> 浪漫主义",
      "洛可可 -> 巴洛克 -> 新古典主义 -> 浪漫主义",
      "巴洛克 -> 新古典主义 -> 洛可可 -> 浪漫主义",
      "新古典主义 -> 巴洛克 -> 洛可可 -> 浪漫主义"
    ],
    "correctAnswer": 0,
    "explanationEn": "Baroque dominated the 17th century (c. 1600-1700). Rococo emerged in France around the 1720s-1730s. Neoclassicism revived Greco-Roman antiquity in the 1760s-1800. Romanticism arose in the early 19th century.",
    "explanationZh": "巴洛克主导17世纪欧洲；洛可可于18世纪前中叶盛行法国与中欧；新古典主义以考古学复兴在1760年代至1800年代成为主流；浪漫主义在19世纪初全面展开。",
    "tags": [
      "Chronology",
      "Baroque",
      "Rococo",
      "Neoclassical",
      "Romanticism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_010",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "industrial",
    "questionEn": "Order these modern architectural milestones chronologically from 19th-century engineering to the International Style:",
    "questionZh": "请将下列从19世纪工业工程到国际主义风格的现代建筑里程碑按建造年代排序：",
    "optionsEn": [
      "Eiffel Tower (1889) -> Crystal Palace (1851) -> Villa Savoye (1929) -> Bauhaus Dessau (1925)",
      "Crystal Palace (1851) -> Eiffel Tower (1889) -> Bauhaus Dessau (1925) -> Villa Savoye (1929)",
      "Crystal Palace (1851) -> Bauhaus Dessau (1925) -> Eiffel Tower (1889) -> Villa Savoye (1929)",
      "Bauhaus Dessau (1925) -> Crystal Palace (1851) -> Eiffel Tower (1889) -> Villa Savoye (1929)"
    ],
    "optionsZh": [
      "巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 萨伏伊别墅 (1929) -> 德绍包豪斯校舍 (1925)",
      "伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 德绍包豪斯校舍 (1925) -> 萨伏伊别墅 (1929)",
      "伦敦水晶宫 (1851) -> 德绍包豪斯校舍 (1925) -> 巴黎埃菲尔铁塔 (1889) -> 萨伏伊别墅 (1929)",
      "德绍包豪斯校舍 (1925) -> 伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 萨伏伊别墅 (1929)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Paxton's Crystal Palace was built for the 1851 Great Exhibition. The Eiffel Tower was completed for the 1889 Paris Exposition. Gropius's Bauhaus in Dessau opened in 1925. Le Corbusier completed Villa Savoye in 1929.",
    "explanationZh": "帕克斯顿的水晶宫建于1851年伦敦万国博览会；埃菲尔铁塔落成于1889年巴黎世博会；格罗皮乌斯设计的德绍包豪斯于1925年落成；柯布西耶的萨伏伊别墅于1929年完工。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bauhaus_Dessau_workshop_wing_2005.jpg/800px-Bauhaus_Dessau_workshop_wing_2005.jpg",
    "fallbackImage": "/images/artworks/bauhaus-dessau.jpg",
    "tags": [
      "Chronology",
      "Architecture",
      "Modern",
      "Crystal Palace",
      "Bauhaus",
      "Le Corbusier"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_011",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "medieval",
    "questionEn": "Trace the structural evolution of Gothic vaulting chronologically:",
    "questionZh": "请按结构技术演进的时间先后排列中世纪至哥特式拱券技术的发展：",
    "optionsEn": [
      "Sexpartite Ribbed Vault -> Romanesque Barrel Vault -> English Fan Vault -> Quadripartite Ribbed Vault",
      "Romanesque Barrel Vault -> Sexpartite Ribbed Vault -> Quadripartite Ribbed Vault -> English Fan Vault",
      "Romanesque Barrel Vault -> English Fan Vault -> Sexpartite Ribbed Vault -> Quadripartite Ribbed Vault",
      "English Fan Vault -> Quadripartite Ribbed Vault -> Sexpartite Ribbed Vault -> Romanesque Barrel Vault"
    ],
    "optionsZh": [
      "早期哥特六分肋骨拱 -> 罗马风连续筒形拱 -> 英国垂直哥特扇形拱 -> 盛期哥特四分肋骨拱",
      "罗马风连续筒形拱 -> 早期哥特六分肋骨拱 -> 盛期哥特四分肋骨拱 -> 英国垂直哥特扇形拱",
      "罗马风连续筒形拱 -> 英国垂直哥特扇形拱 -> 早期哥特六分肋骨拱 -> 盛期哥特四分肋骨拱",
      "英国垂直哥特扇形拱 -> 盛期哥特四分肋骨拱 -> 早期哥特六分肋骨拱 -> 罗马风连续筒形拱"
    ],
    "correctAnswer": 1,
    "explanationEn": "Continuous barrel vaults characterized Romanesque basilicas (11th c.). Six-part rib vaults appeared in Early Gothic (Notre-Dame de Paris, c. 1163). Four-part quadripartite vaults simplified bays in High Gothic (Chartres, c. 1194). Fan vaulting peaked in English Perpendicular Gothic (King's College Chapel, early 16th c.).",
    "explanationZh": "11世纪罗马风多用重厚筒形拱；12世纪中叶早期哥特（如巴黎圣母院）采用六分肋骨拱；12世纪末盛期哥特（如沙特尔大教堂）精简为四分肋骨拱以强化开窗；15-16世纪英国垂直哥特发展出极致装饰的扇形拱。",
    "tags": [
      "Chronology",
      "Architecture",
      "Gothic",
      "Vaulting"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_012",
    "domain": "chronology",
    "subCategory": "Italian Renaissance Architects Succession",
    "era": "15th - 16th Century",
    "questionZh": "下列哪个序列准确反映了意大利文艺复兴五位伟大建筑大师的代际传承与历史先后？",
    "questionEn": "Which sequence accurately traces the chronological progression and generational lineage of Italian Renaissance architectural masters?",
    "optionsZh": [
      "安德烈·帕拉第奥 -> 莱昂·巴蒂斯塔·阿尔贝蒂 -> 菲利波·布鲁内莱斯基 -> 多纳托·伯拉孟特",
      "多纳托·伯拉孟特 -> 菲利波·布鲁内莱斯基 -> 米开朗基罗 -> 安德烈·帕拉第奥",
      "莱昂·巴蒂斯塔·阿尔贝蒂 -> 安德烈·帕拉第奥 -> 菲利波·布鲁内莱斯基 -> 多纳托·伯拉孟特",
      "菲利波·布鲁内莱斯基 -> 莱昂·巴蒂斯塔·阿尔贝蒂 -> 多纳托·伯拉孟特 -> 米开朗基罗 -> 安德烈·帕拉第奥"
    ],
    "optionsEn": [
      "Andrea Palladio -> Leon Battista Alberti -> Filippo Brunelleschi -> Donato Bramante",
      "Donato Bramante -> Filippo Brunelleschi -> Michelangelo -> Andrea Palladio",
      "Leon Battista Alberti -> Andrea Palladio -> Filippo Brunelleschi -> Donato Bramante",
      "Filippo Brunelleschi -> Leon Battista Alberti -> Donato Bramante -> Michelangelo -> Andrea Palladio"
    ],
    "correctAnswer": 3,
    "explanationZh": "意大利文艺复兴建筑大师的谱系为：菲利波·布鲁内莱斯基（1377-1446，早期文艺复兴奠基人，百花大教堂穹顶） -> 莱昂·巴蒂斯塔·阿尔贝蒂（1404-1472，建筑理论奠基人，《论建筑》） -> 多纳托·伯拉孟特（1444-1514，盛期文艺复兴开创者，坦比哀多） -> 米开朗基罗·博那罗蒂（1475-1564，手法主义与圣彼得穹顶重构） -> 安德烈·帕拉第奥（1508-1580，晚期文艺复兴与帕拉第奥主义奠基人）。",
    "explanationEn": "The lineage of Italian Renaissance architects is: Filippo Brunelleschi (1377–1446, Early Renaissance pioneer) -> Leon Battista Alberti (1404–1472, architectural theorist, De re aedificatoria) -> Donato Bramante (1444–1514, High Renaissance master, Tempietto) -> Michelangelo Buonarroti (1475–1564, Mannerism and St. Peter's Basilica) -> Andrea Palladio (1508–1580, Late Renaissance, Villa Rotonda).",
    "tags": [
      "Chronology",
      "Renaissance",
      "Architects",
      "Brunelleschi",
      "Alberti",
      "Bramante",
      "Michelangelo",
      "Palladio"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_013",
    "domain": "chronology",
    "subCategory": "Centralized Dome Evolution",
    "era": "15th - 18th Century",
    "questionZh": "请按营建年份的先后顺序排列以下四座展现集中式穹顶结构演进的意大利经典礼拜堂与教堂：",
    "questionEn": "Arrange the following Italian centralized domed chapels and basilicas in chronological order of their construction:",
    "optionsZh": [
      "帕齐礼拜堂 (1443) -> 坦比哀多礼拜堂 (1502) -> 罗马四喷泉圣卡罗堂 (1638) -> 都灵苏佩尔加大教堂 (1717)",
      "坦比哀多礼拜堂 (1502) -> 帕齐礼拜堂 (1443) -> 都灵苏佩尔加大教堂 (1717) -> 罗马四喷泉圣卡罗堂 (1638)",
      "罗马四喷泉圣卡罗堂 (1638) -> 帕齐礼拜堂 (1443) -> 坦比哀多礼拜堂 (1502) -> 都灵苏佩尔加大教堂 (1717)",
      "都灵苏佩尔加大教堂 (1717) -> 罗马四喷泉圣卡罗堂 (1638) -> 坦比哀多礼拜堂 (1502) -> 帕齐礼拜堂 (1443)"
    ],
    "optionsEn": [
      "Pazzi Chapel (1443) -> Tempietto di San Pietro (1502) -> San Carlo alle Quattro Fontane (1638) -> Basilica of Superga (1717)",
      "Tempietto di San Pietro (1502) -> Pazzi Chapel (1443) -> Basilica of Superga (1717) -> San Carlo alle Quattro Fontane (1638)",
      "San Carlo alle Quattro Fontane (1638) -> Pazzi Chapel (1443) -> Tempietto di San Pietro (1502) -> Basilica of Superga (1717)",
      "Basilica of Superga (1717) -> San Carlo alle Quattro Fontane (1638) -> Tempietto di San Pietro (1502) -> Pazzi Chapel (1443)"
    ],
    "correctAnswer": 0,
    "explanationZh": "集中式穹顶演进脉络为：布鲁内莱斯基设计的佛罗伦萨圣十字圣殿帕齐礼拜堂（1443年启动，早期文艺复兴正方形与伞形穹顶几何基准） -> 伯拉孟特设计的蒙托里奥圣彼得坦比哀多（1502年，盛期文艺复兴多立克柱廊纯圆集中式圣殿） -> 博罗米尼设计的四喷泉圣卡罗堂（1638年动工，巴洛克动态椭圆形复合几何穹顶） -> 菲利波·尤瓦拉设计的新古典/晚期巴洛克都灵苏佩尔加大教堂（1717-1731年，高耸鼓座大穹顶）。",
    "explanationEn": "The progression of centralized Italian dome designs is: Brunelleschi's Pazzi Chapel (begun 1443, Early Renaissance square and umbrella dome) -> Bramante's Tempietto (1502, High Renaissance pure circular Doric tholos) -> Borromini's San Carlo alle Quattro Fontane (begun 1638, Baroque undulating oval dome) -> Juvarra's Basilica of Superga (1717–1731, monumental late Baroque/Neoclassical dome).",
    "tags": [
      "Chronology",
      "Domes",
      "Renaissance",
      "Baroque",
      "Neoclassical"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_014",
    "domain": "chronology",
    "subCategory": "Modern Structural Innovation Progression",
    "era": "1851 - 1925",
    "questionZh": "下列哪组序列正确展现了从19世纪工业金属结构到现代主义建筑成熟的结构演变轨迹？",
    "questionEn": "Which sequence correctly reflects the historical evolution of modern tectonic structures from 19th-century metal engineering to mature Modernism?",
    "optionsZh": [
      "德绍包豪斯校舍 (1925) -> 巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 卡森·皮里·斯科特百货大楼 (1899)",
      "卡森·皮里·斯科特百货大楼 (1899) -> 伦敦水晶宫 (1851) -> 德绍包豪斯校舍 (1925) -> 巴黎埃菲尔铁塔 (1889)",
      "伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 芝加哥卡森·皮里·斯科特百货 (1899) -> 德绍包豪斯校舍 (1925)",
      "巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 德绍包豪斯校舍 (1925) -> 芝加哥卡森·皮里·斯科特百货 (1899)"
    ],
    "optionsEn": [
      "Bauhaus Dessau (1925) -> Eiffel Tower (1889) -> Crystal Palace (1851) -> Carson Pirie Scott (1899)",
      "Carson Pirie Scott (1899) -> Crystal Palace (1851) -> Bauhaus Dessau (1925) -> Eiffel Tower (1889)",
      "The Crystal Palace (1851) -> Eiffel Tower (1889) -> Carson Pirie Scott Building (1899) -> Bauhaus Dessau (1925)",
      "Eiffel Tower (1889) -> Crystal Palace (1851) -> Bauhaus Dessau (1925) -> Carson Pirie Scott (1899)"
    ],
    "correctAnswer": 2,
    "explanationZh": "现代工程与建筑结构的演变关键节点为：约瑟夫·帕克斯顿设计的伦敦水晶宫（1851年，预制装配式铸铁与平板玻璃结构） -> 居斯塔夫·埃菲尔设计的巴黎埃菲尔铁塔（1889年，超高层熟铁桁架结构） -> 路易斯·沙利文设计的芝加哥卡森·皮里·斯科特百货大楼（1899年，标准钢框架结构与大面积芝加哥窗） -> 瓦尔特·格罗皮乌斯设计的德绍包豪斯校舍工坊楼（1925-1926年，钢筋混凝土框架结构与外挂三层全玻璃幕墙）。",
    "explanationEn": "The progression of modern engineering spans: Paxton's Crystal Palace (1851, prefabricated modular cast iron and plate glass) -> Eiffel Tower (1889, soaring wrought-iron lattice engineering) -> Sullivan's Carson Pirie Scott Building (1899, steel frame and broad horizontal Chicago windows) -> Gropius's Bauhaus Dessau (1925–1926, reinforced concrete frame wrapped in a non-structural glazed curtain wall).",
    "tags": [
      "Chronology",
      "Engineering",
      "Industrial",
      "Skyscrapers",
      "Modernism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_015",
    "domain": "chronology",
    "subCategory": "European Avant-Garde Declarations",
    "era": "1909 - 1926",
    "questionZh": "请按宣言或刊物创刊的年份先后排列以下20世纪欧洲前卫艺术与建筑理论里程碑：",
    "questionEn": "Place the following seminal avant-garde theoretical milestones in chronological order of their founding publication:",
    "optionsZh": [
      "意大利理性主义“七人团”宣言 -> 未来主义第一宣言 -> 荷兰风格派创刊 -> 超现实主义第一宣言",
      "马里内蒂《未来主义第一宣言》 (1909) -> 杜斯堡创办《风格派》杂志 (1917) -> 布勒东《超现实主义宣言》 (1924) -> 意大利“七人团”理性主义宣言 (1926)",
      "杜斯堡创办《风格派》杂志 (1917) -> 马里内蒂《未来主义第一宣言》 (1909) -> 意大利“七人团”理性主义宣言 (1926) -> 布勒东《超现实主义宣言》 (1924)",
      "布勒东《超现实主义宣言》 (1924) -> 意大利“七人团”理性主义宣言 (1926) -> 马里内蒂《未来主义第一宣言》 (1909) -> 杜斯堡创办《风格派》杂志 (1917)"
    ],
    "optionsEn": [
      "Gruppo 7 Rationalist Manifesto -> First Futurist Manifesto -> De Stijl Magazine -> First Surrealist Manifesto",
      "Marinetti's First Futurist Manifesto (1909) -> Theo van Doesburg launches De Stijl (1917) -> Breton's Surrealist Manifesto (1924) -> Gruppo 7 Rationalist Manifesto (1926)",
      "De Stijl Magazine (1917) -> First Futurist Manifesto (1909) -> Gruppo 7 Rationalist Manifesto (1926) -> Surrealist Manifesto (1924)",
      "Surrealist Manifesto (1924) -> Gruppo 7 Rationalist Manifesto (1926) -> First Futurist Manifesto (1909) -> De Stijl Magazine (1917)"
    ],
    "correctAnswer": 1,
    "explanationZh": "欧洲前卫思潮宣言的先后顺序为：马里内蒂在巴黎《费加罗报》发表《未来主义第一宣言》（1909年2月） -> 特奥·范·杜斯堡在莱顿创办《风格派》（De Stijl）杂志（1917年） -> 安德烈·布勒东在巴黎发表《超现实主义宣言》（1924年10月） -> 意大利理性主义核心团队“七人团”（Gruppo 7，泰拉尼、菲吉尼、波利尼等）在《意大利评论》发表第一篇理性主义建筑纲领（1926年12月）。",
    "explanationEn": "The sequence of manifestos is: Marinetti's Futurist Manifesto in Le Figaro (Feb 1909) -> Theo van Doesburg's founding of De Stijl journal (1917) -> André Breton's First Manifesto of Surrealism (Oct 1924) -> Gruppo 7's first Rationalist manifesto in Rassegna Italiana (Dec 1926).",
    "tags": [
      "Chronology",
      "Manifestos",
      "Futurism",
      "DeStijl",
      "Surrealism",
      "Rationalism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_016",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "renaissance",
    "questionEn": "Order these monumental Italian church and facade designs chronologically:",
    "questionZh": "请按建造启动年代先后排列以下四座意大利建筑经典名作：",
    "optionsEn": [
      "Sant'Andrea in Mantua -> San Carlo alle Quattro Fontane -> Villa Rotonda -> Superga Basilica",
      "Villa Rotonda -> Sant'Andrea in Mantua -> San Carlo alle Quattro Fontane -> Superga Basilica",
      "Sant'Andrea in Mantua (Alberti 1472) -> Villa Rotonda (Palladio 1566) -> San Carlo alle Quattro Fontane (Borromini 1638) -> Superga Basilica (Juvarra 1717)",
      "Superga Basilica -> Sant'Andrea in Mantua -> Villa Rotonda -> San Carlo alle Quattro Fontane"
    ],
    "optionsZh": [
      "圣安德肋圣殿 -> 四喷泉圣卡罗堂 -> 圆厅别墅 -> 苏佩加圣殿",
      "圆厅别墅 -> 圣安德肋圣殿 -> 四喷泉圣卡罗堂 -> 苏佩加圣殿",
      "曼托瓦圣安德肋圣殿 (阿尔伯蒂 1472) -> 圆厅别墅 (帕拉第奥 1566) -> 四喷泉圣卡罗堂 (博罗米尼 1638) -> 苏佩加圣殿 (尤瓦拉 1717)",
      "苏佩加圣殿 -> 圣安德肋圣殿 -> 圆厅别墅 -> 四喷泉圣卡罗堂"
    ],
    "correctAnswer": 2,
    "explanationEn": "Alberti's Sant'Andrea began in 1472 (Early Renaissance). Palladio's Villa Rotonda was designed in 1566 (High/Late Renaissance). Borromini began San Carlo in 1638 (High Roman Baroque). Juvarra built Superga near Turin in 1717-1731 (Late Baroque).",
    "explanationZh": "阿尔伯蒂设计的曼托瓦圣安德肋教堂建于1472年（早期文艺复兴）；帕拉第奥的圆厅别墅始建于1566年（晚期文艺复兴）；博罗米尼的四喷泉圣卡罗堂建于1638年（罗马巴洛克盛期）；尤瓦拉在都灵近郊设计的苏佩加圣殿始建于1717年（晚期巴洛克）。",
    "tags": [
      "Chronology",
      "Architecture",
      "Alberti",
      "Palladio",
      "Borromini",
      "Baroque"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_017",
    "domain": "chronology",
    "subCategory": "Architectural Treatises Timeline",
    "era": "15th - 16th Century",
    "questionZh": "西方建筑理论在文艺复兴时期由四部划时代典籍系统奠定，其问世年代的先后顺序是：",
    "questionEn": "Western classical architectural theory was codified by pivotal Renaissance treatises; what is their correct chronological sequence?",
    "optionsZh": [
      "阿尔贝蒂《论建筑》 (1452) -> 维尼奥拉《五种柱式规范》 (1562) -> 帕拉第奥《建筑四书》 (1570)",
      "维尼奥拉《五种柱式规范》 (1562) -> 阿尔贝蒂《论建筑》 (1452) -> 帕拉第奥《建筑四书》 (1570)",
      "帕拉第奥《建筑四书》 (1570) -> 维尼奥拉《五种柱式规范》 (1562) -> 阿尔贝蒂《论建筑》 (1452)",
      "阿尔贝蒂《论建筑》 (1452) -> 帕拉第奥《建筑四书》 (1570) -> 维尼奥拉《五种柱式规范》 (1562)"
    ],
    "optionsEn": [
      "Alberti's De re aedificatoria (1452) -> Vignola's Regola delli cinque ordini (1562) -> Palladio's I quattro libri (1570)",
      "Vignola's Regola delli cinque ordini (1562) -> Alberti's De re aedificatoria (1452) -> Palladio's I quattro libri (1570)",
      "Palladio's I quattro libri (1570) -> Vignola's Regola delli cinque ordini (1562) -> Alberti's De re aedificatoria (1452)",
      "Alberti's De re aedificatoria (1452) -> Palladio's I quattro libri (1570) -> Vignola's Regola delli cinque ordini (1562)"
    ],
    "correctAnswer": 0,
    "explanationZh": "文艺复兴三大建筑理论典籍的成书出版顺序为：莱昂·巴蒂斯塔·阿尔贝蒂撰写《论建筑》（De re aedificatoria，1452年完成，文艺复兴首部建筑理论体系） -> 贾科莫·巴罗齐·达·维尼奥拉出版《五种柱式规范》（Regola delli cinque ordini d'architettura，1562年，极度简明实用的五柱式比例图解） -> 安德烈·帕拉第奥出版《建筑四书》（I quattro libri dell'architettura，1570年，总结古典法则、别墅设计与古罗马复原的传世典籍）。",
    "explanationEn": "The sequence of Renaissance treatises is: Leon Battista Alberti's De re aedificatoria (presented 1452, first Renaissance architectural treatise) -> Giacomo Barozzi da Vignola's Regola delli cinque ordini d'architettura (1562, standardizing classical column proportions) -> Andrea Palladio's I quattro libri dell'architettura (1570, illustrated canon of villas, bridges, and antique orders).",
    "tags": [
      "Chronology",
      "Treatises",
      "Renaissance",
      "Alberti",
      "Vignola",
      "Palladio"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_018",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "modern",
    "questionEn": "Arrange these pioneers of modern commercial and industrial architecture chronologically:",
    "questionZh": "请按落成年代先后排列以下现代工业与商业建筑先驱里程碑：",
    "optionsEn": [
      "Wainwright Building -> Fagus Factory -> AEG Turbine Factory -> Barcelona Pavilion",
      "AEG Turbine Factory -> Wainwright Building -> Fagus Factory -> Barcelona Pavilion",
      "Wainwright Building (Sullivan 1891) -> AEG Turbine Factory (Behrens 1909) -> Fagus Factory (Gropius 1911) -> Barcelona Pavilion (Mies 1929)",
      "Fagus Factory -> Wainwright Building -> Barcelona Pavilion -> AEG Turbine Factory"
    ],
    "optionsZh": [
      "温赖特大厦 -> 法古斯工厂 -> AEG透平机车间 -> 巴塞罗那德国馆",
      "AEG透平机车间 -> 温赖特大厦 -> 法古斯工厂 -> 巴塞罗那德国馆",
      "温赖特大厦 (沙利文 1891) -> AEG透平机车间 (贝伦斯 1909) -> 法古斯工厂 (格罗皮乌斯 1911) -> 巴塞罗那德国馆 (密斯 1929)",
      "法古斯工厂 -> 温赖特大厦 -> 巴塞罗那德国馆 -> AEG透平机车间"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sullivan completed the steel-framed Wainwright Building in St. Louis in 1891. Peter Behrens designed the AEG Turbine Factory in Berlin in 1909. Gropius designed the glass curtain-walled Fagus Factory in 1911. Mies created the Barcelona Pavilion in 1929.",
    "explanationZh": "沙利文于1891年建成圣路易斯钢框架温赖特大厦；贝伦斯于1909年建成柏林AEG透平机车间；格罗皮乌斯于1911年建成无转角立柱玻璃幕墙的法古斯工厂；密斯于1929年落成巴塞罗那德国馆。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barcelona_Pavilion%2C_2010.jpg/800px-Barcelona_Pavilion%2C_2010.jpg",
    "fallbackImage": "/images/artworks/barcelona-pavilion.jpg",
    "tags": [
      "Chronology",
      "Architecture",
      "Modern",
      "Sullivan",
      "Gropius",
      "Mies"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_019",
    "domain": "chronology",
    "subCategory": "Italian & European Avant-Garde Arts",
    "era": "1909 - 1958",
    "questionZh": "下列哪组序列正确展现了从未来主义到战后空间主义先锋艺术运动的发展脉络？",
    "questionEn": "Which sequence accurately traces the chronological progression of Italian and European avant-garde art movements from Futurism to Spatialism?",
    "optionsZh": [
      "超现实主义 -> 空间主义 -> 未来主义 -> 形而上画派",
      "空间主义 -> 未来主义 -> 形而上画派 -> 超现实主义",
      "形而上画派 -> 空间主义 -> 超现实主义 -> 未来主义",
      "未来主义 (1909) -> 形而上画派 (1917) -> 超现实主义 (1924) -> 空间主义 (1946)"
    ],
    "optionsEn": [
      "Surrealism -> Spatialism -> Futurism -> Metaphysical Art",
      "Spatialism -> Futurism -> Metaphysical Art -> Surrealism",
      "Metaphysical Art -> Spatialism -> Surrealism -> Futurism",
      "Futurism (1909) -> Metaphysical Art (1917) -> Surrealism (1924) -> Spatialism (1946)"
    ],
    "correctAnswer": 3,
    "explanationZh": "意大利与欧洲先锋运动演变逻辑为：未来主义（1909年由马里内蒂、薄邱尼创立，崇尚机器、速度与动能） -> 形而上画派（1917年前后由基里科、卡拉在费拉拉创立，探索静止、空旷与哲学神秘） -> 超现实主义（1924年布勒东在巴黎发表宣言，探索潜意识梦境） -> 空间主义（1946年封塔纳发表《白色的宣言》，以划破画布探索四维时空统一）。",
    "explanationEn": "The historical sequence of avant-garde movements is: Futurism (founded 1909 by Marinetti and Boccioni, dynamic speed and technology) -> Metaphysical Art (crystallized c. 1917 in Ferrara by De Chirico and Carrà, timeless philosophical silence) -> Surrealism (codified 1924 by Breton, dream subconsciousness) -> Spatialism (inaugurated 1946 by Fontana's White Manifesto, puncturing canvases to unite light and space).",
    "tags": [
      "Chronology",
      "AvantGarde",
      "Futurism",
      "Metaphysics",
      "Surrealism",
      "Spatialism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_020",
    "domain": "chronology",
    "subCategory": "Modern Architecture Milestones",
    "era": "1911 - 1935",
    "questionZh": "请按落成年代的先后顺序排列以下四座20世纪国际现代主义先驱建筑杰作：",
    "questionEn": "Arrange the following four foundational Modernist architectural landmarks in chronological order of their completion:",
    "optionsZh": [
      "流水别墅 (1935) -> 法古斯鞋楦厂 (1911) -> 德绍包豪斯校舍 (1925) -> 萨伏伊别墅 (1931)",
      "德绍包豪斯校舍 (1925) -> 法古斯鞋楦厂 (1911) -> 萨伏伊别墅 (1931) -> 流水别墅 (1935)",
      "萨伏伊别墅 (1931) -> 德绍包豪斯校舍 (1925) -> 法古斯鞋楦厂 (1911) -> 流水别墅 (1935)",
      "法古斯鞋楦厂 (1911) -> 德绍包豪斯校舍 (1925) -> 萨伏伊别墅 (1931) -> 流水别墅 (1935)"
    ],
    "optionsEn": [
      "Fallingwater (1935) -> Fagus Factory (1911) -> Bauhaus Dessau (1925) -> Villa Savoye (1931)",
      "Bauhaus Dessau (1925) -> Fagus Factory (1911) -> Villa Savoye (1931) -> Fallingwater (1935)",
      "Villa Savoye (1931) -> Bauhaus Dessau (1925) -> Fagus Factory (1911) -> Fallingwater (1935)",
      "Fagus Factory (1911) -> Bauhaus Dessau (1925) -> Villa Savoye (1931) -> Fallingwater (1935)"
    ],
    "correctAnswer": 3,
    "explanationZh": "现代主义建筑里程碑落成顺序为：格罗皮乌斯设计的阿尔费尔德法古斯鞋楦厂（1911年，现代建筑史上首次实现无立柱转角玻璃幕墙） -> 格罗皮乌斯设计的德绍包豪斯校舍（1925-1926年，现代设计教育总根据地与玻璃工坊楼） -> 勒·柯布西耶设计的普瓦西萨伏伊别墅（1928-1931年，“新建筑五点”集大成者） -> 弗兰克·劳埃德·赖特设计的流水别墅（1935年，有机建筑悬挑混凝土阳台巅峰）。",
    "explanationEn": "The chronological sequence is: Walter Gropius's Fagus Factory (1911, pioneering column-free glazed corner curtain walls) -> Bauhaus Dessau Building (1925–1926, Pinwheel functionalist campus) -> Le Corbusier's Villa Savoye (1928–1931, apotheosis of the Five Points of Architecture) -> Frank Lloyd Wright's Fallingwater (1935, organic cantilevered concrete terraces).",
    "tags": [
      "Chronology",
      "Modernism",
      "Gropius",
      "LeCorbusier",
      "Wright"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_021",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "medieval",
    "questionEn": "Trace the chronological evolution of architectural arch and pediment typologies:",
    "questionZh": "请按历史先后排列欧洲建筑中拱券与山花形态的典型演变顺序：",
    "optionsEn": [
      "Baroque broken pediment -> Gothic pointed arch -> Romanesque round arch -> Renaissance classical arch",
      "Gothic pointed arch -> Romanesque round arch -> Baroque broken pediment -> Renaissance classical arch",
      "Romanesque round arch -> Baroque broken pediment -> Gothic pointed arch -> Renaissance classical arch",
      "Romanesque round arch -> Gothic pointed arch -> Renaissance semicircular classical arch -> Baroque broken pediment"
    ],
    "optionsZh": [
      "巴洛克断山花 -> 哥特式尖券 -> 罗马风半圆拱 -> 文艺复兴半圆拱",
      "哥特式尖券 -> 罗马风半圆拱 -> 巴洛克断山花 -> 文艺复兴半圆拱",
      "罗马风半圆拱 -> 巴洛克断山花 -> 哥特式尖券 -> 文艺复兴半圆拱",
      "罗马风半圆拱 -> 哥特式尖券 -> 文艺复兴半圆复古拱 -> 巴洛克断山花 (Broken Pediment)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Semicircular heavy arches characterized the Romanesque (11th century). Pointed arches defined Gothic lightness (12th-13th centuries). Renaissance restored Greco-Roman semicircular symmetry (15th century). Broken and undulating pediments became a hallmark of the Baroque (17th century).",
    "explanationZh": "罗马风在11世纪盛行纯半圆拱；哥特式在12-13世纪以尖券突破跨度与开窗限制；文艺复兴在15世纪回归古罗马半圆拱券比例；17世纪巴洛克大师打破传统几何山花创造断山花与波浪曲线。",
    "tags": [
      "Chronology",
      "Architecture",
      "Romanesque",
      "Gothic",
      "Renaissance",
      "Baroque"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_022",
    "domain": "chronology",
    "subCategory": "Historical Transition",
    "era": "renaissance",
    "questionEn": "Order the publication of these foundational Italian Renaissance architectural treatises chronologically:",
    "questionZh": "请按出版年代先后排列以下四部奠定西方建筑学典范的意大利文艺复兴理论著作：",
    "optionsEn": [
      "Vignola (1562) -> Alberti (1452) -> Serlio (1537) -> Palladio (1570)",
      "Palladio (1570) -> Vignola (1562) -> Serlio (1537) -> Alberti (1452)",
      "Alberti (1452) -> Palladio (1570) -> Vignola (1562) -> Serlio (1537)",
      "Alberti (De re aedificatoria, 1452) -> Serlio (Tutte l'opere d'architettura, 1537) -> Vignola (Regola delli cinque ordini, 1562) -> Palladio (I quattro libri, 1570)"
    ],
    "optionsZh": [
      "维尼奥拉《五种柱式规范》(1562) -> 阿尔伯蒂《论建筑》(1452) -> 塞尔利奥《建筑通论》(1537) -> 帕拉第奥《建筑四书》(1570)",
      "帕拉第奥《建筑四书》(1570) -> 维尼奥拉《五种柱式规范》(1562) -> 塞尔利奥《建筑通论》(1537) -> 阿尔伯蒂《论建筑》(1452)",
      "阿尔伯蒂《论建筑》(1452) -> 帕拉第奥《建筑四书》(1570) -> 维尼奥拉《五种柱式规范》(1562) -> 塞尔利奥《建筑通论》(1537)",
      "阿尔伯蒂《论建筑》(1452) -> 塞尔利奥《建筑通论》(1537) -> 维尼奥拉《五种柱式规范》(1562) -> 帕拉第奥《建筑四书》(1570)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Leon Battista Alberti completed De re aedificatoria in 1452 (printed 1485). Sebastiano Serlio published Book IV in 1537. Giacomo Barozzi da Vignola published his Canon of the Five Orders in 1562. Andrea Palladio published I quattro libri dell'architettura in Venice in 1570.",
    "explanationZh": "阿尔伯蒂于1452年撰写《论建筑》（1485年印行）；塞尔利奥于1537年出版图文柱式专著；维尼奥拉于1562年出版《五种柱式规范》系统化柱式模数；帕拉第奥于1570年在威尼斯出版《建筑四书》。",
    "tags": [
      "Chronology",
      "Architecture",
      "Treatise",
      "Renaissance",
      "Alberti",
      "Palladio"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_023",
    "domain": "chronology",
    "subCategory": "Boccioni Futurist Works Timeline",
    "era": "1910 - 1913",
    "questionZh": "请按创作完成年份的先后顺序排列翁贝托·薄邱尼（Umberto Boccioni）以下三件未来主义巅峰杰作：",
    "questionEn": "Place the following three Futurist masterpieces by Umberto Boccioni in their correct chronological order of creation:",
    "optionsZh": [
      "《空间中连续性的唯一形体》 (1913) -> 《街道进入房屋》 (1911) -> 《崛起中的城市》 (1910)",
      "《崛起中的城市》 (1910) -> 《街道进入房屋》 (1911) -> 《空间中连续性的唯一形体》 (1913)",
      "《街道进入房屋》 (1911) -> 《崛起中的城市》 (1910) -> 《空间中连续性的唯一形体》 (1913)",
      "《崛起中的城市》 (1910) -> 《空间中连续性的唯一形体》 (1913) -> 《街道进入房屋》 (1911)"
    ],
    "optionsEn": [
      "Unique Forms of Continuity in Space (1913) -> The Street Enters the House (1911) -> The City Rises (1910)",
      "The City Rises (1910) -> The Street Enters the House (1911) -> Unique Forms of Continuity in Space (1913)",
      "The Street Enters the House (1911) -> The City Rises (1910) -> Unique Forms of Continuity in Space (1913)",
      "The City Rises (1910) -> Unique Forms of Continuity in Space (1913) -> The Street Enters the House (1911)"
    ],
    "correctAnswer": 1,
    "explanationZh": "薄邱尼三部名作的创作时间顺序为：《崛起中的城市》（La città che sale，1910年，展现米兰现代电站与工地狂暴劳动力的未来派第一幅油画巨制） -> 《街道进入房屋》（La strada entra nella casa，1911年，阳台母亲视点与室外市声街景同时渗透的共时性油画） -> 《空间中连续性的唯一形体》（Forme uniche della continuità nello spazio，1913年，将空气阻力与气流塑性固化的青铜迈步雕塑）。",
    "explanationEn": "The sequence of Boccioni's masterworks is: The City Rises (1910, explosive canvas celebrating Milan's industrial expansion) -> The Street Enters the House (1911, simultaneous penetration of sound and city traffic into a domestic balcony) -> Unique Forms of Continuity in Space (1913, aerodynamic striding bronze sculpture).",
    "tags": [
      "Chronology",
      "Futurism",
      "Boccioni",
      "Painting",
      "Sculpture"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_024",
    "domain": "chronology",
    "subCategory": "Movement Sequencing",
    "era": "postwar_contemporary",
    "questionEn": "Arrange these pivotal American and international postwar artistic movements in chronological order:",
    "questionZh": "请按兴起时间先后排列以下战后国际现代主义与当代艺术运动：",
    "optionsEn": [
      "Minimal Art -> Abstract Expressionism -> Conceptual Art -> Pop Art",
      "Pop Art -> Abstract Expressionism -> Minimal Art -> Conceptual Art",
      "Abstract Expressionism -> Minimal Art -> Pop Art -> Conceptual Art",
      "Abstract Expressionism (c. 1947) -> Pop Art (mid-1950s) -> Minimal Art (mid-1960s) -> Conceptual Art (late 1960s)"
    ],
    "optionsZh": [
      "极简主义 -> 抽象表现主义 -> 概念艺术 -> 波普艺术",
      "波普艺术 -> 抽象表现主义 -> 极简主义 -> 概念艺术",
      "抽象表现主义 -> 极简主义 -> 波普艺术 -> 概念艺术",
      "抽象表现主义 (约1947) -> 波普艺术 (1950年代中) -> 极简主义 (1960年代中) -> 概念艺术 (1960年代末)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Abstract Expressionism (Action Painting/Color Field) flourished from 1947. Pop Art emerged in Britain and the US in 1955-1960. Minimal Art consolidated around 1965 with primary industrial geometric structures. Conceptual Art asserted intellectual ideas over physical form from 1967.",
    "explanationZh": "抽象表现主义在1947-1950年成熟；波普艺术在1955-1960年崛起；极简主义在1965年前后确立工业特定物体美学；概念艺术于1967年以观念超越物态形式占据主导。",
    "tags": [
      "Chronology",
      "Abstract Expressionism",
      "Pop Art",
      "Minimalism",
      "Conceptual Art"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_025",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "renaissance",
    "questionEn": "What is the correct chronological sequence of the master architects who directed the rebuilding of New Saint Peter's Basilica in Rome?",
    "questionZh": "罗马新圣彼得大教堂长达一个半世纪的重建历程中，主持主建筑师的更迭顺序是：",
    "optionsEn": [
      "Bramante (1506) -> Michelangelo (1546) -> Maderno (1607) -> Bernini (1656)",
      "Michelangelo -> Bramante -> Bernini -> Maderno",
      "Bramante -> Maderno -> Michelangelo -> Bernini",
      "Bramante -> Bernini -> Michelangelo -> Maderno"
    ],
    "optionsZh": [
      "伯拉孟特 (1506) -> 米开朗基罗 (1546) -> 马代尔诺 (1607) -> 贝尼尼 (1656)",
      "米开朗基罗 -> 伯拉孟特 -> 贝尼尼 -> 马代尔诺",
      "伯拉孟特 -> 马代尔诺 -> 米开朗基罗 -> 贝尼尼",
      "伯拉孟特 -> 贝尼尼 -> 米开朗基罗 -> 马代尔诺"
    ],
    "correctAnswer": 0,
    "explanationEn": "Bramante laid the cornerstone in 1506 with a Greek-cross plan. Michelangelo took over in 1546, designing the colossal dome. Carlo Maderno lengthened the nave into a Latin cross and completed the facade (1607-1614). Bernini designed the piazza colonnade and Baldacchino from 1656.",
    "explanationZh": "伯拉孟特于1506年奠基确立希腊十字集中式方案；米开朗基罗于1546年接掌主持并设计了宏伟的双层穹顶；卡洛·马代尔诺于1607-1614年将平面拉长为拉丁十字并建成立面；贝尼尼于1656年营建椭圆形广场柱廊与室内青铜华盖。",
    "tags": [
      "Chronology",
      "Architecture",
      "Renaissance",
      "Baroque",
      "St Peters",
      "Bramante",
      "Michelangelo",
      "Bernini"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_026",
    "domain": "chronology",
    "subCategory": "High-Tech to Contemporary Architecture",
    "era": "1977 - 2012",
    "questionZh": "请按落成开馆年份的先后顺序排列以下四座国际当代先锋博物馆与公共建筑地标：",
    "questionEn": "Arrange the following four contemporary architectural landmarks in chronological order of their opening:",
    "optionsZh": [
      "巴黎蓬皮杜国家艺术文化中心 (1977) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 罗马国立二十一世纪艺术博物馆MAXXI (2009) -> 伦敦碎片大厦 (2012)",
      "毕尔巴鄂古根海姆博物馆 (1997) -> 巴黎蓬皮杜国家艺术文化中心 (1977) -> 伦敦碎片大厦 (2012) -> 罗马国立二十一世纪艺术博物馆MAXXI (2009)",
      "罗马国立二十一世纪艺术博物馆MAXXI (2009) -> 巴黎蓬皮杜国家艺术文化中心 (1977) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 伦敦碎片大厦 (2012)",
      "巴黎蓬皮杜国家艺术文化中心 (1977) -> 罗马国立二十一世纪艺术博物馆MAXXI (2009) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 伦敦碎片大厦 (2012)"
    ],
    "optionsEn": [
      "Centre Pompidou (1977) -> Guggenheim Bilbao (1997) -> MAXXI Rome (2009) -> The Shard London (2012)",
      "Guggenheim Bilbao (1997) -> Centre Pompidou (1977) -> The Shard London (2012) -> MAXXI Rome (2009)",
      "MAXXI Rome (2009) -> Centre Pompidou (1977) -> Guggenheim Bilbao (1997) -> The Shard London (2012)",
      "Centre Pompidou (1977) -> MAXXI Rome (2009) -> Guggenheim Bilbao (1997) -> The Shard London (2012)"
    ],
    "correctAnswer": 0,
    "explanationZh": "当代标志性建筑落成顺序为：伦佐·皮亚诺与理查德·罗杰斯设计的高技派巴黎蓬皮杜艺术中心（1977年落成） -> 弗兰克·盖里设计的解构主义毕尔巴鄂古根海姆博物馆（1997年落成，钛金属双曲面表皮） -> 扎哈·哈迪德设计的罗马二十一世纪艺术博物馆MAXXI（2009年落成，流体混凝土曲线空间） -> 伦佐·皮亚诺设计的伦敦碎片大厦（2012年落成，八个倾斜低铁玻璃立面晶体尖塔）。",
    "explanationEn": "The sequence of contemporary landmarks is: Piano & Rogers' High-Tech Centre Pompidou (1977) -> Frank Gehry's Deconstructivist Guggenheim Bilbao (1997, titanium-clad curvilinear landmark) -> Zaha Hadid's MAXXI National Museum of 21st Century Arts in Rome (2009, fluid concrete pathways) -> Renzo Piano's The Shard in London (2012, crystalline glass spire).",
    "tags": [
      "Chronology",
      "HighTech",
      "Deconstructivism",
      "Contemporary",
      "Museums"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_027",
    "domain": "chronology",
    "subCategory": "Iron & Art Nouveau Progression",
    "era": "1851 - 1906",
    "questionZh": "请按营建或落成年代先后排列以下四座从工业革命铁构到新艺术运动/现代主义的金属与有机建筑名作：",
    "questionEn": "Arrange the following four landmarks from Industrial iron engineering to Art Nouveau and Catalan Modernisme in chronological order:",
    "optionsZh": [
      "高迪巴塞罗那米拉之家 (1906) -> 伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 维克多·奥塔塔塞尔饭店 (1893)",
      "维克多·奥塔塔塞尔饭店 (1893) -> 伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 高迪巴塞罗那米拉之家 (1906)",
      "伦敦水晶宫 (1851) -> 巴黎埃菲尔铁塔 (1889) -> 维克多·奥塔布鲁塞尔塔塞尔饭店 (1893) -> 安东尼·高迪巴塞罗那米拉之家 (1906)",
      "巴黎埃菲尔铁塔 (1889) -> 伦敦水晶宫 (1851) -> 高迪巴塞罗那米拉之家 (1906) -> 维克多·奥塔塔塞尔饭店 (1893)"
    ],
    "optionsEn": [
      "Casa Milà (1906) -> The Crystal Palace (1851) -> Eiffel Tower (1889) -> Hôtel Tassel (1893)",
      "Hôtel Tassel (1893) -> The Crystal Palace (1851) -> Eiffel Tower (1889) -> Casa Milà (1906)",
      "The Crystal Palace (1851) -> Eiffel Tower (1889) -> Hôtel Tassel, Brussels (1893) -> Antoni Gaudí's Casa Milà (1906)",
      "Eiffel Tower (1889) -> The Crystal Palace (1851) -> Casa Milà (1906) -> Hôtel Tassel (1893)"
    ],
    "correctAnswer": 2,
    "explanationZh": "结构与流派演进顺序为：约瑟夫·帕克斯顿设计的伦敦水晶宫（1851年万国博览会，预制铸铁玻璃结构） -> 埃菲尔铁塔（1889年巴黎世博会，300米高锻铁网架） -> 维克多·奥塔在布鲁塞尔设计的塔塞尔饭店（Hôtel Tassel，1893年，首次将外露铸铁构件与植物藤蔓鞭绳曲线融为一体的新艺术运动宣言之作） -> 安东尼·高迪设计的米拉之家（Casa Milà，1906-1912年，无承重外墙的天然石材与波浪形有机公寓）。",
    "explanationEn": "The correct chronological progression is: Paxton's Crystal Palace (1851) -> Eiffel Tower (1889) -> Victor Horta's Hôtel Tassel in Brussels (1893, inaugural masterpiece of Art Nouveau featuring exposed decorative ironwork) -> Antoni Gaudí's Casa Milà in Barcelona (1906–1912, undulating organic stone facade).",
    "tags": [
      "Chronology",
      "ArtNouveau",
      "Gaudi",
      "Industrial",
      "IronArchitecture"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_028",
    "domain": "chronology",
    "subCategory": "Historical Transition",
    "era": "modern",
    "questionEn": "Arrange these central European institutions of modern craft and design reform chronologically:",
    "questionZh": "请按创立年份先后排列以下德奥地区工艺美术与现代设计改良机构：",
    "optionsEn": [
      "Vienna Secession -> Deutscher Werkbund -> Wiener Werkstätte -> Bauhaus",
      "Deutscher Werkbund -> Vienna Secession -> Wiener Werkstätte -> Bauhaus",
      "Vienna Secession (1897) -> Wiener Werkstätte (1903) -> Deutscher Werkbund (1907) -> Bauhaus (1919)",
      "Wiener Werkstätte -> Vienna Secession -> Bauhaus -> Deutscher Werkbund"
    ],
    "optionsZh": [
      "维也纳分离派 -> 德意志制造联盟 -> 维也纳工坊 -> 包豪斯学院",
      "德意志制造联盟 -> 维也纳分离派 -> 维也纳工坊 -> 包豪斯学院",
      "维也纳分离派 (1897) -> 维也纳工坊 (1903) -> 德意志制造联盟 (1907) -> 包豪斯学院 (1919)",
      "维也纳工坊 -> 维也纳分离派 -> 包豪斯学院 -> 德意志制造联盟"
    ],
    "correctAnswer": 2,
    "explanationEn": "Architects and artists including Joseph Maria Olbrich founded the Vienna Secession in 1897. Josef Hoffmann and Koloman Moser created the Wiener Werkstätte craft enterprise in 1903. Hermann Muthesius and designers launched the Deutscher Werkbund in Munich in 1907. Gropius unified these traditions at the Bauhaus in Weimar in 1919.",
    "explanationZh": "约瑟夫·马里亚·奥尔布里希等建筑师与艺术家建立维也纳分离派于1897年；霍夫曼等创立维也纳工坊于1903年；穆特修斯等在慕尼黑成立德意志制造联盟于1907年；格罗皮乌斯融合工艺与机器工业创办包豪斯于1919年。",
    "tags": [
      "Chronology",
      "Design",
      "Vienna Secession",
      "Werkbund",
      "Bauhaus"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_029",
    "domain": "chronology",
    "subCategory": "Dada & Surrealism Ready-Made Milestones",
    "era": "1913 - 1931",
    "questionZh": "请按创作年代先后排序以下四件颠覆传统艺术媒介定义的达达与超现实主义里程碑作品：",
    "questionEn": "Place the following four groundbreaking Dada and Surrealist objects/readymades in chronological order of their creation:",
    "optionsZh": [
      "达利《记忆的永恒》 (1931) -> 杜尚《自行车轮》 (1913) -> 曼·雷《安格尔的小提琴》 (1924) -> 杜尚《泉》 (1917)",
      "杜尚《泉》 (1917) -> 杜尚《自行车轮》 (1913) -> 达利《记忆的永恒》 (1931) -> 曼·雷《安格尔的小提琴》 (1924)",
      "曼·雷《安格尔的小提琴》 (1924) -> 杜尚《自行车轮》 (1913) -> 杜尚《泉》 (1917) -> 达利《记忆的永恒》 (1931)",
      "杜尚《自行车轮》 (1913) -> 杜尚《泉》 (1917) -> 曼·雷《安格尔的小提琴》 (1924) -> 达利《记忆的永恒》 (1931)"
    ],
    "optionsEn": [
      "Persistence of Memory (1931) -> Bicycle Wheel (1913) -> Ingres's Violin (1924) -> Fountain (1917)",
      "Fountain (1917) -> Bicycle Wheel (1913) -> Persistence of Memory (1931) -> Ingres's Violin (1924)",
      "Ingres's Violin (1924) -> Bicycle Wheel (1913) -> Fountain (1917) -> Persistence of Memory (1931)",
      "Marcel Duchamp's Bicycle Wheel (1913) -> Duchamp's Fountain (1917) -> Man Ray's Ingres's Violin (1924) -> Salvador Dalí's The Persistence of Memory (1931)"
    ],
    "correctAnswer": 3,
    "explanationZh": "先锋现成品与超现实主义时间序列为：马塞尔·杜尚的《自行车轮》（Bicycle Wheel，1913年，将倒置前车轮固定于圆凳上的首个现成品） -> 杜尚署名R. Mutt提交的陶瓷小便斗《泉》（Fountain，1917年） -> 曼·雷拍摄并在模特裸背手绘音孔的摄影杰作《安格尔的小提琴》（Le Violon d'Ingres，1924年） -> 萨尔瓦多·达利的瘫软融化钟表超现实主义名画《记忆的永恒》（The Persistence of Memory，1931年）。",
    "explanationEn": "The sequence of Dada and Surrealist icons is: Duchamp's Bicycle Wheel (1913, the first readymade) -> Duchamp's Fountain (1917, the porcelain urinal signed R. Mutt) -> Man Ray's Ingres's Violin (1924, photograph with violin f-holes painted on Kiki's back) -> Dalí's The Persistence of Memory (1931, melting soft watches in a Catalonian dreamscape).",
    "tags": [
      "Chronology",
      "Dadaism",
      "Surrealism",
      "Duchamp",
      "ManRay",
      "Dali"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_030",
    "domain": "chronology",
    "subCategory": "Historical Transition",
    "era": "modern",
    "questionEn": "Trace the chronological evolution of commercial design and decorative styling from 1890 to 1960:",
    "questionZh": "请按时代演进顺序排列现代装饰与大众商业造型风格的发展流变：",
    "optionsEn": [
      "Art Deco -> Art Nouveau -> Streamline Moderne -> Mid-Century Modern",
      "Art Nouveau (c. 1895) -> Art Deco (1925) -> Streamline Moderne (1935) -> Mid-Century Modern (1950s)",
      "Art Nouveau -> Streamline Moderne -> Art Deco -> Mid-Century Modern",
      "Streamline Moderne -> Art Nouveau -> Art Deco -> Mid-Century Modern"
    ],
    "optionsZh": [
      "装饰艺术风格 -> 新艺术运动 -> 流线型现代主义 -> 中世纪现代主义",
      "新艺术运动 (约1895) -> 装饰艺术风格 (1925) -> 流线型现代主义 (1935) -> 中世纪现代主义 (1950年代)",
      "新艺术运动 -> 流线型现代主义 -> 装饰艺术风格 -> 中世纪现代主义",
      "流线型现代主义 -> 新艺术运动 -> 装饰艺术风格 -> 中世纪现代主义"
    ],
    "correctAnswer": 1,
    "explanationEn": "The sequence progresses from organic curves of Art Nouveau (c. 1890–1910) to geometric zigzag luxury of Art Deco (1925), industrial aerodynamic forms of Streamline Moderne (1930s), and the organic functionalism of Mid-Century Modern (1950s).",
    "explanationZh": "新艺术运动（Art Nouveau，约1890-1910，有机自然植物线条） -> 装饰艺术风格（Art Deco，1925年巴黎博览会定名，强调几何对称流线与奢华机械美感） -> 流线型现代主义（Streamline Moderne，1930年代大萧条后强调水滴流线空气动力学造型） -> 中世纪现代主义（Mid-Century Modern，以战后有机现代主义工业设计与功能主义为代表）风行于1950年代。",
    "tags": [
      "Chronology",
      "Design",
      "Art Nouveau",
      "Art Deco",
      "Streamline Moderne"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_031",
    "domain": "chronology",
    "subCategory": "Vault & Structural Vaulting Progression",
    "era": "11th - 17th Century",
    "questionZh": "欧洲建筑史中大跨度拱顶与穹顶营造技术的演变先后顺序是：",
    "questionEn": "What is the correct historical sequence of vaulted roof systems in European architectural development?",
    "optionsZh": [
      "哥特式交叉肋拱顶与飞扶壁 -> 罗马式筒形拱与十字拱 -> 布鲁内莱斯基双层八角砖石穹顶 -> 博罗米尼动态椭圆复曲面穹顶",
      "罗马式筒形拱与十字拱 -> 哥特式交叉肋骨拱顶与飞扶壁 -> 布鲁内莱斯基双层八角砖石穹顶 -> 博罗米尼动感椭圆曲面穹顶",
      "布鲁内莱斯基双层八角砖石穹顶 -> 罗马式筒形拱与十字拱 -> 哥特式交叉肋拱顶与飞扶壁 -> 博罗米尼动感椭圆曲面穹顶",
      "博罗米尼动感椭圆曲面穹顶 -> 布鲁内莱斯基双层八角砖石穹顶 -> 哥特式交叉肋拱顶与飞扶壁 -> 罗马式筒形拱与十字拱"
    ],
    "optionsEn": [
      "Gothic ribbed vault and flying buttress -> Romanesque barrel vault -> Brunelleschi double-shell dome -> Borromini undulating oval dome",
      "Romanesque barrel vault and groin vault -> Gothic ribbed vault and flying buttress -> Brunelleschi double-shell octagonal masonry dome -> Borromini undulating elliptical compound dome",
      "Brunelleschi double-shell dome -> Romanesque barrel vault -> Gothic ribbed vault -> Borromini undulating dome",
      "Borromini undulating dome -> Brunelleschi double-shell dome -> Gothic ribbed vault -> Romanesque barrel vault"
    ],
    "correctAnswer": 1,
    "explanationZh": "欧洲大跨度拱顶技术的历史演变历程为：1. 罗马式筒形拱与十字拱（11世纪，以实体承重厚墙与半圆厚拱顶支撑自重）；2. 哥特式交叉肋骨拱顶与外部飞扶壁（12-13世纪，骨架受力、侧推力外传，摆脱重墙限制）；3. 布鲁内莱斯基双层八角形无支架鱼骨砌砖穹顶（1420-1436年，文艺复兴机械与几何力学革命）；4. 博罗米尼四喷泉圣卡罗堂动态椭圆复合几何穹顶（1638-1646年，巴洛克空间变形与光影剧场）。",
    "explanationEn": "The structural evolution of masonry vaulting spans: Romanesque heavy barrel and groin vaults (11th c., thick load-bearing masonry) -> Gothic ribbed vaulting with flying buttresses (12th–13th c., skeletal framework channeling lateral thrusts outward) -> Brunelleschi's Florence Cathedral double-shell octagonal dome (1420–1436, herringbone masonry constructed without centering) -> Borromini's San Carlo alle Quattro Fontane elliptical dome (1638–1646, undulating Baroque spatial geometry).",
    "tags": [
      "Chronology",
      "Vaults",
      "Romanesque",
      "Gothic",
      "Renaissance",
      "Baroque"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_032",
    "domain": "chronology",
    "subCategory": "Roman Baroque Architectural Progression",
    "era": "1584 - 1667",
    "questionZh": "请按工程落成年代的先后顺序排列以下四座确立罗马巴洛克巅峰风貌的建筑与城市杰作：",
    "questionEn": "Place the following four masterworks defining Roman Baroque architecture and urbanism in chronological order of completion:",
    "optionsZh": [
      "耶稣堂立面 (1584) -> 圣彼得大教堂青铜华盖 (1633) -> 四喷泉圣卡罗堂 (1646) -> 圣伯多禄大广场列柱廊 (1667)",
      "圣彼得大教堂青铜华盖 (1633) -> 耶稣堂立面 (1584) -> 圣伯多禄大广场列柱廊 (1667) -> 四喷泉圣卡罗堂 (1646)",
      "四喷泉圣卡罗堂 (1646) -> 耶稣堂立面 (1584) -> 圣彼得大教堂青铜华盖 (1633) -> 圣伯多禄大广场列柱廊 (1667)",
      "圣伯多禄大广场列柱廊 (1667) -> 四喷泉圣卡罗堂 (1646) -> 圣彼得大教堂青铜华盖 (1633) -> 耶稣堂立面 (1584)"
    ],
    "optionsEn": [
      "Façade of Church of the Gesù (1584) -> St. Peter's Baldachin (1633) -> San Carlo alle Quattro Fontane (1646) -> St. Peter's Square Colonnade (1667)",
      "St. Peter's Baldachin (1633) -> Façade of Church of the Gesù (1584) -> St. Peter's Square Colonnade (1667) -> San Carlo alle Quattro Fontane (1646)",
      "San Carlo alle Quattro Fontane (1646) -> Façade of Church of the Gesù (1584) -> St. Peter's Baldachin (1633) -> St. Peter's Square Colonnade (1667)",
      "St. Peter's Square Colonnade (1667) -> San Carlo alle Quattro Fontane (1646) -> St. Peter's Baldachin (1633) -> Façade of Church of the Gesù (1584)"
    ],
    "correctAnswer": 0,
    "explanationZh": "罗马巴洛克发展的时间链条为：德拉·波尔塔设计的罗马耶稣堂立面（1584年，带有侧翼巨大涡卷饰，巴洛克教堂立面原型） -> 贝尔尼尼在圣彼得大教堂建造的青铜华盖（Baldacchino，1624-1633年，29米高扭转所罗门柱） -> 弗朗切斯科·博罗米尼设计的四喷泉圣卡罗教堂（1638-1646年，波浪起伏凹凸曲面立面） -> 贝尔尼尼设计的圣伯多禄大广场四重多立克环形列柱廊（1656-1667年，象征母仪天下教会的张开双臂）。",
    "explanationEn": "The sequence of Roman Baroque masterworks is: Giacomo della Porta's facade of the Gesù (1584, inaugurating the Baroque facade archetype with massive lateral volutes) -> Bernini's bronze Baldachin in St. Peter's (1624–1633, monumental Solomonic columns) -> Borromini's San Carlo alle Quattro Fontane (1638–1646, undulating plastic facade) -> Bernini's St. Peter's Square Colonnade (1656–1667, quadruple Doric colonnade).",
    "tags": [
      "Chronology",
      "Baroque",
      "Bernini",
      "Borromini",
      "DellaPorta",
      "Rome"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_033",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "modern",
    "questionEn": "Trace the chronological evolution of Le Corbusier's architectural trajectory:",
    "questionZh": "请按落成年代先后排列勒·柯布西耶四座最具历史转折意义的建筑名作：",
    "optionsEn": [
      "Pavillon de l'Esprit Nouveau -> Unité d'Habitation -> Villa Savoye -> Ronchamp",
      "Villa Savoye -> Pavillon de l'Esprit Nouveau -> Ronchamp -> Unité d'Habitation",
      "Pavillon de l'Esprit Nouveau (1925) -> Villa Savoye (1929) -> Unité d'Habitation Marseille (1952) -> Chapel of Notre-Dame du Haut at Ronchamp (1955)",
      "Villa Savoye -> Pavillon de l'Esprit Nouveau -> Unité d'Habitation -> Ronchamp"
    ],
    "optionsZh": [
      "新精神馆 -> 马赛公寓 -> 萨伏伊别墅 -> 朗香教堂",
      "萨伏伊别墅 -> 新精神馆 -> 朗香教堂 -> 马赛公寓",
      "新精神馆 (1925) -> 萨伏伊别墅 (1929) -> 马赛公寓 (1952) -> 朗香圣母礼拜堂 (1955)",
      "萨伏伊别墅 -> 新精神馆 -> 马赛公寓 -> 朗香教堂"
    ],
    "correctAnswer": 2,
    "explanationEn": "Le Corbusier showcased his standardized apartment cell at the 1925 Paris Expo. Villa Savoye manifested the Five Points of Architecture in 1929. The rough-cast concrete (béton brut) Unité in Marseille opened in 1952. The sculpted expressionist Chapel at Ronchamp opened in 1955.",
    "explanationZh": "柯布西耶于1925年巴黎博览会展示标准模数化新精神馆；1929年完成纯粹主义白派巅峰萨伏伊别墅；1952年建成粗野主义混凝土巨作马赛公寓；1955年建成雕塑感神秘光影的朗香教堂。",
    "tags": [
      "Chronology",
      "Architecture",
      "Modern",
      "Le Corbusier",
      "Brutalism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_034",
    "domain": "chronology",
    "subCategory": "Manifesto Chronology",
    "era": "20th_avant_garde",
    "questionEn": "Arrange these key moments of Italian Rationalism (Razionalismo Italiano) in chronological order:",
    "questionZh": "请按年份先后排列意大利理性主义建筑运动（Razionalismo）的关键发展节点：",
    "optionsEn": [
      "Gruppo 7 founding articles in Rassegna Italiana (1926) -> First National Exhibition of Rationalist Architecture (1928) -> Casa del Fascio in Como completed (1936) -> EUR masterplan and Palazzo della Civiltà Italiana (c. 1938-1942)",
      "First National Exhibition -> Gruppo 7 articles -> Casa del Fascio -> EUR masterplan",
      "Gruppo 7 articles -> Casa del Fascio -> First National Exhibition -> EUR masterplan",
      "Casa del Fascio -> Gruppo 7 articles -> First National Exhibition -> EUR masterplan"
    ],
    "optionsZh": [
      "七人小组在《意大利评论》发表四篇理性主义宣言 (1926) -> 罗马第一届全国理性主义建筑展 (1928) -> 科莫法西斯大楼完工 (1936) -> 罗马新城EUR主规划与意大利文明宫 (约1938-1942)",
      "第一届全国理性主义建筑展 -> 七人小组宣言 -> 科莫法西斯大楼 -> EUR主规划",
      "七人小组宣言 -> 科莫法西斯大楼 -> 第一届全国理性主义建筑展 -> EUR主规划",
      "科莫法西斯大楼 -> 七人小组宣言 -> 第一届全国理性主义建筑展 -> EUR主规划"
    ],
    "correctAnswer": 0,
    "explanationEn": "Gruppo 7 published their seminal manifestos between 1926-1927. The first exhibition took place in Rome in 1928 leading to MIAR. Giuseppe Terragni's Casa del Fascio was completed in 1936. Marcello Piacentini and rationalist-monumental architects planned the E42/EUR district between 1938-1942.",
    "explanationZh": "七人小组（泰拉尼等）于1926-1927年发表创立文章；1928年在罗马举办首届展览并组建MIAR；泰拉尼的科莫法西斯宫于1936年竣工；皮亚琴蒂尼等统领的罗马1942世博会（EUR新城）于1938-1942年建设。",
    "tags": [
      "Chronology",
      "Architecture",
      "Rationalism",
      "Terragni",
      "Gruppo 7",
      "EUR"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_035",
    "domain": "chronology",
    "subCategory": "Italian Post-War Avant-Garde Arts",
    "era": "1946 - 1961",
    "questionZh": "请按发生年份的先后顺序排列以下20世纪中叶意大利先锋艺术的关键转折事件：",
    "questionEn": "Place the following pivotal post-war Italian avant-garde milestones in chronological order:",
    "optionsZh": [
      "曼佐尼制作《艺术家之粪》 (1961) -> 封塔纳发表《白色的宣言》 (1946) -> 封塔纳创作《空间概念·穿孔》 (1949)",
      "封塔纳创作《空间概念·穿孔》 (1949) -> 曼佐尼制作《艺术家之粪》 (1961) -> 封塔纳发表《白色的宣言》 (1946)",
      "封塔纳创作《空间概念·等待》划痕画 (1958) -> 封塔纳发表《白色的宣言》 (1946) -> 曼佐尼制作《艺术家之粪》 (1961)",
      "封塔纳发表《白色的宣言》 (1946) -> 封塔纳开创打孔画《空间概念》(Buchi) (1949) -> 封塔纳开创割破画《空间概念·等待》(Attese) (1958) -> 曼佐尼制作罐头装置《艺术家之粪》 (1961)"
    ],
    "optionsEn": [
      "Manzoni's Artist's Shit (1961) -> Fontana's White Manifesto (1946) -> Fontana's Buchi (1949)",
      "Fontana's Buchi (1949) -> Manzoni's Artist's Shit (1961) -> Fontana's White Manifesto (1946)",
      "Fontana's Attese (1958) -> Fontana's White Manifesto (1946) -> Manzoni's Artist's Shit (1961)",
      "Fontana's White Manifesto (1946) -> Fontana's perforated Buchi (1949) -> Fontana's slashed Attese (1958) -> Manzoni's Artist's Shit cans (1961)"
    ],
    "correctAnswer": 3,
    "explanationZh": "意大利战后当代艺术的演变逻辑为：卢齐欧·封塔纳在布宜诺斯艾利斯发表《白色的宣言》（Manifesto Blanco，1946年，创立空间主义理论） -> 封塔纳在米兰开创打孔画布系列《空间概念》（Concetto spaziale, Buchi，1949年） -> 封塔纳以利刃单刀划破单色平整画布开创《等待》系列（Concetto spaziale, Attese，1958年起） -> 皮耶罗·曼佐尼将30克排泄物密封于90只马口铁罐头并按黄金等重定价制作《艺术家之粪》（Merda d'artista，1961年，激进观念艺术里程碑）。",
    "explanationEn": "The sequence of Italian post-war breakthroughs is: Lucio Fontana's White Manifesto in Buenos Aires (1946, founding Spatialism) -> Fontana's perforated canvases (Buchi, 1949) -> Fontana's iconic slashed canvases (Attese, begun 1958) -> Piero Manzoni's conceptual provocation Artist's Shit (Merda d'artista, May 1961, 90 tin cans priced by weight in gold).",
    "tags": [
      "Chronology",
      "ContemporaryArt",
      "Spatialism",
      "Fontana",
      "Manzoni"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_036",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "medieval",
    "questionEn": "Place these major French Gothic cathedrals in the order their construction began:",
    "questionZh": "请按大教堂主殿或唱诗班工程启动的先后顺序排列法国哥特式四大地标：",
    "optionsEn": [
      "Basilica of Saint-Denis -> Chartres Cathedral -> Amiens Cathedral -> Notre-Dame de Paris",
      "Notre-Dame de Paris -> Basilica of Saint-Denis -> Amiens Cathedral -> Chartres Cathedral",
      "Chartres Cathedral -> Basilica of Saint-Denis -> Notre-Dame de Paris -> Amiens Cathedral",
      "Basilica of Saint-Denis (c. 1140) -> Notre-Dame de Paris (1163) -> Chartres Cathedral (rebuilt 1194) -> Amiens Cathedral (1220)"
    ],
    "optionsZh": [
      "圣丹尼斯圣殿修道院 -> 沙特尔大教堂 -> 亚眠大教堂 -> 巴黎圣母院",
      "巴黎圣母院 -> 圣丹尼斯圣殿修道院 -> 亚眠大教堂 -> 沙特尔大教堂",
      "沙特尔大教堂 -> 圣丹尼斯圣殿修道院 -> 巴黎圣母院 -> 亚眠大教堂",
      "圣丹尼斯圣殿修道院 (约1140) -> 巴黎圣母院 (1163) -> 沙特尔大教堂 (1194火灾后重建) -> 亚眠大教堂 (1220)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Abbot Suger consecrated the choir of Saint-Denis in 1144 (birth of Gothic). Maurice de Sully began Notre-Dame de Paris in 1163 (Early Gothic). The current High Gothic Chartres was begun after the 1194 fire. High Gothic Amiens was begun in 1220 by Robert de Luzarches.",
    "explanationZh": "苏热修道院长于1140-1144年落成圣丹尼斯唱诗班回廊（哥特式诞生）；1163年莫里斯·德·苏利启动巴黎圣母院（早期哥特）；1194年大火后沙特尔按盛期哥特四分肋拱与巨型彩窗重建；1220年亚眠大教堂开工达到法国哥特垂直高度最高比例之一。",
    "tags": [
      "Chronology",
      "Architecture",
      "Gothic",
      "Cathedral",
      "Chartres",
      "Amiens"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_037",
    "domain": "chronology",
    "subCategory": "Early Renaissance Florence Architecture",
    "era": "1420 - 1482",
    "questionZh": "请按工程开工或设计的年代先后排列以下四座奠定佛罗伦萨早期文艺复兴建筑规范的名作：",
    "questionEn": "Arrange the following four foundational masterpieces of Early Renaissance Florentine architecture in chronological order of inception:",
    "optionsZh": [
      "布鲁内莱斯基圣灵大教堂 (1444) -> 佛罗伦萨圣母百花穹顶 (1420) -> 帕齐礼拜堂 (1443) -> 阿尔贝蒂鲁切拉宫 (1450)",
      "佛罗伦萨百花大教堂穹顶 (1420) -> 帕齐礼拜堂 (1443) -> 圣灵大教堂 (1444) -> 阿尔贝蒂鲁切拉宫 (1450)",
      "阿尔贝蒂鲁切拉宫 (1450) -> 佛罗伦萨百花大教堂穹顶 (1420) -> 圣灵大教堂 (1444) -> 帕齐礼拜堂 (1443)",
      "帕齐礼拜堂 (1443) -> 佛罗伦萨百花大教堂穹顶 (1420) -> 阿尔贝蒂鲁切拉宫 (1450) -> 圣灵大教堂 (1444)"
    ],
    "optionsEn": [
      "Santo Spirito (1444) -> Florence Cathedral Dome (1420) -> Pazzi Chapel (1443) -> Palazzo Rucellai (1450)",
      "Florence Cathedral Dome (1420) -> Pazzi Chapel (1443) -> Basilica of Santo Spirito (1444) -> Alberti's Palazzo Rucellai (1450)",
      "Palazzo Rucellai (1450) -> Florence Cathedral Dome (1420) -> Santo Spirito (1444) -> Pazzi Chapel (1443)",
      "Pazzi Chapel (1443) -> Florence Cathedral Dome (1420) -> Palazzo Rucellai (1450) -> Santo Spirito (1444)"
    ],
    "correctAnswer": 1,
    "explanationZh": "佛罗伦萨早期文艺复兴代表作先后为：布鲁内莱斯基开始营建圣母百花大教堂八角形穹顶（1420年） -> 布鲁内莱斯基设计圣十字圣殿帕齐礼拜堂（1443年启动，古典纯几何与灰砂岩对比） -> 布鲁内莱斯基设计圣灵大教堂（Santo Spirito，1444年，严格的古典巴西利卡立柱比例模数） -> 莱昂·巴蒂斯塔·阿尔贝蒂设计鲁切拉宫立面（Palazzo Rucellai，1450年前后，首次将古罗马叠落柱式运用于三层民用宫殿外立面）。",
    "explanationEn": "The sequence in Florence is: Brunelleschi begins constructing the Florence Cathedral Dome (1420) -> Brunelleschi designs the Pazzi Chapel (1443) -> Brunelleschi designs Santo Spirito (1444) -> Leon Battista Alberti designs Palazzo Rucellai (c. 1450, introducing superimposed classical pilasters to residential palace facades).",
    "tags": [
      "Chronology",
      "Renaissance",
      "Florence",
      "Brunelleschi",
      "Alberti"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_038",
    "domain": "chronology",
    "subCategory": "Architectural Era Progression",
    "era": "renaissance",
    "questionEn": "Arrange these monumental Renaissance palaces and villas chronologically by initial construction:",
    "questionZh": "请按始建年代先后排列以下四座文艺复兴庄园与宫殿代表作：",
    "optionsEn": [
      "Palazzo Farnese -> Palazzo Medici Riccardi -> Villa Rotonda -> Palazzo Te",
      "Palazzo Medici Riccardi in Florence (Michelozzo 1444) -> Palazzo Farnese in Rome (Sangallo 1515) -> Palazzo Te in Mantua (Romano 1524) -> Villa Rotonda in Vicenza (Palladio 1566)",
      "Palazzo Medici Riccardi -> Palazzo Te -> Palazzo Farnese -> Villa Rotonda",
      "Villa Rotonda -> Palazzo Medici Riccardi -> Palazzo Farnese -> Palazzo Te"
    ],
    "optionsZh": [
      "法尔内塞宫 -> 美第奇-里卡尔迪宫 -> 圆厅别墅 -> 苔庄园",
      "美第奇-里卡尔迪宫 (米开罗佐 1444) -> 法尔内塞宫 (小桑加洛 1515) -> 苔庄园 (朱利奥·罗马诺 1524) -> 圆厅别墅 (帕拉第奥 1566)",
      "美第奇-里卡尔迪宫 -> 苔庄园 -> 法尔内塞宫 -> 圆厅别墅",
      "圆厅别墅 -> 美第奇-里卡尔迪宫 -> 法尔内塞宫 -> 苔庄园"
    ],
    "correctAnswer": 1,
    "explanationEn": "Michelozzo began the Early Renaissance Palazzo Medici in 1444 (tripartite rustication). Sangallo the Younger began the High Renaissance Palazzo Farnese in 1515. Giulio Romano designed the Mannerist Palazzo Te from 1524. Palladio designed the Late Renaissance Villa Rotonda in 1566.",
    "explanationZh": "米开罗佐于1444年设计佛罗伦萨早期文艺复兴粗面石工美第奇宫；小桑加洛于1515年启动罗马盛期法尔内塞宫；朱利奥·罗马诺于1524年开工曼托瓦样式主义苔庄园；帕拉第奥于1566年营建维琴察晚期古典纯粹对称的圆厅别墅。",
    "tags": [
      "Chronology",
      "Architecture",
      "Renaissance",
      "Palladio",
      "Mannerism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_039",
    "domain": "chronology",
    "subCategory": "Historical Transition",
    "era": "modern",
    "questionEn": "Trace the chronological development of early 20th-century social housing and urban typologies:",
    "questionZh": "请按年份先后排列20世纪前期现代集体住宅与城市住区探索里程碑：",
    "optionsEn": [
      "Weissenhofsiedlung -> Frankfurt Kitchen -> Le Corbusier's Ville Radieuse -> Karl Marx-Hof",
      "Frankfurt Kitchen / Ernst May housing (1926) -> Weissenhofsiedlung in Stuttgart (1927) -> Karl Marx-Hof in Vienna (1930) -> Le Corbusier's Ville Radieuse plan (1930)",
      "Karl Marx-Hof -> Frankfurt Kitchen -> Weissenhofsiedlung -> Le Corbusier's Ville Radieuse",
      "Le Corbusier's Ville Radieuse -> Weissenhofsiedlung -> Frankfurt Kitchen -> Karl Marx-Hof"
    ],
    "optionsZh": [
      "魏森霍夫住宅展 -> 法兰克福厨房 -> 光辉城市 -> 卡尔·马克思大院",
      "法兰克福厨房与恩斯特·梅住宅区 (1926) -> 斯图加特魏森霍夫住宅展 (1927) -> 维也纳卡尔·马克思大院 (1930) -> 柯布西耶“光辉城市”方案 (1930)",
      "卡尔·马克思大院 -> 法兰克福厨房 -> 魏森霍夫住宅展 -> 光辉城市",
      "光辉城市 -> 魏森霍夫住宅展 -> 法兰克福厨房 -> 卡尔·马克思大院"
    ],
    "correctAnswer": 1,
    "explanationEn": "Margarete Schütte-Lihotzky designed the standardized Frankfurt Kitchen in 1926. The Werkbund Weissenhofsiedlung exhibition opened in Stuttgart in 1927. The monumental 'Red Vienna' Karl Marx-Hof opened in 1930. Le Corbusier presented his Radiant City urban model at CIAM in 1930.",
    "explanationZh": "利霍茨基等在1926年研发标准化法兰克福厨房；制造联盟斯图加特魏森霍夫白派住宅展于1927年向公众开放；维也纳红色政权象征卡尔·马克思集体大院于1930年落成；柯布西耶于1930年CIAM会议提出集中塔楼绿地的“光辉城市”理想。",
    "tags": [
      "Chronology",
      "Architecture",
      "Modern",
      "Housing",
      "Weissenhofsiedlung"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_040",
    "domain": "chronology",
    "subCategory": "World Museum Architecture Evolution",
    "era": "1929 - 2009",
    "questionZh": "请按落成开馆年份先后排序以下四座代表不同时期建筑哲学转折的世界著名博物馆地标：",
    "questionEn": "Arrange the following four landmark museums in chronological order of their completion, reflecting evolving architectural paradigms:",
    "optionsZh": [
      "密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 赖特纽约古根海姆博物馆 (1959) -> 皮亚诺与罗杰斯巴黎蓬皮杜中心 (1977) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009)",
      "赖特纽约古根海姆博物馆 (1959) -> 密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 巴黎蓬皮杜中心 (1977) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009)",
      "巴黎蓬皮杜中心 (1977) -> 密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 赖特纽约古根海姆博物馆 (1959) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009)",
      "密斯·凡·德·罗巴塞罗那德国馆 (1929) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009) -> 赖特纽约古根海姆博物馆 (1959) -> 巴黎蓬皮杜中心 (1977)"
    ],
    "optionsEn": [
      "Mies's Barcelona Pavilion (1929) -> Wright's Solomon R. Guggenheim Museum (1959) -> Piano & Rogers' Centre Pompidou (1977) -> Zaha Hadid's MAXXI Rome (2009)",
      "Wright's Guggenheim (1959) -> Mies's Barcelona Pavilion (1929) -> Centre Pompidou (1977) -> MAXXI Rome (2009)",
      "Centre Pompidou (1977) -> Mies's Barcelona Pavilion (1929) -> Wright's Guggenheim (1959) -> MAXXI Rome (2009)",
      "Mies's Barcelona Pavilion (1929) -> MAXXI Rome (2009) -> Wright's Guggenheim (1959) -> Centre Pompidou (1977)"
    ],
    "correctAnswer": 0,
    "explanationZh": "世界经典展览与博物馆地标落成时间线为：密斯·凡·德·罗设计的巴塞罗那世博会德国馆（1929年，十字镀铬钢柱与流动空间展馆典范） -> 弗兰克·劳埃德·赖特设计的纽约所罗门·R·古根海姆博物馆（1959年，由下而上连续盘旋的倒锥形螺旋展廊） -> 伦佐·皮亚诺与理查德·罗杰斯设计的巴黎蓬皮杜艺术中心（1977年，外露管道机电设备的高技派巨作） -> 扎哈·哈迪德设计的罗马国立二十一世纪艺术博物馆MAXXI（2009年，流动混凝土与重叠悬挑的当代建筑典范）。",
    "explanationEn": "The progression of iconic exhibition architecture is: Mies van der Rohe's Barcelona Pavilion (1929, flowing open space and cruciform chrome pillars) -> Frank Lloyd Wright's Solomon R. Guggenheim Museum, New York (1959, continuous inverted spiral ramp) -> Renzo Piano & Richard Rogers' Centre Pompidou, Paris (1977, exposed High-Tech structural systems) -> Zaha Hadid's MAXXI Rome (2009, fluid overlapping concrete ribbons).",
    "tags": [
      "Chronology",
      "Museums",
      "Mies",
      "Wright",
      "HighTech",
      "Contemporary"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_041",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Who is the painter of the iconic non-figurative composition with thick black orthogonal lines and primary color rectangles reproduced below?",
    "questionZh": "下图中展示的以加粗黑色正交网格与红黄蓝纯原色色块构成的纯粹几何抽象画作的作者是谁？",
    "optionsEn": [
      "René Magritte",
      "Theo van Doesburg",
      "Piet Mondrian",
      "Lucio Fontana"
    ],
    "optionsZh": [
      "勒内·马格里特 (René Magritte)",
      "特奥·范·杜斯堡 (Theo van Doesburg)",
      "皮特·蒙德里安 (Piet Mondrian)",
      "卢齐欧·封塔纳 (Lucio Fontana)"
    ],
    "correctAnswer": 2,
    "explanationEn": "This painting is Composition II in Red, Blue, and Yellow (1930) by Piet Mondrian, the founding master of De Stijl (Neoplasticism). Mondrian rejected naturalistic representation in favor of pure plastic harmony: strict vertical and horizontal black grid lines enclosing planes of primary colors (red, blue, yellow) and non-colors (white, gray). Theo van Doesburg co-founded De Stijl but later split with Mondrian by introducing diagonal 45-degree compositions.",
    "explanationZh": "此画为皮特·蒙德里安（Piet Mondrian）新造型主义（Neoplasticism）经典名作《红、蓝、黄构图》（1930）。蒙德里安创立荷兰风格派（De Stijl），主张彻底摒弃具象模仿，仅使用垂直与水平正交黑色线条，配合红、黄、蓝三原色及黑白灰非彩色，追求绝对的纯粹几何秩序与宇宙精神和谐。特奥·范·杜斯堡虽同为风格派核心，但后期倡导引入45度斜线的要素主义，导致二人分道扬镳。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/800px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
    "fallbackImage": "/images/artworks/composition-red-blue-yellow.jpg",
    "tags": [
      "VisualID",
      "Mondrian",
      "De Stijl",
      "Neoplasticism",
      "Abstract Art"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_042",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Who painted the early masterpiece 'The Farm' (1921–1922) shown below, which meticulously records his family farm in Mont-roig with magical realism and was famously purchased and treasured by Ernest Hemingway?",
    "questionZh": "下图中展示的以加泰罗尼亚家族农舍、按严谨透视描绘的农具、动物与树木细节，并被作家海明威倾囊买下珍藏的早期魔幻写实主义向超现实主义过渡的代表作《农场》（The Farm）的作者是：",
    "optionsEn": [
      "Salvador Dalí",
      "Joan Miró",
      "René Magritte",
      "Alberto Giacometti"
    ],
    "optionsZh": [
      "萨尔瓦多·达利 (Salvador Dalí)",
      "胡安·米罗 (Joan Miró)",
      "勒内·马格里特 (René Magritte)",
      "阿尔贝托·贾科梅蒂 (Alberto Giacometti)"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Farm' (1921–1922) is the breakthrough masterpiece by Catalan surrealist Joan Miró, painted in Paris and Mont-roig. Combining magical realism with poetic detail, it was purchased by Ernest Hemingway, who hailed it as containing everything one feels about Spain. Dalí focused on paranoiac dreamscapes, Magritte on semiotic paradoxes, and Giacometti on elongated existential bronzes.",
    "explanationZh": "《农场》（The Farm，1921-1922）是西班牙超现实主义大师胡安·米罗（Joan Miró）青年时期的转折性巅峰巨作。作品描绘了其家族在加泰罗尼亚蒙特罗伊格的乡村农场，将严谨细腻的客观写实与充满梦幻诗意的象征构图融为一体，作家海明威对其极为推崇并买下珍藏。达利偏向写实具象梦境，马格里特探索图像与符号哲学，贾科梅蒂以瘦长存在主义雕塑闻名。",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Joan_Miro_The_Farm.jpg/800px-Joan_Miro_The_Farm.jpg",
    "fallbackImage": "/images/artworks/the-farm.jpg",
    "tags": [
      "VisualID",
      "Joan Miró",
      "Surrealism",
      "The Farm"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_043",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "postwar_contemporary",
    "questionEn": "Identify the author of the monumental drip-and-pour action painting 'Autumn Rhythm (Number 30)' created in 1950:",
    "questionZh": "创作于1950年、采用将未经拉伸画布铺在地面上进行泼洒与滴流技法的行动绘画巨作《秋之韵（第30号）》作者是：",
    "optionsEn": [
      "Carlo Carrà",
      "Piero Manzoni",
      "Jackson Pollock",
      "Andy Warhol"
    ],
    "optionsZh": [
      "卡洛·卡拉 (Carlo Carrà)",
      "皮耶罗·曼佐尼 (Piero Manzoni)",
      "杰克逊·波洛克 (Jackson Pollock)",
      "安迪·沃霍尔 (Andy Warhol)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Autumn Rhythm (Number 30, 1950) is Jackson Pollock's signature Action Painting triumph. Pollock dispensed with the easel, tacking raw unstretched canvas directly to the floor of his Long Island barn and using sticks and perforated cans to fling and pour commercial enamel paint in an all-over rhythmic choreography of bodily energy.",
    "explanationZh": "《秋之韵（第30号）》（Autumn Rhythm: Number 30，1950）是杰克逊·波洛克（Jackson Pollock）行动绘画（Action Painting）巅峰巨作。波洛克彻底摒弃了画架与画笔的传统接触方式，将未绷紧的巨大粗帆布平铺于长岛谷仓地面，利用带孔铁罐与木棍甩洒工业搪瓷漆，通过身体在四边的动态律动留下交织缠绕的能量网迹。曼佐尼开创了无色彩概念艺术，卡拉为未来主义与形而上派大师，沃霍尔为波普丝网版画大师。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jackson_Pollock_working.jpg/800px-Jackson_Pollock_working.jpg",
    "fallbackImage": "/images/artworks/autumn-rhythm.jpg",
    "tags": [
      "VisualID",
      "Pollock",
      "Action Painting",
      "Abstract Expressionism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_044",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "postwar_contemporary",
    "questionEn": "Which Pop Art icon created the 1962 screenprint diptych featuring fifty repeated photographic portraits of Marilyn Monroe?",
    "questionZh": "在1962年通过丝网版画套印50张重复的玛丽莲·梦露肖像、深刻揭示大众媒介与明星商品拜物教的波普大师是：",
    "optionsEn": [
      "Roy Lichtenstein",
      "Andy Warhol",
      "Marcel Duchamp",
      "Man Ray"
    ],
    "optionsZh": [
      "罗伊·利希滕斯坦 (Roy Lichtenstein)",
      "安迪·沃霍尔 (Andy Warhol)",
      "马塞尔·杜尚 (Marcel Duchamp)",
      "曼·雷 (Man Ray)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Following Marilyn Monroe's death in 1962, Andy Warhol produced the Marilyn Diptych using a publicity still from Niagara. The left panel features 25 garishly silkscreened portraits evoking commercial product packaging, while the right panel displays 25 monochrome prints fading into ghostly indistinctness, critiquing media commodification of celebrity tragedy.",
    "explanationZh": "1962年好莱坞影星玛丽莲·梦露自杀后数周，安迪·沃霍尔（Andy Warhol）利用其电影《尼亚加拉》的宣传肖像照片，制作了双联巨幅丝网版画《玛丽莲双联画》（Marilyn Diptych）。左联25张采用刺眼鲜艳的商品色彩套印，右联25张黑白单色印刷并呈现油墨模糊、褪色直至消逝的过程，冷酷讽喻了大众传媒对偶像生命的工业化复制与消费消解。杜尚与曼雷为达达主义先驱，利希滕斯坦专攻连环画网点。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    "fallbackImage": "/images/artworks/shot-marilyns.jpg",
    "tags": [
      "VisualID",
      "Andy Warhol",
      "Pop Art",
      "Marilyn Diptych",
      "Silkscreen"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_045",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "postwar_contemporary",
    "questionEn": "Who exhibited thirty-two synthetic polymer paintings of Campbell's Soup Cans at the Ferus Gallery in Los Angeles in 1962?",
    "questionZh": "1962年于洛杉矶费鲁斯画廊展出由32幅对应不同汤品口味罐头组成的《金宝汤罐头》系列作品的作者是：",
    "optionsEn": [
      "Roy Lichtenstein",
      "Joan Miró",
      "Andy Warhol",
      "Salvador Dalí"
    ],
    "optionsZh": [
      "罗伊·利希滕斯坦 (Roy Lichtenstein)",
      "胡安·米罗 (Joan Miró)",
      "安迪·沃霍尔 (Andy Warhol)",
      "萨尔瓦多·达利 (Salvador Dalí)"
    ],
    "correctAnswer": 2,
    "explanationEn": "In July 1962, the Ferus Gallery in Los Angeles exhibited Andy Warhol's Campbell's Soup Cans—32 individual canvases representing each flavor sold by Campbell at the time. Displayed on narrow shelves like supermarket merchandise, the installation marked the breakthrough of American Pop Art.",
    "explanationZh": "1962年7月洛杉矶费鲁斯画廊（Ferus Gallery）展出了安迪·沃霍尔由32幅独立画布组成的《金宝汤罐头》（Campbell's Soup Cans），对应金宝汤公司当时出售的全部32种不同风味。画作如超市货架般水平排开，以机械冰冷的半手工半丝网工艺消解了传统艺术独一无二的“灵韵”，标志着美国波普艺术的重大转折。利希滕斯坦以漫画网点著称，米罗为超现实主义大师，达利为梦境形而上大师。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    "fallbackImage": "/images/artworks/campbell-soup.jpg",
    "tags": [
      "VisualID",
      "Andy Warhol",
      "Pop Art",
      "Campbells Soup"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_046",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "postwar_contemporary",
    "questionEn": "Who designed the famous peelable yellow banana cover for the 1967 album 'The Velvet Underground & Nico'?",
    "questionZh": "1967年地下丝绒乐队首张专辑封面上那根带有“Peel slowly and see”（慢慢剥开看）指示的可撕开黄色香蕉视觉设计者是：",
    "optionsEn": [
      "Roy Lichtenstein",
      "Andy Warhol",
      "Lucio Fontana",
      "Piero Manzoni"
    ],
    "optionsZh": [
      "罗伊·利希滕斯坦 (Roy Lichtenstein)",
      "安迪·沃霍尔 (Andy Warhol)",
      "卢齐欧·封塔纳 (Lucio Fontana)",
      "皮耶罗·曼佐尼 (Piero Manzoni)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Andy Warhol managed and produced The Velvet Underground in 1966-1967 and created the provocative interactive sticker album cover of a yellow banana peeling to reveal flesh-colored fruit underneath.",
    "explanationZh": "沃霍尔作为地下丝绒乐队的赞助人与经理人，亲自设计了这一极具挑衅感与互动性的波普艺术标志贴纸唱片封面。",
    "tags": [
      "VisualID",
      "Andy Warhol",
      "Pop Art",
      "Album Cover",
      "Banana"
    ],
    "difficulty": 1,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    "fallbackImage": "/images/artworks/la-banana.jpg"
  },
  {
    "id": "arched_047",
    "domain": "visual_id",
    "subCategory": "Pop Art Iconography",
    "era": "postwar_contemporary",
    "questionEn": "Which artist created the iconic 1962 Pop Art milestone 'Campbell's Soup I', silkscreening commercial grocery soup cans and aligning them like supermarket shelves to challenge the uniqueness of high art?",
    "questionZh": "1962年于洛杉矶费鲁斯画廊首次展出、将32罐超市罐头以机械丝网印刷并排陈列如货架、以此消解高雅艺术独特性神话的经典波普杰作《坎贝尔罐头汤》（Campbell's Soup I）的作者是：",
    "optionsEn": [
      "Piero Manzoni",
      "Andy Warhol",
      "Lucio Fontana",
      "Piet Mondrian"
    ],
    "optionsZh": [
      "皮耶罗·曼佐尼 (Piero Manzoni)",
      "安迪·沃霍尔 (Andy Warhol)",
      "卢齐欧·封塔纳 (Lucio Fontana)",
      "皮特·蒙德里安 (Piet Mondrian)"
    ],
    "correctAnswer": 1,
    "explanationEn": "In July 1962 at the Ferus Gallery in Los Angeles, Andy Warhol exhibited 32 canvases of Campbell's Soup I, each representing a variety offered by the company. Using commercial silkscreen printing and displaying them like grocery shelves, Warhol dismantled the boundary between mass consumer goods and elite high art.",
    "explanationZh": "1962年7月安迪·沃霍尔在洛杉矶费鲁斯画廊（Ferus Gallery）展出了32幅《坎贝尔罐头汤》（Campbell's Soup I）。他采用商业丝网印刷技术（Silkscreen），精准复制了当时坎贝尔公司供应的全部32种不同风味罐头，并像杂货店货架般并列展出，标志着消费主义大众文化正式攻占纯艺术殿堂。曼佐尼以《艺术家之粪》讽刺艺术市场，封塔纳以割破画布探索空间概念，蒙德里安为几何冷抽象大师。",
    "tags": [
      "VisualID",
      "Andy Warhol",
      "Campbell Soup",
      "Pop Art",
      "Silkscreen"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Campbells_Soup_Cans_MOMA.jpg/800px-Campbells_Soup_Cans_MOMA.jpg",
    "fallbackImage": "/images/artworks/campbell-soup.jpg"
  },
  {
    "id": "arched_048",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Who submitted a porcelain urinal titled 'Fountain' and signed 'R. Mutt 1917' to the Society of Independent Artists?",
    "questionZh": "1917年向纽约独立艺术家协会大展提交署名“R. Mutt 1917”的白色陶瓷男用小便斗《泉》（Fountain）的先锋大师是：",
    "optionsEn": [
      "Salvador Dalí",
      "Man Ray",
      "René Magritte",
      "Marcel Duchamp"
    ],
    "optionsZh": [
      "萨尔瓦多·达利 (Salvador Dalí)",
      "曼·雷 (Man Ray)",
      "雷内·马格里特 (René Magritte)",
      "马塞尔·杜尚 (Marcel Duchamp)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Marcel Duchamp overturned traditional aesthetic standards by purchasing a commercial Bedfordshire model urinal, rotating it 90 degrees, signing it 'R. Mutt 1917', and designating it as a readymade artwork.",
    "explanationZh": "马塞尔·杜尚从卫生洁具店购得标准陶瓷小便斗，将其旋转90度并以“R. Mutt 1917”签名命名为《泉》，以“现成品”（Readymade）颠覆了数百年西方传统视觉艺术定义。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Duchamp_Fountaine.jpg/800px-Duchamp_Fountaine.jpg",
    "fallbackImage": "/images/artworks/bicycle-wheel.jpg",
    "tags": [
      "VisualID",
      "Duchamp",
      "Dada",
      "Readymade",
      "Fountain"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_049",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Which scandalous proto-Cubist and Futurist painting by Marcel Duchamp caused an uproar at the 1913 New York Armory Show?",
    "questionZh": "在1913年纽约军械库博览会上引发巨大轰动与嘲讽、被评论家讽为“瓦砾厂爆炸”的杜尚动态分析名作是：",
    "optionsEn": [
      "Nude Descending a Staircase, No. 2",
      "The Bride Stripped Bare by Her Bachelors, Even",
      "Bicycle Wheel",
      "Network of Stoppages"
    ],
    "optionsZh": [
      "《下楼梯的裸女第二号》(Nude Descending a Staircase, No. 2)",
      "《大玻璃 / 甚至新娘被她的光棍们剥光了衣服》",
      "《自行车轮》",
      "《停顿的网络》"
    ],
    "correctAnswer": 0,
    "explanationEn": "Duchamp's 'Nude Descending a Staircase, No. 2' (1912) synthesized Cubist faceted analysis with chronophotographic movement lines, creating a national sensation at the 1913 Armory Show.",
    "explanationZh": "杜尚创作于1912年的《下楼梯的裸女第二号》融合了立体主义分面几何与连续摄影的动态分解，在1913年纽约军械库画展彻底震动了美国现代艺术界。",
    "tags": [
      "VisualID",
      "Duchamp",
      "Armory Show",
      "Cubism",
      "Chronophotography"
    ],
    "difficulty": 2,
    "image": "/images/artworks/nude-descending.jpg",
    "fallbackImage": "/images/artworks/nude-descending.jpg"
  },
  {
    "id": "arched_050",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Identify the author of the 1919 assisted readymade featuring a postcard reproduction of an iconic classical portrait with a penciled mustache and goatee and the title 'L.H.O.O.Q.':",
    "questionZh": "1919年在一张古典肖像名画明信片上添画八字胡与山羊胡，并在底部题写双关谐音字母“L.H.O.O.Q.”的达达主义艺术家是：",
    "optionsEn": [
      "Marcel Duchamp",
      "Umberto Boccioni",
      "René Magritte",
      "Salvador Dalí"
    ],
    "optionsZh": [
      "马塞尔·杜尚 (Marcel Duchamp)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "勒内·马格里特 (René Magritte)",
      "萨尔瓦多·达利 (Salvador Dalí)"
    ],
    "correctAnswer": 0,
    "explanationEn": "In 1919, Marcel Duchamp created the assisted readymade L.H.O.O.Q. by drawing a moustache and goatee onto a postcard reproduction of an iconic Renaissance portrait. The letters phoneticize in French as \"Elle a chaud au cul\", a scandalous pun deflating classical bourgeois reverence through iconoclastic Dada humor.",
    "explanationZh": "1919年达达主义大师马塞尔·杜尚（Marcel Duchamp）在一张彩色明信片上，用铅笔为经典贵妇肖像添画了八字胡和山羊胡，并在底部题写大写字母“L.H.O.O.Q.”（法语字母连读谐音为“Elle a chaud au cul”，意即她坐立难安/欲火中烧）。这一“辅助现成品”（Assisted Ready-made）以前卫达达的挑衅幽默彻底解构了资产阶级神圣化的古典艺术偶像。薄邱尼为未来主义领袖，马格里特与达利为超现实主义大师。",
    "tags": [
      "VisualID",
      "Duchamp",
      "Dada",
      "Readymade",
      "Conceptual"
    ],
    "difficulty": 1,
    "image": "https://upload.wikimedia.org/wikipedia/en/7/74/Marcel_Duchamp%2C_1919%2C_L.H.O.O.Q.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    "fallbackImage": "/images/artworks/lhooq.jpg"
  },
  {
    "id": "arched_051",
    "domain": "visual_id",
    "subCategory": "Sculptural Form",
    "era": "20th_avant_garde",
    "questionEn": "Which work, created in 1913 by mounting an inverted bicycle wheel onto a painted wooden kitchen stool, is recognized as Marcel Duchamp's first readymade?",
    "questionZh": "1913年将一个倒置的前自行车轮固定在白色四腿木凳上、被视为杜尚第一件“现成品”雕塑的作品是：",
    "optionsEn": [
      "Bottle Rack (Porte-bouteilles)",
      "Bicycle Wheel (Roue de bicyclette)",
      "In Advance of the Broken Arm",
      "Fresh Widow"
    ],
    "optionsZh": [
      "《瓶架》(Bottle Rack)",
      "《自行车轮》(Bicycle Wheel)",
      "《折断手臂之前》(雪铲)",
      "《新鲜的寡妇》(带黑色皮革的法式窗)"
    ],
    "correctAnswer": 1,
    "explanationEn": "In 1913, Duchamp assembled 'Bicycle Wheel' in his Paris studio to watch the wheel spin like flames in a fireplace, marking his first kinetic assemblage and assisted readymade.",
    "explanationZh": "杜尚于1913年在巴黎画室将倒置自行车车轮与厨房木凳组装成《自行车轮》，既能以手转动轮辐观赏动态虚影，又开创了辅助现成品装配艺术。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Duchamp_Bicycle_Wheel.jpg/800px-Duchamp_Bicycle_Wheel.jpg",
    "fallbackImage": "/images/artworks/bicycle-wheel.jpg",
    "tags": [
      "VisualID",
      "Duchamp",
      "Bicycle Wheel",
      "Readymade",
      "Kinetic"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_052",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Who painted 'The Song of Love' (Le chant d'amour, 1914), showing a red rubber glove, a green ball, and a Classical marble bust of the Apollo Belvedere pinned to a building wall?",
    "questionZh": "在1914年创作《爱之歌》（Le chant d'amour），将红色医用橡胶手套、绿球与古典阿波罗大理石胸像诡异并置于建筑墙面的形而上绘画大师是：",
    "optionsEn": [
      "Giorgio de Chirico",
      "Carlo Carrà",
      "Umberto Boccioni",
      "Marcel Duchamp"
    ],
    "optionsZh": [
      "乔治·德·基里科 (Giorgio de Chirico)",
      "卡洛·卡拉 (Carlo Carrà)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "马塞尔·杜尚 (Marcel Duchamp)"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Song of Love (1914) by Giorgio de Chirico is a seminal work of Metaphysical Art (Pittura Metafisica). Juxtaposing an Apollo bust, a red rubber surgical glove, a green sphere, and a distant steam train in an uncanny Italian arcade setting, it profoundly inspired René Magritte and the Surrealist movement.",
    "explanationZh": "《爱之歌》（The Song of Love / Le chant d'amour，1914）是乔治·德·基里科（Giorgio de Chirico）形而上画派（Pittura Metafisica）最具标志性的代表作之一。在文艺复兴式古典拱廊与远方冒烟火车的空旷背景前，画面突兀地悬挂了一只巨大的红色外科橡胶手套、希腊古典雕塑阿波罗大理石头像以及一个绿色圆球，通过剥离物品原有功能语境制造出超越现实的神秘梦境震颤，直接启发了后来的马格里特与超现实主义。卡拉后来加入形而上画派，薄邱尼为未来主义领袖，杜尚为达达主义先驱。",
    "tags": [
      "VisualID",
      "De Chirico",
      "Pittura Metafisica",
      "Song of Love"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Carlo_Carr%C3%A0_1920s.jpg/800px-Carlo_Carr%C3%A0_1920s.jpg",
    "fallbackImage": "/images/artworks/song-of-love.jpg"
  },
  {
    "id": "arched_053",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Which famous metaphysical painting by Giorgio de Chirico depicts mannequin figures with tailored dressmaker heads standing in a silent Italian piazza overlooking the Castello Estense in Ferrara?",
    "questionZh": "基里科哪幅代表作描绘了静穆空旷的费拉拉埃斯滕塞城堡广场上、伫立着无面目裁缝人偶假人与色彩神秘标尺的场景？",
    "optionsEn": [
      "The Song of Love",
      "The Mystery and Melancholy of a Street",
      "Great Metaphysical Interior",
      "The Disquieting Muses (Le Muse inquietanti)"
    ],
    "optionsZh": [
      "《爱之歌》(The Song of Love)",
      "《一条街的神秘与忧郁》(The Mystery and Melancholy of a Street)",
      "《大形而上室内》(Great Metaphysical Interior)",
      "《不安的缪斯》(The Disquieting Muses / Le Muse inquietanti)"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Disquieting Muses (1917-1918) was painted by Giorgio de Chirico in Ferrara. In front of the Castello Estense on a raked wooden-board piazza, headless mannequins and draped statues stand alongside colorful drafting tools and boxes, creating an enigmatic aura of petrified time.",
    "explanationZh": "《不安的缪斯》（The Disquieting Muses，1917-1918）是基里科在费拉拉期间创作的形而上画派巅峰。画面以费拉拉埃斯滕塞城堡（Castello Estense）为深沉背景，在红砖舞台般的空旷地面上，伫立着两具没有面目的古典缝纫假人缪斯，地面散落着神秘的彩色测量三角尺与铁皮罐头，营造出凝滞永恒、令人不安的哲学静穆感。其余选项均为基里科收录于平台的正统传世名作。",
    "tags": [
      "VisualID",
      "De Chirico",
      "Pittura Metafisica",
      "Disquieting Muses"
    ],
    "difficulty": 2,
    "image": "/images/artworks/disquieting-muses.jpg",
    "fallbackImage": "/images/artworks/disquieting-muses.jpg"
  },
  {
    "id": "arched_054",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1914",
    "questionZh": "下图中展示的这幅形而上画派奠基杰作描绘了一条空旷街道与阴影，右侧矗立着希腊式古典拱廊与一座纪念碑，一位滚动铁环的小女孩正奔向黑色深影，这幅画作是：",
    "questionEn": "Reproduced below is a foundational masterpiece of Metaphysical Art depicting a deserted street with arcade shadows and a silhouette of a girl rolling a hoop toward darkness. What is the title of this work?",
    "optionsZh": [
      "《一条街的神秘与忧郁》(The Mystery and Melancholy of a Street)",
      "《爱之歌》(The Song of Love)",
      "《时间之谜》(The Enigma of the Hour)",
      "《不安的缪斯》(The Disquieting Muses)"
    ],
    "optionsEn": [
      "The Mystery and Melancholy of a Street",
      "The Song of Love",
      "The Enigma of the Hour",
      "The Disquieting Muses"
    ],
    "correctAnswer": 0,
    "explanationZh": "此画为乔治·德·基里科于1914年创作的形而上画派巅峰代表作《一条街的神秘与忧郁》（The Mystery and Melancholy of a Street）。画面以双重视角透视营造出非现实的梦魇张力：左侧强烈的午后烈日照耀着白色拱廊，右侧深沉阴影下投射出一尊不可见的古典雕像暗影，中央奔跑的女孩滚着铁圈，充满尼采式的孤寂预兆与时间静止感。",
    "explanationEn": "This painting is The Mystery and Melancholy of a Street (1914) by Giorgio de Chirico. Using dual conflicting perspective vanishing points, sharp slanting shadows, a hollow freight car, and a girl rolling a hoop toward an unseen statue's silhouette, it evokes an ominous poetic stillness.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Mystery_and_Melancholy_of_a_Street.jpg/800px-Mystery_and_Melancholy_of_a_Street.jpg",
    "fallbackImage": "/images/artworks/mystery-melancholy-street.jpg",
    "tags": [
      "VisualID",
      "Metaphysics",
      "DeChirico",
      "Painting"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_055",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Who painted the surrealist masterpiece 'The Persistence of Memory' (1931), featuring limp, melting pocket watches draped over a barren branch and an organic monster on the Catalan coast?",
    "questionZh": "在1931年创作超现实主义经典名作《记忆的永恒》（软表），以瘫软熔化的怀表搭挂在枯枝、石台与异化面部生物之上的大师是：",
    "optionsEn": [
      "Salvador Dalí",
      "René Magritte",
      "Marc Chagall",
      "Joan Miró"
    ],
    "optionsZh": [
      "萨尔瓦多·达利 (Salvador Dalí)",
      "雷内·马格里特 (René Magritte)",
      "马克·夏加尔 (Marc Chagall)",
      "胡安·米罗 (Joan Miró)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Salvador Dalí painted 'The Persistence of Memory' in 1931 based on his paranoiac-critical method, famously inspired by the softness of Camembert cheese melting in the sun against the cliffs of Port Lligat.",
    "explanationZh": "萨尔瓦多·达利于1931年采用其“偏执狂批判法”创作《记忆的永恒》，以卡达克斯海岸悬崖为背景，将机械精准的钟表异化为如同卡芒贝尔奶酪般融软变形，反思时间的相对性与消亡。",
    "tags": [
      "VisualID",
      "Salvador Dali",
      "Surrealism",
      "Persistence of Memory"
    ],
    "difficulty": 1,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/The_Persistence_of_Memory_Dali.jpg/800px-The_Persistence_of_Memory_Dali.jpg",
    "fallbackImage": "/images/artworks/persistence-of-memory.jpg"
  },
  {
    "id": "arched_056",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1929",
    "questionZh": "下图中展示的这幅超现实主义杰作以细腻逼真的古典笔法描绘了一只金黄透明的烟斗，并在其下方工整书写了法文语句“Ceci n'est pas une pipe”（这不是一支烟斗），该画作是：",
    "questionEn": "The iconic Surrealist painting below features an exquisitely rendered tobacco pipe above the neat French script \"Ceci n'est pas une pipe\". What is this masterwork?",
    "optionsZh": [
      "萨尔瓦多·达利《记忆的永恒》",
      "勒内·马格里特《形象的叛逆》(The Treachery of Images)",
      "马塞尔·杜尚《新娘甚至被光棍们剥光了衣服》",
      "胡安·米罗《加泰罗尼亚景观》"
    ],
    "optionsEn": [
      "Salvador Dalí's The Persistence of Memory",
      "René Magritte's The Treachery of Images (Ceci n'est pas une pipe)",
      "Marcel Duchamp's The Bride Stripped Bare by Her Bachelors, Even",
      "Joan Miró's Catalan Landscape"
    ],
    "correctAnswer": 1,
    "explanationZh": "此画为比利时超现实主义宗师勒内·马格里特于1929年创作的著名哲学名作《形象的叛逆》（La trahison des images / The Treachery of Images）。马格里特以冷静客观的商业插画风格画出一支逼真烟斗，却通过下方的题字指明：这仅仅是一幅油画图像（符号），绝非真实可以装填烟草点燃抽吸的物理实体烟斗，从而深刻揭示了语言、图像与物理现实之间的裂痕。",
    "explanationEn": "This work is The Treachery of Images (1929) by René Magritte. By pairing a meticulously rendered pipe with the contradiction \"Ceci n'est pas une pipe\", Magritte exposed the fundamental gap between an object, its visual representation, and its linguistic label.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/MagrittePipe.jpg/800px-MagrittePipe.jpg",
    "fallbackImage": "/images/artworks/treachery-of-images.jpg",
    "tags": [
      "VisualID",
      "Surrealism",
      "Magritte",
      "Semiotics"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_057",
    "domain": "visual_id",
    "subCategory": "Surrealist Iconography",
    "era": "20th_avant_garde",
    "questionEn": "Who painted the seminal surrealist masterpiece 'The Great Masturbator' (1929) shown below, featuring a colossal, pale, sleeping anthropomorphic rock head plagued by a giant grasshopper and swarming ants on the Catalan coast?",
    "questionZh": "下图中展示的以荒漠海岸为背景，中央呈现一个巨大苍白如岩石般闭目的异化侧面人头，下方附着一只象征恐惧的巨型蝗虫与腹部聚集蚂蚁的超现实主义代表作《伟大的手淫者》（The Great Masturbator）的作者是：",
    "optionsEn": [
      "Man Ray",
      "René Magritte",
      "Alberto Giacometti",
      "Salvador Dalí"
    ],
    "optionsZh": [
      "曼·雷 (Man Ray)",
      "雷内·马格里特 (René Magritte)",
      "阿尔贝托·贾科梅蒂 (Alberto Giacometti)",
      "萨尔瓦多·达利 (Salvador Dalí)"
    ],
    "correctAnswer": 3,
    "explanationEn": "'The Great Masturbator' (1929) is Salvador Dalí's psychological masterpiece exploring his deepest obsessions and phobias. The central morphing head combines a self-portrait with the rocks of Cape Creus, besieged by a grasshopper and ants symbolizing decay and sexual anxiety.",
    "explanationZh": "《伟大的手淫者》（The Great Masturbator，1929）是萨尔瓦多·达利（Salvador Dalí）超现实主义时期的核心自传性代表作。画中央巨大苍白的闭目侧脸被视为达利自画像与克雷乌斯角悬崖岩石的混合形态，附着的巨型蝗虫与蚂蚁象征着对死亡、腐朽及性焦虑的潜意识恐惧。曼·雷、马格里特与贾科梅蒂均为同侪先锋，但形式与探索各异。",
    "tags": [
      "VisualID",
      "Salvador Dalí",
      "Surrealism",
      "The Great Masturbator"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/The_Great_Masturbator.jpg/800px-The_Great_Masturbator.jpg",
    "fallbackImage": "/images/artworks/great-masturbator.jpg"
  },
  {
    "id": "arched_058",
    "domain": "visual_id",
    "subCategory": "Sculptural Form",
    "era": "postwar_contemporary",
    "questionEn": "Which Swiss-Italian sculptor created the iconic emaciated bronze figure 'Walking Man I' (L'Homme qui marche I, 1960)?",
    "questionZh": "创作于1960年、以极度消瘦修长、斑驳粗糙的青铜躯体坚定迈步向前、象征战后人类存在主义孤绝与坚韧的雕塑名作《行走的人I》作者是：",
    "optionsEn": [
      "Alberto Giacometti",
      "Umberto Boccioni",
      "Lucio Fontana",
      "Man Ray"
    ],
    "optionsZh": [
      "阿尔贝托·贾科梅蒂 (Alberto Giacometti)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "卢齐欧·封塔纳 (Lucio Fontana)",
      "曼·雷 (Man Ray)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Walking Man I (L'Homme qui marche I, 1960) by Alberto Giacometti is a bronze triumph of post-war existentialism. Reduced to an eroded, skeletal armature yet stepping decisively forward on an oversized base, the figure embodies human isolation, fragility, and perseverance.",
    "explanationZh": "《行走的人I》（L'Homme qui marche I，1960）是瑞士超现实主义与战后存在主义雕塑大师阿尔贝托·贾科梅蒂（Alberto Giacometti）的传世巅峰。雕塑高达183厘米，人像躯体被剥蚀消减至极致的纤细与斑驳粗粝，双足如沉重铅块锚定于地面但仍坚毅大步迈向前方，被萨特等哲学家誉为战后人类在虚无荒诞世界中孤绝求索、尊严不屈的精神丰碑。薄邱尼塑造了空气撕裂的未来主义躯体，封塔纳开创了空间主义划痕，曼雷开创了达达物影摄影。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Alberto_Giacometti_1960.jpg/800px-Alberto_Giacometti_1960.jpg",
    "fallbackImage": "/images/artworks/walking-man-i.jpg",
    "tags": [
      "VisualID",
      "Giacometti",
      "Sculpture",
      "Existentialism",
      "Walking Man"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_059",
    "domain": "visual_id",
    "subCategory": "Sculptural Form",
    "era": "20th_avant_garde",
    "questionEn": "Identify the 1932 surrealist wood, wire, and glass construction 'The Palace at 4 a.m.' created by:",
    "questionZh": "1932年以木条、琴弦线条与玻璃搭建骨架宫殿，内部悬浮着骨骼脊椎与异化飞鸟的超现实主义装置《清晨四点的宫殿》作者是：",
    "optionsEn": [
      "Joan Miró",
      "Umberto Boccioni",
      "Salvador Dalí",
      "Alberto Giacometti"
    ],
    "optionsZh": [
      "胡安·米罗 (Joan Miró)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "萨尔瓦多·达利 (Salvador Dalí)",
      "阿尔贝托·贾科梅蒂 (Alberto Giacometti)"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Palace at 4 a.m. (1932) is Alberto Giacometti's Surrealist construction in wood, glass, wire, and string. Evoking an architectural scaffolded nightmare, it frames suspended skeletal vertebrae, a flying pterodactyl, and a female figurine representing lost love.",
    "explanationZh": "《凌晨四点的宫殿》（The Palace at 4 a.m.，1932）是贾科梅蒂超现实主义“笼子”（Cage）时期的精湛木质装置代表作。他用精细木条构筑出通透微型的三维框架宫殿，内部悬挂着脆弱的飞鸟骨骼、脊椎、吉他残骸以及象征脆弱易逝之爱的女性躯干，完美将超现实主义无意识梦境转化为三维建筑空间。米罗专注于具象变形绘画，薄邱尼追求未来派速度雕塑，达利擅长偏执批判写实。",
    "tags": [
      "VisualID",
      "Giacometti",
      "Surrealism",
      "Palace at 4am"
    ],
    "difficulty": 2,
    "image": "/images/artworks/walking-man-i.jpg",
    "fallbackImage": "/images/artworks/walking-man-i.jpg"
  },
  {
    "id": "arched_060",
    "domain": "visual_id",
    "subCategory": "Spatial & Material Art",
    "era": "postwar_contemporary",
    "questionEn": "Who is the Milanese founder of Spatialism celebrated for slashing monochromatic canvases in the series 'Concetto spaziale, Attese'?",
    "questionZh": "创立“空间主义”（Spatialism）运动、以利刃划破单色平整画布创作《空间概念·期待》（Attese）割痕系列的艺术家是：",
    "optionsEn": [
      "Piero Manzoni",
      "Paul Jackson Pollock",
      "Lucio Fontana",
      "Roy Lichtenstein"
    ],
    "optionsZh": [
      "皮耶罗·曼佐尼 (Piero Manzoni)",
      "保罗·杰克逊·波洛克 (Paul Jackson Pollock)",
      "卢齐欧·封塔纳 (Lucio Fontana)",
      "罗伊·利希滕斯坦 (Roy Lichtenstein)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Lucio Fontana founded Spatialism in Milan in 1947. In his 'Tagli' (slashes) series begun in 1958, he sliced through pristine canvases with a stanley blade, penetrating the 2D surface to reveal real physical infinite space behind it.",
    "explanationZh": "意大利先锋大师卢齐欧·封塔纳于1947年在米兰发起空间主义，1958年起以锋利刀片划破纯色亚麻布（Tagli），穿透二维绘画表层将真实的三维物理空间引入艺术体验。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lucio_Fontana_1960.jpg/800px-Lucio_Fontana_1960.jpg",
    "fallbackImage": "/images/artworks/concetto-spaziale-slashes.jpg",
    "tags": [
      "VisualID",
      "Fontana",
      "Spatialism",
      "Attese",
      "Italian Postwar"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_061",
    "domain": "visual_id",
    "subCategory": "Spatial & Material Art",
    "era": "postwar_contemporary",
    "questionEn": "What was the technique used by Lucio Fontana in his 'Buchi' series begun in 1949?",
    "questionZh": "卢齐欧·封塔纳在1949年率先开创的《空间概念》（Buchi）系列主要采用了哪种突破画面的破坏性手法？",
    "optionsEn": [
      "Burning holes into burlap sacks with a welding blowtorch",
      "Puncturing the canvas with spiral patterns of rough holes",
      "Stitching torn sailcloth with coarse black thread",
      "Dripping molten lead across raw wooden panels"
    ],
    "optionsZh": [
      "用喷火枪在粗麻布袋上烧灼焦黑破洞",
      "用锥子与粗针在画布表面穿凿孔洞与星丛漩涡 (Buchi / Punctures)",
      "用黑色粗线缝合破损的帆布碎片",
      "将熔化的铅水浇筑在原木板上"
    ],
    "correctAnswer": 1,
    "explanationEn": "In 1949, Fontana launched his 'Buchi' (holes) series by perforating the canvas surface with an awl, allowing real light and shadow to circulate through the painting.",
    "explanationZh": "封塔纳于1949年创作最初的《空间概念》“孔洞”（Buchi）系列，用尖锥刺透画布留下粗糙突起的破孔阵列，让光线穿透画布开创宇宙与空间维度。",
    "tags": [
      "VisualID",
      "Fontana",
      "Spatialism",
      "Buchi"
    ],
    "difficulty": 2,
    "image": "/images/artworks/concetto-spaziale-punctures.jpg",
    "fallbackImage": "/images/artworks/concetto-spaziale-punctures.jpg"
  },
  {
    "id": "arched_062",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1958",
    "questionZh": "下图中展示的这幅以单色极简平整布面为基础、表面被艺术家以利刃纵向划出数道锐利划痕的突破性当代艺术杰作属于哪个系列？",
    "questionEn": "Reproduced below is a monochrome canvas sliced with precise vertical cuts opening the canvas into three-dimensional space. To which celebrated series by Lucio Fontana does it belong?",
    "optionsZh": [
      "《空间概念·等待》(Concetto spaziale, Attese)",
      "《空间概念·穿孔》(Concetto spaziale, Buchi)",
      "《新造型主义构图》(Composition with Red, Blue, and Yellow)",
      "《无色彩》(Achrome)"
    ],
    "optionsEn": [
      "Spatial Concept 'Waiting' (Concetto spaziale, Attese)",
      "Spatial Concept (Holes) (Concetto spaziale, Buchi)",
      "Composition with Red, Blue, and Yellow",
      "Achrome"
    ],
    "correctAnswer": 0,
    "explanationZh": "此作属于意大利空间主义（Spatialism）创始人卢齐欧·封塔纳（Lucio Fontana）最著名的《空间概念·等待》（Concetto spaziale, Attese，1958年起）割破画系列。封塔纳以剃刀利刃精准割裂绷紧的纯色帆布，背面衬以黑色纱布（telina），打破了画布千百年来作为二维平面幻觉载体的桎梏，使光线与真实物理空间穿透而入，成为战后当代艺术的最高里程碑之一。",
    "explanationEn": "This work belongs to Lucio Fontana's seminal series Spatial Concept 'Waiting' (Concetto spaziale, Attese, begun 1958). By slicing monochrome canvases with a razor and backing them with black gauze, Fontana transcended the illusionistic 2D picture plane, introducing real physical space and light into painting.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Fontana_spatial_concept_waiting.jpg/800px-Fontana_spatial_concept_waiting.jpg",
    "fallbackImage": "/images/artworks/concetto-spaziale-slashes.jpg",
    "tags": [
      "VisualID",
      "ContemporaryArt",
      "Spatialism",
      "Fontana"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_063",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1961",
    "questionZh": "下图中展示的以90只密封马口铁罐头并以四国语言标明“每罐30克净重、按当日等重黄金价格出售”的激进观念艺术杰作《艺术家之粪》（Merda d'artista），其作者是：",
    "questionEn": "Reproduced below is the iconic conceptual work \"Artist's Shit\" (Merda d'artista, 1961), consisting of 90 sealed tin cans labeled in four languages and pegged to the price of gold. Who is the Italian artist?",
    "optionsZh": [
      "卢齐欧·封塔纳 (Lucio Fontana)",
      "皮耶罗·曼佐尼 (Piero Manzoni)",
      "翁贝托·波丘尼 (Umberto Boccioni)",
      "卡洛·卡拉 (Carlo Carrà)"
    ],
    "optionsEn": [
      "Lucio Fontana",
      "Piero Manzoni",
      "Umberto Boccioni",
      "Carlo Carrà"
    ],
    "correctAnswer": 1,
    "explanationZh": "《艺术家之粪》（Merda d'artista，1961）是意大利观念艺术先锋皮耶罗·曼佐尼（Piero Manzoni）最著名、最具挑衅性的作品。曼佐尼生产了90个标有编号与签名的马口铁罐头，将其按等重黄金售价出售，辛辣讽刺并解构了战后艺术品消费市场对“艺术家亲手签名即生黄金”的盲目狂热与拜物教。",
    "explanationEn": "Artist's Shit (Merda d'artista, 1961) is Piero Manzoni's most famous satirical readymade critique of the postwar art market. By packaging 90 numbered and signed tin cans sold for their exact weight in gold (30 grams), Manzoni laid bare the fetishization of the artist's brand.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Piero_Manzoni_Artist%27s_Shit.jpg/800px-Piero_Manzoni_Artist%27s_Shit.jpg",
    "fallbackImage": "/images/artworks/artists-shit.jpg",
    "tags": [
      "VisualID",
      "ContemporaryArt",
      "Manzoni",
      "ConceptualArt"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_064",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1921",
    "questionZh": "下图中展示的由先锋摄影家曼·雷拍摄其情人吉吉（Kiki）背影裸照、并在背部两侧用墨水精心手绘了两个大提琴/小提琴f形音孔、将人体巧妙异化为发声乐器的达达与超现实主义名作是：",
    "questionEn": "The iconic 1924 Dada/Surrealist photograph below, featuring the bare back of Kiki de Montparnasse transformed into a musical instrument by painting two violin f-holes onto her skin, is:",
    "optionsZh": [
      "马塞尔·杜尚《自行车轮》",
      "马塞尔·杜尚《泉》",
      "曼·雷《安格尔的小提琴》(Ingres's Violin)",
      "萨尔瓦多·达利《记忆的永恒》"
    ],
    "optionsEn": [
      "Marcel Duchamp's Bicycle Wheel",
      "Marcel Duchamp's Fountain",
      "Man Ray's Ingres's Violin (Le Violon d'Ingres)",
      "Salvador Dalí's The Persistence of Memory"
    ],
    "correctAnswer": 2,
    "explanationZh": "此作为先锋摄影与达达主义艺术家曼·雷（Man Ray）于1924年在巴黎创作的摄影杰作《安格尔的小提琴》（Le Violon d'Ingres）。他拍摄了情人基基·德·蒙帕纳斯（Kiki de Montparnasse）优雅的裸背，并用印度墨汁在照片背部画上两个大提琴/小提琴f形音孔，化用了法国新古典主义画派大师安格尔酷爱拉小提琴的典故（法语'violon d'Ingres'指业余爱好），将女性躯体转化为现成乐器符号，兼具达达主义的智性机锋与超现实主义的诗意隐喻。",
    "explanationEn": "This iconic photograph is 'Le Violon d'Ingres' (1924) by Man Ray. Featuring model Kiki de Montparnasse with violin f-holes painted onto her photographic print, it visualizes the French idiom 'violon d'Ingres' (a passionate hobby, referencing painter Ingres's violin playing) while subverting classical nude conventions into a surreal bodily instrument.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Man_Ray_Le_Violon_d%27Ingres.jpg/800px-Man_Ray_Le_Violon_d%27Ingres.jpg",
    "fallbackImage": "/images/artworks/violon-dingres.jpg",
    "tags": [
      "VisualID",
      "Dadaism",
      "Surrealism",
      "ManRay",
      "ViolonDIngres"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_065",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1924",
    "questionZh": "下图中展示的这幅黑白摄影杰作将法国女模基基（Kiki de Montparnasse）光洁优雅的裸背转化为一把大提琴，并在背部腰间两侧暗房套印了两个黑色的乐器音孔（F孔），该作品是：",
    "questionEn": "The famous photographic masterpiece below, transforming the bare back of model Kiki de Montparnasse into a stringed musical instrument with two dark f-holes, is titled:",
    "optionsZh": [
      "曼·雷《黑与白》",
      "马塞尔·杜尚《下楼梯的裸女》",
      "雷内·马格里特《错误的镜子》",
      "曼·雷《安格尔的小提琴》(Le Violon d'Ingres)"
    ],
    "optionsEn": [
      "Man Ray's Black and White",
      "Marcel Duchamp's Nude Descending a Staircase",
      "René Magritte's The False Mirror",
      "Man Ray's Ingres's Violin (Le Violon d'Ingres)"
    ],
    "correctAnswer": 3,
    "explanationZh": "此照片为曼·雷于1924年发表于《超现实主义革命》创刊号上的传世名作《安格尔的小提琴》（Le Violon d'Ingres）。曼·雷向新古典主义画圣安格尔的名画《瓦平松浴女》致敬，同时巧妙借用法国成语“安格尔的小提琴”（意指专业之外的热爱或癖好），将女性温润躯体与弦乐器曲线幽默融为一体。",
    "explanationEn": "This photograph is Ingres's Violin (Le Violon d'Ingres, 1924) by Man Ray. Portraying his muse Kiki de Montparnasse with painted f-holes on her back, the work pays homage to J.A.D. Ingres's Valpinçon Bather while punning on the French idiom for an artist's passionate hobby.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Man_Ray_Le_Violon_d%27Ingres.jpg/800px-Man_Ray_Le_Violon_d%27Ingres.jpg",
    "fallbackImage": "/images/artworks/violon-dingres.jpg",
    "tags": [
      "VisualID",
      "Dadaism",
      "Surrealism",
      "ManRay",
      "Photography"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_066",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1962",
    "questionZh": "下图中展示的以重复排列的112瓶绿色可口可乐玻璃玻璃瓶构成的标志性波普艺术画作《绿色可口可乐瓶》（Green Coca-Cola Bottles）的作者是：",
    "questionEn": "Who is the Pop artist who silkscreened the repetitive grid of 112 mass-produced soda bottles in Green Coca-Cola Bottles (1962), shown below?",
    "optionsZh": [
      "安迪·沃霍尔 (Andy Warhol)",
      "罗伊·利希滕斯坦 (Roy Lichtenstein)",
      "皮特·蒙德里安 (Piet Mondrian)",
      "杰克逊·波洛克 (Jackson Pollock)"
    ],
    "optionsEn": [
      "Andy Warhol",
      "Roy Lichtenstein",
      "Piet Mondrian",
      "Jackson Pollock"
    ],
    "correctAnswer": 0,
    "explanationZh": "《绿色可口可乐瓶》（Green Coca-Cola Bottles，1962）是安迪·沃霍尔的波普艺术代表作。画面整齐排布着七行、每行十六只共112只重复印制的绿色可口可乐玻璃瓶。沃霍尔曾指出：“可口可乐最美妙的地方在于，不管是总统还是乞丐，买到的可乐味道都完全一样。”作品通过机械丝网版画的微瑕复制，歌颂并反思了美国战后平民消费主义的民主化与标准化神话。",
    "explanationEn": "Green Coca-Cola Bottles (1962) was created by Andy Warhol using repetitive silkscreen printing. Arranging 112 bottles across seven rows, Warhol celebrated the absolute standardization of American consumer democracy—where the richest and poorest consumers drink the exact same soda.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Green_Coca_Cola_Bottles.jpg/800px-Green_Coca_Cola_Bottles.jpg",
    "fallbackImage": "/images/artworks/coca-cola.jpg",
    "tags": [
      "VisualID",
      "PopArt",
      "Warhol"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_067",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1963",
    "questionZh": "下图中展示的截取通俗爱情漫画分镜特写、以粗黑轮廓线、戏剧化对话气泡与大面积手工本戴网点（Ben-Day dots）呈现伤感通俗剧风格的经典波普画作《少女浪漫连环画》（Girls' Romances）的作者是：",
    "questionEn": "Who painted the classic 1960s Pop Art piece 'Girls' Romances' shown below, appropriating comic-strip romance panels with thick black contours, melodrama, and mechanical Ben-Day dots?",
    "optionsZh": [
      "安迪·沃霍尔 (Andy Warhol)",
      "罗伊·利希滕斯坦 (Roy Lichtenstein)",
      "萨尔瓦多·达利 (Salvador Dalí)",
      "雷内·马格里特 (René Magritte)"
    ],
    "optionsEn": [
      "Andy Warhol",
      "Roy Lichtenstein",
      "Salvador Dalí",
      "René Magritte"
    ],
    "correctAnswer": 1,
    "explanationZh": "《少女浪漫连环画》（Girls' Romances）是罗伊·利希滕斯坦（Roy Lichtenstein）成熟期最具代表性的波普艺术杰作之一。画面直接截取自大众流行爱情漫画分镜，利希滕斯坦以冷漠理性的机械复制手法，手工摹绘出商业印刷所特有的本戴网点（Ben-Day dots）、粗黑轮廓线条与刺目的原色平涂，将通俗大众文化中的煽情戏剧性升华并凝固为具有批判反思意识的现代艺术图标。沃霍尔以丝网版画著称，达利与马格里特为超现实主义大师。",
    "explanationEn": "'Girls' Romances' is a quintessential Pop Art masterpiece by Roy Lichtenstein. Appropriating melodramatic panels from romance comic books, Lichtenstein hand-stenciled thousands of Ben-Day dots, heavy black contours, and primary color blocks, coolly transfiguring mass-produced commercial melodrama into a monumental museum icon.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Roy_Lichtenstein_Girls_Romances.jpg/800px-Roy_Lichtenstein_Girls_Romances.jpg",
    "fallbackImage": "/images/artworks/girls-romances.jpg",
    "tags": [
      "VisualID",
      "PopArt",
      "Lichtenstein",
      "BenDayDots"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_068",
    "domain": "visual_id",
    "subCategory": "Spatial & Material Art",
    "era": "postwar_contemporary",
    "questionEn": "Who created ninety numbered tin cans containing 30 grams of the artist's feces titled 'Artist's Shit' (Merda d'artista, 1961), originally priced equivalent to their weight in pure 18k gold?",
    "questionZh": "1961年将30克人体排泄物密封于90个带有四种语言标签的马口铁罐头中、按等重纯金价值出售的激进意大利观念大师是：",
    "optionsEn": [
      "Lucio Fontana",
      "Piero Manzoni",
      "Paul Jackson Pollock",
      "Roy Lichtenstein"
    ],
    "optionsZh": [
      "卢齐欧·封塔纳 (Lucio Fontana)",
      "皮耶罗·曼佐尼 (Piero Manzoni)",
      "保罗·杰克逊·波洛克 (Paul Jackson Pollock)",
      "罗伊·利希滕斯坦 (Roy Lichtenstein)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Piero Manzoni produced 'Merda d'artista' in May 1961 as an extreme parody of capitalist artistic commodity value, authenticating 90 sealed tin cans with his signature and fingerprint.",
    "explanationZh": "皮耶罗·曼佐尼于1961年创作《艺术家的粪便》（Merda d'artista），以90个密封铁罐严格对应当时黄金牌价出售，对资本主义商业社会中只要带有艺术签名即可点石成金的荒诞机制进行极尽嘲讽。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Piero_Manzoni_Merda_d%27artista.jpg/800px-Piero_Manzoni_Merda_d%27artista.jpg",
    "fallbackImage": "/images/artworks/artists-shit.jpg",
    "tags": [
      "VisualID",
      "Piero Manzoni",
      "Conceptual Art",
      "Merda d artista"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_069",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "11th Century",
    "questionZh": "下图中展示的位于米兰历史中心、具有典型中世纪开敞式列柱中庭（四柱廊Atrium）、双钟楼以及西立面宏伟双层拱廊的伦巴第罗曼式建筑最高杰作是：",
    "questionEn": "The landmark Romanesque church in Milan below, featuring an expansive arcaded quadriporticus atrium, twin campaniles, and a gabled western facade with open galleries, is:",
    "optionsZh": [
      "帕尔马洗礼堂 (Baptistery of Parma)",
      "比萨主教座堂奇迹广场 (Piazza dei Miracoli, Pisa)",
      "米兰圣安布罗焦圣殿 (Basilica di Sant'Ambrogio, Milan)",
      "兰斯圣雷米圣殿 (Basilica of Saint-Remi, Reims)"
    ],
    "optionsEn": [
      "Baptistery of Parma",
      "Piazza dei Miracoli, Pisa",
      "Basilica di Sant'Ambrogio, Milan",
      "Basilica of Saint-Remi, Reims"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为米兰圣安布罗焦圣殿（Basilica di Sant'Ambrogio）。作为伦巴第罗曼式建筑（Lombard Romanesque）的最纯正典范，圣殿保留了早期基督教的四面柱廊中庭（Quadriporticus），西立面呈现低矮山墙与上下两层开敞式五联半圆拱廊，内部采用双开间交叉拱顶与粗实束柱，构成了中世纪北意大利宗教与公民生活的精神圣地。",
    "explanationEn": "This monument is the Basilica of Sant'Ambrogio in Milan. The canonical masterpiece of Lombard Romanesque architecture, it features a complete quadriporticus atrium, brick blind arcades, a low-slung gabled double-tiered narthex loggia, and monumental groin-vaulted bays.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Milano_-_Sant%27Ambrogio_-_Cortile.jpg/800px-Milano_-_Sant%27Ambrogio_-_Cortile.jpg",
    "fallbackImage": "/images/artworks/sant-ambrogio.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Romanesque",
      "Milan",
      "SantAmbrogio"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_070",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1196 - 1270",
    "questionZh": "下图中展示的由雕塑建筑大师贝内代托·安泰拉米（Benedetto Antelami）设计、立面由四层开敞式盲拱廊环绕且通体采用粉红色维罗纳大理石砌筑的著名中世纪独立洗礼堂是：",
    "questionEn": "The monumental freestanding octagonal Romanesque-Gothic baptistery below, encased in pink Verona marble with four tiers of open architraved loggias designed by Benedetto Antelami, is:",
    "optionsZh": [
      "佛罗伦萨圣若望洗礼堂 (Battistero di San Giovanni)",
      "比萨奇迹广场洗礼堂 (Battistero di Pisa)",
      "锡耶纳大教堂洗礼堂 (Battistero di San Giovanni, Siena)",
      "帕尔马洗礼堂 (Baptistery of Parma / Battistero di Parma)"
    ],
    "optionsEn": [
      "Florence Baptistery",
      "Pisa Baptistery",
      "Siena Baptistery",
      "Baptistery of Parma (Battistero di Parma)"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为建于1196至1270年间的帕尔马洗礼堂（Baptistery of Parma）。由伦巴第雕塑与建筑大师贝内代托·安泰拉米主持营建，建筑呈八角形，外墙通体采用粉红色的维罗纳大理石砌筑，底部三座入口雕刻繁复生动的中世纪浮雕，上方连续排布四层开敞式平梁双联柱外柱廊，内部穹顶饰有绚丽的十三世纪拜占庭风格湿壁画，是罗曼式向早期哥特式过渡的绝世经典。",
    "explanationEn": "This structure is the Baptistery of Parma (1196–1270) designed by Benedetto Antelami. Constructed of pink Verona marble, its octagonal exterior features four open lintelled galleries of colonnettes beneath a Gothic arched top storey and blind arcading.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Battistero_di_Parma_esterno.jpg/800px-Battistero_di_Parma_esterno.jpg",
    "fallbackImage": "/images/artworks/baptistery-parma.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Romanesque",
      "Parma",
      "Baptistery"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_071",
    "domain": "visual_id",
    "subCategory": "Sculptural Form",
    "era": "20th_avant_garde",
    "questionEn": "Which Italian Futurist master created the dynamic 1913 bronze sculpture 'Unique Forms of Continuity in Space', featuring a striding, flame-winged humanoid figure depicted on the Italian 20-cent euro coin?",
    "questionZh": "被印在意大利20欧分硬币背面、塑造了一尊肌肉如火焰撕裂气流破空迈步前行的人形青铜雕塑《空间中连续性的唯一形体》（1913）作者是：",
    "optionsEn": [
      "Carlo Carrà",
      "Giorgio de Chirico",
      "Marcel Duchamp",
      "Umberto Boccioni"
    ],
    "optionsZh": [
      "卡洛·卡拉 (Carlo Carrà)",
      "乔治·德·基里科 (Giorgio de Chirico)",
      "马塞尔·杜尚 (Marcel Duchamp)",
      "翁贝托·薄邱尼 (Umberto Boccioni)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Featured on the Italian 20-cent euro coin, Unique Forms of Continuity in Space (1913) by Umberto Boccioni translates the aerodynamic forces of human striding into fluidly deformed bronze volumes, epitomizing the Futurist doctrine of plastic dynamism.",
    "explanationZh": "印在意大利20欧分硬币背面的国宝级雕塑是翁贝托·薄邱尼（Umberto Boccioni）于1913年创作的《空间中连续性的唯一形体》（Unique Forms of Continuity in Space）。薄邱尼摒弃了古典写实人体的静态解剖边界，将人体迈步时切裂空气的气流动力学轨迹与肌肉运动直接固化为流动舒展的青铜雕塑体量，是未来主义“速度、力量与可塑性连续”理论的最完美化身。卡拉、基里科、杜尚均为二十世纪先锋派大师。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Umberto_Boccioni_1913_Unique_Forms_of_Continuity_in_Space.jpg/800px-Umberto_Boccioni_1913_Unique_Forms_of_Continuity_in_Space.jpg",
    "fallbackImage": "/images/artworks/unique-forms.jpg",
    "tags": [
      "VisualID",
      "Boccioni",
      "Futurism",
      "Unique Forms",
      "Sculpture"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_072",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Who painted 'The City Rises' (La città che sale, 1910), capturing the frenetic urban modernization of Milan through monumental galloping draft horses, scaffolding, and swirling Divisionist light?",
    "questionZh": "在1910年创作《上升的城市》（La città che sale），以狂暴飞奔的巨硕红马、脚手架与旋转的分色主义笔触展现米兰现代化都会建设热潮的未来主义大师是：",
    "optionsEn": [
      "Giorgio de Chirico",
      "Carlo Carrà",
      "Umberto Boccioni",
      "Theo van Doesburg"
    ],
    "optionsZh": [
      "乔治·德·基里科 (Giorgio de Chirico)",
      "卡洛·卡拉 (Carlo Carrà)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "特奥·范·杜斯堡 (Theo van Doesburg)"
    ],
    "correctAnswer": 2,
    "explanationEn": "The City Rises (La città che sale, 1910) by Umberto Boccioni is widely regarded as the first major Futurist painting. Depicting the construction of an electric plant in industrial Milan, its explosive swirling vortex of giant draft horses and laborers glorifies technological modernization.",
    "explanationZh": "《崛起中的城市》（The City Rises / La città che sale，1910）是薄邱尼被誉为未来主义第一幅真正杰作的巨幅油画。画面描绘了米兰新工业郊区正在拔地而起的电站与建筑工地，巨大的红马与奔涌的体力劳动者交织撕扯成炫目的旋涡光流，生动体现了未来主义对现代机器大生产、城市拔节扩张与狂暴生命力的赞美。卡拉同期创作了《无政府主义者加利的葬礼》，基里科为形而上派宗师，杜斯堡为风格派领袖。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_City_Rises_by_Umberto_Boccioni_1910.jpg/800px-The_City_Rises_by_Umberto_Boccioni_1910.jpg",
    "fallbackImage": "/images/artworks/city-rises.jpg",
    "tags": [
      "VisualID",
      "Boccioni",
      "Futurism",
      "City Rises"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_073",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Which Belgian Surrealist created 'The Treachery of Images' (1929), featuring a photorealistic briar pipe above the cursive text 'Ceci n'est pas une pipe' ('This is not a pipe')?",
    "questionZh": "比利时超现实主义宗师中，在1929年绘制了一支逼真烟斗并在下方书写优雅花体法文“这不是一支烟斗”（Ceci n'est pas une pipe）的大师是：",
    "optionsEn": [
      "Marcel Duchamp",
      "René Magritte",
      "Salvador Dalí",
      "Joan Miró"
    ],
    "optionsZh": [
      "马塞尔·杜尚 (Marcel Duchamp)",
      "雷内·马格里特 (René Magritte)",
      "萨尔瓦多·达利 (Salvador Dalí)",
      "胡安·米罗 (Joan Miró)"
    ],
    "correctAnswer": 1,
    "explanationEn": "René Magritte painted 'The Treachery of Images' (1929) to interrogate the epistemological gap between an actual physical object, its painted linguistic signifier, and its visual representation.",
    "explanationZh": "勒内·马格里特于1929年创作《图像的背叛》，画中只是一幅由颜料构成的烟斗图像而无法填丝点燃，深刻揭示了语言概念、视觉符号与客观实体之间的裂隙与张力。",
    "tags": [
      "VisualID",
      "Magritte",
      "Surrealism",
      "Treachery of Images"
    ],
    "difficulty": 1,
    "image": "/images/artworks/treachery-of-images.jpg",
    "fallbackImage": "/images/artworks/treachery-of-images.jpg"
  },
  {
    "id": "arched_074",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Which iconic painting by René Magritte depicts a man in an overcoat and bowler hat standing before a sea wall with his facial features obscured by a hovering green apple?",
    "questionZh": "马格里特哪幅广为人知的代表作描绘了一位头戴黑色圆顶硬礼帽、身着风衣的男子站立在矮墙海景前，面容恰好被一颗悬浮的青苹果遮挡？",
    "optionsEn": [
      "The Son of Man (Le fils de l'homme, 1964)",
      "Golconda",
      "The False Mirror",
      "The Lovers"
    ],
    "optionsZh": [
      "《人类之子》(The Son of Man / Le fils de l'homme)",
      "《戈尔孔达》(Golconda / 雨燕人)",
      "《错误的镜子》",
      "《爱人》"
    ],
    "correctAnswer": 0,
    "explanationEn": "Magritte painted 'The Son of Man' in 1964 as a self-portrait exploring how visible things continually hide other visible things, sparking curious desire to see what is hidden.",
    "explanationZh": "马格里特于1964年创作自画像《人类之子》，男子目光被垂悬绿苹果掩蔽，探讨了“我们所看见之物总是遮掩着另一件可见之物”的视觉与哲学悖论。",
    "tags": [
      "VisualID",
      "Magritte",
      "Surrealism",
      "Son of Man"
    ],
    "difficulty": 1,
    "image": "/images/artworks/son-of-man.jpg",
    "fallbackImage": "/images/artworks/son-of-man.jpg"
  },
  {
    "id": "arched_075",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "postwar_contemporary",
    "questionEn": "Who painted the seminal 1961 Pop Art canvas 'Look Mickey' shown below, appropriating a Disney children's book panel of Mickey Mouse and Donald Duck on a pier and introducing hand-painted Ben-Day dots into fine art?",
    "questionZh": "下图中展示的在1961年取材自迪士尼儿童画册插图，描绘米老鼠与唐老鸭在码头钓鱼，并首次将廉价漫画印刷的“本戴网点”（Ben-Day dots）移入纯艺术画布的波普艺术奠基之作《看，米奇！》（Look Mickey）的创作者是：",
    "optionsEn": [
      "Roy Lichtenstein",
      "Andy Warhol",
      "Paul Jackson Pollock",
      "Piet Mondrian"
    ],
    "optionsZh": [
      "罗伊·利希滕斯坦 (Roy Lichtenstein)",
      "安迪·沃霍尔 (Andy Warhol)",
      "保罗·杰克逊·波洛克 (Paul Jackson Pollock)",
      "皮特·蒙德里安 (Piet Mondrian)"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Look Mickey' (1961) marks Roy Lichtenstein's decisive breakthrough into Pop Art. Adapted from a Disney comic illustration, it depicts Donald Duck boasting to Mickey Mouse while inadvertently hooking his own coat. Lichtenstein's pioneering use of heavy black line-work, primary colors, and commercial printing Ben-Day dots on canvas severed his ties with Abstract Expressionism.",
    "explanationZh": "《看，米奇！》（Look Mickey，1961）是罗伊·利希滕斯坦（Roy Lichtenstein）波普艺术风格的开山之作。画作题材直接来源于迪士尼儿童插画《唐老鸭：丢失的秘密》，描绘唐老鸭误以为钓到大鱼而不知钩住自己外套的滑稽瞬间。利希滕斯坦在此首次使用了粗黑轮廓线、原色平涂以及模拟商业印刷效果的本戴网点（Ben-Day dots），标志着他彻底与抽象表现主义决裂，开创了波普艺术新纪元。沃霍尔以丝网印制消费品闻名，波洛克开创滴流画，蒙德里安为纯几何抽象宗师。",
    "tags": [
      "VisualID",
      "Roy Lichtenstein",
      "Pop Art",
      "Look Mickey",
      "Ben Day dots"
    ],
    "difficulty": 1,
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Roy_Lichtenstein_Look_Mickey.jpg/800px-Roy_Lichtenstein_Look_Mickey.jpg",
    "fallbackImage": "/images/artworks/look-mickey.jpg"
  },
  {
    "id": "arched_076",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1299",
    "questionZh": "下图中展示的屹立于佛罗伦萨领主广场、以厚重坚固的琢石糙石墙体、挑出式锯齿形机械堞口及高耸的偏心钟楼闻名的托斯卡纳哥特式市政宫殿是：",
    "questionEn": "The imposing medieval Florentine fortress-palace below, fronting the Piazza della Signoria with rusticated stone, machicolated battlements, and a 94-meter off-center bell tower, is:",
    "optionsZh": [
      "佛罗伦萨旧宫 / 领主宫 (Palazzo Vecchio)",
      "佛罗伦萨美第奇-里卡迪宫 (Palazzo Medici Riccardi)",
      "佛罗伦萨巴杰罗宫 (Bargello)",
      "威尼斯总督宫 (Doge's Palace)"
    ],
    "optionsEn": [
      "Palazzo Vecchio (Palazzo della Signoria)",
      "Palazzo Medici Riccardi",
      "Bargello Palace",
      "Doge's Palace, Venice"
    ],
    "correctAnswer": 0,
    "explanationZh": "此建筑为阿诺尔福·迪·坎比奥（Arnolfo di Cambio）于1299年动工设计的佛罗伦萨旧宫（Palazzo Vecchio，原称领主宫）。建筑兼具城邦市政管理大厅与防御要塞双重功能，外立面砌筑粗犷沉重的托斯卡纳琢面糙石，顶部为带枪眼悬挑的齿状挑檐，94米高的阿诺尔福钟楼高耸入云，是中世纪晚期托斯卡纳世俗权力与自治城邦共和国的永恒象征。",
    "explanationEn": "This monument is Palazzo Vecchio in Florence, begun in 1299 by Arnolfo di Cambio. Serving as the fortress-hall of the Florentine Republic, it is defined by rustic masonry, machicolated projecting battlements, and the soaring 94-meter Arnolfo Tower.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Palazzo_Vecchio_Florence_Exterior.jpg/800px-Palazzo_Vecchio_Florence_Exterior.jpg",
    "fallbackImage": "/images/artworks/palazzo-vecchio.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Gothic",
      "Florence",
      "PalazzoVecchio"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_077",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1942 - 1943",
    "questionZh": "下图中展示的由皮特·蒙德里安在流亡纽约晚期创作的巅峰绝唱，彻底摒弃了以往粗黑正交线条，改由红黄蓝灰彩色方块密集交织跳跃出爵士乐节奏感的抽象画作是：",
    "questionEn": "Reproduced below is Piet Mondrian's exuberant final masterpiece painted in New York exile, replacing dark black grid lines with pulsating colored tiles echoing syncopated jazz rhythm. What is its title?",
    "optionsZh": [
      "《红、蓝、黄构图》(Composition II in Red, Blue, and Yellow)",
      "《百老汇爵士乐》(Broadway Boogie Woogie)",
      "《胜利爵士乐》(Victory Boogie Woogie)",
      "《反构图V》(Counter-Composition V)"
    ],
    "optionsEn": [
      "Composition II in Red, Blue, and Yellow",
      "Broadway Boogie Woogie",
      "Victory Boogie Woogie",
      "Counter-Composition V"
    ],
    "correctAnswer": 1,
    "explanationZh": "此画为皮特·蒙德里安于1942-1943年创作的《百老汇爵士乐》（Broadway Boogie Woogie，现藏纽约现代艺术博物馆MoMA）。蒙德里安因二战硝烟避难纽约，受到曼哈顿正交网格街区、霓虹车流与繁复切分音布吉乌吉（Boogie-Woogie）钢琴爵士乐的深刻感染，彻底摒弃了统治其三十年的粗重黑线，用跳跃明快的黄、红、蓝三原色色块网络构筑出充满现代大都市生命律动的几何抽象狂欢。",
    "explanationEn": "This painting is Broadway Boogie Woogie (1942–1943) by Piet Mondrian. Inspired by Manhattan's gridiron urban plan, electric traffic, and syncopated boogie-woogie blues piano, Mondrian abandoned black lines in favor of vibrating modular primary-colored squares.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Piet_Mondrian%2C_1942-43_-_Broadway_Boogie_Woogie.jpg/800px-Piet_Mondrian%2C_1942-43_-_Broadway_Boogie_Woogie.jpg",
    "fallbackImage": "/images/artworks/broadway-boogie-woogie.jpg",
    "tags": [
      "VisualID",
      "DeStijl",
      "Mondrian",
      "BroadwayBoogieWoogie"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_078",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1851",
    "questionZh": "下图中展示的由约瑟夫·帕克斯顿（Joseph Paxton）为1851年伦敦第一届万国工业博览会设计的无柱大跨度预制铸铁与平板玻璃展馆是：",
    "questionEn": "The vast transparent prefabricated exhibition hall below, engineered of cast iron trusses and modular plate glass sheets for the 1851 Great Exhibition by Joseph Paxton, is:",
    "optionsZh": [
      "巴黎埃菲尔铁塔 (Eiffel Tower)",
      "科隆玻璃展馆 (Glass Pavilion)",
      "伦敦水晶宫 (The Crystal Palace)",
      "巴黎机器馆 (Galerie des Machines)"
    ],
    "optionsEn": [
      "Eiffel Tower, Paris",
      "Glass Pavilion, Cologne",
      "The Crystal Palace, London",
      "Galerie des Machines, Paris"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为约瑟夫·帕克斯顿设计的伦敦海德公园水晶宫（The Crystal Palace，1851年）。帕克斯顿运用园艺温室结构经验，设计了完全由标准化工厂预制构件现场快速拼装的铸铁与玻璃巨构（长达564米），内部空间通透高大甚至将原址的几棵参天老榆树完整罩于玻璃拱顶之下，不仅工期仅耗时数月，更标志着现代预制建筑构件与工业化建造革命的破晓。",
    "explanationEn": "This monument is Joseph Paxton's Crystal Palace (1851) in London's Hyde Park. Fabricated from mass-produced cast iron and 900,000 square feet of plate glass, its modular assembly transformed engineering by creating a transparent, pillar-free interior in just nine months.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Crystal_Palace_interior.jpg/800px-Crystal_Palace_interior.jpg",
    "fallbackImage": "/images/artworks/crystal-palace.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Industrial",
      "Paxton",
      "CrystalPalace"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_079",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1889",
    "questionZh": "下图中展示的居斯塔夫·埃菲尔为1889年巴黎世界博览会设计的300米高锻铁格构式纪念碑塔楼是：",
    "questionEn": "The iconic 300-meter wrought-iron lattice tower below, designed by Gustave Eiffel for the 1889 Exposition Universelle in Paris, is:",
    "optionsZh": [
      "伦敦水晶宫 (The Crystal Palace)",
      "科隆玻璃展馆 (Glass Pavilion)",
      "维也纳分离派会馆 (Secession Building)",
      "巴黎埃菲尔铁塔 (Eiffel Tower / Tour Eiffel)"
    ],
    "optionsEn": [
      "The Crystal Palace, London",
      "Glass Pavilion, Cologne",
      "Secession Building, Vienna",
      "Eiffel Tower, Paris (Tour Eiffel)"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为法国工程师居斯塔夫·埃菲尔（Gustave Eiffel）设计的埃菲尔铁塔（Tour Eiffel，1889年）。塔高300米（加上天线现为330米），由18,038个预制熟铁构件与250万颗热铆钉严密装配而成。它抛弃了传统建筑厚重的砖石外衣，直接裸露精确抗风受力的铁性格构线条，是19世纪工业革命力学与材料工程计算巅峰的传世象征。",
    "explanationEn": "This landmark is the Eiffel Tower (Tour Eiffel, 1889) in Paris, engineered by Gustave Eiffel. Reaching 300 meters using 18,038 prefabricated puddle iron pieces joined by 2.5 million rivets, its wind-resistant curved open lattice exemplified structural honesty in the Machine Age.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
    "fallbackImage": "/images/artworks/eiffel-tower.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Industrial",
      "Eiffel",
      "Paris"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_080",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1920 - 1921",
    "questionZh": "下图中展示的由埃里希·门德尔松（Erich Mendelsohn）在德国波茨坦设计的具有浑然天成流线雕塑曲面与有机窗洞的爱因斯坦天文台是表现主义建筑的标志，该建筑是：",
    "questionEn": "The aerodynamic, sculpturally curved astrophysical observatory in Potsdam designed by Erich Mendelsohn below is the quintessential monument of Expressionist architecture. What is it?",
    "optionsZh": [
      "科隆玻璃展馆 (Glass Pavilion)",
      "法古斯鞋楦厂 (Fagus Factory)",
      "爱因斯坦天文台 (Einstein Tower / Einsteinturm)",
      "德绍包豪斯校舍 (Bauhaus Dessau)"
    ],
    "optionsEn": [
      "Glass Pavilion, Cologne",
      "Fagus Factory, Alfeld",
      "Einstein Tower, Potsdam (Einsteinturm)",
      "Bauhaus Dessau Building"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为德国表现主义建筑大师埃里希·门德尔松（Erich Mendelsohn）于1920-1921年在波茨坦电报山营建的爱因斯坦天文台（Einsteinturm）。建筑原计划全部由现浇钢筋混凝土雕塑浇筑而成（后因战后物资匮乏部分采用砖砌抹灰），浑然一体的流线型双曲面与内凹窗洞犹如一尊自大地升起的太空雕塑，用充满动感和情感张力的有机形体呼应爱因斯坦相对论中的时空弯曲假说。",
    "explanationEn": "This building is the Einstein Tower (Einsteinturm, 1920–1921) in Potsdam by Erich Mendelsohn. Designed to house a solar telescope validating Einstein's theory of relativity, its streamlined biomorphic massing and recessed openings established the summit of German Expressionist architecture.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Einsteinturm_Potsdam_2006.jpg/800px-Einsteinturm_Potsdam_2006.jpg",
    "fallbackImage": "/images/artworks/einstein-tower.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Expressionism",
      "Mendelsohn",
      "EinsteinTower"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_081",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1914",
    "questionZh": "下图中展示的布鲁诺·陶特（Bruno Taut）在1914年科隆德意志制造联盟博览会上营建的多面菱形晶体玻璃穹顶展馆是：",
    "questionEn": "The crystalline, rhombic faceted glass-domed pavilion below, constructed by Bruno Taut for the 1914 Cologne Werkbund Exhibition, is:",
    "optionsZh": [
      "伦敦水晶宫 (The Crystal Palace)",
      "爱因斯坦天文台 (Einstein Tower)",
      "维也纳分离派会馆 (Secession Building)",
      "科隆玻璃展馆 (Glass Pavilion / Glashaus)"
    ],
    "optionsEn": [
      "The Crystal Palace",
      "Einstein Tower",
      "Secession Building",
      "Glass Pavilion, Cologne (Glashaus)"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为布鲁诺·陶特（Bruno Taut）在1914年科隆德意志制造联盟展览会上设计的玻璃展馆（Glass Pavilion / Glashaus）。陶特受表现主义诗人保罗·谢尔巴特（Paul Scheerbart）“玻璃文化能净化心灵”乌托邦思想感召，设计了这座由混凝土十四面底座支撑的双层菱形刻面玻璃穹顶，内部配有彩色玻璃台阶与级联水帘，是表现主义建筑将光线折射升华为精神启示的代表杰作。",
    "explanationEn": "This pavilion is the Glass Pavilion (Glashaus, 1914) in Cologne by Bruno Taut. Commissioned by the glass industry for the Werkbund Exhibition, its multifaceted prismatic glass dome and cascading interior waterfall translated Paul Scheerbart's Expressionist glass utopia into physical reality.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bruno_Taut_Glashaus_1914.jpg/800px-Bruno_Taut_Glashaus_1914.jpg",
    "fallbackImage": "/images/artworks/glass-pavilion.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Expressionism",
      "BrunoTaut",
      "GlassPavilion"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_082",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "20th_avant_garde",
    "questionEn": "Which late masterpiece by Piet Mondrian (1942-1943) abandoned rigid black grid lines in favor of vibrating, syncopated yellow, red, and blue mosaic squares inspired by Manhattan jazz and subway traffic?",
    "questionZh": "皮特·蒙德里安流亡纽约晚期创作的巅峰杰作（1942-1943），打破以往黑色粗线条框，改由黄、红、蓝、灰碎密跳跃方格织就、律动感十足的作品是：",
    "optionsEn": [
      "Trafalgar Square",
      "Victory Boogie Woogie",
      "Composition with Yellow and Blue",
      "Broadway Boogie Woogie"
    ],
    "optionsZh": [
      "《特拉法加广场》",
      "《胜利爵士乐》(Victory Boogie Woogie)",
      "《黄与蓝的构图》",
      "《百老汇爵士乐》(Broadway Boogie Woogie)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Mondrian painted 'Broadway Boogie Woogie' in 1942-1943 after emigrating to New York, replacing black outlines with vibrant syncopated yellow bands dotted with primary color accents echoing Manhattan street grids and jazz tempo.",
    "explanationZh": "蒙德里安在1942-1943年客居曼哈顿期间创作《百老汇爵士乐》，彻底告别凝重黑线，用黄色正交脉络中闪烁跳跃的原色小方块，淋漓尽致地谱写出曼哈顿网格街道的车流与布吉乌吉摇摆乐节奏。",
    "tags": [
      "VisualID",
      "Mondrian",
      "Broadway Boogie Woogie",
      "De Stijl",
      "Jazz"
    ],
    "difficulty": 1,
    "image": "/images/artworks/broadway-boogie-woogie.jpg",
    "fallbackImage": "/images/artworks/broadway-boogie-woogie.jpg"
  },
  {
    "id": "arched_083",
    "domain": "visual_id",
    "subCategory": "Architectural Recognition",
    "era": "modern",
    "questionEn": "Which Italian Rationalist masterpiece in Como (1932-1936) was designed by Giuseppe Terragni as a pristine geometric cube clad in white Botticino marble following golden-ratio grid proportions?",
    "questionZh": "由建筑师朱塞佩·泰拉尼于1932-1936年在科莫设计的意大利理性主义建筑丰碑，以纯白博蒂奇诺大理石立面、黄金分割开窗网格与玻璃中庭构筑纯净立方体的是：",
    "optionsEn": [
      "Palazzo della Civiltà Italiana",
      "Novocomum Apartment Building",
      "Casa del Fascio in Como",
      "Casa Rustici in Milan"
    ],
    "optionsZh": [
      "意大利文明宫 (Colosseo Quadrato)",
      "诺沃科蒙公寓 (Novocomum)",
      "科莫法西斯宫 / 法西斯大楼 (Casa del Fascio in Como)",
      "米兰鲁斯蒂奇住宅 (Casa Rustici)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Terragni designed the Casa del Fascio in Como as a perfect 33.2 x 16.6 m prism based on pure mathematical ratios, celebrated for its subtle variations in 3D frame depth, structural glass walls, and rationalist clarity.",
    "explanationZh": "朱塞佩·泰拉尼设计的科莫法西斯大楼（现为意税务警察指挥部）严格依照黄金分割网格，四座立面虚实各异却和谐统一，大面积玻璃幕墙与透明中庭使其成为世界理性主义建筑教科书典范。",
    "tags": [
      "VisualID",
      "Architecture",
      "Rationalism",
      "Terragni",
      "Casa del Fascio"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Como_-_Casa_del_Fascio.jpg/800px-Como_-_Casa_del_Fascio.jpg",
    "fallbackImage": "/images/artworks/casa-del-fascio.jpg"
  },
  {
    "id": "arched_084",
    "domain": "visual_id",
    "subCategory": "Architectural Recognition",
    "era": "modern",
    "questionEn": "Identify the iconic white Modernist villa in Poissy, France (1928-1931), designed by Le Corbusier as the purest physical embodiment of his 'Five Points of a New Architecture':",
    "questionZh": "勒·柯布西耶在法国普瓦西设计的现代主义白派独立住宅（1928-1931），将“新建筑五点”（底层架空、屋顶花园、自由平面、条形窗、自由立面）完美落地的住宅是：",
    "optionsEn": [
      "Villa Cook",
      "Villa Stein-de Monzie",
      "Villa Savoye",
      "Maison La Roche"
    ],
    "optionsZh": [
      "库克别墅 (Villa Cook)",
      "斯坦因-德·蒙齐别墅 (Villa Stein)",
      "萨伏伊别墅 (Villa Savoye)",
      "拉罗什住宅 (Maison La Roche)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Villa Savoye (1929) in Poissy is Le Corbusier's canonical masterpiece, exemplifying pilotis, roof garden, free plan, horizontal ribbon windows, and cantilevered free facade inside a landscape meadow.",
    "explanationZh": "萨伏伊别墅（1929）是柯布西耶“居住机器”理念的最高体现。底层纤细立柱架空、水平连续横向长窗通透观景、室内平缓坡道（建筑散步道）直通屋顶花园，堪称现代建筑史上最耀眼的地标。",
    "tags": [
      "VisualID",
      "Architecture",
      "Le Corbusier",
      "Villa Savoye",
      "Modernism"
    ],
    "difficulty": 1,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/VillaSavoye.jpg/800px-VillaSavoye.jpg",
    "fallbackImage": "/images/artworks/villa-savoye.jpg"
  },
  {
    "id": "arched_085",
    "domain": "visual_id",
    "subCategory": "Architectural Recognition",
    "era": "modern",
    "questionEn": "Which landmark pavilion at the 1929 International Exposition, designed by Mies van der Rohe, featured an open-flowing plan, cruciform chrome steel columns, golden onyx dorée walls, and Georg Kolbe's 'Dawn' statue by a reflection pool?",
    "questionZh": "密斯·凡·德·罗为1929年国际博览会设计的德国国家馆，以流动空间、十字形镀铬钢柱、名贵金色玛瑙石墙与水池边的青铜雕像《晨曦》开创现代空间美学新纪元的是：",
    "optionsEn": [
      "The German Pavilion in Barcelona (Barcelona Pavilion)",
      "Tugendhat House in Brno",
      "Farnsworth House in Plano",
      "Crown Hall at IIT"
    ],
    "optionsZh": [
      "巴塞罗那博览会德国馆 (Barcelona Pavilion)",
      "捷克布尔诺图根哈特别墅",
      "美国范斯沃斯住宅",
      "伊利诺伊理工学院皇冠大厅"
    ],
    "correctAnswer": 0,
    "explanationEn": "Ludwig Mies van der Rohe created the Barcelona Pavilion in 1929, seamlessly blending indoor and outdoor space with luxurious polished stone planes (Roman travertine, green alpine marble, golden onyx) and eight cruciform chrome columns.",
    "explanationZh": "密斯·凡·德·罗设计的1929年巴塞罗那博览会德国馆摒弃传统封闭房间，利用非承重隔断墙滑移组织流动空间（Flowing Space），八根精钢镀铬十字立柱顶起轻盈屋顶，成为“少即是多”的永恒丰碑。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barcelona_Pavilion%2C_2010.jpg/800px-Barcelona_Pavilion%2C_2010.jpg",
    "fallbackImage": "/images/artworks/barcelona-pavilion.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Mies van der Rohe",
      "Barcelona Pavilion",
      "Modernism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_086",
    "domain": "avant_garde",
    "subCategory": "Italian Rationalism",
    "era": "20th_avant_garde",
    "questionEn": "Which group of seven young Milan Polytechnic architecture graduates founded Italian Rationalism (Razionalismo Italiano) in December 1926 with a manifesto series in 'Rassegna Italiana'?",
    "questionZh": "1926年12月在《意大利评论》上连续发表四篇理性主义宣言、标志着意大利理性主义建筑运动（Razionalismo）正式诞生的青年建筑师团体是：",
    "optionsEn": [
      "BBPR (Banfi, Belgiojoso, Peressutti, Rogers)",
      "Gruppo 7 (Figini, Pollini, Terragni, Frette, Larco, Libera, Rava)",
      "Novecento Italiano Group",
      "Futurist Architectural Guild"
    ],
    "optionsZh": [
      "BBPR建筑师事务所 (班菲、贝尔焦约索、佩雷苏蒂、罗杰斯)",
      "七人小组 / Gruppo 7 (菲吉尼、波利尼、泰拉尼、弗雷特、拉尔科、利贝拉、拉瓦)",
      "意大利二十世纪画派社团 (Novecento Italiano)",
      "未来主义建筑行会"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gruppo 7 was formed in 1926 by seven Milan Polytechnic graduates (including Giuseppe Terragni, Luigi Figini, and Gino Pollini), advocating a synthesis between European modernism and timeless Mediterranean classical proportion.",
    "explanationZh": "七人小组（Gruppo 7）由米兰理工大学刚毕业的7位年轻建筑师于1926年组建，倡导将欧洲现代主义逻辑与地中海古典纯粹比例熔铸为一体，开启意大利理性主义大幕。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Rationalism",
      "Gruppo 7",
      "Terragni"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_087",
    "domain": "avant_garde",
    "subCategory": "Italian Rationalism",
    "era": "20th_avant_garde",
    "questionEn": "What primary architectural proportioning principle governs the structural grid and facade rhythm of Giuseppe Terragni's Casa del Fascio in Como (1932-1936)?",
    "questionZh": "朱塞佩·泰拉尼在科莫法西斯大楼（Casa del Fascio, 1932-1936）的立面开窗网格与柱网划分中，主要遵循了哪种严密的古典几何比例准则？",
    "optionsEn": [
      "Strict square modular arithmetic progression (1:1 only)",
      "The Modular System of Le Corbusier",
      "The Golden Section (Divine Proportion, 1:1.618)",
      "Fibonacci irrational helical spiral progression"
    ],
    "optionsZh": [
      "绝对均分的纯正方形加减模数 (1:1)",
      "勒·柯布西耶模度理论 (Modulor)",
      "黄金分割比 (Golden Section, 1:1.618)",
      "斐波那契无理数空间渐开线"
    ],
    "correctAnswer": 2,
    "explanationEn": "Terragni designed the Casa del Fascio using complex proportional subdivisions derived from the Golden Section, establishing a 33.2 x 16.6 m prism whose height equals half its base width.",
    "explanationZh": "泰拉尼在科莫法西斯宫中巧妙应用黄金分割比（长宽比与立面虚实窗洞均遵循约1:1.618），将现代钢筋混凝土柱梁骨架与古典几何神圣比例无缝衔接。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Rationalism",
      "Terragni",
      "Golden Section"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_088",
    "domain": "avant_garde",
    "subCategory": "Italian Rationalism",
    "era": "20th_avant_garde",
    "questionEn": "Which daring 1927-1929 apartment building in Como, designed by Giuseppe Terragni with rounded glass balconies wrapping its corner, was mockingly dubbed 'Il Transatlantico' (The Ocean Liner)?",
    "questionZh": "泰拉尼于1927-1929年在科莫设计的哪座先锋现代公寓，因其转角大胆采用悬挑弧形玻璃圆柱体、被守旧保守派嘲弄为“大西洋邮轮”（Il Transatlantico）？",
    "optionsEn": [
      "Walter Gropius",
      "Le Corbusier",
      "Ludwig Mies van der Rohe",
      "Giuseppe Terragni"
    ],
    "optionsZh": [
      "瓦尔特·格罗皮乌斯 (Walter Gropius)",
      "勒·柯布西耶 (Le Corbusier)",
      "路德维希·密斯·凡·德·罗 (Ludwig Mies van der Rohe)",
      "朱塞佩·泰拉尼 (Giuseppe Terragni)"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Novocomum apartment building (1927-1929) in Como was designed by Giuseppe Terragni. Boldly scooping out the street corners and inserting curved glass cylinders beneath cantilevered horizontal slabs, its ocean-liner aesthetic earned it the nickname \"Il Transatlantico\", becoming the first true rationalist residential landmark in Italy.",
    "explanationZh": "诺沃科姆姆公寓（Novocomum，1927-1929）由意大利理性主义建筑旗手朱塞佩·泰拉尼（Giuseppe Terragni）在科莫湖畔设计落成。该建筑在转角处大胆切除实体体量，嵌入由全透明弧形玻璃包裹的圆柱体楼梯间，上方悬挑厚重的水平楼板，因其极具冲击力的新型机器美学形态被当地人戏称为“远洋轮船”（Il Transatlantico），成为意大利第一座真正意义上的纯粹理性主义现代集合住宅。格罗皮乌斯创立包豪斯，柯布西耶主导白派住宅，密斯专注流动空间。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Rationalism",
      "Terragni",
      "Novocomum"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_089",
    "domain": "avant_garde",
    "subCategory": "Italian Rationalism",
    "era": "modern",
    "questionEn": "Which landmark industrial rationalist complex was designed by Luigi Figini and Gino Pollini between 1934 and 1957 in Ivrea, celebrated for its continuous daylighting glass curtain facades?",
    "questionZh": "建筑师路易吉·菲吉尼与吉诺·波利尼于1934至1957年间在伊夫雷亚（Ivrea）为哪家著名工业先驱企业设计了采用全明通透玻璃幕墙的理性主义总部与厂房典范？",
    "optionsEn": [
      "Olivetti Headquarters and Factory Complex",
      "Fiat Lingotto Factory in Turin",
      "Pirelli Industrial Plant in Bicocca",
      "Alfa Romeo Factory in Portello"
    ],
    "optionsZh": [
      "奥利维蒂打字机厂房与总部建筑群 (Olivetti Complex in Ivrea)",
      "菲亚特灵格托汽车厂 (Fiat Lingotto)",
      "倍耐力比可卡工业园",
      "阿尔法·罗密欧波尔泰洛车间"
    ],
    "correctAnswer": 0,
    "explanationEn": "Figini & Pollini designed the ICO factory complex for Adriano Olivetti in Ivrea, featuring a revolutionary 100-meter continuous glass curtain wall and human-centered social welfare architecture (now a UNESCO World Heritage site).",
    "explanationZh": "菲吉尼与波利尼受人道主义实业家阿德里亚诺·奥利维蒂委托，在伊夫雷亚建造了拥有百米长透亮玻璃幕墙的打字机工业综合体，成为战前及战后结合人本关怀与理性结构的世界遗产。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Rationalism",
      "Figini Pollini",
      "Olivetti"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_090",
    "domain": "avant_garde",
    "subCategory": "Italian Rationalism",
    "era": "postwar_contemporary",
    "questionEn": "Which iconic 1958 Milan skyscraper by the studio BBPR reinterpreted medieval Tuscan fortified towers through an overhanging upper residential cantilever supported by diagonal struts?",
    "questionZh": "由BBPR建筑事务所于1958年在米兰历史中心落成的哪座地标摩天大楼，以顶部向外悬挑扩张的蘑菇形体量和斜向支撑，现代转译了中世纪托斯卡纳防御城堡？",
    "optionsEn": [
      "Torre Velasca",
      "Pirelli Tower (Pirellone)",
      "Torre Galfa",
      "Palazzo Lombardia"
    ],
    "optionsZh": [
      "维拉斯加塔楼 (Torre Velasca)",
      "倍耐力大厦 (Pirelli Tower / Gio Ponti)",
      "加尔法塔 (Torre Galfa)",
      "伦巴第大区宫"
    ],
    "correctAnswer": 0,
    "explanationEn": "BBPR (Banfi, Belgiojoso, Peressutti, Rogers) designed the Torre Velasca in Milan (1956-1958) with an overhanging upper cantilever inspired by Lombard medieval defensive towers like the Sforza Castle, pioneering Neoliberty contextualism.",
    "explanationZh": "BBPR事务所设计的维拉斯加塔楼下窄上宽，顶部住宅层向外悬挑由粗壮斜撑托举，巧妙呼应了斯福尔扎城堡等伦巴第中世纪城楼轮廓，成为现代主义与历史文脉对话的传奇里程碑。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "BBPR",
      "Torre Velasca",
      "Milan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_091",
    "domain": "avant_garde",
    "subCategory": "Italian Rationalism",
    "era": "20th_avant_garde",
    "questionEn": "What ideological conflict divided Italian architecture in the 1930s between Marcello Piacentini and the Rationalists?",
    "questionZh": "20世纪30年代意大利建筑界在法西斯国家工程中，马塞洛·皮亚琴蒂尼（Marcello Piacentini）与理性主义阵营（MIAR）的核心争论焦点是：",
    "optionsEn": [
      "Monumental historicist Neoclassicism (Stile Littorio) versus honest functional Modernist tectonic transparency",
      "Handmade Gothic craftsmanship versus Beaux-Arts academic painting",
      "Radical High-Tech steel structuralism versus historicist eclectic classical revival",
      "Precast concrete panels versus traditional timber log cabin construction"
    ],
    "optionsZh": [
      "帝国式折衷古典复兴（国家风格 Stile Littorio）与诚实功能主义现代构造透明度之争",
      "手工中世纪哥特手工艺与学院派古典绘画之争",
      "激进的高科技金属结构与历史主义复古之争",
      "预制轻质混凝土大板与传统原木木屋结构之争"
    ],
    "correctAnswer": 0,
    "explanationEn": "Marcello Piacentini promoted a bombastic monumental classicism (Stile Littorio) with stripped arches and marble colonnades glorifying the Fascist state, opposing the Rationalists' progressive socialist embrace of international functionalism.",
    "explanationZh": "皮亚琴蒂尼代表官方推崇剥离细节但体量膨胀的帝国纪念性古典复古（罗马斗兽场式巨柱假拱），而理性主义者则坚守钢筋混凝土结构诚实表达与欧洲国际主义现代性。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Rationalism",
      "Piacentini",
      "Stile Littorio"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_092",
    "domain": "avant_garde",
    "subCategory": "Expressionist Architecture",
    "era": "1920 - 1921",
    "questionZh": "埃里希·门德尔松（Erich Mendelsohn）在德国波茨坦设计的爱因斯坦天文台（1920-1921），在建筑形态与表现主义理论上的核心特征是：",
    "questionEn": "What is the primary aesthetic and structural hallmark of Erich Mendelsohn's Einstein Tower in Potsdam (1920–1921)?",
    "optionsZh": [
      "严格的正交九宫格对称与古典多立克壁柱外立面",
      "具有强烈动感、宛如自大地升起的浑然一体流线型双曲面雕塑体量",
      "外露所有给排水管道并涂以红黄蓝饱和色的工业机器美学",
      "由标准工厂预制装配的无柱通透玻璃平顶盒子"
    ],
    "optionsEn": [
      "Strict orthogonal nine-square grid symmetry framed by Doric pilasters",
      "Dynamically streamlined, sculpturally molded biomorphic curves rising organically from the terrain",
      "Inside-out color-coded mechanical infrastructure celebrating industrial engineering",
      "A column-free transparent flat-roof glass box constructed of standardized elements"
    ],
    "correctAnswer": 1,
    "explanationZh": "爱因斯坦天文台是德国表现主义建筑（Expressionist Architecture）的最高代表作。门德尔松抛弃了历史主义砖石砌体与传统正交直角，以具有极强动势与张力的流线型双曲面雕塑形体包裹内部太阳望远镜塔楼，试图在建筑形态中诗意具象化爱因斯坦相对论中关于“质量导致时空弯曲”的宏大宇宙假说。",
    "explanationEn": "The Einstein Tower in Potsdam epitomizes German Expressionist architecture. Rejecting academic historicism and rigid rectilinear grids, Mendelsohn molded the observatory as a streamlined organic sculpture to poetically embody Albert Einstein's cosmological concepts of curved spacetime.",
    "tags": [
      "AvantGarde",
      "Expressionism",
      "Mendelsohn",
      "EinsteinTower"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_093",
    "domain": "avant_garde",
    "subCategory": "Expressionist Glass Architecture",
    "era": "1914",
    "questionZh": "布鲁诺·陶特（Bruno Taut）在1914年科隆德意志制造联盟博览会设计的“玻璃展馆”（Glass Pavilion），所传达的核心思想是：",
    "questionEn": "What was the central ideological and aesthetic purpose of Bruno Taut's Glass Pavilion at the 1914 Cologne Werkbund Exhibition?",
    "optionsZh": [
      "彻底消灭一切装饰，建立工业标准化预制构件装配流水线",
      "运用哥特复兴飞扶壁构建天主教大教堂的神圣威严",
      "将玻璃视作一种能够净化人类心灵、折射纯净精神启示的乌托邦先锋媒介",
      "以粗犷有力的现浇清水混凝土营造粗野主义居住机器"
    ],
    "optionsEn": [
      "Eradicating all ornament to establish an assembly-line system of modular prefabricated panels",
      "Reviving Gothic flying buttresses to enforce monumental ecclesiastical hierarchy",
      "Treating multifaceted glass as a utopian medium capable of purifying society through luminous spiritual revelation",
      "Utilizing rough-cast raw concrete to craft an unapologetic brutalist machine for living"
    ],
    "correctAnswer": 2,
    "explanationZh": "布鲁诺·陶特受表现主义哲理诗人谢尔巴特（Paul Scheerbart）“玻璃文化摧毁隔阂、净化灵魂”思想影响，在1914年科隆制造联盟展上构筑了带有菱形多面棱镜穹顶与彩色阶梯瀑布的玻璃宫。陶特认为彩色玻璃的漫射光辉能够消除社会冷漠与资产阶级沉沦，开创了战后表现主义著名的“水晶链”（Crystal Chain）乌托邦建筑思潮。",
    "explanationEn": "Inspired by Expressionist poet Paul Scheerbart's vision that glass architecture would cleanse human souls, Bruno Taut engineered the Glass Pavilion with a diamond-faceted glass dome and kaleidoscopic interior water cascade, founding the utopian \"Crystal Chain\" movement.",
    "tags": [
      "AvantGarde",
      "Expressionism",
      "BrunoTaut",
      "GlassArchitecture"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_094",
    "domain": "avant_garde",
    "subCategory": "Modernist Facade Revolution",
    "era": "1911",
    "questionZh": "瓦尔特·格罗皮乌斯与阿道夫·梅耶于1911年设计的阿尔费尔德法古斯鞋楦厂（Fagus Factory），在现代建筑结构史上的里程碑意义在于：",
    "questionEn": "What was the revolutionary structural milestone achieved by Walter Gropius and Adolf Meyer in the Fagus Factory (1911)?",
    "optionsZh": [
      "首次将古希腊多立克柱廊完全包覆于工业厂房主入口",
      "在建筑转角处完全取消承重结构立柱，开创了全通透外挂连续玻璃幕墙",
      "首次采用大跨度预应力悬链线马鞍形混凝土薄壳屋顶",
      "全面运用红黄蓝三原色色块涂刷所有车间内墙"
    ],
    "optionsEn": [
      "Completely enclosing industrial entrances within antique Doric peristyles",
      "Eliminating structural corner piers entirely to pioneer uninterrupted wraparound glass curtain walls",
      "Pioneering long-span prestressed catenary saddle-shaped concrete thin-shell roofs",
      "Painting all internal workshop partitions strictly in primary red, yellow, and blue planes"
    ],
    "correctAnswer": 1,
    "explanationZh": "法古斯鞋楦厂（Fagus Factory）被公认为现代主义建筑从古典承重墙体破茧而出的奠基作。格罗皮乌斯将钢筋混凝土承重立柱自外墙内收，使外立面转角处完全摆脱了沉重砖石柱墩的支撑束缚，代之以轻盈纤细的钢框落地玻璃幕墙，在历史上首次实现了建筑转角的完全悬空与通透视觉革命。",
    "explanationEn": "The Fagus Factory in Alfeld is hailed as the structural dawn of Modernist architecture. By pulling structural concrete columns behind the facade plane, Gropius eliminated corner pillars, wrapping the building in a floating, transparent glass curtain wall.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "Gropius",
      "FagusFactory"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_095",
    "domain": "avant_garde",
    "subCategory": "High-Tech Architecture Principles",
    "era": "1970s",
    "questionZh": "20世纪70年代以伦佐·皮亚诺与理查德·罗杰斯设计的巴黎蓬皮杜艺术中心为代表的“高技派建筑”（High-Tech Architecture），其核心构造策略是：",
    "questionEn": "What is the signature tectonic philosophy of High-Tech Architecture, epitomized by Renzo Piano and Richard Rogers' Centre Pompidou in Paris (1971–1977)?",
    "optionsZh": [
      "隐蔽所有现代机械机电管线，以纯白粉刷石膏面还原古典希腊神庙纯净性",
      "反转建筑传统内外关系，将承重钢桁架、彩色编码机械管线与立体交通完全外露于建筑表皮",
      "完全使用当地木材与未打磨天然乱石构筑自然仿生农舍",
      "以手工精雕细琢的繁复铸铁植物花卉装饰遮盖所有螺栓与钢材焊接缝"
    ],
    "optionsEn": [
      "Concealing all mechanical systems behind pristine white plaster to evoke Classical Greek temples",
      "Inverting traditional interior-exterior hierarchy by exposing steel trusses and color-coded service pipes on the facade",
      "Constructing vernacular agrarian shelters exclusively out of raw rough stone and unhewn timber",
      "Masking structural bolts and welded seams beneath handcrafted Art Nouveau floral ironwork"
    ],
    "correctAnswer": 1,
    "explanationZh": "高技派（High-Tech）以对现代工业工程逻辑的极度真诚为准则。蓬皮杜艺术中心将原本隐藏在吊顶与竖井内的空调通风管（蓝）、给排水管道（绿）、电力线缆（黄）、人员流动电梯与扶梯（红）以及巨型铸钢格贝尔臂桁架全部暴露在建筑物外立面，内部因而获得毫无立柱阻隔的巨大通透空间。",
    "explanationEn": "High-Tech architecture celebrates industrial engineering as its primary ornament. The Centre Pompidou turned architecture inside-out by exposing massive external steel gerberettes and color-coded mechanical ducts, leaving interior galleries as vast, uninterrupted column-free spaces.",
    "tags": [
      "AvantGarde",
      "HighTech",
      "Piano",
      "Rogers",
      "Pompidou"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_096",
    "domain": "avant_garde",
    "subCategory": "Bauhaus Curricular Philosophy",
    "era": "1919 - 1928",
    "questionZh": "瓦尔特·格罗皮乌斯于1919年在魏玛创立包豪斯（Staatliches Bauhaus）时，在其经典教学体系中开创的核心教育模式是：",
    "questionEn": "When Walter Gropius founded the Staatliches Bauhaus in Weimar in 1919, what foundational pedagogical framework did he institute?",
    "optionsZh": [
      "由学院派教授一对一带领学生长期临摹古罗马万神殿石膏像与巴洛克铜版画",
      "打破纯艺术与应用工艺的阶级壁垒，实行“形式导师”与“工坊大师”双轨并行的预科与实作教学",
      "完全取缔任何手工工坊，要求所有一年级新生直接进入工业流水线从事标准冲压劳动",
      "强制所有学生必须以中世纪修道院僧侣方式生活并从事哥特式石雕学徒训练"
    ],
    "optionsEn": [
      "Academic atelier training based on copying Greco-Roman plaster casts and Baroque engravings",
      "A dual pedagogical model pairing \"Form Masters\" with \"Craft Masters\" across foundational Vorkurs and workshops",
      "Abolishing physical workshops to place first-year apprentices directly into mass-production factories",
      "Compulsory medieval monastic guild living centered on apprentice cathedral stonemasonry"
    ],
    "correctAnswer": 1,
    "explanationZh": "格罗皮乌斯在1919年《包豪斯宣言》中呼吁“艺术家与工匠必须打破横亘在二者之间傲慢的阶级屏障”。在包豪斯教学中，所有新生首先接受半年预科（Vorkurs）对材料、色彩与形态的感知训练，随后进入木工、金属、纺织、陶瓷等工坊，由“形式导师”（前卫艺术大师）指导造型美学，同时由“工坊技师”（手工艺匠人）指导实际建造工艺，实现了艺术与技术的划时代统一。",
    "explanationEn": "Gropius's Bauhaus revolutionized design education by tearing down the artificial divide between fine art and artisanal craft. Students completed a foundational preliminary course (Vorkurs) before entering specialized workshops guided jointly by a \"Form Master\" (artist) and a \"Craft Master\" (artisan).",
    "tags": [
      "AvantGarde",
      "Bauhaus",
      "Gropius",
      "Pedagogy"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_097",
    "domain": "avant_garde",
    "subCategory": "Art Nouveau Tectonic Expression",
    "era": "1893",
    "questionZh": "维克多·奥塔（Victor Horta）在布鲁塞尔塔塞尔饭店（Hôtel Tassel，1893）中，对建筑结构材料所作出的划时代突破是：",
    "questionEn": "What was Victor Horta's revolutionary material breakthrough in the Hôtel Tassel in Brussels (1893)?",
    "optionsZh": [
      "将传统掩藏在砖石深处的工业铸铁构件大胆暴露于居住核心空间，并赋予其优美有机的植物鞭绳曲线形态",
      "用高反射镜面镀膜玻璃幕墙完全取代传统临街外墙",
      "在整座住宅内部全面采用粗糙未打磨的现浇粗野主义清水混凝土墙面",
      "运用电脑软件计算生成的非对称不规则钛金属合金鳞片包裹外立面"
    ],
    "optionsEn": [
      "Boldly exposing structural cast iron inside domestic living spaces, shaping it into organic whiplash curves",
      "Replacing residential street facades entirely with reflective solar mirror glass curtain walls",
      "Exposing raw, rough-cast Béton Brut concrete across every residential partition wall",
      "Wrapping facades in algorithmically computed non-rectilinear titanium alloy scales"
    ],
    "correctAnswer": 0,
    "explanationZh": "维克多·奥塔在塔塞尔饭店中不仅将铸铁作为承重柱，更让其枝权如同植物根须般向上舒展，化作蜿蜒卷曲的“鞭绳”（Coup de fouet），金属的纤细硬朗与植物的轻柔动势在室内楼梯间、马赛克地面与天花壁画中融为一体，宣告了新艺术运动在欧洲大陆的正式诞生。",
    "explanationEn": "In Hôtel Tassel, Victor Horta liberated industrial iron from factories into domestic architecture. Slender cast-iron columns sprout into sinuous vegetal whiplash tendrils that harmonize with mosaic floor tiles and stenciled walls, inaugurating Continental Art Nouveau.",
    "tags": [
      "AvantGarde",
      "ArtNouveau",
      "Horta",
      "HotelTassel"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_098",
    "domain": "avant_garde",
    "subCategory": "Catalan Modernisme Tectonics",
    "era": "1883 - 1926",
    "questionZh": "安东尼·高迪（Antoni Gaudí）在圣家族大教堂与米拉之家的建筑力学探索中，为了克服传统直角梁柱与厚重砖石的局限，独创的核心受力体系是：",
    "questionEn": "In engineering the Sagrada Família and Casa Milà, which ingenious structural methodology did Antoni Gaudí invent to eliminate thick buttressed masonry walls?",
    "optionsZh": [
      "以标准化的装配式工字钢框架构筑超大跨度正交柱网",
      "采用预应力抗震混凝土核心筒结合外圈巨型斜向支撑钢管柱",
      "运用挂重悬链线吊绳倒置力学模型推导出的纯受压悬链拱与双曲抛物面树状倾斜柱系统",
      "在建筑屋顶安装重达数百吨的调谐质量阻尼器以抵御风荷载"
    ],
    "optionsEn": [
      "Standardized prefabricated steel I-beam frames spanning broad orthogonal column grids",
      "A central seismic prestressed concrete core tube paired with giant diagonal steel perimeter mega-columns",
      "Pure compression catenary arches and hyperbolic ruled surfaces derived from inverted weighted string models",
      "Installing massive tuned mass dampers on rooftops to counteract typhoon wind loads"
    ],
    "correctAnswer": 2,
    "explanationZh": "高迪为了探求最纯粹合理的结构形态，在工坊中以悬挂铅块沙袋的悬挂绳索网络（Funicular Model）进行物理力学模拟。由于绳索在自重下必然处于纯拉伸状态，将其倒置（Inverted）后即化作完全免除弯矩、仅承受纯轴向压力的悬链线拱（Catenary Arch）。结合双曲抛物面和倾斜的树状分叉立柱，高迪彻底摆脱了哥特式飞扶壁的外挂支撑，使石砌建筑实现了自然的力学均衡。",
    "explanationEn": "Gaudí determined the ideal structural form by building inverted hanging chain models (funicular models) weighted with buckshot. Inverting the purely tensile strings produced ideal catenary arches operating purely in axial compression, eliminating the need for Gothic flying buttresses.",
    "tags": [
      "AvantGarde",
      "Gaudi",
      "CatenaryArches",
      "CatalanModernisme"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_099",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "19th_century",
    "questionEn": "Which Catalan Modernisme genius designed the Sagrada Família, Casa Batlló, and Park Güell, pioneering structural catenary arches and 'trencadís' ceramic tile mosaics?",
    "questionZh": "设计了圣家族大教堂、巴特罗之家与米拉之家，开创悬链线抛物线拱（Catenary Arches）与碎瓷拼贴（Trencadís）工艺的加泰罗尼亚现代主义巨匠是：",
    "optionsEn": [
      "Antoni Gaudí",
      "Erich Mendelsohn",
      "Victor Horta",
      "Hector Guimard"
    ],
    "optionsZh": [
      "安东尼·高迪 (Antoni Gaudí)",
      "埃里希·门德尔松 (Erich Mendelsohn)",
      "维克多·奥塔 (Victor Horta)",
      "埃克托尔·吉马尔 (Hector Guimard)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Antoni Gaudí designed the Sagrada Família, Casa Milà, and Casa Batlló in Barcelona. Gaudí pioneered catenary and parabolic arches calculated via inverted weighted string models, alongside colourful trencadís tile mosaics.",
    "explanationZh": "加泰罗尼亚现代主义大师安东尼·高迪（Antoni Gaudí）设计了圣家族大教堂（Sagrada Família）、米拉之家（Casa Milà）与巴特罗之家（Casa Batlló）。高迪以悬挂链条铅块倒置模型的力学模拟试验确立了纯粹受压的悬链线拱（Catenary Arch）与双曲抛物面，并开创以废旧瓷砖拼接的碎瓷工艺（Trencadís）。门德尔松以表现主义爱因斯坦塔闻名，奥塔与吉马尔为新艺术运动领袖。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg",
    "fallbackImage": "/images/artworks/sagrada-familia.jpg",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Gaudi",
      "Catalan Modernisme",
      "Catenary Arch"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_100",
    "domain": "avant_garde",
    "subCategory": "Adolf Loos Architectural Theory",
    "era": "1908 - 1930",
    "questionZh": "维也纳现代建筑先驱阿道夫·路斯（Adolf Loos）在1908年发表颠覆性论文《装饰即罪恶》（Ornament and Crime），他在空间设计上首创的核心概念是：",
    "questionEn": "Austrian modernist pioneer Adolf Loos published the explosive essay \"Ornament and Crime\" (1908). What revolutionary spatial concept did he develop in works like the Müller Villa?",
    "optionsZh": [
      "自由流动空间 (Flowing Space)",
      "空间立体规划 / 空间规约 (Raumplan)",
      "底层完全架空立柱 (Pilotis)",
      "纯粹几何新造型主义 (Neoplasticism)"
    ],
    "optionsEn": [
      "Flowing Universal Space",
      "Spatial Plan / Volume Planning (Raumplan)",
      "Ground-floor pilotis elevation",
      "Pure Neoplastic geometric abstraction"
    ],
    "correctAnswer": 1,
    "explanationZh": "阿道夫·路斯不仅严厉批判了新艺术运动将建筑退化为表面花卉装饰的做法，更独创了“空间立体规划”（Raumplan，空间规约）。Raumplan摒弃了传统建筑层高一致、水平切片的楼层概念，而是根据起居室、餐厅、卧房等不同房间的具体使用功能和心理需求，赋予其各不相同的净高与尺度，并通过错落数阶的台阶将不同体量立体的相互穿插嵌套，在施泰纳住宅与穆勒别墅中展现了高度集约而丰富的空间体验。",
    "explanationEn": "Adolf Loos invented the \"Raumplan\" (Spatial Plan). Rejecting uniform horizontal floor levels, Loos designed three-dimensional interlocking cubic volumes of varying ceiling heights calibrated precisely to each room's specific function, interconnected via short flights of steps.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "AdolfLoos",
      "Raumplan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_101",
    "domain": "avant_garde",
    "subCategory": "Expressionism & Secession",
    "era": "19th_century",
    "questionEn": "Which architect designed the iconic Vienna Secession Building (1898), featuring the motto 'Der Zeit ihre Kunst, der Kunst ihre Freiheit' beneath a gilded openwork dome of laurel leaves ('the golden cabbage')?",
    "questionZh": "设计了维也纳分离派会馆（Secession Building, 1898），在入口上方镌刻“时代有其艺术，艺术有其自由”，并以金色镂空月桂树叶圆顶闻名的奥地利建筑师是：",
    "optionsEn": [
      "Joseph Maria Olbrich",
      "Victor Horta",
      "Hector Guimard",
      "Adolf Loos"
    ],
    "optionsZh": [
      "约瑟夫·玛丽亚·欧尔布里希 (Joseph Maria Olbrich)",
      "维克多·奥塔 (Victor Horta)",
      "埃克托尔·吉马尔 (Hector Guimard)",
      "阿道夫·路斯 (Adolf Loos)"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Vienna Secession Building (1898) was designed by Joseph Maria Olbrich. Crowned with a perforated dome of gilded bronze laurel leaves (\"golden cabbage\"), its portal bears the famous inscription: \"To every age its art, to art its freedom\".",
    "explanationZh": "维也纳分离派会馆（Secession Building, 1898）由约瑟夫·玛丽亚·欧尔布里希（Joseph Maria Olbrich）设计。建筑立面简洁纯净，顶部冠以由上千片镀金青铜月桂树叶编织而成的镂空金色球形穹顶（俗称“金卷心菜”），大门上方雕刻分离派运动著名座右铭：“时代有其艺术，艺术有其自由”（Der Zeit ihre Kunst, der Kunst ihre Freiheit）。奥塔在布鲁塞尔开创新艺术运动，吉马尔设计巴黎地铁入口，路斯倡导《装饰即罪恶》。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Vienna Secession",
      "Olbrich",
      "SecessionBuilding"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_102",
    "domain": "avant_garde",
    "subCategory": "Chicago School High-Rise Innovation",
    "era": "1890s",
    "questionZh": "路易斯·沙利文（Louis Sullivan）作为芝加哥学派代表人物，在其1896年论文《高层办公楼的艺术考量》中提出的现代设计核心公理是：",
    "questionEn": "Which definitive architectural axiom was formulated by Louis Sullivan in his 1896 essay \"The Tall Office Building Artistically Considered\"?",
    "optionsZh": [
      "少即是多 (Less is more)",
      "装饰即罪恶 (Ornament is a crime)",
      "形式追随功能 (Form ever follows function)",
      "房屋是居住的机器 (The house is a machine for living)"
    ],
    "optionsEn": [
      "Less is more",
      "Ornament is a crime",
      "Form ever follows function",
      "The house is a machine for living"
    ],
    "correctAnswer": 2,
    "explanationZh": "路易斯·沙利文（Louis Sullivan）在芝加哥摩天大楼建设浪潮中提出举世闻名的公理：“形式永远追随功能”（Form ever follows function）。沙利文认为高层办公楼的外观形态不应照搬欧洲古典神庙比例，而必须真实反映其内部的真实功能结构：底层是公共开放的商业大厅，中层是垂直均质的办公室蜂巢，顶层是机械设备层并冠以出挑飞檐。",
    "explanationEn": "Louis Sullivan immortalized the functionalist maxim \"form ever follows function\". He argued that skyscraper aesthetics must organically reflect their tripartite internal mechanics: an accessible ground floor, a soaring repetitive shaft of office tiers, and a crowning mechanical attic.",
    "tags": [
      "AvantGarde",
      "ChicagoSchool",
      "Sullivan",
      "Functionalism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_103",
    "domain": "avant_garde",
    "subCategory": "Le Corbusier Five Points of Architecture",
    "era": "1926",
    "questionZh": "勒·柯布西耶于1926年发表的“新建筑五点”（Cinq points de l'architecture moderne）中，哪一项技术手段直接使得建筑外立面彻底摆脱承重束缚、能够自由开辟全景横向带窗？",
    "questionEn": "Among Le Corbusier's \"Five Points of a New Architecture\" (1926), which structural mechanism directly emancipated the facade from load-bearing duties, enabling panoramic horizontal ribbon windows?",
    "optionsZh": [
      "厚重的承重砖砌糙石基础",
      "由钢筋混凝土柱底层架空（Pilotis）与楼板向外悬挑所实现的“自由立面与自由平面”",
      "高耸的木构交叉桁架与陡峭悬挑双坡屋顶",
      "外墙厚实无窗以确保战时防弹掩体功能"
    ],
    "optionsEn": [
      "Massive load-bearing rusticated masonry foundations",
      "Independent reinforced concrete pilotis columns and cantilevered floorplates creating free facades and free plans",
      "Steeply pitched timber trusses sheltering double-hung dormer windows",
      "Thick windowless bunker walls built for military defense"
    ],
    "correctAnswer": 1,
    "explanationZh": "柯布西耶“新建筑五点”的核心依托是钢筋混凝土框架结构。由于立柱承担了全部竖向自重，外立面不再具有任何承重职能（自由立面 Façade libre），因而可以完全由透明玻璃或任意材料围护，外墙水平方向因此能够任意开出贯通整个开间的长条带窗（Fenêtre en longueur），使充沛的自然阳光注入室内深处。",
    "explanationEn": "The Five Points rely on the concrete skeleton: with structural pilotis carrying floor slabs, walls become non-load-bearing curtains (Free Facade), allowing continuous horizontal ribbon windows (fenêtres en longueur) to slice across the entire front.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "LeCorbusier",
      "FivePoints"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_104",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "Which Viennese architectural pioneer wrote the scathing 1908 polemic 'Ornament and Crime' (Ornament und Verbrechen) and developed the 3D interlocking 'Raumplan' spatial design method?",
    "questionZh": "在1908年撰写颠覆性檄文《装饰即罪恶》（Ornament und Verbrechen），并开创由不同标高立体相互咬合交错的“空间规划”（Raumplan）的维也纳现代建筑先锋是：",
    "optionsEn": [
      "Tony Garnier",
      "Peter Behrens",
      "Hendrik Petrus Berlage",
      "Adolf Loos"
    ],
    "optionsZh": [
      "托尼·加尼耶 (Tony Garnier)",
      "彼得·贝伦斯 (Peter Behrens)",
      "亨德里克·贝尔拉格 (Hendrik Petrus Berlage)",
      "阿道夫·路斯 (Adolf Loos)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Adolf Loos condemned surface applied ornament as a sign of cultural degeneracy in his 1908 essay 'Ornament and Crime', designing austere unadorned exteriors with complex 3D split-level interior volumes ('Raumplan') such as Villa Müller in Prague.",
    "explanationZh": "阿道夫·路斯痛斥非生产性的附着装饰是劳民伤财的文明退化，其设计的普拉哈穆勒别墅与维也纳施泰纳住宅外观极简冷峻，内部则通过不同净高的功能性三维空间错层联动（Raumplan）。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Adolf Loos",
      "Ornament and Crime",
      "Raumplan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_105",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "19th_century",
    "questionEn": "Which building in Chicago (1884-1885), engineered by William Le Baron Jenney, is widely recognized as the world's first skyscraper utilizing an internal metal skeleton frame that carried exterior masonry walls?",
    "questionZh": "由威廉·勒·巴隆·珍妮设计建于芝加哥（1884-1885），世界建筑史上公认第一座采用完全承重内部铁钢结构骨架支撑自承重外墙的现代摩天大楼是：",
    "optionsEn": [
      "Carson Pirie Scott / Sullivan Center",
      "Home Insurance Building",
      "Rookery Building",
      "Reliance Building"
    ],
    "optionsZh": [
      "卡森·皮里·斯科特百货大楼 (Carson Pirie Scott / Sullivan Center)",
      "家庭保险大楼 (Home Insurance Building)",
      "鲁克里大厦 (Rookery Building)",
      "信赖大厦 (Reliance Building)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Home Insurance Building (Chicago, 1884-1885) designed by William Le Baron Jenney is recognized as the world's first skyscraper supported by a fully load-bearing metal structural frame (cast iron columns and wrought iron/steel beams), liberating the facade from load-bearing masonry.",
    "explanationZh": "建于芝加哥（1884-1885，已于1931年拆除）的家庭保险大楼（Home Insurance Building）由威廉·勒·巴隆·珍妮（William Le Baron Jenney）设计。大楼楼高10层，首次全面采用了金属内框架结构（铸铁立柱与熟铁/锻钢横梁）承担建筑自重与风荷载，外立面砌体砖石退化为轻型自承重饰面，开创了现代钢框架摩天大楼的建造范式。沙利文的卡森·皮里·斯科特百货大楼以流线铸铁装饰和芝加哥窗闻名。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Chicago School",
      "Jenney",
      "Skyscraper",
      "Steel Frame"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_106",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "19th_century",
    "questionEn": "Which Chicago School architect coined the famous functionalist dictum 'Form ever follows function' in his 1896 essay 'The Tall Office Building Artistically Considered'?",
    "questionZh": "在1896年论文《高层办公楼的艺术考量》中提出举世闻名的现代设计格言“形式永远追随功能”（Form ever follows function）的芝加哥学派代表人物是：",
    "optionsEn": [
      "Louis Sullivan",
      "Frank Lloyd Wright",
      "Daniel Burnham",
      "John Wellborn Root"
    ],
    "optionsZh": [
      "路易斯·沙利文 (Louis Sullivan)",
      "弗兰克·劳埃德·赖特 (Frank Lloyd Wright)",
      "丹尼尔·伯纳姆 (Daniel Burnham)",
      "约翰·维尔伯恩·鲁特 (John Wellborn Root)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Louis Sullivan formulated 'form ever follows function' to articulate that a skyscraper's exterior tripartite articulation (base, shaft, attic) should naturally derive from its internal human and mechanical functions.",
    "explanationZh": "路易斯·沙利文确立了“形式追随功能”金科玉律，其设计的圣路易斯温赖特大厦与芝加哥卡森·皮里·斯科特百货商店以经典三段式（入口基座、垂直标准层、出檐顶部）展现钢结构内部逻辑。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Chicago School",
      "Louis Sullivan",
      "Form follows function"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_107",
    "domain": "avant_garde",
    "subCategory": "Mies van der Rohe Minimalist Philosophy",
    "era": "1929 - 1958",
    "questionZh": "密斯·凡·德·罗（Ludwig Mies van der Rohe）在其建筑生涯中一以贯之的核心建筑哲学命题是：",
    "questionEn": "Which celebrated architectural aphorism captures Ludwig Mies van der Rohe's lifelong aesthetic philosophy?",
    "optionsZh": [
      "房屋是居住的机器 (A house is a machine for living)",
      "形式追随功能 (Form follows function)",
      "建筑是凝固的音乐 (Architecture is frozen music)",
      "少即是多 (Less is more)"
    ],
    "optionsEn": [
      "A house is a machine for living",
      "Form follows function",
      "Architecture is frozen music",
      "Less is more"
    ],
    "correctAnswer": 3,
    "explanationZh": "“少即是多”（Less is more）是密斯·凡·德·罗极简主义美学的金科玉律。密斯追求将多余的繁复装饰剥离殆尽，通过最精纯的工业钢材、大片平板玻璃与上乘天然石材（如缟玛瑙、大理石），以最严谨克制的细部构造和节点交接，实现空间纯粹性、比例严密性与工业精神的高贵升华。",
    "explanationEn": "\"Less is more\" is the defining aphorism of Ludwig Mies van der Rohe. By paring building structures down to their quintessential tectonic essence—refined steel, expansive glass, and precision-cut stone—Mies elevated clarity and spatial proportion into high art.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "Mies",
      "Philosophy"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_108",
    "domain": "avant_garde",
    "subCategory": "Industrial Design & Schools",
    "era": "20th_avant_garde",
    "questionEn": "When Walter Gropius founded the State Bauhaus in Weimar in April 1919, what central ideological goal was proclaimed in his Founding Manifesto?",
    "questionZh": "瓦尔特·格罗皮乌斯于1919年4月在魏玛创立国立包豪斯学院时，在其建校宣言中宣告的核心办学理想是：",
    "optionsEn": [
      "The ultimate aim of all visual arts is the complete building; dissolving the arrogant barrier between craftsman and artist in a unified collaborative guild",
      "Promoting mechanical reproduction of classical Roman oil painting copies for working-class homes",
      "Restoring the medieval feudal guilds to eliminate electrical machinery from workshops",
      "Banning all architectural instruction in order to focus exclusively on graphic typography"
    ],
    "optionsZh": [
      "一切造型艺术的终极目的就是完整的建筑！打破工匠与艺术家之间傲慢的阶级壁垒，在“大营造”（Baukunst）中实现跨学科协作",
      "推动流水线机械印刷古罗马传统古典油画，以装饰工人阶级廉价住宅",
      "复辟中世纪封建行会，在手工工坊中严禁使用任何现代电力机械",
      "全面取缔建筑学专业教学，将学院完全缩减为平面字体排版专科学校"
    ],
    "correctAnswer": 0,
    "explanationEn": "In his 1919 Weimar Bauhaus Founding Manifesto, Gropius called for artists, sculptors, and craftsmen to dissolve arrogant class distinctions and unite to erect the 'building of the future', setting the foundation for the school's revolutionary craft workshop curriculum.",
    "explanationZh": "格罗皮乌斯在其起草的包豪斯建校宣言中宣告：“让我们建立一个没有阶级壁垒的工匠与艺术家新行会，共同构想并创造未来的新建筑大厦！”宣言封面以象征造型艺术与建筑统一的木刻版画《大教堂》为标志，确立了包豪斯跨学科作坊教学的激进纲领。",
    "tags": [
      "AvantGarde",
      "Bauhaus",
      "Gropius",
      "Manifesto",
      "Weimar"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_109",
    "domain": "avant_garde",
    "subCategory": "Le Corbusier Structural Concept",
    "era": "1914",
    "questionZh": "勒·柯布西耶于1914年提出的“多米诺体系”（Maison Dom-Ino），其结构专利构想的核心是：",
    "questionEn": "What was the foundational structural innovation of Le Corbusier's Maison Dom-Ino concept (1914)?",
    "optionsZh": [
      "用标准拱顶石砌筑的中世纪无梁拱桥系统",
      "由木质斜撑交叉固定、外部填塞稻草灰浆的乡村排屋",
      "仅由六根纤细钢筋混凝土立柱、三块水平平整楼板及一部连通楼梯构成的标准化预制骨架",
      "由四面封闭厚重实体砖墙承受屋顶所有荷载的封闭堡垒"
    ],
    "optionsEn": [
      "A medieval voussoir stone arch system without lateral beams",
      "Timber-braced agrarian vernacular housing insulated with straw cobbing",
      "A standardized prefabricated reinforced concrete skeleton of six slender columns, three horizontal floor slabs, and an integral staircase",
      "A fortified load-bearing masonry box carrying all roof weight on external brickwork"
    ],
    "correctAnswer": 2,
    "explanationZh": "1914年一战爆发初，柯布西耶为战后快速批量重建民居构想了“多米诺体系”（Maison Dom-Ino）。该系统将建筑还原为工业装配化的极致原型：平整无梁的钢筋混凝土楼板由内退的六根柱子支撑，楼板之间以悬臂折线楼梯相连。由于彻底消除了传统承重墙，墙体退化为自由划分的轻质隔断，为后来的“自由平面与自由立面”奠定了核心力学基石。",
    "explanationEn": "The Maison Dom-Ino (1914) by Le Corbusier reduced domestic construction to an open prefabricated reinforced concrete skeleton: six slim pilotis supporting three cantilevered slabs and a staircase, completely unburdening exterior and interior walls from load-bearing duties.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "LeCorbusier",
      "DomIno"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_110",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "What revolutionary architectural feature characterized the workshop wing of Walter Gropius's 1925-1926 Bauhaus building in Dessau?",
    "questionZh": "瓦尔特·格罗皮乌斯设计的德绍包豪斯校舍工坊楼（1925-1926），最震撼世界现代建筑史的先驱结构构造特征是：",
    "optionsEn": [
      "A massive timber space-frame dome clad in cedar wood shingles",
      "Monumental Doric stone colonnades supporting a triangular pediment",
      "Load-bearing solid masonry walls pierced by medieval lancet windows",
      "A three-story non-load-bearing structural glass curtain wall (Glasvorhangfassade) wrapping continuously around reinforced concrete cantilevered slab edges"
    ],
    "optionsZh": [
      "外覆雪松木瓦片的大型空间木构穹顶",
      "支撑巨大三角形山花的纪念性多立克古典石柱廊",
      "开凿狭窄哥特尖拱柳叶窗的厚重砖石实墙",
      "悬挑于后退混凝土柱网之外、连续三层包裹建筑转角且不承重的全玻璃幕墙 (Glasvorhangfassade)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Gropius cantilevered the concrete floor slabs beyond the interior columns, allowing the steel-framed glass curtain wall to wrap continuously around corners without any corner masonry support, providing brilliant daylight to student workshops.",
    "explanationZh": "格罗皮乌斯将承重钢筋混凝土柱向室内后退，楼板边缘向外悬挑，使无立柱遮挡的三层整体铁框玻璃幕墙（Glasvorhangfassade）晶莹通透地包裹转角，实现了现代建筑内外空间交融与轻盈体量感。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Bauhaus",
      "Gropius",
      "Curtain Wall",
      "Dessau"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_111",
    "domain": "avant_garde",
    "subCategory": "Frank Lloyd Wright Organic Architecture",
    "era": "1935",
    "questionZh": "弗兰克·劳埃德·赖特在宾夕法尼亚山谷设计的流水别墅（Fallingwater，1935），体现其“有机建筑”（Organic Architecture）哲学的决定性设计手法是：",
    "questionEn": "In designing Fallingwater (1935), which architectural strategy best demonstrates Frank Lloyd Wright's philosophy of \"Organic Architecture\"?",
    "optionsZh": [
      "将森林树木完全砍伐并修筑平整的水泥广场以展示人类工业对自然的绝对征服",
      "将悬挑混凝土阳台直接锚固于天然悬崖巨石之上，使建筑与瀑布水流、原生地貌生长融合为一体",
      "严格按照古罗马万神殿多立克柱廊比例在溪流边建造一座对称的古典神庙",
      "外立面全面涂刷鲜艳刺眼的波普艺术商业广告图案"
    ],
    "optionsEn": [
      "Clearing surrounding trees to build a flat paved square demonstrating total human mastery over the wild",
      "Anchoring cantilevered reinforced concrete trays directly into native cliff boulders, intertwining the house with the living waterfall",
      "Erecting a rigid, symmetrical Roman Doric temple on the riverbank according to classical canons",
      "Adorning exterior walls with garish commercial Pop Art advertisement motifs"
    ],
    "correctAnswer": 1,
    "explanationZh": "赖特拒绝将住宅建在瀑布对面作为隔岸观火的景观对象，而是直接将三层钢筋混凝土横向挑台深锁于天然原生岩石之内，使建筑悬浮在飞流激荡的熊跑溪瀑布上方；室内客厅地面直接裸露未经凿打的山地花岗岩石基，建筑与流水声、周围森林四季变化彻底融汇交织，堪称“建筑出自大地并属于大地”的有机建筑最高境界。",
    "explanationEn": "Wright did not situate the residence across from the falls as a detached spectator; instead, he embedded concrete cantilevered terraces directly into the natural rock ledges above the torrent, allowing the bedrock to emerge unhewn in the living room hearth.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "Wright",
      "Fallingwater",
      "OrganicArchitecture"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_112",
    "domain": "avant_garde",
    "subCategory": "Industrial Design & Schools",
    "era": "modern",
    "questionEn": "Who served as the third and final director of the Bauhaus (1930-1933), striving to depoliticize the school before moving it to an abandoned telephone factory in Berlin where it was forced to dissolve by the Nazi regime?",
    "questionZh": "在1930至1933年间担任包豪斯第三任兼最后一任校长，在纳粹压力下将学校迁至柏林废弃电话厂最终被迫解散的建筑大师是：",
    "optionsEn": [
      "Adolf Loos",
      "Walter Gropius",
      "Ludwig Mies van der Rohe",
      "Theo van Doesburg"
    ],
    "optionsZh": [
      "阿道夫·路斯 (Adolf Loos)",
      "瓦尔特·格罗皮乌斯 (Walter Gropius)",
      "路德维希·密斯·凡·德·罗 (Ludwig Mies van der Rohe)",
      "特奥·范·杜斯堡 (Theo van Doesburg)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ludwig Mies van der Rohe served as the third and final director of the Bauhaus from 1930 to 1933, de-politicizing the curriculum to focus rigorously on architectural craft. When the Dessau campus was shut by local Nazi politicians in 1932, Mies relocated the school to an abandoned telephone factory in Berlin before its final dissolution.",
    "explanationZh": "路德维希·密斯·凡·德·罗（Ludwig Mies van der Rohe）在1930年接替汉斯·迈耶担任国立包豪斯学校第三任也是最后一任校长。密斯上任后淡化了前期的激进政治色彩，全力强化纯粹建筑学专业教学，1932年德绍市议会被纳粹把持停发经费后，密斯自费将学校迁往柏林斯泰格利茨一座废弃电话工厂作为私立学校维系运营，最终在1933年7月遭纳粹警察搜查查封后被迫解散。格罗皮乌斯为第一任校长，路斯倡导空间规约，杜斯堡曾赴魏玛教授风格派课程。",
    "tags": [
      "AvantGarde",
      "Bauhaus",
      "Mies van der Rohe",
      "Berlin",
      "History"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_113",
    "domain": "avant_garde",
    "subCategory": "De Stijl Architectural Manifesto",
    "era": "1924",
    "questionZh": "特奥·范·杜斯堡（Theo van Doesburg）在1924年发表的《迈向造型建筑》宣言中，主张风格派新建筑应当具备的核心特征是：",
    "questionEn": "In his 1924 manifesto \"Towards a Plastic Architecture\", what did Theo van Doesburg declare to be the fundamental attributes of De Stijl architecture?",
    "optionsZh": [
      "沉重封闭的砖石体量、对称的古典柱廊与繁复的古典石雕山花",
      "严格遵从加泰罗尼亚中世纪民间传说图案的彩色碎瓷拼贴",
      "无中心、反立方形的开放空间，由相互平行的红黄蓝及原色平面在空间中离心伸展穿插",
      "带有高耸尖塔与彩色玻璃花窗的哥特式天国骨架"
    ],
    "optionsEn": [
      "Monumental closed stone masses, symmetrical colonnades, and sculpted neoclassical pediments",
      "Iridescent trencadís mosaics strictly reproducing Catalan folk legends",
      "An open, anti-cubic, decentered continuum composed of hovering planes and primary colors expanding centrifugally",
      "A soaring Gothic framework of pointed spires and stained-glass traceries"
    ],
    "correctAnswer": 2,
    "explanationZh": "特奥·范·杜斯堡强调风格派新建筑是“反立方形”（Anti-cubic）与“无中心”（De-centered）的。建筑不再是封闭六面体的盒子，而是将墙体拆解为独立的二维水平与垂直几何面片，施加红、黄、蓝三原色与黑白灰非彩色，各面片在三维空间中自由交错、错位穿插与悬浮，使空间呈现出无限离心延展的动态时空连续性。",
    "explanationEn": "Theo van Doesburg defined De Stijl architecture as anti-cubic, dynamic, and open. By disintegrating the traditional monolithic masonry box into hovering planar elements rendered in primary colors and neutrals, space expanded freely and centrifugally in all dimensions.",
    "tags": [
      "AvantGarde",
      "DeStijl",
      "VanDoesburg",
      "Manifesto"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_114",
    "domain": "avant_garde",
    "subCategory": "Miesian Corporate High-Rise Architecture",
    "era": "1958",
    "questionZh": "密斯·凡·德·罗在纽约西格拉姆大厦（Seagram Building，1958）外立面上，创造性设置凸出的古铜色外挂非结构工字钢竖框（I-beam），其深层的建筑美学考量是：",
    "questionEn": "Why did Ludwig Mies van der Rohe apply decorative bronze I-beam mullions to the exterior curtain wall of the Seagram Building (1958)?",
    "optionsZh": [
      "为了给高空擦窗工人提供攀爬作业的梯子把手",
      "由于城市防火规范强制要求钢结构必须用混凝土包裹，外挂工字钢能真实外显大楼内在钢结构的韵律与垂直挺拔感",
      "作为避雷针阵列以保护大楼电子设备不受雷击干扰",
      "为了阻挡阳光直射将室内采光全部降低为零"
    ],
    "optionsEn": [
      "To provide structural safety ladders for window washers to scale the skyscraper",
      "Because municipal fire codes required covering the real structural steel in concrete, the exterior I-beams articulated the building's true internal skeletal rhythm and verticality",
      "To act as an expansive lightning-rod grid shielding corporate mainframe computers",
      "To eliminate interior illumination by completely blocking incoming sunlight"
    ],
    "correctAnswer": 1,
    "explanationZh": "纽约市严格的建筑防火规范要求所有主承重钢柱必须浇筑厚重的耐火混凝土外壳，这破坏了密斯原本希望直接裸露内部钢柱的纯粹建构诚实性。为了在视觉上真实展现现代摩天楼由钢材支撑的内在生命力，密斯在窗框外部焊接了贯穿整座大楼通高的古铜色装饰性工字钢竖框（I-beam mullions），赋予平整玻璃幕墙以极具光影深度的垂直律动感与古典柱廊般的庄严尊严。",
    "explanationEn": "Because fire regulations mandated encasing structural steel in bulky fireproof concrete, Mies could not leave the actual columns exposed. He engineered exterior non-structural bronze I-beams down the facade to express the skyscraper's inner tectonic skeleton and vertical soar.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "Mies",
      "SeagramBuilding",
      "Tectonics"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_115",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "19th_century",
    "questionEn": "How did 19th-century Historicism and Eclecticism fundamentally differ from the emerging 20th-century Modernist architectural movement?",
    "questionZh": "19世纪下半叶盛行的“折衷主义与历史主义”（Historicism & Eclecticism）与20世纪现代主义建筑在对待形式与构造关系上的本质分歧在于：",
    "optionsEn": [
      "Historicism only built lightweight temporary wooden structures",
      "Historicism completely banned all religious and civic buildings",
      "Modernism required all exterior facades to be carved in marble bas-reliefs",
      "Historicism masked modern industrial iron and brick structures behind ornamental pastiches of past historical styles (Gothic, Baroque, Renaissance), whereas Modernism demanded honest expression of structure, materials, and internal function"
    ],
    "optionsZh": [
      "历史折衷主义仅允许搭建临时性的轻质木结构展览用房",
      "历史折衷主义明令禁止兴建任何宗教大教堂与公共市政建筑",
      "现代主义要求所有外立面必须手工雕琢神话大理石高浮雕",
      "历史折衷主义将现代铁构架等工业技术掩藏在古希腊罗马、哥特或巴洛克的历史外衣与石膏雕花之后；现代主义则坚决主张形式必须诚实裸露结构材料与内部真实功能"
    ],
    "correctAnswer": 3,
    "explanationEn": "19th-century Eclecticism treated style as an applied, decorative wardrobe selected arbitrarily for status or nostalgia, while the 20th-century Modernist avant-garde stripped away historicist ornament to align form directly with industrial reality.",
    "explanationZh": "19世纪折衷主义把建筑风格当成根据业主阶级趣味随意套用的“历史面具”（如火车站外贴哥特尖券、商场外贴巴洛克雕花），现代主义先锋派则发起审美断裂，要求构造逻辑与现代材料本体赤裸可见。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Historicism",
      "Eclecticism",
      "Modernism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_116",
    "domain": "avant_garde",
    "subCategory": "Frank Lloyd Wright Helical Museum",
    "era": "1959",
    "questionZh": "弗兰克·劳埃德·赖特在纽约所罗门·R·古根海姆博物馆（1959）中，颠覆传统博物馆网格展厅分间体制的革命性流线创新是：",
    "questionEn": "How did Frank Lloyd Wright radically reinvent museum exhibition circulation in the Solomon R. Guggenheim Museum in New York (1959)?",
    "optionsZh": [
      "设计了四层对称封闭的地下中世纪石窟展厅群",
      "要求观众乘坐微型室内轨道列车在各个黑暗展厅之间高速穿梭",
      "将展厅划分为数十个毫无采光窗口的封闭正方体隔间",
      "设置一条环绕中庭采光天窗、自上而下缓缓盘旋而降的连续无台阶螺旋坡道"
    ],
    "optionsEn": [
      "Excavating four symmetrical underground medieval stone grottos",
      "Requiring visitors to board high-speed indoor miniature trains between darkened galleries",
      "Segmenting exhibition space into dozens of windowless, isolated cubic cellular rooms",
      "Creating a continuous, gently inclined spiraling ramp descending around a sunlit circular central atrium"
    ],
    "correctAnswer": 3,
    "explanationZh": "纽约古根海姆博物馆彻底终结了自卢浮宫以来西方传统博物馆沿长廊或网格房间折返步行的疲劳流线。观众进入建筑后先搭乘电梯直达顶层，随后沿着坡度仅3%的一体化钢筋混凝土连续螺旋展道（长430米）自上而下缓缓步行漫游，居高临下欣赏倾斜展墙上的名画，中央巨大通高的玻璃穹顶中庭使建筑本身成为一件充满生命呼吸的有机雕塑。",
    "explanationEn": "Wright eradicated the repetitive fatigue of walking through sequential rectangular rooms. Visitors take an elevator to the apex and descend leisurely along an unbroken, gently graded 430-meter helical ramp illuminated by a soaring glass spider-web skylight.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "Wright",
      "Guggenheim"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_117",
    "domain": "avant_garde",
    "subCategory": "Gruppo 7 Rationalist Movement",
    "era": "1926",
    "questionZh": "1926年以朱塞佩·泰拉尼、菲吉尼、波利尼等米兰理工青年建筑师结成的“七人团”（Gruppo 7），在《意大利评论》发表的建党宣言中旗帜鲜明提出的主张是：",
    "questionEn": "What was the foundational declaration issued in 1926 by Gruppo 7 (including Giuseppe Terragni, Luigi Figini, and Gino Pollini) in the magazine Rassegna Italiana?",
    "optionsZh": [
      "彻底摧毁一切历史传统，用炸药爆破罗马与威尼斯的所有古迹",
      "现代建筑必须拥抱工业理性与纯净逻辑，同时应当将欧洲新时代精神与意大利古典民族传统的内在深层精髓融为一体",
      "全盘照搬美国芝加哥商业摩天大楼的一切钢架与广告立面",
      "回归中世纪拜占庭马赛克金碧辉煌的宗教狂热艺术"
    ],
    "optionsEn": [
      "Total nihilistic destruction of heritage, demolishing historical Rome and Venice with explosives",
      "Embracing industrial logic and European functionalism while infusing it with the timeless clarity of Italian classical tradition",
      "Blindly copying commercial American skyscraper facades and neon billboards",
      "A religious return to medieval Byzantine gilded mosaics and ecclesiastical ecstasy"
    ],
    "correctAnswer": 1,
    "explanationZh": "七人团（Gruppo 7）在1926年的四篇理性主义宣言中确立了意大利理性主义（Razionalismo）独特的学术基调。他们既反对沉湎于过去古典样式的历史主义折衷复古，也反对马里内蒂式的全盘虚无虚无破坏，而是主张：“过去与现在并不矛盾……新建筑将从严谨的逻辑、纯粹的功能与工业标准化中诞生，并在秩序与尺度上承袭意大利最纯粹的古典理性之魂。”",
    "explanationEn": "Gruppo 7 established Italian Rationalism (Razionalismo) by bridging avant-garde functionalism with classicism. They insisted that the new architecture must spring from rigorous logic, economy, and European machine aesthetics, while inheriting the tectonic clarity and proportions of the Italian classical spirit.",
    "tags": [
      "AvantGarde",
      "Rationalism",
      "Gruppo7",
      "Terragni"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_118",
    "domain": "avant_garde",
    "subCategory": "Terragni Casa del Fascio Proportions",
    "era": "1932 - 1936",
    "questionZh": "朱塞佩·泰拉尼在科莫法西斯大楼（Casa del Fascio，1932-1936）的立面与空间设计中，最为惊叹的几何与比例控制手法是：",
    "questionEn": "In designing the Casa del Fascio in Como (1932–1936), what geometric proportional discipline did Giuseppe Terragni employ?",
    "optionsZh": [
      "随意手绘不对称的不规则自由曲线轮廓",
      "严格按照古埃及金字塔斜角修筑四面倾斜的沉重实体石墙",
      "基于严格的正方形与黄金分割模数，将整座建筑构筑为一个底边33.2米、高16.6米（恰为1:2）的纯净几何棱体，四个立面各具不同的柱网与开洞韵律",
      "全部使用哥特式尖拱双联窗封闭所有立面开洞"
    ],
    "optionsEn": [
      "Spontaneous, uncalculated freehand asymmetrical contours",
      "Four inclined stone batter walls mimicking the geometry of Egyptian pyramids",
      "Proportioning the building as a crystalline prism measuring 33.2m wide by 16.6m high (a strict 1:2 ratio), balancing solid Botticino marble against rhythmic glazed voids",
      "Sealing all openings strictly behind Gothic pointed bifora arches"
    ],
    "correctAnswer": 2,
    "explanationZh": "科莫法西斯大楼是理性主义比例美学的珠穆朗玛峰。泰拉尼将整座建筑规定在严格的几何模数内：平面为长宽各33.2米的正方形，总高16.6米恰为底边的一半（二分之一比例）。四座立面在统一的白色博蒂奇诺大理石网格框架下，根据朝向与功能差异赋予各不相同的实体与虚空对比，中央配以通透玻璃中庭，其严密的网格几何裂解与形式自主性深深启发了包括扎哈·哈迪德（Zaha Hadid）与丹尼尔·里伯斯金（Daniel Libeskind）在内的后世解构主义建筑大师。",
    "explanationEn": "The Casa del Fascio is a monument of mathematical proportion. A prism 33.2 meters square by 16.6 meters high (1:2 ratio), its white Botticino marble frame balances solids and voids across four distinctly composed facades around a central glazed hall, profoundly inspiring later masters including Zaha Hadid and Daniel Libeskind.",
    "tags": [
      "AvantGarde",
      "Rationalism",
      "Terragni",
      "CasaDelFascio",
      "Proportions"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_119",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "industrial",
    "questionEn": "What prefabrication innovation allowed Joseph Paxton to erect the monumental Crystal Palace in London in less than nine months for the 1851 Great Exhibition?",
    "questionZh": "约瑟夫·帕克斯顿在1851年伦敦第一届万国博览会建造巨大水晶宫（Crystal Palace）时，能在短短不到九个月内完工的革命性技术创举是：",
    "optionsEn": [
      "Pre-carving Portland stone ashlar blocks by hand in nearby royal quarries",
      "Pouring massive monolithic reinforced concrete foundations using steam pumps",
      "Standardized modular prefabricated cast-iron columns, wrought-iron girders, and uniform glass panes assembled mechanically on site without mortar",
      "Inflatable rubber tensile membranes anchored by steel cables"
    ],
    "optionsZh": [
      "在皇家采石场由数千名石匠全手工预先雕凿波特兰石灰石砌块",
      "使用蒸汽泵连续浇筑高强度一体化无缝钢筋混凝土巨型深基础",
      "利用温室经验研发的标准模数化预制铸铁立柱、锻铁桁架与统一规格玻璃板，在现场无砂浆完全螺栓干式装配",
      "使用钢缆锚固由橡胶充气膜构成的张拉膜结构大厅"
    ],
    "correctAnswer": 2,
    "explanationEn": "Joseph Paxton adapted his greenhouse engineering (Chatsworth) to design a modular grid of identical cast-iron posts and gutters accommodating 300,000 panes of sheet glass, introducing industrial prefabricated assembly to world architecture.",
    "explanationZh": "园艺温室建造专家帕克斯顿采用24英尺（约7.3米）标准模数，利用火车将工厂预制铸铁构件与标准玻璃运至海德公园现场快速螺栓拼装，宣告建筑产业由手工作业迈向现代预制工业化装配时代。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Crystal Palace",
      "Paxton",
      "Prefabrication",
      "Industrial"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_120",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "Which of the following correctly enumerates Le Corbusier's canonical 'Five Points of a New Architecture' (Les 5 points d'une architecture nouvelle, 1926)?",
    "questionZh": "下列哪项准确完整地列出了勒·柯布西耶于1926年发表的“新建筑五点”（Five Points of a New Architecture）？",
    "optionsEn": [
      "1. Steel cantilever trusses; 2. Stained glass rose; 3. Buttress; 4. Bell tower; 5. Slate shingles",
      "1. Massive stone walls; 2. Semicircular arches; 3. Coffered dome; 4. Campanile; 5. Central atrium",
      "1. Pilotis (stilts); 2. Roof garden; 3. Free plan; 4. Horizontal ribbon windows; 5. Free facade",
      "1. Wooden log walls; 2. Thatched roof; 3. Central fireplace; 4. Dormer window; 5. Porch"
    ],
    "optionsZh": [
      "1. 钢结构大悬挑；2. 染色玻璃玫瑰花窗；3. 飞扶壁；4. 哥特钟楼；5. 鱼鳞状石板瓦",
      "1. 厚重砌石实墙；2. 半圆复古拱门；3. 藻井半球穹顶；4. 独立钟楼；5. 露天中央中庭",
      "1. 底层架空柱 (Pilotis)；2. 屋顶花园 (Toit-jardin)；3. 自由平面 (Plan libre)；4. 水平横向长窗 (Fenêtre en longueur)；5. 自由立面 (Façade libre)",
      "1. 规则原木搭接；2. 坡面茅草屋顶；3. 居中砌砖火炉；4. 欧式老虎窗；5. 环绕回廊木门廊"
    ],
    "correctAnswer": 2,
    "explanationEn": "Le Corbusier declared the Five Points in 1926 made possible by the reinforced concrete frame: pilotis elevating the living floor, flat roof gardens recovering ground, non-load-bearing walls for flexible interior partition (free plan) and uninterrupted ribbons of light, and an independent curtain facade.",
    "explanationZh": "柯布西耶基于钢筋混凝土骨架提出五点新建筑：柱体架空地面让自然穿流；屋顶平顶花园弥补绿化；非承重隔断实现室内自由划分；横向长窗均匀采光；外立面脱离承重自由悬挑构图。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Le Corbusier",
      "Five Points",
      "Modernism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_121",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "What was Le Corbusier's 'Maison Dom-Ino' (1914), and what structural principle did it establish for 20th-century housing?",
    "questionZh": "勒·柯布西耶于1914年提出的“多米诺体系”（Maison Dom-Ino）原型，为20世纪现代住宅结构确立的核心原理是：",
    "optionsEn": [
      "A modular brick vaulted masonry dome constructed without mortar",
      "A prefabricated wooden mobile trailer designed for rail transport",
      "A triangular tensile tent supported by central steel masts",
      "A standardized reinforced concrete frame consisting of six slender columns, three flat cantilevered horizontal slabs, and an independent perimeter staircase, completely liberating interior walls from carrying loads"
    ],
    "optionsZh": [
      "无需砂浆粘结、依靠砖块自重相互锁扣的拱形双曲面砖穹顶",
      "专用于铁轨长途运输的装配式原木拖车箱房",
      "由中央钢桅杆拉结钢丝绳索固定的三角形张拉帐篷体系",
      "由六根纤细钢筋混凝土立柱、三块水平平整悬挑楼板与独立轻质阶梯构成的标准化骨架原型，使墙体彻底摆脱承重束缚"
    ],
    "correctAnswer": 3,
    "explanationEn": "Patented in 1914 for rapid post-WWI reconstruction, the Dom-Ino system (playing on 'domus' and domino tiles) decoupled structural support from enclosing partition walls, enabling infinite spatial combinations and modern mass production.",
    "explanationZh": "多米诺（Dom-Ino）体系将“柱-板”结构与围护墙体彻底解耦，如同多米诺骨牌般可自由拼合连缀，奠定了现代多层住宅与公建“自由平面与自由立面”的全部工程基石。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Le Corbusier",
      "Maison Dom-Ino",
      "Structural Frame"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_122",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "What anthropomorphic proportioning scale was developed by Le Corbusier in 1948, fusing human bodily stature with the Fibonacci sequence and the Golden Ratio?",
    "questionZh": "勒·柯布西耶于1948年出版发表、将成年人身体尺度与斐波那契数列和黄金分割比融为一体的人体工程空间比例体系是：",
    "optionsEn": [
      "The Raumplan",
      "The Vitruvian Triad",
      "The Ken System",
      "The Modulor"
    ],
    "optionsZh": [
      "空间规划体系 (Raumplan)",
      "维特鲁威三原则 (Vitruvian Triad)",
      "日本榻榻米间矩体系 (Ken System)",
      "模度 / 模数体系 (The Modulor)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Le Corbusier's Modulor is a scale of proportions based on a standardized 1.83 m (6 foot) tall man with an upraised arm (2.26 m), generating blue and red series measurements to harmonize furniture, room heights, and urban buildings.",
    "explanationZh": "勒·柯布西耶以身高1.83米（举臂高达2.26米）的健美男子人体为基准，按照黄金分割递增递减推导出“红尺”与“蓝尺”系列尺寸（The Modulor），并在马赛公寓建筑中全面应用。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Le Corbusier",
      "Modulor",
      "Golden Ratio"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_123",
    "domain": "avant_garde",
    "subCategory": "De Stijl Counter-Composition",
    "era": "1924",
    "questionZh": "特奥·范·杜斯堡（Theo van Doesburg）于1924年提出“要素主义”（Elementarism）并创作《反构图》系列，其与蒙德里安“新造型主义”发生根本学术分歧的核心是：",
    "questionEn": "In 1924, Theo van Doesburg introduced \"Elementarism\" in his Counter-Composition paintings. What ideological divergence caused his famous rift with Piet Mondrian?",
    "optionsZh": [
      "杜斯堡主张彻底回归古典学院派写实人物肖像画",
      "杜斯堡打破蒙德里安只允许垂直与水平正交线的教条，引入了45度倾斜斜线以表现现代机器的速度感与动态张力",
      "杜斯堡要求画作必须加入大量中文字符题跋",
      "杜斯堡拒绝使用任何红黄蓝三原色"
    ],
    "optionsEn": [
      "Van Doesburg demanded an immediate return to Classical Academic portrait realism",
      "Van Doesburg broke Mondrian's strict taboo on diagonals by introducing dynamic 45-degree angled lines to embody machine vitality",
      "Van Doesburg insisted on covering paintings in classical Chinese calligraphic colophons",
      "Van Doesburg rejected primary colors in favor of muddy earthy pigments"
    ],
    "correctAnswer": 1,
    "explanationZh": "皮特·蒙德里安将严格的正交垂直与水平黑线奉为宇宙永恒精神平衡的绝对法则，严禁使用任何斜线。然而杜斯堡在1924年认为，机械工业时代充斥着速度、加速度与动能，单纯水平垂直线陷入了静态神智学的冥想停滞，必须引入倾斜45度的对角斜线（即要素主义 Elementarism），在画面中注入动态冲击力。蒙德里安对此愤怒抗议并愤而退出了风格派。",
    "explanationEn": "While Piet Mondrian sanctified vertical and horizontal orthogonal lines as the immutable spiritual harmony of the cosmos, Theo van Doesburg insisted that the machine age demanded dynamic energy. By introducing 45-degree diagonal lines in his Counter-Compositions, he triggered Mondrian's departure from De Stijl.",
    "tags": [
      "AvantGarde",
      "DeStijl",
      "VanDoesburg",
      "Mondrian",
      "Elementarism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_124",
    "domain": "avant_garde",
    "subCategory": "De Stijl & Elementarism",
    "era": "20th_avant_garde",
    "questionEn": "What doctrinal disagreement over composition caused Piet Mondrian to resign in protest from Theo van Doesburg's De Stijl movement in 1924?",
    "questionZh": "1924年皮特·蒙德里安愤而宣布退出其亲手共创的荷兰“风格派”，其与领袖特奥·凡·杜斯堡爆发决裂的核心形式争论是：",
    "optionsEn": [
      "Mondrian wanted to use curved Art Nouveau floral ornaments",
      "Van Doesburg demanded that De Stijl adopt traditional portrait painting",
      "Van Doesburg introduced 45-degree dynamic diagonal lines ('Elementarism'), which Mondrian viewed as a betrayal of pure orthogonal horizontal and vertical balance",
      "Van Doesburg refused to publish any architectural projects in the journal"
    ],
    "optionsZh": [
      "蒙德里安突然主张在色块中重新加入新艺术运动的植物柔韧曲线",
      "凡·杜斯堡强制要求风格派改画古典写实肖像画以维持期刊赞助",
      "凡·杜斯堡在“要素主义”（Elementarism）中引入45度动态对角斜线，被蒙德里安痛斥为背叛了宇宙永恒水平与垂直正交平衡信条",
      "凡·杜斯堡拒绝在《风格派》杂志上刊载任何建筑与家具实物设计方案"
    ],
    "correctAnswer": 2,
    "explanationEn": "Mondrian believed only strictly orthogonal horizontal and vertical lines could capture cosmic spiritual harmony; when Van Doesburg championed dynamic diagonals in his 1924 'Elementarism' manifesto and paintings, Mondrian quit the group in outrage.",
    "explanationZh": "蒙德里安恪守水平与垂直相交代表阴阳与万物宇宙恒常秩序；杜斯堡则认为引入45度倾斜斜线能唤醒现代机械动能与速度，两人的几何美学分歧最终导致风格派分裂走向尾声。",
    "tags": [
      "AvantGarde",
      "De Stijl",
      "Mondrian",
      "Van Doesburg",
      "Elementarism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_125",
    "domain": "avant_garde",
    "subCategory": "Italian Modernist High-Rise Housing",
    "era": "1927 - 1929",
    "questionZh": "朱塞佩·泰拉尼于1927-1929年在科莫建成的诺沃科姆姆公寓（Novocomum），因其哪个前卫建筑特征在落成时引发巨大轰动并被戏称为“远洋轮船”（Il Transatlantico）？",
    "questionEn": "Why was Giuseppe Terragni's Novocomum apartment building in Como (1927–1929) famously nicknamed \"Il Transatlantico\" (The Ocean Liner)?",
    "optionsZh": [
      "大楼底层修筑了真实的人造运河并停靠了巨型军舰",
      "转角处大胆切除厚重实体直角，嵌入全玻璃弧面圆柱体楼梯间并覆以悬挑平屋顶挑檐，宛如现代远洋轮船的驾驶台与甲板",
      "整座大楼通体刷成迷彩伪装色并安装了巨型船锚雕塑",
      "全部立面均装饰着繁复古罗马凯旋门浮雕"
    ],
    "optionsEn": [
      "An artificial navigable canal was excavated beneath the building to moor naval destroyers",
      "The street corners were dramatically scooped out to reveal curved glass cylindrical staircases beneath cantilevered horizontal slabs",
      "The entire facade was painted in naval camouflage and anchored with monumental iron ship anchors",
      "The facades were adorned with antique Roman triumphal reliefs and marble eagles"
    ],
    "correctAnswer": 1,
    "explanationZh": "科莫诺沃科姆姆公寓是意大利现代建筑史上具有里程碑意义的破冰之作。当时地方当局审批时泰拉尼提交了伪装的新古典折衷立面图纸，实际施工时却瞒天过海建成了纯正现代主义立面：街道转角处的直角实体被完全剔除，换成悬浮通透的圆柱形玻璃旋转楼梯筒，配合上部平整深挑檐，犹如一艘停泊在科莫湖畔的崭新远洋客轮（Il Transatlantico），开启了意大利建筑理性主义革命。",
    "explanationEn": "The Novocomum was a subversive triumph for Italian Rationalism. Terragni submitted conventional neoclassical blueprints to obtain planning permission, but secretly erected a radical modernist block whose scooped-out corners revealed curved glazed stair cylinders resembling the bridge of an ocean liner.",
    "tags": [
      "AvantGarde",
      "Rationalism",
      "Terragni",
      "Novocomum",
      "Como"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_126",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "20th_avant_garde",
    "questionEn": "Which German Expressionist masterpiece by Erich Mendelsohn in Potsdam (1920-1921) features an astrophysical laboratory within an aerodynamic, sculptured organic tower intended to test Einstein's theory of general relativity?",
    "questionZh": "由埃里克·门德尔松于1920-1921年在波茨坦设计的德国表现主义建筑孤本杰作，以雕塑般流线有机混凝土造型包裹天体物理实验室用于验证爱因斯坦相对论的是：",
    "optionsEn": [
      "The Einstein Tower (Einsteinturm)",
      "The Glass Pavilion at Cologne (Bruno Taut)",
      "Grosses Schauspielhaus in Berlin",
      "Chilehaus in Hamburg"
    ],
    "optionsZh": [
      "爱因斯坦天文台塔 (Einsteinturm in Potsdam)",
      "科隆玻璃展馆 (Bruno Taut)",
      "柏林大剧院 (Hans Poelzig)",
      "汉堡智利大厦 (Chilehaus)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Erich Mendelsohn sculpted the Einsteinturm in Potsdam with dynamic organic curvilinear contours; due to postwar material shortages, it was crafted from brick and covered in smooth stucco to simulate a seamless monolithic concrete casting.",
    "explanationZh": "门德尔松设计的爱因斯坦塔（Einsteinturm）充满流体动感雕塑张力，虽然因一战后混凝土短缺实际采用砖块砌筑后涂覆厚粉刷层，但其生物形态外轮廓被爱因斯坦亲自赞叹为“有机自然之美”。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Expressionism",
      "Mendelsohn",
      "Einstein Tower"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_127",
    "domain": "avant_garde",
    "subCategory": "Italian Humanist Industrial Campus",
    "era": "1934 - 1957",
    "questionZh": "建筑师路易吉·菲吉尼与吉诺·波利尼（Figini & Pollini）在皮埃蒙特大区伊夫雷亚为奥利维蒂公司设计的工业总部与工厂建筑群，在现代主义建筑史上的独特典范意义是：",
    "questionEn": "What is the enduring significance of the Olivetti industrial headquarters and factories in Ivrea, designed by Luigi Figini and Gino Pollini (1934–1957)?",
    "optionsZh": [
      "将纯粹理性主义通透玻璃幕墙与关照产业工人尊严的人文主义企业社区（托儿所、图书馆、采光车间）完美融合的社会典范",
      "建造了世界最高的纯砖石实心防空掩体塔楼",
      "全部车间一律不设任何窗户，以完全依靠人工紫外线照明闻名",
      "严格按照古希腊雅典卫城帕特农神庙等比例微缩建造"
    ],
    "optionsEn": [
      "A social and architectural benchmark uniting transparent rationalist glass curtain walls with a humanist corporate welfare campus",
      "Constructing the world's tallest solid masonry anti-aircraft bunker tower",
      "Sealing all factory floors without any windows to rely exclusively on artificial ultraviolet bulbs",
      "Replicating the Athenian Parthenon as a miniature scaled-down typewriter assembly plant"
    ],
    "correctAnswer": 0,
    "explanationZh": "菲吉尼与波利尼受富有远见的实业家阿德里亚诺·奥利维蒂（Adriano Olivetti）委托，在伊夫雷亚历时二十余年打造了奥利维蒂总部。建筑采用轻盈优雅的连续玻璃幕墙使充沛阿尔卑斯山日光涌入车间，更规划了完备的工人住宅、托儿所、康复诊所与文化图书馆，被誉为“人本主义工业乌托邦”，现已整体作为20世纪工业城市典范列入世界文化遗产。",
    "explanationEn": "Commissioned by visionary industrialist Adriano Olivetti, Figini & Pollini's Ivrea complex unified pristine Rationalist glass curtain wall architecture with comprehensive social welfare facilities (daycare, libraries, worker housing), achieving UNESCO World Heritage status as a humanist industrial city.",
    "tags": [
      "AvantGarde",
      "Rationalism",
      "FiginiPollini",
      "Olivetti",
      "Ivrea"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_128",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "Which domestic masterwork designed by Frank Lloyd Wright in rural Pennsylvania (1935) anchored dramatic reinforced concrete cantilever terraces directly above a natural mountain waterfall?",
    "questionZh": "由弗兰克·劳埃德·赖特于1935年在宾夕法尼亚州山谷中设计的哪座私人度假住宅，以大胆探出岩石的钢筋混凝土巨大悬挑阳台横跨在瀑布急流之上，成为“有机建筑”不朽丰碑？",
    "optionsEn": [
      "Hollyhock House in Los Angeles",
      "Robie House in Chicago",
      "Taliesin West in Arizona",
      "Fallingwater (Kaufmann House)"
    ],
    "optionsZh": [
      "蜀葵住宅 (Hollyhock House)",
      "罗比住宅 (Robie House in Chicago)",
      "西塔里埃森 (Taliesin West in Arizona)",
      "落水山庄 / 流水别墅 (Fallingwater / Kaufmann House)"
    ],
    "correctAnswer": 3,
    "explanationEn": "Frank Lloyd Wright's Fallingwater integrates architecture with nature by projecting bold reinforced concrete cantilevered balconies over the Bear Run waterfall, anchoring local quarry stone chimneys directly into the native bedrock.",
    "explanationZh": "赖特为考夫曼百货巨头设计的落水山庄（Fallingwater）颠覆了“在瀑布旁看瀑布”的平庸做法，让建筑悬挑直接生长在飞瀑之上，天然溪石铺就室内地面，使人与潺潺水声、森林季相融为一体。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Fallingwater_FLW_1935.jpg/800px-Fallingwater_FLW_1935.jpg",
    "fallbackImage": "/images/artworks/fallingwater.jpg",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Frank Lloyd Wright",
      "Fallingwater",
      "Organic Architecture"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_129",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "What was the international architectural significance of the 1927 Weissenhofsiedlung exhibition in Stuttgart, directed by Ludwig Mies van der Rohe?",
    "questionZh": "由路德维希·密斯·凡·德·罗统领策划的1927年斯图加特魏森霍夫住宅展（Weissenhofsiedlung），在国际现代主义建筑发展史上的决定性意义是：",
    "optionsEn": [
      "It marked the end of reinforced concrete usage in domestic construction",
      "It established the first international commercial theme park in Europe",
      "It mandated that all future German homes be constructed in traditional timber half-timbering",
      "It assembled leading European avant-garde architects (including Le Corbusier, Gropius, Mies, and J.J.P. Oud) in a unified neighborhood showcase of flat roofs, white cubic forms, and modern prefabricated housing, crystallizing the 'International Style'"
    ],
    "optionsZh": [
      "它标志着全欧洲住宅建设中彻底废弃钢筋混凝土技术",
      "它建立了欧洲历史上首个集游乐场与历史民俗表演于一体的商业主题公园",
      "它通过立法明令今后所有德国民宅必须回归传统木构半木结构风格",
      "它汇聚了欧洲当时最前卫的17位现代先锋建筑大师（柯布西耶、格罗皮乌斯、密斯、奥德等），首次在同一片示范住区中统一展示平屋顶、白色立体几何体与工业装配住宅，标志着“国际式风格”（International Style）的正式成型"
    ],
    "correctAnswer": 3,
    "explanationEn": "The 1927 Weissenhof Estate organized by the Deutscher Werkbund proved to the global public that the new architecture — clean white plaster, flat roofs, steel window frames, and flexible open spaces — was a viable, coherent international movement.",
    "explanationZh": "魏森霍夫住宅展建造了33栋现代住宅（其中柯布西耶设计的双联住宅与独立住宅被列为世界遗产），以毋庸置疑的集群力量向世界证实了去装饰、平屋顶、工业化构件的现代主义已成为不可逆转的世界共同语言。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "Weissenhofsiedlung",
      "Mies van der Rohe",
      "International Style"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_130",
    "domain": "avant_garde",
    "subCategory": "Modernist Architecture",
    "era": "modern",
    "questionEn": "What four functional urban zones were codified as the universal doctrine of modern town planning in the 1933 Athens Charter produced by CIAM (Congrès Internationaux d'Architecture Moderne)?",
    "questionZh": "国际现代建筑大会（CIAM）在勒·柯布西耶主导下于1933年第四次会议起草的《雅典宪章》（Athens Charter）中，将现代城市空间规划核心功能严格划分为哪四大独立区域？",
    "optionsEn": [
      "Dwelling (Living), Working, Recreation (Leisure), and Transportation (Circulation)",
      "Religion, Military Defense, Royal Palaces, and Agriculture",
      "Heavy Industry, Shipping Docks, Coal Mining, and Railroad Yards",
      "Commercial Shopping, Entertainment, Tourism, and Banking"
    ],
    "optionsZh": [
      "居住 (Dwelling)；工作 (Working)；游憩/休闲 (Recreation)；交通 (Transportation/Circulation)",
      "宗教祭祀；军事要塞防御；皇家宫殿行政；农业耕作种植",
      "重化工业；海港货运码头；煤炭开采矿区；铁路调度编组",
      "商业步行购物；文化娱乐演艺；跨国观光旅游；金融证券银行"
    ],
    "correctAnswer": 0,
    "explanationEn": "The 1933 CIAM Athens Charter proclaimed that rational urbanism must segregate cities into four distinct functions: living (housing), work (industry/offices), leisure (parks/green space), and circulation (high-speed transit arteries) to eliminate chaotic historic urban crowding.",
    "explanationZh": "《雅典宪章》批判传统历史城市工业与居住混杂的恶劣卫生状况，主张以高层塔楼置于广阔绿地之中，将城市划分为清晰的“居住、工作、游憩、交通”四大功能分区，深刻塑造了战后半个世纪的全球城市规划实践。",
    "tags": [
      "AvantGarde",
      "Architecture",
      "CIAM",
      "Athens Charter",
      "Urbanism",
      "Le Corbusier"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_131",
    "domain": "artist_movement",
    "subCategory": "Theoretical Manifestos",
    "era": "20th_avant_garde",
    "questionEn": "How did André Breton formally define 'Surrealism' in his historic First Surrealist Manifesto published in Paris in October 1924?",
    "questionZh": "安德烈·布勒东（André Breton）于1924年10月在巴黎发表《超现实主义第一宣言》时，对“超现实主义”作出的权威学术定义是：",
    "optionsEn": [
      "The mechanical photographic capture of working-class struggles under factory assembly lines",
      "Psychic automatism in its pure state, by which one proposes to express — verbally, by the written word, or in any other manner — the actual functioning of thought in the absence of all control exercised by reason",
      "The systematic application of Euclidean geometry and primary colors to architectural floor plans",
      "A restoration of medieval French stained glass craftsmanship dedicated to religious piety"
    ],
    "optionsZh": [
      "通过机械摄影写实捕捉现代工厂流水线下产业工人阶级的苦难斗争",
      "纯粹的精神自动主义 (Psychic automatism)，企图运用口头、书面或其他任何方式，表达思想在没有任何理性控制与审美道德干预下的真实运作",
      "将欧几里得几何与三原色严格排布于现代建筑平面图与立面之中的形式规律",
      "复兴中世纪法国彩绘教堂镶嵌玻璃手工艺以表达宗教虔诚与冥想"
    ],
    "optionsCorrectAnswer": 0,
    "correctAnswer": 1,
    "explanationEn": "André Breton drew upon Sigmund Freud's psychoanalytic discoveries of the unconscious and dream analysis, defining Surrealism as pure psychic automatism free from reason, aesthetic conventions, or moral constraints.",
    "explanationZh": "受西格蒙德·弗洛伊德精神分析学与梦的解析启发，布勒东将超现实主义界定为摆脱理性、逻辑与道德审查的“纯粹精神自动主义”，旨在将清醒现实与潜意识梦境熔铸为一种“绝对超现实”（Sur-realité）。",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Andre Breton",
      "Manifesto",
      "Automatism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_132",
    "domain": "artist_movement",
    "subCategory": "Artistic Affiliations",
    "era": "1924 - 1939",
    "questionZh": "下列哪组大师级艺术家均在20世纪20至30年代作为核心成员深入参与了超现实主义（Surrealism）视觉艺术的探索与创作？",
    "questionEn": "Which of the following cohorts of master artists were centrally affiliated with the international Surrealist visual art movement during the 1920s and 1930s?",
    "optionsZh": [
      "萨尔瓦多·达利、雷内·马格里特、胡安·米罗、阿尔贝托·贾科梅蒂",
      "瓦尔特·格罗皮乌斯、密斯·凡·德·罗、勒·柯布西耶、阿道夫·洛斯",
      "翁贝托·波丘尼、卡洛·卡拉、菲利波·马里内蒂、贾科莫·巴拉",
      "特奥·范·杜斯堡、皮特·蒙德里安、格里特·里特费尔德、巴特·范·德·莱克"
    ],
    "optionsEn": [
      "Salvador Dalí, René Magritte, Joan Miró, and Alberto Giacometti",
      "Walter Gropius, Ludwig Mies van der Rohe, Le Corbusier, and Adolf Loos",
      "Umberto Boccioni, Carlo Carrà, Filippo Tommaso Marinetti, and Giacomo Balla",
      "Theo van Doesburg, Piet Mondrian, Gerrit Rietveld, and Bart van der Leck"
    ],
    "correctAnswer": 0,
    "explanationZh": "达利、马格里特、米罗与贾科梅蒂是超现实主义画派与雕塑的核心旗手。格罗皮乌斯等人为现代主义建筑大师；波丘尼等人为未来主义先锋；范·杜斯堡与蒙德里安则属于风格派。",
    "explanationEn": "Dalí, Magritte, Miró, and Giacometti formed the central visual core of Surrealism in Paris. The other groups represent Modernist Architecture, Italian Futurism, and De Stijl respectively.",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Dali",
      "Magritte",
      "Miro",
      "Giacometti"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_133",
    "domain": "artist_movement",
    "subCategory": "Artistic Philosophy",
    "era": "1910 - 1920",
    "questionZh": "1917年乔治·德·基里科（Giorgio de Chirico）与卡洛·卡拉（Carlo Carrà）在费拉拉军医院相遇并共同奠定形而上画派（Pittura Metafisica）理论时，其核心艺术主张是：",
    "questionEn": "When Giorgio de Chirico and Carlo Carrà formulated Metaphysical Art (Pittura Metafisica) in Ferrara in 1917, what was their central artistic premise?",
    "optionsZh": [
      "歌颂内燃机轰鸣与现代工业城市的机械速度与暴力革命",
      "通过神秘的空旷意大利广场、静止的人体模型与不合理的投影，揭示日常事物背后凝固的神秘与超验哲学",
      "以彻底无透视的红黄蓝三原色网格构建宇宙普适平衡法则",
      "利用偶发拼贴与报纸碎屑嘲讽资产阶级的理性与第一次世界大战"
    ],
    "optionsEn": [
      "To celebrate internal combustion engines, mechanical speed, and violent revolutionary warfare",
      "To evoke enigmatic Italian piazzas, tailor mannequins, and uncanny shadows revealing the metaphysical mystery behind ordinary objects",
      "To construct universal cosmic harmony using non-perspectival red, yellow, and blue orthogonal grids",
      "To deploy chance collages and newspaper clippings to parody bourgeois rationality and World War I"
    ],
    "correctAnswer": 1,
    "explanationZh": "形而上画派通过描绘寂静无声的文艺复兴式空旷拱廊广场、无面五官的裁缝假人与怪诞静物并置，表达凝固、孤独与超越现实的梦境哲学，与未来主义的喧嚣速度截然对立。",
    "explanationEn": "Metaphysical Painting rejected Futurist noise and dynamism in favor of melancholic, silent colonnaded piazzas, featureless tailor mannequins, and disquieting classical statues suspended in frozen time.",
    "tags": [
      "ArtistMovement",
      "Metaphysical",
      "DeChirico",
      "Carra",
      "Ferrara"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_134",
    "domain": "artist_movement",
    "subCategory": "Theoretical Manifestos",
    "era": "20th_avant_garde",
    "questionEn": "What was the core working mechanism of Salvador Dalí's 'Paranoiac-Critical Method' formulated around 1930?",
    "questionZh": "萨尔瓦多·达利于1930年前后系统阐述的“偏执狂批判法”（Paranoiac-Critical Method），其核心运作机制是：",
    "optionsEn": [
      "Using commercial advertising stencils to replicate supermarket brand packaging",
      "Entering a deep hypnotic trance induced by mescaline or ether to paint blindly in complete darkness",
      "Painting precisely calculated scientific mathematical grids according to astronomical star charts",
      "A spontaneous method of irrational knowledge based upon the critical and systematic objectification of delirious associations and double-images without losing conscious lucid control"
    ],
    "optionsZh": [
      "使用商业广告模板在画布上机械批量套印超市商品包装商标",
      "借助致幻剂或乙醚进入重度催眠状态并在完全黑暗中盲目涂抹画布",
      "根据精确的天文星图数据在画布上用圆规直尺绘制严密科学几何网格",
      "一种基于对幻觉联想与双重歧义意象进行批判性、系统性物化重构的自发非理性认知方法，在清醒状态下将偏执狂般的妄想变为客观超写实实体"
    ],
    "correctAnswer": 3,
    "explanationEn": "Dalí defined the paranoiac-critical method as an active, conscious process where the painter deliberately hallucinates multi-layered illusions (such as a horse that simultaneously forms an elephant or a face), anchoring delirium into academic trompe-l'œil realism.",
    "explanationZh": "达利强调其方法不同于消极被动的精神自动主义，而是由艺术家主动模拟偏执狂的妄想联想能力，以高度逼真细密的古典学院派写实技法，把梦幻中的多重并置意象（如白天鹅倒影即为大象）固定在三维画幅上。",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Salvador Dali",
      "Paranoiac Critical Method"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_135",
    "domain": "artist_movement",
    "subCategory": "Cultural Ideology",
    "era": "20th_avant_garde",
    "questionEn": "What was René Magritte's primary intellectual objective in paintings like 'The Treachery of Images' and 'Words and Images'?",
    "questionZh": "勒内·马格里特在《图像的背叛》与《词语与图像》等哲学画作中，所致力于探索的深层智识目标是：",
    "optionsEn": [
      "Celebrating the mechanical speed and roar of internal combustion engines",
      "Expressing raw violent political revolution against royalist governments",
      "Developing optical pointillist dot techniques for landscape painting",
      "Subverting the arbitrary relationship between language conventions, pictorial representations, and physical reality, exposing the illusion of habitual perception"
    ],
    "optionsZh": [
      "热烈歌颂内燃机引擎与战机轰鸣所带来的机械速度与战争崇拜",
      "以血腥暴力场面直接号召发动针对君主立宪政权的无产阶级武装暴动",
      "研发用于野外写生风景画的高精细点彩光学混色实验技法",
      "颠覆语言符号、图像表征与物理实体之间被人们习惯性混淆的武断契约关系，揭示日常感知的欺骗性与神秘感"
    ],
    "correctAnswer": 3,
    "explanationEn": "Magritte operated as a philosophical poet with paint, juxtaposing clear everyday objects with mismatched verbal labels to reveal that a painted pipe is merely flat pigment on canvas, challenging the viewer's unthinking trust in linguistic and visual reality.",
    "explanationZh": "马格里特如同一位穿西装的哲学刺客，他用最冷峻写实的学院笔法将词语与图像错位拼贴，指明“烟斗的图像绝非烟斗本身”，迫使观者反思日常语言概念如何遮蔽了对世界本真奥秘的观照。",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Rene Magritte",
      "Semiotics",
      "Philosophy"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_136",
    "domain": "artist_movement",
    "subCategory": "Theoretical Manifestos",
    "era": "20th_avant_garde",
    "questionEn": "Which Italian poet founded Futurism on February 20, 1909, by publishing its fiery founding manifesto on the front page of Paris's 'Le Figaro'?",
    "questionZh": "1909年2月20日在法国巴黎《费加罗报》头版头条刊登激进宣言，狂热赞美机械文明、速度与战争，标志着“未来主义”诞生的意大利诗人是：",
    "optionsEn": [
      "Giovanni Papini",
      "Gabriele D'Annunzio",
      "Guillaume Apollinaire",
      "Filippo Tommaso Marinetti"
    ],
    "optionsZh": [
      "乔瓦尼·帕皮尼 (Giovanni Papini)",
      "加布里埃尔·邓南遮 (Gabriele D'Annunzio)",
      "纪尧姆·阿波利奈尔 (Guillaume Apollinaire)",
      "菲利波·托马索·马里内蒂 (Filippo Tommaso Marinetti)"
    ],
    "correctAnswer": 3,
    "explanationEn": "F.T. Marinetti launched Italian Futurism with his Le Figaro manifesto, famously shouting: 'A roaring motor car which seems to run on machine-gun fire is more beautiful than the Victory of Samothrace!'",
    "explanationZh": "马里内蒂以炸裂般的情绪宣称“飞驰的赛车比萨莫色雷斯的胜利女神更加美丽”，主张摧毁博物馆、图书馆等一切旧日陈规，全身心拥抱电力、速度、钢铁与大都市狂暴节奏。",
    "tags": [
      "ArtistMovement",
      "Futurism",
      "Marinetti",
      "Manifesto",
      "Le Figaro"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_137",
    "domain": "artist_movement",
    "subCategory": "Theoretical Manifestos",
    "era": "20th_avant_garde",
    "questionEn": "Which Futurist painter and sculptor authored the 'Technical Manifesto of Futurist Painting' (1910) and introduced the concepts of 'lines of force' and 'physical transcendentalism'?",
    "questionZh": "1910年执笔起草《未来主义画家宣言与技术宣言》，并率先在艺术界提出“力量线”（Lines of Force）与“物理超越主义”核心概念的未来派大师是：",
    "optionsEn": [
      "Theo van Doesburg",
      "Umberto Boccioni",
      "Carlo Carrà",
      "Filippo Tommaso Marinetti"
    ],
    "optionsZh": [
      "特奥·范·杜斯堡 (Theo van Doesburg)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "卡洛·卡拉 (Carlo Carrà)",
      "菲利波·托马索·马里内蒂 (Filippo Tommaso Marinetti)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Umberto Boccioni was the principal visual theorist and artist of Futurism. He drafted the Technical Manifesto of Futurist Painting (1910) and the Technical Manifesto of Futurist Sculpture (1912), defining lines of force and the interpenetration of simultaneous matter.",
    "explanationZh": "翁贝托·薄邱尼（Umberto Boccioni）是未来主义视觉艺术领域的首席理论家与领袖。他在1910年主笔起草并联合卡拉等人签署了《未来主义画家宣言》与《技术宣言》，率先在理论上提出“力量线”（Lines of Force）、“环境与物体的塑性共渗”（Plastic Transcendence）与“动态感知”（Dynamic Sensation）。马里内蒂为文学奠基人，卡拉为画派骨干，杜斯堡为荷兰风格派创始人。",
    "tags": [
      "ArtistMovement",
      "Futurism",
      "Boccioni",
      "Lines of Force",
      "Theory"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_138",
    "domain": "artist_movement",
    "subCategory": "Sculptural Theory",
    "era": "1913",
    "questionZh": "翁贝托·波丘尼在1913年创作的未来主义青铜雕塑代表作《空间中连续性的唯一形体》（Unique Forms of Continuity in Space）中，所践行雕塑核心革新是：",
    "questionEn": "In his iconic 1913 bronze sculpture \"Unique Forms of Continuity in Space\", what radical sculptural innovation did Umberto Boccioni pioneer?",
    "optionsZh": [
      "用现成工业金属零件拼装出的静态无动力机械结构",
      "严格遵从希腊古典人体黄金比例与绝对对称解剖学",
      "打破封闭轮廓，将运动人体的肌肉块面与穿行其间的流动气流、空间环境融为连续的空气动力学流线翼面",
      "使用原色烤漆铁管组装极简主义几何方盒"
    ],
    "optionsEn": [
      "Assembling non-motorized static kinetic structures using ready-made industrial spare parts",
      "Strictly adhering to classical Greek golden proportions and absolute symmetrical anatomy",
      "Dissolving solid contours to fuse the muscular strides of the walking figure with surrounding air currents into aerodynamic dynamic planes",
      "Erecting minimalist geometric cubes fabricated from primary-color enameled steel tubes"
    ],
    "correctAnswer": 2,
    "explanationZh": "波丘尼打破了传统雕塑封闭静态的实体边界，使疾行人体与周围的大气空间发生物理互渗（plastic dynamism），流线型块面将运动的时间过程凝固在空间中。",
    "explanationEn": "Boccioni eliminated the traditional closed silhouette, fusing the walking figure with ambient space so that trailing aerodynamic curves eternalize the trajectory of motion and speed.",
    "tags": [
      "ArtistMovement",
      "Futurism",
      "Boccioni",
      "Sculpture",
      "Dynamism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_139",
    "domain": "artist_movement",
    "subCategory": "Movement Categorization",
    "era": "20th_avant_garde",
    "questionEn": "Which Italian artist painted the iconic Futurist masterpiece 'The Funeral of the Anarchist Galli' (1911) before renouncing Futurism in 1917 to co-found Pittura Metafisica and later embrace classical 'Valori Plastici'?",
    "questionZh": "在1911年创作未来主义代表作《无政府主义者加利的葬礼》，随后于1917年在费拉拉转入“形而上画派”，最终在战后倡导“造型价值”（Valori Plastici）古典秩序回归的大师是：",
    "optionsEn": [
      "Carlo Carrà",
      "Umberto Boccioni",
      "Giorgio de Chirico",
      "Ardengo Soffici"
    ],
    "optionsZh": [
      "卡洛·卡拉 (Carlo Carrà)",
      "翁贝托·薄邱尼 (Umberto Boccioni)",
      "乔治·德·基里科 (Giorgio de Chirico)",
      "阿尔登戈·索菲奇 (Ardengo Soffici)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Carlo Carrà was a signatory of the 1910 Futurist manifestos, famously painting the swirling riot of Galli's funeral in Milan; in 1917 he met de Chirico in Ferrara, transitioning to metaphysical dreamscapes and archaic solid figures with monumental volumetric calm.",
    "explanationZh": "卡洛·卡拉（Carlo Carrà）的艺术生涯浓缩了20世纪意大利艺术变迁：从早期未来派的红黑警棍与马匹暴动冲击波，到一战期间转入形而上人偶静物，再到20年代倡导原初朴素、厚重体积感的古典秩序回归。",
    "tags": [
      "ArtistMovement",
      "Futurism",
      "Carlo Carra",
      "Metaphysical",
      "Funeral of Galli"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_140",
    "domain": "artist_movement",
    "subCategory": "Theoretical Manifestos",
    "era": "1917",
    "questionZh": "荷兰风格派（De Stijl）由皮特·蒙德里安与特奥·范·杜斯堡于1917年创立时，其宣扬的“新造型主义”（Neoplasticism）核心教条是：",
    "questionEn": "Founded in 1917 by Piet Mondrian and Theo van Doesburg, what was the core dogma of De Stijl's \"Neoplasticism\" (Nieuwe Beelding)?",
    "optionsZh": [
      "彻底剔除具象自然形态，仅允许使用水平垂直正交线、黑色网格、三原色（红黄蓝）及三非色（黑白灰）来表达宇宙的普遍纯粹和谐",
      "利用弯曲波动的植物藤蔓曲线与华丽有机铸铁来重现自然生命力",
      "依靠潜意识自动联想与梦境碎片的无序自由拼贴",
      "模仿古典希腊罗马神庙的多立克柱廊与山形三角楣"
    ],
    "optionsEn": [
      "Complete elimination of figurative forms, restricting visual expression to horizontal-vertical lines, primary colors (red, yellow, blue), and non-colors (black, white, grey)",
      "Deploying sinuous, whiplash floral curves and organic cast iron to celebrate biological vitality",
      "Relying on subconscious free association and irrational dream-montage techniques",
      "Replicating classical Greek and Roman colonnades and pediment geometries"
    ],
    "correctAnswer": 0,
    "explanationZh": "新造型主义严格排斥一切具象自然模仿与斜线，坚信直角相交与纯粹原色能超越个体情感，揭示宇宙与人类精神内在的纯粹几何法则。",
    "explanationEn": "Mondrian and Van Doesburg established that true spiritual harmony required stripping away naturalistic illusion, reducing all visual art to straight orthogonal intersections and pure primary colors.",
    "tags": [
      "ArtistMovement",
      "DeStijl",
      "Mondrian",
      "VanDoesburg",
      "Neoplasticism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_141",
    "domain": "artist_movement",
    "subCategory": "Movement Schisms",
    "era": "1924",
    "questionZh": "1924年特奥·范·杜斯堡提出“要素主义”（Elementarism）并在作品中引入45度对角斜线，直接导致了哪位风格派核心奠基人的愤怒决裂并退出运动？",
    "questionEn": "In 1924, Theo van Doesburg formulated \"Elementarism\" and introduced 45-degree diagonal lines into compositions, causing the immediate rupture and departure of which founder?",
    "optionsZh": [
      "勒·柯布西耶 (Le Corbusier)",
      "瓦尔特·格罗皮乌斯 (Walter Gropius)",
      "萨尔瓦多·达利 (Salvador Dalí)",
      "皮特·蒙德里安 (Piet Mondrian)"
    ],
    "optionsEn": [
      "Le Corbusier",
      "Walter Gropius",
      "Salvador Dalí",
      "Piet Mondrian"
    ],
    "correctAnswer": 3,
    "explanationZh": "蒙德里安坚信水平线与垂直线的正交关系是宇宙不可动摇的永恒平静平衡，而范·杜斯堡坚持斜线能赋予现代生活动能。两人在1924年因此理论分歧彻底决裂，蒙德里安退出风格派。",
    "explanationEn": "Mondrian regarded the strict horizontal-vertical grid as a sacred cosmic absolute. When Van Doesburg introduced dynamic 45-degree diagonals in his Elementarist manifestos, Mondrian resigned from De Stijl in protest.",
    "tags": [
      "ArtistMovement",
      "DeStijl",
      "Mondrian",
      "VanDoesburg",
      "Elementarism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_142",
    "domain": "artist_movement",
    "subCategory": "Cultural Ideology",
    "era": "20th_avant_garde",
    "questionEn": "What quintessential iconographical motifs define the metaphysical visual universe of Giorgio de Chirico during his golden period (1910-1919)?",
    "questionZh": "乔治·德·基里科在形而上画派黄金时期（1910-1919）画面中最具辨识度、反复出现的标志性视觉符码体系是：",
    "optionsEn": [
      "Empty arcaded Italian piazzas, deeply cast diagonal shadows, faceless tailoring mannequins, distant steam trains, ticking clocks, and classical marble statues",
      "Violent explosions of tanks, flying airplanes, and roaring factory sirens",
      "Lush impressionist water lilies in natural shimmering sunlight",
      "Dynamic overlapping typography slogans with communist hammers and sickles"
    ],
    "optionsZh": [
      "空旷寂寥的拱廊意大利广场、拉长的深黑斜阳阴影、无面部五官的裁缝假人人偶、地平线远处的蒸汽火车冒烟、停滞的钟表与古代大理石雕塑",
      "装甲坦克的剧烈爆炸、俯冲轰炸机与呼啸的现代军工厂汽笛",
      "自然波光倒影中繁茂摇曳的印象派睡莲与野外阳光",
      "拼贴动态重叠印刷字体口号与苏维埃铁锤镰刀政治宣传徽章"
    ],
    "correctAnswer": 0,
    "explanationEn": "De Chirico synthesized Friedrich Nietzsche's melancholy of autumn afternoons with Arthur Schopenhauer's enigma of objects to construct uncanny Renaissance plazas where time has frozen in perpetual philosophical unease.",
    "explanationZh": "基里科将尼采与叔本华的悲观虚无哲学视觉化，在其画中，熟悉的现实街道被抽离一切喧闹生命，仅留下拉长的斜阳死寂阴影、孤独的人偶与停滞的挂钟，营造出令人毛骨悚然的永恒神秘氛围。",
    "tags": [
      "ArtistMovement",
      "Pittura Metafisica",
      "De Chirico",
      "Iconography"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_143",
    "domain": "artist_movement",
    "subCategory": "Iconography",
    "era": "1914 - 1918",
    "questionZh": "乔治·德·基里科在形而上画派经典杰作（如《赫克托耳与安德洛玛刻》《不安的缪斯》）中反复出现的标志性核心母题是：",
    "questionEn": "Which iconic visual motif recurs persistently throughout Giorgio de Chirico's metaphysical masterworks such as \"Hector and Andromache\" and \"The Disquieting Muses\"?",
    "optionsZh": [
      "疾驰而过的现代化蒸汽机车与电报电缆",
      "工厂车间中被机械齿轮吞噬的产业工人面孔",
      "无五官特征的裁缝人体假人模型（Mannequins）与几何测绘仪器",
      "在巴洛克旋涡中升天的天使与圣徒群像"
    ],
    "optionsEn": [
      "Speeding modern steam locomotives and electric telegraph cables",
      "Industrial factory workers swallowed by mechanical cogwheels",
      "Faceless dressmaker mannequins assembled with draftsman geometric tools",
      "Soaring Baroque swarms of angels and saints ascending into gilded clouds"
    ],
    "correctAnswer": 2,
    "explanationZh": "基里科创造了缝纫人体木假人、三角测量尺、黑板与石膏几何体并置的神秘意象，剥离了人的生物属性与情感表情，化身为永恒寂静的存在哲学符号。",
    "explanationEn": "De Chirico replaced living humans with blank tailor mannequins composed of set squares, armatures, and mathematical props, representing emotionless, enigmatic ciphers within silent architectural plazas.",
    "tags": [
      "ArtistMovement",
      "Metaphysical",
      "DeChirico",
      "Mannequin",
      "Iconography"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_144",
    "domain": "artist_movement",
    "subCategory": "Creative Techniques",
    "era": "1962",
    "questionZh": "安迪·沃霍尔（Andy Warhol）在1962年转向并确立为波普艺术核心创作手段的工业复制技术是：",
    "questionEn": "In 1962, which commercial printmaking technique did Andy Warhol adopt as his signature method to revolutionize Pop Art?",
    "optionsZh": [
      "精细的手工青铜失蜡浇铸与古典打磨法",
      "照相丝网印刷技术（Photo Silk-Screen Printing）",
      "传统湿壁画（Fresco）在生石灰抹灰层上的分天作画",
      "纯手工蛋彩画在杨木板上的金箔打磨"
    ],
    "optionsEn": [
      "Precision lost-wax bronze casting and classical patination",
      "Photo silkscreen printing (screenprinting)",
      "Traditional buon fresco on wet slaked-lime plaster sections",
      "Egg tempera painstakingly layered on gessoed poplar panels"
    ],
    "correctAnswer": 1,
    "explanationZh": "沃霍尔引入照相丝网印刷，通过将新闻照片直接制版并在画布上机械重复刮墨，故意保留油墨渗漏、错位与批次差异，消解了传统艺术独一无二的“灵光”（Aura）。",
    "explanationEn": "Warhol transformed mass-media press imagery into fine art via photo silkscreening, using industrial squeegees to produce mechanically repeated prints that challenged traditional notions of artistic originality.",
    "tags": [
      "ArtistMovement",
      "PopArt",
      "Warhol",
      "Screenprinting",
      "Technique"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_145",
    "domain": "artist_movement",
    "subCategory": "Creative Techniques",
    "era": "1961 - 1965",
    "questionZh": "罗伊·利希滕斯坦（Roy Lichtenstein）在其经典波普画作（如《看，米奇！》《少女浪漫连环画》）中模拟廉价印刷漫画的核心技法特征是：",
    "questionEn": "What distinctive graphic technique did Roy Lichtenstein meticulously reproduce by hand in his iconic Pop Art paintings such as \"Look Mickey\" and \"Girls' Romances\"?",
    "optionsZh": [
      "本戴网点（Ben-Day dots）、粗黑轮廓线与刺目的三原色填充",
      "薄雾渐晕法（Sfumato）与多层半透明光油罩染",
      "狂乱飞溅的油彩滴流（Drip painting）与厚重颜料刮刀堆叠",
      "细碎的纯色光点并置（Pointillism）光学混色"
    ],
    "optionsEn": [
      "Hand-stenciled Ben-Day dots, thick black outlines, and bold primary color fills",
      "Atmospheric sfumato shading with translucent resin glazes",
      "Spontaneous enamel dripping, splattering, and heavy impasto palette-knife slashes",
      "Scientific optical pointillist dots based on prismatic color theory"
    ],
    "correctAnswer": 0,
    "explanationZh": "利希滕斯坦手工借助穿孔金属网板精准复现大众连环画中的“本戴点”（Ben-Day dots），配合粗黑勾边、扁平色块与对话气泡框，将廉价通俗图像升华为美术馆殿堂的冷酷审视。",
    "explanationEn": "Lichtenstein mimicked commercial four-color comic book printing using hand-applied Ben-Day dots, bold black contours, speech balloons, and uniform primary tones, monumentalizing pulp culture into high art.",
    "tags": [
      "ArtistMovement",
      "PopArt",
      "Lichtenstein",
      "BenDayDots",
      "Comics"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_146",
    "domain": "artist_movement",
    "subCategory": "Architectural Movements",
    "era": "1925 - 1926",
    "questionZh": "瓦尔特·格罗皮乌斯在设计包豪斯德绍校舍（Bauhaus Dessau, 1925-1926）工场车间时，开创的革命性现代主义建筑构造特征是：",
    "questionEn": "In his design of the Bauhaus Dessau workshop wing (1925–1926), what revolutionary structural innovation did Walter Gropius introduce?",
    "optionsZh": [
      "承重砖石厚墙与罗马式圆拱开窗",
      "外立面饰有繁复植物藤蔓铸铁浮雕的哥特式尖拱",
      "将钢筋混凝土承重立柱后退，让三层连续无支撑的通透玻璃幕墙（Glass Curtain Wall）悬挂于建筑转角",
      "覆以金色马赛克与洋葱头穹顶的拜占庭式拱券"
    ],
    "optionsEn": [
      "Thick load-bearing masonry walls pierced by small Romanesque round windows",
      "Gothic pointed arches clad with undulating Art Nouveau organic cast iron",
      "Setting reinforced concrete columns back from the facade to hang an unbroken, three-story glass curtain wall wrapping transparently around corners",
      "Byzantine squinches topped by gilded mosaics and onion domes"
    ],
    "correctAnswer": 2,
    "explanationZh": "格罗皮乌斯把混凝土承重骨架内缩，将外墙完全解放为大面积悬挂的透明玻璃幕墙，消除了建筑转角立柱的厚重封闭感，奠定了国际现代主义建筑透明性与功能主义标准。",
    "explanationEn": "Gropius recessed the structural reinforced concrete pillars, allowing the exterior envelope to dissolve into a cantilevered three-story glass curtain wall that turned structural transparency into an international modern manifesto.",
    "tags": [
      "ArtistMovement",
      "Modernism",
      "Bauhaus",
      "Gropius",
      "CurtainWall"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_147",
    "domain": "artist_movement",
    "subCategory": "Cultural Ideology",
    "era": "postwar_contemporary",
    "questionEn": "What was the ideological significance of Andy Warhol christening his New York studio 'The Factory' in the 1960s?",
    "questionZh": "安迪·沃霍尔在20世纪60年代将其位于纽约东47街的银色艺术工作室命名为“工厂”（The Factory），其深刻的文化批判与艺术观念意义是：",
    "optionsEn": [
      "He was complying with federal municipal zoning laws for heavy steel mills",
      "He was secretly running an underground textile sweatshop manufacturing military parachutes",
      "He was paying homage to medieval monastic scriptoriums copying Latin scrolls",
      "It subverted the romantic myth of the lone artistic genius, openly adopting industrial assembly-line division of labor and mechanical silkscreen mass-production"
    ],
    "optionsZh": [
      "这完全是为了符合纽约曼哈顿市政关于重工业钢铁冶炼厂的用地分区规范",
      "他在纽约秘密开办生产军用降落伞的地下廉价纺织作坊以规避税收",
      "他意在向中世纪僧侣在修道院抄经房里纯手工抄写羊皮卷致敬",
      "它颠覆了欧洲古典主义中艺术家作为孤高原创天才的浪漫主义神话，公然采用流水线分工合作与机械丝网批量套印生产，将艺术品赤裸化为标准化商品"
    ],
    "correctAnswer": 3,
    "explanationEn": "Warhol famously said, 'I want to be a machine.' By hiring assistants (Gerard Malanga and 'superstars') to produce screenprints en masse in a foil-draped loft, Warhol exposed how capitalism manufactures both celebrity and art as consumer items.",
    "explanationZh": "沃霍尔宣称“我想成为一台机器”。他在银箔包裹的“工厂”中，由助手协助大批量机械化印制可口可乐瓶与名人肖像，把艺术家的身份从“独创手艺人”转换为“商业品牌策划人”，彻底重构了当代艺术运作逻辑。",
    "tags": [
      "ArtistMovement",
      "Pop Art",
      "Andy Warhol",
      "The Factory",
      "Ideology"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_148",
    "domain": "artist_movement",
    "subCategory": "Artistic Affiliations",
    "era": "postwar_contemporary",
    "questionEn": "How did Roy Lichtenstein produce his trademark simulations of commercial printing Ben-Day dots in the 1960s?",
    "questionZh": "罗伊·利希滕斯坦在60年代创作波普画作时，是如何在巨大画布上制作出具有机械印刷质感的标志性“本戴网点”（Ben-Day dots）的？",
    "optionsEn": [
      "By rubbing oil paint through perforated metal or paper stencils with a stiff bristle brush, then outlining forms in bold black magna lines",
      "By using modern laser digital inkjet printing machinery imported from Japan",
      "By stamping each individual dot using rubber finger thimbles dipped in gouache",
      "By splattering enamel paint randomly from a spinning electric fan"
    ],
    "optionsZh": [
      "使用打有细密均匀圆孔的金属或厚纸网板模板，用硬毛刷将油彩颜料涂抹穿透网眼，再以黑色高反差油画轮廓线圈定形体",
      "直接使用从日本进口的高精度大型激光数码喷绘机进行大幅面打印",
      "用手套戴上特制圆形橡胶印章逐个浸蘸水粉颜料在画布上手工盖印",
      "利用高速旋转的电风扇将瓷漆无规则喷溅抛洒在倾斜画布上"
    ],
    "correctAnswer": 0,
    "explanationEn": "Lichtenstein projected small comic book panels with an opaque projector, drew them onto large primed canvas, and manually dabbed paint through perforated metal screens to reproduce the cheap halftone dots of pulp magazines with heroic monumental precision.",
    "explanationZh": "利希滕斯坦通过幻灯投影将小幅廉价漫画底稿投射在大型画布上，随后借助定制的带孔穿孔金属网板与粗刷，以纯手工极其严谨的匠心在巨幅画布上复现廉价杂志报刊的四色半调网点效果。",
    "tags": [
      "ArtistMovement",
      "Pop Art",
      "Roy Lichtenstein",
      "Ben Day dots",
      "Technique"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_149",
    "domain": "artist_movement",
    "subCategory": "Theoretical Manifestos",
    "era": "1926",
    "questionZh": "勒·柯布西耶在1926年系统提出的“新建筑五点”（Five Points of Architecture）并在萨伏伊别墅中完美实现的五个要素包括：",
    "questionEn": "Which five specific elements constitute Le Corbusier's seminal 1926 manifesto \"Five Points of Architecture\", as realized in the Villa Savoye?",
    "optionsZh": [
      "尖券拱顶、飞券支撑、彩色花窗、束柱、十字交叉平面",
      "底层独立支柱（Pilotis）、屋顶花园、自由平面、水平横向长窗、自由立面",
      "洋葱穹顶、马蹄形拱券、彩砖贴面、钟楼、多立克柱式",
      "重型厚石墙、小高窗、半圆拱券、桶形拱顶、双塔西立面"
    ],
    "optionsEn": [
      "Pointed rib vaults, flying buttresses, stained-glass clerestories, clustered piers, and Latin cross plans",
      "Pilotis (stilts), roof garden, free plan, horizontal ribbon windows, and free facade",
      "Onion domes, horseshoe arches, polychrome majolica tilework, campanile towers, and Doric orders",
      "Thick ashlar masonry walls, narrow clerestory slits, barrel vaults, and twin-towered westworks"
    ],
    "correctAnswer": 1,
    "explanationZh": "勒·柯布西耶基于钢筋混凝土骨架提出五点：1.底层架空支柱（Pilotis）；2.屋顶花园（Toit-jardin）；3.自由平面（Plan libre）；4.水平带形长窗（Fenêtre en longueur）；5.自由立面（Façade libre）。",
    "explanationEn": "Enabled by reinforced concrete frame construction, Le Corbusier formulated: 1. Pilotis lifting the building; 2. Roof terrace garden; 3. Free plan; 4. Ribbon windows; 5. Free facade independent of load-bearing walls.",
    "tags": [
      "ArtistMovement",
      "Modernism",
      "LeCorbusier",
      "FivePoints",
      "VillaSavoye"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_150",
    "domain": "artist_movement",
    "subCategory": "Architectural Movements",
    "era": "1929",
    "questionZh": "密斯·凡·德·罗为1929年巴塞罗那世博会设计的德国馆（Barcelona Pavilion），其建筑空间哲学的核心体现是：",
    "questionEn": "What is the quintessential spatial and structural achievement of Ludwig Mies van der Rohe's German Pavilion at the 1929 Barcelona International Exposition?",
    "optionsZh": [
      "采用古典轴线对称布局与巨大的科林斯式石雕门廊",
      "将全部结构重力集中于外立面装饰性砌砖券柱上",
      "模仿高迪自然曲线的彩色碎瓷片拱顶与树枝状倾斜立柱",
      "8根十字形镀铬钢柱支撑平屋顶，室内外空间通过大理石、缟玛瑙与玻璃屏风相互流动交融的“流动空间”（Flowing Space）与“少即是多”"
    ],
    "optionsEn": [
      "Rigid axial monumental symmetry fronted by towering Corinthian stone porticoes",
      "Concentrating all gravity loads onto heavy decorative brick-pier colonnades along the perimeter",
      "Imitating Gaudí's organic catenary arches with trencadís mosaics and inclined branching pillars",
      "A flat roof supported by eight cruciform chrome-plated steel columns, realizing flowing open space and \"less is more\" with free-standing onyx, travertine, and glass screens"
    ],
    "correctAnswer": 3,
    "explanationZh": "巴塞罗那德国馆将承重骨架简化为8根轻盈的镀铬十字钢柱，墙体完全非承重，大理石、缟玛瑙与深色玻璃墙屏分隔出自由流动的连续空间，完美诠释了“少即是多”（Less is more）。",
    "explanationEn": "The Barcelona Pavilion separated support from partition: eight cruciform chrome-plated steel pillars supported a hovering slab, while non-bearing planar walls of green marble and golden onyx created fluid space.",
    "tags": [
      "ArtistMovement",
      "Modernism",
      "MiesVanDerRohe",
      "BarcelonaPavilion",
      "FlowingSpace"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_151",
    "domain": "artist_movement",
    "subCategory": "Architectural Philosophy",
    "era": "1935 - 1939",
    "questionZh": "弗兰克·劳埃德·赖特在宾夕法尼亚州山林中设计的流水别墅（Fallingwater, 1935-1939），体现其“有机建筑”（Organic Architecture）哲学的核心在于：",
    "questionEn": "How does Frank Lloyd Wright's Fallingwater (1935–1939) in Bear Run, Pennsylvania, embody the core tenets of his philosophy of \"Organic Architecture\"?",
    "optionsZh": [
      "严格按照欧几里得正交方盒子与白色粉刷表面将人工建筑与自然森林彻底隔绝",
      "使用巴洛克式的椭圆双层穹顶与镀金神龛形成宏大的戏剧化室内空间",
      "建筑并非建在瀑布对面远观，而是直接悬挑跨越于瀑布急流之上，当地毛石砌筑的垂直石墙与悬挑混凝土水平露台同峡谷岩层浑然共生",
      "采用完全装配式标准化集装箱单元在山顶进行网格化平铺"
    ],
    "optionsEn": [
      "Imposing an austere white Euclidean orthogonal box that hermetically insulates human space from external nature",
      "Employing Baroque double-shell oval domes and gilded altarpieces to construct theatrical interior spectacle",
      "Cantilevering reinforced concrete terraces directly above the rushing waterfall, integrating local quarried masonry with living bedrock into an inseparable topography",
      "Arranging prefabricated industrial shipping containers in a rigid grid atop leveled forest ground"
    ],
    "correctAnswer": 2,
    "explanationZh": "赖特拒绝将自然仅作为观赏背景，而是让悬挑钢筋混凝土露台如岩层般直接延伸于瀑布上方，就地开采的粗粝石墙与活生生的天然基岩锚固在一起，使人与瀑布的声影共呼吸。",
    "explanationEn": "Wright integrated human dwelling with landscape by cantilevering broad concrete trays directly over the waterfall itself, anchoring rough-cut native Pottsville sandstone piers into the organic bedrock.",
    "tags": [
      "ArtistMovement",
      "Modernism",
      "Wright",
      "OrganicArchitecture",
      "Fallingwater"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_152",
    "domain": "artist_movement",
    "subCategory": "Architectural Movements",
    "era": "1932 - 1936",
    "questionZh": "意大利理性主义（Rationalism）建筑先驱朱塞佩·泰拉尼（Giuseppe Terragni）在科莫设计的法西斯宫（Casa del Fascio, 1932-1936），其形式几何特征是：",
    "questionEn": "Designed by Italian Rationalist Giuseppe Terragni in Como (1932–1936), what is the definitive geometric and spatial logic of the Casa del Fascio?",
    "optionsZh": [
      "一个严格基于纯粹立方体几何比例，由白色波尔图威尼斯石灰华饰面与严谨不对称网格骨架构成的“水晶透明玻璃殿堂”",
      "覆以巨大罗马式双层砖石圆穹顶与科林斯式重檐多柱式门廊",
      "模仿拜占庭金碧辉煌的马赛克壁画与不对称折线尖塔",
      "由流动的双曲面薄壳与色彩斑斓的碎瓷拼贴构成的表现主义雕塑"
    ],
    "optionsEn": [
      "A perfect geometric prism whose four distinct facades explore rationalist proportions, white Botticino marble grids, and layered spatial transparency",
      "A colossal Roman double-shell masonry dome fronted by colossal Corinthian octastyle porticoes",
      "Byzantine polychromatic gold mosaics flanking asymmetric gothic spires",
      "An organic sculptural volume constructed of undulating concrete shells clad in multicolored ceramic shards"
    ],
    "correctAnswer": 0,
    "explanationZh": "科莫法西斯宫是意大利理性主义巅峰之作。泰拉尼运用半立方体严格比例（边长33.2米，高16.6米），四面立面以白色波蒂奇诺大理石构筑深浅各异的虚实网格，体现结构理性与几何透明性。",
    "explanationEn": "The Casa del Fascio is structured as a pure half-cube (33.2m base by 16.6m height). Terragni manipulated reinforced concrete frames and Botticino marble cladding to achieve a masterpiece of Rationalist planar geometry.",
    "tags": [
      "ArtistMovement",
      "Rationalism",
      "Terragni",
      "CasadelFascio",
      "Como"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_153",
    "domain": "artist_movement",
    "subCategory": "Architectural Movements",
    "era": "1956 - 1958",
    "questionZh": "BBPR建筑事务所在米兰市中心设计的维拉斯加塔（Torre Velasca, 1956-1958），因何种开创性特征引发了国际现代主义阵营关于历史文脉的激烈论战？",
    "questionEn": "Why did BBPR's Torre Velasca in Milan (1956–1958) ignite fiery debates within international modernism and the CIAM concerning historic contextualism?",
    "optionsZh": [
      "它是完全采用全透明玻璃幕墙包装的标准美式正方形摩天大楼",
      "它完全复制了古罗马万神庙的圆环形下沉式露天剧场形式",
      "它在顶层建造了向外飞出百余米的超大跨度悬索桥索塔",
      "它上部居住层向外悬挑扩大并由外露倾斜桁架支撑，形态令人联想起中世纪伦巴第要塞塔楼，勇敢挑战了正统现代主义抹杀地域历史记忆的教条"
    ],
    "optionsEn": [
      "It was a standard American-style planar glass box skyscraper rejecting all contextual specificity",
      "It replicated the circular footprint and sunken arena of the ancient Roman Pantheon",
      "It incorporated a monumental cable-stayed suspension bridge tower cantilevered over streets",
      "Its mushroom-shaped flared upper block, supported by angled struts, echoed medieval Lombard defensive towers, challenging orthodox modernism's denial of history"
    ],
    "correctAnswer": 3,
    "explanationZh": "BBPR设计的维拉斯加塔上部扩大、由倾斜支柱支撑的独特轮廓，直接呼应了米兰主教堂与中世纪斯福尔扎城堡等历史要塞形态，开辟了将现代结构技术与城市历史环境记忆（Ambiente）融合的文脉主义新路。",
    "explanationEn": "Torre Velasca startled the International Style by flaring its upper residential floors with exposed structural struts, purposefully evoking medieval Lombard watchtowers and contextualizing the skyscraper in historic Milan.",
    "tags": [
      "ArtistMovement",
      "Rationalism",
      "BBPR",
      "TorreVelasca",
      "Contextualism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_154",
    "domain": "artist_movement",
    "subCategory": "Architectural Movements",
    "era": "1956 - 1960",
    "questionZh": "由吉奥·庞蒂（Gio Ponti）与结构大师皮埃尔·奈尔维联合设计的米兰倍耐力大厦（Pirelli Tower, 1956-1960），其造型结构上的最大创见是：",
    "questionEn": "Designed by Gio Ponti with structural engineer Pier Luigi Nervi, what was the defining aerodynamic and architectural breakthrough of Milan's Pirelli Tower?",
    "optionsZh": [
      "严格的正方体体量与四面完全均质的无柱悬挂玻璃幕墙",
      "打破传统美式矩形方盒，采用两端收窄锐利的细长梭形（六边形）平面，外立面如钻石晶体般轻盈挺拔",
      "采用古典三段式构图，底层装饰巨型罗马陶立克多柱式门廊",
      "由错位堆叠的非对称扭曲钛合金双曲面拼接而成"
    ],
    "optionsEn": [
      "A rigid rectilinear cubical volume wrapped in homogenous four-sided curtain walls",
      "A slender, tapered hexagonal (lozenge) floor plan terminating in razor-sharp edges, creating a dynamic crystalline silhouette",
      "A classical tripartite division base-shaft-capital fronted by giant Doric colonnades",
      "An asymmetric deconstructivist assemblage of stacked, twisted titanium shells"
    ],
    "correctAnswer": 1,
    "explanationZh": "倍耐力大厦由庞蒂与奈尔维合作，平面设计为中央宽阔、两端收紧的六边形梭形骨架，打破了以往摩天大楼沉重的方块盒子形态，以极致修长的优雅晶体轮廓树立了战后意大利理性主义设计的最高峰。",
    "explanationEn": "Ponti abandoned the standard bulky rectangular American tower, shaping Pirelli Tower as a diamond-faceted, slender hexagon with razor-thin end profiles, engineered with tapered concrete piers by Nervi.",
    "tags": [
      "ArtistMovement",
      "Rationalism",
      "GioPonti",
      "PirelliTower",
      "Milan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_155",
    "domain": "artist_movement",
    "subCategory": "Movement Categorization",
    "era": "20th_avant_garde",
    "questionEn": "At which Zurich tavern did Hugo Ball, Emmy Hennings, Tristan Tzara, and Hans Arp establish the Dada movement in February 1916 amidst the horrors of the First World War?",
    "questionZh": "1916年2月第一次世界大战炮火连天之际，雨果·鲍尔、特里斯唐·查拉与汉斯·阿尔普等人在中立国瑞士苏黎世的哪座传奇酒馆宣告了“达达”（Dada）反战反理性运动的诞生？",
    "optionsEn": [
      "Café de Flore in Paris",
      "Cabaret Voltaire (Spiegelgasse 1)",
      "The Red Lion Tavern in London",
      "Café Central in Vienna"
    ],
    "optionsZh": [
      "巴黎花神咖啡馆 (Café de Flore)",
      "伏尔泰酒馆 / 伏尔泰卡巴莱 (Cabaret Voltaire)",
      "伦敦红狮酒馆 (The Red Lion)",
      "维也纳中央咖啡馆 (Café Central)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dada erupted at the Cabaret Voltaire in Zurich in 1916 as a furious, nonsensical, anti-bourgeois revolt against the European civilization and nationalist rationalism that had engineered the slaughter of World War I.",
    "explanationZh": "伏尔泰酒馆（Cabaret Voltaire）见证了达达主义诞生：艺术家们朗诵无意义语音诗（Sound Poetry）、佩戴怪诞非洲木面具狂舞、抛掷撕碎纸片拼贴，用绝对的胡闹与虚无主义，对将人类拖入一战大屠杀的理性资产阶级文明进行最决绝的唾弃。",
    "tags": [
      "ArtistMovement",
      "Dada",
      "Cabaret Voltaire",
      "Zurich",
      "Hugo Ball",
      "Tzara"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_156",
    "domain": "artist_movement",
    "subCategory": "Artistic Philosophy",
    "era": "1913 - 1917",
    "questionZh": "马塞尔·杜尚（Marcel Duchamp）通过《自行车轮》（1913）与《泉》（1917）提出“现成品”（Readymade）概念，对20世纪现代艺术观念最根本的颠覆在于：",
    "questionEn": "Through his pioneering Readymades, such as \"Bicycle Wheel\" (1913) and \"Fountain\" (1917), what fundamental premise of Western art did Marcel Duchamp dismantle?",
    "optionsZh": [
      "宣示艺术的本质在于艺术家的智性选择与赋予物品新的语境概念，而非传统学院派的手工物理制作技巧与审美快感",
      "证明只有使用最昂贵的青铜与意大利卡拉拉大理石才能创作出具有神圣性的雕塑",
      "强调艺术家必须经过严格的人体解剖学写生与严谨透视学训练才能被画廊接纳",
      "主张艺术应当成为直接为工业大生产制造商品模具的商业设计工具"
    ],
    "optionsEn": [
      "Asserting that art resides in the artist's conceptual choice and recontextualization rather than manual craftsmanship or aesthetic taste",
      "Demonstrating that only costly bronze and Italian Carrara marble can generate sacred sculpture",
      "Mandating that artists undergo rigorous academic life-drawing and classical linear perspective training",
      "Proposing that fine art should subordinate itself entirely to industrial mold design for assembly lines"
    ],
    "correctAnswer": 0,
    "explanationZh": "杜尚将工业批量生产的小便斗或自行车轮冠以签名与标题置于展厅，彻底终结了“艺术品必须由艺术家亲手雕琢”的古典神话，将艺术重心从“视网膜愉悦”彻底转向“智性与观念”。",
    "explanationEn": "Duchamp demonstrated that an ordinary manufactured object could become an artwork simply through an artist's intellectual act of selection and title assignment, founding Conceptual Art.",
    "tags": [
      "ArtistMovement",
      "Dadaism",
      "Duchamp",
      "Readymade",
      "Conceptual"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_157",
    "domain": "artist_movement",
    "subCategory": "Cultural Ideology",
    "era": "20th_avant_garde",
    "questionEn": "What was Marcel Duchamp's radical philosophical motivation in selecting ordinary industrially manufactured objects as 'Readymades'?",
    "questionZh": "马塞尔·杜尚选择自行车轮、雪铲与小便斗等普通工业批量制成品作为“现成品”（Readymade）艺术的核心哲学动机是：",
    "optionsEn": [
      "To assist commercial hardware factories in selling surplus sanitation inventory",
      "To showcase his superior technical metal-forging skills to the French Academy",
      "To eliminate 'retinal art' (pleasing to the eye) in favor of conceptual intellectual choice, demonstrating that an object becomes art purely through the artist's conceptual designation and new point of view",
      "To prove that machine-made plastic was visually identical to Greek marble"
    ],
    "optionsZh": [
      "协助当时面临倒闭危机的纽约五金建材厂推销滞销积压的下水道卫浴洁具",
      "向法国美术学院证明自己具有超越常人的卓越精密金属锻压技艺",
      "彻底废除只取悦眼球肉体的“视网膜艺术”（Retinal Art），将艺术从手艺劳动升华为纯粹观念智性抉择——物品之所以成为艺术，仅仅因为艺术家的命名与赋予的新语境视界",
      "证明工业流水线塑料在光学折射上与帕罗斯古希腊大理石完全无法区分"
    ],
    "correctAnswer": 2,
    "explanationEn": "Duchamp rejected the centuries-old requirement of manual craftsmanship, asserting that art resides entirely in the mind: by selecting an ordinary object and placing it in a museum, the artist creates a new thought for that object.",
    "explanationZh": "杜尚反对画家沦为颜料的奴隶（“像画家一样愚蠢”的俗语）。现成品的关键在于“审美冷漠”：不因为它美，也不因为它丑，仅凭艺术家的概念指认抽离其实用功能，完成了艺术史上从“视觉手艺”向“哲学观念”的根本转向。",
    "tags": [
      "ArtistMovement",
      "Duchamp",
      "Readymade",
      "Conceptual Art",
      "Theory"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_158",
    "domain": "artist_movement",
    "subCategory": "Creative Techniques",
    "era": "1921 - 1922",
    "questionZh": "达达主义与超现实主义先锋曼·雷（Man Ray）在暗房中偶然发明并以自己名字命名的“物影照片”（Rayograph）制作原理是：",
    "questionEn": "What technical process defines the \"Rayograph\" (photogram) technique pioneered by Dadaist and Surrealist Man Ray in the early 1920s?",
    "optionsZh": [
      "使用大型木制针孔照相机在烈日下对模特进行数小时长时间曝光",
      "用昂贵的数码微距镜头配合频闪灯连续抓拍运动瞬间",
      "不使用照相机镜头，直接将各种日常物体置于未曝光的感光相纸上，开灯短时曝光后经显影定影显出物体的半透明负影",
      "在玻璃湿版上用细针刮出雕刻线条并在暗房中放大"
    ],
    "optionsEn": [
      "Exposing studio models for several hours using a large wooden pinhole camera under bright sunlight",
      "Shooting high-speed motion bursts with electronic flash stroboscopes and macro lenses",
      "Placing ordinary physical objects directly onto unexposed photographic paper without a camera and exposing them briefly to light",
      "Etching delicate line drawings with steel needles into wet collodion glass negatives"
    ],
    "correctAnswer": 2,
    "explanationZh": "曼·雷的“雷射线物影法”（Rayograph）完全摆脱了照相机机身与光学镜头。物体直接贴附在感光纸上受光遮挡，产生深邃神秘的黑白层次与X光般的梦幻质感。",
    "explanationEn": "Man Ray created Rayographs cameralessly by placing keys, wire coils, and combs directly atop light-sensitive silver gelatin paper, flashing the room light to generate ghostly shadowgrams.",
    "tags": [
      "ArtistMovement",
      "Dadaism",
      "ManRay",
      "Rayograph",
      "Photography"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_159",
    "domain": "artist_movement",
    "subCategory": "Sculptural Theory",
    "era": "1947 - 1960",
    "questionZh": "阿尔贝托·贾科梅蒂在二战后创作的标志性青铜雕塑（如《行走的人》《城市广场》），其视觉形式与存在主义哲学内核体现在：",
    "questionEn": "How do Alberto Giacometti's post-World War II bronze sculptures (such as \"Walking Man\" and \"City Square\") embody Jean-Paul Sartre's existentialist philosophy?",
    "optionsZh": [
      "通过饱满丰硕的古典女性肉体来歌颂战后繁衍与物质过剩",
      "人物形体被极端拉长削瘦至骨架极限，表面留有粗糙斑驳的手抓刻痕，在浩瀚空旷的空间中呈现出人类个体的孤独、脆弱与坚韧前行",
      "由闪闪发光的反光不锈钢板抛光焊接出的几何抽象多面体",
      "由精密电脑程序驱动不断变换方向的动能机械偶"
    ],
    "optionsEn": [
      "Celebrating postwar material abundance through voluptuous, classically proportioned female figures",
      "Extremely elongated, skeletal bronze figures with corroded, tactile surfaces standing isolated in vast voids, embodying fragile yet resolute human existence",
      "Faceted abstract geometric polyhedrons welded from mirror-polished stainless steel sheets",
      "Kinetic figurative automata driven continuously in random trajectories by computer chips"
    ],
    "correctAnswer": 1,
    "explanationZh": "贾科梅蒂二战后的人物雕像被削减至几乎只剩垂直游丝，粗糙侵蚀的铜质肌理与巨大的虚无空间形成对峙，萨特赞誉其雕塑“抓住了人在存在深渊边缘孤独屹立与行走的永恒尊严”。",
    "explanationEn": "Giacometti attenuated human bodies into fragile, skeletal silhouettes with scarred bronze surfaces, materializing existential solitude and resilient human presence within an engulfing void.",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Giacometti",
      "WalkingMan",
      "Existentialism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_160",
    "domain": "artist_movement",
    "subCategory": "Stylistic Evolution",
    "era": "1911 - 1920",
    "questionZh": "马克·夏加尔（Marc Chagall）在其经典代表作（如《我与村庄》《散步》《飞跃维捷布斯克》）中展现出的独特诗意风格源泉是：",
    "questionEn": "What unique cultural and emotional synthesis constitutes the poetic dreamscapes of Marc Chagall's masterpieces, such as \"I and the Village\" and \"Over Vitebsk\"?",
    "optionsZh": [
      "冷酷无情的机械工业图纸与严谨的几何投影制图法",
      "对法兰西古罗马式石雕拱门与哥特式石棺浮雕的考古复原",
      "严格遵从意大利未来主义对暴力战争与刺耳噪音的疯狂崇拜",
      "将故乡维捷布斯克的犹太民间童话、翱翔天际的爱人与牛羊牲畜，与巴黎立体主义空间折叠融为一体的梦幻色彩交响"
    ],
    "optionsEn": [
      "Austere mechanical blueprints and calculated architectural projections devoid of sentiment",
      "Archaeological reconstructions of French Romanesque stone arches and Gothic effigies",
      "Strict adherence to Italian Futurist glorification of militarism and deafening machinery",
      "Blending Hassidic Jewish folklore from his native Vitebsk with floating lovers, gentle animals, and Parisian Cubist faceted planes into colorful poetic reveries"
    ],
    "correctAnswer": 3,
    "explanationZh": "夏加尔将故乡白俄罗斯维捷布斯克的犹太民间传说、拉小提琴的乐手、倒悬的农舍与翱翔天空的情侣，同立体主义几何切割与象征主义艳丽色彩融合，创造了无与伦比的梦幻温情诗画。",
    "explanationEn": "Chagall combined memories of Hassidic folklore from his native Vitebsk with Paris Cubism, depicting floating figures, violinists on roofs, and benevolent livestock in magical, lyrical palettes.",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Chagall",
      "Vitebsk",
      "Poetic"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_161",
    "domain": "artist_movement",
    "subCategory": "Stylistic Evolution",
    "era": "1924 - 1941",
    "questionZh": "加泰罗尼亚大师胡安·米罗（Joan Miró）在成熟期（如《哈里昆的狂欢》《星座》系列）发展出的标志性超现实主义图式是：",
    "questionEn": "What singular visual language did Spanish Surrealist Joan Miró establish from the mid-1920s into his mature period (such as The Farm and The Tilled Field)?",
    "optionsZh": [
      "在深邃或纯净的原色底色上，由自由舞动的有机生物形态符号、变形眼睛、黑色骨架线与五角星辰构建的梦幻微观宇宙",
      "如同摄影般精确逼真描绘的融化时钟与腐烂驴子尸体",
      "严格按照黄金比例分割的冷峻黑色水平与垂直网格",
      "严谨遵循透视灭点的意大利文艺复兴拱廊与维纳斯石雕"
    ],
    "optionsEn": [
      "A whimsical cosmic microcosm of biomorphic signs, ladder lines, disembodied eyes, and floating celestial stars against flat primary-color fields",
      "Photographically illusionistic renderings of melting clocks and decaying putrefied animals",
      "Rigid horizontal and vertical black grids apportioned according to mathematical golden ratios",
      "Strict single-point perspective colonnades framing classical Italian Renaissance marble statues"
    ],
    "correctAnswer": 0,
    "explanationZh": "米罗摆脱了古典幻觉写实，发展出富于抒情童趣的“有机生物图式”（Biomorphic forms），将梯子、飞鸟、眼睛、星星与流动红黑曲线在纯色空间中编织成生机勃勃的宇宙天体诗篇。",
    "explanationEn": "Miró invented an organic alphabet of biomorphic pictograms—stars, moons, amoebic creatures, and thread-like lines—dancing across luminous color fields in spontaneous poetic freedom.",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Miro",
      "Constellations",
      "Biomorphic"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_162",
    "domain": "artist_movement",
    "subCategory": "Creative Techniques",
    "era": "1947 - 1950",
    "questionZh": "保罗·杰克逊·波洛克（Jackson Pollock）创立的“行动绘画”（Action Painting）与“全场滴流画法”（All-over Drip Technique），其革命性作画方式是：",
    "questionEn": "What revolutionary studio methodology characterized Jackson Pollock's formulation of \"Action Painting\" and his signature \"all-over\" drip technique?",
    "optionsZh": [
      "端坐在画架前，使用极细的黑貂毛笔在放大镜下精心刻画模特毛孔",
      "将画布固定于旋转车床上，由电动机驱动圆周离心甩墨",
      "将未绷紧的巨大生画布直接平铺在工作室地板上，身体环绕甚至踏入画布四周，手持沾有工业珐琅漆的木棍或穿孔铁罐自由挥洒舞动",
      "通过机械丝网印刷机由助手批量印制新闻摄影照片"
    ],
    "optionsEn": [
      "Sitting still at a desk, executing miniature life portraits with fine sable brushes under a magnifying glass",
      "Mounting primed canvas onto high-speed electric lathe machines to fling paint via centrifugal force",
      "Laying raw unstretched canvas directly on the studio floor, stepping into the arena, and rhythmically dripping industrial enamel from sticks and perforated cans",
      "Directing commercial factory assistants to run mechanical photo-screenprinting presses"
    ],
    "correctAnswer": 2,
    "explanationZh": "波洛克摆脱了画架与调色板的束缚，将大尺寸画布铺于地面。他借助全身肌肉律动，将重力与潜意识能量直接转化为在空间中交织缠绕的珐琅漆网，使画布成为纯粹行动发生的地界。",
    "explanationEn": "Pollock laid raw canvas on the floor, entering the pictorial field directly to fling and drip commercial enamel paint from sticks, transforming the painting into a direct record of physical bodily gesture.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArt",
      "Pollock",
      "ActionPainting",
      "Drip"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_163",
    "domain": "artist_movement",
    "subCategory": "Artistic Philosophy",
    "era": "1949 - 1960",
    "questionZh": "卢齐欧·封塔纳（Lucio Fontana）在创立空间主义（Spatialism）并创作其标志性《空间概念：期待》（Concetto spaziale: Attese）时，采取的震惊世界的核心动作是：",
    "questionEn": "In establishing Spatialism and executing his legendary series \"Concetto spaziale: Attese\", what radical physical gesture did Lucio Fontana inflict on the canvas?",
    "optionsZh": [
      "在画布上均匀涂抹二十层透明蜡质光油以达到镜面反光",
      "手持锋利的手术刀果断划破单色布面（Tagli），形成狭长幽深的裂口，打破二维画面的虚拟假象以连接画布背后的真实三维物理空间",
      "用喷火枪将整幅画布烧毁只留下外围焦黑的木质内框",
      "将数千枚古罗马金币整齐镶嵌在画布正中心"
    ],
    "optionsEn": [
      "Polishing twenty coats of clear wax varnish across the linen to achieve a mirror sheen",
      "Using a sharp razor or craft knife to slash monochromatic canvases (Tagli), rupturing 2D illusionism to open painting into literal 3D space",
      "Incinerating the entire linen surface with a blowtorch until only charred stretcher bars remained",
      "Embedding thousands of ancient Roman gold coins symmetrically into the center of the canvas"
    ],
    "correctAnswer": 1,
    "explanationZh": "封塔纳用刀锋利落刺破或割开（Tagli）紧绷的单色画布。这一刀并非破坏，而是将绘画从两维平面的虚假透视束缚中彻底解放，使阴影与宇宙空间真实穿透画布。",
    "explanationEn": "Fontana slashed through pristine monochrome canvases with a knife, creating dark voids that broke the traditional two-dimensional pictorial boundary to integrate real light, shadow, and architectural space.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArt",
      "Fontana",
      "Spatialism",
      "Tagli"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_164",
    "domain": "artist_movement",
    "subCategory": "Artistic Philosophy",
    "era": "1957 - 1960",
    "questionZh": "皮耶罗·曼佐尼（Piero Manzoni）在战后激进艺术探索中创作的《无色》（Achromes）系列，其反表现主义的核心理念是：",
    "questionEn": "What anti-expressive conceptual philosophy defines Piero Manzoni's groundbreaking \"Achromes\" series initiated in 1957?",
    "optionsZh": [
      "用浓墨重彩表现艺术家强烈的个人痛苦与战争创伤",
      "复兴文艺复兴古典画派丰富的明暗对照法与繁复古典叙事层次",
      "在电脑荧光屏上实时生成无休止变化的像素动画",
      "彻底剔除所有色彩与叙事意象，仅使用浸透白色高岭土（Kaolin）的粗糙褶皱帆布或棉球，让材料本身的纯粹物理自足性成为作品自身"
    ],
    "optionsEn": [
      "Drenching canvases in saturated primary colors to express volcanic emotional anguish and existential trauma",
      "Reviving Renaissance classical chiaroscuro modeling and elaborate mythological narrative layers",
      "Generating continuously evolving computerized pixels across cathode-ray oscilloscope tubes",
      "Eliminating color and emotional representation by soaking pleated canvases in liquid kaolin (white clay), asserting the absolute self-referential presence of the surface"
    ],
    "correctAnswer": 3,
    "explanationZh": "曼佐尼用高岭土浆水浸泡褶皱帆布，风干后凝固为纯白无瑕的表面。他拒绝“色彩”与任何主观情感表现，认为画布不应“代表”外界任何事物，其本身就是一片自足而绝对的无色真实。",
    "explanationEn": "Manzoni rejected color and authorial expression, soaking pleated canvas and stitched cloth in white kaolin clay so that the work became a completely colorless, self-signifying, and autonomous object.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArt",
      "Manzoni",
      "Achrome",
      "Concept"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_165",
    "domain": "artist_movement",
    "subCategory": "Architectural Movements",
    "era": "1958 - 1970",
    "questionZh": "奥斯卡·尼迈耶（Oscar Niemeyer）在巴西利亚大教堂（Cathedral of Brasília, 1958-1970）的造型设计中，展现其新表现主义建筑风格的核心手法是：",
    "questionEn": "In his design of the Cathedral of Brasília (1958–1970), what defining architectural form manifests Oscar Niemeyer's poetic Neo-Expressionist vision?",
    "optionsZh": [
      "采用方正冷峻的灰色毛面混凝土立方体封闭堡垒",
      "完全复制哥特式巴黎圣母院的尖券肋架穹顶与飞券群",
      "由16根重达90吨的优雅双曲面混凝土抛物线柱环抱向上合拢，如同向苍穹祈祷的双手或荆棘王冠，柱间嵌以纯净彩色玻璃天幕",
      "由巨大的古埃及式金字塔斜面与狮身人面像石雕围合"
    ],
    "optionsEn": [
      "An austere, opaque bunker-like cubic monolith formed of rough unadorned grey concrete",
      "An exact replica of the Gothic flying buttresses and nave vaulting of Notre-Dame de Paris",
      "Sixteen soaring parabolic reinforced concrete curved columns converging toward the heavens like praying hands or a crown of thorns, enclosing stained-glass curtains",
      "An imposing stepped pyramid complex surrounded by colossal neo-Egyptian stone sphinxes"
    ],
    "correctAnswer": 2,
    "explanationZh": "尼迈耶打破了国际式冷酷的正交方盒子，利用巴西钢筋混凝土的可塑性，设计了16根向内聚拢又向外舒展的优雅双曲抛物线立柱，宛若向上升腾的纯洁冠冕，光线透过滤色玻璃倾泻在地下圆形中殿。",
    "explanationEn": "Niemeyer rejected rigid European Functionalism, deploying 16 identical hyperbolic concrete pillars that sweep upward and flare outward like a crown of thorns, sheltering an ethereal underground nave with stained glass.",
    "tags": [
      "ArtistMovement",
      "NeoExpressionism",
      "Niemeyer",
      "Brasilia",
      "Cathedral"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_166",
    "domain": "renaissance_classical",
    "subCategory": "Romanesque Architecture",
    "era": "1080 - 1128",
    "questionZh": "伦巴第罗曼建筑行会建造的米兰圣安布罗焦圣殿（Basilica di Sant'Ambrogio），在罗曼式建筑结构演进中的开创性突破是：",
    "questionEn": "Constructed by the Lombard Guild, what structural milestone in Romanesque architecture was achieved by the Basilica di Sant'Ambrogio in Milan?",
    "optionsZh": [
      "在中殿首次成功应用带对角加强肋的双圆心肋架十字拱顶（Ribbed Groin Vault），形成由四分拱与前庭列柱中庭构成的坚固砖构骨架",
      "完全剔除任何柱子与隔墙，由单跨钢结构屋架覆盖整座中殿",
      "在西立面建造两座百米高的镂空石雕尖塔与彩绘玫瑰花窗",
      "采用古典科林斯大理石双柱围合的露天露天剧场"
    ],
    "optionsEn": [
      "Early pioneering deployment of diagonal ribbed groin vaults in the nave, supported by an alternate pier system and a grand brick-arcaded quadriporticus atrium",
      "Eliminating all columns and partitions beneath a single-span steel roof truss",
      "Erecting twin hundred-meter-tall perforated stone spires flanking a stained-glass rose window",
      "An open-air amphitheater surrounded by paired classical Corinthian marble colonnades"
    ],
    "correctAnswer": 0,
    "explanationZh": "圣安布罗焦圣殿是伦巴第罗曼式建筑最高典范。其坚固的红砖砌体、前方广阔的四合院前庭（Atrium）以及中殿带有粗壮对角肋条的肋架拱顶，为欧洲中世纪拱券结构发展提供了关键范本。",
    "explanationEn": "Sant'Ambrogio in Milan represents the peak of Lombard Romanesque engineering; its expansive quadriporticus atrium, compound brick piers, and heavy rib vaults marked a crucial step toward medieval vaulting systems.",
    "tags": [
      "RenaissanceClassical",
      "Romanesque",
      "SantAmbrogio",
      "LombardGuild",
      "RibbedVault"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_167",
    "domain": "renaissance_classical",
    "subCategory": "Romanesque Architecture",
    "era": "1063 - 1173",
    "questionZh": "比萨罗曼建筑学派在营建比萨奇迹广场建筑群（主教座堂、洗礼堂、比萨斜塔钟楼）时，确立的标志性外立面装饰语言是：",
    "questionEn": "In developing the monumental Piazza dei Miracoli ensemble in Pisa, what signature architectural language did the Pisan Romanesque school establish?",
    "optionsZh": [
      "满布哥特式尖拱肋架与高耸飞扶壁的轻盈彩色玻璃幕墙",
      "以白色大理石为基底，层叠排布精致典雅的半圆形连续盲拱券廊（Blind Arcades）与黑白相间的大理石水平饰带",
      "采用厚重不透光的粗糙花岗岩毛石乱堆砌体",
      "模仿伊斯兰马蹄形拱券并饰以金色几何马赛克"
    ],
    "optionsEn": [
      "Lightweight stained-glass curtain walls braced by pointed Gothic rib vaults and soaring flying buttresses",
      "Tier upon tier of delicate open marble arcades and blind decorative colonnades set against horizontal polychrome marble revetments",
      "Rough, monolithic unhewn granite cyclopean masonry devoid of openings",
      "Horseshoe arches embellished with gilded Islamic geometric mosaic patterns"
    ],
    "correctAnswer": 1,
    "explanationZh": "比萨学派以明快的白色卡拉拉大理石为基调，在大教堂与钟楼外立面上叠加多层优雅的微型开敞拱券柱廊，配以黑白相间的大理石横带，呈现出托斯卡纳罗曼式独有的空灵明净与古典回响。",
    "explanationEn": "Pisan Romanesque is defined by tiered open galleries of slender marble colonnettes wrapping around the Cathedral, Baptistery, and Leaning Tower, accented by horizontal black-and-white marble stripes.",
    "tags": [
      "RenaissanceClassical",
      "Romanesque",
      "Pisa",
      "LeaningTower",
      "Arcades"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_168",
    "domain": "renaissance_classical",
    "subCategory": "Romanesque Architecture",
    "era": "1005 - 1049",
    "questionZh": "法兰西罗曼建筑行会在兰斯营建的圣雷米圣殿（Basilica of Saint-Remi），在朝圣教堂建筑形制上的代表性特征是：",
    "questionEn": "In the construction of the Basilica of Saint-Remi in Reims, what defining typological feature of Romanesque pilgrimage churches was realized?",
    "optionsZh": [
      "四面完全无窗的古罗马斗兽场式同心圆环形看台",
      "由四个标准钢架玻璃方盒子沿东西单一线性轴线排布",
      "宏大深远的长方形巴西利卡中殿，配置宽阔的侧廊看台楼厅（Tribune galleries）以及供络绎不绝的朝圣者瞻仰圣物而不干扰修道士礼拜的环形唱诗班回廊（Ambulatory）",
      "纯正交红黄蓝三原色色块装饰的平顶大厅"
    ],
    "optionsEn": [
      "A concentric circular amphitheater derived from Roman arenas without external windows",
      "Four steel-framed glass boxes arranged along an east-west axis",
      "An expansive Romanesque nave featuring vaulted side-aisle tribune galleries and an ambulatory around the choir to circulate pilgrimage crowds around holy relics",
      "A flat-ceilinged hall painted in primary orthogonal red, yellow, and blue planes"
    ],
    "correctAnswer": 2,
    "explanationZh": "兰斯圣雷米圣殿为容纳来自欧洲各地的圣徒瞻仰圣雷米圣髑，设计了宽敞深邃的中殿与二层楼厅，并在祭坛后方设立环形半圆回廊与放射状小礼拜堂，完美解决了中世纪大规模朝圣人流的动线组织。",
    "explanationEn": "Saint-Remi in Reims integrated an eleven-bay Romanesque nave with vaulted galleries and an ambulatory chapels plan, resolving circulation for large crowds venerating the ampulla and relics of Saint Remigius.",
    "tags": [
      "RenaissanceClassical",
      "Romanesque",
      "SaintRemi",
      "Pilgrimage",
      "Ambulatory"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_169",
    "domain": "renaissance_classical",
    "subCategory": "Romanesque Architecture",
    "era": "1299 - 1314",
    "questionZh": "由建筑大师阿诺尔福·迪·坎比奥（Arnolfo di Cambio）在佛罗伦萨主持设计的领主宫/旧宫（Palazzo Vecchio），其建筑风貌所折射的中世纪托斯卡纳城邦政治特征是：",
    "questionEn": "Designed by Arnolfo di Cambio in Florence, what civic and defensive features characterize the Palazzo Vecchio (1299–1314)?",
    "optionsZh": [
      "轻盈通透的四面大面积落地全玻璃幕墙与彩色植物铁艺",
      "严格遵从帕拉第奥神庙立面法则的双层科林斯石雕列柱",
      "完全模仿威尼斯水上总督府的轻灵哥特花饰镂空连拱",
      "厚重坚固的粗琢托斯卡纳毛石（Rustication）砌体外墙、顶部向外悬挑的齿孔垛口机械壕走廊（Machicolations），以及高耸偏心矗立、具有监控全城威慑力的阿诺尔福防御塔楼"
    ],
    "optionsEn": [
      "Floor-to-ceiling glass curtain walls draped with floral Art Nouveau ironwork",
      "Strict Palladian temple facades articulated by tiered Corinthian marble orders",
      "Delicate, airy Gothic tracery arcades mimicking the Venetian Doge's Palace",
      "Massive rusticated Tuscan stone masonry, projecting machicolated battlements with Guelf crenellations, and the commanding off-center Arnolfo Tower asserting civic authority"
    ],
    "correctAnswer": 3,
    "explanationZh": "阿诺尔福·迪·坎比奥将佛罗伦萨共和国市政厅设计为一座坚不可摧的城市堡垒。粗粝的毛石墙面、挑出防御垛口与高达94米的偏心钟塔，体现了基伯林派与归尔甫派内战动荡年代佛罗伦萨市民自治政府的严密防御。",
    "explanationEn": "Arnolfo di Cambio designed Palazzo Vecchio as a fortress-palace for the Florentine Republic, featuring rusticated stone walls, crenellated parapets, and the 94-meter Arnolfo Tower as a bastion of civic power.",
    "tags": [
      "RenaissanceClassical",
      "Romanesque",
      "ArnolfoDiCambio",
      "PalazzoVecchio",
      "Florence"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_170",
    "domain": "renaissance_classical",
    "subCategory": "Gothic Architecture",
    "era": "1220 - 1270",
    "questionZh": "法兰西哥特大教堂工匠行会建造的亚眠主教座堂（Amiens Cathedral），在盛期哥特大教堂内部高度与光线上的极致追求体现在：",
    "questionEn": "Erected by master stonemasons of the French Gothic Guild, how did Amiens Cathedral (1220–1270) push the technical envelope of High Gothic architecture?",
    "optionsZh": [
      "中殿净空拱顶高度达到创纪录的42.3米，由精密细致的四分肋骨拱与庞大的外部双层双飞扶壁（Flying Buttresses）支撑，使墙体完全被三层高耸采光窗（Clerestory）消解为璀璨的光之圣殿",
      "取消所有窗户，依靠室内数千根蜂蜡烛台提供微弱照明",
      "采用低矮粗壮的罗马式八角砖石立柱与厚达四米的承重无窗外墙",
      "在外立面全部覆以巴洛克镀金贝壳与浮雕天使群"
    ],
    "optionsEn": [
      "Nave vaults soaring to an unprecedented 42.3 meters, braced by double-tiered flying buttresses that allowed the masonry walls to dissolve into monumental stained-glass clerestories",
      "Eliminating all windows to rely exclusively on thousands of beeswax candles",
      "Low, massive Romanesque octagonal piers supporting windowless 4-meter-thick stone walls",
      "Cladding the exterior completely in Baroque gilded stucco shells and cherub sculptures"
    ],
    "correctAnswer": 0,
    "explanationZh": "亚眠大教堂是法国盛期哥特建筑的登峰造极之作。其内部拱顶高达42.3米，立面上柱束极细如琴弦向上延伸，尖拱券与外部双层飞券将屋顶重力引向室外，整座中殿如同由彩色玻璃镶嵌而成的空中晶体。",
    "explanationEn": "Amiens Cathedral realized the High Gothic ideal of spiritual luminosity: its soaring 42.3-meter quadripartite vaults, slender bundled piers, and stepped flying buttresses dissolved wall mass into sheets of stained glass.",
    "tags": [
      "RenaissanceClassical",
      "Gothic",
      "AmiensCathedral",
      "FrenchGothic",
      "FlyingButtress"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_171",
    "domain": "renaissance_classical",
    "subCategory": "Gothic Architecture",
    "era": "1163 - 1250",
    "questionZh": "耸立在巴黎西岱岛上的巴黎圣母院（Notre-Dame de Paris），在早期向早期盛期哥特式演变中贡献的开创性构造是：",
    "questionEn": "Dominating the Île de la Cité, what major structural innovation in the evolution of early Gothic vaulting and support is exemplified by Notre-Dame de Paris?",
    "optionsZh": [
      "使用古埃及方尖碑作为支撑屋顶的立柱",
      "六分肋架十字拱顶（Sexpartite vaults）的应用，以及围绕唱诗班与中殿率先大规模采用单跨轻盈飞扶壁（Flying buttresses）直接抵消拱顶侧推力",
      "完全使用铸铁和玻璃预制装配而成的无梁楼盖",
      "正方形平面九宫格布局与拜占庭洋葱头穹顶"
    ],
    "optionsEn": [
      "Using ancient Egyptian obelisks as load-bearing roof pillars",
      "Pioneering the monumental integration of six-part rib vaults with sweeping single-span flying buttresses around the choir and nave to counterbalance lateral vault thrusts",
      "A column-free flat slab system precast entirely from industrial cast iron and plate glass",
      "A nine-square grid plan crowned by gilded Byzantine onion domes"
    ],
    "correctAnswer": 1,
    "explanationZh": "巴黎圣母院中殿采用坚固的六分肋架拱顶。为克服早期厚重墙体的局限，工匠在外墙加装了轻盈优美的弧形单跨飞券（飞扶壁），直接跨越侧廊将拱顶外推推力传导至外墩，让中殿得开设大玫瑰花窗。",
    "explanationEn": "Notre-Dame de Paris perfected sexpartite rib vaulting and introduced monumental flying buttresses that spanned the outer aisles in dramatic leaps, stabilizing the high nave clerestory and rose windows.",
    "tags": [
      "RenaissanceClassical",
      "Gothic",
      "NotreDame",
      "FrenchGothic",
      "SexpartiteVault"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_172",
    "domain": "renaissance_classical",
    "subCategory": "Gothic Architecture",
    "era": "1248 - 1880",
    "questionZh": "德意志高耸哥特工匠行会历经数个世纪营建的科隆主教座堂（Cologne Cathedral），其最震撼人心的立面与结构特征是：",
    "questionEn": "Constructed over centuries by the German High Gothic Guild, what architectural feature distinguishes Cologne Cathedral (Kölner Dom)?",
    "optionsZh": [
      "平整低矮的罗曼式木梁草坡屋面",
      "完全模仿古罗马万神庙的单一巨大混凝土无梁圆穹顶",
      "双塔西立面上高达157米的石雕镂空尖拱双塔（Twin Spires），内部深邃壮丽的五廊式中殿与垂直如刀削般的石雕蕾丝窗棂饰花（Tracery）",
      "采用完全对称的红砖砌筑伊斯兰八角宣礼塔"
    ],
    "optionsEn": [
      "A low, horizontal Romanesque timber-trussed thatch roof",
      "A singular unreinforced concrete rotunda dome replicating the Roman Pantheon",
      "Twin monumental openwork stone spires soaring to 157 meters on the west facade, fronting a five-aisle nave and hyper-vertical geometric tracery",
      "Symmetrical red-brick octagonal minarets derived from Moorish Andalusia"
    ],
    "correctAnswer": 2,
    "explanationZh": "科隆大教堂将法国盛期哥特（以亚眠大教堂为蓝本）的垂直主义推向狂热的顶峰。西立面两座高达157米的镂空石雕双塔如利剑刺破苍穹，是世界上哥特式双塔大教堂中立面体量最雄伟的石构奇迹。",
    "explanationEn": "Kölner Dom took French High Gothic verticality to its zenith, crowning its five-aisled basilica with twin filigreed stone spires reaching 157 meters, creating the largest Gothic facade in the world.",
    "tags": [
      "RenaissanceClassical",
      "Gothic",
      "CologneCathedral",
      "GermanGothic",
      "TwinSpires"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_173",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "How did Filippo Brunelleschi miraculously erect the colossal 45-meter-wide octagonal dome of Santa Maria del Fiore in Florence (1420-1436) without timber scaffolding centering from the ground?",
    "questionZh": "菲利波·布鲁内莱斯基在营建佛罗伦萨圣母百花大教堂跨度达45米的八角形巨型穹顶（1420-1436）时，在没有从地面搭建传统满堂木支架支撑的情况下，实现的工程奇迹核心技术是：",
    "optionsEn": [
      "Inflating a giant balloon membrane filled with lighter-than-air hydrogen gas",
      "Inventing a self-supporting double octagonal shell tied with hidden stone and iron chains, laid with interlocking herringbone brickwork (spina di pesce) and hoisted with novel ox-powered crane machinery",
      "Pouring liquid Roman pozzolanic volcanic concrete over an immense mound of earth mixed with gold coins",
      "Constructing a solid dome of glued pine timber ribs covered in sheet copper"
    ],
    "optionsZh": [
      "向穹顶下方注入比空气轻的热气球巨大气囊以托举石材",
      "首创内外双层自承重八角穹壳系统，内嵌石材铁扣箍紧环链，采用交错自锁的“鱼骨状砌砖法”（Spina di pesce），并自主研发多速公牛动力提升起重机械",
      "堆填填满金币的数万吨泥土作为内模，并连续浇注古罗马火山灰混凝土",
      "使用榫卯胶合松木板拼接成实心木肋拱壳，表面外包薄紫铜板"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brunelleschi avoided the impossible cost and timber shortages of falsework by employing an ingenious self-supporting herringbone masonry pattern that locked bricks horizontally between 8 major and 16 minor radial ribs, hoisting materials with his patented reversable hoist.",
    "explanationZh": "百花穹顶跨度巨大且高达54米无法搭建满堂木支架，布鲁内莱斯基采用内外双壳中空构造以大幅减重，利用斜插的鱼骨砌法让砖石在自重下相互咬合不向内坍塌，并以24根大理石肋条与水平木铁环箍收紧，宣告文艺复兴大营造时代的降临。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Brunelleschi",
      "Florence Dome",
      "Engineering"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_174",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which civic loggia in Florence, designed by Filippo Brunelleschi in 1419, inaugurated Renaissance architecture with its modular square bay rhythm, semicircular arches on slender composite columns, and glazed terracotta roundels by Andrea della Robbia?",
    "questionZh": "由布鲁内莱斯基受丝绸行会资助在佛罗伦萨圣母安农齐亚塔广场设计的哪座育婴堂回廊（1419），以精准的纯正立方体进深模数、纤细柱头半圆拱与德拉·罗比亚婴儿彩陶圆盘，正式宣告了文艺复兴建筑学诞生？",
    "optionsEn": [
      "Pazzi Chapel at Santa Croce",
      "Ospedale degli Innocenti (Foundling Hospital)",
      "Sagrestia Vecchia at San Lorenzo",
      "Loggia dei Lanzi"
    ],
    "optionsZh": [
      "帕齐礼拜堂 (Pazzi Chapel)",
      "孤儿院 / 育婴堂敞廊 (Ospedale degli Innocenti)",
      "圣洛伦佐老圣器室 (Sagrestia Vecchia)",
      "兰奇敞廊 (Loggia dei Lanzi)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Ospedale degli Innocenti (begun 1419) established Renaissance spatial modularity: each bay is an exact cube where column height equals intercolumniation and porch depth, adorned with blue-and-white glazed terracotta roundels of swaddled infants.",
    "explanationZh": "佛罗伦萨育婴堂（Ospedale degli Innocenti）以纯粹的理性几何重新定义公共建筑：柱高、柱距与敞廊进深严格等于一模数，九个半圆帆拱轻灵舒展，拱脚上方镶嵌安德烈·德拉·罗比亚蓝白釉陶婴儿圆盘，是文艺复兴建筑最典雅的人文主义开山之作。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Brunelleschi",
      "Ospedale degli Innocenti",
      "Modularity"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_175",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "In his foundational architectural treatise 'De re aedificatoria' (1452), how did Leon Battista Alberti famously define the concept of 'Beauty' (concinnitas)?",
    "questionZh": "莱昂·巴蒂斯塔·阿尔伯蒂在其1452年撰写的奠基性理论巨著《论建筑》（De re aedificatoria）中，对“美”（Concinnitas / 和谐）给出的至高经典定义是：",
    "optionsEn": [
      "The functional efficiency of a steam engine running at maximum velocity",
      "Whatever building costs the most gold and contains the richest gilded ornament",
      "The random chaotic asymmetry produced by automatic dream painting",
      "The harmony of all parts, in whatsoever subject it appears, fitted together with such proportion and connection, that nothing could be added, taken away, or altered, but for the worse"
    ],
    "optionsZh": [
      "蒸汽机动力引擎在极限最高机械运转速度下所展现的工业功耗比",
      "凡是耗费最多黄金库银、镶嵌最浓密镀金浮雕与名贵宝石的建筑就是最美的",
      "由无意识梦幻联想所产生的无序、偶发与完全不对称结构形态",
      "各组成部分之间的和谐统一，无论在何种对象中，它们都以极其完美的比例与秩序契合在一起，以至于任何增添、删减或改动都只会破坏这种完美而变得更糟"
    ],
    "correctAnswer": 3,
    "explanationEn": "Alberti's Latin concept of 'concinnitas' (harmonious design) was grounded in cosmic musical and geometric ratios, asserting that true beauty is not superficial ornament but organic, structural mathematical perfection.",
    "explanationZh": "阿尔伯蒂将古罗马西塞罗与维特鲁威思想升华，提出“美是各组成部分之间的严格协和统一（Concinnitas），使人无法在其中增减更动一砖一瓦而不损伤整体”，成为古典与文艺复兴建筑理论的最高信条。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Alberti",
      "De re aedificatoria",
      "Concinnitas",
      "Beauty"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_176",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1444 - 1460",
    "questionZh": "米开罗佐受科西莫·德·美第奇委托设计的佛罗伦萨美第奇-里卡迪宫（Palazzo Medici Riccardi），确立的文艺复兴民用贵族府邸经典范式是：",
    "questionEn": "Commissioned by Cosimo de' Medici and designed by Michelozzo, what architectural archetype for Renaissance noble residences did the Palazzo Medici Riccardi establish?",
    "optionsZh": [
      "立面全贴彩色玻璃幕墙并在屋顶架设计算机微波天线",
      "完全复制中世纪骑士城堡的无窗城墙与护城河吊桥",
      "采用纯正交网格的红黄蓝三原色几何平铺",
      "三层立面采用由下至上逐层精细化的毛石砌筑层次（底层为粗粝深凹槽凸面琢石，中层为平整方石，顶层为光滑细缝石板），冠以巨大的古典重檐，内部围绕雅致的科林斯列柱回廊中庭"
    ],
    "optionsEn": [
      "Cladding facades entirely in mirrored glass curtain walls topped by digital microwave antennas",
      "A windowless medieval moat-and-drawbridge fortress rejecting domestic refinement",
      "Orthogonal primary-color geometric grid patterns across uniform stucco",
      "A tripartite vertical gradation of rustication (rough bugnato on the ground floor, dressed ashlar on the piano nobile, and smooth masonry on the top floor), crowned by a massive classical cornice around a central peristyle courtyard"
    ],
    "correctAnswer": 3,
    "explanationZh": "米开罗佐创立了文艺复兴宫殿立面三段式：底层粗粝坚固如要塞堡垒，中间楼层平整优雅，三层光滑明快，顶部冠以高达2.5米的宏伟罗马式檐口；内院列柱走廊通风采光，成为欧洲宫殿住宅的标准样板。",
    "explanationEn": "Michelozzo's Palazzo Medici set the standard for urban Renaissance palazzi: three graded tiers of rusticated to smooth masonry, a monumental antique cornice, and an open colonnaded inner cortile.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Michelozzo",
      "PalazzoMedici",
      "Rustication"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_177",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which monumental basilica in Mantua, begun in 1472 by Leon Battista Alberti, fused a Roman triumphal arch and a temple front onto its facade and abolished traditional side aisles in favor of a colossal coffered barrel vault flanked by chapels?",
    "questionZh": "阿尔伯蒂于1472年在曼托瓦始建的哪座纪念碑式宏伟大教堂，在立面上完美将古罗马凯旋门与神庙三角山花融为一体，并在室内彻底取消传统侧廊、改以巨型通体藻井筒形拱横跨中央大厅？",
    "optionsEn": [
      "San Sebastiano in Mantua",
      "Basilica of Sant'Andrea in Mantua",
      "Santa Maria Novella in Florence",
      "Tempio Malatestiano in Rimini"
    ],
    "optionsZh": [
      "曼托瓦圣塞巴斯蒂亚诺教堂 (San Sebastiano)",
      "曼托瓦圣安德肋圣殿 (Sant'Andrea in Mantua)",
      "佛罗伦萨新圣母大殿立面",
      "里米尼马拉泰斯塔圣殿 (Tempio Malatestiano)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sant'Andrea in Mantua replaced traditional Gothic colonnaded aisles with deep alternating chapels under an immense 18-meter-wide coffered barrel vault inspired by the Basilica of Maxentius in Rome, establishing the blueprint for counter-reformation Baroque church plans (e.g. Il Gesù).",
    "explanationZh": "阿尔伯蒂在曼托瓦圣安德肋教堂中汲取了罗马马克森提乌斯巴西利卡遗址灵感，以罗马凯旋门图案雕刻入口立面，内部用跨度惊人的宏大单廊藻井筒拱取代林立细柱侧廊，两翼排布交替深浅礼拜堂，直接催生了后世耶稣会教堂乃至罗马圣彼得大教堂中殿空间母题。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Alberti",
      "Sant Andrea Mantua",
      "Triumphal Arch"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_178",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which Franciscan church in Rimini was remodeled by Leon Battista Alberti around 1450 for ruler Sigismondo Pandolfo Malatesta, encasing the Gothic building in a revolutionary white Istrian marble shell celebrating the Roman Arch of Augustus?",
    "questionZh": "阿尔伯蒂于约1450年在里米尼受统治者马拉泰斯塔委托，将一座中世纪旧方济各会教堂用洁白伊斯特拉大理石整体包裹、巧妙转译里米尼奥古斯都古凯旋门的是：",
    "optionsEn": [
      "Basilica of San Petronio in Bologna",
      "Certosa di Pavia",
      "Santa Maria delle Grazie in Milan",
      "Tempio Malatestiano (San Francesco in Rimini)"
    ],
    "optionsZh": [
      "博洛尼亚圣白托略大殿",
      "帕维亚加尔都西会修道院 (Certosa di Pavia)",
      "米兰圣母感恩教堂 (Santa Maria delle Grazie)",
      "马拉泰斯塔圣殿 / 里米尼圣方济各圣殿 (Tempio Malatestiano in Rimini)"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Tempio Malatestiano was the first Renaissance building to adapt the Roman triumphal arch for a Christian facade, placing deep rounded blind arcades along the lateral flanks to shelter the sarcophagi of Malatesta's court humanists.",
    "explanationZh": "马拉泰斯塔圣殿被史学家誉为第一座纯正复兴古罗马凯旋门母题的基督教堂。建筑两侧以雄浑连续半圆拱券盲廊收纳学者石棺，内部饰有精美浮雕壁饰，虽穹顶未竟却名垂青史。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Alberti",
      "Tempio Malatestiano",
      "Rimini"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_179",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Sculpture",
    "era": "1425 - 1452",
    "questionZh": "洛伦佐·吉贝尔蒂（Lorenzo Ghiberti）为佛罗伦萨圣若望洗礼堂耗费27年铸造的东侧镀金青铜大门（被米开朗基罗盛赞为“天堂之门”），其雕塑空间革新是：",
    "questionEn": "Cast over 27 years by Lorenzo Ghiberti for the Florence Baptistery and hailed by Michelangelo as the \"Gates of Paradise\", what sculptural breakthrough is achieved in its ten relief panels?",
    "optionsZh": [
      "将阿尔贝蒂与布鲁内莱斯基的单点科学线性透视法与浅浮雕（Rilievo schiacciato）完美结合，在扁平的铜板上创造出人物由高浮雕近景向极低浮雕远景无限延展的宏大建筑纵深空间",
      "完全不采用任何透视，将人物符号化并排堆叠在单一平面上",
      "使用现成品自行车轮与黄铜铁钉进行拼贴装配",
      "采用纯粹的红黄蓝三原色烤漆几何方块组合"
    ],
    "optionsEn": [
      "Masterfully synthesizing Brunelleschi's mathematical linear perspective with delicate rilievo schiacciato, graduating figures from high relief in the foreground to paper-thin relief in the distant background",
      "Flat, non-perspectival symbolic stacking of figures on a single register without spatial depth",
      "Assembling Dadaist ready-made bicycle wheels and brass tacks onto bronze plates",
      "Arranging pure primary-colored geometric enamel tiles within orthogonal grids"
    ],
    "correctAnswer": 0,
    "explanationZh": "吉贝尔蒂抛弃了中世纪传统的四叶草边框，改为10幅宏大的正方形青铜镀金浮雕。他运用严谨的单点灭点透视法，前景人物近乎圆雕，远景建筑与山水薄如纸片，开启了雕塑中的绘画性宏大空间。",
    "explanationEn": "Ghiberti's Gates of Paradise abandoned Gothic quatrefoils for 10 square panels, deploying mathematical linear perspective and varied relief depths to evoke vast atmospheric architectural and biblical vistas.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Ghiberti",
      "GatesOfParadise",
      "Perspective"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_180",
    "domain": "renaissance_classical",
    "subCategory": "Gothic Architecture",
    "era": "1386 - 1965",
    "questionZh": "意大利哥特建筑学派的代表巨作米兰主教座堂（Duomo di Milano），在材料与形式上迥异于法国北方哥特的特质是：",
    "questionEn": "As the masterpiece of the Italian Gothic school, what material and structural traits distinguish Milan Cathedral (Duomo di Milano) from northern French Gothic?",
    "optionsZh": [
      "完全使用粗糙的灰泥红砖砌筑而无任何雕刻立柱",
      "全建筑通体采用粉白相间的坎多利亚（Candoglia）大理石贴面，外立面耸立着135座高耸石雕尖塔、2245尊精美雕像构成的石雕森林，内部空间宽阔沉雄，呈现出伦巴第厚重体量与晚期火焰哥特的奇幻交织",
      "采用完全轻盈的钢管桁架与透明有机玻璃搭建而成",
      "完全遵循古罗马万神庙的圆形平顶无柱构造"
    ],
    "optionsEn": [
      "Constructed entirely of coarse unadorned red brick without sculpted stone columns",
      "Clad entirely in pale Candoglia marble, bristling with a forest of 135 delicate marble spires and over 2,200 statues, fusing heavy Lombard broadness with Flamboyant Gothic filigree",
      "Erected with lightweight tubular steel trusses and transparent acrylic sheets",
      "Following the unreinforced circular flat dome archetype of the Roman Pantheon"
    ],
    "correctAnswer": 1,
    "explanationZh": "米兰大教堂不仅是世界第四大教堂，更通体覆以珍贵的阿尔卑斯山坎多利亚大理石。意大利工匠融合了德法哥特式高耸尖塔森林与意大利传统宽大巴西利卡空间，屋顶大理石平台可供游人漫步穿行于尖塔之间。",
    "explanationEn": "Duomo di Milano marries northern Flamboyant Gothic verticality with broad Italian spatial proportions, enveloping its colossal brick core in Candoglia marble spires, buttresses, and thousands of statues.",
    "tags": [
      "RenaissanceClassical",
      "Gothic",
      "MilanCathedral",
      "ItalianGothic",
      "CandogliaMarble"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_181",
    "domain": "renaissance_classical",
    "subCategory": "Gothic Architecture",
    "era": "1215 - 1263",
    "questionZh": "锡耶纳主教座堂（Duomo di Siena）内部中殿柱廊最令世人震撼的视觉形式是：",
    "questionEn": "What breathtaking optical and decorative feature defines the interior nave colonnades of Siena Cathedral (Duomo di Siena)?",
    "optionsZh": [
      "所有立柱均由透明玻璃吹制而成并在内部流动彩色荧光液体",
      "四壁满涂没有透视阴影的扁平单色黑漆",
      "由白大理石与深墨绿色（近黑）大理石交替排布形成的鲜明水平条纹（Polychrome Marble Banding），呼应锡耶纳城徽黑白双色，配以精美绝伦的大理石雕嵌画地面",
      "完全使用生铁铆接工业机械结构"
    ],
    "optionsEn": [
      "Pillars blown from translucent glass containing circulating colored luminescent fluids",
      "Walls painted in flat matte black lacquer devoid of highlights or relief shadow",
      "Alternating horizontal stripes of white and dark greenish-black marble (polychrome revetment), echoing Siena's civic coat-of-arms, over an extraordinary inlaid marble mosaic floor",
      "Assembled strictly from raw puddled-iron riveted industrial trusses"
    ],
    "correctAnswer": 2,
    "explanationZh": "锡耶纳大教堂内部立柱与墙面满布黑白交替的横向大理石条带，源自锡耶纳建城传说与黑白徽章（Balzana）。加之乔凡尼·皮萨诺雕塑与历经两百年完成的56幅大理石拼花地砖，构成了托斯卡纳哥特的视觉盛宴。",
    "explanationEn": "Siena Cathedral's interior is renowned for its rhythmic alternating bands of white and dark green/black marble revetment, reflecting the city's black-and-white civic shield, and its vast pavement of inlaid marble intarsia.",
    "tags": [
      "RenaissanceClassical",
      "Gothic",
      "SienaCathedral",
      "ItalianGothic",
      "MarbleBanding"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_182",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1430 - 1461",
    "questionZh": "菲利波·布鲁内莱斯基在佛罗伦萨圣十字圣殿中设计的帕齐礼拜堂（Pazzi Chapel），其内部几何空间美学的核心在于：",
    "questionEn": "Designed by Filippo Brunelleschi in the cloister of Santa Croce, what defines the spatial and proportional mastery of the Pazzi Chapel?",
    "optionsZh": [
      "使用粗犷野兽派混凝土与倾斜非对称屋面",
      "完全模仿哥特式尖券肋架并以繁琐的彩色镶嵌玻璃遮蔽自然光",
      "采用古罗马角斗士竞技场的下沉式阶梯同心圆剧场",
      "以正方形中央空间与两翼半圆拱券为基准，使用深灰绿色的灰水石（Pietra serena）壁柱、拱圈与圆盘，在纯白抹灰墙面上精准勾勒出理性的几何比例与静谧秩序"
    ],
    "optionsEn": [
      "Raw brutalist board-marked concrete with asymmetrical sloping roofs",
      "Dense Gothic rib vaults with dark stained glass obscuring daylight",
      "A sunken amphitheater derived from Roman gladiatorial arenas",
      "A square central bay flanked by barrel-vaulted wings, articulated with crisp grey pietra serena pilasters, arches, and terracotta roundels drawn against smooth white plaster"
    ],
    "correctAnswer": 3,
    "explanationZh": "帕齐礼拜堂是早期文艺复兴集中式建筑的珠玑之作。布鲁内莱斯基运用深灰色托斯卡纳灰水石（Pietra serena）线脚构筑网格框架，与白墙形成鲜明对比，将欧几里得几何比例转化为纯粹明澈的人文主义空间。",
    "explanationEn": "The Pazzi Chapel showcases Brunelleschi's rational geometry: dark grey pietra serena pilasters and entablatures contrast with white stucco walls, organizing the square dome-covered space into harmonious classical clarity.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Brunelleschi",
      "PazziChapel",
      "PietraSerena"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_183",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1444 - 1487",
    "questionZh": "菲利波·布鲁内莱斯基在其晚期生前最后一部教堂杰作佛罗伦萨圣神圣殿（Santo Spirito）中，所实现的模块化数学理性是：",
    "questionEn": "In his final church design for the Basilica di Santo Spirito in Florence, what modular mathematical logic did Filippo Brunelleschi achieve?",
    "optionsZh": [
      "以中殿与交叉十字路口的正方形为基准模数（Module），侧廊为十字交叉正方形的四分之一，周边环绕连续不断半圆形壁龛小礼拜堂，形成绝对协调统一的古典柱廊韵律",
      "所有柱子的高度与间距均由工匠在施工现场随机决定，没有任何固定尺寸",
      "完全依靠外露的铁索拉吊天花板而不需要任何室内立柱",
      "建造了三个相互倾斜咬合的折叠钛合金四面体"
    ],
    "optionsEn": [
      "Using the square of the crossing as a foundational module (side aisles being 1/4 the crossing unit), enveloped by a continuous circuit of semicircular niche chapels to achieve total proportional harmony",
      "Allowing masons to randomly determine column heights and spans on-site without fixed rules",
      "Suspending the flat ceiling from exterior iron cables without interior pillars",
      "Erecting three intersecting tilted titanium tetrahedrons"
    ],
    "correctAnswer": 0,
    "explanationZh": "圣神圣殿是布鲁内莱斯基模块化理性的最高体现。全堂以中央交叉口正方形为比例单元，柱廊比例（1:2:4）严谨精密，四周38个半圆形壁龛如波浪般连绵环抱，展现了文艺复兴对数学宇宙秩序的崇高礼赞。",
    "explanationEn": "Santo Spirito exemplifies Brunelleschi's modular design: the square crossing defines all dimensions (nave bays 1/2 crossing, aisle bays 1/4), encircled by continuous curving niche chapels along the aisles.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Brunelleschi",
      "SantoSpirito",
      "ModularDesign"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_184",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1456 - 1470",
    "questionZh": "莱昂·巴蒂斯塔·阿尔贝蒂在佛罗伦萨新圣母大殿（Santa Maria Novella）立面设计中，解决高窄中殿与低矮侧廊屋顶过渡的经典建筑构件是：",
    "questionEn": "In his famous facade for Santa Maria Novella in Florence (1456–1470), what architectural feature did Leon Battista Alberti invent to bridge the high nave with the lower side aisles?",
    "optionsZh": [
      "两座高耸的哥特式石雕尖拱滴水兽钟楼",
      "两座优雅反转的大型S形卷涡饰卷涡壁（S-scroll Volutes / Inverted Scrolls），上层古典神庙山花与下层罗马拱门大理石网格在此平滑连接，成为后世巴洛克立面的经典先驱",
      "完全敞开的室外露天钢铁螺旋楼梯",
      "用镀金铝合金百叶窗将两侧屋面全部封闭"
    ],
    "optionsEn": [
      "Twin soaring Gothic spires bristling with gargoyles and pinnacles",
      "Two sweeping S-shaped scroll volutes (inverted volutes), which elegantly masked the rooflines between nave and aisles, establishing a prototype for Renaissance and Baroque facades",
      "Open-air industrial steel spiral emergency staircases",
      "Gilded aluminum louvers hermetically enclosing the rooflines"
    ],
    "correctAnswer": 1,
    "explanationZh": "阿尔贝蒂为了掩盖巴西利卡教堂中殿与侧廊之间的高度落差，创造性地设计了左右两对大理石大卷涡（Volutes）。这一优雅的几何过渡构件既隐藏了斜坡屋顶，又维系了严格正方形比例分割，被后来的耶稣会教堂广为沿用。",
    "explanationEn": "Alberti solved the problem of masking the sloping roofs of the lower side aisles by designing two monumental inlaid marble volutes, creating a harmonious transition that became a cornerstone of Baroque church facades.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Alberti",
      "SantaMariaNovella",
      "Volutes"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_185",
    "domain": "renaissance_classical",
    "subCategory": "High Renaissance Architecture",
    "era": "1492 - 1499",
    "questionZh": "多纳托·伯拉孟特受米兰公爵卢多维科·斯福尔扎委托，为米兰感恩圣母堂（Santa Maria delle Grazie）建造的后部圣坛与穹顶（Tribune），其建筑构想是：",
    "questionEn": "Commissioned by Duke Ludovico Sforza for Santa Maria delle Grazie in Milan, what architectural concept characterizes Donato Bramante's monumental tribune and crossing dome?",
    "optionsZh": [
      "用细长木质梁柱搭建的临时剧场舞台",
      "完全复制古希腊雅典卫城的帕特农神庙多立克石柱列",
      "一个宏伟开阔的正方形集中式交叉大空间，上方升起十六面开窗的八角形矮鼓座圆穹顶，三面环以半圆形宏大后殿，立面以伦巴第兵工厂红砖与精美陶土灰泥浮雕展现盛期文艺复兴体量感",
      "采用粗糙的花岗岩乱石堆砌出的无窗地窖"
    ],
    "optionsEn": [
      "A temporary timber proscenium theater stage built for court pageantry",
      "An exact duplicate of the Parthenon's Doric marble peristyle in Athens",
      "A monumental central-plan crossing crowned by an octagonal 16-sided drum-dome with three radiating apses, harmonizing Lombard terracotta ornament with High Renaissance volumetric geometry",
      "A windowless crypt piled with coarse cyclopean granite rubble"
    ],
    "correctAnswer": 2,
    "explanationZh": "伯拉孟特将哥特式老中殿在东端截断，接入一座尺度恢弘的文艺复兴集中式圣坛。巨大的八角形穹顶鼓座光线充沛，代表了米兰斯福尔扎公国盛期文艺复兴建筑体量与透视的最高峰。",
    "explanationEn": "Bramante designed the choir and crossing of Santa Maria delle Grazie as a monumental cubic centralized space topped by an expansive drum-supported dome, marrying classical Roman majesty with delicate Lombard terracotta details.",
    "tags": [
      "RenaissanceClassical",
      "HighRenaissance",
      "Bramante",
      "SantaMariaDelleGrazie",
      "Dome"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_186",
    "domain": "renaissance_classical",
    "subCategory": "High Renaissance Architecture",
    "era": "1506",
    "questionZh": "1506年教皇尤利乌斯二世启动罗马新圣彼得大教堂重建时，多纳托·伯拉孟特最初提交并刻在奠基纪念金币上的原初设计方案是：",
    "questionEn": "In 1506, when Pope Julius II commenced the rebuilding of New St. Peter's Basilica in Rome, what was Donato Bramante's revolutionary initial plan (cast on the foundation medal)?",
    "optionsZh": [
      "狭长昏暗、具有多重飞扶壁的法国早期哥特式六分拱巴西利卡大教堂",
      "带有四座尖锐伊斯兰宣礼塔的红砖大厅",
      "完全由铁柱支撑的平顶水晶宫殿展厅",
      "一个绝对对称的等臂希腊十字（Greek Cross）集中式平面，中央由四根巨型四棱柱托起如万神庙般雄伟的半球形大圆穹顶，四角辅以四个附属希腊十字小礼拜堂与塔楼"
    ],
    "optionsEn": [
      "A narrow, dimly lit early French Gothic basilica with flying buttresses and sexpartite vaults",
      "A red-brick hypostyle prayer hall flanked by four soaring minarets",
      "A flat-roofed cast-iron and plate-glass exhibition hall supported by hollow metal pillars",
      "An ideal symmetrical Greek-cross central plan dominated by a colossal hemispherical dome resembling the Pantheon placed atop the Basilica of Maxentius, flanked by four secondary corner domes"
    ],
    "correctAnswer": 3,
    "explanationZh": "伯拉孟特豪迈地宣称要“将万神庙安放在马克森提乌斯巴西利卡之上”。其方案抛弃了传统中世纪拉丁十字长中殿，采用纯粹几何的希腊十字集中式布局，四面完全对称，象征宇宙神性与盛期文艺复兴建筑理想。",
    "explanationEn": "Bramante's 1506 plan for New St. Peter's was a perfect Greek cross: a centralized monumental dome rivaling the Pantheon resting on four colossal piers, surrounded by interlocking subsidiary chapels and towers.",
    "tags": [
      "RenaissanceClassical",
      "HighRenaissance",
      "Bramante",
      "StPetersBasilica",
      "GreekCross"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_187",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which circular martyrium in Rome, designed by Donato Bramante in 1502 in the courtyard of San Pietro in Montorio, is celebrated as the premier architectural embodiment of High Renaissance classical perfection?",
    "questionZh": "由多纳托·伯拉孟特（Donato Bramante）于1502年在罗马蒙托里奥圣彼得堂狭小庭院内设计营建的哪座小神殿，以其纯圆神圣集中式构图与多立克环柱廊被公认为盛期文艺复兴建筑美学的绝对典范？",
    "optionsEn": [
      "Florence Cathedral Dome",
      "Tempietto di San Pietro in Montorio",
      "Santa Maria della Consolazione",
      "San Carlo alle Quattro Fontane"
    ],
    "optionsZh": [
      "佛罗伦萨圣母百花大教堂穹顶 (Florence Cathedral Dome)",
      "坦比哀多礼拜堂 (Tempietto di San Pietro in Montorio)",
      "托迪慰藉圣母堂 (Santa Maria della Consolazione)",
      "罗马四喷泉圣卡罗堂 (San Carlo alle Quattro Fontane)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Tempietto di San Pietro in Montorio (Rome, 1502) by Donato Bramante is universally celebrated as the quintessential embodiment of High Renaissance architectural perfection. Its circular centralized plan, surrounded by 16 Doric columns supporting a classical entablature and hemispherical dome, revived classical balance and harmonic proportion.",
    "explanationZh": "多纳托·伯拉孟特（Donato Bramante）于1502年在罗马贾尼科洛山蒙托里奥圣彼得堂修道院庭院设计的坦比哀多（Tempietto di San Pietro in Montorio），是西方建筑史盛期文艺复兴（High Renaissance）的最纯正纪念碑式范式。建筑采用绝对对称的圆形集中式神殿平面，环绕16根整块大理石多立克原色列柱，柱顶配以雕刻精致的三歧角线与间板饰带，中央由半球形穹顶覆顶，完美复活并升华了古罗马圆形神殿的理性比例。圣母百花穹顶为早期文艺复兴布鲁内莱斯基所创，四喷泉圣卡罗堂为巴洛克大师博罗米尼杰作。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Bramante",
      "Tempietto",
      "High Renaissance",
      "Orders"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_188",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "How did Donato Bramante ingeniously resolve the severe site constraint at Santa Maria presso San Satiro in Milan (1482-1486), where a public street prevented building a real longitudinal choir behind the altar?",
    "questionZh": "伯拉孟特在米兰建造圣萨蒂罗圣母堂（Santa Maria presso San Satiro, 1482-1486）时，面对主祭坛后方因紧邻公共街道而只有不到1米进深的极端局限，所采取的惊世骇俗的建筑创举是：",
    "optionsEn": [
      "Creating an illusionistic trompe-l'œil relief perspective choir in painted stucco and terracotta only 97 centimeters deep that visually appears as a deep, barrel-vaulted three-bay choir",
      "Demolishing the entire municipal street under cover of darkness",
      "Excavating a subterranean church three stories underground beneath the crypt",
      "Suspending the choir room over the street using steel cantilever suspension cables"
    ],
    "optionsZh": [
      "在仅有97厘米（不足1米）的浅狭墙面进深中，利用高超的单点浮雕假透视（Trompe-l'œil），以抹灰与彩绘在视觉上生动创造出进深达数十米、带三进藻井筒拱的假唱诗班礼拜堂",
      "在黑夜掩护下强行拆除隔壁公共街道的所有民宅与市政设施",
      "在地下室下方向下深挖三层地宫作为地下隐秘唱诗班祈祷室",
      "利用现代钢缆悬索桥结构将唱诗班悬空挑在繁忙公共街道上方"
    ],
    "correctAnswer": 0,
    "explanationEn": "Unable to build a traditional deep eastern arm, Bramante sculpted a shallow 97 cm stucco bas-relief that, when viewed from the nave entrance, perfectly deceives the human eye into seeing a monumental barrel-vaulted perspective choir.",
    "explanationZh": "伯拉孟特展示了魔术般的透视计算力：当信徒步入中殿向主祭坛望去，眼前的唱诗班与两侧横跨翼廊比例浑然天成，唯有走至祭坛近前才会震惊地发现宏大的罗马式藻井拱廊竟是一面仅有97厘米浅浮雕的“透视障眼法奇迹”。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Bramante",
      "San Satiro",
      "Perspective",
      "Trompe l oeil"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_189",
    "domain": "renaissance_classical",
    "subCategory": "Mannerist Architecture",
    "era": "1524 - 1559",
    "questionZh": "米开朗基罗在佛罗伦萨圣洛伦佐设计的劳伦齐亚纳图书馆前厅（Laurentian Library Vestibule / Ricetto），其展现样式主义（Mannerism）不安张力的核心构造是：",
    "questionEn": "In the vestibule (Ricetto) of the Laurentian Library in Florence, what subversion of classical tectonic logic manifests Michelangelo's Mannerist tension?",
    "optionsZh": [
      "将成对的托斯卡纳立柱深陷内嵌（Recessed columns）于墙体壁龛深处，使立柱看似被墙体挤压而失去支撑功能，配合从上层如熔岩倾泻而下的三联阶梯（Monumental Staircase），颠覆了古典承重理智",
      "在外墙使用大量彩色陶瓷马赛克拼贴小丑面具",
      "完全拆除所有墙壁，只留下一根悬吊在中央的钢索",
      "严格遵从维特鲁威关于柱子必须凸出于墙面支撑横梁的教条"
    ],
    "optionsEn": [
      "Recessing paired stone columns into deep niches where they appear entrapped and non-load-bearing, paired with a sweeping tripartite staircase flowing down like liquid lava",
      "Plastering exterior facades with multicolored majolica mosaics depicting Harlequin masks",
      "Demolishing all walls, retaining only a single structural tension cable anchored in the center",
      "Strictly obeying Vitruvian rules requiring columns to project proud from walls to carry entablatures"
    ],
    "correctAnswer": 0,
    "explanationZh": "米开朗基罗在劳伦齐亚纳前厅打破了古典理性：原本应当承重的双联立柱被嵌在凹壁中反被墙面包裹，底下的牛腿卷涡悬空不承重；阿曼纳蒂按照其木模建造的中心台阶如瀑布涌下，营造出强烈的心理压迫与动感。",
    "explanationEn": "Michelangelo inverted classical architectural logic in the Ricetto: structural columns are sunken into wall pockets, non-supporting brackets hang underneath, and the curvilinear staircase cascades forward like a slow wave.",
    "tags": [
      "RenaissanceClassical",
      "Mannerism",
      "Michelangelo",
      "LaurentianLibrary",
      "Ricetto"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_190",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Urbanism",
    "era": "1536 - 1546",
    "questionZh": "米开朗基罗在罗马主持规划的卡比托利欧广场（Piazza del Campidoglio），其解决基地不规则夹角与统摄城市视野的天才城市设计是：",
    "questionEn": "In his redesign of Rome's Capitoline Hill (Piazza del Campidoglio, begun 1536), how did Michelangelo masterfully resolve the trapezoidal site constraints?",
    "optionsZh": [
      "将现场所有原有中世纪建筑全盘爆破拆除，建造一座完全封闭的正圆形古罗马角斗场",
      "利用原有两栋建筑呈80度夹角的非对称现状，巧妙增建一座完全对称的新宫（Palazzo Nuovo）形成梯形开敞广场，地面铺以向外隆起的十二角星形椭圆几何铺地，视线转向梵蒂冈圣彼得大教堂",
      "沿着山坡建造一条完全笔直的运河并由贡多拉小船摆渡市民",
      "将广场全部改建为红黄蓝三原色的现代主义雕塑公园"
    ],
    "optionsEn": [
      "Demolishing all existing medieval structures to erect a completely enclosed Roman amphitheater",
      "Accepting the 80-degree acute angle of existing buildings to construct a mirrored Palazzo Nuovo, forging a dynamic trapezoidal piazza focused on an equestrian statue within a convex twelve-pointed star oval pavement",
      "Carving a straight canal up the hill for gondolas to transport Roman magistrates",
      "Converting the entire historic summit into an orthogonal primary-colored sculpture park"
    ],
    "correctAnswer": 1,
    "explanationZh": "米开朗基罗没有强行平整不规则地形，而是通过新建新宫构成梯形广场（Trapezoid），消解了透视收缩感；地面微凸的椭圆十二星芒网格将马可·奥勒留骑马铜像众星拱月般托起，广场面向圣彼得大教堂敞开。",
    "explanationEn": "Michelangelo embraced the irregular angle of the Palazzo dei Conservatori, adding the matching Palazzo Nuovo to create a trapezoidal piazza unified by an undulating, oval twelve-pointed star pavement around Marcus Aurelius.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Michelangelo",
      "Campidoglio",
      "Urbanism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_191",
    "domain": "renaissance_classical",
    "subCategory": "High Renaissance Architecture",
    "era": "1546 - 1564",
    "questionZh": "米开朗基罗在71岁高龄接掌罗马圣彼得大教堂总建筑师职务后，对建筑平面与外部造型作出的决定性重构是：",
    "questionEn": "Assuming the post of chief architect of St. Peter's Basilica at age 71 in 1546, what decisive structural transformation did Michelangelo execute?",
    "optionsZh": [
      "彻底放弃穹顶，改用平整钢梁和瓦垄铁皮搭建工业库房",
      "将整座大教堂整体顺时针旋转90度正对台伯河码头",
      "剔除后人增添的繁琐琐碎隔断，重归伯拉孟特宏伟的希腊十字集中式平面，外墙统摄以两层楼高的巨型科林斯壁柱（Colossal order），并设计了雄伟磅礴的十六肋双层石砌大圆穹顶",
      "将外立面全部改建为哥特式双尖塔镂空石雕"
    ],
    "optionsEn": [
      "Abandoning the dome entirely in favor of flat iron girders and corrugated steel roofs",
      "Rotating the entire basilica 90 degrees clockwise to face the Tiber River wharves",
      "Restoring the clarity of Bramante's centralized Greek cross by stripping extraneous partitions, unifying the exterior walls with colossal Corinthian pilasters, and engineering a soaring 16-rib double-shell dome",
      "Rebuilding the facade into a northern Gothic twin-spired openwork facade"
    ],
    "correctAnswer": 2,
    "explanationZh": "米开朗基罗力排众议，清理了小达·桑加洛等人的繁杂改动，精炼并强化了伯拉孟特的希腊十字方案。他用穿透数层的“巨柱式”（Colossal order）塑造雕塑般有力的外墙，并亲自设计了成为西方建筑冠冕的双层肋骨大穹顶。",
    "explanationEn": "Michelangelo consolidated Bramante's Greek cross, bracing the crossing piers to support an elevated double-shell ribbed dome and unifying the vast exterior envelope with monumental colossal Corinthian pilasters.",
    "tags": [
      "RenaissanceClassical",
      "HighRenaissance",
      "Michelangelo",
      "StPetersDome",
      "ColossalOrder"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_192",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises",
    "era": "1570",
    "questionZh": "安德烈亚·帕拉迪奥于1570年在威尼斯出版的划时代建筑理论巨著《建筑四书》（I Quattro Libri dell'Architettura），其风靡欧洲与北美的核心原因是：",
    "questionEn": "Published in Venice in 1570, why did Andrea Palladio's architectural treatise \"The Four Books of Architecture\" exert unmatched global influence?",
    "optionsZh": [
      "书中全部使用极其玄奥晦涩的炼金术咒语且没有任何插图绘图",
      "它是世界上第一部宣扬必须彻底摧毁古希腊罗马神庙柱式的未来主义宣言",
      "书中专门探讨如何使用现代工业钢筋混凝土制造跨海悬索桥",
      "不仅系统考证古罗马五种柱式与古代神庙，更配以大量标注精确比例尺寸的木刻版画（Woodcuts），向世人展示了他亲手设计的乡村庄园别墅与城市宫殿图纸，成为最实用的古典建筑设计指南"
    ],
    "optionsEn": [
      "It was written exclusively in esoteric alchemical symbols completely devoid of diagrams",
      "It was a radical Futurist manifesto calling for the complete demolition of classical orders",
      "It focused on calculating suspension bridges fabricated with industrial reinforced concrete",
      "It combined archaeological surveys of Roman temples and orders with clear woodcut plans and elevations of his own villas and palazzi, complete with exact numerical room dimensions and ratios"
    ],
    "correctAnswer": 3,
    "explanationZh": "帕拉迪奥的《建筑四书》图文并茂，首次将古代罗马考古测绘同自己的建筑实践并列。清晰的木版画标注了平面与开间房间的长宽比（如1:1, 3:4, 2:3），使帕拉迪奥主义（Palladianism）迅速传遍英国与北美。",
    "explanationEn": "Palladio's treatise democratized classical architectural literacy: crisp woodcuts with exact proportional dimensions allowed architects worldwide (from Inigo Jones to Thomas Jefferson) to study and construct Palladian villas.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Palladio",
      "FourBooks",
      "Palladianism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_193",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1577 - 1592",
    "questionZh": "安德烈亚·帕拉迪奥在威尼斯朱代卡岛上设计的威尼斯救主堂（Il Redentore, 1577-1592），其立面解决中殿高拱与侧廊协调的手法是：",
    "questionEn": "In his design of the Church of Il Redentore on the Giudecca in Venice, how did Andrea Palladio resolve the classical temple-front facade for a Christian basilica?",
    "optionsZh": [
      "采用两组不同比例的古典神庙山花相互重叠交错（Interlocking Temple Fronts）：高大科林斯巨柱支撑中央主山花，低矮爱奥尼柱式支撑宽矮侧翼山花，通体饰以纯净洁白的伊斯特拉石（Istrian Stone）",
      "在立面上满贴鲜红与明黄的现代瓷砖几何拼贴",
      "建造两座完全对称的哥特式石雕尖钟塔",
      "将教堂完全隐藏在无窗厚石防空掩体内"
    ],
    "optionsEn": [
      "Overlapping two classical temple fronts of different scales: a colossal pediment fronting the high nave interlocked with a broad, lower pediment masking the side aisles, rendered in pristine white Istrian stone",
      "Covering the facade in vibrant red and yellow contemporary ceramic tiles",
      "Erecting twin symmetrical northern Gothic openwork campaniles",
      "Enclosing the basilica entirely within windowless ashlar bunkers"
    ],
    "correctAnswer": 0,
    "explanationZh": "帕拉迪奥在威尼斯救主堂立面上发展了“重叠神庙山花”技巧。高大的中殿正立面如神庙主门廊，两侧翼则是较小的半山花，二者在三维层次上虚实相生，白色的伊斯特拉石在威尼斯潟湖水面上倒映生辉。",
    "explanationEn": "Palladio solved the dual-height problem of Christian basilicas by interlocking two temple facades: a giant order carrying a central triangular pediment superimposed over a lower, wider pediment fronting the chapels.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Palladio",
      "IlRedentore",
      "TempleFront"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_194",
    "domain": "renaissance_classical",
    "subCategory": "High Renaissance & Mannerism",
    "era": "renaissance",
    "questionEn": "In Michelangelo's apocalyptic altar fresco 'The Last Judgment' (Sistine Chapel, 1536-1541), where did the tortured master hide his tragic, distorted self-portrait?",
    "questionZh": "米开朗基罗于1536-1541年重返西斯廷礼拜堂在祭坛后墙绘制巨幅《最后的审判》时，将自己苍老受折磨的绝望自画像巧妙隐藏在哪个惊心动魄的人物身上？",
    "optionsEn": [
      "On the face of the demon boatman Charon striking souls with his oar",
      "In the sagging, empty flayed skin of Saint Bartholomew held in the martyr's hand below Christ",
      "On the youthful, beardless muscular face of Christ the Judge",
      "On the winged helmet of the Archangel Michael sounding the trumpet"
    ],
    "optionsZh": [
      "在地狱冥河撑船挥舞船桨抽打罪孽亡魂的恶魔卡戎面具上",
      "在殉道圣徒圣巴多罗买手中提着的那张空洞松垮、被剥下的人皮面庞之上 (Flayed Skin of Saint Bartholomew)",
      "在中央如雷霆般降临、健硕无须的救世主基督裁判者面庞上",
      "在天顶上方奋力吹响世界末日复活号角的米迦勒大天使头盔上"
    ],
    "correctAnswer": 1,
    "explanationEn": "Saint Bartholomew was martyred by being flayed alive; in the Sistine Last Judgment, the saint holds the flaying knife in one hand and his limp skin in the other, whose distorted facial likeness was deciphered as Michelangelo's tortured confession of sin and physical exhaustion.",
    "explanationZh": "圣巴多罗买因活活被剥皮殉道，米开朗基罗画中圣徒右手持刀，左手拎着一张软塌塌被剥下的人皮。人皮上扭曲痛苦的五官正是年逾六旬、心力交瘁的米开朗基罗本人的真实肖像，流露出晚年深沉的宗教焦虑与忏悔。",
    "tags": [
      "RenaissanceClassical",
      "Michelangelo",
      "Last Judgment",
      "Self-Portrait",
      "Sistine Chapel"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_195",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1568 - 1584",
    "questionZh": "贾科莫·巴罗齐·达·维尼奥拉（Vignola）为耶稣会设计的罗马耶稣堂（Chiesa del Gesù）平面形制，成为天主教反宗教改革（Counter-Reformation）范本的核心原因是：",
    "questionEn": "Designed by Giacomo Barozzi da Vignola for the Jesuit Order, why did the plan of the Chiesa del Gesù in Rome become the universal archetype for Counter-Reformation architecture?",
    "optionsZh": [
      "采用完全黑暗的迷宫式回廊以阻隔信徒直接瞻仰祭坛",
      "取消了中世纪传统的侧廊，采用极为宽阔高大的单一中殿（Single barrel-vaulted nave），两侧设相互独立的小礼拜堂，视线不受立柱遮挡直达祭坛与穹顶，极其有利于布道声学与全场信徒目光聚焦",
      "全堂使用原木搭建并保留树皮以展现森林隐修生活",
      "完全复制君士坦丁堡圣索菲亚大教堂的四个半穹顶环抱构造"
    ],
    "optionsEn": [
      "A dark, labyrinthine cloister preventing congregants from seeing the high altar",
      "Abolishing traditional side aisles in favor of a single wide, barrel-vaulted nave flanked by shallow interconnected chapels, focusing acoustics and unobstructed sightlines directly on the pulpit and high altar",
      "Constructed entirely of raw unstripped timber logs to evoke primitive monastic asceticism",
      "Replicating the four spherical pendentive semidomes of Hagia Sophia in Constantinople"
    ],
    "correctAnswer": 1,
    "explanationZh": "特伦托公会议要求信徒清晰聆听讲道并注视圣体。维尼奥拉在耶稣堂中抛弃阻挡视线的侧廊柱列，设计了宽大通畅的单桶拱大厅，两侧布置小礼拜室，成为全世界耶稣会与巴洛克天主教堂的标准平面。",
    "explanationEn": "The Council of Trent demanded clear preaching acoustics and visual focus on the Eucharist. Vignola eliminated columned side aisles in Il Gesù, crafting a single broad nave that guided sightlines directly to the high altar.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Vignola",
      "IlGesu",
      "CounterReformation"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_196",
    "domain": "renaissance_classical",
    "subCategory": "High Renaissance & Mannerism",
    "era": "renaissance",
    "questionEn": "How does the vestibule (Ricetto) of Michelangelo's Laurentian Library in Florence (San Lorenzo, begun 1524) revolutionary manifest Mannerist architectural tension and subversion of classical tectonic logic?",
    "questionZh": "米开朗基罗于1524年开始在佛罗伦萨圣洛伦佐设计的劳伦齐亚纳图书馆前厅（Ricetto），在建筑史上如何以颠覆性的样式主义（Mannerism）张力打破了古典构造逻辑？",
    "optionsEn": [
      "By substituting Greek ionic columns with Egyptian obelisks",
      "By building walls entirely of hollow bronze pipes without any stonework",
      "By placing classical pediments upside down on the floor",
      "By recessing paired load-bearing columns backward into wall niches where they appear to support nothing, while a dramatic triple stone staircase flows outward and downward like frozen lava"
    ],
    "optionsZh": [
      "将所有希腊爱奥尼柱式完全撤换为埃及方尖碑造型",
      "整个前厅立面完全用空心青铜水管搭建而无任何砖石材料",
      "将神庙三角形古典山花全部倒立颠倒安装在脚底地面之上",
      "将粗壮的双联承重立柱深深嵌入平整墙体壁龛之内使其看似未承担任何重量，同时中央三联大理石楼梯如熔岩般从高处倾泻奔涌而下，充满矛盾张力"
    ],
    "correctAnswer": 3,
    "explanationEn": "In the Ricetto, Michelangelo subverted Vitruvian classical rules: paired columns sit inside carved recesses supported by non-functional volute corbels, while the triple staircase designed by Michelangelo (completed by Ammannati) pours out like a sculptural cascade, pioneering Mannerist emotional spatial anxiety.",
    "explanationZh": "劳伦齐亚纳图书馆前厅是样式主义建筑开山巨构：原本应当傲然挺立承重的柱子被深陷在墙壁凹槽壁龛中，下方托以无承载功能的涡卷牛腿；而通向阅览室的三股大理石台阶如波浪流水般向外流淌，展现了米开朗基罗向古典规则发起的震撼心理叛逆。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Michelangelo",
      "Laurentian Library",
      "Mannerism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_197",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which masterstroke of urban design was devised by Michelangelo on Rome's Capitoline Hill (Piazza del Campidoglio, begun 1536) to visually harmonize two existing non-parallel palace facades facing the Roman Forum?",
    "questionZh": "米开朗基罗于1536年起规划罗马卡比托利欧广场（Piazza del Campidoglio）时，为化解两座原本互不平行、夹角古怪的历史宫殿立面，所采取的天才城市设计构想是：",
    "optionsEn": [
      "Construct a symmetrical double-tower Gothic gatehouse blocking the axial vista",
      "Order the complete demolition of the ancient Senatorial Palace to flatten the hill",
      "Dig an expansive defensive moat around the perimeter filled with Tiber river water",
      "Conceive a trapezoidal open piazza oriented toward the Vatican, build the mirror-image Palazzo Nuovo to resolve the angled divergence, and lay an undulating elliptical 12-pointed star pavement around Marcus Aurelius"
    ],
    "optionsZh": [
      "设计一座对称的双塔哥特式门楼封闭轴线视廊",
      "下令彻底爆破平毁历史悠久的罗马元老院宫殿并将整座小山削平为平地",
      "在广场外围挖掘深不见底的环形护城河并注入台伯河泥水",
      "构想了一座面向圣彼得教廷的梯形广场平面，新建一座完全对称的“新宫”以平衡非平行夹角，中央镶嵌由十二芒星交织的动态椭圆形石材铺装，环绕马可·奥勒留皇帝骑马青铜像"
    ],
    "correctAnswer": 3,
    "explanationEn": "In designing the Piazza del Campidoglio (1536), Michelangelo brilliantly turned the awkward 80-degree divergence between the Palazzo dei Senatori and Palazzo dei Conservatori into an optical advantage by creating a trapezoidal plan, mirrored by the newly added Palazzo Nuovo, centered on a dynamic 12-pointed star elliptical pavement.",
    "explanationZh": "1536年米开朗基罗（Michelangelo）受教宗保禄三世委托改造卡比托利欧广场（Piazza del Campidoglio）。现场原有的元老院宫与保守宫呈80度斜向夹角，米开朗基罗巧妙构想了梯形广场平面，并在北侧新建完全对称的“新宫”（Palazzo Nuovo）形成透视视觉修正；地面铺设动态凸起的椭圆形12芒星石材几何图案，中央统摄古罗马马可·奥勒留皇帝骑马青铜雕像，创造出古典与手法主义张力并存的城市公共空间典范。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Michelangelo",
      "Campidoglio",
      "Urbanism",
      "Rome"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_198",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "When Michelangelo took over the direction of New Saint Peter's Basilica in 1546 at age 71, what was his decisive structural and aesthetic contribution?",
    "questionZh": "米开朗基罗于1546年以71岁高龄执掌罗马新圣彼得大教堂总建筑师重任时，对大教堂外观与穹顶作出的决定性结构与美学贡献是：",
    "optionsEn": [
      "Replacing the stone dome with an open glass pyramid",
      "Demolishing all existing foundations to replace them with a Gothic timber hall",
      "Unifying the exterior with a colossal Corinthian giant order of pilasters and designing the soaring double-shell ribbed dome supported on a drum of paired columns",
      "Adding seven concentric rings of minarets around the perimeter"
    ],
    "optionsZh": [
      "将石结构穹顶完全撤换为现代透光玻璃金字塔",
      "拆除当时已建好的所有柱墩基础，改建为中世纪哥特式木构大厅",
      "以统贯数层的巨型科林斯壁柱（Colossal Order）包裹外墙，并设计了由十六对双联外立柱鼓座支撑的宏伟双壳肋骨穹顶",
      "在大教堂外围周边环绕建造七个同心圆尖塔"
    ],
    "correctAnswer": 2,
    "explanationEn": "Michelangelo stripped away Sangallo's cluttered additions, returning to Bramante's centralized plan while sculpting the exterior with massive giant-order pilasters and calculating the double-shell masonry dome completed after his death by Giacomo della Porta.",
    "explanationZh": "米开朗基罗摈弃了小桑加洛繁琐琐碎的折衷方案，回归集中式纯粹体量，创造了高达27米贯穿两层的巨型科林斯壁柱。他设计的双层加肋圆穹顶成为统领罗马天际线、乃至影响全人类（如伦敦圣保罗大教堂与美国国会大厦）的穹顶之王。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Michelangelo",
      "St Peters",
      "Dome",
      "Giant Order"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_199",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1588 - 1590",
    "questionZh": "建筑大师贾科莫·德拉·波尔塔（Giacomo della Porta）在1588-1590年主导完成圣彼得大教堂穹顶建造时，对米开朗基罗原始穹顶木模作出的关键工程改动是：",
    "questionEn": "In completing the dome of St. Peter's Basilica between 1588 and 1590, what critical engineering modification did Giacomo della Porta introduce to Michelangelo's wooden model?",
    "optionsZh": [
      "将半球形穹顶彻底拆除，改用平整木板盖顶",
      "将穹顶直径缩小一半并在四周加筑四座哥特式砖砌烟囱",
      "将米开朗基罗较为平缓的半球形外轮廓向上抬高了约8米，改为更陡峭的尖抛物双曲轮廓，既极大地减小了水平侧推力，又使穹顶在地面近处免于被后来的长立面遮挡",
      "用全透明轻质玻璃钢取代了原有的双层大理石砌体"
    ],
    "optionsEn": [
      "Dismantling the masonry dome to install flat timber planking",
      "Halving the diameter of the dome and erecting four Gothic industrial chimneys",
      "Elevating the outer curve by approximately 8 meters into a steeper, parabolic pointed profile, reducing outward lateral thrust while enhancing visibility over the facade from below",
      "Replacing the double-shell stone vaulting with transparent lightweight fiberglass"
    ],
    "correctAnswer": 2,
    "explanationZh": "波尔塔与结构工程师丰塔纳耗时22个月神速封顶。波尔塔敏锐地将米开朗基罗的原正圆形双层穹顶向上拉高尖拱化（约抬高8米），不仅在力学上减轻了巨大的外推张力，更保证了从广场仰望时穹顶依然挺拔巍峨。",
    "explanationEn": "Della Porta adjusted Michelangelo's hemispherical profile into a slightly pointed parabolic double dome, raising the height by 8 meters to lessen lateral tensile stresses and preserve visual presence above the nave.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "DellaPorta",
      "StPetersDome",
      "Engineering"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_200",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which landmark architectural treatise was published by Andrea Palladio in Venice in 1570, featuring woodcut plans and elevations of his own villas and becoming the most influential pattern book across Britain and America?",
    "questionZh": "安德烈·帕拉第奥（Andrea Palladio）于1570年在威尼斯出版的哪部里程碑式建筑专著，附有大量自己庄园府邸的精准实测木刻平立面图，成为深刻塑造英美世界建筑形态的圣经？",
    "optionsEn": [
      "L'idea della architettura universale",
      "De re aedificatoria",
      "I quattro libri dell'architettura (The Four Books of Architecture)",
      "Regola delli cinque ordini d'architettura"
    ],
    "optionsZh": [
      "《通识建筑理念》(L'idea della architettura universale)",
      "《论建筑》(De re aedificatoria)",
      "《建筑四书》(I quattro libri dell'architettura)",
      "《五种建筑柱式规范》(Regola delli cinque ordini)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Andrea Palladio's 'I quattro libri dell'architettura' (1570) combined theoretical discussions of classical orders with clear woodcut plans of his villas and public buildings, sparking the international 'Palladianism' phenomenon from Inigo Jones to Thomas Jefferson's Monticello.",
    "explanationZh": "帕拉第奥在《建筑四书》中首次由建筑师系统出版自己的实际工程图样与黄金音阶空间长宽比，文字简明、图板精美，通过伊尼戈·琼斯传至英国，并跨大西洋成为托马斯·杰斐逊设计弗吉尼亚大学与蒙蒂塞洛庄园的范本（帕拉第奥主义）。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Palladio",
      "Treatise",
      "Palladianism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_201",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "Which iconic villa outside Vicenza, designed by Andrea Palladio in 1566 for canon Paolo Almerico, features a completely symmetrical square plan with a central domed rotunda hall and four identical hexastyle Ionic temple porticoes?",
    "questionZh": "由安德烈·帕拉第奥于1566年在维琴察近郊为保罗·阿尔梅利科教士设计的哪座举世闻名的乡间庄园，以完全轴对称正方形平面、中央半球圆厅穹顶以及朝向四面田野的四个相同六柱爱奥尼神庙门廊著称？",
    "optionsEn": [
      "Villa Emo at Fanzolo",
      "Villa Foscari 'La Malcontenta'",
      "Villa Barbaro at Maser",
      "Villa Capra 'La Rotonda'"
    ],
    "optionsZh": [
      "范佐洛的埃莫别墅 (Villa Emo)",
      "福斯卡里别墅 / 恶妇别墅 (Villa Foscari)",
      "马塞尔的巴巴罗别墅 (Villa Barbaro)",
      "圆厅别墅 / 摩羯庄园 (Villa Capra 'La Rotonda')"
    ],
    "correctAnswer": 3,
    "explanationEn": "Villa Rotonda (Villa Almerico-Capra) is Palladio's most imitated domestic building; designed as a hilltop belvedere rather than a working farm, each of its four identical temple porticoes embraces the surrounding landscape in pure geometrical harmony.",
    "explanationZh": "圆厅别墅（La Rotonda）被视为文艺复兴几何神圣秩序与景观融合的极致：它坐落于山丘之巅，正方形平面的东西南北四面各伸出一座宏伟的爱奥尼古典神庙山花门廊，中央冠以圆厅穹顶，无论从哪个方向眺望皆呈现绝对对称的古典尊严。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Villa_Rotonda_1.jpg/800px-Villa_Rotonda_1.jpg",
    "fallbackImage": "/images/artworks/basilica-palladiana.jpg",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Palladio",
      "Villa Rotonda",
      "Symmetry"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_202",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "What is the 'Palladian Motif' (Serliana) masterfully employed by Andrea Palladio to wrap the Gothic council hall in Vicenza (Basilica Palladiana, begun 1549)?",
    "questionZh": "安德烈·帕拉第奥在改造维琴察中世纪市政厅外立面（帕拉第奥巴西利卡，1549年开工）时，巧妙运用的“塞尔利奥式 / 帕拉第奥母题”（Serliana / Palladian Motif）构造是指：",
    "optionsEn": [
      "A tripartite opening motif: a central semicircular arch flanked by two lower flat-topped trabeated openings supported by colonnettes",
      "Heavy soaring Gothic pointed openings sealed with rayonnant stained-glass tracery",
      "Continuous prestressed folded concrete sun-louvre fins paired with ribbon glass curtain walls",
      "An exterior diagonal flying buttress transmitting vault thrust down to ground piers"
    ],
    "optionsZh": [
      "一种三段式柱跨开洞母题：中央为半圆券拱，两侧各辅以一处由双联立柱支撑的较矮水平矩形开口（两开间过梁夹一圆拱）",
      "用彩色镶嵌玻璃花窗封闭的厚重高耸哥特式尖券开洞",
      "使用密集的连续预应力混凝土折板遮阳百叶与玻璃幕墙系统",
      "将外推力通过飞扶壁斜向支撑引导至地面墩座的受力构件"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Serliana (or Palladian motif) is a tripartite architectural opening featuring a central semicircular arch resting on an entablature supported by paired colonnettes, flanked by two lower rectangular openings. Palladio immortalized it on the loggias of the Basilica Palladiana in Vicenza.",
    "explanationZh": "塞尔利奥式拱 / 帕拉第奥母题（Serliana / Palladian Motif）最初由塞巴斯蒂亚诺·塞尔利奥在论著中图解，后由安德烈·帕拉第奥（Andrea Palladio）在维琴察巴西利卡（Basilica Palladiana，1549）双层大理石敞廊立面中炉火纯青地发扬光大。它由一个高挑的中央半圆券拱与两侧较矮的水平开间（由立柱支撑平梁）组合而成，具有极高的几何调节自由度，能优雅适应中世纪旧建筑不均匀的柱网跨度。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Palladio",
      "Basilica Palladiana",
      "Serliana"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_203",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "renaissance",
    "questionEn": "How did Andrea Palladio solve the centuries-old architectural challenge of designing a classical facade for a Christian basilica with a high central nave and lower side aisles (e.g. San Giorgio Maggiore and Il Redentore in Venice)?",
    "questionZh": "帕拉第奥在威尼斯设计圣乔治马焦雷圣殿（San Giorgio Maggiore）与救主堂（Il Redentore）时，是如何从根本上破解了中世纪以来“高耸中殿与矮小侧廊”难以披上古典神庙外衣的历史立面难题？",
    "optionsEn": [
      "By hiding the entire church behind a windowless fortress wall",
      "By interlocking two classical temple fronts: a tall, narrow pedimented temple on colossal Corinthian composite columns for the high nave, superimposed over a wider, lower pedimented temple front for the side aisles",
      "By completely cutting down the roof of the nave to make the entire building flat",
      "By carving the facade into the shape of a Venetian merchant galley"
    ],
    "optionsZh": [
      "建造一面高过教堂屋脊的无窗巨大平顶护城墙将整座教堂完全遮掩在后",
      "创造性地交织叠合了两座不同尺度的古典神庙山花立面：由巨柱式支撑的高挑神庙正面对应高耸中殿，叠合穿插一座横向延展平缓的低矮神庙山花对应两侧低矮副廊",
      "将高耸的中殿屋顶完全拆除削平，使整座教堂变为单层平顶结构",
      "将教堂立面大理石整体雕刻成一艘威尼斯商贸划桨大帆船的船艏造型"
    ],
    "correctAnswer": 1,
    "explanationEn": "Palladio interlaced two temple porticoes on one unified facade plane: four colossal composite columns support the tall central triangle matching the nave vault, while broken lower half-pediments on smaller pilasters correspond to the sloping side aisle roofs, creating logical tectonic unity.",
    "explanationZh": "帕拉第奥的双重神庙立面交错重叠堪称神来之笔：高耸的巨柱式托起中央大山花直冲云霄，而两侧较低的水平山花边缘与侧廊斜屋顶天衣无缝接轨，优雅解决了自早期基督教巴西利卡以来柱式难以涵盖高低落差断层的千古难题。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Palladio",
      "San Giorgio Maggiore",
      "Temple Front",
      "Venice"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_204",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1642 - 1660",
    "questionZh": "弗朗切斯科·博罗米尼在罗马设计的圣伊沃堂（Sant'Ivo alla Sapienza），其令人叹为观止的平面几何母题是：",
    "questionEn": "Designed by Francesco Borromini within the courtyard of the Palazzo della Sapienza in Rome, what ingenious geometric motif governs the plan of Sant'Ivo alla Sapienza?",
    "optionsZh": [
      "完全正交均质的九宫格混凝土框架",
      "单一的正圆形无窗地下水牢",
      "严格遵从帕拉第奥对称的科林斯双柱长方形大厅",
      "两个相互重叠倒置的等边三角形构成的六角星（所罗门之印/智慧之星），顶点交替由凹面与凸面圆弧切割包裹，向上升腾为连续扭转上升的惊艳螺旋形灯笼塔（Spiral Lantern）"
    ],
    "optionsEn": [
      "An orthogonal homogeneous nine-square concrete structural frame",
      "A solitary circular windowless subterranean prison cell",
      "A rectilinear hall fronted by paired Corinthian columns adhering to Palladian symmetry",
      "Two intersecting equilateral triangles forming a hexagram (Star of Solomon / Wisdom), alternating between convex curves and concave recesses, culminating in an extraordinary corkscrew spiral lantern"
    ],
    "correctAnswer": 3,
    "explanationZh": "博罗米尼在大学中庭尽端将两个等边三角形相交为六角星几何，六个顶点交错以凹弧与凸弧雕刻，墙面如呼吸律动向上延伸进入穹顶；外部塔顶则是令人惊叹的螺旋形上升尖塔，象征人类智慧如火焰直通苍穹。",
    "explanationEn": "Sant'Ivo's plan is generated from two interlocking equilateral triangles forming a hexagram, sculpted into alternating concave and convex bays that rise fluidly into the dome and culminate in an iconic spiraling ziggurat lantern.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Borromini",
      "SantIvo",
      "SpiralLantern"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_205",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1652 - 1653",
    "questionZh": "弗朗切斯科·博罗米尼在罗马斯帕达宫（Palazzo Spada）庭院中设计的著名透视长廊（Perspective Gallery），其视觉错觉把戏在于：",
    "questionEn": "In his celebrated forced-perspective gallery at the Palazzo Spada in Rome (1652–1653), how did Francesco Borromini manipulate optical geometry?",
    "optionsZh": [
      "实际仅有8.6米长的狭窄通道，通过地面向上倾斜、天花板向下倾斜、两侧列柱间距向内收窄，制造出观者眼中看似长达近40米且尽头伫立着真人大小古罗马雕像的错视幻觉（尽头雕像实际仅60厘米高）",
      "在长廊两侧满贴反光镜面以制造无限延伸的万花筒效果",
      "使用高科技数码投影仪在白墙上实时投射动态三维虚拟动画",
      "完全使用透明水晶砖砌筑形成水族馆式海底隧道"
    ],
    "optionsEn": [
      "A gallery measuring merely 8.6 meters in real length is perceived as nearly 40 meters long: floor slopes up, ceiling slopes down, and flanking colonnades converge rapidly toward a statue that appears life-sized but is actually only 60 cm tall",
      "Lining both corridor walls with parallel silver mirrors to produce a kaleidoscope infinity reflex",
      "Projecting dynamic digital 3D animations onto flat white plaster surfaces",
      "Assembling transparent acrylic blocks into a subterranean marine-walkway tunnel"
    ],
    "correctAnswer": 0,
    "explanationZh": "博罗米尼与数学家神父合作，在微小进深中应用了强迫透视法（Forced perspective）。地面爬升、天顶下沉、柱径迅速减小，使不到9米的狭长廊道在心理感知上被拉长4倍，揭示了巴洛克时代对幻觉与实在的哲学戏谑。",
    "explanationEn": "Borromini executed a masterpiece of trompe l'œil forced perspective: by converging the colonnade walls, raising the floor, and lowering the barrel vault across 8.6 meters, he created the illusion of an immense 40-meter gallery.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Borromini",
      "PalazzoSpada",
      "ForcedPerspective"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_206",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1668 - 1694",
    "questionZh": "都灵巴洛克大师瓜里诺·瓜里尼（Guarino Guarini）在都灵主教座堂后营建的裹尸布礼拜堂（Cappella della Sacra Sindone），其穹顶结构最令人匪夷所思的数学几何成就是：",
    "questionEn": "Engineered by Guarino Guarini for the Shroud of Turin (Cappella della Sacra Sindone, 1668–1694), what astonishing geometric structure forms the dome?",
    "optionsZh": [
      "采用古典木结构榫卯搭建的单跨人字梁屋顶",
      "由深黑色大理石与深灰色砖石砌造，底层为三个大圆拱，上方层叠排布六层相互交错错落的弓形拱段（Segmental Arches），形成层层向上缩小、如同伊斯兰几何编织的透光蜂巢六角星穹顶",
      "完全使用全透明钢化玻璃板无缝粘接拼接而成的平板屋顶",
      "完全复制古罗马万神庙的单一正圆形平素穹顶"
    ],
    "optionsEn": [
      "A traditional post-and-lintel timber truss roof assembled without metal fasteners",
      "Hewn from dark grey and black marble, six ascending tiers of segmented, overlapping masonry arches bridge across one another to form an open, woven star-hexagonal conical dome that defies structural gravity",
      "A frameless flat skylight composed of structural glass sheets bonded with silicone",
      "An unadorned hemispherical masonry shell duplicating the Roman Pantheon"
    ],
    "correctAnswer": 1,
    "explanationZh": "瓜里尼兼具哲学家、数学家与建筑师身份。他受摩尔人伊斯兰交错拱券启发，用36个深色拱段层叠交织成一座如同通往天堂的旋转蜂窝光之塔，光线穿透孔隙洒在中央神龛上，呈现出超现实的数学神性。",
    "explanationEn": "Guarini's Chapel of the Holy Shroud features a breathtaking conical dome woven from 36 segmental arches spanning diagonally across six tiers, dissolving heavy dark marble into a luminous geometric kaleidoscope.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Guarini",
      "SacraSindone",
      "InterlacedArches"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_207",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1666 - 1680",
    "questionZh": "瓜里诺·瓜里尼在都灵设计的圣洛伦佐堂（San Lorenzo, Turin），其内部穹顶展现其立体几何天才的构造是：",
    "questionEn": "In his interior dome for the Church of San Lorenzo in Turin (1666–1680), how did Guarino Guarini manifest his genius for stereotomy and projective geometry?",
    "optionsZh": [
      "用八根相互平行的平直实木梁并排搭在承重砖墙上",
      "完全拆除穹顶，将整个礼拜堂暴露在露天日晒雨淋之下",
      "八根纤细的交叉拱肋相互交错穿插，在空中编织出一个镂空的八角星图案（类似摩尔式科尔多瓦大清真寺交叉肋拱），中央留下悬空的八角透光天窗与诡异微笑状穹隅面孔",
      "正方形九宫格纯白石膏板吊顶"
    ],
    "optionsEn": [
      "Eight parallel straight timber joists spanning between exterior masonry walls",
      "Demolishing the roof entirely to expose the nave to open weather and natural rain",
      "Eight slender intersecting stone ribs weaving through three-dimensional space to form an openwork eight-pointed star, echoing Moorish rib vaults of Córdoba, crowned by an octagonal lantern",
      "A flat, rectilinear nine-square suspended ceiling cast in white gypsum"
    ],
    "correctAnswer": 2,
    "explanationZh": "瓜里尼在圣洛伦佐堂将伊斯兰西班牙与哥特式肋架传统融合进意大利巴洛克。八根石拱肋互相交叉避开中心，形成空灵璀璨的八角星网，穹顶上方天窗射入戏剧化光柱，结构逻辑充满对巴洛克虚幻幻象的数学超越。",
    "explanationEn": "At San Lorenzo, Guarini deployed eight intersecting structural masonry ribs that cross in pairs without meeting at the apex, generating a soaring openwork Islamic-inspired eight-pointed star beneath an airy lantern.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Guarini",
      "SanLorenzoTurin",
      "StarVault"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_208",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "baroque",
    "questionEn": "What powerful theological metaphor guided Gian Lorenzo Bernini's design of the colossal quadruple colonnade enclosing Saint Peter's Square in Rome (1656-1667)?",
    "questionZh": "吉安·洛伦佐·贝尼尼在规划罗马梵蒂冈圣彼得大教堂大广场（Piazza San Pietro, 1656-1667）由284根巨型多立克柱构成的宏伟弧形四排柱廊时，所依据的核心宗教象征寓意是：",
    "optionsEn": [
      "An astronomical clock dial calculating the vernal equinox",
      "A military fortress wall designed to repel Ottoman artillery fire",
      "The motherly arms of the Catholic Church opening outwards to embrace the faithful, reunite heretics, and welcome non-believers into the fold",
      "A replica of King Solomon's Temple courtyard in ancient Jerusalem"
    ],
    "optionsZh": [
      "用来精准测算春分点与行星公转周期的巨型露天日晷天文仪器",
      "用于抵抗奥斯曼帝国加农重炮轰击的坚不可摧军事防御城墙体系",
      "罗马天主教会慈母般的双手张开双臂，以包容寰宇的博大胸怀拥抱信徒、感化异端并接纳全世界所有朝圣者回归信仰怀抱",
      "完全按原样等比例复刻古耶路撒冷所罗门第一圣殿的祭祀外院"
    ],
    "correctAnswer": 2,
    "explanationEn": "Bernini explicitly stated in his architectural memoirs that the curved elliptical colonnades represent 'the arms of the Church which are opened wide to embrace Catholics to reinforce their belief, heretics to re-unite them, and agnostics to enlighten them'.",
    "explanationZh": "贝尼尼在设计说明中明确写道：“既然圣彼得教堂是万堂之母，其柱廊就必须如同慈母张开的双臂。”两道巨大的四排多立克立柱椭圆弧形柱廊如环抱的巨手，无论从视觉震撼力还是宗教神学象征上，都将巴洛克都市空间的庄严与宽广推向了顶峰。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Bernini",
      "St Peters Square",
      "Baroque",
      "Urbanism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_209",
    "domain": "renaissance_classical",
    "subCategory": "Baroque & Counter-Reformation",
    "era": "baroque",
    "questionEn": "Which colossal 29-meter-high gilded bronze canopy was erected by Gian Lorenzo Bernini beneath Michelangelo's dome in Saint Peter's (1624-1633), supported by four spiraling Solomonic columns adorned with Barberini bees?",
    "questionZh": "由贝尼尼受教皇乌尔班八世委托、在圣彼得大教堂米开朗基罗穹顶正下方殉道墓穴之上耸立的29米高巨型贴金青铜华盖是：",
    "optionsEn": [
      "The Baldacchino in Saint Peter's Basilica (Baldacchino di San Pietro)",
      "The Cathedra Petri (Throne of Saint Peter)",
      "The Tomb of Pope Urban VIII",
      "The Scala Regia"
    ],
    "optionsZh": [
      "圣彼得大教堂青铜华盖 (St. Peter's Baldacchino / Baldacchino di San Pietro)",
      "圣彼得宗座圣椅 (Cathedra Petri)",
      "乌尔班八世教皇陵墓",
      "梵蒂冈王家阶梯 (Scala Regia)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Bernini melted ancient bronze beams stripped from the Roman Pantheon to cast the immense 66-ton Baldacchino, featuring four spiraling Solomonic columns evoking the Temple of Jerusalem and crowned with angels holding palms beneath the papal cross.",
    "explanationZh": "圣彼得青铜华盖高近10层楼，重达66吨。四根巨大螺旋盘旋的所罗门扭柱将视线引向穹顶苍穹，表面雕刻藤蔓植物与巴贝里尼家族的标志金蜜蜂，以令人叹为观止的巴洛克宏大尺度锁定了整座天主教世界中枢圣地。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Saint_Peter%27s_Baldachin.jpg/800px-Saint_Peter%27s_Baldachin.jpg",
    "fallbackImage": "/images/artworks/st-peters-baldachin.jpg",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Bernini",
      "Baldacchino",
      "St Peters",
      "Baroque"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_210",
    "domain": "renaissance_classical",
    "subCategory": "Architectural Treatises & Masters",
    "era": "baroque",
    "questionEn": "Which Roman Baroque church facade and interior by Francesco Borromini (San Carlo alle Quattro Fontane, 1638-1646) discarded flat classical planes in favor of an undulating wave of alternating concave and convex curves under a complex oval coffered dome?",
    "questionZh": "弗朗切斯科·博罗米尼（Francesco Borromini）在罗马设计的哪座巴洛克殿堂杰作（1638-1646），彻底颠覆平直古典墙面，以交替起伏的凹凸波浪形动感曲面立面和饰有八角形与十字形藻井的复杂椭圆穹顶震撼世界？",
    "optionsEn": [
      "Sant'Agnese in Agone at Piazza Navona",
      "Sant'Ivo alla Sapienza",
      "San Carlo alle Quattro Fontane (San Carlino)",
      "Santa Maria della Pace"
    ],
    "optionsZh": [
      "纳沃纳广场阿格尼丝堂 (Sant'Agnese in Agone)",
      "圣依弗堂 (Sant'Ivo alla Sapienza)",
      "四喷泉圣卡罗堂 / 小圣卡罗 (San Carlo alle Quattro Fontane / San Carlino)",
      "和平圣母堂 (Santa Maria della Pace)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Borromini designed San Carlino on a cramped corner site for poor Spanish Trinitarians, using complex geometric interlocking triangles to generate an elastic undulating oval interior and a two-story wave-like facade that breathes dynamic sculptural life into architectural stone.",
    "explanationZh": "博罗米尼在四喷泉圣卡罗教堂中展现了纯粹的数学几何天才：在极其狭小的转角地块上，他将整面大理石外墙处理成如同受挤压波动的流体波浪（凸-凹-凸交替），穹顶椭圆深槽藻井（八角、六角与十字）伴随透视渐变缩小，光芒从采光天窗倾泻，成为高潮巴洛克空间最具创新性的奇葩。",
    "tags": [
      "RenaissanceClassical",
      "Architecture",
      "Borromini",
      "San Carlo alle Quattro Fontane",
      "Baroque",
      "Undulating Facade"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_211",
    "domain": "chronology",
    "subCategory": "Le Corbusier Architectural Evolution",
    "era": "1914 - 1955",
    "questionZh": "下列哪组序列准确反映了勒·柯布西耶建筑设计理论与实践的发展演进脉络？",
    "questionEn": "Which sequence accurately traces the chronological evolution of Le Corbusier's theoretical models and architectural masterworks?",
    "optionsZh": [
      "多米诺体系 (1914) -> 新建筑五点 (1926) -> 萨伏伊别墅 (1931) -> 马赛公寓 (1952) -> 朗香教堂 (1955)",
      "萨伏伊别墅 (1931) -> 多米诺体系 (1914) -> 马赛公寓 (1952) -> 新建筑五点 (1926) -> 朗香教堂 (1955)",
      "新建筑五点 (1926) -> 多米诺体系 (1914) -> 朗香教堂 (1955) -> 萨伏伊别墅 (1931) -> 马赛公寓 (1952)",
      "朗香教堂 (1955) -> 马赛公寓 (1952) -> 萨伏伊别墅 (1931) -> 新建筑五点 (1926) -> 多米诺体系 (1914)"
    ],
    "optionsEn": [
      "Maison Dom-Ino (1914) -> Five Points of Architecture (1926) -> Villa Savoye (1931) -> Unité d'Habitation (1952) -> Ronchamp Chapel (1955)",
      "Villa Savoye (1931) -> Maison Dom-Ino (1914) -> Unité d'Habitation (1952) -> Five Points (1926) -> Ronchamp (1955)",
      "Five Points (1926) -> Maison Dom-Ino (1914) -> Ronchamp (1955) -> Villa Savoye (1931) -> Unité d'Habitation (1952)",
      "Ronchamp (1955) -> Unité d'Habitation (1952) -> Villa Savoye (1931) -> Five Points (1926) -> Maison Dom-Ino (1914)"
    ],
    "correctAnswer": 0,
    "explanationZh": "柯布西耶的发展轨迹为：1914年提出标准化混凝土框架“多米诺体系”（Dom-Ino）；1926年系统发表“新建筑五点”（底层架空柱、屋顶花园、自由平面、横向长窗、自由立面）；1928-1931年建成五点集大成名作萨伏伊别墅；战后1947-1952年以粗野主义混凝土和模度理论建成马赛公寓；1950-1955年以雕塑感自由曲面落成朗香圣母朝圣所。",
    "explanationEn": "Le Corbusier's trajectory spans: Maison Dom-Ino skeleton concept (1914) -> The Five Points of a New Architecture (1926) -> Villa Savoye (1928–1931) -> Unité d'Habitation in Marseille (1947–1952, introducing Béton Brut and the Modulor) -> Notre-Dame du Haut at Ronchamp (1950–1955, organic sculptural expressionism).",
    "tags": [
      "Chronology",
      "Modernism",
      "LeCorbusier"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_212",
    "domain": "chronology",
    "subCategory": "Mies van der Rohe Career Milestones",
    "era": "1927 - 1958",
    "questionZh": "请按落成或就任年份先后排列密斯·凡·德·罗（Ludwig Mies van der Rohe）的标志性建筑成就：",
    "questionEn": "Place the following landmark career achievements of Ludwig Mies van der Rohe in chronological order:",
    "optionsZh": [
      "纽约西格拉姆大厦 -> 魏森霍夫住宅展主管 -> 巴塞罗那德国馆 -> 图根哈特别墅",
      "魏森霍夫住宅展主管 (1927) -> 巴塞罗那德国馆 (1929) -> 图根哈特别墅 (1930) -> 纽约西格拉姆大厦 (1958)",
      "巴塞罗那德国馆 (1929) -> 纽约西格拉姆大厦 (1958) -> 魏森霍夫住宅展主管 (1927) -> 图根哈特别墅 (1930)",
      "图根哈特别墅 (1930) -> 巴塞罗那德国馆 (1929) -> 魏森霍夫住宅展主管 (1927) -> 纽约西格拉姆大厦 (1958)"
    ],
    "optionsEn": [
      "Seagram Building -> Weissenhof Director -> Barcelona Pavilion -> Villa Tugendhat",
      "Weissenhof Exhibition Director (1927) -> Barcelona Pavilion (1929) -> Villa Tugendhat (1930) -> Seagram Building (1958)",
      "Barcelona Pavilion (1929) -> Seagram Building (1958) -> Weissenhof Director (1927) -> Villa Tugendhat (1930)",
      "Villa Tugendhat (1930) -> Barcelona Pavilion (1929) -> Weissenhof Director (1927) -> Seagram Building (1958)"
    ],
    "correctAnswer": 1,
    "explanationZh": "密斯的重要成就时间线为：1927年统筹指导斯图加特魏森霍夫现代住宅展并设计其主公寓楼；1929年为巴塞罗那世博会设计德国馆（开创流动空间与十字镀铬柱）；1930年在捷克布尔诺落成图根哈特别墅（全钢结构通透私宅）；流亡美国后于1958年在纽约落成铜色玻璃幕墙摩天大楼西格拉姆大厦。",
    "explanationEn": "The sequence of Mies's career achievements is: Artistic Director of Stuttgart's Weissenhofsiedlung (1927) -> German Pavilion at Barcelona (1929) -> Villa Tugendhat in Brno (1930) -> Seagram Building in New York (1958, the archetype of the bronze-and-glass corporate high-rise).",
    "tags": [
      "Chronology",
      "Modernism",
      "Mies"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_213",
    "domain": "chronology",
    "subCategory": "Frank Lloyd Wright Masterworks Timeline",
    "era": "1910 - 1959",
    "questionZh": "下列哪组序列正确展现了弗兰克·劳埃德·赖特（Frank Lloyd Wright）三座传世代表作的营建年代顺序？",
    "questionEn": "Which sequence correctly reflects the chronological order of Frank Lloyd Wright's three iconic masterpieces?",
    "optionsZh": [
      "流水别墅 (1935) -> 罗比住宅 (1910) -> 纽约古根海姆博物馆 (1959)",
      "纽约古根海姆博物馆 (1959) -> 流水别墅 (1935) -> 罗比住宅 (1910)",
      "罗比住宅 (1910) -> 流水别墅 (1935) -> 纽约古根海姆博物馆 (1959)",
      "罗比住宅 (1910) -> 纽约古根海姆博物馆 (1959) -> 流水别墅 (1935)"
    ],
    "optionsEn": [
      "Fallingwater (1935) -> Robie House (1910) -> Solomon R. Guggenheim Museum (1959)",
      "Solomon R. Guggenheim Museum (1959) -> Fallingwater (1935) -> Robie House (1910)",
      "Robie House (1910) -> Fallingwater (1935) -> Solomon R. Guggenheim Museum (1959)",
      "Robie House (1910) -> Solomon R. Guggenheim Museum (1959) -> Fallingwater (1935)"
    ],
    "correctAnswer": 2,
    "explanationZh": "赖特三座名作的时间顺序为：1909-1910年在芝加哥落成草原学派（Prairie School）顶峰罗比住宅（水平挑檐与中央壁炉核心）；1935年在宾夕法尼亚山林落成悬挑混凝土有机建筑流水别墅（Fallingwater）；1959年在纽约曼哈顿落成倒锥形连续螺旋展廊所罗门·R·古根海姆博物馆。",
    "explanationEn": "The sequence of Wright's canonical works is: Frederick C. Robie House in Chicago (1910, Prairie School masterpiece) -> Fallingwater in Bear Run (1935, organic cantilevered concrete over a waterfall) -> Solomon R. Guggenheim Museum in New York (opened 1959, continuous upward-spiraling helical ramp).",
    "tags": [
      "Chronology",
      "Modernism",
      "Wright",
      "OrganicArchitecture"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_214",
    "domain": "chronology",
    "subCategory": "Antoni Gaudi Landmarks Inception",
    "era": "1882 - 1906",
    "questionZh": "安东尼·高迪（Antoni Gaudí）在巴塞罗那主持营建三处绝世地标的启动或改建先后顺序是：",
    "questionEn": "What is the correct chronological sequence of inception for Antoni Gaudí's three legendary Barcelona landmarks?",
    "optionsZh": [
      "米拉之家 -> 巴特罗之家 -> 圣家族大教堂",
      "巴特罗之家 -> 圣家族大教堂 -> 米拉之家",
      "圣家族大教堂 -> 米拉之家 -> 巴特罗之家",
      "圣家族大教堂 (接手于1883) -> 巴特罗之家改建 (1904) -> 米拉之家营建 (1906)"
    ],
    "optionsEn": [
      "Casa Milà -> Casa Batlló -> Sagrada Família",
      "Casa Batlló -> Sagrada Família -> Casa Milà",
      "Sagrada Família -> Casa Milà -> Casa Batlló",
      "Sagrada Família (assumed 1883) -> Casa Batlló (1904) -> Casa Milà (1906)"
    ],
    "correctAnswer": 3,
    "explanationZh": "高迪巴塞罗那三大名作的先后顺序为：圣家族大教堂（Sagrada Família，1882年奠基，高迪于1883年正式接管总建筑师并倾注余生）；巴特罗之家（Casa Batlló，1904-1906年对旧建筑进行魔幻龙鳞碎瓷与波浪骨骼立面改建）；米拉之家（Casa Milà / La Pedrera，1906-1912年营建的采石场般全曲面无承重墙公寓）。",
    "explanationEn": "Gaudí's major architectural timeline is: Sagrada Família (groundbroken 1882, Gaudí assumed control in 1883) -> Casa Batlló remodel (1904–1906, organic dragon-spine roof and skeletal balconies) -> Casa Milà construction (1906–1912, undulating self-supporting stone facade and sculptural roof terrace).",
    "tags": [
      "Chronology",
      "Gaudi",
      "CatalanModernisme",
      "Barcelona"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_215",
    "domain": "chronology",
    "subCategory": "Italian Rationalism Architecture Progression",
    "era": "1929 - 1958",
    "questionZh": "下列哪组序列准确排列了意大利理性主义与战后新现实主义现代建筑经典名作的落成年份？",
    "questionEn": "Which sequence accurately orders the completion dates of Italian Rationalist and post-war modernist architectural masterworks?",
    "optionsZh": [
      "科莫诺沃科姆姆公寓 (1929) -> 科莫法西斯大楼 (1936) -> 奥利维蒂伊夫雷亚总部工厂 (1957) -> 米兰维拉斯加塔楼 (1958)",
      "科莫法西斯大楼 (1936) -> 科莫诺沃科姆姆公寓 (1929) -> 米兰维拉斯加塔楼 (1958) -> 奥利维蒂伊夫雷亚总部工厂 (1957)",
      "米兰维拉斯加塔楼 (1958) -> 科莫诺沃科姆姆公寓 (1929) -> 科莫法西斯大楼 (1936) -> 奥利维蒂伊夫雷亚总部工厂 (1957)",
      "科莫诺沃科姆姆公寓 (1929) -> 米兰维拉斯加塔楼 (1958) -> 科莫法西斯大楼 (1936) -> 奥利维蒂伊夫雷亚总部工厂 (1957)"
    ],
    "optionsEn": [
      "Novocomum Como (1929) -> Casa del Fascio Como (1936) -> Olivetti Factory Ivrea (1957) -> Torre Velasca Milan (1958)",
      "Casa del Fascio Como (1936) -> Novocomum Como (1929) -> Torre Velasca Milan (1958) -> Olivetti Factory Ivrea (1957)",
      "Torre Velasca Milan (1958) -> Novocomum Como (1929) -> Casa del Fascio Como (1936) -> Olivetti Factory Ivrea (1957)",
      "Novocomum Como (1929) -> Torre Velasca Milan (1958) -> Casa del Fascio Como (1936) -> Olivetti Factory Ivrea (1957)"
    ],
    "correctAnswer": 0,
    "explanationZh": "意大利现代建筑演变时间线为：泰拉尼在科莫建成的诺沃科姆姆公寓（Novocomum，1927-1929年，理性主义住宅先锋） -> 泰拉尼在科莫设计的法西斯大楼（Casa del Fascio，1932-1936年，大理石正方几何与玻璃通透空间典范） -> 菲吉尼与波利尼主持扩建的奥利维蒂伊夫雷亚工业总部（1934-1957年） -> BBPR事务所在米兰历史中心落成的维拉斯加塔楼（Torre Velasca，1958年，将现代钢筋混凝土悬挑与中世纪伦巴第城堡意象融合）。",
    "explanationEn": "The sequence of Italian Rationalist and post-war milestones is: Giuseppe Terragni's Novocomum in Como (1929, rationalist apartment block) -> Terragni's Casa del Fascio in Como (1936, crystalline proportional marble cube) -> Figini & Pollini's Olivetti complex in Ivrea (completed 1957) -> BBPR's Torre Velasca in Milan (1958, contextual brutalist tower evoking medieval Lombard fortresses).",
    "tags": [
      "Chronology",
      "Rationalism",
      "Terragni",
      "BBPR",
      "Milan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_216",
    "domain": "chronology",
    "subCategory": "De Chirico Metaphysical Paintings",
    "era": "1911 - 1917",
    "questionZh": "请按创作完成年份的先后顺序排列乔治·德·基里科（Giorgio de Chirico）以下三幅形而上画派经典名作：",
    "questionEn": "Place the following three Metaphysical paintings by Giorgio de Chirico in their correct chronological order of creation:",
    "optionsZh": [
      "《不安的缪斯》 (1917) -> 《时间之谜》 (1911) -> 《爱之歌》 (1914)",
      "《时间之谜》 (1911) -> 《爱之歌》 (1914) -> 《不安的缪斯》 (1917)",
      "《爱之歌》 (1914) -> 《时间之谜》 (1911) -> 《不安的缪斯》 (1917)",
      "《时间之谜》 (1911) -> 《不安的缪斯》 (1917) -> 《爱之歌》 (1914)"
    ],
    "optionsEn": [
      "The Disquieting Muses (1917) -> The Enigma of the Hour (1911) -> The Song of Love (1914)",
      "The Enigma of the Hour (1911) -> The Song of Love (1914) -> The Disquieting Muses (1917)",
      "The Song of Love (1914) -> The Enigma of the Hour (1911) -> The Disquieting Muses (1917)",
      "The Enigma of the Hour (1911) -> The Disquieting Muses (1917) -> The Song of Love (1914)"
    ],
    "correctAnswer": 1,
    "explanationZh": "基里科形而上名作的时间顺序为：《时间之谜》（The Enigma of the Hour，1911年，早期描绘空旷意大利拱廊、大钟与凝滞阴影的代表作） -> 《爱之歌》（The Song of Love，1914年，并置阿波罗石雕与红色橡胶手套） -> 《不安的缪斯》（The Disquieting Muses，1917-1918年，费拉拉城堡前的人偶缪斯与测量工具）。",
    "explanationEn": "The sequence of De Chirico's Metaphysical works is: The Enigma of the Hour (1911, early painting of arcaded shadow and frozen time) -> The Song of Love (1914, juxtaposition of Apollo bust and surgical rubber glove) -> The Disquieting Muses (1917–1918, mannequins in front of the Castello Estense in Ferrara).",
    "tags": [
      "Chronology",
      "Metaphysics",
      "DeChirico"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_217",
    "domain": "chronology",
    "subCategory": "De Stijl Evolution Timeline",
    "era": "1917 - 1943",
    "questionZh": "下列哪组事件准确排列了荷兰风格派（De Stijl）与新造型主义历史演进的关键时间节点？",
    "questionEn": "Which sequence accurately traces the chronological progression of De Stijl and Neoplasticism from founding to culmination?",
    "optionsZh": [
      "蒙德里安《百老汇爵士乐》 -> 杜斯堡引入45度斜线要素主义 -> 莱顿创办《风格派》杂志 -> 蒙德里安发表《新造型主义》",
      "杜斯堡引入45度斜线要素主义 -> 莱顿创办《风格派》杂志 -> 蒙德里安发表《新造型主义》 -> 蒙德里安《百老汇爵士乐》",
      "杜斯堡在莱顿创办《风格派》杂志 (1917) -> 蒙德里安发表《新造型主义》理论 (1920) -> 杜斯堡提出要素主义引发分裂 (1924) -> 蒙德里安完成《百老汇爵士乐》 (1943)",
      "蒙德里安发表《新造型主义》理论 (1920) -> 杜斯堡在莱顿创办《风格派》杂志 (1917) -> 蒙德里安完成《百老汇爵士乐》 (1943) -> 杜斯堡提出要素主义引发分裂 (1924)"
    ],
    "optionsEn": [
      "Broadway Boogie Woogie -> Van Doesburg's Elementarism -> De Stijl Magazine founded -> Neoplasticism published",
      "Van Doesburg's Elementarism -> De Stijl Magazine founded -> Neoplasticism published -> Broadway Boogie Woogie",
      "De Stijl Magazine founded in Leiden (1917) -> Mondrian publishes Le Néo-Plasticisme (1920) -> Van Doesburg introduces Elementarism causing schism (1924) -> Mondrian paints Broadway Boogie Woogie (1943)",
      "Mondrian publishes Le Néo-Plasticisme (1920) -> De Stijl Magazine founded in Leiden (1917) -> Broadway Boogie Woogie (1943) -> Van Doesburg introduces Elementarism (1924)"
    ],
    "correctAnswer": 2,
    "explanationZh": "风格派历史关键节点为：1917年特奥·范·杜斯堡在莱顿创办《风格派》（De Stijl）杂志；1920年蒙德里安在巴黎由莱昂斯·罗森伯格画廊出版法文小册子《新造型主义》（Le Néo-Plasticisme）；1924年杜斯堡在《反构图》系列中引入45度倾斜斜线开创要素主义（Elementarism），导致蒙德里安退社；1942-1943年蒙德里安流亡纽约完成晚期以跳跃彩色方块取代黑线的绝唱《百老汇爵士乐》（Broadway Boogie Woogie）。",
    "explanationEn": "The sequence of De Stijl milestones is: Theo van Doesburg launches De Stijl magazine in Leiden (1917) -> Piet Mondrian publishes Le Néo-Plasticisme booklet in Paris (1920) -> Van Doesburg introduces 45-degree diagonal Elementarism, triggering Mondrian's departure (1924) -> Mondrian paints Broadway Boogie Woogie in New York (1942–1943).",
    "tags": [
      "Chronology",
      "DeStijl",
      "Mondrian",
      "VanDoesburg"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_218",
    "domain": "chronology",
    "subCategory": "Pop Art Breakthrough Timeline",
    "era": "1962 - 1964",
    "questionZh": "请按创作或首展年份先后排列1961至1964年间爆发的三件美国波普艺术巅峰杰作：",
    "questionEn": "Place the following three American Pop Art triumphs of 1961–1964 in chronological order of their debut:",
    "optionsZh": [
      "安迪·沃霍尔《枪击玛丽莲·梦露》 -> 安迪·沃霍尔《坎贝尔罐头汤》 -> 罗伊·利希滕斯坦《看，米奇！》",
      "安迪·沃霍尔《坎贝尔罐头汤》 -> 罗伊·利希滕斯坦《看，米奇！》 -> 安迪·沃霍尔《枪击玛丽莲·梦露》",
      "安迪·沃霍尔《枪击玛丽莲·梦露》 -> 罗伊·利希滕斯坦《看，米奇！》 -> 安迪·沃霍尔《坎贝尔罐头汤》",
      "罗伊·利希滕斯坦《看，米奇！》 (1961) -> 安迪·沃霍尔《坎贝尔罐头汤》 (1962) -> 安迪·沃霍尔《枪击玛丽莲·梦露》 (1964)"
    ],
    "optionsEn": [
      "Shot Marilyns -> Campbell's Soup Cans -> Look Mickey",
      "Campbell's Soup Cans -> Look Mickey -> Shot Marilyns",
      "Shot Marilyns -> Look Mickey -> Campbell's Soup Cans",
      "Roy Lichtenstein's Look Mickey (1961) -> Andy Warhol's Campbell's Soup I (1962) -> Andy Warhol's Shot Marilyns (1964)"
    ],
    "correctAnswer": 3,
    "explanationZh": "波普艺术突破阶段的先后顺序为：1961年罗伊·利希滕斯坦首次将漫画网点搬上画布完成《看，米奇！》（Look Mickey）；1962年7月安迪·沃霍尔在洛杉矶费鲁斯画廊展出32幅《坎贝尔罐头汤》（Campbell's Soup I）；1964年沃霍尔在梦露去世后完成著名的《枪击玛丽莲·梦露》（Shot Marilyns）丝网版画系列。",
    "explanationEn": "The sequence of early 1960s Pop Art milestones is: Roy Lichtenstein's comic-strip breakthrough Look Mickey (1961) -> Andy Warhol's 32 Campbell's Soup I canvases exhibited at Ferus Gallery (July 1962) -> Warhol's Shot Marilyns silkscreen series following Marilyn Monroe's death (1964).",
    "tags": [
      "Chronology",
      "PopArt",
      "Warhol",
      "Lichtenstein"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_219",
    "domain": "chronology",
    "subCategory": "High Gothic Cathedrals Timeline",
    "era": "1163 - 1386",
    "questionZh": "请按工程奠基启动的先后顺序排列以下四座欧洲哥特式大教堂里程碑：",
    "questionEn": "Arrange the following four monumental European Gothic cathedrals in chronological order of their groundbreaking:",
    "optionsZh": [
      "巴黎圣母院 (1163) -> 亚眠大教堂 (1220) -> 科隆大教堂 (1248) -> 米兰大教堂 (1386)",
      "亚眠大教堂 (1220) -> 巴黎圣母院 (1163) -> 米兰大教堂 (1386) -> 科隆大教堂 (1248)",
      "科隆大教堂 (1248) -> 巴黎圣母院 (1163) -> 亚眠大教堂 (1220) -> 米兰大教堂 (1386)",
      "米兰大教堂 (1386) -> 科隆大教堂 (1248) -> 亚眠大教堂 (1220) -> 巴黎圣母院 (1163)"
    ],
    "optionsEn": [
      "Notre-Dame de Paris (1163) -> Amiens Cathedral (1220) -> Cologne Cathedral (1248) -> Milan Cathedral (1386)",
      "Amiens Cathedral (1220) -> Notre-Dame de Paris (1163) -> Milan Cathedral (1386) -> Cologne Cathedral (1248)",
      "Cologne Cathedral (1248) -> Notre-Dame de Paris (1163) -> Amiens Cathedral (1220) -> Milan Cathedral (1386)",
      "Milan Cathedral (1386) -> Cologne Cathedral (1248) -> Amiens Cathedral (1220) -> Notre-Dame de Paris (1163)"
    ],
    "correctAnswer": 0,
    "explanationZh": "大教堂动工建造顺序为：巴黎圣母院（1163年由苏利主教奠基启动，早期至盛期哥特式大教堂） -> 亚眠大教堂（1220年动工，法兰西盛期哥特式垂直比例与交叉肋拱顶峰） -> 科隆大教堂（1248年动工，德意志高耸哥特式双尖塔地标） -> 米兰大教堂（1386年由吉安·加莱亚佐·维斯孔蒂公爵启动，意大利最大的火焰与辐射式白色大理石哥特教堂）。",
    "explanationEn": "The sequence of groundbreaking is: Notre-Dame de Paris (begun 1163 under Bishop Maurice de Sully) -> Amiens Cathedral (begun 1220, the canonical masterpiece of French High Gothic) -> Cologne Cathedral (begun 1248, twin-towered German Gothic titan) -> Milan Cathedral (Duomo di Milano, begun 1386, Italy's vast white Candoglia marble Gothic marvel).",
    "tags": [
      "Chronology",
      "Gothic",
      "Cathedrals",
      "NotreDame",
      "Amiens",
      "Milan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_220",
    "domain": "chronology",
    "subCategory": "Neoclassical Civic Landmarks Timeline",
    "era": "1731 - 1807",
    "questionZh": "欧洲与意大利新古典主义建筑在18至19世纪初的发展脉络中，以下地标落成先后顺序是：",
    "questionEn": "In the evolution of Italian and European Neoclassicism from the 18th to early 19th centuries, what is the correct chronological order of completion?",
    "optionsZh": [
      "米兰斯卡拉大剧院 -> 都灵苏佩尔加大教堂 -> 卡塞塔王宫 -> 米兰和平门",
      "都灵苏佩尔加大教堂 (1731) -> 卡塞塔王宫 (1752动工) -> 米兰斯卡拉大剧院 (1778) -> 米兰和平门 (1807动工)",
      "卡塞塔王宫 -> 都灵苏佩尔加大教堂 -> 米兰和平门 -> 米兰斯卡拉大剧院",
      "米兰和平门 -> 米兰斯卡拉大剧院 -> 卡塞塔王宫 -> 都灵苏佩尔加大教堂"
    ],
    "optionsEn": [
      "Teatro alla Scala -> Basilica of Superga -> Palace of Caserta -> Arco della Pace",
      "Basilica of Superga (1731) -> Royal Palace of Caserta (begun 1752) -> Teatro alla Scala (1778) -> Arco della Pace (begun 1807)",
      "Palace of Caserta -> Basilica of Superga -> Arco della Pace -> Teatro alla Scala",
      "Arco della Pace -> Teatro alla Scala -> Palace of Caserta -> Basilica of Superga"
    ],
    "correctAnswer": 1,
    "explanationZh": "新古典主义地标建造顺序为：菲利波·尤瓦拉设计的都灵苏佩尔加大教堂（1731年落成，古典柱廊圆厅） -> 路易吉·万维泰利为波旁王朝设计的卡塞塔王宫（1752年动工，欧洲最大矩形古典宫殿） -> 朱塞佩·皮尔马里尼设计的米兰斯卡拉大剧院（1778年落成，严谨新古典立面与马蹄形声学剧场） -> 路易吉·卡尼奥拉为拿破仑胜利设计的米兰和平门（Arco della Pace，1807年动工，新古典三跨凯旋门）。",
    "explanationEn": "The chronological sequence is: Juvarra's Basilica of Superga near Turin (completed 1731) -> Luigi Vanvitelli's Royal Palace of Caserta (begun 1752, colossal Neoclassical rectangular royal residence) -> Giuseppe Piermarini's Teatro alla Scala in Milan (completed 1778) -> Luigi Cagnola's Arco della Pace in Milan (begun 1807 under Napoleonic patronage).",
    "tags": [
      "Chronology",
      "Neoclassical",
      "Juvarra",
      "Vanvitelli",
      "Piermarini",
      "Milan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_221",
    "domain": "chronology",
    "subCategory": "Alberto Giacometti Sculptural Progression",
    "era": "1932 - 1960",
    "questionZh": "下列哪组序列正确反映了阿尔贝托·贾科梅蒂（Alberto Giacometti）从超现实主义装置到战后存在主义青铜雕塑的发展脉络？",
    "questionEn": "Which sequence accurately traces Alberto Giacometti's progression from Surrealist constructions to post-war existential bronze sculptures?",
    "optionsZh": [
      "《行走的人I》 (1960) -> 《城市广场》 (1948) -> 《凌晨四点的宫殿》 (1932)",
      "《城市广场》 (1948) -> 《凌晨四点的宫殿》 (1932) -> 《行走的人I》 (1960)",
      "《凌晨四点的宫殿》 (1932) -> 《城市广场》 (1948) -> 《行走的人I》 (1960)",
      "《凌晨四点的宫殿》 (1932) -> 《行走的人I》 (1960) -> 《城市广场》 (1948)"
    ],
    "optionsEn": [
      "Walking Man I (1960) -> City Square (1948) -> The Palace at 4 a.m. (1932)",
      "City Square (1948) -> The Palace at 4 a.m. (1932) -> Walking Man I (1960)",
      "The Palace at 4 a.m. (1932) -> City Square (La Place) (1948) -> Walking Man I (L'Homme qui marche I) (1960)",
      "The Palace at 4 a.m. (1932) -> Walking Man I (1960) -> City Square (1948)"
    ],
    "correctAnswer": 2,
    "explanationZh": "贾科梅蒂创作演变顺序为：1932年创作超现实主义木质框架悬挂装置《凌晨四点的宫殿》（The Palace at 4 a.m.）；二战后1948年创作描绘数名瘦削人像在同一空旷平台各自交错行走的《城市广场》（City Square / La Place）；1960年创作等身大存在主义孤绝丰碑《行走的人I》（Walking Man I）。",
    "explanationEn": "Giacometti's artistic progression is: The Palace at 4 a.m. (1932, delicate Surrealist architectural cage) -> City Square (1948, post-war bronze plateau with isolated figures crossing paths without touching) -> Walking Man I (1960, monumental striding existentialist bronze).",
    "tags": [
      "Chronology",
      "Surrealism",
      "Giacometti",
      "Sculpture"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_222",
    "domain": "chronology",
    "subCategory": "Rene Magritte Semiotic Artworks",
    "era": "1929 - 1964",
    "questionZh": "请按完成年代的先后顺序排列勒内·马格里特（René Magritte）以下四幅符号哲学名作：",
    "questionEn": "Arrange the following four semiotic surrealist paintings by René Magritte in chronological order of their completion:",
    "optionsZh": [
      "《人子》 (1964) -> 《形象的叛逆》 (1929) -> 《错误的镜子》 (1929) -> 《戈尔孔达》 (1953)",
      "《错误的镜子》 (1929) -> 《戈尔孔达》 (1953) -> 《形象的叛逆》 (1929) -> 《人子》 (1964)",
      "《戈尔孔达》 (1953) -> 《人子》 (1964) -> 《错误的镜子》 (1929) -> 《形象的叛逆》 (1929)",
      "《形象的叛逆》(这不是一支烟斗) (1929) -> 《错误的镜子》 (1929) -> 《戈尔孔达》(戴礼帽的雨) (1953) -> 《人子》(青苹果挡脸) (1964)"
    ],
    "optionsEn": [
      "The Son of Man (1964) -> The Treachery of Images (1929) -> The False Mirror (1929) -> Golconda (1953)",
      "The False Mirror (1929) -> Golconda (1953) -> The Treachery of Images (1929) -> The Son of Man (1964)",
      "Golconda (1953) -> The Son of Man (1964) -> The False Mirror (1929) -> The Treachery of Images (1929)",
      "The Treachery of Images (1929) -> The False Mirror (1929) -> Golconda (1953) -> The Son of Man (1964)"
    ],
    "correctAnswer": 3,
    "explanationZh": "马格里特代表作创作时间线为：1929年创作《形象的叛逆》（The Treachery of Images，题写“这不是一支烟斗”，颠覆词语与图像的指涉关系）；1929年创作《错误的镜子》（The False Mirror，巨大眼睛虹膜内反射白云蓝天）；1953年创作《戈尔孔达》（Golconda，无数身穿风衣戴圆顶帽的绅士如雨滴悬浮于红砖楼房之间）；1964年创作自画像寓意名作《人子》（The Son of Man，漂浮的绿色青苹果遮挡硬礼帽绅士的面孔）。",
    "explanationEn": "The sequence of Magritte's paintings is: The Treachery of Images (1929, \"Ceci n'est pas une pipe\") -> The False Mirror (1929, sky reflected within a human eye) -> Golconda (1953, men in bowler hats suspended like raindrops) -> The Son of Man (1964, a green apple obscuring the bowler-hatted figure's face).",
    "tags": [
      "Chronology",
      "Surrealism",
      "Magritte"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_223",
    "domain": "chronology",
    "subCategory": "Joan Miro Painting Evolution",
    "era": "1922 - 1941",
    "questionZh": "请按创作完成年份排列西班牙超现实主义大师胡安·米罗（Joan Miró）以下经典杰作：",
    "questionEn": "Place the following seminal works by Joan Miró in chronological order of their creation:",
    "optionsZh": [
      "《农场》 (1922) -> 《耕地》 (1924) -> 《绚丽翅膀的微笑》 (1953) -> 《女人与鸟》 (1983)",
      "《耕地》 (1924) -> 《农场》 (1922) -> 《女人与鸟》 (1983) -> 《绚丽翅膀的微笑》 (1953)",
      "《绚丽翅膀的微笑》 (1953) -> 《耕地》 (1924) -> 《女人与鸟》 (1983) -> 《农场》 (1922)",
      "《农场》 (1922) -> 《女人与鸟》 (1983) -> 《耕地》 (1924) -> 《绚丽翅膀的微笑》 (1953)"
    ],
    "optionsEn": [
      "The Farm (1922) -> The Tilled Field (1924) -> The Smile of the Flamboyant Wings (1953) -> Woman and Bird (1983)",
      "The Tilled Field (1924) -> The Farm (1922) -> Woman and Bird (1983) -> The Smile of the Flamboyant Wings (1953)",
      "The Smile of the Flamboyant Wings (1953) -> The Tilled Field (1924) -> Woman and Bird (1983) -> The Farm (1922)",
      "The Farm (1922) -> Woman and Bird (1983) -> The Tilled Field (1924) -> The Smile of the Flamboyant Wings (1953)"
    ],
    "correctAnswer": 0,
    "explanationZh": "胡安·米罗艺术创作轨迹演变为：1921-1922年创作充满客观细部与乡土魔幻色彩的《农场》（The Farm）；1924年转向潜意识生物形态符号语言的《耕地》（The Tilled Field，树木长出耳目器官）；1953年创作色彩纯度与星辰韵律达到巅峰的《绚丽翅膀的微笑》（The Smile of the Flamboyant Wings）；1983年晚期于巴塞罗那完成高达22米的标志性彩色碎瓷巨型公共雕塑《女人与鸟》（Woman and Bird）。",
    "explanationEn": "The chronological trajectory of Joan Miró spans: The Farm (1921–1922, detailed rural magical realism) -> The Tilled Field (1924, breakthrough into biomorphic symbols with ear and eye forms) -> The Smile of the Flamboyant Wings (1953, post-war cosmic rhythm and primary colors) -> Woman and Bird (1983, monumental 22-meter public ceramic sculpture in Barcelona).",
    "tags": [
      "Chronology",
      "Surrealism",
      "Miro"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_224",
    "domain": "chronology",
    "subCategory": "Michelangelo Architectural Commissions",
    "era": "1524 - 1564",
    "questionZh": "米开朗基罗·博那罗蒂（Michelangelo Buonarroti）以下四处建筑设计与规划工程的受托启动顺序是：",
    "questionEn": "In what chronological order did Michelangelo undertake the following four architectural and urban commissions?",
    "optionsZh": [
      "卡比托利欧广场规划 -> 佛罗伦萨劳伦齐阿纳图书馆 -> 罗马皮亚门 -> 主持圣彼得大教堂穹顶重建",
      "佛罗伦萨劳伦齐阿纳图书馆 (1524) -> 罗马卡比托利欧广场规划 (1536) -> 主持圣彼得大教堂重构与穹顶设计 (1546) -> 罗马皮亚门 (1561)",
      "主持圣彼得大教堂重构与穹顶设计 (1546) -> 佛罗伦萨劳伦齐阿纳图书馆 (1524) -> 罗马皮亚门 (1561) -> 罗马卡比托利欧广场规划 (1536)",
      "佛罗伦萨劳伦齐阿纳图书馆 (1524) -> 罗马皮亚门 (1561) -> 罗马卡比托利欧广场规划 (1536) -> 主持圣彼得大教堂重构与穹顶设计 (1546)"
    ],
    "optionsEn": [
      "Piazza del Campidoglio -> Laurentian Library -> Porta Pia -> St. Peter's Dome",
      "Laurentian Library, Florence (1524) -> Piazza del Campidoglio, Rome (1536) -> St. Peter's Basilica Dome (1546) -> Porta Pia, Rome (1561)",
      "St. Peter's Basilica Dome (1546) -> Laurentian Library (1524) -> Porta Pia (1561) -> Piazza del Campidoglio (1536)",
      "Laurentian Library (1524) -> Porta Pia (1561) -> Piazza del Campidoglio (1536) -> St. Peter's Basilica Dome (1546)"
    ],
    "correctAnswer": 1,
    "explanationZh": "米开朗基罗建筑生涯时间线为：1524年受美第奇家族教宗克莱孟七世委托设计佛罗伦萨劳伦齐阿纳图书馆前厅与流体大台阶（手法主义空间典范）；1536年受保禄三世委托规划罗马卡比托利欧广场（梯形平面与十二角星地面）；1546年以71岁高龄接任圣彼得大教堂总建筑师，强化中央希腊十字平面并设计42米跨度双层大穹顶；1561年设计罗马奥勒良城墙上的皮亚门（Porta Pia，晚期手法主义城门突破）。",
    "explanationEn": "The sequence of Michelangelo's architectural masterworks is: Laurentian Library in Florence (commissioned 1524, Mannerist flowing staircase) -> Piazza del Campidoglio in Rome (commissioned 1536, trapezoidal civic plaza) -> Chief architect of St. Peter's Basilica (appointed 1546, redesigned the central plan and massive hemispherical dome) -> Porta Pia in Rome (1561, late Mannerist city gate).",
    "tags": [
      "Chronology",
      "Renaissance",
      "Michelangelo",
      "Rome",
      "Florence"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_225",
    "domain": "chronology",
    "subCategory": "Andrea Palladio Masterworks Timeline",
    "era": "1549 - 1580",
    "questionZh": "请按营建年份先后排列安德烈·帕拉第奥（Andrea Palladio）在威尼托地区的传世建筑杰作：",
    "questionEn": "Place the following celebrated architectural achievements by Andrea Palladio in chronological order of their inception:",
    "optionsZh": [
      "圆厅别墅 (1567) -> 维琴察帕拉第奥巴西利卡 (1549) -> 威尼斯圣乔治马焦雷教堂 (1565)",
      "威尼斯圣乔治马焦雷教堂 (1565) -> 圆厅别墅 (1567) -> 维琴察帕拉第奥巴西利卡 (1549)",
      "维琴察帕拉第奥巴西利卡双层敞廊 (1549) -> 威尼斯圣乔治马焦雷教堂 (1565) -> 维琴察圆厅别墅(卡普拉别墅) (1567)",
      "维琴察帕拉第奥巴西利卡 (1549) -> 维琴察圆厅别墅 (1567) -> 威尼斯圣乔治马焦雷教堂 (1565)"
    ],
    "optionsEn": [
      "Villa La Rotonda (1567) -> Basilica Palladiana (1549) -> San Giorgio Maggiore (1565)",
      "San Giorgio Maggiore (1565) -> Villa La Rotonda (1567) -> Basilica Palladiana (1549)",
      "Basilica Palladiana loggias, Vicenza (1549) -> San Giorgio Maggiore, Venice (1565) -> Villa La Rotonda (Villa Capra) (1567)",
      "Basilica Palladiana (1549) -> Villa La Rotonda (1567) -> San Giorgio Maggiore (1565)"
    ],
    "correctAnswer": 2,
    "explanationZh": "帕拉第奥代表作启动时间线为：1549年战胜诸多对手中标维琴察市政厅（巴西利卡）立面改造，设计著名的双层塞尔利奥拱大理石敞廊；1565年为威尼斯本笃会修道院设计圣乔治马焦雷教堂（巧妙重叠两座古典神庙山花立面）；1566-1567年受保罗·阿尔梅里科委托在维琴察郊外小丘设计圆厅别墅（Villa La Rotonda，四面对称六柱爱奥尼门廊与中央穹顶）。",
    "explanationEn": "The timeline of Palladio's masterpieces is: Basilica Palladiana in Vicenza (1549, wrapping the medieval hall in two-tiered Serliana loggias) -> San Giorgio Maggiore in Venice (1565, superimposed temple-front facade) -> Villa La Rotonda (begun 1566–1567, idealized centralized square villa with four Ionic porticoes).",
    "tags": [
      "Chronology",
      "Renaissance",
      "Palladio",
      "Veneto"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_226",
    "domain": "chronology",
    "subCategory": "Borromini vs Bernini Baroque Progression",
    "era": "1633 - 1670",
    "questionZh": "罗马巴洛克盛期博罗米尼与贝尔尼尼交替闪耀，下列作品按照营建完成年份先后排序正确的是：",
    "questionEn": "During the zenith of Roman High Baroque architecture, what is the correct chronological sequence of completion for these works by Borromini and Bernini?",
    "optionsZh": [
      "圣伯多禄大广场列柱廊 -> 圣彼得大教堂青铜华盖 -> 奎里纳尔圣安德肋堂 -> 圣依佛堂",
      "圣依佛堂 -> 圣伯多禄大广场列柱廊 -> 圣彼得大教堂青铜华盖 -> 奎里纳尔圣安德肋堂",
      "圣彼得大教堂青铜华盖 -> 奎里纳尔圣安德肋堂 -> 圣依佛堂 -> 圣伯多禄大广场列柱廊",
      "贝尔尼尼《圣彼得青铜华盖》 (1633) -> 博罗米尼《圣依佛堂》 (1660) -> 贝尔尼尼《圣伯多禄大广场列柱》 (1667) -> 贝尔尼尼《奎里纳尔圣安德肋堂》 (1670)"
    ],
    "optionsEn": [
      "St. Peter's Square -> St. Peter's Baldachin -> Sant'Andrea al Quirinale -> Sant'Ivo alla Sapienza",
      "Sant'Ivo alla Sapienza -> St. Peter's Square -> St. Peter's Baldachin -> Sant'Andrea al Quirinale",
      "St. Peter's Baldachin -> Sant'Andrea al Quirinale -> Sant'Ivo alla Sapienza -> St. Peter's Square",
      "Bernini's St. Peter's Baldachin (1633) -> Borromini's Sant'Ivo alla Sapienza (1660) -> Bernini's St. Peter's Square (1667) -> Bernini's Sant'Andrea al Quirinale (1670)"
    ],
    "correctAnswer": 3,
    "explanationZh": "罗马巴洛克双雄建筑完成时间线为：1. 贝尔尼尼完成圣彼得大教堂29米高扭转铜柱青铜华盖（1633年）；2. 博罗米尼完成罗马智慧大学圣依佛堂（Sant'Ivo alla Sapienza，1660年，六角星形与螺旋旋转尖顶）；3. 贝尔尼尼完成梵蒂冈圣伯多禄大广场四排多立克巨柱椭圆柱廊（1667年）；4. 贝尔尼尼完成奎里纳尔圣安德肋堂（Sant'Andrea al Quirinale，1670年，横向椭圆平面与戏剧性光线）。",
    "explanationEn": "The sequence of High Baroque completions is: Bernini's Baldacchino in St. Peter's (1633) -> Borromini's Sant'Ivo alla Sapienza (1660, geometric star-hexagon and spiraling lantern) -> Bernini's St. Peter's Square Colonnade (1667) -> Bernini's Sant'Andrea al Quirinale (completed 1670, transverse oval plan).",
    "tags": [
      "Chronology",
      "Baroque",
      "Bernini",
      "Borromini",
      "Rome"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_227",
    "domain": "chronology",
    "subCategory": "Guarino Guarini Masterworks Timeline",
    "era": "1668 - 1680",
    "questionZh": "瓜里诺·瓜里尼（Guarino Guarini）在都灵留下的数学几何巴洛克建筑杰作的先后营建顺序是：",
    "questionEn": "What is the chronological sequence of Guarino Guarini's geometric Baroque architecture in Turin?",
    "optionsZh": [
      "都灵裹尸布礼拜堂穹顶营建 (1668) -> 都灵卡里尼亚诺宫动工 (1679)",
      "都灵卡里尼亚诺宫动工 (1679) -> 都灵裹尸布礼拜堂穹顶营建 (1668)",
      "都灵卡里尼亚诺宫 (1668) -> 都灵裹尸布礼拜堂 (1680)",
      "两座建筑完全在同年同时设计并开工"
    ],
    "optionsEn": [
      "Chapel of the Holy Shroud dome (1668) -> Palazzo Carignano (1679)",
      "Palazzo Carignano (1679) -> Chapel of the Holy Shroud dome (1668)",
      "Palazzo Carignano (1668) -> Chapel of the Holy Shroud (1680)",
      "Both buildings were designed and commenced simultaneously in the exact same year"
    ],
    "correctAnswer": 0,
    "explanationZh": "瓜里诺·瓜里尼（Guarino Guarini）在都灵的创作顺序为：1668年接手都灵大教堂后部的圣裹尸布礼拜堂（Cappella della Sacra Sindone），创造出由连续交错砖砌拱条套叠而成的透光锥形奇幻穹顶；1679年为萨伏伊王室支系卡里尼亚诺亲王设计卡里尼亚诺宫（Palazzo Carignano），开创了全红砖波浪凹凸起伏的民用宫殿立面。",
    "explanationEn": "Guarino Guarini's Turin chronology is: He took over the Chapel of the Holy Shroud (Cappella della Sacra Sindone) in 1668, engineering its famous telescopic lattice-rib dome; subsequently in 1679 he designed Palazzo Carignano, renowned for its undulating exposed brick facade.",
    "tags": [
      "Chronology",
      "Baroque",
      "Guarini",
      "Turin"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_228",
    "domain": "chronology",
    "subCategory": "20th Century Engineering & Movements",
    "era": "1880s - 1990s",
    "questionZh": "下列哪个序列准确排列了现代建筑五大关键流派的兴起时间先后？",
    "questionEn": "Which sequence accurately orders the historical emergence of these five modern architectural movements?",
    "optionsZh": [
      "高技派建筑 -> 芝加哥学派 -> 包豪斯现代主义 -> 加泰罗尼亚现代主义 -> 解构主义建筑",
      "芝加哥学派 (1880s) -> 加泰罗尼亚现代主义 (1890s) -> 包豪斯现代主义 (1920s) -> 高技派建筑 (1970s) -> 解构主义建筑 (1988)",
      "包豪斯现代主义 -> 芝加哥学派 -> 高技派建筑 -> 加泰罗尼亚现代主义 -> 解构主义建筑",
      "解构主义建筑 -> 高技派建筑 -> 包豪斯现代主义 -> 加泰罗尼亚现代主义 -> 芝加哥学派"
    ],
    "optionsEn": [
      "High-Tech -> Chicago School -> Bauhaus -> Catalan Modernisme -> Deconstructivism",
      "Chicago School (1880s) -> Catalan Modernisme (1890s) -> Bauhaus Modernism (1920s) -> High-Tech (1970s) -> Deconstructivism (1988)",
      "Bauhaus -> Chicago School -> High-Tech -> Catalan Modernisme -> Deconstructivism",
      "Deconstructivism -> High-Tech -> Bauhaus -> Catalan Modernisme -> Chicago School"
    ],
    "correctAnswer": 1,
    "explanationZh": "现代建筑运动的发展脉络为：1. 芝加哥学派（1880年代，珍妮与沙利文开创铁钢框架高层摩天大楼）；2. 加泰罗尼亚现代主义（1890-1900年代，高迪开创自然仿生与悬链拱）；3. 包豪斯与国际主义现代主义（1920年代，格罗皮乌斯与密斯提倡功能主义与玻璃钢框架）；4. 高技派建筑（1970年代，皮亚诺与罗杰斯暴露工业机械结构）；5. 解构主义建筑（1988年纽约MoMA解构建筑大展确立，盖里、哈迪德打破正交对称）。",
    "explanationEn": "The historical sequence of modern movements is: Chicago School (1880s, structural metal skeleton) -> Catalan Modernisme (1890s–1900s, Gaudí's organic catenary vaulting) -> Bauhaus & International Modernism (1920s, functionalist glass and steel) -> High-Tech Architecture (1970s, exposed engineering services) -> Deconstructivism (formalized in 1988 at MoMA).",
    "tags": [
      "Chronology",
      "ChicagoSchool",
      "Modernism",
      "HighTech",
      "Deconstructivism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_229",
    "domain": "chronology",
    "subCategory": "Italian Civic Palaces Evolution",
    "era": "1299 - 1541",
    "questionZh": "请按营建启动年份的先后顺序排列以下四座意大利民用宫殿建筑里程碑：",
    "questionEn": "Arrange the following four monumental Italian civil palaces in chronological order of their inception:",
    "optionsZh": [
      "美第奇-里卡迪宫 (1444) -> 佛罗伦萨旧宫 (1299) -> 罗马法尔内塞宫 (1517) -> 费拉拉钻石宫 (1493)",
      "罗马法尔内塞宫 (1517) -> 佛罗伦萨旧宫 (1299) -> 美第奇-里卡迪宫 (1444) -> 费拉拉钻石宫 (1493)",
      "佛罗伦萨旧宫(领主宫) (1299) -> 美第奇-里卡迪宫 (1444) -> 费拉拉钻石宫 (1493) -> 罗马法尔内塞宫 (1517)",
      "费拉拉钻石宫 (1493) -> 佛罗伦萨旧宫 (1299) -> 美第奇-里卡迪宫 (1444) -> 罗马法尔内塞宫 (1517)"
    ],
    "optionsEn": [
      "Palazzo Medici Riccardi (1444) -> Palazzo Vecchio (1299) -> Palazzo Farnese (1517) -> Palazzo dei Diamanti (1493)",
      "Palazzo Farnese (1517) -> Palazzo Vecchio (1299) -> Palazzo Medici Riccardi (1444) -> Palazzo dei Diamanti (1493)",
      "Palazzo Vecchio (1299) -> Palazzo Medici Riccardi (1444) -> Palazzo dei Diamanti, Ferrara (1493) -> Palazzo Farnese, Rome (1517)",
      "Palazzo dei Diamanti (1493) -> Palazzo Vecchio (1299) -> Palazzo Medici Riccardi (1444) -> Palazzo Farnese (1517)"
    ],
    "correctAnswer": 2,
    "explanationZh": "意大利民用宫殿发展脉络为：阿诺尔福·迪·坎比奥主持的佛罗伦萨领主宫/旧宫（1299年动工，中世纪坚固粗石堡垒式市政厅） -> 米开罗佐设计的美第奇-里卡迪宫（1444年动工，早期文艺复兴糙石与三段式立面典范） -> 比亚焦·罗塞蒂设计的费拉拉钻石宫（Palazzo dei Diamanti，1493年动工，八千五百块琢形大理石块外墙） -> 小安东尼奥·达·桑加罗与米开朗基罗营建的罗马法尔内塞宫（1517-1541年，盛期文艺复兴宏伟贵族宫邸）。",
    "explanationEn": "The progression of Italian civil palace architecture is: Arnolfo di Cambio's Palazzo Vecchio (1299, fortified medieval communal seat) -> Michelozzo's Palazzo Medici Riccardi (1444, Early Renaissance tripartite rusticated palace) -> Biagio Rossetti's Palazzo dei Diamanti in Ferrara (1493, diamond-pointed ashlar facade) -> Sangallo & Michelangelo's Palazzo Farnese in Rome (begun 1517, High Renaissance monumental palace).",
    "tags": [
      "Chronology",
      "Palaces",
      "Renaissance",
      "Florence",
      "Rome",
      "Ferrara"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_230",
    "domain": "chronology",
    "subCategory": "Italian Romanesque Landmarks Timeline",
    "era": "1063 - 1196",
    "questionZh": "请按工程奠基启动的先后顺序排列以下意大利罗马式建筑代表名作：",
    "questionEn": "Arrange the following Italian Romanesque architectural monuments in chronological order of their groundbreaking:",
    "optionsZh": [
      "帕尔马洗礼堂 -> 比萨斜塔与奇迹广场 -> 米兰圣安布罗焦圣殿重建",
      "米兰圣安布罗焦圣殿重建 -> 帕尔马洗礼堂 -> 比萨斜塔与奇迹广场",
      "比萨斜塔与奇迹广场 -> 帕尔马洗礼堂 -> 米兰圣安布罗焦圣殿重建",
      "比萨大教堂奇迹广场 (1063) -> 米兰圣安布罗焦圣殿肋拱中殿 (c. 1099) -> 比萨斜塔钟楼 (1173) -> 帕尔马洗礼堂 (1196)"
    ],
    "optionsEn": [
      "Parma Baptistery -> Leaning Tower of Pisa -> Sant'Ambrogio",
      "Sant'Ambrogio -> Parma Baptistery -> Leaning Tower of Pisa",
      "Leaning Tower of Pisa -> Parma Baptistery -> Sant'Ambrogio",
      "Piazza dei Miracoli / Pisa Cathedral (1063) -> Basilica of Sant'Ambrogio nave vaults (c. 1099) -> Leaning Tower of Pisa campanile (1173) -> Baptistery of Parma (1196)"
    ],
    "correctAnswer": 3,
    "explanationZh": "意大利罗曼式杰作动工顺序为：1. 比萨奇迹广场比萨主教座堂（1063年奠基动工，布斯凯托主持比萨罗曼学派）；2. 米兰圣安布罗焦圣殿肋架拱顶中殿大重建（1099年前后竣工，伦巴第罗曼行会拱顶标杆）；3. 比萨奇迹广场独立钟楼即比萨斜塔（1173年动工，博南诺·皮萨诺设计大理石叠落敞廊）；4. 贝内代托·安泰拉米主持营建的帕尔马独立洗礼堂（1196年动工，八角形粉红大理石罗曼过渡到哥特名作）。",
    "explanationEn": "The sequence of Italian Romanesque construction is: Pisa Cathedral in the Piazza dei Miracoli (begun 1063 by Buscheto) -> Rebuilding of the nave vaults at Basilica di Sant'Ambrogio in Milan (c. 1099) -> Campanile of Pisa / Leaning Tower (begun 1173) -> Benedetto Antelami's octagonal Baptistery of Parma (begun 1196).",
    "tags": [
      "Chronology",
      "Romanesque",
      "Pisa",
      "Milan",
      "Parma"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_231",
    "domain": "chronology",
    "subCategory": "Walter Gropius Modernist Milestones",
    "era": "1911 - 1928",
    "questionZh": "下列哪组事件正确排列了瓦尔特·格罗皮乌斯（Walter Gropius）在德国开创现代主义的核心历史节点？",
    "questionEn": "Which sequence accurately reflects the chronological progression of Walter Gropius's foundational achievements in Germany?",
    "optionsZh": [
      "德绍包豪斯校舍落成 -> 魏玛包豪斯学院创办 -> 阿尔费尔德法古斯鞋楦厂营建",
      "魏玛包豪斯学院创办 -> 阿尔费尔德法古斯鞋楦厂营建 -> 德绍包豪斯校舍落成",
      "阿尔费尔德法古斯鞋楦厂 (1911) -> 创立魏玛国立包豪斯学院并发表宣言 (1919) -> 德绍包豪斯校舍落成 (1925-1926)",
      "阿尔费尔德法古斯鞋楦厂 (1911) -> 德绍包豪斯校舍落成 (1925-1926) -> 创立魏玛国立包豪斯学院并发表宣言 (1919)"
    ],
    "optionsEn": [
      "Bauhaus Dessau building -> Bauhaus founded in Weimar -> Fagus Factory",
      "Bauhaus founded in Weimar -> Fagus Factory -> Bauhaus Dessau building",
      "Fagus Factory, Alfeld (1911) -> Founding of the Staatliches Bauhaus in Weimar (1919) -> Bauhaus Dessau Campus completed (1925–1926)",
      "Fagus Factory (1911) -> Bauhaus Dessau completed (1925–1926) -> Founding of Bauhaus in Weimar (1919)"
    ],
    "correctAnswer": 2,
    "explanationZh": "格罗皮乌斯核心历史节点为：1911年与阿道夫·梅耶合作设计阿尔费尔德法古斯鞋楦厂（首创全通透转角玻璃幕墙）；1919年4月整合魏玛工艺美术学校创办“国立包豪斯学院”并撰写著名《包豪斯宣言》；1925-1926年因魏玛政局排挤迁址德绍，亲自设计具有风车形动态功能分区的德绍包豪斯新校舍与工坊楼。",
    "explanationEn": "The sequence of Walter Gropius's breakthroughs is: Fagus Factory in Alfeld (1911, revolutionary structural glass corners) -> Founding of the Staatliches Bauhaus in Weimar and issuing the Bauhaus Manifesto (April 1919) -> Designing and completing the Dessau Bauhaus headquarters (1925–1926).",
    "tags": [
      "Chronology",
      "Bauhaus",
      "Gropius",
      "Modernism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_232",
    "domain": "chronology",
    "subCategory": "Renzo Piano International Landmarks",
    "era": "1977 - 1994",
    "questionZh": "请按落成启用年代先后排列意大利高技派大师伦佐·皮亚诺（Renzo Piano）以下国际地标：",
    "questionEn": "Place the following international masterworks by Italian High-Tech architect Renzo Piano in chronological order of completion:",
    "optionsZh": [
      "休斯敦梅尼尔收藏馆 -> 巴黎蓬皮杜艺术中心 -> 日本大阪关西国际机场航站楼",
      "日本大阪关西国际机场航站楼 -> 巴黎蓬皮杜艺术中心 -> 休斯敦梅尼尔收藏馆",
      "休斯敦梅尼尔收藏馆 -> 日本大阪关西国际机场航站楼 -> 巴黎蓬皮杜艺术中心",
      "巴黎蓬皮杜艺术中心 (1977) -> 休斯敦梅尼尔收藏馆 (1987) -> 日本大阪关西国际机场航站楼 (1994)"
    ],
    "optionsEn": [
      "Menil Collection -> Centre Pompidou -> Kansai International Airport Terminal",
      "Kansai International Airport Terminal -> Centre Pompidou -> Menil Collection",
      "Menil Collection -> Kansai International Airport Terminal -> Centre Pompidou",
      "Centre Pompidou, Paris (1977) -> Menil Collection, Houston (1987) -> Kansai International Airport Terminal, Osaka (1994)"
    ],
    "correctAnswer": 3,
    "explanationZh": "伦佐·皮亚诺三大里程碑时间线为：1971-1977年与理查德·罗杰斯合作完成巴黎蓬皮杜国家艺术文化中心（高技派外露管线与彩色功能编码丰碑）；1982-1987年在美国得克萨斯完成休斯敦梅尼尔收藏馆（运用精密铸铁遮阳遮叶与静谧自然采光系统）；1991-1994年完成日本大阪人工岛关西国际机场航站楼（长达1.7公里的流线型波浪不锈钢屋面与空气动力学通风大空间）。",
    "explanationEn": "The sequence of Renzo Piano's major projects is: Centre Pompidou in Paris (1977, co-designed with Richard Rogers, High-Tech paradigm) -> Menil Collection in Houston (1987, ferro-concrete light louvres) -> Kansai International Airport Terminal in Osaka (1994, 1.7-kilometer aerodynamic airfoil roof on an artificial island).",
    "tags": [
      "Chronology",
      "HighTech",
      "Piano",
      "Contemporary"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_233",
    "domain": "chronology",
    "subCategory": "Frank Gehry Deconstructivism Timeline",
    "era": "1989 - 2003",
    "questionZh": "下列哪组序列正确展现了解构主义大师弗兰克·盖里（Frank Gehry）标志性曲面建筑的落成年代顺序？",
    "questionEn": "Which sequence correctly reflects the chronological order of completion for Frank Gehry's signature Deconstructivist buildings?",
    "optionsZh": [
      "毕尔巴鄂古根海姆博物馆 (1997) -> 德国莱茵河畔魏尔维特拉设计博物馆 (1989) -> 洛杉矶华特·迪士尼音乐厅 (2003)",
      "洛杉矶华特·迪士尼音乐厅 (2003) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 维特拉设计博物馆 (1989)",
      "德国维特拉设计博物馆 (1989) -> 毕尔巴鄂古根海姆博物馆 (1997) -> 洛杉矶华特·迪士尼音乐厅 (2003)",
      "毕尔巴鄂古根海姆博物馆 (1997) -> 洛杉矶华特·迪士尼音乐厅 (2003) -> 维特拉设计博物馆 (1989)"
    ],
    "optionsEn": [
      "Guggenheim Bilbao (1997) -> Vitra Design Museum (1989) -> Walt Disney Concert Hall (2003)",
      "Walt Disney Concert Hall (2003) -> Guggenheim Bilbao (1997) -> Vitra Design Museum (1989)",
      "Vitra Design Museum, Weil am Rhein (1989) -> Guggenheim Museum Bilbao (1997) -> Walt Disney Concert Hall, Los Angeles (2003)",
      "Guggenheim Bilbao (1997) -> Walt Disney Concert Hall (2003) -> Vitra Design Museum (1989)"
    ],
    "correctAnswer": 2,
    "explanationZh": "弗兰克·盖里解构主义演进序列为：1989年在德国莱茵河畔魏尔完成维特拉设计博物馆（白色抹灰与斜交体块拼贴，盖里欧洲首座名作）；1997年在西班牙落成毕尔巴鄂古根海姆博物馆（钛金属鱼鳞曲面与CATIA软件参数化建模巅峰）；2003年在洛杉矶落成不锈钢风帆曲面华特·迪士尼音乐厅（极具雕塑张力的城市音乐殿堂）。",
    "explanationEn": "The sequence of Frank Gehry's landmarks is: Vitra Design Museum in Weil am Rhein (1989, colliding geometric volumes in white plaster) -> Guggenheim Museum Bilbao (1997, CATIA-modeled titanium organic petals reviving the Basque post-industrial city) -> Walt Disney Concert Hall in Los Angeles (2003, stainless steel billowing sails).",
    "tags": [
      "Chronology",
      "Deconstructivism",
      "Gehry"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_234",
    "domain": "chronology",
    "subCategory": "Contemporary Pritzker Architecture Evolution",
    "era": "1997 - 2012",
    "questionZh": "请按落成开放年份先后排列以下四座由国际建筑大师设计的跨世纪当代先锋建筑：",
    "questionEn": "Place the following four contemporary architectural masterworks in chronological order of completion:",
    "optionsZh": [
      "扎哈·哈迪德罗马MAXXI博物馆 -> 圣地亚哥·卡拉特拉瓦密尔沃基风之翼 -> 盖里毕尔巴鄂古根海姆 -> 伦佐·皮亚诺伦敦碎片大厦",
      "圣地亚哥·卡拉特拉瓦密尔沃基风之翼 -> 盖里毕尔巴鄂古根海姆 -> 伦佐·皮亚诺伦敦碎片大厦 -> 扎哈·哈迪德罗马MAXXI博物馆",
      "盖里毕尔巴鄂古根海姆 -> 扎哈·哈迪德罗马MAXXI博物馆 -> 伦佐·皮亚诺伦敦碎片大厦 -> 圣地亚哥·卡拉特拉瓦密尔沃基风之翼",
      "弗兰克·盖里毕尔巴鄂古根海姆 (1997) -> 圣地亚哥·卡拉特拉瓦密尔沃基艺术博物馆风之翼 (2001) -> 扎哈·哈迪德罗马MAXXI博物馆 (2009) -> 伦佐·皮亚诺伦敦碎片大厦 (2012)"
    ],
    "optionsEn": [
      "MAXXI Rome -> Calatrava Milwaukee Pavilion -> Guggenheim Bilbao -> The Shard London",
      "Calatrava Milwaukee Pavilion -> Guggenheim Bilbao -> The Shard London -> MAXXI Rome",
      "Guggenheim Bilbao -> MAXXI Rome -> The Shard London -> Calatrava Milwaukee Pavilion",
      "Frank Gehry's Guggenheim Bilbao (1997) -> Santiago Calatrava's Milwaukee Art Museum Pavilion (2001) -> Zaha Hadid's MAXXI Rome (2009) -> Renzo Piano's The Shard London (2012)"
    ],
    "correctAnswer": 3,
    "explanationZh": "当代大师杰作演变线为：1997年弗兰克·盖里落成毕尔巴鄂古根海姆博物馆（钛合金双曲面解构主义奇迹）；2001年圣地亚哥·卡拉特拉瓦落成密尔沃基艺术博物馆夸德拉奇展馆（活动遮阳翼如白色巨鸟扇动）；2009年扎哈·哈迪德落成罗马国立二十一世纪艺术博物馆MAXXI（流动交织的流体清水混凝土轨道）；2012年伦佐·皮亚诺落成伦敦碎片大厦（泰晤士河畔高耸的晶体金字塔）。",
    "explanationEn": "The chronological sequence of contemporary masterworks is: Frank Gehry's Guggenheim Bilbao (1997) -> Santiago Calatrava's Milwaukee Art Museum (2001, kinetic Burke Brise Soleil sunscreen) -> Zaha Hadid's MAXXI in Rome (2009, overlapping concrete ribbons) -> Renzo Piano's The Shard in London (2012, crystalline glass pyramid).",
    "tags": [
      "Chronology",
      "Contemporary",
      "Hadid",
      "Piano",
      "Gehry",
      "Calatrava"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_235",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1882 - Present",
    "questionZh": "下图中展示的以高耸的双曲抛物面塔楼、自然仿生树状柱撑起石砌肋伞顶、诞生立面与受难立面具有强烈叙事张力的未完工大教堂是：",
    "questionEn": "The monumental basilica below, famous for its biomorphic branching columns, hyperboloid vaults, and sculpted Nativity Facade, is:",
    "optionsZh": [
      "圣家族大教堂 (Sagrada Família / Basílica de la Sagrada Família)",
      "米拉之家 (Casa Milà)",
      "巴特罗之家 (Casa Batlló)",
      "维也纳分离派会馆 (Secession Building)"
    ],
    "optionsEn": [
      "Sagrada Família (Basílica de la Sagrada Família)",
      "Casa Milà",
      "Casa Batlló",
      "Secession Building"
    ],
    "correctAnswer": 0,
    "explanationZh": "此建筑为加泰罗尼亚建筑大师安东尼·高迪（Antoni Gaudí）的毕生绝唱——巴塞罗那圣家族大教堂（Sagrada Família，1882年奠基动工）。高迪从1883年接手直至1926年逝世，以自然几何学（双曲面、抛物面、螺旋形）与悬链线力学模拟设计了这座具有十八座高塔、内部犹如参天森林石柱群的传世杰作，诞生立面已被联合国教科文组织列入世界遗产名录。",
    "explanationEn": "This masterpiece is the Sagrada Família in Barcelona, begun in 1882 and directed by Antoni Gaudí from 1883 until his death in 1926. Designing the cathedral as an organic stone forest with inclined branching columns and geometric ruled surfaces, it represents the apex of Catalan Modernisme.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg",
    "fallbackImage": "/images/artworks/sagrada-familia.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Gaudi",
      "SagradaFamilia",
      "Barcelona"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_236",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1906 - 1912",
    "questionZh": "下图中展示的由安东尼·高迪在巴塞罗那格拉西亚大道设计的具有起伏如海浪的纯石材外墙、扭曲锻铁阳台与梦幻雕塑屋顶烟囱的公寓名作是：",
    "questionEn": "The apartment building in Barcelona below, renowned for its wave-like stone facade, organic forged-iron balconies, and sculptural rooftop chimneys, is:",
    "optionsZh": [
      "巴特罗之家 (Casa Batlló)",
      "米拉之家 (Casa Milà / La Pedrera)",
      "塔塞尔饭店 (Hôtel Tassel)",
      "居埃尔公园 (Park Güell)"
    ],
    "optionsEn": [
      "Casa Batlló",
      "Casa Milà (La Pedrera)",
      "Hôtel Tassel",
      "Park Güell"
    ],
    "correctAnswer": 1,
    "explanationZh": "此建筑为安东尼·高迪设计的米拉之家（Casa Milà，1906-1912年，又称采石场La Pedrera）。建筑通体采用无承重外墙的自承重起伏石砌曲面，由铸铁与钢构架配合柱网支撑室内自由平面；屋顶平台排布着犹如中世纪戴头盔武士般的通风口与烟囱雕塑，是加泰罗尼亚现代主义世俗集合住宅的最高峰。",
    "explanationEn": "This landmark is Casa Milà (1906–1912), nicknamed \"La Pedrera\" (The Stone Quarry), in Barcelona by Antoni Gaudí. Constructed entirely without traditional load-bearing exterior walls, its undulating stone facade and sculptural roof terrace soldiers represent an organic architectural triumph.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Casa_Mila_Barcelona.jpg/800px-Casa_Mila_Barcelona.jpg",
    "fallbackImage": "/images/artworks/casa-mila.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Gaudi",
      "CasaMila",
      "Barcelona"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_237",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1904 - 1906",
    "questionZh": "下图中展示的由高迪改建、以五彩斑斓的碎瓷拼贴立面、骨骼状石质廊柱及拱起如巨龙脊背的鱼鳞琉璃瓦屋顶闻名的私宅是：",
    "questionEn": "The fantastical residential remodel below, celebrated for its iridescent trencadís ceramic mosaic facade, bone-like stone columns, and arched dragon-back tiled roof, is:",
    "optionsZh": [
      "米拉之家 (Casa Milà)",
      "圣家族大教堂 (Sagrada Família)",
      "巴特罗之家 (Casa Batlló / 骨之屋)",
      "塔塞尔饭店 (Hôtel Tassel)"
    ],
    "optionsEn": [
      "Casa Milà",
      "Sagrada Família",
      "Casa Batlló (House of Bones)",
      "Hôtel Tassel"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为安东尼·高迪于1904-1906年改建的巴特罗之家（Casa Batlló，又名“骨之屋”Casa dels ossos）。高迪将圣乔治屠龙的加泰罗尼亚民间传说具象化为建筑造型：屋顶隆起的彩色瓦楞象征巨龙的带鳞脊背，左上方的蒜头十字架象征刺入龙身的圣剑，二楼凸出的石灰石立柱犹如生物骨骼，外墙覆盖着莫奈《睡莲》般流光溢彩的碎瓷与玻璃（Trencadís）。",
    "explanationEn": "This residence is Casa Batlló (1904–1906) by Antoni Gaudí on Passeig de Gràcia. Mythologizing Saint George slaying the dragon, the roof represents the dragon's spine pierced by a cross-pommy turret, with skeletal bone balconies and iridescent trencadís glass mosaic skin.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Casa_Batllo_Overview_Barcelona.jpg/800px-Casa_Batllo_Overview_Barcelona.jpg",
    "fallbackImage": "/images/artworks/casa-batllo.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Gaudi",
      "CasaBatllo",
      "Barcelona"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_238",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1893",
    "questionZh": "下图中展示的位于布鲁塞尔、由建筑师维克多·奥塔（Victor Horta）设计、以蜿蜒流动的植物鞭绳曲线（Coup de Fouet）与暴露装饰性铸铁结构立柱著称的新艺术运动发轫之作是：",
    "questionEn": "The Brussels townhouse interior below, designed by Victor Horta with whiplash organic curves, mosaic floral floors, and exposed decorative cast-iron supports, is widely considered the inaugural masterpiece of Art Nouveau. What is it?",
    "optionsZh": [
      "巴黎地铁入口 (Paris Metro Entrances)",
      "维也纳分离派会馆 (Secession Building)",
      "巴特罗之家 (Casa Batlló)",
      "塔塞尔饭店 (Hôtel Tassel, Brussels)"
    ],
    "optionsEn": [
      "Paris Metro Entrances",
      "Secession Building",
      "Casa Batlló",
      "Hôtel Tassel, Brussels"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为比利时建筑大师维克多·奥塔（Victor Horta）于1893年在布鲁塞尔设计的塔塞尔饭店（Hôtel Tassel）。作为西方建筑史公认的新艺术运动（Art Nouveau）开山之作，奥塔首次将工业铸铁与锻铁大胆暴露在室内核心空间中，使其蜿蜒扭转如植物藤蔓与鞭绳（Coup de Fouet），与地面的马赛克拼花、墙面壁画以及彩色玻璃顶棚融为浑然一体的流动有机总体艺术。",
    "explanationEn": "This interior is Hôtel Tassel (Brussels, 1893) by Victor Horta, the definitive birthplace of Art Nouveau architecture. Horta unified exposed decorative cast-iron slender columns, whiplash curved wall stencils, mosaic floors, and skylight illumination into an organic whole.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hotel_Tassel_Stairway_Horta.jpg/800px-Hotel_Tassel_Stairway_Horta.jpg",
    "fallbackImage": "/images/artworks/hotel-tassel.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "ArtNouveau",
      "Horta",
      "Brussels"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_239",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1900",
    "questionZh": "下图中展示的由埃克托尔·吉马尔（Hector Guimard）为1900年巴黎世界博览会设计的具有流线型铸铁植物藤蔓、兰花形灯柱与绿锈玻璃雨棚的城市公共设施是：",
    "questionEn": "The iconic green cast-iron urban entrances below, designed by Hector Guimard with vegetal sinuous curves and amber-glass floral lanterns for the 1900 Paris Exposition, are:",
    "optionsZh": [
      "巴黎地铁入口设施 (Paris Métro Entrances)",
      "塔塞尔饭店铁艺门廊 (Hôtel Tassel Portico)",
      "科隆玻璃展馆入口 (Glass Pavilion Entry)",
      "维也纳分离派会馆门廊 (Secession Portal)"
    ],
    "optionsEn": [
      "Paris Métro Entrances (Entrées du Métro de Paris)",
      "Hôtel Tassel Portico",
      "Glass Pavilion Entry",
      "Secession Portal"
    ],
    "correctAnswer": 0,
    "explanationZh": "此设施为法国新艺术运动建筑师埃克托尔·吉马尔（Hector Guimard）于1900年为巴黎地铁系统设计的铸铁入口（Paris Métro Entrances）。吉马尔采用模块化工厂预制铸铁构件，赋予其自然植物茎干破土而出的遒劲生命形态，搭配仿如昆虫翅膀的半透明玻璃雨棚和花苞状琥珀色路灯，成为巴黎新艺术运动（Style Guimard）永恒的城市文化符号。",
    "explanationEn": "These iconic structures are the Paris Métro Entrances (1900) by Hector Guimard. Utilizing modular cast iron enameled in pale vert-de-gris green, Guimard sculpted vegetal stalks, amber dragonfly-eye lamps, and sinuous glass canopies into high Art Nouveau emblems of urban mobility.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Metro_de_Paris_-_Station_Abbesses_1.jpg/800px-Metro_de_Paris_-_Station_Abbesses_1.jpg",
    "fallbackImage": "/images/artworks/paris-metro-entrances.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "ArtNouveau",
      "Guimard",
      "Paris"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_240",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1925 - 1926",
    "questionZh": "下图中展示的由瓦尔特·格罗皮乌斯设计、以三层全透明外挂无柱玻璃幕墙包裹钢筋混凝土框架工坊楼的现代建筑里程碑是：",
    "questionEn": "The seminal modernist campus below, designed by Walter Gropius featuring a continuous three-story glass curtain wall suspended outside the structural concrete frame of its workshop wing, is:",
    "optionsZh": [
      "阿尔费尔德法古斯鞋楦厂 (Fagus Factory)",
      "德绍包豪斯校舍 (Bauhaus Dessau Building)",
      "科莫诺沃科姆姆公寓 (Novocomum Como)",
      "维也纳分离派会馆 (Secession Building)"
    ],
    "optionsEn": [
      "Fagus Factory, Alfeld",
      "Bauhaus Dessau Building",
      "Novocomum Como",
      "Secession Building, Vienna"
    ],
    "correctAnswer": 1,
    "explanationZh": "此建筑为瓦尔特·格罗皮乌斯（Walter Gropius）于1925-1926年设计的德绍包豪斯校舍（Bauhaus Dessau）。建筑以风车形非对称平面展开，各功能区（工坊楼、教学楼、学生宿舍）通过过街天桥有机衔接；最著名的工坊楼外立面彻底摒弃承重墙体，采用通体三层无柱外挂钢框玻璃幕墙（Curtain Wall），将内部结构与现代工业机器美学全景通透呈现，是国际主义现代建筑的原型圣地。",
    "explanationEn": "This landmark is the Bauhaus Dessau Building (1925–1926) designed by Walter Gropius. Composed of asymmetrical pinwheel functionalist wings connected by a bridge, its workshop block introduced the monumental glass curtain wall wrapping around corners, embodying functionalist transparency.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bauhaus_Dessau_Geb%C3%A4ude_2003.jpg/800px-Bauhaus_Dessau_Geb%C3%A4ude_2003.jpg",
    "fallbackImage": "/images/artworks/bauhaus-dessau.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Bauhaus",
      "Gropius",
      "Modernism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_241",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1929",
    "questionZh": "下图中展示的由路德维希·密斯·凡·德·罗为1929年国际博览会设计的德国国家馆，以八根镀铬十字形钢柱支撑平屋顶与缟玛瑙石墙流动空间闻名，该建筑是：",
    "questionEn": "The iconic modernist exhibition structure below, designed by Ludwig Mies van der Rohe for the 1929 International Exposition featuring chrome-plated cruciform columns, golden onyx partition walls, and travertine reflecting pools, is:",
    "optionsZh": [
      "图根哈特别墅 (Villa Tugendhat)",
      "范斯沃斯住宅 (Farnsworth House)",
      "巴塞罗那德国馆 (Barcelona Pavilion)",
      "新国家美术馆 (Neue Nationalgalerie)"
    ],
    "optionsEn": [
      "Villa Tugendhat",
      "Farnsworth House",
      "Barcelona Pavilion (German Pavilion)",
      "Neue Nationalgalerie"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为密斯·凡·德·罗（Ludwig Mies van der Rohe）设计的1929年巴塞罗那世博会德国国家馆（Barcelona Pavilion）。密斯以极简主义“少即是多”（Less is more）与自由平面理念，仅由八根十字形镀铬钢柱承担轻巧的钢筋混凝土平屋顶自重，金黄色缟玛瑙石墙、深绿色蒂诺斯大理石与清澈的水池倒影自由穿插，创造了室内外空间无缝渗透的“流动空间”（Flowing Space）现代建筑奇迹。",
    "explanationEn": "This work is the Barcelona Pavilion (1929) by Ludwig Mies van der Rohe. Supported by eight slender cruciform chrome steel columns, its floating flat slab roof and freestanding planes of golden onyx and green alpine marble realized the modernist dream of \"flowing space\".",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Barcelona_Pavilion_Mies.jpg/800px-Barcelona_Pavilion_Mies.jpg",
    "fallbackImage": "/images/artworks/barcelona-pavilion.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "Mies",
      "BarcelonaPavilion"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_242",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1958",
    "questionZh": "下图中展示的矗立于纽约曼哈顿公园大道、由密斯·凡·德·罗主导设计、整座大楼后退红线留出开敞广场并由古铜色工字钢竖向竖框装饰的摩天大楼是：",
    "questionEn": "The 38-story Manhattan corporate headquarters below, designed by Ludwig Mies van der Rohe, set back from Park Avenue behind a granite plaza with vertical exterior bronze I-beam mullions, is:",
    "optionsZh": [
      "家庭保险大楼 (Home Insurance Building)",
      "卡森·皮里·斯科特百货 (Carson Pirie Scott)",
      "米兰维拉斯加塔楼 (Torre Velasca)",
      "纽约西格拉姆大厦 (Seagram Building)"
    ],
    "optionsEn": [
      "Home Insurance Building",
      "Carson Pirie Scott Building",
      "Torre Velasca, Milan",
      "Seagram Building, New York"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为密斯·凡·德·罗（Ludwig Mies van der Rohe）设计的纽约西格拉姆大厦（Seagram Building，1958年落成）。大楼高38层，密斯打破曼哈顿高层建筑填满红线基底的商业惯例，主动后退街道三十米辟建了带喷泉的花岗岩公共广场；立面覆以琥珀色有色玻璃与深古铜色外挂非结构工字钢（I-beam）竖框，使摩天楼在严谨的理性网格中散发出古典希腊神庙般的肃穆比例，成为国际主义风格高层建筑的终极典范。",
    "explanationEn": "This high-rise is the Seagram Building (1958) on Park Avenue, New York, designed by Ludwig Mies van der Rohe. Setting the tower back behind a generous public plaza and articulating the amber glass curtain wall with exterior bronze I-beam mullions, it became the benchmark of corporate International Style architecture.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Seagram_Building_Midtown_Manhattan.jpg/800px-Seagram_Building_Midtown_Manhattan.jpg",
    "fallbackImage": "/images/artworks/seagram-building.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "Mies",
      "Skyscrapers"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_243",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1951",
    "questionZh": "下图中展示的位于伊利诺伊州普莱诺福克斯河畔、由白色H型型钢柱悬挑架空于草坪之上、由四面纯净透明玻璃包裹单一大空间起居室的住宅杰作是：",
    "questionEn": "The radical transparent weekend retreat below, raised on white structural steel H-columns above the Fox River floodplain with floor-to-ceiling glass wrapping a single universal room, is:",
    "optionsZh": [
      "范斯沃斯住宅 (Farnsworth House)",
      "萨伏伊别墅 (Villa Savoye)",
      "流水别墅 (Fallingwater)",
      "罗比住宅 (Robie House)"
    ],
    "optionsEn": [
      "Farnsworth House, Plano",
      "Villa Savoye, Poissy",
      "Fallingwater, Mill Run",
      "Robie House, Chicago"
    ],
    "correctAnswer": 0,
    "explanationZh": "此建筑为路德维希·密斯·凡·德·罗于1945-1951年为伊迪丝·范斯沃斯医生设计的范斯沃斯住宅（Farnsworth House）。住宅由八根外置的白色喷漆宽翼缘工字钢柱将两块水平楼板和屋顶板悬浮架空于地面之上，四周全由落地通透平板玻璃包围，室内除核心筒木质卫生间与机械设备外没有任何内墙隔断，将密斯“皮与骨”（Skin and Bones）与“通用空间”（Universal Space）极简哲学推至物理极限。",
    "explanationEn": "This residence is Farnsworth House (1945–1951) in Plano, Illinois, designed by Mies van der Rohe. Elevated above the Fox River on eight white structural steel columns, its glass enclosure creates a pure, unencumbered universal room surrounded by nature.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Farnsworth_House_by_Mies_van_der_Rohe.jpg/800px-Farnsworth_House_by_Mies_van_der_Rohe.jpg",
    "fallbackImage": "/images/artworks/farnsworth-house.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "Mies",
      "FarnsworthHouse"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_244",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1910",
    "questionZh": "下图中展示的位于芝加哥南区、以极具张力的连续深挑檐、连续排布的水平带窗与中央低矮壁炉核心著称的弗兰克·劳埃德·赖特“草原学派”住宅绝唱是：",
    "questionEn": "The horizontal Chicago residence below, celebrated for its sweeping cantilevered low-pitched hip roofs, continuous ribbons of leaded art glass, and central massive hearth, is Frank Lloyd Wright's Prairie School masterpiece. What is it?",
    "optionsZh": [
      "流水别墅 (Fallingwater)",
      "罗比住宅 (Frederick C. Robie House)",
      "施泰纳住宅 (Steiner House)",
      "穆勒别墅 (Villa Müller)"
    ],
    "optionsEn": [
      "Fallingwater",
      "Frederick C. Robie House",
      "Steiner House",
      "Villa Müller"
    ],
    "correctAnswer": 1,
    "explanationZh": "此建筑为弗兰克·劳埃德·赖特（Frank Lloyd Wright）于1909-1910年建成的弗雷德里克·C·罗比住宅（Robie House）。作为赖特“草原学派”（Prairie School）住宅的集大成者，建筑打破了传统立面盒子的封闭性，以极其舒展的低坡深远挑檐、水平罗马红砖长条砌缝与大面积水平连续带窗，将建筑牢牢贴附并融入中西部开阔平坦的平原大地，内部以壁炉为核心实现了开敞流动的自由空间。",
    "explanationEn": "This residence is the Robie House in Chicago (1909–1910) by Frank Lloyd Wright. The definitive icon of the Prairie School, it anchors architecture to the earth through dramatic steel-reinforced cantilevered eaves, horizontal Roman brickwork, and an open hearth plan.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Robie_House_Chicago.jpg/800px-Robie_House_Chicago.jpg",
    "fallbackImage": "/images/artworks/robie-house.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "Wright",
      "RobieHouse"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_245",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1935",
    "questionZh": "下图中展示的将米黄色现浇钢筋混凝土阳台悬挑于天然熊跑溪瀑布巨石水流之上、将自然岩石直接作为室内地面与壁炉一部分的有机建筑巅峰杰作是：",
    "questionEn": "The world-famous residence below, featuring cantilevered reinforced concrete trays daringly poised over a natural roaring waterfall in rural Pennsylvania, is:",
    "optionsZh": [
      "萨伏伊别墅 (Villa Savoye)",
      "罗比住宅 (Robie House)",
      "流水别墅 (Fallingwater / 考夫曼住宅)",
      "范斯沃斯住宅 (Farnsworth House)"
    ],
    "optionsEn": [
      "Villa Savoye, Poissy",
      "Robie House, Chicago",
      "Fallingwater (Kaufmann House)",
      "Farnsworth House, Plano"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为弗兰克·劳埃德·赖特（Frank Lloyd Wright）于1935年在宾夕法尼亚州米尔伦设计的流水别墅（Fallingwater / Kaufmann Residence）。赖特拒绝将房子建在瀑布对面远观，而是大胆地直接将房子置于熊跑溪瀑布正上方，通过三层相互正交的大跨度悬臂钢筋混凝土平台，使流水声轰鸣于建筑肌理之中，现场天然出露的原生花岗岩直接成为客厅壁炉地台，实现了人工建筑与原初大自然不可分割的有机融合（Organic Architecture）。",
    "explanationEn": "This icon is Fallingwater (1935) designed by Frank Lloyd Wright for the Kaufmann family over Bear Run, Pennsylvania. Anchoring daring reinforced concrete cantilevered balconies into bedrock boulders over a waterfall, it realized Wright's philosophy of Organic Architecture.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fallingwater_Wright.jpg/800px-Fallingwater_Wright.jpg",
    "fallbackImage": "/images/artworks/fallingwater.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "Wright",
      "Fallingwater"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_246",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1959",
    "questionZh": "下图中展示的位于纽约曼哈顿第五大道、由下至上呈倒圆锥形盘旋展开、参观者乘电梯至顶层沿连续平缓螺旋坡道缓步下行观展的白色螺旋博物馆是：",
    "questionEn": "The white cylindrical landmark on Manhattan's Fifth Avenue below, featuring a continuous rising spiral ramp surrounding a sunlit central atrium designed by Frank Lloyd Wright, is:",
    "optionsZh": [
      "毕尔巴鄂古根海姆博物馆 (Guggenheim Bilbao)",
      "巴黎蓬皮杜艺术中心 (Centre Pompidou)",
      "罗马国立二十一世纪艺术博物馆 (MAXXI Rome)",
      "纽约所罗门·R·古根海姆博物馆 (Solomon R. Guggenheim Museum)"
    ],
    "optionsEn": [
      "Guggenheim Museum Bilbao",
      "Centre Pompidou, Paris",
      "MAXXI National Museum, Rome",
      "Solomon R. Guggenheim Museum, New York"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为弗兰克·劳埃德·赖特（Frank Lloyd Wright）生前最后落成的公共建筑代表作——纽约所罗门·R·古根海姆博物馆（Solomon R. Guggenheim Museum，1959年开放）。建筑形似一座白色的巨大倒置通天巴别塔或贝壳海螺，中央为四十米高的巨大玻璃天窗采光中庭，长达四百余米的无台阶单向连续螺旋坡道自上而下缓缓展开，彻底颠覆了传统西方博物馆分间穿行的网格游览流线。",
    "explanationEn": "This iconic building is the Solomon R. Guggenheim Museum (1959) in New York, Frank Lloyd Wright's late masterpiece. Defined by an inverted ziggurat coil encircling a ninety-foot glass dome atrium, visitors take an elevator to the top and descend along a continuous four-hundred-meter helical ramp.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Solomon_R._Guggenheim_Museum_NYC.jpg/800px-Solomon_R._Guggenheim_Museum_NYC.jpg",
    "fallbackImage": "/images/artworks/guggenheim-ny.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "Wright",
      "Guggenheim"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_247",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1928 - 1931",
    "questionZh": "下图中展示的位于巴黎近郊普瓦西、由底层纤细架空立柱支撑、立面排布水平横向长窗并拥有弧形挡风板屋顶花园的纯白现代主义独栋住宅是：",
    "questionEn": "The pure white International Style villa in Poissy below, elevated on slender pilotis with horizontal ribbon windows and a sculpted solarium roof garden, is:",
    "optionsZh": [
      "萨伏伊别墅 (Villa Savoye)",
      "流水别墅 (Fallingwater)",
      "图根哈特别墅 (Villa Tugendhat)",
      "罗比住宅 (Robie House)"
    ],
    "optionsEn": [
      "Villa Savoye, Poissy",
      "Fallingwater",
      "Villa Tugendhat",
      "Robie House"
    ],
    "correctAnswer": 0,
    "explanationZh": "此建筑为勒·柯布西耶与皮埃尔·让纳雷于1928-1931年设计的普瓦西萨伏伊别墅（Villa Savoye）。作为现代建筑史最神圣的里程碑之一，萨伏伊别墅纯粹而完美地践行了柯布西耶1926年提出的“新建筑五点”：1. 钢筋混凝土柱底层架空（Pilotis）；2. 屋顶花园（Toit-jardin）；3. 自由平面（Plan libre）；4. 横向长条带窗（Fenêtre en longueur）；5. 自由立面（Façade libre），柯布称其为“光线与空间漫游的居住机器”（Machine à habiter）。",
    "explanationEn": "This monument is Villa Savoye (1928–1931) in Poissy, France, by Le Corbusier. It stands as the absolute manifesto of his \"Five Points of a New Architecture\": pilotis elevating the main volume, a roof terrace garden, free ground plan, horizontal ribbon windows, and free non-load-bearing facades.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/VillaSavoye_overview.jpg/800px-VillaSavoye_overview.jpg",
    "fallbackImage": "/images/artworks/villa-savoye.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "LeCorbusier",
      "VillaSavoye"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_248",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1947 - 1952",
    "questionZh": "下图中展示的位于法国马赛、由粗野主义现浇清水混凝土粗壮架空柱支撑、立面布设红黄蓝遮阳板并内置上下双层复式交叉跃层住宅的十八层巨型集合住宅是：",
    "questionEn": "The massive 18-story reinforced concrete housing block in Marseille below, lifted on sculptural pilotis and featuring primary-colored brise-soleil and interlocking duplex apartments, is:",
    "optionsZh": [
      "科莫诺沃科姆姆公寓 (Novocomum)",
      "马赛光芒之城联合公寓 (Unité d'Habitation, Marseille)",
      "米兰维拉斯加塔楼 (Torre Velasca)",
      "罗马新古典王宫 (Palazzo Reale)"
    ],
    "optionsEn": [
      "Novocomum, Como",
      "Unité d'Habitation (Cité Radieuse), Marseille",
      "Torre Velasca, Milan",
      "Royal Palace, Naples"
    ],
    "correctAnswer": 1,
    "explanationZh": "此建筑为勒·柯布西耶于1947-1952年在法国马赛落成的马赛公寓（Unité d'Habitation / Cité Radieuse）。大楼高18层，容纳337户跃层复式单元，以粗犷有力的现浇粗野主义清水混凝土（Béton Brut）柱廊架空底层，七层八层设有室内商业街与商店，屋顶设有幼儿园、戏水池与雕塑感通风道，是柯布西耶基于模度（Modulor）人体比例理论建构的战后“垂直花园城市”范本。",
    "explanationEn": "This complex is the Unité d'Habitation (Cité Radieuse, 1947–1952) in Marseille by Le Corbusier. Erected in rough-cast Béton Brut concrete lifted on massive pilotis, it integrated 337 interlocking duplex apartments, an internal shopping street, and a rooftop nursery school scaled to the Modulor.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Unite_d_habitation_Marseille.jpg/800px-Unite_d_habitation_Marseille.jpg",
    "fallbackImage": "/images/artworks/unite-dhabitation.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "LeCorbusier",
      "UniteDHabitation"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_249",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1950 - 1955",
    "questionZh": "下图中展示的位于法国孚日山区、具有如巨型修女兜帽般沉重黑色悬挑屋顶、南立面散布大小不一漏斗状斜向深窗洞的雕塑感朝圣小教堂是：",
    "questionEn": "The sculptural pilgrimage chapel in the Vosges mountains below, featuring a sweeping dark concrete roof resembling a crab shell and a thick south wall pierced by irregular funnel-like colored-glass apertures, is:",
    "optionsZh": [
      "萨伏伊别墅 (Villa Savoye)",
      "马赛公寓 (Unité d'Habitation)",
      "朗香圣母朝圣所 (Notre-Dame du Haut at Ronchamp)",
      "圣家族大教堂 (Sagrada Família)"
    ],
    "optionsEn": [
      "Villa Savoye",
      "Unité d'Habitation",
      "Notre-Dame du Haut at Ronchamp",
      "Sagrada Família"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为勒·柯布西耶于1950-1955年设计的朗香圣母教堂（Notre-Dame du Haut, Ronchamp）。柯布西耶在此彻底打破了自己早期的正交几何白派教条，以极具表现力的大地雕塑曲面构筑空间：厚重倾斜的南立面错落嵌有数十个像潜望镜般的斜面深窗洞，内部漫射出幽微神圣的彩色光线；巨大的曲面钢筋混凝土屋顶内部其实隐藏了数公分的细缝支承柱，创造出屋顶如浮云般悬浮的神秘宗教氛围。",
    "explanationEn": "This monument is Notre-Dame du Haut at Ronchamp (1950–1955) by Le Corbusier. A radical departure from rationalist right angles, its sweeping curvilinear concrete roof, curved walls of recycled masonry, and south wall of tapered deep-set stained glass embrasures pioneered post-war sculptural modernism.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Notre_Dame_du_Haut_Ronchamp.jpg/800px-Notre_Dame_du_Haut_Ronchamp.jpg",
    "fallbackImage": "/images/artworks/ronchamp.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "LeCorbusier",
      "Ronchamp"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_250",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1932 - 1936",
    "questionZh": "下图中展示的由朱塞佩·泰拉尼在科莫设计的以绝对严谨正方几何体量（宽33.2米、高16.6米比例模数）、大理石立面柱廊网格与玻璃通透中庭著称的意大利理性主义最高杰作是：",
    "questionEn": "The pristine Italian Rationalist monument in Como below, designed by Giuseppe Terragni with mathematical proportionality (33.2m width by 16.6m height), white Botticino marble grid framing, and a glazed atrium, is:",
    "optionsZh": [
      "科莫诺沃科姆姆公寓 (Novocomum)",
      "米兰维拉斯加塔楼 (Torre Velasca)",
      "米兰二十一世纪展馆 (Milan Triennale)",
      "科莫法西斯大楼 (Casa del Fascio, Como)"
    ],
    "optionsEn": [
      "Novocomum, Como",
      "Torre Velasca, Milan",
      "Milan Triennale Palace",
      "Casa del Fascio, Como"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为意大利理性主义（Razionalismo）建筑领袖朱塞佩·泰拉尼（Giuseppe Terragni）于1932-1936年在科莫设计的法西斯大楼（Casa del Fascio，现称卡萨·泰拉尼）。建筑严格遵循黄金分割比例，外形为长宽33.2米、高16.6米（恰为底边之一半）的正方棱柱体；四座立面根据朝向和内部采光变化设计各不相同的网格虚实开洞，中央为通高的采光玻璃中庭，是大理石几何理性与现代玻璃幕墙完美融汇的丰碑。",
    "explanationEn": "This icon is the Casa del Fascio (1932–1936) in Como by Giuseppe Terragni. Proportioned on a pure mathematical module (33.2m wide by 16.6m tall), its pristine white Botticino marble grid facades and glazed central sacro-civic hall represent the absolute peak of Italian Rationalism.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Casa_del_Fascio_Como.jpg/800px-Casa_del_Fascio_Como.jpg",
    "fallbackImage": "/images/artworks/casa-del-fascio.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Rationalism",
      "Terragni",
      "Como"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_251",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1958",
    "questionZh": "下图中展示的矗立于米兰历史中心、高106米、在第18层以上突然向外悬挑扩大、由BBPR事务所以外露斜向混凝土V形支撑呼应伦巴第中世纪城堡钟楼意象的地标摩天大楼是：",
    "questionEn": "The 106-meter brutalist tower in Milan below, designed by BBPR with a mushrooming cantilevered upper section supported by exposed diagonal concrete struts evoking medieval Lombard watchtowers, is:",
    "optionsZh": [
      "米兰倍耐力大厦 (Pirelli Tower)",
      "科莫法西斯大楼 (Casa del Fascio)",
      "米兰大教堂钟楼 (Gothic Campanile)",
      "米兰维拉斯加塔楼 (Torre Velasca, Milan)"
    ],
    "optionsEn": [
      "Pirelli Tower, Milan",
      "Casa del Fascio",
      "Milan Cathedral Campanile",
      "Torre Velasca, Milan"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为BBPR建筑事务所（贝尔焦约索、佩雷苏蒂、罗杰斯）于1958年在米兰建成的维拉斯加塔楼（Torre Velasca）。大楼共26层，下部18层为商业办公用房，上部住宅单元因空间需求向外大跨度悬挑，底部通过粗犷的外露斜向现浇混凝土支柱承托悬挑自重。BBPR打破了二战后机械复制的玻璃幕墙国际主义教条，将现代粗野主义结构力学与米兰大教堂、斯福尔扎城堡等伦巴第本土中世纪历史肌理深情对话。",
    "explanationEn": "This building is Torre Velasca in Milan (1958) by the BBPR partnership. Standing 106 meters tall with a top-heavy overhanging residential crown braced by exposed diagonal concrete trusses, it championed contextual modernism by referencing the silhouettes of medieval Lombard fortresses.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Torre_Velasca_Milano.jpg/800px-Torre_Velasca_Milano.jpg",
    "fallbackImage": "/images/artworks/velasca-tower.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Modernism",
      "BBPR",
      "Milan",
      "TorreVelasca"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_252",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1971 - 1977",
    "questionZh": "下图中展示的位于巴黎市中心、将扶梯、排风管、水管与承重钢桁架全部暴露在建筑外表皮并按蓝、绿、黄、红四色功能进行工业编码的高技派建筑巅峰杰作是：",
    "questionEn": "The pioneering High-Tech cultural center in Paris below, turning architecture \"inside out\" by placing escalators, structural steel trusses, and color-coded mechanical ducts on the building's exterior, is:",
    "optionsZh": [
      "毕尔巴鄂古根海姆博物馆 (Guggenheim Bilbao)",
      "巴黎埃菲尔铁塔 (Eiffel Tower)",
      "巴黎蓬皮杜国家艺术文化中心 (Centre Pompidou)",
      "纽约所罗门·R·古根海姆博物馆 (Guggenheim NY)"
    ],
    "optionsEn": [
      "Guggenheim Museum Bilbao",
      "Eiffel Tower",
      "Centre Pompidou, Paris",
      "Solomon R. Guggenheim Museum, New York"
    ],
    "correctAnswer": 2,
    "explanationZh": "此建筑为伦佐·皮亚诺（Renzo Piano）与理查德·罗杰斯（Richard Rogers）于1971-1977年在巴黎博堡设计的蓬皮杜国家艺术文化中心（Centre Georges-Pompidou）。建筑开创性地将所有设备管线、循环走廊、巨型钢桁架全部剥离置于外墙外部：空调水管涂蓝色、水管涂绿色、电气管线涂黄色、观光电梯与安全通道涂鲜红色，使内部释放出长166米、宽48米没有任何立柱遮挡的纯净“通用空间”，是高技派建筑（High-Tech Architecture）的无上丰碑。",
    "explanationEn": "This landmark is the Centre Pompidou (1977) in Paris, designed by Renzo Piano and Richard Rogers. By turning the building inside-out—exposing giant gerberette steel trusses and color-coded service conduits (blue for air, green for water, yellow for electric, red for escalators)—the architects freed vast pillarless interior galleries.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Centre_Pompidou_Paris_Exterior.jpg/800px-Centre_Pompidou_Paris_Exterior.jpg",
    "fallbackImage": "/images/artworks/centre-pompidou.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "HighTech",
      "Piano",
      "Rogers",
      "Pompidou"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_253",
    "domain": "visual_id",
    "subCategory": "Visual Recognition",
    "era": "1997",
    "questionZh": "下图中展示的位于西班牙巴斯克地区内维翁河畔、由三万三千片薄如纸张的天然钛合金金属鳞片包裹、以自由扭转舒展的雕塑体量引发举世闻名“毕尔巴鄂效应”的解构主义名作是：",
    "questionEn": "The shimmering titanium-clad Deconstructivist museum below, sprawling along the Nervión River in the Basque Country and generating the world-famous \"Bilbao Effect\", is:",
    "optionsZh": [
      "罗马国立二十一世纪艺术博物馆 (MAXXI Rome)",
      "洛杉矶华特·迪士尼音乐厅 (Walt Disney Concert Hall)",
      "巴黎蓬皮杜艺术文化中心 (Centre Pompidou)",
      "毕尔巴鄂古根海姆博物馆 (Guggenheim Museum Bilbao)"
    ],
    "optionsEn": [
      "MAXXI National Museum, Rome",
      "Walt Disney Concert Hall, Los Angeles",
      "Centre Pompidou, Paris",
      "Guggenheim Museum Bilbao"
    ],
    "correctAnswer": 3,
    "explanationZh": "此建筑为解构主义先驱弗兰克·盖里（Frank Gehry）设计的西班牙毕尔巴鄂古根海姆博物馆（Guggenheim Museum Bilbao，1997年落成）。盖里利用航空航天三维设计软件CATIA进行复杂的非线性几何双曲面计算，整座建筑如一朵在水岸盛开的金属钛花，外表皮由33,000片仅0.38毫米厚的钛合金鳞片覆盖，随着日光折射出金银相间的有机波光，以一栋划时代建筑彻底复兴了一座衰颓的重工业港口城市，被建筑史称为“毕尔巴鄂效应”。",
    "explanationEn": "This masterpiece is the Guggenheim Museum Bilbao (1997) in Spain, designed by Frank Gehry. Modeled using aerospace software CATIA and sheathed in 33,000 fluttering 0.38-millimeter titanium tiles, its organic fluid contours along the Nervión River transformed industrial decline into the cultural phenomenon known as the \"Bilbao Effect\".",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Guggenheim_Museum_Bilbao_Exterior.jpg/800px-Guggenheim_Museum_Bilbao_Exterior.jpg",
    "fallbackImage": "/images/artworks/guggenheim-bilbao.jpg",
    "tags": [
      "VisualID",
      "Architecture",
      "Deconstructivism",
      "Gehry",
      "GuggenheimBilbao"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_254",
    "domain": "avant_garde",
    "subCategory": "Italian Contextual Modernism",
    "era": "1958",
    "questionZh": "BBPR建筑事务所在米兰设计的维拉斯加塔楼（Torre Velasca，1958），在建筑形态与城市历史环境的对话中展现的核心突破是：",
    "questionEn": "How did BBPR's Torre Velasca in Milan (1958) challenge orthodoxy within the Modern Movement regarding historic context?",
    "optionsZh": [
      "上部居住层向外悬挑并由斜向外露钢筋混凝土支撑桁架托起，蘑菇状体量与带有竖向百叶的立面直接唤起对伦巴第中世纪城堡防御要塞塔楼的历史记忆",
      "纯正交红黄蓝三原色色块装饰的平顶大厅",
      "在四面全贴反光玻璃幕墙的标准美式矩形方盒",
      "完全复制罗马万神庙的单一大圆穹顶"
    ],
    "optionsEn": [
      "Cantilevering upper residential floors supported by exposed reinforced concrete diagonal struts, evoking the silhouette of medieval Lombard defensive watchtowers",
      "A flat-ceilinged hall painted in primary orthogonal red, yellow, and blue planes",
      "A standard American-style rectangular prism wrapped entirely in reflective curtain glass",
      "An exact duplicate of the Roman Pantheon's monumental circular dome"
    ],
    "correctAnswer": 0,
    "explanationZh": "维拉斯加塔楼位于米兰大教堂附近。BBPR没有照搬国际式玻璃幕墙方盒子，而是设计了上大下小的独特轮廓，由外露斜撑支撑上部公寓，既呼应了米兰主教堂的哥特飞券气韵，又继承了中世纪斯福尔扎城堡要塞的厚重文脉。",
    "explanationEn": "Erected near the Duomo in Milan, BBPR's Torre Velasca flared its upper residential levels with exposed diagonal concrete struts, intentionally evoking the medieval watchtowers of Lombardy against CIAM orthodoxy.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "BBPR",
      "TorreVelasca",
      "Contextualism"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_255",
    "domain": "avant_garde",
    "subCategory": "Rationalist Monumentalism",
    "era": "1938 - 1943",
    "questionZh": "20世纪30年代意大利建筑界在罗马新城（EUR）建设中，马塞洛·皮亚琴蒂尼（Marcello Piacentini）等人设计的意大利文明宫（Palazzo della Civiltà Italiana），其建筑形式特征是：",
    "questionEn": "In Rome's EUR district, what architectural language defines the Palazzo della Civiltà Italiana (1938–1943) designed by Guerrini, La Padula, and Romano under Piacentini?",
    "optionsZh": [
      "采用完全轻盈的钢管桁架与透明有机玻璃搭建而成",
      "一座六层高、通体覆以白色石灰华石（Travertine）的巨大立方体，四面立面均布满规整重复的半圆形圆拱开券（每面排列6排9列共54个拱券），被世人誉为“方形斗兽场”（Colosseo Quadrato）",
      "完全模仿高迪自然曲线的彩色碎瓷片拱顶与树枝状倾斜立柱",
      "由三个倾斜的不锈钢几何立方体随机拼贴而成的现代雕塑"
    ],
    "optionsEn": [
      "Erected with lightweight tubular steel trusses and transparent acrylic sheets",
      "A monumental six-story cubic block clad in white Roman travertine, pierced on each facade by a grid of semicircular arches (6 tiers of 9 arches), known as the \"Square Colosseum\"",
      "Imitating Gaudí's organic catenary arches with trencadís mosaics and inclined branching pillars",
      "Three tilted stainless-steel cubes assembled randomly into a modern sculpture"
    ],
    "correctAnswer": 1,
    "explanationZh": "意大利文明宫是新古典纪念性与理性主义结合的代表。纯白石灰华石立方体四面雕凿了216个深邃圆拱，抽离了传统古典柱式繁复细部，将罗马斗兽场的圆拱抽象为纯粹几何秩序，呈现出基里科形而上画派般的静谧神秘。",
    "explanationEn": "The Palazzo della Civiltà Italiana, or \"Colosseo Quadrato\", strips the Roman arena's classical arcade into an unadorned travertine grid of 54 identical arches per facade, marrying Roman monumentalism with Metaphysical surrealism.",
    "tags": [
      "AvantGarde",
      "Rationalism",
      "EUR",
      "SquareColosseum",
      "Piacentini"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_256",
    "domain": "avant_garde",
    "subCategory": "Neo-Expressionism & Brazilian Modernism",
    "era": "postwar",
    "questionZh": "奥斯卡·尼迈耶（Oscar Niemeyer）在巴西里约热内卢设计的尼泰罗伊当代艺术博物馆（MAC Niterói, 1996），其悬挑雕塑形体与环境融合的开创性手法是：",
    "questionEn": "In his design of the Niterói Contemporary Art Museum (MAC Niterói, 1996), what pioneering structural sculpture and site synthesis did Oscar Niemeyer achieve?",
    "optionsZh": [
      "由多根密集排列的粗野主义预应力钢筋混凝土V形柱群支撑起规整沉重的方形实心体量",
      "采用古典希腊帕特农神庙式的白色大理石环列围柱廊与双坡三角山花",
      "一座形如倒圆台或飞碟的纯白混凝土薄壳建筑矗立于悬崖峭壁之上，仅由一根9米粗的中央圆柱从人工水池中拔地升起，一条长达98米的蜿蜒红色坡道引导访客步入360度全景海景展厅",
      "完全由铸铁和彩绘彩色玻璃镶嵌而成的巴洛克式双重椭圆穹顶温室"
    ],
    "optionsEn": [
      "Supporting a heavy rectilinear solid volume with dense clusters of Brutalist prestressed concrete V-shaped pillars",
      "Adopting classical Greek Parthenon-style white marble peripteral colonnades and a pedimented gable roof",
      "A pure white concrete shell resembling a flying saucer or inverted cup cantilevered over a cliff, anchored solely by a single 9-meter central cylinder in a reflecting pool, entered via a 98-meter winding scarlet ramp opening to 360-degree ocean panoramas",
      "A Baroque double-elliptical greenhouse assembled entirely from cast iron and polychrome stained glass"
    ],
    "correctAnswer": 2,
    "explanationZh": "尼迈耶设计的尼泰罗伊当代艺术博物馆宛若降落于瓜纳巴拉湾悬崖之上的一朵混凝土之花或飞碟。16米高、直径50米的倒圆台主体仅依靠底部一根直径9米的中心柱单点支撑，倒映在环形水池中恍若悬浮；访客沿着如同红丝带般起伏盘旋的98米架空坡道拾级而上，大厅360度环形倾斜窗带将糖面包山与大西洋壮丽海景尽收眼底，实现了建筑与大自然诗意共鸣。",
    "explanationEn": "Perched on a cliff overlooking Guanabara Bay, Niemeyer's MAC resembles an alien saucer or blossoming flower. The 16-meter-high, 50-meter-wide disk is dramatically cantilevered from a single 9-meter central pylon rooted in a circular reflecting pool. A winding 98-meter scarlet ramp leads visitors upward to a continuous ribbon of panoramic windows framing Sugarloaf Mountain and the Atlantic Ocean.",
    "tags": [
      "AvantGarde",
      "NeoExpressionism",
      "Niemeyer",
      "MACNiteroi",
      "Brazil"
    ],
    "difficulty": 3,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Niteroi_Contemporary_Art_Museum.jpg/800px-Niteroi_Contemporary_Art_Museum.jpg",
    "fallbackImage": "/images/artworks/niteroi-contemporary-art-museum.jpg"
  },
  {
    "id": "arched_257",
    "domain": "avant_garde",
    "subCategory": "Neo-Expressionist Contemporary Monuments",
    "era": "1996",
    "questionZh": "奥斯卡·尼迈耶在巴西里约热内卢对岸设计的尼泰罗伊当代艺术博物馆（MAC Niterói, 1996），其建筑与自然海湾对峙的核心视觉形式是：",
    "questionEn": "In his design of the Niterói Contemporary Art Museum (1996), how did Oscar Niemeyer sculpturally anchor the building within Guanabara Bay?",
    "optionsZh": [
      "一座长达百米的平顶矩形钢结构玻璃大棚",
      "将整栋建筑完全掩埋于天然花岗岩悬崖岩洞内",
      "完全仿制哥特式大教堂双尖塔石雕立面",
      "犹如一艘优雅的白色天外飞碟轻盈悬浮在一根直径仅9米的中央圆柱底座上，倒映在下方环形水池中，盘旋的鲜红坡道引人步入，环形全景落地玻璃窗将海湾与山峦尽收眼底"
    ],
    "optionsEn": [
      "A hundred-meter-long flat-roofed rectangular industrial glass shed",
      "Burying the entire museum within natural granite cliffside caverns",
      "Replicating the twin-towered stone spires of a northern Gothic cathedral",
      "A white circular saucer-like volume poised upon a single 9-meter-wide cylindrical pedestal above a reflecting pool, entered via a winding red ramp framing 360-degree panoramas of Guanabara Bay"
    ],
    "correctAnswer": 3,
    "explanationZh": "尼泰罗伊当代艺术博物馆被誉为尼迈耶晚年最浪漫的雕塑神作。盘旋升腾的红色坡道如芭蕾舞带，洁白的飞碟三层挑出海崖，环形展厅让人在欣赏当代艺术的同时尽览瓜纳巴拉湾与糖面包山的壮丽海天。",
    "explanationEn": "Niemeyer set the saucer-shaped museum atop a cliff over Guanabara Bay, where an undulating scarlet ramp leads visitors into a circular promenade offering breathtaking 360-degree vistas of Rio de Janeiro.",
    "tags": [
      "AvantGarde",
      "NeoExpressionism",
      "Niemeyer",
      "NiteroiMuseum",
      "Futurism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_258",
    "domain": "avant_garde",
    "subCategory": "High-Tech Architecture",
    "era": "1971 - 1977",
    "questionZh": "伦佐·皮亚诺与理查德·罗杰斯在巴黎设计的蓬皮杜艺术中心（Centre Pompidou，1977），其高技派（High-Tech）“内胆外翻”设计带来的最大功能优势是：",
    "questionEn": "Designed by Renzo Piano and Richard Rogers in Paris, what primary functional advantage was achieved by the \"inside-out\" High-Tech architecture of the Centre Pompidou (1977)?",
    "optionsZh": [
      "将自动扶梯、电梯、大跨度结构悬臂梁与全部彩色机电管线移至建筑外立面，使室内获得了每层近50米跨度完全无立柱阻隔的超大自由多功能展厅空间",
      "使整栋建筑能够像轮船一样在塞纳河上自由航行",
      "彻底消除了建筑物在火灾与地震中的所有物理荷载",
      "将全部展厅封闭在无窗地下防空洞内以保护艺术品"
    ],
    "optionsEn": [
      "Moving escalators, structural gerberette trusses, and color-coded mechanical conduits to the exterior facade, creating completely column-free, highly flexible 50-meter-wide interior floor plates",
      "Enabling the entire structure to navigate up and down the River Seine like a cruise ship",
      "Completely eliminating all gravitational and earthquake loads acting upon the building",
      "Sealing all gallery spaces within subterranean windowless bunkers for art conservation"
    ],
    "correctAnswer": 0,
    "explanationZh": "蓬皮杜中心是高技派划时代里程碑。外立面外挂蓝绿黄红彩色管线与红色毛毛虫滚梯，铸钢格伯梁（Gerberettes）承载重力，室内彻底摆脱了立柱与管线阻隔，实现了真正自由流动的“文化机器”。",
    "explanationEn": "By expressing circulation and MEP systems externally on the facade, Piano and Rogers freed the interior floor plates of columns, establishing an endlessly adaptable, democratic cultural machine in Paris.",
    "tags": [
      "AvantGarde",
      "HighTech",
      "Piano",
      "Pompidou",
      "InsideOut"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_259",
    "domain": "avant_garde",
    "subCategory": "High-Tech Organic Structural Expression",
    "era": "1994",
    "questionZh": "伦佐·皮亚诺在日本大阪人工岛上建成的关西国际机场主航站楼（1994），其长达1.7公里的航站楼屋顶所采用的流体力学形态是：",
    "questionEn": "In his design for the Kansai International Airport Terminal in Osaka (1994), what aerodynamic organic form characterizes Renzo Piano's 1.7-kilometer-long roof canopy?",
    "optionsZh": [
      "纯正交红黄蓝三原色色块装饰的平顶大厅",
      "完全模仿高迪自然曲线的彩色碎瓷片拱顶与树枝状倾斜立柱",
      "全部使用预制钢管桁架与透明有机玻璃搭建而成",
      "由优雅起伏的不对称双曲面机翼剖面流线型钢桁架覆盖，犹如飞鸟展翼般引导气流自然流通，并采用橡胶隔震垫抵御人工岛不均匀沉降与强震"
    ],
    "optionsEn": [
      "A flat-ceilinged hall painted in primary orthogonal red, yellow, and blue planes",
      "Imitating Gaudí's organic catenary arches with trencadís mosaics and inclined branching pillars",
      "Constructed entirely of industrial tubular steel trusses and transparent acrylic sheets",
      "An undulating, aerodynamic airfoil roof canopy framed by sculpted steel trusses, shaped to guide natural laminar airflow and jack-mounted to counter differential island settlement"
    ],
    "correctAnswer": 3,
    "explanationZh": "关西机场建于大阪湾人工填海软基岛上。皮亚诺设计了形如机翼展开的流线型波浪屋顶，气流受形状引导在航站楼内平稳流动无死角；柱底配备千斤顶与隔震支座，成功经受了1995年阪神大地震考验。",
    "explanationEn": "Piano engineered Kansai's 1.7km terminal as an aerodynamic wing profile promoting natural airflow. Mounted on jacks with Teflon pads to adjust for differential seabed settlement, it resisted the 1995 Kobe earthquake undamaged.",
    "tags": [
      "AvantGarde",
      "HighTech",
      "Piano",
      "KansaiAirport",
      "AirfoilRoof"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_260",
    "domain": "avant_garde",
    "subCategory": "High-Tech Eco-Skyscraper",
    "era": "2012",
    "questionZh": "伦佐·皮亚诺在伦敦设计的“碎片大厦”（The Shard，2012），其金字塔形尖塔外立面的标志性建筑特征是：",
    "questionEn": "Designed by Renzo Piano in London, what defining architectural expression characterizes \"The Shard\" (2012)?",
    "optionsZh": [
      "四面全封闭的花岗岩实心外墙",
      "完全由铁柱支撑的平顶水晶宫殿展厅",
      "由八个向内倾斜且互不接触的低铁高透玻璃幕墙“碎片”组成，顶部向天空敞开尖细裂口，如同泰晤士河畔拔地而起的水晶冰棱，随天候反射天际光云",
      "采用古典科林斯大理石双柱围合的露天露天剧场"
    ],
    "optionsEn": [
      "Four windowless, solid monolithic granite perimeter walls",
      "A flat-roofed cast-iron and glass exhibition hall supported by hollow metal pillars",
      "A pyramid of eight sloping, non-touching glass facets (\"shards\") of extra-clear low-iron glass opening to the sky at the summit, reflecting London's ever-changing sky",
      "An open-air amphitheater surrounded by paired classical Corinthian marble colonnades"
    ],
    "correctAnswer": 2,
    "explanationZh": "碎片大厦高310米，其灵感源自伦敦教堂尖顶与泰晤士河帆船桅杆。皮亚诺让八面倾斜的特制超白玻璃幕墙在顶部不闭合交错，自然通风散热，使庞大高楼显得轻盈通透如冰雕晶体。",
    "explanationEn": "Standing 310 meters, The Shard features eight sloping glass facets that deliberately do not touch at the summit, creating an open spire of light that reflects London's weather in crystalline transparency.",
    "tags": [
      "AvantGarde",
      "HighTech",
      "Piano",
      "TheShard",
      "GlassFacet"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_261",
    "domain": "avant_garde",
    "subCategory": "Parametric Ecological High-Rise",
    "era": "2004",
    "questionZh": "诺曼·福斯特在伦敦金融城设计的圣玛丽斧街30号“小黄瓜”（The Gherkin / 30 St Mary Axe，2004），其空气动力学与结构创举在于：",
    "questionEn": "In his design of 30 St Mary Axe (\"The Gherkin\", 2004) in London, what aerodynamic and structural breakthrough did Norman Foster engineer?",
    "optionsZh": [
      "正方形平面九宫格布局与拜占庭洋葱头穹顶",
      "全部使用木质榫卯结构仿制中国传统宫殿牌坊",
      "建造了十二层标准层高的方形写字楼",
      "采用雪茄形空气动力学曲面形体与外围交叉斜撑钢网格（Diagrid）结构，不仅极大减轻了地面强风倒灌效应，更在内部形成螺旋盘旋的中庭通风光井，大幅降低能耗"
    ],
    "optionsEn": [
      "A nine-square grid plan crowned by gilded Byzantine onion domes",
      "Using traditional wooden mortise-and-tenon joints to replicate Chinese imperial archways",
      "Erecting a twelve-story corporate office block with uniform floor heights",
      "A streamlined aerodynamic curved profile supported by an exterior diagonal steel grid (diagrid), reducing downward wind turbulence while driving helical spiraling ventilation shafts to halve energy consumption"
    ],
    "correctAnswer": 3,
    "explanationZh": "小黄瓜大厦圆润的雪茄外形减小了风阻力与涡流冲击。外围钻石形斜交钢网格（Diagrid）彻底省去了内部多余立柱，六条螺旋上升的中庭光井拉动自然通风，树立了当代生态参数化超高层典范。",
    "explanationEn": "Foster designed The Gherkin with a bulging aerodynamic profile and exterior structural diagrid, minimizing wind shear and channeling natural ventilation through spiraling lightwells to cut energy use by half.",
    "tags": [
      "AvantGarde",
      "HighTech",
      "Foster",
      "TheGherkin",
      "Diagrid"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_262",
    "domain": "avant_garde",
    "subCategory": "Democratic Glass Architecture",
    "era": "1999",
    "questionZh": "诺曼·福斯特改建柏林帝国国会大厦（Reichstag，1999）并加建全透明玻璃穹顶，其政治象征与生态科技意义在于：",
    "questionEn": "In his celebrated reconstruction of the Reichstag in Berlin (1999), what ideological and ecological vision did Norman Foster realize?",
    "optionsZh": [
      "公众沿着双螺旋坡道漫步于穹顶之上俯瞰下方议会大厅，象征民主权力在人民注视下透明运行，中央倒锥形反光镜筒为议会提供自然采光并驱动热压通风换气",
      "安装重型装甲钢板以防止外部袭击",
      "完全复刻普鲁士帝国时代沉重封闭的新巴洛克式铜铸实心穹隆",
      "在屋顶建造了一座私人直升机停机坪与豪华泳池"
    ],
    "optionsEn": [
      "Citizens ascending twin helical ramps look directly down upon seated politicians to embody democratic accountability, while a mirrored cone reflects natural light and drives solar thermal ventilation",
      "Enveloping the roof in armored steel plating to withstand external attacks",
      "Replicating the heavy, enclosed Neo-Baroque solid copper cupola of the Prussian Empire",
      "Constructing a private helicopter landing pad and luxury swimming pool on the roof"
    ],
    "correctAnswer": 0,
    "explanationZh": "福斯特在历史石墙之上置入轻盈的透明玻璃穹顶。市民步入螺旋坡道，视线越过议员头顶，表达“人民高于政府”的民主理念；中央反光镜柱更将日光反射至议会席并排除废气，实现生态节能。",
    "explanationEn": "Foster placed citizens physically above parliamentarians on double-helical ramps to embody democratic openness, while the sculpted mirrored cone functions as a solar light collector and thermal ventilation engine.",
    "tags": [
      "AvantGarde",
      "HighTech",
      "Foster",
      "Reichstag",
      "Ecology"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_263",
    "domain": "avant_garde",
    "subCategory": "Deconstructivist Early Breakthrough",
    "era": "1989",
    "questionZh": "弗兰克·盖里在德国莱茵河畔魏尔设计的维特拉设计博物馆（Vitra Design Museum，1989），其在解构主义建筑探索中的里程碑意义是：",
    "questionEn": "Why is Frank Gehry's Vitra Design Museum in Weil am Rhein (1989) regarded as a pivotal turning point in his Deconstructivist career?",
    "optionsZh": [
      "它是世界上第一座全部由手工雕刻卡拉拉大理石砌筑而成的宫殿",
      "这是盖里在欧洲建成的首个重要作品，标志着他从早期拼贴简易工业铁丝网、胶合板的小住宅设计，正式跨入由动态倾斜的白色抹灰曲面、交叉旋转楼梯与锌皮屋面构成的纯粹三维雕塑空间",
      "严格遵从帕拉第奥神庙立面法则与科林斯式双柱大理石开窗",
      "采用完全装配式标准化集装箱单元在山顶进行网格化平铺"
    ],
    "optionsEn": [
      "It was the world's first royal palace carved entirely from solid Carrara marble by hand",
      "As Gehry's first building in Europe, it marked his evolution from corrugated-metal assemblages into expressive three-dimensional sculptural forms of swirling white stucco, zinc roofs, and intersecting stairs",
      "Strictly observing Palladian temple facade canons and paired Corinthian marble colonnades",
      "Arranging prefabricated industrial shipping containers in a rigid grid atop leveled forest ground"
    ],
    "correctAnswer": 1,
    "explanationZh": "维特拉设计博物馆是盖里建筑生涯的质变点。他摆脱了早期拼贴式加利福尼亚小住宅语汇，将立方体、斜塔、圆柱坡道撕裂、扭曲并重新穿插组合为纯白的抽象雕塑体，预示了毕尔巴鄂古根海姆时代的到来。",
    "explanationEn": "The Vitra Design Museum represented Gehry's transition into fluid architectural sculpture: swirling ramps, tumbling cubes, and zinc planes coalesced into a dynamic Deconstructivist composition in Germany.",
    "tags": [
      "AvantGarde",
      "Deconstructivism",
      "Gehry",
      "VitraMuseum",
      "SculpturalForm"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_264",
    "domain": "avant_garde",
    "subCategory": "Deconstructivist Digital Paradigm",
    "era": "1997",
    "questionZh": "弗兰克·盖里设计的毕尔巴鄂古根海姆博物馆（1997），其在数字化建造与材料运用上的颠覆性突破是：",
    "questionEn": "In his design for the Guggenheim Museum Bilbao (1997), what technological and material breakthrough did Frank Gehry achieve?",
    "optionsZh": [
      "全部使用古罗马火山灰混凝土与实木梁柱进行古典轴线对称复刻",
      "由三个相互垂直交叉的粗粝混凝土粗野主义方盒拼接而成",
      "借助航空航天三维设计软件CATIA对复杂自由双曲面进行精确数字化结构分解，外覆3.3万块0.38毫米厚、随光线变换金银色泽的轻质钛合金鳞片（Titanium Tiles）",
      "采用古典三段式构图，底层装饰巨型罗马陶立克多柱式门廊"
    ],
    "optionsEn": [
      "Replicating classical axial symmetry entirely with Roman pozzolanic concrete and timber beams",
      "Assembling three intersecting raw Brutalist concrete boxes devoid of curve",
      "Pioneering the use of aerospace software CATIA to calculate complex mathematical curves, clad in 33,000 light-responsive 0.38mm titanium panels that shimmer from silver to gold under sunlight",
      "A classical tripartite division base-shaft-capital fronted by giant Doric colonnades"
    ],
    "correctAnswer": 2,
    "explanationZh": "毕尔巴鄂古根海姆彻底重塑了当代建筑与城市经济。盖里运用航空软件CATIA将极复杂的双曲面钢构件精准数字化预制，表面覆盖0.38毫米薄的钛金属鳞片，随天色波光粼粼，造就了令全城复兴的“毕尔巴鄂效应”。",
    "explanationEn": "Bilbao changed architectural history: Gehry adapted aerospace CAD tool CATIA to calculate non-standard steel frames wrapped in fluttering titanium sheets, demonstrating that radical digital sculpture could be built on budget.",
    "tags": [
      "AvantGarde",
      "Deconstructivism",
      "Gehry",
      "GuggenheimBilbao",
      "Titanium"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_265",
    "domain": "avant_garde",
    "subCategory": "Deconstructivist Acoustic Landmark",
    "era": "2003",
    "questionZh": "弗兰克·盖里设计的洛杉矶沃尔特·迪士尼音乐厅（Walt Disney Concert Hall，2003），其建筑形式与内部声学环境的融合体现在：",
    "questionEn": "Designed by Frank Gehry in Los Angeles (2003), how does the Walt Disney Concert Hall unite expressive exterior form with interior acoustic precision?",
    "optionsZh": [
      "完全遵从古典希腊露天剧场的扇形石阶与无顶回音壁",
      "一座四面完全不透光的实心灰色未粉刷混凝土平屋顶方盒子",
      "由数千根彩色铸铁钢管搭建的温室植物博览馆",
      "外立面由层叠起伏如扬帆远航的哑光无反光不锈钢曲面包裹，室内与声学大师丰田泰久合作，打造了由道格拉斯冷杉实木包裹的葡萄园式（Vineyard）环绕观众席与波浪形曲面木质天花板"
    ],
    "optionsEn": [
      "Strictly observing the stone seating tiers and unroofed acoustic skene of classical Greek amphitheaters",
      "An opaque solid grey unadorned concrete cubic box without windows or relief",
      "A botanical exhibition glasshouse assembled from thousands of painted cast-iron pipes",
      "An exterior wrapped in billowing brushed stainless-steel sails paired with a Douglas fir vineyard-style acoustic hall with curving wooden ceilings designed with acoustician Yasuhisa Toyota"
    ],
    "correctAnswer": 3,
    "explanationZh": "迪士尼音乐厅外部如银色风帆在城市中鼓起，哑光不锈钢板规避了强光刺眼；内部实木葡萄园大厅让观众亲密环绕洛杉矶爱乐乐团，波浪状冷杉木天顶将声音完美扩散，实现了雕塑诗意与纯澈声学的无缝融合。",
    "explanationEn": "Gehry designed the concert hall as billowing stainless steel sails on the exterior, while collaborating with acoustician Yasuhisa Toyota to shape a warm Douglas fir vineyard auditorium celebrating acoustic intimacy.",
    "tags": [
      "AvantGarde",
      "Deconstructivism",
      "Gehry",
      "DisneyConcertHall",
      "Acoustics"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_266",
    "domain": "avant_garde",
    "subCategory": "Deconstructivist Memory Architecture",
    "era": "1999 - 2001",
    "questionZh": "丹尼尔·里伯斯金（Daniel Libeskind）设计的柏林犹太博物馆（Jewish Museum Berlin），其折线锯齿形平面与垂直切割空间的深层精神隐喻是：",
    "questionEn": "In Daniel Libeskind's Jewish Museum Berlin, what spatial and psychological narrative governs the zigzagging zinc volume and intersecting axes?",
    "optionsZh": [
      "平面如同被撕裂解构的黄色大卫之星折线，一条贯穿建筑全高、未供暖的黑暗裸露混凝土“虚空”（The Void）刺穿整个展厅，象征大屠杀带给人类不可挽回的空白与历史断层",
      "采用完全对称的维多利亚时代铸铁温室造型与繁复花饰",
      "设计了一个纯圆形的单层透明玻璃圆盘底座并在内部布置微型内庭院",
      "由四排宏伟的古罗马科林斯柱廊包围的长方形巴西利卡"
    ],
    "optionsEn": [
      "A jagged plan derived from an exploded, distorted Star of David, pierced through by an unheated, raw concrete \"Void\" signifying the permanent physical erasure of European Jewish life",
      "Copying symmetrical Victorian botanical iron greenhouses covered in floral filigree",
      "Housing white cube galleries inside a transparent circular disc with multiple entrances",
      "A classical rectangular basilica encircled by quadruple Corinthian porticoes"
    ],
    "correctAnswer": 0,
    "explanationZh": "柏林犹太博物馆是解构主义纪念建筑的巅峰。里伯斯金将变形的大卫之星折叠为锯齿平面，外立面开凿如刀割伤口般的斜向缝隙窗；室内穿插着流亡花园与霍洛科斯特塔，用幽冷空虚的空间唤醒人们对历史惨剧的深沉反思。",
    "explanationEn": "Libeskind organized the museum around an unheated, raw concrete \"Void\" that pierces the zigzagging zinc building, translating the physical absence, trauma, and memory of the Holocaust into visceral spatial experience.",
    "tags": [
      "AvantGarde",
      "Deconstructivism",
      "Libeskind",
      "JewishMuseum",
      "Berlin"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_267",
    "domain": "avant_garde",
    "subCategory": "Biomorphic Structural Expressionism",
    "era": "1998 - 2005",
    "questionZh": "圣地亚哥·卡拉特拉瓦在西班牙巴伦西亚设计的艺术与科学城（City of Arts and Sciences），其仿生骨骼结构的视觉特征体现在：",
    "questionEn": "In his sprawling City of Arts and Sciences in Valencia (1998–2005), what biomimetic engineering defines Santiago Calatrava's architecture?",
    "optionsZh": [
      "所有建筑物均完全使用深黑色粗糙玄武岩毛石乱堆砌筑",
      "由四个标准钢架玻璃方盒子沿东西单一线性轴线排布",
      "以纯洁耀眼的白色清水混凝土与白色马赛克碎瓷，构筑出宛如巨鲸肋骨、恐龙骨架与巨大眼睛（半球形天文馆L'Hemisfèric）的动能有机仿生体，倒映在清澈的人工水池浅镜中",
      "建造了十二层标准层高的方形写字楼"
    ],
    "optionsEn": [
      "Constructed entirely of coarse, unadorned black basalt rubble masonry",
      "Four identical steel-framed glass boxes aligned along a static single axis",
      "Sculptural white concrete ribs and trencadís tile mosaics evoking whale skeletons and an open human eye (L'Hemisfèric), reflected in shallow turquoise aquatic basins",
      "Erecting a twelve-story corporate office block with uniform floor heights"
    ],
    "correctAnswer": 2,
    "explanationZh": "巴伦西亚艺术科学城将卡拉特拉瓦的力学仿生学发挥到极致。天文馆外观犹如一只浮在水面上的巨眼，活动眼睑可开闭；科学馆则如巨大的史前脊椎骨骼向天空伸展，纯白骨架与蔚蓝池水交相辉映，宛如未来科幻梦境。",
    "explanationEn": "Calatrava sculpted zoomorphic white concrete skeletons in Valencia: L'Hemisfèric resembles a blinking colossal eye reflected in shallow pools, while the Science Museum resembles the ribcage of an ancient whale.",
    "tags": [
      "AvantGarde",
      "Contemporary",
      "Calatrava",
      "CityOfArtsAndSciences",
      "Valencia"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_268",
    "domain": "avant_garde",
    "subCategory": "Kinetic Biomimetic Engineering",
    "era": "2001",
    "questionZh": "圣地亚哥·卡拉特拉瓦在密尔沃基艺术博物馆（Milwaukee Art Museum）加建的夸德拉奇展馆，其最震撼人心的机械动力学装置是：",
    "questionEn": "In his design of the Quadracci Pavilion at the Milwaukee Art Museum (2001), what kinetic mechanical installation did Santiago Calatrava pioneer?",
    "optionsZh": [
      "完全由铁柱支撑的平顶水晶宫殿展厅",
      "一座四面完全不透光的实心灰色未粉刷混凝土平屋顶方盒子",
      "一条在地下五十米深处由电力机车牵引的高速观光轨道",
      "一对重达90吨的“伯克遮阳之翼”（Burke Brise Soleil），翼展达66米由72片钢鳍组成，可如同白色巨海鸥般随日光开合扇动，兼具机械遮阳与城市精神图腾"
    ],
    "optionsEn": [
      "A flat-roofed cast-iron and glass exhibition hall supported by hollow metal pillars",
      "An opaque solid grey unadorned concrete cubic box without windows or relief",
      "A subterranean tourist railway pulled by electric locomotives fifty meters deep",
      "The \"Burke Brise Soleil\", a 90-ton kinetic sunscreen with a 66-meter wingspan composed of 72 steel fins, unfolding and folding like a giant gull over Lake Michigan"
    ],
    "correctAnswer": 3,
    "explanationZh": "密尔沃基艺术博物馆新馆是世界首座拥有大型动态机翼的公共建筑。卡拉特拉瓦设计了随天气开闭的钢质风之翼，白天展翼如巨鸟振翅迎接密歇根湖的波浪与朝阳，夜晚合拢静卧，将结构工程升华为灵动的生命雕塑。",
    "explanationEn": "Calatrava's Burke Brise Soleil is an operable avian sunscreen on Lake Michigan; 72 steel fins fold and spread rhythmically to regulate daylight, uniting kinetic mechanical engineering with poetic sculpture.",
    "tags": [
      "AvantGarde",
      "Contemporary",
      "Calatrava",
      "MilwaukeeArtMuseum",
      "KineticWings"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_269",
    "domain": "avant_garde",
    "subCategory": "Parametric Spatial Ribbons",
    "era": "2009",
    "questionZh": "扎哈·哈迪德在罗马国立二十一世纪艺术博物馆（MAXXI，2009）中，如何将解构主义流体空间与历史古都对话？",
    "questionEn": "In Rome's MAXXI (National Museum of 21st Century Arts, 2009), how did Zaha Hadid translate fluid parametric space and deconstructivism into reality?",
    "optionsZh": [
      "四面完全无窗的古罗马斗兽场式同心圆环形看台",
      "严格遵从维特鲁威对称法则，使用对称排列的古典多立克大理石圆柱",
      "用弯曲重叠、悬挑交织的自密实流态清水混凝土长带打破传统的方盒子展厅，黑钢楼梯在多维空中自由穿插，让观者如在奔流的艺术地貌河流中自由探索",
      "在屋顶建造了一座私人直升机停机坪与豪华泳池"
    ],
    "optionsEn": [
      "A concentric circular amphitheater derived from Roman arenas without external windows",
      "Strict adherence to Vitruvian symmetry with paired Doric marble colonnades",
      "Sinuous, overlapping fair-faced concrete ribbon walls that weave and cantilever across intersecting levels, creating fluid multidirectional pathways and dissolving rigid white-cube galleries",
      "Constructing a private helicopter landing pad and luxury swimming pool on the roof"
    ],
    "correctAnswer": 2,
    "explanationZh": "MAXXI建于罗马原蒙泰洛兵营遗址。哈迪德摒弃了古典轴线与封闭展室，用自密实清水混凝土浇筑出如流水般转折舒展的宽阔廊道，混凝土天梁内嵌发光光带，黑色钢楼梯凌空飞渡，使观展成为一次流动穿行的空间历险。",
    "explanationEn": "Hadid's MAXXI breaks away from static rectilinear museum boxes: sinuous ribbon walls cast in fair-faced concrete overlap and cantilever dynamically, allowing fluid circulation to evoke an architectural river delta in Rome.",
    "tags": [
      "AvantGarde",
      "Contemporary",
      "ZahaHadid",
      "MAXXI",
      "Parametricism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_270",
    "domain": "avant_garde",
    "subCategory": "Proportional Harmonic System",
    "era": "1948",
    "questionZh": "勒·柯布西耶于1948年出版发表的理论著作《模度》（Le Modulor），其建立普适建筑尺寸和谐体系的数理基础是：",
    "questionEn": "Published by Le Corbusier in 1948, what is the mathematical and anthropomorphic foundation of \"Le Modulor\"?",
    "optionsZh": [
      "古埃及建造金字塔时使用的法老右手前臂长度与尼罗河水位刻度",
      "以举起手臂的站立人体基准高度（身高1.83米，举臂高2.26米）为基准，将其与斐波那契数列（Fibonacci series）及黄金分割比（1:1.618）完美结合，构建出协调工业预制大生产与人类宜居尺度的和谐尺度体系",
      "国际米制原器保存在巴黎国际度量衡局的纯铂铱合金棒的绝对物理长度",
      "完全基于汽车内燃机气缸冲程与汽车轮胎滚动圆周的机械尺寸"
    ],
    "optionsEn": [
      "The length of the pharaoh's right forearm and flood markers along the Nile River",
      "Combining the ergonomics of a standing man with raised arm (height 1.83m, raised reach 2.26m) with the Golden Ratio (1:1.618) and Fibonacci series, creating a harmonious universal scale for modern prefabrication",
      "The physical platinum-iridium standard meter bar preserved at the BIPM in Paris",
      "Dimensions derived strictly from automobile combustion engine strokes and tire revolutions"
    ],
    "correctAnswer": 1,
    "explanationZh": "《模度》是现代主义设计最具影响力的尺度理论之一。勒·柯布西耶试图调和英制（英寸英尺）与公制（米制）的割裂，以人体工程学高度为基础，推导出红蓝两条黄金数列，指导了马赛公寓等战后巨作的模块化建造。",
    "explanationEn": "Le Corbusier's Modulor resolved the conflict between metric and imperial scales, deriving an ergonomic Red and Blue scale from human proportions (1.83m height, 2.26m reach) and the Golden Section to govern mass housing.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "LeCorbusier",
      "Modulor",
      "GoldenRatio"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_271",
    "domain": "avant_garde",
    "subCategory": "Continuous Topological Landscape",
    "era": "2012",
    "questionZh": "扎哈·哈迪德在阿塞拜疆巴库建成的盖达尔·阿利耶夫文化中心（Heydar Aliyev Center，2012），在建筑形态与拓扑学上的终极突破是：",
    "questionEn": "In the Heydar Aliyev Center in Baku (2012), what supreme topological breakthrough did Zaha Hadid achieve?",
    "optionsZh": [
      "彻底消解了地面、墙壁与屋顶的传统离散界限，全建筑表面由洁白的三维双曲面玻璃纤维增强混凝土板（GFRC）无缝过渡包裹，如同从广场地表如浪潮般翻卷升腾而起的连绵流体雕塑，室内无柱大跨度空间完全向公众开放",
      "一座四面完全不透光的实心灰色未粉刷混凝土平屋顶方盒子",
      "完全复制君士坦丁堡圣索菲亚大教堂的四个半穹顶环抱构造",
      "用厚重的实心青铜浇筑四面封闭承重墙"
    ],
    "optionsEn": [
      "Completely dissolving the discrete boundaries between ground, wall, and roof into an undulating, fluid white topography of GFRC panels that sweeps continuously from the public plaza into soaring column-free halls",
      "An opaque solid grey unadorned concrete cubic box without windows or relief",
      "Replicating the four spherical pendentive semidomes of Hagia Sophia in Constantinople",
      "Massive solid bronze perimeter walls enclosing a windowless cube"
    ],
    "correctAnswer": 0,
    "explanationZh": "阿塞拜疆巴库阿利耶夫中心是当代流体参数化建筑之冠。建筑由计算机辅助精准设计的白色曲面板拼装，外皮如流动帷幔自地面掀起，内部音乐厅与美术馆在曲面下方自然舒展，打破了前苏联加盟国传统的僵化纪念碑方块。",
    "explanationEn": "The Heydar Aliyev Center in Baku dissolves all architectural boundaries between ground, wall, and roof into an undulating, fluid white topography. Clad in custom GFRC panels, its sweeping curves enclose soaring, column-free spaces.",
    "tags": [
      "AvantGarde",
      "Contemporary",
      "ZahaHadid",
      "HeydarAliyevCenter",
      "Parametricism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_272",
    "domain": "avant_garde",
    "subCategory": "Universal Space Tectonics",
    "era": "1968",
    "questionZh": "路德维希·密斯·凡·德·罗晚年设计的柏林新国家美术馆（Neue Nationalgalerie，1968），其“通用空间”（Universal Space）哲学的纯粹物理呈现是：",
    "questionEn": "Designed by Ludwig Mies van der Rohe in Berlin (1968), what is the definitive tectonic realization of his concept of \"Universal Space\" in the Neue Nationalgalerie?",
    "optionsZh": [
      "用细长木质梁柱搭建的临时剧场舞台",
      "完全由透明防弹玻璃浇筑而成的现代主义悬挑方盒",
      "一座通体覆以黑色花岗岩的无窗金字塔形地堡",
      "一个面积达65米×65米的巨大正方形平屋顶钢格栅顶棚，仅由外围8根十字形截面钢柱支撑在花岗岩台基边缘，室内地面完全无柱且四周全由8.4米高的整块透明落地玻璃包裹，实现绝对自由灵动"
    ],
    "optionsEn": [
      "A temporary timber proscenium theater stage built for court pageantry",
      "A modernist cantilevered box cast from bulletproof glass without interior tiers",
      "A windowless pyramidal bunker clad entirely in polished black granite",
      "A colossal 65x65-meter square coffered steel roof slab supported entirely by eight cruciform steel columns on the perimeter, enclosing a completely column-free glass pavilion of absolute spatial freedom"
    ],
    "correctAnswer": 3,
    "explanationZh": "柏林新国家美术馆是密斯“少即是多”与通用空间的绝笔丰碑。巨大的正方形黑色钢顶棚如同一把悬浮巨伞，仅由每边两根十字钢柱支撑，外墙为通高纯净玻璃幕墙，艺术品展厅完全自由开敞，展现了工业钢与玻璃的至高纯粹。",
    "explanationEn": "The Neue Nationalgalerie is Mies van der Rohe's ultimate temple of \"universal space\": eight cruciform steel columns support a hovering 65-meter square steel roof, creating a column-free glass hall of pure spatial transcendence.",
    "tags": [
      "AvantGarde",
      "Modernism",
      "MiesVanDerRohe",
      "NeueNationalgalerie",
      "UniversalSpace"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_273",
    "domain": "artist_movement",
    "subCategory": "Deconstructivism",
    "era": "1997",
    "questionZh": "弗兰克·盖里（Frank Gehry）设计的毕尔巴鄂古根海姆博物馆（1997），在数字化建造与解构主义建筑语言上的里程碑意义是：",
    "questionEn": "What was the landmark breakthrough in digital fabrication and Deconstructivist architecture achieved by Frank Gehry's Guggenheim Museum Bilbao (1997)?",
    "optionsZh": [
      "开创性地借助航空航天三维建模软件CATIA，将数以万计不规则自由双曲面转化为可精准激光切割加工的钛合金板与钢构件，使激进雕塑形态得以精密建造",
      "完全使用古罗马火山灰混凝土与实木梁柱进行古典轴线对称复刻",
      "严格遵从帕拉第奥神庙立面法则与科林斯式双柱大理石开窗",
      "依靠预制钢筋混凝土大板装配成规整的长方体功能主义办公楼"
    ],
    "optionsEn": [
      "Pioneering the use of aerospace 3D modeling software CATIA to translate complex, non-standard double-curved surfaces into laser-cut titanium tiles and steel nodes",
      "Replicating classical axial symmetry entirely with Roman pozzolanic concrete and timber beams",
      "Strictly observing Palladian temple facade canons and paired Corinthian marble colonnades",
      "Assembling standard precast concrete panels into a rectilinear functionalist office box"
    ],
    "correctAnswer": 0,
    "explanationZh": "盖里借助航空软件CATIA对极其复杂的双曲面有机雕塑体量进行三维数学解析，外覆3.3万片0.3毫米厚的轻质钛合金鳞片，开启了当代建筑非标准曲面数字化建造的时代。",
    "explanationEn": "Gehry revolutionized contemporary architecture by adapting aerospace software CATIA to calculate complex mathematical curves, cladding the sculpted steel skeleton in 33,000 fluttering titanium tiles.",
    "tags": [
      "ArtistMovement",
      "Deconstructivism",
      "Gehry",
      "GuggenheimBilbao",
      "CATIA"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_274",
    "domain": "artist_movement",
    "subCategory": "Contemporary Architecture & Memorial Urbanism",
    "era": "contemporary",
    "questionZh": "丹尼尔·里伯斯金（Daniel Libeskind）在纽约曼哈顿世界贸易中心遗址重建总体规划（Memory Foundations, 2003）中，所确立的核心纪念性与几何构成象征是：",
    "questionEn": "In his winning master plan 'Memory Foundations' (2003) for the World Trade Center site in New York, what foundational memorial narrative and geometry did Daniel Libeskind formulate?",
    "optionsZh": [
      "将原址完全抹平建造一座不留任何历史痕迹的巨型封闭式商业室内购物中心与高尔夫球场",
      "将塔楼标志性高度设定为象征美国独立年份的1776英尺（541.3米），永久保留暴露出击退哈德逊河水侵袭的地下连续墙（Slurry Wall），并确立了向大屠杀与遇难者致敬的“归零地”（Ground Zero）双子纪念水池神圣空间",
      "原样一比一重建原本两座完全相同的正方形均质双子塔以证明恐怖袭击未造成任何物理改变",
      "建造一座由巴洛克式镀金多立克大理石凯旋门与青铜圆顶环绕的古典皇家陵寝"
    ],
    "optionsEn": [
      "Completely flattening the site to erect an enclosed commercial shopping mall and golf course without any memorial elements",
      "Establishing a symbolic tower height of 1,776 feet (541.3 m) commemorating American independence, preserving the historic slurry wall (the bathtub) that held back the Hudson River, and delineating the Ground Zero memorial footprint",
      "Rebuilding identical 1:1 replicas of the original twin towers to demonstrate that the attacks caused no physical change",
      "Constructing a classical royal mausoleum surrounded by Baroque gilded Doric triumphal arches and bronze domes"
    ],
    "correctAnswer": 1,
    "explanationZh": "里伯斯金在2003年凭借“记忆之基”（Memory Foundations）总体规划胜出。他将主楼高度精准锚定在1776英尺（约541.3米），以此纪念1776年美国《独立宣言》的诞生；更重要的是，他力主保留了911事件中经受住剧烈冲击且未崩塌的地下连续防渗墙（Slurry Wall），将原本冰冷的工程构件转化为直击心灵的历史见证物，并将双子塔原有基底确立为永久的纪念水池公园。",
    "explanationEn": "Libeskind's master plan 'Memory Foundations' grounded the rebuilding in deep historical and emotional symbolism. He established the tower's spire height at exactly 1,776 feet (541.3 m) to commemorate the year of the Declaration of Independence. Crucially, he preserved the massive exposed slurry wall ('the bathtub') that survived the catastrophe to function as a profound physical witness to resilience, while setting aside the twin tower footprints for the Ground Zero reflecting pools.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArchitecture",
      "Libeskind",
      "OneWorldTradeCenter",
      "MemoryFoundations"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/One_World_Trade_Center_July_2015.jpg/800px-One_World_Trade_Center_July_2015.jpg",
    "fallbackImage": "/images/artworks/one-world-trade-center.jpg"
  },
  {
    "id": "arched_275",
    "domain": "artist_movement",
    "subCategory": "High-Tech Architecture & Ecological Tectonics",
    "era": "contemporary",
    "questionZh": "伦佐·皮亚诺（Renzo Piano）在南太平洋新喀里多尼亚设计的吉巴欧文化中心（Jean-Marie Tjibaou Cultural Centre, 1991-1998），其高技派生态构造与地域文脉融合的核心体现于：",
    "questionEn": "In the Jean-Marie Tjibaou Cultural Centre in New Caledonia (1991–1998), how did Renzo Piano synthesize High-Tech ecological engineering with indigenous Pacific vernacular architecture?",
    "optionsZh": [
      "采用完全封闭的大理石重型厚墙以阻隔热带飓风，并在地下开凿防空掩体",
      "使用巴洛克式的多层对称圆顶与古典陶立克柱廊展现欧洲宗主国的权威",
      "由10座呈弧形排列的肋骨状双层木百叶壳体构成，利用耐候伊罗科木（Iroko）格栅与信风风压实现被动式自然通风对流冷却，向卡纳克（Kanak）原住民传统草屋致敬",
      "建造全钢化玻璃封闭方盒子并全天候依赖大功率工业压缩机空调系统"
    ],
    "optionsEn": [
      "Enclosing the exhibition galleries with massive windowless solid marble walls to block tropical cyclones and excavating subterranean blast shelters",
      "Erecting tiered symmetrical Baroque domes and classical Doric colonnades to demonstrate European colonial authority",
      "Deploying 10 curved rib-like pavilions of double-skin Iroko wood louvers that harness Pacific trade winds for passive aerodynamic ventilation, paying poetic homage to indigenous Kanak huts",
      "Constructing hermetically sealed tempered glass cubes that rely around the clock on energy-intensive industrial air-conditioning systems"
    ],
    "correctAnswer": 2,
    "explanationZh": "吉巴欧文化中心是高技派走向生态仿生与地域文脉的巅峰之作。皮亚诺提炼当地卡纳克族传统村落圆锥形草屋的灵感，设计了10座高低不等的肋骨状弧形壳体，采用耐腐蚀的非洲伊罗科木与不锈钢构件，利用迎海面与背海面的风压差形成天然抽风烟囱效应，实现了零能耗被动式冷却与对土著文化记忆的崇高敬意。",
    "explanationEn": "The Tjibaou Cultural Centre represents the pinnacle of High-Tech evolving toward ecological biomimicry and cultural identity. Inspired by indigenous Kanak village huts, Piano conceived 10 curved rib-like wooden pavilions made of rot-resistant Iroko wood and cast steel nodes; their aerodynamic double facade harnesses sea breezes to create passive thermal chimney ventilation without relying on mechanical cooling.",
    "tags": [
      "ArtistMovement",
      "HighTech",
      "RenzoPiano",
      "Tjibaou",
      "EcologicalArchitecture"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Centre_Culturel_Tjibaou_Noumea.jpg/800px-Centre_Culturel_Tjibaou_Noumea.jpg",
    "fallbackImage": "/images/artworks/tjibaou-cultural-centre.jpg"
  },
  {
    "id": "arched_276",
    "domain": "artist_movement",
    "subCategory": "Contemporary Architecture",
    "era": "2001",
    "questionZh": "圣地亚哥·卡拉特拉瓦（Santiago Calatrava）在密尔沃基艺术博物馆（Milwaukee Art Museum）扩展工程中设计的“风之翼”（Burke Brise Soleil），其动能仿生特征是：",
    "questionEn": "Designed by Santiago Calatrava for the Milwaukee Art Museum, what kinetic bio-mechanical feature distinguishes the \"Burke Brise Soleil\"?",
    "optionsZh": [
      "由数百块固定不动的水泥预制板封死的沉重屋面",
      "由柴油引擎驱动在水面上滑行的移动式浮船展览馆",
      "模仿中世纪吊桥完全依靠手工铁链绞盘拉起的木质坡道",
      "一对由两组72片钢质遮阳肋条组成的巨大可移动机翼，展开翼展达66米，如白色巨鸟般随日照开合扇动，兼具机械动能与仿生诗意"
    ],
    "optionsEn": [
      "A static, heavy parapet cast entirely from solid precast concrete panels",
      "A floating pavilion driven across Lake Michigan by industrial diesel propellers",
      "A heavy wooden drawbridge operated manually via iron chains and winches",
      "A pair of colossal movable steel wings with 72 sun-shading fins spanning 66 meters, folding and spreading like a soaring sea bird to modulate sunlight"
    ],
    "correctAnswer": 3,
    "explanationZh": "卡拉特拉瓦兼具建筑师与结构工程师身份，以鸟翼骨骼为灵感，设计了重达90吨但轻盈展开的活动钢质遮阳翼，白天随光线展翅遮阳，夜晚或暴风雨时合拢，将动态机械工程提升为雕塑艺术。",
    "explanationEn": "Calatrava designed an operable avian sunscreen consisting of 72 steel fins with a 217-foot wingspan, which opens and closes gracefully over Lake Michigan to regulate natural daylight.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArchitecture",
      "Calatrava",
      "MilwaukeeArtMuseum",
      "Kinetic"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_277",
    "domain": "artist_movement",
    "subCategory": "Parametric Urbanism & Contemporary Tower Form",
    "era": "contemporary",
    "questionZh": "扎哈·哈迪德（Zaha Hadid）在米兰CityLife总体规划中设计的忠利保险塔（Torre Generali / Lo Storto，2014-2017）与流线公寓群，其参数化建筑创举在于：",
    "questionEn": "In her Milan CityLife masterplan, what parametric design breakthrough characterizes Zaha Hadid's Generali Tower (\"Lo Storto\", 2014–2017) and fluid residential complex?",
    "optionsZh": [
      "塔楼自底向上通过每层楼板微幅渐进旋转（The Twisted Tower），呈现优雅动态的垂直螺旋扭转曲率，住宅阳台则如起伏波浪般交织层叠，打破传统方盒子规整僵局",
      "采用严格规整对称的正交立方体玻璃盒子，四面安装完全均质且不可开启的铝合金百叶",
      "外立面完全仿照中世纪米兰斯福尔扎城堡的红砖齿状雉堞与厚重实心防御塔楼",
      "使用未经过任何加工的原木圆木绑扎搭建出原始帐篷式的游牧坡屋顶"
    ],
    "optionsEn": [
      "A 44-story vertical tower that smoothly twists as it ascends with incrementally rotating floorplates around a concrete core (\"The Twisted Tower\"), paired with fluid undulating balconies that dissolve rigid rectilinear geometries",
      "A strictly symmetrical orthogonal cubic glass box fitted with identical non-operable aluminum louvers on all four elevations",
      "Replicating the medieval red-brick battlements and fortified crenellations of Milan's Sforza Castle",
      "Assembling unprocessed rough timber logs into a primitive tent-like nomadic pitched roof"
    ],
    "correctAnswer": 0,
    "explanationZh": "米兰CityLife忠利塔被米兰人亲切地称为“扭曲之塔”（Lo Storto）。哈迪德团队利用先进参数化三维算法，让44层塔楼随着高度上升产生自底向上的平滑扭转形变，不仅化解了高空气流的风压荷载，更使摩天大楼在米兰天际线上呈现雕塑般的动态生命感；周围的住宅群则以蜿蜒流动的木质阳台层叠展开，荣获LEED白金级生态认证。",
    "explanationEn": "Known affectionately as 'Lo Storto' (The Twisted Tower), Hadid's 177-meter Generali Tower in Milan achieves a dramatic dynamic silhouette through advanced parametric computing, wherein floor slabs rotate incrementally around a central core as they ascend. This helical torsion effectively disrupts lateral wind vortex shedding while giving the skyscraper an organic vitality on the Milanese skyline, harmonizing with adjacent sinuous timber-clad residential ribbons.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArchitecture",
      "ZahaHadid",
      "CityLife",
      "Milan",
      "Parametricism"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Torre_Generali_CityLife_Milano.jpg/800px-Torre_Generali_CityLife_Milano.jpg",
    "fallbackImage": "/images/artworks/citylife-milan.jpg"
  },
  {
    "id": "arched_278",
    "domain": "artist_movement",
    "subCategory": "Art Nouveau",
    "era": "1893",
    "questionZh": "维克多·奥塔（Victor Horta）在布鲁塞尔设计的塔塞尔饭店（Hôtel Tassel, 1893），被公认为新艺术运动（Art Nouveau）建筑奠基作的核心突破是：",
    "questionEn": "Why is Victor Horta's Hôtel Tassel in Brussels (1893) celebrated as the seminal masterpiece inaugurating Art Nouveau architecture?",
    "optionsZh": [
      "采用厚重花岗岩雕刻严谨的古希腊罗马神庙式石雕柱廊",
      "首次将裸露锻铁工业结构与诗意有机曲线（“鞭线”/Coup de fouet）结合，让铸铁立柱如藤蔓般从地面升起并在天顶与马赛克地砖上蔓延为一体化的生命节奏",
      "彻底剔除所有线条装饰，呈现纯白平整的极简主义混凝土方块",
      "在立面上雕刻大量中世纪圣经殉道者石像"
    ],
    "optionsEn": [
      "Heavy granite masonry carving rigid ancient Greek and Roman temple porticoes",
      "Integrating exposed industrial wrought-iron structure with sinuous whiplash curves (coup de fouet), harmonizing slender iron stems with floor mosaics into total organic design",
      "Abolishing all linear ornamentation to showcase bare, white minimalist concrete blocks",
      "Adorning exterior walls with stone reliefs of medieval biblical martyr figures"
    ],
    "correctAnswer": 1,
    "explanationZh": "奥塔在塔塞尔饭店中大胆将原本藏在墙内的工业铸铁结构直接裸露并艺术化：细长铁柱在顶端绽放为藤蔓曲线，与墙壁彩绘、彩绘玻璃及马赛克地坪形成浑然一体的“总体艺术”（Gesamtkunstwerk）。",
    "explanationEn": "Horta exposed decorative wrought-iron structural elements inside an upscale townhouse, allowing slender cast-iron columns to branch into botanical \"whiplash\" curves that unified architecture and decorative arts.",
    "tags": [
      "ArtistMovement",
      "ArtNouveau",
      "Horta",
      "HotelTassel",
      "WhiplashCurve"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_279",
    "domain": "artist_movement",
    "subCategory": "Art Nouveau",
    "era": "1897 - 1898",
    "questionZh": "约瑟夫·玛丽亚·奥尔布里希（Joseph Maria Olbrich）在维也纳设计的分离派大楼（Secession Building, 1898），其顶部的标志性视觉标志是：",
    "questionEn": "Designed by Joseph Maria Olbrich in 1898, what is the iconic visual crown atop the Vienna Secession Building?",
    "optionsZh": [
      "高达百米的不锈钢尖锐避雷针",
      "高悬的古罗马青铜重型战车雕塑",
      "由约3000片镀金青铜锻造月桂树叶与果实交织而成的镂空透光“金色球形穹顶”（Golden Cabbage）",
      "高耸入云的双塔哥特式尖拱钟楼"
    ],
    "optionsEn": [
      "A hundred-meter-tall stainless steel sharp lightning spire",
      "A monumental bronze ancient Roman chariot sculpture crowning the entrance",
      "A perforated openwork sphere woven from approximately 3,000 gilded bronze laurel leaves and berries, affectionately known as the \"golden cabbage\"",
      "Twin soaring Gothic pointed-arch campanile towers"
    ],
    "correctAnswer": 2,
    "explanationZh": "维也纳分离派大楼纯白几何立方体上方，悬浮着由奥尔布里希设计的镂空镀金月桂叶金球，象征艺术青春与不朽胜利，门楣刻有分离派名言：“时代有其艺术，艺术有其自由”。",
    "explanationEn": "Olbrich crowned the stark white geometric Secession pavilion with a filigree dome of 3,000 gilded wrought-iron laurel leaves, symbolizing the triumph of creative freedom declared in the building's motto.",
    "tags": [
      "ArtistMovement",
      "ArtNouveau",
      "Olbrich",
      "SecessionBuilding",
      "Vienna"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_280",
    "domain": "artist_movement",
    "subCategory": "Art Nouveau",
    "era": "1900",
    "questionZh": "埃克托尔·吉马尔（Hector Guimard）为1900年巴黎世博会及巴黎地铁设计的地铁出入口（Métro Entrances），其工艺与形式创举是：",
    "questionEn": "Designed by Hector Guimard for the 1900 Paris World's Fair, what was the technical and formal innovation of the Parisian Métro entrances?",
    "optionsZh": [
      "用昂贵的意大利卡拉拉白大理石手工雕琢古典罗马多立克石柱",
      "全部使用木质榫卯结构仿制中国传统宫殿牌坊",
      "建造封闭式的厚重花岗岩地下掩体以防御轰炸",
      "运用工业铸铁的可塑性进行标准化模件铸造，呈现出植物根茎、蜻蜓羽翼与兰花般的有机自然形态，将现代工业装配与前卫有机美学完美结合"
    ],
    "optionsEn": [
      "Hand-carving costly Carrara marble into classical Roman Doric colonnades",
      "Using traditional wooden mortise-and-tenon joints to replicate Chinese imperial archways",
      "Erecting fortified granite underground bunkers to withstand military bombardments",
      "Standardized prefabrication in cast iron fashioned into sinuous organic stalks, dragonfly wings, and floral glass canopies, marrying mass production with Art Nouveau styling"
    ],
    "correctAnswer": 3,
    "explanationZh": "吉马尔将工业铸铁的批量预制生产同新艺术的有机自然形态结合，设计出宛若植物藤蔓与昆虫轻翼般的地铁顶棚、花苞路灯与流线字体，成为巴黎无可替代的都市美学象征。",
    "explanationEn": "Guimard designed modular interchangeable cast-iron components painted Paris green, shaping subway pavilions with plant-like curvilinear stalks and amber glass canopies that humanized underground transit.",
    "tags": [
      "ArtistMovement",
      "ArtNouveau",
      "Guimard",
      "ParisMetro",
      "CastIron"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_281",
    "domain": "artist_movement",
    "subCategory": "Expressionist Architecture",
    "era": "1914",
    "questionZh": "布鲁诺·陶特（Bruno Taut）在1914年科隆德意志制造联盟展上设计的玻璃馆（Glass Pavilion），其建筑设计所寄托的表现主义哲学追求是：",
    "questionEn": "In his famous Glass Pavilion at the 1914 Cologne Werkbund Exhibition, what Expressionist architectural philosophy did Bruno Taut manifest?",
    "optionsZh": [
      "“光线需要晶体”：通过十四面棱形双层彩色玻璃多面体穹顶与内部层叠水瀑瀑布，将玻璃作为精神启蒙、宇宙色彩感知与社会新阶层乌托邦净化的崇高物质载体",
      "证明廉价沥青与红砖最适合用来批量建造工人阶级简陋集体宿舍",
      "用完全不透光的铅板将整栋建筑包裹，制造绝对黑暗隔绝外部世界",
      "精确复原古希腊帕特农神庙的石灰石大理石列柱与浮雕山花"
    ],
    "optionsEn": [
      "\"Light requires crystal\": Utilizing a 14-sided rhombic faceted double-glass dome and a cascading interior waterfall to position glass as a mystical medium for spiritual illumination and social rebirth",
      "Demonstrating that inexpensive asphalt and red brick were optimal for mass-producing identical worker dormitories",
      "Sheathing the entire structure in opaque lead sheets to produce complete darkness disconnected from the world",
      "Faithfully reconstructing the limestone Doric colonnades and pediment reliefs of the Parthenon"
    ],
    "correctAnswer": 0,
    "explanationZh": "受表现主义诗人保罗·舍尔巴特启发，陶特坚信彩色透明玻璃具有净化人类灵魂的力量。其十四面双层玻璃穹顶内，光线经过棱镜折射并映照池水，构筑了一座绚丽通透的精神圣殿。",
    "explanationEn": "Taut's Glass Pavilion celebrated glass as a transformative spiritual and utopian material; inscribed with verses by Paul Scheerbart, its prismatic dome diffused colored sunlight over concrete terraces and waterfalls.",
    "tags": [
      "ArtistMovement",
      "Expressionism",
      "BrunoTaut",
      "GlassPavilion",
      "Utopia"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_282",
    "domain": "artist_movement",
    "subCategory": "Modernist Architecture",
    "era": "1908 - 1910",
    "questionZh": "维也纳现代建筑先驱阿道夫·洛斯（Adolf Loos）在1908年发表宣言《装饰即罪恶》（Ornament and Crime）并设计洛斯大楼（Looshaus）时，倡导的革命性主张是：",
    "questionEn": "In his landmark 1908 manifesto \"Ornament and Crime\" and his design of the Looshaus (1910) in Vienna, what radical principle did Adolf Loos proclaim?",
    "optionsZh": [
      "建筑物所有外立面必须满铺洛可可式的繁琐镀金贝壳与天使雕刻",
      "人类文化越进步，器物表面强加的手工装饰就越应被剔除；建筑应依靠真实高贵的天然材质纹理（如大理石、精美木材）与三维立体空间规划（Raumplan）来展现本质",
      "必须用廉价的石膏模型伪装成古希腊罗马神庙柱式来掩饰贫困",
      "所有窗户必须使用细密铁栏杆与深色彩绘镶嵌玻璃彻底封闭"
    ],
    "optionsEn": [
      "Every architectural facade must be saturated with elaborate Rococo gilded stuccoes and cherubs",
      "As human civilization evolves, applied ornament becomes obsolete; architecture should rely on the natural grain of fine materials and three-dimensional volumetric space planning (Raumplan)",
      "Cheaper plaster casts must fake ancient Greek and Roman orders to disguise structural poverty",
      "All windows must be sealed shut behind dense wrought-iron grilles and opaque stained glass"
    ],
    "correctAnswer": 1,
    "explanationZh": "洛斯尖锐抨击了维也纳分离派与折衷主义将精力浪费在无用的外表装饰上。他在米夏埃尔广场建造的洛斯大楼上层毫无装饰如“无眉毛建筑”，内部采用空间错层互连的“空间规划”（Raumplan）。",
    "explanationEn": "Loos argued that civilization advances by shedding superficial ornamentation. His Looshaus featured a stark plaster upper facade and a luxurious lower marble facade, organized internally via his innovative interlocking Raumplan.",
    "tags": [
      "ArtistMovement",
      "Modernism",
      "AdolfLoos",
      "OrnamentAndCrime",
      "Raumplan"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_283",
    "domain": "artist_movement",
    "subCategory": "Modernist Architecture",
    "era": "1880 - 1900",
    "questionZh": "19世纪末崛起的芝加哥建筑学派（Chicago School，以路易斯·沙利文等人为代表），为世界现代摩天大楼贡献的核心技术与形式法则是：",
    "questionEn": "Developed in the late 19th century by pioneers like Louis Sullivan, what structural technology and design philosophy defined the Chicago School of Architecture?",
    "optionsZh": [
      "采用古典木结构榫卯与圆木立柱支撑重型木瓦坡屋顶",
      "完全依靠外圈数米厚的花岗岩承重砖石墙体抵御风荷载",
      "以耐火钢框架结构（Steel Frame）彻底取代厚重砖墙承重，创造出大面积采光的“芝加哥窗”，并确立“形式永远服从功能”（Form follows function）的三段式高层立面法则",
      "在外立面满铺哥特式滴水兽与飞扶壁以表达宗教狂热"
    ],
    "optionsEn": [
      "Relying on traditional timber mortise joints and wooden posts to support heavy cedar shake roofs",
      "Exclusively using exterior multi-meter-thick solid granite masonry walls for wind resistance",
      "Replacing load-bearing masonry with fireproof steel skeletons, introducing broad three-part \"Chicago windows\", and establishing Sullivan's dictum \"form follows function\"",
      "Covering skyscraper envelopes in Gothic gargoyles and flying buttresses to convey religious fervor"
    ],
    "correctAnswer": 2,
    "explanationZh": "1871年芝加哥大火后，芝加哥学派率先应用内部耐火钢骨架，外墙不再承重，发展出中央固定大玻璃、两侧细通风扇的“芝加哥窗”；沙利文总结出摩天楼基座-身部-檐口三段式与“形式服从功能”。",
    "explanationEn": "The Chicago School pioneered internal fireproofed steel frames, freeing exterior masonry to become non-bearing skin pierced by expansive horizontal \"Chicago windows\" and organized by Sullivan's functional tripartite order.",
    "tags": [
      "ArtistMovement",
      "Modernism",
      "ChicagoSchool",
      "Sullivan",
      "SteelFrame"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_284",
    "domain": "artist_movement",
    "subCategory": "Industrial Architecture",
    "era": "1851",
    "questionZh": "约瑟夫·帕克斯顿（Joseph Paxton）为1851年伦敦第一届万国工业博览会设计的水晶宫（Crystal Palace），在建筑史上开辟新纪元的原因是：",
    "questionEn": "Why did Joseph Paxton's Crystal Palace for the 1851 Great Exhibition in London mark a historic watershed in architectural engineering?",
    "optionsZh": [
      "它是世界上第一座全部由手工雕刻卡拉拉大理石砌筑而成的宫殿",
      "它建造了跨度达两百米的木质重檐盔顶与红木回廊",
      "它完全复制了古罗马戴克里先浴场的砖石混凝土交叉拱顶",
      "帕克斯顿借鉴温室建造经验，采用标准模数化的预制铸铁立柱、锻铁桁架与机器平板玻璃，仅耗时9个月便在海德公园高效装配完成宏伟通透的巨型展馆"
    ],
    "optionsEn": [
      "It was the world's first royal palace carved entirely from solid Carrara marble by hand",
      "It erected a 200-meter span double-eaved timber roof supported by rosewood cloisters",
      "It was an archaeological replica of the Roman groin vaults of the Baths of Diocletian",
      "Drawing on greenhouse engineering, Paxton designed standardized prefabricated cast-iron pillars, wrought-iron trusses, and sheet glass, erecting the massive pavilion in Hyde Park in just nine months"
    ],
    "correctAnswer": 3,
    "explanationZh": "帕克斯顿原本是园艺师，他将王莲叶脉网状结构与维多利亚时代玻璃温室技术结合，运用标准化预制金属构件进行快速干式现场拼装，彻底颠覆了数千年来湿法砖石砌造的传统建筑范式。",
    "explanationEn": "Paxton adapted greenhouse engineering and biological rib structures of Victoria amazonica water lilies to erect a vast modular iron-and-glass prefabricated hall in Hyde Park, demonstrating the triumph of industrial prefabrication.",
    "tags": [
      "ArtistMovement",
      "IndustrialArchitecture",
      "Paxton",
      "CrystalPalace",
      "Prefabrication"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_285",
    "domain": "artist_movement",
    "subCategory": "Industrial Architecture",
    "era": "1889",
    "questionZh": "居斯塔夫·埃菲尔（Gustave Eiffel）为1889年巴黎世界博览会建造的高达300米的埃菲尔铁塔，其结构工程上的划时代特征是：",
    "questionEn": "Engineered by Gustave Eiffel for the 1889 Paris Exposition Universelle, what revolutionary structural feature defined the 300-meter Eiffel Tower?",
    "optionsZh": [
      "完全使用锻铁（Puddled iron）制作的镂空桁架晶格结构，四个巨大的四肢抛物线弧形底座顺应狂风风压曲线，将金属受拉与受压计算的纯粹工程理智转化为现代纪念碑",
      "外立面包裹厚重的巴洛克式镀金大理石浮雕以遮掩内部金属",
      "由中央一根直径五十米的实心铸铁圆柱自地底直接顶起整座铁塔",
      "在每一层塔楼建造了仿古罗马斗兽场的圆拱砖石券廊"
    ],
    "optionsEn": [
      "A latticed puddled-iron truss structure designed with parabolic flared legs calibrated to mathematical wind-pressure vectors, turning pure structural mechanics into a modern monumental icon",
      "Sheathing the iron framework entirely behind heavy Baroque gilded marble revetments",
      "Supporting the entire structure on a single, solid 50-meter-wide central cast-iron pillar",
      "Framing each observation platform with tiered masonry arcades mimicking the Roman Colosseum"
    ],
    "correctAnswer": 0,
    "explanationZh": "埃菲尔铁塔摈弃了任何历史主义外衣，用1.8万个熟铁构件和250万个热铆钉构建出极致轻盈的镂空晶格。其立面优美弯曲的轮廓是由精确的风荷载数学方程决定，展现了工业工程理性的崇高。",
    "explanationEn": "Eiffel constructed the tower from 18,000 puddled-iron lattice pieces fastened with 2.5 million rivets; its parabolic upward taper was mathematically calculated to resist wind shear, inaugurating the aesthetic of raw engineering.",
    "tags": [
      "ArtistMovement",
      "IndustrialArchitecture",
      "Eiffel",
      "EiffelTower",
      "PuddledIron"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_286",
    "domain": "artist_movement",
    "subCategory": "High-Tech Architecture",
    "era": "1971 - 1977",
    "questionZh": "伦佐·皮亚诺（Renzo Piano）与理查德·罗杰斯设计的巴黎蓬皮杜国家艺术文化中心（Centre Pompidou），其“内胆外翻”（Inside-out）高技派手法的核心体现是：",
    "questionEn": "Designed by Renzo Piano and Richard Rogers, what defining High-Tech design strategy is realized in the Centre Pompidou in Paris (1971–1977)?",
    "optionsZh": [
      "所有承重钢柱与电梯完全隐藏在三米厚的吸音石膏板墙壁深处",
      "将传统藏在建筑内部的走道、滚梯及所有机械设备管线全部移至建筑外部立面，并以鲜艳功能色编码（蓝、绿、黄、红），彻底释放室内50米无柱灵活自由展厅",
      "在巴黎历史市中心建造一座完全不透光的巨大古埃及式石砌金字塔",
      "采用完全对称的维多利亚时代铸铁温室造型与繁复花饰"
    ],
    "optionsEn": [
      "Concealing all structural steel columns and elevators deep within 3-meter-thick plasterboard walls",
      "Moving all circulation escalators, structural gerberettes, and color-coded mechanical ducts (blue air, green water, yellow power, red circulation) to the exterior, leaving huge column-free interior floor plates",
      "Constructing a windowless, monolithic ancient Egyptian stone pyramid in historic Paris",
      "Copying symmetrical Victorian botanical iron greenhouses covered in floral filigree"
    ],
    "correctAnswer": 1,
    "explanationZh": "蓬皮杜中心将铸钢大悬臂（Gerberettes）与设备管道搬到外立面：蓝色代表空气管道、绿色代表给排水、黄色代表电力系统、红色代表电梯与交通。这不仅创造了机器狂欢立面，更让室内获得完全无阻隔的巨大自由展区。",
    "explanationEn": "Piano and Rogers placed structural gerberettes, mechanical ducts, and the diagonal red glass caterpillar escalator on the exterior facade, creating an open, flexible, column-free interior \"cultural machine\".",
    "tags": [
      "ArtistMovement",
      "HighTech",
      "RenzoPiano",
      "Pompidou",
      "InsideOut"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_287",
    "domain": "artist_movement",
    "subCategory": "Contemporary Architecture",
    "era": "2002",
    "questionZh": "伦佐·皮亚诺在罗马设计的音乐公园礼堂（Auditorium Parco della Musica, 2002），其建筑集群独特的造型构想与历史应对是：",
    "questionEn": "In his design of Rome's Auditorium Parco della Musica (2002), what is the distinctive sculptural imagery and contextual strategy of Renzo Piano's complex?",
    "optionsZh": [
      "一座单一平整的矩形玻璃幕墙综合体，将现场所有古罗马遗址就地平整销毁",
      "完全复制罗马万神庙的单一正圆形穹顶与科林斯式石雕门廊",
      "三个覆以铅皮保护层、形似巨大共鸣箱或甲虫甲壳的独立悬浮礼堂，环抱露天圆形露天剧场，并在建造中巧妙保护并融合了施工时发掘的公元前古罗马庄园遗址",
      "三个相互垂直交叉的粗粝混凝土粗野主义方盒"
    ],
    "optionsEn": [
      "A monolithic rectangular glass office slab that demolished all underlying Roman archaeology",
      "An exact duplicate of the Roman Pantheon's circular rotunda and Corinthian temple porch",
      "Three lead-clad concert halls resembling giant wooden lutes or beetle carapaces arranged around an open-air amphitheater, gracefully preserving an excavated ancient Roman villa",
      "Three intersecting raw Brutalist concrete boxes devoid of acoustic curve"
    ],
    "correctAnswer": 2,
    "explanationZh": "皮亚诺设计了三座不同规模的巨型音乐厅，覆以风化铅皮，外观如同巨大的共鸣木琴或甲虫背壳。设计环绕着中央下沉式露天剧场，同时将建设期间发掘出的古罗马庄园遗迹就地转化为博物馆，与现代音乐殿堂共生。",
    "explanationEn": "Piano grouped three giant beetle-shaped, lead-clad auditoriums around a central sunken plaza, halting excavation during foundation work to integrate an excavated 6th-century BC Roman suburban villa into the public complex.",
    "tags": [
      "ArtistMovement",
      "ContemporaryArchitecture",
      "RenzoPiano",
      "AuditoriumRome",
      "Acoustics"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_288",
    "domain": "artist_movement",
    "subCategory": "Expressionist Architecture",
    "era": "1883 - 1926",
    "questionZh": "安东尼·高迪（Antoni Gaudí）在圣家族大教堂（Sagrada Família）室内中殿结构设计中，开辟的革命性仿生力学体系是：",
    "questionEn": "In his structural design for the nave of the Sagrada Família, what revolutionary biomechanical system did Antoni Gaudí invent?",
    "optionsZh": [
      "严格的正交九宫格钢筋混凝土平板无梁楼盖",
      "采用古典罗马多立克圆柱并以巨型实心水平石梁连接",
      "用高强度钢索从室外悬索塔向内拉吊整个中殿屋顶",
      "通过悬链线（Catenary curve）悬挂模型实验，设计出多边形螺旋倾斜立柱，立柱在上方如树枝般分叉交错，将拱顶重力直接顺畅导向地面，创造出宛若森林枝叶遮阳的纯净光影"
    ],
    "optionsEn": [
      "A rigid orthogonal concrete flat-slab floor system with standard drop panels",
      "Classical Roman Doric stone columns connected by solid horizontal limestone architraves",
      "Suspending the entire stone nave vault from exterior steel pylon stay cables",
      "Calculating catenary curves via inverted hanging chain models to craft inclined helical columns that branch upward like living trees, channeling vault loads directly into foundations"
    ],
    "correctAnswer": 3,
    "explanationZh": "高迪摒弃了中世纪哥特建筑需要厚重外部飞扶壁的弱点，使用悬链线模型计算重力受压路线。中殿石柱在空中如树木般分支分叉，与双曲抛物面拱顶相接，形成无飞扶壁且自平衡的有机结构森林。",
    "explanationEn": "Gaudí replaced Gothic flying buttresses with self-equilibrating branching columns based on catenary physics. Slender piers branch upward like trees to meet ruled-surface vaults, bathing the sacred forest in colored light.",
    "tags": [
      "ArtistMovement",
      "Expressionism",
      "Gaudi",
      "SagradaFamilia",
      "Catenary"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_289",
    "domain": "artist_movement",
    "subCategory": "Expressionist Architecture",
    "era": "1904 - 1906",
    "questionZh": "安东尼·高迪改建的巴特罗之家（Casa Batlló, 1904-1906），其外立面在象征主题与材料工艺上的核心亮点是：",
    "questionEn": "In Antoni Gaudí's remodeling of the Casa Batlló in Barcelona (1904–1906), what is the central thematic symbolism and artisanal hallmark of the facade?",
    "optionsZh": [
      "以加泰罗尼亚守护圣徒圣乔治屠龙为传说背景，屋顶如同覆盖彩色鳞甲的巨龙脊背，窗棂与阳台如骨骼与骷髅面具，立面满铺如莫奈睡莲般色彩斑斓的碎瓷拼贴（Trencadís）",
      "完全模仿法国凡尔赛宫镜厅的直线对称雕刻与镀金爱奥尼柱式",
      "全部用无反光的生铁平板焊死形成的冷酷工业立方体",
      "由数百块规整的单色灰色预制水泥砖密缝铺砌而成"
    ],
    "optionsEn": [
      "Symbolizing the legend of Saint George slaying the dragon: a roof curving like a dragon's scaly spine, bone-like stone mullions and mask-like balconies, and shimmering trencadís tile mosaics",
      "Strictly imitating the linear symmetry and gilded Ionic orders of the Hall of Mirrors at Versailles",
      "A grim industrial cube welded entirely from non-reflective raw iron sheets",
      "Uniform grey concrete cinderblocks assembled with precise geometric mortar joints"
    ],
    "correctAnswer": 0,
    "explanationZh": "巴特罗之家俗称“骨头之家”与“龙之家”。高迪用生动的碎瓷拼贴（Trencadís）与玻璃碎片让墙面如波光粼粼的湖水，屋脊弓起的陶瓦巨龙与圣乔治十字剑塔楼共同谱写了加泰罗尼亚民族史诗。",
    "explanationEn": "Casa Batlló materializes Saint George's triumph over the dragon: its undulating roof mimics iridescent dragon scales, balconies resemble theatrical skull masks, and the facade glistens with polychrome trencadís glass shards.",
    "tags": [
      "ArtistMovement",
      "Expressionism",
      "Gaudi",
      "CasaBatllo",
      "Trencadis"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_290",
    "domain": "artist_movement",
    "subCategory": "Expressionist Architecture",
    "era": "1900 - 1914",
    "questionZh": "安东尼·高迪在巴塞罗那设计的奎尔公园（Park Güell），其中心大露台的多彩蜿蜒波浪长椅具有怎样的工学与美学造诣？",
    "questionEn": "In Park Güell in Barcelona, what human-centered engineering and aesthetic genius distinguishes Antoni Gaudí's undulating serpentine bench?",
    "optionsZh": [
      "长椅表面完全由锋利尖锐的未经打磨花岗岩石块拼成以防止游客久坐",
      "长椅依照真实人体脊柱后背曲线模压贴合设计，表面由工匠用废弃陶瓷片与破碎酒瓶拼出永不重复的有机图案，并兼作汇集雨水排入下方多柱厅地下水库的集水檐口",
      "长椅由纯金板铸造并通电发热以供冬季取暖",
      "长椅被设计为绝对笔直的四方形石灰石长条"
    ],
    "optionsEn": [
      "Crafted from sharp, jagged unpolished granite chunks specifically designed to deter visitors from sitting",
      "Ergonomically contoured to fit the human spine, clad in waste ceramic and glass shards (trencadís), and engineered as a gutter collecting rainwater for the hypostyle cistern below",
      "Cast from solid gold plates wired with electric coils for winter heating",
      "Formed as perfectly rigid, unyielding rectilinear limestone blocks"
    ],
    "correctAnswer": 1,
    "explanationZh": "高迪让工人坐在湿泥巴上测出人体脊椎最舒适的倾斜曲线，以此浇筑出蜿蜒如蛇舞的连续长椅。长椅外覆彩色碎瓷（Trencadís），椅背同时是露台边缘排水沟，收集雨水导向地下蓄水池供全园灌溉。",
    "explanationEn": "Gaudí shaped the serpentine bench by seating a workman in wet plaster to mold an ergonomic curve. Clad in recycled ceramic trencadís, the continuous balustrade funnels stormwater into an underground cistern beneath the Hypostyle Hall.",
    "tags": [
      "ArtistMovement",
      "Expressionism",
      "Gaudi",
      "ParkGuell",
      "Ergonomics"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_291",
    "domain": "artist_movement",
    "subCategory": "Futurism",
    "era": "1911",
    "questionZh": "未来主义代表画家卡洛·卡拉（Carlo Carrà）在1911年创作的名作《无政府主义者加利的葬礼》（The Funeral of the Anarchist Galli），其画面力量感的核心表现手法是：",
    "questionEn": "In his landmark 1911 Futurist canvas \"The Funeral of the Anarchist Galli\", how did Carlo Carrà convey explosive political violence and dynamic force?",
    "optionsZh": [
      "以精致柔和的古典素描描绘坐在摇椅上的安详老妇人",
      "严格遵从文艺复兴单点透视法排列静止不动的仪仗队人物",
      "运用剧烈倾斜的对角力量线（Lines of Force）、交错挥舞的警棍与旗帜，以及红黑交织的炽烈色彩，使观者仿佛直接被卷入暴乱冲突与警民厮杀的动态漩涡中心",
      "用三原色方块拼接出静止的荷兰农田航拍图"
    ],
    "optionsEn": [
      "Delicate, muted academic drawing depicting an elderly woman knitting peacefully in an armchair",
      "Strict single-point Renaissance perspective arranging a motionless ceremonial cortege",
      "Dynamic slashing diagonal lines of force, clashing truncheons, fluttering banners, and searing red-and-black tones thrusting the viewer into the chaotic core of a violent street battle",
      "Orthogonal primary-color geometric tiles depicting a tranquil Dutch aerial landscape"
    ],
    "correctAnswer": 2,
    "explanationZh": "卡拉曾亲眼目睹加利葬礼演变为罢工工人与骑警的血腥冲突。他在画中打碎静止透视，用激进交错的尖锐斜线与奔涌红色，将马蹄践踏、呐喊与暴力的时间动能一次性引爆于画布上。",
    "explanationEn": "Having witnessed the riot at Galli's 1904 funeral, Carrà broke pictorial stillness with aggressive centrifugal diagonals and fractured planes of red and black, placing the spectator at the kinetic center of political combat.",
    "tags": [
      "ArtistMovement",
      "Futurism",
      "Carra",
      "FuneralOfGalli",
      "LinesOfForce"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_292",
    "domain": "artist_movement",
    "subCategory": "Metaphysics",
    "era": "1918",
    "questionZh": "乔治·德·基里科在形而上画派标志作《不安的缪斯》（The Disquieting Muses, 1918）中，构筑荒诞与神秘张力的方法是：",
    "questionEn": "In his seminal Metaphysical canvas \"The Disquieting Muses\" (1918), how does Giorgio de Chirico produce uncanny and melancholic psychological tension?",
    "optionsZh": [
      "画满喧嚣沸腾的未来主义工厂车间与赛车疾驰尾气",
      "完全使用印象派户外抓拍瞬息万变的光影反光",
      "用摄影写实手法精准还原古罗马角斗士格斗的血腥现场",
      "前景舞台上伫立着披着古典长袍却装有缝纫假人躯干与圆柱石膏头的无面缪斯雕像，地面散落着儿童几何积木与玩具面具，背景是费拉拉城堡与落日拉长的深沉长影"
    ],
    "optionsEn": [
      "Depicting a roaring Futurist assembly line choked by racing car exhaust",
      "Applying Impressionist plein-air brushwork to capture fleeting solar refractions",
      "Photo-realistically reconstructing the gore of Roman gladiator combat in an arena",
      "Stationing faceless classical mannequins with drafting tools on a tilted wooden stage, juxtaposed with children's geometric toys against Ferrara's red castle in eerie late-afternoon shadow"
    ],
    "correctAnswer": 3,
    "explanationZh": "基里科在画中将古典悲剧缪斯与工业假人拼接在一起，木质地板倾斜如戏剧舞台，地面散落彩色几何木块，远方费拉拉红砖城堡静止伫立，构筑出凝固、神秘而令人不安的超现实梦境空间。",
    "explanationEn": "De Chirico combined classical statues, faceless tailor mannequins, and mathematical props on a theatrical piazza floor against Ferrara's Este castle, freezing time in an uncanny, melancholic twilight.",
    "tags": [
      "ArtistMovement",
      "Metaphysics",
      "DeChirico",
      "DisquietingMuses",
      "Ferrara"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_293",
    "domain": "artist_movement",
    "subCategory": "De Stijl",
    "era": "1926 - 1928",
    "questionZh": "特奥·范·杜斯堡在改造法国斯特拉斯堡奥贝特咖啡馆（Café de L'Aubette, 1926-1928）时，践行其“要素主义”（Elementarism）的设计策略是：",
    "questionEn": "In redesigning the interior of the Café de L'Aubette in Strasbourg (1926–1928), what design strategy realized Theo van Doesburg's \"Elementarism\"?",
    "optionsZh": [
      "将天花板与墙壁的红、黄、蓝、黑、白矩形色块全盘旋转45度形成强烈倾斜的对角线浮雕，让动态色彩平面跨越建筑转角，打破原有房间静止的沉闷方正感",
      "满贴金色拜占庭宗教马赛克并悬挂古典洛可可水晶大吊灯",
      "在室内开凿人造钟乳石溶洞以模仿史前穴居环境",
      "严格遵从蒙德里安绝对不可使用斜线的纯正交直角禁令"
    ],
    "optionsEn": [
      "Tilting rectangular planes of primary colors at dynamic 45-degree angles across walls and ceilings, allowing color relief to counteract the static architectural box",
      "Covering every surface in gilded Byzantine mosaics under elaborate Rococo crystal chandeliers",
      "Carving artificial stalactite caves to evoke primitive subterranean dwellings",
      "Strictly obeying Mondrian's absolute prohibition against diagonal lines"
    ],
    "correctAnswer": 0,
    "explanationZh": "在奥贝特咖啡馆电影院与舞厅中，范·杜斯堡将原色构图以45度角铺展在三维墙顶交界处。斜向流动的色彩不仅赋予空间极大的视觉动能，更实现了绘画、建筑与灯光家具融为一体的总体造型。",
    "explanationEn": "Van Doesburg rotated his primary-color compositional grid by 45 degrees across the walls and ceilings of the Aubette cinema-dancehall, animating three-dimensional space with Elementarist diagonal dynamism.",
    "tags": [
      "ArtistMovement",
      "DeStijl",
      "VanDoesburg",
      "Aubette",
      "Elementarism"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_294",
    "domain": "artist_movement",
    "subCategory": "De Stijl",
    "era": "1942 - 1943",
    "questionZh": "皮特·蒙德里安流亡纽约时期创作的绝笔杰作《百老汇爵士乐》（Broadway Boogie Woogie, 1942-1943），其形式语言较其早期风格派画作的最大突破是：",
    "questionEn": "Painted during his wartime exile in New York, what key visual shift distinguishes Piet Mondrian's masterpiece \"Broadway Boogie Woogie\" (1942–1943)?",
    "optionsZh": [
      "重新引入文艺复兴严密的空气透视法与人物肖像写生",
      "彻底舍弃了以往标志性的黑色粗黑网格线，改用由红、蓝、灰等原色细碎小方块交替闪烁的黄色线条网格，节奏如纽约时代广场霓虹车流与爵士乐切分音般跃动",
      "转而使用狂乱飞溅的黑白泼墨表现个人极度绝望的战时心境",
      "完全用圆圈与椭圆曲线取代以往所有的水平线与垂直线"
    ],
    "optionsEn": [
      "Reintroducing Renaissance aerial perspective and naturalistic portrait studies",
      "Completely abandoning his traditional black grid lines, replacing them with vibrant yellow bands interrupted by pulsating red, blue, and grey blocks that syncopate like Broadway neon and jazz",
      "Adopting spontaneous black-and-white splatter painting to convey wartime despair",
      "Replacing horizontal and vertical axes entirely with concentric circles and ellipses"
    ],
    "correctAnswer": 1,
    "explanationZh": "蒙德里安在纽约被摩天大楼纵横街道、闪烁车流与布吉乌吉爵士乐感染，毅然抛弃了统治其画风数十年的黑色边界线，用跳跃的原色马赛克色块构建网格，赋予新造型主义无与伦比的现代都市音乐律动。",
    "explanationEn": "Inspired by the pulsing grid of Manhattan, neon billboards, and syncopated boogie-woogie rhythms, Mondrian eliminated black lines, constructing a vibrating optical grid of primary-colored pulses.",
    "tags": [
      "ArtistMovement",
      "DeStijl",
      "Mondrian",
      "BroadwayBoogieWoogie",
      "Jazz"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_295",
    "domain": "artist_movement",
    "subCategory": "Dadaism",
    "era": "1915 - 1923",
    "questionZh": "马塞尔·杜尚耗时八年创作的未完成观念杰作《新娘甚至被光棍们剥光了衣服》（大玻璃, 1915-1923），其物质媒介与图像哲学是：",
    "questionEn": "Executed between 1915 and 1923 on two giant glass plates, what is the conceptual apparatus of Marcel Duchamp's \"The Bride Stripped Bare by Her Bachelors, Even\" (The Large Glass)?",
    "optionsZh": [
      "一幅用昂贵法国皇家金箔装饰在天花板上的传统宗教湿壁画",
      "由精密电脑控制不断变色的巨型霓虹灯商业招牌",
      "在两块夹胶双层透明玻璃之间，以铅丝、铅箔、油彩、清漆甚至积累的灰尘制成神秘机械图形，上下分割为天界“新娘”与下界九个制服“光棍机器”，探讨欲望的荒谬传动",
      "用大理石整块雕刻而成的维纳斯与阿波罗神像"
    ],
    "optionsEn": [
      "A traditional religious fresco painted on a chapel ceiling with real French gold leaf",
      "A computerized neon billboard changing colors continuously in commercial plazas",
      "An enigmatic mechanical diagram rendered with lead wire, foil, oil paint, and studio dust sandwiched between glass panes, splitting Bride and Bachelors into a futile engine of erotic desire",
      "Monumental statues of Venus and Apollo hand-carved from a single block of marble"
    ],
    "correctAnswer": 2,
    "explanationZh": "《大玻璃》彻底颠覆了画布载体。杜尚使用铅丝与灰尘粘附于玻璃上，让真实展厅背景穿透作品。上方的新娘悬浮在云端，下方的九个制服光棍通过磨巧克力机等荒诞机械传递欲望，成为20世纪最玄奥的哲学寓言。",
    "explanationEn": "The Large Glass is an enigmatic allegorical machinery fabricated from lead wire and silver leaf between glass panels, representing the bride in the upper domain suspended above the futile bachelor machines below.",
    "tags": [
      "ArtistMovement",
      "Dadaism",
      "Duchamp",
      "TheLargeGlass",
      "Concept"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_296",
    "domain": "artist_movement",
    "subCategory": "Dadaism",
    "era": "1924",
    "questionZh": "曼·雷（Man Ray）在1924年创作的达达与超现实主义标志性摄影杰作《安格尔的小提琴》（Le Violon d'Ingres），其制造荒诞诗意与智性机锋的核心手法是：",
    "questionEn": "In his iconic 1924 Dada/Surrealist photographic masterpiece 'Le Violon d'Ingres', what subversive visual manipulation did Man Ray employ?",
    "optionsZh": [
      "在一张老式打字机手稿边缘用胶水粘满碎玻璃与黑色蕾丝",
      "将一把真正的小提琴用石膏完全包裹封死并放置于沙漠之中",
      "在暗房中对显影液进行多次化学加热使女性肖像面部完全溶解模糊",
      "拍摄情人蒙帕纳斯的吉吉（Kiki）优雅的裸背，并在其背部两侧用墨水精心手绘了两个大提琴/小提琴f形音孔，将女性的人体躯干巧妙异化为一件可供演奏的乐器与现成品符号"
    ],
    "optionsEn": [
      "Gluing shattered mirror fragments and black lace along the edges of an antique typewriter manuscript",
      "Enveloping an authentic classical violin completely in heavy plaster and placing it in a barren desert",
      "Chemically overheating darkroom developer fluid to completely dissolve and blur a woman's facial features",
      "Photographing the elegant bare back of model Kiki de Montparnasse and hand-painting two violin f-holes onto her skin, transforming the female body into a playable musical instrument and an autonomous readymade signifier"
    ],
    "correctAnswer": 3,
    "explanationZh": "曼·雷在《安格尔的小提琴》（Le Violon d'Ingres，1924）中，化用了法国新古典主义画派大师安格尔闲暇酷爱拉小提琴的典故（法语俚语'violon d'Ingres'指业余癖好或副业）。他将模特吉吉（Kiki）的腰臀轮廓视作乐器琴箱，添画两个黑墨水f形音孔，打破了传统学院派人体摄影的纯洁性，将达达主义对现成符号的移用与超现实主义对潜意识欲望的探索凝结在一幅摄影之中。",
    "explanationEn": "Man Ray's 'Le Violon d'Ingres' (1924) visualizes the French popular idiom referring to a hobby, drawing upon French painter Ingres's fondness for violin playing. By painting f-holes onto Kiki de Montparnasse's printed back, Man Ray transformed an idealized female nude into a surreal hybrid object, embodying Dada wit and Surrealist erotics.",
    "tags": [
      "ArtistMovement",
      "Dadaism",
      "Surrealism",
      "ManRay",
      "ViolonDIngres"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_297",
    "domain": "artist_movement",
    "subCategory": "Surrealism",
    "era": "1931",
    "questionZh": "萨尔瓦多·达利（Salvador Dalí）的名作《记忆的永恒》（The Persistence of Memory, 1931），画中瘫软融化的时钟形象其深层心理学内涵是：",
    "questionEn": "In Salvador Dalí's masterpiece \"The Persistence of Memory\" (1931), what is the Freudian and philosophical significance of the melting pocket watches?",
    "optionsZh": [
      "用“柔软”对抗“坚硬”，将冷酷客观、机械滴答的物理牛顿时间彻底解构为在潜意识、梦境与记忆重力下软化瘫靡的主观心理时间，背景烘托利加特港寂寥海景",
      "呼吁工人们砸毁工厂打卡计时器以发动无产阶级暴力革命",
      "为一家瑞士钟表公司设计的新式可折叠橡胶防水手表广告宣传画",
      "精确记录日食发生时大气温湿度对金属热胀冷缩物理效应的科学绘图"
    ],
    "optionsEn": [
      "Juxtaposing soft and hard matter to dismantle rigid, mechanical Newtonian time into malleable subjective dream-time across a desolate Port Lligat landscape",
      "Calling upon industrial factory workers to smash mechanical clock-punchers in class revolt",
      "Designing a commercial advertisement for a Swiss manufacturer producing bendable rubber wristwatches",
      "A scientific illustration tracking thermal expansion of watch springs during a total solar eclipse"
    ],
    "correctAnswer": 0,
    "explanationZh": "达利运用其“偏执狂批判法”，灵感源于融化的卡门培尔奶酪。瘫软挂在枯树枝与怪异面孔上的钟表，彻底瓦解了机械时间的绝对确定性，展现了梦境中时间流淌的相对性与不可逆的腐朽消亡。",
    "explanationEn": "Inspired by melting Camembert cheese, Dalí materialized subjective psychological time: mechanical watches turn flaccid and decay under swarming ants amidst the stark coastal landscape of Port Lligat.",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Dali",
      "PersistenceOfMemory",
      "MeltingClocks"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_298",
    "domain": "artist_movement",
    "subCategory": "Surrealism",
    "era": "1929",
    "questionZh": "雷内·马格里特在名作《图像的背叛》（The Treachery of Images, 1929）中题写“这不是一只烟斗”（Ceci n'est pas une pipe），揭示的核心哲学命题是：",
    "questionEn": "In René Magritte's painting \"The Treachery of Images\" (1929), what profound linguistic and epistemological paradox does the inscription \"Ceci n'est pas une pipe\" interrogate?",
    "optionsZh": [
      "指出画中的物体实际上是一个伪装成烟斗形状的手枪暗器",
      "揭示视觉绘画图像、语言符号与客观现实实体三者之间不可逾越的鸿沟：画布上的油彩图像只是一幅图像，你无法往里面填装烟丝点燃，文字与图像对真实的再现始终是一种虚拟约定",
      "讽刺现代烟草工业对市民身体健康造成的慢性危害",
      "证明艺术家的写实技艺远远落后于高清晰度数码彩色摄影机"
    ],
    "optionsEn": [
      "Revealing that the object depicted is actually an assassin's pistol cleverly disguised as a briar pipe",
      "Interrogating the irreconcilable gap between visual sign, linguistic signifier, and real object: you cannot smoke a painted representation, exposing the illusionistic conventions of painting",
      "Denouncing the public health hazards of commercial tobacco manufacturing",
      "Arguing that fine oil painting was technically inferior to high-resolution color photography"
    ],
    "correctAnswer": 1,
    "explanationZh": "马格里特以教科书般冷峻写实的手法画了一只烟斗，却在下方写明“这不是烟斗”。这是对传统写实艺术再现神话的尖锐解构：画中的烟斗绝非能装烟丝的实体烟斗，揭示了符号、图像与实在之间的断裂。",
    "explanationEn": "Magritte pointed out the fundamental truth that a painting of an apple or a pipe is merely paint on canvas, not the tactile object itself, challenging the viewer's unquestioning belief in visual representations.",
    "tags": [
      "ArtistMovement",
      "Surrealism",
      "Magritte",
      "TreacheryOfImages",
      "Epistemology"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_299",
    "domain": "artist_movement",
    "subCategory": "Italian Rationalism",
    "era": "1934 - 1957",
    "questionZh": "路易吉·菲吉尼与吉诺·波利尼（Figini & Pollini）为奥利维蒂（Olivetti）公司在伊夫雷亚（Ivrea）设计的工业厂区与办公大楼，其理性主义建筑实践的卓越之处是：",
    "questionEn": "Designed by Luigi Figini and Gino Pollini for Olivetti in Ivrea, what made their industrial corporate headquarters a pinnacle of Italian Rationalism?",
    "optionsZh": [
      "完全复制中世纪罗马式修道院的回廊与无窗厚石堡垒",
      "用高耸入云的巴洛克镀金穹顶与喷泉来展示资本家的骄奢淫逸",
      "以大面积连续通透的水平钢结构玻璃幕墙、充足的自然采光与人体工学校园规划，将现代工业生产车间与人本关怀、社会福利体系深度结合，创造了人道主义理性主义工业典范",
      "建造由不规则倾斜木板拼装成的临时帐篷式集市"
    ],
    "optionsEn": [
      "Replicating the windowless masonry cloisters and defensive fortresses of medieval monasteries",
      "Erecting towering Baroque gilded cupolas and fountains to flaunt ostentatious corporate wealth",
      "Deploying continuous glass curtain walls, ergonomic daylit layouts, and community-centered campus planning to fuse industrial efficiency with progressive social welfare and humanism",
      "Erecting temporary tent-like shacks assembled haphazardly from salvaged timber planks"
    ],
    "correctAnswer": 2,
    "explanationZh": "菲吉尼与波利尼受阿德里亚诺·奥利维蒂委托，在伊夫雷亚设计了通体透亮的玻璃幕墙打字机厂房。设计将阳光、绿意引入车间，配套托儿所与工人住宅，树立了意大利理性主义服务于人本社会的最高典范。",
    "explanationEn": "Figini and Pollini designed the ICO factory in Ivrea with continuous glazed facades that flooded production lines with sunlight, partnering with Olivetti to merge Rationalist architecture with worker welfare.",
    "tags": [
      "ArtistMovement",
      "Rationalism",
      "FiginiPollini",
      "Olivetti",
      "Ivrea"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_300",
    "domain": "artist_movement",
    "subCategory": "Neo-Expressionism",
    "era": "1996",
    "questionZh": "奥斯卡·尼迈耶设计的尼泰罗伊当代艺术博物馆（Niterói Contemporary Art Museum, 1996），其飞碟状建筑与周围自然景观的戏剧化关系是：",
    "questionEn": "In Oscar Niemeyer's Niterói Contemporary Art Museum (1996), how does the saucer-shaped structure engage with its dramatic landscape setting?",
    "optionsZh": [
      "建筑被深深掩埋在地下五十米的天然洞穴中，对海湾景观毫无回应",
      "采用完全对称的标准哥特式双尖塔石雕立面正对大西洋",
      "由巨大的冷酷正方形灰色毛面混凝土墙体将海湾彻底阻隔在视线之外",
      "犹如一艘优雅的白色天外飞碟轻盈悬浮在一根直径仅9米的中央圆柱底座上，倒映在下方环形水池中，盘旋红坡道引人步入，环形全景落地玻璃窗将瓜纳巴拉湾与糖面包山全景尽收眼底"
    ],
    "optionsEn": [
      "Burying the museum fifty meters underground in a cavern with zero visual connection to the bay",
      "Erecting a twin-towered Gothic stone cathedral facade directly facing the Atlantic waves",
      "Erecting an opaque rectilinear grey concrete firewall that blocks all views of the ocean",
      "Perched like an alien saucer upon a single 9-meter cylinder above a reflecting pool, accessed via an undulating red ramp with 360-degree glass wrapping panoramic views of Guanabara Bay"
    ],
    "correctAnswer": 3,
    "explanationZh": "尼迈耶将这座现代飞碟优雅地落在悬崖岩石边缘。一条蜿蜒的鲜红色坡道如芭蕾舞带般将游人引向高台，环形玻璃长廊让浩瀚的大海与对岸里约热内卢的秀丽山峰成为展厅最宏大的活体艺术背景。",
    "explanationEn": "Niemeyer positioned the saucer-like museum atop a cliff over Guanabara Bay, where a sweeping red ramp guides visitors into a circular promenade offering breathtaking 360-degree vistas of Sugarloaf Mountain.",
    "tags": [
      "ArtistMovement",
      "NeoExpressionism",
      "Niemeyer",
      "NiteroiMuseum",
      "Landscape"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_301",
    "domain": "artist_movement",
    "subCategory": "Deconstructivism & Sculptural Form",
    "era": "contemporary",
    "questionZh": "弗兰克·盖里（Frank Gehry）与弗拉多·米卢尼奇合作设计的布拉格“跳舞的房子”（Dancing House / Ginger and Fred, 1996），其解构主义双体雕塑形式与伏尔塔瓦河畔历史街区的对话体现在：",
    "questionEn": "Designed by Frank Gehry and Vlado Milunić in Prague, how does the 'Dancing House' (Ginger and Fred, 1996) orchestrate a deconstructivist dialogue with its historic riverfront context?",
    "optionsZh": [
      "严格复制周围巴洛克与新文艺复兴民用宫殿的对称石砌柱廊，没有使用任何曲面构件",
      "建造了一座通体采用生锈耐候钢板包覆、完全封闭且无采光窗的粗野主义防御巨塔",
      "由一对相互依偎起舞的动态双塔构成：向内扭曲收腰的玻璃幕墙塔（琴吉）倚靠着外墙呈现波浪起伏流动画幅与不对称错位窗洞的混凝土塔（弗莱德），将动态雕塑张力注入伏尔塔瓦河畔古典天际线",
      "采用古罗马砖混十字交叉肋拱高耸支撑，外立面雕刻着中世纪宗教圣徒石膏像"
    ],
    "optionsEn": [
      "Strictly copying the symmetrical stone arcades of surrounding Baroque palazzi without any curved surfaces",
      "Erecting a windowless, hermetic Brutalist defensive tower clad entirely in rusted weathering Cor-Ten steel",
      "A dynamic dancing pair of intertwined towers: a waist-cinched curvilinear glass tower (Ginger) leaning against an undulating concrete tower (Fred) with wavy moldings and staggered windows, injecting kinetic sculptural vitality into the historic Vltava skyline",
      "Supported by towering ancient Roman brick-and-mortar groin vaults adorned with medieval plaster statues of saints"
    ],
    "correctAnswer": 2,
    "explanationZh": "布拉格跳舞的房子被誉为解构主义介入历史名城的代表作。盖里将好莱坞经典舞者组合“弗莱德与琴吉”（Fred and Ginger）的华尔兹舞姿转化为建筑形体：左侧轻盈通透的玻璃塔在腰部戏剧性收束，宛如舞裙旋转的女舞者依偎向右侧；右侧厚重的混凝土塔则以起伏波浪状的横向线条与错动窗格表现男舞者的沉稳旋转，实现了现代解构张力与布拉格历史街区的戏剧性共生。",
    "explanationEn": "The Dancing House is a celebrated deconstructivist intervention within a historic urban fabric. Gehry embodied Hollywood dancers Fred Astaire and Ginger Rogers in architectural form: the dynamic, waist-cinched glass tower (Ginger) leans into the undulating, wave-textured concrete tower (Fred) with staggered windows, injecting vibrant sculptural motion into Prague's historic 19th-century riverbank while respecting the surrounding cornice lines.",
    "tags": [
      "ArtistMovement",
      "Deconstructivism",
      "FrankGehry",
      "DancingHouse",
      "Prague"
    ],
    "difficulty": 2,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dancing_House_Prague_2015.jpg/800px-Dancing_House_Prague_2015.jpg",
    "fallbackImage": "/images/artworks/dancing-house.jpg"
  },
  {
    "id": "arched_302",
    "domain": "renaissance_classical",
    "subCategory": "Neoclassical Architecture",
    "era": "1717 - 1731",
    "questionZh": "菲利波·尤瓦拉（Filippo Juvarra）受萨伏依公爵委托在都灵高山之巅建造的苏佩尔加圣殿（Basilica of Superga），其古典造型与景观对话是：",
    "questionEn": "Designed by Filippo Juvarra on a mountain peak commanding Turin, what classical composition distinguishes the Basilica of Superga (1717–1731)?",
    "optionsZh": [
      "一座高达75米、带有双层鼓座的高耸古典穹顶，前方伸出一座宏伟的科林斯式深柱廊神庙门廊（Pronaos），两侧耸立两座优雅的钟楼，巍然统摄阿尔卑斯雪山与都灵全城全景",
      "完全隐藏在地下岩洞中的无窗厚壁防御掩体",
      "一座平平无奇的红砖工业流水线厂房",
      "由三个倾斜的不锈钢几何立方体随机拼贴而成的现代雕塑"
    ],
    "optionsEn": [
      "A soaring 75-meter drum-supported classical dome fronted by a monumental Corinthian temple portico (pronaos) and flanked by twin bell towers, commanding panoramic views of Turin and the Alps",
      "A subterranean, windowless defensive bomb shelter carved into alpine rock",
      "An unadorned rectilinear red-brick industrial manufacturing plant",
      "Three tilted stainless-steel cubes assembled randomly into a modern sculpture"
    ],
    "correctAnswer": 0,
    "explanationZh": "苏佩尔加圣殿是尤瓦拉将已臻成熟的晚期巴洛克与理性新古典主义融汇的杰作。雄伟的神庙门廊呼应罗马万神庙，轻灵挺拔的穹顶则吸纳了圣彼得大教堂的威严，耸立于山巅成为萨伏依王室胜利与虔敬的丰碑。",
    "explanationEn": "The Basilica of Superga sits atop a 670-meter summit; Juvarra married Pantheon-inspired temple porticoes with Michelangelo-esque double-shell domes, framing the monument against the dramatic backdrop of the Italian Alps.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Juvarra",
      "Superga",
      "Turin"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_303",
    "domain": "renaissance_classical",
    "subCategory": "Neoclassical Architecture",
    "era": "1752 - 1774",
    "questionZh": "路易吉·万维泰利（Luigi Vanvitelli）为波旁王朝设计的卡塞塔王宫（Reggia di Caserta），其规模与空间序列的巅峰成就体现在：",
    "questionEn": "Designed by Luigi Vanvitelli for the Bourbon Monarchy, what monumental scale and spatial sequence characterizes the Royal Palace of Caserta (1752–1774)?",
    "optionsZh": [
      "采用完全非对称的单层木质日式枯山水庭院",
      "一座巨大的长方形巨型宫殿，内部由两条垂直交叉的拱廊十字轴分割出四个对称的宽阔采光中庭，中央枢纽处耸立着叹为观止的八角形宏大礼仪楼梯大厅（Scalone d'Onore），向后延伸出长达3公里的壮丽阶梯瀑布水轴线",
      "全部由生铁和玻璃建造的装配式温室长廊",
      "高耸入云的中世纪木质吊桥与护城河要塞"
    ],
    "optionsEn": [
      "An asymmetrical single-story timber Japanese dry rock-garden pavilion",
      "A colossal rectangular palace footprint containing four symmetrical internal courtyards divided by a central crossroads, anchored by a vast octagonal grand ceremonial staircase (Scalone d'Onore) aligning with a 3-kilometer cascading canal parkway",
      "A prefabricated greenhouse gallery built exclusively of raw cast iron and plate glass",
      "A towering medieval fortress with wooden drawbridges and defensive moats"
    ],
    "correctAnswer": 1,
    "explanationZh": "卡塞塔王宫拥有1200间房间，其宏大的四中庭正交布局、气势磅礴的大理石双跑荣誉大楼梯，以及穿透山体由万维泰利引水渠灌溉的长达3公里喷泉水轴，展现了欧洲启蒙时代新古典皇家秩序的最高格局。",
    "explanationEn": "Caserta is one of Europe's largest royal palaces: Vanvitelli planned a vast 247x184m rectangle with four courtyards, a theatrical grand staircase hall covered by an elliptical frescoed dome, and a 3km fountain vista.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Vanvitelli",
      "Caserta",
      "RoyalPalace"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_304",
    "domain": "renaissance_classical",
    "subCategory": "Neoclassical Architecture",
    "era": "1776 - 1778",
    "questionZh": "朱塞佩·皮尔马里尼（Giuseppe Piermarini）在米兰设计的斯卡拉歌剧院（Teatro alla Scala, 1778），其建筑设计对后世歌剧院的标准贡献是：",
    "questionEn": "Designed by Giuseppe Piermarini in Milan (1776–1778), what foundational standard for world opera houses did the Teatro alla Scala establish?",
    "optionsZh": [
      "四面完全无遮拦的露天古希腊式半圆形山坡剧场",
      "完全由透明防弹玻璃浇筑而成的现代主义悬挑方盒",
      "克制严谨的新古典主义山花柱廊门廊立面，内部结合了完美的马蹄形声学平面的六层红金色包厢大厅，以及创新的下沉式木质马车避雨落客门廊",
      "完全模仿哥特式大教堂尖券肋拱与昏暗彩绘玻璃的密闭空间"
    ],
    "optionsEn": [
      "An open-air semicircular hillside amphitheater directly exposed to the elements",
      "A minimalist cantilevered box cast from bulletproof glass without interior tiers",
      "A sober Neoclassical pedimented portico facade enclosing an acoustically flawless horseshoe-shaped auditorium with six tiers of gilded private boxes and an innovative sheltered carriage drive-through",
      "A dark, vaulted crypt imitating Gothic pointed arches and opaque stained glass"
    ],
    "correctAnswer": 2,
    "explanationZh": "斯卡拉歌剧院是新古典主义公共建筑典范。皮尔马里尼设计了方便马车在雨天平稳停靠的底层外凸门廊，内部精心计算木质穹顶与马蹄形包厢角度，营造了声学清脆、聚光聚焦的意大利歌剧殿堂黄金标准。",
    "explanationEn": "La Scala established the prototype for the Italian opera house: Piermarini combined a restrained Neoclassical portico facade with a horseshoe auditorium of six tiers of boxes, celebrated for its legendary acoustics.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Piermarini",
      "LaScala",
      "Acoustics"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_305",
    "domain": "renaissance_classical",
    "subCategory": "Neoclassical Visionary Architecture",
    "era": "1775 - 1779",
    "questionZh": "法国启蒙运动空想社会主义与建筑先驱克洛德·尼古拉·勒杜（Claude-Nicolas Ledoux）在阿尔克-塞南皇家盐场（Saline Royale）规划中展现的理想城市思想是：",
    "questionEn": "In his design of the Royal Saltworks at Arc-et-Senans (1775–1779), what radical Enlightenment urban and social vision did Claude-Nicolas Ledoux formulate?",
    "optionsZh": [
      "纯粹由中世纪木栅栏围护的临时无规划游牧营地",
      "四面环以高耸花岗岩防爆防火墙的封闭式重刑监狱",
      "完全由钢筋混凝土摩天大楼组成的高密度垂直居住区",
      "将工厂与工人家园规划为完美的半圆形（进而延伸为圆形理想城市肖城/Chaux）向心布局，厂长官邸居于几何辐射核心，采用粗犷有力的交替方圆鼓石柱与“说话的建筑”（Architecture parlante）表达劳动的尊严"
    ],
    "optionsEn": [
      "A temporary nomadic camp fenced with rough medieval timber palisades",
      "A fortified maximum-security penitentiary enclosed by windowless granite blast walls",
      "A high-density vertical city fabricated entirely from reinforced concrete skyscrapers",
      "Organizing industrial production and worker housing into a semicircular radial utopian city, with the Director's House at the center, articulated by rusticated cylindrical-square columns and \"speaking architecture\" (architecture parlante)"
    ],
    "correctAnswer": 3,
    "explanationZh": "勒杜将盐场设计为半圆形放射乌托邦工业城。厂长宅邸居中象征理性与秩序，立面石柱交错雕琢方块与圆柱，墙上雕刻凝固的盐水水瓮，开创了通过纯粹几何形体表达建筑功能与社会启蒙理想的“昭意建筑”。",
    "explanationEn": "Ledoux organized Arc-et-Senans as a rational semicircular industrial commune centered on the Director's House, using primitive geometric forms and urns pouring sculpted brine to announce its industrial purpose.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Ledoux",
      "ArcEtSenans",
      "ArchitectureParlante"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_306",
    "domain": "renaissance_classical",
    "subCategory": "Neoclassical Visionary Architecture",
    "era": "1784 - 1788",
    "questionZh": "克洛德·尼古拉·勒杜在巴黎城关税卡建筑中建造的维莱特圆亭（Rotonde de la Villette, 1788），其几何纯粹性体现在：",
    "questionEn": "In his Paris tollgate pavilion known as the Rotonde de la Villette (1788), how did Claude-Nicolas Ledoux assert geometric purism?",
    "optionsZh": [
      "底层为一个朴素坚实的平顶希腊十字基座，上方升起一座巨大的纯粹圆柱形圆亭（Cylinder），圆亭外立面由沉雄厚重的多立克式塞利奥拱券（Serliana）环绕，体现纯粹立体几何的理性权威",
      "完全使用轻盈的铸铁藤蔓花草模仿新艺术运动流线",
      "立面上满贴威尼斯彩色马赛克并覆盖哥特式尖顶",
      "一座四面完全不透光的巨大古埃及式花岗岩实心方尖碑"
    ],
    "optionsEn": [
      "A bold Greek-cross square ground tier supporting a massive pure cylindrical rotunda pierced by monumental, unadorned Serlian open arcades, declaring the supremacy of pure Euclidean solids",
      "Sinuous wrought-iron organic floral whiplash stems anticipating Art Nouveau",
      "Polychrome Venetian mosaics sheltered beneath soaring Gothic spires",
      "An opaque solid granite obelisk modeled on ancient Egyptian pharaonic tombs"
    ],
    "correctAnswer": 0,
    "explanationZh": "维莱特圆亭是勒杜“税关城堡”中最宏伟的幸存杰作。他将正方基座与纯粹圆柱几何体以冷峻原始的比例拼接，不施多余雕饰，展现了法国大革命前夕纯粹几何理性压倒传统巴洛克装饰的划时代巨变。",
    "explanationEn": "The Rotonde de la Villette juxtaposes a square Greek-cross base with a colossal central cylinder encircled by austere Serlian arches, demonstrating Ledoux's revolutionary proto-modern geometry.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Ledoux",
      "RotondeDeLaVillette",
      "PureGeometry"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_307",
    "domain": "renaissance_classical",
    "subCategory": "European Neoclassical Monuments",
    "era": "1758 - 1790",
    "questionZh": "雅克-热尔曼·苏夫洛（Jacques-Germain Soufflot）设计的巴黎先贤祠（原圣热内维耶芙教堂/Panthéon），其结构工程上的历史雄心是：",
    "questionEn": "Designed by Jacques-Germain Soufflot, what ambitious architectural synthesis defines the Panthéon in Paris (originally the Church of Sainte-Geneviève)?",
    "optionsZh": [
      "建造一座完全由木桩支撑在水上的威尼斯式水上木屋",
      "完全复制埃菲尔铁塔的锻铁桁架风载计算模型",
      "将古罗马万神庙宏伟的科林斯神庙柱廊山花与巨型石砌三层穹顶，同哥特式大教堂轻盈通透的结构力学骨架与纤细支柱融合，创造出兼具古典尊贵与通透力学的启蒙圣殿",
      "纯正交红黄蓝三原色的无透视几何构成"
    ],
    "optionsEn": [
      "Erecting a timber stilt pavilion suspended entirely over water in the Venetian lagoon",
      "Duplicating Gustave Eiffel's structural wind-shear calculations in puddled iron",
      "Synthesizing the grandeur of the Roman Pantheon and its Corinthian colonnade with the lightness, structural daring, and slender supports of Gothic cathedral engineering beneath a triple-shell dome",
      "An orthogonal primary-colored non-perspectival abstract composition"
    ],
    "correctAnswer": 2,
    "explanationZh": "苏夫洛毕生致力于“将希腊建筑的优美形态与哥特建筑的轻盈结构融为一体”。巴黎先贤祠正面拥有耸立的科林斯式深门廊，内部用极其轻巧的隐蔽铁件加固柱石，穹顶三层嵌套，成为法国新古典主义的最高丰碑。",
    "explanationEn": "Soufflot sought to unite the classical beauty of Greek temple architecture with the structural lightness of Gothic vaults. The Panthéon boasts a majestic portico, slender interior piers, and a reinforced triple-shell dome.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Soufflot",
      "PantheonParis",
      "ClassicalMonuments"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_308",
    "domain": "renaissance_classical",
    "subCategory": "European Neoclassical Monuments",
    "era": "1788 - 1791",
    "questionZh": "卡尔·戈特哈德·朗汉斯（Carl Gotthard Langhans）在柏林建造的勃兰登堡门（Brandenburg Gate），其形式渊源与政治象征是：",
    "questionEn": "Commissioned by King Frederick William II and designed by Carl Gotthard Langhans, what classical model inspired the Brandenburg Gate in Berlin (1788–1791)?",
    "optionsZh": [
      "古埃及卢克索神庙的拉美西斯二世无头巨石坐像门柱",
      "完全模仿中国万里长城砖石关隘烽火台的防御瓮城",
      "由四个标准钢架玻璃方盒子构成的平顶展览馆",
      "以雅典卫城山门（Propylaea）为原型建造的宏伟希腊多立克柱廊式凯旋城门，顶部由约翰·戈特弗里德·沙多铸造胜利女神驾驭四马铜战车（Quadriga），象征普鲁士国家的和平与荣耀"
    ],
    "optionsEn": [
      "The seated headless colossi of Ramesses II at the Luxor Temple in ancient Egypt",
      "A crenellated brick beacon-tower barbican inspired by the Great Wall of China",
      "A flat-roofed temporary pavilion composed of four modular steel-framed glass boxes",
      "Modeled directly upon the Propylaea of the Athenian Acropolis, featuring monumental fluted Doric colonnades crowned by Johann Gottfried Schadow's bronze Quadriga carrying the Goddess of Victory"
    ],
    "correctAnswer": 3,
    "explanationZh": "勃兰登堡门标志着德国新古典主义（希腊复兴）的成熟。朗汉斯直接取法雅典卫城山门，由12根挺拔的多立克柱构成五条通道，顶部的四马战车傲视菩提树下大街，成为欧洲最具辨识度的和平与国家记忆地标。",
    "explanationEn": "The Brandenburg Gate was Germany's first major Greek Revival structure: Langhans adapted the Athenian Propylaea into a monumental sandstone gate crowned by Schadow's triumphant bronze Quadriga.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Langhans",
      "BrandenburgGate",
      "GreekRevival"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_309",
    "domain": "renaissance_classical",
    "subCategory": "American Neoclassical Monuments",
    "era": "1793 - 1863",
    "questionZh": "威廉·桑顿与本杰明·拉特罗布等人先后主持设计的华盛顿美国国会大厦（United States Capitol），其新古典主义造型所确立的民主建筑图腾是：",
    "questionEn": "Designed in phases by William Thornton, Benjamin Henry Latrobe, and Thomas U. Walter, what Neoclassical architectural language defines the United States Capitol?",
    "optionsZh": [
      "以中央高耸的宏大双层铸铁古典穹顶与中央大厅（Rotunda）为纽带，两侧对称延展参议院与众议院科林斯列柱翼楼，将罗马共和国古典美德与理性对称确立为现代联邦民主政体的象征基石",
      "一座完全不设窗户的粗粝混凝土粗野主义地堡",
      "由三个相互倾斜咬合的钛合金双曲面雕塑组成的解构主义建筑",
      "采用纯正交网格的红黄蓝三原色色块装饰"
    ],
    "optionsEn": [
      "A soaring monumental cast-iron classical dome and central Rotunda flanked symmetrically by the Senate and House wings fronted by colossal Corinthian porticoes, enshrining Roman republican ideals as the architectural icon of American democracy",
      "A windowless raw Brutalist bunker cast in board-marked concrete",
      "A deconstructivist composition of three intersecting titanium double-curved shells",
      "An orthogonal primary-colored abstract grid composition"
    ],
    "correctAnswer": 0,
    "explanationZh": "美国国会大厦将帕拉第奥主义与罗马公共共和建筑传统完美结合。拉特罗布引入了具有美洲本土特色的玉米与烟草叶柱头；托马斯·沃尔特后期加建的百米铸铁大穹顶，确立了全球民主立法议会建筑的经典典范。",
    "explanationEn": "The US Capitol established the visual vocabulary for democratic government: Thornton's centralized Roman scheme was expanded by Latrobe and crowned by Walter's colossal cast-iron dome and Corinthian porticoes.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "USCapitol",
      "Latrobe",
      "DemocraticMonuments"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_310",
    "domain": "renaissance_classical",
    "subCategory": "European Neoclassical Monuments",
    "era": "1823 - 1847",
    "questionZh": "罗伯特·斯默克（Robert Smirke）在伦敦设计的大英博物馆（British Museum）南立面，被誉为英国希腊复兴（Greek Revival）建筑最高代表的手法是：",
    "questionEn": "Designed by Sir Robert Smirke in London, what defining monumental feature establishes the South Facade of the British Museum as the apex of the Greek Revival in Britain?",
    "optionsZh": [
      "外立面满布中世纪尖顶钟楼与滴水兽",
      "南立面长达110米的壮观开阔柱廊，由44根严格基于雅典卫城伊瑞克提翁神庙比例的爱奥尼式石柱（Ionic Colonnade）一字排开，中央耸立宏伟的希腊神庙三角山花，庄严宣示其作为普世文明知识神殿的地位",
      "全部使用预制钢管桁架与透明有机玻璃搭建",
      "采用完全平整的灰色未粉刷混凝土平屋顶方盒子"
    ],
    "optionsEn": [
      "Facades crowded with medieval pointed spires, gargoyles, and flying buttresses",
      "A monumental 110-meter-wide colonnade of 44 colossal fluted Ionic columns modeled directly upon the Athenian Erechtheion, culminating in a magnificent central pediment over the entrance as a civic temple of universal knowledge",
      "Constructed entirely of industrial tubular steel trusses and transparent acrylic sheets",
      "An unadorned rectilinear flat-roofed grey concrete box"
    ],
    "correctAnswer": 1,
    "explanationZh": "斯默克在大英博物馆主入口立面上排布了44根高达14米的爱奥尼巨柱，基座坚固，中央山花由威斯特马考特雕刻《文明的进程》，展现了19世纪大英帝国通过纯正雅典古典柱式构建启蒙知识殿堂的雄心。",
    "explanationEn": "Smirke's British Museum facade is the grandest statement of British Greek Revival: an imposing colonnade of 44 monumental fluted Ionic columns derived from the Erechtheion sheltering Westmacott's pediment.",
    "tags": [
      "RenaissanceClassical",
      "Neoclassical",
      "Smirke",
      "BritishMuseum",
      "GreekRevival"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_311",
    "domain": "renaissance_classical",
    "subCategory": "Romanesque Architecture",
    "era": "1196 - 1216",
    "questionZh": "由雕刻建筑大师贝内德托·安泰拉米（Benedetto Antelami）在意大利帕尔马营建的帕尔马洗礼堂（Baptistery of Parma），其建筑与雕塑融合的杰出成就体现在：",
    "questionEn": "Engineered and sculpted by Benedetto Antelami, what remarkable synthesis of architecture and sculpture defines the Baptistery of Parma (1196–1216)?",
    "optionsZh": [
      "用全透明有机玻璃浇筑而成的现代主义悬挑方盒",
      "完全隐藏在地下岩洞中的无窗防御掩体",
      "八角形高耸塔状体量，通体覆以珍贵的维罗纳粉红色大理石，外立面上部由四层连续开敞的微型透空列柱敞廊（Loggias）环绕，三座大门雕刻着安泰拉米精美绝伦的《月份与农事劳动》以及救赎寓言浮雕",
      "由三个倾斜的不锈钢几何立方体随机拼贴而成的现代雕塑"
    ],
    "optionsEn": [
      "A modernist cantilevered box cast from transparent acrylic without interior columns",
      "A windowless defensive bunker hidden deep within subterranean rock caverns",
      "A soaring octagonal tower clad in pink Verona marble, girdled externally by four tiers of open trabeated loggias, anchored by Antelami's masterwork portals portraying the Labors of the Months and biblical allegories",
      "Three tilted stainless-steel cubes assembled randomly into an abstract sculpture"
    ],
    "correctAnswer": 2,
    "explanationZh": "帕尔马洗礼堂是意大利从晚期罗曼式向早期哥特式过渡的绝世孤品。安泰拉米运用粉红维罗纳大理石创造出通透轻巧的四层外挑柱廊，内部穹顶绘满圣经壁画，其亲手雕琢的各月农作石雕堪称欧洲中世纪世俗与宗教雕刻的明珠。",
    "explanationEn": "The Baptistery of Parma marks the transition from late Romanesque to Gothic: Antelami wrapped the pink Verona marble octagon in four tiers of open colonnaded galleries and carved iconic sculpted portals depicting the Labors of the Months.",
    "tags": [
      "RenaissanceClassical",
      "Romanesque",
      "ParmaBaptistery",
      "Antelami",
      "VeronaMarble"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_312",
    "domain": "renaissance_classical",
    "subCategory": "Gothic Architecture",
    "era": "1211 - 1275",
    "questionZh": "历代法兰西国王举行神圣加冕典礼的兰斯主教座堂（Notre-Dame de Reims），其西立面在哥特雕塑与窗棂艺术上的巅峰造诣是：",
    "questionEn": "As the sacred coronation site of the Kings of France, what artistic milestone was achieved on the west facade of Reims Cathedral (1211–1275)?",
    "optionsZh": [
      "完全不采用任何雕像，保持纯粹光滑的工业水泥立面",
      "采用完全对称的红砖砌筑伊斯兰八角宣礼塔",
      "整栋建筑由透明钢化玻璃板无缝粘接拼接而成",
      "开创性地将传统门楣实心石刻山花替换为通透璀璨的彩色玻璃玫瑰花窗，西立面雕刻了包括著名的《微笑天使》（L'Ange au Sourire）在内的2300多尊生动圆雕，人物衣褶流丽生动，充满古典罗马雕塑的人文复兴回响"
    ],
    "optionsEn": [
      "Rejecting all figurative sculpture in favor of an unadorned industrial cement envelope",
      "Symmetrical red-brick octagonal minarets derived from Moorish Andalusia",
      "A frameless structure constructed entirely of structural plate glass sheets bonded with silicone",
      "Replacing traditional solid stone tympanums with radiant stained-glass rose windows, adorned by over 2,300 sculptures including the famous \"Smiling Angel\" (L'Ange au Sourire) whose classical drapery anticipated the Renaissance"
    ],
    "correctAnswer": 3,
    "explanationZh": "兰斯大教堂是法国辐射哥特式（Rayonnant）雕塑王冠。正门门楣破天荒地开凿为透光的玫瑰花窗，中央大门旁的微笑天使容颜甜美，圣母探访群雕衣褶如古罗马大理石像般优雅流动，展现了中世纪人文精神的苏醒。",
    "explanationEn": "Reims Cathedral represents the pinnacle of Gothic sculptural humanism: its tympanums are filled with stained-glass rose windows, while exterior portals feature lifelike masterpieces like the Smiling Angel and the classical Visitation group.",
    "tags": [
      "RenaissanceClassical",
      "Gothic",
      "ReimsCathedral",
      "SmilingAngel",
      "Coronation"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_313",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1419 - 1445",
    "questionZh": "菲利波·布鲁内莱斯基受丝绸行会委托在佛罗伦萨设计的孤儿院（Ospedale degli Innocenti），被普遍公认为欧洲文艺复兴建筑开山奠基作的核心突破是：",
    "questionEn": "Commissioned by the Silk Guild in Florence, why is Filippo Brunelleschi's Ospedale degli Innocenti (1419–1445) universally recognized as the inaugural building of Renaissance architecture?",
    "optionsZh": [
      "面向安农齐亚塔广场设计了由9个完全相同的半圆拱券构成的轻盈敞廊，立柱高度、拱券跨度与柱廊进深均严格遵循1:1的立方体几何模数，比例亲和宜人，开创了理性、秩序与人道关怀共存的人文主义公共建筑新风",
      "建造了高达百米、带有锯齿形飞扶壁的哥特式石雕钟楼",
      "采用粗粝厚重的罗马式无窗毛石要塞墙体以防范暴动",
      "完全由铁柱支撑的平顶水晶宫殿展厅"
    ],
    "optionsEn": [
      "Fronting the piazza with an airy nine-bay loggia where column height, arch span, and bay depth strictly adhere to a 1:1 cubic module, establishing the humanized, mathematically rational language of classical civic architecture",
      "Erecting a hundred-meter-tall Gothic bell tower bristling with flying buttresses",
      "A fortified, windowless Romanesque cyclopean stone citadel designed to suppress urban revolts",
      "A flat-roofed cast-iron and glass exhibition hall supported by hollow metal pillars"
    ],
    "correctAnswer": 0,
    "explanationZh": "孤儿院敞廊彻底告别了中世纪哥特建筑的幽暗神秘与非对称。布鲁内莱斯基恢复了古典科林斯复合柱式与半圆拱，拱肩装饰安德烈亚·德拉·罗比亚蓝白釉陶襁褓婴儿圆盘，以极简清爽的几何比例树立了文艺复兴建筑第一块里程碑。",
    "explanationEn": "The Innocenti Loggia is the first Renaissance building: Brunelleschi deployed modular mathematical units (each bay being a cubic volume of space), combining delicate semicircular arches with Della Robbia glazed terracotta tondos.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Brunelleschi",
      "Innocenti",
      "ModularLoggia"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_314",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1450 - 1468",
    "questionZh": "莱昂·巴蒂斯塔·阿尔贝蒂在里米尼为统治者西吉斯蒙多·马拉泰斯塔改建马拉泰斯塔神庙（Tempio Malatestiano）时，采取的激进建筑策略是：",
    "questionEn": "In remodeling the Tempio Malatestiano in Rimini (c. 1450) for Sigismondo Pandolfo Malatesta, what radical classical strategy did Leon Battista Alberti deploy?",
    "optionsZh": [
      "将整座大教堂彻底推平，改建为古罗马式圆形战车竞技场",
      "完全保留内部原本朴素的中世纪哥特式方济各教堂结构，在其外部整体包裹一层由白色大理石砌造的雄伟古典外壳：正立面借鉴当地古罗马奥古斯都凯旋门形式，侧立面排布深邃沉雄的罗马水道式半圆拱壁龛用于安放文人石棺",
      "在外立面全部覆以巴洛克镀金贝壳与浮雕天使群",
      "建造了三个相互倾斜咬合的折叠钛合金四面体"
    ],
    "optionsEn": [
      "Leveling the cathedral entirely to construct a circular Roman chariot-racing arena",
      "Leaving the interior Gothic Franciscan church structurally intact while encasing its entire exterior in a majestic classical marble shell: adapting the local Roman Arch of Augustus for the facade and deep Roman aqueduct-style piers along the flanks for sarcophagi",
      "Cladding the exterior completely in Baroque gilded stucco shells and cherub sculptures",
      "Erecting three intersecting tilted titanium tetrahedrons"
    ],
    "correctAnswer": 1,
    "explanationZh": "阿尔贝蒂在马拉泰斯塔神庙中首开用古典神庙/凯旋门大理石外壳包裹中世纪教堂的先河。正立面取法里米尼现存的奥古斯都凯旋门，侧面七个深拱壁龛安葬人文主义哲人，虽未全部完工，却成为文艺复兴复兴古罗马建筑语言的里程碑。",
    "explanationEn": "Alberti encased an existing Gothic church in a marble revetment inspired by classical antiquity: the facade adapts the Roman Arch of Augustus in Rimini, while massive flanking arches echo Roman aqueducts to house humanist sarcophagi.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Alberti",
      "TempioMalatestiano",
      "TriumphalArch"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_315",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1472 - 1494",
    "questionZh": "莱昂·巴蒂斯塔·阿尔贝蒂在曼托瓦设计的圣安德烈亚圣殿（Sant'Andrea in Mantua），其在中殿与立面空间组织上彻底颠覆中世纪传统的设计是：",
    "questionEn": "Designed by Leon Battista Alberti in Mantua (begun 1472), what radical departure from medieval tradition defines the Basilica di Sant'Andrea?",
    "optionsZh": [
      "完全剔除任何柱子与隔墙，由单跨钢结构屋架覆盖整座中殿",
      "采用完全对称的红砖砌筑伊斯兰八角宣礼塔",
      "立面将罗马凯旋门与古典神庙山花融为一体，内部彻底取消细柱侧廊，改为巨大的单拱桶形穹顶中殿（Barrel-vaulted nave），两侧以沉重墩柱分隔出大小交替的开敞小礼拜堂，完美解决了容纳瞻仰圣血圣髑巨大人流的结构与空间难题",
      "四面完全无窗的古罗马斗兽场式同心圆环形看台"
    ],
    "optionsEn": [
      "Eliminating all columns beneath an industrial single-span steel roof truss",
      "Symmetrical red-brick octagonal minarets derived from Moorish Andalusia",
      "Synthesizing a classical triumphal arch and temple pediment on the facade, while replacing traditional columned aisles inside with a colossal coffered barrel-vaulted nave flanked by alternating monumental chapels to process pilgrims venerating the Holy Blood",
      "A concentric circular amphitheater derived from Roman arenas without external windows"
    ],
    "correctAnswer": 2,
    "explanationZh": "阿尔贝蒂在圣安德烈亚圣殿中将马克森提乌斯巴西利卡的宏伟气魄引入教堂。巨大的格子饰（Coffered）桶形拱顶跨度近18米，立面凯旋门与内部交替礼拜堂柱墩在三维上内外完全呼应，对伯拉孟特与后世巴洛克空间产生了深远启迪。",
    "explanationEn": "Sant'Andrea in Mantua revolutionized church interiors: Alberti abandoned columned aisles in favor of a monumental coffered barrel-vaulted hall flanked by monumental chapels, mirroring the Roman triumphal arch of its facade.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Alberti",
      "SantAndreaMantua",
      "BarrelVault"
    ],
    "difficulty": 3
  },
  {
    "id": "arched_316",
    "domain": "renaissance_classical",
    "subCategory": "High Renaissance Architecture",
    "era": "1502 - 1510",
    "questionZh": "多纳托·伯拉孟特在罗马金石圣伯多禄堂庭院中建造的原型纪念小堂坦比哀多（Tempietto, 1502），其被公认为盛期文艺复兴绝对典范的原因是：",
    "questionEn": "Erected by Donato Bramante in the courtyard of San Pietro in Montorio, why is the Tempietto (1502) universally celebrated as the supreme gem of High Renaissance architecture?",
    "optionsZh": [
      "它是欧洲第一座完全使用彩色碎瓷片拼贴覆盖的有机双曲面建筑",
      "它完全复制了古埃及卡纳克神庙由数百根巨型石柱密布的低矮多柱大厅",
      "平整平庸的四方形木结构小亭子，没有任何古典柱式雕饰",
      "严格复兴了古罗马集中式圆形围柱神庙（Tholos）形制，外围由16根严谨的多立克式（托斯卡纳）花岗岩圆柱环绕，配以严谨雕琢的三垄板与排档间饰（Metopes and Triglyphs）檐口，上方升起优美圆穹顶，实现了纯粹几何、古典法度与纪念神圣性的完美统一"
    ],
    "optionsEn": [
      "It was Europe's first organic double-curved pavilion clad in trencadís ceramic shards",
      "An exact duplicate of the densely packed hypostyle halls of ancient Egyptian Karnak",
      "A plain, square timber-framed shed devoid of classical articulation or ornament",
      "A flawless revival of the antique circular peripteral tholos, encircled by 16 Tuscan Doric granite columns bearing a rigorously correct frieze of triglyphs and metopes, crowned by a hemispherical dome expressing divine mathematical perfection"
    ],
    "correctAnswer": 3,
    "explanationZh": "坦比哀多体量虽小，却标志着盛期文艺复兴建筑法度的彻底成熟。伯拉孟特不仅精准复原了维特鲁威多立克柱式规范，更通过同心圆放射几何与高尚肃穆的比例，使帕拉第奥将其与古罗马神殿并列载入《建筑四书》。",
    "explanationEn": "The Tempietto marks the culmination of the High Renaissance: Bramante resurrected the Roman peripteral circular temple (tholos), combining perfect mathematical proportions with an authentic Tuscan Doric peristyle and hemispherical cupola.",
    "tags": [
      "RenaissanceClassical",
      "HighRenaissance",
      "Bramante",
      "Tempietto",
      "Tholos"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_317",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1566 - 1571",
    "questionZh": "安德烈亚·帕拉迪奥在维琴察近郊建造的圆厅别墅（Villa Capra \"La Rotonda\"），其住宅设计在建筑史上的空前独创性在于：",
    "questionEn": "Designed by Andrea Palladio in the countryside near Vicenza, what unprecedented architectural innovation defines the Villa Capra \"La Rotonda\" (begun 1566)?",
    "optionsZh": [
      "它打破了传统神庙穹顶仅用于宗教或皇家公共建筑的禁忌，首次将正方形绝对对称平面、中央半球形采光大圆穹顶，以及四面完全相同的六柱爱奥尼式古典神庙门廊应用于私人庄园住宅，使建筑与周边起伏山丘田园风光实现360度全景和谐融合",
      "建筑被深深掩埋在地下五十米的天然洞穴中，对周围自然景观毫无回应",
      "采用完全非对称的单层木质日式枯山水庭院",
      "外立面满贴鲜红与明黄的现代瓷砖几何拼贴"
    ],
    "optionsEn": [
      "Daringly transferring the dome and temple portico—traditionally reserved for sacred temples—to a domestic private residence, featuring a centralized square plan with four identical hexastyle Ionic porticoes embracing 360-degree hilltop panoramas",
      "Burying the residence fifty meters underground in a cavern with zero visual connection to nature",
      "An asymmetrical single-story timber Japanese dry rock-garden pavilion",
      "Covering the facade in vibrant red and yellow contemporary ceramic tiles"
    ],
    "correctAnswer": 0,
    "explanationZh": "帕拉迪奥将圆厅别墅设计为一个纯粹的几何宇宙模型：正方形嵌套圆形穹顶，四方延伸出完全对称的希腊神庙式爱奥尼门廊。它不仅是住宅，更是观景与统治风景的圣殿，深刻影响了英国伯灵顿勋爵与美国杰斐逊总统的蒙蒂塞洛。",
    "explanationEn": "Villa Rotonda is a triumph of Palladian balance: four identical hexastyle Ionic porticoes radiate from a central domed circular hall, orienting the square villa toward the four cardinal directions to harmonize dwelling with nature.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Palladio",
      "VillaRotonda",
      "CentralPlan"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_318",
    "domain": "renaissance_classical",
    "subCategory": "Renaissance Architecture",
    "era": "1549 - 1614",
    "questionZh": "安德烈亚·帕拉迪奥在改造维琴察中世纪市政厅外立面（帕拉第奥巴西利卡/Basilica Palladiana）时，巧妙化解原有中世纪旧柱墩间距极不均匀的绝妙建筑构件是：",
    "questionEn": "In remodeling the medieval Palazzo della Ragione (Basilica Palladiana) in Vicenza, what ingenious architectural motif did Andrea Palladio deploy to overcome irregular pier spacing?",
    "optionsZh": [
      "在每一开间连续采用由中央圆拱与两侧较窄平梁矩形侧跨组成的“塞利奥拱/帕拉第奥母题”（Serliana / Palladian Window），通过灵活微调两侧平梁侧跨的宽度而保持中央圆拱尺寸完全恒定，在不规则旧建筑外构筑出完美均质典雅的古典双层大理石敞廊",
      "完全拆除旧立柱，由一根从室外悬索塔向内拉吊的钢索吊挂整座楼层",
      "用粗粝坚固的毛石乱堆砌体将所有旧窗户完全封死",
      "在立面上雕刻大量中世纪圣经殉道者石像"
    ],
    "optionsEn": [
      "Deploying a two-tiered loggia of repetitive Serlian motifs (Palladian windows), where the central semicircular arch remains constant while flanking lintel openings vary subtly in width to absorb uneven medieval structural spans",
      "Demolishing all old pillars to suspend the entire upper floor from an exterior steel suspension pylon",
      "Sealing all original window openings behind thick, unadorned cyclopean stone masonry",
      "Carving stone relief statues of medieval biblical martyrs across the walls"
    ],
    "correctAnswer": 0,
    "explanationZh": "帕拉第奥巴西利卡原是一座开间跨度参差不齐的哥特旧楼。帕拉第奥运用塞利奥式母题（中央半圆券+两侧平过梁支承），通过微调侧边平梁宽度吸收跨度误差，外立面望去浑然均齐、典雅壮丽，帕拉第奥自此一举奠定宗师地位。",
    "explanationEn": "Palladio solved the structural irregularity of the Gothic hall by wrapping it in a double-tiered loggia of Serlianas (Palladian arches): by slightly expanding or compressing the flanking trabeated bays, the arches remained identical.",
    "tags": [
      "RenaissanceClassical",
      "Renaissance",
      "Palladio",
      "BasilicaPalladiana",
      "Serliana"
    ],
    "difficulty": 2
  },
  {
    "id": "arched_319",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1656 - 1667",
    "questionZh": "吉安·洛伦佐·贝尔尼尼受教皇亚历山大七世委托规划罗马圣彼得大教堂大广场（Piazza San Pietro）时，其宏伟柱廊的象征意象与都市功能是：",
    "questionEn": "Commissioned by Pope Alexander VII, what symbolic concept and urban design strategy governed Gian Lorenzo Bernini's colonnade for St. Peter's Square (1656–1667)?",
    "optionsZh": [
      "建造一座正方形的封闭式军事要塞防暴隔离区",
      "完全复制古希腊雅典卫城的帕特农神庙多立克石柱列",
      "由四排并列、总计284根挺拔多立克式石柱与88根方柱构成的巨大半圆形椭圆柱廊群，如母亲敞开的双臂（“教会慈母之臂”）迎抱来自全世界的朝圣者与信徒，两翼连接梯形前广场，消解了正面长立面在视觉上的扁平膨胀感",
      "在广场正中心挖掘一座长达百米的水下潜水艇秘密试验池"
    ],
    "optionsEn": [
      "A rectangular enclosed military fortress designed to cordon off civilian unrest",
      "An exact duplicate of the Parthenon's Doric peristyle colonnade in Athens",
      "A monumental elliptical colonnade four columns deep (284 Doric pillars and 88 pilasters) curving outward like the welcoming maternal arms of the Catholic Church to embrace the world, preceded by a trapezoidal piazza",
      "A hundred-meter-long subterranean basin in the center built for clandestine naval submarine testing"
    ],
    "correctAnswer": 2,
    "explanationZh": "贝尔尼尼设计了气势恢宏的椭圆加梯形双重广场。四重并立的多立克柱廊不仅引导庞大的教皇赐福人流，更象征罗马天主教会慈母般拥抱全人类信仰的大爱；同时巧妙利用梯形收拢透视，使马德诺设计的宽大教堂立面更显挺拔。",
    "explanationEn": "Bernini framed St. Peter's Square with a colossal four-deep elliptical Tuscan colonnade, famously declaring that it represents the maternal arms of the Church embracing Catholics, heretics, and infidels into the fold.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Bernini",
      "StPetersSquare",
      "Urbanism"
    ],
    "difficulty": 1
  },
  {
    "id": "arched_320",
    "domain": "renaissance_classical",
    "subCategory": "Baroque Architecture",
    "era": "1624 - 1633",
    "questionZh": "吉安·洛伦佐·贝尔尼尼在罗马圣彼得大教堂米开朗基罗大穹顶正下方营建的青铜圣体伞（St. Peter's Baldacchino），其融合建筑与雕塑的巅峰造诣体现在：",
    "questionEn": "Erected by Gian Lorenzo Bernini directly beneath Michelangelo's dome in St. Peter's Basilica, what masterly synthesis of sculpture and architecture defines the Baldacchino (1624–1633)?",
    "optionsZh": [
      "一座四面完全不透光的实心灰色未粉刷混凝土平屋顶方盒子",
      "完全使用全透明钢化玻璃板无缝粘接拼接而成的平顶玻璃箱",
      "平平无奇的红砖工业流水线厂房结构",
      "高达29米（相当于四层楼高）的巨大镀金青铜祭坛华盖，由四根盘旋缠绕着葡萄藤叶与蜜蜂徽章的螺旋扭转所罗门式立柱（Solomonic columns）支撑，顶部由四位天使与卷曲拱肋托起象征基督救赎的金色十字架与地球，天衣无缝地联结了地下圣彼得墓穴、地面祭坛与天界大穹顶"
    ],
    "optionsEn": [
      "An opaque solid grey unadorned concrete cubic box without windows or relief",
      "A transparent plate-glass box assembled with structural silicone joints",
      "An unadorned rectangular utilitarian red-brick warehouse structure",
      "A colossal 29-meter gilded bronze ciborium supported by four dynamic helical Solomonic columns wrapped in laurel vines and Barberini bees, crowned by curving volutes and angels bearing the cross above the tomb of Saint Peter"
    ],
    "correctAnswer": 3,
    "explanationZh": "圣体伞是巴洛克综合艺术（Bel Composto）的至高杰作。贝尔尼尼使用拆卸万神庙门廊青铜熔铸，重达数百吨却形态轻盈如微风吹拂的仪式织物流苏；扭转的所罗门柱勾连古代耶路撒冷圣殿历史，将地下宗徒坟墓、教皇主祭坛与上方百米苍穹融为一体。",
    "explanationEn": "Standing 29 meters tall beneath the dome, Bernini's Baldacchino fuses sculpture and architecture: four twisting Solomonic columns evoke the Temple of Jerusalem, celebrating the Barberini papacy and mediating between human and divine space.",
    "tags": [
      "RenaissanceClassical",
      "Baroque",
      "Bernini",
      "Baldacchino",
      "StPetersBasilica"
    ],
    "difficulty": 3
  }
];
