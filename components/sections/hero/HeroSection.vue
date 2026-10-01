<template>
  <section id="top" class="hero">
    <div class="wrap">
      <div class="mono meta">
        <span>{{ profile.role }}</span>
        <span>{{ profile.location }}</span>
        <span>Portfolio ’26</span>
      </div>

      <!-- prettier-ignore -->
      <h1 class="serif">
        <span class="line"><span>Building</span></span>
        <span class="line"><span><em>intelligent</em> software,</span></span>
        <span class="line"><span>end to end.</span></span>
      </h1>

      <div class="foot">
        <!-- prettier-ignore -->
        <p class="intro">
          I'm {{ profile.firstName }}, a software engineer with <InfoText :value="profile.degree" /> <span class="mark">{{ profile.specialism }}</span>. {{ profile.pitch }}
        </p>

        <div class="portrait">
          <img :src="profile.portrait" :alt="`Portrait of ${profile.firstName} ${profile.lastName}`" />
        </div>

        <div class="cta">
          <PillButton href="#featured" variant="solid">See my work ↓</PillButton>
          <button class="text-link" @click="downloadCV">Download résumé (PDF)</button>
        </div>
      </div>

      <HeroStats />
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile';

const { downloadCV } = useCvDownload();
</script>

<style scoped>
.hero {
  padding: 88px 0 64px;
}

.meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

h1 {
  margin: 36px 0 44px;
  font-size: clamp(54px, 10.5vw, 160px);
  line-height: 0.9;
  letter-spacing: -0.035em;
}

h1 em {
  color: var(--accent);
}

/* Each line rises out of a mask on load */
.line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.07em;
}

.line > span {
  display: inline-block;
  transform: translateY(105%);
  animation: rise 1.1s var(--ease) forwards;
}

.line:nth-child(2) > span {
  animation-delay: 120ms;
}

.line:nth-child(3) > span {
  animation-delay: 240ms;
}

@keyframes rise {
  to {
    transform: none;
  }
}

.foot {
  display: grid;
  grid-template-columns: 1.1fr auto 1fr;
  align-items: end;
  gap: 48px;
}

.intro {
  max-width: 430px;
  font-size: 18px;
  color: var(--ink-2);
}

/* Highlighter stroke drawn after the headline */
.mark {
  background: linear-gradient(transparent 60%, var(--mark) 60%) no-repeat;
  background-size: 0 100%;
  animation: mark 1s 900ms var(--ease-in-out) forwards;
}

@keyframes mark {
  to {
    background-size: 100% 100%;
  }
}

.portrait {
  width: 170px;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 999px 999px 16px 16px;
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.35);
  transform: rotate(-3deg);
  transition: transform 500ms;
}

.portrait:hover {
  transform: rotate(0) scale(1.03);
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta {
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.text-link {
  padding-bottom: 2px;
  border-bottom: 1px solid var(--line-2);
  font-size: 14px;
  color: var(--ink-2);
  cursor: pointer;
  transition: border-color 300ms;
}

.text-link:hover {
  border-color: var(--ink);
}

@media only screen and (max-width: 1000px) {
  .foot {
    grid-template-columns: 1fr auto;
  }

  .intro {
    grid-column: span 2;
  }
}

@media only screen and (max-width: 600px) {
  .hero {
    padding: 52px 0 44px;
  }

  .foot {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .intro {
    grid-column: auto;
  }

  .portrait {
    width: 130px;
  }

  .cta {
    justify-self: start;
    align-items: flex-start;
  }
}
</style>
