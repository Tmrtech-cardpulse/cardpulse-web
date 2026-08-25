import type { Post } from '@/content/types';

/**
 * Storage and care cluster. No pillar yet, recorded as a known gap in
 * docs/topic-map.md.
 */
export const carePosts: Post[] = [
  {
    slug: 'how-to-store-sports-cards',
    title: 'How to store sports cards',
    metaTitle: 'How to store sports cards so they hold their condition',
    description:
      'How to store a card collection so it keeps its condition, what actually damages cards in storage, and why the loft and the garage are the two worst places in a house.',
    summary: 'Most storage damage is environmental and slow, which is why nobody notices it happening.',
    published: '2026-11-18',
    cluster: 'care',
    related: ['penny-sleeves-top-loaders-and-one-touches', 'should-you-clean-a-trading-card'],
    blocks: [
      {
        kind: 'p',
        text: 'Cards are paper and coated board. They are damaged by moisture, heat, light and pressure, and almost all storage damage happens slowly enough that nobody notices until they look properly.',
      },
      { kind: 'h2', text: 'The four enemies' },
      {
        kind: 'ul',
        items: [
          '**Humidity.** Warps board and can stick surfaces together. The single most destructive factor in a British house.',
          '**Temperature swings.** Repeated expansion and contraction, which is what makes lofts and garages so bad.',
          '**Light.** Fades ink over years, particularly reds. Irreversible.',
          '**Pressure.** Cards stacked under weight take on a bow that never fully leaves.',
        ],
      },
      { kind: 'h2', text: 'Where to put them' },
      {
        kind: 'p',
        text: 'Inside the heated part of the house, off the floor, out of direct sun, in a cupboard or on a shelf. A wardrobe in a bedroom beats every specialist solution stored somewhere worse. Lofts and garages fail on temperature and humidity together, and they are where most collections are kept.',
      },
      {
        kind: 'note',
        text: 'Vertical, not stacked flat. Cards standing upright in a box carry their own weight. A tall flat stack presses the ones at the bottom for years.',
      },
      { kind: 'h2', text: 'Sorting for protection' },
      {
        kind: 'p',
        text: 'Give the protection to the cards that carry the value. Everything worth real money goes into sleeves and rigid holders; bulk goes in a box. The sorting logic is the same as the one in [how to value a whole collection](/blog/how-to-value-a-whole-collection): a small number of cards carry nearly all the value.',
      },
      { kind: 'h2', text: 'Why it pays' },
      {
        kind: 'p',
        text: 'Condition is priced. The gap between a card that has been stored well and the same card that has not is the gap between grades, and that gap is the subject of [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'Are card binders safe for valuable cards?',
        a: 'Modern side-loading pages with acid free plastic are fine. Old PVC pages are not: they degrade and can damage card surfaces over time.',
      },
    ],
  },

  {
    slug: 'penny-sleeves-top-loaders-and-one-touches',
    title: 'Penny sleeves, top loaders and one-touches',
    metaTitle: 'Penny sleeves, top loaders and one-touches: which to use',
    description:
      'What each card holder is for, the right order to combine them, and which to use at which value, including the one people habitually use wrongly.',
    summary: 'Three products, three jobs, and one that is used wrongly more often than not.',
    published: '2026-11-22',
    cluster: 'care',
    related: ['how-to-store-sports-cards', 'how-to-post-trading-cards-safely'],
    blocks: [
      {
        kind: 'p',
        text: 'The protection sequence is layered, and each layer does a different job.',
      },
      { kind: 'h2', text: 'Penny sleeve' },
      {
        kind: 'p',
        text: 'Thin soft plastic, goes on first, and nothing else should ever touch the card surface. Cheap enough that there is no reason for any card you care about to be without one. Slide the card in squarely: forcing a card into a sleeve at an angle dings corners, which is a self-inflicted grade.',
      },
      { kind: 'h2', text: 'Top loader' },
      {
        kind: 'p',
        text: 'Rigid plastic sleeve for a card already in a penny sleeve. Protects against bending and pressure. Never put a bare card in one: the interior is harder than the card and will scuff it.',
      },
      { kind: 'h2', text: 'Semi-rigid holder' },
      {
        kind: 'p',
        text: 'Slightly flexible, and the one people use wrongly. It is what graders want for submissions, because a card can be slid out without tools. It is not better than a top loader for storage; it is different, and it is the correct choice for [submitting cards for grading](/blog/how-to-submit-cards-for-grading-from-the-uk).',
      },
      { kind: 'h2', text: 'One-touch magnetic holder' },
      {
        kind: 'p',
        text: 'Two acrylic halves closing on a magnet, usually with UV protection. For display and for cards worth real money. Sized by point thickness, and putting a thick card into a holder sized for a thin one damages the card.',
      },
      {
        kind: 'note',
        text: 'Check the point size before buying. A standard modern card and a thick relic card need different holders, and the mismatch is only obvious once the card is already in it.',
      },
      { kind: 'h2', text: 'What to use when' },
      {
        kind: 'ol',
        items: [
          '**Bulk.** Boxes, standing upright, no sleeves needed.',
          '**Anything you would miss.** Penny sleeve and top loader.',
          '**Real money.** Penny sleeve and one-touch, or grade it.',
          '**Posting.** Sleeve, rigid, and the packing in [how to post trading cards safely](/blog/how-to-post-trading-cards-safely).',
        ],
      },
    ],
  },

  {
    slug: 'should-you-clean-a-trading-card',
    title: 'Should you clean a trading card?',
    metaTitle: 'Should you clean a trading card before selling or grading it?',
    description:
      'Why cleaning, pressing or trimming a card destroys value rather than restoring it, what counts as alteration, and the one thing that is safe to remove.',
    summary: 'No. And the reason why is worth understanding before you touch anything.',
    published: '2026-11-25',
    cluster: 'care',
    related: ['how-to-store-sports-cards', 'why-cards-get-rejected-by-graders'],
    blocks: [
      {
        kind: 'p',
        text: 'The short answer is no, and the long answer is that the attempt usually converts a worn card into an altered one, which is a much worse thing to own.',
      },
      { kind: 'h2', text: 'What counts as alteration' },
      {
        kind: 'ul',
        items: [
          '**Trimming** edges to improve centring or sharpen corners.',
          '**Pressing** to remove a bend or surface wrinkle.',
          '**Recolouring** edges to hide whitening.',
          '**Solvents or erasers** on the surface, including anything sold as a card cleaner.',
        ],
      },
      {
        kind: 'p',
        text: 'Graders detect all of these, and a card returned as altered carries that on its record permanently. The categories and what they mean are in [why cards get rejected by graders](/blog/why-cards-get-rejected-by-graders).',
      },
      {
        kind: 'note',
        text: 'A card with honest wear is a lower grade. An altered card is a card nobody can grade and nobody should buy. Those are not adjacent outcomes.',
      },
      { kind: 'h2', text: 'Why it is treated so severely' },
      {
        kind: 'p',
        text: 'Because the point of alteration is to make a card appear better than it is, so it becomes a misrepresentation the moment it is sold. That is why the market treats it as a defect of honesty rather than a defect of condition, and why the checks buyers run for it sit alongside the checks for reproductions in [how to spot a reprint](/guides/how-to-spot-a-reprint).',
      },
      { kind: 'h2', text: 'The one safe thing' },
      {
        kind: 'p',
        text: 'Loose surface dust, removed with a clean dry microfibre cloth, very lightly. Nothing wet, nothing abrasive, no pressure. If the mark does not lift with that, it is part of the card now.',
      },
      { kind: 'h2', text: 'What to do instead' },
      {
        kind: 'p',
        text: 'Photograph the flaw honestly, describe it plainly, and price accordingly from comps of similar condition, per [how to price a sports card](/guides/how-to-price-a-sports-card). A disclosed flaw costs you some money. An undisclosed one costs you the sale and your record.',
      },
    ],
  },
];
