<script>
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects.data';
</script>

<section class="mx-auto max-w-7xl my-10">
	<div class="flex items-center justify-center flex-wrap sm:px-4 lg:justify-between">
		<div class="flex flex-col lg:max-w-xl text-center lg:text-left">
			<p class="text-4xl mb-1 font-bold">Things I’ve made trying to put my dent in the universe.</p>
			<p class="text-small my-5 text-zinc-500">
				I’ve worked on tons of little projects over the years but these are the ones that I’m most
				proud of.
			</p>
		</div>
	</div>
	<ul class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}

		<!-- More people... -->
	</ul>
</section>
