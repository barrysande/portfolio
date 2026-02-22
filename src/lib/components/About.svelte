<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import AboutPic from '$lib/assets/AboutPic.svg';
</script>

<section class="flex flex-col items-center justify-center gap-5 pb-4 md:flex-row md:gap-10">
	<img src={AboutPic} alt="about illustration" class="w-64 md:w-80 lg:w-96" />

	<div class=" flex flex-col items-center gap-3 ">
		<h3
			class="text-nowrap text-2xl font-bold font-mono uppercase tracking-widest underline underline-offset-8 md:text-3xl"
			in:fly={{ x: -200, duration: 2000 }}
			out:fade
		>
			About
		</h3>
		<p class="text-balance pb-4 leading-8 text-zinc-600 dark:text-zinc-300">
			I'm a full-stack developer and licensed advocate based in Nairobi. I build production systems end to end — from API design and database architecture to deployment and infrastructure — and I care deeply about the quality and accessibility of what I ship. My legal background shapes how I approach problems: I research thoroughly, reason carefully through tradeoffs, and take full ownership of what I build. Currently working on Hiddouts, a travel planning SaaS I designed and launched solo.
		</p>
	</div>
</section>
