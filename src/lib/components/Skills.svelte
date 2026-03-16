<script>
	const skills = [
		'HTML',
		'CSS',
		'Tailwind',
		'JavaScript',
		'TypeScript',
		'Svelte',
		'React',
		'Node.js',
		'SvelteKit',
		'AdonisJS',
		'PostgreSQL',
		'REST APIs',
		'WebSockets & SSE',
		'Docker',
		'Linux',
		'Git'
	];
</script>

{#snippet skillsnippet()}
	<h3
		class=" pb-3 text-center font-mono text-2xl font-bold uppercase tracking-widest  md:text-3xl"
	>
		Skills and Tools
	</h3>

	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each skills as skill}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-600 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{skill}
			</li>
		{/each}
	</ul>
{/snippet}
<div>
	{@render skillsnippet?.()}
</div>
