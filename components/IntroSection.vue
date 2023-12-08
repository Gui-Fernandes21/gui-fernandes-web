<template>
	<secttion class="intro">
		<SectionToast>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="11"
				viewBox="0 0 13 11"
				fill="none"
			>
				<path
					d="M5.2 11V7.11765H7.8V11H11.05V5.82353H13L6.5 0L0 5.82353H1.95V11H5.2Z"
					fill="#B1B1B1"
				/>
			</svg>
			<span class="body-text bold">Intro</span>
		</SectionToast>

		<header>
			<h1 class="heading-0">
				Hello, I'm <span class="primary-text">Gui!</span> I'm a
				<span class="primary-text">Web</span> Developer
			</h1>
			<span class="body-text">
				I build Web Apps, Code Beautifully, Good Team Player, and Love what I
				do!
			</span>
		</header>

		<div class="wrapper">
			<div
				class="about-me-prompt"
				:class="activeClass"
				@mouseover="activate"
				@mouseleave="deactivate"
			>
				<h3 :class="activeClass">About me</h3>
				<div class="arrow-container">
					<div class="left" :class="activeClass"></div>
					<div class="right" :class="activeClass"></div>
				</div>
			</div>
		</div>
	</secttion>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		activate() {
			this.isActive = true;
		},
		deactivate() {
			this.isActive = false;
		},
	},
	computed: {
		activeClass() {
			return this.isActive ? "active" : "";
		},
	},
};
</script>

<style scoped>
.intro {
	width: 100%;
}
header > h1 {
	margin: 1rem 0;
}
header > span {
	color: var(--gray-300);
}
.wrapper {
	margin: 3rem 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.about-me-prompt {
	display: flex;
	justify-content: center;
	flex-direction: column;
	border: 1px solid var(--gray-900);
	border-radius: 15px;
	padding: 1rem 2rem 3.5rem;
	cursor: pointer;
}
.about-me-prompt > h3 {
	font-family: "Montserrat", sans-serif;
	color: var(--gray-700);
	text-align: center;
}
.arrow-container {
	display: flex;
	justify-content: space-around;
	/* border: 1px solid var(--gray-300); */
}
.arrow-container > .left,
.arrow-container > .right {
	width: 2rem;
	height: 5px;
	background: var(--gray-700);
	position: absolute;
	border-radius: 33px;
	margin: auto;
}
.left {
	transform: translateX(-10px) translateY(10px) rotate(45deg);
}
.left.active {
	background: var(--primary);
}
.right {
	transform: translateX(10px) translateY(10px) rotate(-45deg);
}
.right.active {
	background: var(--primary);
}
.about-me-prompt > h3.active {
	color: var(--primary);
}
.about-me-prompt.active {
	color: var(--primary);
	border: 1px solid var(--primary);
}
</style>
