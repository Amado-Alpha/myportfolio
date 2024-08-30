<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3 class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-lg
					sm:text-xl
					font-normal
					mb-4
				">
				Search projects by title or filter by category
			</h3>
			<div class="
					flex
					flex-col
					lg:flex-row
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				">
				<div class="flex justify-between gap-2">
					<span class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							">
						<i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i>
					</span>
					<input v-model="searchProject" class="font-general-medium
						pl-3
						pr-1
						mx-auto
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-lg
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						" id="name" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name" />
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<p class="text-lg text-center text-gray-600 dark:text-gray-300 mt-12" v-if="!filteredProjects.length"> No
			projects match
			your search criteria. Please try again with different keywords or categories.
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
		</div>
	</section>
</template>


<script setup>

import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectCard from './ProjectCard.vue';
import projects from '../../data/projects';
import { ref, computed, onMounted } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const projectsData = ref(projects);
const projectsHeading = ref('Projects');
const selectedCategory = ref('');
const searchProject = ref('');


// Get the filtered projects
const filteredProjects = computed(() => {
	if (selectedCategory.value) {
		console.log(filterProjectsByCategory())
		return filterProjectsByCategory();
	} else if (searchProject.value) {
		return filterProjectsBySearch();
	}
	return projectsData.value;
})


// Filter projects by category
const filterProjectsByCategory = function () {
	return projectsData.value.filter((item) => {
		let category =
			item.category.toLowerCase();
		console.log(category);
		return category.includes(selectedCategory.value.toLowerCase());
	});
};


// Filter projects by title search
const filterProjectsBySearch = function () {
	let project = new RegExp(searchProject.value, 'i');
	return projectsData.value.filter((el) => el.title.match(project));
};

onMounted(() => {

	const items = document.querySelectorAll('.project-item');

	items.forEach((item, index) => {
		gsap.from(item, {
			scrollTrigger: {
				trigger: item,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none none",
			},
			opacity: 0,
			y: 70,
			scale: 0.95,
			duration: 0.6,
			delay: index * 0.2, // Delay each item based on its index
			ease: "power2.out",
			filter: "blur(10px)", // Start with blur
			clearProps: "filter" // Clear blur after animations
		});
	});

	feather.replace();
});

</script>

<style scoped></style>
