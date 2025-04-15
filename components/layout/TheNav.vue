<template>
  <section class="nav-wrapper">
    <section class="nav">
      <!-- <div class="burger-menu">
				<div class="line1"></div>
				<div class="line2"></div>
				<div class="line3"></div>
			</div> -->
      <div class="floating-nav">
        <nuxt-icon @click="scroll('#intro')" class="icon" name="house" filled></nuxt-icon>
        <nuxt-icon @click="scroll('#about')" class="icon" name="person" filled></nuxt-icon>
        <nuxt-icon @click="scroll('#experience')" class="icon" name="work" filled></nuxt-icon>
        <nuxt-icon @click="scroll('#education')" class="icon" name="study" filled></nuxt-icon>
        <nuxt-icon @click="scroll('#skills')" class="icon skill" name="skills" filled></nuxt-icon>
        <!-- <nuxt-icon @click="scroll('#projects')" class="icon" name="projects" filled></nuxt-icon> -->
        <nuxt-icon @click="scroll('#contact')" class="icon" name="contact" filled></nuxt-icon>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useScroller } from '~/composables/useScroller';

const { scroll } = useScroller();
</script>

<style scoped>
.nav-wrapper {
  position: relative;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
}
.nav {
  position: sticky;
  top: 15%;

  height: fit-content;
}
.burger-menu {
  display: flex;
  width: 49px;
  height: 49px;
  overflow: hidden;
  border-radius: 33px;
  border: 1px solid var(--gray-900);
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5px 21px;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.line1,
.line2,
.line3 {
  width: 21px;
  height: 2px;
  border-radius: 2px;
  background: var(--gray-900);
  flex-shrink: 0;
}
.floating-nav {
  display: flex;
  width: 49px;
  height: 550px;
  overflow: hidden;
  padding: 31px 0;
  border-radius: 33px;
  border: 0.5px solid var(--gray-700);
  background: rgba(10, 10, 10, 0.091);
  backdrop-filter: blur(10px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.icon {
  cursor: pointer;
}
.icon :deep(svg path) {
  fill: var(--gray-700);
  transition: all 200ms ease-in-out;
}
.skill :deep(svg path) {
  stroke: var(--gray-700);
}
.skill:hover :deep(svg path) {
  stroke: var(--primary);
}
.icon:hover :deep(svg path) {
  fill: var(--primary);
}
@media only screen and (max-width: 1088px) {
  .nav-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;

    height: auto;

    padding: 1rem 0;

  }
  .floating-nav {
    flex-direction: row;
    height: 49px;
    width: 90vw;
    justify-content: space-evenly;
  }
  .nav {
    top: 90%;
    bottom: 0;
  }
}
</style>
