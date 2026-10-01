import { clamp, createRng, gaussian } from './random';

export interface LabelledPoint {
  x: number;
  y: number;
  label: 0 | 1;
}

/** [bias, weightX, weightY] — inputs are centred around 0.5 */
export type Weights = [number, number, number];

export interface TrainResult {
  weights: Weights;
  loss: number;
  accuracy: number;
}

const sigmoid = (z: number) => 1 / (1 + Math.exp(-z));

export const INITIAL_WEIGHTS: Weights = [0, -0.8, 0.8];

/** Two noisy gaussian clusters in the unit square. */
export const makeClusters = (seed: number, size = 70): LabelledPoint[] => {
  const rng = createRng(seed);

  return Array.from({ length: size }, (_, i) => {
    const label = (i % 2) as 0 | 1;
    const centre = label ? [0.66, 0.62] : [0.34, 0.38];
    return {
      x: clamp(centre[0] + gaussian(rng) * 0.13, 0.02, 0.98),
      y: clamp(centre[1] + gaussian(rng) * 0.13, 0.02, 0.98),
      label
    };
  });
};

export const predict = (w: Weights, x: number, y: number): number => sigmoid(w[0] + w[1] * (x - 0.5) + w[2] * (y - 0.5));

/** One full-batch gradient descent step on the log-loss. */
export const trainStep = (points: LabelledPoint[], w: Weights, learningRate = 2.2): TrainResult => {
  const grad = [0, 0, 0];
  let loss = 0;
  let correct = 0;

  for (const p of points) {
    const q = predict(w, p.x, p.y);
    const error = q - p.label;
    grad[0] += error;
    grad[1] += error * (p.x - 0.5);
    grad[2] += error * (p.y - 0.5);
    loss -= p.label * Math.log(q + 1e-9) + (1 - p.label) * Math.log(1 - q + 1e-9);
    if (q > 0.5 === (p.label === 1)) correct++;
  }

  const n = points.length;
  const weights = w.map((wi, k) => wi - (learningRate * grad[k]) / n) as Weights;

  return { weights, loss: loss / n, accuracy: correct / n };
};

/** Decision boundary y at a given x (where the prediction is 0.5). */
export const boundaryY = (w: Weights, x: number): number => 0.5 - (w[0] + w[1] * (x - 0.5)) / w[2];
