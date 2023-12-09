<template>
	<div class="layout">
    <InfoCard></InfoCard>
		<TheContent></TheContent>
		<TheNav></TheNav>
	</div>
</template>

<style>
@import 'normalize.css';
html {
	background: var(--dark);
}
.nuxt-icon svg {
	/* width: 3em; */
	/* height: 3em; */
  /* margin-bottom: 0.125em; */
	font-size: 1.3rem;
  margin-bottom: 0;
	vertical-align: middle;
}
</style>

<style scoped>
.layout {
	display: flex;
	justify-content: space-between;
}
</style>