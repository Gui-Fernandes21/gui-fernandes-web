<template>
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
const loading = useState('loading');
</script>

<style scoped>
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

@media only screen and (max-width: 768px) {
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
    padding: 0 1rem;
  }
}
</style>
