import type { Stat } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const profile = {
  firstName: 'Gui',
  lastName: 'Fernandes',
  role: 'Software engineer · AI & Machine Learning',
  location: 'Orlando, FL, working remotely with teams anywhere',
  availability: 'Open to remote roles',
  portrait: '/images/profilesocial-me.jpg',
  email: 'guifernandespro@gmail.com',
  cvPath: '/v1.0_cv-guifernandes-full-stack.pdf',
  degree: 'a BSc in Computer Science',
  specialism: 'specialising in AI & Machine Learning',
  pitch: 'I take ideas from model to product: data, algorithms, APIs, and the interfaces people actually use.'
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guilherme-fernandes-pro/' },
  { label: 'GitHub', href: 'https://github.com/Gui-Fernandes21' }
];

export const stats: Stat[] = [
  { value: '6+', count: 6, suffix: '+', label: 'years building production software' },
  { value: 'BSc', label: 'Computer Science: AI & ML specialism' },
  { value: '3', count: 3, label: 'countries worked with: BR · BE · US' },
  { value: 'EN/PT/FR', label: 'working languages' }
];

export const tickerItems = ['Machine Learning', 'Python', 'Reinforcement Learning', 'Evolutionary Algorithms', 'Data Analysis', 'LLM Agents', 'FastAPI', 'Vue & Nuxt', 'PostgreSQL', 'GCP'];

export const navLinks = [
  { label: 'AI & ML', id: 'ai' },
  { label: 'Featured', id: 'featured' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];
