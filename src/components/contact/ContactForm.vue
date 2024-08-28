<template>

	<div class="lg:px-24 overflow-hidden">
		<form @submit.prevent="openWhatsApp" class="p-8 rounded-lg shadow-md text-primary-dark dark:text-primary-light">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-semibold text-gray-500 dark:text-white">
					WHATSAPP ME
				</h2>
				<p class="mt-4 text-lg leading-7 max-w-2xl mx-auto">
					Send me a message via WhatsApp and I'll get back to you asap!
				</p>
			</div>
			<div class="grid grid-cols-1 gap-6 mb-6">
				<div>
					<label for="name" class="block text-left text-sm font-medium">Name</label>
					<input type="text" id="name" v-model="form.name" required
						class="text-primary-dark mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
				</div>
				<div>
					<label for="message" class="block text-left text-sm font-medium">Message</label>
					<textarea id="message" v-model="form.message" rows="4" required
						class="text-primary-dark mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
				</div>
			</div>
			<div class="flex justify-center">
				<button type="submit"
					class="py-2 px-4 bg-whatsapp text-white font-bold rounded-xl shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
					Send Message via WhatsApp
				</button>
			</div>

		</form>
	</div>

</template>

<script setup>
import { ref } from 'vue';


const form = ref({
	name: '',
	message: ''
});

const whatsappNumber = '+255718583861'; // Replace with your WhatsApp number in international format

const openWhatsApp = () => {
	const { name, message } = form.value;
	const whatsappMessage = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
	const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
	window.open(url, '_blank');
};
</script>

<style lang="scss" scoped></style>
