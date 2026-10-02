import type { WorkItem } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const workItems: WorkItem[] = [
  {
    title: 'ETF Allocation DSS',
    badge: 'AI · Final project',
    year: '2026',
    description: 'A decision support system for investors that recommends and explains ETF allocations.',
    stack: 'Python · ML',
    kind: 'University',
    href: '#featured',
    preview: { type: 'terminal', title: 'ETF allocation · risk 5/10', lines: ['SPY  ██████    23%', 'QQQ  ████      15%', 'IWM  ██         6%', 'EFA  ███       10%', 'EEM  ██         6%', 'GLD  ██         9%', 'TLT  ████████  31%'] }
  },
  {
    title: 'Evolved Creatures',
    badge: 'AI',
    year: '2026',
    description: 'Genetic encoding for procedurally generated creatures, evolved and simulated in a physics engine.',
    stack: 'Python · PyBullet',
    kind: 'University',
    href: 'https://github.com/Gui-Fernandes21/evolved_creatures',
    preview: { type: 'terminal', title: 'genetic algorithm', lines: ['gen 000  best 0.21', 'gen 025  best 0.48', 'gen 050  best 0.71', '✓ creature.urdf generated', '✓ pybullet.simulate()'] }
  },
  {
    title: 'Agent Platform',
    badge: 'AI',
    year: '2025—26',
    description: 'A self-hosted multi-agent system with long-term memory, vector & graph retrieval, and evals.',
    stack: 'Python · GCP',
    kind: 'Personal R&D',
    href: 'https://github.com/Gui-Fernandes21/agent-platform-public',
    preview: { type: 'terminal', title: '$ agent run --task "triage PR"', lines: ['✓ memory.recall', '✓ qdrant.search', '✓ neo4j.expand', '✓ evals.promptfoo'] }
  },
  {
    title: 'Menutz',
    year: '2024-25',
    description: 'Digital menus for restaurants: an SEO-first Nuxt site and a Flutter app for diners.',
    stack: 'Nuxt · Flutter',
    kind: 'Product',
    href: 'https://menutz.com',
    preview: { type: 'image', src: '/images/menutz-landing.png' }
  },
  {
    title: 'Habit Tracker',
    year: '2024',
    description: 'Full-stack Agile team project with auth, reminders and progress analytics.',
    stack: 'Nuxt · Express · Mongo',
    kind: 'University',
    href: 'https://github.com/Gui-Fernandes21/back-habit-tracker',
    preview: { type: 'image', src: '/images/dashboard-htk.png' }
  },
  {
    title: 'Icon BJJ',
    year: '2022-23',
    description: 'A fast, SEO-optimised site for a Brussels jiu-jitsu academy.',
    stack: 'Vue · Firebase',
    kind: 'Client',
    href: 'https://iconbjj.be',
    preview: { type: 'image', src: '/images/iconbjj-2.png' }
  }
];
