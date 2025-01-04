<script>
	const skills = [
		'Html',
		'CSS',
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
	<ul class="flex flex-wrap items-center justify-start gap-3 md:justify-center">
		{#each skills as skill}
			<li class="rounded-xl border-2 border-solid border-green-500 px-3 py-2 shadow-md">{skill}</li>
		{/each}
	</ul>
{/snippet}
<div>
	{@render skillsnippet?.()}
</div>
