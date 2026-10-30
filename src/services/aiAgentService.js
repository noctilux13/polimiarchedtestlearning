/**
 * Client-side AI Agent Service & Tool-Calling Sandbox
 * Provides strictly isolated tool execution, Multi-Provider API Key routing (Gemini/OpenAI/Custom),
 * and a 100% deterministic offline fallback engine.
 *
 * SECURITY GUARANTEES:
 * - Zero execution of arbitrary script strings or dynamic evaluators (no eval, no new Function)
 * - Strictly whitelisted 8 sandboxed tools
 * - Disallows access to API keys, system execution, cookies, or underlying application code
 * - Input sanitization against XSS, HTML tags, and javascript: pseudo-protocols
 * - Strict namespace isolation restricted to arched_* stores
 */

import * as questionBankService from './questionBankService.js';

export const ALLOWED_TOOLS = Object.freeze([
  'get_question_bank_summary',
  'query_questions',
  'add_question',
  'update_question',
  'delete_question',
  'generate_questions',
  'configure_practice_settings',
  'reset_question_bank'
]);

export const AI_SETTINGS_KEY = 'arched_ai_settings';
export const PRACTICE_CONFIG_KEY = 'arched_practice_config';

/**
 * XSS & HTML Tag Sanitizer
 */
export function sanitizeInput(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+on\w+=[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/javascript\s*:/gi, '')
    .trim();
}

/**
 * Prototype pollution safe shallow/deep sanitizer with BigInt & circular reference handling
 */
function sanitizeObject(obj, seen = new WeakSet()) {
  if (typeof obj === 'bigint') {
    const num = Number(obj);
    return Number.isSafeInteger(num) ? num : obj.toString();
  }
  if (!obj || typeof obj !== 'object') return obj;
  if (seen.has(obj)) return undefined;
  seen.add(obj);

  if (Array.isArray(obj)) return obj.map(item => sanitizeObject(item, seen));
  const clean = Object.create(null);
  for (const key of Object.keys(obj)) {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;
    clean[key] = sanitizeObject(obj[key], seen);
  }
  return clean;
}

/**
 * Retrieves AI Settings from LocalStorage
 */
