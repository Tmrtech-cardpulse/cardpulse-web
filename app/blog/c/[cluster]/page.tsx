import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import Prose from '@/components/Prose';
import { CLUSTER_HUBS, CLUSTER_ORDER } from '@/content/clusters';
import { guideBySlug } from '@/content/guides';
import { postsInCluster } from '@/content/posts';
import { CLUSTER_LABEL, readingMinutes, type Cluster } from '@/content/types';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

type Params = { params: Promise<{ cluster: string }> };

/** Hourly, so a post joining this cluster appears on its date without a deploy. */
export const revalidate = 3600;

/**
 * Every cluster is prerendered, including ones whose posts are all still
 * scheduled. A hub with no posts yet is not a thin page: it carries its own
 * intro and, where one exists, the pillar guide. It is the topic's home before
 * it is a list.
 */
export function generateStaticParams() {
  return CLUSTER_ORDER.map((cluster) => ({ cluster }));
}

function hubFor(slug: string) {
  return CLUSTER_ORDER.includes(slug as Cluster) ? (slug as Cluster) : undefined;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { cluster } = await params;
  const key = hubFor(cluster);
  if (!key) return {};
  const hub = CLUSTER_HUBS[key];

  return pageMeta({
    title: hub.metaTitle,
    description: hub.description,
    path: `/blog/c/${key}`,
  });
}

const shortDate = (iso: string) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(
    new Date(iso),
  );

export default async function ClusterPage({ params }: Params) {
  const { cluster } = await params;
  const key = hubFor(cluster);
  if (!key) notFound();

  const hub = CLUSTER_HUBS[key];
  const posts = postsInCluster(key);
  const pillarGuide = hub.pillar ? guideBySlug(hub.pillar.replace('/guides/', '')) : undefined;
  const siblings = CLUSTER_ORDER.filter((c) => c !== key);

  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbLd([
          { label: 'Blog', href: '/blog' },
          { label: CLUSTER_LABEL[key], href: `/blog/c/${key}` },
        ])}
      />
      {/* CollectionPage rather than Article: this page is a list with an
          introduction, and describing it as an article would be a claim about
          the wrong thing. The posts are named in the list so the relationship
          is legible without a crawler having to infer it from the links. */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: hub.title,
          description: hub.description,
          url: `${site.url}/blog/c/${key}`,
          isPartOf: { '@type': 'Blog', name: `${site.name} blog`, url: `${site.url}/blog` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: posts.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${site.url}/blog/${p.slug}`,
              name: p.title,
            })),
          },
        }}
      />

      <main id="main" className="mx-auto max-w-[1180px] px-5 pt-28 pb-24 sm:px-8">
        <nav aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="mono text-[13px] transition-colors hover:text-[var(--c-text)]"
            style={{ color: 'var(--c-text-secondary)' }}
          >
            Blog
          </Link>
        </nav>

        <h1 className="display mt-4 max-w-[20ch]" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
          {hub.title}
        </h1>

        <div className="mt-8 max-w-[68ch]">
          <Prose blocks={hub.intro} />
        </div>

        {pillarGuide && (
          <section className="mt-14">
            <p className="col-label">Start here</p>
            <Link href={`/guides/${pillarGuide.slug}`} className="panel mt-4 block p-7 md:p-8">
              <h2 className="display" style={{ fontSize: 'clamp(20px, 2.4vw, 26px)' }}>
                {pillarGuide.title}
              </h2>
              <p
                className="mt-3 max-w-[64ch] leading-relaxed"
                style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
              >
                {pillarGuide.summary}
              </p>
            </Link>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-[20px] font-semibold tracking-tight">
            {posts.length > 0 ? 'Everything on this topic' : 'Nothing published here yet'}
          </h2>

          {posts.length > 0 ? (
            <ul className="mt-5" style={{ borderTop: 'var(--web-hairline)' }}>
              {posts.map((p) => (
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
          ) : (
            <p
              className="mt-4 max-w-[62ch] leading-relaxed"
              style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
            >
              The posts for this topic are written and dated. They appear here as each one falls due.{' '}
              <Link href="/blog/about" className="underline">
                Why the schedule exists
              </Link>
              .
            </p>
          )}
        </section>

        <section className="mt-16">
          <h2 className="col-label">The other topics</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {siblings.map((c) => (
              <li key={c}>
                <Link
                  href={`/blog/c/${c}`}
                  className="panel block px-4 py-2 text-[14px] transition-colors hover:text-[var(--c-text)]"
                  style={{ color: 'var(--c-text-secondary)' }}
                >
                  {CLUSTER_LABEL[c]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
