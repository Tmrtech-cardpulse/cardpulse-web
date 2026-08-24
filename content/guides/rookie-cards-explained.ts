import type { Guide } from '@/content/types';

const guide: Guide = {
  slug: 'rookie-cards-explained',
  title: 'Rookie cards, explained',
  metaTitle: 'Rookie cards explained: what counts as an RC and why it matters',
  description:
    'What makes a card a true rookie card, why several cards of the same player compete for the title, and why the label carries a premium.',
  summary:
    'Not every early card of a player is a rookie card, and the difference shows up in the price.',
  published: '2026-08-24',
  tags: ['rookies', 'pricing'],
  image: {
    src: '/photo/card-edge.jpg',
    alt:
      'Extreme close-up of the cut edge of a trading card, showing the pale paper core between its printed faces.',
  },
  related: ['how-to-price-a-sports-card', 'what-grading-does-to-the-price'],
  blocks: [
    {
      kind: 'p',
      text: 'A rookie card is a player first card in a major licensed set, released in the season they became eligible for one. Collectors shorten it to RC, and most modern cards that qualify carry an RC logo on the front.',
    },
    {
      kind: 'p',
      text: 'The premium exists because there is only ever one first, and because rookie cards are what the market has agreed to treat as the flagship card of a career. It is a convention rather than a law of nature, but it is a convention with money behind it.',
    },
    { kind: 'h2', text: 'Why more than one card claims the title' },
    {
      kind: 'p',
      text: 'A player can appear in several products in the same season, from several manufacturers, across several leagues. Youth and academy sets can also carry a player before their senior debut. That produces a group of candidate cards, and collectors do not always agree on which is the real one.',
    },
    {
      kind: 'ul',
      items: [
        'Earlier does not automatically mean more valuable. The set that becomes the accepted rookie is usually the most widely collected one, not the first one printed.',
        'Sticker and album issues are generally treated separately from trading cards, even where they are earlier.',
        'A card issued before the player signed with the club they became famous for can still be the accepted rookie.',
      ],
    },
    {
      kind: 'note',
      text: 'Where the hobby disagrees about which card is the rookie, both cards tend to hold a premium and neither holds the full one. That ambiguity is itself priced in.',
    },
    { kind: 'h2', text: 'Rookie cards and risk' },
    {
      kind: 'p',
      text: 'Rookie prices carry more expectation than established players, because a large part of the value is a bet on a career that has not happened yet. That cuts in both directions and it is the main reason rookie comps are volatile: a run of good form or a serious injury moves them faster than anything a pricing tool can keep up with.',
    },
    {
      kind: 'p',
      text: 'When pricing one, weight recent sales heavily and be sceptical of anything older than a few months. The method is the same as for any other card, in [how to price a sports card](/guides/how-to-price-a-sports-card), but the window that counts as recent is shorter.',
    },
  ],
  faqs: [
    {
      q: 'Does the RC logo guarantee a card is the rookie card?',
      a: 'It signals that the manufacturer considers it one under the licensing rules in place. It does not settle which of several competing cards the market treats as the flagship.',
    },
    {
      q: 'Are rookie cards always the most valuable card of a player?',
      a: 'No. A rare numbered parallel or a signed card from later in a career can be worth considerably more than a base rookie.',
    },
  ],
};

export default guide;
