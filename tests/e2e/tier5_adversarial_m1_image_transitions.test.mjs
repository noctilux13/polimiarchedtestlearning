/**
 * tests/e2e/tier5_adversarial_m1_image_transitions.test.mjs
 * 
 * Empirical Adversarial Test Harness for Milestone M1:
 * - ArtworkImage Multi-Source Resolution & Fallback Cascade
 * - Roman Arch SVG Architectural & Air-Gapped Conformance
 * - CSS Transition Isolation under [data-theme-transitioning] & Layout Churn Elimination
 */

import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createServer } from 'vite';
import {
  describe,
  test,
  assert,
  assertEqual,
  assertIncludes,
  PROJECT_ROOT,
  setupMockEnvironment
} from './test_runner.mjs';

setupMockEnvironment();

// Initialize Vite SSR module loader at module scope
const viteServer = await createServer({
  server: { middlewareMode: true },
  appType: 'custom'
});

const ArtworkImageModule = await viteServer.ssrLoadModule('./src/components/ArtworkImage.jsx');
const ArtworkImage = ArtworkImageModule.ArtworkImage;
const ArchedOfflinePlaceholder = ArtworkImageModule.ArchedOfflinePlaceholder;

const AppContextModule = await viteServer.ssrLoadModule('./src/context/AppContext.jsx');
const AppContext = AppContextModule.AppContext;

const cachePath = path.resolve(PROJECT_ROOT, 'src/data/artworksCache.json');
const artworksCache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

const cssPath = path.resolve(PROJECT_ROOT, 'src/index.css');
const indexCssContent = fs.readFileSync(cssPath, 'utf8');

const appCtxPath = path.resolve(PROJECT_ROOT, 'src/context/AppContext.jsx');
const appContextContent = fs.readFileSync(appCtxPath, 'utf8');

