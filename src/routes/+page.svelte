<script lang="ts">
	import { Mail, Github, Linkedin } from 'lucide-svelte';
	import About from '$lib/components/About.svelte';
	import AboutPic from '../lib/assets/AboutPic.svg';
</script>

<section
	class="mx-6 mb-16 flex flex-col items-center justify-center gap-10 p-8 subpixel-antialiased md:flex-row md:justify-start"
>
	<div class="">
		<h1 class="text-nowrap py-6 font-mono text-green-500">Hi, my name is</h1>
		<h2 class=" text-nowrap pb-2 font-mono text-4xl font-bold md:text-5xl">Barry Sande.</h2>
		<p class=" pb-3 text-xl font-semibold">Front End Developer</p>
		<p class="font-sans text-base font-normal text-zinc-600 dark:text-zinc-400">
			I create accessible and delightful digital experiences on the web using my favourite tools:
			HTML, CSS, Tailwind, TypeScript, Sveltekit, Postgresql, and Drizzle ORM.
		</p>
		<div class="flex items-center justify-center gap-5 py-8">
			<a
				href="mailto:barrysandebbs@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-500 hover:text-green-500"
			>
				<Mail />
			</a>
			<a
				href="https://github.com/bonclairvoyante"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-500 hover:text-green-500"
			>
				<Github />
			</a>
			<a
				href="https://www.linkedin.com/in/barry-sande-8703b8312/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-500 hover:text-green-500"
			>
				<Linkedin />
			</a>
		</div>
	</div>
	<enhanced:img src="/src/lib/assets/hero.svg" alt="hero illustration" class="w-80 md:w-1/2" />
</section>

<main class="mx-6 flex w-full flex-col-reverse items-center justify-center gap-16 p-8 lg:flex-row">
	<enhanced:img
		src="/src/lib/assets/AboutPic.svg"
		alt="about illustration"
		class="w-90 md:w-full"
	/>
	<About />
</main>
