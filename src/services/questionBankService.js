/**
 * src/services/questionBankService.js
 * 
 * Central question repository service for the Art & Architecture Learning Platform.
 * Manages the built-in 320 ARCHED questions, custom LocalStorage overrides/additions,
 * compound queries, domain balancing, exam set generation, and factory resets.
 */

import { ARCHED_QUESTION_BANK } from '../data/archedQuestionBank.js';

const STORAGE_KEY = 'arched_custom_questions';

// Safe LocalStorage accessor for both Browser and Node (test runner) environments
function getLocalStorage() {
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    return globalThis.localStorage;
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  return null;
}

// Sanitize HTML tags to prevent XSS in custom questions
function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim();
}

// Sanitize image URLs
function sanitizeImageUrl(url) {
  if (typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (trimmed.toLowerCase().startsWith('javascript:')) return '';
  return trimmed;
}

/**
 * Retrieve all custom questions stored in LocalStorage.
 * Handles corrupt data gracefully without throwing.
 */
export function getCustomQuestions() {
  const storage = getLocalStorage();
  if (!storage) return [];
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Strict schema check on custom entries
    return parsed.filter(item => 
      item && 
      typeof item === 'object' && 
      typeof item.id === 'string' && 
      typeof item.domain === 'string'
    );
  } catch (err) {
    console.warn('[QuestionBankService] Failed to parse custom questions from LocalStorage:', err.message);
    return [];
  }
}

/**
 * Save custom questions array to LocalStorage.
 */
function saveCustomQuestions(questions) {
  const storage = getLocalStorage();
  if (!storage) return false;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(questions));
    return true;
  } catch (err) {
    console.error('[QuestionBankService] Failed to save custom questions:', err.message);
    return false;
  }
}

/**
 * Get all questions (built-in 320 questions + custom LocalStorage questions).
 * Custom questions with matching IDs override built-in ones; new IDs are appended.
 */
export function getAllQuestions() {
  const custom = getCustomQuestions();
  if (custom.length === 0) {
    return [...ARCHED_QUESTION_BANK];
  }

  const customMap = new Map();
  custom.forEach(q => customMap.set(q.id, q));

  // Merge: replace matching built-in, keep untouched built-in
  const merged = ARCHED_QUESTION_BANK.map(q => customMap.has(q.id) ? customMap.get(q.id) : q);

  // Append new custom questions whose IDs are not in built-in
  const builtInIds = new Set(ARCHED_QUESTION_BANK.map(q => q.id));
  custom.forEach(q => {
    if (!builtInIds.has(q.id)) {
      merged.push(q);
    }
  });

  return merged;
}

/**
 * Filter questions by domain (case-insensitive).
 */
export function getQuestionsByDomain(domain) {
  if (!domain || typeof domain !== 'string') return [];
  const normalized = domain.trim().toLowerCase();
  return getAllQuestions().filter(q => q.domain && q.domain.toLowerCase() === normalized);
}

/**
 * Filter questions by difficulty (1, 2, or 3).
 */
export function getQuestionsByDifficulty(diff) {
  const diffNum = Number(diff);
  if (![1, 2, 3].includes(diffNum)) return [];
  return getAllQuestions().filter(q => q.difficulty === diffNum);
}

/**
 * Get single question by ID.
 */
export function getQuestionById(id) {
  if (!id || typeof id !== 'string') return null;
  return getAllQuestions().find(q => q.id === id) || null;
}

/**
 * Compound query with multiple optional filters:
 * - domain: string
 * - era: string
 * - keyword: string
 * - difficulty: number
 * - tag: string
 * - limit: number (positive integer)
 */
export function queryQuestions(filter = {}) {
  const { domain, era, keyword, difficulty, tag, limit } = filter || {};
  let results = getAllQuestions();

  // 1. Domain filter (case-insensitive)
  if (domain && typeof domain === 'string' && domain.trim().length > 0) {
    const normDomain = domain.trim().toLowerCase();
    results = results.filter(q => q.domain && q.domain.toLowerCase() === normDomain);
  }

  // 2. Era filter
  if (era && typeof era === 'string' && era.trim().length > 0) {
    const normEra = era.trim().toLowerCase();
    results = results.filter(q => q.era && q.era.toLowerCase() === normEra);
  }

  // 3. Difficulty filter
  if (difficulty !== undefined && difficulty !== null && difficulty !== '') {
    const diffNum = Number(difficulty);
    results = results.filter(q => q.difficulty === diffNum);
  }

  // 4. Tag filter
  if (tag && typeof tag === 'string' && tag.trim().length > 0) {
    const normTag = tag.trim().toLowerCase();
    results = results.filter(q => 
      Array.isArray(q.tags) && q.tags.some(t => t.toLowerCase() === normTag)
    );
  }

  // 5. Keyword search (in question, explanation, subCategory, or tags)
  if (keyword && typeof keyword === 'string' && keyword.trim().length > 0) {
    const kw = keyword.trim().toLowerCase();
    results = results.filter(q => {
      const qZh = (q.questionZh || '').toLowerCase();
      const qEn = (q.questionEn || '').toLowerCase();
      const expZh = (q.explanationZh || '').toLowerCase();
      const expEn = (q.explanationEn || '').toLowerCase();
      const subCat = (q.subCategory || '').toLowerCase();
      const tagsStr = Array.isArray(q.tags) ? q.tags.join(' ').toLowerCase() : '';
      return qZh.includes(kw) || qEn.includes(kw) || expZh.includes(kw) || expEn.includes(kw) || subCat.includes(kw) || tagsStr.includes(kw);
    });
  }

  // 6. Limit clamping
  if (limit !== undefined && limit !== null) {
    const clamped = Math.max(1, Math.min(2000, Number(limit) || 10));
    results = results.slice(0, clamped);
  }

  return results;
}

