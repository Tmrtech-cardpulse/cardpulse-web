import { summarise } from '@/lib/exampleCard';

import Reveal from './Reveal';

/**
 * The score is a real number the app computes per card. Its inputs are stated
 * plainly rather than drawn as a filled meter, because a meter would imply a
 * precision the formula does not claim.
 */
const INPUTS = [
  {
    k: 'How many recent sales',
    v: 'A card with twenty sold comps in a month is a market. A card with two is an anecdote, and it scores lower for it.',
  },
  {
    k: 'Which way the price is going',
    v: 'The direction and steepness of the recent comps, not a single headline sale.',
  },
  {
    k: 'How close it is to your target',
    v: 'A card sitting just under the price you would sell at is more interesting than one nowhere near it, so it scores higher for you.',
  },
];

export default function PulseScore() {
  const s = summarise();

  return (
    <section id="pulse-score" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
        <div>
          <h2 className="display" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
            One number for
            <br />
            how hot a card is.
          </h2>
          <div className="panel mt-8 flex items-baseline gap-4 p-6">
            <span
              className="figure font-semibold leading-none"
              style={{ fontSize: 64, color: 'var(--c-accent)' }}
              data-money
            >
              {s.pulseScore}
            </span>
            <span className="text-[14px]" style={{ color: 'var(--c-text-secondary)' }}>
              Pulse Score
              <br />
              out of 100
            </span>
          </div>
        </div>

        <dl className="grid content-start">
          {INPUTS.map((row, i) => (
            <Reveal key={row.k} delay={i * 0.06}>
              <div
                className="grid gap-2 py-6 md:grid-cols-[260px_1fr] md:gap-8"
                style={{ borderBottom: 'var(--web-hairline)' }}
              >
                <dt className="text-[16px] font-semibold">{row.k}</dt>
                <dd
                  className="max-w-[58ch] leading-relaxed"
                  style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
                >
                  {row.v}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
