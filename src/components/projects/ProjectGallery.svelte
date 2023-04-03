<script>
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from './projects.data';
</script>

<div class="mx-auto max-w-7xl">
	<ul
		role="list"
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
	>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}

		<!-- More people... -->
	</ul>
</div>
