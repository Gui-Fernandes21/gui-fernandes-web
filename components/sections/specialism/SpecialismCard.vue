<template>
  <article class="card">
    <div class="icon"><SpecialismIcon :name="area.icon" /></div>
    <h4 class="serif">{{ area.title }}</h4>
    <p>{{ area.description }}</p>
    <div class="tags">
      <TagChip v-for="tag in area.tags" :key="tag">{{ tag }}</TagChip>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { SpecialismArea } from '~/types/portfolio';

defineProps<{ area: SpecialismArea }>();
</script>

<style scoped>
.card {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--card);
  box-shadow: var(--shadow);
  transition:
    transform 350ms var(--ease),
    border-color 300ms;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--line-2);
}

.icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent);
}

.icon svg {
  width: 20px;
  height: 20px;
}

h4 {
  margin: 16px 0 8px;
  font-size: 26px;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

p {
  font-size: 14px;
  color: var(--ink-2);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}
</style>
