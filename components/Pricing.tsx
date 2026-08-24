import { Check } from '@phosphor-icons/react/ssr';
import Link from 'next/link';

import { pricing } from '@/lib/site';

const FREE = [
  `Up to ${pricing.freeCardLimit} cards in your collection`,
  'eBay active listing prices',
  'Discover: news, releases and events',
  'New release notifications',
  'Manual card entry',
];

const PREMIUM = [
  'Unlimited cards',
  'Unlimited AI card scanning',
  'Sold prices from eBay UK',
  'Portfolio profit and loss',
  'Target price alerts',
  'Portfolio value alerts',
  'Pulse Score on every card',
];

function Plan({
  name,
  price,
  cadence,
  note,
  features,
  featured,
}: {
  name: string;
  price: string;
  cadence: string;
  note: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className="panel flex flex-col p-7"
      style={featured ? { borderColor: 'var(--c-accent)' } : undefined}
    >
      <h3 className="text-[15px] font-semibold">{name}</h3>
      <p className="mt-4 flex items-baseline gap-1.5">
        <span className="figure text-[38px] font-semibold leading-none" data-money>
          {price}
        </span>
        <span className="text-[14px]" style={{ color: 'var(--c-text-secondary)' }}>
          {cadence}
        </span>
      </p>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
        {note}
      </p>

      <ul className="mt-7 grid gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              size={16}
              weight="bold"
              color={featured ? 'var(--c-accent)' : 'var(--c-text-secondary)'}
              style={{ marginTop: 2, flexShrink: 0 }}
            />
            <span className="text-[14px]" style={{ color: 'var(--c-text-secondary)' }}>
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="eyebrow">Pricing</p>
        <h2 className="display mt-3 max-w-[16ch]" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
          Free to start. Paid when it earns it.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:max-w-[820px]">
          <Plan
            name="Free"
            price="£0"
            cadence="forever"
            note="No card details, no trial timer."
            features={FREE}
          />
          <Plan
            name="Premium"
            price={pricing.monthly}
            cadence="per month"
            note={`Or ${pricing.yearly} a year. Prices include VAT.`}
            features={PREMIUM}
            featured
          />
        </div>

        <p className="mt-6 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
          Billed through the App Store or Google Play. Cancel any time in your store account.
        </p>

        <Link
          href="/#waitlist"
          className="mt-8 inline-block rounded-[var(--r-md)] px-6 py-3 text-[15px] font-semibold transition-transform active:scale-[0.98]"
          style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-accent-ink)' }}
        >
          Join the waitlist
        </Link>
      </div>
    </section>
  );
}
