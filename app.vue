<template>
	<LoadingModal v-if="loading"></LoadingModal>
	<div class="layout">
		<InfoCard></InfoCard>
		<TheContent></TheContent>
		<TheNav></TheNav>
	</div>
	<TheFooter></TheFooter>
</template>

<script>
import { mapState } from "pinia";
// import { useModalStore } from "~/stores";

export default {
	computed: {
		...mapState(useModalStore, ["loading"]),
	},
};
</script>

<style>
@import "normalize.css";
* {
	box-sizing: border-box;
}
html {
	background: var(--dark);
	scroll-behavior: smooth;
	scroll-padding-top: 5rem;
	overflow-x: hidden;
}
.nuxt-icon svg {
	font-size: 1.3rem;
	margin-bottom: 0;
	vertical-align: middle;
}
</style>

<style scoped>
.layout {
	display: grid;
	grid-template-columns: 2fr 4fr 4rem;
	
	align-items: start;
	
}
</style>
~/store/scroll ~/store/modal
