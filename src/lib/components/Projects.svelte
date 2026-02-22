<script lang="ts">
	import AudiophileCard from './AudiophileCard.svelte';
	import Lexihub from './Lexihub.svelte';
	import Archiveprojects from './Archiveprojects.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { fade, fly } from 'svelte/transition';
	import MondeDesParfum from './MondeDesParfum.svelte';
	import Hiddouts from './Hiddouts.svelte';
</script>

<section class="pt-4 md:pt-10">
	<h3
		class="text-nowrap p-2 pb-9 text-center font-mono text-2xl font-bold uppercase tracking-widest underline underline-offset-8 md:pb-10 md:text-3xl"
		in:fly={{ x: -200, duration: 2000 }}
		out:fade
	>
		Projects
	</h3>
	<div class=" flex flex-col xl:grid xl:grid-cols-2 gap-4 md:gap-6 mb-6">
		<Card.Root>
			<Hiddouts />
		</Card.Root>
		<Card.Root>
			<MondeDesParfum />
		</Card.Root>
		<Card.Root>
			<AudiophileCard />
		</Card.Root>

		<Card.Root>
			<Lexihub />
		</Card.Root>

	</div>
	<Archiveprojects />
</section>
