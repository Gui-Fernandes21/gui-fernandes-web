<template>
  <LabPane
    eyebrow="Evolutionary computation"
    title="A genetic algorithm solving OneMax"
    :description="`${POPULATION_SIZE} genomes of ${GENOME_LENGTH} bits each. Tournament selection, crossover and mutation push the population toward all ones. The chart plots best and mean fitness per generation.`"
    :metrics="metrics"
  >
    <svg :viewBox="`0 0 ${W} ${H}`">
      <g v-for="f in yTicks" :key="f">
        <line :x1="PAD" :x2="W - 10" :y1="toY(f)" :y2="toY(f)" class="grid" />
        <text :x="PAD - 6" :y="toY(f) + 3" class="tick">{{ f }}</text>
      </g>
      <text :x="W - 10" :y="H - 18" class="tick axis">generation →</text>

      <polyline :points="line('mean')" class="mean" />
      <polyline :points="line('best')" class="best" />
      <circle :cx="toX(history.length - 1)" :cy="toY(latest.best)" r="5" class="head" />

      <g class="legend">
        <rect :x="PAD + 10" y="14" width="14" height="3" class="best-fill" />
        <text :x="PAD + 30" y="19">best</text>
        <rect :x="PAD + 70" y="14" width="14" height="3" class="mean-fill" />
        <text :x="PAD + 90" y="19">mean</text>
      </g>

      <!-- Fittest genome, one square per bit -->
      <rect v-for="(bit, i) in latest.fittest" :key="i" :x="PAD + i * bitW" :y="H - 12" :width="bitW - 1" height="8" rx="1" :class="bit ? 'best-fill' : 'off'" />
    </svg>

    <template #actions>
      <PillButton variant="solid" size="sm" @click="evolve">Evolve ▶</PillButton>
      <PillButton size="sm" @click="reset">Reset</PillButton>
    </template>
  </LabPane>
</template>

<script setup lang="ts">
import { GENOME_LENGTH, POPULATION_SIZE, createEvolution, isSolved, nextGeneration } from '~/utils/ml/geneticAlgorithm';

const props = defineProps<{ active: boolean }>();

const W = 400;
const H = 300;
const PAD = 28;
const MAX_GENERATIONS = 70;
const yTicks = [0, 12, 24, 36, 48];
const bitW = (W - PAD - 10) / GENOME_LENGTH;

let seed = 11;
// shallowRef: the evolution object is replaced each generation, never mutated
const evolution = shallowRef(createEvolution(seed));
const history = computed(() => evolution.value.history);
const latest = computed(() => history.value[history.value.length - 1]);
const generation = computed(() => history.value.length - 1);

// The x axis grows with the run (minimum 30 generations)
const xMax = computed(() => Math.max(30, generation.value));
const toX = (g: number) => PAD + (g / xMax.value) * (W - PAD - 10);
const toY = (f: number) => 268 - (f / GENOME_LENGTH) * 232;
const line = (key: 'best' | 'mean') => history.value.map((h, i) => `${toX(i)},${toY(h[key])}`).join(' ');

const { start, stop } = useTicker(step, 90);

function step() {
  evolution.value = nextGeneration(evolution.value);
  if (isSolved(evolution.value) || generation.value >= MAX_GENERATIONS) stop();
}

function reset() {
  stop();
  evolution.value = createEvolution(++seed);
}

function evolve() {
  if (isSolved(evolution.value) || generation.value >= MAX_GENERATIONS) reset();
  start();
}

const metrics = computed(() => [
  { label: 'generation', value: generation.value },
  { label: `best / ${GENOME_LENGTH}`, value: latest.value.best },
  { label: 'mean', value: latest.value.mean.toFixed(1) }
]);

let started = false;
watch(
  () => props.active,
  (active) => {
    if (active && !started) {
      started = true;
      evolve();
    } else if (!active) stop();
  }
);
</script>

<style scoped>
.grid {
  stroke: var(--line);
}

text {
  font-family: var(--sans);
  font-size: 11px;
  fill: var(--ink-2);
}

.tick {
  font-family: var(--mono);
  font-size: 9px;
  fill: var(--muted);
  text-anchor: end;
}

polyline {
  fill: none;
  stroke-linejoin: round;
}

.best {
  stroke: var(--c1);
  stroke-width: 3;
}

.mean {
  stroke: var(--c3);
  stroke-width: 2;
  stroke-dasharray: 5 4;
}

.head,
.best-fill {
  fill: var(--c1);
}

.mean-fill {
  fill: var(--c3);
}

.off {
  fill: #e6e1d6;
}
</style>
