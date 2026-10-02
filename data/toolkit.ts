import type { ToolkitGroup } from '~/types/portfolio';

export const toolkit: ToolkitGroup[] = [
  {
    title: 'AI & data',
    items: [{ label: 'Python' }, { label: 'Machine learning' }, { label: 'Reinforcement learning' }, { label: 'LLM agents · RAG' }, { label: 'PyBullet' }]
  },
  {
    title: 'Services',
    items: [{ label: 'FastAPI' }, { label: 'Node / Express' }, { label: 'PostgreSQL' }, { label: 'Docker · GCP' }]
  },
  {
    title: 'Interface',
    items: [{ label: 'Vue 3 / Nuxt' }, { label: 'TypeScript' }, { label: 'React' }, { label: 'Figma' }]
  },
  {
    title: 'Education',
    items: [
      { label: 'BSc Computer Science', sub: 'University of London · AI & ML · 2026' },
      { label: 'Web Dev Bootcamp', sub: 'IMD, Brazil · 2020' }
    ]
  }
];
