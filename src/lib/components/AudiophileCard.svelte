<script lang="ts">
	import Right from './Right.svelte';

	const audiophileTools = ['Sveltekit', 'TailwindCSS', 'Typescript', 'Superforms'];

	let isHoveredAudiophile = $state(false);
</script>

{#snippet audiophileSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each audiophileTools as audiophileTool}
			<li
				class="rounded-full bg-surface-alt px-3 py-[0.1em] font-mono text-xs font-normal text-ink-muted shadow-sm md:text-sm lg:text-base"
			>
				{audiophileTool}
			</li>
		{/each}
	</ul>
{/snippet}

<section>
	<div class="flex flex-col gap-6 p-4">
		<enhanced:img
			src="../assets/audiophile.jpg?w=747;1493"
			alt="audiophile homepage screenshot"
			class="w-full rounded-2xl object-cover"
			sizes="(min-width: 768px) 520px, 100vw"
		/>

		<div class="flex flex-col justify-center gap-4">
			<h3 class="font-display text-2xl font-bold tracking-widest">Audiophile</h3>

			<a
				href="https://audiophile-topaz-seven.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Click here to go try out the Audiophile E-commerce Web App"
				class="flex w-fit items-center gap-1 font-semibold tracking-wide duration-200 hover:text-accent"
				onmouseenter={() => (isHoveredAudiophile = true)}
				onmouseleave={() => (isHoveredAudiophile = false)}
			>
				See it <Right animate={isHoveredAudiophile} />
			</a>

			<p class="text-ink-muted">
				A fully responsive E-commerce Web App for headphones, earphones, and speakers. It is based
				on designs from
				<a
					href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-primary underline underline-offset-4"
					aria-label="Click here to check out the designs on Frontend Mentor"
				>
					Frontend Mentor.<Right />
				</a>
			</p>

			<div class="pt-4">
				{@render audiophileSnippet?.()}
			</div>
		</div>
	</div>
</section>
