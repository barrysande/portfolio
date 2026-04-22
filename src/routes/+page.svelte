<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { fly } from 'svelte/transition';
	import HeroLight from '$lib/assets/hero.svg';
	import HeroDark from '$lib/assets/hero_dark.svg';
	import Icon from '@iconify/svelte';
</script>

<section
	class="mx-2 flex flex-col items-center justify-center gap-5 p-8 subpixel-antialiased md:mx-6 md:flex-row md:justify-start md:gap-10 lg:mx-20"
	in:fly={{ x: -200, duration: 750 }}
>
	<div>
		<p
			class="text-primary flex items-center gap-0.5 pb-3 font-mono text-xs font-semibold tracking-widest uppercase"
		>
			<Icon icon="solar:code-2-bold-duotone" class="size-4" /> Full-Stack Developer <Icon
				icon="solar:code-2-bold-duotone"
				class="size-4"
			/>
		</p>

		<h1 class="font-display text-primary pb-3 text-4xl font-bold md:text-5xl lg:text-6xl">
			Barry Sande
		</h1>
		<p class="text-ink pb-4 text-base font-normal">
			I build <span class="text-primary font-semibold">production systems</span> end to end — from API
			design and infrastructure to the interfaces people actually use.
		</p>
	</div>

	<img src={HeroLight} alt="hero illustration" class="block w-80 md:w-1/2 dark:hidden" />
	<img src={HeroDark} alt="hero illustration" class="hidden w-80 md:w-1/2 dark:block" />
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
