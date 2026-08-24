import type { Guide } from '@/content/types';

import howToPrice from './how-to-price-a-sports-card';
import howToSpotAReprint from './how-to-spot-a-reprint';
import rookieCards from './rookie-cards-explained';
import soldVersusAsking from './sold-prices-versus-asking-prices';
import whatGradingDoes from './what-grading-does-to-the-price';

/** Pillar first, then supporting guides newest first. */
export const guides: Guide[] = [
  howToPrice,
  soldVersusAsking,
  whatGradingDoes,
  rookieCards,
  howToSpotAReprint,
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

export const pillar = guides.find((g) => g.pillar);
