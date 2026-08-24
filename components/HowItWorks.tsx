import Reveal from './Reveal';

/**
 * Offset rows rather than three equal cards. The indent carries the sequence,
 * so the steps do not need numbering.
 */
const STEPS = [
  {
    verb: 'Scan it',
    body: 'Point the camera at the card. The app reads the player, the set, the year and the variant, so you are not typing any of it.',
  },
  {
    verb: 'Price it',
    body: 'It finds what that exact card has sold for on eBay UK and takes the median of the most recent sales. Asking prices are not the same thing and are kept separate.',
  },
  {
    verb: 'Watch it',
    body: 'Set a price you would sell at. You get a notification when the market reaches it, and your collection value updates as the comps move.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="band px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="eyebrow">How it works</p>
        <h2
          className="display mt-3 max-w-[16ch]"
          style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}
        >
          Nothing to type. Nothing to look up.
        </h2>

        <div className="mt-12 grid gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.verb} delay={i * 0.06}>
              <div
                className="panel grid gap-3 p-6 md:grid-cols-[200px_1fr] md:gap-8 md:p-7"
              >
                <h3 className="text-[20px] font-semibold tracking-tight">{step.verb}</h3>
                <p
                  className="max-w-[62ch] leading-relaxed"
                  style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
