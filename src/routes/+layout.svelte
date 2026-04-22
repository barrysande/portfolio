<script lang="ts">
	// Supports weights 200-800
	import '@fontsource-variable/plus-jakarta-sans/wght.css';
	import '@fontsource/roboto-mono/400.css';
	import '@fontsource/roboto-mono/500.css';
	import '@fontsource/roboto-mono/700.css';
	import '@fontsource/cormorant-garamond/400.css';
	import '@fontsource/cormorant-garamond/600.css';
	import '@fontsource/cormorant-garamond/700.css';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
	let scrollY = $state(0);
	const details: string =
		'Barry Sande is a full-stack web developer and attorney. Barry Sande uses HTML, CSS, JavaScript, TypeScript, SvelteKit, TailwindCSS, Postgresql, Node.js with AdonisJS to create accessible, modern, and scalable experiences on the web.';
</script>

<svelte:head>
	<title>Barry Sande</title>
	<meta name="description" content={details} />
</svelte:head>

<svelte:window bind:scrollY />

<div
	class="bg-bg sticky top-0 z-50 flex w-full justify-end px-8 py-4 transition-shadow duration-200 {scrollY >
	10
		? 'shadow-md'
		: ''}"
>
	<Navbar />
</div>

<ModeWatcher />
{@render children?.()}

<Footer />
