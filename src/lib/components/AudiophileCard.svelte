<script lang="ts">
	import Right from './Right.svelte';
	const audiophileTools = ['Sveltekit', 'Tailwind', 'Typescript', 'Superforms'];
</script>

<!-- @snippet audiophile starts -->
{#snippet audiophileSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each audiophileTools as audiophileTool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400"
			>
				{audiophileTool}
			</li>
		{/each}
	</ul>
{/snippet}

<!-- @snippet audiophile ends -->

<section>
	<div class="flex flex-col items-center gap-10 p-6 font-sans md:flex-row">
		<img
			src="/src/lib/assets/audiophile.jpg"
			alt="audiophile homepage screenshot"
			class="w-64 rounded-2xl"
		/>
		<div class="flex flex-col justify-center gap-4">
			<a
				href="https://audiophile-topaz-seven.vercel.app/"
				class="flex items-center gap-1 hover:text-green-400"
			>
				<h3 class="font-bold tracking-widest md:text-xl">Audiophile E-commerce</h3>
				<Right /></a
			>
			<p class="text-zinc-600 dark:text-zinc-300">
				A fully responsive E-commerce Web App for headphones, earphones, and speakers. It is based
				on designs from
				<a
					href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-zinc-400 underline underline-offset-4 hover:text-green-500"
					>Frontend Mentor.</a
				>
			</p>
			<div class="pt-4">
				{@render audiophileSnippet?.()}
			</div>
		</div>
	</div>
</section>
