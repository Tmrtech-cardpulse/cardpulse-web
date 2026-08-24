import type { Guide } from '@/content/types';

const guide: Guide = {
  slug: 'what-grading-does-to-the-price',
  title: 'What grading does to the price',
  metaTitle: 'What grading does to a sports card price: PSA, BGS and SGC',
  description:
    'What a grading company actually certifies, why one card carries several prices at once, and how to work out whether submitting is worth the fee.',
  summary:
    'A graded card and a raw card are different products. Here is what the slab is actually buying.',
  published: '2026-08-24',
  tags: ['grading', 'psa', 'pricing'],
  image: {
    src: '/photo/slab.jpg',
    alt:
      'A plain rigid clear plastic case holding a trading card, standing upright with a blank label strip.',
  },
  related: ['how-to-price-a-sports-card', 'how-to-spot-a-reprint'],
  blocks: [
    {
      kind: 'p',
      text: 'Grading does two things at once, and only one of them is about condition. It assigns a numeric grade, and it certifies that the card is genuine and unaltered. On expensive cards the second is often worth more than the first.',
    },
    { kind: 'h2', text: 'One card, several prices' },
    {
      kind: 'p',
      text: 'Once a card is worth grading it stops having a price and starts having a price per grade. The same card raw, in a 9 and in a 10 are three markets with three sets of comps, and they move independently of each other.',
    },
    {
      kind: 'p',
      text: 'This is why averaging graded and raw sales together produces a number that describes no card that actually exists.',
    },
    { kind: 'h2', text: 'What the grade is measuring' },
    {
      kind: 'ul',
      items: [
        '**Centring**, how evenly the borders frame the image, front and back.',
        '**Corners**, whether they are sharp or show wear under magnification.',
        '**Edges**, chipping and whitening, which is most visible on dark-bordered cards.',
        '**Surface**, scratches, print defects and any loss of gloss.',
      ],
    },
    {
      kind: 'p',
      text: 'The companies weight these differently and grade to different standards, which is why one card can come back with different numbers from different graders. A grade is a judgement by a company, not a physical constant.',
    },
    { kind: 'h2', text: 'Working out whether to submit' },
    {
      kind: 'p',
      text: 'The arithmetic is the gap between the raw price and the likely graded price, minus the grading fee, minus postage both ways, minus the risk that the grade comes back below what you hoped. On a card worth a few pounds raw that sum almost never works. On an expensive card the authentication alone can carry it.',
    },
    {
      kind: 'note',
      text: 'The likely grade is the part people get wrong. Cards look better in the hand than under a loupe, and the difference between a 9 and a 10 is frequently invisible without magnification.',
    },
    { kind: 'h2', text: 'Population reports are the other half' },
    {
      kind: 'p',
      text: 'Each grading company publishes how many copies of a card it has graded at each level. That population is supply. A card with three copies at the top grade behaves very differently from one with three thousand, even where the two trade for similar money today.',
    },
    {
      kind: 'p',
      text: 'Pricing the graded version follows the same method as anything else, set out in [how to price a sports card](/guides/how-to-price-a-sports-card): match the grade exactly, then read recent sales.',
    },
  ],
  faqs: [
    {
      q: 'Is a PSA 10 always worth more than a BGS 9.5?',
      a: 'No. The two companies use different scales and carry different reputations by category, so which commands a premium varies by set and by sport. Compare sales, not labels.',
    },
    {
      q: 'Does grading a common card make it valuable?',
      a: 'Rarely. Grading certifies condition, it does not create demand. A common card in a 10 is a common card in a plastic case.',
    },
  ],
};

export default guide;
