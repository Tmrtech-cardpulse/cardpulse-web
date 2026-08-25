import type { Post } from '@/content/types';

/**
 * Selling cluster. UK-specific, which is the whole point: most writing about
 * this subject assumes a US seller, US postage and US tax treatment, and none
 * of it transfers.
 *
 * This cluster has no pillar of its own yet. That is recorded as a known gap in
 * docs/topic-map.md: a pillar should be written once the cluster shows which
 * sub-topic carries the weight, rather than guessed at up front. Posts here
 * link up to the pricing pillar, which is genuinely upstream of selling.
 */
const PILLAR = '/guides/how-to-price-a-sports-card';

export const sellingPosts: Post[] = [
  {
    slug: 'where-to-sell-sports-cards-in-the-uk',
    title: 'Where to sell sports cards in the UK',
    metaTitle: 'Where to sell sports cards in the UK: the realistic options',
    description:
      'The five places UK collectors actually sell cards, what each costs in fees and effort, and which suits a single card versus a whole collection.',
    summary: 'Five routes, with what each really costs you once fees and effort are counted.',
    published: '2026-08-25',
    cluster: 'selling',
    pillar: PILLAR,
    related: ['ebay-uk-selling-fees-for-trading-cards', 'auction-versus-fixed-price'],
    blocks: [
      {
        kind: 'p',
        text: 'Every route trades price against speed and effort. There is no option that is best at all three, and choosing well mostly means being honest about which one you actually care about.',
      },
      { kind: 'h2', text: 'eBay' },
      {
        kind: 'p',
        text: 'The largest audience and the deepest record of completed sales, which is also why it is where prices get discovered. You pay fees and you do the work: photography, listing, packing, postage, and the occasional dispute. For most single cards it is the default for good reasons.',
      },
      { kind: 'h2', text: 'Dedicated card marketplaces' },
      {
        kind: 'p',
        text: 'Smaller audiences of people who specifically want cards, which cuts the explaining and sometimes the fees. Thinner traffic means slower sales, particularly for anything outside the most collected sets.',
      },
      { kind: 'h2', text: 'Facebook groups and forums' },
      {
        kind: 'p',
        text: 'No platform fee, direct payment, and no buyer protection worth the name unless you arrange it. Works well within a community where reputation is visible. Carries the highest scam exposure of any route here, in both directions, covered in [avoiding scams when buying cards](/blog/avoiding-scams-when-buying-cards).',
      },
      { kind: 'h2', text: 'Selling to a dealer' },
      {
        kind: 'p',
        text: 'Fast, certain and the lowest price. A dealer is buying to resell, so they buy below market by a margin that reflects the work and risk they are taking on. Entirely reasonable, and the right choice when you want the whole thing gone this week.',
      },
      { kind: 'h2', text: 'Auction houses' },
      {
        kind: 'p',
        text: 'Suited to genuinely high value single cards, where a specialist audience and a catalogue justify the commission. Below a certain value the fees make no sense.',
      },
      {
        kind: 'note',
        text: 'Whichever route you pick, know what the card is worth before you list it. That is the job of [how to price a sports card](/guides/how-to-price-a-sports-card), and doing it afterwards is how people find out they sold too cheaply.',
      },
    ],
    faqs: [
      {
        q: 'What is the fastest way to sell a collection?',
        a: 'Selling to a dealer. You will get less than piecing it out, and you will get it now rather than over several months of listings.',
      },
    ],
  },

  {
    slug: 'ebay-uk-selling-fees-for-trading-cards',
    title: 'eBay UK selling fees for trading cards',
    metaTitle: 'eBay UK selling fees for trading cards, and what they leave you',
    description:
      'How eBay UK fees are structured for trading card sellers, which charges apply to postage as well as the item, and how to work out your real net figure.',
    summary: 'How to work out what actually lands in your account, before you price anything.',
    published: '2026-08-31',
    cluster: 'selling',
    pillar: PILLAR,
    related: ['where-to-sell-sports-cards-in-the-uk', 'how-to-write-a-card-listing-that-sells'],
    blocks: [
      {
        kind: 'p',
        text: 'Sellers routinely price a card at what comps say, then find the amount that arrives is noticeably less. Fees are the gap, and the two things that surprise people are what they are charged on and what counts as a private versus a business sale.',
      },
      {
        kind: 'note',
        text: 'No percentages are quoted here deliberately. eBay changes fee structures, runs promotions, and treats private and business sellers differently. Check the current fee page for your account type. What follows is what to look for.',
      },
      { kind: 'h2', text: 'Fees are usually charged on the total' },
      {
        kind: 'p',
        text: 'The charge is typically calculated on the item price **plus postage**, not the item alone. This is why moving cost into postage to make the headline price look competitive does not avoid anything, and it is the most common miscalculation among new sellers.',
      },
      { kind: 'h2', text: 'The components to check' },
      {
        kind: 'ul',
        items: [
          'A final value fee on the total transaction.',
          'A fixed charge per order, which matters disproportionately on cheap cards.',
          'Any listing fees above your monthly allowance.',
          'Optional promoted listing charges, which are additional and easy to leave switched on.',
        ],
      },
      { kind: 'h2', text: 'Working backwards to a list price' },
      {
        kind: 'p',
        text: 'Decide the net you want, add the fee percentage, add the fixed charge, add your real postage and packaging cost. That is your list price. Do it in that order and the comps stay meaningful, because you are comparing gross sale prices to gross sale prices as described in [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      { kind: 'h2', text: 'Why cheap cards rarely pay' },
      {
        kind: 'p',
        text: 'On a £4 card, the fixed per order charge, the postage, the packaging and twenty minutes of your time consume the entire sale. This is the arithmetic that pushes people to sell low value cards in lots, and it is the same reason bulk is valued as bulk in [how to value a whole collection](/blog/how-to-value-a-whole-collection).',
      },
    ],
  },

  {
    slug: 'how-to-post-trading-cards-safely',
    title: 'How to post trading cards safely',
    metaTitle: 'How to post trading cards safely in the UK',
    description:
      'How to package a card so it arrives flat and undamaged, which Royal Mail service to use at which value, and the packing mistake that causes most damage claims.',
    summary: 'Sleeve, rigid, rigid, envelope. And the one thing that ruins cards in transit.',
    published: '2026-09-03',
    cluster: 'selling',
    related: ['ebay-uk-selling-fees-for-trading-cards', 'how-to-store-sports-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'A card that arrives bent is a refund, a negative mark and a card worth less than it was. Packing properly costs pennies and takes a minute.',
      },
      { kind: 'h2', text: 'The layers' },
      {
        kind: 'ol',
        items: [
          'Penny sleeve, so nothing touches the card surface.',
          'Top loader or semi-rigid holder.',
          '**Team bag or tape the top loader shut sideways**, so the card cannot slide out in transit.',
          'Sandwich between two pieces of stiff card, taped so they cannot separate.',
          'Bubble mailer, or a plain envelope marked do not bend for low value cards.',
        ],
      },
      {
        kind: 'note',
        text: 'Never tape directly across the opening of a top loader onto itself in a way that requires force to open. The commonest damage of all is done by the recipient, cutting into the card while opening it.',
      },
      { kind: 'h2', text: 'Choosing a service' },
      {
        kind: 'ul',
        items: [
          '**Low value.** Large letter, which is where the flat packing matters, because anything thicker moves it into a more expensive class.',
          '**Mid value.** Tracked, so there is a record and a claim route.',
          '**High value.** Tracked and signed with adequate compensation cover. Check the cover limit rather than assuming it.',
        ],
      },
      { kind: 'h2', text: 'Declared value and compensation' },
      {
        kind: 'p',
        text: 'Standard compensation is capped and often far below what a good card is worth. If the card is worth more than the cap, either pay for higher cover or accept the risk deliberately rather than by accident.',
      },
    ],
    faqs: [
      {
        q: 'Can I send a card as a large letter?',
        a: 'Usually yes if the total thickness stays within the limit, which a sleeved card in a top loader between two card stiffeners generally does. Measure rather than assume; the surcharge for getting it wrong falls on the recipient.',
      },
    ],
  },

  {
    slug: 'do-i-pay-tax-on-selling-sports-cards-uk',
    title: 'Do I pay tax on selling sports cards in the UK?',
    metaTitle: 'Do you pay tax on selling sports cards in the UK?',
    description:
      'The two different ways HMRC can treat card sales, what separates a collector disposing of possessions from someone trading, and where to check the current thresholds.',
    summary: 'Two entirely different tax treatments, and which applies depends on what you are doing.',
    published: '2026-09-06',
    cluster: 'selling',
    related: ['where-to-sell-sports-cards-in-the-uk', 'ebay-uk-selling-fees-for-trading-cards'],
    blocks: [
      {
        kind: 'note',
        text: 'This is general information, not tax advice, and it is not a substitute for checking with HMRC or an accountant about your own position. Thresholds, rates and allowances change, so no figures are quoted here. Verify current numbers on GOV.UK before relying on any of this.',
      },
      {
        kind: 'p',
        text: 'The important thing is that there are two quite different treatments, and which one applies depends on what you are actually doing rather than on how much you sold.',
      },
      { kind: 'h2', text: 'Selling personal possessions' },
      {
        kind: 'p',
        text: 'A collector selling items from their own collection is generally disposing of personal possessions. HMRC treats these as chattels, and there is a value threshold per item below which a gain is not chargeable. Above it, capital gains rules can apply, subject to your annual allowance.',
      },
      {
        kind: 'p',
        text: 'Two points people miss. The threshold is generally **per item**, not per year of sales. And a set sold to one buyer can be treated as a single item, which changes the arithmetic considerably.',
      },
      { kind: 'h2', text: 'Trading' },
      {
        kind: 'p',
        text: 'If you are buying with the intention of selling at a profit, that can be trading, and trading profits are income rather than capital gains. HMRC assesses this against a set of indicators often called the badges of trade: frequency of transactions, whether items are modified before sale, how the purchase was financed, and the intention at the point of buying.',
      },
      {
        kind: 'p',
        text: 'Buying a card because you wanted it and selling it years later is not the same activity as buying boxes to break and flip, and the treatment differs accordingly.',
      },
      { kind: 'h2', text: 'Why platforms now report' },
      {
        kind: 'p',
        text: 'Online marketplaces report seller information to HMRC under digital platform reporting rules. This does not create a new tax and does not mean casual sellers suddenly owe something. It means the data exists, so being on the right side of the distinction above matters more than it used to.',
      },
      { kind: 'h2', text: 'What to keep' },
      {
        kind: 'ul',
        items: [
          'What you paid, and when.',
          'What you sold for, and when.',
          'Fees and postage, which are costs.',
        ],
      },
      {
        kind: 'p',
        text: 'That record is also what lets you see whether you are actually making money, which is a separate question from the tax one and the reason purchase price tracking exists in the app at all. Establishing what a card is worth today is [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
    faqs: [
      {
        q: 'Does selling a few cards from my own collection mean I am trading?',
        a: 'Generally not on its own. Frequency, intention at purchase and whether you are buying specifically to resell are what HMRC looks at. Check your own position rather than relying on a rule of thumb.',
      },
    ],
  },

  {
    slug: 'importing-sports-cards-to-the-uk',
    title: 'Importing sports cards to the UK',
    metaTitle: 'Importing sports cards to the UK: VAT, duty and handling fees',
    description:
      'What happens when cards arrive in the UK from abroad, the three separate charges that can apply, and why the courier handling fee catches people out most.',
    summary: 'Three separate charges, only one of which people expect.',
    published: '2026-09-10',
    cluster: 'selling',
    related: ['buying-from-us-sellers', 'how-to-submit-cards-for-grading-from-the-uk'],
    blocks: [
      {
        kind: 'p',
        text: 'A card bought abroad can attract charges on arrival, and the total is frequently a larger share of the purchase than people budget for. There are three separate things that can be charged and they are often confused with each other.',
      },
      {
        kind: 'note',
        text: 'Rates and thresholds change and depend on the declared value and the goods classification. Check GOV.UK for current figures rather than any number you read in a forum post.',
      },
      { kind: 'h2', text: 'The three charges' },
      {
        kind: 'ol',
        items: [
          '**Import VAT**, generally calculated on the value of the goods **plus the shipping cost**, which is the part people forget.',
          '**Customs duty**, which depends on classification and value and may not apply at all below a threshold.',
          '**A courier handling fee**, charged by the carrier for processing the above. This is not a tax and is not refundable, and on a low value item it can exceed the tax itself.',
        ],
      },
      { kind: 'h2', text: 'Why the handling fee stings' },
      {
        kind: 'p',
        text: 'It is generally a flat charge. On a £200 card it is a footnote. On a £25 card it can be a third of the price, which is why buying cheap cards individually from abroad rarely makes sense and why people consolidate orders.',
      },
      { kind: 'h2', text: 'Undervalued declarations' },
      {
        kind: 'p',
        text: 'Sellers sometimes offer to declare a lower value or mark an item as a gift. That is a false customs declaration, the liability sits with the importer, and it voids the insurance you were relying on if the card is lost. It is not a discount, it is an uninsured card and a false statement.',
      },
      { kind: 'h2', text: 'Factoring it in' },
      {
        kind: 'p',
        text: 'Add the likely charges to the purchase price before comparing against UK comps. A card that looks cheaper from abroad frequently is not, once the landed cost is honest. Working out the UK number to compare against is [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
  },

  {
    slug: 'buying-from-us-sellers',
    title: 'Buying cards from US sellers',
    metaTitle: 'Buying sports cards from US sellers as a UK collector',
    description:
      'How to work out the true landed cost of a card bought from the United States, what eBay international programmes change, and when it is genuinely worth it.',
    summary: 'The listed price is about two thirds of what you will actually pay.',
    published: '2026-09-13',
    cluster: 'selling',
    pillar: PILLAR,
    related: ['importing-sports-cards-to-the-uk', 'where-to-sell-sports-cards-in-the-uk'],
    blocks: [
      {
        kind: 'p',
        text: 'The US market is deeper for almost every sport, and prices there often look better. Whether they are better depends entirely on the landed cost, which is the only number worth comparing.',
      },
      { kind: 'h2', text: 'What to add to the listed price' },
      {
        kind: 'ol',
        items: [
          'International postage, which is rarely trivial for a tracked service.',
          'The currency conversion, including whatever spread your card or the platform applies.',
          'Import VAT and possibly duty, calculated on goods plus shipping.',
          'The courier handling fee.',
        ],
      },
      {
        kind: 'p',
        text: 'The full mechanics of the last two are in [importing sports cards to the UK](/blog/importing-sports-cards-to-the-uk).',
      },
      { kind: 'h2', text: 'International shipping programmes' },
      {
        kind: 'p',
        text: 'Where a platform runs a global shipping programme, charges are usually collected up front, which removes the surprise but not the cost. Compare that all-in figure, not the item price, and remember returns through such programmes can be more awkward than domestic ones.',
      },
      { kind: 'h2', text: 'When it is worth it' },
      {
        kind: 'ul',
        items: [
          'Cards that barely trade in the UK, where the alternative is not buying at all.',
          'Higher value cards, where the fixed charges are a small percentage.',
          'Graded cards, where condition risk is already resolved and the slab travels well.',
        ],
      },
      { kind: 'h2', text: 'When it is not' },
      {
        kind: 'p',
        text: 'Cheap raw cards. Fixed costs dominate, condition risk is real at a distance, and the comparison against UK completed sales, done properly as in [how to price a sports card](/guides/how-to-price-a-sports-card), usually shows the saving was imaginary.',
      },
    ],
  },

  {
    slug: 'how-to-write-a-card-listing-that-sells',
    title: 'How to write a card listing that sells',
    metaTitle: 'How to write a trading card listing that actually sells',
    description:
      'What to put in a card listing title so buyers find it, how to photograph a card honestly, and the description details that prevent disputes after the sale.',
    summary: 'Most cards that sell badly were never found. The title is doing that damage.',
    published: '2026-09-17',
    cluster: 'selling',
    related: ['ebay-uk-selling-fees-for-trading-cards', 'where-to-sell-sports-cards-in-the-uk'],
    blocks: [
      {
        kind: 'p',
        text: 'A card sells for less when fewer people see it and fewer of those can tell what it is. Both problems are solved in the title and the photographs, before price enters into it.',
      },
      { kind: 'h2', text: 'The title' },
      {
        kind: 'p',
        text: 'Buyers search the way the card is described on its back. Include, in roughly this order: year or season, set name, player name, card number, parallel, and grade if graded. Leave out adjectives entirely. Nobody searches for rare, mint or investment, and those words consume characters that a card number needed.',
      },
      {
        kind: 'note',
        text: 'The card number is the single most skipped element and the one that makes a listing findable by someone who knows exactly what they want. Those are your best buyers.',
      },
      { kind: 'h2', text: 'The photographs' },
      {
        kind: 'ul',
        items: [
          'Front and back, square on, filling the frame.',
          'Natural indirect light. Flash hides surface faults and buyers know it does.',
          'A close shot of each corner on anything mid value or above.',
          'Photograph any flaw deliberately. A disclosed flaw is a lower price; an undisclosed one is a return.',
        ],
      },
      { kind: 'h2', text: 'The description' },
      {
        kind: 'p',
        text: 'State the condition in plain terms, note whether it has been in a sleeve, and say how it will be posted. If it is raw, say so explicitly rather than letting a buyer assume.',
      },
      { kind: 'h2', text: 'The price' },
      {
        kind: 'p',
        text: 'Set from completed sales, not from what other people are asking, for the reasons in [why your card is worth less than the listings say](/blog/why-your-card-is-worth-less-than-the-listings-say). The method is [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
    ],
  },

  {
    slug: 'auction-versus-fixed-price',
    title: 'Auction versus fixed price',
    metaTitle: 'Auction or fixed price: which sells a card for more?',
    description:
      'When an auction beats a fixed price listing for trading cards and when it does not, what determines the outcome, and how each format behaves for thin markets.',
    summary: 'Auctions find the market. Fixed prices bracket it. Which you want depends on the card.',
    published: '2026-09-20',
    cluster: 'selling',
    pillar: PILLAR,
    related: ['how-to-write-a-card-listing-that-sells', 'where-to-sell-sports-cards-in-the-uk'],
    blocks: [
      {
        kind: 'p',
        text: 'An auction discovers what the most motivated bidder will pay on a given evening. A fixed price is one seller guessing and one buyer accepting. Both are legitimate and they suit different cards.',
      },
      { kind: 'h2', text: 'When an auction wins' },
      {
        kind: 'ul',
        items: [
          '**Genuine competition.** More than a handful of people actively want the card.',
          '**Uncertain value.** Where comps are thin, an auction answers the question rather than guessing at it, which is the situation in [valuing a card with no recent sales](/blog/valuing-a-card-with-no-recent-sales).',
          '**Momentum.** A player currently in the news, where interest may not last.',
        ],
      },
      { kind: 'h2', text: 'When a fixed price wins' },
      {
        kind: 'ul',
        items: [
          '**Thin demand.** One buyer exists somewhere and is not browsing tonight. An auction with one bidder ends at the opening bid.',
          '**Established value.** Where comps are tight, you already know the price and an auction can only do worse.',
          '**Patience.** You are not in a hurry and would rather wait for your number.',
        ],
      },
      {
        kind: 'note',
        text: 'An auction with no reserve on a card with two interested buyers is how cards sell for a fraction of their value. The format is not the risk; the format applied to a thin market is.',
      },
      { kind: 'h2', text: 'Reserves and starting prices' },
      {
        kind: 'p',
        text: 'A low start attracts bidders and relies on competition arriving. A high start protects you and suppresses early bidding, which some formats punish. If the card genuinely has a floor below which you would not sell, that is what a reserve is for.',
      },
      {
        kind: 'p',
        text: 'Whichever format, work out the number first, using [how to price a sports card](/guides/how-to-price-a-sports-card). Both formats punish a seller who does not know what they have.',
      },
    ],
  },

  {
    slug: 'avoiding-scams-when-buying-cards',
    title: 'Avoiding scams when buying cards',
    metaTitle: 'How to avoid scams when buying sports cards online',
    description:
      'The common ways card buyers get caught out, the payment methods that leave no recourse, and the checks that take a minute and prevent most of it.',
    summary: 'Most of it comes down to payment method and photographs of the actual card.',
    published: '2026-09-24',
    cluster: 'selling',
    related: ['where-to-sell-sports-cards-in-the-uk', 'how-to-spot-a-fake-autograph'],
    blocks: [
      {
        kind: 'p',
        text: 'Almost all of it is preventable, and the prevention is boring: pay in a way that has recourse, and insist on seeing the actual card.',
      },
      { kind: 'h2', text: 'Payment' },
      {
        kind: 'p',
        text: 'A bank transfer to a stranger has no recovery route. Neither does a payment sent as friends and family on a payment platform, and a seller who insists on it is asking you to waive the only protection you have. The small fee on a protected payment is the price of being able to dispute.',
      },
      {
        kind: 'note',
        text: 'A seller who explains that friends and family is fine because they are trustworthy is describing exactly the situation where you need the protection.',
      },
      { kind: 'h2', text: 'Photographs' },
      {
        kind: 'ul',
        items: [
          'Stock images on a card worth faking are a warning, always.',
          'Ask for a photograph of the card next to a handwritten note with your name and the date. A seller who has the card can do this in a minute.',
          'Reverse image search the photographs. Lifted images are common and easily caught.',
        ],
      },
      { kind: 'h2', text: 'The card itself' },
      {
        kind: 'p',
        text: 'A price well below every recent completed sale is not a bargain, it is information. Either the card is not what it appears, or the sale is not real. The checks for the first case are in [how to spot a reprint](/guides/how-to-spot-a-reprint), and establishing what the price should be is [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      { kind: 'h2', text: 'Graded cards' },
      {
        kind: 'p',
        text: 'Every grading company publishes a certificate lookup. Enter the number from the label and check that the card shown matches the card in front of you. Counterfeit slabs exist and the lookup is free.',
      },
    ],
  },

  {
    slug: 'uk-card-shows-what-to-expect',
    title: 'UK card shows: what to expect',
    metaTitle: 'UK sports card shows: what to expect and how to buy well',
    description:
      'What happens at a UK card show, how pricing works face to face, what to bring, and how to avoid the two mistakes that make people overpay in the room.',
    summary: 'Cash, a loupe, and a number you decided before you walked in.',
    published: '2026-09-27',
    cluster: 'selling',
    related: ['where-to-sell-sports-cards-in-the-uk', 'avoiding-scams-when-buying-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'A card show is a room of dealers with stock on tables, plus collectors trading among themselves. The UK scene is smaller than the American one and the cards on tables reflect that: more football, more Champions League, less baseball.',
      },
      { kind: 'h2', text: 'What to bring' },
      {
        kind: 'ul',
        items: [
          '**Cash.** Still widely preferred and still a negotiating lever.',
          '**A loupe.** Condition is your problem once you have handed money over.',
          '**A phone with comps to hand**, so you can check a price before agreeing to it.',
          '**Something to carry cards home in** that is not your coat pocket.',
        ],
      },
      { kind: 'h2', text: 'How pricing works in the room' },
      {
        kind: 'p',
        text: 'Table prices are usually opening positions, and asking what the best is on something is normal rather than rude. Buying several cards from one dealer is where the real movement is: bundles get discounts that single cards do not.',
      },
      { kind: 'h2', text: 'The two mistakes' },
      {
        kind: 'ol',
        items: [
          '**Deciding what a card is worth while standing in front of it.** Decide before. The room is designed to make you decide quickly.',
          '**Not checking condition.** There are no returns. A card that looks fine under hall lighting can look very different at home, which is why the loupe earns its place.',
        ],
      },
      {
        kind: 'p',
        text: 'Checking a price properly takes a minute with completed sales, and the method is the same one you would use at home: [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      { kind: 'h2', text: 'Selling at a show' },
      {
        kind: 'p',
        text: 'Dealers buy, and they buy below market for the reasons set out in [where to sell sports cards in the UK](/blog/where-to-sell-sports-cards-in-the-uk). It is fast and certain, and it is the same trade-off as anywhere else.',
      },
    ],
  },
];
