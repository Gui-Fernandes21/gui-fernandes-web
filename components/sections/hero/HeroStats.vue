<template>
  <ClientOnly>
    <div ref="statsRef" class="stats" data-aos="fade-up">
      <div v-for="(stat, i) in stats" :key="stat.label" class="stat">
        <b class="serif">{{ display[i] }}</b>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { animate, useInView } from 'motion-v';
import { stats } from '~/data/profile';

const statsRef = ref();
const inView = useInView(statsRef, { once: false });

// Start from the final values so SSR / no-JS shows real numbers
const display = ref(stats.map((stat) => infoText(stat.value)));

onBeforeMount(() => {
  console.log(inView.value)
});

watch(inView, (visible) => {
  if (!visible) return;

  stats.forEach((stat, i) => {
    if (stat.count === undefined) return;
    animate(0, stat.count, {
      duration: 1.3,
      ease: 'easeOut',
      onUpdate(value) {
        display.value[i] = `${Math.round(value)}${stat.suffix ?? ''}`;
      }
    });
  });
});
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 64px;
  border-top: 1px solid var(--ink);
}

.stat {
  padding: 22px 24px 0 0;
}

.stat b {
  display: block;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -0.03em;
}

.stat span {
  font-size: 13px;
  color: var(--muted);
}

@media only screen and (max-width: 1000px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .stat {
    padding-bottom: 20px;
  }
}
</style>
