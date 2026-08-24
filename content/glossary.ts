import type { Term } from '@/content/types';

/**
 * Hobby vocabulary. A real reference rather than a keyword dump: every entry
 * is a word a collector will actually meet on a listing, and `priceEffect` is
 * only filled in where the term genuinely moves the number.
 */
export const glossary: Term[] = [
  {
    term: 'Comp',
    aka: ['Comparable sale'],
    definition:
      'A completed sale of the same card in the same condition, used as evidence of what a card is worth. Short for comparable sale.',
    priceEffect:
      'Comps are the price. Everything else on this site is a way of finding the right ones and discarding the wrong ones.',
  },
  {
    term: 'Raw',
    definition:
      'A card that has not been graded, whether it is loose, in a sleeve or in a top loader.',
    priceEffect:
      'Raw cards sell for a wider range than graded ones, because the buyer is judging condition from photographs.',
  },
  {
    term: 'Slab',
    aka: ['Graded card'],
    definition:
      'The sealed plastic case a grading company returns a card in, carrying the grade and a certification number.',
    priceEffect:
      'The slab certifies condition and authenticity, so it narrows the range a card trades in as well as usually raising it.',
  },
  {
    term: 'Parallel',
    definition:
      'A variant of a base card with a different finish, border colour or print treatment, usually rarer than the base version.',
    priceEffect:
      'A parallel is a different card. Pricing one against base card comps is the most common mistake in the hobby.',
  },
  {
    term: 'Refractor',
    definition:
      'A chrome-stock parallel with a reflective coating that splits light across the surface when tilted.',
    priceEffect:
      'Refractors carry a premium over base cards, and the coloured versions carry a further premium roughly in line with how few were made.',
  },
  {
    term: 'Numbered',
    aka: ['Serial numbered', '/99'],
    definition:
      'A card stamped with its position in a limited print run, written as a fraction such as 25/99.',
    priceEffect:
      'The denominator is the supply. Lower generally means more valuable, and low single-digit numbers or the number matching a player shirt number can carry extra.',
  },
  {
    term: 'One of one',
    aka: ['1/1'],
    definition:
      'A card of which exactly one copy exists, usually the top parallel in a set.',
    priceEffect:
      'A one of one has no comps by definition, so it is priced from sales of similar cards rather than the same card.',
  },
  {
    term: 'Rookie card',
    aka: ['RC'],
    definition:
      'A player first card in a major licensed set, in the season they became eligible. Usually marked with an RC logo.',
    priceEffect:
      'Rookie cards command a premium and move faster than other cards of the same player, because part of the price is a bet on the career.',
  },
  {
    term: 'On-card auto',
    definition:
      'An autograph signed directly onto the card, as opposed to onto a clear sticker applied at the factory.',
    priceEffect:
      'On-card signatures are generally worth more than sticker autographs of the same player in the same set.',
  },
  {
    term: 'Patch',
    aka: ['Relic', 'Memorabilia card'],
    definition:
      'A card with a piece of material embedded in it, usually cut from a shirt. A player-worn patch and an event-worn patch are different things and the listing should say which.',
  },
  {
    term: 'Pop report',
    aka: ['Population report'],
    definition:
      'A grading company published count of how many copies of a card it has graded at each grade level.',
    priceEffect:
      'The pop report is the supply side of the price. A grade that looks rare is worth much less if thousands share it.',
  },
  {
    term: 'Centring',
    definition:
      'How evenly the borders frame the image on the front and back of a card. Quoted as a ratio such as 55/45.',
    priceEffect:
      'Centring is often the single factor that decides whether a card grades at the top level, so it can decide the price without being visible to a casual eye.',
  },
  {
    term: 'Hobby box',
    definition:
      'A sealed box sold through card shops rather than supermarkets, usually with better odds of hits than the retail version of the same product.',
  },
  {
    term: 'Hit',
    definition:
      'An autograph, patch or rare parallel pulled from a pack, as opposed to base cards.',
  },
  {
    term: 'Chase card',
    definition:
      'The card from a set that most collectors are trying to pull, usually a rare parallel or a marquee rookie autograph.',
  },
  {
    term: 'Print run',
    definition:
      'The number of copies of a card produced. Stated on numbered cards, and often unpublished on everything else.',
    priceEffect:
      'Where a print run is unpublished, the pop report is the closest available proxy for how many exist.',
  },
  {
    term: 'Top loader',
    definition:
      'A rigid plastic sleeve used to protect a raw card in storage and in the post. Not a grading case and not tamper-evident.',
  },
  {
    term: 'Reprint',
    definition:
      'A reproduction of an original card. Legal to sell when described as one, and a problem when it is not.',
    priceEffect:
      'A reprint has no comps, because the sales you would compare it against are sales of a different object.',
  },
];
