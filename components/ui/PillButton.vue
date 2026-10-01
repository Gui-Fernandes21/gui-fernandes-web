<template>
  <component :is="href ? 'a' : 'button'" :href="href" :target="external ? '_blank' : undefined" :rel="external ? 'noopener' : undefined" class="pill" :class="[variant, size]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href?: string;
    variant?: 'outline' | 'solid' | 'on-dark' | 'bright';
    size?: 'md' | 'sm';
  }>(),
  { variant: 'outline', size: 'md' }
);

const external = computed(() => props.href?.startsWith('http'));
</script>

<style scoped>
.pill {
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 22px;

  border: 1px solid var(--ink);
  border-radius: 999px;
  background: none;
  color: var(--ink);

  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: color 400ms;
}

/* Fill that sweeps up on hover */
.pill::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--ink);
  transform: translateY(101%);
  transition: transform 450ms var(--ease-in-out);
}

.pill:hover {
  color: var(--paper);
}

.pill:hover::before {
  transform: none;
}

.sm {
  padding: 8px 14px;
  font-size: 13px;
}

.solid {
  background: var(--ink);
  color: var(--paper);
}

.solid::before {
  background: var(--accent);
}

.on-dark {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.on-dark::before {
  background: #fff;
}

.on-dark:hover {
  color: var(--ink);
}

.bright {
  border-color: var(--bright);
  background: var(--bright);
  color: var(--ink);
}

.bright::before {
  background: #fff;
}

.bright:hover {
  color: var(--ink);
}
</style>
