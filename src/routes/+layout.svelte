<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Francisco Perea</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Francisco Perea Torá - Software Engineer" />
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
	/>
</svelte:head>
<div class="bg-zinc-50">
	<div class="bg-white max-w-6xl mx-auto min-h-screen flex flex-col">
		<main>
			<slot />
		</main>
	</div>
</div>
