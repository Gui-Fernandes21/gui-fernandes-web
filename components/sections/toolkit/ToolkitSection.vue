<template>
  <section class="section">
    <div class="wrap">
      <SectionLabel num="05">Toolkit &amp; <em>study</em></SectionLabel>

      <div class="groups" data-aos="fade-up">
        <div v-for="group in toolkit" :key="group.title">
          <h4>{{ group.title }}</h4>
          <ul>
            <li v-for="item in group.items" :key="item.label">
              {{ item.label }}
              <small v-if="item.sub">{{ item.sub }}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toolkit } from '~/data/toolkit';
</script>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-left: 152px;
}

h4 {
  margin-bottom: 14px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

ul {
  display: grid;
  gap: 6px;
  list-style: none;
  font-size: 17px;
}

small {
  display: block;
  font-size: 13px;
  color: var(--muted);
}

@media only screen and (max-width: 1000px) {
  .groups {
    grid-template-columns: 1fr 1fr;
    margin-left: 0;
  }
}
</style>
