<script setup lang="ts">
// vue
import { ref, computed } from 'vue';

// icons
import IconMenuList from './icons/IconList.vue';
import IconMenuX from './icons/IconX.vue';
import IconFacebook from './icons/Facebook.vue';
import IconLinkIn from './icons/LinkIn.vue';
import IconGithub from './icons/Github.vue';

const isOpen = ref(false);
const toggleList = ref(true);
const toggleX = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
	toggleList.value = !toggleList.value;
	toggleX.value = !toggleX.value;
};

const menuClass = computed(() => {
	return isOpen.value ? 'left-0' : '-left-[200%]';
});
</script>

<template>
	<div class="navbar sticky top-1 md:mx-4 lg:mx-6">
		<div
			class="relative flex justify-between items-center my-3 mx-2 p-3 inset-shadow-sm shadow-md rounded-full bg-white md:py-3 lg:max-w-7xl lg:mx-auto"
		>
			<!-- logo -->
			<div class="font-semibold text-xl">DYR.</div>
			<!-- menu -->
			<ul
				:class="`${menuClass} absolute flex justify-center items-center gap-5 py-9 top-16 w-full bg-white inset-shadow-sm shadow-md rounded-lg transition-all duration-500 md:left-0 md:top-0 md:relative md:py-0 md:text-lg md:gap-7 md:shadow-none md:inset-shadow-none md:bg-transparent lg:gap-10`"
			>
				<li class="text-orange-600">
					<a href="#home" @click="toggleMenu">Home</a>
				</li>
				<li class="hover:text-orange-600">
					<a href="#about" @click="toggleMenu">About</a>
				</li>
				<li class="hover:text-orange-600">
					<a href="#">Project</a>
				</li>
				<li class="hover:text-orange-600">
					<a href="#">Contact</a>
				</li>
			</ul>
			<div class="flex items-center gap-4">
				<!-- sosial -->
				<ul class="flex items-center gap-3">
					<li>
						<a href="#" class="text-xl"><IconFacebook /></a>
					</li>
					<li>
						<a href="#" class="text-xl"><IconLinkIn /></a>
					</li>
					<li>
						<a href="#" class="text-xl"><IconGithub /></a>
					</li>
				</ul>
				<!-- mobile toggle -->
				<div class="flex items-center md:hidden">
					<button @click="toggleMenu" class="text-2xl cursor-pointer" v-show="toggleList"><IconMenuList /></button>
					<button @click="toggleMenu" class="text-2xl cursor-pointer" v-show="toggleX"><IconMenuX /></button>
				</div>
			</div>
		</div>
	</div>
</template>
