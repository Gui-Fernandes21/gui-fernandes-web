<template>
  <section id="intro">
    <SectionToast>
      <nuxt-icon class="icon" name="house" filled></nuxt-icon>
      <span class="body-text bold">Intro</span>
    </SectionToast>

    <motion.header :initial="{ transform: ' translateX(100px) ', opacity: 0 }" :in-view="{ transform: 'translateX(0)', opacity: 1 }" :transition="{ ease: 'easeOut', duration: 0.6 }">
      <h1 class="heading-0">Hello, I am <span class="primary-text">Gui!</span> a <span class="primary-text">Software</span> Developer</h1>
      <!-- <h1 class="heading-1">Welcome to my portfolio</h1> -->
      <span class="body-text"> Software Developer | Clean Code Advocate | Collaborative Professional</span>
    </motion.header>

    <div class="wrapper">
      <!-- <div class="about-me-prompt"> -->
      <div class="about-me-prompt" @click="downloadCV">
        <h3>About me</h3>
        <div class="arrow-container">
          ``
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </div>

    <div class="statistics-wrapper">
      <div ref="statistics" class="statistics">
        <motion.div :initial="{ transform: ' translateX(150px) ', opacity: 0 }" :transition="{ ease: 'easeOut', duration: 1 }" :in-view="{ transform: ' translateX(0) ', opacity: 1 }" class="experience">
          <h1>{{ expCount }}+</h1>
          <span class="body-text">Years of Experience</span>
        </motion.div>
        <motion.div :initial="{ transform: ' translateX(150px) ', opacity: 0 }" :transition="{ ease: 'easeOut', duration: 1 }" :in-view="{ transform: ' translateX(0) ', opacity: 1 }" class="projects">
          <h1>{{ projCount }}+</h1>
          <span class="body-text">Developed Projects</span>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion, useInView, animate } from 'motion-v';
import { ref as firebaseRef, getDownloadURL, getStorage } from 'firebase/storage';

const { $firebase } = useNuxtApp();

const expCount = ref(0);
const projCount = ref(0);
const statistics = ref();
const expInView = useInView(statistics, { once: false });

watch(expInView, (inView): void => {
  if (inView) {
    animate(expCount.value, 4, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        expCount.value = Math.floor(value);
      }
    });
    animate(projCount.value, 12, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        projCount.value = Math.floor(value);
      }
    });
  } else {
    expCount.value = 0;
    projCount.value = 0;
  }
});

const downloadCV = async (): Promise<void> => {
  if (typeof window == undefined) return;
  const { storage } = $firebase;
  const cvRef = firebaseRef(storage, '/v1.0_cv-guifernandes-full-stack.pdf');
  try {
    const url = await getDownloadURL(cvRef);

    window.open(url, '_blank');
  } catch (err) {
    console.error(err);
  }
};
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
    /* margin: auto; */
  }
  header > span {
    width: 55%;
    display: block;
  }
}
</style>
