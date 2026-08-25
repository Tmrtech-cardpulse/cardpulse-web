import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import Prose from '@/components/Prose';
import { guideBySlug } from '@/content/guides';
import { isPublished, postBySlug, publishedPosts } from '@/content/posts';
import { CLUSTER_LABEL, readingMinutes } from '@/content/types';
import { articleLd, breadcrumbLd, faqLd, pageMeta } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

/** Hourly, so a scheduled post goes live on its date without a deploy. */
export const revalidate = 3600;

/**
 * Only posts that are already due are prerendered. Scheduled ones are rendered
 * on demand once their date passes, and 404 until then via the check below.
 */
export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post || !isPublished(post)) return {};

  return pageMeta({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug(slug);

  // A post that exists but is not yet due must 404 rather than render. Serving
  // it early would put it in front of readers and crawlers ahead of schedule,
  // which is the entire thing the scheduling exists to prevent.
  if (!post || !isPublished(post)) notFound();

  const related = (post.related ?? [])
    .map(postBySlug)
    .filter((p): p is NonNullable<typeof p> => Boolean(p) && isPublished(p!));

  // The pillar is stored as a route. Resolve it to the actual guide so the
  // card shows its real title rather than a mapping kept in sync by hand.
  const pillarGuide = post.pillar ? guideBySlug(post.pillar.replace('/guides/', '')) : undefined;

  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(post.published));

  return (
    <>
      <Header />
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          published: post.published,
          updated: post.updated,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      {post.faqs && <JsonLd data={faqLd(post.faqs)} />}

      <main className="mx-auto max-w-[760px] px-5 pt-28 pb-24 sm:px-8">
        <nav aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="mono text-[13px] transition-colors hover:text-[var(--c-text)]"
            style={{ color: 'var(--c-text-secondary)' }}
          >
            Blog
          </Link>
        </nav>

        <h1 className="display mt-4" style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}>
          {post.title}
        </h1>
        <p className="mono mt-4 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
          {CLUSTER_LABEL[post.cluster]}. <time dateTime={post.published}>{published}</time>.{' '}
          {readingMinutes(post.blocks)} min read.
        </p>

        <div className="mt-10">
          <Prose blocks={post.blocks} />
        </div>

        {post.faqs && (
          <section className="mt-16">
            <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
              Common questions
            </h2>
            <dl className="mt-6">
              {post.faqs.map((f) => (
                <div key={f.q} className="py-5" style={{ borderBottom: 'var(--web-hairline)' }}>
                  <dt className="text-[16px] font-semibold">{f.q}</dt>
                  <dd
                    className="mt-2 max-w-[62ch] leading-relaxed"
                    style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
                  >
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {pillarGuide && (
          <section className="mt-16">
            <p className="col-label">The full guide</p>
            <Link href={`/guides/${pillarGuide.slug}`} className="panel mt-4 block p-6">
              <p className="text-[16px] font-semibold">{pillarGuide.title}</p>
              <p className="mt-1.5 text-[14px]" style={{ color: 'var(--c-text-secondary)' }}>
                {pillarGuide.summary}
              </p>
            </Link>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="col-label">Read next</h2>
            <div className="mt-4 grid gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="panel block p-5">
                  <h3 className="text-[16px] font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-[14px]" style={{ color: 'var(--c-text-secondary)' }}>
                    {r.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
