# Project: Art Learning Platform Modernization & ARCHED Exam Engine

## Architecture

### 1. High-Level Architecture Overview
The Art Learning Platform is an offline-first single-page web application built with React 19, Vite 8, Framer Motion, and Three.js. It compiles both to a standard static web distribution and an inlined standalone portable HTML file (`art_learning_platform_portable.html`) for 100% air-gapped usage.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              Web Client                                │
│  ┌───────────────────────┐  ┌──────────────────┐  ┌─────────────────┐  │
│  │    Practice Hub       │  │ Knowledge Base   │  │ Embedded Agent  │  │
│  │ (Quiz/Flashcards/Exam)│  │ (Timeline/Detail)│  │ (Floating AI)   │  │
│  └───────────┬───────────┘  └────────┬─────────┘  └────────┬────────┘  │
│              │                       │                     │           │
│              ▼                       ▼                     ▼           │
│  ┌─────────────────────────────────────────────┐  ┌─────────────────┐  │
│  │         QuestionBankService                 │  │ Tool Calling &  │  │
│  │  - Queries, Filters, Difficulty & Weights   │  │ Security Sandbox│  │
│  └───────────┬─────────────────────────────────┘  └────────┬────────┘  │
│              │                                             │           │
│              ├──────────────────────┐                      │           │
│              ▼                      ▼                      ▼           │
│  ┌──────────────────────┐  ┌──────────────────┐  ┌─────────────────┐  │
│  │ Built-in ARCHED Bank │  │ LocalStorage     │  │ Deterministic   │  │
│  │ (210 items, 5 domains│  │ Custom Questions │  │ Fallback Mode   │  │
│  │  immutable ESM)      │  │ & Config Stores  │  │ (Keyless/Offline)│  │
│  └──────────────────────┘  └──────────────────┘  └─────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 2. Module & Package Boundaries
- **UI Components & Pages**:
  - `src/pages/Quiz.jsx`: Rapid practice quiz with category filters, difficulty selection, immediate feedback, and review.
  - `src/pages/Flashcards.jsx`: 3D perspective flashcard study with touch swipe and flip animations.
  - `src/pages/ExamSimulator.jsx`: Authentic Polimi ARCHED exam environment with 30-min countdown, question palette, review flagging, negative scoring (`-0.25`), and diagnostic results.
  - `src/components/ArtworkImage.jsx`: Unified image component supporting both local cache and direct Wikimedia URLs with skeleton shimmer and fallback SVGs.
  - `src/components/MouseSpotlight.jsx`: Optimized ambient lighting effect without layout thrashing.
  - `src/components/AIFloatingAssistant.jsx`: Interactive client-side agent chat with tool badges, action cards, and confirmation dialogs.
  - `src/pages/Settings.jsx`: User configuration for AI providers (Gemini, OpenAI, Groq, DeepSeek, custom endpoints) and practice defaults stored in LocalStorage.
- **Core Services & State**:
  - `src/data/archedQuestionBank.js`: Canonical dataset of 210 authentic ARCHED art & architectural history questions spanning 5 domains.
  - `src/services/questionBankService.js`: Unified data layer merging built-in and custom questions, handling queries, random sets, and CRUD operations.
  - `src/services/aiAgentService.js`: Agent runtime providing tool calling, multi-provider API calls (Gemini/OpenAI), deterministic local rule-based fallback, and security sandbox validation.
- **Build & Packaging**:
  - `scripts/buildSingleFileHtml.js`: Inlines all assets into portable single-file offline HTML.

---

## Feature Inventory

