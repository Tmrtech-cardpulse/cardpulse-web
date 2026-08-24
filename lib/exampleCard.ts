/**
 * The example card.
 *
 * Every figure rendered anywhere on this site is computed from this fixture.
 * No component types a number. If a headline says the spread is £74, that is
 * because `summarise()` returned 74, and changing a comp below changes the
 * headline.
 *
 * The card is real. The comps are illustrative and the page says so out loud
 * wherever they appear: the live eBay pipeline is what produces real comps in
 * the app, and this file stands in for it on the marketing site. It is not a
 * screenshot of the app and does not pretend to be one.
 */

export type Comp = {
  /** ISO date the listing sold. */
  soldOn: string;
  /** Hammer price in GBP, excluding postage. */
  price: number;
  /** Grading company and numeric grade, or null for a raw card. */
  grade: string | null;
};

export type ExampleCard = {
  player: string;
  set: string;
  season: string;
  number: string;
  sport: string;
  /** Illustrative sold comps, oldest first. */
  comps: Comp[];
};

export const exampleCard: ExampleCard = {
  player: 'Jude Bellingham',
  set: 'Topps Chrome Bundesliga',
  season: '2020-21',
  number: '#1',
  sport: 'Football',
  comps: [
    { soldOn: '2026-06-02', price: 168, grade: null },
    { soldOn: '2026-06-14', price: 181, grade: null },
    { soldOn: '2026-06-27', price: 174, grade: null },
    { soldOn: '2026-07-08', price: 192, grade: null },
    { soldOn: '2026-07-19', price: 205, grade: null },
    { soldOn: '2026-07-30', price: 198, grade: null },
    { soldOn: '2026-08-06', price: 221, grade: null },
    { soldOn: '2026-08-13', price: 214, grade: null },
    { soldOn: '2026-08-19', price: 236, grade: null },
    { soldOn: '2026-08-22', price: 242, grade: null },
  ],
};

const gbp = (n: number) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(n);

/** Everything the page is allowed to say about the example card. */
export function summarise(card: ExampleCard = exampleCard) {
  const prices = card.comps.map((c) => c.price);
  const latest = prices[prices.length - 1];
  const first = prices[0];
  const low = Math.min(...prices);
  const high = Math.max(...prices);

  /** The last three comps, which is what the app treats as the working price. */
  const recent = prices.slice(-3);
  const median = [...recent].sort((a, b) => a - b)[Math.floor(recent.length / 2)];

  const changePct = Math.round(((latest - first) / first) * 1000) / 10;

  return {
    title: `${card.season} ${card.set} ${card.player} ${card.number}`,
    player: card.player,
    set: card.set,
    season: card.season,
    sport: card.sport,
    compCount: prices.length,
    /** Window the comps span, in days. */
    windowDays: Math.round(
      (Date.parse(card.comps[card.comps.length - 1].soldOn) -
        Date.parse(card.comps[0].soldOn)) /
        86_400_000,
    ),
    latest,
    latestLabel: gbp(latest),
    medianLabel: gbp(median),
    lowLabel: gbp(low),
    highLabel: gbp(high),
    spread: high - low,
    spreadLabel: gbp(high - low),
    changePct,
    changeLabel: `${changePct > 0 ? '+' : ''}${changePct}%`,
    rising: changePct > 0,
    comps: card.comps,
    pulseScore: pulseScore(prices),
  };
}

/**
 * Pulse score, 0-100. Mirrors the shape of the app's formula: a logarithmic
 * boost from how many comps exist (the twentieth sale tells you much less than
 * the second, so it caps), plus the direction of the recent trend. Computed
 * here rather than typed into a component.
 */
function pulseScore(prices: number[]) {
  const depth = Math.min(30, Math.round((Math.log(prices.length + 1) / Math.log(21)) * 30));
  const trend = (prices[prices.length - 1] - prices[0]) / prices[0];
  const momentum = Math.min(40, Math.round(Math.max(0, trend) * 100));
  const base = 30;
  return Math.max(0, Math.min(100, base + depth + momentum));
}

export const formatGbp = gbp;

export function formatCompDate(iso: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(iso));
}
