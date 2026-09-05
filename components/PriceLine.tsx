import { formatGbp, type Comp } from '@/lib/exampleCard';

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
  /**
   * How the line arrives. 'load' prints it once on load, for the tape above the
   * fold that is already on screen. 'scroll' drives the same draw from a view
   * timeline, so a tape further down prints as it comes into view rather than
   * before anyone has seen it. 'none' renders it drawn.
   */
  animate = 'none',
  /**
   * Suffix for the gradient's id. This component renders more than once per
   * page, and duplicate SVG ids are invalid: the browser resolves url(#id) to
   * the first match, so every later instance silently paints with the first
   * one's gradient. It happens to look right today only because the gradients
   * are identical. Defaults to `animate`, which already differs per instance.
   */
  gradientId = animate,
}: {
  comps: Comp[];
  height?: number;
  animate?: 'load' | 'scroll' | 'none';
  gradientId?: string;
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

  // The label is read instead of the chart, so it has to describe this data
  // rather than the shape the data happened to have when it was written. The
  // old one said "rising" unconditionally and compared the lowest price to the
  // last one, which is two different claims spliced together. Currency comes
  // from the fixture's formatter for the same reason every other figure does.
  const first = prices[0];
  const last = prices[prices.length - 1];
  const direction = last > first ? 'rising' : last < first ? 'falling' : 'flat';
  const area = `0,30 ${line} 100,30`;
  const [lastX, lastY] = pts[pts.length - 1];

  // pathLength normalises the geometry to 100 units, so the dash pattern is
  // independent of the actual path length. That matters here because the
  // viewBox is stretched by preserveAspectRatio="none", which would otherwise
  // distort a dash array expressed in user units.
  const drawClass =
    animate === 'load' ? 'tape-line-draw' : animate === 'scroll' ? 'tape-line-scroll' : undefined;

  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      height={height}
      className="w-full"
      role="img"
      aria-label={`Sold prices over the last ${comps.length} sales, ${direction} from ${formatGbp(first)} to ${formatGbp(last)}.`}
    >
      <defs>
        <linearGradient id={`tape-fill-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--c-accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--c-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon points={area} fill={`url(#tape-fill-${gradientId})`} />
      <polyline
        points={line}
        className={drawClass}
        pathLength={100}
        strokeDasharray={drawClass ? 100 : undefined}
        style={drawClass ? ({ '--line-length': 100 } as React.CSSProperties) : undefined}
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
