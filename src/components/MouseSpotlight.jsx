import React, { useRef, useEffect } from 'react';

export default function MouseSpotlight({ children, className = '', style = {} }) {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const orbRef = useRef(null);
  const ambientRef = useRef(null);

  const posRef = useRef({
    targetX: -9999,
    targetY: -9999,
    coreX: -9999,
    coreY: -9999,
    orbX: -9999,
    orbY: -9999,
    ambientX: -9999,
    ambientY: -9999,
    isHovering: false
  });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const p = posRef.current;
      const isFirstMove = !p.isHovering || p.coreX === -9999;

      p.targetX = e.clientX;
      p.targetY = e.clientY;

      if (isFirstMove) {
        // Direct snap on first entry to eliminate cross-screen drag artifacts
        p.coreX = e.clientX;
        p.coreY = e.clientY;
        p.orbX = e.clientX;
        p.orbY = e.clientY;
        p.ambientX = e.clientX;
        p.ambientY = e.clientY;

        p.isHovering = true;
        if (coreRef.current) coreRef.current.style.opacity = '1';
        if (orbRef.current) orbRef.current.style.opacity = '1';
        if (ambientRef.current) ambientRef.current.style.opacity = '1';
      }

      // Update card-local mouse coordinates for hovered cards
      const card = e.target.closest?.('.card, .card-editorial');
      if (card) {
        const cardRect = card.getBoundingClientRect();
        card.style.setProperty('--card-mouse-x', `${e.clientX - cardRect.left}px`);
        card.style.setProperty('--card-mouse-y', `${e.clientY - cardRect.top}px`);
      }
    };

    const handleMouseLeave = () => {
      posRef.current.isHovering = false;
      if (coreRef.current) coreRef.current.style.opacity = '0';
      if (orbRef.current) orbRef.current.style.opacity = '0';
      if (ambientRef.current) ambientRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Multi-Frequency Optical Tracking:
    // 1. Core LED emitter follows with agile responsiveness (0.24)
    // 2. Main parabolic beam follows with fluid optical inertia (0.115)
    // 3. Ambient bloom follows with soft trailing drift (0.065)
    // This creates natural physical depth as the flashlight sweeps across darkness!
    const updatePosition = () => {
      const p = posRef.current;

      if (p.targetX !== -9999 && p.isHovering) {
        // Multi-tier spring-damped interpolation
        p.coreX += (p.targetX - p.coreX) * 0.24;
        p.coreY += (p.targetY - p.coreY) * 0.24;

        p.orbX += (p.targetX - p.orbX) * 0.115;
        p.orbY += (p.targetY - p.orbY) * 0.115;

        p.ambientX += (p.targetX - p.ambientX) * 0.065;
        p.ambientY += (p.targetY - p.ambientY) * 0.065;

        if (coreRef.current) {
          coreRef.current.style.transform = `translate3d(${p.coreX.toFixed(1)}px, ${p.coreY.toFixed(1)}px, 0)`;
        }
        if (orbRef.current) {
          orbRef.current.style.transform = `translate3d(${p.orbX.toFixed(1)}px, ${p.orbY.toFixed(1)}px, 0)`;
        }
        if (ambientRef.current) {
          ambientRef.current.style.transform = `translate3d(${p.ambientX.toFixed(1)}px, ${p.ambientY.toFixed(1)}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(updatePosition);
    };

    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`mouse-spotlight-wrapper ${className}`} style={style}>
      {/* Hardware-Accelerated Phone Flashlight Viewport */}
      <div className="spotlight-viewport" aria-hidden="true">
        <div ref={ambientRef} className="spotlight-ambient" />
        <div ref={orbRef} className="spotlight-orb" />
        <div ref={coreRef} className="spotlight-core" />
      </div>
      <div className="spotlight-content" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
