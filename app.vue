<template>
	<NuxtPage />
</template>

<script setup lang="ts">
useState("loading", () => false);
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

~/store/scroll ~/store/modal
