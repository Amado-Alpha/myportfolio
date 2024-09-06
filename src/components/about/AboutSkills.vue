<template>
    <section class=" dark:bg-secondary-dark  py-12 overflow-hidden mt-12">
        <div class="container mx-auto px-4 sm:px-8 lg:px-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-gray-500 dark:text-gray-100 ">My Skills</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Skill Cards -->
                <div v-for="(skillCategory, index) in skillCategories" :key="index"
                    class="bg-white dark:bg-ternary-dark  rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-100">{{ skillCategory.title }}
                    </h3>
                    <ul>
                        <li v-for="(item, idx) in skillCategory.items" :key="idx"
                            class="text-gray-500 dark:text-gray-300 flex items-center ml-4">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <!-- Soft Skills with Icons and Descriptions -->
                <div class="col-span-1 md:col-span-2 sm:col-span-2 lg:col-span-3 bg-white  rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-100">Soft Skills</h3>
                    <div v-for="(skill, index) in skills.softSkills" :key="index"
                        class="mb-8 flex flex-col items-center">
                        <i :data-feather="skill.icon" class="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300"></i>
                        <h4 class="text-lg font-semibold text-gray-500 dark:text-gray-100 mb-2">{{ skill.name }}</h4>
                        <p class="text-gray-700 dark:text-gray-300 text-center">{{ skill.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import feather from 'feather-icons';
import { onMounted } from 'vue';

const skillCategories = [
    { title: 'Languages', items: ['PHP', 'JavaScript', 'SQL', 'HTML/CSS'] },
    { title: 'Frameworks & Libraries', items: ['Laravel', 'Slim', 'Vue.js', 'Tailwind CSS'] },
    { title: 'Databases', items: ['MySQL', 'PostgreSQL'] },
    { title: 'Version Control', items: ['Git', 'GitHub'] },
    { title: 'Containerization', items: ['Docker', 'Docker Compose'] },
    { title: 'Other Tools', items: ['REST APIs', 'JWT Authentication', 'Unit Testing', 'Agile Methodology'] }
];

const skills = {
    softSkills: [
        { name: 'Time Management', description: 'Skilled at managing multiple tasks and meeting tight deadlines while maintaining attention to detail.', icon: 'clock' },
        { name: 'Adaptability', description: 'Quick learner who adapts to new technologies and processes in a fast-paced development environment.', icon: 'refresh-cw' },
        { name: 'Teamwork', description: 'Strong collaborator who thrives in group settings, actively contributing to achieving shared goals.', icon: 'users' },
        { name: 'Problem-Solving', description: 'Proven ability to troubleshoot complex technical issues and develop efficient solutions.', icon: 'tool' },
        { name: 'Communication', description: 'Strong written and verbal communication skills for effective collaboration with team members and stakeholders.', icon: 'message-circle' }
    ]
};

onMounted(() => {
    feather.replace();
});
</script>