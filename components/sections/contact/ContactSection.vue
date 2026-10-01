<template>
  <section id="contact" class="contact">
    <div class="wrap">
      <span class="mono">(06) Contact</span>
      <h2 class="serif">Let's build<br />something <em>smart</em>.</h2>

      <a class="mail serif" :href="`mailto:${profile.email}`">
        {{ profile.email }}
        <span class="arrow">→</span>
      </a>

      <div class="links">
        <PillButton v-for="link in socialLinks" :key="link.label" :href="link.href" variant="on-dark">{{ link.label }} ↗</PillButton>
        <PillButton variant="on-dark" @click="downloadCV">Résumé ↓</PillButton>
      </div>

      <footer>
        <span>© {{ year }} {{ profile.firstName }} {{ profile.lastName }}</span>
        <span>Open to remote software &amp; ML engineering roles</span>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile, socialLinks } from '~/data/profile';

const { downloadCV } = useCvDownload();
const year = new Date().getFullYear();
</script>

<style scoped>
.contact {
  margin-top: 140px;
  padding: 96px 0 48px;
  border-radius: 28px 28px 0 0;
  background: var(--ink);
  color: var(--paper);
}

.mono {
  color: #8c877d;
}

h2 {
  margin: 28px 0 48px;
  font-size: clamp(56px, 10vw, 150px);
  line-height: 0.9;
  letter-spacing: -0.035em;
}

h2 em {
  color: var(--bright);
}

.mail {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  max-width: 100%;
  padding-bottom: 6px;
  border-bottom: 1px solid #3a3a3a;
  font-size: clamp(22px, 3.4vw, 44px);
  transition: border-color 300ms;
}

.mail:hover {
  border-color: var(--bright);
}

.arrow {
  flex: 0 0 auto;
  display: inline-grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--bright);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 22px;
  transition: transform 400ms;
}

.mail:hover .arrow {
  transform: rotate(-45deg);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 36px;
}

footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 80px;
  padding-top: 28px;
  border-top: 1px solid #2c2c2c;
  font-size: 14px;
  color: #8c877d;
}

@media only screen and (max-width: 600px) {
  .contact {
    padding-top: 64px;
    border-radius: 20px 20px 0 0;
  }

  .mail {
    gap: 10px;
    font-size: 19px;
  }

  .arrow {
    width: 38px;
    height: 38px;
    font-size: 17px;
  }
}
</style>
