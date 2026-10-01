<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
    <template v-if="name === 'chart'">
      <path d="M3 3v18h18" />
      <circle cx="8" cy="14" r="1.5" />
      <circle cx="12" cy="9" r="1.5" />
      <circle cx="17" cy="12" r="1.5" />
      <path d="M5 18L19 6" stroke-dasharray="2 3" />
    </template>
    <template v-else-if="name === 'agent'">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4a3 3 0 013 3V14" />
    </template>
    <template v-else-if="name === 'dna'">
      <path d="M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M7 21v-6M17 21v-6" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="M6 7l4 3M18 7l-4 3M6 17l4-3M18 17l-4-3" />
    </template>
  </svg>
</template>

<script setup lang="ts">
import type { SpecialismArea } from '~/types/portfolio';

defineProps<{ name: SpecialismArea['icon'] }>();
</script>
