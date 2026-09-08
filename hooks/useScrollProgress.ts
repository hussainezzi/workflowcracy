import { useEffect, useRef } from 'react';

/**
 * Tracks how far the user has scrolled through `targetRef`, as 0 -> 1.
 *
 * The value is kept in a ref rather than state on purpose: this drives an
 * animation frame loop, and putting it in state would re-render the whole
 * subtree on every scroll event.
 */
export function useScrollProgress(
  targetRef: React.RefObject<HTMLElement | null>,
  onChange?: (progress: number) => void
) {
  const progressRef = useRef(0);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Distance the element travels before it is fully scrolled past.
      const travel = rect.height - window.innerHeight;
      const raw = travel <= 0 ? 0 : -rect.top / travel;
      const clamped = Math.min(1, Math.max(0, raw));

      if (clamped !== progressRef.current) {
        progressRef.current = clamped;
        onChange?.(clamped);
      }
    };

    const onScroll = () => {
      // Coalesce bursts of scroll events into one measurement per frame.
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetRef, onChange]);

  return progressRef;
}
