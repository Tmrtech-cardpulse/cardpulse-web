import type { Block, Cluster } from './types';

/**
 * The seven clusters, as pages rather than as headings.
 *
 * The blog index already groups posts by cluster, but a heading on a shared
 * page is not a destination: nothing can link to it, it carries no title tag,
 * and a crawler has no reason to treat "Grading" on /blog as the home of
 * anything. A cluster hub gives each topic one URL that the pillar guide, the
 * posts underneath it and the index can all point at, which is the shape that
 * makes a cluster real rather than a filing convention. Ported from the journal
 * hubs on the sibling sites, where it is the structure that did the work.
 *
 * Two rules the intros are written under, both from CLAUDE.md and both easy to
 * break on a page like this:
 *
 * - No current licence holders and no grading fees stated as fact. Licences
 *   move and fee schedules change, so the copy describes how the structures
 *   work and sends the reader to the manufacturer for the current position.
 * - No claim about what any named card is worth. One example card is quoted on
 *   this site, it is labelled illustrative, and it is computed from the fixture.
 *
 * An intro is real copy, not a sentence wrapped around the cluster name. A hub
 * that says "posts about grading" below a heading that says "Grading" is a
 * thin page, and a thin page in the middle of a cluster is worse than no page,
 * because everything below it links up to it.
 */
export type ClusterHub = {
  /** The H1. Often longer than CLUSTER_LABEL, which has to fit a nav strip. */
  title: string;
  /** The <title>, where the H1 reads badly in a result. */
  metaTitle: string;
  /** 110 to 175 characters, same bound the posts are held to. */
  description: string;
  /** The guide that owns this topic, as a route. Absent where none exists yet. */
  pillar?: string;
  /** Real copy. Rendered through Prose, so links in it are checked. */
  intro: Block[];
};

