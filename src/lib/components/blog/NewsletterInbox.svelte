<script lang="ts">
	let email = $state('');
</script>

<div class="mx-auto max-w-xl rounded-lg border border-border bg-surface px-8 py-10 text-center shadow">
	<p class="mb-2 font-mono text-xs uppercase tracking-widest text-ink-muted">No spam, ever</p>
	<h3 class="mb-6 font-display text-2xl font-bold text-ink md:text-3xl">
		Get Field Notes in your inbox
	</h3>
	<form class="flex flex-col gap-3 sm:flex-row" onsubmit={(e) => e.preventDefault()}>
		<input
			type="email"
			bind:value={email}
			placeholder="you@somewhere.com"
			class="flex-1 rounded border border-border bg-bg px-4 py-2.5 font-mono text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
		/>
		<button
			type="submit"
			class="rounded bg-primary px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-primary/90"
		>
			Subscribe
		</button>
	</form>
</div>
