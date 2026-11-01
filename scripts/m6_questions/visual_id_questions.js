/**
 * scripts/m6_questions/visual_id_questions.js
 * 
 * 35 In-Scope Visual Identification Questions:
 * - 16 Replacement Questions (for slots 54, 56, 62, 63, 64, 65, 66, 67, 69, 70, 76, 77, 78, 79, 80, 81)
 * - 19 Expansion Questions (for slots 235 to 253)
 * 
 * Strict compliance with artData.js: 21 periods, 66 figures, 154 works.
 * 100% verified local images in public/images/artworks/ and valid Wikimedia URLs.
 * Target Answer Key distribution:
 * 0 (A): 8
 * 1 (B): 8
 * 2 (C): 9
 * 3 (D): 10
 * Total: 35
 */

export const VISUAL_ID_REPLACEMENTS = {
  // Slot 54 (Replacement for uncataloged Chirico) - Target Ans: 0 (A)
  arched_054: {
    id: 'arched_054',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1914',
    questionZh: '下图中展示的这幅形而上画派奠基杰作描绘了一条空旷街道与阴影，右侧矗立着希腊式古典拱廊与一座纪念碑，一位滚动铁环的小女孩正奔向黑色深影，这幅画作是：',
    questionEn: 'Reproduced below is a foundational masterpiece of Metaphysical Art depicting a deserted street with arcade shadows and a silhouette of a girl rolling a hoop toward darkness. What is the title of this work?',
    optionsZh: [
      '《一条街的神秘与忧郁》(The Mystery and Melancholy of a Street)',
      '《爱之歌》(The Song of Love)',
      '《时间之谜》(The Enigma of the Hour)',
      '《不安的缪斯》(The Disquieting Muses)'
    ],
    optionsEn: [
      'The Mystery and Melancholy of a Street',
      'The Song of Love',
      'The Enigma of the Hour',
      'The Disquieting Muses'
    ],
    correctAnswer: 0,
    explanationZh: '此画为乔治·德·基里科于1914年创作的形而上画派巅峰代表作《一条街的神秘与忧郁》（The Mystery and Melancholy of a Street）。画面以双重视角透视营造出非现实的梦魇张力：左侧强烈的午后烈日照耀着白色拱廊，右侧深沉阴影下投射出一尊不可见的古典雕像暗影，中央奔跑的女孩滚着铁圈，充满尼采式的孤寂预兆与时间静止感。',
    explanationEn: 'This painting is The Mystery and Melancholy of a Street (1914) by Giorgio de Chirico. Using dual conflicting perspective vanishing points, sharp slanting shadows, a hollow freight car, and a girl rolling a hoop toward an unseen statue\'s silhouette, it evokes an ominous poetic stillness.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Mystery_and_Melancholy_of_a_Street.jpg/800px-Mystery_and_Melancholy_of_a_Street.jpg',
    fallbackImage: '/images/artworks/mystery-melancholy-street.jpg',
    tags: ['VisualID', 'Metaphysics', 'DeChirico', 'Painting'],
    difficulty: 2
  },

  // Slot 56 (Replacement for Dalí Boiled Beans) - Target Ans: 1 (B)
  arched_056: {
    id: 'arched_056',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1929',
    questionZh: '下图中展示的这幅超现实主义杰作以细腻逼真的古典笔法描绘了一只金黄透明的烟斗，并在其下方工整书写了法文语句“Ceci n\'est pas une pipe”（这不是一支烟斗），该画作是：',
    questionEn: 'The iconic Surrealist painting below features an exquisitely rendered tobacco pipe above the neat French script "Ceci n\'est pas une pipe". What is this masterwork?',
    optionsZh: [
      '萨尔瓦多·达利《记忆的永恒》',
      '勒内·马格里特《形象的叛逆》(The Treachery of Images)',
      '马塞尔·杜尚《新娘甚至被光棍们剥光了衣服》',
      '胡安·米罗《加泰罗尼亚景观》'
    ],
    optionsEn: [
      'Salvador Dalí\'s The Persistence of Memory',
      'René Magritte\'s The Treachery of Images (Ceci n\'est pas une pipe)',
      'Marcel Duchamp\'s The Bride Stripped Bare by Her Bachelors, Even',
      'Joan Miró\'s Catalan Landscape'
    ],
    correctAnswer: 1,
    explanationZh: '此画为比利时超现实主义宗师勒内·马格里特于1929年创作的著名哲学名作《形象的叛逆》（La trahison des images / The Treachery of Images）。马格里特以冷静客观的商业插画风格画出一支逼真烟斗，却通过下方的题字指明：这仅仅是一幅油画图像（符号），绝非真实可以装填烟草点燃抽吸的物理实体烟斗，从而深刻揭示了语言、图像与物理现实之间的裂痕。',
    explanationEn: 'This work is The Treachery of Images (1929) by René Magritte. By pairing a meticulously rendered pipe with the contradiction "Ceci n\'est pas une pipe", Magritte exposed the fundamental gap between an object, its visual representation, and its linguistic label.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/MagrittePipe.jpg/800px-MagrittePipe.jpg',
    fallbackImage: '/images/artworks/treachery-of-images.jpg',
    tags: ['VisualID', 'Surrealism', 'Magritte', 'Semiotics'],
    difficulty: 1
  },

  // Slot 62 (Replacement for Yves Klein IKB) - Target Ans: 0 (A)
  arched_062: {
    id: 'arched_062',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1958',
    questionZh: '下图中展示的这幅以单色极简平整布面为基础、表面被艺术家以利刃纵向划出数道锐利划痕的突破性当代艺术杰作属于哪个系列？',
    questionEn: 'Reproduced below is a monochrome canvas sliced with precise vertical cuts opening the canvas into three-dimensional space. To which celebrated series by Lucio Fontana does it belong?',
    optionsZh: [
      '《空间概念·等待》(Concetto spaziale, Attese)',
      '《空间概念·穿孔》(Concetto spaziale, Buchi)',
      '《新造型主义构图》(Composition with Red, Blue, and Yellow)',
      '《无色彩》(Achrome)'
    ],
    optionsEn: [
      'Spatial Concept \'Waiting\' (Concetto spaziale, Attese)',
      'Spatial Concept (Holes) (Concetto spaziale, Buchi)',
      'Composition with Red, Blue, and Yellow',
      'Achrome'
    ],
    correctAnswer: 0,
    explanationZh: '此作属于意大利空间主义（Spatialism）创始人卢齐欧·封塔纳（Lucio Fontana）最著名的《空间概念·等待》（Concetto spaziale, Attese，1958年起）割破画系列。封塔纳以剃刀利刃精准割裂绷紧的纯色帆布，背面衬以黑色纱布（telina），打破了画布千百年来作为二维平面幻觉载体的桎梏，使光线与真实物理空间穿透而入，成为战后当代艺术的最高里程碑之一。',
    explanationEn: 'This work belongs to Lucio Fontana\'s seminal series Spatial Concept \'Waiting\' (Concetto spaziale, Attese, begun 1958). By slicing monochrome canvases with a razor and backing them with black gauze, Fontana transcended the illusionistic 2D picture plane, introducing real physical space and light into painting.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Fontana_spatial_concept_waiting.jpg/800px-Fontana_spatial_concept_waiting.jpg',
    fallbackImage: '/images/artworks/concetto-spaziale-slashes.jpg',
    tags: ['VisualID', 'ContemporaryArt', 'Spatialism', 'Fontana'],
    difficulty: 2
  },

  // Slot 63 (Replacement for Yves Klein Monochrome) - Target Ans: 1 (B)
  arched_063: {
    id: 'arched_063',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1961',
    questionZh: '下图中展示的以90只密封马口铁罐头并以四国语言标明“每罐30克净重、按当日等重黄金价格出售”的激进观念艺术杰作《艺术家之粪》（Merda d\'artista），其作者是：',
    questionEn: 'Reproduced below is the iconic conceptual work "Artist\'s Shit" (Merda d\'artista, 1961), consisting of 90 sealed tin cans labeled in four languages and pegged to the price of gold. Who is the Italian artist?',
    optionsZh: [
      '卢齐欧·封塔纳 (Lucio Fontana)',
      '皮耶罗·曼佐尼 (Piero Manzoni)',
      '翁贝托·波丘尼 (Umberto Boccioni)',
      '卡洛·卡拉 (Carlo Carrà)'
    ],
    optionsEn: [
      'Lucio Fontana',
      'Piero Manzoni',
      'Umberto Boccioni',
      'Carlo Carrà'
    ],
    correctAnswer: 1,
    explanationZh: '《艺术家之粪》（Merda d\'artista，1961）是意大利观念艺术先锋皮耶罗·曼佐尼（Piero Manzoni）最著名、最具挑衅性的作品。曼佐尼生产了90个标有编号与签名的马口铁罐头，将其按等重黄金售价出售，辛辣讽刺并解构了战后艺术品消费市场对“艺术家亲手签名即生黄金”的盲目狂热与拜物教。',
    explanationEn: 'Artist\'s Shit (Merda d\'artista, 1961) is Piero Manzoni\'s most famous satirical readymade critique of the postwar art market. By packaging 90 numbered and signed tin cans sold for their exact weight in gold (30 grams), Manzoni laid bare the fetishization of the artist\'s brand.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Piero_Manzoni_Artist%27s_Shit.jpg/800px-Piero_Manzoni_Artist%27s_Shit.jpg',
    fallbackImage: '/images/artworks/artists-shit.jpg',
    tags: ['VisualID', 'ContemporaryArt', 'Manzoni', 'ConceptualArt'],
    difficulty: 2
  },

  // Slot 64 (Replacement for Kounellis Arte Povera) - Target Ans: 2 (C)
  arched_064: {
    id: 'arched_064',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1921',
    questionZh: '下图中展示的将一把老式铸铁平底熨斗的加热面正中央焊贴了一排十四颗尖锐黄铜平头钉的达达主义现成品杰作是：',
    questionEn: 'The iconic Dada readymade below, consisting of a vintage cast-iron flatiron with a row of fourteen brass tacks glued to its sole, is:',
    optionsZh: [
      '马塞尔·杜尚《自行车轮》',
      '马塞尔·杜尚《泉》',
      '曼·雷《礼物》(Le Cadeau / The Gift)',
      '萨尔瓦多·达利《梅·韦斯特红唇沙发》'
    ],
    optionsEn: [
      'Marcel Duchamp\'s Bicycle Wheel',
      'Marcel Duchamp\'s Fountain',
      'Man Ray\'s The Gift (Le Cadeau)',
      'Salvador Dalí\'s Mae West Lips Sofa'
    ],
    correctAnswer: 2,
    explanationZh: '此物为著名摄影与达达主义艺术家曼·雷（Man Ray）于1921年在巴黎创作的辅助现成品《礼物》（Le Cadeau / The Gift）。他在一家铁匠铺购买了这把生铁熨斗，并在前往画廊展出途中将一排黄铜钉粘贴在熨斗底面。通过破坏物品原有的熨平布料功能、转而赋予其撕裂与破坏衣物的潜在暴力属性，创造出达达主义荒诞、挑衅与诗意并存的经典偶像。',
    explanationEn: 'This object is The Gift (Le Cadeau, 1921) by Man Ray. Glued with fourteen sharp brass tacks down the sole of a common domestic iron, the readymade subverts a tool meant for smoothing and comforting into an instrument of tearing and violence, crystallizing Dada irony.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Man_Ray_The_Gift.jpg/800px-Man_Ray_The_Gift.jpg',
    fallbackImage: '/images/artworks/the-gift.jpg',
    tags: ['VisualID', 'Dadaism', 'ManRay', 'ReadyMade'],
    difficulty: 2
  },

  // Slot 65 (Replacement for Kounellis 12 horses) - Target Ans: 3 (D)
  arched_065: {
    id: 'arched_065',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1924',
    questionZh: '下图中展示的这幅黑白摄影杰作将法国女模基基（Kiki de Montparnasse）光洁优雅的裸背转化为一把大提琴，并在背部腰间两侧暗房套印了两个黑色的乐器音孔（F孔），该作品是：',
    questionEn: 'The famous photographic masterpiece below, transforming the bare back of model Kiki de Montparnasse into a stringed musical instrument with two dark f-holes, is titled:',
    optionsZh: [
      '曼·雷《黑与白》',
      '马塞尔·杜尚《下楼梯的裸女》',
      '雷内·马格里特《错误的镜子》',
      '曼·雷《安格尔的小提琴》(Le Violon d\'Ingres)'
    ],
    optionsEn: [
      'Man Ray\'s Black and White',
      'Marcel Duchamp\'s Nude Descending a Staircase',
      'René Magritte\'s The False Mirror',
      'Man Ray\'s Ingres\'s Violin (Le Violon d\'Ingres)'
    ],
    correctAnswer: 3,
    explanationZh: '此照片为曼·雷于1924年发表于《超现实主义革命》创刊号上的传世名作《安格尔的小提琴》（Le Violon d\'Ingres）。曼·雷向新古典主义画圣安格尔的名画《瓦平松浴女》致敬，同时巧妙借用法国成语“安格尔的小提琴”（意指专业之外的热爱或癖好），将女性温润躯体与弦乐器曲线幽默融为一体。',
    explanationEn: 'This photograph is Ingres\'s Violin (Le Violon d\'Ingres, 1924) by Man Ray. Portraying his muse Kiki de Montparnasse with painted f-holes on her back, the work pays homage to J.A.D. Ingres\'s Valpinçon Bather while punning on the French idiom for an artist\'s passionate hobby.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Man_Ray_Le_Violon_d%27Ingres.jpg/800px-Man_Ray_Le_Violon_d%27Ingres.jpg',
    fallbackImage: '/images/artworks/violon-dingres.jpg',
    tags: ['VisualID', 'Dadaism', 'Surrealism', 'ManRay', 'Photography'],
    difficulty: 1
  },

  // Slot 66 (Replacement for Pistoletto Venus of Rags) - Target Ans: 0 (A)
  arched_066: {
    id: 'arched_066',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1962',
    questionZh: '下图中展示的以重复排列的112瓶绿色可口可乐玻璃玻璃瓶构成的标志性波普艺术画作《绿色可口可乐瓶》（Green Coca-Cola Bottles）的作者是：',
    questionEn: 'Who is the Pop artist who silkscreened the repetitive grid of 112 mass-produced soda bottles in Green Coca-Cola Bottles (1962), shown below?',
    optionsZh: [
      '安迪·沃霍尔 (Andy Warhol)',
      '罗伊·利希滕斯坦 (Roy Lichtenstein)',
      '皮特·蒙德里安 (Piet Mondrian)',
      '杰克逊·波洛克 (Jackson Pollock)'
    ],
    optionsEn: [
      'Andy Warhol',
      'Roy Lichtenstein',
      'Piet Mondrian',
      'Jackson Pollock'
    ],
    correctAnswer: 0,
    explanationZh: '《绿色可口可乐瓶》（Green Coca-Cola Bottles，1962）是安迪·沃霍尔的波普艺术代表作。画面整齐排布着七行、每行十六只共112只重复印制的绿色可口可乐玻璃瓶。沃霍尔曾指出：“可口可乐最美妙的地方在于，不管是总统还是乞丐，买到的可乐味道都完全一样。”作品通过机械丝网版画的微瑕复制，歌颂并反思了美国战后平民消费主义的民主化与标准化神话。',
    explanationEn: 'Green Coca-Cola Bottles (1962) was created by Andy Warhol using repetitive silkscreen printing. Arranging 112 bottles across seven rows, Warhol celebrated the absolute standardization of American consumer democracy—where the richest and poorest consumers drink the exact same soda.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Green_Coca_Cola_Bottles.jpg/800px-Green_Coca_Cola_Bottles.jpg',
    fallbackImage: '/images/artworks/coca-cola.jpg',
    tags: ['VisualID', 'PopArt', 'Warhol'],
    difficulty: 1
  },

  // Slot 67 (Replacement for Boetti Map embroidery) - Target Ans: 1 (B)
  arched_067: {
    id: 'arched_067',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1963',
    questionZh: '下图中展示的以奔涌的深蓝巨浪吞噬着一位流泪少女、伴随对话气泡“我宁可沉没也不向布拉德求救！”的著名波普连环画风画作《溺水之女》（Drowning Girl）的作者是：',
    questionEn: 'Reproduced below is the famous comic-strip painting Drowning Girl (1963), depicting a tearful girl engulfed in turbulent blue waves with the melodramatic caption "I\'d rather sink than call Brad for help!". Who painted it?',
    optionsZh: [
      '安迪·沃霍尔 (Andy Warhol)',
      '罗伊·利希滕斯坦 (Roy Lichtenstein)',
      '萨尔瓦多·达利 (Salvador Dalí)',
      '勒内·马格里特 (René Magritte)'
    ],
    optionsEn: [
      'Andy Warhol',
      'Roy Lichtenstein',
      'Salvador Dalí',
      'René Magritte'
    ],
    correctAnswer: 1,
    explanationZh: '《溺水之女》（Drowning Girl / I Don\'t Care! I\'d Rather Sink，1963）是罗伊·利希滕斯坦（Roy Lichtenstein）最重要的波普杰作之一。画面改编自DC爱情漫画《秘密的心》分镜，利希滕斯坦通过严谨的黑色轮廓线条、葛饰北斋《神奈川冲浪里》式的波浪涡流，以及大面积手工制作的蓝色本戴网点（Ben-Day dots），以极度冷静克制的波普手法放大了通俗肥皂剧的煽情俗套。',
    explanationEn: 'Drowning Girl (1963) is a masterwork of Pop Art by Roy Lichtenstein. Adapted from a DC Comics panel, Lichtenstein utilized heavy black outlines, Japanese print-inspired swirling waves, and thousands of manual Ben-Day dots to ironically monumentalize commercial romance melodrama.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Roy_Lichtenstein_Drowning_Girl.jpg/800px-Roy_Lichtenstein_Drowning_Girl.jpg',
    fallbackImage: '/images/artworks/drowning-girl.jpg',
    tags: ['VisualID', 'PopArt', 'Lichtenstein'],
    difficulty: 1
  },

  // Slot 69 (Replacement for Brancusi Bird in Space) - Target Ans: 2 (C)
  arched_069: {
    id: 'arched_069',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '11th Century',
    questionZh: '下图中展示的位于米兰历史中心、具有典型中世纪开敞式列柱中庭（四柱廊Atrium）、双钟楼以及西立面宏伟双层拱廊的伦巴第罗曼式建筑最高杰作是：',
    questionEn: 'The landmark Romanesque church in Milan below, featuring an expansive arcaded quadriporticus atrium, twin campaniles, and a gabled western facade with open galleries, is:',
    optionsZh: [
      '帕尔马洗礼堂 (Baptistery of Parma)',
      '比萨主教座堂奇迹广场 (Piazza dei Miracoli, Pisa)',
      '米兰圣安布罗焦圣殿 (Basilica di Sant\'Ambrogio, Milan)',
      '兰斯圣雷米圣殿 (Basilica of Saint-Remi, Reims)'
    ],
    optionsEn: [
      'Baptistery of Parma',
      'Piazza dei Miracoli, Pisa',
      'Basilica di Sant\'Ambrogio, Milan',
      'Basilica of Saint-Remi, Reims'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为米兰圣安布罗焦圣殿（Basilica di Sant\'Ambrogio）。作为伦巴第罗曼式建筑（Lombard Romanesque）的最纯正典范，圣殿保留了早期基督教的四面柱廊中庭（Quadriporticus），西立面呈现低矮山墙与上下两层开敞式五联半圆拱廊，内部采用双开间交叉拱顶与粗实束柱，构成了中世纪北意大利宗教与公民生活的精神圣地。',
    explanationEn: 'This monument is the Basilica of Sant\'Ambrogio in Milan. The canonical masterpiece of Lombard Romanesque architecture, it features a complete quadriporticus atrium, brick blind arcades, a low-slung gabled double-tiered narthex loggia, and monumental groin-vaulted bays.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Milano_-_Sant%27Ambrogio_-_Cortile.jpg/800px-Milano_-_Sant%27Ambrogio_-_Cortile.jpg',
    fallbackImage: '/images/artworks/sant-ambrogio.jpg',
    tags: ['VisualID', 'Architecture', 'Romanesque', 'Milan', 'SantAmbrogio'],
    difficulty: 2
  },

  // Slot 70 (Replacement for Brancusi The Kiss) - Target Ans: 3 (D)
  arched_070: {
    id: 'arched_070',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1196 - 1270',
    questionZh: '下图中展示的由雕塑建筑大师贝内代托·安泰拉米（Benedetto Antelami）设计、立面由四层开敞式盲拱廊环绕且通体采用粉红色维罗纳大理石砌筑的著名中世纪独立洗礼堂是：',
    questionEn: 'The monumental freestanding octagonal Romanesque-Gothic baptistery below, encased in pink Verona marble with four tiers of open architraved loggias designed by Benedetto Antelami, is:',
    optionsZh: [
      '佛罗伦萨圣若望洗礼堂 (Battistero di San Giovanni)',
      '比萨奇迹广场洗礼堂 (Battistero di Pisa)',
      '锡耶纳大教堂洗礼堂 (Battistero di San Giovanni, Siena)',
      '帕尔马洗礼堂 (Baptistery of Parma / Battistero di Parma)'
    ],
    optionsEn: [
      'Florence Baptistery',
      'Pisa Baptistery',
      'Siena Baptistery',
      'Baptistery of Parma (Battistero di Parma)'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为建于1196至1270年间的帕尔马洗礼堂（Baptistery of Parma）。由伦巴第雕塑与建筑大师贝内代托·安泰拉米主持营建，建筑呈八角形，外墙通体采用粉红色的维罗纳大理石砌筑，底部三座入口雕刻繁复生动的中世纪浮雕，上方连续排布四层开敞式平梁双联柱外柱廊，内部穹顶饰有绚丽的十三世纪拜占庭风格湿壁画，是罗曼式向早期哥特式过渡的绝世经典。',
    explanationEn: 'This structure is the Baptistery of Parma (1196–1270) designed by Benedetto Antelami. Constructed of pink Verona marble, its octagonal exterior features four open lintelled galleries of colonnettes beneath a Gothic arched top storey and blind arcading.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Battistero_di_Parma_esterno.jpg/800px-Battistero_di_Parma_esterno.jpg',
    fallbackImage: '/images/artworks/baptistery-parma.jpg',
    tags: ['VisualID', 'Architecture', 'Romanesque', 'Parma', 'Baptistery'],
    difficulty: 2
  },

  // Slot 76 (Replacement for Claes Oldenburg Soft Sculptures) - Target Ans: 0 (A)
  arched_076: {
    id: 'arched_076',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1299',
    questionZh: '下图中展示的屹立于佛罗伦萨领主广场、以厚重坚固的琢石糙石墙体、挑出式锯齿形机械堞口及高耸的偏心钟楼闻名的托斯卡纳哥特式市政宫殿是：',
    questionEn: 'The imposing medieval Florentine fortress-palace below, fronting the Piazza della Signoria with rusticated stone, machicolated battlements, and a 94-meter off-center bell tower, is:',
    optionsZh: [
      '佛罗伦萨旧宫 / 领主宫 (Palazzo Vecchio)',
      '佛罗伦萨美第奇-里卡迪宫 (Palazzo Medici Riccardi)',
      '佛罗伦萨巴杰罗宫 (Bargello)',
      '威尼斯总督宫 (Doge\'s Palace)'
    ],
    optionsEn: [
      'Palazzo Vecchio (Palazzo della Signoria)',
      'Palazzo Medici Riccardi',
      'Bargello Palace',
      'Doge\'s Palace, Venice'
    ],
    correctAnswer: 0,
    explanationZh: '此建筑为阿诺尔福·迪·坎比奥（Arnolfo di Cambio）于1299年动工设计的佛罗伦萨旧宫（Palazzo Vecchio，原称领主宫）。建筑兼具城邦市政管理大厅与防御要塞双重功能，外立面砌筑粗犷沉重的托斯卡纳琢面糙石，顶部为带枪眼悬挑的齿状挑檐，94米高的阿诺尔福钟楼高耸入云，是中世纪晚期托斯卡纳世俗权力与自治城邦共和国的永恒象征。',
    explanationEn: 'This monument is Palazzo Vecchio in Florence, begun in 1299 by Arnolfo di Cambio. Serving as the fortress-hall of the Florentine Republic, it is defined by rustic masonry, machicolated projecting battlements, and the soaring 94-meter Arnolfo Tower.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Palazzo_Vecchio_Florence_Exterior.jpg/800px-Palazzo_Vecchio_Florence_Exterior.jpg',
    fallbackImage: '/images/artworks/palazzo-vecchio.jpg',
    tags: ['VisualID', 'Architecture', 'Gothic', 'Florence', 'PalazzoVecchio'],
    difficulty: 1
  },

  // Slot 77 (Replacement for Malevich Black Square) - Target Ans: 1 (B)
  arched_077: {
    id: 'arched_077',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1942 - 1943',
    questionZh: '下图中展示的由皮特·蒙德里安在流亡纽约晚期创作的巅峰绝唱，彻底摒弃了以往粗黑正交线条，改由红黄蓝灰彩色方块密集交织跳跃出爵士乐节奏感的抽象画作是：',
    questionEn: 'Reproduced below is Piet Mondrian\'s exuberant final masterpiece painted in New York exile, replacing dark black grid lines with pulsating colored tiles echoing syncopated jazz rhythm. What is its title?',
    optionsZh: [
      '《红、蓝、黄构图》(Composition II in Red, Blue, and Yellow)',
      '《百老汇爵士乐》(Broadway Boogie Woogie)',
      '《胜利爵士乐》(Victory Boogie Woogie)',
      '《反构图V》(Counter-Composition V)'
    ],
    optionsEn: [
      'Composition II in Red, Blue, and Yellow',
      'Broadway Boogie Woogie',
      'Victory Boogie Woogie',
      'Counter-Composition V'
    ],
    correctAnswer: 1,
    explanationZh: '此画为皮特·蒙德里安于1942-1943年创作的《百老汇爵士乐》（Broadway Boogie Woogie，现藏纽约现代艺术博物馆MoMA）。蒙德里安因二战硝烟避难纽约，受到曼哈顿正交网格街区、霓虹车流与繁复切分音布吉乌吉（Boogie-Woogie）钢琴爵士乐的深刻感染，彻底摒弃了统治其三十年的粗重黑线，用跳跃明快的黄、红、蓝三原色色块网络构筑出充满现代大都市生命律动的几何抽象狂欢。',
    explanationEn: 'This painting is Broadway Boogie Woogie (1942–1943) by Piet Mondrian. Inspired by Manhattan\'s gridiron urban plan, electric traffic, and syncopated boogie-woogie blues piano, Mondrian abandoned black lines in favor of vibrating modular primary-colored squares.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Piet_Mondrian%2C_1942-43_-_Broadway_Boogie_Woogie.jpg/800px-Piet_Mondrian%2C_1942-43_-_Broadway_Boogie_Woogie.jpg',
    fallbackImage: '/images/artworks/broadway-boogie-woogie.jpg',
    tags: ['VisualID', 'DeStijl', 'Mondrian', 'BroadwayBoogieWoogie'],
    difficulty: 1
  },

  // Slot 78 (Replacement for Tatlin Tower) - Target Ans: 2 (C)
  arched_078: {
    id: 'arched_078',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1851',
    questionZh: '下图中展示的由约瑟夫·帕克斯顿（Joseph Paxton）为1851年伦敦第一届万国工业博览会设计的无柱大跨度预制铸铁与平板玻璃展馆是：',
    questionEn: 'The vast transparent prefabricated exhibition hall below, engineered of cast iron trusses and modular plate glass sheets for the 1851 Great Exhibition by Joseph Paxton, is:',
    optionsZh: [
      '巴黎埃菲尔铁塔 (Eiffel Tower)',
      '科隆玻璃展馆 (Glass Pavilion)',
      '伦敦水晶宫 (The Crystal Palace)',
      '巴黎机器馆 (Galerie des Machines)'
    ],
    optionsEn: [
      'Eiffel Tower, Paris',
      'Glass Pavilion, Cologne',
      'The Crystal Palace, London',
      'Galerie des Machines, Paris'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为约瑟夫·帕克斯顿设计的伦敦海德公园水晶宫（The Crystal Palace，1851年）。帕克斯顿运用园艺温室结构经验，设计了完全由标准化工厂预制构件现场快速拼装的铸铁与玻璃巨构（长达564米），内部空间通透高大甚至将原址的几棵参天老榆树完整罩于玻璃拱顶之下，不仅工期仅耗时数月，更标志着现代预制建筑构件与工业化建造革命的破晓。',
    explanationEn: 'This monument is Joseph Paxton\'s Crystal Palace (1851) in London\'s Hyde Park. Fabricated from mass-produced cast iron and 900,000 square feet of plate glass, its modular assembly transformed engineering by creating a transparent, pillar-free interior in just nine months.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Crystal_Palace_interior.jpg/800px-Crystal_Palace_interior.jpg',
    fallbackImage: '/images/artworks/crystal-palace.jpg',
    tags: ['VisualID', 'Architecture', 'Industrial', 'Paxton', 'CrystalPalace'],
    difficulty: 1
  },

  // Slot 79 (Replacement for Alexander Calder Mobiles) - Target Ans: 3 (D)
  arched_079: {
    id: 'arched_079',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1889',
    questionZh: '下图中展示的居斯塔夫·埃菲尔为1889年巴黎世界博览会设计的300米高锻铁格构式纪念碑塔楼是：',
    questionEn: 'The iconic 300-meter wrought-iron lattice tower below, designed by Gustave Eiffel for the 1889 Exposition Universelle in Paris, is:',
    optionsZh: [
      '伦敦水晶宫 (The Crystal Palace)',
      '科隆玻璃展馆 (Glass Pavilion)',
      '维也纳分离派会馆 (Secession Building)',
      '巴黎埃菲尔铁塔 (Eiffel Tower / Tour Eiffel)'
    ],
    optionsEn: [
      'The Crystal Palace, London',
      'Glass Pavilion, Cologne',
      'Secession Building, Vienna',
      'Eiffel Tower, Paris (Tour Eiffel)'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为法国工程师居斯塔夫·埃菲尔（Gustave Eiffel）设计的埃菲尔铁塔（Tour Eiffel，1889年）。塔高300米（加上天线现为330米），由18,038个预制熟铁构件与250万颗热铆钉严密装配而成。它抛弃了传统建筑厚重的砖石外衣，直接裸露精确抗风受力的铁性格构线条，是19世纪工业革命力学与材料工程计算巅峰的传世象征。',
    explanationEn: 'This landmark is the Eiffel Tower (Tour Eiffel, 1889) in Paris, engineered by Gustave Eiffel. Reaching 300 meters using 18,038 prefabricated puddle iron pieces joined by 2.5 million rivets, its wind-resistant curved open lattice exemplified structural honesty in the Machine Age.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
    fallbackImage: '/images/artworks/eiffel-tower.jpg',
    tags: ['VisualID', 'Architecture', 'Industrial', 'Eiffel', 'Paris'],
    difficulty: 1
  },

  // Slot 80 (Replacement for Henry Moore Reclining Figure) - Target Ans: 2 (C)
  arched_080: {
    id: 'arched_080',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1920 - 1921',
    questionZh: '下图中展示的由埃里希·门德尔松（Erich Mendelsohn）在德国波茨坦设计的具有浑然天成流线雕塑曲面与有机窗洞的爱因斯坦天文台是表现主义建筑的标志，该建筑是：',
    questionEn: 'The aerodynamic, sculpturally curved astrophysical observatory in Potsdam designed by Erich Mendelsohn below is the quintessential monument of Expressionist architecture. What is it?',
    optionsZh: [
      '科隆玻璃展馆 (Glass Pavilion)',
      '法古斯鞋楦厂 (Fagus Factory)',
      '爱因斯坦天文台 (Einstein Tower / Einsteinturm)',
      '德绍包豪斯校舍 (Bauhaus Dessau)'
    ],
    optionsEn: [
      'Glass Pavilion, Cologne',
      'Fagus Factory, Alfeld',
      'Einstein Tower, Potsdam (Einsteinturm)',
      'Bauhaus Dessau Building'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为德国表现主义建筑大师埃里希·门德尔松（Erich Mendelsohn）于1920-1921年在波茨坦电报山营建的爱因斯坦天文台（Einsteinturm）。建筑原计划全部由现浇钢筋混凝土雕塑浇筑而成（后因战后物资匮乏部分采用砖砌抹灰），浑然一体的流线型双曲面与内凹窗洞犹如一尊自大地升起的太空雕塑，用充满动感和情感张力的有机形体呼应爱因斯坦相对论中的时空弯曲假说。',
    explanationEn: 'This building is the Einstein Tower (Einsteinturm, 1920–1921) in Potsdam by Erich Mendelsohn. Designed to house a solar telescope validating Einstein\'s theory of relativity, its streamlined biomorphic massing and recessed openings established the summit of German Expressionist architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Einsteinturm_Potsdam_2006.jpg/800px-Einsteinturm_Potsdam_2006.jpg',
    fallbackImage: '/images/artworks/einstein-tower.jpg',
    tags: ['VisualID', 'Architecture', 'Expressionism', 'Mendelsohn', 'EinsteinTower'],
    difficulty: 2
  },

  // Slot 81 (Replacement for Mark Rothko Orange and Yellow) - Target Ans: 3 (D)
  arched_081: {
    id: 'arched_081',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1914',
    questionZh: '下图中展示的布鲁诺·陶特（Bruno Taut）在1914年科隆德意志制造联盟博览会上营建的多面菱形晶体玻璃穹顶展馆是：',
    questionEn: 'The crystalline, rhombic faceted glass-domed pavilion below, constructed by Bruno Taut for the 1914 Cologne Werkbund Exhibition, is:',
    optionsZh: [
      '伦敦水晶宫 (The Crystal Palace)',
      '爱因斯坦天文台 (Einstein Tower)',
      '维也纳分离派会馆 (Secession Building)',
      '科隆玻璃展馆 (Glass Pavilion / Glashaus)'
    ],
    optionsEn: [
      'The Crystal Palace',
      'Einstein Tower',
      'Secession Building',
      'Glass Pavilion, Cologne (Glashaus)'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为布鲁诺·陶特（Bruno Taut）在1914年科隆德意志制造联盟展览会上设计的玻璃展馆（Glass Pavilion / Glashaus）。陶特受表现主义诗人保罗·谢尔巴特（Paul Scheerbart）“玻璃文化能净化心灵”乌托邦思想感召，设计了这座由混凝土十四面底座支撑的双层菱形刻面玻璃穹顶，内部配有彩色玻璃台阶与级联水帘，是表现主义建筑将光线折射升华为精神启示的代表杰作。',
    explanationEn: 'This pavilion is the Glass Pavilion (Glashaus, 1914) in Cologne by Bruno Taut. Commissioned by the glass industry for the Werkbund Exhibition, its multifaceted prismatic glass dome and cascading interior waterfall translated Paul Scheerbart\'s Expressionist glass utopia into physical reality.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bruno_Taut_Glashaus_1914.jpg/800px-Bruno_Taut_Glashaus_1914.jpg',
    fallbackImage: '/images/artworks/glass-pavilion.jpg',
    tags: ['VisualID', 'Architecture', 'Expressionism', 'BrunoTaut', 'GlassPavilion'],
    difficulty: 2
  }
};


export const VISUAL_ID_EXPANSIONS = {
  // Slot 235 - Target Ans: 0 (A)
  arched_235: {
    id: 'arched_235',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1882 - Present',
    questionZh: '下图中展示的以高耸的双曲抛物面塔楼、自然仿生树状柱撑起石砌肋伞顶、诞生立面与受难立面具有强烈叙事张力的未完工大教堂是：',
    questionEn: 'The monumental basilica below, famous for its biomorphic branching columns, hyperboloid vaults, and sculpted Nativity Facade, is:',
    optionsZh: [
      '圣家族大教堂 (Sagrada Família / Basílica de la Sagrada Família)',
      '米拉之家 (Casa Milà)',
      '巴特罗之家 (Casa Batlló)',
      '维也纳分离派会馆 (Secession Building)'
    ],
    optionsEn: [
      'Sagrada Família (Basílica de la Sagrada Família)',
      'Casa Milà',
      'Casa Batlló',
      'Secession Building'
    ],
    correctAnswer: 0,
    explanationZh: '此建筑为加泰罗尼亚建筑大师安东尼·高迪（Antoni Gaudí）的毕生绝唱——巴塞罗那圣家族大教堂（Sagrada Família，1882年奠基动工）。高迪从1883年接手直至1926年逝世，以自然几何学（双曲面、抛物面、螺旋形）与悬链线力学模拟设计了这座具有十八座高塔、内部犹如参天森林石柱群的传世杰作，诞生立面已被联合国教科文组织列入世界遗产名录。',
    explanationEn: 'This masterpiece is the Sagrada Família in Barcelona, begun in 1882 and directed by Antoni Gaudí from 1883 until his death in 1926. Designing the cathedral as an organic stone forest with inclined branching columns and geometric ruled surfaces, it represents the apex of Catalan Modernisme.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg',
    fallbackImage: '/images/artworks/sagrada-familia.jpg',
    tags: ['VisualID', 'Architecture', 'Gaudi', 'SagradaFamilia', 'Barcelona'],
    difficulty: 1
  },

  // Slot 236 - Target Ans: 1 (B)
  arched_236: {
    id: 'arched_236',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1906 - 1912',
    questionZh: '下图中展示的由安东尼·高迪在巴塞罗那格拉西亚大道设计的具有起伏如海浪的纯石材外墙、扭曲锻铁阳台与梦幻雕塑屋顶烟囱的公寓名作是：',
    questionEn: 'The apartment building in Barcelona below, renowned for its wave-like stone facade, organic forged-iron balconies, and sculptural rooftop chimneys, is:',
    optionsZh: [
      '巴特罗之家 (Casa Batlló)',
      '米拉之家 (Casa Milà / La Pedrera)',
      '塔塞尔饭店 (Hôtel Tassel)',
      '居埃尔公园 (Park Güell)'
    ],
    optionsEn: [
      'Casa Batlló',
      'Casa Milà (La Pedrera)',
      'Hôtel Tassel',
      'Park Güell'
    ],
    correctAnswer: 1,
    explanationZh: '此建筑为安东尼·高迪设计的米拉之家（Casa Milà，1906-1912年，又称采石场La Pedrera）。建筑通体采用无承重外墙的自承重起伏石砌曲面，由铸铁与钢构架配合柱网支撑室内自由平面；屋顶平台排布着犹如中世纪戴头盔武士般的通风口与烟囱雕塑，是加泰罗尼亚现代主义世俗集合住宅的最高峰。',
    explanationEn: 'This landmark is Casa Milà (1906–1912), nicknamed "La Pedrera" (The Stone Quarry), in Barcelona by Antoni Gaudí. Constructed entirely without traditional load-bearing exterior walls, its undulating stone facade and sculptural roof terrace soldiers represent an organic architectural triumph.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Casa_Mila_Barcelona.jpg/800px-Casa_Mila_Barcelona.jpg',
    fallbackImage: '/images/artworks/casa-mila.jpg',
    tags: ['VisualID', 'Architecture', 'Gaudi', 'CasaMila', 'Barcelona'],
    difficulty: 1
  },

  // Slot 237 - Target Ans: 2 (C)
  arched_237: {
    id: 'arched_237',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1904 - 1906',
    questionZh: '下图中展示的由高迪改建、以五彩斑斓的碎瓷拼贴立面、骨骼状石质廊柱及拱起如巨龙脊背的鱼鳞琉璃瓦屋顶闻名的私宅是：',
    questionEn: 'The fantastical residential remodel below, celebrated for its iridescent trencadís ceramic mosaic facade, bone-like stone columns, and arched dragon-back tiled roof, is:',
    optionsZh: [
      '米拉之家 (Casa Milà)',
      '圣家族大教堂 (Sagrada Família)',
      '巴特罗之家 (Casa Batlló / 骨之屋)',
      '塔塞尔饭店 (Hôtel Tassel)'
    ],
    optionsEn: [
      'Casa Milà',
      'Sagrada Família',
      'Casa Batlló (House of Bones)',
      'Hôtel Tassel'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为安东尼·高迪于1904-1906年改建的巴特罗之家（Casa Batlló，又名“骨之屋”Casa dels ossos）。高迪将圣乔治屠龙的加泰罗尼亚民间传说具象化为建筑造型：屋顶隆起的彩色瓦楞象征巨龙的带鳞脊背，左上方的蒜头十字架象征刺入龙身的圣剑，二楼凸出的石灰石立柱犹如生物骨骼，外墙覆盖着莫奈《睡莲》般流光溢彩的碎瓷与玻璃（Trencadís）。',
    explanationEn: 'This residence is Casa Batlló (1904–1906) by Antoni Gaudí on Passeig de Gràcia. Mythologizing Saint George slaying the dragon, the roof represents the dragon\'s spine pierced by a cross-pommy turret, with skeletal bone balconies and iridescent trencadís glass mosaic skin.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Casa_Batllo_Overview_Barcelona.jpg/800px-Casa_Batllo_Overview_Barcelona.jpg',
    fallbackImage: '/images/artworks/casa-batllo.jpg',
    tags: ['VisualID', 'Architecture', 'Gaudi', 'CasaBatllo', 'Barcelona'],
    difficulty: 1
  },

  // Slot 238 - Target Ans: 3 (D)
  arched_238: {
    id: 'arched_238',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1893',
    questionZh: '下图中展示的位于布鲁塞尔、由建筑师维克多·奥塔（Victor Horta）设计、以蜿蜒流动的植物鞭绳曲线（Coup de Fouet）与暴露装饰性铸铁结构立柱著称的新艺术运动发轫之作是：',
    questionEn: 'The Brussels townhouse interior below, designed by Victor Horta with whiplash organic curves, mosaic floral floors, and exposed decorative cast-iron supports, is widely considered the inaugural masterpiece of Art Nouveau. What is it?',
    optionsZh: [
      '巴黎地铁入口 (Paris Metro Entrances)',
      '维也纳分离派会馆 (Secession Building)',
      '巴特罗之家 (Casa Batlló)',
      '塔塞尔饭店 (Hôtel Tassel, Brussels)'
    ],
    optionsEn: [
      'Paris Metro Entrances',
      'Secession Building',
      'Casa Batlló',
      'Hôtel Tassel, Brussels'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为比利时建筑大师维克多·奥塔（Victor Horta）于1893年在布鲁塞尔设计的塔塞尔饭店（Hôtel Tassel）。作为西方建筑史公认的新艺术运动（Art Nouveau）开山之作，奥塔首次将工业铸铁与锻铁大胆暴露在室内核心空间中，使其蜿蜒扭转如植物藤蔓与鞭绳（Coup de Fouet），与地面的马赛克拼花、墙面壁画以及彩色玻璃顶棚融为浑然一体的流动有机总体艺术。',
    explanationEn: 'This interior is Hôtel Tassel (Brussels, 1893) by Victor Horta, the definitive birthplace of Art Nouveau architecture. Horta unified exposed decorative cast-iron slender columns, whiplash curved wall stencils, mosaic floors, and skylight illumination into an organic whole.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hotel_Tassel_Stairway_Horta.jpg/800px-Hotel_Tassel_Stairway_Horta.jpg',
    fallbackImage: '/images/artworks/hotel-tassel.jpg',
    tags: ['VisualID', 'Architecture', 'ArtNouveau', 'Horta', 'Brussels'],
    difficulty: 2
  },

  // Slot 239 - Target Ans: 0 (A)
  arched_239: {
    id: 'arched_239',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1900',
    questionZh: '下图中展示的由埃克托尔·吉马尔（Hector Guimard）为1900年巴黎世界博览会设计的具有流线型铸铁植物藤蔓、兰花形灯柱与绿锈玻璃雨棚的城市公共设施是：',
    questionEn: 'The iconic green cast-iron urban entrances below, designed by Hector Guimard with vegetal sinuous curves and amber-glass floral lanterns for the 1900 Paris Exposition, are:',
    optionsZh: [
      '巴黎地铁入口设施 (Paris Métro Entrances)',
      '塔塞尔饭店铁艺门廊 (Hôtel Tassel Portico)',
      '科隆玻璃展馆入口 (Glass Pavilion Entry)',
      '维也纳分离派会馆门廊 (Secession Portal)'
    ],
    optionsEn: [
      'Paris Métro Entrances (Entrées du Métro de Paris)',
      'Hôtel Tassel Portico',
      'Glass Pavilion Entry',
      'Secession Portal'
    ],
    correctAnswer: 0,
    explanationZh: '此设施为法国新艺术运动建筑师埃克托尔·吉马尔（Hector Guimard）于1900年为巴黎地铁系统设计的铸铁入口（Paris Métro Entrances）。吉马尔采用模块化工厂预制铸铁构件，赋予其自然植物茎干破土而出的遒劲生命形态，搭配仿如昆虫翅膀的半透明玻璃雨棚和花苞状琥珀色路灯，成为巴黎新艺术运动（Style Guimard）永恒的城市文化符号。',
    explanationEn: 'These iconic structures are the Paris Métro Entrances (1900) by Hector Guimard. Utilizing modular cast iron enameled in pale vert-de-gris green, Guimard sculpted vegetal stalks, amber dragonfly-eye lamps, and sinuous glass canopies into high Art Nouveau emblems of urban mobility.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Metro_de_Paris_-_Station_Abbesses_1.jpg/800px-Metro_de_Paris_-_Station_Abbesses_1.jpg',
    fallbackImage: '/images/artworks/paris-metro-entrances.jpg',
    tags: ['VisualID', 'Architecture', 'ArtNouveau', 'Guimard', 'Paris'],
    difficulty: 1
  },

  // Slot 240 - Target Ans: 1 (B)
  arched_240: {
    id: 'arched_240',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1925 - 1926',
    questionZh: '下图中展示的由瓦尔特·格罗皮乌斯设计、以三层全透明外挂无柱玻璃幕墙包裹钢筋混凝土框架工坊楼的现代建筑里程碑是：',
    questionEn: 'The seminal modernist campus below, designed by Walter Gropius featuring a continuous three-story glass curtain wall suspended outside the structural concrete frame of its workshop wing, is:',
    optionsZh: [
      '阿尔费尔德法古斯鞋楦厂 (Fagus Factory)',
      '德绍包豪斯校舍 (Bauhaus Dessau Building)',
      '科莫诺沃科姆姆公寓 (Novocomum Como)',
      '维也纳分离派会馆 (Secession Building)'
    ],
    optionsEn: [
      'Fagus Factory, Alfeld',
      'Bauhaus Dessau Building',
      'Novocomum Como',
      'Secession Building, Vienna'
    ],
    correctAnswer: 1,
    explanationZh: '此建筑为瓦尔特·格罗皮乌斯（Walter Gropius）于1925-1926年设计的德绍包豪斯校舍（Bauhaus Dessau）。建筑以风车形非对称平面展开，各功能区（工坊楼、教学楼、学生宿舍）通过过街天桥有机衔接；最著名的工坊楼外立面彻底摒弃承重墙体，采用通体三层无柱外挂钢框玻璃幕墙（Curtain Wall），将内部结构与现代工业机器美学全景通透呈现，是国际主义现代建筑的原型圣地。',
    explanationEn: 'This landmark is the Bauhaus Dessau Building (1925–1926) designed by Walter Gropius. Composed of asymmetrical pinwheel functionalist wings connected by a bridge, its workshop block introduced the monumental glass curtain wall wrapping around corners, embodying functionalist transparency.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bauhaus_Dessau_Geb%C3%A4ude_2003.jpg/800px-Bauhaus_Dessau_Geb%C3%A4ude_2003.jpg',
    fallbackImage: '/images/artworks/bauhaus-dessau.jpg',
    tags: ['VisualID', 'Architecture', 'Bauhaus', 'Gropius', 'Modernism'],
    difficulty: 1
  },

  // Slot 241 - Target Ans: 2 (C)
  arched_241: {
    id: 'arched_241',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1929',
    questionZh: '下图中展示的由路德维希·密斯·凡·德·罗为1929年国际博览会设计的德国国家馆，以八根镀铬十字形钢柱支撑平屋顶与缟玛瑙石墙流动空间闻名，该建筑是：',
    questionEn: 'The iconic modernist exhibition structure below, designed by Ludwig Mies van der Rohe for the 1929 International Exposition featuring chrome-plated cruciform columns, golden onyx partition walls, and travertine reflecting pools, is:',
    optionsZh: [
      '图根哈特别墅 (Villa Tugendhat)',
      '范斯沃斯住宅 (Farnsworth House)',
      '巴塞罗那德国馆 (Barcelona Pavilion)',
      '新国家美术馆 (Neue Nationalgalerie)'
    ],
    optionsEn: [
      'Villa Tugendhat',
      'Farnsworth House',
      'Barcelona Pavilion (German Pavilion)',
      'Neue Nationalgalerie'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为密斯·凡·德·罗（Ludwig Mies van der Rohe）设计的1929年巴塞罗那世博会德国国家馆（Barcelona Pavilion）。密斯以极简主义“少即是多”（Less is more）与自由平面理念，仅由八根十字形镀铬钢柱承担轻巧的钢筋混凝土平屋顶自重，金黄色缟玛瑙石墙、深绿色蒂诺斯大理石与清澈的水池倒影自由穿插，创造了室内外空间无缝渗透的“流动空间”（Flowing Space）现代建筑奇迹。',
    explanationEn: 'This work is the Barcelona Pavilion (1929) by Ludwig Mies van der Rohe. Supported by eight slender cruciform chrome steel columns, its floating flat slab roof and freestanding planes of golden onyx and green alpine marble realized the modernist dream of "flowing space".',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Barcelona_Pavilion_Mies.jpg/800px-Barcelona_Pavilion_Mies.jpg',
    fallbackImage: '/images/artworks/barcelona-pavilion.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'Mies', 'BarcelonaPavilion'],
    difficulty: 1
  },

  // Slot 242 - Target Ans: 3 (D)
  arched_242: {
    id: 'arched_242',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1958',
    questionZh: '下图中展示的矗立于纽约曼哈顿公园大道、由密斯·凡·德·罗与菲利普·约翰逊设计、整座大楼后退红线留出开敞广场并由古铜色工字钢竖向竖框装饰的摩天大楼是：',
    questionEn: 'The 38-story Manhattan corporate headquarters below, designed by Ludwig Mies van der Rohe and Philip Johnson, set back from Park Avenue behind a granite plaza with vertical exterior bronze I-beam mullions, is:',
    optionsZh: [
      '家庭保险大楼 (Home Insurance Building)',
      '卡森·皮里·斯科特百货 (Carson Pirie Scott)',
      '米兰维拉斯加塔楼 (Torre Velasca)',
      '纽约西格拉姆大厦 (Seagram Building)'
    ],
    optionsEn: [
      'Home Insurance Building',
      'Carson Pirie Scott Building',
      'Torre Velasca, Milan',
      'Seagram Building, New York'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为密斯·凡·德·罗（Ludwig Mies van der Rohe）与菲利普·约翰逊设计的纽约西格拉姆大厦（Seagram Building，1958年落成）。大楼高38层，密斯打破曼哈顿高层建筑填满红线基底的商业惯例，主动后退街道三十米辟建了带喷泉的花岗岩公共广场；立面覆以琥珀色有色玻璃与深古铜色外挂非结构工字钢（I-beam）竖框，使摩天楼在严谨的理性网格中散发出古典希腊神庙般的肃穆比例，成为国际主义风格高层建筑的终极典范。',
    explanationEn: 'This high-rise is the Seagram Building (1958) on Park Avenue, New York, designed by Mies van der Rohe with Philip Johnson. Setting the tower back behind a generous public plaza and articulating the amber glass curtain wall with exterior bronze I-beam mullions, it became the benchmark of corporate International Style architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Seagram_Building_Midtown_Manhattan.jpg/800px-Seagram_Building_Midtown_Manhattan.jpg',
    fallbackImage: '/images/artworks/seagram-building.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'Mies', 'Skyscrapers'],
    difficulty: 2
  },

  // Slot 243 - Target Ans: 0 (A)
  arched_243: {
    id: 'arched_243',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1951',
    questionZh: '下图中展示的位于伊利诺伊州普莱诺福克斯河畔、由白色H型型钢柱悬挑架空于草坪之上、由四面纯净透明玻璃包裹单一大空间起居室的住宅杰作是：',
    questionEn: 'The radical transparent weekend retreat below, raised on white structural steel H-columns above the Fox River floodplain with floor-to-ceiling glass wrapping a single universal room, is:',
    optionsZh: [
      '范斯沃斯住宅 (Farnsworth House)',
      '萨伏伊别墅 (Villa Savoye)',
      '流水别墅 (Fallingwater)',
      '罗比住宅 (Robie House)'
    ],
    optionsEn: [
      'Farnsworth House, Plano',
      'Villa Savoye, Poissy',
      'Fallingwater, Mill Run',
      'Robie House, Chicago'
    ],
    correctAnswer: 0,
    explanationZh: '此建筑为路德维希·密斯·凡·德·罗于1945-1951年为伊迪丝·范斯沃斯医生设计的范斯沃斯住宅（Farnsworth House）。住宅由八根外置的白色喷漆宽翼缘工字钢柱将两块水平楼板和屋顶板悬浮架空于地面之上，四周全由落地通透平板玻璃包围，室内除核心筒木质卫生间与机械设备外没有任何内墙隔断，将密斯“皮与骨”（Skin and Bones）与“通用空间”（Universal Space）极简哲学推至物理极限。',
    explanationEn: 'This residence is Farnsworth House (1945–1951) in Plano, Illinois, designed by Mies van der Rohe. Elevated above the Fox River on eight white structural steel columns, its glass enclosure creates a pure, unencumbered universal room surrounded by nature.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Farnsworth_House_by_Mies_van_der_Rohe.jpg/800px-Farnsworth_House_by_Mies_van_der_Rohe.jpg',
    fallbackImage: '/images/artworks/farnsworth-house.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'Mies', 'FarnsworthHouse'],
    difficulty: 1
  },

  // Slot 244 - Target Ans: 1 (B)
  arched_244: {
    id: 'arched_244',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1910',
    questionZh: '下图中展示的位于芝加哥南区、以极具张力的连续深挑檐、连续排布的水平带窗与中央低矮壁炉核心著称的弗兰克·劳埃德·赖特“草原学派”住宅绝唱是：',
    questionEn: 'The horizontal Chicago residence below, celebrated for its sweeping cantilevered low-pitched hip roofs, continuous ribbons of leaded art glass, and central massive hearth, is Frank Lloyd Wright\'s Prairie School masterpiece. What is it?',
    optionsZh: [
      '流水别墅 (Fallingwater)',
      '罗比住宅 (Frederick C. Robie House)',
      '施泰纳住宅 (Steiner House)',
      '穆勒别墅 (Villa Müller)'
    ],
    optionsEn: [
      'Fallingwater',
      'Frederick C. Robie House',
      'Steiner House',
      'Villa Müller'
    ],
    correctAnswer: 1,
    explanationZh: '此建筑为弗兰克·劳埃德·赖特（Frank Lloyd Wright）于1909-1910年建成的弗雷德里克·C·罗比住宅（Robie House）。作为赖特“草原学派”（Prairie School）住宅的集大成者，建筑打破了传统立面盒子的封闭性，以极其舒展的低坡深远挑檐、水平罗马红砖长条砌缝与大面积水平连续带窗，将建筑牢牢贴附并融入中西部开阔平坦的平原大地，内部以壁炉为核心实现了开敞流动的自由空间。',
    explanationEn: 'This residence is the Robie House in Chicago (1909–1910) by Frank Lloyd Wright. The definitive icon of the Prairie School, it anchors architecture to the earth through dramatic steel-reinforced cantilevered eaves, horizontal Roman brickwork, and an open hearth plan.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Robie_House_Chicago.jpg/800px-Robie_House_Chicago.jpg',
    fallbackImage: '/images/artworks/robie-house.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'Wright', 'RobieHouse'],
    difficulty: 1
  },

  // Slot 245 - Target Ans: 2 (C)
  arched_245: {
    id: 'arched_245',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1935',
    questionZh: '下图中展示的将米黄色现浇钢筋混凝土阳台悬挑于天然熊跑溪瀑布巨石水流之上、将自然岩石直接作为室内地面与壁炉一部分的有机建筑巅峰杰作是：',
    questionEn: 'The world-famous residence below, featuring cantilevered reinforced concrete trays daringly poised over a natural roaring waterfall in rural Pennsylvania, is:',
    optionsZh: [
      '萨伏伊别墅 (Villa Savoye)',
      '罗比住宅 (Robie House)',
      '流水别墅 (Fallingwater / 考夫曼住宅)',
      '范斯沃斯住宅 (Farnsworth House)'
    ],
    optionsEn: [
      'Villa Savoye, Poissy',
      'Robie House, Chicago',
      'Fallingwater (Kaufmann House)',
      'Farnsworth House, Plano'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为弗兰克·劳埃德·赖特（Frank Lloyd Wright）于1935年在宾夕法尼亚州米尔伦设计的流水别墅（Fallingwater / Kaufmann Residence）。赖特拒绝将房子建在瀑布对面远观，而是大胆地直接将房子置于熊跑溪瀑布正上方，通过三层相互正交的大跨度悬臂钢筋混凝土平台，使流水声轰鸣于建筑肌理之中，现场天然出露的原生花岗岩直接成为客厅壁炉地台，实现了人工建筑与原初大自然不可分割的有机融合（Organic Architecture）。',
    explanationEn: 'This icon is Fallingwater (1935) designed by Frank Lloyd Wright for the Kaufmann family over Bear Run, Pennsylvania. Anchoring daring reinforced concrete cantilevered balconies into bedrock boulders over a waterfall, it realized Wright\'s philosophy of Organic Architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fallingwater_Wright.jpg/800px-Fallingwater_Wright.jpg',
    fallbackImage: '/images/artworks/fallingwater.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'Wright', 'Fallingwater'],
    difficulty: 1
  },

  // Slot 246 - Target Ans: 3 (D)
  arched_246: {
    id: 'arched_246',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1959',
    questionZh: '下图中展示的位于纽约曼哈顿第五大道、由下至上呈倒圆锥形盘旋展开、参观者乘电梯至顶层沿连续平缓螺旋坡道缓步下行观展的白色螺旋博物馆是：',
    questionEn: 'The white cylindrical landmark on Manhattan\'s Fifth Avenue below, featuring a continuous rising spiral ramp surrounding a sunlit central atrium designed by Frank Lloyd Wright, is:',
    optionsZh: [
      '毕尔巴鄂古根海姆博物馆 (Guggenheim Bilbao)',
      '巴黎蓬皮杜艺术中心 (Centre Pompidou)',
      '罗马国立二十一世纪艺术博物馆 (MAXXI Rome)',
      '纽约所罗门·R·古根海姆博物馆 (Solomon R. Guggenheim Museum)'
    ],
    optionsEn: [
      'Guggenheim Museum Bilbao',
      'Centre Pompidou, Paris',
      'MAXXI National Museum, Rome',
      'Solomon R. Guggenheim Museum, New York'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为弗兰克·劳埃德·赖特（Frank Lloyd Wright）生前最后落成的公共建筑代表作——纽约所罗门·R·古根海姆博物馆（Solomon R. Guggenheim Museum，1959年开放）。建筑形似一座白色的巨大倒置通天巴别塔或贝壳海螺，中央为四十米高的巨大玻璃天窗采光中庭，长达四百余米的无台阶单向连续螺旋坡道自上而下缓缓展开，彻底颠覆了传统西方博物馆分间穿行的网格游览流线。',
    explanationEn: 'This iconic building is the Solomon R. Guggenheim Museum (1959) in New York, Frank Lloyd Wright\'s late masterpiece. Defined by an inverted ziggurat coil encircling a ninety-foot glass dome atrium, visitors take an elevator to the top and descend along a continuous four-hundred-meter helical ramp.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Solomon_R._Guggenheim_Museum_NYC.jpg/800px-Solomon_R._Guggenheim_Museum_NYC.jpg',
    fallbackImage: '/images/artworks/guggenheim-ny.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'Wright', 'Guggenheim'],
    difficulty: 1
  },

  // Slot 247 - Target Ans: 0 (A)
  arched_247: {
    id: 'arched_247',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1928 - 1931',
    questionZh: '下图中展示的位于巴黎近郊普瓦西、由底层纤细架空立柱支撑、立面排布水平横向长窗并拥有弧形挡风板屋顶花园的纯白现代主义独栋住宅是：',
    questionEn: 'The pure white International Style villa in Poissy below, elevated on slender pilotis with horizontal ribbon windows and a sculpted solarium roof garden, is:',
    optionsZh: [
      '萨伏伊别墅 (Villa Savoye)',
      '流水别墅 (Fallingwater)',
      '图根哈特别墅 (Villa Tugendhat)',
      '罗比住宅 (Robie House)'
    ],
    optionsEn: [
      'Villa Savoye, Poissy',
      'Fallingwater',
      'Villa Tugendhat',
      'Robie House'
    ],
    correctAnswer: 0,
    explanationZh: '此建筑为勒·柯布西耶与皮埃尔·让纳雷于1928-1931年设计的普瓦西萨伏伊别墅（Villa Savoye）。作为现代建筑史最神圣的里程碑之一，萨伏伊别墅纯粹而完美地践行了柯布西耶1926年提出的“新建筑五点”：1. 钢筋混凝土柱底层架空（Pilotis）；2. 屋顶花园（Toit-jardin）；3. 自由平面（Plan libre）；4. 横向长条带窗（Fenêtre en longueur）；5. 自由立面（Façade libre），柯布称其为“光线与空间漫游的居住机器”（Machine à habiter）。',
    explanationEn: 'This monument is Villa Savoye (1928–1931) in Poissy, France, by Le Corbusier. It stands as the absolute manifesto of his "Five Points of a New Architecture": pilotis elevating the main volume, a roof terrace garden, free ground plan, horizontal ribbon windows, and free non-load-bearing facades.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/VillaSavoye_overview.jpg/800px-VillaSavoye_overview.jpg',
    fallbackImage: '/images/artworks/villa-savoye.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'LeCorbusier', 'VillaSavoye'],
    difficulty: 1
  },

  // Slot 248 - Target Ans: 1 (B)
  arched_248: {
    id: 'arched_248',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1947 - 1952',
    questionZh: '下图中展示的位于法国马赛、由粗野主义现浇清水混凝土粗壮架空柱支撑、立面布设红黄蓝遮阳板并内置上下双层复式交叉跃层住宅的十八层巨型集合住宅是：',
    questionEn: 'The massive 18-story reinforced concrete housing block in Marseille below, lifted on sculptural pilotis and featuring primary-colored brise-soleil and interlocking duplex apartments, is:',
    optionsZh: [
      '科莫诺沃科姆姆公寓 (Novocomum)',
      '马赛光芒之城联合公寓 (Unité d\'Habitation, Marseille)',
      '米兰维拉斯加塔楼 (Torre Velasca)',
      '罗马新古典王宫 (Palazzo Reale)'
    ],
    optionsEn: [
      'Novocomum, Como',
      'Unité d\'Habitation (Cité Radieuse), Marseille',
      'Torre Velasca, Milan',
      'Royal Palace, Naples'
    ],
    correctAnswer: 1,
    explanationZh: '此建筑为勒·柯布西耶于1947-1952年在法国马赛落成的马赛公寓（Unité d\'Habitation / Cité Radieuse）。大楼高18层，容纳337户跃层复式单元，以粗犷有力的现浇粗野主义清水混凝土（Béton Brut）柱廊架空底层，七层八层设有室内商业街与商店，屋顶设有幼儿园、戏水池与雕塑感通风道，是柯布西耶基于模度（Modulor）人体比例理论建构的战后“垂直花园城市”范本。',
    explanationEn: 'This complex is the Unité d\'Habitation (Cité Radieuse, 1947–1952) in Marseille by Le Corbusier. Erected in rough-cast Béton Brut concrete lifted on massive pilotis, it integrated 337 interlocking duplex apartments, an internal shopping street, and a rooftop nursery school scaled to the Modulor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Unite_d_habitation_Marseille.jpg/800px-Unite_d_habitation_Marseille.jpg',
    fallbackImage: '/images/artworks/unite-dhabitation.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'LeCorbusier', 'UniteDHabitation'],
    difficulty: 1
  },

  // Slot 249 - Target Ans: 2 (C)
  arched_249: {
    id: 'arched_249',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1950 - 1955',
    questionZh: '下图中展示的位于法国孚日山区、具有如巨型修女兜帽般沉重黑色悬挑屋顶、南立面散布大小不一漏斗状斜向深窗洞的雕塑感朝圣小教堂是：',
    questionEn: 'The sculptural pilgrimage chapel in the Vosges mountains below, featuring a sweeping dark concrete roof resembling a crab shell and a thick south wall pierced by irregular funnel-like colored-glass apertures, is:',
    optionsZh: [
      '萨伏伊别墅 (Villa Savoye)',
      '马赛公寓 (Unité d\'Habitation)',
      '朗香圣母朝圣所 (Notre-Dame du Haut at Ronchamp)',
      '圣家族大教堂 (Sagrada Família)'
    ],
    optionsEn: [
      'Villa Savoye',
      'Unité d\'Habitation',
      'Notre-Dame du Haut at Ronchamp',
      'Sagrada Família'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为勒·柯布西耶于1950-1955年设计的朗香圣母教堂（Notre-Dame du Haut, Ronchamp）。柯布西耶在此彻底打破了自己早期的正交几何白派教条，以极具表现力的大地雕塑曲面构筑空间：厚重倾斜的南立面错落嵌有数十个像潜望镜般的斜面深窗洞，内部漫射出幽微神圣的彩色光线；巨大的曲面钢筋混凝土屋顶内部其实隐藏了数公分的细缝支承柱，创造出屋顶如浮云般悬浮的神秘宗教氛围。',
    explanationEn: 'This monument is Notre-Dame du Haut at Ronchamp (1950–1955) by Le Corbusier. A radical departure from rationalist right angles, its sweeping curvilinear concrete roof, curved walls of recycled masonry, and south wall of tapered deep-set stained glass embrasures pioneered post-war sculptural modernism.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Notre_Dame_du_Haut_Ronchamp.jpg/800px-Notre_Dame_du_Haut_Ronchamp.jpg',
    fallbackImage: '/images/artworks/ronchamp.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'LeCorbusier', 'Ronchamp'],
    difficulty: 1
  },

  // Slot 250 - Target Ans: 3 (D)
  arched_250: {
    id: 'arched_250',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1932 - 1936',
    questionZh: '下图中展示的由朱塞佩·泰拉尼在科莫设计的以绝对严谨正方几何体量（宽33.2米、高16.6米比例模数）、大理石立面柱廊网格与玻璃通透中庭著称的意大利理性主义最高杰作是：',
    questionEn: 'The pristine Italian Rationalist monument in Como below, designed by Giuseppe Terragni with mathematical proportionality (33.2m width by 16.6m height), white Botticino marble grid framing, and a glazed atrium, is:',
    optionsZh: [
      '科莫诺沃科姆姆公寓 (Novocomum)',
      '米兰维拉斯加塔楼 (Torre Velasca)',
      '米兰二十一世纪展馆 (Milan Triennale)',
      '科莫法西斯大楼 (Casa del Fascio, Como)'
    ],
    optionsEn: [
      'Novocomum, Como',
      'Torre Velasca, Milan',
      'Milan Triennale Palace',
      'Casa del Fascio, Como'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为意大利理性主义（Razionalismo）建筑领袖朱塞佩·泰拉尼（Giuseppe Terragni）于1932-1936年在科莫设计的法西斯大楼（Casa del Fascio，现称卡萨·泰拉尼）。建筑严格遵循黄金分割比例，外形为长宽33.2米、高16.6米（恰为底边之一半）的正方棱柱体；四座立面根据朝向和内部采光变化设计各不相同的网格虚实开洞，中央为通高的采光玻璃中庭，是大理石几何理性与现代玻璃幕墙完美融汇的丰碑。',
    explanationEn: 'This icon is the Casa del Fascio (1932–1936) in Como by Giuseppe Terragni. Proportioned on a pure mathematical module (33.2m wide by 16.6m tall), its pristine white Botticino marble grid facades and glazed central sacro-civic hall represent the absolute peak of Italian Rationalism.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Casa_del_Fascio_Como.jpg/800px-Casa_del_Fascio_Como.jpg',
    fallbackImage: '/images/artworks/casa-del-fascio.jpg',
    tags: ['VisualID', 'Architecture', 'Rationalism', 'Terragni', 'Como'],
    difficulty: 1
  },

  // Slot 251 - Target Ans: 3 (D)
  arched_251: {
    id: 'arched_251',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1958',
    questionZh: '下图中展示的矗立于米兰历史中心、高106米、在第18层以上突然向外悬挑扩大、由BBPR事务所以外露斜向混凝土V形支撑呼应伦巴第中世纪城堡钟楼意象的地标摩天大楼是：',
    questionEn: 'The 106-meter brutalist tower in Milan below, designed by BBPR with a mushrooming cantilevered upper section supported by exposed diagonal concrete struts evoking medieval Lombard watchtowers, is:',
    optionsZh: [
      '米兰倍耐力大厦 (Pirelli Tower)',
      '科莫法西斯大楼 (Casa del Fascio)',
      '米兰大教堂钟楼 (Gothic Campanile)',
      '米兰维拉斯加塔楼 (Torre Velasca, Milan)'
    ],
    optionsEn: [
      'Pirelli Tower, Milan',
      'Casa del Fascio',
      'Milan Cathedral Campanile',
      'Torre Velasca, Milan'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为BBPR建筑事务所（贝尔焦约索、佩雷苏蒂、罗杰斯）于1958年在米兰建成的维拉斯加塔楼（Torre Velasca）。大楼共26层，下部18层为商业办公用房，上部住宅单元因空间需求向外大跨度悬挑，底部通过粗犷的外露斜向现浇混凝土支柱承托悬挑自重。BBPR打破了二战后机械复制的玻璃幕墙国际主义教条，将现代粗野主义结构力学与米兰大教堂、斯福尔扎城堡等伦巴第本土中世纪历史肌理深情对话。',
    explanationEn: 'This building is Torre Velasca in Milan (1958) by the BBPR partnership. Standing 106 meters tall with a top-heavy overhanging residential crown braced by exposed diagonal concrete trusses, it championed contextual modernism by referencing the silhouettes of medieval Lombard fortresses.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Torre_Velasca_Milano.jpg/800px-Torre_Velasca_Milano.jpg',
    fallbackImage: '/images/artworks/velasca-tower.jpg',
    tags: ['VisualID', 'Architecture', 'Modernism', 'BBPR', 'Milan', 'TorreVelasca'],
    difficulty: 1
  },

  // Slot 252 - Target Ans: 2 (C)
  arched_252: {
    id: 'arched_252',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1971 - 1977',
    questionZh: '下图中展示的位于巴黎市中心、将扶梯、排风管、水管与承重钢桁架全部暴露在建筑外表皮并按蓝、绿、黄、红四色功能进行工业编码的高技派建筑巅峰杰作是：',
    questionEn: 'The pioneering High-Tech cultural center in Paris below, turning architecture "inside out" by placing escalators, structural steel trusses, and color-coded mechanical ducts on the building\'s exterior, is:',
    optionsZh: [
      '毕尔巴鄂古根海姆博物馆 (Guggenheim Bilbao)',
      '巴黎埃菲尔铁塔 (Eiffel Tower)',
      '巴黎蓬皮杜国家艺术文化中心 (Centre Pompidou)',
      '纽约所罗门·R·古根海姆博物馆 (Guggenheim NY)'
    ],
    optionsEn: [
      'Guggenheim Museum Bilbao',
      'Eiffel Tower',
      'Centre Pompidou, Paris',
      'Solomon R. Guggenheim Museum, New York'
    ],
    correctAnswer: 2,
    explanationZh: '此建筑为伦佐·皮亚诺（Renzo Piano）与理查德·罗杰斯（Richard Rogers）于1971-1977年在巴黎博堡设计的蓬皮杜国家艺术文化中心（Centre Georges-Pompidou）。建筑开创性地将所有设备管线、循环走廊、巨型钢桁架全部剥离置于外墙外部：空调水管涂蓝色、水管涂绿色、电气管线涂黄色、观光电梯与安全通道涂鲜红色，使内部释放出长166米、宽48米没有任何立柱遮挡的纯净“通用空间”，是高技派建筑（High-Tech Architecture）的无上丰碑。',
    explanationEn: 'This landmark is the Centre Pompidou (1977) in Paris, designed by Renzo Piano and Richard Rogers. By turning the building inside-out—exposing giant gerberette steel trusses and color-coded service conduits (blue for air, green for water, yellow for electric, red for escalators)—the architects freed vast pillarless interior galleries.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Centre_Pompidou_Paris_Exterior.jpg/800px-Centre_Pompidou_Paris_Exterior.jpg',
    fallbackImage: '/images/artworks/centre-pompidou.jpg',
    tags: ['VisualID', 'Architecture', 'HighTech', 'Piano', 'Rogers', 'Pompidou'],
    difficulty: 1
  },

  // Slot 253 - Target Ans: 3 (D)
  arched_253: {
    id: 'arched_253',
    domain: 'visual_id',
    subCategory: 'Visual Recognition',
    era: '1997',
    questionZh: '下图中展示的位于西班牙巴斯克地区内维翁河畔、由三万三千片薄如纸张的天然钛合金金属鳞片包裹、以自由扭转舒展的雕塑体量引发举世闻名“毕尔巴鄂效应”的解构主义名作是：',
    questionEn: 'The shimmering titanium-clad Deconstructivist museum below, sprawling along the Nervión River in the Basque Country and generating the world-famous "Bilbao Effect", is:',
    optionsZh: [
      '罗马国立二十一世纪艺术博物馆 (MAXXI Rome)',
      '洛杉矶华特·迪士尼音乐厅 (Walt Disney Concert Hall)',
      '巴黎蓬皮杜艺术文化中心 (Centre Pompidou)',
      '毕尔巴鄂古根海姆博物馆 (Guggenheim Museum Bilbao)'
    ],
    optionsEn: [
      'MAXXI National Museum, Rome',
      'Walt Disney Concert Hall, Los Angeles',
      'Centre Pompidou, Paris',
      'Guggenheim Museum Bilbao'
    ],
    correctAnswer: 3,
    explanationZh: '此建筑为解构主义先驱弗兰克·盖里（Frank Gehry）设计的西班牙毕尔巴鄂古根海姆博物馆（Guggenheim Museum Bilbao，1997年落成）。盖里利用航空航天三维设计软件CATIA进行复杂的非线性几何双曲面计算，整座建筑如一朵在水岸盛开的金属钛花，外表皮由33,000片仅0.38毫米厚的钛合金鳞片覆盖，随着日光折射出金银相间的有机波光，以一栋划时代建筑彻底复兴了一座衰颓的重工业港口城市，被建筑史称为“毕尔巴鄂效应”。',
    explanationEn: 'This masterpiece is the Guggenheim Museum Bilbao (1997) in Spain, designed by Frank Gehry. Modeled using aerospace software CATIA and sheathed in 33,000 fluttering 0.38-millimeter titanium tiles, its organic fluid contours along the Nervión River transformed industrial decline into the cultural phenomenon known as the "Bilbao Effect".',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Guggenheim_Museum_Bilbao_Exterior.jpg/800px-Guggenheim_Museum_Bilbao_Exterior.jpg',
    fallbackImage: '/images/artworks/guggenheim-bilbao.jpg',
    tags: ['VisualID', 'Architecture', 'Deconstructivism', 'Gehry', 'GuggenheimBilbao'],
    difficulty: 1
  }
};
