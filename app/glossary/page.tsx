import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { glossary } from '@/content/glossary';
import { headingId } from '@/content/types';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Sports card glossary',
  description:
    'Plain definitions of the words on a sports card listing: comps, parallels, refractors, pop reports, centring and the rest.',
  path: '/glossary',
});

/** DefinedTermSet is the correct type for a glossary and is well supported. */
function glossaryLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Sports card glossary',
    url: `${site.url}/glossary`,
    hasDefinedTerm: glossary.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      ...(t.aka ? { alternateName: t.aka } : {}),
    })),
  };
}

export default function GlossaryPage() {
  return (
    <>
      <Header />
      <JsonLd data={glossaryLd()} />

      <main id="main" className="mx-auto max-w-[880px] px-5 pt-28 pb-24 sm:px-8">
        <h1 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
          Sports card glossary
        </h1>
        <p
          className="mt-4 max-w-[58ch] leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-lg)' }}
        >
          What the words on a listing mean, and which of them change the price.
        </p>

        <dl className="mt-14">
          {glossary.map((t) => (
            <div
              key={t.term}
              id={headingId(t.term)}
              className="grid gap-3 py-7 md:grid-cols-[220px_1fr] md:gap-10"
              style={{ borderBottom: 'var(--web-hairline)' }}
            >
              <dt>
                <h2 className="text-[17px] font-semibold tracking-tight">{t.term}</h2>
                {t.aka && (
                  <p className="mono mt-1.5 text-[12px]" style={{ color: 'var(--c-text-secondary)' }}>
                    {t.aka.join(', ')}
                  </p>
                )}
              </dt>
              <dd>
                <p
                  className="max-w-[62ch] leading-relaxed"
                  style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
                >
                  {t.definition}
                </p>
                {t.priceEffect && (
                  <p
                    className="mt-3 max-w-[62ch] leading-relaxed"
                    style={{
                      color: 'var(--c-text-secondary)',
                      fontSize: 'var(--t-body-sm)',
                      borderLeft: '2px solid var(--c-border)',
                      paddingLeft: '0.9rem',
                    }}
                  >
                    {t.priceEffect}
                  </p>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </main>
      <Footer />
    </>
  );
}
