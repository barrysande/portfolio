<script lang="ts">
	import Right from './Right.svelte';

	const mondeDesParfumTools = [
		'Sveltekit',
		'TailwindCSS',
		'Typescript',
		'Superforms',
		'Django'
	];
</script>

{#snippet mondeDesParfumSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each mondeDesParfumTools as mondeDesParfumTool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-600 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{mondeDesParfumTool}
			</li>
		{/each}
	</ul>
{/snippet}

<section>
	<div class="flex flex-col gap-6 p-4 font-sans">
		<enhanced:img
			src="../assets/MondedesParfum.png?w=747;1493"
			alt="monde des parfum homepage"
			class="w-full rounded-2xl object-cover"
			sizes="(min-width: 768px) 50vw, 100vw"
		/>

		<div class="flex flex-col justify-center gap-4">
			<h3 class="font-lexend text-2xl font-bold tracking-widest">Monde Des Parfum</h3>
			
			<a
				href="https://www.mondedesparfum.com/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Experience Monde Des Parfum"
				class="flex w-fit items-center gap-1 font-semibold tracking-wide duration-200 hover:scale-105 hover:text-green-500"
			>
				See it <Right />
			</a>
			
			<p class="font-lexend text-zinc-600 dark:text-zinc-300">
				An E-commerce site for a Kenyan luxury candle and fragrance brand. Built the SvelteKit
				frontend with responsive product pages, cart functionality, and Pesapal payment integration.
				Images served via Cloudinary with on-the-fly transformations. Deployed to a Linux VPS with
				Caddy.
			</p>
			
			<div class="pt-4">
				{@render mondeDesParfumSnippet?.()}
			</div>
		</div>
	</div>
</section>