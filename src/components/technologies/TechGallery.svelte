<script>
	import TechPill from './TechPill.svelte';
	import { technologies } from '$lib/data/technologies.data';
</script>

<section class="mt-10 pb-20 flex items-center flex-wrap justify-center lg:justify-between sm:px-4">
	<div class="flex items-center justify-center flex-wrap lg:justify-between">
		<div class="flex flex-col lg:max-w-lg text-center lg:text-left">
			<p class="text-4xl mb-1 font-bold">Usually using...</p>
			<p class="text-small my-5 text-zinc-500">
				These are the technologies I feel more comfortable using and have more experience with, but
				I never reject the idea of trying new things!
			</p>
		</div>
	</div>

	<div>
		<p class="text-sm font-semibold text-center lg:text-left my-2">Front-end</p>
		<div class="flex flex-wrap lg:justify-start justify-center gap-2">
			{#each technologies.frontEnd as tech}
				<TechPill name={tech} />
			{/each}
		</div>
		<p class="text-sm font-semibold text-center lg:text-left my-2">Back-end</p>
		<div class="flex flex-wrap lg:justify-start justify-center gap-2">
			{#each technologies.backEnd as tech}
				<TechPill name={tech} />
			{/each}
		</div>
		<p class="text-sm font-semibold text-center lg:text-left my-2">Others</p>
		<div class="flex flex-wrap lg:justify-start justify-center gap-2">
			{#each technologies.others as tech}
				<TechPill name={tech} />
			{/each}
		</div>
	</div>
</section>
