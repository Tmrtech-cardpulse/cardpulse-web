import { formatCompDate, formatGbp, summarise } from '@/lib/exampleCard';

import PriceLine from './PriceLine';

/**
 * The example card, priced.
 *
 * Everything here is computed by `summarise()`. The caption states what the
 * data is so nobody has to guess whether the page is quoting a real market.
 */
export default function PriceTape({ compact = false }: { compact?: boolean }) {
  const s = summarise();
  const rows = compact ? s.comps.slice(-5) : s.comps;

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-start justify-between gap-4 px-5 pt-4 pb-3">
        <div className="min-w-0">
          <p className="col-label">An example card, priced</p>
          <p className="mt-1.5 text-[14px] font-semibold leading-snug">{s.title}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="figure figure-enter text-[26px] font-semibold leading-none" data-money>
            {s.latestLabel}
          </p>
          <p
            className="mono mt-1 text-[13px] font-medium"
            data-money
            style={{ color: s.rising ? 'var(--c-success)' : 'var(--c-danger)' }}
          >
            {s.changeLabel} over {s.windowDays} days
          </p>
        </div>
      </div>

      <PriceLine
        comps={s.comps}
        height={compact ? 72 : 96}
        animate={compact ? 'load' : 'scroll'}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderTop: 'var(--web-hairline)' }}>
        {[
          { k: 'Median of last 3', v: s.medianLabel },
          { k: 'Range', v: `${s.lowLabel} to ${s.highLabel}` },
          { k: 'Spread', v: s.spreadLabel },
        ].map((cell, i) => (
          <div
            key={cell.k}
            className="px-5 py-3"
            style={i > 0 ? { borderTop: 'var(--web-hairline)' } : undefined}
            data-cell={i}
          >
            <p className="col-label">{cell.k}</p>
            <p className="mono mt-1 text-[14px] font-medium" data-money>
              {cell.v}
            </p>
          </div>
        ))}
      </div>

      <ul className="stagger" style={{ borderTop: 'var(--web-hairline)' }}>
        {rows.map((c, i) => (
          <li
            key={c.soldOn}
            className="flex items-center justify-between px-5 py-2"
            style={
              {
                borderBottom: 'var(--web-hairline)',
                '--stagger-index': i,
              } as React.CSSProperties
            }
          >
            <span className="mono text-[13px]" data-date style={{ color: 'var(--c-text-secondary)' }}>
              {formatCompDate(c.soldOn)}
            </span>
            <span className="text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
              {c.grade ?? 'Raw'}
            </span>
            <span className="mono text-[13px] font-medium" data-money>
              {formatGbp(c.price)}
            </span>
          </li>
        ))}
      </ul>

      <p className="px-5 py-3 text-[12px]" style={{ color: 'var(--c-text-secondary)' }}>
        {s.compCount} sold listings, eBay UK, {s.windowDays} days. Figures on this page are
        illustrative. The app reads the live market.
      </p>
    </div>
  );
}
