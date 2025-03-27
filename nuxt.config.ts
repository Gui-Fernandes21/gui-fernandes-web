// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-10',
  devtools: { enabled: true },
  modules: ['nuxt-icons', '@pinia/nuxt', 'nuxt-aos', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  components: [
    { path: '~/components/sections', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/modal', pathPrefix: false }
  ],
  nuxtIcons: {
    class: 'icon'
  },
  app: {
    head: {
      title: 'Gui Web Dev',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }, { name: 'description', content: '' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,400;0,5..1200,500;0,5..1200,600;1,700;0,5..1200,700;0,5..1200,800;0,5..1200,900;1,5..1200,400;1,5..1200,500;1,5..1200,600;1,5..1200,700;1,5..1200,800;1,5..1200,900'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
        }
      ]
    }
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  aos: {
    duration: 800,
    easing: 'ease-in-out'
  },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      nodeVersion: '18'
    }
  }
});