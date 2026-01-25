<script lang="ts">
	import Right from './Right.svelte';
	import LexihubImg from '../assets/lexihub.jpg?enhanced';
	const lexihubTools = ['Sveltekit', 'Tailwind', 'Typescript', 'Node.js', 'RESTful API'];
</script>

<!-- @snippet audiophile starts -->
{#snippet lexihubSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each lexihubTools as lexihubTool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{lexihubTool}
			</li>
		{/each}
	</ul>
{/snippet}

<!-- @snippet audiophile ends -->

<section>
	<div class="flex flex-col items-center gap-10 p-6 font-sans md:flex-row">
		<div class="w-full">
			<enhanced:img src={LexihubImg} alt="audiophile homepage screenshot" class="rounded-2xl" />
		</div>
		<div class="flex flex-col justify-center gap-4">
			<h3 class="text-2xl font-bold tracking-widest font-lexend">Lexihub</h3>
			<a
				href="https://fem-dictionary-app-opal.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1 font-semibold font-lexend text-zinc-600 hover:text-green-500 dark:text-zinc-300"
				aria-label="Click here to go try out the Lexihub Web Dictionary"
				>See it for yourself
				<Right /></a
			>
			<p class="text-zinc-600 dark:text-zinc-300 font-lexend">
				A fully responsive online dictionary containing pronunciation and definitions of words using
				on designs from
				<a
					href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL"
					class="font-semibold text-zinc-600 underline underline-offset-4 hover:text-green-500 dark:text-zinc-300"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Click here to check out the designs on Frontend Mentor">Frontend Mentor.</a
				>
			</p>
			<div class="pt-4">
				{@render lexihubSnippet?.()}
			</div>
		</div>
	</div>
</section>
