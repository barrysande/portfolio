<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
</script>

<section id="about" class="flex scroll-mt-20 flex-col gap-5 pb-4 md:flex-row md:gap-10">
	<div class="flex flex-col items-start gap-3 md:items-center">
		<h2
			class="font-display text-2xl font-bold tracking-widest text-nowrap uppercase md:text-3xl"
			in:fly={{ x: 200, easing: quadInOut, duration: 500 }}
		>
			<a
				href="#about"
				class="hover:text-accent focus-visible:outline-accent cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
			>
				About
			</a>
		</h2>
		<p class="text-ink test-start pb-4 leading-8 md:text-center">
			A full-stack developer based in Nairobi. I build production systems end to end, APIs, user
			interfaces(UIs), and handle deployment and infrastructure. I also care deeply about the
			quality and accessibility of the products I ship.
		</p>
	</div>
</section>
