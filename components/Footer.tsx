import Link from 'next/link';

import Wordmark from './Wordmark';
import { footerNav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer style={{ borderTop: 'var(--web-hairline)' }}>
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:gap-20">
        <div>
          <Wordmark />
          <p
            className="mt-4 max-w-[38ch] text-[14px] leading-relaxed"
            style={{ color: 'var(--c-text-secondary)' }}
          >
            Sold prices, portfolio tracking and release news for UK sports card collectors.
          </p>
          <a
            href={`mailto:${site.contact}`}
            className="mono mt-4 inline-block text-[13px] transition-colors hover:text-[var(--c-text)]"
            style={{ color: 'var(--c-text-secondary)' }}
          >
            {site.contact}
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-14">
          {footerNav.map((group) => (
            <div key={group.heading}>
              <p className="col-label">{group.heading}</p>
              <ul className="mt-3 grid gap-2.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] transition-colors hover:text-[var(--c-text)]"
                      style={{ color: 'var(--c-text-secondary)' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mx-auto max-w-[1180px] px-5 py-6 sm:px-8"
        style={{ borderTop: 'var(--web-hairline)' }}
      >
        <p className="text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
          © {new Date().getFullYear()} {site.operator}, United Kingdom. Prices shown anywhere on
          this site are illustrative. Not investment advice.
        </p>
      </div>
    </footer>
  );
}
