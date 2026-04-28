<script lang="ts">
	import { Pagination } from 'bits-ui';
	import { fly } from 'svelte/transition';
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte';
	// import NewsletterInbox from '$lib/components/blog/NewsletterInbox.svelte';

	let { data } = $props();

	const PER_PAGE = 10;

	const TYPES = ['All', 'Articles', 'Notes'];
	const TOPICS = ['All', 'Software Engineering', 'System Design', 'Legal Practice'];

	let query = $state('');
	let activeType = $state('All');
	let activeTopic = $state('All');
	let currentPage = $state(1);

	const filtered = $derived(
		data.posts.filter((p) => {
			const matchType =
				activeType === 'All' ||
				(activeType === 'Articles' && p.type === 'article') ||
				(activeType === 'Notes' && p.type === 'note');
			const matchTopic = activeTopic === 'All' || p.topic === activeTopic;
			const q = query.toLowerCase().trim();
			const matchSearch =
				!q || p.title.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
			return matchType && matchTopic && matchSearch;
		})
	);

	const paginated = $derived(filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE));

	function resetPage() {
		currentPage = 1;
	}
</script>

<main class="mx-2 mb-20 p-8 md:mx-6 lg:mx-20">
	<!-- Page header -->
	<p class="text-primary mb-2 font-mono text-xs font-semibold tracking-widest uppercase">
		From the desk
	</p>
	<div class="border-border mb-8 border-b pb-4">
		<h1
			class="font-display text-ink text-4xl font-bold md:text-5xl"
			in:fly={{ x: 200, duration: 500 }}
		>
			Writing.
		</h1>
	</div>

	<!-- Search -->
	<div class="mb-4">
		<input
			type="search"
			bind:value={query}
			oninput={resetPage}
			placeholder="Search by title or tag..."
			class="border-border bg-surface text-ink placeholder:text-ink-muted focus:border-primary w-full rounded border px-4 py-2 font-mono text-sm shadow-sm focus:outline-none dark:shadow"
		/>
	</div>

	<div class="border-border mb-4 space-y-3 border-b pb-4">
		<div class="flex items-center gap-4">
			<span class="text-ink-muted w-12 shrink-0 font-mono text-xs tracking-widest uppercase"
				>Type</span
			>
			<nav class="flex flex-wrap gap-x-5 gap-y-1">
				{#each TYPES as t (t)}
					<button
						class="cursor-pointer pb-1 font-mono text-xs tracking-widest uppercase transition-colors duration-150"
						class:active={activeType === t}
						class:inactive={activeType !== t}
						onclick={() => {
							activeType = t;
							resetPage();
						}}
					>
						{t}
					</button>
				{/each}
			</nav>
		</div>

		<div class="flex items-center gap-4">
			<span class="text-ink-muted w-12 shrink-0 font-mono text-xs tracking-widest uppercase"
				>Topic</span
			>
			<nav class="flex flex-wrap gap-x-5 gap-y-1">
				{#each TOPICS as topic (topic)}
					<button
						class="cursor-pointer pb-1 font-mono text-xs tracking-widest uppercase transition-colors duration-150"
						class:active={activeTopic === topic}
						class:inactive={activeTopic !== topic}
						onclick={() => {
							activeTopic = topic;
							resetPage();
						}}
					>
						{topic}
					</button>
				{/each}
			</nav>
		</div>
	</div>

	<!-- Post list -->
	{#if paginated.length > 0}
		<ul>
			{#each paginated as post, i (post.slug)}
				<li>
					<BlogPostCard
						slug={post.slug}
						title={post.title}
						subtitle={post.subtitle}
						type={post.type}
						topic={post.topic}
						tags={post.tags}
						date={post.date}
						readTime={post.readTime}
						index={(currentPage - 1) * PER_PAGE + i}
					/>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-ink-muted py-16 text-center font-mono text-sm">Nothing found.</p>
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
