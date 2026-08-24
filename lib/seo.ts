import type { Metadata } from 'next';

import { site } from './site';

type PageMetaInput = {
  title: string;
  description: string;
  /** Path with a leading slash, or '/' for the home page. */
  path: string;
};

/** One place that knows how to build canonical URLs, OG tags and titles. */
export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  const fullTitle = path === '/' ? `${site.name} - ${site.tagline}` : `${title} - ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

/** JSON-LD for the app itself. Rendered once, in the root layout. */
export function softwareApplicationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Android',
    description: site.description,
    url: site.url,
    author: { '@type': 'Organization', name: site.operator },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free tier, with an optional Premium subscription.',
    },
  };
}

export function articleLd(input: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.published,
    dateModified: input.updated ?? input.published,
    author: { '@type': 'Organization', name: site.operator },
    publisher: { '@type': 'Organization', name: site.operator },
    mainEntityOfPage: `${site.url}${input.path}`,
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbLd(trail: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.label,
      item: `${site.url}${t.href}`,
    })),
  };
}
