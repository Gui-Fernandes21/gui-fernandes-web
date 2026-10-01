<template>
  <component :is="item.href ? 'a' : 'div'" :href="item.href" class="row" data-aos="fade-up">
    <span class="year"><InfoText :value="item.year" /></span>

    <div>
      <span v-if="item.badge" class="badge">{{ item.badge }}</span>
      <h3 class="serif">{{ item.title }}</h3>
    </div>

    <p>{{ item.description }}</p>

    <span class="meta">
      <b>{{ item.stack }}</b>
      {{ item.kind }}
      <TbdTag v-if="!item.href">add link</TbdTag>
    </span>

    <span v-if="item.preview.type === 'image'" class="thumb">
      <img :src="item.preview.src" :alt="`${item.title} screenshot`" loading="lazy" />
    </span>
  </component>
</template>

<script setup lang="ts">
import type { WorkItem } from '~/types/portfolio';

defineProps<{ item: WorkItem }>();
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 120px 1.3fr 1fr 150px;
  align-items: center;
  gap: 32px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
  transition: padding 400ms var(--ease);
}

.row:hover {
  padding-left: 16px;
}

.year {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
}

h3 {
  font-size: clamp(30px, 3.8vw, 50px);
  line-height: 1;
  letter-spacing: -0.02em;
  transition: color 300ms;
}

.row:hover h3 {
  color: var(--accent);
}

.badge {
  display: block;
  margin-bottom: 6px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
}

p {
  font-size: 15px;
  color: var(--ink-2);
}

.meta {
  text-align: right;
  font-size: 13px;
  color: var(--muted);
}

.meta b {
  display: block;
  font-weight: 500;
  color: var(--ink);
}

.thumb {
  display: none;
}

@media only screen and (max-width: 1000px) {
  .row {
    grid-template-columns: 56px 1fr;
    gap: 8px 16px;
  }

  p,
  .meta,
  .thumb {
    grid-column: 2;
  }

  .meta {
    text-align: left;
  }

  .thumb {
    display: block;
    aspect-ratio: 16 / 9;
    margin-top: 12px;
    overflow: hidden;
    border-radius: 10px;
    background: var(--ink);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
