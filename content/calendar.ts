import type { Cluster } from './types';

/**
 * The editorial calendar: what is commissioned but not yet written.
 *
 * Ported from the journal calendar on the sibling sites, with one deliberate
 * difference. Theirs holds every slot, written or not, which means a published
 * article exists in two places and the two can disagree. Here the posts are the
 * record of what exists: a slot is removed from this file the moment the post
 * it describes is written, and `verify:articles` fails the build if a slot and
 * a post ever share a slug. So this file only ever answers one question, which
 * is what has been planned and not yet done.
 *
 * WHY IT EXISTS AT ALL. Fifty posts already carry publication dates, so the
 * cadence is real, but it stops on 25 November 2026 and nothing records what
 * comes after. A brief written months in advance is worth more than the same
 * brief improvised on the day, because it is written while the gap in the
 * coverage is visible rather than while looking for something to publish.
 *
 * WHAT A SLOT HAS TO CLEAR. The verify script catches a slug or a date that
 * collides with an existing post, and nothing more, because it cannot read. The
 * check it cannot do is the one that matters: the first draft of this file
 * commissioned six pieces that were already written under different slugs, and
 * a calendar that quietly plans duplicates is worse than no calendar, because
 * every duplicate is a page competing with a page the site already owns. Read
 * the cluster before adding a slot to it.
 *
 * The gaps below are what survived that read. Four of the six posts are sports
 * the app supports and the blog has never covered: every existing post is
 * football, basketball or baseball shaped, while the app prices F1, cricket,
 * rugby and the women's game. That is a coverage gap and a positioning gap at
 * the same time.
 *
 * A slot is not a promise to a reader. Nothing here is rendered with its date.
 * /blog/about names the next subjects without them, because a schedule
 * published and then missed is worse than no schedule published.
 */
export type Slot = {
  /** ISO date the piece is due. Two a week, continuing the existing cadence. */
  date: string;
  /** The slug it will take. Must not collide with a post that already exists. */
  slug: string;
  cluster: Cluster;
  /** What the piece is for, in one or two sentences. Written for whoever picks
   *  it up, which may be months from now and may not be the person who set it. */
  brief: string;
  /**
   * Set where the slot is a pillar guide rather than a post, so it lands in
   * `content/guides` at `/guides/{slug}`. A cluster may have at most one, and
   * the verify script fails a slot that plans a second.
   */
  pillar?: boolean;
};

/**
 * Planned, unwritten. Ordered by date, starting after the last existing post.
 *
 * Two of the three clusters without a pillar get one. `care` deliberately does
 * not: it holds three posts, `how-to-store-sports-cards` already does the job a
 * pillar would do, and a guide written above it would compete with it for the
 * same query rather than support it. The hub says so on the page.
 */
export const PLANNED: Slot[] = [
  {
    date: '2026-11-27',
    slug: 'how-to-sell-a-sports-card',
    cluster: 'selling',
    pillar: true,
    brief:
      'The pillar for selling, and deliberately not another "where to sell": that post exists and this has to sit above it. Venue, fees, postage, timing and listing quality as one decision, linking down to every post in the cluster in the body copy rather than only in the related grid.',
  },
  {
    date: '2026-12-01',
    slug: 'f1-cards-for-uk-collectors',
    cluster: 'products',
    brief:
      'Formula 1 cards, which the app prices and the blog has never mentioned. What gets printed, how a race-used relic differs from the football equivalent, and why a UK collector sits closer to this market than to most American ones.',
  },
  {
    date: '2026-12-03',
    slug: 'how-modern-card-products-are-built',
    cluster: 'products',
    pillar: true,
    brief:
      'The pillar for products. Base, insert, parallel, numbered and the ladder of scarcity between them, as a structure that lets a reader place an unfamiliar card before looking up a single price. Describes structures only, never the current line-up, because the licence position moves.',
  },
  {
    date: '2026-12-08',
    slug: 'reading-a-card-back',
    cluster: 'products',
    brief:
      'Identifying an unfamiliar card from its back: set, year, card number, and print run where it is stated. The practical skill every other product post assumes and none of them teaches.',
  },
  {
    date: '2026-12-10',
    slug: 'cricket-cards-explained',
    cluster: 'products',
    brief:
      'Cricket cards, another sport the app prices and the blog does not cover. Test and franchise cricket produce very different sets, and the UK is one of the few markets where this is a mainstream subject rather than a curiosity.',
  },
  {
    date: '2026-12-15',
    slug: 'womens-football-cards',
    cluster: 'rookies',
    brief:
      "Cards from the women's game. A young market with genuinely thin comparable sales, which makes it the clearest worked example of pricing a card when the data is sparse. Filed under rookies because that is where the interest concentrates.",
  },
  {
    date: '2026-12-17',
    slug: 'rugby-cards-explained',
    cluster: 'products',
    brief:
      'Rugby union and league. The smallest of the sports the app supports, and the one where a UK collector has the biggest home advantage, which is worth saying plainly.',
  },
  {
    date: '2026-12-22',
    slug: 'when-a-card-arrives-damaged',
    cluster: 'selling',
    brief:
      'What to do at both ends of a sale that went wrong in the post. Evidence worth keeping, what the platforms expect, and how to package next time so it does not recur. Describes process, never any platform current policy.',
  },
];
