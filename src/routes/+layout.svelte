<script lang="ts">
	// Supports weights 100-900
	import '@fontsource-variable/dm-sans/wght.css';
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
	import { page } from '$app/state';

	let { children } = $props();
	let scrollY = $state(0);
	const details: string =
		'Barry Sande is a full-stack web developer and attorney. Barry Sande uses HTML, CSS, JavaScript, TypeScript, SvelteKit, Postgresql, Node.js with AdonisJS to create accessible, modern, and scalable experiences on the web.';
</script>

<svelte:head>
	<title>Barry Sande</title>
	<meta name="description" content={details} />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Barry Sande" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content="Barry Sande" />
	<meta property="og:description" content={details} />
	<meta property="og:image" content="{page.url.origin}/assets/og.png" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Barry Sande" />
	<meta name="twitter:description" content={details} />
	<meta name="twitter:image" content="{page.url.origin}/assets/og.png" />
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
