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
html {
	background: var(--dark);
	scroll-behavior: smooth;
	scroll-padding-top: 5rem;
}
.nuxt-icon svg {
	font-size: 1.3rem;
	margin-bottom: 0;
	vertical-align: middle;
}
</style>

<style scoped>
.layout {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	overflow-x: hidden;
}
</style>
~/store/scroll ~/store/modal
