<script lang="ts">
	import TableOfContents from '$lib/components/blog/TableOfContents.svelte';
	import { copyCode } from '$lib/actions/copyCode';
	import { page } from '$app/state';
	import ChevronLeft from '$lib/components/ChevronLeft.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	let { data } = $props();

	const PostContent = $derived(data.content);

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.meta.title} — Barry Sande</title>
	<meta name="description" content={data.meta.subtitle} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.subtitle} />
	<meta property="og:image" content="{page.url.origin}/assets/og.png" />
	<meta property="article:published_time" content={data.meta.date} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.subtitle} />
	<meta name="twitter:image" content="{page.url.origin}/assets/og.png" />
</svelte:head>

<article class="mx-2 mb-20 px-4 md:mx-6 md:px-8 lg:mx-auto lg:max-w-2xl">
	<!-- Back link -->
	<button
		onclick={() => {
			goto(resolve('/blog'));
		}}
		class="text-ink-muted hover:text-primary mb-6 -ml-2 flex cursor-pointer items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
		><ChevronLeft />Writing
	</button>

	<!-- Post header -->
	<header class="border-border mb-8 border-b pb-6">
		<p class="text-primary mb-2 font-mono text-xs tracking-widest uppercase">
			{data.meta.type} &middot; {data.meta.topic}
		</p>
		<h1 class="font-display text-ink mb-3 text-4xl leading-tight font-bold md:text-5xl" in:fly={{ x: -200, easing: quadInOut, duration: 750 }}>
			{data.meta.title}
		</h1>
		<p class="text-primary mb-4 text-base">{data.meta.subtitle}</p>
		<div class="flex flex-wrap items-center justify-between gap-4">
			<p class="text-ink-muted font-mono text-xs">
				{formatDate(data.meta.date)} &middot; {data.meta.readTime}
			</p>
			<TableOfContents headings={data.meta.headings ?? []} />
		</div>
		{#if data.meta.tags?.length}
			<ul class="mt-3 flex flex-wrap gap-2">
				{#each data.meta.tags as tag (tag)}
					<li class="rounded-full bg-surface-alt px-2.5 pt-0.5 pb-1 font-mono text-xs text-ink-muted">
						#{tag}
					</li>
				{/each}
			</ul>
		{/if}
	</header>

	<!-- Post body -->
	<div class="prose" use:copyCode>
		<PostContent />
	</div>
</article>

<style>
	.prose :global(h2) {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-ink);
		margin-top: 2.5rem;
		margin-bottom: 0.75rem;
	}

	.prose :global(h3) {
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-ink);
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	.prose :global(p) {
		color: var(--color-ink);
		line-height: 1.8;
		margin-bottom: 1.25rem;
	}

	.prose :global(ul),
	.prose :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
		color: var(--color-ink);
		line-height: 1.8;
	}

	.prose :global(li) {
		margin-bottom: 0.4rem;
	}

	.prose :global(ol) {
		list-style-type: decimal;
	}

	.prose :global(ul) {
		list-style-type: disc;
	}

	.prose :global(strong) {
		font-weight: 600;
		color: var(--color-ink);
	}

	.prose :global(code) {
		font-family: var(--font-mono);
		font-size: 0.875em;
		background-color: var(--color-surface-alt);
		padding: 0.1em 0.35em;
		border-radius: 0.25rem;
	}

	.prose :global(.code-wrapper) {
		position: relative;
		margin-bottom: 1.5rem;
	}

	.prose :global(pre) {
		border-radius: 0.125rem;
		overflow-x: auto;
		font-size: 0.875rem;
		line-height: 1.6;
		padding: 1.25rem;
	}

	.prose :global(pre code) {
		background: none;
		padding: 0;
		font-size: inherit;
	}

	.prose :global(.copy-btn) {
		position: absolute;
		top: 0.625rem;
		right: 0.625rem;
		padding: 0.2rem 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-ink-muted);
		background: var(--color-surface-alt);
		border: 1px solid var(--color-border);
		border-radius: 0.125rem;
		cursor: pointer;
		opacity: 0;
		transition:
			opacity 0.15s ease,
			color 0.15s ease;
	}

	.prose :global(.code-wrapper:hover .copy-btn) {
		opacity: 1;
	}

	.prose :global(.copy-btn:hover) {
		color: var(--color-primary);
	}

	.prose :global(a) {
		color: var(--color-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		cursor: pointer;
	}

	.prose :global(a:hover) {
		color: var(--color-accent);
	}

	.prose :global(blockquote) {
		border-left: 3px solid var(--color-border);
		padding-left: 1.25rem;
		color: var(--color-ink-muted);
		font-style: italic;
		margin: 1.5rem 0;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 2.5rem 0;
	}

	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
	}

	.prose :global(th) {
		text-align: left;
		padding: 0.5rem 0.75rem;
		border-bottom: 2px solid var(--color-border);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-ink-muted);
	}

	.prose :global(td) {
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid var(--color-border);
		color: var(--color-ink);
	}

	.prose :global(tr:last-child td) {
		border-bottom: none;
	}
</style>
