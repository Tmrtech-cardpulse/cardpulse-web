import type { Post } from '@/content/types';

/**
 * Sets and products cluster.
 *
 * A deliberate constraint runs through all of these: no post asserts who
 * currently holds which league licence, or what a specific card is worth today.
 * Licences move between manufacturers and prices move weekly, so a post that
 * states either is wrong within a season. These describe how the products are
 * structured, which is stable, and point at comps for anything that is not.
 *
 * No pillar yet, recorded as a known gap in docs/topic-map.md.
 */
export const productPosts: Post[] = [
  {
    slug: 'what-is-topps-chrome',
    title: 'What is Topps Chrome?',
    metaTitle: 'What is Topps Chrome, and why does it cost more?',
    description:
      'What makes Topps Chrome different from a base Topps set, how the refractor parallel structure works, and why chrome stock is harder to grade well.',
    summary: 'The same checklist on different card stock, and why that changes everything about the price.',
    published: '2026-09-22',
    cluster: 'products',
    related: ['what-is-panini-prizm', 'topps-chrome-versus-panini-prizm'],
    blocks: [
      {
        kind: 'p',
        text: 'Chrome is a card stock, not a checklist. A Chrome set typically covers much the same players as the paper set it sits alongside, printed on a reflective metallic board instead of cardboard.',
      },
      { kind: 'h2', text: 'Why that matters to the price' },
      {
        kind: 'p',
        text: 'Two reasons, and neither is that chrome looks nicer. First, the parallel structure: chrome stock takes coloured coatings, so a single card exists in a long ladder of versions from a common base to a one of one. Second, print runs on chrome products are typically smaller than the paper equivalents.',
      },
      { kind: 'h2', text: 'Refractors' },
      {
        kind: 'p',
        text: 'A refractor is a chrome card with a coating that splits light across the surface when tilted. Coloured refractors sit above plain ones, and the scarcer colours are usually serial numbered. The naming varies by product and year, which is exactly why the card number and the parallel matter more than the player name when you are pricing one.',
      },
      {
        kind: 'note',
        text: 'A photograph flattens the difference between a base chrome card and a refractor. This is the single most common identification error when reading completed sales, and it is why [how to price a sports card](/guides/how-to-price-a-sports-card) puts matching the parallel above everything else.',
      },
      { kind: 'h2', text: 'Chrome and grading' },
      {
        kind: 'p',
        text: 'Chrome stock shows everything. Surface scratches, print lines and edge chipping that paper would hide are visible under raking light, which makes high grades genuinely harder to achieve. That is part of why graded chrome cards carry the premium they do, as covered in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'Is a Topps Chrome card always worth more than the paper version?',
        a: 'Usually, for the same player and card number, but check completed sales rather than assuming. Print run and demand vary by set and year.',
      },
    ],
  },

  {
    slug: 'what-is-panini-prizm',
    title: 'What is Panini Prizm?',
    metaTitle: 'What is Panini Prizm, and how do the parallels work?',
    description:
      'What Panini Prizm is, how its coloured parallel ladder is structured, which versions are serial numbered, and what a Prizm card actually is underneath.',
    summary: 'A chromium set built around a colour ladder, and how to read where a card sits on it.',
    published: '2026-09-25',
    cluster: 'products',
    related: ['what-is-topps-chrome', 'topps-chrome-versus-panini-prizm'],
    blocks: [
      {
        kind: 'p',
        text: 'Prizm is Panini chromium product line, built on reflective stock and organised around a ladder of coloured parallels. The word prizm refers to that finish, which is why you see it used both as the set name and as a description of the card type.',
      },
      { kind: 'h2', text: 'The colour ladder' },
      {
        kind: 'p',
        text: 'A single card typically exists as a base version and then in a series of coloured versions, some unnumbered and widely available, others serial numbered in small quantities. The higher up the ladder, the fewer exist.',
      },
      {
        kind: 'ul',
        items: [
          '**Base.** The common version, no colour treatment.',
          '**Unnumbered colours.** Scarcer than base, but no stated print run.',
          '**Numbered colours.** Stamped with a print run, such as 25/99.',
          '**One of one.** A single copy, usually the top of the ladder.',
        ],
      },
      {
        kind: 'note',
        text: 'Exact colour names and their order change between sports, sets and years. Do not carry an assumption from one product into another: check the card, and check what the completed sales for that specific parallel say.',
      },
      { kind: 'h2', text: 'Retail exclusives' },
      {
        kind: 'p',
        text: 'Some colours appear only in retail packaging and others only in hobby boxes. That is a deliberate structure rather than an accident, and it is why the same card number can trade at very different prices depending on which colour you have. The distinction is explained in [hobby, retail and blaster boxes](/blog/hobby-retail-and-blaster-boxes).',
      },
      { kind: 'h2', text: 'Identifying one correctly' },
      {
        kind: 'p',
        text: 'The parallel is the price. Get it wrong and you are reading comps for a different card, which is the error [how to price a sports card](/guides/how-to-price-a-sports-card) is largely built to prevent.',
      },
    ],
  },

  {
    slug: 'topps-chrome-versus-panini-prizm',
    title: 'Topps Chrome versus Panini Prizm',
    metaTitle: 'Topps Chrome vs Panini Prizm: what actually differs',
    description:
      'How the two dominant chromium product lines compare on structure, parallel naming and collector following, and why comparing them card for card rarely works.',
    summary: 'Two products doing a similar job, and the comparison people actually want is narrower than they think.',
    published: '2026-09-29',
    cluster: 'products',
    related: ['what-is-topps-chrome', 'what-is-panini-prizm'],
    blocks: [
      {
        kind: 'p',
        text: 'Both are chromium sets built around coloured parallels of a shared checklist. At that level they are the same idea executed by two companies, and the interesting differences are narrower and more practical.',
      },
      { kind: 'h2', text: 'What genuinely differs' },
      {
        kind: 'ul',
        items: [
          '**Parallel naming.** Refractor language versus prizm language, with different colour hierarchies. Neither maps onto the other, so a colour that is scarce in one may be common in the other.',
          '**Design convention.** Topps Chrome designs tend to follow the paper set they accompany. Prizm designs are their own annual identity.',
          '**Sport and competition coverage.** Which company covers which league changes over time, which is the subject of [why card licences move between companies](/blog/why-card-licences-move-between-companies).',
        ],
      },
      {
        kind: 'note',
        text: 'Which is worth more is not a question about the two products. It is a question about a specific player, in a specific set, in a specific parallel, in a specific year. The answer comes from completed sales and nowhere else.',
      },
      { kind: 'h2', text: 'The comparison people actually want' },
      {
        kind: 'p',
        text: 'Usually it is: I have a rookie in both, which one should I keep? That is answerable, and it is answered by pricing both properly, matching parallel and condition, using [how to price a sports card](/guides/how-to-price-a-sports-card). The collector consensus about which product is the flagship for a given player is visible in the sales, and it varies by player.',
      },
      { kind: 'h2', text: 'Grading both' },
      {
        kind: 'p',
        text: 'Both are reflective stock and both punish surface handling. Expect the same difficulty reaching top grades, for the reasons in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
  },

  {
    slug: 'hobby-retail-and-blaster-boxes',
    title: 'Hobby, retail and blaster boxes',
    metaTitle: 'Hobby vs retail vs blaster boxes: what is the difference?',
    description:
      'How sealed card products differ by distribution channel, what changes in the odds and the parallels, and why the same set has several very different price points.',
    summary: 'Same set, different packaging, genuinely different contents.',
    published: '2026-10-01',
    cluster: 'products',
    related: ['what-is-panini-prizm', 'what-is-topps-chrome'],
    blocks: [
      {
        kind: 'p',
        text: 'The same set is sold in several packaging formats through different channels, and the differences are real rather than cosmetic.',
      },
      { kind: 'h2', text: 'Hobby' },
      {
        kind: 'p',
        text: 'Sold through card shops and hobby distributors. Generally the highest price per pack, the best stated odds of autographs and rare parallels, and often a guaranteed number of hits per box. Certain parallels appear only here.',
      },
      { kind: 'h2', text: 'Retail' },
      {
        kind: 'p',
        text: 'Sold through general retailers, in blaster boxes, hanger packs and similar formats. Cheaper per pack, longer odds on the good stuff, and its own exclusive parallels that hobby boxes do not contain.',
      },
      {
        kind: 'note',
        text: 'Retail exclusive parallels are not consolation prizes. Some are genuinely scarce and trade well. The channel tells you which pool a card came from, not whether it is any good.',
      },
      { kind: 'h2', text: 'Why this matters when pricing a single card' },
      {
        kind: 'p',
        text: 'Because it determines which parallel you are holding, and the parallel is the price. A retail exclusive colour and a hobby exclusive colour from the same set can be a long way apart. Identify before you compare, as in [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      { kind: 'h2', text: 'On buying sealed' },
      {
        kind: 'p',
        text: 'Sealed product is priced by the market on expected contents, and the expected value of a box is generally below its price. That is how the business works and it is not a scandal. Open it because opening it is enjoyable, not as a route to profit.',
      },
    ],
    faqs: [
      {
        q: 'Are hobby boxes always better value?',
        a: 'Better odds, higher price. Whether that is better value depends on what you are buying it for, and on the specific product rather than the format in general.',
      },
    ],
  },

  {
    slug: 'numbered-parallels-explained',
    title: 'Numbered parallels explained',
    metaTitle: 'What do the numbers on a card mean? Serial numbering explained',
    description:
      'What serial numbering on a trading card means, why the denominator matters more than the numerator, and which numbers carry a premium beyond their scarcity.',
    summary: 'What 25/99 actually tells you, and the part of it that moves the price.',
    published: '2026-10-04',
    cluster: 'products',
    related: ['what-is-panini-prizm', 'what-is-topps-chrome'],
    blocks: [
      {
        kind: 'p',
        text: 'A card stamped 25/99 is the twenty fifth copy of ninety nine produced. The second number is the print run and it is the one that carries almost all the information.',
      },
      { kind: 'h2', text: 'The denominator is the supply' },
      {
        kind: 'p',
        text: 'A run of 99 means 99 exist. That is a hard published number, which makes numbered cards unusual: for most cards the print run is unpublished and you are inferring scarcity from population reports, as described in [how to read a population report](/blog/how-to-read-a-population-report).',
      },
      { kind: 'h2', text: 'When the numerator matters' },
      {
        kind: 'p',
        text: 'Usually it does not. Copy 25 of 99 and copy 61 of 99 are the same card. Three exceptions move prices, and they are collector conventions rather than anything structural.',
      },
      {
        kind: 'ul',
        items: [
          '**Number one**, and to a lesser extent the final number in the run.',
          '**A number matching the player shirt number**, often called a jersey number match.',
          '**A number with personal significance** to a specific buyer, which is unpredictable and occasionally dramatic.',
        ],
      },
      {
        kind: 'note',
        text: 'These premiums are real but thin. They depend on a buyer who cares being in the market at the time, so treat them as upside rather than as value you can count on.',
      },
      { kind: 'h2', text: 'Scarcity is not value' },
      {
        kind: 'p',
        text: 'A run of 10 of a player nobody collects is worth less than an unnumbered card of a player everybody wants. Supply only sets a price where there is demand to meet it, which is why the method in [how to price a sports card](/guides/how-to-price-a-sports-card) starts from sales rather than from print runs.',
      },
    ],
  },

  {
    slug: 'what-is-a-topps-now-card',
    title: 'What is a Topps Now card?',
    metaTitle: 'What is a Topps Now card and how does print to order work?',
    description:
      'How print to order cards work, why the print run is decided by demand rather than set in advance, and what that does to how these cards trade afterwards.',
    summary: 'A card whose print run is set by how many people bought it.',
    published: '2026-10-07',
    cluster: 'products',
    related: ['numbered-parallels-explained', 'how-often-do-card-prices-change'],
    blocks: [
      {
        kind: 'p',
        text: 'Print to order inverts the usual model. Instead of producing a fixed run and distributing it through packs, a card commemorating something that just happened is offered for a short window, and however many people order is how many are printed.',
      },
      { kind: 'h2', text: 'What that changes' },
      {
        kind: 'ul',
        items: [
          '**The print run is a demand measurement.** It is published after the window closes and tells you exactly how many collectors cared at the time.',
          '**There are no packs.** Nobody pulls one, so there is no lottery element and no sealed product around it.',
          '**Timing is everything.** The window is short, and after it closes the only supply is the secondary market.',
        ],
      },
      { kind: 'h2', text: 'How they trade afterwards' },
      {
        kind: 'p',
        text: 'Two patterns. A card commemorating a moment that turned out to matter can trade well above issue price, because the run was set before anyone knew the moment was significant. A card for a moment that faded trades below issue price, because everyone who wanted one already has one.',
      },
      {
        kind: 'note',
        text: 'The run being small is not itself bullish. A tiny run means few people wanted it, which is usually a statement about demand rather than an opportunity.',
      },
      { kind: 'h2', text: 'Pricing one' },
      {
        kind: 'p',
        text: 'The published print run gives you supply, which is more than you get with most cards. Demand still comes from completed sales, and these cards can reprice quickly for the reasons in [how often do card prices change](/blog/how-often-do-card-prices-change).',
      },
    ],
  },

  {
    slug: 'champions-league-cards-explained',
    title: 'Champions League cards explained',
    metaTitle: 'UEFA Champions League trading cards explained',
    description:
      'Why Champions League cards matter disproportionately to UK and European collectors, how the competition sets work, and what to check before pricing one.',
    summary: 'The set that matters most to European collectors, and why it behaves differently.',
    published: '2026-10-11',
    cluster: 'products',
    related: ['what-is-topps-chrome', 'why-card-licences-move-between-companies'],
    blocks: [
      {
        kind: 'p',
        text: 'For UK and European collectors, Champions League products occupy a position no domestic league set does: a single competition containing most of the players anyone collects, with an audience across every market at once.',
      },
      { kind: 'h2', text: 'Why they trade differently' },
      {
        kind: 'ul',
        items: [
          '**Global demand.** A player card in a Champions League set has buyers in several countries, which supports prices and narrows spreads.',
          '**Squad churn.** Players appear only while their club qualifies, so a card can be a one season appearance in that competition.',
          '**Timing.** Interest spikes around knockout rounds and the final in a way domestic sets do not experience.',
        ],
      },
      { kind: 'h2', text: 'Rookie status is complicated here' },
      {
        kind: 'p',
        text: 'A player first Champions League card is not automatically their rookie card, and both can carry a premium while collectors disagree about which is the flagship. That ambiguity and what it does to prices is covered in [rookie cards, explained](/guides/rookie-cards-explained).',
      },
      { kind: 'h2', text: 'Before pricing one' },
      {
        kind: 'p',
        text: 'Check which competition set it is from and which season, since the same player appears in domestic and European sets in the same year with different card numbers and different prices. Then price it from completed sales as usual, per [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      {
        kind: 'note',
        text: 'Which manufacturer produces the official competition cards has changed before and can change again. See [why card licences move between companies](/blog/why-card-licences-move-between-companies).',
      },
    ],
  },

  {
    slug: 'why-card-licences-move-between-companies',
    title: 'Why card licences move between companies',
    metaTitle: 'Why trading card licences move between manufacturers',
    description:
      'How sports card licensing works, why the company producing a league cards changes periodically, and what a licence change does to the cards you already own.',
    summary: 'Licences are contracts with end dates, and what happens when one changes hands.',
    published: '2026-10-14',
    cluster: 'products',
    related: ['champions-league-cards-explained', 'topps-chrome-versus-panini-prizm'],
    blocks: [
      {
        kind: 'p',
        text: 'A manufacturer cannot simply print cards of a competition. It licenses the right, from the league, the clubs, the players association, or several of those at once, for a defined period. When the period ends, it is renegotiated and can move.',
      },
      {
        kind: 'note',
        text: 'This post deliberately names no current licence holder. They change, sometimes at short notice, and a post that lists them is wrong within a season or two. Check the manufacturer own announcements for the current position.',
      },
      { kind: 'h2', text: 'Why they move' },
      {
        kind: 'ul',
        items: [
          'Money. Exclusive rights are auctioned and the highest credible bid wins.',
          'Strategy. A league may prefer one partner covering everything, or several competing.',
          'Performance. Distribution, product quality and how well the previous holder served the market.',
        ],
      },
      { kind: 'h2', text: 'What it does to cards you already own' },
      {
        kind: 'p',
        text: 'Nothing physically, and something to the market. Sets produced under an expired licence stop being extended, which fixes their supply permanently. Collector attention moves to the new products, which usually softens interest in the old ones for a while.',
      },
      {
        kind: 'p',
        text: 'Occasionally the opposite happens: a set produced in a licence final year becomes the last of its line and gains a following for exactly that reason. Neither outcome is predictable in advance, which is why the honest answer is to watch the comps rather than the announcements, as in [how often do card prices change](/blog/how-often-do-card-prices-change).',
      },
      { kind: 'h2', text: 'Unlicensed cards' },
      {
        kind: 'p',
        text: 'Where a manufacturer holds player rights but not club rights, you see cards with badges and kit details removed or obscured. They are legitimate products, and collectors generally value them below fully licensed equivalents.',
      },
    ],
  },

  {
    slug: 'what-are-insert-sets',
    title: 'What are insert sets?',
    metaTitle: 'What are insert sets in trading cards, and are they worth anything?',
    description:
      'What an insert set is, how inserts differ from parallels and from base cards, and why a few insert lines carry real value while most carry none.',
    summary: 'Not a parallel, not a base card. A third category that confuses pricing constantly.',
    published: '2026-10-18',
    cluster: 'products',
    related: ['numbered-parallels-explained', 'what-is-panini-prizm'],
    blocks: [
      {
        kind: 'p',
        text: 'A set contains base cards, parallels of those base cards, and inserts. Inserts are separate subsets with their own design and their own numbering, seeded into packs at stated rates. They are not versions of a base card, which is the distinction that matters.',
      },
      { kind: 'h2', text: 'Insert against parallel' },
      {
        kind: 'ul',
        items: [
          'A **parallel** is the same card in a different finish, sharing the base design and card number.',
          'An **insert** is a different card entirely: different artwork, different theme, its own numbering scheme.',
        ],
      },
      {
        kind: 'note',
        text: 'This trips up comp searching constantly. Searching a player name and a set name returns base cards, parallels and inserts mixed together, and they are not comparable to each other. Filtering them apart is part of the work in [how to check eBay sold listings](/blog/how-to-check-ebay-sold-listings).',
      },
      { kind: 'h2', text: 'Why most inserts are worth little' },
      {
        kind: 'p',
        text: 'Most exist to make packs feel rewarding, and they are printed accordingly. A card that appears in every second pack has supply that no amount of attractive design overcomes.',
      },
      { kind: 'h2', text: 'Why a few are worth a great deal' },
      {
        kind: 'p',
        text: 'A small number of insert lines become the recognised chase of their product, either through genuine scarcity, a long-running reputation, or a design collectors happen to love. Those trade well above the base cards from the same set.',
      },
      {
        kind: 'p',
        text: 'Which is which is not deducible from the card. It comes from completed sales, using [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
  },

  {
    slug: 'autographs-on-card-versus-sticker',
    title: 'On-card versus sticker autographs',
    metaTitle: 'On-card vs sticker autographs: why the difference matters',
    description:
      'The difference between an autograph signed directly on a card and one applied on a clear sticker, why manufacturers use stickers, and what collectors pay for each.',
    summary: 'Why two signed cards of the same player sell for very different money.',
    published: '2026-10-21',
    cluster: 'products',
    related: ['how-to-spot-a-fake-autograph', 'numbered-parallels-explained'],
    blocks: [
      {
        kind: 'p',
        text: 'A signed card carries the signature in one of two ways, and collectors do not value them equally.',
      },
      { kind: 'h2', text: 'On-card' },
      {
        kind: 'p',
        text: 'The player signed the card itself. The signature sits on the card surface, interacts with the design, and cannot be separated from it. This is what collectors generally prefer and pay more for.',
      },
      { kind: 'h2', text: 'Sticker' },
      {
        kind: 'p',
        text: 'The player signed sheets of clear stickers, which the manufacturer later applied to cards during production. You can usually see the sticker edge under angled light.',
      },
      { kind: 'h2', text: 'Why manufacturers use stickers at all' },
      {
        kind: 'p',
        text: 'Logistics. Getting sheets of stickers signed does not require the cards to exist yet, does not require shipping valuable printed cards to a player, and does not risk a card being ruined by a poor signature. For a set with dozens of signers across several countries and a fixed release date, it is often the only workable method.',
      },
      {
        kind: 'note',
        text: 'A sticker autograph is not less genuine. The player signed it. The premium on on-card is an aesthetic and collector preference, not an authenticity judgement.',
      },
      { kind: 'h2', text: 'Pricing them' },
      {
        kind: 'p',
        text: 'Treat them as different cards when reading comps, in the same way you would treat different parallels. Mixing on-card and sticker sales into one average produces a figure that describes neither, exactly as warned in [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      {
        kind: 'p',
        text: 'For signatures obtained outside a manufacturer product, authenticity becomes the whole question. See [how to spot a fake autograph](/blog/how-to-spot-a-fake-autograph).',
      },
    ],
  },
];
