import type { ExperienceItem } from '~/types/portfolio';

export const experience: ExperienceItem[] = [
  {
    from: '2024',
    to: 'now',
    company: 'Independent',
    role: 'Software Engineer · Contract',
    badge: 'AI systems',
    highlights: [
      'Designed and run a self-hosted multi-agent AI platform on GCP: 9 LLM agents orchestrated through a gateway, with a FastAPI memory API and RAG over Qdrant and Neo4j, deployed with Docker.',
      'Tool integration with GitHub, Telegram, Notion, OpenRouter and OpenAI, so agents automate tasks from request to pull request.',
      "Guardrails: human approval gates, services bound to localhost and allowlisted access, so agents can't ship critical changes without review.",
      'PromptFoo eval suites to regression-test prompts and agent skills before release, and tiered model routing through OpenRouter to cut costs.',
      'Web & ops work for small-business clients.'
    ]
  },
  {
    from: '2022',
    to: '2024',
    company: 'CXP Brasil Consulting',
    role: 'Front-End Developer · Unimed',
    badge: 'Health insurance',
    highlights: [
      "Built Vue.js interfaces for Unimed, Brazil's largest medical cooperative (24M+ members), raising patient portal engagement by 25%.",
      'Created a reusable component library with Vue.js and React, cutting development time for new features by 30%.',
      'Worked directly with client stakeholders in Agile/Scrum sprints.'
    ]
  },
  {
    from: '2020',
    to: '2022',
    //   company: 'SparkSignals',
    company: 'Apprenticeship',
    role: 'Web Developer · Brussels',
    badge: 'Agency',
    highlights: ['Built Vue.js front ends and Node.js/Express REST APIs with MySQL and MongoDB for 10K+ daily users.', 'Owned web apps from concept to deploy.']
  }
];
