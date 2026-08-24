'use client';

import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

import Wordmark from './Wordmark';
import { nav } from '@/lib/site';

/**
 * Sticky header. The field behind it is dark and dense, so once the page moves
 * the bar needs its own ground to stay legible. Scroll position comes from
 * Motion's `useScroll`, never a scroll listener.
 */
export default function Header() {
  const { scrollY } = useScroll();
  const [lifted, setLifted] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 24;
    if (next !== lifted) setLifted(next);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      animate={{
        backgroundColor: lifted ? 'rgba(11,13,26,0.82)' : 'rgba(11,13,26,0)',
        borderBottomColor: lifted ? 'var(--c-border)' : 'transparent',
      }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        backdropFilter: lifted ? 'blur(14px)' : 'none',
      }}
    >
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
          <Link
            href="/#waitlist"
            className="rounded-[var(--r-md)] px-4 py-2 text-[14px] font-semibold transition-transform active:scale-[0.98]"
            style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-accent-ink)' }}
          >
            Join the waitlist
          </Link>
        </nav>

        {/* Mobile keeps one action. The section links are all reachable by
            scrolling, so a hamburger would add a menu to hide four anchors. */}
        <Link
          href="/#waitlist"
          className="rounded-[var(--r-md)] px-3.5 py-2 text-[13px] font-semibold md:hidden"
          style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-accent-ink)' }}
        >
          Join the waitlist
        </Link>
      </div>
    </motion.header>
  );
}
