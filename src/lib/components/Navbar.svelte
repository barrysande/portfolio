<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	interface NavItem {
		id: string;
		name: string;
		location: string;
	}
	const navItems: NavItem[] = [
		{
			id: 'navi1',
			name: 'Home',
			location: '/'
		},
		{
			id: 'navi2',
			name: 'Blog',
			location: '/blog'
		}
	];
</script>

<nav class="flex items-center gap-6">
	<ul class="flex items-center justify-center gap-4">
		{#each navItems as navItem (navItem.id)}
			<li
				class="hover:text-secondary relative inline-block cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full"
			>
				<a href={navItem.location}>{navItem.name}</a>
			</li>
		{/each}
	</ul>
	<ThemeToggle />
</nav>
