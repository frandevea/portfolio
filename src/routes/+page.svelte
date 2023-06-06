<script>
	import OpinionsCarousel from '../components/opinions/OpinionsCarousel.svelte';
	import ProjectGallery from '../components/projects/ProjectGallery.svelte';
	import Header from '../components/Header.svelte';
	import Socials from '../components/Socials.svelte';
	import TechGallery from '../components/technologies/TechGallery.svelte';
</script>

<div class="pt-10 max-w-7xl mx-auto bg-white">
	<div class="px-5 md:px-14">
		<Header />
	</div>
	<div class="px-5 md:px-14">
		<ProjectGallery />
		<TechGallery />
	</div>
</div>

<OpinionsCarousel />
