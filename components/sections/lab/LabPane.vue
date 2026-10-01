<template>
  <div class="pane">
    <div class="viz">
      <slot />
    </div>

    <div class="info">
      <span class="mono eyebrow">{{ eyebrow }}</span>
      <h4 class="serif">{{ title }}</h4>
      <p>{{ description }}</p>

      <div class="metrics">
        <div v-for="metric in metrics" :key="metric.label" class="metric">
          <b>{{ metric.value }}</b>
          <span>{{ metric.label }}</span>
        </div>
      </div>

      <div class="actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description: string;
  metrics: { label: string; value: string | number }[];
}>();
</script>

<style scoped>
.pane {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  min-height: 360px;
}

.viz {
  display: grid;
  place-items: center;
  padding: 22px;
  border-right: 1px solid var(--line);
  background: radial-gradient(circle at 30% 20%, rgba(15, 122, 71, 0.06), transparent 60%);
}

.viz :slotted(svg) {
  width: 100%;
  max-width: 440px;
  height: auto;
  overflow: visible;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 26px;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h4 {
  font-size: 32px;
  line-height: 1.05;
  letter-spacing: -0.015em;
}

p {
  font-size: 14px;
  color: var(--ink-2);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.metric {
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
}

.metric b {
  display: block;
  font-family: var(--mono);
  font-size: 18px;
  font-weight: 500;
}

.metric span {
  font-size: 11px;
  color: var(--muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

@media only screen and (max-width: 1000px) {
  .pane {
    grid-template-columns: 1fr;
  }

  .viz {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
}

@media only screen and (max-width: 600px) {
  .info {
    padding: 20px;
  }
}
</style>
