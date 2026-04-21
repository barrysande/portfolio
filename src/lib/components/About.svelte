<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<section class="flex flex-col gap-5 pb-4 md:flex-row md:gap-10">
	<div class="flex flex-col items-center gap-3">
		<h3
			class="font-display text-2xl font-bold tracking-widest text-nowrap uppercase md:text-3xl"
			in:fly={{ x: -200, duration: 1000 }}
			out:fade
		>
			About
		</h3>
		<p class="text-ink pb-4 text-center leading-8">
			A full-stack developer and licensed advocate based in Nairobi. I build production systems end
			to end — from API design and database architecture to deployment and infrastructure. I
			care deeply about the quality and accessibility of what I ship.
		</p>
	</div>
</section>
