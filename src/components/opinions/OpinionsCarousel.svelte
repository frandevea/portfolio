<script>
	import Marquee from 'svelte-fast-marquee';
	import OpinionCard from './OpinionCard.svelte';
	import { opinions } from '$lib/data/opinions.data';
</script>

<div class="bg-indigo-200 py-4">
	<Marquee direction="left" pauseOnClick={true} speed={10}>
		{#each opinions as opinion}
			<OpinionCard {opinion} />
		{/each}
	</Marquee>
</div>
