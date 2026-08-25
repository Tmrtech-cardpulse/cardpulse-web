/** Site-wide constants. Anything that appears in more than one place lives here. */

export const site = {
  name: 'SportsCardPulse',
  /** Canonical origin. Kept with the www, which is what the existing pages use. */
  url: 'https://www.sportscardpulse.app',
  tagline: 'Know what your cards are actually worth.',
  description:
    'Scan a sports card, see what it has really been selling for on eBay UK, and track your collection value over time. Built for UK collectors.',
  contact: 'tom@tmrtech.co.uk',
  /**
   * Where waitlist signups are directed.
   *
   * Deliberately not `contact`. That address is named in the privacy policy as
   * the UK GDPR data controller and in the terms, so it is legal copy and does
   * not move. This one is just an inbox.
   */
  waitlistContact: 'founders@dupi.co.uk',
  operator: 'TMR Tech',
  locale: 'en_GB',
} as const;

/** Pricing, stated once. The free card limit is enforced by a database trigger
 *  in the app repo (`enforce_free_card_limit`), so this number is not decorative. */
export const pricing = {
  freeCardLimit: 50,
  monthly: '£8.49',
  yearly: '£89.99',
} as const;

export const nav = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/guides', label: 'Guides' },
  { href: '/blog', label: 'Blog' },
] as const;

export const footerNav = [
  {
    heading: 'Product',
    links: [
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#pulse-score', label: 'Pulse Score' },
      { href: '/#pricing', label: 'Pricing' },
    ],
  },
  {
    heading: 'Reading',
    links: [
      { href: '/guides', label: 'Guides' },
      { href: '/blog', label: 'Blog' },
      { href: '/glossary', label: 'Glossary' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
      { href: '/support', label: 'Support' },
      { href: '/delete-account', label: 'Delete account' },
    ],
  },
] as const;
