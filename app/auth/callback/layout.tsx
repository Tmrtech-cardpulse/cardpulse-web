import type { Metadata } from 'next';

/**
 * The callback page has to be a Client Component, so it cannot export metadata
 * of its own and was inheriting the home page's title. A reader who lands here
 * from a password reset email saw a tab called "Know what your cards are
 * actually worth", which is the wrong answer to what this page is.
 *
 * `noindex` as well as the robots.txt rule: the URL carries a token in its
 * fragment and there is nothing here worth a search result.
 */
export const metadata: Metadata = {
  title: 'Opening the app - SportsCardPulse',
  description: 'Continue to SportsCardPulse on your phone.',
  robots: { index: false, follow: false },
};

export default function AuthCallbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
