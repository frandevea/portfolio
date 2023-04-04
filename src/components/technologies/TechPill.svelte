<script lang="ts">
	export let tech: any;
</script>

<a href={tech.link} target="_blank">
	<span
		class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium border-2 cursor-pointer border-dotted border-transparent hover:border-indigo-500 text-indigo-500"
		>{tech.name}</span
	>
</a>
