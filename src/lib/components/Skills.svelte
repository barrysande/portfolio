<script>
	const skills = [
		'JavaScript',
		'TypeScript',
		'SvelteKit',
		'Node.js',
		'AdonisJS',
		'PostgreSQL'
	];
</script>

{#snippet skillsnippet()}
	<h2 class="pb-3 text-center font-display text-2xl font-bold uppercase tracking-widest md:text-3xl">
		Skills and Tools
	</h2>

	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each skills as skill (skill)}
			<li
				class="rounded-full bg-primary px-3 py-[0.1em] font-mono text-xs font-normal text-white shadow-sm md:text-sm lg:text-base"
			>
				{skill}
			</li>
		{/each}
	</ul>
{/snippet}
<div>
	{@render skillsnippet?.()}
</div>
