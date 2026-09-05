import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Photo from '@/components/Photo';
import { guides } from '@/content/guides';
import { readingMinutes } from '@/content/types';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Guides',
  description:
    'Practical guides to pricing sports cards: sold comps, grading, rookie cards and spotting reprints. Written for UK collectors.',
  path: '/guides',
});

export default function GuidesPage() {
  const [lead, ...rest] = guides;

  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-[1180px] px-5 pt-28 pb-24 sm:px-8">
        <h1 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
          Guides
        </h1>
        <p
          className="mt-4 max-w-[58ch] leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-lg)' }}
        >
          How to work out what a card is worth, and what changes the answer.
        </p>

        {/* The pillar leads, at a different size from everything under it, so the
            hierarchy of the topic is visible before anything is read. */}
        <Link
          href={`/guides/${lead.slug}`}
          className="panel mt-12 grid gap-8 p-8 md:grid-cols-[1fr_320px] md:items-center md:p-10"
        >
          <div>
          <p className="col-label">Start here</p>
          <h2 className="display mt-3" style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}>
            {lead.title}
          </h2>
          <p
            className="mt-4 max-w-[62ch] leading-relaxed"
            style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
          >
            {lead.summary}
          </p>
          <p className="mono mt-5 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
            {readingMinutes(lead.blocks)} min read
          </p>
          </div>
          {lead.image && <Photo src={lead.image.src} alt={lead.image.alt} priority />}
        </Link>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="panel block overflow-hidden">
              {g.image && (
                <Photo src={g.image.src} alt={g.image.alt} rounded={false} />
              )}
              <div className="p-7">
              <h2 className="text-[19px] font-semibold tracking-tight">{g.title}</h2>
              <p
                className="mt-3 leading-relaxed"
                style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
              >
                {g.summary}
              </p>
              <p className="mono mt-5 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
                {readingMinutes(g.blocks)} min read
              </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
