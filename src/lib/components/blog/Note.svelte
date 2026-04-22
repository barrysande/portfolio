<script lang="ts">
	import Icon from '@iconify/svelte';

	let { children } = $props();
</script>

<aside class="my-6 flex gap-3 border-l-2 border-primary bg-surface-alt px-4 py-4">
	<Icon
		icon="heroicons:information-circle"
		class="mt-0.5 size-4 shrink-0 text-primary"
	/>
	<div>
		<p class="mb-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">Note</p>
		<div class="text-sm leading-relaxed text-ink">
			{@render children?.()}
		</div>
	</div>
</aside>
