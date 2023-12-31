<template>
	<div class="layout">
		<InfoCard></InfoCard>
		<TheContent></TheContent>
		<TheNav></TheNav>
	</div>
	<TheFooter></TheFooter>
</template>

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