/**
 * Fisher-Yates array shuffle.
 */
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Generate a randomized exam set balanced evenly across the 5 domains.
 * Idempotent in size: always returns an array of exactly `count` questions.
 */
export function getRandomExamSet(count = 20, _options = {}) {
  const totalWanted = Math.max(1, Number(count) || 20);
  const DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  
  const allByDomain = {};
  DOMAINS.forEach(dom => {
    allByDomain[dom] = shuffleArray(getQuestionsByDomain(dom));
  });

  const basePerDomain = Math.floor(totalWanted / DOMAINS.length);
  let remainder = totalWanted % DOMAINS.length;

  const selected = [];
  const domainPointers = {};
  DOMAINS.forEach(dom => domainPointers[dom] = 0);

  // Round 1: Draw base quota per domain
  DOMAINS.forEach(dom => {
    const quota = basePerDomain + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder--;

    const pool = allByDomain[dom];
    const take = Math.min(quota, pool.length);
    for (let i = 0; i < take; i++) {
      selected.push(pool[i]);
      domainPointers[dom]++;
    }
  });

  // Round 2: If we still need more questions (due to small domain size or large count), fill from leftovers
  if (selected.length < totalWanted) {
    const leftovers = [];
    DOMAINS.forEach(dom => {
      const pool = allByDomain[dom];
      const start = domainPointers[dom];
      for (let i = start; i < pool.length; i++) {
        leftovers.push(pool[i]);
      }
    });

    const shuffledLeftovers = shuffleArray(leftovers);
    const deficit = totalWanted - selected.length;
    for (let i = 0; i < Math.min(deficit, shuffledLeftovers.length); i++) {
      selected.push(shuffledLeftovers[i]);
    }
  }

  // Shuffle final set so questions from same domain aren't grouped together
  return shuffleArray(selected).slice(0, totalWanted);
}

/**
 * Get comprehensive summary statistics of the question bank.
 */
export function getSummary() {
  const all = getAllQuestions();
  const custom = getCustomQuestions();
  const byDomain = {
    chronology: 0,
    visual_id: 0,
    avant_garde: 0,
    artist_movement: 0,
    renaissance_classical: 0
  };
  const tagsSet = new Set();

  all.forEach(q => {
    if (q.domain && byDomain[q.domain] !== undefined) {
      byDomain[q.domain]++;
    }
    if (Array.isArray(q.tags)) {
      q.tags.forEach(t => {
        if (typeof t === 'string' && t.trim()) tagsSet.add(t.trim());
      });
    }
  });

  return {
    total: all.length,
    byDomain,
    customCount: custom.length,
    tags: Array.from(tagsSet)
  };
}

/**
 * Add a new custom question to LocalStorage.
 * Performs rigorous sanitization against XSS and invalid URLs.
 */
