# E2E Test Infra: Art Learning Platform

## Test Philosophy
- Opaque-box, requirement-driven, derived directly from `ORIGINAL_REQUEST.md` and user-facing specifications.
- Completely decoupled from internal module implementation details.
- Progressive testability: Verification mechanisms use entry points (build commands, exported single-file HTML, public component interfaces, data schemas, and CLI verification scripts).
- Rigorous 4-Tier Test Case Design + Tier 5 Adversarial Coverage Hardening.

---

## Feature Inventory & Test Mapping

| # | Feature | Requirement Source | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|-------------------|:------:|:------:|:------:|:------:|
| 1 | Sustained 60fps & Non-thrashing Animation | R1 | 5 | 5 | ✓ | ✓ |
| 2 | MouseSpotlight Layout Thrashing Elimination | R1 | 5 | 5 | ✓ | ✓ |
| 3 | Touch & Cursor Responsiveness | R1 | 5 | 5 | ✓ | ✓ |
| 4 | Offline Single-File Build (`npm run build`) | R1, R3 | 5 | 5 | ✓ | ✓ |
| 5 | Clean Bundle with Zero Import Errors | R1 | 5 | 5 | ✓ | ✓ |
| 6 | ARCHED 200+ Core Question Bank Schema | R2 | 5 | 5 | ✓ | ✓ |
| 7 | Chronological Sequencing Domain (D1) | R2 | 5 | 5 | ✓ | ✓ |
| 8 | Visual Artwork & Author ID Domain (D2) | R2 | 5 | 5 | ✓ | ✓ |
| 9 | 20th-Century Avant-Garde Domain (D3) | R2 | 5 | 5 | ✓ | ✓ |
| 10 | Artist Movement Categorization Domain (D4) | R2 | 5 | 5 | ✓ | ✓ |
| 11 | Renaissance & Classical Mastery Domain (D5) | R2 | 5 | 5 | ✓ | ✓ |
| 12 | Bilingual Text & Academic Explanations | R2 | 5 | 5 | ✓ | ✓ |
| 13 | Image Skeleton Shimmer & Fallback Skeletons | R2 | 5 | 5 | ✓ | ✓ |
| 14 | Practice Quiz Mode Refactoring | R2 | 5 | 5 | ✓ | ✓ |
| 15 | Flashcards 3D Flip & Navigation Routing | R2 | 5 | 5 | ✓ | ✓ |
| 16 | Polimi ARCHED Exam Simulator Mode | R2 | 5 | 5 | ✓ | ✓ |
| 17 | Client-side AI Agent Tool Calling Sandbox | R3 | 5 | 5 | ✓ | ✓ |
| 18 | Local Storage API Key Settings (Gemini/OpenAI) | R3 | 5 | 5 | ✓ | ✓ |
| 19 | Deterministic Offline Fallback Mode | R3 | 5 | 5 | ✓ | ✓ |
| 20 | Strict Security Isolation & Whitelist | R3 | 5 | 5 | ✓ | ✓ |
| 21 | Full Offline Resilience (Zero Key/Zero Network)| R3 | 5 | 5 | ✓ | ✓ |

---

## Test Architecture & Directory Layout

```
tests/
├── e2e/
│   ├── test_runner.mjs                 # Unified CLI test runner executing all tiers
│   ├── tier1_feature_coverage.test.mjs # Tier 1: >100 feature isolation tests
│   ├── tier2_boundary_corner.test.mjs  # Tier 2: >100 boundary & edge case tests
│   ├── tier3_pairwise_cross.test.mjs   # Tier 3: Cross-feature interaction tests
│   └── tier4_application_flows.test.mjs# Tier 4: Real-world end-to-end user journeys
scripts/
└── verify_arched_question_bank.mjs      # Strict schema & content validation script
```

---

## Real-World Application Scenarios (Tier 4)

| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Complete Polimi ARCHED Simulated Exam Journey | ExamSimulator (30m countdown, question palette, flagging, scoring -0.25, post-exam review) | High |
| 2 | Multilingual Study Session with 3D Flashcards | Flashcards 3D flip, language toggle (ZH/EN), mastery tagging, touch gestures | Medium |
| 3 | Embedded AI Agent Question Generation & Bank Mutation | AI agent tool calling (`add_question`, `query_questions`), LocalStorage sync, custom question rendering | High |
| 4 | Offline Air-Gapped Single-File Execution | Open `art_learning_platform_portable.html` offline: practice Quiz, image fallbacks, fallback AI agent | High |
| 5 | Agent Practice Parameter Reconfiguration | Agent tool calling (`configure_practice_settings`), updating timer/count, verifying Quiz/Exam reflects new config | Medium |
| 6 | Forensic Question Bank Integrity & Distribution | 210 questions conform to all 5 syllabus domains, 4 options, valid index, bilingual content, valid tags | High |

---

## Coverage Thresholds
- **Tier 1 (Feature Coverage)**: ≥105 test cases (≥5 per feature).
- **Tier 2 (Boundary & Corner Cases)**: ≥105 test cases (≥5 per feature).
- **Tier 3 (Cross-Feature Combinations)**: ≥25 pairwise interaction test cases.
- **Tier 4 (Real-World Application Scenarios)**: ≥6 comprehensive application workflows.
- **Total Minimum**: ≥241 automated test cases.
