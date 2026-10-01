<template>
  <div ref="previewRef" class="preview" :class="{ on: item }" aria-hidden="true">
    <template v-for="work in items" :key="work.title">
      <template v-if="work.preview.type === 'image'">
        <img v-if="armed" :src="work.preview.src" alt="" decoding="async" :class="{ show: work.title === item?.title }" />
      </template>
      <div v-else class="terminal" :class="{ show: work.title === item?.title }">
        <p>{{ work.preview.title }}</p>
        <p v-for="line in work.preview.lines" :key="line" :class="{ ok: line.startsWith('✓') }">{{ line }}</p>
        <p class="note">// illustrative</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { WorkItem } from '~/types/portfolio';

const props = defineProps<{ items: WorkItem[]; item: WorkItem | null }>();

// Screenshots are heavy, so only load them after the first hover
const armed = ref(false);
watch(
  () => props.item,
  (item) => {
    if (item) armed.value = true;
  }
);

// Follows the cursor with a little easing (desktop only, hidden on touch layouts)
const previewRef = ref<HTMLElement>();
const position = { x: 0, y: 0, targetX: 0, targetY: 0 };
let frame = 0;

function onMove(event: PointerEvent) {
  position.targetX = event.clientX;
  position.targetY = event.clientY;
}

function loop() {
  position.x += (position.targetX - position.x) * 0.15;
  position.y += (position.targetY - position.y) * 0.15;
  if (previewRef.value) previewRef.value.style.translate = `${position.x}px ${position.y}px`;
  frame = requestAnimationFrame(loop);
}

onMounted(() => {
  window.addEventListener('pointermove', onMove, { passive: true });
  frame = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove);
  cancelAnimationFrame(frame);
});
</script>

<style scoped>
.preview {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 340px;
  height: 240px;
  overflow: hidden;
  border-radius: 14px;
  background: var(--ink);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.85) rotate(-4deg);
  transition:
    opacity 300ms,
    transform 400ms var(--ease);
}

.preview.on {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) rotate(-2deg);
}

img,
.terminal {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 250ms;
}

img {
  object-fit: cover;
  object-position: top;
}

.terminal {
  padding: 18px;
  font-family: var(--mono);
  font-size: 11px;
  line-height: 1.7;
  white-space: pre;
  color: #cfcac0;
}

.terminal p:first-child {
  margin-bottom: 10px;
  color: #fff;
}

.terminal .ok::first-letter {
  color: var(--bright);
}

.terminal .note {
  margin-top: 10px;
  color: #8c877d;
}

.show {
  opacity: 1;
}

@media only screen and (max-width: 1000px) {
  .preview {
    display: none;
  }
}
</style>
