import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { activeClusters, postsInCluster, publishedPosts } from '@/content/posts';
import { CLUSTER_LABEL, readingMinutes } from '@/content/types';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Blog',
  description:
    'Writing about sports card collecting for UK collectors: valuing cards, grading, selling, sets and products, and telling a real card from a reprint.',
  path: '/blog',
});

/**
 * Rebuilt hourly so scheduled posts go live on their date without a deploy.
 * See content/posts/index.ts for why they are scheduled at all.
 */
export const revalidate = 3600;

/** The index is grouped by cluster rather than by date, so each row has to
 *  carry its own date or the reader cannot tell what is new. Short form,
 *  because the column also holds the reading time. */
const shortDate = (iso: string) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(
    new Date(iso),
  );

export default function BlogPage() {
  const posts = publishedPosts();
  const clusters = activeClusters();
  const [latest, ...rest] = posts;

  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-[1180px] px-5 pt-28 pb-24 sm:px-8">
        <h1 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
          Blog
        </h1>
        <p
          className="mt-4 max-w-[58ch] leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-lg)' }}
        >
          Answers to the things collectors actually ask, written for the UK market.
        </p>

        {latest && (
          <Link href={`/blog/${latest.slug}`} className="panel mt-12 block p-8 md:p-10">
            <p className="col-label">Latest</p>
            <h2 className="display mt-3 max-w-[24ch]" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}>
              {latest.title}
            </h2>
            <p
              className="mt-4 max-w-[64ch] leading-relaxed"
              style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
            >
              {latest.summary}
            </p>
            <p className="mono mt-5 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
              {CLUSTER_LABEL[latest.cluster]}.{' '}
              <time dateTime={latest.published} data-date>
                {shortDate(latest.published)}
              </time>
              . {readingMinutes(latest.blocks)} min read.
            </p>
          </Link>
        )}

        {/* Grouped by cluster rather than listed by date. The clusters are the
            structure of the topic, so showing them is showing the reader how
            the subject is organised, which a reverse-chronological list hides. */}
        {clusters.map((cluster) => {
          const inCluster = postsInCluster(cluster).filter((p) => p.slug !== latest?.slug);
          if (inCluster.length === 0) return null;

          return (
            <section key={cluster} className="mt-16">
              <h2 className="text-[20px] font-semibold tracking-tight">
                {CLUSTER_LABEL[cluster]}
              </h2>
              <ul className="mt-5" style={{ borderTop: 'var(--web-hairline)' }}>
                {inCluster.map((p) => (
                  <li key={p.slug} style={{ borderBottom: 'var(--web-hairline)' }}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="row-hover grid gap-2 py-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
                    >
                      <div>
                        <h3 className="text-[17px] font-medium">{p.title}</h3>
                        <p
                          className="mt-1.5 max-w-[70ch] text-[14px] leading-relaxed"
                          style={{ color: 'var(--c-text-secondary)' }}
                        >
                          {p.summary}
                        </p>
                      </div>
                      <span
                        className="mono shrink-0 text-[13px] md:text-right"
                        style={{ color: 'var(--c-text-secondary)' }}
                      >
                        <time dateTime={p.published} data-date>
                          {shortDate(p.published)}
                        </time>
                        <span className="md:block"> {readingMinutes(p.blocks)} min</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        {rest.length === 0 && posts.length <= 1 && (
          <p className="mt-12" style={{ color: 'var(--c-text-secondary)' }}>
            More is on the way.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
