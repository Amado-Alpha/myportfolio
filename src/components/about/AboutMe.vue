<script setup>
import { ref } from 'vue';


const bios = ref([
	{
		id: 1,
		bio:
			"I am a passionate and skilled software developer with a strong foundation in modern web and mobile technologies. My expertise spans across PHP, Vue.js, Laravel, Javascript, tailwind CSS and Flutter, enabling me to craft seamless and dynamic applications tailored to meet diverse client needs. With a Bachelor's degree in Computer Engineering from the esteemed Dar Es Salaam Institute of Technology in Tanzania, I possess a solid technical background and a deep understanding of the principles that drive innovation in the software industry",
	},
	{
		id: 2,
		bio:
			'Throughout my academic and professional journey, I have honed my skills in designing, developing, and deploying  software solutions that enhance user experiences. My work is characterized by a commitment to clean, efficient code and a dedication to continuous learning in the ever-evolving tech landscape.',
	},
]);


</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20 overflow-hidden">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
