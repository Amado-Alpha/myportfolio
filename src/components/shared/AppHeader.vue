<template>
	<nav id="nav" class="sm:container sm:mx-auto mt-10 overflow-hidden">
		<!-- Header start -->
		<div class="z-10 xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center overflow-hidden">
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<!-- <div>
					<router-link to="/"><img v-if="theme === 'light'" src="@/assets/images/logo-dark.svg"
							class="w-24 h-24 " alt="Dark Logo" />
						<img v-else src="@/assets/images/logo-light.svg" class="w-auto " alt="Light Logo" />
					</router-link>
				</div> -->
				<router-link to="/">
					<i data-feather="home" class="mr-4 w-6 h-6 text-primary-dark dark:text-ternary-light"></i>
				</router-link>
				<!-- Theme switcher small screen -->
				<theme-switcher :theme="theme" @themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />

				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button @click="isOpen = !isOpen" type="button" class="focus:outline-none"
						aria-label="Hamburger Menu">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
							<path v-if="isOpen" fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"></path>
							<path v-if="!isOpen" fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
							</path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header links -->
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
				<!-- Hire me button -->
				<!-- <div class="hidden md:block">
					<Button title="Hire Me"
						class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						@click="showModal()" aria-label="Hire Me Button" />
				</div> -->

				<!-- Theme switcher large screen -->
				<theme-switcher :theme="theme" @themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
			</div>
		</div>

		<!-- Hire me modal -->
		<!-- <HireMeModal :showModal="showModal" :modal="modal" :categories="categories" aria-modal="Hire Me Modal" /> -->
	</nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import ThemeSwitcher from '../ThemeSwitcher';
import HireMeModal from '../HireMeModal.vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';


// Define reactive state
const isOpen = ref(false);
const theme = ref(localStorage.getItem('theme') || 'light');
const modal = ref(false);

const categories = [
	{ id: 1, value: 'web', name: 'Web Application' },
	{ id: 2, value: 'mobile', name: 'Mobile Application' },
	{ id: 3, value: 'ui-ux', name: 'UI/UX Design' },
	{ id: 4, value: 'branding', name: 'Branding & Anim' },
];

// Method to update theme
const updateTheme = (newTheme) => {
	theme.value = newTheme;
};

// Method to show or hide the modal
const showModal = () => {
	const html = document.getElementsByTagName('html')[0];
	if (modal.value) {
		html.classList.remove('overflow-y-hidden');
		modal.value = false;
	} else {
		html.classList.add('overflow-y-hidden');
		modal.value = true;
	}
};

// Lifecycle hooks
onMounted(() => {
	feather.replace();
	theme.value = localStorage.getItem('theme') || 'light';
});

// Watch for changes (optional if needed)
watch(theme, (newTheme) => {
	localStorage.setItem('theme', newTheme);
});
</script>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
