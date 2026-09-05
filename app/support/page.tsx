import type { Metadata } from 'next';
import Link from 'next/link';
import { CaretRight, Camera, CreditCard, CurrencyGbp, EnvelopeSimple, Lock } from '@phosphor-icons/react/ssr';

import LegalShell from '@/components/LegalShell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * Support.
 *
 * This page used to carry emoji in place of icons, its own gradient chrome, and
 * a brand blue two revisions out of date. Icons now come from Phosphor like
 * everywhere else, the ground comes from `.panel`, and the topic list is
 * hairline rows because rows are what this site does with a run of items.
 */
export const metadata: Metadata = pageMeta({
  title: 'Support',
  description:
    'Get help with SportsCardPulse: scanning problems, missing eBay prices, billing and subscriptions, or anything to do with your account and your data.',
  path: '/support',
});

const TOPICS = [
  {
    Glyph: CreditCard,
    title: 'Subscriptions and billing',
    desc: 'Upgrades, cancellations and refund requests.',
  },
  {
    Glyph: Camera,
    title: 'Card scanning',
    desc: 'A scan that fails, or the wrong card coming back.',
  },
  {
    Glyph: CurrencyGbp,
    title: 'Pricing data',
    desc: 'Missing or wrong-looking eBay prices on a card.',
  },
  {
    Glyph: Lock,
    title: 'Account and privacy',
    desc: 'Signing in, exporting your data, or deleting it.',
  },
];

export default function Page() {
  return (
    <LegalShell title="Support" meta="Questions, bugs and account help.">
      <p>
        Every message is read by the person who built the app. Send an email and you will get an
        answer, usually the same day and at worst the next one.
      </p>

      <a
        href={`mailto:${site.contact}?subject=SportsCardPulse support`}
        className="panel mt-8 flex items-center gap-5 p-6 no-underline"
      >
        <EnvelopeSimple size={26} color="var(--c-accent)" aria-hidden />
        <span className="min-w-0">
          <span className="col-label block">Email support</span>
          <span
            className="mono mt-1 block text-[16px] font-medium break-words"
            style={{ color: 'var(--c-accent)' }}
          >
            {site.contact}
          </span>
        </span>
      </a>

      <h2>What people usually write in about</h2>
      <p>
        Each of these opens a message with the subject already filled in, which saves a round trip
        working out what you meant.
      </p>

      <ul className="mt-6 ml-0 list-none gap-0" style={{ borderTop: 'var(--web-hairline)' }}>
        {TOPICS.map(({ Glyph, title, desc }) => (
          <li key={title} style={{ borderBottom: 'var(--web-hairline)' }}>
            <a
              href={`mailto:${site.contact}?subject=SportsCardPulse: ${title}`}
              className="row-hover flex items-center gap-4 py-4 no-underline"
              style={{ color: 'var(--c-text)' }}
            >
              <Glyph size={20} color="var(--c-text-secondary)" aria-hidden style={{ flexShrink: 0 }} />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium">{title}</span>
                <span
                  className="mt-0.5 block text-[14px]"
                  style={{ color: 'var(--c-text-secondary)' }}
                >
                  {desc}
                </span>
              </span>
              <CaretRight
                size={16}
                color="var(--c-text-secondary)"
                aria-hidden
                style={{ flexShrink: 0 }}
              />
            </a>
          </li>
        ))}
      </ul>

      <h2>Deleting your account</h2>
      <p>
        You can do it yourself from inside the app, and there is a written procedure on the{' '}
        <Link href="/delete-account">delete account page</Link> if you would rather it were done for you.
      </p>
    </LegalShell>
  );
}
