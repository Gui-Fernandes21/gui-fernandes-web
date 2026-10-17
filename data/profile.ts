import type { Stat } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const profile = {
  firstName: 'Gui',
  lastName: 'Fernandes',
  role: 'AI Engineer · RAG, agents & model evaluation',
  location: 'Orlando, FL, working remotely with teams anywhere',
  availability: 'Open to remote roles',
  portrait: '/images/profilesocial-me.jpg',
  email: 'guifernandespro@gmail.com',
  cvPath: '/Guilherme_Fernandes_CV.pdf',
  degree: 'a BSc in Computer Science',
  specialism: 'specialising in Machine Learning & AI',
  pitch: 'I build applied AI end to end: RAG, agent-based workflows, prompt engineering, model evaluation and guardrails, deployed to the cloud with CI/CD — plus the APIs and interfaces people actually use.'
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

export const tickerItems = ['Applied AI', 'RAG', 'LLM Agents', 'Prompt Engineering', 'Model Evaluation', 'Guardrails', 'Machine Learning', 'Deep RL (PPO)', 'LangChain', 'Hugging Face', 'Python', 'FastAPI', 'TypeScript', 'Qdrant', 'Neo4j', 'PostgreSQL', 'GCP', 'Docker', 'CI/CD', 'Vue & Nuxt'];

export const navLinks = [
  { label: 'AI & ML', id: 'ai' },
  { label: 'Featured', id: 'featured' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];
