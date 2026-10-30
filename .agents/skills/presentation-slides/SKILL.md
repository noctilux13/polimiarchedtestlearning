---
name: presentation-slides
description: >-
  Generates professional presentations and slides using Marp, Slidev, or HTML-based slide engines.
  Formats slides in markdown, applies themes, embeds charts/diagrams, and supports exporting to
  PPTX, PDF, or interactive HTML. Activate when the user asks for slides, presentations, deck outlines,
  Marp slides, or Slidev presentations.
---

# Presentation & Slides Generation Skill

This skill guides the creation of clean, structured, and visually engaging slide presentations using **Marp** (Markdown to Presentation) and **Slidev**.

## Core Presentation Structure

Every slide deck should follow a logical narrative structure:
1. **Title / Cover Slide**: Crisp title, subtitle, presenter, and date.
2. **Context & Problem Statement**: The background, pain points, or question being answered.
3. **Core Solutions / Main Pillars**: 2~4 key pillars or architectural concepts (use 2-column or 3-column layouts).
4. **Deep Dive / Data & Proof**: Comparison tables, code snippets, Mermaid diagrams, or metrics.
5. **Takeaways & Call to Action (CTA)**: Actionable summary and Q&A.

---

## Marp Presentation Guidelines

### 1. Frontmatter Configuration
Every Marp deck starts with standard YAML frontmatter:

```markdown
---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-family: 'Inter', system-ui, sans-serif;
    padding: 40px 60px;
  }
  h1 { color: #111827; }
  h2 { color: #2563eb; }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
---
```

### 2. Standard Slide Patterns

#### A. Title Slide
```markdown
<!-- _class: lead invert -->
# Product Strategy 2026
### Scaling Intelligent Agent Architectures

**Google DeepMind Ecosystem**
*August 17, 2026*
```

#### B. Split Column Slide
```markdown
---
## Key Architectural Pillars

<div class="columns">

<div>

### 01. Context Engine
- Zero-latency hierarchical discovery
- Smart token progressive disclosure
- Built-in deduplication pipeline

</div>

<div>

### 02. Autonomous Tooling
- Safe sandboxed terminal execution
- Type-safe MCP protocol integration
- Visual diff verification

</div>

</div>
```

#### C. Code & Comparison Slide
```markdown
---
## Fast Integration

```typescript
import { AgentRunner } from '@antigravity/sdk';

const runner = new AgentRunner({
  model: 'gemini-pro',
  workspace: './my-project',
});
await runner.execute('Deploy cloud pipeline');
```
```

---

## Exporting & Tools

- **CLI Export to PPTX**:
  `npx @marp-team/marp-cli presentation.md -o presentation.pptx`
- **CLI Export to PDF**:
  `npx @marp-team/marp-cli presentation.md -o presentation.pdf`
- **Live Preview HTML**:
  `npx @marp-team/marp-cli presentation.md --preview`

For additional themes and styling templates, see [Marp Themes Guide](./references/marp_themes.md).
