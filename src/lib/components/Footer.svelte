<script lang="ts">
	import { Mail, Github, Linkedin } from 'lucide-svelte';
</script>

<div class="flex items-center justify-center gap-5 py-8">
	<a
		href="mailto:barrysandebbs@gmail.com"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-500 hover:text-green-500"
	>
		<Mail />
	</a>
	<a
		href="https://github.com/bonclairvoyante"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-500 hover:text-green-500"
	>
		<Github />
	</a>
	<a
		href="https://www.linkedin.com/in/barry-sande-8703b8312/"
		target="_blank"
		rel="noopener noreferrer"
		class="text-gray-500 hover:text-green-500"
	>
		<Linkedin />
	</a>
</div>
