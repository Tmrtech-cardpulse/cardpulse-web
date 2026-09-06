import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { PLANNED } from '@/content/calendar';
import { CLUSTER_HUBS, CLUSTER_ORDER } from '@/content/clusters';
import { allPosts, publishedPosts } from '@/content/posts';
import { CLUSTER_LABEL } from '@/content/types';
import { breadcrumbLd, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'How this blog is written',
  description:
    'The rules this blog is written under: where the numbers come from, what is deliberately not stated as fact, why posts are released on a schedule, and what is coming next.',
  path: '/blog/about',
});

/** Hourly, so the counts below move as posts fall due. */
export const revalidate = 3600;

/**
 * The editorial standards page.
 *
 * Ported from the sibling sites, where it earns its place twice over. It is the
 * page that answers "who is writing this and why should I believe it" for a
 * reader, and it is the page that makes the constraints legible to a search
 * engine assessing whether a site of fifty articles about money is worth
 * trusting. Neither audience is served by a paragraph about passion for the
 * hobby, so this states the actual rules and the things this site refuses to
 * say.
 *
 * Every count on it is computed. A page about not stating things you have not
 * checked cannot open with a hand-typed number of articles.
 */
export default function BlogAboutPage() {
  const live = publishedPosts().length;
  const total = allPosts.length;
  const scheduled = total - live;

  /* Named without dates. A published schedule you then miss is worse than no
     published schedule, and these are briefs rather than commitments. */
  const upcoming = PLANNED.slice(0, 5);

  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbLd([
          { label: 'Blog', href: '/blog' },
          { label: 'How this blog is written', href: '/blog/about' },
        ])}
      />

      <main id="main" className="mx-auto max-w-[760px] px-5 pt-28 pb-24 sm:px-8">
        <nav aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="mono text-[13px] transition-colors hover:text-[var(--c-text)]"
            style={{ color: 'var(--c-text-secondary)' }}
          >
            Blog
          </Link>
        </nav>

        <h1 className="display mt-4" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
          How this blog is written
        </h1>
        <p
          className="mt-5 leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-lg)' }}
        >
          There are {total} articles across {CLUSTER_ORDER.length} topics, of which {live}{' '}
          {live === 1 ? 'is' : 'are'} live and {scheduled} {scheduled === 1 ? 'is' : 'are'} dated to
          appear. This page is what they are all written under.
        </p>

        <section className="mt-14">
          <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
            Where the numbers come from
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
            One example card is quoted anywhere on this site. It is a real card, its sold prices are
            illustrative, and every figure shown from it is computed from the same source rather
            than typed into a page. That is why the price on the home page, the spread in the
            pricing guide and the figure on the share card always agree: they are one calculation
            rendered three times.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
            The live market data belongs in the app, which reads eBay UK directly. This site does not
            reproduce it, because a marketing page holding a stale copy of a price is worse than a
            marketing page holding no price at all.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
            Three things deliberately not stated here
          </h2>
          <dl className="mt-6">
            {[
              {
                q: 'What a named card is worth',
                a: 'Card prices move, and a page that puts a figure against a named card is wrong within weeks and stays wrong for years. The articles describe how to work a price out. The app does the working.',
              },
              {
                q: 'A grading fee, or who currently holds a licence',
                a: 'Both subjects are covered at length. What is never printed is a figure or a name that goes stale: fee schedules change and licences move between manufacturers, so the articles describe the shape of a cost and the mechanics of a licence, then send you to the grader or the manufacturer for the position on the day you read it.',
              },
              {
                q: 'Search volumes and traffic estimates',
                a: 'This site has no access to keyword data, so nothing on it is prioritised against a number that was invented to fill a column. Where a judgement has been made in place of a real check, the planning document says so.',
              },
            ].map((item) => (
              <div key={item.q} className="py-5" style={{ borderBottom: 'var(--web-hairline)' }}>
                <dt className="text-[16px] font-semibold">{item.q}</dt>
                <dd
                  className="mt-2 max-w-[62ch] leading-relaxed"
                  style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
                >
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14">
          <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
            Why articles appear on a schedule
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
            The articles were written before the site launched, and they are released a couple a
            week rather than all at once. Publishing fifty pages in a day is the signature of scaled
            content abuse whoever wrote them, and a set of articles that is worth reading should not
            arrive looking like a set of articles that is not.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
            An article that is not yet due does not exist as a page: it is absent from the index, it
            is absent from the sitemap, and its address returns a not found. Nothing is quietly
            reachable ahead of its date.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
            How the topics are organised
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
            Each topic has a hub, and most have a guide that owns the subject with articles
            underneath it that link back up in the body copy rather than only in a grid at the foot.
            A cluster whose posts do not link to their own guide is a list of pages, not a subject.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {CLUSTER_ORDER.map((c) => (
              <li key={c}>
                <Link
                  href={`/blog/c/${c}`}
                  className="panel block px-4 py-2 text-[14px] transition-colors hover:text-[var(--c-text)]"
                  style={{ color: 'var(--c-text-secondary)' }}
                >
                  {CLUSTER_LABEL[c]}
                  {CLUSTER_HUBS[c].pillar ? '' : ' (no guide yet)'}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {upcoming.length > 0 && (
          <section className="mt-14">
            <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
              What is being written next
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
              Commissioned, not yet written. Listed without dates, because a date published here and
              then missed is worse than no date at all.
            </p>
            <ul className="mt-6" style={{ borderTop: 'var(--web-hairline)' }}>
              {upcoming.map((slot) => (
                <li key={slot.slug} className="py-4" style={{ borderBottom: 'var(--web-hairline)' }}>
                  <p className="text-[15px] font-medium">
                    {slot.brief.split('.')[0]}.
                    {slot.pillar && (
                      <span className="mono ml-2 text-[12px]" style={{ color: 'var(--c-accent)' }}>
                        guide
                      </span>
                    )}
                  </p>
                  <p className="mono mt-1 text-[12px]" style={{ color: 'var(--c-text-secondary)' }}>
                    {CLUSTER_LABEL[slot.cluster]}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
