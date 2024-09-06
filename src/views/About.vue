<template>

	<!-- About me -->
	<div class="container mx-auto">
		<AboutMe />
	</div>

	<!-- About counter -->
	<!-- <AboutCounter /> -->

	<AboutSkills />
	<!-- Clients -->
	<!-- <div class="container mx-auto">
			<AboutClients />
		</div> -->

</template>


<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';

// Importing components
import AboutMe from '@/components/about/AboutMe.vue';
import AboutCounter from '@/components/about/AboutCounter.vue';
import AboutSkills from '../components/about/AboutSkills.vue';
import AboutClients from '@/components/about/AboutClients.vue';



// Lifecycle hooks
onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});
</script>


<style scoped></style>