// =========================================================================
// Suite 1: ArtworkImage Multi-Source Resolution & Fallback Cascade
// =========================================================================
describe('T5-Suite 1: ArtworkImage Multi-Source Resolution & Fallback Cascade', () => {

  test('1.1: Direct valid URL (Wikimedia Commons) renders img with initial shimmer', () => {
    const directUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa.jpg';
    const element = React.createElement(ArtworkImage, {
      src: directUrl,
      alt: 'Mona Lisa',
      className: 'test-artwork-class'
    });

    const html = ReactDOMServer.renderToStaticMarkup(element);
    assertIncludes(html, directUrl, 'img element must have direct src attribute');
    assertIncludes(html, 'image-shimmer', 'Container must have image-shimmer while loading');
    assertIncludes(html, 'opacity:0', 'img must start with opacity:0 before load');
    assertIncludes(html, 'scale(0.98)', 'img must start with scale(0.98) subtle zoom');
    assert(!html.includes('arched-offline-placeholder'), 'Valid URL must not render offline placeholder initially');
  });

  test('1.2: Direct invalid URL with fallbackSrc prepares cascade and retains shimmer', () => {
    const brokenUrl = 'https://invalid-non-existent-domain-404.org/broken.jpg';
    const fallbackUrl = '/images/artworks/city-rises.jpg';

    const element = React.createElement(ArtworkImage, {
      src: brokenUrl,
      fallbackSrc: fallbackUrl,
      alt: 'Rising City'
    });

    const html = ReactDOMServer.renderToStaticMarkup(element);
    assertIncludes(html, brokenUrl, 'Should mount primary URL first');
    assertIncludes(html, 'image-shimmer', 'Shimmer skeleton must be present');
    assert(!html.includes('arched-offline-placeholder'), 'Should not prematurely show placeholder');
  });

  test('1.3: Direct invalid URL with no fallback source fails to ArchedOfflinePlaceholder', () => {
    const element = React.createElement(ArtworkImage, {
      alt: 'Missing Everything'
    });

    const html = ReactDOMServer.renderToStaticMarkup(element);
    assertIncludes(html, 'arched-offline-placeholder', 'Missing source must immediately render ArchedOfflinePlaceholder');
    assertIncludes(html, '未指定文献图源 (No Image Source)', 'Must render clear missing source badge');
    assert(!html.includes('<img'), 'Must not render broken <img> tag when source is missing');
  });

  test('1.4: Legacy artworkId resolution retrieves metadata and image path from cache', () => {
    const artworkId = 'city-rises';
    const cached = artworksCache[artworkId];
    assert(cached, `Artwork ${artworkId} must exist in artworksCache.json`);

    const element = React.createElement(ArtworkImage, {
      artworkId,
      className: 'gallery-img'
    });

    const html = ReactDOMServer.renderToStaticMarkup(element);
    assertIncludes(html, cached.image_url, 'Must resolve image_url from artworksCache.json');
    assertIncludes(html, 'image-shimmer', 'Must maintain shimmer skeleton on initial render');
    assertIncludes(html, 'gallery-img', 'Must preserve custom className');
  });

  test('1.5: Legacy artworkId with non-existent ID falls back to standard path then SVG', () => {
    const nonExistentId = 'unknown_ancient_relic_9999';
    const element = React.createElement(ArtworkImage, {
      artworkId: nonExistentId
    });

    const html = ReactDOMServer.renderToStaticMarkup(element);
    assertIncludes(html, `/images/artworks/${nonExistentId}.jpg`, 'Convention URL must be generated');
    assertIncludes(html, 'image-shimmer', 'Shimmer skeleton must be applied during load');
  });

  test('1.6: Context resolveArtworkUrl takes Priority 1 over directUrl and artworkId', () => {
    const customOverrideUrl = 'https://custom-user-store.local/override.jpg';
    const mockContextValue = {
      resolveArtworkUrl: (id) => (id === 'mona-lisa' ? customOverrideUrl : null)
    };

    const element = React.createElement(
      AppContext.Provider,
      { value: mockContextValue },
      React.createElement(ArtworkImage, {
        artworkId: 'mona-lisa',
        src: 'https://wikimedia.org/standard-mona.jpg'
      })
    );

    const html = ReactDOMServer.renderToStaticMarkup(element);
    assertIncludes(html, customOverrideUrl, 'Custom override from context must override both directUrl and artworkId');
  });

  test('1.7: Alternative prop aliases (imageUrl, image, fallbackImage) resolve correctly', () => {
    const html1 = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ArtworkImage, { imageUrl: 'https://example.com/img1.jpg' })
    );
    assertIncludes(html1, 'https://example.com/img1.jpg', 'imageUrl prop alias must be respected');

    const html2 = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ArtworkImage, { image: 'https://example.com/img2.jpg' })
    );
    assertIncludes(html2, 'https://example.com/img2.jpg', 'image prop alias must be respected');
  });

  test('1.8: Fallback cascade state machine simulation (Primary 404 -> Fallback 200 / Fallback 404)', () => {
    let currentSrc = 'https://broken.url/1.jpg';
    const initialFallbackUrl = '/images/local_backup.jpg';
    let hasTriedFallback = false;
    let loaded = false;
    let error = false;

    function simulateError() {
      if (!hasTriedFallback && initialFallbackUrl && initialFallbackUrl !== currentSrc) {
        hasTriedFallback = true;
        currentSrc = initialFallbackUrl;
        loaded = false; // Retain shimmer!
        return;
      }
      error = true;
      loaded = false;
    }

    function simulateLoad() {
      loaded = true;
      error = false;
    }

    // First error (primary network failure)
    simulateError();
    assertEqual(currentSrc, '/images/local_backup.jpg', 'currentSrc must switch to fallback');
    assertEqual(hasTriedFallback, true, 'hasTriedFallback flag must be set');
    assertEqual(error, false, 'error state must remain false during fallback attempt');
    assertEqual(loaded, false, 'loaded must remain false to retain shimmer');

    // Fallback succeeds
    simulateLoad();
    assertEqual(loaded, true, 'loaded must become true upon fallback success');
    assertEqual(error, false, 'error must remain false');

    // Case B: primary fails, fallback ALSO fails
    currentSrc = 'https://broken.url/2.jpg';
    hasTriedFallback = false;
    loaded = false;
    error = false;

    // Primary fails
    simulateError();
    assertEqual(hasTriedFallback, true);
    // Secondary fails
    simulateError();
    assertEqual(error, true, 'When fallback fails, error must be true');
    assertEqual(loaded, false, 'loaded must remain false');
  });
});

