<script>
	const skills = [
		'HTML',
		'CSS',
		'Tailwind',
		'JavaScript',
		'TypeScript',
		'Node.js',
		'SvelteKit',
		'React (in progress)',
        'Solidity (in progress',
		'AdonisJS',
		'PostgreSQL',
		'REST APIs',
		'WebSockets',
		'SSE',
		'Docker',
		'Linux',
		'Git',
		'Storyblok'
	];
</script>

{#snippet skillsnippet()}
	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each skills as skill}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{skill}
			</li>
		{/each}
	</ul>
{/snippet}
<div>
	{@render skillsnippet?.()}
</div>
