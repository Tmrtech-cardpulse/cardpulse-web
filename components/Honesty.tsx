/**
 * The caveats, stated on the page rather than buried in the terms. Every item
 * describes real behaviour in the app: the confidence flag, the split between
 * active and sold data, and the eBay UK scope are all implemented.
 */
const CLAIMS = [
  {
    k: 'It reads eBay UK, not every market',
    v: 'Comps come from completed eBay UK listings. A card that mostly trades on Facebook groups or at a show will not be fully represented, and the app does not pretend otherwise.',
  },
  {
    k: 'Asking and sold are kept apart',
    v: 'Active listings are what sellers want. Sold listings are what buyers paid. They are labelled separately everywhere, and never averaged together.',
  },
  {
    k: 'Thin data is shown as thin',
    v: 'When only a couple of comparable sales exist, the card is flagged as low confidence instead of printing a confident-looking number over almost nothing.',
  },
  {
    k: 'A median is not a valuation',
    v: 'This is what similar cards recently sold for. It is not an appraisal, not an insurance value, and not advice about whether to buy or sell.',
  },
];

export default function Honesty() {
  return (
    <section className="band px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="display max-w-[18ch]" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
          What the numbers are, and what they are not.
        </h2>

        <div className="mt-12 grid gap-px md:grid-cols-2" style={{ backgroundColor: 'var(--c-border)' }}>
          {CLAIMS.map((c) => (
            <div key={c.k} className="p-7" style={{ backgroundColor: 'var(--c-bg)' }}>
              <h3 className="text-[17px] font-semibold">{c.k}</h3>
              <p
                className="mt-3 max-w-[52ch] leading-relaxed"
                style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
              >
                {c.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
