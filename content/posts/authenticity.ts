import type { Post } from '@/content/types';

/** Authenticity cluster. Links up to /guides/how-to-spot-a-reprint. */
const PILLAR = '/guides/how-to-spot-a-reprint';

export const authenticityPosts: Post[] = [
  {
    slug: 'how-to-spot-a-fake-autograph',
    title: 'How to spot a fake autograph',
    metaTitle: 'How to spot a fake autograph on a sports card',
    description:
      'What to check on a signed card, why manufacturer autographs are a different problem from private signings, and the ink and pressure tells that give forgeries away.',
    summary: 'Two very different problems, depending on where the signature came from.',
    published: '2026-11-08',
    cluster: 'authenticity',
    pillar: PILLAR,
    related: ['what-is-a-certificate-of-authenticity-worth', 'autographs-on-card-versus-sticker'],
    blocks: [
      {
        kind: 'p',
        text: 'Signed cards split into two categories with completely different risk profiles, and the first question is always which one you are looking at.',
      },
      { kind: 'h2', text: 'Manufacturer autographs' },
      {
        kind: 'p',
        text: 'Signed under contract and inserted into packs. The manufacturer witnessed the signing, the card is part of a known checklist, and forging one means forging the card as well as the signature. Risk here is comparatively low, and it concentrates on cards altered after the fact.',
      },
      { kind: 'h2', text: 'Private and in-person signings' },
      {
        kind: 'p',
        text: 'A card signed at an event, through the post, or by a third party. There is no manufacturer record, so the entire weight rests on provenance, and this is where nearly all the problems are.',
      },
      { kind: 'h2', text: 'What to look at' },
      {
        kind: 'ul',
        items: [
          '**Pressure variation.** A genuine signature varies in line weight as the pen speeds up and slows. A traced one has unnaturally even pressure.',
          '**Speed.** Real signatures are fast, with confident entry and exit strokes. Forgeries hesitate, and hesitation shows as wobble at the start of letters.',
          '**Ink sitting on the surface.** On glossy stock, ink applied later can bead or sit differently from a factory sticker autograph.',
          '**Comparison.** Find several known genuine examples. Look at the overall rhythm rather than matching letter shapes, which vary legitimately.',
        ],
      },
      {
        kind: 'note',
        text: 'A signature that matches a known example perfectly, stroke for stroke, is a warning rather than a reassurance. Nobody signs identically twice.',
      },
      { kind: 'h2', text: 'When to stop guessing' },
      {
        kind: 'p',
        text: 'Above a certain value, third party authentication exists precisely because this judgement is hard and consequential. The same reasoning applies as with the card itself, in [how to spot a reprint](/guides/how-to-spot-a-reprint): the point at which you should stop deciding for yourself arrives sooner than most people think.',
      },
      {
        kind: 'p',
        text: 'A price well below the completed sales is the other signal. Work out what it should be using [how to price a sports card](/guides/how-to-price-a-sports-card), and treat a large gap as a question rather than a bargain.',
      },
    ],
  },

  {
    slug: 'what-is-a-certificate-of-authenticity-worth',
    title: 'What is a certificate of authenticity worth?',
    metaTitle: 'Are certificates of authenticity worth anything on sports cards?',
    description:
      'What a certificate of authenticity actually proves, why most are worth nothing, and the specific circumstances where one genuinely adds value to a signed card.',
    summary: 'Most are worth precisely what it costs to print one.',
    published: '2026-11-11',
    cluster: 'authenticity',
    pillar: PILLAR,
    related: ['how-to-spot-a-fake-autograph', 'how-to-check-a-graded-card-is-genuine'],
    blocks: [
      {
        kind: 'p',
        text: 'A certificate of authenticity is a document asserting that an item is genuine. Its value is entirely the value of the assertion, which means it is worth exactly as much as the reputation of whoever signed it.',
      },
      { kind: 'h2', text: 'Why most are worth nothing' },
      {
        kind: 'p',
        text: 'Anyone can print one. A certificate from an unknown company, or from the seller themselves, is a statement by the person who wants your money that you should trust them. It carries no independent weight, and a forger producing a fake card will produce a fake certificate at the same time because it costs nothing to do so.',
      },
      {
        kind: 'note',
        text: 'A certificate that arrives with a card from a private seller adds no evidence. It was in the same hands as the card.',
      },
      { kind: 'h2', text: 'When one genuinely matters' },
      {
        kind: 'ul',
        items: [
          '**A recognised authenticator** whose opinion the market prices in, and whose records you can check independently.',
          '**A tamper evident link** between the certificate and the item, usually a numbered hologram matching an online database.',
          '**Documented provenance**: photographs of the signing, event records, or a chain of ownership that can be verified.',
        ],
      },
      { kind: 'h2', text: 'What buyers actually pay for' },
      {
        kind: 'p',
        text: 'Not the paper. They pay for a verifiable record that a party with a reputation to lose has examined the item. That is the same service a grading slab provides for condition and authenticity together, described in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
      {
        kind: 'p',
        text: 'For the card itself rather than the signature, the checks are in [how to spot a reprint](/guides/how-to-spot-a-reprint).',
      },
    ],
  },

  {
    slug: 'how-to-check-a-graded-card-is-genuine',
    title: 'How to check a graded card is genuine',
    metaTitle: 'How to check a graded card and its slab are genuine',
    description:
      'How to verify a graded card using the free certificate lookup, what a counterfeit slab looks like, and the mismatch that reveals a card swapped into a real case.',
    summary: 'A free lookup that takes thirty seconds and catches the expensive version of this fraud.',
    published: '2026-11-15',
    cluster: 'authenticity',
    pillar: PILLAR,
    related: ['what-is-a-certificate-of-authenticity-worth', 'how-to-spot-a-fake-autograph'],
    blocks: [
      {
        kind: 'p',
        text: 'A slab moves the authenticity question from the card to the case. That is usually an improvement, and it introduces one new failure mode worth knowing about.',
      },
      { kind: 'h2', text: 'Use the certificate lookup' },
      {
        kind: 'p',
        text: 'Every major grading company publishes a free lookup. Enter the certificate number from the label. It returns the card that number was assigned to, and the grade.',
      },
      {
        kind: 'ol',
        items: [
          'Does the returned card match the card in the case? Same player, set, year, card number.',
          'Does the returned grade match the label?',
          'Does anything come back at all? A number with no record is decisive.',
        ],
      },
      {
        kind: 'note',
        text: 'Do this **before** buying, from the listing photographs. A seller who will not photograph the label clearly enough to read the certificate number has told you something.',
      },
      { kind: 'h2', text: 'The two frauds' },
      {
        kind: 'ul',
        items: [
          '**A counterfeit slab.** Whole case and label faked. Usually caught by the lookup, since the number is invented or belongs to a different card.',
          '**A cracked and reswapped case.** A genuine slab opened, the original card removed, and a lesser or fake card sealed back in. The lookup returns a real record, and the record does not match what you are holding.',
        ],
      },
      {
        kind: 'p',
        text: 'The second is why step one above is checking the card against the record rather than checking that a record exists. Look also for a case that has been reglued: uneven seams, tool marks, or a label sitting slightly wrong.',
      },
      { kind: 'h2', text: 'And the price' },
      {
        kind: 'p',
        text: 'A graded card offered well below its completed sales is the strongest single signal that something is wrong. Establish what it should be with [how to price a sports card](/guides/how-to-price-a-sports-card), and for raw cards the physical checks are in [how to spot a reprint](/guides/how-to-spot-a-reprint).',
      },
    ],
  },
];
