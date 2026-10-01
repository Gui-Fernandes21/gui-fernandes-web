import { createRng } from './random';

export type Cell = [number, number];

export interface GridWorld {
  size: number;
  walls: boolean[][];
  start: Cell;
  goal: Cell;
}

const ACTIONS: Cell[] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
const STEP_REWARD = -0.04;
const GOAL_REWARD = 1;
const GAMMA = 0.92;

const isGoal = (world: GridWorld, x: number, y: number) => x === world.goal[0] && y === world.goal[1];
const isOpen = (world: GridWorld, x: number, y: number) => x >= 0 && y >= 0 && x < world.size && y < world.size && !world.walls[x][y];

export const emptyValues = (size: number): number[][] => Array.from({ length: size }, () => Array(size).fill(0));

/** Breadth-first search: can the start reach the goal? */
const isSolvable = (world: GridWorld): boolean => {
  const seen = new Set([world.start.join()]);
  const queue: Cell[] = [world.start];

  while (queue.length) {
    const [x, y] = queue.shift()!;
    if (isGoal(world, x, y)) return true;
    for (const [dx, dy] of ACTIONS) {
      const next: Cell = [x + dx, y + dy];
      if (isOpen(world, ...next) && !seen.has(next.join())) {
        seen.add(next.join());
        queue.push(next);
      }
    }
  }
  return false;
};

/** Random 7x7 world with a guaranteed path from start to goal. */
export const createWorld = (seed: number, size = 7, wallCount = 9): GridWorld => {
  const rng = createRng(seed);

  for (;;) {
    const world: GridWorld = { size, walls: emptyValues(size).map((row) => row.map(() => false)), start: [0, size - 1], goal: [size - 1, 0] };
    let placed = 0;
    while (placed < wallCount) {
      const x = Math.floor(rng() * size);
      const y = Math.floor(rng() * size);
      const reserved = (x === world.start[0] && y === world.start[1]) || isGoal(world, x, y);
      if (!reserved && !world.walls[x][y]) {
        world.walls[x][y] = true;
        placed++;
      }
    }
    if (isSolvable(world)) return world;
  }
};

/** One synchronous Bellman sweep. Returns the new values and the largest change. */
export const bellmanSweep = (world: GridWorld, values: number[][]): { values: number[][]; delta: number } => {
  const next = values.map((row) => row.slice());
  let delta = 0;

  for (let x = 0; x < world.size; x++) {
    for (let y = 0; y < world.size; y++) {
      if (!isOpen(world, x, y) || isGoal(world, x, y)) continue;

      let best = -Infinity;
      for (const [dx, dy] of ACTIONS) {
        const [nx, ny] = isOpen(world, x + dx, y + dy) ? [x + dx, y + dy] : [x, y];
        const value = isGoal(world, nx, ny) ? GOAL_REWARD : STEP_REWARD + GAMMA * values[nx][ny];
        best = Math.max(best, value);
      }

      delta = Math.max(delta, Math.abs(best - values[x][y]));
      next[x][y] = best;
    }
  }

  return { values: next, delta };
};

/** Follows the greedy policy from start to goal. */
export const greedyPath = (world: GridWorld, values: number[][]): Cell[] => {
  const path: Cell[] = [world.start];
  let [x, y] = world.start;

  for (let i = 0; i < world.size * world.size && !isGoal(world, x, y); i++) {
    const options = ACTIONS.map(([dx, dy]) => [x + dx, y + dy] as Cell).filter((c) => isOpen(world, ...c));
    const score = (c: Cell) => (isGoal(world, ...c) ? Infinity : values[c[0]][c[1]]);
    [x, y] = options.reduce((best, c) => (score(c) > score(best) ? c : best));
    path.push([x, y]);
  }

  return path;
};