export const CLUSTER_HUBS: Record<Cluster, ClusterHub> = {
  valuation: {
    title: 'Valuing a sports card',
    metaTitle: 'How to value a sports card: sold prices, comps and spread',
    description:
      'What a sports card is worth is a question about recent sold prices, not asking prices. How comps work, why the spread matters, and where the numbers come from.',
    pillar: '/guides/how-to-price-a-sports-card',
    intro: [
      {
        kind: 'p',
        text: 'A card does not have a price. It has a range of prices that people have recently paid, and a wider range that people are currently asking. Almost every disagreement about what a card is worth turns out to be one person quoting the first number and another quoting the second.',
      },
      {
        kind: 'p',
        text: 'These posts cover the working method: finding sales of the same card rather than a similar one, reading a spread instead of an average, knowing when there are too few sales to say anything at all, and what to do when the only comparable sales are from a different market. The full method is in [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
  },

  grading: {
    title: 'Grading, and what it does to the price',
    metaTitle: 'Card grading explained: what a grade changes and when it pays',
    description:
      'What a numeric grade actually certifies, why graded and raw are separate markets, and how to work out whether submitting a card is worth it before you send it.',
    pillar: '/guides/what-grading-does-to-the-price',
    intro: [
      {
        kind: 'p',
        text: 'Grading turns a card into something closer to a traded instrument: a sealed, numbered opinion about condition that other people will price without handling it. That is why a graded card and a raw one are not the same product and cannot share a price history, and why blending them produces a number that describes neither.',
      },
      {
        kind: 'p',
        text: 'These posts cover what a grade certifies and what it does not, why the gap between adjacent grades is often larger than the gap between grading companies, and how to think about whether a submission is worth making. Fees and turnaround times change often enough that this site does not quote them; the graders publish their own current schedules. The full picture is in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
  },

  selling: {
    title: 'Buying and selling in the UK',
    metaTitle: 'Buying and selling sports cards in the UK',
    description:
      'Selling cards from the UK: choosing a venue, what fees and postage do to a sale price, timing a sale, and the practical business of getting a card to a buyer intact.',
    intro: [
      {
        kind: 'p',
        text: 'The UK market is smaller than the American one and behaves differently because of it. Fewer bidders on any given card means wider spreads and slower sales, and a card that is common in the United States can be genuinely hard to find here. That cuts both ways, and knowing which way it cuts for a particular card is most of the skill.',
      },
      {
        kind: 'p',
        text: 'These posts cover choosing where to sell, what fees and postage actually take out of a sale, how to time a sale around a player rather than around a mood, and how to package a card so it arrives in the condition it left in.',
      },
      {
        kind: 'note',
        text: 'No pillar guide yet. This cluster gets one once the posts below have shown which part of selling carries the most weight, which is a better basis than guessing in advance.',
      },
    ],
  },

  products: {
    title: 'Sets, products and parallels',
    metaTitle: 'Sports card sets and products explained',
    description:
      'What separates a base card from an insert, a parallel and a numbered card, and how the structure of a modern product decides what is scarce inside it.',
    intro: [
      {
        kind: 'p',
        text: 'Modern products are built as hierarchies. A base set, inserts sitting alongside it, parallels of both in a ladder of scarcity, and a small number of cards that are individually numbered. Understanding that structure is what lets you look at an unfamiliar card and work out roughly where it sits before you look up a single price.',
      },
      {
        kind: 'p',
        text: 'These posts describe the structures rather than the current catalogue. Which company holds which licence changes, and a page that lists this year’s line-up as fact is wrong within a season, so the manufacturers are the right source for what is being printed now.',
      },
      {
        kind: 'note',
        text: 'No pillar guide yet. The same reasoning as selling: the pillar comes after the cluster, not before it.',
      },
    ],
  },

  rookies: {
    title: 'Rookie cards',
    metaTitle: 'Rookie cards explained: what counts, and what it changes',
    description:
      'What makes a card a rookie card, why the definition is less settled than it sounds, and why the label moves prices more than most other attributes.',
    pillar: '/guides/rookie-cards-explained',
    intro: [
      {
        kind: 'p',
        text: 'The rookie card is the most valuable label in the hobby and the least precisely defined. Different sports, different eras and different manufacturers have drawn the line in different places, which is why two cards of the same player from the same year can disagree about which one is the rookie.',
      },
      {
        kind: 'p',
        text: 'These posts cover what the label means in practice, how to tell a genuine first-year card from a later one carrying the same photograph, and why a rookie premium is a bet on a career rather than a fact about a piece of cardboard. The definition is set out in [rookie cards explained](/guides/rookie-cards-explained).',
      },
    ],
  },

  authenticity: {
    title: 'Authenticity and reprints',
    metaTitle: 'Spotting a reprint or a fake sports card',
    description:
      'How to tell a reprint from an original: print quality, card stock, cut and gloss, plus the listing habits that give a counterfeit away before the card arrives.',
    pillar: '/guides/how-to-spot-a-reprint',
    intro: [
      {
        kind: 'p',
        text: 'Most fakes are not sophisticated. They are reprints sold openly as reprints and then resold by someone further down the chain who either did not read the listing or is hoping you will not. The physical tells are usually obvious once you know to look, and the listing tells are often obvious before that.',
      },
      {
        kind: 'p',
        text: 'These posts cover what to check on the card itself, what to check in a listing before you bid, and why a price that looks like a bargain on a card that is never a bargain is the single most reliable warning there is. The physical checks are in [how to spot a reprint](/guides/how-to-spot-a-reprint).',
      },
    ],
  },

  care: {
    title: 'Storage and care',
    metaTitle: 'Storing sports cards: sleeves, holders and conditions',
    description:
      'How to store cards so their condition survives: sleeves and holders in the right order, what humidity and light do over years, and how to post a card safely.',
    intro: [
      {
        kind: 'p',
        text: 'Condition is the one attribute of a card you can still change, and the only direction it moves on its own is down. Nothing here is expensive. It is mostly a matter of putting the right things in the right order and keeping cards away from the two things that quietly ruin them, which are damp and sunlight.',
      },
      {
        kind: 'p',
        text: 'These posts cover sleeves and holders and which goes inside which, what a few years in a loft or a conservatory does, and how to package a card for post so it survives a sorting machine.',
      },
      {
        kind: 'note',
        text: 'No pillar guide, and none planned. This cluster is small and practical, and the storage post already does the job a pillar would do. A guide written above it would compete with it for the same question rather than support it.',
      },
    ],
  },
};

/** Every cluster slug, in the order the hubs should be listed. */
export const CLUSTER_ORDER: Cluster[] = [
  'valuation',
  'grading',
  'rookies',
  'authenticity',
  'selling',
  'products',
  'care',
];
