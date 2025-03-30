<template>
  <LoadingModal v-if="loading"></LoadingModal>
  <div class="layout">
    <InfoCard></InfoCard>
    <TheContent></TheContent>
    <TheNav></TheNav>
  </div>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
const loading = useState('loading');
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 2fr 4fr 4rem;

  align-items: start;
}
</style>
