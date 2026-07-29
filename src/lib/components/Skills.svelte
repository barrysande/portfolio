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
		class="font-display pb-3 text-center text-2xl font-bold tracking-widest uppercase md:text-3xl"
	>
		<a
			href="#skills"
			class="hover:text-accent focus-visible:outline-accent cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
		>
			Skills and Tools
		</a>
	</h2>

	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each skills as skill (skill)}
			<li
				class="bg-primary rounded-full px-3 py-[0.1em] font-mono text-xs font-normal text-white shadow-sm md:text-sm lg:text-base"
			>
				{skill}
			</li>
		{/each}
	</ul>
{/snippet}
<div id="skills" class="scroll-mt-20">
	{@render skillsnippet?.()}
</div>
