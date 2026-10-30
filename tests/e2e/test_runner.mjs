#!/usr/bin/env node
/**
 * tests/e2e/test_runner.mjs
 * 
 * Unified E2E Test Runner and Assertion Harness for Art Learning Platform Modernization.
 * Supports running individual tiers, filtered tests, verbose diagnostic output,
 * and browser environment mocking (LocalStorage, DOM, Navigator, Fetch).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PROJECT_ROOT = path.resolve(__dirname, '../..');

// ==========================================
// 1. In-Memory LocalStorage & Browser Mock
// ==========================================
class MemoryStorage {
  constructor() {
    this._store = new Map();
  }
  getItem(key) {
    const val = this._store.get(String(key));
    return val !== undefined ? val : null;
  }
  setItem(key, value) {
    this._store.set(String(key), String(value));
  }
  removeItem(key) {
    this._store.delete(String(key));
  }
  clear() {
    this._store.clear();
  }
  get length() {
    return this._store.size;
  }
  key(index) {
    const keys = Array.from(this._store.keys());
    return keys[index] || null;
  }
}

export function setupMockEnvironment() {
  const localStorage = new MemoryStorage();
  const sessionStorage = new MemoryStorage();

  const mockWindow = {
    localStorage,
    sessionStorage,
    navigator: {
      onLine: true,
      userAgent: 'MockBrowser/1.0 (ArtLearningPlatform E2E)',
      maxTouchPoints: 0
    },
    matchMedia: (query) => ({
      matches: query.includes('pointer: coarse') ? false : true,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    }),
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    cancelAnimationFrame: (id) => clearTimeout(id)
  };

  // Provide to global scope if running in Node
  if (!globalThis.window) {
    globalThis.window = mockWindow;
  }
  if (!globalThis.localStorage) {
    globalThis.localStorage = localStorage;
  }
  if (!globalThis.sessionStorage) {
    globalThis.sessionStorage = sessionStorage;
  }
  try {
    Object.defineProperty(globalThis, 'navigator', {
      value: mockWindow.navigator,
      configurable: true,
      writable: true
    });
  } catch {
    // Fallback if redefine fails
  }

  return { localStorage, sessionStorage, window: mockWindow };
}

export function setNavigatorOnLine(onLine) {
  try {
    Object.defineProperty(globalThis, 'navigator', {
      value: { ...(globalThis.navigator || {}), onLine },
      configurable: true,
      writable: true
    });
  } catch {
    // Ignore
  }
}

// ==========================================
// 2. Assertion Utilities
// ==========================================
export class AssertionError extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.name = 'AssertionError';
    this.actual = actual;
    this.expected = expected;
  }
}

export const assert = (condition, message = 'Assertion failed') => {
  if (!condition) {
    throw new AssertionError(message, condition, true);
  }
};

export const assertEqual = (actual, expected, message) => {
  if (actual !== expected) {
    const msg = message || `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`;
    throw new AssertionError(msg, actual, expected);
  }
};

export const assertNotEqual = (actual, expected, message) => {
  if (actual === expected) {
    const msg = message || `Expected value not to equal ${JSON.stringify(expected)}`;
    throw new AssertionError(msg, actual, expected);
  }
};

export const assertDeepEqual = (actual, expected, message) => {
  const aStr = JSON.stringify(actual);
  const eStr = JSON.stringify(expected);
  if (aStr !== eStr) {
    const msg = message || `Deep equality mismatch:\nExpected: ${eStr}\nActual:   ${aStr}`;
    throw new AssertionError(msg, actual, expected);
  }
};

export const assertIncludes = (haystack, needle, message) => {
  if (typeof haystack === 'string' || Array.isArray(haystack)) {
    if (!haystack.includes(needle)) {
      const msg = message || `Expected ${JSON.stringify(haystack)} to include ${JSON.stringify(needle)}`;
      throw new AssertionError(msg, haystack, needle);
    }
  } else {
    throw new AssertionError(`Haystack is neither string nor array: ${typeof haystack}`);
  }
};

export const assertMatch = (str, regex, message) => {
  if (!regex.test(str)) {
    const msg = message || `String "${str}" does not match pattern ${regex}`;
    throw new AssertionError(msg, str, regex);
  }
};

export const assertThrows = (fn, message) => {
  let threw = false;
  let thrownError = null;
  try {
    fn();
  } catch (err) {
    threw = true;
    thrownError = err;
  }
  if (!threw) {
    throw new AssertionError(message || 'Expected function to throw, but it succeeded.');
  }
  return thrownError;
};

export const assertRejects = async (asyncFn, message) => {
  let threw = false;
  let thrownError = null;
  try {
    await asyncFn();
  } catch (err) {
    threw = true;
    thrownError = err;
  }
  if (!threw) {
    throw new AssertionError(message || 'Expected async function to reject, but it resolved.');
  }
  return thrownError;
};

export const assertGreaterThanOrEqual = (actual, expected, message) => {
  if (!(actual >= expected)) {
    const msg = message || `Expected ${actual} >= ${expected}`;
    throw new AssertionError(msg, actual, expected);
  }
};

export const assertLessThanOrEqual = (actual, expected, message) => {
  if (!(actual <= expected)) {
    const msg = message || `Expected ${actual} <= ${expected}`;
    throw new AssertionError(msg, actual, expected);
  }
};

// ==========================================
// 3. Test Registry & Runner Engine
// ==========================================
export class TestRunner {
  constructor(options = {}) {
    this.options = {
      verbose: false,
      grep: null,
      ...options
    };
    this.suites = [];
    this.currentSuite = null;
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      suiteResults: []
    };
  }

  describe(name, fn) {
    const suite = {
      name,
      tests: [],
      beforeEachFns: [],
      afterEachFns: [],
      beforeAllFns: [],
      afterAllFns: []
    };
    const prevSuite = this.currentSuite;
    this.currentSuite = suite;
    this.suites.push(suite);

    try {
      fn();
    } finally {
      this.currentSuite = prevSuite;
    }
  }

  test(name, fn) {
    if (!this.currentSuite) {
      this.describe('Default Suite', () => {
        this.currentSuite.tests.push({ name, fn });
      });
    } else {
      this.currentSuite.tests.push({ name, fn });
    }
  }

  beforeEach(fn) {
    if (this.currentSuite) this.currentSuite.beforeEachFns.push(fn);
  }

  afterEach(fn) {
    if (this.currentSuite) this.currentSuite.afterEachFns.push(fn);
  }

  beforeAll(fn) {
    if (this.currentSuite) this.currentSuite.beforeAllFns.push(fn);
  }

  afterAll(fn) {
    if (this.currentSuite) this.currentSuite.afterAllFns.push(fn);
  }

  async run() {
    setupMockEnvironment();
    const startTime = Date.now();

    for (const suite of this.suites) {
      const suiteResult = {
        name: suite.name,
        passed: 0,
        failed: 0,
        skipped: 0,
        tests: []
      };

      if (this.options.verbose) {
        console.log(`\n\x1b[1m\x1b[36m▶ Suite: ${suite.name}\x1b[0m`);
      }

      for (const beforeAllFn of suite.beforeAllFns) {
        try {
          await beforeAllFn();
        } catch (err) {
          console.error(`Error in beforeAll of ${suite.name}:`, err);
        }
      }

      for (const t of suite.tests) {
        if (this.options.grep && !t.name.toLowerCase().includes(this.options.grep.toLowerCase()) && !suite.name.toLowerCase().includes(this.options.grep.toLowerCase())) {
          suiteResult.skipped++;
          this.results.skipped++;
          continue;
        }

        this.results.total++;
        let passed = false;
        let error = null;

        for (const beforeEachFn of suite.beforeEachFns) {
          try {
            await beforeEachFn();
          } catch (err) {
            error = err;
          }
        }

        if (!error) {
          const testStart = Date.now();
          try {
            await t.fn();
            passed = true;
          } catch (err) {
            passed = false;
            error = err;
          }
          const duration = Date.now() - testStart;
          t.duration = duration;
        }

        for (const afterEachFn of suite.afterEachFns) {
          try {
            await afterEachFn();
          } catch (err) {
            console.error(`Error in afterEach of ${suite.name}:`, err);
          }
        }

        if (passed) {
          suiteResult.passed++;
          this.results.passed++;
          if (this.options.verbose) {
            console.log(`  \x1b[32m✓\x1b[0m ${t.name} (${t.duration}ms)`);
          }
        } else {
          suiteResult.failed++;
          this.results.failed++;
          console.log(`  \x1b[31m✗\x1b[0m ${suite.name} > \x1b[1m${t.name}\x1b[0m`);
          console.log(`    \x1b[31m${error?.name || 'Error'}: ${error?.message || error}\x1b[0m`);
          if (this.options.verbose && error?.stack) {
            console.log(`    \x1b[90m${error.stack.split('\n').slice(1, 4).join('\n    ')}\x1b[0m`);
          }
        }

        suiteResult.tests.push({ name: t.name, passed, error: error?.message });
      }

      for (const afterAllFn of suite.afterAllFns) {
        try {
          await afterAllFn();
        } catch (err) {
          console.error(`Error in afterAll of ${suite.name}:`, err);
        }
      }

      this.results.suiteResults.push(suiteResult);
    }

    const duration = Date.now() - startTime;
    this.results.duration = duration;

    this.printSummary();
    return this.results;
  }

  printSummary() {
    console.log(`\n======================================================`);
    console.log(`                 E2E Test Execution Summary           `);
    console.log(`======================================================`);
    console.log(` Total Suites : ${this.suites.length}`);
    console.log(` Total Tests  : ${this.results.total}`);
    console.log(` \x1b[32mPassed       : ${this.results.passed}\x1b[0m`);
    console.log(` \x1b[31mFailed       : ${this.results.failed}\x1b[0m`);
    console.log(` \x1b[33mSkipped      : ${this.results.skipped}\x1b[0m`);
    console.log(` Duration     : ${this.results.duration}ms`);
    console.log(`======================================================\n`);
  }
}

// Global runner singleton for simplified import
export const runner = new TestRunner();
export const describe = (name, fn) => runner.describe(name, fn);
export const test = (name, fn) => runner.test(name, fn);
export const it = test;
export const beforeEach = (fn) => runner.beforeEach(fn);
export const afterEach = (fn) => runner.afterEach(fn);
export const beforeAll = (fn) => runner.beforeAll(fn);
export const afterAll = (fn) => runner.afterAll(fn);

// CLI Entrypoint
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose') || args.includes('-v');

  const grepIndex = args.findIndex(a => a === '--grep' || a === '-g');
  const grepArg = args.find(a => a.startsWith('--grep='));
  let grep = grepArg ? grepArg.split('=')[1] : null;
  if (!grep && grepIndex !== -1 && args[grepIndex + 1]) {
    grep = args[grepIndex + 1];
  }

  const tierIndex = args.findIndex(a => a === '--tier' || a === '-t');
  let tierArg = args.find(a => a.startsWith('tier') || a.startsWith('--tier='));
  if (!tierArg && tierIndex !== -1 && args[tierIndex + 1]) {
    tierArg = args[tierIndex + 1];
  }
  if (!tierArg) {
    const bareNum = args.find(a => /^[1-5]$/.test(a));
    if (bareNum) tierArg = bareNum;
  }

  let targetTiers = [1, 2, 3, 4];
  if (tierArg) {
    const num = tierArg.replace(/[^0-9]/g, '');
    if (num) targetTiers = [parseInt(num, 10)];
  }

  runner.options.verbose = verbose;
  runner.options.grep = grep;

  console.log(`\nStarting E2E Test Runner for Tiers: [${targetTiers.join(', ')}]`);

  (async () => {
    for (const t of targetTiers) {
      let testFile = null;
      if (t === 1) testFile = './tier1_feature_coverage.test.mjs';
      else if (t === 2) testFile = './tier2_boundary_corner.test.mjs';
      else if (t === 3) testFile = './tier3_pairwise_cross.test.mjs';
      else if (t === 4) testFile = './tier4_application_flows.test.mjs';
      else if (t === 5) testFile = './tier5_adversarial_m1_image_transitions.test.mjs';

      if (testFile) {
        const fullPath = path.resolve(__dirname, testFile);
        if (fs.existsSync(fullPath)) {
          const fileUrl = 'file:///' + fullPath.replace(/\\/g, '/');
          await import(fileUrl);
        } else {
          console.warn(`[WARN] Tier file not yet created: ${testFile}`);
        }
      }
    }

    const res = await runner.run();
    process.exit(res.failed > 0 ? 1 : 0);
  })().catch(err => {
    console.error('Fatal Test Runner Error:', err);
    process.exit(1);
  });
}
