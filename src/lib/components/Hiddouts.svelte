<script lang="ts">
	import Right from './Right.svelte';
	const hiddoutsTools = [
		'Sveltekit',
		'Typescript',
		'Superforms',
		'AdonisJS',
		'Postgresql',
		'Redis',
		'Socket.io',
		'Server-Sent-Events'
	];

	let isHoveredHiddouts = $state(false);
</script>

{#snippet hiddoutsSnippet()}
	<ul class="flex flex-wrap items-center justify-start gap-2">
		{#each hiddoutsTools as hiddoutsTool}
			<li
				class="rounded-full bg-emerald-50 px-3 py-[0.1em] font-mono text-xs font-normal text-zinc-600 shadow-sm dark:bg-emerald-950 dark:text-emerald-400 md:text-sm lg:text-base"
			>
				{hiddoutsTool}
			</li>
		{/each}
	</ul>
{/snippet}

<section>
	<div class="flex flex-col gap-4 p-4 font-sans">
		<enhanced:img
			src="../assets/Hiddouts.png?w=747;1493"
			alt="hiddouts homepage"
			class="w-full rounded-2xl"
			sizes="(min-width: 768px) 50vw, 100vw"
		/>
		<h3 class="font-lexend text-2xl font-bold tracking-widest">Hiddouts</h3>
		<a
			href="https://hiddouts.com"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Experience Hiddouts"
			class="flex w-fit items-center gap-1 font-semibold tracking-wide duration-200 hover:text-green-600"
			onmouseenter={() => (isHoveredHiddouts = true)}
			onmouseleave={() => (isHoveredHiddouts = false)}
		>
			See it <Right animate={isHoveredHiddouts} /></a
		>
		<p class="font-lexend text-zinc-600 dark:text-zinc-300">
			A travel, cataloging, and planning web app that lets users save places they discover online,
			share them with groups, and plan trips together. Features include real-time group chats,
			in-app notifications, a queue for async email delivery, session-based auth, image processing
			with Sharp to Cloudflare R2, and payment system using Dodo Payments.
		</p>
		{@render hiddoutsSnippet?.()}
	</div>
</section>
