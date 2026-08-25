import type { Post } from '@/content/types';

/** Rookies cluster. Links up to /guides/rookie-cards-explained. */
const PILLAR = '/guides/rookie-cards-explained';

export const rookiePosts: Post[] = [
  {
    slug: 'how-to-tell-if-a-card-is-a-rookie-card',
    title: 'How to tell if a card is a rookie card',
    metaTitle: 'How to tell if a sports card is a rookie card',
    description:
      'How to check whether the card in your hand is a rookie card, what the RC logo does and does not settle, and the two cases where the answer is genuinely contested.',
    summary: 'The logo helps. It does not settle it, and here is what does.',
    published: '2026-10-25',
    cluster: 'rookies',
    pillar: PILLAR,
    related: ['why-players-have-multiple-rookie-cards', 'what-makes-a-rookie-card-valuable'],
    blocks: [
      {
        kind: 'p',
        text: 'Start with the card itself. Most modern cards that qualify carry an RC logo on the front, placed there by the manufacturer under the licensing rules in force at the time.',
      },
      { kind: 'h2', text: 'What the logo settles' },
      {
        kind: 'p',
        text: 'That the manufacturer considered this a rookie card under the rules it was operating under. That is a real fact and it is where the certainty ends.',
      },
      { kind: 'h2', text: 'What it does not settle' },
      {
        kind: 'ul',
        items: [
          'Whether an earlier card of the same player exists, from a different manufacturer or a youth product.',
          'Which of several eligible cards the market treats as the flagship.',
          'Anything at all about older cards, since the logo convention is relatively recent.',
        ],
      },
      { kind: 'h2', text: 'The check that actually answers it' },
      {
        kind: 'p',
        text: 'Search the player name and the word rookie in completed sales and see which cards command a premium. The market has usually decided even where the paperwork has not, and its decision is the one that determines what you can sell for. The background to why this happens is [rookie cards, explained](/guides/rookie-cards-explained).',
      },
      {
        kind: 'note',
        text: 'Sellers describe a great many cards as rookie cards. The RC logo, the year against the player debut, and what the comps show are three checks that cost a minute and settle it more reliably than a listing title.',
      },
    ],
    faqs: [
      {
        q: 'Do older cards have an RC logo?',
        a: 'No. The logo convention is comparatively recent, so for older players rookie status is established by the year and by collector consensus rather than by a mark on the card.',
      },
    ],
  },

  {
    slug: 'why-players-have-multiple-rookie-cards',
    title: 'Why players have multiple rookie cards',
    metaTitle: 'Why one player can have several rookie cards',
    description:
      'Why a single player often has several cards competing for rookie status, how collectors settle which one leads, and what the ambiguity does to prices.',
    summary: 'Several cards, one title, and a market that has to decide between them.',
    published: '2026-10-28',
    cluster: 'rookies',
    pillar: PILLAR,
    related: ['how-to-tell-if-a-card-is-a-rookie-card', 'prospect-cards-versus-rookie-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'A player can appear in several licensed products in the same season, from more than one manufacturer, across domestic and European competitions. Each of those can carry rookie status, which is how one player ends up with a group of candidates rather than a single card.',
      },
      { kind: 'h2', text: 'How the market picks a winner' },
      {
        kind: 'p',
        text: 'Not by date. The card that becomes the accepted rookie is usually the one from the most widely collected product, not the earliest printed. Distribution and collector following decide it, and they decide it gradually.',
      },
      {
        kind: 'note',
        text: 'Where the hobby genuinely disagrees, both cards hold a premium and neither holds the full one. The ambiguity is priced in, and it can resolve years later.',
      },
      { kind: 'h2', text: 'What this means practically' },
      {
        kind: 'ol',
        items: [
          'Never assume your card is the rookie because it says rookie on it.',
          'Price each candidate separately from its own completed sales.',
          'If you are buying to hold, the widely collected flagship is the more liquid choice.',
        ],
      },
      {
        kind: 'p',
        text: 'The mechanics of the premium, and why rookie prices move faster than the rest of the market, are covered in [rookie cards, explained](/guides/rookie-cards-explained). The pricing method is unchanged: [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
  },

  {
    slug: 'prospect-cards-versus-rookie-cards',
    title: 'Prospect cards versus rookie cards',
    metaTitle: 'Prospect cards vs rookie cards: what is the difference?',
    description:
      'What separates a prospect or youth card from a true rookie card, why prospect cards can predate a debut by years, and how differently the two behave in price.',
    summary: 'A card can show a player years before they are eligible for a rookie card.',
    published: '2026-11-01',
    cluster: 'rookies',
    pillar: PILLAR,
    related: ['why-players-have-multiple-rookie-cards', 'what-makes-a-rookie-card-valuable'],
    blocks: [
      {
        kind: 'p',
        text: 'Prospect and youth products feature players before they have played senior football, sometimes years before. Those cards are earlier than any rookie card and are generally not treated as rookie cards.',
      },
      { kind: 'h2', text: 'Why earlier does not mean rookie' },
      {
        kind: 'p',
        text: 'Rookie status is a convention tied to a player first appearance in a major licensed senior set, not simply to being first in time. A youth or academy card predates that and sits in its own category.',
      },
      { kind: 'h2', text: 'How they behave differently' },
      {
        kind: 'ul',
        items: [
          '**Higher variance.** Most prospects never establish themselves, so most prospect cards go nowhere.',
          '**Smaller print runs.** Prospect products are collected by fewer people, which cuts both ways.',
          '**Sharper spikes.** When a prospect breaks through, these move fast, because supply is fixed and attention arrives suddenly.',
        ],
      },
      {
        kind: 'note',
        text: 'The reason a small number of prospect cards become famous is survivorship. For every one anybody discusses, there are hundreds of players whose prospect cards are worth nothing at all.',
      },
      { kind: 'h2', text: 'Pricing one' },
      {
        kind: 'p',
        text: 'Expect thin comps, because these cards trade rarely until the player matters. That is the situation described in [valuing a card with no recent sales](/blog/valuing-a-card-with-no-recent-sales), and the rookie premium mechanics are in [rookie cards, explained](/guides/rookie-cards-explained).',
      },
    ],
  },

  {
    slug: 'what-makes-a-rookie-card-valuable',
    title: 'What makes a rookie card valuable',
    metaTitle: 'What makes a rookie card valuable, and what does not',
    description:
      'The factors that actually drive rookie card prices, in order of how much they matter, and the widely repeated ones that turn out to matter much less.',
    summary: 'Four things drive it, and the one people focus on is fourth.',
    published: '2026-11-04',
    cluster: 'rookies',
    pillar: PILLAR,
    related: ['how-to-tell-if-a-card-is-a-rookie-card', 'prospect-cards-versus-rookie-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'Roughly in order of how much they move the number.',
      },
      { kind: 'h2', text: 'One: the player' },
      {
        kind: 'p',
        text: 'Everything else is a modifier on this. A rookie card is substantially a bet on a career, which is why these prices move on match results and transfers in a way other cards do not, and why they fall hard on injuries.',
      },
      { kind: 'h2', text: 'Two: which product it is in' },
      {
        kind: 'p',
        text: 'The flagship rookie of a widely collected set outsells an equally early card from a product few people follow. That consensus is what [why players have multiple rookie cards](/blog/why-players-have-multiple-rookie-cards) is about.',
      },
      { kind: 'h2', text: 'Three: the parallel and the condition' },
      {
        kind: 'p',
        text: 'A numbered parallel or a top graded copy multiplies whatever the base card is worth. This is a multiplier, not a driver: it magnifies existing demand rather than creating it.',
      },
      { kind: 'h2', text: 'Four: rarity on its own' },
      {
        kind: 'p',
        text: 'Genuinely the least important of the four, and the one that gets quoted most. A run of ten of a player nobody collects is worth less than an unnumbered card of a player everybody wants. Supply only prices where demand exists.',
      },
      {
        kind: 'note',
        text: 'This is why buying scarcity for its own sake disappoints so reliably. The scarcity is real and the demand was never there.',
      },
      { kind: 'h2', text: 'Reading it in the comps' },
      {
        kind: 'p',
        text: 'All four are visible in completed sales if you compare like with like: same product, same parallel, same grade. The method is [how to price a sports card](/guides/how-to-price-a-sports-card), and the rookie specific context is [rookie cards, explained](/guides/rookie-cards-explained).',
      },
    ],
  },
];
