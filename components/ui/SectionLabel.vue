<template>
  <div class="section-label" data-aos="fade-up">
    <span class="num">({{ num }})</span>
    <h2><slot /></h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ num: string }>();
</script>

<style scoped>
.section-label {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 32px;
  align-items: baseline;
  margin-bottom: 28px;
}

.num {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
}

h2 {
  font-family: var(--serif);
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.03em;
}

h2 :slotted(em) {
  color: var(--accent);
}

@media only screen and (max-width: 1000px) {
  .section-label {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
