// scripts/questions_part1.mjs - Real PDF Exam Questions (Scalapoli Authentic Items)
export const realPdfQuestions = [
  {
    id: "arched_001",
    era: "19th_century",
    category: "chronological_order",
    questionEn: "Place the following artistic movements in the correct chronological order:",
    questionZh: "请将以下艺术运动按照正确的时间先后顺序排列：",
    optionsEn: [
      "Neoclassicism, Impressionism, Expressionism, Pop Art",
      "Impressionism, Pop Art, Expressionism, Neoclassicism",
      "Impressionism, Expressionism, Neoclassicism, Pop Art",
      "Pop Art, Expressionism, Impressionism, Neoclassicism",
      "Neoclassicism, Impressionism, Pop Art, Expressionism"
    ],
    optionsZh: [
      "新古典主义、印象派、表现主义、波普艺术",
      "印象派、波普艺术、表现主义、新古典主义",
      "印象派、表现主义、新古典主义、波普艺术",
      "波普艺术、表现主义、印象派、新古典主义",
      "新古典主义、印象派、波普艺术、表现主义"
    ],
    correctAnswer: 0,
    explanationEn: "Neoclassicism flourished from the mid-18th century (c. 1760s). Impressionism developed in France in the 1870s. Expressionism emerged in the early 20th century (Die Brücke was founded in 1905). Pop Art originated in the mid-1950s in Britain and the US.",
    explanationZh: "新古典主义兴起于18世纪中叶（约1760年代）；印象派形成于19世纪70年代（1874年首次联合展览）；表现主义爆发于20世纪初（1905年德国桥社成立）；波普艺术兴起于20世纪50年代中期的英国与美国。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
    tags: ["Chronology", "Neoclassicism", "Impressionism", "Expressionism", "Pop Art"],
    difficulty: 1
  },
  {
    id: "arched_002",
    era: "20th_avant_garde",
    category: "visual_recognition",
    questionEn: "Who is the author of the work reproduced below?",
    questionZh: "下图中展示的几何构图作品的作者是谁？",
    optionsEn: [
      "Georges Braque",
      "René Magritte",
      "Piet Mondrian",
      "Claude Monet",
      "Amedeo Modigliani"
    ],
    optionsZh: [
      "乔治·布拉克",
      "勒内·马格里特",
      "皮特·蒙德里安",
      "克劳德·莫奈",
      "阿梅代奥·莫迪利亚尼"
    ],
    correctAnswer: 2,
    explanationEn: "Piet Mondrian is the principal master of De Stijl (Neoplasticism), celebrated for his orthogonal grid compositions with black lines and primary color planes.",
    explanationZh: "皮特·蒙德里安（Piet Mondrian）是荷兰风格派（新造型主义）的核心人物，以黑线正交网格与原色色块构图闻名于世。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/800px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
    tags: ["Mondrian", "De Stijl", "Neoplasticism", "Abstract Art"],
    difficulty: 1
  },
  {
    id: "arched_003",
    era: "20th_avant_garde",
    category: "visual_recognition",
    questionEn: "Who is the author of the work in the picture (biomorphic abstract forms with celestial and star motifs)?",
    questionZh: "图片中具有生物形态抽象元素与星芒符号的绘画作品作者是谁？",
    optionsEn: [
      "Joan Miró",
      "Salvador Dalí",
      "Pablo Picasso",
      "Wassily Kandinsky",
      "René Magritte"
    ],
    optionsZh: [
      "胡安·米罗",
      "萨尔瓦多·达利",
      "巴勃罗·毕加索",
      "瓦西里·康定斯基",
      "勒内·马格里特"
    ],
    correctAnswer: 0,
    explanationEn: "Joan Miró developed a unique surrealist poetic language featuring biomorphic signs, amoebic forms, and playful cosmic symbols like stars, eyes, and birds.",
    explanationZh: "胡安·米罗（Joan Miró）开创了独特的超现实主义诗性符号语言，融合了变形虫生物形态、星芒、飞鸟与自由纯净的线条色彩。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Joan_Mir%C3%B3_in_1967.jpg/800px-Joan_Mir%C3%B3_in_1967.jpg",
    tags: ["Joan Miró", "Surrealism", "Biomorphic Abstraction"],
    difficulty: 1
  },
  {
    id: "arched_004",
    era: "postwar_contemporary",
    category: "technique_material",
    questionEn: "Who was the first artist to systematically use the dripping technique (action painting)?",
    questionZh: "哪位艺术家率先系统性地开创并使用了“滴画技法”（行动绘画）？",
    optionsEn: [
      "Andy Warhol",
      "Roy Lichtenstein",
      "Jackson Pollock",
      "Piet Mondrian",
      "Marcel Duchamp"
    ],
    optionsZh: [
      "安迪·沃霍尔",
      "罗伊·利希滕斯坦",
      "杰克逊·波洛克",
      "皮特·蒙德里安",
      "马塞尔·杜尚"
    ],
    correctAnswer: 2,
    explanationEn: "Jackson Pollock revolutionized American Abstract Expressionism in the late 1940s by laying unstretched canvas on the floor and dripping industrial enamel paint with sticks and trowels (Action Painting).",
    explanationZh: "杰克逊·波洛克（Jackson Pollock）在20世纪40年代末将未绷紧的画布铺在地面上，用木棍和画刀泼洒工业瓷漆，开创了举世瞩目的“行动绘画”（Action Painting）与滴画技法。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Jackson_Pollock_1949.jpg/800px-Jackson_Pollock_1949.jpg",
    tags: ["Jackson Pollock", "Dripping", "Action Painting", "Abstract Expressionism"],
    difficulty: 1
  },
  {
    id: "arched_005",
    era: "postwar_contemporary",
    category: "visual_recognition",
    questionEn: "Which of the following artists painted the famous banana album cover for The Velvet Underground & Nico in 1967?",
    questionZh: "以下哪位艺术家在1967年为摇滚乐队地下丝绒（The Velvet Underground）的首张专辑设计了著名的香蕉唱片封面？",
    optionsEn: [
      "Robert Rauschenberg",
      "Roy Lichtenstein",
      "Christo",
      "Andy Warhol",
      "Keith Haring"
    ],
    optionsZh: [
      "罗伯特·劳森伯格",
      "罗伊·利希滕斯坦",
      "克里斯托",
      "安迪·沃霍尔",
      "凯斯·哈林"
    ],
    correctAnswer: 3,
    explanationEn: "Andy Warhol produced the album and created the iconic peel-off banana screenprint cover with the text 'Peel slowly and see'.",
    explanationZh: "安迪·沃霍尔（Andy Warhol）作为该乐队的赞助人与制作人，设计了这张标志性的可剥皮黄色香蕉丝网版画封面，附有‘Peel slowly and see’字样。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_by_Jack_Mitchell.jpg/800px-Andy_Warhol_by_Jack_Mitchell.jpg",
    tags: ["Andy Warhol", "Pop Art", "Album Cover", "Consumer Culture"],
    difficulty: 1
  },
  {
    id: "arched_006",
    era: "20th_avant_garde",
    category: "technique_material",
    questionEn: "Who invented the concept of the 'ready-made' in modern art?",
    questionZh: "现代艺术中“现成品”（Ready-made）这一颠覆性概念是由谁创立的？",
    optionsEn: [
      "Andy Warhol",
      "Marcel Duchamp",
      "Man Ray",
      "Francis Picabia",
      "Joan Miró"
    ],
    optionsZh: [
      "安迪·沃霍尔",
      "马塞尔·杜尚",
      "曼·雷",
      "弗朗西斯·皮卡比亚",
      "胡安·米罗"
    ],
    correctAnswer: 1,
    explanationEn: "Marcel Duchamp coined the term 'readymade' to describe prefabricated, mass-produced ordinary objects elevated to art by the artist's choice and contextual shift (e.g. Bicycle Wheel 1913, Fountain 1917).",
    explanationZh: "马塞尔·杜尚（Marcel Duchamp）于1913~1917年间创立“现成品”（Ready-made）概念，通过挑选日常工业制品并剥离其实用功能，彻底颠覆了关于手艺技巧与艺术本体的传统定义。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Marcel_Duchamp_1920_by_Man_Ray.jpg/800px-Marcel_Duchamp_1920_by_Man_Ray.jpg",
    tags: ["Marcel Duchamp", "Ready-made", "Dadaism", "Conceptual Art"],
    difficulty: 1
  },
  {
    id: "arched_007",
    era: "20th_avant_garde",
    category: "visual_recognition",
    questionEn: "The famous painting 'Canto d'amore' (The Song of Love, 1914), depicting a classical Apollo head and a surgeon's rubber glove, is a work by:",
    questionZh: "名作《爱之歌》（Canto d'amore, 1914，画面中并置了古典阿波罗头像与外科橡胶手套）是哪位画家的代表作？",
    optionsEn: [
      "René Magritte",
      "Marc Chagall",
      "Giorgio de Chirico",
      "Carlo Carrà",
      "Salvador Dalí"
    ],
    optionsZh: [
      "勒内·马格里特",
      "马克·夏加尔",
      "乔治·德·基里科",
      "卡洛·卡拉",
      "萨尔瓦多·达利"
    ],
    correctAnswer: 2,
    explanationEn: "Giorgio de Chirico created 'The Song of Love' in 1914, juxtapositioning an Apollo Belvedere cast, a red rubber glove, and a green ball in a silent arcaded Italian piazza, founding Metaphysical Art (Pittura Metafisica).",
    explanationZh: "乔治·德·基里科（Giorgio de Chirico）于1914年创作《爱之歌》，将贝维德勒阿波罗石膏头像、红色外科手套与绿色小球悬挂在空寂的意大利拱廊广场旁，成为形而上画派的核心经典，对超现实主义启发极大。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Giorgio_de_Chirico_1936.jpg/800px-Giorgio_de_Chirico_1936.jpg",
    tags: ["Giorgio de Chirico", "Pittura Metafisica", "Song of Love", "Italian Art"],
    difficulty: 2
  },
  {
    id: "arched_008",
    era: "20th_avant_garde",
    category: "visual_recognition",
    questionEn: "The iconic surrealist painting 'The Persistence of Memory' (1931), featuring melting soft clocks, was created by:",
    questionZh: "以融化的软表闻名于世的标志性超现实主义名画《记忆的永恒》（1931）是由谁创作的？",
    optionsEn: [
      "Salvador Dalí",
      "René Magritte",
      "Paul Klee",
      "Max Ernst",
      "Marcel Duchamp"
    ],
    optionsZh: [
      "萨尔瓦多·达利",
      "勒内·马格里特",
      "保罗·克利",
      "马克斯·恩斯特",
      "马塞尔·杜尚"
    ],
    correctAnswer: 0,
    explanationEn: "Salvador Dalí developed his 'paranoiac-critical method' to materialize dreamscapes and irrational phobias, painting soft pocket watches melting in the desolate landscape of Port Lligat.",
    explanationZh: "萨尔瓦多·达利（Salvador Dalí）运用其“偏执狂批判法”将梦境与非理性潜意识具象化，《记忆的永恒》中垂挂在枯枝与怪诞生物上的软表成为了时间流逝与相对性的视觉丰碑。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg",
    tags: ["Salvador Dalí", "Surrealism", "Persistence of Memory", "Soft Clocks"],
    difficulty: 1
  },
  {
    id: "arched_009",
    era: "20th_avant_garde",
    category: "visual_recognition",
    questionEn: "In 1917, Marcel Duchamp submitted a porcelain urinal signed 'R. Mutt 1917' to the Society of Independent Artists. What is its official title?",
    questionZh: "1917年，马塞尔·杜尚向独立艺术家协会提交了一个署名‘R. Mutt 1917’的小便斗现成品，该作品的正式名称是？",
    optionsEn: [
      "Fountain",
      "The Bride Stripped Bare by Her Bachelors, Even",
      "Bicycle Wheel",
      "L.H.O.O.Q.",
      "Bottle Rack"
    ],
    optionsZh: [
      "泉 (Fountain)",
      "大玻璃 (甚至新娘也被光棍汉剥光了衣服)",
      "自行车轮 (Bicycle Wheel)",
      "L.H.O.O.Q. (带胡须的蒙娜丽莎)",
      "瓶架 (Bottle Rack)"
    ],
    correctAnswer: 0,
    explanationEn: "Duchamp purchased a standard Bedfordshire urinal, turned it 90 degrees, signed it 'R. Mutt 1917', and titled it 'Fountain', triggering modern conceptual art history.",
    explanationZh: "杜尚购买了一个贝德福德郡标准瓷小便斗，旋转90度平放并签上假名‘R. Mutt 1917’，命名为《泉》（Fountain），成为20世纪观念艺术的分水岭。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Duchamp_Fountain.jpg/800px-Duchamp_Fountain.jpg",
    tags: ["Marcel Duchamp", "Fountain", "Dadaism", "Readymade"],
    difficulty: 1
  },
  {
    id: "arched_009_b",
    era: "20th_avant_garde",
    category: "technique_material",
    questionEn: "René Magritte's painting style makes extensive use of which classical figurative illusionistic technique?",
    questionZh: "勒内·马格里特的超现实主义绘画风格广泛运用了哪种传统的具象错视技法？",
    optionsEn: [
      "Collage",
      "Frottage",
      "Flochetage",
      "Trompe-l'œil",
      "Pointillism"
    ],
    optionsZh: [
      "拼贴法 (Collage)",
      "拓印法 (Frottage)",
      "分色笔触法 (Flochetage)",
      "拟真错视画法 (Trompe-l'œil)",
      "点彩法 (Pointillism)"
    ],
    correctAnswer: 3,
    explanationEn: "Magritte rendered objects with academic, ultra-realistic precision (trompe-l'œil) to create cognitive shock when ordinary items are juxtaposed in impossible philosophical contexts.",
    explanationZh: "马格里特采用极度写实且学院派精细的“拟真错视”（Trompe-l'œil）技法，让画中物品看似完全真实，却处于悖论逻辑之中，引发深刻的哲学认知震撼。",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ren%C3%A9_Magritte_1965.jpg/800px-Ren%C3%A9_Magritte_1965.jpg",
    tags: ["René Magritte", "Trompe-l'oeil", "Surrealism", "Illusionism"],
    difficulty: 2
  }
];
