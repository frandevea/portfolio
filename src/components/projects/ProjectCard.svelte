<script lang="ts">
	import type { Project } from '../../lib/types/project.interface';
	import LinkIcon from '../icons/LinkIcon.svelte';
	export let project: Project;
</script>

<a href={project.link} target="_blank">
	<li class="p-4 hover:bg-indigo-50 hover:cursor-pointer rounded-2xl group">
		<div class="flex flex-col items-left justify-start">
			<img class="w-12 rounded-xl" src={project.image} alt="" width="100px" />
			<div class="text-left mt-6 mb-4">
				<div class="font-semibold">{project.name}</div>
			</div>
		</div>

		<p class="text-sm leading-7 text-zinc-500 text-justify">
			{project.description}
		</p>
		<p
			class="mt-4 flex text-sm font-medium text-zinc-500 transition group-hover:text-indigo-500 dark:text-zinc-200"
		>
			<LinkIcon props="h-6 w-6 flex-none " />
			<span class="ml-2">{project.linkName}</span>
		</p>
	</li>
</a>
