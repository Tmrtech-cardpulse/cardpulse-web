import type { Metadata } from 'next';

import LegalShell from '@/components/LegalShell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * The terms.
 *
 * Wording unchanged from what was reviewed for the store listings. What was
 * removed is the page's private copy of the palette, which had frozen at hexes
 * the brand no longer uses, and its own copyright line, which contradicted the
 * one in the site footer four hundred pixels below it.
 */
const UPDATED = 'Last updated May 2026. Operated by Thomas Michael Ratcliffe, United Kingdom.';

export const metadata: Metadata = pageMeta({
  title: 'Terms of Service',
  description:
    'The terms you agree to by using SportsCardPulse: what the app provides, how subscriptions are billed, and the limits on the valuations it shows.',
  path: '/terms',
});

export default function Page() {
  return (
    <LegalShell title="Terms of Service" meta={UPDATED}>
      <h2>1. Acceptance</h2>
      <p>
        By downloading or using SportsCardPulse you agree to these terms. If you do not agree, do
        not use the app. These terms may be updated from time to time; continued use of the app
        after changes are posted constitutes acceptance of the updated terms.
      </p>

      <h2>2. What SportsCardPulse provides</h2>
      <p>
        SportsCardPulse is a sports card collection management tool providing AI-assisted card
        identification, estimated market valuations based on publicly available market data,
        portfolio tracking, and a sports card news feed. All prices and valuations shown in the app
        are estimates for informational purposes only. They are not offers, guarantees, appraisals,
        or financial advice.
      </p>

      <h2>3. Your account</h2>
      <p>
        You are responsible for keeping your login credentials secure. You must be at least 13 years
        old to use SportsCardPulse. One account per person; you may not share accounts. You can
        delete your account at any time from within the app.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>Do not use SportsCardPulse for any unlawful purpose.</li>
        <li>Do not attempt to reverse-engineer, decompile, or extract data from the service.</li>
        <li>Do not upload content that infringes third-party intellectual property rights.</li>
        <li>Do not abuse the AI scanning feature in a way that degrades service for other users.</li>
      </ul>

      <h2>5. Free tier and Premium</h2>
      <p>
        SportsCardPulse offers a free tier with limits on collection size and AI scanning, and a
        Premium subscription that unlocks higher limits and additional tracking features. Specific
        limits and Premium features are shown in the app and may change with reasonable notice.
      </p>

      <h2>6. Subscriptions and payments</h2>
      <p>
        Premium subscriptions are billed through the Apple App Store or Google Play. Subscription
        length and price are shown in the app at the point of purchase. Subscriptions auto-renew
        until cancelled. You can manage or cancel your subscription at any time in your App Store or
        Google Play account settings; cancellation takes effect at the end of the current billing
        period. Refunds are handled by Apple or Google in accordance with their respective policies.
        We do not issue refunds directly.
      </p>

      <h2>7. Referral programme</h2>
      <p>
        The referral programme grants both parties a limited-time Premium trial. Codes may only be
        redeemed once per account. Abuse of the referral system may result in account suspension.
      </p>

      <h2>8. Card Catalogue contributions</h2>
      <p>
        If you opt in, you grant a non-exclusive, royalty-free licence to use anonymised card
        identity data to build and improve the shared catalogue. This licence ends when you withdraw
        consent. No prices or personal information are included.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        The SportsCardPulse app, brand, and content are owned by Thomas Michael Ratcliffe. Card
        images, player names, set names, and league marks are the property of their respective
        rights holders. SportsCardPulse makes no claim of ownership over third-party card content.
      </p>

      <h2>10. Disclaimer of warranties</h2>
      <p>
        SportsCardPulse is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind, whether express or implied. We do not guarantee uninterrupted
        service, accuracy of AI identification, or accuracy of market valuations. Estimates may be
        inaccurate or unavailable for some cards.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by UK law, Thomas Michael Ratcliffe is not liable for any
        indirect, incidental, or consequential loss arising from use of SportsCardPulse, including
        financial losses based on app valuations or decisions made in reliance on them.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may suspend or terminate your account if you breach these terms. You may delete your
        account at any time from within the app, or by contacting{' '}
        <a href={`mailto:${site.contact}`}>{site.contact}</a>.
      </p>

      <h2>13. Relationship with Apple</h2>
      <p>
        If you downloaded SportsCardPulse from the Apple App Store, you acknowledge that these terms
        are between you and Thomas Michael Ratcliffe, not Apple. Apple is not responsible for the
        app or its content. In the event of any failure of the app to conform to any applicable
        warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the
        app. To the maximum extent permitted by law, Apple has no other warranty obligation with
        respect to the app. Apple and its subsidiaries are third-party beneficiaries of these terms
        and, upon your acceptance, will have the right to enforce these terms against you.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales. Disputes are subject to the
        exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>15. Contact</h2>
      <p>
        Thomas Michael Ratcliffe, trading as {site.operator}, United Kingdom.
        <br />
        Email: <a href={`mailto:${site.contact}`}>{site.contact}</a>
      </p>
    </LegalShell>
  );
}
