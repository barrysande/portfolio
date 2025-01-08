<script lang="ts">
	import {fade, fly} from 'svelte/transition';
</script>
<section class="flex flex-col items-center justify-center gap-9 md:flex-row">
	<img
		src="/assets/AboutPic.svg"
		alt="about illustration"
		class="w-64 md:w-80 lg:w-96"
	/>

	<div class=" flex flex-col items-center gap-6">
		<h3
			class="text-nowrap font-mono text-2xl font-bold uppercase underline underline-offset-8 md:text-3xl tracking-widest" in:fly={{x:-200, duration: 2000}} out:fade
		>
			About
		</h3>
		<p class="text-balance pb-4 leading-8 text-zinc-600 dark:text-zinc-300">
			I like using web applications that are not only sleek but also accessible to everyone, a
			passion that drove me into web development. I leverage my keen eye for detail to craft
			accessible and delightful digital experiences for people using the web. I am currently a Front
			End Developer at <a
				href={'#'}
				target="_blank"
				rel="noopener noreferrer"
				class="font-semibold text-zinc-400 underline underline-offset-4 hover:text-green-500"
				>Kade Inc</a
			> currently. I am also a licenced lawyer/attorney/advocate in Kenya.
		</p>
	</div>
</section>
