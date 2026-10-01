<template>
  <div class="ticker" aria-hidden="true">
    <div class="track">
      <!-- Rendered twice so the loop is seamless -->
      <template v-for="copy in 2" :key="copy">
        <span v-for="item in tickerItems" :key="`${copy}-${item}`" class="item">
          {{ item }}
          <b>●</b>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tickerItems } from '~/data/profile';
</script>

<style scoped>
.ticker {
  margin-top: 72px;
  padding: 18px 0;
  overflow: hidden;
  border-block: 1px solid var(--line);
  white-space: nowrap;
}

.track {
  display: inline-block;
  animation: scroll 55s linear infinite;
}

.ticker:hover .track {
  animation-play-state: paused;
}

.item {
  font-family: var(--serif);
  font-size: 28px;
  font-style: italic;
  color: var(--muted);
}

.item b {
  margin: 0 26px;
  font-family: var(--sans);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  vertical-align: middle;
  color: var(--line-2);
}

@keyframes scroll {
  to {
    transform: translateX(-50%);
  }
}
</style>
