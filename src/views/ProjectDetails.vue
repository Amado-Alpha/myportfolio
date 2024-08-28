<template>
	<div class="container mx-auto mt-10 sm:mt-20">


		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Conditionally show the in-progress message -->
		<div v-if="projectInfo.status === 'ongoing'" class="" role="alert">
			<div class="flex flex-col items-center justify-center">
				<!-- Illustration -->
				<img src="@/assets/images/codeTyping.svg" alt="Project Under Development"
					class="w-64 h-64 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6" />

				<!-- Message -->
				<h1 class="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">This Project is Currently Under
					Development</h1>
				<p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
					I am working hard to bring this project to life. Check back soon for updates!
				</p>

				<!-- Optional Button to Navigate Back or Home -->
				<router-link to="/" class="text-primary dark:text-gray-100 font-medium hover:underline">
					Return to Homepage
				</router-link>
			</div>
		</div>

		<div v-else>
			<!-- Project gallery -->
			<ProjectGallery :projectImages="projectImages" />

			<!-- Project information -->
			<ProjectInfo :projectInfo="projectInfo" />

			<!-- Project related projects -->
			<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
		</div>
	</div>
</template>


<script setup>
import { ref, onMounted, onUpdated, computed } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';

const props = defineProps({
	id: {
		type: String,
		required: true
	}
});

const projectId = computed(() => Number(props.id));

const projectData = computed(() => {
	return projects.find(project => project.id === projectId.value);
});

console.log('Project Data:', projectData.value)


// Data properties
const singleProjectHeader = ref({
	singleProjectTitle: projectData.value?.title,
	singleProjectDate: 'Jul 26, 2021',
	singleProjectTag: projectData.value?.projectTag,
});

const projectImages = ref(projectData.value?.images);


const projectInfo = ref({

	featureDescriptions: projectData.value?.features,
	objectivesHeading: 'Objective',
	objectivesDetails: projectData.value?.projectObjective,
	technologies: projectData.value?.technologies,
	projectDetailsHeading: 'Brief description',
	projectDetails: projectData.value?.projectDetails,
	socialSharingsHeading: 'Link to live project',
	link: projectData.value?.link,
	status: projectData.value?.status,

	socialSharings: [
		{
			id: 1,
			name: 'Twitter',
			icon: 'twitter',
			url: 'https://twitter.com/realstoman',
		},
		{
			id: 2,
			name: 'Instagram',
			icon: 'instagram',
			url: 'https://instagram.com/realstoman',
		},
		{
			id: 3,
			name: 'Facebook',
			icon: 'facebook',
			url: 'https://facebook.com/',
		},
		{
			id: 4,
			name: 'LinkedIn',
			icon: 'linkedin',
			url: 'https://linkedin.com/',
		},
		{
			id: 5,
			name: 'Youtube',
			icon: 'youtube',
			url: 'https://www.youtube.com/c/StomanStudio',
		},
	],
});

const relatedProject = ref({
	relatedProjectsHeading: 'Related Projects',
	relatedProjects: [
		{
			id: 1,
			title: 'Mobile UI',
			img: require('@/assets/images/mobile-project-1.jpg'),
		},
		{
			id: 2,
			title: 'Web Application',
			img: require('@/assets/images/web-project-1.jpg'),
		},
		{
			id: 3,
			title: 'UI Design',
			img: require('@/assets/images/ui-project-2.jpg'),
		},
		{
			id: 4,
			title: 'Kabul Mobile App UI',
			img: require('@/assets/images/mobile-project-2.jpg'),
		},
	],
});

// Lifecycle hooks
onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});
</script>


<style scoped></style>
