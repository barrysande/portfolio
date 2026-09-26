<script>
	const skills = [
		'JavaScript',
		'TypeScript',
		'Svelte',
		'NodeJS(AdonisJS)',
		'SvelteKit',
		'PostgreSQL',
		'Docker',
		'Traefik',
		'Linux'
	];
</script>

{#snippet skillsnippet()}
	<h2
		class="font-display pb-3 text-left text-2xl font-bold tracking-widest uppercase md:text-center md:text-3xl"
	>
		<a
			href="#skills"
			class="hover:text-accent focus-visible:outline-accent cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
		>
			Skills and Tools
		</a>
	</h2>

	<ul class="flex flex-wrap items-center justify-start gap-2 md:justify-center">
		{#each skills as skill (skill)}
			<li
				class="bg-primary rounded-full px-3 py-[0.1em] font-mono text-xs font-normal text-white shadow-sm md:text-sm lg:text-base"
			>
				{skill}
			</li>
		{/each}
	</ul>
{/snippet}
<div id="skills" class="w-full scroll-mt-20">
	{@render skillsnippet?.()}
</div>
