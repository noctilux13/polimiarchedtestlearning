---
name: executive-report-generator
description: >-
  Generates executive-level business reports, technical evaluations, market summaries, and whitepapers.
  Produces beautifully formatted Markdown, printable HTML with `@media print` styles, and publication-ready
  documents. Activate when the user asks to write a report, generate an executive summary, draft a whitepaper,
  or create an industry briefing.
---

# Executive Report Generator Skill

This skill formats, structures, and polishes professional research reports, technical evaluations, executive summaries, and industry whitepapers.

## Core Structure of an Executive Report

1. **Header & Metadata**: Title, Subtitle, Author / Team, Date, Version, Classification (Confidential / Public).
2. **Executive Summary (TL;DR)**:
   - High-level context (1-2 sentences).
   - Core finding or breakthrough (1-2 sentences).
   - Strategic recommendation / Bottom line (1-2 bullet points).
3. **Key Findings & Quantitative Data**:
   - Structured tables with metrics, benchmarks, and comparison figures.
   - Bulleted insights highlighting percentage changes, trends, and deviations.
4. **Deep-Dive Analysis**:
   - Organized by logical sections (Technology, Market, Architecture, Risks, Economics).
5. **Strategic Recommendations & Action Plan**:
   - Prioritized action matrix (Immediate P0, Short-term P1, Long-term P2).
   - Expected ROI, resource requirements, and risk mitigations.
6. **Appendix & Citations**: Data sources, methodology notes, and glossary.

---

## Report Formats & Outputs

- **Markdown Document (`.md`)**: GitHub-flavored with callouts (`> [!NOTE]`, `> [!IMPORTANT]`), formatted tables, and clean headers.
- **Printable HTML / PDF Report (`.html`)**: Self-contained single HTML file with print-friendly CSS (page breaks, page numbers, serif typography, refined borders).

For full report templates and CSS print stylesheets, see:
- [Report Templates & Print Stylesheet](./references/report_templates.md)
