import type { Post } from '@/content/types';

/**
 * Grading cluster. Links up to /guides/what-grading-does-to-the-price.
 *
 * Deliberately avoids quoting current grading fees as fact. They change, they
 * differ by tier and by country, and a post that states one is wrong within
 * months. These describe how the cost is structured and what drives it, which
 * stays true.
 */
const PILLAR = '/guides/what-grading-does-to-the-price';

export const gradingPosts: Post[] = [
  {
    slug: 'what-card-grading-costs-in-the-uk',
    title: 'What card grading costs in the UK',
    metaTitle: 'What does card grading cost in the UK? The full picture',
    description:
      'Every cost involved in getting a card graded from the UK, including the ones that are not the grading fee, and how to work out whether a card clears the bar.',
    summary: 'The grading fee is rarely the largest number. Here is the rest of it.',
    published: '2026-08-25',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['is-grading-worth-it', 'how-to-submit-cards-for-grading-from-the-uk'],
    blocks: [
      {
        kind: 'p',
        text: 'People ask what grading costs and get quoted a fee per card. That fee is real and it is usually the smaller half of what you actually spend, which is why submissions so often disappoint on the arithmetic.',
      },
      {
        kind: 'note',
        text: 'No figures are quoted here on purpose. Grading fees change, differ by service tier and by declared value, and any number printed in a post is wrong within months. Check the grader current price list. What follows is the shape of the cost, which does not change.',
      },
      { kind: 'h2', text: 'The costs, in the order people forget them' },
      {
        kind: 'ol',
        items: [
          '**The grading fee**, per card, tiered by the value you declare. Declaring higher costs more.',
          '**Postage out**, tracked and insured. Insurance is priced on total declared value, so a big submission costs meaningfully more to send.',
          '**Return postage**, usually charged per submission and often at a rate that assumes courier service.',
          '**Import charges on the way back**, if the grader is outside the UK. This is the one that surprises people.',
          '**Supplies.** Sleeves, semi-rigid holders and a box, since cards must be submitted protected.',
        ],
      },
      { kind: 'h2', text: 'Why the return leg is the trap' },
      {
        kind: 'p',
        text: 'Cards sent abroad for grading and returned can attract charges on re-entry. The paperwork treatment depends on how the shipment is declared and by whom, and getting it wrong turns a modest submission into an expensive one. Submitting through a UK based intermediary exists largely to make this predictable.',
      },
      { kind: 'h2', text: 'The number that actually matters' },
      {
        kind: 'p',
        text: 'Not the fee, but the cost per card once everything above is divided across the submission. Sending one card is disproportionately expensive; sending twenty spreads the fixed costs. That is why people batch, and why a single card almost never justifies a solo submission.',
      },
      {
        kind: 'p',
        text: 'Whether the total clears the bar is a separate question, worked through in [is grading worth it](/blog/is-grading-worth-it) and in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'Is it cheaper to grade in bulk?',
        a: 'Per card, yes. Postage, insurance and return shipping are largely fixed per submission, so they divide down as the count rises. The grading fee itself is per card and does not.',
      },
      {
        q: 'Do I have to declare the value honestly?',
        a: 'Yes, and it is also in your interest. The declared value sets the insurance cover and the service tier, so understating it to save a few pounds means an underinsured card in the post.',
      },
    ],
  },

  {
    slug: 'is-grading-worth-it',
    title: 'Is grading worth it?',
    metaTitle: 'Is it worth grading a sports card? The arithmetic',
    description:
      'How to decide whether a card is worth submitting for grading, the sum that answers it, and why the expected grade is the part people get wrong.',
    summary: 'One sum answers this, and most people get one term of it badly wrong.',
    published: '2026-08-25',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['what-card-grading-costs-in-the-uk', 'how-to-pre-grade-your-own-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'The sum is short. The graded price at the grade you will probably get, minus the raw price you could sell for today, minus everything grading costs, times the probability you actually get that grade.',
      },
      {
        kind: 'p',
        text: 'Every term is knowable except the last, and the last is where the money is lost.',
      },
      { kind: 'h2', text: 'Getting the graded price right' },
      {
        kind: 'p',
        text: 'Look up completed sales for the card in each grade separately. A 10 and a 9 are different markets, and the gap between them is frequently much larger than the gap between a 9 and a raw copy. Pricing your submission off the 10 comps is the optimistic error.',
      },
      { kind: 'h2', text: 'Getting the expected grade right' },
      {
        kind: 'p',
        text: 'This is the term people ruin. Cards look better in the hand than under magnification, and the difference between a 9 and a 10 is routinely invisible without a loupe and a straight edge. Centring in particular is measured, not judged, and it is the most common reason a card that looks perfect comes back a 9.',
      },
      {
        kind: 'note',
        text: 'Assume the grade below the one you expect, run the sum on that, and only submit if it still works. If it only works at a 10, you are not making an investment, you are buying a lottery ticket with a postage cost.',
      },
      { kind: 'h2', text: 'When grading is worth it almost regardless' },
      {
        kind: 'ul',
        items: [
          '**Authentication.** Above a certain value the slab is buying certainty that the card is genuine, which is a real service independent of the number on the label. See [what grading does to the price](/guides/what-grading-does-to-the-price).',
          '**Liquidity.** A graded card sells faster and to more buyers, because the buyer is not judging condition from photographs.',
          '**Protection.** If you are holding long term, the case is a good case.',
        ],
      },
      { kind: 'h2', text: 'When it is clearly not' },
      {
        kind: 'p',
        text: 'A common card in any grade is a common card. Grading certifies condition, it does not create demand, and no grade turns a card nobody wants into a card somebody wants.',
      },
    ],
  },

  {
    slug: 'how-to-submit-cards-for-grading-from-the-uk',
    title: 'How to submit cards for grading from the UK',
    metaTitle: 'How to submit cards for grading from the UK, step by step',
    description:
      'The practical process for getting cards graded from the UK: choosing a route, preparing cards correctly, declaring value, and what happens on the return leg.',
    summary: 'The mechanics, including the customs step that catches people out.',
    published: '2026-08-27',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['what-card-grading-costs-in-the-uk', 'psa-bgs-and-sgc-compared'],
    blocks: [
      {
        kind: 'p',
        text: 'There are two routes out of the UK and the choice mostly determines how much of the administration you do yourself.',
      },
      { kind: 'h2', text: 'Direct, or through an intermediary' },
      {
        kind: 'ul',
        items: [
          '**Direct.** You open an account with the grader, complete the submission form, and ship internationally yourself. Cheaper on paper, and you own every customs question that follows.',
          '**Through a UK intermediary.** A dealer or group submission service batches your cards with others. You pay a margin and they handle shipping, declarations and the return leg.',
        ],
      },
      {
        kind: 'p',
        text: 'For a first submission the intermediary route is usually worth the margin, because the failure modes on the direct route are expensive rather than annoying.',
      },
      { kind: 'h2', text: 'Preparing the cards' },
      {
        kind: 'ol',
        items: [
          'Each card in a fresh penny sleeve, then a semi-rigid holder. Not a top loader: graders need to slide cards out.',
          'Do not tape anything shut.',
          'Order the cards to match the order on your submission form.',
          'Pack the stack so it cannot move inside the box, then post tracked and insured.',
        ],
      },
      {
        kind: 'note',
        text: 'Never clean, trim or press a card before submitting. Alteration is detected, and a card returned as altered is worth less than it was before you touched it. This is covered in [how to spot a reprint](/guides/how-to-spot-a-reprint) from the buyer side.',
      },
      { kind: 'h2', text: 'Declared value' },
      {
        kind: 'p',
        text: 'You declare a value per card. It sets your service tier, your price, and your insurance. Declare what the card is genuinely worth, established from comps as in [how to price a sports card](/guides/how-to-price-a-sports-card).',
      },
      { kind: 'h2', text: 'The return leg' },
      {
        kind: 'p',
        text: 'Cards coming back into the UK can attract import charges depending on how the shipment is declared. Budget for it rather than being surprised by it, and understand that this is the main reason the total cost of grading from the UK exceeds the headline fee. The full cost picture is in [what card grading costs in the UK](/blog/what-card-grading-costs-in-the-uk), and what you are buying for it is in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'How long does the whole process take from the UK?',
        a: 'Grader turnaround plus shipping both ways, and the shipping is not the small part. Expect the round trip to add weeks to whatever service level you paid for.',
      },
    ],
  },

  {
    slug: 'psa-bgs-and-sgc-compared',
    title: 'PSA, BGS and SGC compared',
    metaTitle: 'PSA vs BGS vs SGC: how the grading companies differ',
    description:
      'How the three main grading companies differ in scale, sub-grades, slab design and market reputation, and why the same card can grade differently at each.',
    summary: 'Three companies, three scales, and a market that does not value them equally.',
    published: '2026-08-29',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['what-is-a-psa-10', 'crossover-and-reholder-explained'],
    blocks: [
      {
        kind: 'p',
        text: 'A grade is a judgement by a company, not a physical property of the card. Different companies apply different standards, so the same card genuinely can come back with different numbers, and the market prices those numbers differently.',
      },
      { kind: 'h2', text: 'The practical differences' },
      {
        kind: 'ul',
        items: [
          '**Scale.** All three run to 10, but the increments and the way half grades are used differ.',
          '**Sub-grades.** BGS is known for publishing separate marks for centring, corners, edges and surface. That transparency is useful and it also means a weak component is visible to every buyer.',
          '**Slab design.** Different cases and label styles, which matters more than it should because collectors have preferences and preferences move prices.',
          '**Reputation by category.** Which company commands a premium varies by sport, era and set. It is a market convention, not a ranking.',
        ],
      },
      { kind: 'h2', text: 'Which to use' },
      {
        kind: 'p',
        text: 'Look at completed sales for your specific card in each company holder and let that decide. That is the only method that survives the fact that the answer differs by card. Everything else is a general impression, and general impressions are what get people the wrong slab for their card.',
      },
      {
        kind: 'note',
        text: 'A higher number from a company the market trusts less is not worth more. Compare sales, not labels.',
      },
      { kind: 'h2', text: 'Why the same card grades differently' },
      {
        kind: 'p',
        text: 'The companies weight the four condition components differently, and centring tolerance in particular varies. A card with excellent corners and marginal centring can land differently depending on who assesses it, which is exactly the mechanism explained in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'Is a BGS 9.5 the same as a PSA 10?',
        a: 'They are often discussed as comparable, and the market does not always agree. Check the sold comps for your card in both holders rather than assuming equivalence.',
      },
    ],
  },

  {
    slug: 'what-is-a-psa-10',
    title: 'What is a PSA 10?',
    metaTitle: 'What is a PSA 10, and what stops a card getting one',
    description:
      'What the top grade actually certifies, the four things assessed to reach it, and the most common single reason an apparently flawless card comes back a 9.',
    summary: 'What the top grade means, and the one flaw that most often prevents it.',
    published: '2026-09-01',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['psa-bgs-and-sgc-compared', 'how-to-pre-grade-your-own-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'The top grade on the PSA scale describes a card that is, to the assessor eye under magnification, essentially as it left the factory. It is a statement about condition and manufacture. It is not a statement that the card is rare, important or a good buy.',
      },
      { kind: 'h2', text: 'What is being assessed' },
      {
        kind: 'ul',
        items: [
          '**Centring**, front and back, measured as a ratio of the borders.',
          '**Corners**, examined under magnification where wear invisible to the naked eye shows.',
          '**Edges**, particularly chipping and whitening, which dark borders expose mercilessly.',
          '**Surface**, including scratches, print lines, dimples and loss of gloss.',
        ],
      },
      { kind: 'h2', text: 'Why centring stops most of them' },
      {
        kind: 'p',
        text: 'Corners and surfaces can be protected from the moment you own a card. Centring was decided when the sheet was cut, before anyone opened the packet. It is the one component you cannot influence and the one that most often caps a card a grade below where its condition would otherwise place it.',
      },
      {
        kind: 'note',
        text: 'This is why pack-fresh cards still fail to hit the top grade. Nothing happened to them. They were cut that way.',
      },
      { kind: 'h2', text: 'What the grade is worth' },
      {
        kind: 'p',
        text: 'That depends entirely on how many others exist at the same grade, which is what a population report tells you, and on whether anyone wants the card at all. The relationship between grade and price is set out in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'Can a card be regraded to get a higher number?',
        a: 'Cards can be resubmitted, and grades do sometimes change. It costs the full fee again and the common outcome is the same grade.',
      },
    ],
  },

  {
    slug: 'how-to-read-a-population-report',
    title: 'How to read a population report',
    metaTitle: 'How to read a grading population report, and what it tells you',
    description:
      'What a population report counts, how to use it to judge scarcity at a grade, and the two mistakes that make people misread it in opposite directions.',
    summary: 'The supply side of a card price, published free, and widely misread.',
    published: '2026-09-04',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['what-is-a-psa-10', 'is-grading-worth-it'],
    blocks: [
      {
        kind: 'p',
        text: 'Each grading company publishes how many copies of a card it has graded, broken down by grade. That table is the supply half of the price, and it is free to look at.',
      },
      { kind: 'h2', text: 'What it actually counts' },
      {
        kind: 'p',
        text: 'It counts cards that company has graded. Not cards that exist. Not cards graded elsewhere. Not raw copies sitting in collections. Understanding that boundary prevents both of the common errors.',
      },
      { kind: 'h2', text: 'Error one: assuming the population is the print run' },
      {
        kind: 'p',
        text: 'A population of 40 at the top grade does not mean 40 exist. It means 40 have been graded there so far. If the card is popular and recently released, that number will keep rising, and every new copy dilutes the scarcity you paid for.',
      },
      { kind: 'h2', text: 'Error two: ignoring the shape of the distribution' },
      {
        kind: 'p',
        text: 'The interesting figure is not the count at the top grade, it is the ratio. A card with 900 graded and 40 at the top is genuinely hard to find in that condition. A card with 60 graded and 40 at the top is easy to find in that condition and simply has not been submitted much.',
      },
      {
        kind: 'note',
        text: 'The second card looks scarcer by count and is not. That inversion is the single most useful thing a population report tells you.',
      },
      { kind: 'h2', text: 'Using it before you submit' },
      {
        kind: 'p',
        text: 'If very few copies reach the top grade, that is evidence about the card manufacture, usually centring or a surface issue common to the print run. It should lower your expected grade in the sum in [is grading worth it](/blog/is-grading-worth-it), and it is part of the price mechanism described in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
  },

  {
    slug: 'how-long-does-card-grading-take',
    title: 'How long does card grading take?',
    metaTitle: 'How long does sports card grading take from the UK?',
    description:
      'What grading turnaround times mean, why the quoted figure is not the time you wait, and what actually determines how long a UK submission takes to come back.',
    summary: 'The quoted turnaround and the time you actually wait are different numbers.',
    published: '2026-09-08',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['how-to-submit-cards-for-grading-from-the-uk', 'what-card-grading-costs-in-the-uk'],
    blocks: [
      {
        kind: 'p',
        text: 'Graders quote a turnaround per service level, and that figure measures time in their building. From the UK, that is the middle third of the wait.',
      },
      { kind: 'h2', text: 'The three parts' },
      {
        kind: 'ol',
        items: [
          '**Getting there.** International tracked shipping, plus any time held in customs.',
          '**In house.** The quoted turnaround, which starts when they log the submission rather than when it arrives.',
          '**Coming back.** Return shipping, plus any import processing on re-entry.',
        ],
      },
      {
        kind: 'note',
        text: 'The gap between arrival and being logged is invisible from outside and is frequently the least predictable part of the whole process.',
      },
      { kind: 'h2', text: 'What makes it longer' },
      {
        kind: 'ul',
        items: [
          'Submitting during a rush, typically after a major product release or a big tournament.',
          'A large submission, which is processed as a unit and returns as a unit.',
          'Going through an intermediary who batches, which adds waiting for the batch to fill.',
        ],
      },
      { kind: 'h2', text: 'Why it matters beyond patience' },
      {
        kind: 'p',
        text: 'A card in transit for months is a card you cannot sell during a window when it might be worth most. For a player having a strong season, that timing risk is a real cost and belongs in the calculation in [is grading worth it](/blog/is-grading-worth-it), alongside the premium the slab is expected to earn in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
  },

  {
    slug: 'crossover-and-reholder-explained',
    title: 'Crossover and reholder explained',
    metaTitle: 'Card grading crossover and reholder services explained',
    description:
      'What crossover and reholder services do, when each is worth paying for, and the minimum grade condition that stops a crossover going badly wrong.',
    summary: 'Moving a card between slabs, and the condition that protects you when you do.',
    published: '2026-09-11',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['psa-bgs-and-sgc-compared', 'what-is-a-psa-10'],
    blocks: [
      {
        kind: 'p',
        text: 'Two services that sound similar and do different jobs. Both involve a card that is already in a slab.',
      },
      { kind: 'h2', text: 'Reholder' },
      {
        kind: 'p',
        text: 'Same company, same grade, new case. Used when a slab is scratched, cracked, or in an older case style that collectors like less. The grade does not change and is not reassessed.',
      },
      { kind: 'h2', text: 'Crossover' },
      {
        kind: 'p',
        text: 'A different company reassesses the card and, if it agrees, puts it in their holder. This is a fresh grading judgement, so the outcome is genuinely uncertain.',
      },
      { kind: 'h2', text: 'The condition that protects you' },
      {
        kind: 'p',
        text: 'Crossover submissions let you specify a minimum grade. If the new company will not award at least that, the card comes back untouched in its original slab. Setting that minimum at or above the current grade is the entire point, and submitting without one is how people turn a 9 into an 8 and pay for the privilege.',
      },
      {
        kind: 'note',
        text: 'Always set a minimum. The fee is spent either way; the downside is what you are controlling.',
      },
      { kind: 'h2', text: 'When crossing over is worth it' },
      {
        kind: 'p',
        text: 'When completed sales show your card sells for meaningfully more in another company holder, and the gap exceeds the cost and the risk. That is a comps question, answered the way everything else is, in [how to price a sports card](/guides/how-to-price-a-sports-card), and it rests on the differences set out in [PSA, BGS and SGC compared](/blog/psa-bgs-and-sgc-compared).',
      },
      {
        kind: 'p',
        text: 'The underlying reason any of this moves money is in [what grading does to the price](/guides/what-grading-does-to-the-price): the slab is doing two jobs at once, and only one of them is the number.',
      },
    ],
  },

  {
    slug: 'why-cards-get-rejected-by-graders',
    title: 'Why cards get rejected by graders',
    metaTitle: 'Why grading companies reject cards, and what the labels mean',
    description:
      'Why a submitted card can come back without a numeric grade, what evidence of trimming and altered means, and how to avoid buying a card that will be rejected.',
    summary: 'Not every submission comes back with a number. Here is what the alternatives mean.',
    published: '2026-09-15',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['how-to-submit-cards-for-grading-from-the-uk', 'how-to-pre-grade-your-own-cards'],
    blocks: [
      {
        kind: 'p',
        text: 'A card can come back without a numeric grade. The label wording differs by company, but the categories are broadly the same and each one means something quite specific.',
      },
      { kind: 'h2', text: 'Altered' },
      {
        kind: 'p',
        text: 'The card has been physically changed: trimmed, recoloured, pressed, or had a surface treated. This is the serious one. An altered card is worth substantially less than the same card honestly worn, because the alteration was an attempt to misrepresent it.',
      },
      { kind: 'h2', text: 'Evidence of trimming' },
      {
        kind: 'p',
        text: 'The edges do not match factory cut dimensions or texture. Sometimes deliberate, sometimes a card cut oddly at the factory. The label makes no distinction and the market treats it as the former.',
      },
      { kind: 'h2', text: 'Not authentic' },
      {
        kind: 'p',
        text: 'A reproduction. The checks that catch these are the same ones you can run yourself, described in [how to spot a reprint](/guides/how-to-spot-a-reprint).',
      },
      { kind: 'h2', text: 'Minimum grade not met' },
      {
        kind: 'p',
        text: 'Only applies where you set one, as on a crossover. The card comes back as it went in. See [crossover and reholder explained](/blog/crossover-and-reholder-explained).',
      },
      {
        kind: 'note',
        text: 'Buying a raw card that has been trimmed means paying for a card you cannot grade and cannot honestly resell. On expensive raw cards this risk is a large part of why graded copies command a premium at all, which is the mechanism set out in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
    faqs: [
      {
        q: 'Do I get my fee back if a card is rejected?',
        a: 'Generally not. The card was examined, which is what the fee pays for. Policies differ, so check before submitting anything borderline.',
      },
    ],
  },

  {
    slug: 'how-to-pre-grade-your-own-cards',
    title: 'How to pre-grade your own cards',
    metaTitle: 'How to pre-grade your own cards before submitting',
    description:
      'A repeatable check for assessing your own cards before paying to submit them, covering centring measurement, corner inspection and the lighting that reveals surface faults.',
    summary: 'Twenty minutes with a loupe saves the fee on cards that were never going to grade well.',
    published: '2026-09-18',
    cluster: 'grading',
    pillar: PILLAR,
    related: ['what-is-a-psa-10', 'is-grading-worth-it'],
    blocks: [
      {
        kind: 'p',
        text: 'Pre-grading is not predicting the grade. It is finding the reason a card will not get the grade you hoped for, so you can leave it out of the submission.',
      },
      { kind: 'h2', text: 'What you need' },
      {
        kind: 'ul',
        items: [
          'A loupe or a phone macro lens.',
          'A bright, single, directional light. Not a ceiling light.',
          'A straight edge or a printed centring guide.',
        ],
      },
      { kind: 'h2', text: 'Centring first, because it is decisive' },
      {
        kind: 'p',
        text: 'Measure the border on each side, front and back. Do not judge it by eye: the eye compensates and will tell you a card is centred when it is measurably not. The back is assessed too, and is frequently worse than the front on the same card.',
      },
      { kind: 'h2', text: 'Corners under magnification' },
      {
        kind: 'p',
        text: 'Look for fraying and softness rather than obvious damage. A corner that reads as sharp at arm length can show fibre separation at magnification, and that is the level the grade is decided at.',
      },
      { kind: 'h2', text: 'Surface under raking light' },
      {
        kind: 'p',
        text: 'Tilt the card against a single light source so the light skims the surface. Scratches, print lines and dimples that are invisible flat-on appear immediately. Chrome and foil cards show everything under this test, which is why they are hard to grade well.',
      },
      {
        kind: 'note',
        text: 'Be harsh. The expensive mistake is optimism, not pessimism: you pay the same fee for a 7 as for a 10.',
      },
      { kind: 'h2', text: 'Then run the sum' },
      {
        kind: 'p',
        text: 'Take the grade you now honestly expect, drop it one to be safe, and put that into the calculation in [is grading worth it](/blog/is-grading-worth-it). The relationship between that grade and what the card fetches is in [what grading does to the price](/guides/what-grading-does-to-the-price).',
      },
    ],
  },
];
