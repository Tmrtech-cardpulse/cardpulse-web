/**
 * Content checks that a type system cannot express.
 *
 *   npm run verify:articles
 *
 * These are the house rules from CLAUDE.md, enforced mechanically so they do
 * not decay into things everyone agreed to once. Runs in CI and in `verify`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

import { glossary } from '../content/glossary';
import { guides } from '../content/guides';
import { allPosts } from '../content/posts';
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
  '/blog',
  ...guides.map((g) => `/guides/${g.slug}`),
  ...allPosts.map((p) => `/blog/${p.slug}`),
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

// 9. Posts. The cluster rules, which are what make a cluster more than a tag.
for (const post of allPosts) {
  const where = `posts/${post.slug}`;
  const prose = plainTextWithLinks(post.blocks);
  const everything = [
    post.title,
    post.metaTitle ?? '',
    post.description,
    post.summary,
    prose,
    ...(post.faqs ?? []).flatMap((f) => [f.q, f.a]),
  ].join(String.fromCharCode(10));

  if (/[—–]/.test(everything)) {
    const line = everything.split(String.fromCharCode(10)).find((l) => /[—–]/.test(l));
    fail(where, `contains an em or en dash: ${line?.slice(0, 80)}`);
  }

  if (post.description.length < 110 || post.description.length > 175) {
    fail(where, `description is ${post.description.length} chars, wanted 110 to 175`);
  }

  const links = new Set(linksIn(post.blocks).map((h) => h.split('#')[0]));

  for (const href of links) {
    if (!ROUTES.has(href)) fail(where, `prose links to a route that does not exist: ${href}`);
  }

  // THE CLUSTER RULE. A post that only reaches its pillar through the footer
  // card is not supporting it: only in-text links carry weight, so the link has
  // to be in the body copy or the cluster is decorative.
  if (post.pillar && !links.has(post.pillar)) {
    fail(where, `declares pillar ${post.pillar} but does not link to it in the body copy`);
  }

  for (const slug of post.related ?? []) {
    if (!allPosts.some((x) => x.slug === slug)) fail(where, `related post does not exist: ${slug}`);
    if (slug === post.slug) fail(where, 'related links to itself');
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.published)) {
    fail(where, `published date is not ISO yyyy-mm-dd: ${post.published}`);
  }
}

// 10. Slugs unique across posts, and not colliding with a guide slug.
const postSlugs = allPosts.map((p) => p.slug);
if (new Set(postSlugs).size !== postSlugs.length) {
  const dupes = postSlugs.filter((s, i) => postSlugs.indexOf(s) !== i);
  fail('content/posts', `duplicate post slug: ${[...new Set(dupes)].join(', ')}`);
}
for (const slug of postSlugs) {
  if (guides.some((g) => g.slug === slug)) {
    fail('content/posts', `post slug collides with a guide slug: ${slug}`);
  }
}

// 11. Nothing that ships may import a path escaping this repo.
//
//    This one is here because it broke production. `scripts/emit-tokens.ts`
//    imports ../../cardpulse, which is correct: the app repo is the brand
//    authority. But `next build` type-checks everything in its include list,
//    and the sibling repo does not exist inside a Vercel build, so the deploy
//    failed on a file that never ships. Scripts are now excluded from the Next
//    tsconfig; this asserts that nothing in the shipped tree reintroduces the
//    same reach, where it could not be excluded.
{
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((entry) => {
      const full = join(dir, entry);
      return statSync(full).isDirectory() ? walk(full) : [full];
    });

  for (const dir of ['app', 'components', 'lib', 'content']) {
    for (const file of walk(dir)) {
      if (!/\.(ts|tsx)$/.test(file)) continue;
      const src = readFileSync(file, 'utf8');
      for (const m of src.matchAll(/from\s+'([^']+)'/g)) {
        // `../..` from any of these top-level directories leaves the repo.
        if (m[1].startsWith('../../')) {
          fail(file.replace(/\\/g, '/'), `imports outside the repo: ${m[1]}`);
        }
      }

      // 12. The dash rule, applied to component copy as well as to content.
      //
      //     The checks above only ever read the content modules, so the rule
      //     held perfectly in fifty posts and five guides while the privacy
      //     policy shipped five em-dashes and the support page an en-dash, in
      //     JSX, visible on the page. Whole-file rather than string-only: no
      //     dash belongs in this repo at all, and a check that has to parse
      //     JSX to decide is a check that will be wrong quietly.
      const dash = src.split(String.fromCharCode(10)).findIndex((l) => /[—–]/.test(l));
      if (dash !== -1) {
        const line = src.split(String.fromCharCode(10))[dash];
        fail(
          file.replace(/\\/g, '/'),
          `line ${dash + 1} contains an em or en dash: ${line.trim().slice(0, 80)}`,
        );
      }
    }
  }
}

if (failures.length) {
  console.error(`\n${failures.length} content problem${failures.length === 1 ? '' : 's'}:\n`);
  for (const f of failures) console.error(`  ${f}`);
  console.error('');
  process.exit(1);
}

const live = allPosts.filter((p) => new Date(p.published) <= new Date()).length;
console.log(
  `content ok: ${guides.length} guides, ${allPosts.length} posts (${live} live, ` +
    `${allPosts.length - live} scheduled), ${glossary.length} glossary terms, all links resolve`,
);
