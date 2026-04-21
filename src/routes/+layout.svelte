<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource/cormorant-garamond/400.css';
	import '@fontsource/cormorant-garamond/600.css';
	import '@fontsource/cormorant-garamond/700.css';
	import '@fontsource/cormorant-garamond/400-italic.css';
	import '@fontsource/roboto-mono/400.css';
	import '@fontsource/roboto-mono/500.css';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
	const details: string =
		'Barry Sande is a full-stack web developer and attorney. Barry Sande uses HTML, CSS, JavaScript, TypeScript, SvelteKit, TailwindCSS, Postgresql, Node.js with AdonisJS to create accessible, modern, and scalable experiences on the web.';
</script>

<svelte:head>
	<title>Barry Sande</title>
	<meta name="description" content={details} />
</svelte:head>

<div class="mx-2 md:mx-6 flex justify-end p-8">
	<Navbar />
</div>

{@render children?.()}

<Footer />
