import type { Guide } from '@/content/types';

const guide: Guide = {
  slug: 'sold-prices-versus-asking-prices',
  title: 'Sold prices versus asking prices',
  metaTitle: 'Sold prices versus asking prices on eBay UK',
  description:
    'Why the number on an active listing is not evidence of value, why asking prices drift upward on their own, and how to filter eBay UK to sold listings.',
  summary:
    'The most common way a collection gets valued wrongly, and the two clicks that fix it.',
  published: '2026-08-24',
  tags: ['comps', 'ebay'],
  image: {
    src: '/photo/two-cards.jpg',
    alt:
      'Two trading cards on a dark slate surface, one lit by raking light and one left in shadow.',
  },
  related: ['how-to-price-a-sports-card', 'what-grading-does-to-the-price'],
  blocks: [
    {
      kind: 'p',
      text: 'Search a card on eBay and you are shown what sellers are asking. That is a list of opinions, and opinions are free. What you want is the much shorter list of what buyers paid.',
    },
    { kind: 'h2', text: 'Why asking prices run high' },
    {
      kind: 'p',
      text: 'Active listings are a survivor pool with the survivorship pointing the wrong way. Cards priced sensibly sell and leave the list. Cards priced optimistically stay, get relisted, and stay again. The longer a listing has been up, the more it is evidence that nobody will pay that.',
    },
    {
      kind: 'p',
      text: 'So the average asking price for a card drifts upward over time by construction, with no change in the underlying market at all.',
    },
    { kind: 'h2', text: 'How to see sold listings on eBay UK' },
    {
      kind: 'ol',
      items: [
        'Search for the card with the year, set, player and card number.',
        'Open the filters, then tick **Sold items**. On mobile this sits behind the Filter button.',
        'Sort by ending date, most recent first, so you are reading the current market rather than last year.',
        'Discard listings that are not your card: wrong parallel, wrong grade, or a lot of several cards sold together.',
      ],
    },
    {
      kind: 'note',
      text: 'Sold listings stay visible on eBay for a limited window, usually around 90 days. A card that has not sold in that window shows nothing, which is information rather than an error.',
    },
    { kind: 'h2', text: 'Where asking prices are still useful' },
    {
      kind: 'p',
      text: 'They are a ceiling, and they describe supply. If forty copies are listed and two have sold in three months, you have learned something real about how quickly you could sell yours, even though you have learned nothing about the price.',
    },
    {
      kind: 'p',
      text: 'That is why the app keeps the two apart and never averages them together. Active listings answer how easily you could sell. Sold listings answer for how much. Blending them answers neither. The full method is in [how to price a sports card](/guides/how-to-price-a-sports-card).',
    },
  ],
  faqs: [
    {
      q: 'Why does eBay only show around 90 days of sold listings?',
      a: 'It is a limit on the search interface rather than a gap in the data. For cards that trade rarely it means the honest answer is often that there is no recent evidence.',
    },
    {
      q: 'Are Best Offer sales shown at the price that was accepted?',
      a: 'No. eBay hides the accepted amount and shows the listed price struck through. Treat those as weak evidence, because the real figure was lower by an unknown amount.',
    },
  ],
};

export default guide;
