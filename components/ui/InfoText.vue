<template>
  <TbdTag v-if="isTbd(value)">{{ value.tbd }}</TbdTag>
  <template v-else>{{ value }}</template>
</template>

<script setup lang="ts">
import type { Info } from '~/types/portfolio';

defineProps<{ value: Info }>();
</script>
