import type { ExperienceItem } from '~/types/portfolio';

export const experience: ExperienceItem[] = [
  {
    from: '2024',
    to: 'now',
    company: 'Independent',
    role: 'Software Engineer · Contract',
    badge: 'AI systems',
    highlights: ['Designed a multi-agent platform on GCP with a gateway, memory API, Qdrant, Neo4j, Postgres and Redis.', 'Built PromptFoo eval suites to regression-test agent skills.', 'Web & ops work for small-business clients.']
  },
  {
    from: '2022',
    to: '2024',
    company: 'CXP Brasil Consulting',
    role: 'Front-End Developer · Unimed',
    badge: 'Health insurance',
    highlights: ["Vue.js interfaces for Unimed, Brazil's largest medical cooperative.", 'Performance optimisation across the app.', 'Worked directly with client stakeholders.']
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
