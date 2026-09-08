import { useCallback, useSyncExternalStore } from 'react';

/**
 * Browser state, read the way React 19 wants it read.
 *
 * These used to be `useState` + `useEffect` pairs, which meant setting state
 * during the first effect on every mount. `useSyncExternalStore` expresses the
 * same thing directly: a server snapshot for the pre-rendered HTML, a client
 * snapshot after hydration, and a subscription for anything that changes.
 */

const NEVER_CHANGES = () => () => undefined;

/** True once the page has been scrolled past `threshold` pixels. */
export function useScrolled(threshold = 10): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener('scroll', onChange, { passive: true });
    return () => window.removeEventListener('scroll', onChange);
  }, []);

  const getSnapshot = useCallback(() => window.scrollY > threshold, [threshold]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/**
 * A one-shot capability check that is false on the server and during
 * hydration, then settles to its real value. Results are cached per key
 * because React may call the snapshot more than once and some of these
 * checks are expensive.
 */
const capabilities = new Map<string, boolean>();

export function useCapability(key: string, detect: () => boolean): boolean {
  const getSnapshot = useCallback(() => {
    let value = capabilities.get(key);
    if (value === undefined) {
      value = detect();
      capabilities.set(key, value);
    }
    return value;
  }, [key, detect]);

  return useSyncExternalStore(NEVER_CHANGES, getSnapshot, () => false);
}

/** Can this browser actually run WebGL? */
export function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/**
 * Whether it is reasonable to run a 3D scene here at all: WebGL present, no
 * reduced-motion preference, and more than a couple of CPU cores.
 */
export function detectRichMotion(): boolean {
  const lowPower = (navigator.hardwareConcurrency ?? 8) <= 2;
  return detectWebGL() && !prefersReducedMotion() && !lowPower;
}
