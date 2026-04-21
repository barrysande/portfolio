<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { fade, fly } from 'svelte/transition';
	import Hero from '$lib/assets/hero.svg';
</script>

<section
	class="mx-2 flex flex-col items-center justify-center gap-5 p-8 subpixel-antialiased md:mx-6 md:flex-row md:justify-start md:gap-10 lg:mx-20"
>
	<div>
		<p class="pb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
			✦ Full-Stack Developer
		</p>

		<h1
			class="pb-3 font-display text-4xl font-bold text-primary md:text-5xl lg:text-6xl"
			in:fly={{ x: -200, duration: 1000 }}
			out:fade
		>
			Barry Sande
		</h1>
		<p class="pb-4 text-base font-normal text-ink">
			I build <span class="text-primary font-semibold">production systems</span> end to end — from API design and
			infrastructure to the interfaces people actually use.
		</p>
	</div>

	<img src={Hero} alt="hero illustration" class="w-80 md:w-1/2" />
</section>

<section class="mx-2 flex flex-col items-center gap-3 p-8 md:mx-6">
	<Skills />
</section>
<main class="mx-2 mb-12 p-8 md:mx-6 lg:mx-20">
	<About />

	<section>
		<Projects />
	</section>
</main>