export function addCustomQuestion(rawQuestion) {
  if (!rawQuestion || typeof rawQuestion !== 'object') {
    return { success: false, error: 'Question data must be a valid object' };
  }

  const VALID_DOMAINS = ['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'];
  const domain = (rawQuestion.domain || 'chronology').toLowerCase();
  if (!VALID_DOMAINS.includes(domain)) {
    return { success: false, error: `Invalid domain: ${rawQuestion.domain}` };
  }

  const id = (rawQuestion.id && typeof rawQuestion.id === 'string' && rawQuestion.id.trim())
    ? rawQuestion.id.trim()
    : `custom_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  // Sanitize strings
  const questionZh = sanitizeString(rawQuestion.questionZh || rawQuestion.textZh || rawQuestion.question || '自定义题目');
  const questionEn = sanitizeString(rawQuestion.questionEn || rawQuestion.textEn || rawQuestion.prompt || 'Custom question');

  const rawOptsZh = Array.isArray(rawQuestion.optionsZh) ? rawQuestion.optionsZh : (Array.isArray(rawQuestion.options) ? rawQuestion.options : ['A', 'B', 'C', 'D']);
  const rawOptsEn = Array.isArray(rawQuestion.optionsEn) ? rawQuestion.optionsEn : (Array.isArray(rawQuestion.options) ? rawQuestion.options : ['A', 'B', 'C', 'D']);

  const optionsZh = [
    sanitizeString(rawOptsZh[0] || '选项 A'),
    sanitizeString(rawOptsZh[1] || '选项 B'),
    sanitizeString(rawOptsZh[2] || '选项 C'),
    sanitizeString(rawOptsZh[3] || '选项 D')
  ];

  const optionsEn = [
    sanitizeString(rawOptsEn[0] || 'Option A'),
    sanitizeString(rawOptsEn[1] || 'Option B'),
    sanitizeString(rawOptsEn[2] || 'Option C'),
    sanitizeString(rawOptsEn[3] || 'Option D')
  ];

  let correctAnswer = Number(rawQuestion.correctAnswer);
  if (!Number.isInteger(correctAnswer) || correctAnswer < 0 || correctAnswer > 3) {
    correctAnswer = 0;
  }

  const explanationZh = sanitizeString(rawQuestion.explanationZh || rawQuestion.explanation || '暂无解析说明');
  const explanationEn = sanitizeString(rawQuestion.explanationEn || rawQuestion.explanation || 'No explanation provided');

  const rawTagList = Array.isArray(rawQuestion.tags) ? rawQuestion.tags : [];
  const sanitizedTagList = rawTagList.map(t => sanitizeString(String(t))).filter(Boolean);
  const tags = sanitizedTagList.length > 0 ? sanitizedTagList : ['Custom'];

  const diffNum = Number(rawQuestion.difficulty);
  const difficulty = [1, 2, 3].includes(diffNum) ? diffNum : 2;

  const sanitizedQuestion = {
    id,
    domain,
    subCategory: sanitizeString(rawQuestion.subCategory || 'Custom Category'),
    era: sanitizeString(rawQuestion.era || 'contemporary'),
    questionZh,
    questionEn,
    optionsZh,
    optionsEn,
    correctAnswer,
    explanationZh,
    explanationEn,
    tags,
    difficulty,
    isCustom: true
  };

  if (rawQuestion.image) {
    const cleanImg = sanitizeImageUrl(rawQuestion.image);
    if (cleanImg) sanitizedQuestion.image = cleanImg;
  }
  if (rawQuestion.fallbackImage) {
    const cleanFallback = sanitizeImageUrl(rawQuestion.fallbackImage);
    if (cleanFallback) sanitizedQuestion.fallbackImage = cleanFallback;
  }

  const customQuestions = getCustomQuestions();
  // If duplicate id, replace it; otherwise append
  const existingIdx = customQuestions.findIndex(q => q.id === id);
  if (existingIdx !== -1) {
    customQuestions[existingIdx] = sanitizedQuestion;
  } else {
    customQuestions.push(sanitizedQuestion);
  }

  const ok = saveCustomQuestions(customQuestions);
  if (!ok) {
    return { success: false, error: 'Failed to write to LocalStorage' };
  }

  return { success: true, question: sanitizedQuestion };
}

/**
 * Update an existing question (persisted to LocalStorage).
 */
export function updateQuestion(id, updates = {}) {
  if (!id || typeof id !== 'string') {
    return { success: false, error: 'Invalid question ID' };
  }

  const customQuestions = getCustomQuestions();
  const existingIdx = customQuestions.findIndex(q => q.id === id);

  if (existingIdx !== -1) {
    const updated = {
      ...customQuestions[existingIdx],
      ...updates,
      id // preserve ID
    };
    customQuestions[existingIdx] = updated;
    saveCustomQuestions(customQuestions);
    return { success: true, question: updated };
  }

  // If modifying a built-in question, clone it into custom overrides
  const builtIn = ARCHED_QUESTION_BANK.find(q => q.id === id);
  if (builtIn) {
    const updated = {
      ...builtIn,
      ...updates,
      id,
      isCustomOverride: true
    };
    customQuestions.push(updated);
    saveCustomQuestions(customQuestions);
    return { success: true, question: updated };
  }

  return { success: false, error: `Question with id '${id}' not found` };
}

/**
 * Delete a custom question from LocalStorage.
 */
export function deleteQuestion(id) {
  if (!id || typeof id !== 'string') {
    return { success: false, error: 'Invalid question ID' };
  }

  const customQuestions = getCustomQuestions();
  const filtered = customQuestions.filter(q => q.id !== id);
  saveCustomQuestions(filtered);
  return { success: true, deletedId: id };
}

/**
 * Reset all custom questions and restore factory defaults.
 */
export function resetToFactoryDefaults() {
  const storage = getLocalStorage();
  if (storage) {
    try {
      storage.setItem(STORAGE_KEY, '[]');
    } catch (err) {
      console.warn('Failed to clear arched_custom_questions in LocalStorage:', err);
    }
  }
  return { success: true, message: 'Question bank reset to factory defaults' };
}

// Unified singleton object
export const questionBankService = {
  getAllQuestions,
  getQuestionsByDomain,
  getQuestionsByDifficulty,
  getQuestionById,
  getCustomQuestions,
  queryQuestions,
  getRandomExamSet,
  getSummary,
  addCustomQuestion,
  updateQuestion,
  deleteQuestion,
  resetToFactoryDefaults
};

export default questionBankService;
