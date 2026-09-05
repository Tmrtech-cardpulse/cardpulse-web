import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import JsonLd from '@/components/JsonLd';
import { pageMeta, softwareApplicationLd } from '@/lib/seo';
import { site } from '@/lib/site';

import './globals.css';

/* Archivo is an industrial grotesque that holds up at display sizes and stays
   legible at 13px, which this site needs because it sets a lot of small data.
   Plex Mono carries every figure: it has true tabular numerals, so prices line
   up in columns without hand-tuning. */
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMeta({
    title: site.name,
    description: site.description,
    path: '/',
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        {/* Every page opens with a fixed header carrying five links. Without
            this a keyboard reader tabs through the whole nav on each one. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={softwareApplicationLd()} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
