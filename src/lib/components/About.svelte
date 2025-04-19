<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import AboutPic from '$lib/assets/AboutPic.svg';
</script>

<section class="flex flex-col items-center justify-center gap-5 pb-4 md:flex-row md:gap-10">
	<img src={AboutPic} alt="about illustration" class="w-64 md:w-80 lg:w-96" />

	<div class=" flex flex-col items-center gap-3">
		<h3
			class="text-nowrap font-mono text-2xl font-bold uppercase tracking-widest underline underline-offset-8 md:text-3xl"
			in:fly={{ x: -200, duration: 2000 }}
			out:fade
		>
			About
		</h3>
		<p class="text-balance pb-4 leading-8 text-zinc-600 dark:text-zinc-300">
			I like using web applications that are not only sleek but also accessible to everyone, a
			passion that drove me into web development. I leverage my keen eye for detail to craft
			accessible and delightful digital experiences for people using the web. Currently, I am a
			Front End Developer at <a
				href="https://teamkade.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-semibold text-zinc-600 underline underline-offset-4 hover:text-green-500 dark:text-zinc-300"
				>Kade.
			</a> I am also a licenced lawyer/attorney/advocate in Kenya.
		</p>
	</div>
</section>
