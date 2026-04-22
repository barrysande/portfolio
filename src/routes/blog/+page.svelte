<script lang="ts">
	import { Pagination } from 'bits-ui';
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte';
	// import NewsletterInbox from '$lib/components/blog/NewsletterInbox.svelte';

	let { data } = $props();

	const PER_PAGE = 10;

	let activeCategory = $state('All');
	let currentPage = $state(1);

	const CATEGORIES = ['All', 'Engineering', 'Legal Practice', 'Notes', 'Software Design'];

	const categories = $derived([
		...CATEGORIES,
		...data.posts.map((p) => p.category).filter((c) => !CATEGORIES.includes(c))
	]);

	const filtered = $derived(
		activeCategory === 'All' ? data.posts : data.posts.filter((p) => p.category === activeCategory)
	);

	const paginated = $derived(filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE));

	function setCategory(cat: string) {
		activeCategory = cat;
		currentPage = 1;
	}
</script>

<main class="mx-2 mb-20 md:mx-6 lg:mx-20 md:px-8 px-4" in:fly={{ x: 200, easing: quadInOut, duration: 750 }}>
	<!-- Header -->
	<div class="mb-2">
		<p class="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
			From the desk
		</p>
	</div>
	<div class="border-border mb-8 border-b pb-4">
		<h1 class="font-display text-ink text-4xl font-bold md:text-5xl">Writing.</h1>
	</div>

	<!-- Category filter tabs -->
	<nav class="border-border flex flex-wrap gap-x-6 gap-y-2 border-b pb-4">
		{#each categories as category (category)}
			<button
				class="cursor-pointer pb-3 font-mono text-xs tracking-widest uppercase transition-colors duration-150"
				class:active={activeCategory === category}
				class:inactive={activeCategory !== category}
				onclick={() => setCategory(category)}
			>
				{category}
			</button>
		{/each}
	</nav>

	<!-- Post list -->
	{#if paginated.length > 0}
		<ul>
			{#each paginated as post, i (post.slug)}
				<li>
					<BlogPostCard
						slug={post.slug}
						title={post.title}
						subtitle={post.subtitle}
						category={post.category}
						date={post.date}
						readTime={post.readTime}
						index={(currentPage - 1) * PER_PAGE + i}
					/>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-ink-muted py-16 text-center font-mono text-sm">No posts in this category yet.</p>
	{/if}

	<!-- Pagination -->
	{#if filtered.length > PER_PAGE}
		<div class="mt-12 flex justify-center">
			<Pagination.Root
				count={filtered.length}
				perPage={PER_PAGE}
				siblingCount={1}
				bind:page={currentPage}
			>
				{#snippet children({ pages })}
					<div class="flex items-center gap-1">
						<Pagination.PrevButton
							class="text-ink-muted hover:bg-surface-alt hover:text-ink flex h-8 w-8 cursor-pointer items-center justify-center rounded font-mono text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-30"
						>
							←
						</Pagination.PrevButton>

						{#each pages as page (page.key)}
							{#if page.type === 'page'}
								<Pagination.Page
									{page}
									class="page-btn hover:bg-surface-alt flex h-8 w-8 cursor-pointer items-center justify-center rounded font-mono text-sm transition-colors"
								>
									{page.value}
								</Pagination.Page>
							{:else}
								<span
									class="text-ink-muted flex h-8 w-8 items-center justify-center font-mono text-sm"
									>…</span
								>
							{/if}
						{/each}

						<Pagination.NextButton
							class="text-ink-muted hover:bg-surface-alt hover:text-ink flex h-8 w-8 cursor-pointer items-center justify-center rounded font-mono text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-30"
						>
							→
						</Pagination.NextButton>
					</div>
				{/snippet}
			</Pagination.Root>
		</div>
	{/if}

	<!-- Newsletter (uncomment when backend is ready) -->
	<!-- <div class="mt-20">
		<NewsletterInbox />
	</div> -->
</main>

<style>
	.active {
		color: var(--color-primary);
		border-bottom: 2px solid var(--color-primary);
		margin-bottom: -1px;
	}

	.inactive {
		color: var(--color-ink-muted);
	}

	.inactive:hover {
		color: var(--color-ink);
	}

	:global(.page-btn[data-selected]) {
		background-color: var(--color-primary);
		color: white;
	}

	:global(.page-btn[data-selected]:hover) {
		background-color: var(--color-primary);
	}
</style>
