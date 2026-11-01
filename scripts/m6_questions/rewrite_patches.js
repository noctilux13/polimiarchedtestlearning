/**
 * scripts/m6_questions/rewrite_patches.js
 * 
 * Concrete in-scope patches for the 23 REWRITE questions identified in the M6 Bank Audit.
 * Replaces out-of-scope distractors (Picasso, Malevich, Max Ernst, Calder, etc.)
 * with strictly in-scope artists/architects/works from artData.js.
 */

export const REWRITE_PATCHES = {
  arched_041: {
    optionsZh: [
      '勒内·马格里特 (René Magritte)',
      '特奥·范·杜斯堡 (Theo van Doesburg)',
      '皮特·蒙德里安 (Piet Mondrian)',
      '卢齐欧·封塔纳 (Lucio Fontana)'
    ],
    optionsEn: [
      'René Magritte',
      'Theo van Doesburg',
      'Piet Mondrian',
      'Lucio Fontana'
    ],
    explanationZh: '此画为皮特·蒙德里安（Piet Mondrian）新造型主义（Neoplasticism）经典名作《红、蓝、黄构图》（1930）。蒙德里安创立荷兰风格派（De Stijl），主张彻底摒弃具象模仿，仅使用垂直与水平正交黑色线条，配合红、黄、蓝三原色及黑白灰非彩色，追求绝对的纯粹几何秩序与宇宙精神和谐。特奥·范·杜斯堡虽同为风格派核心，但后期倡导引入45度斜线的要素主义，导致二人分道扬镳。',
    explanationEn: 'This painting is Composition II in Red, Blue, and Yellow (1930) by Piet Mondrian, the founding master of De Stijl (Neoplasticism). Mondrian rejected naturalistic representation in favor of pure plastic harmony: strict vertical and horizontal black grid lines enclosing planes of primary colors (red, blue, yellow) and non-colors (white, gray). Theo van Doesburg co-founded De Stijl but later split with Mondrian by introducing diagonal 45-degree compositions.'
  },

  arched_042: {
    optionsZh: [
      '萨尔瓦多·达利 (Salvador Dalí)',
      '胡安·米罗 (Joan Miró)',
      '勒内·马格里特 (René Magritte)',
      '阿尔贝托·贾科梅蒂 (Alberto Giacometti)'
    ],
    optionsEn: [
      'Salvador Dalí',
      'Joan Miró',
      'René Magritte',
      'Alberto Giacometti'
    ],
    explanationZh: '《丑角的狂欢》（The Harlequin\'s Carnival，1924-1925）是西班牙超现实主义大师胡安·米罗（Joan Miró）在巴黎饥饿困顿状态下创作的抒情生物形态超现实主义奠基之作。画面充盈着梯子、变形虫、飞虫、星芒与游动音符，展现了由潜意识幻觉驱动的诗意狂欢世界。达利偏向写实具象梦境，马格里特探索图像与符号哲学，贾科梅蒂则以存在主义瘦长雕塑闻名。',
    explanationEn: 'The Harlequin\'s Carnival (1924-1925) is a foundational masterpiece of lyrical biomorphic surrealism by Joan Miró, painted in Paris during periods of extreme hunger-induced hallucinations. It is populated by floating amoebic forms, ladders, stars, and musical notes. Dalí practiced paranoiac-critical figurative illusionism, Magritte probed semiotic puzzles, and Giacometti created elongated existential sculptures.'
  },

  arched_043: {
    optionsZh: [
      '卡洛·卡拉 (Carlo Carrà)',
      '皮耶罗·曼佐尼 (Piero Manzoni)',
      '杰克逊·波洛克 (Jackson Pollock)',
      '安迪·沃霍尔 (Andy Warhol)'
    ],
    optionsEn: [
      'Carlo Carrà',
      'Piero Manzoni',
      'Jackson Pollock',
      'Andy Warhol'
    ],
    explanationZh: '《秋之韵（第30号）》（Autumn Rhythm: Number 30，1950）是杰克逊·波洛克（Jackson Pollock）行动绘画（Action Painting）巅峰巨作。波洛克彻底摒弃了画架与画笔的传统接触方式，将未绷紧的巨大粗帆布平铺于长岛谷仓地面，利用带孔铁罐与木棍甩洒工业搪瓷漆，通过身体在四边的动态律动留下交织缠绕的能量网迹。曼佐尼开创了无色彩概念艺术，卡拉为未来主义与形而上派大师，沃霍尔为波普丝网版画大师。',
    explanationEn: 'Autumn Rhythm (Number 30, 1950) is Jackson Pollock\'s signature Action Painting triumph. Pollock dispensed with the easel, tacking raw unstretched canvas directly to the floor of his Long Island barn and using sticks and perforated cans to fling and pour commercial enamel paint in an all-over rhythmic choreography of bodily energy.'
  },

  arched_044: {
    optionsZh: [
      '罗伊·利希滕斯坦 (Roy Lichtenstein)',
      '安迪·沃霍尔 (Andy Warhol)',
      '马塞尔·杜尚 (Marcel Duchamp)',
      '曼·雷 (Man Ray)'
    ],
    optionsEn: [
      'Roy Lichtenstein',
      'Andy Warhol',
      'Marcel Duchamp',
      'Man Ray'
    ],
    explanationZh: '1962年好莱坞影星玛丽莲·梦露自杀后数周，安迪·沃霍尔（Andy Warhol）利用其电影《尼亚加拉》的宣传肖像照片，制作了双联巨幅丝网版画《玛丽莲双联画》（Marilyn Diptych）。左联25张采用刺眼鲜艳的商品色彩套印，右联25张黑白单色印刷并呈现油墨模糊、褪色直至消逝的过程，冷酷讽喻了大众传媒对偶像生命的工业化复制与消费消解。杜尚与曼雷为达达主义先驱，利希滕斯坦专攻连环画网点。',
    explanationEn: 'Following Marilyn Monroe\'s death in 1962, Andy Warhol produced the Marilyn Diptych using a publicity still from Niagara. The left panel features 25 garishly silkscreened portraits evoking commercial product packaging, while the right panel displays 25 monochrome prints fading into ghostly indistinctness, critiquing media commodification of celebrity tragedy.'
  },

  arched_045: {
    optionsZh: [
      '罗伊·利希滕斯坦 (Roy Lichtenstein)',
      '胡安·米罗 (Joan Miró)',
      '安迪·沃霍尔 (Andy Warhol)',
      '萨尔瓦多·达利 (Salvador Dalí)'
    ],
    optionsEn: [
      'Roy Lichtenstein',
      'Joan Miró',
      'Andy Warhol',
      'Salvador Dalí'
    ],
    explanationZh: '1962年7月洛杉矶费鲁斯画廊（Ferus Gallery）展出了安迪·沃霍尔由32幅独立画布组成的《金宝汤罐头》（Campbell\'s Soup Cans），对应金宝汤公司当时出售的全部32种不同风味。画作如超市货架般水平排开，以机械冰冷的半手工半丝网工艺消解了传统艺术独一无二的“灵韵”，标志着美国波普艺术的重大转折。利希滕斯坦以漫画网点著称，米罗为超现实主义大师，达利为梦境形而上大师。',
    explanationEn: 'In July 1962, the Ferus Gallery in Los Angeles exhibited Andy Warhol\'s Campbell\'s Soup Cans—32 individual canvases representing each flavor sold by Campbell at the time. Displayed on narrow shelves like supermarket merchandise, the installation marked the breakthrough of American Pop Art.'
  },

  arched_047: {
    optionsZh: [
      '皮耶罗·曼佐尼 (Piero Manzoni)',
      '安迪·沃霍尔 (Andy Warhol)',
      '卢齐欧·封塔纳 (Lucio Fontana)',
      '皮特·蒙德里安 (Piet Mondrian)'
    ],
    optionsEn: [
      'Piero Manzoni',
      'Andy Warhol',
      'Lucio Fontana',
      'Piet Mondrian'
    ],
    explanationZh: '1964年4月安迪·沃霍尔在纽约稳定画廊（Stable Gallery）展出了大量《布里洛盒子》（Brillo Box）。他委托木工制作了与超市肥皂垫纸箱尺寸完全一致的实木胶合板箱体，再用丝网印刷精确复刻其红白蓝商标图样，以假乱真地在展厅堆积如超级市场库房，引发哲学家阿瑟·丹托关于“艺术终结与物品本体论”的深刻思考。曼佐尼以《艺术家之粪》挑战价值，封塔纳以割破画布探索空间，蒙德里安为风格派宗师。',
    explanationEn: 'In 1964 at the Stable Gallery, Andy Warhol exhibited hundreds of silkscreened plywood sculptures replicating commercial Brillo soap pad shipping cartons. By meticulously cloning mass-market cardboard containers, Warhol prompted philosopher Arthur Danto to formulate the thesis of the transfiguration of the commonplace and the philosophical definition of art.'
  },

  arched_050: {
    optionsZh: [
      '马塞尔·杜尚 (Marcel Duchamp)',
      '翁贝托·薄邱尼 (Umberto Boccioni)',
      '勒内·马格里特 (René Magritte)',
      '萨尔瓦多·达利 (Salvador Dalí)'
    ],
    optionsEn: [
      'Marcel Duchamp',
      'Umberto Boccioni',
      'René Magritte',
      'Salvador Dalí'
    ],
    explanationZh: '1919年达达主义大师马塞尔·杜尚（Marcel Duchamp）在一张卢浮宫《蒙娜丽莎》彩色明信片上，用铅笔为达·芬奇的典范美人添画了八字胡和山羊胡，并在底部题写大写字母“L.H.O.O.Q.”（法语字母连读谐音为“Elle a chaud au cul”，意即她坐立难安/欲火中烧）。这一“辅助现成品”（Assisted Ready-made）以前卫达达的挑衅幽默彻底解构了资产阶级神圣化的古典艺术偶像。薄邱尼为未来主义领袖，马格里特与达利为超现实主义大师。',
    explanationEn: 'In 1919, Marcel Duchamp created the assisted readymade L.H.O.O.Q. by drawing a moustache and goatee onto a postcard reproduction of the Mona Lisa. The letters phoneticize in French as "Elle a chaud au cul", a scandalous pun deflating classical bourgeois reverence through iconoclastic Dada humor.'
  },

  arched_052: {
    optionsZh: [
      '乔治·德·基里科 (Giorgio de Chirico)',
      '卡洛·卡拉 (Carlo Carrà)',
      '翁贝托·薄邱尼 (Umberto Boccioni)',
      '马塞尔·杜尚 (Marcel Duchamp)'
    ],
    optionsEn: [
      'Giorgio de Chirico',
      'Carlo Carrà',
      'Umberto Boccioni',
      'Marcel Duchamp'
    ],
    explanationZh: '《爱之歌》（The Song of Love / Le chant d\'amour，1914）是乔治·德·基里科（Giorgio de Chirico）形而上画派（Pittura Metafisica）最具标志性的代表作之一。在文艺复兴式古典拱廊与远方冒烟火车的空旷背景前，画面突兀地悬挂了一只巨大的红色外科橡胶手套、希腊古典雕塑阿波罗大理石头像以及一个绿色圆球，通过剥离物品原有功能语境制造出超越现实的神秘梦境震颤，直接启发了后来的马格里特与超现实主义。卡拉后来加入形而上画派，薄邱尼为未来主义领袖，杜尚为达达主义先驱。',
    explanationEn: 'The Song of Love (1914) by Giorgio de Chirico is a seminal work of Metaphysical Art (Pittura Metafisica). Juxtaposing an Apollo bust, a red rubber surgical glove, a green sphere, and a distant steam train in an uncanny Italian arcade setting, it profoundly inspired René Magritte and the Surrealist movement.'
  },

  arched_053: {
    optionsZh: [
      '《爱之歌》(The Song of Love)',
      '《一条街的神秘与忧郁》(The Mystery and Melancholy of a Street)',
      '《大形而上室内》(Great Metaphysical Interior)',
      '《不安的缪斯》(The Disquieting Muses / Le Muse inquietanti)'
    ],
    optionsEn: [
      'The Song of Love',
      'The Mystery and Melancholy of a Street',
      'Great Metaphysical Interior',
      'The Disquieting Muses (Le Muse inquietanti)'
    ],
    explanationZh: '《不安的缪斯》（The Disquieting Muses，1917-1918）是基里科在费拉拉期间创作的形而上画派巅峰。画面以费拉拉埃斯滕塞城堡（Castello Estense）为深沉背景，在红砖舞台般的空旷地面上，伫立着两具没有面目的古典缝纫假人缪斯，地面散落着神秘的彩色测量三角尺与铁皮罐头，营造出凝滞永恒、令人不安的哲学静穆感。其余选项均为基里科收录于平台的正统传世名作。',
    explanationEn: 'The Disquieting Muses (1917-1918) was painted by Giorgio de Chirico in Ferrara. In front of the Castello Estense on a raked wooden-board piazza, headless mannequins and draped statues stand alongside colorful drafting tools and boxes, creating an enigmatic aura of petrified time.'
  },

  arched_058: {
    optionsZh: [
      '阿尔贝托·贾科梅蒂 (Alberto Giacometti)',
      '翁贝托·薄邱尼 (Umberto Boccioni)',
      '卢齐欧·封塔纳 (Lucio Fontana)',
      '曼·雷 (Man Ray)'
    ],
    optionsEn: [
      'Alberto Giacometti',
      'Umberto Boccioni',
      'Lucio Fontana',
      'Man Ray'
    ],
    explanationZh: '《行走的人I》（L\'Homme qui marche I，1960）是瑞士超现实主义与战后存在主义雕塑大师阿尔贝托·贾科梅蒂（Alberto Giacometti）的传世巅峰。雕塑高达183厘米，人像躯体被剥蚀消减至极致的纤细与斑驳粗粝，双足如沉重铅块锚定于地面但仍坚毅大步迈向前方，被萨特等哲学家誉为战后人类在虚无荒诞世界中孤绝求索、尊严不屈的精神丰碑。薄邱尼塑造了空气撕裂的未来主义躯体，封塔纳开创了空间主义划痕，曼雷开创了达达物影摄影。',
    explanationEn: 'Walking Man I (L\'Homme qui marche I, 1960) by Alberto Giacometti is a bronze triumph of post-war existentialism. Reduced to an eroded, skeletal armature yet stepping decisively forward on an oversized base, the figure embodies human isolation, fragility, and perseverance.'
  },

  arched_059: {
    optionsZh: [
      '胡安·米罗 (Joan Miró)',
      '翁贝托·薄邱尼 (Umberto Boccioni)',
      '萨尔瓦多·达利 (Salvador Dalí)',
      '阿尔贝托·贾科梅蒂 (Alberto Giacometti)'
    ],
    optionsEn: [
      'Joan Miró',
      'Umberto Boccioni',
      'Salvador Dalí',
      'Alberto Giacometti'
    ],
    explanationZh: '《凌晨四点的宫殿》（The Palace at 4 a.m.，1932）是贾科梅蒂超现实主义“笼子”（Cage）时期的精湛木质装置代表作。他用精细木条构筑出通透微型的三维框架宫殿，内部悬挂着脆弱的飞鸟骨骼、脊椎、吉他残骸以及象征脆弱易逝之爱的女性躯干，完美将超现实主义无意识梦境转化为三维建筑空间。米罗专注于具象变形绘画，薄邱尼追求未来派速度雕塑，达利擅长偏执批判写实。',
    explanationEn: 'The Palace at 4 a.m. (1932) is Alberto Giacometti\'s Surrealist construction in wood, glass, wire, and string. Evoking an architectural scaffolded nightmare, it frames suspended skeletal vertebrae, a flying pterodactyl, and a female figurine representing lost love.'
  },

  arched_071: {
    optionsZh: [
      '卡洛·卡拉 (Carlo Carrà)',
      '乔治·德·基里科 (Giorgio de Chirico)',
      '马塞尔·杜尚 (Marcel Duchamp)',
      '翁贝托·薄邱尼 (Umberto Boccioni)'
    ],
    optionsEn: [
      'Carlo Carrà',
      'Giorgio de Chirico',
      'Marcel Duchamp',
      'Umberto Boccioni'
    ],
    explanationZh: '印在意大利20欧分硬币背面的国宝级雕塑是翁贝托·薄邱尼（Umberto Boccioni）于1913年创作的《空间中连续性的唯一形体》（Unique Forms of Continuity in Space）。薄邱尼摒弃了古典写实人体的静态解剖边界，将人体迈步时切裂空气的气流动力学轨迹与肌肉运动直接固化为流动舒展的青铜雕塑体量，是未来主义“速度、力量与可塑性连续”理论的最完美化身。卡拉、基里科、杜尚均为二十世纪先锋派大师。',
    explanationEn: 'Featured on the Italian 20-cent euro coin, Unique Forms of Continuity in Space (1913) by Umberto Boccioni translates the aerodynamic forces of human striding into fluidly deformed bronze volumes, epitomizing the Futurist doctrine of plastic dynamism.'
  },

  arched_072: {
    optionsZh: [
      '乔治·德·基里科 (Giorgio de Chirico)',
      '卡洛·卡拉 (Carlo Carrà)',
      '翁贝托·薄邱尼 (Umberto Boccioni)',
      '特奥·范·杜斯堡 (Theo van Doesburg)'
    ],
    optionsEn: [
      'Giorgio de Chirico',
      'Carlo Carrà',
      'Umberto Boccioni',
      'Theo van Doesburg'
    ],
    explanationZh: '《崛起中的城市》（The City Rises / La città che sale，1910）是薄邱尼被誉为未来主义第一幅真正杰作的巨幅油画。画面描绘了米兰新工业郊区正在拔地而起的电站与建筑工地，巨大的红马与奔涌的体力劳动者交织撕扯成炫目的旋涡光流，生动体现了未来主义对现代机器大生产、城市拔节扩张与狂暴生命力的赞美。卡拉同期创作了《无政府主义者加利的葬礼》，基里科为形而上派宗师，杜斯堡为风格派领袖。',
    explanationEn: 'The City Rises (La città che sale, 1910) by Umberto Boccioni is widely regarded as the first major Futurist painting. Depicting the construction of an electric plant in industrial Milan, its explosive swirling vortex of giant draft horses and laborers glorifies technological modernization.'
  },

  arched_075: {
    optionsZh: [
      '罗伊·利希滕斯坦 (Roy Lichtenstein)',
      '安迪·沃霍尔 (Andy Warhol)',
      '杰克逊·波洛克 (Jackson Pollock)',
      '皮特·蒙德里安 (Piet Mondrian)'
    ],
    optionsEn: [
      'Roy Lichtenstein',
      'Andy Warhol',
      'Jackson Pollock',
      'Piet Mondrian'
    ],
    explanationZh: '《呜嗡！》（Whaam!，1963）是美国波普艺术领军人物罗伊·利希滕斯坦（Roy Lichtenstein）的双联布面油彩与丙烯画巨制。他截取并改编了DC战机连环画《全美战争之战》分镜，以精细的手工结合网板技术在画布上复刻了商业印刷特有的本戴网点（Ben-Day dots），以冷漠理性的波普手法将戏剧化空战爆炸转化为现代大众传媒图腾。沃霍尔以丝网版画著称，波洛克以滴流行动绘画闻名，蒙德里安以几何冷抽象著称。',
    explanationEn: 'Whaam! (1963) is a monumental Pop Art diptych by Roy Lichtenstein adapting a panel from DC Comics\' All-American Men of War. Using hand-painted Ben-Day dots and comic-strip dialogue balloons, Lichtenstein coolly detached emotion from violent military combat.'
  },

  arched_088: {
    optionsZh: [
      '瓦尔特·格罗皮乌斯 (Walter Gropius)',
      '勒·柯布西耶 (Le Corbusier)',
      '路德维希·密斯·凡·德·罗 (Ludwig Mies van der Rohe)',
      '朱塞佩·泰拉尼 (Giuseppe Terragni)'
    ],
    optionsEn: [
      'Walter Gropius',
      'Le Corbusier',
      'Ludwig Mies van der Rohe',
      'Giuseppe Terragni'
    ],
    explanationZh: '诺沃科姆姆公寓（Novocomum，1927-1929）由意大利理性主义建筑旗手朱塞佩·泰拉尼（Giuseppe Terragni）在科莫湖畔设计落成。该建筑在转角处大胆切除实体体量，嵌入由全透明弧形玻璃包裹的圆柱体楼梯间，上方悬挑厚重的水平楼板，因其极具冲击力的新型机器美学形态被当地人戏称为“远洋轮船”（Il Transatlantico），成为意大利第一座真正意义上的纯粹理性主义现代集合住宅。格罗皮乌斯创立包豪斯，柯布西耶主导白派住宅，密斯专注流动空间。',
    explanationEn: 'The Novocomum apartment building (1927-1929) in Como was designed by Giuseppe Terragni. Boldly scooping out the street corners and inserting curved glass cylinders beneath cantilevered horizontal slabs, its ocean-liner aesthetic earned it the nickname "Il Transatlantico", becoming the first true rationalist residential landmark in Italy.'
  },

  arched_099: {
    optionsZh: [
      '安东尼·高迪 (Antoni Gaudí)',
      '埃里希·门德尔松 (Erich Mendelsohn)',
      '维克多·奥塔 (Victor Horta)',
      '埃克托尔·吉马尔 (Hector Guimard)'
    ],
    optionsEn: [
      'Antoni Gaudí',
      'Erich Mendelsohn',
      'Victor Horta',
      'Hector Guimard'
    ],
    explanationZh: '加泰罗尼亚现代主义大师安东尼·高迪（Antoni Gaudí）设计了圣家族大教堂（Sagrada Família）、米拉之家（Casa Milà）与巴特罗之家（Casa Batlló）。高迪以悬挂链条铅块倒置模型的力学模拟试验确立了纯粹受压的悬链线拱（Catenary Arch）与双曲抛物面，并开创以废旧瓷砖拼接的碎瓷工艺（Trencadís）。门德尔松以表现主义爱因斯坦塔闻名，奥塔与吉马尔为新艺术运动领袖。',
    explanationEn: 'Antoni Gaudí designed the Sagrada Família, Casa Milà, and Casa Batlló in Barcelona. Gaudí pioneered catenary and parabolic arches calculated via inverted weighted string models, alongside colourful trencadís tile mosaics.'
  },

  arched_101: {
    optionsZh: [
      '约瑟夫·玛丽亚·欧尔布里希 (Joseph Maria Olbrich)',
      '维克多·奥塔 (Victor Horta)',
      '埃克托尔·吉马尔 (Hector Guimard)',
      '阿道夫·路斯 (Adolf Loos)'
    ],
    optionsEn: [
      'Joseph Maria Olbrich',
      'Victor Horta',
      'Hector Guimard',
      'Adolf Loos'
    ],
    explanationZh: '维也纳分离派会馆（Secession Building, 1898）由约瑟夫·玛丽亚·欧尔布里希（Joseph Maria Olbrich）设计。建筑立面简洁纯净，顶部冠以由上千片镀金青铜月桂树叶编织而成的镂空金色球形穹顶（俗称“金卷心菜”），大门上方雕刻分离派运动著名座右铭：“时代有其艺术，艺术有其自由”（Der Zeit ihre Kunst, der Kunst ihre Freiheit）。奥塔在布鲁塞尔开创新艺术运动，吉马尔设计巴黎地铁入口，路斯倡导《装饰即罪恶》。',
    explanationEn: 'The Vienna Secession Building (1898) was designed by Joseph Maria Olbrich. Crowned with a perforated dome of gilded bronze laurel leaves ("golden cabbage"), its portal bears the famous inscription: "To every age its art, to art its freedom".'
  },

  arched_105: {
    optionsZh: [
      '卡森·皮里·斯科特百货大楼 (Carson Pirie Scott / Sullivan Center)',
      '家庭保险大楼 (Home Insurance Building)',
      '鲁克里大厦 (Rookery Building)',
      '信赖大厦 (Reliance Building)'
    ],
    optionsEn: [
      'Carson Pirie Scott / Sullivan Center',
      'Home Insurance Building',
      'Rookery Building',
      'Reliance Building'
    ],
    explanationZh: '建于芝加哥（1884-1885，已于1931年拆除）的家庭保险大楼（Home Insurance Building）由威廉·勒·巴隆·珍妮（William Le Baron Jenney）设计。大楼楼高10层，首次全面采用了金属内框架结构（铸铁立柱与熟铁/锻钢横梁）承担建筑自重与风荷载，外立面砌体砖石退化为轻型自承重饰面，开创了现代钢框架摩天大楼的建造范式。沙利文的卡森·皮里·斯科特百货大楼以流线铸铁装饰和芝加哥窗闻名。',
    explanationEn: 'The Home Insurance Building (Chicago, 1884-1885) designed by William Le Baron Jenney is recognized as the world\'s first skyscraper supported by a fully load-bearing metal structural frame (cast iron columns and wrought iron/steel beams), liberating the facade from load-bearing masonry.'
  },

  arched_112: {
    optionsZh: [
      '阿道夫·路斯 (Adolf Loos)',
      '瓦尔特·格罗皮乌斯 (Walter Gropius)',
      '路德维希·密斯·凡·德·罗 (Ludwig Mies van der Rohe)',
      '特奥·范·杜斯堡 (Theo van Doesburg)'
    ],
    optionsEn: [
      'Adolf Loos',
      'Walter Gropius',
      'Ludwig Mies van der Rohe',
      'Theo van Doesburg'
    ],
    explanationZh: '路德维希·密斯·凡·德·罗（Ludwig Mies van der Rohe）在1930年接替汉斯·迈耶担任国立包豪斯学校第三任也是最后一任校长。密斯上任后淡化了前期的激进政治色彩，全力强化纯粹建筑学专业教学，1932年德绍市议会被纳粹把持停发经费后，密斯自费将学校迁往柏林斯泰格利茨一座废弃电话工厂作为私立学校维系运营，最终在1933年7月遭纳粹警察搜查查封后被迫解散。格罗皮乌斯为第一任校长，路斯倡导空间规约，杜斯堡曾赴魏玛教授风格派课程。',
    explanationEn: 'Ludwig Mies van der Rohe served as the third and final director of the Bauhaus from 1930 to 1933, de-politicizing the curriculum to focus rigorously on architectural craft. When the Dessau campus was shut by local Nazi politicians in 1932, Mies relocated the school to an abandoned telephone factory in Berlin before its final dissolution.'
  },

  arched_137: {
    optionsZh: [
      '特奥·范·杜斯堡 (Theo van Doesburg)',
      '翁贝托·薄邱尼 (Umberto Boccioni)',
      '卡洛·卡拉 (Carlo Carrà)',
      '菲利波·托马索·马里内蒂 (Filippo Tommaso Marinetti)'
    ],
    optionsEn: [
      'Theo van Doesburg',
      'Umberto Boccioni',
      'Carlo Carrà',
      'Filippo Tommaso Marinetti'
    ],
    explanationZh: '翁贝托·薄邱尼（Umberto Boccioni）是未来主义视觉艺术领域的首席理论家与领袖。他在1910年主笔起草并联合卡拉等人签署了《未来主义画家宣言》与《技术宣言》，率先在理论上提出“力量线”（Lines of Force）、“环境与物体的塑性共渗”（Plastic Transcendence）与“动态感知”（Dynamic Sensation）。马里内蒂为文学奠基人，卡拉为画派骨干，杜斯堡为荷兰风格派创始人。',
    explanationEn: 'Umberto Boccioni was the principal visual theorist and artist of Futurism. He drafted the Technical Manifesto of Futurist Painting (1910) and the Technical Manifesto of Futurist Sculpture (1912), defining lines of force and the interpenetration of simultaneous matter.'
  },

  arched_187: {
    optionsZh: [
      '佛罗伦萨圣母百花大教堂穹顶 (Florence Cathedral Dome)',
      '坦比哀多礼拜堂 (Tempietto di San Pietro in Montorio)',
      '托迪慰藉圣母堂 (Santa Maria della Consolazione)',
      '罗马四喷泉圣卡罗堂 (San Carlo alle Quattro Fontane)'
    ],
    optionsEn: [
      'Florence Cathedral Dome',
      'Tempietto di San Pietro in Montorio',
      'Santa Maria della Consolazione',
      'San Carlo alle Quattro Fontane'
    ],
    explanationZh: '多纳托·伯拉孟特（Donato Bramante）于1502年在罗马贾尼科洛山蒙托里奥圣彼得堂修道院庭院设计的坦比哀多（Tempietto di San Pietro in Montorio），是西方建筑史盛期文艺复兴（High Renaissance）的最纯正纪念碑式范式。建筑采用绝对对称的圆形集中式神殿平面，环绕16根整块大理石多立克原色列柱，柱顶配以雕刻精致的三歧角线与间板饰带，中央由半球形穹顶覆顶，完美复活并升华了古罗马圆形神殿的理性比例。圣母百花穹顶为早期文艺复兴布鲁内莱斯基所创，四喷泉圣卡罗堂为巴洛克大师博罗米尼杰作。',
    explanationEn: 'The Tempietto di San Pietro in Montorio (Rome, 1502) by Donato Bramante is universally celebrated as the quintessential embodiment of High Renaissance architectural perfection. Its circular centralized plan, surrounded by 16 Doric columns supporting a classical entablature and hemispherical dome, revived classical balance and harmonic proportion.'
  },

  arched_197: {
    optionsZh: [
      '设计一座对称的双塔哥特式门楼封闭轴线视廊',
      '下令彻底爆破平毁历史悠久的罗马元老院宫殿并将整座小山削平为平地',
      '在广场外围挖掘深不见底的环形护城河并注入台伯河泥水',
      '构想了一座面向圣彼得教廷的梯形广场平面，新建一座完全对称的“新宫”以平衡非平行夹角，中央镶嵌由十二芒星交织的动态椭圆形石材铺装，环绕马可·奥勒留皇帝骑马青铜像'
    ],
    optionsEn: [
      'Construct a symmetrical double-tower Gothic gatehouse blocking the axial vista',
      'Order the complete demolition of the ancient Senatorial Palace to flatten the hill',
      'Dig an expansive defensive moat around the perimeter filled with Tiber river water',
      'Conceive a trapezoidal open piazza oriented toward the Vatican, build the mirror-image Palazzo Nuovo to resolve the angled divergence, and lay an undulating elliptical 12-pointed star pavement around Marcus Aurelius'
    ],
    explanationZh: '1536年米开朗基罗（Michelangelo）受教宗保禄三世委托改造卡比托利欧广场（Piazza del Campidoglio）。现场原有的元老院宫与保守宫呈80度斜向夹角，米开朗基罗巧妙构想了梯形广场平面，并在北侧新建完全对称的“新宫”（Palazzo Nuovo）形成透视视觉修正；地面铺设动态凸起的椭圆形12芒星石材几何图案，中央统摄古罗马马可·奥勒留皇帝骑马青铜雕像，创造出古典与手法主义张力并存的城市公共空间典范。',
    explanationEn: 'In designing the Piazza del Campidoglio (1536), Michelangelo brilliantly turned the awkward 80-degree divergence between the Palazzo dei Senatori and Palazzo dei Conservatori into an optical advantage by creating a trapezoidal plan, mirrored by the newly added Palazzo Nuovo, centered on a dynamic 12-pointed star elliptical pavement.'
  },

  arched_202: {
    optionsZh: [
      '一种三段式柱跨开洞母题：中央为半圆券拱，两侧各辅以一处由双联立柱支撑的较矮水平矩形开口（两开间过梁夹一圆拱）',
      '用彩色镶嵌玻璃花窗封闭的厚重高耸哥特式尖券开洞',
      '使用密集的连续预应力混凝土折板遮阳百叶与玻璃幕墙系统',
      '将外推力通过飞扶壁斜向支撑引导至地面墩座的受力构件'
    ],
    optionsEn: [
      'A tripartite opening motif: a central semicircular arch flanked by two lower flat-topped trabeated openings supported by colonnettes',
      'Heavy soaring Gothic pointed openings sealed with rayonnant stained-glass tracery',
      'Continuous prestressed folded concrete sun-louvre fins paired with ribbon glass curtain walls',
      'An exterior diagonal flying buttress transmitting vault thrust down to ground piers'
    ],
    explanationZh: '塞尔利奥式拱 / 帕拉第奥母题（Serliana / Palladian Motif）最初由塞巴斯蒂亚诺·塞尔利奥在论著中图解，后由安德烈·帕拉第奥（Andrea Palladio）在维琴察巴西利卡（Basilica Palladiana，1549）双层大理石敞廊立面中炉火纯青地发扬光大。它由一个高挑的中央半圆券拱与两侧较矮的水平开间（由立柱支撑平梁）组合而成，具有极高的几何调节自由度，能优雅适应中世纪旧建筑不均匀的柱网跨度。',
    explanationEn: 'The Serliana (or Palladian motif) is a tripartite architectural opening featuring a central semicircular arch resting on an entablature supported by paired colonnettes, flanked by two lower rectangular openings. Palladio immortalized it on the loggias of the Basilica Palladiana in Vicenza.'
  },

  arched_024: {
    explanationZh: '抽象表现主义在1947-1950年成熟；波普艺术在1955-1960年崛起；极简主义在1965年前后确立工业特定物体美学；概念艺术于1967年以观念超越物态形式占据主导。',
    explanationEn: 'Abstract Expressionism (Action Painting/Color Field) flourished from 1947. Pop Art emerged in Britain and the US in 1955-1960. Minimal Art consolidated around 1965 with primary industrial geometric structures. Conceptual Art asserted intellectual ideas over physical form from 1967.'
  },

  arched_028: {
    explanationZh: '约瑟夫·马里亚·奥尔布里希等建筑师与艺术家建立维也纳分离派于1897年；霍夫曼等创立维也纳工坊于1903年；穆特修斯等在慕尼黑成立德意志制造联盟于1907年；格罗皮乌斯融合工艺与机器工业创办包豪斯于1919年。',
    explanationEn: 'Architects and artists including Joseph Maria Olbrich founded the Vienna Secession in 1897. Josef Hoffmann and Koloman Moser created the Wiener Werkstätte craft enterprise in 1903. Hermann Muthesius and designers launched the Deutscher Werkbund in Munich in 1907. Gropius unified these traditions at the Bauhaus in Weimar in 1919.'
  },

  arched_050: {
    questionZh: '1919年在一张古典肖像名画明信片上添画八字胡与山羊胡，并在底部题写双关谐音字母“L.H.O.O.Q.”的达达主义艺术家是：',
    questionEn: 'Identify the author of the 1919 assisted readymade featuring a postcard reproduction of an iconic classical portrait with a penciled mustache and goatee and the title \'L.H.O.O.Q.\':',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/74/Marcel_Duchamp%2C_1919%2C_L.H.O.O.Q.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original',
    fallbackImage: '/images/artworks/lhooq.jpg',
    explanationZh: '1919年达达主义大师马塞尔·杜尚（Marcel Duchamp）在一张彩色明信片上，用铅笔为经典贵妇肖像添画了八字胡和山羊胡，并在底部题写大写字母“L.H.O.O.Q.”（法语字母连读谐音为“Elle a chaud au cul”，意即她坐立难安/欲火中烧）。这一“辅助现成品”（Assisted Ready-made）以前卫达达的挑衅幽默彻底解构了资产阶级神圣化的古典艺术偶像。薄邱尼为未来主义领袖，马格里特与达利为超现实主义大师。',
    explanationEn: 'In 1919, Marcel Duchamp created the assisted readymade L.H.O.O.Q. by drawing a moustache and goatee onto a postcard reproduction of an iconic Renaissance portrait. The letters phoneticize in French as "Elle a chaud au cul", a scandalous pun deflating classical bourgeois reverence through iconoclastic Dada humor.',
    tags: ['VisualID', 'Duchamp', 'Dada', 'Readymade', 'Conceptual']
  },

  arched_139: {
    explanationZh: '卡洛·卡拉（Carlo Carrà）的艺术生涯浓缩了20世纪意大利艺术变迁：从早期未来派的红黑警棍与马匹暴动冲击波，到一战期间转入形而上人偶静物，再到20年代倡导原初朴素、厚重体积感的古典秩序回归。',
    explanationEn: 'Carlo Carrà was a signatory of the 1910 Futurist manifestos, famously painting the swirling riot of Galli\'s funeral in Milan; in 1917 he met de Chirico in Ferrara, transitioning to metaphysical dreamscapes and archaic solid figures with monumental volumetric calm.'
  },

  arched_178: {
    explanationZh: '马拉泰斯塔圣殿被史学家誉为第一座纯正复兴古罗马凯旋门母题的基督教堂。建筑两侧以雄浑连续半圆拱券盲廊收纳学者石棺，内部饰有精美浮雕壁饰，虽穹顶未竟却名垂青史。',
    explanationEn: 'The Tempio Malatestiano was the first Renaissance building to adapt the Roman triumphal arch for a Christian facade, placing deep rounded blind arcades along the lateral flanks to shelter the sarcophagi of Malatesta\'s court humanists.'
  },

  arched_101: {
    tags: ['AvantGarde', 'Architecture', 'Vienna Secession', 'Olbrich', 'SecessionBuilding']
  },

  arched_134: {
    explanationZh: '达利强调其方法不同于消极被动的精神自动主义，而是由艺术家主动模拟偏执狂的妄想联想能力，以高度逼真细密的古典学院派写实技法，把梦幻中的多重并置意象（如白天鹅倒影即为大象）固定在三维画幅上。'
  }
};
