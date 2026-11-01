/**
 * scripts/m6_questions/artist_movement_replacements.js
 * 24 Replacement Questions for slots:
 * arched_132, 133, 138, 140, 141, 143, 144, 145, 146, 149, 150, 151,
 * 152, 153, 154, 156, 158, 159, 160, 161, 162, 163, 164, 165
 * Answer Key counts: 6 A (0), 6 B (1), 7 C (2), 5 D (3) = 24
 */

export const ARTIST_MOVEMENT_REPLACEMENTS = {
  arched_132: {
    id: 'arched_132',
    domain: 'artist_movement',
    subCategory: 'Artistic Affiliations',
    era: '1924 - 1939',
    questionZh: '下列哪组大师级艺术家均在20世纪20至30年代作为核心成员深入参与了超现实主义（Surrealism）视觉艺术的探索与创作？',
    questionEn: 'Which of the following cohorts of master artists were centrally affiliated with the international Surrealist visual art movement during the 1920s and 1930s?',
    optionsZh: [
      '萨尔瓦多·达利、雷内·马格里特、胡安·米罗、阿尔贝托·贾科梅蒂',
      '瓦尔特·格罗皮乌斯、密斯·凡·德·罗、勒·柯布西耶、阿道夫·洛斯',
      '翁贝托·波丘尼、卡洛·卡拉、菲利波·马里内蒂、贾科莫·巴拉',
      '特奥·范·杜斯堡、皮特·蒙德里安、格里特·里特费尔德、巴特·范·德·莱克'
    ],
    optionsEn: [
      'Salvador Dalí, René Magritte, Joan Miró, and Alberto Giacometti',
      'Walter Gropius, Ludwig Mies van der Rohe, Le Corbusier, and Adolf Loos',
      'Umberto Boccioni, Carlo Carrà, Filippo Tommaso Marinetti, and Giacomo Balla',
      'Theo van Doesburg, Piet Mondrian, Gerrit Rietveld, and Bart van der Leck'
    ],
    correctAnswer: 0,
    explanationZh: '达利、马格里特、米罗与贾科梅蒂是超现实主义画派与雕塑的核心旗手。格罗皮乌斯等人为现代主义建筑大师；波丘尼等人为未来主义先锋；范·杜斯堡与蒙德里安则属于风格派。',
    explanationEn: 'Dalí, Magritte, Miró, and Giacometti formed the central visual core of Surrealism in Paris. The other groups represent Modernist Architecture, Italian Futurism, and De Stijl respectively.',
    tags: ['ArtistMovement', 'Surrealism', 'Dali', 'Magritte', 'Miro', 'Giacometti'],
    difficulty: 1
  },

  arched_133: {
    id: 'arched_133',
    domain: 'artist_movement',
    subCategory: 'Artistic Philosophy',
    era: '1910 - 1920',
    questionZh: '1917年乔治·德·基里科（Giorgio de Chirico）与卡洛·卡拉（Carlo Carrà）在费拉拉军医院相遇并共同奠定形而上画派（Pittura Metafisica）理论时，其核心艺术主张是：',
    questionEn: 'When Giorgio de Chirico and Carlo Carrà formulated Metaphysical Art (Pittura Metafisica) in Ferrara in 1917, what was their central artistic premise?',
    optionsZh: [
      '歌颂内燃机轰鸣与现代工业城市的机械速度与暴力革命',
      '通过神秘的空旷意大利广场、静止的人体模型与不合理的投影，揭示日常事物背后凝固的神秘与超验哲学',
      '以彻底无透视的红黄蓝三原色网格构建宇宙普适平衡法则',
      '利用偶发拼贴与报纸碎屑嘲讽资产阶级的理性与第一次世界大战'
    ],
    optionsEn: [
      'To celebrate internal combustion engines, mechanical speed, and violent revolutionary warfare',
      'To evoke enigmatic Italian piazzas, tailor mannequins, and uncanny shadows revealing the metaphysical mystery behind ordinary objects',
      'To construct universal cosmic harmony using non-perspectival red, yellow, and blue orthogonal grids',
      'To deploy chance collages and newspaper clippings to parody bourgeois rationality and World War I'
    ],
    correctAnswer: 1,
    explanationZh: '形而上画派通过描绘寂静无声的文艺复兴式空旷拱廊广场、无面五官的裁缝假人与怪诞静物并置，表达凝固、孤独与超越现实的梦境哲学，与未来主义的喧嚣速度截然对立。',
    explanationEn: 'Metaphysical Painting rejected Futurist noise and dynamism in favor of melancholic, silent colonnaded piazzas, featureless tailor mannequins, and disquieting classical statues suspended in frozen time.',
    tags: ['ArtistMovement', 'Metaphysical', 'DeChirico', 'Carra', 'Ferrara'],
    difficulty: 2
  },

  arched_138: {
    id: 'arched_138',
    domain: 'artist_movement',
    subCategory: 'Sculptural Theory',
    era: '1913',
    questionZh: '翁贝托·波丘尼在1913年创作的未来主义青铜雕塑代表作《空间中连续性的唯一形体》（Unique Forms of Continuity in Space）中，所践行雕塑核心革新是：',
    questionEn: 'In his iconic 1913 bronze sculpture "Unique Forms of Continuity in Space", what radical sculptural innovation did Umberto Boccioni pioneer?',
    optionsZh: [
      '用现成工业金属零件拼装出的静态无动力机械结构',
      '严格遵从希腊古典人体黄金比例与绝对对称解剖学',
      '打破封闭轮廓，将运动人体的肌肉块面与穿行其间的流动气流、空间环境融为连续的空气动力学流线翼面',
      '使用原色烤漆铁管组装极简主义几何方盒'
    ],
    optionsEn: [
      'Assembling non-motorized static kinetic structures using ready-made industrial spare parts',
      'Strictly adhering to classical Greek golden proportions and absolute symmetrical anatomy',
      'Dissolving solid contours to fuse the muscular strides of the walking figure with surrounding air currents into aerodynamic dynamic planes',
      'Erecting minimalist geometric cubes fabricated from primary-color enameled steel tubes'
    ],
    correctAnswer: 2,
    explanationZh: '波丘尼打破了传统雕塑封闭静态的实体边界，使疾行人体与周围的大气空间发生物理互渗（plastic dynamism），流线型块面将运动的时间过程凝固在空间中。',
    explanationEn: 'Boccioni eliminated the traditional closed silhouette, fusing the walking figure with ambient space so that trailing aerodynamic curves eternalize the trajectory of motion and speed.',
    tags: ['ArtistMovement', 'Futurism', 'Boccioni', 'Sculpture', 'Dynamism'],
    difficulty: 2
  },

  arched_140: {
    id: 'arched_140',
    domain: 'artist_movement',
    subCategory: 'Theoretical Manifestos',
    era: '1917',
    questionZh: '荷兰风格派（De Stijl）由皮特·蒙德里安与特奥·范·杜斯堡于1917年创立时，其宣扬的“新造型主义”（Neoplasticism）核心教条是：',
    questionEn: 'Founded in 1917 by Piet Mondrian and Theo van Doesburg, what was the core dogma of De Stijl\'s "Neoplasticism" (Nieuwe Beelding)?',
    optionsZh: [
      '彻底剔除具象自然形态，仅允许使用水平垂直正交线、黑色网格、三原色（红黄蓝）及三非色（黑白灰）来表达宇宙的普遍纯粹和谐',
      '利用弯曲波动的植物藤蔓曲线与华丽有机铸铁来重现自然生命力',
      '依靠潜意识自动联想与梦境碎片的无序自由拼贴',
      '模仿古典希腊罗马神庙的多立克柱廊与山形三角楣'
    ],
    optionsEn: [
      'Complete elimination of figurative forms, restricting visual expression to horizontal-vertical lines, primary colors (red, yellow, blue), and non-colors (black, white, grey)',
      'Deploying sinuous, whiplash floral curves and organic cast iron to celebrate biological vitality',
      'Relying on subconscious free association and irrational dream-montage techniques',
      'Replicating classical Greek and Roman colonnades and pediment geometries'
    ],
    correctAnswer: 0,
    explanationZh: '新造型主义严格排斥一切具象自然模仿与斜线，坚信直角相交与纯粹原色能超越个体情感，揭示宇宙与人类精神内在的纯粹几何法则。',
    explanationEn: 'Mondrian and Van Doesburg established that true spiritual harmony required stripping away naturalistic illusion, reducing all visual art to straight orthogonal intersections and pure primary colors.',
    tags: ['ArtistMovement', 'DeStijl', 'Mondrian', 'VanDoesburg', 'Neoplasticism'],
    difficulty: 1
  },

  arched_141: {
    id: 'arched_141',
    domain: 'artist_movement',
    subCategory: 'Movement Schisms',
    era: '1924',
    questionZh: '1924年特奥·范·杜斯堡提出“要素主义”（Elementarism）并在作品中引入45度对角斜线，直接导致了哪位风格派核心奠基人的愤怒决裂并退出运动？',
    questionEn: 'In 1924, Theo van Doesburg formulated "Elementarism" and introduced 45-degree diagonal lines into compositions, causing the immediate rupture and departure of which founder?',
    optionsZh: [
      '勒·柯布西耶 (Le Corbusier)',
      '瓦尔特·格罗皮乌斯 (Walter Gropius)',
      '萨尔瓦多·达利 (Salvador Dalí)',
      '皮特·蒙德里安 (Piet Mondrian)'
    ],
    optionsEn: [
      'Le Corbusier',
      'Walter Gropius',
      'Salvador Dalí',
      'Piet Mondrian'
    ],
    correctAnswer: 3,
    explanationZh: '蒙德里安坚信水平线与垂直线的正交关系是宇宙不可动摇的永恒平静平衡，而范·杜斯堡坚持斜线能赋予现代生活动能。两人在1924年因此理论分歧彻底决裂，蒙德里安退出风格派。',
    explanationEn: 'Mondrian regarded the strict horizontal-vertical grid as a sacred cosmic absolute. When Van Doesburg introduced dynamic 45-degree diagonals in his Elementarist manifestos, Mondrian resigned from De Stijl in protest.',
    tags: ['ArtistMovement', 'DeStijl', 'Mondrian', 'VanDoesburg', 'Elementarism'],
    difficulty: 2
  },

  arched_143: {
    id: 'arched_143',
    domain: 'artist_movement',
    subCategory: 'Iconography',
    era: '1914 - 1918',
    questionZh: '乔治·德·基里科在形而上画派经典杰作（如《赫克托耳与安德洛玛刻》《不安的缪斯》）中反复出现的标志性核心母题是：',
    questionEn: 'Which iconic visual motif recurs persistently throughout Giorgio de Chirico\'s metaphysical masterworks such as "Hector and Andromache" and "The Disquieting Muses"?',
    optionsZh: [
      '疾驰而过的现代化蒸汽机车与电报电缆',
      '工厂车间中被机械齿轮吞噬的产业工人面孔',
      '无五官特征的裁缝人体假人模型（Mannequins）与几何测绘仪器',
      '在巴洛克旋涡中升天的天使与圣徒群像'
    ],
    optionsEn: [
      'Speeding modern steam locomotives and electric telegraph cables',
      'Industrial factory workers swallowed by mechanical cogwheels',
      'Faceless dressmaker mannequins assembled with draftsman geometric tools',
      'Soaring Baroque swarms of angels and saints ascending into gilded clouds'
    ],
    correctAnswer: 2,
    explanationZh: '基里科创造了缝纫人体木假人、三角测量尺、黑板与石膏几何体并置的神秘意象，剥离了人的生物属性与情感表情，化身为永恒寂静的存在哲学符号。',
    explanationEn: 'De Chirico replaced living humans with blank tailor mannequins composed of set squares, armatures, and mathematical props, representing emotionless, enigmatic ciphers within silent architectural plazas.',
    tags: ['ArtistMovement', 'Metaphysical', 'DeChirico', 'Mannequin', 'Iconography'],
    difficulty: 2
  },

  arched_144: {
    id: 'arched_144',
    domain: 'artist_movement',
    subCategory: 'Creative Techniques',
    era: '1962',
    questionZh: '安迪·沃霍尔（Andy Warhol）在1962年转向并确立为波普艺术核心创作手段的工业复制技术是：',
    questionEn: 'In 1962, which commercial printmaking technique did Andy Warhol adopt as his signature method to revolutionize Pop Art?',
    optionsZh: [
      '精细的手工青铜失蜡浇铸与古典打磨法',
      '照相丝网印刷技术（Photo Silk-Screen Printing）',
      '传统湿壁画（Fresco）在生石灰抹灰层上的分天作画',
      '纯手工蛋彩画在杨木板上的金箔打磨'
    ],
    optionsEn: [
      'Precision lost-wax bronze casting and classical patination',
      'Photo silkscreen printing (screenprinting)',
      'Traditional buon fresco on wet slaked-lime plaster sections',
      'Egg tempera painstakingly layered on gessoed poplar panels'
    ],
    correctAnswer: 1,
    explanationZh: '沃霍尔引入照相丝网印刷，通过将新闻照片直接制版并在画布上机械重复刮墨，故意保留油墨渗漏、错位与批次差异，消解了传统艺术独一无二的“灵光”（Aura）。',
    explanationEn: 'Warhol transformed mass-media press imagery into fine art via photo silkscreening, using industrial squeegees to produce mechanically repeated prints that challenged traditional notions of artistic originality.',
    tags: ['ArtistMovement', 'PopArt', 'Warhol', 'Screenprinting', 'Technique'],
    difficulty: 1
  },

  arched_145: {
    id: 'arched_145',
    domain: 'artist_movement',
    subCategory: 'Creative Techniques',
    era: '1961 - 1965',
    questionZh: '罗伊·利希滕斯坦（Roy Lichtenstein）在其经典波普画作（如《溺水之女》《空中火力》）中模拟廉价印刷漫画的核心技法特征是：',
    questionEn: 'What distinctive graphic technique did Roy Lichtenstein meticulously reproduce by hand in his iconic Pop Art paintings such as "Drowning Girl" and "Whaam!"?',
    optionsZh: [
      '本戴网点（Ben-Day dots）、粗黑轮廓线与刺目的三原色填充',
      '薄雾渐晕法（Sfumato）与多层半透明光油罩染',
      '狂乱飞溅的油彩滴流（Drip painting）与厚重颜料刮刀堆叠',
      '细碎的纯色光点并置（Pointillism）光学混色'
    ],
    optionsEn: [
      'Hand-stenciled Ben-Day dots, thick black outlines, and bold primary color fills',
      'Atmospheric sfumato shading with translucent resin glazes',
      'Spontaneous enamel dripping, splattering, and heavy impasto palette-knife slashes',
      'Scientific optical pointillist dots based on prismatic color theory'
    ],
    correctAnswer: 0,
    explanationZh: '利希滕斯坦手工借助穿孔金属网板精准复现大众连环画中的“本戴点”（Ben-Day dots），配合粗黑勾边、扁平色块与对话气泡框，将廉价通俗图像升华为美术馆殿堂的冷酷审视。',
    explanationEn: 'Lichtenstein mimicked commercial four-color comic book printing using hand-applied Ben-Day dots, bold black contours, speech balloons, and uniform primary tones, monumentalizing pulp culture into high art.',
    tags: ['ArtistMovement', 'PopArt', 'Lichtenstein', 'BenDayDots', 'Comics'],
    difficulty: 1
  },

  arched_146: {
    id: 'arched_146',
    domain: 'artist_movement',
    subCategory: 'Architectural Movements',
    era: '1925 - 1926',
    questionZh: '瓦尔特·格罗皮乌斯在设计包豪斯德绍校舍（Bauhaus Dessau, 1925-1926）工场车间时，开创的革命性现代主义建筑构造特征是：',
    questionEn: 'In his design of the Bauhaus Dessau workshop wing (1925–1926), what revolutionary structural innovation did Walter Gropius introduce?',
    optionsZh: [
      '承重砖石厚墙与罗马式圆拱开窗',
      '外立面饰有繁复植物藤蔓铸铁浮雕的哥特式尖拱',
      '将钢筋混凝土承重立柱后退，让三层连续无支撑的通透玻璃幕墙（Glass Curtain Wall）悬挂于建筑转角',
      '覆以金色马赛克与洋葱头穹顶的拜占庭式拱券'
    ],
    optionsEn: [
      'Thick load-bearing masonry walls pierced by small Romanesque round windows',
      'Gothic pointed arches clad with undulating Art Nouveau organic cast iron',
      'Setting reinforced concrete columns back from the facade to hang an unbroken, three-story glass curtain wall wrapping transparently around corners',
      'Byzantine squinches topped by gilded mosaics and onion domes'
    ],
    correctAnswer: 2,
    explanationZh: '格罗皮乌斯把混凝土承重骨架内缩，将外墙完全解放为大面积悬挂的透明玻璃幕墙，消除了建筑转角立柱的厚重封闭感，奠定了国际现代主义建筑透明性与功能主义标准。',
    explanationEn: 'Gropius recessed the structural reinforced concrete pillars, allowing the exterior envelope to dissolve into a cantilevered three-story glass curtain wall that turned structural transparency into an international modern manifesto.',
    tags: ['ArtistMovement', 'Modernism', 'Bauhaus', 'Gropius', 'CurtainWall'],
    difficulty: 2
  },

  arched_149: {
    id: 'arched_149',
    domain: 'artist_movement',
    subCategory: 'Theoretical Manifestos',
    era: '1926',
    questionZh: '勒·柯布西耶在1926年系统提出的“新建筑五点”（Five Points of Architecture）并在萨伏伊别墅中完美实现的五个要素包括：',
    questionEn: 'Which five specific elements constitute Le Corbusier\'s seminal 1926 manifesto "Five Points of Architecture", as realized in the Villa Savoye?',
    optionsZh: [
      '尖券拱顶、飞券支撑、彩色花窗、束柱、十字交叉平面',
      '底层独立支柱（Pilotis）、屋顶花园、自由平面、水平横向长窗、自由立面',
      '洋葱穹顶、马蹄形拱券、彩砖贴面、钟楼、多立克柱式',
      '重型厚石墙、小高窗、半圆拱券、桶形拱顶、双塔西立面'
    ],
    optionsEn: [
      'Pointed rib vaults, flying buttresses, stained-glass clerestories, clustered piers, and Latin cross plans',
      'Pilotis (stilts), roof garden, free plan, horizontal ribbon windows, and free facade',
      'Onion domes, horseshoe arches, polychrome majolica tilework, campanile towers, and Doric orders',
      'Thick ashlar masonry walls, narrow clerestory slits, barrel vaults, and twin-towered westworks'
    ],
    correctAnswer: 1,
    explanationZh: '勒·柯布西耶基于钢筋混凝土骨架提出五点：1.底层架空支柱（Pilotis）；2.屋顶花园（Toit-jardin）；3.自由平面（Plan libre）；4.水平带形长窗（Fenêtre en longueur）；5.自由立面（Façade libre）。',
    explanationEn: 'Enabled by reinforced concrete frame construction, Le Corbusier formulated: 1. Pilotis lifting the building; 2. Roof terrace garden; 3. Free plan; 4. Ribbon windows; 5. Free facade independent of load-bearing walls.',
    tags: ['ArtistMovement', 'Modernism', 'LeCorbusier', 'FivePoints', 'VillaSavoye'],
    difficulty: 1
  },

  arched_150: {
    id: 'arched_150',
    domain: 'artist_movement',
    subCategory: 'Architectural Movements',
    era: '1929',
    questionZh: '密斯·凡·德·罗为1929年巴塞罗那世博会设计的德国馆（Barcelona Pavilion），其建筑空间哲学的核心体现是：',
    questionEn: 'What is the quintessential spatial and structural achievement of Ludwig Mies van der Rohe\'s German Pavilion at the 1929 Barcelona International Exposition?',
    optionsZh: [
      '采用古典轴线对称布局与巨大的科林斯式石雕门廊',
      '将全部结构重力集中于外立面装饰性砌砖券柱上',
      '模仿高迪自然曲线的彩色碎瓷片拱顶与树枝状倾斜立柱',
      '8根十字形镀铬钢柱支撑平屋顶，室内外空间通过大理石、缟玛瑙与玻璃屏风相互流动交融的“流动空间”（Flowing Space）与“少即是多”',
    ],
    optionsEn: [
      'Rigid axial monumental symmetry fronted by towering Corinthian stone porticoes',
      'Concentrating all gravity loads onto heavy decorative brick-pier colonnades along the perimeter',
      'Imitating Gaudí\'s organic catenary arches with trencadís mosaics and inclined branching pillars',
      'A flat roof supported by eight cruciform chrome-plated steel columns, realizing flowing open space and "less is more" with free-standing onyx, travertine, and glass screens'
    ],
    correctAnswer: 3,
    explanationZh: '巴塞罗那德国馆将承重骨架简化为8根轻盈的镀铬十字钢柱，墙体完全非承重，大理石、缟玛瑙与深色玻璃墙屏分隔出自由流动的连续空间，完美诠释了“少即是多”（Less is more）。',
    explanationEn: 'The Barcelona Pavilion separated support from partition: eight cruciform chrome-plated steel pillars supported a hovering slab, while non-bearing planar walls of green marble and golden onyx created fluid space.',
    tags: ['ArtistMovement', 'Modernism', 'MiesVanDerRohe', 'BarcelonaPavilion', 'FlowingSpace'],
    difficulty: 2
  },

  arched_151: {
    id: 'arched_151',
    domain: 'artist_movement',
    subCategory: 'Architectural Philosophy',
    era: '1935 - 1939',
    questionZh: '弗兰克·劳埃德·赖特在宾夕法尼亚州山林中设计的流水别墅（Fallingwater, 1935-1939），体现其“有机建筑”（Organic Architecture）哲学的核心在于：',
    questionEn: 'How does Frank Lloyd Wright\'s Fallingwater (1935–1939) in Bear Run, Pennsylvania, embody the core tenets of his philosophy of "Organic Architecture"?',
    optionsZh: [
      '严格按照欧几里得正交方盒子与白色粉刷表面将人工建筑与自然森林彻底隔绝',
      '使用巴洛克式的椭圆双层穹顶与镀金神龛形成宏大的戏剧化室内空间',
      '建筑并非建在瀑布对面远观，而是直接悬挑跨越于瀑布急流之上，当地毛石砌筑的垂直石墙与悬挑混凝土水平露台同峡谷岩层浑然共生',
      '采用完全装配式标准化集装箱单元在山顶进行网格化平铺'
    ],
    optionsEn: [
      'Imposing an austere white Euclidean orthogonal box that hermetically insulates human space from external nature',
      'Employing Baroque double-shell oval domes and gilded altarpieces to construct theatrical interior spectacle',
      'Cantilevering reinforced concrete terraces directly above the rushing waterfall, integrating local quarried masonry with living bedrock into an inseparable topography',
      'Arranging prefabricated industrial shipping containers in a rigid grid atop leveled forest ground'
    ],
    correctAnswer: 2,
    explanationZh: '赖特拒绝将自然仅作为观赏背景，而是让悬挑钢筋混凝土露台如岩层般直接延伸于瀑布上方，就地开采的粗粝石墙与活生生的天然基岩锚固在一起，使人与瀑布的声影共呼吸。',
    explanationEn: 'Wright integrated human dwelling with landscape by cantilevering broad concrete trays directly over the waterfall itself, anchoring rough-cut native Pottsville sandstone piers into the organic bedrock.',
    tags: ['ArtistMovement', 'Modernism', 'Wright', 'OrganicArchitecture', 'Fallingwater'],
    difficulty: 2
  },

  arched_152: {
    id: 'arched_152',
    domain: 'artist_movement',
    subCategory: 'Architectural Movements',
    era: '1932 - 1936',
    questionZh: '意大利理性主义（Rationalism）建筑先驱朱塞佩·泰拉尼（Giuseppe Terragni）在科莫设计的法西斯宫（Casa del Fascio, 1932-1936），其形式几何特征是：',
    questionEn: 'Designed by Italian Rationalist Giuseppe Terragni in Como (1932–1936), what is the definitive geometric and spatial logic of the Casa del Fascio?',
    optionsZh: [
      '一个严格基于纯粹立方体几何比例，由白色波尔图威尼斯石灰华饰面与严谨不对称网格骨架构成的“水晶透明玻璃殿堂”',
      '覆以巨大罗马式双层砖石圆穹顶与科林斯式重檐多柱式门廊',
      '模仿拜占庭金碧辉煌的马赛克壁画与不对称折线尖塔',
      '由流动的双曲面薄壳与色彩斑斓的碎瓷拼贴构成的表现主义雕塑'
    ],
    optionsEn: [
      'A perfect geometric prism whose four distinct facades explore rationalist proportions, white Botticino marble grids, and layered spatial transparency',
      'A colossal Roman double-shell masonry dome fronted by colossal Corinthian octastyle porticoes',
      'Byzantine polychromatic gold mosaics flanking asymmetric gothic spires',
      'An organic sculptural volume constructed of undulating concrete shells clad in multicolored ceramic shards'
    ],
    correctAnswer: 0,
    explanationZh: '科莫法西斯宫是意大利理性主义巅峰之作。泰拉尼运用半立方体严格比例（边长33.2米，高16.6米），四面立面以白色波蒂奇诺大理石构筑深浅各异的虚实网格，体现结构理性与几何透明性。',
    explanationEn: 'The Casa del Fascio is structured as a pure half-cube (33.2m base by 16.6m height). Terragni manipulated reinforced concrete frames and Botticino marble cladding to achieve a masterpiece of Rationalist planar geometry.',
    tags: ['ArtistMovement', 'Rationalism', 'Terragni', 'CasadelFascio', 'Como'],
    difficulty: 2
  },

  arched_153: {
    id: 'arched_153',
    domain: 'artist_movement',
    subCategory: 'Architectural Movements',
    era: '1956 - 1958',
    questionZh: 'BBPR建筑事务所在米兰市中心设计的维拉斯加塔（Torre Velasca, 1956-1958），因何种开创性特征引发了国际现代主义阵营关于历史文脉的激烈论战？',
    questionEn: 'Why did BBPR\'s Torre Velasca in Milan (1956–1958) ignite fiery debates within international modernism and the CIAM concerning historic contextualism?',
    optionsZh: [
      '它是完全采用全透明玻璃幕墙包装的标准美式正方形摩天大楼',
      '它完全复制了古罗马万神庙的圆环形下沉式露天剧场形式',
      '它在顶层建造了向外飞出百余米的超大跨度悬索桥索塔',
      '它上部居住层向外悬挑扩大并由外露倾斜桁架支撑，形态令人联想起中世纪伦巴第要塞塔楼，勇敢挑战了正统现代主义抹杀地域历史记忆的教条',
    ],
    optionsEn: [
      'It was a standard American-style planar glass box skyscraper rejecting all contextual specificity',
      'It replicated the circular footprint and sunken arena of the ancient Roman Pantheon',
      'It incorporated a monumental cable-stayed suspension bridge tower cantilevered over streets',
      'Its mushroom-shaped flared upper block, supported by angled struts, echoed medieval Lombard defensive towers, challenging orthodox modernism\'s denial of history'
    ],
    correctAnswer: 3,
    explanationZh: 'BBPR设计的维拉斯加塔上部扩大、由倾斜支柱支撑的独特轮廓，直接呼应了米兰主教堂与中世纪斯福尔扎城堡等历史要塞形态，开辟了将现代结构技术与城市历史环境记忆（Ambiente）融合的文脉主义新路。',
    explanationEn: 'Torre Velasca startled the International Style by flaring its upper residential floors with exposed structural struts, purposefully evoking medieval Lombard watchtowers and contextualizing the skyscraper in historic Milan.',
    tags: ['ArtistMovement', 'Rationalism', 'BBPR', 'TorreVelasca', 'Contextualism'],
    difficulty: 2
  },

  arched_154: {
    id: 'arched_154',
    domain: 'artist_movement',
    subCategory: 'Architectural Movements',
    era: '1956 - 1960',
    questionZh: '由吉奥·庞蒂（Gio Ponti）与结构大师皮埃尔·奈尔维联合设计的米兰倍耐力大厦（Pirelli Tower, 1956-1960），其造型结构上的最大创见是：',
    questionEn: 'Designed by Gio Ponti with structural engineer Pier Luigi Nervi, what was the defining aerodynamic and architectural breakthrough of Milan\'s Pirelli Tower?',
    optionsZh: [
      '严格的正方体体量与四面完全均质的无柱悬挂玻璃幕墙',
      '打破传统美式矩形方盒，采用两端收窄锐利的细长梭形（六边形）平面，外立面如钻石晶体般轻盈挺拔',
      '采用古典三段式构图，底层装饰巨型罗马陶立克多柱式门廊',
      '由错位堆叠的非对称扭曲钛合金双曲面拼接而成'
    ],
    optionsEn: [
      'A rigid rectilinear cubical volume wrapped in homogenous four-sided curtain walls',
      'A slender, tapered hexagonal (lozenge) floor plan terminating in razor-sharp edges, creating a dynamic crystalline silhouette',
      'A classical tripartite division base-shaft-capital fronted by giant Doric colonnades',
      'An asymmetric deconstructivist assemblage of stacked, twisted titanium shells'
    ],
    correctAnswer: 1,
    explanationZh: '倍耐力大厦由庞蒂与奈尔维合作，平面设计为中央宽阔、两端收紧的六边形梭形骨架，打破了以往摩天大楼沉重的方块盒子形态，以极致修长的优雅晶体轮廓树立了战后意大利理性主义设计的最高峰。',
    explanationEn: 'Ponti abandoned the standard bulky rectangular American tower, shaping Pirelli Tower as a diamond-faceted, slender hexagon with razor-thin end profiles, engineered with tapered concrete piers by Nervi.',
    tags: ['ArtistMovement', 'Rationalism', 'GioPonti', 'PirelliTower', 'Milan'],
    difficulty: 2
  },

  arched_156: {
    id: 'arched_156',
    domain: 'artist_movement',
    subCategory: 'Artistic Philosophy',
    era: '1913 - 1917',
    questionZh: '马塞尔·杜尚（Marcel Duchamp）通过《自行车轮》（1913）与《泉》（1917）提出“现成品”（Readymade）概念，对20世纪现代艺术观念最根本的颠覆在于：',
    questionEn: 'Through his pioneering Readymades, such as "Bicycle Wheel" (1913) and "Fountain" (1917), what fundamental premise of Western art did Marcel Duchamp dismantle?',
    optionsZh: [
      '宣示艺术的本质在于艺术家的智性选择与赋予物品新的语境概念，而非传统学院派的手工物理制作技巧与审美快感',
      '证明只有使用最昂贵的青铜与意大利卡拉拉大理石才能创作出具有神圣性的雕塑',
      '强调艺术家必须经过严格的人体解剖学写生与严谨透视学训练才能被画廊接纳',
      '主张艺术应当成为直接为工业大生产制造商品模具的商业设计工具'
    ],
    optionsEn: [
      'Asserting that art resides in the artist\'s conceptual choice and recontextualization rather than manual craftsmanship or aesthetic taste',
      'Demonstrating that only costly bronze and Italian Carrara marble can generate sacred sculpture',
      'Mandating that artists undergo rigorous academic life-drawing and classical linear perspective training',
      'Proposing that fine art should subordinate itself entirely to industrial mold design for assembly lines'
    ],
    correctAnswer: 0,
    explanationZh: '杜尚将工业批量生产的小便斗或自行车轮冠以签名与标题置于展厅，彻底终结了“艺术品必须由艺术家亲手雕琢”的古典神话，将艺术重心从“视网膜愉悦”彻底转向“智性与观念”。',
    explanationEn: 'Duchamp demonstrated that an ordinary manufactured object could become an artwork simply through an artist\'s intellectual act of selection and title assignment, founding Conceptual Art.',
    tags: ['ArtistMovement', 'Dadaism', 'Duchamp', 'Readymade', 'Conceptual'],
    difficulty: 1
  },

  arched_158: {
    id: 'arched_158',
    domain: 'artist_movement',
    subCategory: 'Creative Techniques',
    era: '1921 - 1922',
    questionZh: '达达主义与超现实主义先锋曼·雷（Man Ray）在暗房中偶然发明并以自己名字命名的“物影照片”（Rayograph）制作原理是：',
    questionEn: 'What technical process defines the "Rayograph" (photogram) technique pioneered by Dadaist and Surrealist Man Ray in the early 1920s?',
    optionsZh: [
      '使用大型木制针孔照相机在烈日下对模特进行数小时长时间曝光',
      '用昂贵的数码微距镜头配合频闪灯连续抓拍运动瞬间',
      '不使用照相机镜头，直接将各种日常物体置于未曝光的感光相纸上，开灯短时曝光后经显影定影显出物体的半透明负影',
      '在玻璃湿版上用细针刮出雕刻线条并在暗房中放大'
    ],
    optionsEn: [
      'Exposing studio models for several hours using a large wooden pinhole camera under bright sunlight',
      'Shooting high-speed motion bursts with electronic flash stroboscopes and macro lenses',
      'Placing ordinary physical objects directly onto unexposed photographic paper without a camera and exposing them briefly to light',
      'Etching delicate line drawings with steel needles into wet collodion glass negatives'
    ],
    correctAnswer: 2,
    explanationZh: '曼·雷的“雷射线物影法”（Rayograph）完全摆脱了照相机机身与光学镜头。物体直接贴附在感光纸上受光遮挡，产生深邃神秘的黑白层次与X光般的梦幻质感。',
    explanationEn: 'Man Ray created Rayographs cameralessly by placing keys, wire coils, and combs directly atop light-sensitive silver gelatin paper, flashing the room light to generate ghostly shadowgrams.',
    tags: ['ArtistMovement', 'Dadaism', 'ManRay', 'Rayograph', 'Photography'],
    difficulty: 2
  },

  arched_159: {
    id: 'arched_159',
    domain: 'artist_movement',
    subCategory: 'Sculptural Theory',
    era: '1947 - 1960',
    questionZh: '阿尔贝托·贾科梅蒂在二战后创作的标志性青铜雕塑（如《行走的人》《城市广场》），其视觉形式与存在主义哲学内核体现在：',
    questionEn: 'How do Alberto Giacometti\'s post-World War II bronze sculptures (such as "Walking Man" and "City Square") embody Jean-Paul Sartre\'s existentialist philosophy?',
    optionsZh: [
      '通过饱满丰硕的古典女性肉体来歌颂战后繁衍与物质过剩',
      '人物形体被极端拉长削瘦至骨架极限，表面留有粗糙斑驳的手抓刻痕，在浩瀚空旷的空间中呈现出人类个体的孤独、脆弱与坚韧前行',
      '由闪闪发光的反光不锈钢板抛光焊接出的几何抽象多面体',
      '由精密电脑程序驱动不断变换方向的动能机械偶'
    ],
    optionsEn: [
      'Celebrating postwar material abundance through voluptuous, classically proportioned female figures',
      'Extremely elongated, skeletal bronze figures with corroded, tactile surfaces standing isolated in vast voids, embodying fragile yet resolute human existence',
      'Faceted abstract geometric polyhedrons welded from mirror-polished stainless steel sheets',
      'Kinetic figurative automata driven continuously in random trajectories by computer chips'
    ],
    correctAnswer: 1,
    explanationZh: '贾科梅蒂二战后的人物雕像被削减至几乎只剩垂直游丝，粗糙侵蚀的铜质肌理与巨大的虚无空间形成对峙，萨特赞誉其雕塑“抓住了人在存在深渊边缘孤独屹立与行走的永恒尊严”。',
    explanationEn: 'Giacometti attenuated human bodies into fragile, skeletal silhouettes with scarred bronze surfaces, materializing existential solitude and resilient human presence within an engulfing void.',
    tags: ['ArtistMovement', 'Surrealism', 'Giacometti', 'WalkingMan', 'Existentialism'],
    difficulty: 2
  },

  arched_160: {
    id: 'arched_160',
    domain: 'artist_movement',
    subCategory: 'Stylistic Evolution',
    era: '1911 - 1920',
    questionZh: '马克·夏加尔（Marc Chagall）在其经典代表作（如《我与村庄》《散步》《飞跃维捷布斯克》）中展现出的独特诗意风格源泉是：',
    questionEn: 'What unique cultural and emotional synthesis constitutes the poetic dreamscapes of Marc Chagall\'s masterpieces, such as "I and the Village" and "Over Vitebsk"?',
    optionsZh: [
      '冷酷无情的机械工业图纸与严谨的几何投影制图法',
      '对法兰西古罗马式石雕拱门与哥特式石棺浮雕的考古复原',
      '严格遵从意大利未来主义对暴力战争与刺耳噪音的疯狂崇拜',
      '将故乡维捷布斯克的犹太民间童话、翱翔天际的爱人与牛羊牲畜，与巴黎立体主义空间折叠融为一体的梦幻色彩交响',
    ],
    optionsEn: [
      'Austere mechanical blueprints and calculated architectural projections devoid of sentiment',
      'Archaeological reconstructions of French Romanesque stone arches and Gothic effigies',
      'Strict adherence to Italian Futurist glorification of militarism and deafening machinery',
      'Blending Hassidic Jewish folklore from his native Vitebsk with floating lovers, gentle animals, and Parisian Cubist faceted planes into colorful poetic reveries'
    ],
    correctAnswer: 3,
    explanationZh: '夏加尔将故乡白俄罗斯维捷布斯克的犹太民间传说、拉小提琴的乐手、倒悬的农舍与翱翔天空的情侣，同立体主义几何切割与象征主义艳丽色彩融合，创造了无与伦比的梦幻温情诗画。',
    explanationEn: 'Chagall combined memories of Hassidic folklore from his native Vitebsk with Paris Cubism, depicting floating figures, violinists on roofs, and benevolent livestock in magical, lyrical palettes.',
    tags: ['ArtistMovement', 'Surrealism', 'Chagall', 'Vitebsk', 'Poetic'],
    difficulty: 2
  },

  arched_161: {
    id: 'arched_161',
    domain: 'artist_movement',
    subCategory: 'Stylistic Evolution',
    era: '1924 - 1941',
    questionZh: '加泰罗尼亚大师胡安·米罗（Joan Miró）在成熟期（如《哈里昆的狂欢》《星座》系列）发展出的标志性超现实主义图式是：',
    questionEn: 'Which definitive visual vocabulary characterizes Joan Miró\'s mature Surrealist masterpieces, including "The Harlequin\'s Carnival" and the "Constellations" series?',
    optionsZh: [
      '在深邃或纯净的原色底色上，由自由舞动的有机生物形态符号、变形眼睛、黑色骨架线与五角星辰构建的梦幻微观宇宙',
      '如同摄影般精确逼真描绘的融化时钟与腐烂驴子尸体',
      '严格按照黄金比例分割的冷峻黑色水平与垂直网格',
      '严谨遵循透视灭点的意大利文艺复兴拱廊与维纳斯石雕'
    ],
    optionsEn: [
      'A whimsical cosmic microcosm of biomorphic signs, ladder lines, disembodied eyes, and floating celestial stars against flat primary-color fields',
      'Photographically illusionistic renderings of melting clocks and decaying putrefied animals',
      'Rigid horizontal and vertical black grids apportioned according to mathematical golden ratios',
      'Strict single-point perspective colonnades framing classical Italian Renaissance marble statues'
    ],
    correctAnswer: 0,
    explanationZh: '米罗摆脱了古典幻觉写实，发展出富于抒情童趣的“有机生物图式”（Biomorphic forms），将梯子、飞鸟、眼睛、星星与流动红黑曲线在纯色空间中编织成生机勃勃的宇宙天体诗篇。',
    explanationEn: 'Miró invented an organic alphabet of biomorphic pictograms—stars, moons, amoebic creatures, and thread-like lines—dancing across luminous color fields in spontaneous poetic freedom.',
    tags: ['ArtistMovement', 'Surrealism', 'Miro', 'Constellations', 'Biomorphic'],
    difficulty: 1
  },

  arched_162: {
    id: 'arched_162',
    domain: 'artist_movement',
    subCategory: 'Creative Techniques',
    era: '1947 - 1950',
    questionZh: '保罗·杰克逊·波洛克（Jackson Pollock）创立的“行动绘画”（Action Painting）与“全场滴流画法”（All-over Drip Technique），其革命性作画方式是：',
    questionEn: 'What revolutionary studio methodology characterized Jackson Pollock\'s formulation of "Action Painting" and his signature "all-over" drip technique?',
    optionsZh: [
      '端坐在画架前，使用极细的黑貂毛笔在放大镜下精心刻画模特毛孔',
      '将画布固定于旋转车床上，由电动机驱动圆周离心甩墨',
      '将未绷紧的巨大生画布直接平铺在工作室地板上，身体环绕甚至踏入画布四周，手持沾有工业珐琅漆的木棍或穿孔铁罐自由挥洒舞动',
      '通过机械丝网印刷机由助手批量印制新闻摄影照片'
    ],
    optionsEn: [
      'Sitting still at a desk, executing miniature life portraits with fine sable brushes under a magnifying glass',
      'Mounting primed canvas onto high-speed electric lathe machines to fling paint via centrifugal force',
      'Laying raw unstretched canvas directly on the studio floor, stepping into the arena, and rhythmically dripping industrial enamel from sticks and perforated cans',
      'Directing commercial factory assistants to run mechanical photo-screenprinting presses'
    ],
    correctAnswer: 2,
    explanationZh: '波洛克摆脱了画架与调色板的束缚，将大尺寸画布铺于地面。他借助全身肌肉律动，将重力与潜意识能量直接转化为在空间中交织缠绕的珐琅漆网，使画布成为纯粹行动发生的地界。',
    explanationEn: 'Pollock laid raw canvas on the floor, entering the pictorial field directly to fling and drip commercial enamel paint from sticks, transforming the painting into a direct record of physical bodily gesture.',
    tags: ['ArtistMovement', 'ContemporaryArt', 'Pollock', 'ActionPainting', 'Drip'],
    difficulty: 2
  },

  arched_163: {
    id: 'arched_163',
    domain: 'artist_movement',
    subCategory: 'Artistic Philosophy',
    era: '1949 - 1960',
    questionZh: '卢齐欧·封塔纳（Lucio Fontana）在创立空间主义（Spatialism）并创作其标志性《空间概念：期待》（Concetto spaziale: Attese）时，采取的震惊世界的核心动作是：',
    questionEn: 'In establishing Spatialism and executing his legendary series "Concetto spaziale: Attese", what radical physical gesture did Lucio Fontana inflict on the canvas?',
    optionsZh: [
      '在画布上均匀涂抹二十层透明蜡质光油以达到镜面反光',
      '手持锋利的手术刀果断划破单色布面（Tagli），形成狭长幽深的裂口，打破二维画面的虚拟假象以连接画布背后的真实三维物理空间',
      '用喷火枪将整幅画布烧毁只留下外围焦黑的木质内框',
      '将数千枚古罗马金币整齐镶嵌在画布正中心'
    ],
    optionsEn: [
      'Polishing twenty coats of clear wax varnish across the linen to achieve a mirror sheen',
      'Using a sharp razor or craft knife to slash monochromatic canvases (Tagli), rupturing 2D illusionism to open painting into literal 3D space',
      'Incinerating the entire linen surface with a blowtorch until only charred stretcher bars remained',
      'Embedding thousands of ancient Roman gold coins symmetrically into the center of the canvas'
    ],
    correctAnswer: 1,
    explanationZh: '封塔纳用刀锋利落刺破或割开（Tagli）紧绷的单色画布。这一刀并非破坏，而是将绘画从两维平面的虚假透视束缚中彻底解放，使阴影与宇宙空间真实穿透画布。',
    explanationEn: 'Fontana slashed through pristine monochrome canvases with a knife, creating dark voids that broke the traditional two-dimensional pictorial boundary to integrate real light, shadow, and architectural space.',
    tags: ['ArtistMovement', 'ContemporaryArt', 'Fontana', 'Spatialism', 'Tagli'],
    difficulty: 2
  },

  arched_164: {
    id: 'arched_164',
    domain: 'artist_movement',
    subCategory: 'Artistic Philosophy',
    era: '1957 - 1960',
    questionZh: '皮耶罗·曼佐尼（Piero Manzoni）在战后激进艺术探索中创作的《无色》（Achromes）系列，其反表现主义的核心理念是：',
    questionEn: 'What anti-expressive conceptual philosophy defines Piero Manzoni\'s groundbreaking "Achromes" series initiated in 1957?',
    optionsZh: [
      '用浓墨重彩表现艺术家强烈的个人痛苦与战争创伤',
      '复兴威尼斯画派丰富的提香式金红色层次',
      '在电脑荧光屏上实时生成无休止变化的像素动画',
      '彻底剔除所有色彩与叙事意象，仅使用浸透白色高岭土（Kaolin）的粗糙褶皱帆布或棉球，让材料本身的纯粹物理自足性成为作品自身',
    ],
    optionsEn: [
      'Drenching canvases in saturated primary colors to express volcanic emotional anguish and existential trauma',
      'Reviving Venetian Renaissance layering of luminous Titian-esque golden reds and velvets',
      'Generating continuously evolving computerized pixels across cathode-ray oscilloscope tubes',
      'Eliminating color and emotional representation by soaking pleated canvases in liquid kaolin (white clay), asserting the absolute self-referential presence of the surface'
    ],
    correctAnswer: 3,
    explanationZh: '曼佐尼用高岭土浆水浸泡褶皱帆布，风干后凝固为纯白无瑕的表面。他拒绝“色彩”与任何主观情感表现，认为画布不应“代表”外界任何事物，其本身就是一片自足而绝对的无色真实。',
    explanationEn: 'Manzoni rejected color and authorial expression, soaking pleated canvas and stitched cloth in white kaolin clay so that the work became a completely colorless, self-signifying, and autonomous object.',
    tags: ['ArtistMovement', 'ContemporaryArt', 'Manzoni', 'Achrome', 'Concept'],
    difficulty: 3
  },

  arched_165: {
    id: 'arched_165',
    domain: 'artist_movement',
    subCategory: 'Architectural Movements',
    era: '1958 - 1970',
    questionZh: '奥斯卡·尼迈耶（Oscar Niemeyer）在巴西利亚大教堂（Cathedral of Brasília, 1958-1970）的造型设计中，展现其新表现主义建筑风格的核心手法是：',
    questionEn: 'In his design of the Cathedral of Brasília (1958–1970), what defining architectural form manifests Oscar Niemeyer\'s poetic Neo-Expressionist vision?',
    optionsZh: [
      '采用方正冷峻的灰色毛面混凝土立方体封闭堡垒',
      '完全复制哥特式巴黎圣母院的尖券肋架穹顶与飞券群',
      '由16根重达90吨的优雅双曲面混凝土抛物线柱环抱向上合拢，如同向苍穹祈祷的双手或荆棘王冠，柱间嵌以纯净彩色玻璃天幕',
      '由巨大的古埃及式金字塔斜面与狮身人面像石雕围合'
    ],
    optionsEn: [
      'An austere, opaque bunker-like cubic monolith formed of rough unadorned grey concrete',
      'An exact replica of the Gothic flying buttresses and nave vaulting of Notre-Dame de Paris',
      'Sixteen soaring parabolic reinforced concrete curved columns converging toward the heavens like praying hands or a crown of thorns, enclosing stained-glass curtains',
      'An imposing stepped pyramid complex surrounded by colossal neo-Egyptian stone sphinxes'
    ],
    correctAnswer: 2,
    explanationZh: '尼迈耶打破了国际式冷酷的正交方盒子，利用巴西钢筋混凝土的可塑性，设计了16根向内聚拢又向外舒展的优雅双曲抛物线立柱，宛若向上升腾的纯洁冠冕，光线透过滤色玻璃倾泻在地下圆形中殿。',
    explanationEn: 'Niemeyer rejected rigid European Functionalism, deploying 16 identical hyperbolic concrete pillars that sweep upward and flare outward like a crown of thorns, sheltering an ethereal underground nave with stained glass.',
    tags: ['ArtistMovement', 'NeoExpressionism', 'Niemeyer', 'Brasilia', 'Cathedral'],
    difficulty: 2
  }
};
