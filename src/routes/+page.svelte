<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import {fade, fly} from 'svelte/transition';
	
</script>

<section
	class="mx-6 flex flex-col items-center justify-center gap-10 p-8 subpixel-antialiased md:flex-row md:justify-start lg:mx-20"
>
	<div >
		<h1 class="text-nowrap py-6 text-green-500">Hello, my name is</h1>
		
		<h2 class=" text-nowrap pb-2 text-4xl font-bold text-zinc-600 dark:text-zinc-300 md:text-5xl" in:fly={{x:-200, duration: 2000}} out:fade>
			Barry Sande
		</h2>
		<p class=" pb-3 text-xl font-semibold text-zinc-600 dark:text-zinc-300">Front End Developer</p>
		<p class="font-inter text-base font-normal text-zinc-600 dark:text-zinc-400">
			I create accessible and delightful digital experiences on the web using my favourite
			technologies and tools.
		</p>
	</div>
	<img src="/assets/hero.svg" alt="hero illustration" class="w-80 md:w-1/2" />
</section>

<section class="mx-6 flex flex-col items-center justify-center gap-3 p-8">
	<Skills />
</section>
<main class="mx-6 mb-12 p-8 lg:mx-20">
	<About />

	<section>
		<Projects />
	</section>
</main>

