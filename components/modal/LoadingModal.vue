<template>
	<div class="wrapper">
		<div class="card">
			<span class="loader"></span>
			<p class="body-text">Loading...</p>
			<!-- <span class="body-text bold close" @click="closeModal">+</span> -->
		</div>
	</div>
</template>

<script>
import { mapActions } from "pinia";
export default {
	methods: {
		...mapActions(useModalStore, ['setLoading']),
		
		closeModal() {
			this.setLoading(false);
		}
	}
};
</script>

<style scoped>
.wrapper {
	background: #00000069;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;

	width: 100vw;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	user-select: none;
}

.card {
	position: relative;
	width: 15rem;
	height: 15rem;

	background-color: var(--gray-100);
	border-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;

	p {
		color: var(--gray-900);
		font-weight: bold;
	}
}

.close {
	position: absolute;
	top: 2%;
	right: 7%;

	font-size: 24px;
	cursor: pointer;

	transform: rotate(45deg);
}

.loader {
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	border: 3px solid;
	border-color: #fff #fff transparent;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
}
.loader::after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	border: 3px solid;
	border-color: transparent var(--primary) var(--primary);
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	animation: rotationBack 0.5s linear infinite;
	transform-origin: center center;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes rotationBack {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-360deg);
	}
}
</style>
