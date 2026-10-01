<template>
  <div ref="labRef" class="lab" data-aos="fade-up">
    <header class="head">
      <b>ML lab: three tiny algorithms, running live in your browser</b>
      <div class="tabs" role="tablist">
        <button v-for="(tab, i) in tabs" :key="tab" role="tab" :aria-selected="current === i" :class="{ active: current === i }" @click="selectTab(i)">{{ tab }}</button>
      </div>
    </header>

    <LabClassifier v-show="current === 0" :active="inView && current === 0" />
    <LabGridWorld v-show="current === 1" :active="inView && current === 1" />
    <LabEvolution v-show="current === 2" :active="inView && current === 2" />

    <p class="note">Toy problems, computed live in the browser. They show the ideas I work with. They aren't results from my projects.</p>

  </div>
</template>

<script setup lang="ts">
import { useInView } from 'motion-v';

const tabs = ['Classifier', 'RL agent', 'Evolution'];
const current = ref(0);

const labRef = ref();
const inView = useInView(labRef, { once: true, amount: 0.4 });

const selectTab = (i: number) => {
  current.value = i;
};
</script>

<style scoped>
.lab {
  margin-top: 18px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--card);
  box-shadow: 0 30px 60px -34px rgba(19, 19, 19, 0.35);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--line);
}

.head b {
  font-size: 14px;
  font-weight: 600;
}

.tabs {
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: var(--chip);
}

.tabs button {
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-2);
  cursor: pointer;
  transition:
    background 250ms,
    color 250ms;
}

.tabs button.active {
  background: var(--ink);
  color: var(--paper);
}

.note {
  padding: 10px 18px;
  border-top: 1px solid var(--line);
  font-size: 11px;
  color: var(--muted);
}

@media only screen and (max-width: 600px) {
  .tabs button {
    padding: 6px 10px;
    font-size: 12px;
  }
}
</style>
