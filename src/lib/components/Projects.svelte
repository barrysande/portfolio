<script lang="ts">
	import AudiophileCard from './AudiophileCard.svelte';
	import Lexihub from './Lexihub.svelte';
	import Archiveprojects from './Archiveprojects.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<section class="pt-8 md:pt-10">
	<h3
		class="text-nowrap p-2 pb-9 text-center font-mono text-2xl font-bold uppercase underline underline-offset-8 md:pb-10 md:text-3xl"
	>
		Projects
	</h3>
	<div class=" flex flex-col gap-10">
		<Card.Root>
			<AudiophileCard />
		</Card.Root>

		<Card.Root>
			<Lexihub />
		</Card.Root>

		<Archiveprojects />
	</div>
</section>
