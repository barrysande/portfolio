<script lang="ts">
	import Right from './Right.svelte';
	const hiddoutsTools = [
		'Sveltekit',
		'Tailwind',
		'Typescript',
		'Node.js',
		'Superforms',
		'AdonisJS',
		'Postgresql',
		'Redis',
		'Socket.io',
		'Server-Sent-Events'
	];
</script>

{#snippet hiddoutsSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each hiddoutsTools as hiddoutsTool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-500 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{hiddoutsTool}
			</li>
		{/each}
	</ul>
{/snippet}

<section>
	<div class="flex flex-col items-center gap-10 p-6 font-sans md:flex-row">
		<enhanced:img
			src="../assets/Hiddouts.png?w=747;1493"
			alt="hiddouts homepage"
			class="rounded-2xl"
			sizes="(min-width: 768px) 50vw, 100vw"
		/>

		<div class="flex flex-col justify-center gap-4">
			<h3 class="font-lexend text-2xl font-bold tracking-widest">Hiddouts</h3>
			<a
				href="https://hiddouts.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Experience Hiddouts"
				class="flex items-center gap-1 font-semibold tracking-wide duration-200 hover:scale-105 hover:text-green-500"
				>See it
				<Right /></a
			>

			<p class="font-lexend text-zinc-600 dark:text-zinc-300">
				A full-stack travel cataloging and planning SaaS that lets users save places they discover online, share
				them with groups, and plan trips together. Features include real-time group chat via
				Socket.io, server-sent events for live notifications, a database-backed job queue for async
				email delivery, JWT and session-based auth, image processing with Sharp to Cloudflare R2,
				and subscription billing with DodoPayments. Built with SvelteKit and AdonisJS on PostgreSQL.
			</p>

			<div class="pt-4">
				{@render hiddoutsSnippet?.()}
			</div>
		</div>
	</div>
</section>
