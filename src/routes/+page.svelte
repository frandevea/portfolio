<script>
	import OpinionsCarousel from '../components/opinions/OpinionsCarousel.svelte';
	import WelcomeText from '../components/WelcomeText.svelte';
	import { opinions } from '../components/opinions/opinions.data';

	import OpinionCard from '../components/opinions/OpinionCard.svelte';
	import ProjectGallery from '../components/projects/ProjectGallery.svelte';
</script>

<div class="py-10">
	<div class="px-5 md:px-14">
		<WelcomeText />
	</div>

	<OpinionsCarousel />
	<div class="px-5 md:px-14">
		<p class="text-4xl mb-1 text-left font-bold py-14 text-center">My latest projects</p>
		<ProjectGallery />
	</div>
</div>
