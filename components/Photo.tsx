import Image from 'next/image';

/**
 * Site photography.
 *
 * Every image is generated dark and edge-to-black on purpose, so it sits on the
 * near-black ground without a boundary. See IMAGE-BRIEF.md. The alt text is a
 * real description because the pictures carry no words of their own: nothing on
 * the page depends on seeing them, and a screen reader gets the object, not a
 * filename.
 */
export default function Photo({
  src,
  alt,
  priority = false,
  className,
  /** Off for a photo that meets a panel edge, where the panel does the clipping. */
  rounded = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1536}
      height={1024}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 760px"
      className={className}
      // Radius is a prop rather than a class because it is set inline here, and
      // an inline style outranks any utility class a caller passes in.
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: rounded ? 'var(--r-lg)' : undefined,
      }}
    />
  );
}
