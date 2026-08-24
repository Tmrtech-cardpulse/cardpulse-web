import Image from 'next/image';

/**
 * Full-bleed photograph, used once on the home page.
 *
 * It carries no text and needs none. The page argues about data for two long
 * sections before this point, and the thing being argued about is a physical
 * object: this is where the object appears. It is also the only section that is
 * not a grid of words, which is what makes the page scan as more than a
 * document.
 *
 * Cropped wide rather than shown at its native 3:2, because a full-height 3:2
 * image here would read as a hero and compete with the actual one.
 */
export default function PhotoBand() {
  return (
    <section aria-hidden="false" className="relative">
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:h-[420px]">
        <Image
          src="/photo/cards-fanned.jpg"
          alt="A fan of trading cards on a dark slate surface, one catching a cool blue refractor shimmer along its face."
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* The generated frames fall to near-black at the edges, but not to the
            exact page colour. These two stops land them on it so the band has
            no visible seam against the sections above and below. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--c-bg) 0%, transparent 22%, transparent 78%, var(--c-bg) 100%)',
          }}
        />
      </div>
    </section>
  );
}
