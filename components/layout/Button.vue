<template>
	<div class="button-wrapper" :class="outlinedMode">
		<div class="button-content">
			<p class="body-text bold">
				<nuxt-icon name="mail-icon" />
				<slot />
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		outline: {
			type: Boolean,
			required: false,
		},
	},
	computed: {
		outlinedMode() {
			return this.outline ? "outlined" : "filled";
		},
	},
};
</script>

<style scoped>
.button-wrapper {
	cursor: pointer;
	display: flex;
	width: 6rem;
	overflow: hidden;
	padding: 0 41px;
	border-radius: 12px;
	border: 2px solid var(--primary);
	/* background: var(--primary); */
	justify-content: center;
	align-items: center;
	transition: all 100ms ease-in-out;
}

.filled {
	background: var(--primary);
}

.outlined {
	color: var(--primary);
	background: transparent;
}

@media(hover: hover)  {
	
	.outlined:hover,
	.outlined:focus,
	.outlined:active {
		background: var(--primary);
		color: var(--dark);
	}
	
	.filled:hover,
	.filled:focus,
	.filled:active {
		color: var(--primary);
		background: transparent;
		border: 2px solid var(--primary);
	}
	
}
</style>
