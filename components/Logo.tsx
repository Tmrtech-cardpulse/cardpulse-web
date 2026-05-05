export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E2236" />
          <stop offset="100%" stopColor="#252A45" />
        </linearGradient>
        <linearGradient id="pulseGrad" x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#7B5EF7" />
        </linearGradient>
        <linearGradient id="accentBar" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#7B5EF7" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <rect width="40" height="40" rx="11" fill="url(#cardGrad)" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" stroke="#4F8EF7" strokeOpacity="0.3" />

      {/* Card shape — back card */}
      <rect x="10" y="8" width="22" height="16" rx="3" fill="#252A45" />

      {/* Card shape — front card */}
      <rect x="8" y="12" width="22" height="16" rx="3" fill="#1E2236" stroke="#252A45" strokeWidth="1" />

      {/* Magnetic stripe */}
      <rect x="8" y="14" width="22" height="3.5" fill="#252A45" />

      {/* Pulse line over card */}
      <polyline
        points="10,24 14,24 16,20 18,27 20,19 22,24 26,24 28,24"
        stroke="url(#pulseGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Bottom accent bar */}
      <rect x="8" y="31" width="10" height="2" rx="1" fill="url(#pulseGrad)" />
    </svg>
  );
}