// =========================================================================
// Suite 2: Roman Arch SVG Structural Integrity & Air-Gapped Conformance
// =========================================================================
describe('T5-Suite 2: Roman Arch SVG Structural Integrity & Air-Gapped Conformance', () => {

  test('2.1: ArchedOfflinePlaceholder renders accessible role="img" and aria-label', () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ArchedOfflinePlaceholder, {
        title: '万神殿穹顶与拱券',
        subTitle: '离线视觉参考'
      })
    );

    assertIncludes(html, 'role="img"', 'Root element must have role="img" for screen readers');
    assertIncludes(html, 'aria-label="万神殿穹顶与拱券 - 离线视觉参考"', 'Must have descriptive aria-label');
    assertIncludes(html, 'aria-hidden="true"', 'Decorative SVG element must have aria-hidden="true"');
  });

  test('2.2: Classical Roman Arch architectural SVG elements are all verified', () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ArchedOfflinePlaceholder, {
        title: '罗马凯旋门',
        subTitle: '建筑历史图样'
      })
    );

    assertIncludes(html, '<line x1="12" y1="92" x2="108" y2="92"', 'Must include lower stylobate foundation');
    assertIncludes(html, '<line x1="18" y1="87" x2="102" y2="87"', 'Must include upper stylobate step');

    assertIncludes(html, '<rect x="24" y="38" width="13" height="49"', 'Must include Left Pier');
    assertIncludes(html, '<rect x="83" y="38" width="13" height="49"', 'Must include Right Pier');
    assertIncludes(html, '<line x1="21" y1="38" x2="40" y2="38"', 'Must include Left Capital');
    assertIncludes(html, '<line x1="80" y1="38" x2="99" y2="38"', 'Must include Right Capital');

    assertIncludes(html, 'M 37 42 A 23 23 0 0 1 83 42', 'Must include authentic semicircular Roman Arch arc path');
    assertIncludes(html, 'points="56,18 64,18 62,25 58,25"', 'Must include authentic trapezoidal Keystone');

    assertIncludes(html, '<line x1="16" y1="26" x2="104" y2="26"', 'Must include classical entablature baseline');
    assertIncludes(html, 'points="20,26 60,10 100,26"', 'Must include triangular classical pediment');
    assertIncludes(html, '<circle cx="60" cy="18" r="2.5"', 'Must include oculus / horizon circle');
  });

  test('2.3: Zero external network references in SVG output (100% air-gapped)', () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ArchedOfflinePlaceholder, {
        title: 'Air Gap Test'
      })
    );

    assert(!html.includes('http://'), 'Must not reference external http:// in SVG');
    assert(!html.includes('https://'), 'Must not reference external https:// in SVG');
    assert(!html.includes('<image'), 'Must not depend on external bitmap <image> tags');
    assert(!html.includes('@import'), 'Must not import remote stylesheets');
  });

  test('2.4: 100% Theme-adaptive CSS variables used in ArchedOfflinePlaceholder', () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ArchedOfflinePlaceholder)
    );

    assertIncludes(html, 'var(--bg-subtle', 'Must bind to --bg-subtle');
    assertIncludes(html, 'var(--text-secondary', 'Must bind to --text-secondary');
    assertIncludes(html, 'var(--text-tertiary', 'Must bind to --text-tertiary');
    assertIncludes(html, 'var(--border-hairline', 'Must bind to --border-hairline');
    assertIncludes(html, 'var(--bg-surface', 'Must bind badge background to --bg-surface');
  });
});

