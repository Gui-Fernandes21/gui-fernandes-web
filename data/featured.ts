import type { FeaturedProject } from '~/types/portfolio';
import { tbd } from '~/utils/tbd';

export const featuredProject: FeaturedProject = {
  eyebrow: 'BSc final project · University of London · AI & ML',
  title: 'A decision support system for',
  highlight: 'ETF allocation.',
  summary: "It turns an investor's goals and risk profile into a recommended ETF allocation, and explains the recommendation.",
  approach: `
    To do this, I trained 80 reinforcement learning agents with four different rewards and tested them year by year from 2021 to 2024. 
    Rewards that penalise risk beat a plain return reward, mainly because they trade less. In the web app, the user picks the reward that matches their attitude to risk and gets the agent's allocation. 
    It is capped by fixed risk rules and comes with a full explanation of each agent's reasoning and recent news context.
  `,
  meta: [
    { label: 'Role', value: 'Sole designer & engineer' },
    { label: 'Year', value: '2026' },
    { label: 'Stack', value: 'Python · FinRL · PyTorch · FastAPI · Nuxt · Pydantic · Stable-Baselines3 (PPO)' },
    { label: 'Method', value: 'Reinforcement Learning (PPO)' }
  ],
  kpis: [
    { label: 'ETFs', value: '7' },
    { label: 'years of price data', value: '8yrs' },
    { label: 'annualised return', value: '6.4%' },
    { label: 'final mark', value: '82%' }
  ],
  pipeline: [
    { title: 'Investor profile', description: 'Goals, horizon and risk tolerance become constraints.' },
    { title: 'Market data', description: 'ETF prices and metadata.', note: 'From Yahoo Finance' },
    { title: 'Model', description: 'Generates candidate allocations.', note: 'Proximal Policy Gradient (PPO) with 4 risk-adjusted reward functions' },
    { title: 'Explain & decide', description: 'Trade-offs shown in plain language. The user makes the final call.' }
  ],
  links: [
    { label: 'Read the case study →', href: tbd('case study link'), primary: true },
    { label: 'Report (PDF)', href: tbd('report link') },
    { label: 'GitHub', href: 'https://github.com/Gui-Fernandes21/portfolio_allocator' }
  ]
};
