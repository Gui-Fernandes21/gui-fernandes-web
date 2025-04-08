<template>
  <div class="content">
    <IntroSection></IntroSection>
    <AboutSection></AboutSection>
    <ExperienceSection></ExperienceSection>
    <EducationSection></EducationSection>
    <SkillsSection></SkillsSection>
    <!-- <ProjectsSection></ProjectsSection> -->
    <ContactSection></ContactSection>
  </div>
</template>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem auto;
  width: 94dvh;
}
@media only screen and (max-width: 768px) {
  .content {
    width: 100%;
  }
}
</style>