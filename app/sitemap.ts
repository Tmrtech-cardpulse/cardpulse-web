import type { MetadataRoute } from 'next';

import { guides } from '@/content/guides';
import { publishedPosts } from '@/content/posts';
import { site } from '@/lib/site';

/**
 * Generated from the content modules, so a new guide appears in the sitemap by
 * existing rather than by being remembered.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/guides`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/glossary`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/support`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${site.url}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${site.url}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${site.url}/delete-account`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${site.url}/guides/${g.slug}`,
    lastModified: new Date(g.updated ?? g.published),
    changeFrequency: 'monthly',
    priority: g.pillar ? 0.9 : 0.6,
  }));

  // Only posts that are actually live. Submitting a URL that 404s because its
  // publication date has not arrived is a self-inflicted crawl error.
  const postRoutes: MetadataRoute.Sitemap = publishedPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.published),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...guideRoutes, ...postRoutes];
}
