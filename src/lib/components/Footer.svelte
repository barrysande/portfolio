<script>
	import Icon from '@iconify/svelte';
</script>

<footer class=" mx-2 mt-16 gap-4 px-8 py-6 pb-6 md:mx-6 lg:mx-20">
	<div class="items-center flex flex-col justify-between gap-3 md:flex-row md:gap-5">
		<div class="flex flex-col gap-1">
			<div class="flex gap-0.5">
				<Icon icon="solar:copyright-line-duotone" class="mt-0.5 size-3" />
				<p class="text-ink-muted font-mono text-xs">2026 Barry Sande — all rights reserved</p>
			</div>
			<p class="font-mono text-xs text-ink-muted">
				Themes by <a
					href="https://www.dehlya-studio.ch/theme-studio"
					target="_blank"
					rel="noopener noreferrer"
					class="underline underline-offset-2 transition-colors hover:text-primary active:text-accent"
				>Dehlya Studio</a>
			</p>
		</div>
		<div class="flex items-center justify-between gap-4">
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/barrysande"
					target="_blank"
					rel="noopener noreferrer"
					class="text-ink-muted hover:text-primary font-mono text-xs underline underline-offset-2 transition-colors"
				>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/barry-sande-8703b8312/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-ink-muted hover:text-primary flex items-center gap-0.5 font-mono text-xs underline underline-offset-2 transition-colors"
				>
					LinkedIn
				</a>
			</div>
			<div class="text-ink-muted hidden items-center md:flex">|</div>
			<p class="text-ink-muted font-mono text-xs tracking-widest uppercase">Nairobi / Remote</p>
		</div>
	</div>
</footer>
