<template>
	<div class="flex justify-center items-center text-center">
		<div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
			&copy; {{ copyrightDate }}
			<a href="https://stoman.me" target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">
				{{ author }}
			</a>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

// Define reactive properties
const copyrightDate = ref(new Date().getFullYear());
const author = ref('Alpha');


</script>

<style lang="scss" scoped></style>