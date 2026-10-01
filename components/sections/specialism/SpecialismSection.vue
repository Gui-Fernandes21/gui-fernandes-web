<template>
  <section id="ai" class="section">
    <div class="wrap">
      <SectionLabel num="01">AI &amp; Machine <em>Learning</em></SectionLabel>
      <p class="intro" data-aos="fade-up">{{ specialismIntro }}</p>

      <div class="body">
        <div class="grid">
          <SpecialismCard v-for="(area, i) in specialismAreas" :key="area.title" :area="area" data-aos="fade-up" :data-aos-delay="i * 80" />
        </div>
        <MlLab />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { specialismAreas, specialismIntro } from '~/data/specialism';
</script>

<style scoped>
.intro {
  max-width: 620px;
  margin: 0 0 48px 152px;
  font-size: 17px;
  color: var(--ink-2);
}

.body {
  margin-left: 152px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

@media only screen and (max-width: 1000px) {
  .intro,
  .body {
    margin-left: 0;
  }

  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
