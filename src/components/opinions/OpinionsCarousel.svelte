<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import OpinionCard from './OpinionCard.svelte';
	import { opinions } from '$lib/data/opinions.data';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css/core';
</script>

<Splide
	aria-label="Opinion Cards"
	class="bg-indigo-200 py-4 mt-2"
	extensions={{ AutoScroll }}
	options={{
		type: 'loop',
		drag: 'free',
		focus: 'center',
		perPage: 3,
		autoScroll: {
			speed: 0.2
		},
		rewind: false,
		gap: '1rem',
		arrows: false,
		autoHeight: true,
		autoWidth: true,
		pauseOnHover: false
	}}
>
	{#each opinions as opinion}
		<SplideSlide>
			<OpinionCard {opinion} />
		</SplideSlide>
	{/each}
</Splide>
