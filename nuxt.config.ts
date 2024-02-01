// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["nuxt-icons", "@pinia/nuxt", "nuxt-aos"],
	css: ["~/assets/css/main.css"],
	components: [
		{ path: "~/components/sections", pathPrefix: false },
		{ path: "~/components/layout", pathPrefix: false },
		{ path: "~/components/modal", pathPrefix: false },
	],
	nuxtIcons: {
		class: "icon",
	},
	app: {
		head: {
			title: "Gui Web Dev",
		},
	},
	pinia: {
		storesDirs: ["./stores/**"],
	},
	aos: {
		duration: 800,
		easing: "ease-in-out",
	},
	nitro: {
		preset: "firebase",
		firebase: {
			gen: 2,
			nodeVersion: "18",
		},
	},
});
