import type { Metadata } from 'next';
import Link from 'next/link';

import LegalShell from '@/components/LegalShell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * The privacy policy.
 *
 * The words are the ones reviewed for the store listings. What changed here is
 * only the furniture: this page used to carry its own palette in hard-coded
 * hexes, which froze it at the pre-correction values (`#52566B` measures 2.67:1
 * and failed AA at every size) and pinned it to a brand blue the site no longer
 * uses. Everything now comes from `.prose-legal` and the tokens, so the page
 * cannot drift from the rest of the site again.
 *
 * Two substantive additions, both because the site itself now processes data
 * the app does not: the waitlist form, and the analytics on these pages.
 */
const UPDATED = 'Last updated September 2026. Operated by Thomas Michael Ratcliffe, United Kingdom.';

export const metadata: Metadata = pageMeta({
  title: 'Privacy Policy',
  description:
    'How SportsCardPulse handles your data: what the app collects, who it is shared with, how long it is kept, and your rights under UK GDPR.',
  path: '/privacy',
});

export default function Page() {
  return (
    <LegalShell title="Privacy Policy" meta={UPDATED}>
      <h2>1. Who we are</h2>
      <p>
        SportsCardPulse is a sports card collection management app operated by Thomas Michael
        Ratcliffe, a sole trader based in the United Kingdom, trading as {site.operator}. Thomas
        Michael Ratcliffe is the data controller for the purposes of UK GDPR. Questions about this
        policy: <a href={`mailto:${site.contact}`}>{site.contact}</a>
      </p>

      <h2>2. What data we collect</h2>
      <ul>
        <li>Account data: your email address and encrypted password, used solely to identify your account.</li>
        <li>Collection data: card details you add (player, year, set, purchase price, notes, photos). Visible only to you.</li>
        <li>Scan images: photos you take to identify cards. Processed by our AI service and retained to display your card in the app.</li>
        <li>Catalogue contributions (optional): anonymised card identity data if you opt in. No prices or personal details. Withdraw via Profile, then Data and Privacy.</li>
        <li>Usage data: app opens and feature usage to improve the product. No third-party advertising trackers.</li>
        <li>Waitlist data: if you enter an email address on this website, we store that address and the fact it came from this site, so we can tell you once when the app is released.</li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To provide app features: collection tracking, AI card identification, profit and loss calculations, price alerts.</li>
        <li>To send push notifications you have explicitly requested. Disable in Profile, then Notifications, or in your device settings.</li>
        <li>To process subscription payments via RevenueCat and Apple or Google. We do not store payment card details.</li>
        <li>To build the anonymised SportsCardPulse Card Catalogue, if you have opted in.</li>
        <li>To send one email to a waitlist address when the app is released. The list is not used for a newsletter and is not shared or sold. Reply to any message to be removed, or write to the address in section 6.</li>
      </ul>

      <h2>4. Who we share data with</h2>
      <ul>
        <li>Supabase: database and file storage, in the EU region.</li>
        <li>Anthropic: card image analysis via Claude. Images are not retained beyond the API call.</li>
        <li>eBay: market price lookups. No personal data is sent to eBay.</li>
        <li>RevenueCat: subscription management.</li>
        <li>Shotstack: video generation for the Share feature.</li>
        <li>Vercel: hosting for this website, and privacy-friendly page analytics.</li>
      </ul>

      <h2>5. Data retention</h2>
      <p>
        Your data is retained while your account is active. You can delete your account at any time
        from within the app, and there are{' '}
        <Link href="/delete-account">instructions for deleting it here</Link>. Deletion requests are
        fulfilled within 30 days. Catalogue contributions are removed immediately upon consent
        withdrawal. A waitlist address is deleted once the release email has been sent, or as soon
        as you ask, whichever comes first.
      </p>

      <h2>6. Your rights under UK GDPR</h2>
      <p>
        You have the right to access, correct, export, or delete your personal data. Email{' '}
        <a href={`mailto:${site.contact}`}>{site.contact}</a>. You may also complain to the{' '}
        <a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">
          Information Commissioner&rsquo;s Office
        </a>
        .
      </p>

      <h2>7. Cookies and analytics</h2>
      <p>
        The app does not use browser cookies. Sessions are stored locally on your device using
        secure storage. This website uses Vercel Web Analytics, which counts page views without
        cookies and without building a profile of you, so there is no consent banner to dismiss.
      </p>

      <h2>8. Children</h2>
      <p>
        SportsCardPulse is not directed at children under 13. We do not knowingly collect data from
        children under 13.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy. Significant changes will be notified within the app. Continued
        use constitutes acceptance.
      </p>
    </LegalShell>
  );
}
