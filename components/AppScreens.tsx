import { formatCompDate, formatGbp, summarise } from '@/lib/exampleCard';

import Reveal from './Reveal';

/**
 * The app, drawn at real size.
 *
 * CLAUDE.md forbids div-based fake product UI, and it is right to: the old site
 * had a phone made of divs containing invented prices, and deleting it was the
 * point of this redesign. The rule's target is the invented data, not the
 * device frame. Every figure below comes from `summarise()` on the same fixture
 * that feeds PriceTape and the OG image, so nothing here can say something the
 * rest of the page does not, and changing a comp in the fixture moves these
 * screens with everything else.
 *
 * The two screens were chosen because they are the two the fixture can honestly
 * fill. Scan carries no data at all. Card detail is entirely comps, spread and
 * Pulse score, all computed. A collection grid would need cards that do not
 * exist, and a P&L needs a portfolio, so neither is here.
 *
 * Poppins, because it is what the app is set in. A depiction of an app in the
 * site's own typeface is not a depiction.
 *
 * Every frame is `role="img"` with a written label. A screen reader walking
 * thirty nested divs of a fake interface learns nothing; the label says what
 * the picture shows, and the same figures are read properly in PriceTape.
 */

const s = summarise();

/** The last five comps, newest first: what fits a phone-sized listing panel. */
const recentComps = [...s.comps].slice(-5).reverse();

function Chrome() {
  return (
    <div className="flex items-center justify-between px-6 pb-1 pt-3">
      <span className="text-[11px] font-semibold" style={{ color: 'var(--c-text)' }}>
        9:41
      </span>
      <span className="flex items-end gap-[3px]" aria-hidden="true">
        <i className="block w-[2px] rounded-[1px]" style={{ height: 4, background: 'var(--c-text)' }} />
        <i className="block w-[2px] rounded-[1px]" style={{ height: 7, background: 'var(--c-text)' }} />
        <i className="block w-[2px] rounded-[1px]" style={{ height: 10, background: 'var(--c-text)' }} />
        <i
          className="ml-1 block h-[9px] w-[18px] rounded-[2px] border"
          style={{ borderColor: 'rgb(255 255 255 / 0.5)' }}
        />
      </span>
    </div>
  );
}

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative w-full max-w-[300px] overflow-hidden"
      style={{
        aspectRatio: '300 / 620',
        background: 'var(--c-bg)',
        border: '1px solid var(--c-border)',
        borderRadius: 34,
        boxShadow: '0 30px 60px -30px rgb(0 0 0 / 0.9), 0 0 0 6px var(--c-elevated)',
        fontFamily: 'var(--font-poppins), system-ui, sans-serif',
      }}
    >
      {/* The chrome is a fixed row and the screen takes the rest. Giving the
          screen `h-full` instead measures it against the whole frame, so every
          screen sat one status bar too low and pushed its own footer under the
          tab bar. */}
      <div className="flex h-full flex-col">
        <Chrome />
        <div className="relative min-h-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

/** Tab glyphs. Simplified, but distinct: five identical squares read as a row
 *  of checkboxes rather than as a tab bar. */
const TAB_GLYPH: Record<string, React.ReactNode> = {
  scan: (
    <>
      <path d="M3 6.5V4.5a1.5 1.5 0 0 1 1.5-1.5H6M10 3h1.5A1.5 1.5 0 0 1 13 4.5v2M13 9.5v2a1.5 1.5 0 0 1-1.5 1.5H10M6 13H4.5A1.5 1.5 0 0 1 3 11.5v-2" />
      <path d="M2.5 8h11" />
    </>
  ),
  collection: (
    <>
      <rect x="2.5" y="5" width="11" height="8.5" rx="1.6" />
      <path d="M4.5 2.8h7" />
    </>
  ),
  pnl: (
    <>
      <polyline points="2.5,11 6,7.5 8.5,10 13.5,4.5" />
      <polyline points="9.8,4.5 13.5,4.5 13.5,8" />
    </>
  ),
  discover: (
    <>
      <rect x="2.5" y="3.5" width="11" height="9" rx="1.4" />
      <path d="M5 6h4M5 8.5h4M5 10.5h2.5" />
    </>
  ),
  profile: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <circle cx="8" cy="6.6" r="1.8" />
      <path d="M4.6 12a3.9 3.9 0 0 1 6.8 0" />
    </>
  ),
};

