<script lang="ts">
	// Supports weights 100-900
	import '@fontsource-variable/inter';
	// Supports weights 200-800
	import '@fontsource-variable/sono';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
	const details: string =
		'Barry Sande is a web developer and attorney. Barry Sande uses HTML, CSS, JavaScript, TypeScript, SvelteKit, TailwindCSS, Postgresql, Drizzle, Supabase and Node.js to create accessible and delightful digital experiences on the web.';
</script>

<svelte:head>
	<title>Barry Sande</title>
	<meta name="description" content={details} />
</svelte:head>


<ModeWatcher />

<div class="mx-6 flex justify-between p-8">
	<Button onclick={toggleMode} variant="outline" size="icon">
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</Button>
	<Navbar />
</div>

{@render children?.()}

<Footer />
