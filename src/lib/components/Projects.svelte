<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import Archiveprojects from './Archiveprojects.svelte';
	import Right from './Right.svelte';

	const projects = [
		{
			number: '01',
			name: 'Hiddouts',
			subtitle: 'Travel, cataloging, and planning web app',
			category: 'FULL-STACK',
			year: '2025',
			url: 'https://hiddouts.com',
			tools: ['Sveltekit', 'Typescript', 'AdonisJS', 'Postgresql', 'Redis', 'Socket.io', 'SSE']
		},
		{
			number: '02',
			name: 'Monde Des Parfum',
			subtitle: 'Kenyan luxury candle and fragrance brand',
			category: 'E-COMMERCE',
			year: '2025',
			url: 'https://www.mondedesparfum.com/',
			tools: ['Sveltekit', 'TailwindCSS', 'Typescript', 'Django']
		},
		{
			number: '03',
			name: 'Audiophile',
			subtitle: 'E-commerce for headphones, earphones, and speakers',
			category: 'E-COMMERCE',
			year: '2024',
			url: 'https://audiophile-topaz-seven.vercel.app/',
			tools: ['Sveltekit', 'TailwindCSS', 'Typescript']
		},
		{
			number: '04',
			name: 'Lexihub',
			subtitle: 'Online dictionary with pronunciation and definitions',
			category: 'WEB APP',
			year: '2024',
			url: 'https://fem-dictionary-app-opal.vercel.app/',
			tools: ['Sveltekit', 'TailwindCSS', 'Typescript', 'REST API']
		}
	];
</script>

<section class="pt-4 md:pt-8">
	<div class="mb-2 flex items-center justify-between">
		<p class="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
			Selected Work
		</p>
		<span class="text-ink-muted font-mono text-xs">2024 – 2025</span>
	</div>

	<div class="border-border mb-2 flex items-baseline justify-between border-b pb-4">
		<h2
			class="font-display text-ink text-3xl font-bold md:text-4xl"
			in:fly={{ x: 200, easing: quadInOut, duration: 500 }}
		>
			Recent projects.
		</h2>
	</div>

	<ul>
		{#each projects as project (project.number)}
			<li class="group border-border border-b py-6">
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-start justify-between gap-4"
				>
					<div class="flex items-start gap-4 md:gap-6">
						<span class="text-ink-muted mt-1 font-mono text-xs">{project.number}</span>
						<div class="flex flex-col gap-2">
							<span
								class="font-display text-primary group-hover:text-accent text-xl font-semibold transition-colors duration-200 md:text-2xl"
							>
								{project.name}
							</span>
							<span class="text-ink-muted text-sm">{project.subtitle}</span>
							<ul class="flex flex-wrap gap-2 pt-1">
								{#each project.tools as tool (tool)}
									<li class="bg-primary rounded-full px-3 py-0.5 font-mono text-xs text-white">
										{tool}
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<div class="flex shrink-0 items-center gap-3 pt-1">
						<span
							class="text-ink-muted hidden font-mono text-xs tracking-widest uppercase md:block"
						>
							{project.category}
						</span>
						<span class="text-ink-muted font-mono text-xs">{project.year}</span>
						<Right />
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<Archiveprojects />
</section>
