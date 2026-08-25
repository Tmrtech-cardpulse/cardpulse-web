import type { Post } from '@/content/types';

/**
 * Valuation cluster. Every post links up to /guides/how-to-price-a-sports-card
 * in body copy, which verify:articles enforces.
 *
 * These answer the questions someone types when they already have a card in
 * their hand. That intent is the reason the cluster leads: it is the closest
 * search behaviour to what the app actually does.
 */
const PILLAR = '/guides/how-to-price-a-sports-card';

export const valuationPosts: Post[] = [
  {
    slug: 'what-is-my-sports-card-worth',
    title: 'What is my sports card worth?',
    metaTitle: 'What is my sports card worth? How to find out properly',
    description:
      'How to work out what a sports card is actually worth, using completed sales rather than asking prices, and the three things that change the answer most.',
    summary: 'The question everyone starts with, and the method that answers it in about five minutes.',
    published: '2026-08-25',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['how-to-check-ebay-sold-listings', 'why-the-same-card-sells-for-different-prices'],
    blocks: [
      {
        kind: 'p',
        text: 'There is no central price for a trading card. There is only what people have recently paid for the same card in the same condition, which is a different thing and is the only thing worth reading.',
      },
      {
        kind: 'p',
        text: 'So the question is answerable, but not by looking up a number. It is answered by finding comparable completed sales and reading them properly. The full method is in [how to price a sports card](/guides/how-to-price-a-sports-card); this is the short version.',
      },
      { kind: 'h2', text: 'Identify the card exactly first' },
      {
        kind: 'p',
        text: 'Most bad valuations are identification failures rather than pricing failures. Before you look at a single sale, you need the year, the set, the card number and the parallel. A base card and a numbered parallel share a picture and do not share a price.',
      },
      {
        kind: 'ul',
        items: [
          'The year printed on the back, which is often a season such as 2020-21.',
          'The set name in full, including the league or region version.',
          'The card number, which identifies it inside the set.',
          'Any parallel marking: a colour, a finish, or a serial number such as 25/99.',
        ],
      },
      { kind: 'h2', text: 'Then find completed sales, not listings' },
      {
        kind: 'p',
        text: 'Search that identification on eBay, then filter to sold items. What you are looking at now is evidence. What you were looking at before was a list of hopes. That distinction has [its own post](/blog/how-to-check-ebay-sold-listings) because it is where most people go wrong.',
      },
      { kind: 'h2', text: 'Read the shape, not the top number' },
      {
        kind: 'p',
        text: 'Take the most recent handful of genuine matches and look at how tightly they cluster. Five sales within a few pounds of each other is a price. Five sales scattered across a wide range means the market has not settled, and the honest answer is a range rather than a figure.',
      },
      {
        kind: 'note',
        text: 'Ignore the highest sale. There is almost always one outlier, it is the one you will want to believe, and it is the one least likely to repeat.',
      },
      { kind: 'h2', text: 'What changes the answer most' },
      {
        kind: 'ol',
        items: [
          '**Condition.** A graded card and a raw card are different products with different comps.',
          '**The parallel.** Getting this wrong can be an order of magnitude, not a percentage.',
          '**Recency.** For an active player, a sale from last season describes a market that no longer exists.',
        ],
      },
      {
        kind: 'note',
        text: 'None of this is financial advice, and a comp is not an insurance valuation. It tells you what similar cards sold for, which is not a promise about yours.',
      },
    ],
    faqs: [
      {
        q: 'Is there a free way to check what a card is worth?',
        a: 'Yes. eBay sold listings are free to search and are the largest single source of completed UK sales. The work is in matching the exact card and discarding sales that are not comparable.',
      },
      {
        q: 'Why do price guide sites show a different number?',
        a: 'Most aggregate across conditions, regions and time in ways they do not show you. A recent sold comp for your exact card in your exact condition beats a blended average every time.',
      },
    ],
  },

  {
    slug: 'how-to-check-ebay-sold-listings',
    title: 'How to check eBay sold listings for cards',
    metaTitle: 'How to check eBay UK sold listings for trading cards',
    description:
      'A step by step for filtering eBay UK to completed sales, on desktop and mobile, and the four kinds of listing you should throw out before reading a price.',
    summary: 'Two clicks most people never find, and the filtering that has to happen after them.',
    published: '2026-08-25',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['what-is-my-sports-card-worth', 'best-offer-sales-and-hidden-prices'],
    blocks: [
      {
        kind: 'p',
        text: 'eBay shows active listings by default. Active listings are what sellers are asking, and asking prices drift upward on their own because the sensibly priced cards sell and leave the list. Completed sales are the evidence.',
      },
      { kind: 'h2', text: 'On desktop' },
      {
        kind: 'ol',
        items: [
          'Search the card: year, set, player, card number.',
          'In the left sidebar, scroll to **Show only** and tick **Sold items**.',
          'Sort by **Ended: recently first**, so you are reading the current market.',
        ],
      },
      { kind: 'h2', text: 'On mobile' },
      {
        kind: 'ol',
        items: [
          'Search the card, then tap **Filter** at the top right.',
          'Scroll to **Sold items** and turn it on, then apply.',
          'Change the sort to most recently ended.',
        ],
      },
      {
        kind: 'note',
        text: 'eBay keeps completed listings visible for a limited window, usually around 90 days. A card that has not sold in that window shows nothing. That is information, not a fault: it tells you the card trades rarely.',
      },
      { kind: 'h2', text: 'Now throw out the ones that are not your card' },
      {
        kind: 'p',
        text: 'The filter gives you sales. It does not give you comparable sales. Four kinds of listing need removing before you read anything, and this is the step that separates a real valuation from a guess.',
      },
      {
        kind: 'ul',
        items: [
          '**Lots.** Several cards sold together. The price is for the bundle.',
          '**Wrong parallel.** Same player, same set, different card. See [how to price a sports card](/guides/how-to-price-a-sports-card) on why this matters most.',
          '**Wrong condition.** A graded sale is not a comp for a raw card.',
          '**Best Offer accepted.** The price shown is not the price paid.',
        ],
      },
      {
        kind: 'p',
        text: 'What is left is your comp set. If that is fewer than about three sales, you do not have a price yet, you have an indication.',
      },
    ],
    faqs: [
      {
        q: 'Can I see sold listings older than 90 days?',
        a: 'Not through the standard search interface. Third party tools index further back, and for cards that trade rarely that history is often the only evidence there is.',
      },
      {
        q: 'Should I include international sales?',
        a: 'Only with care. A US sale reflects a different market, a different currency and postage that a UK buyer would pay differently. Compare UK to UK where you can.',
      },
    ],
  },

  {
    slug: 'why-the-same-card-sells-for-different-prices',
    title: 'Why the same card sells for different prices',
    metaTitle: 'Why identical sports cards sell for very different prices',
    description:
      'Six reasons two apparently identical cards sell for different money, from condition and format to timing, and how to tell which reason applies to yours.',
    summary: 'Two sales of the same card, weeks apart, at very different prices. Usually one of six things.',
    published: '2026-08-25',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['what-is-my-sports-card-worth', 'how-often-do-card-prices-change'],
    blocks: [
      {
        kind: 'p',
        text: 'You find two completed sales of what looks like the same card. One went for double the other. Before you decide which is right, work out which of these is happening, because in most cases neither sale is wrong.',
      },
      { kind: 'h2', text: 'They were not the same card' },
      {
        kind: 'p',
        text: 'This is the most common answer by a distance. Parallels share artwork, and photographs flatten the finish that distinguishes them. A refractor and a base card can look identical in a badly lit listing photo.',
      },
      { kind: 'h2', text: 'They were not in the same condition' },
      {
        kind: 'p',
        text: 'Raw cards carry an unpriced risk: the buyer is judging corners and centring from photographs. Two raw copies can genuinely be worth different money, and a graded copy is a different product entirely, covered in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
      { kind: 'h2', text: 'One was an auction and one was a fixed price' },
      {
        kind: 'p',
        text: 'An auction finds what the most motivated bidder will pay on a given evening. A Buy It Now is one seller guessing and one buyer accepting. Neither is more valid, but auctions tend to find the market and fixed prices tend to bracket it.',
      },
      { kind: 'h2', text: 'The timing was different' },
      {
        kind: 'p',
        text: 'Cards move on news. A hat-trick, a transfer, a long term injury, a call-up. If the sales are weeks apart and something happened in between, that is not noise, it is the market repricing.',
      },
      { kind: 'h2', text: 'The listing was different' },
      {
        kind: 'p',
        text: 'The same card sells for less with three dark photographs and a title missing the card number, because fewer people found it and fewer of those who did could tell what it was.',
      },
      { kind: 'h2', text: 'One of them was an outlier' },
      {
        kind: 'p',
        text: 'Sometimes two people wanted the same card at the same moment and the price says more about that evening than about the card. This is why the method in [how to price a sports card](/guides/how-to-price-a-sports-card) reads the cluster and not the peak.',
      },
    ],
  },

  {
    slug: 'valuing-a-card-with-no-recent-sales',
    title: 'Valuing a card with no recent sales',
    metaTitle: 'How to value a sports card when there are no recent sales',
    description:
      'What to do when a card has no completed sales to compare against: widening carefully, using adjacent cards, and knowing when the honest answer is that there is no price.',
    summary: 'Sometimes the search comes back empty. That is an answer too, and here is how to work with it.',
    published: '2026-08-28',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['what-is-my-sports-card-worth', 'how-to-value-a-whole-collection'],
    blocks: [
      {
        kind: 'p',
        text: 'You have identified the card, filtered to sold listings, and there is nothing there. This happens constantly with numbered parallels, lower profile players and anything outside the biggest sets, and it does not mean the card is worthless.',
      },
      { kind: 'h2', text: 'First, check it is not an identification problem' },
      {
        kind: 'p',
        text: 'An empty result is more often a wrong search than a rare card. Try the card number alone, try the set without the year, try the player name with the parallel colour. Sellers title listings inconsistently, and a search that matches your ideal title matches nothing.',
      },
      { kind: 'h2', text: 'Then widen one variable at a time' },
      {
        kind: 'ol',
        items: [
          'Drop the parallel and price the base card. That is your floor, not your answer.',
          'Look at the same parallel of a comparable player in the same set. That gives you the shape of the premium.',
          'Look at the same card from the adjacent year, if the set runs annually.',
        ],
      },
      {
        kind: 'note',
        text: 'Each widening step makes the estimate weaker. Two steps out you are no longer valuing a card, you are constructing an argument about one. That is fine as long as you know which you are doing.',
      },
      { kind: 'h2', text: 'When the answer is genuinely that there is no price' },
      {
        kind: 'p',
        text: 'Some cards do not have a market. A one of one has no comps by definition. A card with two sales in three years has a price the day someone wants it and not otherwise. The method in [how to price a sports card](/guides/how-to-price-a-sports-card) is explicit that thin evidence should be reported as thin, rather than dressed up as a figure.',
      },
      {
        kind: 'p',
        text: 'Practically, that means listing it and letting the market answer, or holding it. What it does not mean is picking the number you would like and treating it as established.',
      },
    ],
    faqs: [
      {
        q: 'Does a card with no sales mean it is rare?',
        a: 'Not necessarily. It usually means low demand rather than low supply. Rarity only creates value where somebody wants the card.',
      },
    ],
  },

  {
    slug: 'does-postage-count-in-a-card-value',
    title: 'Does postage count in a card value?',
    metaTitle: 'Should postage be included when comparing sports card prices?',
    description:
      'Whether to include postage when reading sold comps, why mixing the two adds noise to every figure, and which convention to pick and stick to.',
    summary: 'A small question that quietly distorts every comparison if you answer it inconsistently.',
    published: '2026-08-30',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['how-to-check-ebay-sold-listings', 'what-is-my-sports-card-worth'],
    blocks: [
      {
        kind: 'p',
        text: 'A card sells for £40 with free postage. Another sells for £36 plus £4.20. Those are the same transaction and two different numbers, and if you mix them across a comp set you have added several pounds of noise to every figure in it.',
      },
      { kind: 'h2', text: 'Pick one convention' },
      {
        kind: 'p',
        text: 'Either compare hammer prices to hammer prices, or totals to totals. Which you choose matters far less than choosing. The method in [how to price a sports card](/guides/how-to-price-a-sports-card) treats consistency as the requirement, not a particular answer.',
      },
      { kind: 'h2', text: 'When it barely matters' },
      {
        kind: 'p',
        text: 'On a £400 card, a £4 postage difference is one percent and beneath the noise floor of the comps themselves. Ignore it.',
      },
      { kind: 'h2', text: 'When it matters a lot' },
      {
        kind: 'p',
        text: 'On a £12 card it is a third of the price. At the low end, postage is not a rounding error, it is a meaningful share of what changed hands, and sellers move it in and out of the headline figure to look competitive in search results.',
      },
      {
        kind: 'note',
        text: 'Sellers know that search sorts on the headline price. A £1 card with £4 postage sits above a £5 card with free postage in a low-to-high sort, which is exactly why it is priced that way.',
      },
      { kind: 'h2', text: 'What the app does' },
      {
        kind: 'p',
        text: 'It reads hammer prices, consistently, and says so. Consistency is what makes a series of comps comparable to each other over time, which is the only thing that lets you see a trend rather than a scatter.',
      },
    ],
  },

  {
    slug: 'best-offer-sales-and-hidden-prices',
    title: 'Best Offer sales and hidden prices',
    metaTitle: 'Why eBay Best Offer sold prices are hidden, and what to do',
    description:
      'Why eBay hides the accepted amount on Best Offer sales, how to spot one in a comp set, and how much weight to give it when you cannot see the real figure.',
    summary: 'Some sold listings show a price that nobody paid. Here is how to spot them.',
    published: '2026-09-02',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['how-to-check-ebay-sold-listings', 'why-the-same-card-sells-for-different-prices'],
    blocks: [
      {
        kind: 'p',
        text: 'When a card sells through Best Offer, eBay shows the listed price struck through and does not publish what was actually accepted. The sale is real. The number is not the one that changed hands.',
      },
      { kind: 'h2', text: 'How to spot one' },
      {
        kind: 'p',
        text: 'In a completed listing, look for the price shown with a line through it, or wording indicating the item sold via Best Offer. In a list of results these are easy to skim past, which is precisely the problem: they enter your comp set at a price nobody paid.',
      },
      { kind: 'h2', text: 'What to do with them' },
      {
        kind: 'ul',
        items: [
          'Treat the shown figure as a **ceiling**, not a comp. The real price was lower by an unknown amount.',
          'If most of your comp set is Best Offer sales, your estimate should be a range that sits below the listed prices.',
          'Where you have any genuine fixed-price or auction comps, weight those far more heavily.',
        ],
      },
      {
        kind: 'p',
        text: 'This is one of four listing types worth discarding before reading a price, alongside lots, wrong parallels and mismatched condition. The full filtering pass is in [how to check eBay sold listings](/blog/how-to-check-ebay-sold-listings), and the method it feeds into is [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      { kind: 'h2', text: 'Why sellers use it anyway' },
      {
        kind: 'p',
        text: 'A high list price with offers enabled lets a seller advertise an anchor while quietly accepting less. It also keeps the public record of their sale looking strong. Understanding that motive is most of what you need to read these listings correctly.',
      },
    ],
    faqs: [
      {
        q: 'Can I ask the seller what they accepted?',
        a: 'You can, and some will tell you. Treat the answer as unverified: there is no record you can check and an incentive to quote high.',
      },
    ],
  },

  {
    slug: 'how-to-value-a-whole-collection',
    title: 'How to value a whole collection',
    metaTitle: 'How to value an entire sports card collection',
    description:
      'A practical order for valuing a collection of any size, why the long tail is worth less than it looks, and what a total figure can and cannot be used for.',
    summary: 'Valuing five hundred cards is not valuing one card five hundred times.',
    published: '2026-09-05',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['what-is-my-sports-card-worth', 'valuing-a-card-with-no-recent-sales'],
    blocks: [
      {
        kind: 'p',
        text: 'Most collections follow the same distribution: a small number of cards carry nearly all the value, and a long tail carries almost none. Valuing every card individually is therefore a poor use of a weekend, because most of the effort lands on cards that will not move the total.',
      },
      { kind: 'h2', text: 'Sort before you price' },
      {
        kind: 'ol',
        items: [
          'Separate anything numbered, autographed, graded, or a rookie of a name you recognise. This is the pile that matters.',
          'Separate anything from a premium set, even base cards.',
          'The rest is bulk. Do not price it card by card.',
        ],
      },
      { kind: 'h2', text: 'Price the top pile properly' },
      {
        kind: 'p',
        text: 'Every card in the first pile gets the full treatment from [how to price a sports card](/guides/how-to-price-a-sports-card): exact identification, completed sales only, recent comps weighted heavily. This is where your time goes and it is where the number comes from.',
      },
      { kind: 'h2', text: 'Value the bulk as bulk' },
      {
        kind: 'p',
        text: 'Bulk sells by weight or by the box, at prices that have nothing to do with the sum of its parts. Look for completed sales of comparable lots rather than adding up individual cards, because nobody will buy them individually and a total built that way is fiction.',
      },
      {
        kind: 'note',
        text: 'The gap between what a collection is worth as a collection and what it is worth as five hundred separate sales is mostly your own labour. Selling individually can genuinely be worth more, but it is a job, not a valuation.',
      },
      { kind: 'h2', text: 'What the total is good for' },
      {
        kind: 'p',
        text: 'It is a reasonable basis for insurance conversations, for tracking whether your collecting is going the way you think, and for deciding what to sell first. It is not a figure you can expect to receive next week, because realising it depends on finding a buyer for every part at once.',
      },
    ],
    faqs: [
      {
        q: 'Should I get a collection professionally valued?',
        a: 'For probate or a high value insurance policy, a formal valuation from a dealer or auction house is what those processes expect. For your own purposes, comps are better evidence and cost nothing.',
      },
    ],
  },

  {
    slug: 'how-often-do-card-prices-change',
    title: 'How often do card prices change?',
    metaTitle: 'How often do sports card prices change, and what moves them',
    description:
      'What actually moves a card price and on what timescale, from match results and transfers to set releases and grading populations, and how stale a comp can be.',
    summary: 'Some cards reprice in an afternoon. Others have not moved in three years.',
    published: '2026-09-09',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['why-the-same-card-sells-for-different-prices', 'what-is-my-sports-card-worth'],
    blocks: [
      {
        kind: 'p',
        text: 'There is no single answer, and that is the useful part: how fast a card reprices tells you how much to trust an old comp. A card that moves weekly needs recent evidence. A card that has traded flat for two years does not.',
      },
      { kind: 'h2', text: 'What moves a price within days' },
      {
        kind: 'ul',
        items: [
          'A standout performance, particularly in a televised competition.',
          'A transfer, especially between leagues or to a larger club.',
          'A serious injury, which moves prices down faster than good news moves them up.',
          'A first call-up or a tournament squad announcement.',
        ],
      },
      { kind: 'h2', text: 'What moves a price over months' },
      {
        kind: 'ul',
        items: [
          'A season of consistent form, which repricing lags behind rather than anticipates.',
          'A new set release, which pulls attention and money away from older products.',
          'Grading populations rising, as more copies reach the top grade and scarcity falls.',
        ],
      },
      { kind: 'h2', text: 'What this means for a comp' },
      {
        kind: 'p',
        text: 'For an active young player, a comp older than a few weeks is weak evidence. For a retired player in a stable set, a comp from six months ago is still informative. The method in [how to price a sports card](/guides/how-to-price-a-sports-card) weights recent sales heavily for exactly this reason, and the right window is shorter than most people assume.',
      },
      {
        kind: 'note',
        text: 'Prices fall faster than they rise. A run of good form gets priced in gradually; an injury gets priced in the same evening.',
      },
    ],
  },

  {
    slug: 'price-guides-versus-real-sales',
    title: 'Price guides versus real sales',
    metaTitle: 'Sports card price guides versus real completed sales',
    description:
      'What a printed or online card price guide is actually measuring, where the numbers come from, and why a recent completed sale beats a guide figure every time.',
    summary: 'Where guide numbers come from, and why they disagree with what you can actually get.',
    published: '2026-09-12',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['what-is-my-sports-card-worth', 'how-often-do-card-prices-change'],
    blocks: [
      {
        kind: 'p',
        text: 'Price guides are useful and they are not valuations. Knowing the difference is most of what stops a collection being mispriced in either direction.',
      },
      { kind: 'h2', text: 'What a guide is doing' },
      {
        kind: 'p',
        text: 'A guide publishes a figure per card, usually blended across a period and often across conditions and marketplaces. Blending is a feature: it smooths out the outliers that make single sales misleading. It is also the limitation, because the smoothing hides exactly what you need to see.',
      },
      { kind: 'h2', text: 'Three things the blend hides' },
      {
        kind: 'ol',
        items: [
          '**Condition spread.** One figure for a card that trades at very different prices raw, in a 9 and in a 10.',
          '**Recency.** A blend including sales from before a transfer describes a market that has since moved.',
          '**Market.** A figure including US sales is not what a card fetches on eBay UK, after postage and import costs.',
        ],
      },
      { kind: 'h2', text: 'When a guide is genuinely the better tool' },
      {
        kind: 'p',
        text: 'When you have no comps at all. A guide figure for a card with no recent sales is a reasonable starting point, and it beats guessing. This is the case covered in [valuing a card with no recent sales](/blog/valuing-a-card-with-no-recent-sales).',
      },
      {
        kind: 'p',
        text: 'Where recent comparable sales do exist, they win, and it is not close. The whole argument is set out in [how to price a sports card](/guides/how-to-price-a-sports-card): a completed sale is a number two people agreed on, and a guide figure is a number derived from sales you cannot inspect.',
      },
    ],
    faqs: [
      {
        q: 'Why do dealers quote guide prices?',
        a: 'They are a shared reference that speeds up a conversation, and a dealer buying will usually be working from real comps regardless of which number is being quoted at you.',
      },
    ],
  },

  {
    slug: 'why-your-card-is-worth-less-than-the-listings-say',
    title: 'Why your card is worth less than the listings say',
    metaTitle: 'Why sports card listings show much higher prices than cards sell for',
    description:
      'The structural reason active listing prices sit above real sale prices, why the gap widens over time on its own, and how to read a page of listings correctly.',
    summary: 'The gap between the listings and the sales is not pessimism. It is arithmetic.',
    published: '2026-09-16',
    cluster: 'valuation',
    pillar: PILLAR,
    related: ['how-to-check-ebay-sold-listings', 'price-guides-versus-real-sales'],
    blocks: [
      {
        kind: 'p',
        text: 'Search a card and the listings show £120. Filter to sold and the sales show £70. Nothing is wrong with either page. They are measuring different things, and the gap between them widens on its own without the market moving at all.',
      },
      { kind: 'h2', text: 'Why the gap grows by itself' },
      {
        kind: 'p',
        text: 'Cards priced near the market sell and leave the list. Cards priced optimistically stay, get relisted, and stay again. Over time the surviving listings are increasingly the ones nobody would buy, so the average asking price rises even as the real market sits still.',
      },
      {
        kind: 'note',
        text: 'The longer a listing has been up, the more it is evidence that nobody will pay that.',
      },
      { kind: 'h2', text: 'The other two reasons' },
      {
        kind: 'ul',
        items: [
          '**Anchoring.** A seller who lists high with offers enabled expects to accept less. The visible price is a negotiating position.',
          '**Fees.** A seller pricing to receive £70 lists above it, because the platform takes its share of the headline figure.',
        ],
      },
      { kind: 'h2', text: 'How to read the listings page anyway' },
      {
        kind: 'p',
        text: 'It is not useless, it is answering a different question. The count of active listings tells you about supply and about how quickly you could sell. If forty are listed and two have sold in three months, that is a real and important fact about your card that no sold comp will tell you.',
      },
      {
        kind: 'p',
        text: 'Use listings for liquidity and sold comps for price. The distinction is the whole subject of [sold prices versus asking prices](/guides/sold-prices-versus-asking-prices), and the method that uses both properly is in [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
  },
];
