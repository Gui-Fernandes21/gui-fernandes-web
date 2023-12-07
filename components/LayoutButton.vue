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
	padding: 7px 41px;
	border-radius: 12px;
	/* background: var(--primary); */
	justify-content: center;
	align-items: center;
	gap: 18px;
}

.filled {
	background: var(--primary);
}

.outlined {
  color: var(--primary);
	background: transparent;
	border: 2px solid var(--primary);
}
</style>
