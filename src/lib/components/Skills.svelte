<script>
	const skills = [
		'Html',
		'CSS',
		'Bootstrap',
		'Tailwind',
		'JavaScript',
		'TypeScript',
		'Sveltekit',
		'Postgresql',
		'Drizzle',
		'Supabase'
	];
</script>

{#snippet skillsnippet()}
	<ul class="flex flex-wrap items-center justify-center gap-3">
		{#each skills as skill}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400"
			>
				{skill}
			</li>
		{/each}
	</ul>
{/snippet}
<div>
	{@render skillsnippet?.()}
</div>
