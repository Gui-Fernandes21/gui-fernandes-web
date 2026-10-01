<template>
  <span class="tag"><slot /></span>
</template>

<style scoped>
.tag {
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--chip);
  color: var(--ink-2);
  font-family: var(--mono);
  font-size: 10.5px;
}
</style>
