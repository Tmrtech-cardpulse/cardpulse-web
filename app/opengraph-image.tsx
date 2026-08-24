import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

import { summarise } from '@/lib/exampleCard';
import { colors } from '@/lib/generated/tokens';
import { site } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${site.name}. ${site.tagline}`;

/* Inlined as a data URI because ImageResponse has no origin to resolve a
   relative path against. This route is prerendered, so the read and the base64
   happen once at build time and never on a request. */
const backdrop = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), 'public', 'photo', 'og-backdrop.jpg'),
).toString('base64')}`;

/**
 * The share card. The figure on it comes from the same `summarise()` call as
 * the page, so it cannot drift.
 *
 * Two things about Satori decided this structure. `inset: 0` resolves against
 * the PADDING box, so an absolutely positioned backdrop on a padded parent is
 * inset by the padding and leaves a frame. And a div with only a background and
 * no dimensions is not painted at all, which silently dropped the scrim and
 * left the headline sitting on bright chrome. Both are fixed by keeping the
 * root unpadded with explicit sizes on the layers, and padding an inner box.
 */
export default function Image() {
  const s = summarise();
  const layer = { position: 'absolute' as const, top: 0, left: 0, ...size };

  return new ImageResponse(
    (
      <div style={{ ...size, display: 'flex', position: 'relative', backgroundColor: colors.bg }}>
        <img src={backdrop} alt="" style={{ ...layer, objectFit: 'cover' }} />

        {/* Scrim. The stack of cards sits left of centre and is the brightest
            thing in frame, so the type needs its own ground to stay legible. */}
        <div
          style={{
            ...layer,
            display: 'flex',
            background:
              'linear-gradient(100deg, rgba(11,13,26,0.88) 0%, rgba(11,13,26,0.70) 45%, rgba(11,13,26,0.28) 100%)',
          }}
        />

        <div
          style={{
            ...layer,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 72,
            color: colors.text,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 3,
                backgroundColor: colors.accent,
                display: 'flex',
              }}
            />
            <span style={{ fontWeight: 600 }}>SportsCardPulse</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
              Know what your cards
            </span>
            <span style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
              are actually worth.
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              borderTop: `1px solid ${colors.border}`,
              paddingTop: 28,
            }}
          >
            <span style={{ fontSize: 24, color: colors.textSecondary, display: 'flex' }}>
              {s.compCount} sold listings, eBay UK, {s.windowDays} days
            </span>
            <span style={{ fontSize: 44, fontWeight: 700, color: colors.accent, display: 'flex' }}>
              {s.latestLabel}
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
