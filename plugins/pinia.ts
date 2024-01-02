import { useScrollStore } from "~/stores/scroll";

export default defineNuxtPlugin(({ $pinia }) => {
	return {
		provide: {
			store: useScrollStore($pinia),
		},
	};
});
