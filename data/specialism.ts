import type { SpecialismArea } from '~/types/portfolio';

export const specialismIntro =
  "My BSc specialism, and the thread running through my recent work. I like the whole pipeline: framing the problem, getting the data right, choosing the method, and shipping something people can use and trust. Since finishing my degree I've been self-studying Stanford CS231n (deep learning for computer vision).";

export const specialismAreas: SpecialismArea[] = [
  {
    icon: 'chart',
    title: 'Machine learning & data',
    description: 'Supervised learning, model evaluation and data analysis in Python, plus university projects in NLP and OCR.',
    tags: ['Python', 'ML', 'NLP', 'OCR']
  },
  {
    icon: 'agent',
    title: 'Reinforcement learning',
    description: 'Q-learning, TD methods, DQN and policy-gradient methods like Proximal Policy Optimization (PPO), which powers my final project.',
    tags: ['Q-learning', 'DQN', 'PPO', 'Deep RL']
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
    description: 'RAG, agent-based workflows and orchestration, tool integration, prompt engineering, model evaluation and guardrails.',
    tags: ['RAG', 'LLM agents', 'Evals', 'Guardrails']
  }
];