Every requirement and survey finding is cataloged and assigned to a milestone:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | MouseSpotlight Layout Thrashing Elimination | Remove `getBoundingClientRect()` from `mousemove`, throttle rAF, disable on touch devices | M1 | Survey (Explorer 1) |
| 2 | CSS Blanket Transition & GPU Overdraw Optimization | Scoped transitions, tuned backdrop blurs, optimized radial gradient layers | M1 | Survey (Explorer 1) |
| 3 | ArtworkImage Direct URL & Offline Fallback | Support direct `src`/`imageUrl`, loading shimmer skeleton, and local SVG fallback | M1 | Survey (Explorers 1, 2) |
| 4 | Canonical ARCHED 200+ Question Bank | 210 bilingual questions across 5 syllabus domains with explanations and tags | M2 | R2 / Survey (Explorer 2) |
| 5 | QuestionBankService & State Architecture | Unified data layer for querying, filtering, custom question CRUD, and LocalStorage sync | M2 | R2 / Survey (Explorer 2) |
| 6 | Quiz Module Refactoring | Fix `currentQ.text` and `correctAnswer` bug, integrate unified question bank and image stimuli | M2 | R2 / Survey (Explorers 1, 2) |
| 7 | Flashcards Re-integration & Touch Polish | Route `/flashcards` in App.jsx, add to Navbar, fix 3D transform backface, add touch gestures | M2 | R2 / Survey (Explorers 1, 2) |
| 8 | Polimi ARCHED ExamSimulator Implementation | Build `/simulator` with 30-min timer, question matrix, review flags, and Polimi scoring | M2 | R2 / Survey (Explorer 2) |
| 9 | Practice Navigation & Hub | Update Navbar with Practice dropdown/links and unify practice module routing | M2 | R2 / Survey (Explorers 1, 2) |
| 10 | Client-Side AI Tool Calling Engine | 8 whitelisted tools for question bank inspection, querying, addition, and practice config | M3 | R3 / Survey (Explorer 3) |
| 11 | Multi-Provider AI Client Integration | Browser-based Gemini (REST v1beta with tools), OpenAI, Groq, DeepSeek, and custom endpoints | M3 | R3 / Survey (Explorer 3) |
| 12 | Local Deterministic Fallback Mode | Zero-network offline intent matcher and tool executor when keyless or offline | M3 | R3 / Survey (Explorer 3) |
| 13 | Strict AI Security Sandbox & Isolation | Schema validator, namespace restriction (`arched_*`), zero access to code/eval/DOM | M3 | R3 / Survey (Explorer 3) |
| 14 | Agent UI with Tool Call Badges | Enhanced chat assistant displaying interactive tool invocation cards and parameter previews | M3 | R3 / Survey (Explorer 3) |
| 15 | Browser Settings for AI & Practice | Settings UI supporting Gemini/OpenAI API keys in LocalStorage and practice defaults | M3 | R3 / Survey (Explorer 3) |
| 16 | E2E Testing Suite (Tiers 1-4) | Automated test suite validating schema, performance, practice modes, and agent sandbox | M4 (E2E Track)| R4 / Dual-Track |
| 17 | Final E2E Pass & Adversarial Hardening (Tier 5) | 100% E2E test pass + Challenger adversarial test case generation and bug fixes | M5 | R4 / Project Pattern |
| 18 | Forensic Integrity Audit & Acceptance Verification | Systematic verification of zero hardcoding, zero dummy facades, and clean production build | M5 | R4 / Audit Gating |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Web Performance Optimization | MouseSpotlight refactoring, CSS transition & blur tuning, ArtworkImage direct URL & skeleton | None | DONE |
| M2 | ARCHED 200+ Core Question Bank & Practice Modes | `archedQuestionBank.js` (210 items), `questionBankService.js`, Quiz refactor, Flashcards route & gestures, ExamSimulator build, Navbar integration | M1 | DONE |
| M3 | Safe Embedded AI Agent Platform | `aiAgentService.js`, 8-tool whitelist, Gemini & OpenAI client, Deterministic Fallback, security sandbox, AI chat UI & Settings UI | M2 | DONE |
| M4 | Dual-Track E2E Testing Track | Test harness, automated schema validation, Tiers 1-4 test suites, `TEST_READY.md` | Started in parallel | DONE |
| M5 | Final Milestone: E2E Pass, Hardening & Audit | Phase 1 (100% E2E pass), Phase 2 (Tier 5 adversarial hardening), Forensic Integrity Audit veto check | M1, M2, M3, M4 | DONE |

---

## Interface Contracts

