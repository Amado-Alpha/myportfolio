<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 overflow-hidden">
		<div class="mb-10 sm:mb-0" v-for="projectImage in projectImages" :key="projectImage.id">
			<img :src="projectImage.img" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}" />
		</div>
	</div>
</template>


<script setup>
// export default {
// 	props: ['projectImages'],
// };

const props = defineProps({
	projectImages: Object,
})
</script>
