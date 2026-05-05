export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldFront" x1="0" y1="0" x2="22" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="45%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#B8720A" />
        </linearGradient>
        <linearGradient id="goldBack" x1="0" y1="0" x2="20" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C67C10" />
          <stop offset="100%" stopColor="#8A5408" />
        </linearGradient>
        <linearGradient id="goldShine" x1="4" y1="4" x2="18" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pulseGrad" x1="5" y1="0" x2="33" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#7B5EF7" />
        </linearGradient>
        <linearGradient id="photoArea" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C67C10" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8A5408" stopOpacity="0.4" />
        </linearGradient>
        <filter id="shadow" x="-15%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Back card (portrait, slightly rotated) */}
      <g transform="rotate(-8 20 20)">
        <rect x="12" y="5" width="18" height="26" rx="2.5" fill="url(#goldBack)" opacity="0.7" />
      </g>

      {/* Front trading card — portrait orientation */}
      <rect x="9" y="7" width="18" height="26" rx="2.5" fill="url(#goldFront)" filter="url(#shadow)" />

      {/* Shine */}
      <rect x="9" y="7" width="18" height="26" rx="2.5" fill="url(#goldShine)" />

      {/* Photo area (top portion of card) */}
      <rect x="11" y="9" width="14" height="14" rx="1.5" fill="url(#photoArea)" />

      {/* Silhouette figure in photo area */}
      <ellipse cx="18" cy="14" rx="3" ry="3" fill="#B8720A" opacity="0.7" />
      <path d="M13 22 Q18 17 23 22" fill="#B8720A" opacity="0.5" />

      {/* Name bar below photo */}
      <rect x="11" y="24.5" width="14" height="2" rx="0.8" fill="#B8720A" opacity="0.5" />

      {/* Pulse line through middle of card */}
      <polyline
        points="9,22 12,22 13.5,19 15,24.5 17,16.5 19,22 22,22 27,22"
        stroke="url(#pulseGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
