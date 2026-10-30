---
name: pptx-generator
description: >-
  Generates and edits native Microsoft PowerPoint (.pptx) presentation files using python-pptx.
  Creates editable slides with native shapes, color palettes, typography, tables, and charts.
  Activate when the user asks to generate, edit, or customize a .pptx file.
---

# Native PowerPoint (.pptx) Generator Skill

This skill enables programmatic generation and modification of native Microsoft PowerPoint (`.pptx`) decks with clean typography, harmonious color palettes, and structured layouts using `python-pptx`.

## Workflow

1. **Verify / Install Dependencies**:
   Ensure `python-pptx` is installed:
   ```bash
   pip install python-pptx
   ```

2. **Presentation Dimensions**:
   Always default to 16:9 widescreen format:
   ```python
   from pptx import Presentation
   from pptx.util import Inches, Pt
   from pptx.dml.color import RGBColor
   from pptx.enum.text import PP_ALIGN

   prs = Presentation()
   prs.slide_width = Inches(13.333)
   prs.slide_height = Inches(7.5)
   ```

3. **Color Palette Constants (Minimal / Professional)**:
   ```python
   COLOR_BG = RGBColor(0xFA, 0xFA, 0xFA)        # Clean off-white
   COLOR_PRIMARY = RGBColor(0x11, 0x18, 0x27)   # Dark slate
   COLOR_SECONDARY = RGBColor(0x4B, 0x55, 0x63) # Neutral gray
   COLOR_ACCENT = RGBColor(0x25, 0x63, 0xEB)    # Royal blue
   COLOR_CARD_BG = RGBColor(0xFF, 0xFF, 0xFF)   # Card surface
   ```

4. **Generating Layouts**:
   - **Blank Slide Layout**: Use `prs.slide_layouts[6]` (blank) to place custom shapes and cards with precise geometry.
   - **Card Elements**: Use `slide.shapes.add_shape()` with rounded rectangles (`MSO_SHAPE.ROUNDED_RECTANGLE`) for cards.
   - **Text Frames**: Set `word_wrap = True` and clear margins on text frames.

---

## Helper Script

A ready-to-use template script is available at:
- [generate_deck.py](./scripts/generate_deck.py)

Run it with:
```bash
python scripts/generate_deck.py --title "Project Presentation" --output output.pptx
```
