<script lang="ts">
	import Right from '$lib/components/Right.svelte';

	interface Props {
		slug: string;
		title: string;
		subtitle: string;
		category: string;
		date: string;
		readTime: string;
		index: number;
	}

	let { slug, title, subtitle, category, date, readTime, index }: Props = $props();

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
	class="group flex cursor-pointer items-center gap-4 border-b border-border py-5 transition-colors md:gap-6"
>
	<div
		class="flex h-20 w-20 shrink-0 items-center justify-center rounded bg-surface-alt transition-colors duration-200 group-hover:bg-primary/10 md:h-24 md:w-24"
	>
		<span class="font-mono text-lg font-medium text-ink-muted group-hover:text-primary">{num}</span>
	</div>

	<div class="flex min-w-0 flex-1 flex-col gap-1.5 pt-1">
		<span class="font-mono text-xs uppercase tracking-widest text-primary">{category}</span>
		<span
			class="font-display text-xl font-semibold text-primary transition-colors duration-200 group-hover:text-accent md:text-2xl"
		>
			{title}
		</span>
		<span class="line-clamp-2 text-sm text-ink-muted">{subtitle}</span>
		<span class="mt-1 font-mono text-xs text-ink-muted">
			{formatDate(date)} &middot; {readTime}
		</span>
	</div>

	<div class="shrink-0 pt-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
		<Right size={18} class="text-primary" />
	</div>
</a>
