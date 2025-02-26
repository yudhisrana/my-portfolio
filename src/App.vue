<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
	<Navbar />
	<!-- hero section -->
	<section class="hero-section">
		<div class="max-w-7xl mx-auto grid grid-cols-1 py-8 gap-10 px-2 md:gap-20 md:px-6 lg:grid-cols-2 lg:py-20 2xl:px-2">
			<!-- section 1 -->
			<div class="hero-content space-y-7 md:space-y-10">
				<h1 class="text-4xl font-bold text-center leading-tight md:text-5xl lg:text-start lg:text-6xl">
					Welcome to My <span class="text-orange-600">Portfolio</span>
				</h1>
				<p class="text-center leading-normal lg:text-start">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet, corrupti officiis itaque doloribus voluptas aliquam atque tenetur at
					praesentium?
				</p>
				<div class="flex items-center justify-center gap-4 lg:justify-start">
					<a href="#" class="py-2 px-4 rounded-full bg-orange-600 text-white">View My Work</a>
					<a href="#" class="py-2 px-4 rounded-full border-orange-600 border hover:bg-orange-600 hover:text-white">Lets Connect</a>
				</div>
			</div>
			<!-- section 2 -->
			<div class="hero-image">
				<img src="./assets/images/section-hero.svg" alt="hero-section" class="" />
			</div>
		</div>
	</section>
	<!-- content about -->
	<section id="about" class="content-about bg-white py-20 space-y-7">
		<div class="flex flex-col items-center justify-center gap-6">
			<div class="w-fit">
				<h1 class="text-center font-bold text-4xl md:text-5xl lg:text-6xl text-orange-600">About</h1>
				<hr class="border-orange-700" />
			</div>
			<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quas.</p>
		</div>
		<div class="max-w-7xl mx-auto grid grid-cols-1 px-2 gap-5 md:px-6 lg:grid-cols-2 2xl:px-2">
			<img src="./assets/images/profile.webp" alt="profile" class="rounded-xl shadow" />
			<div class="space-y-4">
				<h1 class="text-orange-600">About Me</h1>
				<h1 class="font-semibold text-3xl leading-tight">Full Stack Web Developer</h1>
				<p class="leading-normal">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ratione veritatis assumenda odit placeat qui rem molestiae suscipit alias
					cum?
				</p>
				<div class="flex bg-slate-100 rounded-xl px-2 py-8 gap-8 space-y-5 mt-6 md:px-8 md:gap-16">
					<div class="flex flex-col items-start gap-7">
						<div class="space-y-2">
							<h1 class="text-sm md:text-lg">Name :</h1>
							<h1 class="text-sm md:text-lg">Dipo Yudhis Rana</h1>
						</div>
						<div class="space-y-2">
							<h1 class="text-sm md:text-lg">Phone :</h1>
							<h1 class="text-sm md:text-lg">0896-0232-4671</h1>
						</div>
					</div>
					<div class="flex flex-col items-start gap-7">
						<div class="space-y-2">
							<h1 class="text-sm md:text-lg">Age :</h1>
							<h1 class="text-sm md:text-lg">35 Years Old</h1>
						</div>
						<div class="space-y-2">
							<h1 class="text-sm md:text-lg">Email :</h1>
							<h1 class="text-sm md:text-lg">dipoyudhisrana@gmail.com</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