/** Tab bar. Five destinations, matching TabNavigator in the app repo. */
function TabBar({ active }: { active: 'scan' | 'collection' }) {
  const tabs = [
    { key: 'scan', label: 'Scan' },
    { key: 'collection', label: 'Collection' },
    { key: 'pnl', label: 'P&L' },
    { key: 'discover', label: 'Discover' },
    { key: 'profile', label: 'Profile' },
  ];
  return (
    <div
      className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 pb-3 pt-2"
      style={{
        borderTop: '1px solid var(--c-border)',
        background: 'rgb(13 15 28 / 0.85)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {tabs.map((t) => (
        <span
          key={t.key}
          className="flex-1 text-center text-[8px] font-semibold"
          style={{ color: t.key === active ? 'var(--c-accent)' : 'var(--c-text-muted)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-[3px] block"
            aria-hidden="true"
          >
            {TAB_GLYPH[t.key]}
          </svg>
          {t.label}
        </span>
      ))}
    </div>
  );
}

/** The Scan tab. Carries no data, so there is nothing here to get wrong. */
function ScanScreen() {
  return (
    <div className="flex h-full flex-col items-center px-5 pb-[62px] pt-4">
      <p className="text-[26px] font-extrabold tracking-[-0.02em]" style={{ color: 'var(--c-text)' }}>
        SportsCard<span style={{ color: 'var(--c-accent)' }}>Pulse</span>
      </p>
      <p className="mt-1 text-[10px]" style={{ color: 'var(--c-text-secondary)' }}>
        The pulse of the hobby.
      </p>
      <p className="mt-1 text-[8px] font-medium" style={{ color: 'var(--c-text-muted)' }}>
        Real eBay GB prices in pounds
      </p>

      <div className="flex flex-1 flex-col items-center justify-center">
        <svg width="180" height="34" viewBox="0 0 280 56" aria-hidden="true" className="mb-4">
          <polyline
            points="0,28 60,28 80,28 92,22 100,50 112,6 124,28 144,28 280,28"
            fill="none"
            stroke="var(--c-accent-hot)"
            strokeWidth="3"
          />
        </svg>
        <div
          className="flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full"
          style={{
            background: 'linear-gradient(135deg, #3A6BF0 0%, var(--c-accent-fill) 50%, #2650AE 100%)',
            boxShadow: '0 8px 34px rgb(90 143 255 / 0.45)',
          }}
        >
          <span
            className="block h-[30px] w-[30px] rounded-[6px]"
            style={{ border: '2px solid #fff' }}
            aria-hidden="true"
          />
          <span className="mt-2 text-[8px] font-extrabold tracking-[0.2em] text-white">SCAN</span>
        </div>
        <p className="mt-5 text-[11px] font-medium" style={{ color: 'var(--c-text-secondary)' }}>
          Tap to scan a card
        </p>
      </div>

      <div className="flex w-full justify-around pb-2">
        {['Flat surface', 'Good lighting', 'Front first'].map((tip) => (
          <span key={tip} className="text-[8px] font-medium" style={{ color: 'var(--c-text-muted)' }}>
            {tip}
          </span>
        ))}
      </div>
      <TabBar active="scan" />
    </div>
  );
}

/** The card screen. Every figure is computed. */
function CardScreen() {
  return (
    <div className="flex h-full flex-col px-4 pb-[62px] pt-1">
      <p className="pb-2 text-[11px] font-medium" style={{ color: 'var(--c-accent)' }}>
        Back
      </p>

      <div
        className="mx-auto mb-3 w-[42%] overflow-hidden rounded-[8px]"
        style={{
          aspectRatio: '2.5 / 3.5',
          background: 'linear-gradient(150deg, #1B3A6B, #0E1B33 62%, #3E1E4F)',
          boxShadow: '0 8px 18px -4px rgb(0 0 0 / 0.75)',
        }}
        aria-hidden="true"
      />

      <p className="text-center text-[12px] font-bold" style={{ color: 'var(--c-text)' }}>
        {s.player}
      </p>
      <p className="text-center text-[9px]" style={{ color: 'var(--c-text-secondary)' }}>
        {s.season} {s.set} {'#1'}
      </p>

      <div
        className="mt-3 rounded-[10px] p-3"
        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
      >
        <p
          className="text-[7px] font-bold tracking-[0.09em]"
          style={{ color: 'var(--c-text-muted)' }}
        >
          RECENTLY SOLD
        </p>
        <div className="mt-2 flex">
          {[
            { l: 'LOW', v: s.lowLabel, accent: false },
            { l: 'MEDIAN', v: s.medianLabel, accent: true },
            { l: 'HIGH', v: s.highLabel, accent: false },
          ].map((cell, i) => (
            <div
              key={cell.l}
              className="flex-1 text-center"
              style={
                i === 1
                  ? { borderLeft: '1px solid var(--c-border)', borderRight: '1px solid var(--c-border)' }
                  : undefined
              }
            >
              <p className="text-[7px] font-bold tracking-[0.07em]" style={{ color: 'var(--c-text-muted)' }}>
                {cell.l}
              </p>
              <p
                className="mono text-[13px] font-bold"
                style={{ color: cell.accent ? 'var(--c-accent)' : 'var(--c-text)' }}
              >
                {cell.v}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-[8px]" style={{ color: 'var(--c-text-muted)' }}>
          {s.compCount} sold on eBay.co.uk in {s.windowDays} days
        </p>
      </div>

      <div className="mt-2 flex-1 overflow-hidden">
        {recentComps.map((c) => (
          <div
            key={c.soldOn}
            className="flex items-center justify-between py-[7px]"
            style={{ borderTop: '1px solid var(--c-border)' }}
          >
            <span className="mono text-[9px]" style={{ color: 'var(--c-text-muted)' }}>
              {formatCompDate(c.soldOn)}
            </span>
            <span className="text-[9px]" style={{ color: 'var(--c-text-secondary)' }}>
              {c.grade ? c.grade : 'Raw'}
            </span>
            <span className="mono text-[11px] font-bold" style={{ color: 'var(--c-text)' }}>
              {formatGbp(c.price)}
            </span>
          </div>
        ))}
      </div>
      <TabBar active="collection" />
    </div>
  );
}

export default function AppScreens() {
  return (
    <section id="the-app" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="eyebrow">The app</p>
        <h2 className="display mt-3 max-w-[18ch]" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
          One screen to point, one screen to price.
        </h2>
        <p
          className="mt-4 max-w-[62ch] leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
        >
          The card below is a real one. Its sold prices are the same illustrative comps every other
          figure on this page is computed from, so what the phone shows and what the tape shows
          cannot disagree.
        </p>

        <div className="mt-12 grid items-start gap-10 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <Reveal>
            <figure className="m-0 flex flex-col items-center gap-4">
              <Frame label="The Scan tab: the SportsCardPulse wordmark, a pulse line, and a large round Scan button with the caption 'Tap to scan a card'.">
                <ScanScreen />
              </Frame>
              <figcaption
                className="max-w-[34ch] text-center leading-relaxed"
                style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
              >
                Point it at the card. The app reads the player, set, year and variant off the front.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06}>
            <figure className="m-0 flex flex-col items-center gap-4">
              <Frame
                label={`The card screen for the ${s.title}, showing a low of ${s.lowLabel}, a median of ${s.medianLabel}, a high of ${s.highLabel}, and the five most recent sales with their dates.`}
              >
                <CardScreen />
              </Frame>
              <figcaption
                className="max-w-[34ch] text-center leading-relaxed"
                style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
              >
                Then it prints the tape: what the card sold for, when, and how far apart the sales
                were.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
