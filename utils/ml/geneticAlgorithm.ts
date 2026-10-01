import { createRng, type Rng } from './random';

export type Genome = number[];

export interface GenerationStats {
  best: number;
  mean: number;
  fittest: Genome;
}

export interface Evolution {
  population: Genome[];
  history: GenerationStats[];
  rng: Rng;
}

export const GENOME_LENGTH = 48;
export const POPULATION_SIZE = 40;

/** OneMax: fitness is simply the number of 1 bits. */
const fitness = (genome: Genome) => genome.reduce((sum, bit) => sum + bit, 0);

const measure = (population: Genome[]): GenerationStats => {
  const scores = population.map(fitness);
  const best = Math.max(...scores);
  return { best, mean: scores.reduce((a, b) => a + b, 0) / scores.length, fittest: population[scores.indexOf(best)] };
};

export const createEvolution = (seed: number): Evolution => {
  const rng = createRng(seed);
  const population = Array.from({ length: POPULATION_SIZE }, () => Array.from({ length: GENOME_LENGTH }, () => (rng() < 0.3 ? 1 : 0)));
  return { population, history: [measure(population)], rng };
};

const tournament = (population: Genome[], rng: Rng, size = 3): Genome => {
  let winner = population[Math.floor(rng() * population.length)];
  for (let i = 1; i < size; i++) {
    const rival = population[Math.floor(rng() * population.length)];
    if (fitness(rival) > fitness(winner)) winner = rival;
  }
  return winner;
};

/** Elitism + tournament selection + one-point crossover + bit-flip mutation. */
export const nextGeneration = ({ population, history, rng }: Evolution): Evolution => {
  const offspring: Genome[] = [history[history.length - 1].fittest.slice()];

  while (offspring.length < POPULATION_SIZE) {
    const mother = tournament(population, rng);
    const father = tournament(population, rng);
    const cut = 1 + Math.floor(rng() * (GENOME_LENGTH - 1));
    const child = mother.slice(0, cut).concat(father.slice(cut));
    offspring.push(child.map((bit) => (rng() < 1 / GENOME_LENGTH ? 1 - bit : bit)));
  }

  return { population: offspring, history: [...history, measure(offspring)], rng };
};

export const isSolved = (evolution: Evolution) => evolution.history[evolution.history.length - 1].best === GENOME_LENGTH;
