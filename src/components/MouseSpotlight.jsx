import React, { useRef, useEffect, useState } from 'react';

/**
 * High-Performance Ambient Mouse Spotlight
 * - Zero Layout Thrashing: Caches card document-origin on entry, 0 getBoundingClientRect calls during mouse movement
 * - Idle Throttled: Pauses rAF loop when cursor is stationary (<0.25px delta) or window is exited
 * - Touch Bypassed: Completely disables viewport layers and listeners on pointer: coarse devices
 */
export default function MouseSpotlight({ children, className = '', style = {} }) {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const orbRef = useRef(null);
  const ambientRef = useRef(null);

  // Check coarse pointer capability to bypass spotlight on mobile/tablet devices
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  const posRef = useRef({
    targetX: -9999,
    targetY: -9999,
    coreX: -9999,
    coreY: -9999,
    orbX: -9999,
    orbY: -9999,
    ambientX: -9999,
    ambientY: -9999,
    isHovering: false,
  });

  const activeCardRef = useRef(null);
  const cardOriginRef = useRef(null);
  const isLoopRunningRef = useRef(false);
  const rafRef = useRef(null);

  // Dynamic media query tracking for hybrid devices & DevTools emulation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia('(pointer: coarse)');
    const handleMediaChange = (e) => {
      setIsTouchDevice(e.matches);
    };
    mql.addEventListener?.('change', handleMediaChange);

    return () => {
      mql.removeEventListener?.('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const clearActiveCard = () => {
      if (activeCardRef.current) {
        activeCardRef.current.style.removeProperty('--card-mouse-x');
        activeCardRef.current.style.removeProperty('--card-mouse-y');
        activeCardRef.current = null;
        cardOriginRef.current = null;
      }
    };

    const updatePosition = () => {
      const p = posRef.current;

      if (!p.isHovering) {
        isLoopRunningRef.current = false;
        rafRef.current = null;
        return;
      }

      // Multi-tier spring-damped optical tracking:
      // 1. Core LED emitter (0.24)
      // 2. Main parabolic beam (0.115)
      // 3. Ambient bloom (0.065)
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

      // Idle Throttling: Pause rAF when all 3 layers converge to target coordinates (< 0.25px)
      const distAmbient = Math.abs(p.targetX - p.ambientX) + Math.abs(p.targetY - p.ambientY);
      const distOrb = Math.abs(p.targetX - p.orbX) + Math.abs(p.targetY - p.orbY);
      const distCore = Math.abs(p.targetX - p.coreX) + Math.abs(p.targetY - p.coreY);

      if (distAmbient < 0.25 && distOrb < 0.25 && distCore < 0.25) {
        // Snap to exact target to eliminate microscopic jitter
        p.coreX = p.targetX;
        p.coreY = p.targetY;
        p.orbX = p.targetX;
        p.orbY = p.targetY;
        p.ambientX = p.targetX;
        p.ambientY = p.targetY;

        if (coreRef.current) coreRef.current.style.transform = `translate3d(${p.targetX}px, ${p.targetY}px, 0)`;
        if (orbRef.current) orbRef.current.style.transform = `translate3d(${p.targetX}px, ${p.targetY}px, 0)`;
        if (ambientRef.current) ambientRef.current.style.transform = `translate3d(${p.targetX}px, ${p.targetY}px, 0)`;

        // Stop loop while stationary
        isLoopRunningRef.current = false;
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(updatePosition);
    };

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

      // ── Non-Thrashing Card Hover Coordinate Tracking ──
      // Caches card rect ONCE on entry, eliminating getBoundingClientRect on every mousemove
      const card = e.target.closest?.('.card, .card-editorial');
      if (card) {
        if (card !== activeCardRef.current) {
          // Exited previous card, entered new card
          clearActiveCard();
          activeCardRef.current = card;
          const rect = card.getBoundingClientRect();
          cardOriginRef.current = {
            pageX: rect.left + window.scrollX,
            pageY: rect.top + window.scrollY,
          };
        }

        if (cardOriginRef.current) {
          const pageX = e.pageX ?? (e.clientX + window.scrollX);
          const pageY = e.pageY ?? (e.clientY + window.scrollY);
          const mouseX = pageX - cardOriginRef.current.pageX;
          const mouseY = pageY - cardOriginRef.current.pageY;

          card.style.setProperty('--card-mouse-x', `${mouseX.toFixed(1)}px`);
          card.style.setProperty('--card-mouse-y', `${mouseY.toFixed(1)}px`);
        }
      } else if (activeCardRef.current) {
        clearActiveCard();
      }

      // Wake up rAF loop if it was asleep
      if (!isLoopRunningRef.current) {
        isLoopRunningRef.current = true;
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      posRef.current.isHovering = false;
      if (coreRef.current) coreRef.current.style.opacity = '0';
      if (orbRef.current) orbRef.current.style.opacity = '0';
      if (ambientRef.current) ambientRef.current.style.opacity = '0';

      clearActiveCard();

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      isLoopRunningRef.current = false;
    };

    const handleResize = () => {
      clearActiveCard();
    };

    const handleScroll = () => {
      if (activeCardRef.current) {
        const rect = activeCardRef.current.getBoundingClientRect();
        cardOriginRef.current = {
          pageX: rect.left + window.scrollX,
          pageY: rect.top + window.scrollY,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearActiveCard();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return (
      <div ref={containerRef} className={`mouse-spotlight-wrapper ${className}`} style={style}>
        <div className="spotlight-content" style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </div>
    );
  }

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