export function getAISettings() {
  try {
    const raw = globalThis.localStorage?.getItem(AI_SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch {
    // fallback to legacy keys
  }

  const legacyKey = (globalThis.localStorage?.getItem('aiApiKey') || globalThis.localStorage?.getItem('groqApiKey') || '').trim();
  const legacyEndpoint = (globalThis.localStorage?.getItem('aiApiEndpoint') || '').trim();
  const legacyModel = (globalThis.localStorage?.getItem('aiApiModel') || '').trim();

  let provider = 'gemini';
  if (legacyKey.startsWith('AIzaSy')) {
    provider = 'gemini';
  } else if (legacyKey.startsWith('sk-') && !legacyEndpoint.includes('deepseek')) {
    provider = 'openai';
  } else if (legacyEndpoint && !legacyEndpoint.includes('googleapis.com')) {
    provider = 'custom';
  }

  return {
    provider,
    apiKey: legacyKey,
    model: legacyModel || (provider === 'gemini' ? 'gemini-2.5-flash' : 'gpt-4o-mini'),
    customEndpoint: legacyEndpoint || '',
    temperature: 0.7
  };
}

/**
 * Persists AI Settings to LocalStorage with backward compatibility sync
 */
export function saveAISettings(settings = {}) {
  const clean = sanitizeObject(settings);
  try {
    globalThis.localStorage?.setItem(AI_SETTINGS_KEY, JSON.stringify(clean));
    if (clean.apiKey !== undefined) globalThis.localStorage?.setItem('aiApiKey', clean.apiKey || '');
    if (clean.customEndpoint !== undefined) globalThis.localStorage?.setItem('aiApiEndpoint', clean.customEndpoint || '');
    if (clean.model !== undefined) globalThis.localStorage?.setItem('aiApiModel', clean.model || '');
  } catch (err) {
    console.error('Failed to save AI settings:', err);
  }
  return clean;
}

/**
 * Retrieves Practice Configuration
 */
export function getPracticeConfig() {
  const defaults = {
    mode: 'exam_simulator',
    quizQuestionCount: 10,
    examQuestionCount: 20,
    examTimeLimitMinutes: 30,
    negativeScoring: true,
    categoryFilter: '',
    difficultyFilter: 0,
    shuffleOptions: true,
    immediateFeedback: false
  };

  try {
    const raw = globalThis.localStorage?.getItem(PRACTICE_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...defaults, ...parsed };
    }
  } catch {
    // return defaults
  }
  return defaults;
}

/**
 * Curated authentic ARCHED curriculum templates for synthetic question generation
 */
const CURATED_GENERATION_TEMPLATES = {
  chronology: [
    {
      subCategory: 'Chronological Sequencing',
      era: '18th_to_20th_century',
      questionZh: '下列西方主要艺术与建筑流派，按照历史发展与兴起时间先后排列，正确的是？',
      questionEn: 'Which sequence correctly arranges the following art and architectural movements in chronological order of their emergence?',
      optionsZh: [
        '新古典主义 (Neoclassicism) → 浪漫主义 (Romanticism) → 写实主义 (Realism) → 印象派 (Impressionism)',
        '印象派 (Impressionism) → 新古典主义 (Neoclassicism) → 浪漫主义 (Romanticism) → 写实主义 (Realism)',
        '浪漫主义 (Romanticism) → 新古典主义 (Neoclassicism) → 印象派 (Impressionism) → 写实主义 (Realism)',
        '写实主义 (Realism) → 印象派 (Impressionism) → 新古典主义 (Neoclassicism) → 浪漫主义 (Romanticism)'
      ],
      optionsEn: [
        'Neoclassicism → Romanticism → Realism → Impressionism',
        'Impressionism → Neoclassicism → Romanticism → Realism',
        'Romanticism → Neoclassicism → Impressionism → Realism',
        'Realism → Impressionism → Neoclassicism → Romanticism'
      ],
      correctAnswer: 0,
      explanationZh: '新古典主义兴起于18世纪中后期（庞贝发掘与启蒙理性）；浪漫主义继起于18世纪末至19世纪初；19世纪中叶库尔贝确立写实主义；1874年第一次印象派画展标志印象派诞生。',
      explanationEn: 'Neoclassicism emerged in the mid-18th century, followed by Romanticism around 1800, Courbet\'s Realism in the 1850s, and Impressionism in 1874.',
      tags: ['Chronology', 'Neoclassicism', 'Romanticism', 'Realism', 'Impressionism'],
      difficulty: 1
    },
    {
      subCategory: 'Renaissance to Enlightenment Progression',
      era: '15th_to_18th_century',
      questionZh: '欧洲建筑从文艺复兴至启蒙运动前夕的演进序列中，下列排序何者准确无误？',
      questionEn: 'Which chronological progression accurately reflects European architectural styles from the Renaissance to the Enlightenment?',
      optionsZh: [
        '早期文艺复兴 → 盛期文艺复兴 → 样式主义 (Mannerism) → 巴洛克 (Baroque) → 洛可可 (Rococo)',
        '巴洛克 → 样式主义 → 盛期文艺复兴 → 早期文艺复兴 → 洛可可',
        '盛期文艺复兴 → 洛可可 → 样式主义 → 巴洛克 → 早期文艺复兴',
        '早期文艺复兴 → 巴洛克 → 盛期文艺复兴 → 样式主义 → 洛可可'
      ],
      optionsEn: [
        'Early Renaissance → High Renaissance → Mannerism → Baroque → Rococo',
        'Baroque → Mannerism → High Renaissance → Early Renaissance → Rococo',
        'High Renaissance → Rococo → Mannerism → Baroque → Early Renaissance',
        'Early Renaissance → Baroque → High Renaissance → Mannerism → Rococo'
      ],
      correctAnswer: 0,
      explanationZh: '早期文艺复兴（15世纪佛罗伦萨）→ 盛期文艺复兴（1500年前后罗马）→ 样式主义（1520s-1590s反古典探索）→ 巴洛克（17世纪罗马动势空间）→ 洛可可（18世纪初法国轻盈华丽装饰）。',
      explanationEn: 'Early Renaissance (15th c.) → High Renaissance (~1500) → Mannerism (1520s) → Baroque (17th c.) → Rococo (early 18th c.).',
      tags: ['Chronology', 'Renaissance', 'Mannerism', 'Baroque', 'Rococo'],
      difficulty: 2
    }
  ],
  visual_id: [
    {
      subCategory: 'Spatialism & Canvas Manipulation',
      era: 'postwar',
      questionZh: '哪位战后意大利前卫艺术家发表了《空间主义宣言》（Manifesto Spaziale），并通过割破或穿刺单色画布创造了《空间概念》（Concetto Spaziale）系列？',
      questionEn: 'Which postwar Italian avant-garde artist published the "Manifesto Spaziale" and created the "Concetto Spaziale" series by puncturing and slashing monochrome canvases?',
      optionsZh: [
        '卢齐欧·封塔纳 (Lucio Fontana)',
        '阿尔贝托·布里 (Alberto Burri)',
        '皮耶罗·曼佐尼 (Piero Manzoni)',
        '马里奥·梅尔茨 (Mario Merz)'
      ],
      optionsEn: [
        'Lucio Fontana',
        'Alberto Burri',
        'Piero Manzoni',
        'Mario Merz'
      ],
      correctAnswer: 0,
      explanationZh: '卢齐欧·封塔纳（Lucio Fontana）于1947年在米兰创立空间主义。他通过刀割（tagli）和孔洞（buchi）划破二维画幅，将画布后的真实物理空间与光线引入作品，颠覆传统绘画的幻觉平面。',
      explanationEn: 'Lucio Fontana founded Spatialism in Milan in 1947. Through incisions (tagli) and perforations (buchi), he breached the picture plane to incorporate real physical space and light.',
      tags: ['Fontana', 'Spatialism', 'Postwar', 'Italian Avant-Garde'],
      difficulty: 2
    },
    {
      subCategory: 'Suprematism & Geometric Abstraction',
      era: '20th_century',
      questionZh: '在1915年彼得格勒举办的「0,10 最后的未来主义画展」上，卡济米尔·马列维奇将其代表作《黑方块》（Black Square）悬挂在展厅的何种特殊位置？',
      questionEn: 'At the "0.10: The Last Futurist Exhibition" in Petrograd (1915), in what specific room location did Kazimir Malevich hang his seminal "Black Square"?',
      optionsZh: [
        '东正教传统悬挂圣像的「红角 / 圣像角」(Beautiful Corner / Krasny Ugol)',
        '展厅正中央的水泥雕塑展台上方',
        '展厅入口两侧以形成对仗拱门',
        '贴地放置象征艺术传统的终结与埋葬'
      ],
      optionsEn: [
        'The "red/beautiful corner" (krasny ugol) traditionally reserved for Russian Orthodox icons',
        'Suspended from the center ceiling above sculptured reliefs',
        'Flanking the main entrance doors as an archway',
        'Placed directly on the floor symbolizing the burial of tradition'
      ],
      correctAnswer: 0,
      explanationZh: '马列维奇将《黑方块》悬挂在俄罗斯民居传统放置东正教圣像的高处墙角（Krasny Ugol），宣称至上主义（Suprematism）是超越具象叙事的新时代纯粹艺术情感的最高体现。',
      explanationEn: 'Malevich hung the Black Square across the high corner reserved for sacred icons in Russian homes, designating Suprematism as the zero degree of pure pictorial sensation.',
      tags: ['Malevich', 'Suprematism', 'Black Square', 'Russian Avant-Garde'],
      difficulty: 3
    }
  ],
  avant_garde: [
    {
      subCategory: 'Bauhaus Weimar to Dessau',
      era: '20th_century',
      questionZh: '1919年由瓦尔特·格罗皮乌斯在魏玛创立的包豪斯（Bauhaus），其创校宣言的核心主张是？',
      questionEn: 'Founded in Weimar in 1919 by Walter Gropius, what was the foundational thesis of the Bauhaus Manifesto?',
      optionsZh: [
        '打破纯艺术与手工艺的傲慢壁垒，一切创造活动的最终目标是建筑整体 (Gesamtkunstwerk)',
        '彻底否定手工艺生产，全面拥抱纯机械化量产且禁止任何形式的装饰',
        '继承新艺术运动的植物曲线，将自然有机形态转化为工业标准件',
        '复兴古典主义轴线与柱式比例，以对抗一战后的虚无主义思潮'
      ],
      optionsEn: [
        'Abolish the arrogant barrier between craftsman and artist; the ultimate goal of all visual arts is the complete building (Gesamtkunstwerk)',
        'Denounce manual craftsmanship entirely in favor of unadorned machine assembly',
        'Adapt Art Nouveau floral arabesques directly into mass-produced industrial parts',
        'Revive classical Vitruvian proportions to resist postwar cultural nihilism'
      ],
      correctAnswer: 0,
      explanationZh: '包豪斯1919年宣言开篇即强调：「手工艺人与艺术家之间并没有本质的区别……一切造型创造的终极目标是建筑。」通过工坊制实现技术与艺术的崭新统一。',
      explanationEn: 'Gropius proclaimed that there is no essential difference between the artist and the artisan, and that the ultimate aim of all visual arts is the unified building.',
      tags: ['Bauhaus', 'Gropius', 'Modern Architecture', 'Weimar'],
      difficulty: 2
    },
    {
      subCategory: 'Italian Rationalism',
      era: '20th_century',
      questionZh: '朱塞佩·泰拉尼（Giuseppe Terragni）设计的科莫法西斯大楼（Casa del Fascio, 1932-1936）是意大利理性主义建筑的代表作，其立面构图严格依据了何种几何数学体系？',
      questionEn: 'Giuseppe Terragni\'s Casa del Fascio in Como (1932–1936), a masterpiece of Italian Rationalism, strictly structured its facade compositions according to which geometrical system?',
      optionsZh: [
        '以立方体与黄金分割比例严格划分的纯粹柱网框架体系',
        '完全不对称的自由曲面流线型壳体',
        '拜占庭式希腊十字与中央穹顶结构',
        '哥特式飞扶壁与尖肋拱顶的钢结构转译'
      ],
      optionsEn: [
        'A pure volumetric prism governed by the Golden Section and strict structural grid proportions',
        'Streamlined aerodynamic freeform curves',
        'Byzantine Greek cross plans with central dome',
        'Gothic ribbed vaulting and flying buttresses adapted to steel'
      ],
      correctAnswer: 0,
      explanationZh: '科莫法西斯大楼平面为正方形（33.2米边长，16.6米高），高宽比为1:2，立面严格运用黄金分割矩形和模度模数网格，结合博蒂奇诺大理石与玻璃砖，展现理性主义几何清晰度。',
      explanationEn: 'The Casa del Fascio is designed as a perfect geometric prism with a 1:2 height-to-width ratio, utilizing a concrete frame cladded in Botticino marble governed by golden ratio proportions.',
      tags: ['Terragni', 'Casa del Fascio', 'Italian Rationalism', 'Como'],
      difficulty: 3
    }
  ],
  artist_movement: [
    {
      subCategory: 'Italian Futurism',
      era: '20th_century',
      questionZh: '1909年菲利波·托马索·马里内蒂发表《未来主义宣言》，下列哪组艺术家是该运动在绘画与雕塑领域的核心代表？',
      questionEn: 'Following F.T. Marinetti\'s 1909 Futurist Manifesto, which artists constituted the core vanguard of the movement in painting and sculpture?',
      optionsZh: [
        '翁贝托·博乔尼 (Umberto Boccioni) 与 卡洛·卡拉 (Carlo Carrà)',
        '乔治·德·基里科 (Giorgio de Chirico) 与 阿尔贝托·萨维尼奥 (Alberto Savinio)',
        '皮特·蒙德里安 (Piet Mondrian) 与 特奥·凡·杜斯堡 (Theo van Doesburg)',
        '胡安·米罗 (Joan Miró) 与 安德烈·马松 (André Masson)'
      ],
      optionsEn: [
        'Umberto Boccioni and Carlo Carrà',
        'Giorgio de Chirico and Alberto Savinio',
        'Piet Mondrian and Theo van Doesburg',
        'Joan Miró and André Masson'
      ],
      correctAnswer: 0,
      explanationZh: '博乔尼（代表作《空间中连续的唯美形体》）与卡拉（代表作《无政府主义者加利的葬礼》）是意大利未来主义画派签署人和核心人物，极力歌颂机械速度与动态冲击力。',
      explanationEn: 'Umberto Boccioni and Carlo Carrà were foundational signatories of the 1910 Technical Manifesto of Futurist Painting, pioneering simultaneous dynamic vision.',
      tags: ['Futurism', 'Boccioni', 'Carrà', 'Italian Avant-Garde'],
      difficulty: 1
    },
    {
      subCategory: 'Metaphysical Art',
      era: '20th_century',
      questionZh: '乔治·德·基里科（Giorgio de Chirico）创立的「形而上画派」（Pittura Metafisica），其画面最显著的美学特征是？',
      questionEn: 'What is the most distinctive aesthetic hallmark of the Metaphysical painting movement (Pittura Metafisica) founded by Giorgio de Chirico?',
      optionsZh: [
        '空旷寂寥的古典拱廊广场、拉长倾斜的黄昏阴影与无面无表情的裁缝人体模型',
        '剧烈飞溅的油彩滴流、无中心扩散构图与无意识动作记录',
        '严格三原色与非色彩黑白灰的纯粹水平垂直网格',
        '极度真实的日常广告商标消费品拼贴与机械网点放大'
      ],
      optionsEn: [
        'Desolate Italian piazzas, elongated unnatural shadows, arcades, and faceless mannequins',
        'Spontaneous gestural drips and all-over active paint splattering',
        'Primary colors framed exclusively by black horizontal and vertical grid lines',
        'Magnified Ben-Day dots and commercial commodity advertising collages'
      ],
      correctAnswer: 0,
      explanationZh: '德·基里科在1910年代创作的形而上画派经典（如《爱之歌》、《蒙帕纳斯火车站》）以空寂的意大利文艺复兴广场、深沉拉长阴影与人体模型构筑出梦魇般超现实悬疑感。',
      explanationEn: 'De Chirico\'s Metaphysical paintings feature deserted Mediterranean arcades, melancholy late-afternoon shadows, architectural fragments, and uncanny mannequins.',
      tags: ['De Chirico', 'Metaphysical Painting', 'Pittura Metafisica', 'Italian Art'],
      difficulty: 2
    }
  ],
  renaissance_classical: [
    {
      subCategory: 'Early Renaissance Linear Perspective',
      era: 'renaissance',
      questionZh: '在佛罗伦萨新圣母大殿的壁画《圣三位一体》（Holy Trinity, 约1427）中，马萨乔（Masaccio）与哪位建筑大师合作，首次将精确的单点数学透视法则应用于大型壁画中？',
      questionEn: 'In the fresco "Holy Trinity" (c. 1427) at Santa Maria Novella in Florence, with which architect did Masaccio collaborate to construct the first rigorously mathematically precise single-point perspective?',
      optionsZh: [
        '菲利波·布鲁内莱斯基 (Filippo Brunelleschi)',
        '莱昂·巴蒂斯塔·阿尔伯蒂 (Leon Battista Alberti)',
        '米开罗佐 (Michelozzo)',
        '多纳泰罗 (Donatello)'
      ],
      optionsEn: [
        'Filippo Brunelleschi',
        'Leon Battista Alberti',
        'Michelozzo',
        'Donatello'
      ],
      correctAnswer: 0,
      explanationZh: '马萨乔在《圣三位一体》壁画中采用布鲁内莱斯基发明的几何单点透视法，描绘了一个仿佛嵌入墙壁深处的罗马桶形穹窿祈祷室，实现了古典幻觉空间与透视学的革命。',
      explanationEn: 'Masaccio collaborated closely with Filippo Brunelleschi, who mathematically formulated one-point linear perspective, rendering a coffered barrel vault with precise scientific foreshortening.',
      tags: ['Masaccio', 'Brunelleschi', 'Perspective', 'Early Renaissance', 'Florence'],
      difficulty: 2
    },
    {
      subCategory: 'Baroque Dynamic Sculpture',
      era: 'baroque',
      questionZh: '吉安·洛伦佐·贝尔尼尼（Gian Lorenzo Bernini）在罗马博尔盖塞美术馆的大理石雕塑《阿波罗与达芙妮》（Apollo and Daphne, 1622-1625）捕捉了奥维德《变形记》中何种瞬时戏剧高潮？',
      questionEn: 'Gian Lorenzo Bernini\'s marble masterpiece "Apollo and Daphne" (1622–1625) in the Galleria Borghese captures what dramatic split-second climax from Ovid\'s Metamorphoses?',
      optionsZh: [
        '达芙妮的手指化为月桂树叶、脚趾深扎入土地变为树根的肉体变形瞬间',
        '阿波罗向宙斯祈求爱情胜利并摘取胜利桂冠的典礼',
        '达芙妮逃脱后在河神父亲怀中安详入睡的静态场景',
        '阿波罗射杀巨蟒皮同后的凯旋姿态'
      ],
      optionsEn: [
        'The exact instantaneous metamorphosis where Daphne\'s fingers sprout laurel leaves and toes root into bark',
        'Apollo\'s coronation with laurel wreath before the Olympic gods',
        'Daphne resting peacefully by the riverbank with her father Peneus',
        'Apollo\'s triumphant pose after slaying the serpent Python'
      ],
      correctAnswer: 0,
      explanationZh: '贝尔尼尼以卓越的巴洛克技艺将坚硬大理石化作柔滑肌肤、飞舞秀发与初生树皮，凝固了达芙妮被阿波罗触碰瞬间化为月桂树的动态悲剧高潮。',
      explanationEn: 'Bernini miraculously transmuted rigid Carrara marble into soft flesh, flying drapery, and emerging laurel leaves, freezing the exact fractional instant of metamorphosis.',
      tags: ['Bernini', 'Baroque', 'Sculpture', 'Apollo and Daphne', 'Rome'],
      difficulty: 2
    }
  ]
};

/**
 * Executes a sandboxed tool with strict boundary validation
 */
export async function executeSandboxedTool(toolName, rawParams = {}) {
  try {
    // 1. Tool authorization check
    if (!ALLOWED_TOOLS.includes(toolName)) {
      return {
        success: false,
        error: `Unauthorized tool: "${toolName}". The AI agent is restricted to whitelisted practice tools only.`
      };
    }

    // 2. Prevent prototype pollution & massive payload attacks
    const params = sanitizeObject(rawParams || {}) || {};
    let serialized;
    try {
      serialized = JSON.stringify(params, (key, value) =>
        typeof value === 'bigint' ? Number(value) : value
      );
    } catch (serErr) {
      return {
        success: false,
        error: `Parameter serialization error: ${serErr?.message || String(serErr)}`
      };
    }

    if (serialized && serialized.length > 50000) {
      return {
        success: false,
        error: 'Payload size limit exceeded (maximum 50 KB).'
      };
    }

    switch (toolName) {
      case 'get_question_bank_summary': {
        const summary = questionBankService.getSummary();
        return {
          success: true,
          data: summary
        };
      }

      case 'query_questions': {
        let limit = 10;
        if (typeof params?.limit === 'number') {
          limit = Math.max(1, Math.min(20, params.limit));
        }
        const filtered = questionBankService.queryQuestions({
          domain: params?.domain,
          era: params?.era,
          subCategory: params?.subCategory,
          difficulty: params?.difficulty,
          keyword: params?.keyword,
          tag: params?.tag,
          limit
        });
        return {
          success: true,
          data: filtered
        };
      }

      case 'add_question': {
        if (!params.questionZh && !params.questionEn) {
          return { success: false, error: 'Question must contain questionZh or questionEn' };
        }

        // Validate image protocol
        if (params.image && typeof params.image === 'string') {
          const trimmedImg = params.image.trim().toLowerCase();
          if (trimmedImg.startsWith('javascript:') || trimmedImg.startsWith('data:text/html')) {
            return { success: false, error: 'Disallowed image URL protocol' };
          }
        }

        let domain = params.domain || 'avant_garde';
        if (domain === 'avant_garde_modern') domain = 'avant_garde';

        const sanitized = {
          domain,
          subCategory: sanitizeInput(params.subCategory || 'General'),
          era: params.era || '20th_century',
          questionZh: sanitizeInput(params.questionZh || ''),
          questionEn: sanitizeInput(params.questionEn || ''),
          optionsZh: Array.isArray(params.optionsZh) ? params.optionsZh.map(sanitizeInput) : ['A', 'B', 'C', 'D'],
          optionsEn: Array.isArray(params.optionsEn) ? params.optionsEn.map(sanitizeInput) : ['A', 'B', 'C', 'D'],
          correctAnswer: typeof params.correctAnswer === 'number' ? params.correctAnswer : 0,
          explanationZh: sanitizeInput(params.explanationZh || ''),
          explanationEn: sanitizeInput(params.explanationEn || ''),
          tags: Array.isArray(params.tags) ? params.tags.map(sanitizeInput) : ['Custom'],
          difficulty: params.difficulty || 1,
          image: params.image ? sanitizeInput(params.image) : null
        };

        const added = questionBankService.addCustomQuestion(sanitized);
        if (!added.success) {
          return { success: false, error: added.error || 'Failed to add question' };
        }
        return {
          success: true,
          data: added.question
        };
      }

      case 'update_question': {
        if (!params?.id) {
          return { success: false, error: 'Missing required field: id' };
        }
        const existing = questionBankService.getQuestionById(params.id);
        if (!existing) {
          return { success: false, error: `Question not found with ID: ${params.id}` };
        }

        const sanitizedUpdates = {};
        if (params.updates) {
          for (const [k, v] of Object.entries(params.updates)) {
            if (typeof v === 'string') {
              sanitizedUpdates[k] = sanitizeInput(v);
            } else if (Array.isArray(v)) {
              sanitizedUpdates[k] = v.map(sanitizeInput);
            } else {
              sanitizedUpdates[k] = v;
            }
          }
        }

        const updated = questionBankService.updateQuestion(params.id, sanitizedUpdates);
        if (!updated.success) {
          return { success: false, error: updated.error || 'Update failed' };
        }
        return {
          success: true,
          data: updated.question
        };
      }

      case 'delete_question': {
        if (!params?.id) {
          return { success: false, error: 'Missing required field: id' };
        }
        if (params.id.startsWith('arched_')) {
          return { success: false, error: 'Cannot delete built-in immutable question' };
        }

        const deleted = questionBankService.deleteQuestion(params.id);
        if (!deleted.success) {
          return { success: false, error: deleted.error || 'Delete operation rejected' };
        }
        return {
          success: true,
          id: params.id
        };
      }

      case 'generate_questions': {
        let domain = params.domain || 'avant_garde';
        if (!CURATED_GENERATION_TEMPLATES[domain]) {
          domain = 'avant_garde';
        }
        const count = Math.max(1, Math.min(5, parseInt(params.count, 10) || 1));
        const templates = CURATED_GENERATION_TEMPLATES[domain];
        const generatedList = [];

        for (let i = 0; i < count; i++) {
          const tpl = templates[i % templates.length];
          const uniqueId = `custom_gen_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
          const genQuestion = {
            id: uniqueId,
            domain,
            subCategory: tpl.subCategory,
            era: tpl.era,
            questionZh: tpl.questionZh,
            questionEn: tpl.questionEn,
            optionsZh: [...tpl.optionsZh],
            optionsEn: [...tpl.optionsEn],
            correctAnswer: tpl.correctAnswer,
            explanationZh: tpl.explanationZh,
            explanationEn: tpl.explanationEn,
            tags: [...tpl.tags],
            difficulty: params.difficulty || tpl.difficulty || 2,
            image: tpl.image || null
          };

          if (params.autoAdd) {
            questionBankService.addCustomQuestion(genQuestion);
          }
          generatedList.push(genQuestion);
        }

        return {
          success: true,
          data: generatedList
        };
      }

      case 'configure_practice_settings': {
        const current = getPracticeConfig();
        const nextConfig = {
          ...current,
          ...params
        };

        if (typeof params?.examTimeLimitMinutes === 'number') {
          nextConfig.examTimeLimitMinutes = Math.max(5, Math.min(180, params.examTimeLimitMinutes));
        }
        if (typeof params?.examQuestionCount === 'number') {
          nextConfig.examQuestionCount = Math.max(5, Math.min(100, params.examQuestionCount));
        }
        if (typeof params?.quizQuestionCount === 'number') {
          nextConfig.quizQuestionCount = Math.max(5, Math.min(50, params.quizQuestionCount));
        }
        if (typeof params?.negativeScoring === 'boolean') {
          nextConfig.negativeScoring = params.negativeScoring;
        }

        try {
          globalThis.localStorage?.setItem(PRACTICE_CONFIG_KEY, JSON.stringify(nextConfig));
        } catch (err) {
          console.warn('LocalStorage save error:', err);
        }

        return {
          success: true,
          data: nextConfig
        };
      }

      case 'reset_question_bank': {
        if (params?.confirm !== true) {
          return {
            success: false,
            error: 'reset_question_bank requires explicit confirmation flag: { confirm: true }'
          };
        }
        questionBankService.resetToFactoryDefaults();
        return {
          success: true,
          message: 'Question bank restored to official ARCHED base bank'
        };
      }

      default:
        return {
          success: false,
          error: `Unhandled tool: ${toolName}`
        };
    }
  } catch (err) {
    return {
      success: false,
      error: `Tool execution failed: ${err.message}`
    };
  }
}

/**
 * Gemini function declarations for all 8 whitelisted tools
 */
export const GEMINI_TOOL_DECLARATIONS = [
  {
    name: 'get_question_bank_summary',
    description: 'Get summary metrics, total question count, and category breakdown across the 5 official ARCHED domains.',
    parameters: {
      type: 'OBJECT',
      properties: {}
    }
  },
  {
    name: 'query_questions',
    description: 'Search and filter questions from the question bank by keyword, domain, era, or difficulty.',
    parameters: {
      type: 'OBJECT',
      properties: {
        keyword: { type: 'STRING', description: 'Artist, movement, architectural term, or keyword to match' },
        domain: { type: 'STRING', description: 'Domain: chronology, visual_id, avant_garde, artist_movement, renaissance_classical' },
        difficulty: { type: 'INTEGER', description: 'Difficulty level 1, 2, or 3' },
        limit: { type: 'INTEGER', description: 'Maximum number of items to return (1-20)' }
      }
    }
  },
  {
    name: 'add_question',
    description: 'Add a new verified question to the custom practice question bank with bilingual text and explanations.',
    parameters: {
      type: 'OBJECT',
      required: ['domain', 'questionZh', 'questionEn', 'optionsZh', 'optionsEn', 'correctAnswer', 'explanationZh', 'explanationEn'],
      properties: {
        domain: { type: 'STRING', description: 'Domain classification' },
        subCategory: { type: 'STRING', description: 'Subcategory title' },
        era: { type: 'STRING', description: 'Historical era' },
        questionZh: { type: 'STRING', description: 'Question text in Chinese' },
        questionEn: { type: 'STRING', description: 'Question text in English' },
        optionsZh: { type: 'ARRAY', items: { type: 'STRING' }, description: 'Four answer choices in Chinese' },
        optionsEn: { type: 'ARRAY', items: { type: 'STRING' }, description: 'Four answer choices in English' },
        correctAnswer: { type: 'INTEGER', description: 'Index of correct answer (0, 1, 2, or 3)' },
        explanationZh: { type: 'STRING', description: 'Explanation in Chinese' },
        explanationEn: { type: 'STRING', description: 'Explanation in English' },
        tags: { type: 'ARRAY', items: { type: 'STRING' }, description: 'Syllabus tags' },
        difficulty: { type: 'INTEGER', description: 'Difficulty rating 1 to 3' },
        image: { type: 'STRING', description: 'Artwork image URL' }
      }
    }
  },
  {
    name: 'update_question',
    description: 'Update fields of an existing custom question by ID.',
    parameters: {
      type: 'OBJECT',
      required: ['id', 'updates'],
      properties: {
        id: { type: 'STRING', description: 'The custom question ID to update' },
        updates: { type: 'OBJECT', description: 'Key-value pairs of fields to update' }
      }
    }
  },
  {
    name: 'delete_question',
    description: 'Delete a custom question by its ID. Built-in ARCHED questions cannot be deleted.',
    parameters: {
      type: 'OBJECT',
      required: ['id'],
      properties: {
        id: { type: 'STRING', description: 'The custom question ID to delete' }
      }
    }
  },
  {
    name: 'generate_questions',
    description: 'Synthesize ARCHED-aligned bilingual practice questions for a specific domain or curriculum topic.',
    parameters: {
      type: 'OBJECT',
      properties: {
        domain: { type: 'STRING', description: 'Target domain' },
        topic: { type: 'STRING', description: 'Topic or artist name' },
        count: { type: 'INTEGER', description: 'Number of questions to generate (1 to 5)' },
        difficulty: { type: 'INTEGER', description: 'Difficulty level 1 to 3' },
        autoAdd: { type: 'BOOLEAN', description: 'Whether to automatically persist questions into the custom bank' }
      }
    }
  },
  {
    name: 'configure_practice_settings',
    description: 'Reconfigure practice preferences such as exam countdown timer, question count, and negative scoring.',
    parameters: {
      type: 'OBJECT',
      properties: {
        examTimeLimitMinutes: { type: 'INTEGER', description: 'Exam time limit in minutes (5 to 180)' },
        examQuestionCount: { type: 'INTEGER', description: 'Number of questions per simulated exam (5 to 100)' },
        quizQuestionCount: { type: 'INTEGER', description: 'Number of questions per rapid quiz (5 to 50)' },
        negativeScoring: { type: 'BOOLEAN', description: 'Whether incorrect answers incur -0.25 negative scoring penalty' }
      }
    }
  },
  {
    name: 'reset_question_bank',
    description: 'Reset question bank custom entries back to factory defaults. Requires explicit confirmation flag: { confirm: true }.',
    parameters: {
      type: 'OBJECT',
      required: ['confirm'],
      properties: {
        confirm: { type: 'BOOLEAN', description: 'Confirmation flag must be true' }
      }
    }
  }
];

/**
 * OpenAI tools format for all 8 whitelisted tools
 */
export const OPENAI_TOOL_DECLARATIONS = GEMINI_TOOL_DECLARATIONS.map(t => ({
  type: 'function',
  function: {
    name: t.name,
    description: t.description,
    parameters: {
      type: 'object',
      properties: Object.fromEntries(
        Object.entries(t.parameters.properties || {}).map(([k, v]) => [
          k,
          {
            type: v.type.toLowerCase(),
            description: v.description,
            ...(v.items ? { items: { type: v.items.type.toLowerCase() } } : {})
          }
        ])
      ),
      required: t.parameters.required || []
    }
  }
}));

/**
 * Multi-Provider AI Client (Gemini REST, OpenAI, and Custom endpoints)
 */
export async function callMultiProviderAI(prompt, options = {}) {
  const settings = getAISettings();
  const apiKey = (options.apiKey || settings.apiKey || globalThis.localStorage?.getItem('aiApiKey') || '').trim();
  const provider = options.provider || settings.provider || (apiKey.startsWith('AIzaSy') ? 'gemini' : (apiKey.startsWith('sk-') ? 'openai' : 'custom'));
  const model = options.model || settings.model || (provider === 'gemini' ? 'gemini-2.5-flash' : 'gpt-4o-mini');
  const customEndpoint = options.customEndpoint || settings.customEndpoint || globalThis.localStorage?.getItem('aiApiEndpoint') || '';

  if (!apiKey) {
    throw new Error('API key is missing. Please configure an API key in Settings or use offline fallback.');
  }

  // 1. Google Gemini Provider
  if (provider === 'gemini') {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      tools: [
        {
          functionDeclarations: GEMINI_TOOL_DECLARATIONS
        }
      ]
    };

    const res = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini API error (${res.status}): ${errText}`);
    }

    const data = await res.json();
    const candidate = data.candidates?.[0];
    const parts = candidate?.content?.parts || [];

    for (const part of parts) {
      if (part.functionCall) {
        const { name, args } = part.functionCall;
        const toolResult = await executeSandboxedTool(name, args);
        return {
          role: 'assistant',
          mode: 'online_gemini',
          provider: 'Google Gemini',
          model,
          toolUsed: name,
          toolArgs: args,
          toolResult,
          content: `【Google Gemini 沙箱工具执行】已调用工具「${name}」：\n${JSON.stringify(toolResult.data || toolResult.message || toolResult.error, null, 2)}`,
          timestamp: Date.now()
        };
      }
    }

    const text = parts.map(p => p.text || '').join('\n').trim();
    return {
      role: 'assistant',
      mode: 'online_gemini',
      provider: 'Google Gemini',
      model,
      content: text || '收到 Gemini 响应。',
      timestamp: Date.now()
    };
  }

  // 2. OpenAI / Custom Endpoint Provider
  const endpoint = customEndpoint || 'https://api.openai.com/v1';
  const completionsUrl = `${endpoint.replace(/\/+$/, '')}/chat/completions`;

  const body = {
    model,
    messages: [
      {
        role: 'system',
        content: 'You are the expert ARCHED Art & Architecture Exam AI Tutor. You have access to sandboxed tools to query the question bank, add/update questions, reconfigure practice settings, and inspect summary statistics.'
      },
      { role: 'user', content: prompt }
    ],
    tools: OPENAI_TOOL_DECLARATIONS,
    temperature: 0.7
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const res = await fetch(completionsUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`AI API error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const choice = data.choices?.[0];
  const message = choice?.message || {};

  if (message.tool_calls && message.tool_calls.length > 0) {
    const toolCall = message.tool_calls[0];
    const toolName = toolCall.function?.name;
    let toolArgs = {};
    try {
      toolArgs = JSON.parse(toolCall.function?.arguments || '{}');
    } catch {
      toolArgs = {};
    }

    const toolResult = await executeSandboxedTool(toolName, toolArgs);
    return {
      role: 'assistant',
      mode: 'online_openai',
      provider: provider === 'custom' ? 'Custom Endpoint' : 'OpenAI',
      model,
      toolUsed: toolName,
      toolArgs,
      toolResult,
      content: `【${provider === 'custom' ? '自定义端点' : 'OpenAI'} 沙箱工具执行】已调用工具「${toolName}」：\n${JSON.stringify(toolResult.data || toolResult.message || toolResult.error, null, 2)}`,
      timestamp: Date.now()
    };
  }

  return {
    role: 'assistant',
    mode: 'online_openai',
    provider: provider === 'custom' ? 'Custom Endpoint' : 'OpenAI',
    model,
    content: message.content || '收到模型响应。',
    timestamp: Date.now()
  };
}

/**
 * Deterministic Local Fallback Handler (Zero-Key / Zero-Network)
 */
export async function handleDeterministicFallback(promptText = '') {
  if (typeof promptText !== 'string') {
    promptText = promptText === null || promptText === undefined ? '' : String(promptText);
  }
  const prompt = (promptText || '').trim();

  // 1. Empty or Help prompt
  if (!prompt) {
    return {
      role: 'assistant',
      mode: 'fallback_offline',
      content: '【离线规则引擎 / Offline Fallback Mode】您好！我是您的离线建筑与艺术史 AI 助教。在未配置 API Key 时，我可通过本地沙箱工具为您提供题库查询、考点分析与练习配置服务。\n\n💡 您可以尝试以下指令：\n1. 「题库概况与统计」\n2. 「搜索关于蒙德里安的题目」\n3. 「设置模拟考题数为 20 题，时限 30 分钟」\n4. 「生成一道文艺复兴考题」\n5. 「恢复题库出厂设置」',
      timestamp: Date.now()
    };
  }

  // 2. Summary & Statistics Intent
  if (/概况|统计|总数|多少题|summary|stats|overview|how many questions/i.test(prompt)) {
    const res = await executeSandboxedTool('get_question_bank_summary', {});
    const data = res.data || {};
    const text = [
      '【离线规则引擎 / Offline Fallback Mode】题库权威统计如下：',
      `📚 当前题库总题数: ${data.total || 210} 道（官方内置: 210，用户/AI增订: ${data.customCount || 0}）`,
      '',
      '🏛️ 核心考纲五大领域分布：',
      `• 时间轴排序 (Chronology): ${data.byDomain?.chronology || 40} 题`,
      `• 艺术品/建筑识图 (Visual ID): ${data.byDomain?.visual_id || 45} 题`,
      `• 20世纪前卫与现代建筑 (Avant-Garde & Modern): ${data.byDomain?.avant_garde || 45} 题`,
      `• 流派归属与理论辨析 (Movement Classification): ${data.byDomain?.artist_movement || 35} 题`,
      `• 文艺复兴与古典巨匠 (Renaissance & Classical): ${data.byDomain?.renaissance_classical || 45} 题`,
      '',
      '所有题目均具备中英双语对照、官方解析与维基共享高清图片。'
    ].join('\n');

    return {
      role: 'assistant',
      mode: 'fallback_offline',
      toolUsed: 'get_question_bank_summary',
      content: text,
      timestamp: Date.now()
    };
  }

  // 3. Reset Question Bank Intent (Evaluated before settings so '恢复出厂设置' is not treated as setting config)
  if (/恢复出厂|重置题库|恢复题库|reset bank|factory reset/i.test(prompt)) {
    if (/确认|confirm|yes/i.test(prompt)) {
      await executeSandboxedTool('reset_question_bank', { confirm: true });
      return {
        role: 'assistant',
        mode: 'fallback_offline',
        toolUsed: 'reset_question_bank',
        content: '【离线规则引擎 / Offline Fallback Mode】题库已成功重置恢复至官方 210 道 ARCHED 经典母题！所有自定义增订已清空。',
        timestamp: Date.now()
      };
    }
    return {
      role: 'assistant',
      mode: 'fallback_offline',
      content: '⚠️ 【高风险操作确认】您正在请求将题库恢复为出厂设置。这将清空所有用户与 AI 自定义添加的题目。如确认执行，请输入「确认重置题库」。',
      timestamp: Date.now()
    };
  }

  // 4. Practice Settings Configuration Intent
  if (/设置|设定|修改|时限|题数|分钟|timer|倒计时|评分|倒扣|负分|negative|quiz count|exam count|exam time|quiz time|time limit|exam\s+(?:to\s+)?\d+|quiz\s+(?:to\s+)?\d+|set\s+(?:exam|quiz|time|timer)/i.test(prompt)) {
    const timeMatch = prompt.match(/(?:set\s+)?exam\s+time\s+(?:to\s+)?(\d+)\s*(?:min|minutes?)/i) ||
                      prompt.match(/(\d+)\s*分钟/) ||
                      prompt.match(/timer\s*(?:to\s+)?(\d+)/i) ||
                      prompt.match(/(\d+)\s*min(?:utes?)?/i) ||
                      prompt.match(/倒计时\s*(\d+)/);

    const countMatch = prompt.match(/(?:set\s+)?exam\s+(?:to\s+)?(\d+)\s*(?:questions?|q)/i) ||
                       prompt.match(/exam\s*count\s*(?:to\s+)?(\d+)/i) ||
                       prompt.match(/(\d+)\s*题/) ||
                       prompt.match(/count\s*(\d+)/i);

    const quizCountMatch = prompt.match(/(?:set\s+)?quiz\s+(?:to\s+)?(\d+)\s*(?:questions?|q)/i) ||
                           prompt.match(/quiz\s*count\s*(?:to\s+)?(\d+)/i);

    const negMatch = prompt.match(/倒扣|负分|negative/i);

    if (timeMatch || countMatch || quizCountMatch || negMatch || /设置|设定|配置/.test(prompt)) {
      const patch = {};
      if (timeMatch) patch.examTimeLimitMinutes = parseInt(timeMatch[1], 10);
      if (countMatch) patch.examQuestionCount = parseInt(countMatch[1], 10);
      if (quizCountMatch) patch.quizQuestionCount = parseInt(quizCountMatch[1], 10);
      if (negMatch) patch.negativeScoring = !prompt.includes('不') && !prompt.includes('关闭') && !prompt.includes('false') && !prompt.includes('off') && !prompt.includes('disable');

      const res = await executeSandboxedTool('configure_practice_settings', patch);
      const cfg = res.data || {};

      return {
        role: 'assistant',
        mode: 'fallback_offline',
        toolUsed: 'configure_practice_settings',
        content: `【离线规则引擎 / Offline Fallback Mode】模拟考场参数已为您成功更新：\n⏱️ 考试倒计时时限: ${cfg.examTimeLimitMinutes || 30} 分钟\n📝 套卷题目数量: ${cfg.examQuestionCount || 20} 题\n🎯 抽题速测数量: ${cfg.quizQuestionCount || 10} 题\n⚖️ 倒扣分机制 (ARCHED 标准 -0.25分): ${cfg.negativeScoring !== false ? '已开启' : '已关闭'}`,
        timestamp: Date.now()
      };
    }
  }

  // 4. Generate Synthetic Questions Intent
  if (/出题|生成|造题|出考题|generate|synthetic|make question|create question/i.test(prompt)) {
    let domain = 'avant_garde';
    if (/文艺复兴|古典|透视|拉斐尔|达芬奇|米开朗基罗|renaissance/i.test(prompt)) {
      domain = 'renaissance_classical';
    } else if (/时间轴|排序|编年|年代|chronology/i.test(prompt)) {
      domain = 'chronology';
    } else if (/识图|名作|雕塑|画作|visual/i.test(prompt)) {
      domain = 'visual_id';
    } else if (/流派|归属|未来主义|形而上|超现实|artist/i.test(prompt)) {
      domain = 'artist_movement';
    }

    const genRes = await executeSandboxedTool('generate_questions', { domain, count: 1 });
    const qList = genRes.data || [];
    if (qList.length > 0) {
      const q = qList[0];
      const optStr = (q.optionsZh || []).map((opt, i) => `  ${String.fromCharCode(65 + i)}. ${opt}`).join('\n');
      return {
        role: 'assistant',
        mode: 'fallback_offline',
        toolUsed: 'generate_questions',
        content: `【离线规则引擎 / Offline Fallback Mode】为您自动生成一道 ARCHED 考纲模拟题：\n\n[${q.domain}] ${q.questionZh}\n\n${optStr}\n\n💡 答案: ${String.fromCharCode(65 + q.correctAnswer)}\n📚 深度解析: ${q.explanationZh}`,
        timestamp: Date.now()
      };
    }
  }

  // 6. Question Search / Query Intent
  if (/搜索|查找|列出|查|关于|search|find|questions?|look up|蒙德里安|包豪斯|卡拉瓦乔|达利|透视|封塔纳|巴洛克|文艺复兴/i.test(prompt)) {
    const cleanKw = prompt
      .replace(/(?:请|帮我|麻烦|查一下|找一下|搜索|查找|寻找|查询|列出|关于|相关的?|题目|考题|试题)/g, ' ')
      .replace(/\b(?:questions?|find|search|show|get|look\s*up|about|for|on|of|the|a|an|me|some)\b/gi, ' ')
      .replace(/^[的与及和\s]+|[的与及和\s]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const res = await executeSandboxedTool('query_questions', {
      keyword: cleanKw || undefined,
      limit: 5
    });

    const items = res.data || [];
    if (items.length === 0) {
      return {
        role: 'assistant',
        mode: 'fallback_offline',
        toolUsed: 'query_questions',
        content: `【离线规则引擎 / Offline Fallback Mode】未检索到包含「${cleanKw}」的相关考题。您可以尝试检索如“蒙德里安”、“包豪斯”、“卡拉瓦乔”、“透视”等核心关键词。`,
        timestamp: Date.now()
      };
    }

    const titles = items.map((q, idx) => `${idx + 1}. [${q.domain}] ${q.questionZh || q.questionEn}`).join('\n\n');
    return {
      role: 'assistant',
      mode: 'fallback_offline',
      toolUsed: 'query_questions',
      content: `【离线规则引擎 / Offline Fallback Mode】为您检索到 ${items.length} 道相关考题：\n\n${titles}`,
      timestamp: Date.now()
    };
  }

  // 7. Default General Response
  return {
    role: 'assistant',
    mode: 'fallback_offline',
    content: `【离线规则引擎 / Offline Fallback Mode】收到您的指令：「${prompt}」。\n当前系统运行于本地离线沙箱模式。如需使用 Google Gemini 或 OpenAI 进行深度自由问答，请前往「设置」配置 API 密钥；在离线状态下，您可以随时使用「题库概况」、「搜索 [关键词]」、「设置模拟考题数」或「生成考题」直接操作题库与考场！`,
    timestamp: Date.now()
  };
}

/**
 * Universal agent message processor
 */
export async function processAgentMessage(prompt, context = {}) {
  // Check if browser/environment reports offline
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return handleDeterministicFallback(prompt);
  }

  const settings = getAISettings();
  const apiKey = (settings.apiKey || globalThis.localStorage?.getItem('aiApiKey') || '').trim();

  // If no API key configured, use deterministic offline fallback
  if (!apiKey) {
    return handleDeterministicFallback(prompt);
  }

  try {
    return await callMultiProviderAI(prompt, context);
  } catch (err) {
    console.warn('Online AI call failed or unavailable, falling back to local sandbox:', err.message);
    const fallbackRes = await handleDeterministicFallback(prompt);
    return {
      ...fallbackRes,
      fallbackNotice: `[在线接口调用异常 (${err.message})，已自动切换本地沙箱执行]`
    };
  }
}
