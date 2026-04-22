<script lang="ts">
	import Icon from '@iconify/svelte';

	interface IconProps {
		size?: number;
		class?: string;
	}

	let { size = 20, class: className = '' }: IconProps = $props();
</script>

<div class="arrow-icon inline-block {className}" aria-label="move-up-right" role="img">
	<Icon icon="heroicons:arrow-up-right" width={size} height={size} />
</div>

<style>
	:global(.group:hover) .arrow-icon {
		animation: moveUpRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	@keyframes moveUpRight {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(3px, -3px);
		}
	}
</style>
