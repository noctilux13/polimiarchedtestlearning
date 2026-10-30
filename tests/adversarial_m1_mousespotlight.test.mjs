/**
 * tests/adversarial_m1_mousespotlight.test.mjs
 * 
 * Empirical & Adversarial Stress Harness for Milestone M1 (MouseSpotlight).
 * Developed by Teamwork Empirical Challenger (critic / specialist).
 * 
 * Tests:
 * 1. Card Origin Caching under 500+ simulated mouse moves (layout thrashing verification)
 * 2. rAF Idle Convergence & Sleep under various displacement deltas (<0.25px threshold)
 * 3. Touch device bypass under (pointer: coarse) matching and dynamic transitions
 * 4. Boundary and adversarial edge cases (null targets, detached elements, rapid cycles)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// =========================================================================
// 1. Compile MouseSpotlight.jsx to pure ESM JS via Vite
// =========================================================================
async function getCompiledMouseSpotlight() {
  const componentPath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
  if (!fs.existsSync(componentPath)) {
    throw new Error(`MouseSpotlight.jsx not found at ${componentPath}`);
  }

  const outDir = path.resolve(__dirname, '.temp_build');
  const result = await build({
    root: PROJECT_ROOT,
    build: {
      outDir,
      lib: {
        entry: componentPath,
        formats: ['es'],
        fileName: 'compiled_spotlight'
      },
      write: false,
      rollupOptions: {
        external: ['react']
      }
    },
    logLevel: 'silent'
  });

  const code = (result.output ? result.output[0].code : result[0].output[0].code);
  return code;
}

// =========================================================================
// 2. Mock DOM & React Environment Engine
// =========================================================================
class MockCSSStyleDeclaration {
  constructor() {
    this._properties = new Map();
  }
  setProperty(prop, value) {
    this._properties.set(prop, String(value));
  }
  getPropertyValue(prop) {
    return this._properties.get(prop) || '';
  }
  removeProperty(prop) {
    this._properties.delete(prop);
  }
  get transform() {
    return this.getPropertyValue('transform');
  }
  set transform(val) {
    this.setProperty('transform', val);
  }
  get opacity() {
    return this.getPropertyValue('opacity');
  }
  set opacity(val) {
    this.setProperty('opacity', val);
  }
}

class MockElement {
  constructor(tagName = 'div', className = '', parent = null) {
    this.tagName = tagName.toUpperCase();
    this.className = className;
    this.style = new MockCSSStyleDeclaration();
    this.parentNode = parent;
    this.children = [];
    this.boundingRect = { left: 0, top: 0, right: 100, bottom: 100, width: 100, height: 100 };
    this.getRectCalls = 0;
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  setBoundingRect(rect) {
    this.boundingRect = { ...this.boundingRect, ...rect };
  }

  getBoundingClientRect() {
    this.getRectCalls++;
    return { ...this.boundingRect };
  }

  closest(selector) {
    const selectors = selector.split(',').map(s => s.trim().replace(/^\./, ''));
    let curr = this;
    while (curr) {
      if (curr.className) {
        const classes = curr.className.split(/\s+/);
        if (selectors.some(sel => classes.includes(sel))) {
          return curr;
        }
      }
      curr = curr.parentNode;
    }
    return null;
  }
}

class MockMediaQueryList {
  constructor(query, matches = false) {
    this.media = query;
    this.matches = matches;
    this._listeners = new Set();
  }
  addEventListener(event, fn) {
    if (event === 'change') this._listeners.add(fn);
  }
  removeEventListener(event, fn) {
    if (event === 'change') this._listeners.delete(fn);
  }
  setMatches(newMatches) {
    if (this.matches !== newMatches) {
      this.matches = newMatches;
      const event = { matches: newMatches, media: this.media };
      for (const listener of this._listeners) {
        listener(event);
      }
    }
  }
}

class MockBrowser {
  constructor(options = {}) {
    this.isCoarse = options.isCoarse ?? false;
    this.scrollX = 0;
    this.scrollY = 0;
    this.windowListeners = new Map();
    this.documentListeners = new Map();
    this.rafCallbacks = new Map();
    this.nextRafId = 1;
    this.totalRafScheduled = 0;
    this.totalRafCancelled = 0;
    this.currentFrame = 0;

    this.mql = new MockMediaQueryList('(pointer: coarse)', this.isCoarse);

    this.window = {
      scrollX: this.scrollX,
      scrollY: this.scrollY,
      matchMedia: (query) => {
        if (query.includes('pointer: coarse')) return this.mql;
        return new MockMediaQueryList(query, false);
      },
      addEventListener: (evt, fn, opts) => {
        if (!this.windowListeners.has(evt)) this.windowListeners.set(evt, new Set());
        this.windowListeners.get(evt).add(fn);
      },
      removeEventListener: (evt, fn) => {
        if (this.windowListeners.has(evt)) {
          this.windowListeners.get(evt).delete(fn);
        }
      },
      requestAnimationFrame: (cb) => {
        const id = this.nextRafId++;
        this.totalRafScheduled++;
        this.rafCallbacks.set(id, cb);
        return id;
      },
      cancelAnimationFrame: (id) => {
        if (this.rafCallbacks.has(id)) {
          this.totalRafCancelled++;
          this.rafCallbacks.delete(id);
        }
      }
    };

    this.document = {
      body: new MockElement('body'),
      addEventListener: (evt, fn, opts) => {
        if (!this.documentListeners.has(evt)) this.documentListeners.set(evt, new Set());
        this.documentListeners.get(evt).add(fn);
      },
      removeEventListener: (evt, fn) => {
        if (this.documentListeners.has(evt)) {
          this.documentListeners.get(evt).delete(fn);
        }
      }
    };
  }

  // Advance 1 rAF frame
  stepFrame() {
    this.currentFrame++;
    const pending = Array.from(this.rafCallbacks.entries());
    this.rafCallbacks.clear();
    for (const [id, cb] of pending) {
      cb();
    }
    return pending.length > 0;
  }

  // Advance frames until no more rAFs are scheduled or maxFrames reached
  stepUntilIdle(maxFrames = 120) {
    let framesRun = 0;
    while (this.rafCallbacks.size > 0 && framesRun < maxFrames) {
      this.stepFrame();
      framesRun++;
    }
    return framesRun;
  }

  dispatchWindow(event, payload) {
    if (this.windowListeners.has(event)) {
      for (const fn of this.windowListeners.get(event)) {
        fn({ ...payload, target: payload.target || this.window });
      }
    }
  }

  dispatchDocument(event, payload) {
    if (this.documentListeners.has(event)) {
      for (const fn of this.documentListeners.get(event)) {
        fn({ ...payload, target: payload.target || this.document });
      }
    }
  }
}

// =========================================================================
// 3. Lightweight React Hook Harness for Functional Components
// =========================================================================
class HookTestContainer {
  constructor(componentFn, browser) {
    this.componentFn = componentFn;
    this.browser = browser;
    this.hooks = [];
    this.hookIndex = 0;
    this.effects = [];
    this.cleanups = [];
    this.mounted = false;
    this.vdom = null;

    // Direct DOM ref elements that MouseSpotlight attaches to
    this.refs = {
      containerRef: new MockElement('div', 'mouse-spotlight-wrapper'),
      coreRef: new MockElement('div', 'spotlight-core'),
      orbRef: new MockElement('div', 'spotlight-orb'),
      ambientRef: new MockElement('div', 'spotlight-ambient')
    };
  }

  // Hook implementations
  useRef(initialValue) {
    const idx = this.hookIndex++;
    if (!this.hooks[idx]) {
      this.hooks[idx] = { current: initialValue };
    }
    return this.hooks[idx];
  }

  useState(initialValue) {
    const idx = this.hookIndex++;
    if (!this.hooks[idx]) {
      const val = typeof initialValue === 'function' ? initialValue() : initialValue;
      const setter = (newVal) => {
        this.hooks[idx].value = typeof newVal === 'function' ? newVal(this.hooks[idx].value) : newVal;
        if (this.mounted) this.rerender();
      };
      this.hooks[idx] = { value: val, setter };
    }
    return [this.hooks[idx].value, this.hooks[idx].setter];
  }

  useEffect(effectFn, deps) {
    const idx = this.hookIndex++;
    const prev = this.hooks[idx];
    let shouldRun = false;
    if (!prev) {
      shouldRun = true;
    } else if (!deps) {
      shouldRun = true;
    } else {
      shouldRun = deps.some((dep, i) => !Object.is(dep, prev.deps[i]));
    }
    this.hooks[idx] = { deps };
    if (shouldRun) {
      this.effects.push({ idx, effectFn });
    }
  }

  mount(props = {}) {
    globalThis.window = this.browser.window;
    globalThis.document = this.browser.document;
    globalThis.requestAnimationFrame = (cb) => this.browser.window.requestAnimationFrame(cb);
    globalThis.cancelAnimationFrame = (id) => this.browser.window.cancelAnimationFrame(id);

    this.runRender(props);
    this.mounted = true;
    this.runEffects();
    return this.vdom;
  }

  rerender(props = {}) {
    this.runRender(props);
    this.runEffects();
  }

  unmount() {
    for (const cleanup of this.cleanups) {
      if (typeof cleanup === 'function') cleanup();
    }
    this.cleanups = [];
    this.mounted = false;
  }

  runRender(props) {
    this.hookIndex = 0;
    this.effects = [];

    // Save and stub React dispatcher
    const mockReact = {
      useRef: (init) => this.useRef(init),
      useState: (init) => this.useState(init),
      useEffect: (fn, deps) => this.useEffect(fn, deps)
    };

    // Attach refs: containerRef (0), coreRef (1), orbRef (2), ambientRef (3)
    this.vdom = this.componentFn(props, mockReact);

    // Bind known DOM refs to our mock elements
    if (this.hooks[0]) this.hooks[0].current = this.refs.containerRef;
    if (this.hooks[1]) this.hooks[1].current = this.refs.coreRef;
    if (this.hooks[2]) this.hooks[2].current = this.refs.orbRef;
    if (this.hooks[3]) this.hooks[3].current = this.refs.ambientRef;
  }

  runEffects() {
    for (const { idx, effectFn } of this.effects) {
      if (typeof this.cleanups[idx] === 'function') {
        this.cleanups[idx]();
      }
      const cleanup = effectFn();
      this.cleanups[idx] = cleanup;
    }
    this.effects = [];
  }
}

// =========================================================================
// 4. Test Suite Execution & Assertions
// =========================================================================
let passedTests = 0;
let failedTests = 0;
const testResults = [];

function testCase(name, fn) {
  try {
    fn();
    passedTests++;
    testResults.push({ name, pass: true });
    console.log(`  \x1b[32m✓\x1b[0m ${name}`);
  } catch (err) {
    failedTests++;
    testResults.push({ name, pass: false, error: err.message });
    console.log(`  \x1b[31m✗\x1b[0m ${name}`);
    console.log(`    \x1b[31m${err.message}\x1b[0m`);
    if (err.stack) {
      console.log(`    \x1b[90m${err.stack.split('\n').slice(1, 4).join('\n    ')}\x1b[0m`);
    }
  }
}

function assert(cond, msg = 'Assertion failed') {
  if (!cond) throw new Error(msg);
}

function assertEqual(actual, expected, msg = '') {
  if (actual !== expected) {
    throw new Error(`${msg ? msg + ': ' : ''}Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  }
}

// =========================================================================
// 5. Main Empirical Verification Run
// =========================================================================
export async function runEmpiricalStressSuite() {
  console.log('\n======================================================');
  console.log('   EMPIRICAL ADVERSARIAL STRESS SUITE: MouseSpotlight  ');
  console.log('======================================================\n');

  console.log('📦 Step 1: Compiling MouseSpotlight.jsx with Vite...');
  const compiledCode = await getCompiledMouseSpotlight();
  assert(compiledCode.length > 500, 'Compiled code must be non-empty');
  console.log(`✅ Compiled MouseSpotlight successfully (${(compiledCode.length / 1024).toFixed(1)} KB ESM)\n`);

  // Write temporary compiled module wrapped to accept custom react hook dispatchers
  const tempModulePath = path.resolve(__dirname, '.temp_spotlight_wrapper.mjs');
  const wrappedCode = `
import { useEffect as defaultUseEffect, useRef as defaultUseRef, useState as defaultUseState } from 'react';

${compiledCode.replace(/import\s*\{[^}]*\}\s*from\s*['"]react['"];?/g, '')}

export default function WrappedSpotlight(props, customReact) {
  const prevUseEffect = globalThis.__currentReact?.useEffect;
  const prevUseRef = globalThis.__currentReact?.useRef;
  const prevUseState = globalThis.__currentReact?.useState;

  if (customReact) {
    globalThis.__currentReact = customReact;
  }
  try {
    return MouseSpotlight(props);
  } finally {
    if (prevUseEffect) globalThis.__currentReact = { useEffect: prevUseEffect, useRef: prevUseRef, useState: prevUseState };
  }
}
`;

  // We load the module via a file that dynamically delegates hooks
  const harnessModulePath = path.resolve(__dirname, '.temp_harness_runner.mjs');
  const harnessCode = `
export function setActiveReact(r) {
  globalThis.__activeReactHarness = r;
}

// Intercept react hooks
export function useRef(init) {
  if (!globalThis.__activeReactHarness) throw new Error('No active react container');
  return globalThis.__activeReactHarness.useRef(init);
}
export function useState(init) {
  if (!globalThis.__activeReactHarness) throw new Error('No active react container');
  return globalThis.__activeReactHarness.useState(init);
}
export function useEffect(fn, deps) {
  if (!globalThis.__activeReactHarness) throw new Error('No active react container');
  return globalThis.__activeReactHarness.useEffect(fn, deps);
}

// Minimal JSX runtime
export function jsx(type, props) {
  return { type, props };
}
export function jsxs(type, props) {
  return { type, props };
}
export const Fragment = Symbol.for('react.fragment');

export default {
  useRef,
  useState,
  useEffect,
  jsx,
  jsxs,
  Fragment
};
`;
  fs.writeFileSync(harnessModulePath, harnessCode, 'utf8');

  // Build the component referencing the harness
  const bundleResult = await build({
    root: PROJECT_ROOT,
    build: {
      outDir: path.resolve(__dirname, '.temp_build'),
      lib: {
        entry: path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx'),
        formats: ['es'],
        fileName: 'spotlight_harness_bundle'
      },
      write: false,
      rollupOptions: {
        external: []
      }
    },
    resolve: {
      alias: [
        { find: /^react\/jsx-runtime$/, replacement: harnessModulePath },
        { find: /^react$/, replacement: harnessModulePath }
      ]
    },
    logLevel: 'silent'
  });

  const bundledCode = (bundleResult.output ? bundleResult.output[0].code : bundleResult[0].output[0].code);
  const bundleTempPath = path.resolve(__dirname, '.temp_bundled_spotlight.mjs');
  fs.writeFileSync(bundleTempPath, bundledCode, 'utf8');

  const harnessMod = await import('file:///' + harnessModulePath.replace(/\\/g, '/'));
  const spotlightMod = await import('file:///' + bundleTempPath.replace(/\\/g, '/'));
  const MouseSpotlight = spotlightMod.default;

  function createMountedInstance(browser) {
    const container = new HookTestContainer((props, r) => {
      harnessMod.setActiveReact(r);
      return MouseSpotlight(props);
    }, browser);
    container.mount();
    return container;
  }

  // =========================================================================
  // SUITE 1: Layout Thrashing & Card Origin Caching Stress Test
  // =========================================================================
  console.log('\x1b[1m\x1b[36m▶ Suite 1: Layout Thrashing & Card Origin Caching Stress Test\x1b[0m');

  testCase('1.1: 500 consecutive mouse moves inside Card A trigger exactly ONE getBoundingClientRect call', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    // Create Card A with nested child elements
    const cardA = new MockElement('div', 'card');
    cardA.setBoundingRect({ left: 100, top: 200, width: 300, height: 200 });
    const innerDiv = new MockElement('div', 'card-inner');
    const badge = new MockElement('span', 'badge');
    const btn = new MockElement('button', 'btn');
    innerDiv.appendChild(badge);
    innerDiv.appendChild(btn);
    cardA.appendChild(innerDiv);

    // Initial state: 0 calls
    assertEqual(cardA.getRectCalls, 0, 'Card A initial getRectCalls should be 0');

    // Simulate 500 high-frequency mouse movements on Card A and its children
    for (let i = 0; i < 500; i++) {
      const targets = [cardA, innerDiv, badge, btn];
      const target = targets[i % targets.length];
      const clientX = 100 + (i % 250);
      const clientY = 200 + (i % 150);

      browser.dispatchWindow('mousemove', {
        clientX,
        clientY,
        pageX: clientX + browser.scrollX,
        pageY: clientY + browser.scrollY,
        target
      });

      // Verify coordinate arithmetic
      const expectedX = (clientX - 100).toFixed(1) + 'px';
      const expectedY = (clientY - 200).toFixed(1) + 'px';
      assertEqual(cardA.style.getPropertyValue('--card-mouse-x'), expectedX, `Event ${i}: --card-mouse-x mismatch`);
      assertEqual(cardA.style.getPropertyValue('--card-mouse-y'), expectedY, `Event ${i}: --card-mouse-y mismatch`);
    }

    // CRITICAL ASSERTION: exactly 1 getBoundingClientRect call across 500 events!
    assertEqual(cardA.getRectCalls, 1, 'cardA.getBoundingClientRect() must be called EXACTLY once across 500 moves');

    container.unmount();
  });

  testCase('1.2: Moving between Card A and Card B clears previous styles and caches new origin with exactly 1 call each', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    const cardA = new MockElement('div', 'card');
    cardA.setBoundingRect({ left: 50, top: 100, width: 200, height: 150 });

    const cardB = new MockElement('div', 'card-editorial');
    cardB.setBoundingRect({ left: 350, top: 100, width: 250, height: 180 });

    // 250 moves on Card A
    for (let i = 0; i < 250; i++) {
      browser.dispatchWindow('mousemove', { clientX: 70 + i % 100, clientY: 120 + i % 80, target: cardA });
    }
    assertEqual(cardA.getRectCalls, 1, 'Card A queried once');
    assertEqual(cardB.getRectCalls, 0, 'Card B not queried yet');
    assert(cardA.style.getPropertyValue('--card-mouse-x') !== '', 'Card A has style');

    // Transition directly to Card B: 250 moves
    for (let i = 0; i < 250; i++) {
      browser.dispatchWindow('mousemove', { clientX: 370 + i % 150, clientY: 130 + i % 100, target: cardB });
    }

    // Card A styles must be cleaned up
    assertEqual(cardA.style.getPropertyValue('--card-mouse-x'), '', 'Card A --card-mouse-x must be removed');
    assertEqual(cardA.style.getPropertyValue('--card-mouse-y'), '', 'Card A --card-mouse-y must be removed');

    // Card B queried exactly once
    assertEqual(cardB.getRectCalls, 1, 'Card B queried once');

    // Total getRect calls across 500 moves between two cards: exactly 2!
    assertEqual(cardA.getRectCalls + cardB.getRectCalls, 2, 'Total getRect calls across 500 moves must be 2');

    // Move outside any card to document.body
    browser.dispatchWindow('mousemove', { clientX: 10, clientY: 10, target: browser.document.body });
    assertEqual(cardB.style.getPropertyValue('--card-mouse-x'), '', 'Card B styles cleared when moving outside');

    container.unmount();
  });

  testCase('1.3: Scroll during card hover recalculates document origin once and maintains zero reflows afterwards', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    const cardA = new MockElement('div', 'card');
    cardA.setBoundingRect({ left: 100, top: 300, width: 200, height: 150 });

    // Enter card
    browser.dispatchWindow('mousemove', { clientX: 120, clientY: 320, pageX: 120, pageY: 320, target: cardA });
    assertEqual(cardA.getRectCalls, 1, 'Initial enter call');

    // Page scrolls down by 400px: card rect in viewport is now at top: -100
    browser.scrollY = 400;
    cardA.setBoundingRect({ left: 100, top: -100, width: 200, height: 150 });
    browser.dispatchWindow('scroll', {});

    // Scroll updates card origin (1 additional call)
    assertEqual(cardA.getRectCalls, 2, 'Scroll updates active card rect once');

    // 100 subsequent mouse moves at new scroll position: zero new calls!
    for (let i = 0; i < 100; i++) {
      const clientX = 120 + i;
      const clientY = 10 + i;
      const pageX = clientX + browser.scrollX;
      const pageY = clientY + browser.scrollY;
      browser.dispatchWindow('mousemove', { clientX, clientY, pageX, pageY, target: cardA });
    }

    assertEqual(cardA.getRectCalls, 2, 'Zero new getBoundingClientRect calls during moves post-scroll');

    container.unmount();
  });

  // =========================================================================
  // SUITE 2: Idle rAF Convergence & Sleeping Stress Test
  // =========================================================================
  console.log('\n\x1b[1m\x1b[36m▶ Suite 2: Idle rAF Convergence & Sleeping Stress Test\x1b[0m');

  testCase('2.1: First mouse move snaps coordinates instantly and starts rAF loop', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    assertEqual(browser.rafCallbacks.size, 0, 'No rAF pending before first move');

    // First mouse move at (400, 300)
    browser.dispatchWindow('mousemove', { clientX: 400, clientY: 300, target: browser.document.body });

    // Loop must be scheduled
    assertEqual(browser.rafCallbacks.size, 1, 'rAF loop must be scheduled on first move');

    container.unmount();
  });

  testCase('2.2: Loop settles and pauses when cursor is stationary (<0.25px delta convergence)', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    // Initial move
    browser.dispatchWindow('mousemove', { clientX: 200, clientY: 200, target: browser.document.body });
    browser.stepFrame();

    // Mouse moves by 10px (dx=10, dy=0) and then stops
    browser.dispatchWindow('mousemove', { clientX: 210, clientY: 200, target: browser.document.body });

    // Step frames until loop sleeps
    let frames = 0;
    while (browser.rafCallbacks.size > 0 && frames < 80) {
      browser.stepFrame();
      frames++;
    }

    console.log(`    [Metrics] 10px movement converged and slept in: ${frames} frames (target < 60 frames)`);
    assert(frames < 60, `10px movement must settle within <60 frames (<1s at 60fps), actual: ${frames}`);
    assertEqual(browser.rafCallbacks.size, 0, 'rAF loop must have stopped (0 pending callbacks)');

    // Verify elements snapped to exact target
    assertEqual(container.refs.coreRef.style.transform, 'translate3d(210px, 200px, 0)');
    assertEqual(container.refs.orbRef.style.transform, 'translate3d(210px, 200px, 0)');
    assertEqual(container.refs.ambientRef.style.transform, 'translate3d(210px, 200px, 0)');

    container.unmount();
  });

  testCase('2.3: Zero CPU/GPU frames while cursor remains motionless during sleep', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    browser.dispatchWindow('mousemove', { clientX: 100, clientY: 100, target: browser.document.body });
    browser.stepUntilIdle();

    const scheduledBefore = browser.totalRafScheduled;

    // Simulate 60 ticks of time passing while cursor is stationary
    for (let i = 0; i < 60; i++) {
      browser.stepFrame();
    }

    assertEqual(browser.totalRafScheduled, scheduledBefore, 'Zero rAF callbacks must be scheduled while stationary');

    container.unmount();
  });

  testCase('2.4: Stationary loop wakes up immediately on next pointer movement and re-settles', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    // Settle at (100, 100)
    browser.dispatchWindow('mousemove', { clientX: 100, clientY: 100, target: browser.document.body });
    browser.stepUntilIdle();
    assertEqual(browser.rafCallbacks.size, 0, 'Asleep');

    // Wake up: new move to (300, 250)
    browser.dispatchWindow('mousemove', { clientX: 300, clientY: 250, target: browser.document.body });
    assertEqual(browser.rafCallbacks.size, 1, 'rAF loop woke up immediately');

    // Settle again
    const frames = browser.stepUntilIdle(150);
    console.log(`    [Metrics] 250px jump converged and re-slept in: ${frames} frames`);
    assertEqual(browser.rafCallbacks.size, 0, 'Loop returned to sleep');
    assertEqual(container.refs.coreRef.style.transform, 'translate3d(300px, 250px, 0)');

    container.unmount();
  });

  testCase('2.5: Mouseleave event immediately cancels rAF, sets opacity to 0, and halts loop', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    browser.dispatchWindow('mousemove', { clientX: 150, clientY: 150, target: browser.document.body });
    assertEqual(browser.rafCallbacks.size, 1, 'Loop running');

    // Dispatch mouseleave on document
    browser.dispatchDocument('mouseleave', {});

    // Loop must halt instantly
    assertEqual(browser.rafCallbacks.size, 0, 'rAF callback must be immediately cancelled on mouseleave');
    assertEqual(container.refs.coreRef.style.opacity, '0', 'coreRef opacity set to 0');
    assertEqual(container.refs.orbRef.style.opacity, '0', 'orbRef opacity set to 0');
    assertEqual(container.refs.ambientRef.style.opacity, '0', 'ambientRef opacity set to 0');

    container.unmount();
  });

  // =========================================================================
  // SUITE 3: Touch & Coarse Pointer Bypass Test
  // =========================================================================
  console.log('\n\x1b[1m\x1b[36m▶ Suite 3: Touch & Coarse Pointer Bypass Test\x1b[0m');

  testCase('3.1: Coarse pointer device skips event listener registration and rAF loop', () => {
    const browser = new MockBrowser({ isCoarse: true });
    const container = createMountedInstance(browser);

    // In coarse pointer mode, window listeners for mousemove/scroll/resize should not be registered
    const mousemoveListeners = browser.windowListeners.get('mousemove') || new Set();
    assertEqual(mousemoveListeners.size, 0, 'No mousemove listeners attached on coarse pointer');

    const scrollListeners = browser.windowListeners.get('scroll') || new Set();
    assertEqual(scrollListeners.size, 0, 'No scroll listeners attached on coarse pointer');

    // Dispatching mousemove does nothing
    browser.dispatchWindow('mousemove', { clientX: 200, clientY: 200, target: browser.document.body });
    assertEqual(browser.rafCallbacks.size, 0, 'No rAF scheduled on coarse pointer device');

    container.unmount();
  });

  testCase('3.2: Dynamic media query transition activates and deactivates listeners dynamically', () => {
    const browser = new MockBrowser({ isCoarse: true });
    const container = createMountedInstance(browser);

    // Initial: coarse
    assertEqual(browser.windowListeners.get('mousemove')?.size || 0, 0, 'Initially 0 listeners');

    // Device docked or toggled in DevTools: pointer becomes fine
    browser.mql.setMatches(false);

    // Rerender container to simulate React state update from media query change
    container.rerender();

    assertEqual(browser.windowListeners.get('mousemove')?.size || 0, 1, 'Listeners attached after coarse -> fine switch');

    // Toggle back to coarse
    browser.mql.setMatches(true);
    container.rerender();

    assertEqual(browser.windowListeners.get('mousemove')?.size || 0, 0, 'Listeners cleaned up after fine -> coarse switch');

    container.unmount();
  });

  // =========================================================================
  // SUITE 4: Boundary & Adversarial Edge Cases
  // =========================================================================
  console.log('\n\x1b[1m\x1b[36m▶ Suite 4: Boundary & Adversarial Edge Cases\x1b[0m');

  testCase('4.1: Null, undefined, or detached target elements handle gracefully without exception', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    // Malformed targets
    const adversarialTargets = [
      null,
      undefined,
      {},
      { parentNode: null },
      { closest: () => null },
      { closest: () => undefined }
    ];

    for (const target of adversarialTargets) {
      browser.dispatchWindow('mousemove', { clientX: 100, clientY: 100, target });
    }

    assert(true, 'Malformed targets processed with zero exceptions');
    container.unmount();
  });

  testCase('4.2: Subpixel coordinates and extreme coordinates produce valid numeric transforms without NaN', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    // Subpixel coords
    browser.dispatchWindow('mousemove', { clientX: 123.4567, clientY: 789.0123, target: browser.document.body });
    browser.stepFrame();

    const transform = container.refs.coreRef.style.transform;
    assert(!transform.includes('NaN'), 'Transform must not contain NaN');
    assert(transform.includes('px'), 'Transform must contain px values');

    // Extreme coords
    browser.dispatchWindow('mousemove', { clientX: 999999, clientY: -888888, target: browser.document.body });
    browser.stepFrame();

    const extremeTransform = container.refs.coreRef.style.transform;
    assert(!extremeTransform.includes('NaN'), 'Extreme coords must not produce NaN');

    container.unmount();
  });

  testCase('4.3: Rapid 100-cycle unmount and remount completes cleanly without dangling handlers', () => {
    for (let i = 0; i < 100; i++) {
      const browser = new MockBrowser({ isCoarse: false });
      const container = createMountedInstance(browser);
      browser.dispatchWindow('mousemove', { clientX: i * 5, clientY: i * 5, target: browser.document.body });
      container.unmount();
      assertEqual(browser.rafCallbacks.size, 0, `Cycle ${i}: dangling rAF callback detected`);
    }
  });

  testCase('4.4: Window resize event clears activeCardRef and re-caches origin after layout reflow', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    const card = new MockElement('div', 'card');
    card.setBoundingRect({ left: 100, top: 200, width: 300, height: 200 });

    // Enter card: rect queried once
    browser.dispatchWindow('mousemove', { clientX: 150, clientY: 250, target: card });
    assertEqual(card.getRectCalls, 1, 'Initial rect query on enter');

    // Layout shift happens (e.g. responsive breakpoint change, sidebar collapse)
    card.setBoundingRect({ left: 50, top: 120, width: 400, height: 300 });

    // Trigger window resize event
    browser.dispatchWindow('resize', {});

    // Next mouse movement inside the card must detect cache clearance and re-query rect once
    browser.dispatchWindow('mousemove', { clientX: 70, clientY: 150, target: card });
    assertEqual(card.getRectCalls, 2, 'Rect re-queried after resize event');

    // Subsequent 50 moves inside the resized card use arithmetic with 0 calls
    for (let i = 0; i < 50; i++) {
      browser.dispatchWindow('mousemove', { clientX: 70 + i, clientY: 150 + i, target: card });
    }
    assertEqual(card.getRectCalls, 2, '0 additional calls after re-caching');

    container.unmount();
  });

  testCase('4.5: Rapid ping-pong transitions (50 alternations between Card A and Card B) verify clean state transitions', () => {
    const browser = new MockBrowser({ isCoarse: false });
    const container = createMountedInstance(browser);

    const cardA = new MockElement('div', 'card');
    cardA.setBoundingRect({ left: 10, top: 10, width: 100, height: 100 });

    const cardB = new MockElement('div', 'card-editorial');
    cardB.setBoundingRect({ left: 200, top: 10, width: 100, height: 100 });

    // 50 back-and-forth transitions between Card A and Card B
    for (let cycle = 0; cycle < 50; cycle++) {
      // Move 5 times in A
      for (let m = 0; m < 5; m++) {
        browser.dispatchWindow('mousemove', { clientX: 20 + m, clientY: 20 + m, target: cardA });
      }
      // Move 5 times in B
      for (let m = 0; m < 5; m++) {
        browser.dispatchWindow('mousemove', { clientX: 210 + m, clientY: 20 + m, target: cardB });
      }
    }

    // Exactly 50 queries for A, 50 queries for B across 500 events (10 events per cycle)
    assertEqual(cardA.getRectCalls, 50, 'Card A queried exactly once per entry');
    assertEqual(cardB.getRectCalls, 50, 'Card B queried exactly once per entry');

    container.unmount();
  });

  testCase('4.6: Event with undefined pageX/pageY falls back to clientX + scrollX seamlessly', () => {
    const browser = new MockBrowser({ isCoarse: false });
    browser.scrollX = 50;
    browser.scrollY = 80;
    const container = createMountedInstance(browser);

    const card = new MockElement('div', 'card');
    card.setBoundingRect({ left: 100, top: 200, width: 300, height: 200 });

    // Dispatch event with no pageX / pageY (e.g. synthetic MouseEvent in some environments)
    browser.dispatchWindow('mousemove', {
      clientX: 140,
      clientY: 240,
      target: card
    });

    // card origin = pageX: 100 + 50 = 150, pageY: 200 + 80 = 280
    // mouse pageX = 140 + 50 = 190, pageY = 240 + 80 = 320
    // relative mouseX = 190 - 150 = 40.0px, mouseY = 320 - 280 = 40.0px
    assertEqual(card.style.getPropertyValue('--card-mouse-x'), '40.0px');
    assertEqual(card.style.getPropertyValue('--card-mouse-y'), '40.0px');

    container.unmount();
  });

  // Cleanup temporary artifacts
  try {
    fs.unlinkSync(bundleTempPath);
    fs.unlinkSync(harnessModulePath);
  } catch {}

  // =========================================================================
  // Summary
  // =========================================================================
  console.log('\n======================================================');
  console.log('             ADVERSARIAL SUITE SUMMARY                ');
  console.log('======================================================');
  console.log(` Total Test Cases : ${passedTests + failedTests}`);
  console.log(` \x1b[32mPassed           : ${passedTests}\x1b[0m`);
  console.log(` \x1b[31mFailed           : ${failedTests}\x1b[0m`);
  console.log('======================================================\n');

  if (failedTests > 0) {
    throw new Error(`Empirical Stress Suite failed with ${failedTests} failures.`);
  }

  return { passedTests, failedTests, testResults };
}

// Auto-run if executed directly
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  runEmpiricalStressSuite().catch(err => {
    console.error('Fatal Test Harness Error:', err);
    process.exit(1);
  });
}
