import { summarise } from '@/lib/exampleCard';
import type { Guide } from '@/content/types';

const s = summarise();

const guide: Guide = {
  slug: 'how-to-price-a-sports-card',
  title: 'How to price a sports card',
  metaTitle: 'How to price a sports card: sold comps, condition and grade',
  description:
    'A working method for pricing a sports card from completed sales rather than asking prices, and the four things that change the answer.',
  summary:
    'The method underneath everything else on this site: find comparable sales, discard the ones that are not comparable, and read what is left.',
  published: '2026-08-24',
  tags: ['pricing', 'comps', 'grading'],
  image: {
    src: '/photo/sleeves.jpg',
    alt:
      'Rows of trading cards standing in clear sleeves inside a dark storage box, lit from one side.',
  },
  pillar: true,
  related: [
    'sold-prices-versus-asking-prices',
    'what-grading-does-to-the-price',
    'rookie-cards-explained',
  ],
  blocks: [
    {
      kind: 'p',
      text: 'Pricing a card is one question asked carefully: what have people actually paid, recently, for this exact card in this exact condition? Every difficulty in the hobby comes from one of those four qualifiers being wrong.',
    },
    {
      kind: 'h2',
      text: 'Start from completed sales, not listings',
    },
    {
      kind: 'p',
      text: 'A listing price is a number one person hopes to get. A completed sale is a number two people agreed on. Only the second is evidence. This distinction is important enough that it has [its own guide](/guides/sold-prices-versus-asking-prices), and it is the single most common reason a collection is valued wrongly.',
    },
    {
      kind: 'p',
      text: 'On eBay UK, filter to sold listings before you read anything. The default view is active listings, which is the view that will mislead you.',
    },
    {
      kind: 'h2',
      text: 'Match the card exactly',
    },
    {
      kind: 'p',
      text: 'Modern sets are built out of parallels, and a parallel is a different card with the same picture on it. A base card, a numbered refractor and a one-of-one superfractor share a player, a year and a set name, and they do not share a price.',
    },
    {
      kind: 'ul',
      items: [
        'The set and the year, including which regional or league version it is.',
        'The card number, which is what actually identifies it inside the set.',
        'The parallel, and the print run if it carries one.',
        'Whether it is autographed, and whether the autograph is on-card or on a sticker.',
      ],
    },
    {
      kind: 'note',
      text: 'If you cannot tell which parallel you are holding, price it as the base card until you can. Guessing upward is how people talk themselves into a valuation.',
    },
    {
      kind: 'h2',
      text: 'Decide whether the condition is comparable',
    },
    {
      kind: 'p',
      text: 'A raw card and a graded card are not the same product, and prices for the two should not be mixed. Within raw cards, centring, corners and surface still move the number, which is why raw comps are wider apart than graded ones. See [what grading does to the price](/guides/what-grading-does-to-the-price) for how far apart.',
    },
    {
      kind: 'h2',
      text: 'Read the spread, not just the average',
    },
    {
      kind: 'p',
      text: 'Once you have a set of genuine comps, the useful output is not a single number. It is a range, plus a sense of how tight that range is. A card whose last ten sales sit within a few pounds of each other has a price. A card whose sales are scattered has a market that has not decided yet.',
    },
    {
      kind: 'stat',
      value: s.spreadLabel,
      label: `Spread between the highest and lowest of ${s.compCount} sales, ${s.title}`,
    },
    {
      kind: 'p',
      text: `On the example card used throughout this site, ${s.compCount} sales over ${s.windowDays} days ran from ${s.lowLabel} to ${s.highLabel}. The median of the most recent three is ${s.medianLabel}, which is a more honest working figure than either the peak or the average of the whole run.`,
    },
    {
      kind: 'h2',
      text: 'Weight recent sales more heavily',
    },
    {
      kind: 'p',
      text: 'A sale from eight months ago describes a market that no longer exists, particularly for an active player. Take the most recent handful, and treat older sales as context rather than evidence. A player having a good season can move a card faster than any of this can keep up with.',
    },
    {
      kind: 'h2',
      text: 'Know when you do not have an answer',
    },
    {
      kind: 'p',
      text: 'Some cards genuinely do not have a price, because not enough of them have sold. Two sales is not a market. When the evidence is thin, the correct output is "not enough data", and any tool that prints a confident figure over two sales is telling you something it does not know.',
    },
    {
      kind: 'h2',
      text: 'Two cases that need more than the method',
    },
    {
      kind: 'p',
      text: 'Rookie cards move faster than the rest of the market and carry a premium that is partly a bet on a career, so the window that counts as recent is shorter for them. [Rookie cards, explained](/guides/rookie-cards-explained) covers why several cards can claim the title and what that does to the price.',
    },
    {
      kind: 'p',
      text: 'And before any of this is worth doing, the card has to be the card. A reproduction has no comps at all, because every sale you would compare it against is a sale of something else. [How to spot a reprint](/guides/how-to-spot-a-reprint) is the five-minute version.',
    },
    {
      kind: 'note',
      text: 'None of this is financial advice. A comp tells you what similar cards sold for. It does not tell you what yours will sell for, and it is not an insurance valuation.',
    },
  ],
  faqs: [
    {
      q: 'How many sold comps do I need before the price is reliable?',
      a: 'More is better, but the shape matters more than the count. Five recent sales clustered within a narrow band is stronger evidence than twenty scattered across a year.',
    },
    {
      q: 'Should I include postage in the comp price?',
      a: 'Be consistent. Compare hammer prices to hammer prices, or totals to totals. Mixing the two adds noise roughly the size of a postage cost to every figure.',
    },
    {
      q: 'Do auction sales and Buy It Now sales count the same?',
      a: 'Both are completed sales, so both are evidence. Auctions tend to find the market price more reliably, because a Buy It Now is one seller guessing and one buyer accepting.',
    },
  ],
};

export default guide;
