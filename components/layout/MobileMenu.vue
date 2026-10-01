<template>
  <div class="mobile-menu">
    <button class="toggle" :aria-expanded="open" aria-label="Open menu" @click="open = !open">
      <span :class="{ open }"></span>
    </button>

    <Transition name="drop">
      <nav v-if="open" class="panel" @click="open = false">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`">{{ link.label }}</a>
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{ links: { label: string; id: string }[] }>();

const open = ref(false);
</script>

<style scoped>
.mobile-menu {
  display: none;
}

.toggle {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--line-2);
  border-radius: 50%;
  background: var(--card);
  cursor: pointer;
}

/* Two-line burger that turns into an X */
.toggle span,
.toggle span::after {
  display: block;
  width: 16px;
  height: 1.5px;
  background: var(--ink);
  transition: transform 300ms var(--ease);
}

.toggle span {
  transform: translateY(-3px);
}

.toggle span::after {
  content: '';
  transform: translateY(6px);
}

.toggle span.open {
  transform: rotate(45deg);
}

.toggle span.open::after {
  transform: rotate(-90deg);
}

.panel {
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  display: grid;
  padding: 8px var(--gutter) 20px;
  border-bottom: 1px solid var(--line);
  background: var(--paper);
}

.panel a {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--serif);
  font-size: 28px;
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 250ms,
    transform 250ms var(--ease);
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media only screen and (max-width: 1000px) {
  .mobile-menu {
    display: block;
  }
}
</style>
