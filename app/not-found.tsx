import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { nav } from '@/lib/site';

/**
 * The 404.
 *
 * This route is not an edge case here. Fifty posts are written and released on
 * a schedule, so thirty-odd of them 404 by design at any moment, and the shared
 * default Next page for that was an unstyled black field with no header, no
 * footer and no way back. Anyone landing on a post URL early, from a paste or a
 * stale link, hit it.
 *
 * So the copy names that case rather than apologising in the abstract, and the
 * page carries the site chrome and a route out.
 */
/* Next does not document metadata on not-found, but it is honoured here and a
   404 inheriting the home page's title reads as though the page loaded. */
export const metadata: Metadata = {
  title: 'Page not found - SportsCardPulse',
  description: 'That page is not here. The guides, the blog and the glossary are.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-[760px] px-5 pt-28 pb-24 sm:px-8">
        <p className="eyebrow">Not found</p>
        <h1 className="display mt-3" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
          Nothing at this address.
        </h1>
        <p
          className="mt-5 max-w-[52ch] leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-lg)' }}
        >
          The link is either old or points at an article that has been written and is not out
          yet. Posts go live on their own date, so a URL can exist before the page does.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="/" className="cta px-6 py-3 text-[15px]">
            Back to the home page
          </Link>
          <Link href="/#waitlist" className="cta-ghost px-6 py-3 text-[15px]">
            Join the waitlist
          </Link>
        </div>

        <nav aria-label="Site sections" className="mt-14">
          <p className="col-label">Everything that is live</p>
          <ul className="mt-4" style={{ borderTop: 'var(--web-hairline)' }}>
            {[...nav, { href: '/glossary', label: 'Glossary' }].map((item) => (
              <li key={item.href} style={{ borderBottom: 'var(--web-hairline)' }}>
                <Link
                  href={item.href}
                  className="row-hover block py-4 text-[16px] transition-colors hover:text-[var(--c-text)]"
                  style={{ color: 'var(--c-text-secondary)' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
