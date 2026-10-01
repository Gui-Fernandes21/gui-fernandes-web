<template>
  <section id="experience" class="section">
    <div class="wrap">
      <SectionLabel num="04">Experience</SectionLabel>

      <div class="list">
        <ExperienceEntry v-for="entry in experience" :key="entry.company" :entry="entry" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from '~/data/experience';
</script>

<style scoped>
.list {
  border-top: 1px solid var(--ink);
}
</style>
