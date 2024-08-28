<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14 overflow-hidden">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
					Features
				</p>
				<ul class="leading-loose">
					<li v-for="info in projectInfo.featureDescriptions" :key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light flex">

						<i data-feather="check-circle" class="mr-4 w-6 h-8"></i>
						<span class="flex-1">{{ info?.description }}</span>
					</li>
				</ul>
			</div>

			<!-- Single project objectives -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					Objective
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo?.objectivesDetails }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					Tools and technologies
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo?.technologies?.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<a :href="projectInfo?.link"
					class="font-general-regular hover:text-blue-700 text-blue-500 dark:text-ternary-light dark:hover:text-blue-700">
					{{ projectInfo?.link }}
				</a>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<p v-for="projectDetail in projectInfo.projectDetails" :key="projectDetail.id"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{ projectDetail.details }}
			</p>
		</div>
	</div>
</template>


<script setup>
import feather from 'feather-icons';
import { onMounted, onUpdated } from 'vue';

const props = defineProps({
	projectInfo: Object,
});

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});
</script>
