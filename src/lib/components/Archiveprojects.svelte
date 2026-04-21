<script lang="ts">
	import Right from './Right.svelte';

	let hoveredIndex = $state<number | null>(null);

	const archived = [
		{
			number: '05',
			name: 'Fylo',
			subtitle: 'Fully responsive landing page',
			category: 'FRONTEND',
			year: '2023',
			url: 'https://fylo-landing-page-pi-mauve.vercel.app/',
			tools: ['HTML', 'Bootstrap']
		},
		{
			number: '06',
			name: 'Age Calculator',
			subtitle: 'Web-based age calculator app',
			category: 'FRONTEND',
			year: '2023',
			url: 'https://age-calculator-app-phi-six.vercel.app/',
			tools: ['HTML', 'CSS', 'JavaScript']
		},
		{
			number: '07',
			name: 'WorkIt',
			subtitle: 'Product landing page',
			category: 'FRONTEND',
			year: '2023',
			url: 'https://workit-jet.vercel.app/',
			tools: ['HTML', 'Bootstrap']
		}
	];
</script>

<div class="mt-12">
	<div class="mb-2 flex items-center justify-between">
		<p class="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
			Earlier Work
		</p>
		<span class="font-mono text-xs text-ink-muted">2023</span>
	</div>

	<div class="mb-0 border-b border-border pb-4">
		<h2 class="font-display text-2xl font-bold text-ink md:text-3xl">Archive.</h2>
	</div>

	<ul>
		{#each archived as project, i}
			<li
				class="group border-b border-border py-5"
				onmouseenter={() => (hoveredIndex = i)}
				onmouseleave={() => (hoveredIndex = null)}
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
								class="font-display text-lg font-semibold text-primary transition-colors duration-200 group-hover:text-accent"
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
						<Right animate={hoveredIndex === i} />
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
