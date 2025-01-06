<script lang="ts">
	import Right from './Right.svelte';
	const audiophileTools = ['Sveltekit', 'Tailwind', 'Typescript', 'Superforms', 'Valibot'];
</script>

<!-- @snippet audiophile starts -->
{#snippet audiophileSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-1">
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
	

	<div class="flex flex-col gap-10 font-sans md:flex-row">
		<img src="/src/lib/assets/audiophile.jpg" alt="hero illustration" class="w-64" />
		<div>
			<a href="http://" class="flex items-center gap-1 hover:text-green-400">
				<h3 class="font-bold tracking-wider">Audiophile E-commerce</h3>
				<Right /></a
			>
			<p>
				This is the full frontend version of an E-commerce Website based on designs from
				<a
					href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
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
