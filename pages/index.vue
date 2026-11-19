<template>
  <TheHeader />
  <main>
    <HeroSection />
    <SkillsTicker />
    <SpecialismSection />
    <FeaturedSection />
    <WorkSection />
    <ExperienceSection />
    <ToolkitSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Gui Fernandes · Software Engineer, AI & Machine Learning',
  description: 'AI & software engineer specialising in Machine Learning. Builds applied AI end to end: RAG, agent workflows, prompt engineering, model evaluation and guardrails, with Python, FastAPI and Vue/Nuxt.',
  ogTitle: 'Gui Fernandes · Software Engineer, AI & Machine Learning',
  ogDescription: 'Applied AI end to end: RAG, agent workflows, model evaluation and guardrails, from model to interface.',
  ogImage: 'https://gui-fernandes-web.web.app/images/profilesocial-me.jpg',
  ogUrl: 'https://gui-fernandes-web.web.app/',
  ogType: 'website',
  twitterCard: 'summary_large_image'
});

useHead({
  link: [{ rel: 'canonical', href: 'https://gui-fernandes-web.web.app/' }]
});
</script>
