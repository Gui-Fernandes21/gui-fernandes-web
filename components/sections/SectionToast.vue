<template>
	<section>
		<slot />
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
	padding: 4px 18px;
	height: 1rem;
	width: 86px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
	gap: 8px;
	border: 1px solid var(--gray-900);
	border-radius: 33px;
	color: var(--gray-500);
}
</style>
