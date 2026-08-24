import type { MetadataRoute } from 'next';

import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The auth callback is a redirect target with a token in the URL. It has
        // nothing to index and no reason to be crawled.
        disallow: ['/auth/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
