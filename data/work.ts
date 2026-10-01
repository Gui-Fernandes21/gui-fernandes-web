import type { WorkItem } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const workItems: WorkItem[] = [
  {
    title: 'ETF Allocation DSS',
    badge: 'AI · Final project',
    year: tbd('2026'),
    description: 'A decision support system for investors that recommends and explains ETF allocations.',
    stack: 'Python · ML',
    kind: 'University',
    href: '#featured',
    preview: { type: 'terminal', title: 'ETF allocation · risk 5/10', lines: ['US equity      ████████', 'Intl equity    █████', 'Bonds          ███████', 'Real estate    ██', 'Cash           █'] }
  },
  {
    title: 'Evolved Creatures',
    badge: 'AI',
    year: tbd('2026'),
    description: 'Genetic encoding for procedurally generated creatures, evolved and simulated in a physics engine.',
    stack: 'Python · PyBullet',
    kind: 'University',
    preview: { type: 'terminal', title: 'genetic algorithm', lines: ['gen 000  best 0.21', 'gen 025  best 0.48', 'gen 050  best 0.71', '✓ creature.urdf generated', '✓ pybullet.simulate()'] }
  },
  {
    title: 'Agent Platform',
    badge: 'AI',
    year: tbd('2025—26'),
    description: 'A self-hosted multi-agent system with long-term memory, vector & graph retrieval, and evals.',
    stack: 'Python · GCP',
    kind: 'Personal R&D',
    preview: { type: 'terminal', title: '$ agent run --task "triage PR"', lines: ['✓ memory.recall', '✓ qdrant.search', '✓ neo4j.expand', '✓ evals.promptfoo'] }
  },
  {
    title: 'Menutz',
    year: tbd('2024'),
    description: 'Digital menus for restaurants: an SEO-first Nuxt site and a Flutter app for diners.',
    stack: 'Nuxt · Flutter',
    kind: 'Product',
    preview: { type: 'image', src: '/images/menutz-landing.png' }
  },
  {
    title: 'Habit Tracker',
    year: tbd('2024'),
    description: 'Full-stack Agile team project with auth, reminders and progress analytics.',
    stack: 'Nuxt · Express · Mongo',
    kind: 'University',
    preview: { type: 'image', src: '/images/dashboard-htk.png' }
  },
  {
    title: 'Icon BJJ',
    year: tbd('2023'),
    description: 'A fast, SEO-optimised site for a Brussels jiu-jitsu academy.',
    stack: 'Vue · Firebase',
    kind: 'Client',
    preview: { type: 'image', src: '/images/iconbjj-2.png' }
  }
];
