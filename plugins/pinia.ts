import { useScrollStore } from "~/store";

export default defineNuxtPlugin(({ $pinia }) => {
	return {
		provide: {
			store: useScrollStore($pinia),
		},
	};
});
