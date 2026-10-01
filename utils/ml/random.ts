export type Rng = () => number;

/** Small seeded PRNG (mulberry32) so demos are reproducible. */
export const createRng = (seed: number): Rng => {
  let state = seed | 0;

  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

/** Standard normal sample (Box–Muller). */
export const gaussian = (rng: Rng): number => {
  let u = 0;
  let v = 0;
  while (!u) u = rng();
  while (!v) v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

export const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));
