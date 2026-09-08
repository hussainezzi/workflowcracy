import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { detectRichMotion, useCapability } from '../../hooks/useBrowser';

// three.js is heavy — keep it out of the initial bundle.
const Scene = lazy(() => import('./Scene'));

interface ScrollStageProps {
  /** The element whose scroll drives the animation. */
  targetRef: React.RefObject<HTMLElement | null>;
}

/**
 * Hosts the scroll-driven 3D mark.
 *
 * Falls back to a still gradient mark whenever 3D would be a bad idea:
 * no WebGL, reduced-motion preference, or a device with very few cores.
 */
const ScrollStage: React.FC<ScrollStageProps> = ({ targetRef }) => {
  // False on the server and during hydration, then settles to the real answer.
  const enabled = useCapability('rich-motion', detectRichMotion);
  const [visible, setVisible] = useState(true);
  const holderRef = useRef<HTMLDivElement>(null);
  const progressRef = useScrollProgress(targetRef);

  // Stop rendering frames while the mark is scrolled out of view.
  useEffect(() => {
    const el = holderRef.current;
    if (!el || !enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div ref={holderRef} className="absolute inset-0" aria-hidden="true">
      {enabled ? (
        <Suspense fallback={<StaticMark />}>
          <Scene progressRef={progressRef} active={visible} />
        </Suspense>
      ) : (
        <StaticMark />
      )}
    </div>
  );
};

/** The no-3D stand-in: the same shapes, held still. */
export const StaticMark: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center">
    <svg viewBox="0 0 200 200" className="h-2/3 w-2/3 max-w-md opacity-90" role="presentation">
      <defs>
        <linearGradient id="ez-blue" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0E4A82" />
          <stop offset="100%" stopColor="#1A91DA" />
        </linearGradient>
        <linearGradient id="ez-orange" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#C2410C" />
          <stop offset="100%" stopColor="#FF9E1B" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="78" fill="none" stroke="#FF9E1B" strokeWidth="1.5" opacity="0.45" />
      <path d="M62 152 L86 152 L112 48 L100 48 Z" fill="url(#ez-blue)" />
      <path d="M114 152 L138 152 L112 48 L100 48 Z" fill="url(#ez-orange)" />
      <rect x="78" y="112" width="44" height="11" fill="#0E4A82" />
      <circle cx="150" cy="130" r="6" fill="#F06525" />
    </svg>
  </div>
);

export default ScrollStage;
