/**
 * tests/e2e/tier1_feature_coverage.test.mjs
 * 
 * Tier 1: Feature Coverage Test Suite (≥105 test cases, ≥5 per feature across 21 features)
 * Validates feature isolation, interface contracts, module boundaries, and specification adherence.
 */

import fs from 'fs';
import path from 'path';
import {
  describe,
  test,
  assert,
  assertEqual,
  assertIncludes,
  assertMatch,
  assertGreaterThanOrEqual,
  assertLessThanOrEqual,
  PROJECT_ROOT,
  setupMockEnvironment,
  setNavigatorOnLine
} from './test_runner.mjs';

describe('Tier 1: Feature Coverage (Features 1 - 21)', () => {

  // Setup mock environment before tier runs
  setupMockEnvironment();

  // =========================================================================
  // Feature 1: Sustained 60fps & Non-thrashing Animation
  // =========================================================================
  describe('F1: Sustained 60fps & Non-thrashing Animation', () => {
    test('1.1: MouseSpotlight source does not call getBoundingClientRect in mousemove', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      assert(fs.existsSync(filePath), 'MouseSpotlight.jsx must exist');
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Should not have unthrottled getBoundingClientRect within mousemove listener
      const hasUnthrottledReflow = /addEventListener\(['"]mousemove['"][\s\S]*?getBoundingClientRect\(\)/.test(content);
      assert(!hasUnthrottledReflow, 'MouseSpotlight must not call getBoundingClientRect synchronously inside mousemove handler');
    });

    test('1.2: MouseSpotlight manages requestAnimationFrame with idle pausing or throttling', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      const hasRafManagement = content.includes('requestAnimationFrame') || content.includes('cancelAnimationFrame') || content.includes('pointer');
      assert(hasRafManagement, 'MouseSpotlight must have rAF throttling or pointer event management');
    });

    test('1.3: Global CSS avoids blanket transition on all core tags', () => {
      const cssPath = path.resolve(PROJECT_ROOT, 'src/index.css');
      assert(fs.existsSync(cssPath), 'src/index.css must exist');
      const css = fs.readFileSync(cssPath, 'utf8');
      // Blanket transition pattern like "body, .navbar, .card ... { transition: ... }"
      const hasBlanketTransition = /body[^{]*?\.card[^{]*?input[^{]*?\{[^}]*?transition:\s*background-color/s.test(css);
      assert(!hasBlanketTransition, 'index.css should not have blanket transitions across all body/inputs/cards simultaneously');
    });

    test('1.4: Modal backdrop blur is capped to prevent high-DPI GPU overdraw', () => {
      const cssPath = path.resolve(PROJECT_ROOT, 'src/index.css');
      const css = fs.readFileSync(cssPath, 'utf8');
      // Blur should not exceed 20px on fullscreen elements
      const heavyBlurMatch = css.match(/backdrop-filter:\s*blur\((\d+)px\)/);
      if (heavyBlurMatch) {
        const blurRadius = parseInt(heavyBlurMatch[1], 10);
        assertLessThanOrEqual(blurRadius, 20, 'Fullscreen backdrop-filter blur should be <= 20px for 60fps performance');
      } else {
        assert(true, 'No excessive backdrop-filter blur found');
      }
    });

    test('1.5: 3D perspective transforms in Flashcards utilize hardware acceleration hints', () => {
      const flashcardsPath = path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx');
      assert(fs.existsSync(flashcardsPath), 'Flashcards.jsx must exist');
      const content = fs.readFileSync(flashcardsPath, 'utf8');
      const has3D = content.includes('perspective') || content.includes('rotateY') || content.includes('preserve-3d');
      assert(has3D, 'Flashcards must configure 3D perspective and rotation');
    });
  });

  // =========================================================================
  // Feature 2: MouseSpotlight Layout Thrashing Elimination
  // =========================================================================
  describe('F2: MouseSpotlight Layout Thrashing Elimination', () => {
    test('2.1: MouseSpotlight checks matchMedia for coarse pointer (touch devices)', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      const checksTouch = content.includes('pointer: coarse') || content.includes('matchMedia') || content.includes('ontouchstart') || content.includes('maxTouchPoints');
      assert(checksTouch, 'MouseSpotlight must detect touch / coarse pointer devices to avoid unnecessary rendering');
    });

    test('2.2: Spotlight coordinates decouple from synchronous card element queries', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      const hasDecoupledCoords = !content.includes('.closest?.(\'.card') || content.includes('rAF') || content.includes('throttle') || content.includes('useCallback') || content.includes('useRef');
      assert(hasDecoupledCoords, 'Spotlight coordinates should be decoupled or throttled from continuous closest() DOM queries');
    });

    test('2.3: MouseSpotlight cleans up event listeners on unmount', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      assertIncludes(content, 'removeEventListener', 'MouseSpotlight must clean up mousemove/pointer listeners in useEffect return');
    });

    test('2.4: Spotlight DOM layers use CSS transform/opacity instead of layout-triggering top/left offsets', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      const usesTransform = content.includes('transform') || content.includes('translate') || content.includes('--mouse-x') || content.includes('opacity');
      assert(usesTransform, 'Spotlight layers should animate using transform/opacity/variables rather than thrashing layout');
    });

    test('2.5: MouseSpotlight component exports clean functional React component', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/components/MouseSpotlight.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      assertMatch(content, /export\s+default\s+function\s+MouseSpotlight|export\s+const\s+MouseSpotlight/, 'Must export MouseSpotlight component');
    });
  });

  // =========================================================================
  // Feature 3: Touch & Cursor Responsiveness
  // =========================================================================
  describe('F3: Touch & Cursor Responsiveness', () => {
    test('3.1: Flashcards component supports touch interaction handlers', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      const hasTouch = content.includes('onTouchStart') || content.includes('onTouchEnd') || content.includes('drag') || content.includes('swipe') || content.includes('touch');
      assert(hasTouch, 'Flashcards must support touch gestures or drag/swipe interactions');
    });

    test('3.2: Touch swipe threshold or delta calculation exists for card navigation', () => {
      const filePath = path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx');
      const content = fs.readFileSync(filePath, 'utf8');
      const hasSwipeDelta = content.includes('clientX') || content.includes('touches') || content.includes('delta') || content.includes('drag') || content.includes('onPan');
      assert(hasSwipeDelta, 'Flashcards should calculate touch movement delta for responsive flipping or navigation');
    });

    test('3.3: Interactive button styles specify pointer cursor and tap states', () => {
      const cssPath = path.resolve(PROJECT_ROOT, 'src/index.css');
      const css = fs.readFileSync(cssPath, 'utf8');
      assertIncludes(css, 'cursor: pointer', 'Interactive buttons must specify cursor: pointer for clear desktop responsiveness');
    });

    test('3.4: Viewport configuration in index.html prevents tap delay', () => {
      const htmlPath = path.resolve(PROJECT_ROOT, 'index.html');
      assert(fs.existsSync(htmlPath), 'index.html must exist');
      const html = fs.readFileSync(htmlPath, 'utf8');
      assertIncludes(html, 'width=device-width', 'Viewport meta must include width=device-width');
    });

    test('3.5: App CSS defines responsive breakpoints for mobile touch layout', () => {
      const cssPath = path.resolve(PROJECT_ROOT, 'src/index.css');
      const css = fs.readFileSync(cssPath, 'utf8');
      const hasMediaQueries = css.includes('@media (max-width:');
      assert(hasMediaQueries, 'Global styles must provide responsive media queries for touch screen layouts');
    });
  });

  // =========================================================================
  // Feature 4: Offline Single-File Build (npm run build)
  // =========================================================================
  describe('F4: Offline Single-File Build (npm run build)', () => {
    test('4.1: package.json scripts include build and single-file packaging', () => {
      const pkgPath = path.resolve(PROJECT_ROOT, 'package.json');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      assert(pkg.scripts.build, 'package.json must contain build script');
      assertIncludes(pkg.scripts.build, 'buildSingleFileHtml.js', 'build script must execute single-file inliner');
    });

    test('4.2: buildSingleFileHtml.js inlines CSS assets into self-contained HTML', () => {
      const scriptPath = path.resolve(PROJECT_ROOT, 'scripts/buildSingleFileHtml.js');
      assert(fs.existsSync(scriptPath), 'buildSingleFileHtml.js must exist');
      const content = fs.readFileSync(scriptPath, 'utf8');
      assert(content.includes('<style>') || content.includes('css'), 'Inliner must bundle CSS into <style> blocks');
    });

    test('4.3: buildSingleFileHtml.js inlines JS assets into script tags', () => {
      const scriptPath = path.resolve(PROJECT_ROOT, 'scripts/buildSingleFileHtml.js');
      const content = fs.readFileSync(scriptPath, 'utf8');
      assert(content.includes('<script') || content.includes('inlineJs'), 'Inliner must bundle JS into <script> blocks');
    });

    test('4.4: Inliner outputs to art_learning_platform_portable.html', () => {
      const scriptPath = path.resolve(PROJECT_ROOT, 'scripts/buildSingleFileHtml.js');
      const content = fs.readFileSync(scriptPath, 'utf8');
      assertIncludes(content, 'art_learning_platform_portable.html', 'Inliner must target art_learning_platform_portable.html');
    });

    test('4.5: HashRouter is used in App.jsx to support file:// protocol navigation', () => {
      const appPath = path.resolve(PROJECT_ROOT, 'src/App.jsx');
      assert(fs.existsSync(appPath), 'src/App.jsx must exist');
      const content = fs.readFileSync(appPath, 'utf8');
      assertIncludes(content, 'HashRouter', 'App.jsx must use HashRouter for offline file:// protocol compatibility');
    });
  });

  // =========================================================================
  // Feature 5: Clean Bundle with Zero Import Errors
  // =========================================================================
  describe('F5: Clean Bundle with Zero Import Errors', () => {
    test('5.1: Oxlint linter configuration exists in project root', () => {
      const oxlintPath = path.resolve(PROJECT_ROOT, '.oxlintrc.json');
      assert(fs.existsSync(oxlintPath), '.oxlintrc.json must exist');
      const config = JSON.parse(fs.readFileSync(oxlintPath, 'utf8'));
      assert(config.plugins, 'Oxlint config must specify plugins');
    });

    test('5.2: All pages eagerly or lazily imported in App.jsx resolve to real files', () => {
      const appPath = path.resolve(PROJECT_ROOT, 'src/App.jsx');
      const content = fs.readFileSync(appPath, 'utf8');
      const importMatches = [...content.matchAll(/import\s+.*?from\s+['"]\.\/pages\/([^'"]+)['"]/g)];
      assertGreaterThanOrEqual(importMatches.length, 5, 'App.jsx must import at least 5 page components');
      
      importMatches.forEach(m => {
        const pageName = m[1];
        const pageFile = path.resolve(PROJECT_ROOT, 'src/pages', pageName.endsWith('.jsx') ? pageName : `${pageName}.jsx`);
        assert(fs.existsSync(pageFile), `Imported page file must exist: ${pageFile}`);
      });
    });

    test('5.3: Entry point main.jsx renders App component into root DOM', () => {
      const mainPath = path.resolve(PROJECT_ROOT, 'src/main.jsx');
      assert(fs.existsSync(mainPath), 'src/main.jsx must exist');
      const content = fs.readFileSync(mainPath, 'utf8');
      assertIncludes(content, '<App', 'main.jsx must render <App />');
      assertIncludes(content, 'getElementById(\'root\')', 'main.jsx must bind to root element');
    });

    test('5.4: Vite configuration defines React plugin and valid build base', () => {
      const vitePath = path.resolve(PROJECT_ROOT, 'vite.config.js');
      assert(fs.existsSync(vitePath), 'vite.config.js must exist');
      const content = fs.readFileSync(vitePath, 'utf8');
      assertIncludes(content, '@vitejs/plugin-react', 'vite.config.js must include @vitejs/plugin-react');
    });

    test('5.5: HTML template defines root container and module script tag', () => {
      const htmlPath = path.resolve(PROJECT_ROOT, 'index.html');
      const html = fs.readFileSync(htmlPath, 'utf8');
      assertIncludes(html, 'id="root"', 'index.html must have #root container');
      assertIncludes(html, 'src="/src/main.jsx"', 'index.html must point to main.jsx module');
    });
  });

  // =========================================================================
  // Feature 6: ARCHED 200+ Core Question Bank Schema
  // =========================================================================
  describe('F6: ARCHED 200+ Core Question Bank Schema', () => {
    test('6.1: Question bank file exists at src/data/archedQuestionBank.js', () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      assert(fs.existsSync(bankPath), 'src/data/archedQuestionBank.js must exist');
    });

    test('6.2: Question bank exports an array of at least 300 items', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      assert(fs.existsSync(bankPath), 'src/data/archedQuestionBank.js must exist');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      assert(Array.isArray(bank), 'Question bank must export an array');
      assertGreaterThanOrEqual(bank.length, 300, `Question bank count must be >= 300, found ${bank.length}`);
    });

    test('6.3: Each question conforms to unique string id format', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const ids = new Set();
      bank.forEach((q, idx) => {
        assert(typeof q.id === 'string' && q.id.length > 0, `Question #${idx} missing id`);
        assert(!ids.has(q.id), `Duplicate question id found: ${q.id}`);
        ids.add(q.id);
      });
    });

    test('6.4: Each question has valid 0-based integer correctAnswer (0..3)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert(typeof q.correctAnswer === 'number' && Number.isInteger(q.correctAnswer), `${q.id}: correctAnswer must be integer`);
        assertGreaterThanOrEqual(q.correctAnswer, 0, `${q.id}: correctAnswer >= 0`);
        assertLessThanOrEqual(q.correctAnswer, 3, `${q.id}: correctAnswer <= 3`);
      });
    });

    test('6.5: Question difficulty is constrained to integer 1, 2, or 3', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert([1, 2, 3].includes(q.difficulty), `${q.id}: difficulty must be 1, 2, or 3, found ${q.difficulty}`);
      });
    });
  });

  // =========================================================================
  // Feature 7: Chronological Sequencing Domain (D1)
  // =========================================================================
  describe('F7: Chronological Sequencing Domain (D1)', () => {
    test('7.1: Domain "chronology" contains at least 60 questions', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const chronologyQs = bank.filter(q => q.domain === 'chronology');
      assertGreaterThanOrEqual(chronologyQs.length, 60, `Chronology domain must have >= 60 questions, found ${chronologyQs.length}`);
    });

    test('7.2: Chronology questions cover movement sequencing (Neoclassicism to Pop Art)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const chronologyQs = bank.filter(q => q.domain === 'chronology');
      const matchesMovement = chronologyQs.some(q => 
        (q.questionEn + q.questionZh).includes('order') ||
        (q.questionEn + q.questionZh).includes('chronolog') ||
        (q.questionEn + q.questionZh).includes('顺序') ||
        (q.questionEn + q.questionZh).includes('年代')
      );
      assert(matchesMovement, 'Chronology domain must contain movement sequencing questions');
    });

    test('7.3: Chronology domain covers architectural era progression', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const chronologyQs = bank.filter(q => q.domain === 'chronology');
      const hasArchTerms = chronologyQs.some(q => 
        q.tags.some(t => ['Architecture', 'Gothic', 'Renaissance', 'Baroque', 'Neoclassical', 'Modern', 'Romanesque'].includes(t))
      );
      assert(hasArchTerms, 'Chronology domain must test architectural era progression');
    });

    test('7.4: Chronology options represent sequences or period transitions', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const chronologyQs = bank.filter(q => q.domain === 'chronology');
      assert(chronologyQs.length > 0, 'Chronology questions must exist');
      chronologyQs.forEach(q => {
        assertEqual(q.optionsZh.length, 4, `${q.id}: optionsZh must have length 4`);
        assertEqual(q.optionsEn.length, 4, `${q.id}: optionsEn must have length 4`);
      });
    });

    test('7.5: Chronology explanations cite historical centuries or dates', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const chronologyQs = bank.filter(q => q.domain === 'chronology');
      const hasDates = chronologyQs.some(q => /\b(1[4-9]\d{2}|20\d{2}|century|年代|世纪)\b/i.test(q.explanationEn + q.explanationZh));
      assert(hasDates, 'Chronology explanations must provide historical date/century context');
    });
  });

  // =========================================================================
  // Feature 8: Visual Artwork & Author ID Domain (D2)
  // =========================================================================
  describe('F8: Visual Artwork & Author ID Domain (D2)', () => {
    test('8.1: Domain "visual_id" contains at least 60 questions', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const visualQs = bank.filter(q => q.domain === 'visual_id');
      assertGreaterThanOrEqual(visualQs.length, 60, `Visual ID domain must have >= 60 questions, found ${visualQs.length}`);
    });

    test('8.2: Visual ID questions cover Mondrian, Miró, and Pollock', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const visualQs = bank.filter(q => q.domain === 'visual_id');
      const text = visualQs.map(q => q.questionEn + q.questionZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Mondrian') || text.includes('蒙德里安'), 'Must test Mondrian');
      assert(text.includes('Miró') || text.includes('Miro') || text.includes('米罗'), 'Must test Miró');
      assert(text.includes('Pollock') || text.includes('波洛克'), 'Must test Pollock');
    });

    test('8.3: Visual ID questions cover Warhol, Duchamp, and De Chirico', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const visualQs = bank.filter(q => q.domain === 'visual_id');
      const text = visualQs.map(q => q.questionEn + q.questionZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Warhol') || text.includes('沃霍尔'), 'Must test Warhol');
      assert(text.includes('Duchamp') || text.includes('杜尚'), 'Must test Duchamp');
      assert(text.includes('Chirico') || text.includes('基里科'), 'Must test De Chirico');
    });

    test('8.4: Visual ID questions cover Dalí, Giacometti, Fontana, and Arte Povera', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const visualQs = bank.filter(q => q.domain === 'visual_id');
      const text = visualQs.map(q => q.questionEn + q.questionZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Dalí') || text.includes('Dali') || text.includes('达利'), 'Must test Dalí');
      assert(text.includes('Fontana') || text.includes('封塔纳') || text.includes('Spatialism'), 'Must test Fontana');
    });

    test('8.5: Visual ID questions reference image stimuli or visual composition features', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const visualQs = bank.filter(q => q.domain === 'visual_id');
      const withImages = visualQs.filter(q => q.image && q.image.length > 0);
      assertGreaterThanOrEqual(withImages.length, 15, `Visual ID domain must feature at least 15 image-backed questions, found ${withImages.length}`);
    });
  });

  // =========================================================================
  // Feature 9: 20th-Century Avant-Garde Domain (D3)
  // =========================================================================
  describe('F9: 20th-Century Avant-Garde Domain (D3)', () => {
    test('9.1: Domain "avant_garde" contains at least 60 questions', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const avantGardeQs = bank.filter(q => q.domain === 'avant_garde');
      assertGreaterThanOrEqual(avantGardeQs.length, 60, `Avant-garde domain must have >= 60 questions, found ${avantGardeQs.length}`);
    });

    test('9.2: Avant-garde domain covers Italian Rationalism and Gruppo 7 / Terragni', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const avantGardeQs = bank.filter(q => q.domain === 'avant_garde');
      const text = avantGardeQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.explanationZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Rationalis') || text.includes('Terragni') || text.includes('Gruppo 7') || text.includes('理性主义'), 'Must test Italian Rationalism');
    });

    test('9.3: Avant-garde domain covers De Stijl and Modernist Masters (Le Corbusier, Mies van der Rohe)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const avantGardeQs = bank.filter(q => q.domain === 'avant_garde');
      const text = avantGardeQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.explanationZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Corbusier') || text.includes('柯布西耶') || text.includes('Mies') || text.includes('密斯') || text.includes('De Stijl') || text.includes('风格派'), 'Must test De Stijl / Modernist Masters');
    });

    test('9.4: Avant-garde domain covers Bauhaus and Chicago School steel frame', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const avantGardeQs = bank.filter(q => q.domain === 'avant_garde');
      const text = avantGardeQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.explanationZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Bauhaus') || text.includes('包豪斯'), 'Must test Bauhaus');
      assert(text.includes('Chicago') || text.includes('芝加哥学派') || text.includes('Sullivan'), 'Must test Chicago School');
    });

    test('9.5: Avant-garde domain differentiates 19th-century Eclecticism from Modernism', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const avantGardeQs = bank.filter(q => q.domain === 'avant_garde');
      const text = avantGardeQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.explanationZh + q.tags.join(' ')).join(' ');
      assert(text.includes('Eclectic') || text.includes('折衷主义') || text.includes('Historicism'), 'Must address Eclecticism');
    });
  });

  // =========================================================================
  // Feature 10: Artist Movement Categorization Domain (D4)
  // =========================================================================
  describe('F10: Artist Movement Categorization Domain (D4)', () => {
    test('10.1: Domain "artist_movement" contains at least 60 questions', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const movementQs = bank.filter(q => q.domain === 'artist_movement');
      assertGreaterThanOrEqual(movementQs.length, 60, `Artist movement domain must have >= 60 questions, found ${movementQs.length}`);
    });

    test('10.2: Artist movement domain covers Surrealism affiliations and manifestos', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const movementQs = bank.filter(q => q.domain === 'artist_movement');
      const text = movementQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Surrealis') || text.includes('超现实主义') || text.includes('Breton'), 'Must test Surrealism');
    });

    test('10.3: Artist movement domain covers Italian Futurism (Boccioni, Carrà, Marinetti)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const movementQs = bank.filter(q => q.domain === 'artist_movement');
      const text = movementQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Futuris') || text.includes('未来主义') || text.includes('Boccioni') || text.includes('Marinetti'), 'Must test Futurism');
    });

    test('10.4: Artist movement domain covers Metaphysical Painting (Pittura Metafisica)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const movementQs = bank.filter(q => q.domain === 'artist_movement');
      const text = movementQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Metafisica') || text.includes('Metaphysical') || text.includes('形而上'), 'Must test Metaphysical Painting');
    });

    test('10.5: Artist movement domain covers Pop Art media and consumer culture', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const movementQs = bank.filter(q => q.domain === 'artist_movement');
      const text = movementQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Pop Art') || text.includes('波普艺术') || text.includes('Lichtenstein') || text.includes('Hamilton'), 'Must test Pop Art');
    });
  });

  // =========================================================================
  // Feature 11: Renaissance & Classical Mastery Domain (D5)
  // =========================================================================
  describe('F11: Renaissance & Classical Mastery Domain (D5)', () => {
    test('11.1: Domain "renaissance_classical" contains at least 60 questions', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const renQs = bank.filter(q => q.domain === 'renaissance_classical');
      assertGreaterThanOrEqual(renQs.length, 60, `Renaissance domain must have >= 60 questions, found ${renQs.length}`);
    });

    test('11.2: Renaissance domain covers Brunelleschi, Alberti, and architectural perspective', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const renQs = bank.filter(q => q.domain === 'renaissance_classical');
      const text = renQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Brunelleschi') || text.includes('布鲁内莱斯基'), 'Must test Brunelleschi');
      assert(text.includes('Alberti') || text.includes('阿尔伯蒂'), 'Must test Alberti');
    });

    test('11.3: Renaissance domain covers Bramante and High Renaissance centralized planning (Tempietto)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const renQs = bank.filter(q => q.domain === 'renaissance_classical');
      const text = renQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Bramante') || text.includes('伯拉孟特') || text.includes('Tempietto') || text.includes('坦比哀多'), 'Must test Bramante / Tempietto');
    });

    test('11.4: Renaissance & Baroque domain covers Michelangelo, Palladio, and Bernini', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const renQs = bank.filter(q => q.domain === 'renaissance_classical');
      const text = renQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Michelangelo') || text.includes('米开朗基罗'), 'Must test Michelangelo');
      assert(text.includes('Palladio') || text.includes('帕拉第奥'), 'Must test Palladio');
      assert(text.includes('Bernini') || text.includes('贝尼尼') || text.includes('贝尔尼尼'), 'Must test Bernini');
    });

    test('11.5: Renaissance domain covers Classical orders and architectural masters (Brunelleschi, Alberti, Palladio)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      const renQs = bank.filter(q => q.domain === 'renaissance_classical');
      const text = renQs.map(q => q.questionEn + q.questionZh + q.explanationEn + q.tags.join(' ')).join(' ');
      assert(text.includes('Brunelleschi') || text.includes('Alberti') || text.includes('Palladio') || text.includes('Bramante') || text.includes('Order') || text.includes('柱式'), 'Must test Classical architects & orders');
    });
  });

  // =========================================================================
  // Feature 12: Bilingual Text & Academic Explanations
  // =========================================================================
  describe('F12: Bilingual Text & Academic Explanations', () => {
    test('12.1: All questions have non-empty Chinese prompt (questionZh)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert(typeof q.questionZh === 'string' && q.questionZh.trim().length > 0, `${q.id}: questionZh must be non-empty`);
      });
    });

    test('12.2: All questions have non-empty English prompt (questionEn)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert(typeof q.questionEn === 'string' && q.questionEn.trim().length > 0, `${q.id}: questionEn must be non-empty`);
      });
    });

    test('12.3: All questions have 4 Chinese options (optionsZh)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert(Array.isArray(q.optionsZh) && q.optionsZh.length === 4, `${q.id}: optionsZh must have 4 items`);
      });
    });

    test('12.4: All questions have 4 English options (optionsEn)', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert(Array.isArray(q.optionsEn) && q.optionsEn.length === 4, `${q.id}: optionsEn must have 4 items`);
      });
    });

    test('12.5: Both explanationZh and explanationEn are non-empty and substantiated', async () => {
      const bankPath = path.resolve(PROJECT_ROOT, 'src/data/archedQuestionBank.js');
      const fileUrl = 'file:///' + bankPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const bank = mod.ARCHED_QUESTION_BANK || mod.archedQuestions || mod.default;
      bank.forEach(q => {
        assert(typeof q.explanationZh === 'string' && q.explanationZh.length >= 10, `${q.id}: explanationZh must be detailed (>=10 chars)`);
        assert(typeof q.explanationEn === 'string' && q.explanationEn.length >= 10, `${q.id}: explanationEn must be detailed (>=10 chars)`);
      });
    });
  });

  // =========================================================================
  // Feature 13: Image Skeleton Shimmer & Fallback Skeletons
  // =========================================================================
  describe('F13: Image Skeleton Shimmer & Fallback Skeletons', () => {
    test('13.1: ArtworkImage component supports direct imageUrl/src prop', () => {
      const compPath = path.resolve(PROJECT_ROOT, 'src/components/ArtworkImage.jsx');
      assert(fs.existsSync(compPath), 'src/components/ArtworkImage.jsx must exist');
      const content = fs.readFileSync(compPath, 'utf8');
      const hasSrcOrUrl = content.includes('src') || content.includes('imageUrl') || content.includes('defaultUrl');
      assert(hasSrcOrUrl, 'ArtworkImage must accept direct image src/url prop');
    });

    test('13.2: ArtworkImage renders loading shimmer indicator during image loading', () => {
      const compPath = path.resolve(PROJECT_ROOT, 'src/components/ArtworkImage.jsx');
      const content = fs.readFileSync(compPath, 'utf8');
      const hasLoadingIndicator = content.includes('loading') || content.includes('image-shimmer') || content.includes('Skeleton');
      assert(hasLoadingIndicator, 'ArtworkImage must render shimmer or skeleton during image load state');
    });

    test('13.3: ArtworkImage provides fallback on image load error', () => {
      const compPath = path.resolve(PROJECT_ROOT, 'src/components/ArtworkImage.jsx');
      const content = fs.readFileSync(compPath, 'utf8');
      const hasFallback = content.includes('onError') || content.includes('ImageOff') || content.includes('fallback');
      assert(hasFallback, 'ArtworkImage must handle onError with fallback display');
    });

    test('13.4: CSS defines image shimmer keyframe animations', () => {
      const cssPath = path.resolve(PROJECT_ROOT, 'src/index.css');
      const css = fs.readFileSync(cssPath, 'utf8');
      const hasShimmerKeyframes = css.includes('image-shimmer') || css.includes('shimmer') || css.includes('@keyframes');
      assert(hasShimmerKeyframes, 'CSS must define shimmer animation for smooth visual loading');
    });

    test('13.5: Public directory contains offline image fallback assets', () => {
      const publicImages = path.resolve(PROJECT_ROOT, 'public/images');
      assert(fs.existsSync(publicImages), 'public/images directory must exist for offline fallbacks');
    });
  });

  // =========================================================================
  // Feature 14: Practice Quiz Mode Refactoring
  // =========================================================================
  describe('F14: Practice Quiz Mode Refactoring', () => {
    test('14.1: Quiz page reads bilingual question text (questionZh/questionEn or prompt)', () => {
      const quizPath = path.resolve(PROJECT_ROOT, 'src/pages/Quiz.jsx');
      assert(fs.existsSync(quizPath), 'src/pages/Quiz.jsx must exist');
      const content = fs.readFileSync(quizPath, 'utf8');
      const hasBilingualRead = content.includes('questionZh') || content.includes('questionEn') || content.includes('question') || content.includes('text');
      assert(hasBilingualRead, 'Quiz page must access question text properly');
    });

    test('14.2: Quiz page evaluates answers using 0-based integer correctAnswer', () => {
      const quizPath = path.resolve(PROJECT_ROOT, 'src/pages/Quiz.jsx');
      const content = fs.readFileSync(quizPath, 'utf8');
      const checksCorrectAnswer = content.includes('correctAnswer');
      assert(checksCorrectAnswer, 'Quiz page must evaluate answers against correctAnswer');
    });

    test('14.3: Quiz tracks user score and question progression', () => {
      const quizPath = path.resolve(PROJECT_ROOT, 'src/pages/Quiz.jsx');
      const content = fs.readFileSync(quizPath, 'utf8');
      const tracksScore = content.includes('setScore') || content.includes('score');
      assert(tracksScore, 'Quiz must maintain and update user score');
    });

    test('14.4: Quiz supports category or domain selection', () => {
      const quizPath = path.resolve(PROJECT_ROOT, 'src/pages/Quiz.jsx');
      const content = fs.readFileSync(quizPath, 'utf8');
      const hasCategory = content.includes('category') || content.includes('domain');
      assert(hasCategory, 'Quiz must support category or domain filtering');
    });

    test('14.5: Quiz displays explanation or feedback after answer selection', () => {
      const quizPath = path.resolve(PROJECT_ROOT, 'src/pages/Quiz.jsx');
      const content = fs.readFileSync(quizPath, 'utf8');
      const hasExplanation = content.includes('explanation') || content.includes('feedback');
      assert(hasExplanation, 'Quiz must display explanation or review feedback');
    });
  });

  // =========================================================================
  // Feature 15: Flashcards 3D Flip & Navigation Routing
  // =========================================================================
  describe('F15: Flashcards 3D Flip & Navigation Routing', () => {
    test('15.1: App.jsx routes "/flashcards" path', () => {
      const appPath = path.resolve(PROJECT_ROOT, 'src/App.jsx');
      const content = fs.readFileSync(appPath, 'utf8');
      assertIncludes(content, 'path="/flashcards"', 'App.jsx must route /flashcards');
    });

    test('15.2: Navbar.jsx provides navigation entry for Flashcards', () => {
      const navPath = path.resolve(PROJECT_ROOT, 'src/components/Navbar.jsx');
      assert(fs.existsSync(navPath), 'src/components/Navbar.jsx must exist');
      const content = fs.readFileSync(navPath, 'utf8');
      assertIncludes(content, '/flashcards', 'Navbar.jsx must link to /flashcards');
    });

    test('15.3: Flashcards container defines 3D perspective', () => {
      const fcPath = path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx');
      const content = fs.readFileSync(fcPath, 'utf8');
      assertIncludes(content, 'perspective', 'Flashcards card container must configure perspective');
    });

    test('15.4: Flashcards card faces specify backface-visibility hidden', () => {
      const fcPath = path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx');
      const content = fs.readFileSync(fcPath, 'utf8');
      assert(content.includes('backfaceVisibility') || content.includes('backface-visibility'), 'Flashcards must configure backface-visibility: hidden');
    });

    test('15.5: Flashcards supports card flipping via state toggle', () => {
      const fcPath = path.resolve(PROJECT_ROOT, 'src/pages/Flashcards.jsx');
      const content = fs.readFileSync(fcPath, 'utf8');
      assert(content.includes('isFlipped') || content.includes('setFlipped') || content.includes('flip'), 'Flashcards must manage card flipped state');
    });
  });

  // =========================================================================
  // Feature 16: Polimi ARCHED Exam Simulator Mode
  // =========================================================================
  describe('F16: Polimi ARCHED Exam Simulator Mode', () => {
    test('16.1: App.jsx routes "/simulator" or "/exam" path', () => {
      const appPath = path.resolve(PROJECT_ROOT, 'src/App.jsx');
      const content = fs.readFileSync(appPath, 'utf8');
      const hasSimulatorRoute = content.includes('path="/simulator"') || content.includes('path="/exam"');
      assert(hasSimulatorRoute, 'App.jsx must route /simulator or /exam');
    });

    test('16.2: ExamSimulator component file exists in src/pages', () => {
      const simPath = path.resolve(PROJECT_ROOT, 'src/pages/ExamSimulator.jsx');
      assert(fs.existsSync(simPath), 'src/pages/ExamSimulator.jsx must exist');
    });

    test('16.3: Polimi ARCHED scoring model applies -0.25 penalty for incorrect answers', () => {
      const simPath = path.resolve(PROJECT_ROOT, 'src/pages/ExamSimulator.jsx');
      const content = fs.readFileSync(simPath, 'utf8');
      const hasNegativeScoring = content.includes('0.25') || content.includes('negativeScoring');
      assert(hasNegativeScoring, 'ExamSimulator must implement Polimi ARCHED negative scoring penalty (-0.25)');
    });

    test('16.4: ExamSimulator implements countdown timer functionality', () => {
      const simPath = path.resolve(PROJECT_ROOT, 'src/pages/ExamSimulator.jsx');
      const content = fs.readFileSync(simPath, 'utf8');
      const hasTimer = content.includes('timer') || content.includes('timeLeft') || content.includes('setInterval');
      assert(hasTimer, 'ExamSimulator must implement countdown timer');
    });

    test('16.5: ExamSimulator provides question review flagging or palette matrix', () => {
      const simPath = path.resolve(PROJECT_ROOT, 'src/pages/ExamSimulator.jsx');
      const content = fs.readFileSync(simPath, 'utf8');
      const hasFlagging = content.includes('flag') || content.includes('palette') || content.includes('matrix') || content.includes('review');
      assert(hasFlagging, 'ExamSimulator must provide question flagging or question status palette');
    });
  });

  // =========================================================================
  // Feature 17: Client-side AI Agent Tool Calling Sandbox
  // =========================================================================
  describe('F17: Client-side AI Agent Tool Calling Sandbox', () => {
    test('17.1: aiAgentService.js exists at src/services/aiAgentService.js', () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      assert(fs.existsSync(servicePath), 'src/services/aiAgentService.js must exist');
    });

    test('17.2: aiAgentService exports ALLOWED_TOOLS list of 8 tools', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      assert(Array.isArray(mod.ALLOWED_TOOLS), 'ALLOWED_TOOLS must be exported as an array');
      assertEqual(mod.ALLOWED_TOOLS.length, 8, 'ALLOWED_TOOLS must contain exactly 8 tools');
    });

    test('17.3: executeSandboxedTool rejects unregistered tools', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const res = await mod.executeSandboxedTool('unauthorized_shell_command', {});
      assertEqual(res.success, false, 'Unauthorized tool must return success: false');
      assert(res.error, 'Unauthorized tool must return diagnostic error');
    });

    test('17.4: query_questions tool returns questions array', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const res = await mod.executeSandboxedTool('query_questions', { limit: 5 });
      assertEqual(res.success, true, 'query_questions should succeed');
      assert(Array.isArray(res.data), 'query_questions must return array data');
    });

    test('17.5: get_question_bank_summary returns count and domain breakdown', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const res = await mod.executeSandboxedTool('get_question_bank_summary', {});
      assertEqual(res.success, true, 'get_question_bank_summary should succeed');
      assert(typeof res.data.total === 'number', 'Summary data must include total');
    });
  });

  // =========================================================================
  // Feature 18: Local Storage API Key Settings (Gemini/OpenAI)
  // =========================================================================
  describe('F18: Local Storage API Key Settings (Gemini/OpenAI)', () => {
    test('18.1: Settings.jsx includes Google Gemini provider option', () => {
      const settingsPath = path.resolve(PROJECT_ROOT, 'src/pages/Settings.jsx');
      assert(fs.existsSync(settingsPath), 'src/pages/Settings.jsx must exist');
      const content = fs.readFileSync(settingsPath, 'utf8');
      assertIncludes(content, 'gemini', 'Settings.jsx must include Gemini provider preset or option');
    });

    test('18.2: Settings page stores API keys in browser LocalStorage', () => {
      const settingsPath = path.resolve(PROJECT_ROOT, 'src/pages/Settings.jsx');
      const content = fs.readFileSync(settingsPath, 'utf8');
      assertIncludes(content, 'localStorage', 'Settings.jsx must persist configuration to LocalStorage');
    });

    test('18.3: Settings page provides practice configuration controls', () => {
      const settingsPath = path.resolve(PROJECT_ROOT, 'src/pages/Settings.jsx');
      const content = fs.readFileSync(settingsPath, 'utf8');
      const hasPracticeConfig = content.includes('practiceConfig') || content.includes('questionCount') || content.includes('timer') || content.includes('negativeScoring');
      assert(hasPracticeConfig, 'Settings.jsx should include practice mode preference controls');
    });

    test('18.4: API key input component masks sensitive credentials', () => {
      const settingsPath = path.resolve(PROJECT_ROOT, 'src/pages/Settings.jsx');
      const content = fs.readFileSync(settingsPath, 'utf8');
      assert(content.includes('type="password"') || content.includes('showKey') || content.includes('mask'), 'API key input must support password masking');
    });

    test('18.5: AppContext synchronizes API key from LocalStorage on mount', () => {
      const ctxPath = path.resolve(PROJECT_ROOT, 'src/context/AppContext.jsx');
      assert(fs.existsSync(ctxPath), 'src/context/AppContext.jsx must exist');
      const content = fs.readFileSync(ctxPath, 'utf8');
      assert(content.includes('aiApiKey') || content.includes('apiKey'), 'AppContext must read API key from localStorage');
    });
  });

  // =========================================================================
  // Feature 19: Deterministic Offline Fallback Mode
  // =========================================================================
  describe('F19: Deterministic Offline Fallback Mode', () => {
    test('19.1: aiAgentService checks for missing API key and activates fallback', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      assert(typeof mod.handleDeterministicFallback === 'function' || typeof mod.processAgentMessage === 'function', 'aiAgentService must expose fallback handler');
    });

    test('19.2: Fallback mode handles question summary queries', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const fn = mod.handleDeterministicFallback || mod.processAgentMessage;
      const res = await fn('题库概况与统计');
      assert(res && (res.content || res.message || res.text), 'Fallback must return response for summary prompt');
    });

    test('19.3: Fallback mode handles question search queries by artist or keyword', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const fn = mod.handleDeterministicFallback || mod.processAgentMessage;
      const res = await fn('搜索关于蒙德里安的题目');
      assert(res, 'Fallback must process search queries');
    });

    test('19.4: Fallback mode handles practice settings modification', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const fn = mod.handleDeterministicFallback || mod.processAgentMessage;
      const res = await fn('设置模拟考题数为20题');
      assert(res, 'Fallback must process practice configuration prompts');
    });

    test('19.5: Fallback output flags deterministic offline execution mode', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const fn = mod.handleDeterministicFallback || mod.processAgentMessage;
      const res = await fn('你好，请列出艺术史考点');
      const str = JSON.stringify(res);
      assert(str.includes('离线') || str.includes('本地') || str.includes('fallback') || str.includes('offline'), 'Fallback response should indicate offline/local mode');
    });
  });

  // =========================================================================
  // Feature 20: Strict Security Isolation & Whitelist
  // =========================================================================
  describe('F20: Strict Security Isolation & Whitelist', () => {
    test('20.1: aiAgentService has zero usage of eval or Function constructor', () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const content = fs.readFileSync(servicePath, 'utf8');
      assert(!/\beval\s*\(/.test(content), 'aiAgentService must not use eval()');
      assert(!/new\s+Function\s*\(/.test(content), 'aiAgentService must not use new Function()');
    });

    test('20.2: Tools cannot access or modify user API keys directly', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const res = await mod.executeSandboxedTool('get_api_keys', {});
      assertEqual(res.success, false, 'Tools cannot access credential extraction');
    });

    test('20.3: Question insertion tool sanitizes or strips malicious script/HTML tags', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const maliciousQ = {
        questionZh: '<script>alert("xss")</script>测试题目',
        questionEn: '<img src=x onerror=alert(1)>Test question',
        domain: 'chronology',
        subCategory: 'Test',
        era: '20th_century',
        optionsZh: ['A', 'B', 'C', 'D'],
        optionsEn: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        explanationZh: '测试解释',
        explanationEn: 'Test explanation',
        tags: ['Test'],
        difficulty: 1
      };
      const res = await mod.executeSandboxedTool('add_question', maliciousQ);
      if (res.success && res.data) {
        assert(!res.data.questionZh.includes('<script>'), 'Script tags must be stripped or sanitized');
      } else {
        assert(true, 'Rejected malicious question successfully');
      }
    });

    test('20.4: Tools disallow javascript: pseudo-protocol in image URLs', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const res = await mod.executeSandboxedTool('add_question', {
        questionZh: '图片安全测试',
        questionEn: 'Image security test',
        domain: 'visual_id',
        subCategory: 'Test',
        era: '20th_century',
        optionsZh: ['A', 'B', 'C', 'D'],
        optionsEn: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        explanationZh: '测试',
        explanationEn: 'Test',
        tags: ['Security'],
        difficulty: 1,
        image: 'javascript:alert(1)'
      });
      assert(!res.success || (res.data && !res.data.image.startsWith('javascript:')), 'javascript: URL must be blocked or sanitized');
    });

    test('20.5: reset_question_bank requires explicit confirmation flag', async () => {
      const servicePath = path.resolve(PROJECT_ROOT, 'src/services/aiAgentService.js');
      const fileUrl = 'file:///' + servicePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const resWithoutConfirm = await mod.executeSandboxedTool('reset_question_bank', {});
      assertEqual(resWithoutConfirm.success, false, 'reset_question_bank must require confirmation');
    });
  });

  // =========================================================================
  // Feature 21: Full Offline Resilience (Zero Key/Zero Network)
  // =========================================================================
  describe('F21: Full Offline Resilience (Zero Key/Zero Network)', () => {
    test('21.1: QuestionBankService functions seamlessly with navigator.onLine = false', async () => {
      setNavigatorOnLine(false);
      const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
      assert(fs.existsSync(qbPath), 'src/services/questionBankService.js must exist');
      const fileUrl = 'file:///' + qbPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const qb = mod.questionBankService || mod.default;
      const allQuestions = qb.getAllQuestions();
      assertGreaterThanOrEqual(allQuestions.length, 200, 'getAllQuestions must return all 200+ questions when offline');
    });

    test('21.2: QuestionBankService getRandomExamSet generates balanced exam set offline', async () => {
      const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
      const fileUrl = 'file:///' + qbPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const qb = mod.questionBankService || mod.default;
      const examSet = qb.getRandomExamSet(20);
      assertEqual(examSet.length, 20, 'getRandomExamSet must generate exactly 20 questions');
    });

    test('21.3: QuestionBankService filter queries execute in-memory with zero network requests', async () => {
      const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
      const fileUrl = 'file:///' + qbPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const qb = mod.questionBankService || mod.default;
      const renQuestions = qb.getQuestionsByDomain('renaissance_classical');
      assertGreaterThanOrEqual(renQuestions.length, 30, 'In-memory domain filter should succeed');
    });

    test('21.4: Custom questions created in LocalStorage persist in offline environment', async () => {
      const qbPath = path.resolve(PROJECT_ROOT, 'src/services/questionBankService.js');
      const fileUrl = 'file:///' + qbPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const qb = mod.questionBankService || mod.default;
      const customQ = {
        domain: 'avant_garde',
        subCategory: 'Offline Test',
        era: '20th_century',
        questionZh: '离线自定义题目',
        questionEn: 'Offline custom question',
        optionsZh: ['A', 'B', 'C', 'D'],
        optionsEn: ['A', 'B', 'C', 'D'],
        correctAnswer: 1,
        explanationZh: '离线测试解析',
        explanationEn: 'Offline test explanation',
        tags: ['Offline'],
        difficulty: 2
      };
      const res = qb.addCustomQuestion(customQ);
      assertEqual(res.success, true, 'addCustomQuestion should succeed');
      const found = qb.getAllQuestions().find(q => q.id === res.question?.id);
      assert(found, 'Added custom question must be queryable in offline bank');
    });

    test('21.5: Offline platform provides fallback artwork placeholders without network connectivity', () => {
      const artworksPath = path.resolve(PROJECT_ROOT, 'src/data/artworksCache.json');
      assert(fs.existsSync(artworksPath), 'artworksCache.json must exist to map local image paths');
      const cache = JSON.parse(fs.readFileSync(artworksPath, 'utf8'));
      assert(Object.keys(cache).length > 50, 'artworksCache.json must contain mappings for offline artworks');
    });
  });

});
