import type { Stat } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const profile = {
  firstName: 'Gui',
  lastName: 'Fernandes',
  role: 'AI & software engineer · Machine Learning',
  location: 'Orlando, FL, working remotely with teams anywhere',
  availability: 'Open to remote roles',
  portrait: '/images/profilesocial-me.jpg',
  email: 'guifernandespro@gmail.com',
  cvPath: '/Guilherme_Fernandes_CV.pdf',
  degree: 'a BSc in Computer Science',
  specialism: 'specialising in AI & Machine Learning',
  pitch: 'I build applied AI end to end: RAG, agent workflows, prompt engineering, model evaluation and guardrails, shipped to the cloud with CI/CD, plus the APIs and interfaces people actually use.'
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guilherme-fernandes-pro/' },
  { label: 'GitHub', href: 'https://github.com/Gui-Fernandes21' }
];

export const stats: Stat[] = [
  { value: '4+', count: 4, suffix: '+', label: 'years building production software' },
  { value: 'BSc', label: 'Computer Science: AI & ML specialism' },
  { value: '3', count: 3, label: 'countries worked with: BR · BE · US' },
  { value: 'EN/PT/FR', label: 'working languages' }
];

export const tickerItems = [
  'RAG',
  'Agent Workflows',
  'Prompt Engineering',
  'Model Evaluation',
  'Guardrails',
  'Machine Learning',
  'Deep RL (PPO)',
  'NLP',
  'Python',
  'FastAPI',
  'TypeScript',
  'Vue & Nuxt',
  'LangChain',
  'Hugging Face',
  'GCP',
  'Docker',
  'CI/CD'
];

export const navLinks = [
  { label: 'AI & ML', id: 'ai' },
  { label: 'Featured', id: 'featured' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];
