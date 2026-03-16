<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Right from './Right.svelte';
	const archivedTools = ['HTML', 'Bootstrap'];
	const archivedTools2 = ['HTML', 'CSS', 'JavaScript'];
</script>

{#snippet archivedSnippet()}
	<ul class="flex flex-wrap items-center gap-3">
		{#each archivedTools as tool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-600 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
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
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-600 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{tool2}
			</li>
		{/each}
	</ul>
{/snippet}

<div class="items flex flex-col gap-4 md:flex-row">
	<Card.Root>
		<Card.Header>
			<Card.Title>
				<div class="text-xl tracking-wider">Fylo</div>
			</Card.Title>
			<Card.Description>A fully responsive landing page for the Fylo product.</Card.Description>
		</Card.Header>
		<Card.Content>
			<a
				href="https://fylo-landing-page-pi-mauve.vercel.app/"
				class="flex items-center gap-1 font-semibold tracking-wide duration-200 hover:scale-105 hover:text-green-500"
				target="_blank"
				rel="noopener noreferrer"
				>Visit it
				<Right classes={'hover:text-green-500'} />
			</a>
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
			<a
				href="https://age-calculator-app-phi-six.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1 font-semibold tracking-wide duration-200 hover:scale-105 hover:text-green-500"
				>Try it
				<Right classes={'hover:text-green-500'} />
			</a>
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
			<a
				href="https://workit-jet.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1 font-semibold tracking-wide duration-200 hover:scale-105 hover:text-green-500"
				>Visit it
				<Right classes={'hover:text-green-500'} />
			</a>
		</Card.Content>
		<Card.Footer>
			{@render archivedSnippet?.()}
		</Card.Footer>
	</Card.Root>
</div>
