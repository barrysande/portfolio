<script lang="ts">
	import Right from './Right.svelte';

	const audiophileTools = ['Sveltekit', 'Tailwind', 'Typescript', 'Node.js', 'Superforms'];
</script>

{#snippet audiophileSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each audiophileTools as audiophileTool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{audiophileTool}
			</li>
		{/each}
	</ul>
{/snippet}

<section>
	<div class="flex flex-col items-center gap-10 p-6 font-sans md:flex-row">
		<div class="w-full">
			<enhanced:img
				src="../assets/audiophile.jpg?w=747;1493"
				alt="audiophile homepage screenshot"
				class="w-full rounded-2xl object-fill"
				sizes="(min-width: 768px) 520px, 100vw"
			/>
		</div>
		<div class="flex flex-col justify-center gap-4">
			<h3 class="font-lexend text-2xl font-bold tracking-widest">Audiophile</h3>
			<a
				href="https://audiophile-topaz-seven.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Click here to go try out the Audiophile E-commerce Web App"
				class="flex items-center gap-1 font-semibold tracking-wide duration-200 hover:scale-105 hover:text-green-500"
				>See it

				<Right /></a
			>
			<p class="font-lexend text-zinc-600 dark:text-zinc-300">
				A fully responsive E-commerce Web App for headphones, earphones, and speakers. It is based
				on designs from
				<a
					href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-green-600 underline underline-offset-4 dark:text-green-500"
					aria-label="Click here to check out the designs on Frontend Mentor">Frontend Mentor.</a
				>
			</p>
			<div class="pt-4">
				{@render audiophileSnippet?.()}
			</div>
		</div>
	</div>
</section>
