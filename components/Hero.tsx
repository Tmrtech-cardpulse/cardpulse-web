import Link from 'next/link';

import PriceTape from './PriceTape';

/**
 * Asymmetric split. The copy carries the claim, the tape proves it, and the
 * proof is real computed data rather than a picture of an app.
 */
export default function Hero() {
  return (
    <section className="px-5 pt-24 pb-16 sm:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1fr_460px] lg:gap-16">
        <div>
          <h1
            className="display"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            Know what your cards
            <br />
            are <span style={{ color: 'var(--c-accent)' }}>actually</span> worth.
          </h1>

          <p
            className="mt-6 max-w-[46ch] leading-relaxed"
            style={{ fontSize: 'var(--t-body-lg)', color: 'var(--c-text-secondary)' }}
          >
            Scan a card. See what it has really been selling for on eBay UK, not what
            someone is asking.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#waitlist"
              className="rounded-[var(--r-md)] px-6 py-3 text-[15px] font-semibold transition-transform active:scale-[0.98]"
              style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-accent-ink)' }}
            >
              Join the waitlist
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-[var(--r-md)] px-6 py-3 text-[15px] font-medium transition-colors hover:text-[var(--c-text)]"
              style={{
                border: 'var(--web-hairline)',
                color: 'var(--c-text-secondary)',
              }}
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="lg:justify-self-end lg:w-[460px]">
          <PriceTape compact />
        </div>
      </div>
    </section>
  );
}
