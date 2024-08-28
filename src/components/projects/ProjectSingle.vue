<template>

	<router-link :to="{ name: 'single-project', params: { id: project.id } }"
		class="project-slide rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
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

<style lang="scss" scoped></style>
