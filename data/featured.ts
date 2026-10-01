import type { FeaturedProject } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const featuredProject: FeaturedProject = {
  eyebrow: 'BSc final project · University of London · AI & ML',
  title: 'A decision support system for',
  highlight: 'ETF allocation.',
  summary: "It turns an investor's goals and risk profile into a recommended ETF allocation, and explains the recommendation.",
  approach: tbd('1-2 lines: the problem and your approach'),
  meta: [
    { label: 'Role', value: 'Sole designer & engineer' },
    { label: 'Year', value: '2026' },
    { label: 'Stack', value: tbd('Python · …') },
    { label: 'Method', value: tbd('ML / optimisation') }
  ],
  kpis: [
    { label: 'ETFs', value: '7' },
    { label: 'price data', value: tbd('##y') },
    { label: 'headline metric', value: tbd('x.xx') },
    { label: 'final mark', value: tbd('Grade') }
  ],
  pipeline: [
    { title: 'Investor profile', description: 'Goals, horizon and risk tolerance become constraints.' },
    { title: 'Market data', description: 'ETF prices and metadata.', note: tbd('source') },
    { title: 'Model', description: 'Generates candidate allocations.', note: tbd('method') },
    { title: 'Explain & decide', description: 'Trade-offs shown in plain language. The user makes the final call.' }
  ],
  links: [
    { label: 'Read the case study →', href: tbd('case study link'), primary: true },
    { label: 'Report (PDF)', href: tbd('report link') },
    { label: 'GitHub', href: tbd('repo link') }
  ]
};
