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
	height: 2rem;
	width: 10rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
	
	border: 1px solid var(--gray-900);
	border-radius: 33px;
	color: var(--gray-500);

	text-transform: uppercase;
	font-weight: 100;
	font-family: "Montserrat", sans-serif;
}
</style>
