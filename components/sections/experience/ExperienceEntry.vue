<template>
  <article class="entry" data-aos="fade-up">
    <span class="dates"><InfoText :value="entry.from" /> — {{ entry.to }}</span>

    <div>
      <h3 class="serif">{{ entry.company }}</h3>
      <div class="role">{{ entry.role }}</div>
      <span class="badge">{{ entry.badge }}</span>
    </div>

    <ul>
      <li v-for="point in entry.highlights" :key="point">{{ point }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/types/portfolio';

defineProps<{ entry: ExperienceItem }>();
</script>

<style scoped>
.entry {
  display: grid;
  grid-template-columns: 120px 1fr 1.2fr;
  gap: 32px;
  padding: 34px 0;
  border-bottom: 1px solid var(--line);
}

.dates {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
}

h3 {
  font-size: 34px;
  line-height: 1.05;
  letter-spacing: -0.015em;
}

.role {
  margin-top: 6px;
  font-size: 14px;
  color: var(--accent);
}

.badge {
  display: inline-block;
  margin-top: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--chip);
  font-size: 11px;
  font-weight: 600;
  color: var(--ink-2);
}

ul {
  display: grid;
  gap: 8px;
  list-style: none;
  font-size: 15px;
  color: var(--ink-2);
}

li {
  position: relative;
  padding-left: 18px;
}

li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--muted);
}

@media only screen and (max-width: 1000px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
