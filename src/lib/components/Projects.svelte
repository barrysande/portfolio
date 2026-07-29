<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import Archiveprojects from './Archiveprojects.svelte';
	import Right from './Right.svelte';
	import { showCurrentYear } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { Project } from '$lib/types';

	const projects: Project[] = [
		{
			number: '01',
			name: 'Monde Des Parfum®',
			subtitle:
				'Version 2 fullstack app for the Kenyan luxury candle and fragrance brand, Monde Des Parfum®.',
			category: 'FULLSTACK E-COMMERCE',
			year: '2026',
			url: 'https://www.mondedesparfum.com/',
			tools: [
				'Typescript',
				'Sveltekit',
				'NodeJS(AdonisJS)',
				'Postgresql',
				'Redis',
				'SSE',
				'Docker',
				'Traefik',
				'Linux'
			],
			collaborators: [
				{ name: 'Gary Alulu', link: 'https://techy-portfolio-eight.vercel.app/contact' }
			]
		},

		{
			number: '02',
			name: 'Hiddouts',
			subtitle: 'Travel, cataloging, and planning web app',
			category: 'FULL-STACK',
			year: '2025-2026',
			url: 'https://hiddouts.com',
			tools: [
				'Typescript',
				'Sveltekit',
				'NodeJS(AdonisJS)',
				'Postgresql',
				'Redis',
				'Socket.io',
				'SSE',
				'Docker',
				'Traefik',
				'Linux'
			],
			collaborators: [
				{ name: 'Gary Alulu', link: 'https://techy-portfolio-eight.vercel.app/contact' }
			]
		},
		{
			number: '03',
			name: 'Monde Des Parfum®',
			subtitle:
				'Version 1 storefront for the Kenyan luxury candle and fragrance brand, Monde Des Parfum®',
			category: 'E-COMMERCE',
			year: '2025',
			url: 'https://github.com/barrysande/monde-des-parfum',
			tools: ['Typescript', 'Sveltekit', 'TailwindCSS'],
			collaborators: []
		},
		{
			number: '04',
			name: 'Audiophile',
			subtitle: 'E-commerce for headphones, earphones, and speakers',
			category: 'E-COMMERCE',
			year: '2024',
			url: 'https://audiophile-topaz-seven.vercel.app/',
			tools: ['TailwindCSS', 'Typescript', 'Sveltekit'],
			collaborators: []
		},
		{
			number: '05',
			name: 'Lexihub',
			subtitle: 'Online dictionary with pronunciation and definitions',
			category: 'WEB DICTIONARY',
			year: '2024',
			url: 'https://fem-dictionary-app-opal.vercel.app/',
			tools: ['TailwindCSS', 'Typescript', 'Sveltekit', 'REST API'],
			collaborators: []
		}
	];
</script>

<section id="projects" class="scroll-mt-20 pt-4 md:pt-8">
	<div class="mb-2 flex items-center justify-between">
		<p class="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
			Selected Work
		</p>
		<span class="text-ink-muted font-mono text-xs">2024 – {showCurrentYear()}</span>
	</div>

	<div class="border-border mb-2 flex items-baseline justify-between border-b pb-4">
		<h2
			class="font-display text-ink text-3xl font-bold md:text-4xl"
			in:fly={{ x: 200, easing: quadInOut, duration: 500 }}
		>
			<a
				href="#projects"
				class="hover:text-accent focus-visible:outline-accent cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
			>
				Recent projects.
			</a>
		</h2>
	</div>

	<ul>
		{#each projects as project (project.number)}
			<li class="group border-border flex items-start justify-between gap-4 border-b py-6">
				<div class="flex items-start gap-4 md:gap-6">
					<span class="text-ink-muted mt-1 font-mono text-xs">{project.number}</span>
					<div class="flex flex-col gap-2">
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex flex-col gap-2"
						>
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
						</a>
						{#if project.collaborators.length > 0}
							<div class="text-ink-muted flex items-center gap-1 font-mono text-xs">
								<div class="flex items-center gap-0.5">
									With<Icon icon="heroicons:user-group" class="size-4" aria-hidden="true" />
								</div>
								<span>:</span>
								<span>
									{#each project.collaborators as collaborator, index}
										{#if collaborator.link}
											<a
												href={collaborator.link}
												target="_blank"
												rel="noopener noreferrer"
												class="hover:text-primary underline underline-offset-2 transition-colors"
											>
												{collaborator.name}
											</a>
										{:else}
											<span>{collaborator.name}</span>
										{/if}{#if index < project.collaborators.length - 1},
										{/if}
									{/each}
								</span>
							</div>
						{/if}
					</div>
				</div>

				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View ${project.name}`}
					class="flex shrink-0 items-center gap-3 pt-1"
				>
					<span class="text-ink-muted hidden font-mono text-xs tracking-widest uppercase md:block">
						{project.category}
					</span>
					<span class="text-ink-muted font-mono text-xs">{project.year}</span>
					<Right />
				</a>
			</li>
		{/each}
	</ul>

	<Archiveprojects />
</section>
