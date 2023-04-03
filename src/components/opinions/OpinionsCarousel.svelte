<script>
	import Marquee from 'svelte-fast-marquee';
	import OpinionCard from './OpinionCard.svelte';
	import { opinions } from './opinions.data';
	import { each } from 'svelte/internal';
</script>

<div class="bg-indigo-200 py-4">
	<Marquee direction="right" speed={10}>
		{#each opinions as opinion}
			<OpinionCard {opinion} />
		{/each}
	</Marquee>
</div>
