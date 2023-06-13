<script>
	import me from '$lib/images/opinions/me.jpg';
	import Socials from './Socials.svelte';
</script>

<div class="py-16">
	<div
		class="flex items-center justify-center text-center flex-wrap sm:px-4 gap-x-20 lg:justify-between lg:text-left"
	>
		<div class="">
			<p class="text-4xl mb-1 font-bold max-w-3xl">Hi! I am Fran Perea.</p>
			<p class="text-2xl mb-4 font-bold max-w-xl">
				Transformig <span class="text-indigo-500">ideas</span> into reality through
				<span class="text-indigo-500">software</span> engineering is my calling.
			</p>
			<Socials />
		</div>
		<img src={me} alt="" class="rounded-full" />
	</div>
</div>
