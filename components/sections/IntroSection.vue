<template>
  <section id="intro" data-aos="fade-left" data-aos-delay="600">
    <SectionToast>
      <nuxt-icon class="icon" name="house" filled></nuxt-icon>
      <span class="body-text bold">Intro</span>
    </SectionToast>

    <header>
      <h1 class="heading-0">Hello, I am <span class="primary-text">Gui!</span> a <span class="primary-text">Software</span> Developer</h1>
      <!-- <h1 class="heading-1">Welcome to my portfolio</h1> -->
      <span class="body-text"> Software Developer | Clean Code Advocate | Collaborative Professional</span>
    </header>

    <div class="wrapper">
      <div class="about-me-prompt" @click="scroll('#about')">
        <h3>About me</h3>
        <div class="arrow-container">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </div>

    <div class="statistics-wrapper">
      <div class="statistics">
        <div class="experience">
          <h1>4+</h1>
          <span class="body-text">Years of Experience</span>
        </div>
        <div class="projects">
          <h1>12+</h1>
          <span class="body-text">Developed Projects</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scroll } = useScroll();
</script>

<style scoped>
.icon :deep(svg) {
  font-size: 1rem;
}
.icon :deep(svg path) {
  fill: var(--gray-500);
}
header > h1 {
  margin: 1rem 0;
}
header > span {
  color: var(--gray-300);
}
.statistics-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.wrapper {
  margin: 3rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.about-me-prompt {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--gray-900);
  border-radius: 15px;
  padding: 1rem 2rem 3.5rem;
  cursor: pointer;
  user-select: none;
  transition: all 200ms ease-in-out;
}
.about-me-prompt:hover {
  border: 1px solid var(--primary);

  h3 {
    color: var(--primary);
  }

  .right,
  .left {
    background: var(--primary);
  }
}
.about-me-prompt > h3 {
  font-family: 'Montserrat', sans-serif;
  color: var(--gray-700);
  text-align: center;
  transition: all 200ms ease-in-out;
}
.arrow-container {
  display: flex;
  justify-content: space-around;
}
.arrow-container > .left,
.arrow-container > .right {
  width: 2rem;
  height: 5px;
  background: var(--gray-700);
  position: absolute;
  border-radius: 33px;
  margin: auto;
  transition: all 200ms ease-in-out;
}
.left {
  transform: translateX(-10px) translateY(10px) rotate(45deg);
}
.right {
  transform: translateX(10px) translateY(10px) rotate(-45deg);
}
.statistics {
  display: flex;
  gap: 2rem;
  margin: auto 2rem;

  text-align: center;
}
.statistics h1 {
  color: var(--primary);
  font-family: 'Source Sans 3', sans-serif;
  font-size: 72px;
  font-weight: 700;
  margin: 0;
}
.statistics span {
  color: var(--gray-300);
}

@media only screen and (max-width: 680px) {
  #intro {
    width: 90vw;
    margin: auto;
  }
  header > span {
    width: 55%;
    display: block;
  }
}
</style>
