<template>
  <div class="widget" aria-label="Illustrative allocation demo">
    <header class="head">
      <b>Allocation explorer</b>
      <span class="mono">interactive demo</span>
    </header>

    <AllocationDonut :segments="segments" :label="riskInfo.name" />

    <div class="control">
      <label for="risk">
        Risk tolerance <span>{{ risk }} / 10</span>
      </label>
      <input id="risk" v-model.number="risk" type="range" min="1" max="10" />
      <p class="why">
        <i>i</i>
        {{ riskInfo.reason }}
      </p>
    </div>

    <p class="disclaimer">Same seven ETFs as the project, but these weights are an illustrative blend, not the trained agents' output. Not financial advice.</p>
  </div>
</template>

<script setup lang="ts">
import { DONUT_RADIUS, allocationFor, etfs, riskProfile } from '~/utils/allocation';

const CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

const risk = ref(5);
const riskInfo = computed(() => riskProfile(risk.value));

const segments = computed(() => {
  let offset = 0;

  return allocationFor(risk.value).map((percent, i) => {
    const length = (CIRCUMFERENCE * percent) / 100;
    const style = { stroke: etfs[i].color, strokeDasharray: `${Math.max(length - 2, 0)} ${CIRCUMFERENCE}`, strokeDashoffset: -offset };
    offset += length;
    return { ...etfs[i], percent, style };
  });
});
</script>

<style scoped>
.widget {
  align-self: start;
  overflow: hidden;
  border-radius: 20px;
  background: var(--card);
  color: var(--ink);
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
}

.control {
  padding: 16px 18px;
  border-top: 1px solid var(--line);
  background: #faf8f3;
}

label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
}

label span {
  font-family: var(--mono);
  font-weight: 500;
  color: var(--accent);
}

input[type='range'] {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--c3), var(--c2), var(--c1));
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

input[type='range']::-webkit-slider-thumb {
  width: 22px;
  height: 22px;
  border: 2px solid var(--ink);
  border-radius: 50%;
  background: #fff;
  box-shadow: var(--shadow);
  cursor: grab;
  -webkit-appearance: none;
}

input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 2px solid var(--ink);
  border-radius: 50%;
  background: #fff;
  cursor: grab;
}

.why {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  font-size: 13px;
  color: var(--ink-2);
}

.why i {
  flex: 0 0 18px;
  display: grid;
  place-items: center;
  height: 18px;
  margin-top: 1px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
}

.disclaimer {
  padding: 9px 18px;
  border-top: 1px solid var(--line);
  font-size: 11px;
  color: var(--muted);
}
</style>
