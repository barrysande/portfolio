<script lang="ts">
	import { Archive } from 'lucide-svelte';
	import AudiophileCard from './AudiophileCard.svelte';
	import Lexihub from './Lexihub.svelte';
	import Archiveprojects from './Archiveprojects.svelte';
</script>

<section class="pt-8 md:pt-10">
	<h3 class="text-nowrap p-2 text-center font-mono text-2xl font-bold uppercase md:text-3xl pb-9 md:pb-10 underline underline-offset-8">
		Projects
	</h3>
	<div class=" flex flex-col gap-10">
		<AudiophileCard />
		<Lexihub />
		<Archiveprojects />
	</div>
</section>
