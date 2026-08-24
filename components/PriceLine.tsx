import type { Comp } from '@/lib/exampleCard';

/**
 * The comp line.
 *
 * This is a chart, not an illustration: every vertex is one sold price from
 * the fixture, so the shape cannot be drawn by hand and cannot flatter the
 * data. Change a comp and the line changes.
 */
export default function PriceLine({
  comps,
  height = 96,
}: {
  comps: Comp[];
  height?: number;
}) {
  const prices = comps.map((c) => c.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = max - min || 1;

  // Normalised to a 100 x 30 viewBox and stretched by preserveAspectRatio,
  // so the line fills whatever width the panel gives it.
  const pts = prices.map((p, i) => {
    const x = (i / (prices.length - 1)) * 100;
    const y = 30 - ((p - min) / span) * 26 - 2;
    return [x, y] as const;
  });

  const line = pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
  const area = `0,30 ${line} 100,30`;
  const [lastX, lastY] = pts[pts.length - 1];

  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      height={height}
      className="w-full"
      role="img"
      aria-label={`Sold prices over the last ${comps.length} sales, rising from £${min} to £${prices[prices.length - 1]}.`}
    >
      <defs>
        <linearGradient id="tape-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--c-accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--c-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon points={area} fill="url(#tape-fill)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--c-accent)"
        strokeWidth="0.6"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* The last print is the one that matters, so it gets the marker. */}
      <circle cx={lastX} cy={lastY} r="1" fill="var(--c-accent)" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
