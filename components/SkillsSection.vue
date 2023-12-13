<template>
	<div id="skills" class="section-wrapper">
		<SectionToast>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="17"
				viewBox="0 0 12 17"
				fill="none"
			>
				<path
					d="M11 1V16M6 7V16M1 10V16"
					stroke="#B1B1B1"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			<span class="body-text bold">Skills</span>
		</SectionToast>

		<div class="content-wrapper">
			<div class="skill" v-for="icon in iconsList">
				<div class="card-skill" >
					<nuxt-icon class="icon" :name="icon.iconName" filled></nuxt-icon>
					<h3 class="heading-3">{{ icon.percentage }}%</h3>
				</div>
				<p class="heading-4">{{ icon.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import IconsProperties from '@/IconsProperties.json';

export default {
	data() {
		return {

		}
	},
	computed: {
		iconsList() {
			return IconsProperties.skills;
		}
	}
}
</script>

<style scoped>
.card-skill {
	display: inline-flex;
	padding: 2rem;
	flex-direction: column;
	align-items: center;
	gap: 34px;
	border-radius: 31px;
	transition: 250ms ease-in-out border;
	border: 1px solid var(--gray-900);
}
.card-skill:hover {
	border: 1px solid var(--primary);
	color: var(--primary);
}
.card-skill > h3 {
	font-family: "Source Sans 3", sans-serif;
	margin: 0;
}
.skill{
	text-align: center;
}
.icon :deep(svg)  {
	font-size: 3rem;
  margin-bottom: 0;
	vertical-align: middle;
}
.content-wrapper {
	flex-wrap: wrap;
	justify-content: center;
}

</style>
