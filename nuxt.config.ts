// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-10',
  devtools: { enabled: false },
  modules: ['nuxt-icons', 'nuxt-aos', 'motion-v/nuxt', '@nuxt/fonts', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/validation.ts'],
  components: [
    { path: '~/components/sections', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/ui', pathPrefix: false }
  ],
  runtimeConfig: {
    app: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID
    }
  },
  nuxtIcons: {
    class: 'icon'
  },
  app: {
    head: {
      title: 'Gui Fernandes · Software Engineer, AI & Machine Learning',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }, { name: 'description', content: 'Software engineer specialising in AI & Machine Learning.' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  aos: {
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60
  },
  vite: {
    // aos ships as CommonJS and pnpm doesn't hoist it, so pre-bundle it through nuxt-aos for dev
    optimizeDeps: {
      include: ['nuxt-aos > aos']
    }
  },
  ssr: true,
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      nodeVersion: '22',
      serverFunctionName: 'ssr'
    }
  }
});
