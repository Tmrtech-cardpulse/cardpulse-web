import PriceTape from './PriceTape';
import Reveal from './Reveal';

export default function SoldNotAsking() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <h2
          className="display max-w-[20ch]"
          style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}
        >
          An asking price is an opinion. A sold price is a fact.
        </h2>
        <p
          className="mt-5 max-w-[62ch] leading-relaxed"
          style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-lg)' }}
        >
          Anyone can list a card for anything. What matters is the row of prices people
          actually paid, in order, with the dates attached.
        </p>

        <Reveal className="mt-10 max-w-[920px]">
          <PriceTape />
        </Reveal>
      </div>
    </section>
  );
}
