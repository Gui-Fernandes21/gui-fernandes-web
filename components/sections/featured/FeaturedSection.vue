<template>
  <section id="featured" class="section">
    <div class="wrap">
      <SectionLabel num="02">Featured <em>project</em></SectionLabel>

      <article class="case" data-aos="fade-up">
        <div class="top">
          <div>
            <span class="mono">{{ project.eyebrow }}</span>
            <h3 class="serif">
              {{ project.title }} <em>{{ project.highlight }}</em>
            </h3>
            <p>{{ project.summary }} <InfoText :value="project.approach" /></p>

            <dl class="meta">
              <div v-for="item in project.meta" :key="item.label">
                <dt>{{ item.label }}</dt>
                <dd><InfoText :value="item.value" /></dd>
              </div>
            </dl>

            <div class="kpis">
              <div v-for="kpi in project.kpis" :key="kpi.label" class="kpi">
                <b class="serif"><InfoText :value="kpi.value" /></b>
                <span>{{ kpi.label }}</span>
              </div>
            </div>
          </div>

          <AllocationExplorer />
        </div>

        <ProjectPipeline :steps="project.pipeline" />

        <div class="links">
          <template v-for="link in project.links" :key="link.label">
            <PillButton v-if="!isTbd(link.href)" :href="link.href" :variant="link.primary ? 'bright' : 'on-dark'">{{ link.label }}</PillButton>
            <PillButton v-else :variant="link.primary ? 'bright' : 'on-dark'">
              {{ link.label }}
              <TbdTag>{{ link.href.tbd }}</TbdTag>
            </PillButton>
          </template>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { featuredProject as project } from '~/data/featured';
</script>

<style scoped>
.case {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background: var(--ink);
  color: #e9e6de;
}

/* Soft colour glows in the corners */
.case::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(640px 320px at 95% 0%, rgba(42, 234, 140, 0.16), transparent 60%), radial-gradient(520px 300px at 0% 100%, rgba(59, 111, 245, 0.14), transparent 60%);
}

.top {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
  padding: 52px;
}

.top > * {
  min-width: 0;
}

.mono {
  color: #8f8a80;
}

h3 {
  margin: 14px 0 16px;
  font-size: clamp(36px, 4.2vw, 58px);
  line-height: 1;
  letter-spacing: -0.025em;
  color: #fff;
}

h3 em {
  color: var(--bright);
}

p {
  color: #b9b4a9;
}

.meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 22px;
}

.meta div {
  min-width: 0;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
}

dt {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8f8a80;
}

dd {
  margin-top: 2px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  overflow-wrap: anywhere;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 14px;
}

.kpi {
  min-width: 0;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.kpi b {
  display: block;
  font-size: 28px;
  line-height: 1.1;
  color: #fff;
}

.kpi span {
  font-size: 11px;
  color: #8f8a80;
}

.links {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 26px 52px 44px;
}

@media only screen and (max-width: 1000px) {
  .top {
    grid-template-columns: 1fr;
    padding: 32px;
  }

  .links {
    padding: 24px 32px 32px;
  }
}

@media only screen and (max-width: 600px) {
  .top {
    padding: 22px;
  }

  .kpis {
    grid-template-columns: 1fr 1fr;
  }

  .links {
    padding: 22px 22px 26px;
  }
}
</style>
