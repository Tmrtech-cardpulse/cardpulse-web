import type { Guide } from '@/content/types';

const guide: Guide = {
  slug: 'how-to-spot-a-reprint',
  title: 'How to spot a reprint',
  metaTitle: 'How to spot a reprinted or counterfeit sports card',
  description:
    'Practical checks for telling a reprint from a genuine card: print pattern, card stock, gloss, edges and the listing itself.',
  summary:
    'Most fakes fail on one of five checks, and four of them need nothing more than good light.',
  published: '2026-08-24',
  tags: ['authenticity', 'grading'],
  image: {
    src: '/photo/loupe.jpg',
    alt:
      'A jewellers loupe resting on a trading card, the lens magnifying the regular rosette pattern of offset printing.',
  },
  related: ['what-grading-does-to-the-price', 'how-to-price-a-sports-card'],
  blocks: [
    {
      kind: 'p',
      text: 'Reprints exist across the whole market, and they get better every year. The good news is that most of them fail an ordinary inspection, because reproducing a card is easy and reproducing the way a card was manufactured is not.',
    },
    { kind: 'h2', text: 'Look at the print pattern' },
    {
      kind: 'p',
      text: 'Under magnification a genuine card shows a regular rosette pattern from the printing process. A scanned and reprinted card usually shows the dot pattern of a modern inkjet or laser printer instead, which looks noticeably different: finer, more random, and often slightly blurred at the edges of lettering.',
    },
    {
      kind: 'p',
      text: 'A cheap loupe or a phone macro lens is enough. Compare against any card you already trust from the same era.',
    },
    { kind: 'h2', text: 'Feel the stock and check the edge' },
    {
      kind: 'ul',
      items: [
        'Thickness. Reprints are often noticeably thinner or thicker than the real thing, which is obvious once you hold a known-genuine card beside it.',
        'The edge. Cards are cut from sheets, and the cut edge of a genuine card shows a consistent layered core. A reprint on single-ply stock has no core to show.',
        'Gloss. Chrome and foil finishes are difficult to imitate and reprints tend to look flat under angled light, or glossy in a uniform way that the original was not.',
        'Weight. If you have a scale accurate to a tenth of a gram, a fake often gives itself away.',
      ],
    },
    { kind: 'h2', text: 'Read the listing, not just the card' },
    {
      kind: 'p',
      text: 'A large share of problem cards are declared, more or less. Words like reprint, custom, novelty, tribute, aceo or facsimile all mean the card is not the original, and they are frequently placed at the end of a long title where they are easy to miss. Some are also legitimately sold as art rather than as the real card.',
    },
    {
      kind: 'note',
      text: 'A stock photo instead of a photo of the actual card is a warning on any card worth faking. So is a seller with no history and a price well below every recent sale.',
    },
    { kind: 'h2', text: 'When to let someone else decide' },
    {
      kind: 'p',
      text: 'Above a certain value, authentication stops being optional. That is the part of grading people underrate: the number on the label is about condition, but the slab itself is a statement that the card is genuine and unaltered. See [what grading does to the price](/guides/what-grading-does-to-the-price).',
    },
    {
      kind: 'p',
      text: 'It also matters for pricing. A reprint has no comps, because the sales you would compare it against are sales of a different object. If a price looks impossibly good against [recent sold listings](/guides/sold-prices-versus-asking-prices), that gap is usually the explanation.',
    },
  ],
  faqs: [
    {
      q: 'Is buying a reprint illegal?',
      a: 'Selling a reproduction as an original is fraud. Selling one that is clearly described as a reprint is legal, and there is a real market for them as inexpensive display pieces.',
    },
    {
      q: 'Can a grading company miss a fake?',
      a: 'It happens, and the companies do reholder or correct errors. It is far less likely than an individual buyer missing one, which is the reason authentication carries a premium at all.',
    },
  ],
};

export default guide;
