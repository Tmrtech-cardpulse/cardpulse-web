/**
 * Content checks that a type system cannot express.
 *
 *   npm run verify:articles
 *
 * These are the house rules from CLAUDE.md, enforced mechanically so they do
 * not decay into things everyone agreed to once. Runs in CI and in `verify`.
 */
import { glossary } from '../content/glossary';
import { guides } from '../content/guides';
import { plainText, type Block } from '../content/types';

const failures: string[] = [];
const fail = (where: string, msg: string) => failures.push(`${where}: ${msg}`);

/** Every route the prose is allowed to link to. */
const ROUTES = new Set<string>([
  '/',
  '/guides',
  '/glossary',
  '/privacy',
  '/terms',
  '/support',
  '/delete-account',
  ...guides.map((g) => `/guides/${g.slug}`),
]);

const linksIn = (blocks: Block[]) =>
  Array.from(plainTextWithLinks(blocks).matchAll(/\]\((\/[^)]*)\)/g), (m) => m[1]);

/** plainText strips links, so link checking needs the raw strings. */
function plainTextWithLinks(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.kind) {
        case 'ul':
        case 'ol':
          return b.items.join(' ');
        case 'stat':
          return `${b.value} ${b.label}`;
        default:
          return b.text;
      }
    })
    .join('\n');
}

for (const g of guides) {
  const where = `guides/${g.slug}`;
  const prose = plainTextWithLinks(g.blocks);
  const everything = [
    g.title,
    g.metaTitle ?? '',
    g.description,
    g.summary,
    prose,
    ...(g.faqs ?? []).flatMap((f) => [f.q, f.a]),
  ].join('\n');

  // 1. Zero em-dashes and zero en-dashes. Binary, so it costs nothing to hold.
  if (/[—–]/.test(everything)) {
    const line = everything.split('\n').find((l) => /[—–]/.test(l));
    fail(where, `contains an em or en dash: ${line?.slice(0, 80)}`);
  }

  // 2. Meta descriptions that get truncated in a result do no work.
  if (g.description.length < 110 || g.description.length > 175) {
    fail(where, `description is ${g.description.length} chars, wanted 110 to 175`);
  }

  // 3. A related slug that does not resolve is a 404 waiting to be clicked.
  for (const slug of g.related ?? []) {
    if (!guides.some((x) => x.slug === slug)) fail(where, `related slug does not exist: ${slug}`);
    if (slug === g.slug) fail(where, 'related links to itself');
  }

  // 4. Internal links in prose must resolve.
  for (const href of linksIn(g.blocks)) {
    const path = href.split('#')[0];
    if (!ROUTES.has(path)) fail(where, `prose links to a route that does not exist: ${href}`);
  }

  // 5. The pillar has to link DOWN in the body. A grid of cards at the foot is
  //    exactly the shape of a link plan that does nothing, so in-text links are
  //    the requirement.
  if (g.pillar) {
    const linked = new Set(linksIn(g.blocks).map((h) => h.split('#')[0]));
    for (const child of guides.filter((x) => !x.pillar)) {
      if (!linked.has(`/guides/${child.slug}`)) {
        fail(where, `pillar does not link to /guides/${child.slug} in the body copy`);
      }
    }
  }
}

// 6. Exactly one pillar, or the topic has no owner.
const pillars = guides.filter((g) => g.pillar);
if (pillars.length !== 1) fail('content/guides', `expected exactly 1 pillar, found ${pillars.length}`);

// 7. Slugs are unique.
const slugs = guides.map((g) => g.slug);
if (new Set(slugs).size !== slugs.length) fail('content/guides', 'duplicate slug');

// 8. Same dash rule for the glossary.
for (const t of glossary) {
  const text = [t.term, t.definition, t.priceEffect ?? '', ...(t.aka ?? [])].join(' ');
  if (/[—–]/.test(text)) fail(`glossary/${t.term}`, 'contains an em or en dash');
  if (t.definition.length < 40) fail(`glossary/${t.term}`, 'definition is too short to be useful');
}

const terms = glossary.map((t) => t.term.toLowerCase());
if (new Set(terms).size !== terms.length) fail('content/glossary', 'duplicate term');

if (failures.length) {
  console.error(`\n${failures.length} content problem${failures.length === 1 ? '' : 's'}:\n`);
  for (const f of failures) console.error(`  ${f}`);
  console.error('');
  process.exit(1);
}

console.log(
  `content ok: ${guides.length} guides, ${glossary.length} glossary terms, all links resolve`,
);
