import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
	state() {
		return {
			loading: false
		}
	},
	actions: {
		setLoading(boo) {
			this.loading = boo;
		}
	}
});