/**
 * The content model for long-form pages.
 *
 * Typed TypeScript modules rather than MDX, matching the sibling sites. MDX
 * would add a loader and a second syntax to a repo whose whole styling story
 * is CSS-first Tailwind. More usefully: a guide is a module, so it can import
 * the example card and interpolate a REAL computed figure. A markdown file
 * could only hold a copy of that number, which would go stale in silence.
 *
 * British English. Zero em-dashes in any string that reaches the page.
 */

export type Faq = { q: string; a: string };

/**
 * A block of a document. `text` may carry the small inline syntax that
 * `components/Prose.tsx` understands: [label](/href), **bold** and `code`.
 * Nothing else, deliberately: this is a house format, not Markdown, and
 * everyone writing it is in this repo.
 */
export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  /** The caveat panel, for anything the app cannot actually know. */
  | { kind: 'note'; text: string }
  /** A figure lifted out of the prose. `value` is a string so callers can pass
   *  a computed one, for example summarise().spreadLabel. */
  | { kind: 'stat'; value: string; label: string };

/** A guide header image. `alt` is a real description: the pictures carry no
 *  words, so a screen reader should get the object rather than a filename. */
export type GuideImage = { src: string; alt: string };

export type Guide = {
  slug: string;
  title: string;
  /** The <title>, when the H1 is the wrong shape for a search result. */
  metaTitle?: string;
  /** Meta description. Aim for 140 to 160 characters. */
  description: string;
  /** The card blurb on /guides. Shorter and less keyword-shaped. */
  summary: string;
  published: string;
  updated?: string;
  tags: string[];
  image?: GuideImage;
  blocks: Block[];
  faqs?: Faq[];
  /**
   * Slugs of related guides, rendered at the foot. Internal linking is the
   * cheapest ranking factor there is and the easiest to forget, so it is a
   * required field rather than an optional flourish.
   */
  related?: string[];
  /** Set on the one guide that owns the topic and links down to the others. */
  pillar?: boolean;
};

/**
 * Blog clusters. A cluster is a group of posts that all link up to one pillar,
 * which is what "owning a topic" is made of. `selling`, `products` and `care`
 * have no pillar yet, recorded as a known gap in docs/topic-map.md.
 */
export type Cluster =
  | 'valuation'
  | 'grading'
  | 'selling'
  | 'products'
  | 'rookies'
  | 'authenticity'
  | 'care';

export const CLUSTER_LABEL: Record<Cluster, string> = {
  valuation: 'Valuing cards',
  grading: 'Grading',
  selling: 'Buying and selling',
  products: 'Sets and products',
  rookies: 'Rookies',
  authenticity: 'Authenticity',
  care: 'Storage and care',
};

/**
 * A supporting article.
 *
 * `pillar` is the route this post links UP to, and `verify:articles` fails the
 * build unless that link appears in the body copy. A post that only reaches its
 * pillar through the footer grid is not part of a cluster, it is just a page.
 */
export type Post = {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  summary: string;
  /** ISO date. A date in the future holds the post back: see posts/index.ts. */
  published: string;
  updated?: string;
  cluster: Cluster;
  /** Route of the pillar this post supports. Must be linked in `blocks`. */
  pillar?: string;
  blocks: Block[];
  faqs?: Faq[];
  /** Slugs of sibling posts. Navigation, not a link plan. */
  related?: string[];
};

/** One hobby term. The glossary is a real reference, not a keyword dump. */
export type Term = {
  term: string;
  /** Other names collectors use for the same thing. */
  aka?: string[];
  definition: string;
  /** Why it moves the price, when it does. Omitted when it does not. */
  priceEffect?: string;
};

/** Words per minute. Deliberately low: this is dense copy about money. */
const WPM = 200;

const blockText = (b: Block): string => {
  switch (b.kind) {
    case 'p':
    case 'h2':
    case 'h3':
    case 'note':
      return b.text;
    case 'ul':
    case 'ol':
      return b.items.join(' ');
    case 'stat':
      return `${b.value} ${b.label}`;
  }
};

/** Computed from the blocks, never typed into the guide. Same rule as the
 *  figures on the marketing page, and for the same reason: nobody editing a
 *  guide remembers to update a hand-written "4 min read". */
export function readingMinutes(blocks: Block[]): number {
  const words = blocks.map(blockText).join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM));
}

/** Plain text of a document, for JSON-LD and any future search index. */
export function plainText(blocks: Block[]): string {
  return blocks
    .map(blockText)
    .join('\n\n')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
}

/** GitHub-style slug, so an h2 is linkable without hand-written ids. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
