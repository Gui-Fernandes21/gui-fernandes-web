/**
 * Illustrative allocation for the demo widget only.
 * The ETF universe matches the final project, but the weights are a simple
 * blend between two hand-picked portfolios — NOT the trained PPO agents' output.
 */

/** Radius of the allocation donut, shared by the chart and the dash maths. */
export const DONUT_RADIUS = 66;

/** The seven ETFs the final project allocates across. */
export const etfs = [
  { ticker: 'SPY', name: 'US large cap', color: 'var(--c1)' },
  { ticker: 'QQQ', name: 'Nasdaq-100', color: 'var(--c2)' },
  { ticker: 'IWM', name: 'US small cap', color: 'var(--c6)' },
  { ticker: 'EFA', name: 'Developed ex-US', color: 'var(--c3)' },
  { ticker: 'EEM', name: 'Emerging markets', color: 'var(--c7)' },
  { ticker: 'GLD', name: 'Gold', color: 'var(--c4)' },
  { ticker: 'TLT', name: 'Long Treasuries', color: 'var(--c5)' }
];

// Percent weights at the two ends of the slider, in the same order as `etfs`
const CAUTIOUS = [15, 5, 2, 8, 2, 13, 55];
const GROWTH = [32, 28, 12, 12, 10, 4, 2];

/** Percent weights (sum = 100) for a risk tolerance from 1 to 10. */
export const allocationFor = (risk: number): number[] => {
  const t = (risk - 1) / 9;
  const percents = CAUTIOUS.map((low, i) => Math.round(low + (GROWTH[i] - low) * t));

  // Rounding can leave the total at 99 or 101; settle the difference on SPY
  percents[0] += 100 - percents.reduce((a, b) => a + b, 0);
  return percents;
};

export const riskProfile = (risk: number) => {
  if (risk <= 3) return { name: 'Cautious', reason: 'TLT and gold carry most of the weight to cushion drawdowns, and equity exposure stays small.' };
  if (risk <= 7) return { name: 'Balanced', reason: 'SPY and QQQ form the core, TLT and gold dampen swings, and EFA adds international exposure.' };
  return { name: 'Growth', reason: 'Equity-heavy. SPY and QQQ lead, with small caps (IWM) and emerging markets (EEM) for extra growth.' };
};
