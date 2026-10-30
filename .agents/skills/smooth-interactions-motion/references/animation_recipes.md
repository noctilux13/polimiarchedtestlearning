# Advanced Interaction Recipes

## 1. Lenis Smooth Scrolling Setup

```javascript
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

---

## 2. Magnetic Button with Spring (React + Motion)

```tsx
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

export function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.2 }}
      onClick={onClick}
      className="btn-magnetic"
    >
      {children}
    </motion.button>
  );
}
```

---

## 3. Smooth Shared Layout Tabs (`layoutId`)

```tsx
import React, { useState } from 'react';
import { motion } from 'motion/react';

const TABS = ['Overview', 'Specifications', 'Benchmarks', 'Reviews'];

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="tab-container">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab-item ${activeTab === tab ? 'active' : ''}`}
        >
          {tab}
          {activeTab === tab && (
            <motion.div
              layoutId="active-indicator"
              className="tab-indicator"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
```
