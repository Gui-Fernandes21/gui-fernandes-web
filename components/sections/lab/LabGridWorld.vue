<template>
  <LabPane
    eyebrow="Reinforcement learning"
    title="Value iteration in a grid world"
    description="Each sweep applies the Bellman update, and value spreads outward from the goal. Once it converges, the agent follows the greedy policy around the walls."
    :metrics="metrics"
  >
    <svg :viewBox="`0 0 ${SIZE} ${SIZE}`">
      <rect v-for="cell in cells" :key="cell.key" :x="cell.x + 2" :y="cell.y + 2" :width="S - 4" :height="S - 4" rx="8" :class="cell.type" :fill-opacity="cell.type === 'open' ? cell.shade : 1" />

      <path v-if="path" :d="path" class="path" />

      <g class="labels">
        <template v-for="cell in cells" :key="`t${cell.key}`">
          <text v-if="cell.type === 'goal'" :x="cell.x + S / 2" :y="cell.y + S / 2 + 5" class="goal-text">goal</text>
          <text v-else-if="cell.type === 'open' && sweeps > 0" :x="cell.x + S / 2" :y="cell.y + S / 2 + 4" :class="{ light: cell.shade > 0.3 }">{{ cell.value.toFixed(2) }}</text>
        </template>
        <circle :cx="world.start[0] * S + S / 2" :cy="world.start[1] * S + S / 2" r="9" class="start" />
      </g>
    </svg>

    <template #actions>
      <PillButton variant="solid" size="sm" @click="solve">Solve ▶</PillButton>
      <PillButton size="sm" @click="newWalls">New walls</PillButton>
    </template>
  </LabPane>
</template>

<script setup lang="ts">
import { bellmanSweep, createWorld, emptyValues, greedyPath } from '~/utils/ml/valueIteration';

const props = defineProps<{ active: boolean }>();

const SIZE = 350;
const MAX_SWEEPS = 80;

let seed = 3;
const world = ref(createWorld(seed));
const values = ref(emptyValues(world.value.size));
const sweeps = ref(0);
const delta = ref<number>();
const converged = ref(false);
const S = computed(() => SIZE / world.value.size);

const { start, stop } = useTicker(sweep, 260);

function sweep() {
  const result = bellmanSweep(world.value, values.value);
  values.value = result.values;
  delta.value = result.delta;
  sweeps.value++;
  if (result.delta < 1e-3 || sweeps.value >= MAX_SWEEPS) {
    converged.value = true;
    stop();
  }
}

function newWalls() {
  stop();
  world.value = createWorld(++seed);
  values.value = emptyValues(world.value.size);
  sweeps.value = 0;
  delta.value = undefined;
  converged.value = false;
}

function solve() {
  if (converged.value) newWalls();
  start();
}

const cells = computed(() => {
  const { size, walls, goal } = world.value;
  const max = Math.max(1e-6, ...values.value.flat());

  return Array.from({ length: size * size }, (_, k) => {
    const x = k % size;
    const y = Math.floor(k / size);
    const type = walls[x][y] ? 'wall' : x === goal[0] && y === goal[1] ? 'goal' : 'open';
    return { key: k, x: x * S.value, y: y * S.value, type, value: values.value[x][y], shade: (Math.max(0, values.value[x][y]) / max) * 0.55 };
  });
});

const pathCells = computed(() => (converged.value ? greedyPath(world.value, values.value) : null));

const path = computed(() => pathCells.value?.map(([x, y], i) => `${i ? 'L' : 'M'}${x * S.value + S.value / 2} ${y * S.value + S.value / 2}`).join(' '));

const metrics = computed(() => [
  { label: 'sweeps', value: sweeps.value },
  { label: 'max Δ', value: delta.value?.toFixed(3) ?? '–' },
  { label: 'path length', value: pathCells.value ? `${pathCells.value.length - 1} steps` : '–' }
]);

let started = false;
watch(
  () => props.active,
  (active) => {
    if (active && !started) {
      started = true;
      solve();
    } else if (!active) stop();
  }
);
</script>

<style scoped>
rect.open {
  fill: var(--accent);
  stroke: var(--line);
}

rect.wall {
  fill: var(--ink);
}

rect.goal {
  fill: var(--c1);
}

.path {
  fill: none;
  stroke: var(--c2);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.9;
  stroke-dasharray: 1000;
  animation: draw 1.2s ease forwards;
}

@keyframes draw {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

text {
  font-family: var(--mono);
  font-size: 10px;
  text-anchor: middle;
  fill: var(--muted);
}

text.light,
.goal-text {
  fill: #fff;
}

.goal-text {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
}

.start {
  fill: none;
  stroke: var(--c2);
  stroke-width: 3;
}
</style>
