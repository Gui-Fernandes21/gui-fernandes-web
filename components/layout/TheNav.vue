<template>
	<section class="nav-wrapper">
		<section class="nav">
			<!-- <div class="burger-menu">
				<div class="line1"></div>
				<div class="line2"></div>
				<div class="line3"></div>
			</div> -->
			<div class="floating-nav">
				<nuxt-icon
					@click="scroll('#intro')"
					class="icon"
					name="house"
					filled
				></nuxt-icon>
				<nuxt-icon
					@click="scroll('#about')"
					class="icon"
					name="person"
					filled
				></nuxt-icon>
				<nuxt-icon
					@click="scroll('#experience')"
					class="icon"
					name="work"
					filled
				></nuxt-icon>
				<nuxt-icon
					@click="scroll('#education')"
					class="icon"
					name="study"
					filled
				></nuxt-icon>
				<nuxt-icon
					@click="scroll('#skills')"
					class="icon skill"
					name="skills"
					filled
				></nuxt-icon>
				<!-- <nuxt-icon @click="scroll('#projects')" class="icon" name="projects" filled></nuxt-icon> -->
				<nuxt-icon
					@click="scroll('#contact')"
					class="icon"
					name="contact"
					filled
				></nuxt-icon>
			</div>
		</section>
	</section>
</template>

<script>
import { mapActions } from "pinia";

export default {
	methods: {
		...mapActions(useScrollStore, ["scroll"]),
	},
};
</script>

<style scoped>
.nav-wrapper {
	width: 5rem;
	display: flex;
}
.nav {
	display: flex;
	position: fixed;
	flex-direction: column;
	align-items: center;
	height: calc(100dvh - 2rem);
	margin-top: 2rem;
	margin-right: 2rem;
}
.burger-menu {
	display: flex;
	width: 49px;
	height: 49px;
	overflow: hidden;
	border-radius: 33px;
	border: 1px solid var(--gray-900);
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 5px 21px;
	flex-shrink: 0;
	flex-wrap: wrap;
	margin-bottom: 1rem;
}
.line1,
.line2,
.line3 {
	width: 21px;
	height: 2px;
	border-radius: 2px;
	background: var(--gray-900);
	flex-shrink: 0;
}
.floating-nav {
	display: flex;
	width: 49px;
	height: 490px;
	overflow: hidden;
	padding: 31px 0;
	border-radius: 33px;
	border: 1px solid var(--gray-900);
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
}
.icon {
	cursor: pointer;
}
.icon :deep(svg path) {
	fill: var(--gray-900);
	transition: all 200ms ease-in-out;
}
.skill:hover :deep(svg path) {
	stroke: var(--primary);
}
.icon:hover :deep(svg path) {
	fill: var(--primary);
}
</style>
~/store/scroll ~/store/modal
