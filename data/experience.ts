import type { ExperienceItem } from '~/types/portfolio';

export const experience: ExperienceItem[] = [
  {
    from: '2024',
    to: 'now',
    company: 'Independent',
    role: 'Software Engineer · Contract',
    badge: 'AI systems',
    highlights: ['Built and run a multi-agent AI platform on GCP: agent orchestration via a gateway, RAG over Qdrant and Neo4j, FastAPI memory API, Docker CI/CD.', 'Added tool integrations for GitHub, Telegram, Notion, OpenRouter and OpenAI so agents automate tasks from request to pull request.', 'Added guardrails (human approval gates, allowlisted access) and PromptFoo eval suites to regression-test prompts and agent skills; cut model costs with tiered OpenRouter routing.']
  },
  {
    from: '2022',
    to: '2024',
    company: 'CXP Brasil Consulting',
    role: 'Front-End Developer · Unimed',
    badge: 'Health insurance',
    highlights: ['Built Vue.js interfaces for Unimed, Brazil\'s largest medical cooperative (24M+ members), raising patient portal engagement by 25%.', 'Created a reusable component library with Vue.js and React, cutting development time for new features by 30%.', 'Worked with product, design and client stakeholders in Scrum sprints.']
  },
  // {
  //   from: '2020',
  //   to: '2022',
  //   company: 'SparkSignals',
  //   role: 'Web Developer · Brussels',
  //   badge: 'Agency',
  //   highlights: ['Owned web apps from concept to deploy.', 'Vue front ends and Node/Express APIs with MySQL & MongoDB.']
  // }
];
