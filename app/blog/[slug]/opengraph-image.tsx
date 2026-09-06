import { ImageResponse } from 'next/og';

import { isPublished, postBySlug, publishedPosts } from '@/content/posts';
import { CLUSTER_LABEL } from '@/content/types';
import { colors } from '@/lib/generated/tokens';
import { site } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${site.name}`;

/** Prerendered for live posts only. A scheduled one has no page to share yet. */
export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

/**
 * The share card for a post.
 *
 * Deliberately typographic rather than photographic. The site OG image carries
 * a photograph and a price because it is selling the product; a post is selling
 * one specific answer, so what matters in a timeline is the question it answers
 * being readable at thumbnail size. Cropping a photo behind that would cost
 * contrast and buy nothing.
 *
 * Satori notes, both learned on the site card: a div with a background and no
 * dimensions is not painted, and `inset: 0` resolves against the padding box.
 * Hence explicit sizes on every layer and padding kept on an inner box.
 */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);

  const title = post && isPublished(post) ? post.title : site.name;
  const cluster = post && isPublished(post) ? CLUSTER_LABEL[post.cluster] : site.tagline;

  /* The headline shrinks in one step rather than continuously. Satori has no
     text measurement, so a long title at a fixed size overflows silently and
     the only defence is a threshold that was checked against the longest title
     in the set. */
  const titleSize = title.length > 58 ? 58 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          ...size,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: colors.bg,
          padding: 72,
          // A single hairline of brand at the top edge. The card is otherwise
          // type on a dark ground, which is what keeps it legible when a
          // timeline scales it to a couple of hundred pixels.
          borderTop: `8px solid ${colors.accent}`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: colors.textSecondary,
            }}
          >
            {cluster}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: titleSize,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: colors.text,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 28, color: colors.text }}>
            SportsCard
            <span style={{ color: colors.accent }}>Pulse</span>
          </div>
          <div style={{ display: 'flex', fontSize: 22, color: colors.textMuted }}>
            sportscardpulse.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
