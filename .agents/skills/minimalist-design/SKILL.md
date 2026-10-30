---
name: minimalist-design
description: >-
  Provides design guidelines, tokens, typography rules, layout patterns, and component structures
  for modern, minimalist, clean, and elegant UI/Web design. Activate when the user asks for
  minimalist UI, clean frontend styling, high-aesthetic web design, or editorial design.
---

# Minimalist & Clean UI Design Skill

This skill guides the design and implementation of clean, minimalist, high-aesthetic user interfaces. It emphasizes deliberate whitespace, strong typography, restrained color palettes, and functional clarity over decorative fluff.

## Core Philosophy

1. **Less, But Better**: Every element on screen must have a clear purpose. If removing an element doesn't hurt usability or understanding, remove it.
2. **Whitespace is Structure**: Use generous padding and margins to group information naturally rather than relying on heavy borders or boxy containers.
3. **Typography First**: Build visual hierarchy through font weight, scale, letter spacing, and line height rather than excessive colors or icons.
4. **Restrained Color Palette**: Default to a high-contrast monochrome base (black, subtle grays, crisp white) with at most one intentional accent color.

---

## Design Principles & Rules

### 1. Typography & Hierarchy
- **Font Stack**:
  - Sans-Serif (Modern / Editorial): `Inter`, `Plus Jakarta Sans`, `Geist Sans`, or system sans-serif.
  - Serif (Editorial / High-end): `Playfair Display`, `Newsreader`, or `Instrument Serif`.
  - Monospace (Code / Data): `JetBrains Mono`, `Geist Mono`, or `Fira Code`.
- **Scale & Tracking**:
  - `h1`: 32px - 48px, font-weight 600/700, `letter-spacing: -0.02em`, `line-height: 1.15`
  - `h2`: 24px - 32px, font-weight 600, `letter-spacing: -0.015em`, `line-height: 1.25`
  - `h3`: 18px - 22px, font-weight 600, `line-height: 1.35`
  - Body: 14px - 16px, font-weight 400, `line-height: 1.6`, text color `#374151` (light) or `#d1d5db` (dark).
  - Caption / Metadata: 12px - 13px, font-weight 500, `letter-spacing: 0.02em`, uppercase or muted tone.

### 2. Color Tokens (Light & Dark System)
- **Light Theme**:
  - Background: `#fbfbfb` or `#ffffff`
  - Surface / Card: `#ffffff` or `#f8f9fa` with subtle border `1px solid rgba(0,0,0,0.06)`
  - Primary Text: `#111827`
  - Secondary Text: `#6b7280`
  - Border / Divider: `#e5e7eb` or `rgba(0, 0, 0, 0.06)`
  - Accent: `#18181b` (monochrome primary) or a single refined accent like `#2563eb` (royal blue) or `#0d9488` (teal).
- **Dark Theme**:
  - Background: `#09090b` or `#0c0d0e`
  - Surface / Card: `#121316` with border `1px solid rgba(255,255,255,0.08)`
  - Primary Text: `#f4f4f5`
  - Secondary Text: `#a1a1aa`
  - Accent: `#ffffff` or muted high-contrast accent.

### 3. Layout Patterns
- **Container**: Max width `1100px` ~ `1200px`, centered with fluid padding `clamp(1rem, 5vw, 2.5rem)`.
- **Bento Grid**: Asymmetrical grid using `gap: 1.25rem` (20px), subtle rounded corners (`border-radius: 12px` ~ `16px`).
- **Cards**: Single layer of nesting only. Avoid deep card-in-card nesting. Use soft shadows or subtle 1px hairline borders (`box-shadow: 0 1px 3px rgba(0,0,0,0.04)`).

### 4. Forbidden Clichés
- Avoid excessive saturated gradients across text or cards.
- Avoid neon/purple glows on dark backgrounds unless explicitly asked.
- Avoid cluttered icons in every list item or button.
- Avoid complex skeuomorphic effects or heavy drop shadows.

---

## Detailed References

For ready-to-use CSS boilerplate, design tokens, and clean UI components, consult:
- [Design Guidelines & Component Library](./references/guidelines.md)
