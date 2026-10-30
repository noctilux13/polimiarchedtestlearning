---
name: smooth-interactions-motion
description: >-
  Designs and implements silky-smooth micro-interactions, scroll-driven choreographies, and spring-physics
  animations using Motion (motion/react), GSAP (ScrollTrigger), and Lenis. Activate when the user asks
  for interactive animations, smooth scrolling, entrance choreographies, page transitions, or hover micro-interactions.
---

# Smooth Interactions & Motion Design Skill

This skill guides the implementation of high-craft, buttery-smooth web animations and micro-interactions. It follows Emil Kowalski's design philosophy and performance-first animation principles.

## Core Rules for Silky Animations

1. **Only Animate GPU-Accelerated Properties**:
   - Animate `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`.
   - **NEVER** animate `width`, `height`, `top`, `left`, `margin`, or `padding` directly (which trigger costly layout reflows / layout thrashing). For expanding elements, use layout projections (`layout` or `layoutId` in Motion).

2. **Use Spring Physics for Interaction**:
   - For user-triggered actions (hover, tap, drag, sheet dismiss), prefer spring physics over linear or fixed-duration easing.
   - Recommended spring values:
     - Snappy / Responsive: `{ stiffness: 400, damping: 30 }` or `{ bounce: 0.15, duration: 0.4 }`
     - Gentle / Floating: `{ stiffness: 200, damping: 25 }` or `{ bounce: 0, duration: 0.6 }`

3. **Choreography & Staggering**:
   - When revealing a list or grid of items, stagger by `0.04s` ~ `0.08s`. Keep total stagger time under `0.5s` to avoid frustrating the user.
   - Entrances should be slightly faster than exits (e.g., entrance 300ms, exit 200ms).

---

## 1. Modern Motion Component (`motion/react`)

```tsx
import { motion, AnimatePresence } from 'motion/react';

export function AnimatedCard({ title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(2px)' }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="card"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
```

---

## 2. GSAP ScrollTrigger Integration

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scrubbed parallax & fade
gsap.from('.feature-card', {
  scrollTrigger: {
    trigger: '.features-grid',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
  y: 40,
  opacity: 0,
  stagger: 0.08,
  duration: 0.8,
  ease: 'power3.out',
});
```

For complete recipes (Magnetic Buttons, Smooth Accordion with `layoutId`, Lenis Smooth Scroll Setup), see:
- [Animation & Interaction Recipes](./references/animation_recipes.md)