### 1. Question Bank Contract (`ArchedQuestion`)
```typescript
export interface ArchedQuestion {
  id: string; // e.g. "arched_001"
  domain: "chronology" | "visual_id" | "avant_garde" | "artist_movement" | "renaissance_classical";
  subCategory: string; // e.g. "Neoclassicism to Pop Art", "Italian Rationalism"
  era: string; // e.g. "19th_century", "20th_century", "renaissance"
  questionZh: string;
  questionEn: string;
  optionsZh: string[]; // 4 options
  optionsEn: string[]; // 4 options
  correctAnswer: number; // 0..3
  explanationZh: string;
  explanationEn: string;
  image?: string; // Wikimedia Commons URL
  fallbackImage?: string; // Local public/images/ path
  tags: string[];
  difficulty: 1 | 2 | 3;
}
```

### 2. Question Bank Service Contract (`questionBankService.js`)
```javascript
export const questionBankService = {
  // Read operations
  getAllQuestions(): ArchedQuestion[],
  getQuestionsByDomain(domain: string): ArchedQuestion[],
  getQuestionsByDifficulty(diff: number): ArchedQuestion[],
  queryQuestions(filters: { domain?: string, keyword?: string, difficulty?: number, tag?: string, limit?: number }): ArchedQuestion[],
  getRandomExamSet(count: number, options?: { domainWeights?: Record<string, number>, difficulty?: number }): ArchedQuestion[],
  getSummary(): { total: number, byDomain: Record<string, number>, customCount: number, tags: string[] },
  
  // Custom question write operations (LocalStorage: arched_custom_questions)
  addCustomQuestion(questionData: Partial<ArchedQuestion>): { success: boolean, question?: ArchedQuestion, error?: string },
  updateQuestion(id: string, updates: Partial<ArchedQuestion>): { success: boolean, question?: ArchedQuestion, error?: string },
  deleteQuestion(id: string): { success: boolean, error?: string },
  resetToFactoryDefaults(): { success: boolean, count: number }
};
```

### 3. AI Agent Tool Registry & Sandbox Contract (`aiAgentService.js`)
```javascript
export const ALLOWED_TOOLS = [
  'get_question_bank_summary',
  'query_questions',
  'add_question',
  'update_question',
  'delete_question',
  'generate_questions',
  'configure_practice_settings',
  'reset_question_bank'
];

export const executeSandboxedTool = async (toolName: string, args: Record<string, any>): Promise<{ success: boolean, data?: any, error?: string }>;
```

### 4. Practice Configuration Contract (`arched_practice_config`)
```typescript
export interface PracticeConfig {
  mode: "quiz" | "flashcards" | "exam_simulator";
  quizQuestionCount: number; // default 10
  examQuestionCount: number; // default 20
  examTimeLimitMinutes: number; // default 30
  negativeScoring: boolean; // default true (-0.25)
  categoryFilter?: string;
  difficultyFilter?: number;
  shuffleOptions: boolean;
  immediateFeedback: boolean;
}
```

---

## Code Layout

```
src/
├── components/
│   ├── AIFloatingAssistant.jsx       # Embedded agent UI with tool calling badges
│   ├── ArtworkImage.jsx              # Skeleton shimmer & direct URL artwork loader
│   ├── MouseSpotlight.jsx            # Optimized, non-thrashing ambient lighting
│   └── Navbar.jsx                    # Navigation header with Practice hub
├── context/
│   └── AppContext.jsx                # Global theme, language, and progress state
├── data/
│   ├── archedQuestionBank.js         # Canonical 210-question ARCHED question bank
│   ├── artData.js                    # Core artist & movement knowledge base
│   └── artworksCache.json            # Local image mappings
├── pages/
│   ├── ExamSimulator.jsx             # Polimi ARCHED timed exam simulator
│   ├── Flashcards.jsx                # Re-integrated 3D flashcard study module
│   ├── Quiz.jsx                      # Refactored rapid quiz practice module
│   └── Settings.jsx                  # Multi-provider AI & practice settings
├── services/
│   ├── aiAgentService.js             # Client-side agent runtime, tools & sandbox
│   ├── aiService.js                  # Existing prompt completion compatibility
│   └── questionBankService.js        # Data service for question bank queries & mutations
scripts/
├── buildSingleFileHtml.js            # Standalone single-file HTML inliner
└── verify_arched_question_bank.mjs    # Automated schema validation test script
tests/
└── e2e/                              # Comprehensive E2E test suites (Tiers 1-4)
```
