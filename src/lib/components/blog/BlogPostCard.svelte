<script lang="ts">
	import Right from '$lib/components/Right.svelte';

	interface Props {
		slug: string;
		title: string;
		subtitle: string;
		type: 'article' | 'note';
		topic: string;
		tags: string[];
		date: string;
		readTime: string;
		index: number;
	}

	let { slug, title, subtitle, type, topic, tags, date, readTime, index }: Props = $props();

	const num = $derived(String(index + 1).padStart(2, '0'));

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<a
	href="/blog/{slug}"
	class="group border-border flex cursor-pointer items-center gap-4 border-b py-5 transition-colors md:gap-6"
>
	<div
		class="bg-surface-alt group-hover:bg-primary/10 flex h-20 w-20 shrink-0 items-center justify-center rounded transition-colors duration-200 md:h-24 md:w-24"
	>
		<span class="text-ink-muted group-hover:text-primary font-mono text-lg font-medium">{num}</span>
	</div>

	<div class="flex min-w-0 flex-1 flex-col gap-1.5 pt-1">
		<span class="text-primary font-mono text-xs tracking-widest uppercase">
			{type} &middot; {topic}
		</span>
		<span
			class="font-display text-primary group-hover:text-accent text-xl font-semibold transition-colors duration-200 md:text-2xl"
		>
			{title}
		</span>
		<span class="text-ink-muted line-clamp-2 text-sm">{subtitle}</span>
		{#if tags.length}
			<ul class="flex flex-wrap items-center gap-1.5">
				{#each tags as tag (tag)}
					<li class="bg-surface-alt text-ink-muted rounded-full px-2.5 pb-0.5 font-mono text-xs flex items-center">
						#{tag}
					</li>
				{/each}
			</ul>
		{/if}
		<span class="text-ink-muted mt-1 font-mono text-xs">
			{formatDate(date)} &middot; {readTime}
		</span>
	</div>

	<div class="shrink-0 pt-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
		<Right size={18} class="text-primary" />
	</div>
</a>
