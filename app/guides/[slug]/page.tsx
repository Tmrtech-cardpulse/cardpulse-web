import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import Photo from '@/components/Photo';
import Prose from '@/components/Prose';
import { guideBySlug, guides } from '@/content/guides';
import { readingMinutes } from '@/content/types';
import { articleLd, breadcrumbLd, faqLd, pageMeta } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};

  return pageMeta({
    title: guide.metaTitle ?? guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const related = (guide.related ?? [])
    .map(guideBySlug)
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const published = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(guide.published));

  return (
    <>
      <Header />
      <JsonLd
        data={articleLd({
          title: guide.title,
          description: guide.description,
          path: `/guides/${guide.slug}`,
          published: guide.published,
          updated: guide.updated,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { label: 'Guides', href: '/guides' },
          { label: guide.title, href: `/guides/${guide.slug}` },
        ])}
      />
      {guide.faqs && <JsonLd data={faqLd(guide.faqs)} />}

      <main className="mx-auto max-w-[760px] px-5 pt-28 pb-24 sm:px-8">
        <nav aria-label="Breadcrumb">
          <Link
            href="/guides"
            className="mono text-[13px] transition-colors hover:text-[var(--c-text)]"
            style={{ color: 'var(--c-text-secondary)' }}
          >
            Guides
          </Link>
        </nav>

        <h1 className="display mt-4" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
          {guide.title}
        </h1>
        <p className="mono mt-4 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
          <time dateTime={guide.published}>{published}</time>. {readingMinutes(guide.blocks)} min
          read.
        </p>

        {guide.image && (
          <div className="mt-10">
            <Photo src={guide.image.src} alt={guide.image.alt} priority />
          </div>
        )}

        <div className="mt-10">
          <Prose blocks={guide.blocks} />
        </div>

        {guide.faqs && (
          <section className="mt-16">
            <h2 className="display" style={{ fontSize: 'var(--t-heading-lg)' }}>
              Common questions
            </h2>
            <dl className="mt-6">
              {guide.faqs.map((f) => (
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

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="col-label">Read next</h2>
            <div className="mt-4 grid gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="panel block p-5">
                  <h3 className="text-[16px] font-semibold">{r.title}</h3>
                  <p
                    className="mt-1.5 text-[14px]"
                    style={{ color: 'var(--c-text-secondary)' }}
                  >
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
