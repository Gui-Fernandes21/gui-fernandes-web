/**
 * Illustrative allocation for the demo widget only.
 * This is NOT the final project's model — replace with the real logic if you want.
 */

/** Radius of the allocation donut, shared by the chart and the dash maths. */
export const DONUT_RADIUS = 66;

export const assetClasses = [
  { label: 'US equity', color: 'var(--c1)' },
  { label: 'Intl equity', color: 'var(--c2)' },
  { label: 'Bonds', color: 'var(--c3)' },
  { label: 'Real estate', color: 'var(--c4)' },
  { label: 'Cash', color: 'var(--c5)' }
];

/** Percent weights (sum = 100) for a risk tolerance from 1 to 10. */
export const allocationFor = (risk: number): number[] => {
  const t = (risk - 1) / 9;
  const equity = 0.2 + 0.65 * t;
  const weights = [equity * 0.65, equity * 0.35, (1 - equity) * 0.75, 0.05 + 0.03 * t];
  weights.push(Math.max(0, 1 - weights.reduce((a, b) => a + b, 0)));

  const percents = weights.map((w) => Math.round(w * 100));
  percents[0] += 100 - percents.reduce((a, b) => a + b, 0);
  return percents;
};

export const riskProfile = (risk: number) => {
  if (risk <= 3) return { name: 'Cautious', reason: 'Capital preservation first. Bonds and cash dominate to limit drawdowns.' };
  if (risk <= 7) return { name: 'Balanced', reason: 'A balanced mix. Equities drive growth while bonds dampen drawdowns.' };
  return { name: 'Growth', reason: 'Long horizon, growth first. Equity-heavy, and you accept higher volatility.' };
};
