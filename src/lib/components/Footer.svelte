<script lang="ts">
	import { Github, Linkedin } from 'lucide-svelte';
</script>

<div class="flex items-center justify-center gap-5 py-8">
<p class=" underline underline-offset-2 ">Find me on:</p>
	<a
		href="https://github.com/barrysande"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-500 hover:text-green-500"
		aria-label="a github icon with a link to my github profile accessible by clicking on it"
	>
		<Github />
	</a>
	<a
		href="https://www.linkedin.com/in/barry-sande-8703b8312/"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-500 hover:text-green-500"
		aria-label="a linkedin icon with a link to my linkedin profile accessible by clicking on it"
	>
		<Linkedin />
	</a>
</div>
