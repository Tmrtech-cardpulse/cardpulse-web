export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldCard" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="50%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#C67C10" />
        </linearGradient>
        <linearGradient id="goldShine" x1="0" y1="0" x2="22" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE97A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C67C10" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pulseGrad" x1="6" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#7B5EF7" />
        </linearGradient>
        <linearGradient id="stripGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C67C10" />
          <stop offset="100%" stopColor="#9A5E08" />
        </linearGradient>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Back card (slightly offset) */}
      <rect x="11" y="7" width="22" height="16" rx="3" fill="#C67C10" opacity="0.5" />

      {/* Front card — gold */}
      <rect x="7" y="11" width="24" height="17" rx="3" fill="url(#goldCard)" filter="url(#cardShadow)" />

      {/* Shine overlay */}
      <rect x="7" y="11" width="24" height="17" rx="3" fill="url(#goldShine)" />

      {/* Magnetic stripe */}
      <rect x="7" y="13" width="24" height="4" fill="url(#stripGrad)" opacity="0.7" />

      {/* Pulse line */}
      <polyline
        points="9,24 13,24 15,20 17,27.5 19.5,18.5 22,24 26,24 29,24"
        stroke="url(#pulseGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Chip square */}
      <rect x="9" y="19" width="5" height="4" rx="1" fill="#E8A020" stroke="#C67C10" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}
