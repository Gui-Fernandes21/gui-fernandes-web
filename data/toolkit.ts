import type { ToolkitGroup } from '~/types/portfolio';

export const toolkit: ToolkitGroup[] = [
  {
    title: 'Applied AI',
    items: [{ label: 'RAG' }, { label: 'Agent workflows & orchestration' }, { label: 'Prompt engineering' }, { label: 'Model evaluation · PromptFoo' }, { label: 'Guardrails · observability' }]
  },
  {
    title: 'ML & data',
    items: [{ label: 'Machine learning' }, { label: 'Deep RL (PPO)' }, { label: 'NLP · OCR' }, { label: 'LangChain · Hugging Face' }, { label: 'Qdrant · Neo4j' }]
  },
  {
    title: 'Languages & APIs',
    items: [{ label: 'Python · SQL' }, { label: 'TypeScript · JavaScript' }, { label: 'FastAPI · Node.js' }, { label: 'RESTful APIs · PostgreSQL' }, { label: 'Vue.js / Nuxt · React' }]
  },
  {
    title: 'Cloud & DevOps',
    items: [{ label: 'GCP · serverless' }, { label: 'Docker · Linux' }, { label: 'GitHub Actions · CI/CD' }, { label: 'Azure DevOps' }, { label: 'Git' }]
  },
  {
    title: 'Practices',
    items: [{ label: 'Agile / Scrum' }, { label: 'Unit & contract tests' }, { label: 'Jest · Vitest' }, { label: 'Secure coding' }, { label: 'Responsible AI' }]
  },
  {
    title: 'Education',
    items: [
      { label: 'BSc Computer Science', sub: 'University of London · AI & ML · 2026' },
      { label: 'Stanford CS231n', sub: 'Self-study · deep learning for computer vision' },
      { label: 'Web Dev Bootcamp', sub: 'IMD, Brazil · 2020' }
    ]
  }
];
