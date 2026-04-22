<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import Icon from '@iconify/svelte';

	interface Heading {
		id: string;
		text: string;
		level: number;
	}

	let { headings = [] }: { headings: Heading[] } = $props();

	const visible = $derived(headings.filter((h) => h.level <= 3));

	let open = $state(false);
</script>

{#if visible.length > 0}
	<DropdownMenu.Root bind:open>
		<DropdownMenu.Trigger
			class=" bg-surface text-ink-muted border-border hover:text-primary flex cursor-pointer items-center gap-2 rounded border px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors"
		>
			<Icon icon="heroicons:bars-3-bottom-left" class="size-3.5" />
			Contents
			<Icon
				icon="heroicons:chevron-down"
				class="size-3 transition-transform duration-200 {open ? 'rotate-180' : 'rotate-0'}"
			/>
		</DropdownMenu.Trigger>

		{#if open}
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					class=" bg-surface border-border z-50 max-w-sm min-w-64 rounded border py-2 shadow-lg"
					sideOffset={6}
					align="start"
				>
					<p class="text-ink-muted px-4 pt-1 pb-2 font-mono text-xs tracking-widest uppercase">
						In this article
					</p>
					<DropdownMenu.Separator class=" mb-2 border-t" />
					{#each visible as heading (heading.id)}
						<DropdownMenu.Item
							class="group cursor-pointer px-4 py-1.5 outline-none select-none"
							onSelect={() => {
								document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
							}}
						>
							<span class="block" style="padding-left: {(heading.level - 2) * 0.75}rem">
								<span
									class="text-ink-muted after:bg-primary after: group-hover:text-primary relative inline-block font-mono text-xs underline-offset-4 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:duration-300 after:ease-out group-hover:after:w-full"
								>
									{heading.text}
								</span>
							</span>
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		{/if}
	</DropdownMenu.Root>
{/if}
