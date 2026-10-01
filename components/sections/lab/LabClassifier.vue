<template>
  <LabPane eyebrow="Supervised learning" title="Logistic regression, trained by gradient descent" description="Two noisy clusters. Each frame takes one gradient step on the log-loss, and the decision boundary rotates into place." :metrics="metrics">
    <svg :viewBox="`0 0 ${W} ${H}`">
      <!-- Predicted probability shading -->
      <rect v-for="cell in shading" :key="cell.key" :x="cell.x" :y="cell.y" :width="cellW + 0.5" :height="cellH + 0.5" :class="cell.positive ? 'fill-a' : 'fill-b'" :opacity="cell.opacity" />
      <rect :x="PAD" :y="PAD" :width="W - 2 * PAD" :height="H - 2 * PAD" rx="6" class="frame" />

      <line v-if="boundary" v-bind="boundary" class="boundary" clip-path="url(#lr-clip)" />
      <clipPath id="lr-clip">
        <rect :x="PAD" :y="PAD" :width="W - 2 * PAD" :height="H - 2 * PAD" />
      </clipPath>

      <circle v-for="(p, i) in points" :key="i" :cx="toX(p.x)" :cy="toY(p.y)" r="5" :class="p.label ? 'dot-a' : 'dot-b'" />
    </svg>

    <template #actions>
      <PillButton variant="solid" size="sm" @click="train">Train ▶</PillButton>
      <PillButton size="sm" @click="newData">New data</PillButton>
    </template>
  </LabPane>
</template>

<script setup lang="ts">
import { INITIAL_WEIGHTS, boundaryY, makeClusters, predict, trainStep, type Weights } from '~/utils/ml/logisticRegression';

const props = defineProps<{ active: boolean }>();

const W = 400;
const H = 300;
const PAD = 20;
const GRID = 20;
const EPOCHS = 160;
const cellW = (W - 2 * PAD) / GRID;
const cellH = (H - 2 * PAD) / GRID;
const toX = (x: number) => PAD + x * (W - 2 * PAD);
const toY = (y: number) => H - PAD - y * (H - 2 * PAD);

let seed = 7;
const points = ref(makeClusters(seed));
const weights = ref<Weights>([...INITIAL_WEIGHTS]);
const epoch = ref(0);
const loss = ref<number>();
const accuracy = ref<number>();

const { start, stop } = useTicker(step, 40);

function step() {
  const result = trainStep(points.value, weights.value);
  weights.value = result.weights;
  loss.value = result.loss;
  accuracy.value = result.accuracy;
  if (++epoch.value >= EPOCHS) stop();
}

function newData() {
  stop();
  points.value = makeClusters(++seed);
  weights.value = [...INITIAL_WEIGHTS];
  epoch.value = 0;
  loss.value = accuracy.value = undefined;
}

function train() {
  if (epoch.value >= EPOCHS) newData();
  start();
}

const shading = computed(() =>
  Array.from({ length: GRID * GRID }, (_, k) => {
    const i = k % GRID;
    const j = Math.floor(k / GRID);
    const q = predict(weights.value, (i + 0.5) / GRID, (j + 0.5) / GRID);
    return { key: k, x: PAD + i * cellW, y: H - PAD - (j + 1) * cellH, positive: q > 0.5, opacity: (Math.abs(q - 0.5) * 0.28).toFixed(3) };
  })
);

const boundary = computed(() => {
  if (Math.abs(weights.value[2]) < 1e-6) return null;
  return { x1: toX(0), y1: toY(boundaryY(weights.value, 0)), x2: toX(1), y2: toY(boundaryY(weights.value, 1)) };
});

const metrics = computed(() => [
  { label: 'epoch', value: epoch.value },
  { label: 'log-loss', value: loss.value?.toFixed(3) ?? '–' },
  { label: 'accuracy', value: accuracy.value === undefined ? '–' : `${Math.round(accuracy.value * 100)}%` }
]);

// Auto-play the first time the pane becomes visible
let started = false;
watch(
  () => props.active,
  (active) => {
    if (active && !started) {
      started = true;
      train();
    } else if (!active) stop();
  }
);
</script>

<style scoped>
.fill-a,
.dot-a {
  fill: var(--c1);
}

.fill-b,
.dot-b {
  fill: var(--c3);
}

circle {
  stroke: var(--card);
  stroke-width: 1.5;
}

.frame {
  fill: none;
  stroke: var(--line);
}

.boundary {
  stroke: var(--ink);
  stroke-width: 2;
  stroke-dasharray: 6 5;
}
</style>
