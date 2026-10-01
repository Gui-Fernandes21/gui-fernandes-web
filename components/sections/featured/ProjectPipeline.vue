<template>
  <ol class="pipeline" data-aos="pipeline">
    <li v-for="(step, i) in steps" :key="step.title" class="step">
      <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
      <h4 class="serif">{{ step.title }}</h4>
      <p>
        {{ step.description }}
        <InfoText v-if="step.note" :value="step.note" />
      </p>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { FeaturedProject } from '~/types/portfolio';

defineProps<{ steps: FeaturedProject['pipeline'] }>();
</script>

<style scoped>
.pipeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  list-style: none;
}

.step {
  position: relative;
  padding: 26px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.step:last-child {
  border-right: 0;
}

/* Progress line that draws across each step when AOS reveals the pipeline */
.step::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--bright);
  transition: width 1s var(--ease-in-out);
}

.pipeline.aos-animate .step::after {
  width: 100%;
}

.pipeline.aos-animate .step:nth-child(2)::after {
  transition-delay: 250ms;
}

.pipeline.aos-animate .step:nth-child(3)::after {
  transition-delay: 500ms;
}

.pipeline.aos-animate .step:nth-child(4)::after {
  transition-delay: 750ms;
}

.n {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--bright);
}

h4 {
  margin: 6px 0 4px;
  font-size: 24px;
  line-height: 1.1;
  color: #fff;
}

p {
  font-size: 13px;
  color: #b9b4a9;
}

@media only screen and (max-width: 1000px) {
  .pipeline {
    grid-template-columns: 1fr 1fr;
  }

  .step:nth-child(2) {
    border-right: 0;
  }

  .step:nth-child(-n + 2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
}

@media only screen and (max-width: 600px) {
  .pipeline {
    grid-template-columns: 1fr;
  }

  .step {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
}
</style>
