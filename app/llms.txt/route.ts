import { glossary } from '@/content/glossary';
import { guides } from '@/content/guides';
import { publishedPosts } from '@/content/posts';
import { pricing, site } from '@/lib/site';

/**
 * llms.txt. A plain-text map of what is on this site, for models that read one.
 * Generated from the same content modules as the sitemap so it cannot drift.
 */
export function GET() {
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    'Operated by TMR Tech in the United Kingdom. Prices quoted anywhere on the site are',
    'illustrative and are not investment advice. The app reads completed eBay UK listings;',
    'asking prices and sold prices are kept separate and never averaged together.',
    '',
    '## Guides',
    '',
    ...guides.map((g) => `- [${g.title}](${site.url}/guides/${g.slug}): ${g.summary}`),
    '',
    '## Blog',
    '',
    ...publishedPosts().map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.summary}`),
    '',
    '## Reference',
    '',
    `- [Sports card glossary](${site.url}/glossary): ${glossary.length} hobby terms defined, with the ones that affect price marked.`,
    '',
    '## About the product',
    '',
    `- Free tier: up to ${pricing.freeCardLimit} cards, ${pricing.freeScanLimit} free AI card scan, and manual or`,
    '  eBay-title card entry with no scan limit. eBay active listing prices, release news.',
    '- Premium: unlimited cards, unlimited AI card scanning, sold prices, portfolio profit and',
    '  loss, target price alerts and a per-card Pulse Score.',
    '',
    '## Legal',
    '',
    `- [Privacy](${site.url}/privacy)`,
    `- [Terms](${site.url}/terms)`,
    `- [Support](${site.url}/support)`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
