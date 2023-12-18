// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["nuxt-icons", "@pinia/nuxt"],
	css: ["~/assets/css/main.css"],
	nuxtIcons: {
		class: "icon",
	},
	app: {
		head: {
			title: "Gui Web Dev",
		},
	},
	nitro: {
		preset: 'firebase',
    firebase: {
      gen: 2,
			nodeVersion: '18'
    }
  }
});