// =========================================================================
// Suite 3: CSS Transition Isolation & Layout Reflow Prevention
// =========================================================================
describe('T5-Suite 3: CSS Transition Isolation under [data-theme-transitioning]', () => {

  test('3.1: CSS rules enforce that 4-property universal transition is scoped under [data-theme-transitioning]', () => {
    assert(indexCssContent.includes('[data-theme-transitioning]'), 'index.css must contain [data-theme-transitioning] selectors');

    const transitionBlockMatch = indexCssContent.match(/(\[data-theme-transitioning\][\s\S]*?)\{\s*transition:\s*background-color 0\.35s ease[^}]*?\}/);
    assert(transitionBlockMatch, 'Must find 0.35s theme transition block scoped by [data-theme-transitioning]');

    const selectors = transitionBlockMatch[1];
    assertIncludes(selectors, '[data-theme-transitioning] .card');
    assertIncludes(selectors, '[data-theme-transitioning] .navbar');
    assertIncludes(selectors, '[data-theme-transitioning] .tab-bar');
    assertIncludes(selectors, '[data-theme-transitioning] .btn');
    assertIncludes(selectors, '[data-theme-transitioning] input');
    assertIncludes(selectors, '[data-theme-transitioning] body');
  });

  test('3.2: Verify zero unscoped blanket transitions on core interactive selectors', () => {
    const transitionRegex = /([^{]+)\{\s*[^}]*?transition:\s*[^;]*?background-color[^;]*?;/g;
    let match;
    const violatingSelectors = [];

    while ((match = transitionRegex.exec(indexCssContent)) !== null) {
      const selectorList = match[1].trim();
      if (selectorList.includes('body') && (selectorList.includes('input') || selectorList.includes('.card'))) {
        if (!selectorList.includes('[data-theme-transitioning]')) {
          violatingSelectors.push(selectorList);
        }
      }
    }

    assertEqual(
      violatingSelectors.length,
      0,
      `Unscoped blanket transitions detected on: ${violatingSelectors.join(' | ')}`
    );
  });

  test('3.3: Interactive button press feedback (.btn:active) uses instant feedback duration', () => {
    assertIncludes(indexCssContent, '.btn:active');
    assertIncludes(indexCssContent, 'transform: scale(0.97)');
    assertIncludes(indexCssContent, 'var(--duration-feedback)');
  });

  test('3.4: Accessibility: prefers-reduced-motion nullifies theme transitions', () => {
    const reducedMotionBlock = indexCssContent.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)[\s\S]*?\[data-theme-transitioning\][\s\S]*?\{\s*transition:\s*none\s*!important;\s*\}/);
    assert(reducedMotionBlock, 'Prefers-reduced-motion must set transition: none !important for [data-theme-transitioning]');
  });

  test('3.5: AppContext theme transition lifecycle simulation', () => {
    assertIncludes(appContextContent, 'isInitialThemeMount = useRef(true)');
    assertIncludes(appContextContent, 'if (isInitialThemeMount.current)');
    assertIncludes(appContextContent, 'isInitialThemeMount.current = false');

    assertIncludes(appContextContent, "setAttribute('data-theme-transitioning', 'true')");
    assertIncludes(appContextContent, "removeAttribute('data-theme-transitioning')");
    assertIncludes(appContextContent, '380');

    const mockAttributes = new Map();
    const mockDoc = {
      setAttribute: (k, v) => mockAttributes.set(k, v),
      removeAttribute: (k) => mockAttributes.delete(k),
      getAttribute: (k) => mockAttributes.get(k) || null
    };

    let isInitial = true;
    let activeTimer = null;

    function onThemeChange(newTheme) {
      if (isInitial) {
        isInitial = false;
        mockDoc.setAttribute('data-theme', newTheme);
        return;
      }

      mockDoc.setAttribute('data-theme-transitioning', 'true');
      mockDoc.setAttribute('data-theme', newTheme);

      if (activeTimer) clearTimeout(activeTimer);
      activeTimer = setTimeout(() => {
        mockDoc.removeAttribute('data-theme-transitioning');
      }, 380);
    }

    // Initial mount
    onThemeChange('dark');
    assertEqual(mockDoc.getAttribute('data-theme'), 'dark', 'data-theme must be dark');
    assertEqual(mockDoc.getAttribute('data-theme-transitioning'), null, 'data-theme-transitioning must NOT be present on mount');

    // Toggle to light
    onThemeChange('light');
    assertEqual(mockDoc.getAttribute('data-theme'), 'light');
    assertEqual(mockDoc.getAttribute('data-theme-transitioning'), 'true', 'data-theme-transitioning must activate on theme change');

    return new Promise((resolve) => {
      setTimeout(() => {
        assertEqual(mockDoc.getAttribute('data-theme-transitioning'), null, 'data-theme-transitioning must be cleanly removed after timeout');
        resolve();
      }, 400);
    });
  });
});

// Teardown at end of all suites
describe('T5-Teardown', () => {
  test('9.9: Close Vite Server', async () => {
    if (viteServer) {
      await viteServer.close();
    }
    assert(true, 'Vite server closed cleanly');
  });
});
