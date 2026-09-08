import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger, in milliseconds, for items revealed as a group. */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
}

const HIDDEN_CLASSES = ['translate-y-6', 'opacity-0'];

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * Two deliberate choices here:
 *
 * 1. It renders VISIBLE and only hides itself after mount, and only for content
 *    below the fold. So the pre-rendered HTML and the no-JavaScript fallback
 *    both show a complete, readable page, and nothing already on screen flashes.
 *
 * 2. The hidden state is a class on the element rather than React state. This
 *    is a visual effect on a DOM node, not application state — driving it
 *    through React would re-render the subtree twice per element for something
 *    the browser can do with a class swap.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return;
    }

    // Anything already on screen stays as it is — animating it would be a flash.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add(...HIDDEN_CLASSES);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(...HIDDEN_CLASSES);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      el.classList.remove(...HIDDEN_CLASSES);
    };
  }, []);

  return (
    <Tag
      // Tag is one of several element types, so the ref is widened here; the
      // effect only reads the element and toggles classes on it.
      ref={ref as React.Ref<never>}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
