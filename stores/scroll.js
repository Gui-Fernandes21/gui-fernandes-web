import { defineStore } from "pinia";

export const useScrollStore = defineStore("scroll", {
	actions: {
		scroll(selector) {
			const section = document.querySelector(selector);
			if (section) section.scrollIntoView({ behavior: "smooth" });
		},
	},
});
