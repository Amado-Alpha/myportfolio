<script setup>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';
import { ref, onMounted } from 'vue';

const contacts = ref([
	{
		id: 1,
		name: 'Dar Es Salaam, Tanzania',
		icon: 'map-pin',
	},
	{
		id: 2,
		name: 'stanalphax@gmail.com',
		icon: 'mail',
	},
	{
		id: 3,
		name: '+255 718 583 861',
		icon: 'phone',
	},
]);


onMounted(() => {
	feather.replace();
});


</script>

<template>
	<div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
