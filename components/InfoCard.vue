<template>
	<div class="card">
		<header>
			<div class="name">
				<h1 class="heading-3">
					<span class="primary-text">Gui</span> Fernandes
				</h1>
			</div>
			<div class="role">
				<h2 class="description-role"> Front-End Developer</h2>
			</div>
		</header>
	</div>
</template>

<style scoped>
header {
  display: flex;

}
.card {
	width: 391px;
	height: 527px;
	overflow: hidden;
	border-radius: 60px;
	box-shadow: 0px 0px 9.3px 1px rgba(171, 171, 171, 0.25);
	background: var(--Dark, #1f1f21);
}
/* .name {
  margin: 3rem;
} */
.description-role {
	color: var(--gray-300);
	text-align: center;
	font-family: "Playfair", serif;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
</style>
