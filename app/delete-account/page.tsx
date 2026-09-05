import type { Metadata } from 'next';
import Link from 'next/link';

import LegalShell from '@/components/LegalShell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * Account deletion. App Review reads this page, so it states what goes, what
 * stays, and how long it takes, in that order.
 *
 * The request button used to be filled with `--c-danger`. Red on this site
 * means a price fell, and using it as chrome is the one thing the palette rules
 * forbid outright, so the control is the ordinary `.cta` and the weight of the
 * action is carried by the words. The page also stopped carrying its own
 * copyright line, which named a different operator from the one in the footer
 * directly beneath it.
 */
const BODY = [
  'Please delete my SportsCardPulse account and all associated data.',
  '',
  'Registered email: ',
].join('\n');

const MAILTO = `mailto:${site.contact}?subject=${encodeURIComponent(
  'Account deletion request',
)}&body=${encodeURIComponent(BODY)}`;

export const metadata: Metadata = pageMeta({
  title: 'Delete your account',
  description:
    'How to permanently delete your SportsCardPulse account: what is removed, what is kept, how long it takes, and how to make the request.',
  path: '/delete-account',
});

export default function Page() {
  return (
    <LegalShell
      title="Delete your account"
      meta="How to permanently remove your account and your data."
    >
      <p>
        You can delete your account from inside the app at any time, under Profile. If you no longer
        have the app installed, use the request below and it will be done for you.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your account and login credentials</li>
        <li>Your entire card collection and all card data</li>
        <li>All scan images stored in your account</li>
        <li>Your portfolio history and price alerts</li>
        <li>Your Card Catalogue contributions, removed immediately</li>
        <li>All personal data associated with your account</li>
      </ul>
      <p>
        Everything above is permanently deleted within <strong>30 days</strong> of the request. It
        cannot be recovered afterwards.
      </p>

      <h2>What is retained</h2>
      <p>
        No personal data is kept after deletion. Anonymous, aggregated catalogue data that cannot be
        linked back to you may remain part of the shared card catalogue, because there is nothing in
        it that identifies you.
      </p>

      <h2>How to request deletion</h2>
      <p>
        Send an email from the address your account is registered to, and include that address in
        the message. Sending from the registered address is how the request is verified, so a
        message from anywhere else will get a reply asking you to confirm.
      </p>

      <p>
        <a href={MAILTO} className="cta px-6 py-3 text-[15px] no-underline">
          Request account deletion
        </a>
      </p>

      <p>
        Or write to <a href={`mailto:${site.contact}`}>{site.contact}</a>{' '}
        with the subject line &ldquo;Account deletion request&rdquo;. What happens to your data
        before you ask for any of this is set out in the{' '}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalShell>
  );
}
