<script lang="ts">
	import Right from './Right.svelte';

	const lexihubTools = ['Sveltekit', 'TailwindCSS', 'Typescript', 'REST API'];

	let isHoveredLexihub = $state(false);
</script>

{#snippet lexihubSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each lexihubTools as lexihubTool}
			<li
				class="rounded-full bg-surface-alt px-3 py-[0.1em] font-mono text-xs font-normal text-ink-muted shadow-sm md:text-sm lg:text-base"
			>
				{lexihubTool}
			</li>
		{/each}
	</ul>
{/snippet}

<section>
	<div class="flex flex-col gap-6 p-4">
		<enhanced:img
			src="../assets/lexihub_cropped.jpg?w=747;1493"
			alt="experience audiophile"
			class="w-full rounded-2xl object-cover"
			sizes="(min-width: 768px) 520px, 100vw"
		/>

		<div class="flex flex-col justify-center gap-4">
			<h3 class="font-display text-2xl font-bold tracking-widest">Lexihub</h3>

			<a
				href="https://fem-dictionary-app-opal.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Click here to go try out the Lexihub Web Dictionary"
				class="flex w-fit items-center gap-1 font-semibold tracking-wide duration-200 hover:text-accent"
				onmouseenter={() => (isHoveredLexihub = true)}
				onmouseleave={() => (isHoveredLexihub = false)}
			>
				See it <Right animate={isHoveredLexihub} />
			</a>

			<p class="text-ink-muted">
				A fully responsive online dictionary containing pronunciation and definitions of words using
				on designs from
				<a
					href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL"
					class="font-semibold text-primary underline underline-offset-4"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Click here to check out the designs on Frontend Mentor"
				>
					Frontend Mentor.<Right />
				</a>
			</p>

			<div class="pt-4">
				{@render lexihubSnippet?.()}
			</div>
		</div>
	</div>
</section>
