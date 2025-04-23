<template>
  <motion.path :d="'M10 80 Q 95 10 180 80 T 330 80'" :initial="{ pathLength: 0 }" :enter="{ pathLength: 1, transition: { duration: 4, loop: Infinity } }" class="svg-wave" />
  <LoadingModal v-if="loading"></LoadingModal>
  <div class="layout">
    <div class="row">
      <InfoCard></InfoCard>
      <TheContent></TheContent>
    </div>
    <TheNav></TheNav>
  </div>
  <!-- <TheFooter></TheFooter> -->
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const loading = useState('loading');
</script>

<style scoped>

.svg-wave {
  position: fixed; bottom: 0; width: 100%; height: 200px; z-index: -1; fill: none; stroke: #5c6bc0; stroke-width: 2;
}

.layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4rem;

  align-items: start;

  overflow-x: hidden;
}

.row {
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 1rem;
}

@media only screen and (max-width: 600px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .row {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 1088px) {
  .layout {
    grid-template-rows: 1fr 6rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
