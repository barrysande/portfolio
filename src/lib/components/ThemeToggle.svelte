<script lang="ts">
	import { setMode, mode } from 'mode-watcher';
	import Icon from '@iconify/svelte';

	function toggle() {
		setMode(mode.current === 'light' ? 'dark' : 'light');
	}

	const isDark = $derived(mode.current === 'dark');
</script>

<button
	onclick={toggle}
	aria-label="Toggle theme"
	class="border-border bg-surface-alt relative h-5 w-10 cursor-pointer rounded-full border transition-colors duration-200"
>
	<span
		class="bg-primary absolute inset-y-0 my-auto flex h-4 w-4 items-center justify-center rounded-full ease-out duration-200 {isDark
			? 'right-0.5 left-auto'
			: 'left-0.5'}"
	>
		<Icon icon="heroicons:sun"  class="text-bg absolute block size-3 transition-opacity duration-200 {isDark ? 'opacity-0' : 'opacity-100'}" />
		<Icon icon="heroicons:moon" class="text-bg absolute block size-3 transition-opacity duration-200 {isDark ? 'opacity-100' : 'opacity-0'}" />
	</span>
</button>
