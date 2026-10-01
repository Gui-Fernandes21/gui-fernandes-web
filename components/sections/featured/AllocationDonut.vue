<template>
  <div class="body">
    <div class="donut">
      <svg viewBox="0 0 180 180" width="180" height="180">
        <circle cx="90" cy="90" :r="DONUT_RADIUS" class="track" />
        <circle v-for="seg in segments" :key="seg.label" cx="90" cy="90" :r="DONUT_RADIUS" class="seg" :style="seg.style" />
      </svg>
      <div class="center">
        <b class="serif">{{ label }}</b>
        <span>risk profile</span>
      </div>
    </div>

    <ul class="legend">
      <li v-for="seg in segments" :key="seg.label">
        <i :style="{ background: seg.color }"></i>
        {{ seg.label }}
        <b>{{ seg.percent }}%</b>
        <span class="bar"><span :style="{ width: `${seg.percent}%`, background: seg.color }"></span></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { DONUT_RADIUS } from '~/utils/allocation';

defineProps<{
  label: string;
  segments: { label: string; color: string; percent: number; style: Record<string, string | number> }[];
}>();
</script>

<style scoped>
.body {
  display: grid;
  grid-template-columns: 180px 1fr;
  align-items: center;
  gap: 20px;
  padding: 20px 18px;
}

.donut {
  position: relative;
  width: 180px;
  height: 180px;
}

.donut svg {
  transform: rotate(-90deg);
}

.track,
.seg {
  fill: none;
  stroke-width: 24;
}

.track {
  stroke: #ebe7de;
}

.seg {
  transition:
    stroke-dasharray 800ms var(--ease),
    stroke-dashoffset 800ms var(--ease);
}

.center {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  text-align: center;
}

.center b {
  font-size: 26px;
  line-height: 1;
}

.center span {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.legend {
  display: grid;
  gap: 9px;
  list-style: none;
}

.legend li {
  display: grid;
  grid-template-columns: 10px 1fr auto;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.legend i {
  width: 10px;
  height: 10px;
  border-radius: 3px;
}

.legend b {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
}

.bar {
  grid-column: 2 / 4;
  height: 3px;
  margin-top: -5px;
  overflow: hidden;
  border-radius: 3px;
  background: #ebe7de;
}

.bar span {
  display: block;
  height: 100%;
  transition: width 800ms var(--ease);
}

@media only screen and (max-width: 600px) {
  .body {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .legend {
    width: 100%;
  }
}
</style>
