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
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 text-xs md:text-sm lg:text-base"
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
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 text-xs md:text-sm lg:text-base"
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
			<Card.Description>Fylo product landing page to refine my frontend skills</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex items-center gap-1 hover:text-green-500 text-sm">
				<a
					href="https://fylo-landing-page-pi-mauve.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					>Check out the live page
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
				>A web-based age calculator app. This was my first project using JavaScript</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<div class="flex items-center gap-1 hover:text-green-500 text-sm">
				<a href="https://age-calculator-app-phi-six.vercel.app/" target="_blank" rel="noopener noreferrer"
					>Check and try out the live product page here.</a
				>
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
			<Card.Description>WorkIt product landing page to refine my frontend skills</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex items-center gap-1 hover:text-green-500 text-sm">
				<a href="https://workit-jet.vercel.app/" target="_blank" rel="noopener noreferrer"
					>Check out the live page here
				</a>
				<Right />
			</div>
		</Card.Content>
		<Card.Footer>
			{@render archivedSnippet?.()}
		</Card.Footer>
	</Card.Root>
</div>
