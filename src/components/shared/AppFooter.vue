<template>
	<div class="container mx-auto px-4 sm:px-8 lg:px-12 overflow-hidden">
		<div class="pt-16 sm:pt-20 pb-8 mt-16 border-t-2 border-primary-light dark:border-secondary-dark">
			<!-- Footer main content -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20">
				<!-- Contact Info -->
				<div class="flex flex-col items-center sm:items-start">
					<p class="font-semibold text-2xl sm:text-3xl text-gray-500 dark:text-primary-light mb-4">
						Contacts</p>
					<div class="flex items-center mb-2">
						<i data-feather="phone" class="w-4 h-4 mr-2 text-primary-dark dark:text-primary-light"></i>
						<p class="text-lg sm:text-base text-primary-dark dark:text-primary-light">+255 718 583 861</p>
					</div>
					<div class="flex items-center">
						<i data-feather="mail" class="w-4 h-4 mr-2 text-primary-dark dark:text-primary-light"></i>
						<p class="text-lg sm:text-base text-primary-dark dark:text-primary-light">stanalphax@gmail.com
						</p>
					</div>
				</div>

				<!-- Social Links -->
				<div class="flex flex-col items-center">
					<p
						class="font-general-semibold text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-primary-light mb-4 sm:mb-5">
						Socials
					</p>
					<ul class="flex justify-center gap-3 sm:gap-6">
						<a v-for="social in socials" :key="social.id" :href="social.url" target="__blank"
							class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-3 sm:p-4 duration-500">
							<i :data-feather="social.icon" class="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8"></i>
						</a>
					</ul>
				</div>

				<!-- Footer Description -->
				<div class="flex flex-col items-center sm:items-end">
					<p
						class="text-md sm:text-sm lg:text-base text-primary-dark dark:text-primary-light max-w-xs sm:max-w-sm lg:max-w-md">
						<span class="icon-align">
							<i data-feather="key"
								class="w-4 h-4 mr-2 align-text-middle text-primary-dark dark:text-primary-light"></i>
						</span>
						<span class="text-lg italic sm:text-base">
							I'm a passionate developer, open minded and
							flexible to take on new challenges to bring innovative ideas to life.
						</span>

					</p>
				</div>
			</div>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<script setup>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
import { socialLinks } from '../../data/socialLinks';
import { onMounted } from 'vue';


const socials = socialLinks;

onMounted(() => {
	feather.replace();
});

</script>

<style scoped>
.icon-align {
	display: inline-flex;
	align-items: center;
}
</style>