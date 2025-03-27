<template>
  <LoadingModal v-if="loading"></LoadingModal>
  <div class="layout">
    <InfoCard></InfoCard>
    <TheContent></TheContent>
    <TheNav></TheNav>
  </div>
  <TheFooter></TheFooter>
</template>

<script>
import { mapState } from "pinia";

export default {
	computed: {
		...mapState(useModalStore, ["loading"]),
	},
};
</script>

<style scoped>
.layout {
	display: grid;
	grid-template-columns: 2fr 4fr 4rem;
	
	align-items: start;
	
}
</style>