import type { MetadataRoute } from 'next';

import { guides } from '@/content/guides';
import { site } from '@/lib/site';

/**
 * Generated from the content modules, so a new guide appears in the sitemap by
 * existing rather than by being remembered.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/guides`, changeFrequency: 'weekly', priority: 0.8 },
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

  return [...staticRoutes, ...guideRoutes];
}
