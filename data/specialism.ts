import type { SpecialismArea } from '~/types/portfolio';

export const specialismIntro = 'My BSc specialism, and the thread running through my recent work. I like the whole pipeline: framing the problem, getting the data right, choosing the method, and shipping something people can use and trust.';

export const specialismAreas: SpecialismArea[] = [
  {
    icon: 'chart',
    title: 'Machine learning & data',
    description: 'Supervised learning, model evaluation and data analysis in Python.',
    tags: ['Python', 'ML', 'Data analysis']
  },
  {
    icon: 'agent',
    title: 'Reinforcement learning',
    description: 'Q-learning, TD methods, DQN and policy-gradient methods like Proximal Policy Optimization (PPO).',
    tags: ['Q-learning', 'DQN', 'PPO']
  },
  {
    icon: 'dna',
    title: 'Evolutionary computation',
    description: 'Genetic encodings and selection, including evolving simulated creatures in a physics engine.',
    tags: ['Genetic algorithms', 'PyBullet']
  },
  {
    icon: 'network',
    title: 'Applied AI systems',
    description: 'LLM agents with memory and retrieval, evaluation suites, and decision support tools.',
    tags: ['LLM agents', 'RAG', 'Evals']
  }
];
