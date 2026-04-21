<script lang="ts">
	interface IconProps {
		color?: string;
		size?: number;
		strokeWidth?: number;
		animate?: boolean;
		class?: string;
	}

	let {
		color = 'currentColor',
		size = 20,
		strokeWidth = 1.5,
		animate = false,
		class: className = ''
	}: IconProps = $props();
</script>

<div class={className} aria-label="move-up-right" role="img">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
		class:animate
	>
		<path d="M13 5h6v6" />
		<path d="M19 5 5 19" />
	</svg>
</div>

<style>
	div {
		display: inline-block;
	}
	path {
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.animate {
		animation: moveUpRight 0.5s;
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
