import Image from 'next/image';
import Link from 'next/link';

import icon from '../public/icon.png';

/** The wordmark is the app icon plus the name. The two-tone name is the
 *  existing brand treatment and is deliberately preserved. */
export default function Wordmark({ size = 28 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="SportsCardPulse home">
      <Image
        src={icon}
        alt=""
        width={size}
        height={size}
        style={{ borderRadius: size * 0.22 }}
        priority
      />
      <span
        className="font-semibold tracking-tight"
        style={{ fontSize: 'var(--t-body)' }}
      >
        SportsCard<span style={{ color: 'var(--c-accent)' }}>Pulse</span>
      </span>
    </Link>
  );
}
