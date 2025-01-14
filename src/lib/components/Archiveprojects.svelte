<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Right from './Right.svelte';
	const archivedTools = ['HTML', 'CSS', 'Bootstrap'];
	const archivedTools2 = ['HTML', 'CSS', 'Javascript'];
</script>

<!-- @snippet acrhivedTools starts -->
{#snippet archivedSnippet()}
	<ul class="flex flex-wrap items-center gap-3">
		{#each archivedTools as tool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{tool}
			</li>
		{/each}
	</ul>
{/snippet}

{#snippet archivedSnippet2()}
	<ul class="flex flex-wrap items-center gap-3">
		{#each archivedTools2 as tool2}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{tool2}
			</li>
		{/each}
	</ul>
{/snippet}

<!-- @snippet archivedTools ends -->

<div class="flex flex-col gap-4 md:flex-row">
	<Card.Root>
		<Card.Header>
			<Card.Title>
				<div class="text-xl tracking-wider">Fylo</div>
			</Card.Title>
			<Card.Description>A fully responsive landing page for the Fylo product.</Card.Description>
		</Card.Header>
		<Card.Content>
			<div
				class="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-green-500 dark:text-zinc-300"
			>
				<a
					href="https://fylo-landing-page-pi-mauve.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					>Visit it
				</a>
				<Right />
			</div>
		</Card.Content>
		<Card.Footer>
			{@render archivedSnippet?.()}
		</Card.Footer>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title>
				<div class="text-xl tracking-wider">Age Calculator</div>
			</Card.Title>
			<Card.Description
				>A web-based age calculator app. This was my first project using JavaScript.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<div
				class="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-green-500 dark:text-zinc-300"
			>
				<a
					href="https://age-calculator-app-phi-six.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					>Click here to try it
				</a>
				<Right />
			</div>
		</Card.Content>
		<Card.Footer>
			{@render archivedSnippet2?.()}
		</Card.Footer>
	</Card.Root>

	<Card.Root>
		<Card.Header>
			<Card.Title>
				<div class="text-xl tracking-widest">WorkIt</div>
			</Card.Title>
			<Card.Description>Another product landing page to refine my frontend skills.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<div
				class="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-green-500 dark:text-zinc-300"
			>
				<a href="https://workit-jet.vercel.app/" target="_blank" rel="noopener noreferrer"
					>Visit it
				</a>
				<Right />
			</div>
		</Card.Content>
		<Card.Footer>
			{@render archivedSnippet?.()}
		</Card.Footer>
	</Card.Root>
</div>
