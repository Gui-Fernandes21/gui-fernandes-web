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
		<div class="img-wrapper">
			<img src="/images/portfolio-pic-b&w.JPG?url" alt="">
		</div>
	</div>
</template>

<style scoped>
header {
  display: flex;
	justify-content: space-between;
	/* background-color: #7fffd44e; */
	margin: 1.3rem 2rem;
	user-select: none;
}
img {
	width: 209px;
	height: 209px;
	flex-shrink: 0;
	border-radius: 36px;
}
.card {
	width: 391px;
	height: 527px;
	overflow: hidden;
	border-radius: 60px;
	box-shadow: 0px 0px 9.3px 1px rgba(171, 171, 171, 0.25);
	background: var(--dark);
}
.description-role {
	width: 4rem;
	color: var(--gray-300);
	text-align: center;
	font-family: "Playfair", serif;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
.img-wrapper {
	padding: 1rem;
	background-color: #7fffd44e;
	text-align: center;
}
</style>
