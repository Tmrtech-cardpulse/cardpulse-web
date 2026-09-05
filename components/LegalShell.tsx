import Footer from './Footer';
import Header from './Header';

/**
 * Shared chrome for the legal and support pages. The body copy of those pages
 * is unchanged from what was reviewed for the store listings; this only
 * replaces the page furniture around it.
 */
export default function LegalShell({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-[760px] px-5 pt-28 pb-24 sm:px-8">
        <h1 className="display" style={{ fontSize: 'clamp(30px, 4vw, 42px)' }}>
          {title}
        </h1>
        <p className="mono mt-3 text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
          {meta}
        </p>
        <div className="prose-legal mt-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}
