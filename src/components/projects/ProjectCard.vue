<template>

	<router-link :to="{ name: 'project-details', params: { id: project.id } }"
		class="project-slide relative rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project" ref="">
		<div>
			<img :src="project.img" :alt="project.title" class="rounded-t-xl border-none" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category
				}}</span>
		</div>
		<!-- Conditionally display the 'Under Development' banner if the project isn't ready -->
		<div v-if="project.status != 'done'"
			class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-xl">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white animate-pulse mb-4" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M6.75 3.75h10.5m-9 16.5h7.5m-8.5 0a.75.75 0 00.75.75h8a.75.75 0 00.75-.75m-9-16.5a.75.75 0 01.75-.75h8a.75.75 0 01.75.75m-9 16.5V14a7.5 7.5 0 007.5 0v6.25m-7.5-16.5V10a7.5 7.5 0 007.5 0V3.75" />
			</svg>
			<span class="text-white text-2xl font-bold">Under development</span>
		</div>
	</router-link>

</template>


<script setup>

import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectSlide = ref(null);

const props = defineProps({
	project: Object,
})

onMounted(() => {
	if (projectSlide.value) {
		gsap.fromTo(
			projectSlide.value,
			{
				opacity: 0,
				y: 70,
				scale: 0.95,
				filter: "blur(10px)", // Start with blur
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				filter: "blur(0px)", // End blur
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: projectSlide.value,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none none",
				},
				// stagger: 0.2 // Stagger each item
			}
		);
	}
});

</script>


<style scoped></style>