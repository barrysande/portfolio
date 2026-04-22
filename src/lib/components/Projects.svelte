<script lang="ts">
	import { fly } from 'svelte/transition';
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

<section class="pt-4 md:pt-16" in:fly={{ y: 40, duration: 800 }}>
	<div class="mb-2 flex items-center justify-between">
		<p class="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
			Selected Work
		</p>
		<span class="font-mono text-xs text-ink-muted">2024 – 2025</span>
	</div>

	<div class="mb-8 flex items-baseline justify-between border-b border-border pb-4">
		<h2 class="font-display text-3xl font-bold text-ink md:text-4xl">Recent projects.</h2>
	</div>

	<ul>
		{#each projects as project}
			<li
				class="group border-b border-border py-6"
				>
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-start justify-between gap-4"
				>
					<div class="flex items-start gap-4 md:gap-6">
						<span class="mt-1 font-mono text-xs text-ink-muted">{project.number}</span>
						<div class="flex flex-col gap-2">
							<span
								class="font-display text-xl font-semibold text-primary transition-colors duration-200 group-hover:text-accent md:text-2xl"
							>
								{project.name}
							</span>
							<span class="text-sm text-ink-muted">{project.subtitle}</span>
							<ul class="flex flex-wrap gap-2 pt-1">
								{#each project.tools as tool}
									<li
										class="rounded-full bg-primary px-3 py-[0.1em] font-mono text-xs text-white"
									>
										{tool}
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<div class="flex shrink-0 items-center gap-3 pt-1">
						<span class="hidden font-mono text-xs uppercase tracking-widest text-ink-muted md:block">
							{project.category}
						</span>
						<span class="font-mono text-xs text-ink-muted">{project.year}</span>
						<Right />
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<Archiveprojects />
</section>
