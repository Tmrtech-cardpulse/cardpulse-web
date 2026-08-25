import Link from 'next/link';

import Wordmark from './Wordmark';
import { nav } from '@/lib/site';

/**
 * Sticky header.
 *
 * A Server Component with no client JavaScript at all. The lift on scroll is a
 * CSS scroll-progress timeline (see `.header-lift` in globals.css) rather than
 * a scroll listener or a Motion `useScroll`, which is what this used to be.
 * Three reasons, in order of how much they matter:
 *
 *   1. It runs off the main thread, so the bar cannot judder while the page is
 *      busy. A JS-driven version repaints in step with React.
 *   2. It removed the only dependency on the motion library, which was being
 *      shipped to every visitor to fade one background.
 *   3. It made this a Server Component, so the nav is in the HTML.
 *
 * The fallback direction is deliberate: without scroll-timeline support the
 * header keeps its background permanently. Losing the transparent-at-top effect
 * is cosmetic; losing the background would put nav text over page content.
 */
export default function Header() {
  return (
    <header className="header-lift fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] transition-colors hover:text-[var(--c-text)]"
              style={{ color: 'var(--c-text-secondary)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="cta text-[14px]">
            Join the waitlist
          </Link>
        </nav>

        {/* Mobile keeps one action. The section links are all reachable by
            scrolling, so a hamburger would add a menu to hide four anchors. */}
        <Link href="/#waitlist" className="cta text-[13px] md:hidden">
          Join the waitlist
        </Link>
      </div>
    </header>
  );
}
