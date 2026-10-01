<template>
  <section id="work" class="section">
    <div class="wrap">
      <SectionLabel num="03">Selected <em>work</em></SectionLabel>

      <div class="list">
        <WorkRow v-for="item in workItems" :key="item.title" :item="item" @mouseenter="hovered = item" @mouseleave="hovered = null" />
      </div>
    </div>

    <WorkPreview :items="workItems" :item="hovered" />
  </section>
</template>

<script setup lang="ts">
import type { WorkItem } from '~/types/portfolio';
import { workItems } from '~/data/work';

const hovered = shallowRef<WorkItem | null>(null);
</script>

<style scoped>
.list {
  border-top: 1px solid var(--ink);
}
</style>
