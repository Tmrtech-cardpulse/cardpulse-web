import type { ReactNode } from 'react';

/**
 * Entry reveal for content below the fold.
 *
 * Motivation: the page is dense, and bringing a block in as it arrives gives
 * the reader an order to read it in.
 *
 * Implemented in CSS with `animation-timeline: view()` rather than a
 * `whileInView` motion component, because the resting state of this element
 * has to be visible. A JS reveal parks real content at opacity 0 until an
 * IntersectionObserver fires, which means anything that does not scroll never
 * sees it. Here the animation is additive: no support, or reduced motion, and
 * the content is simply there. It also ships no client JS.
 */
export default function Reveal({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  /** Retained for call-site ergonomics. Stagger is handled by the CSS range. */
  delay?: number;
}) {
  void delay;
  return <div className={['reveal', className].filter(Boolean).join(' ')}>{children}</div>;
}
