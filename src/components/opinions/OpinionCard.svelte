<script lang="ts">
	import type { Opinion } from '../../lib/types/opinion.interface';

	export let opinion: Opinion;
</script>

<div class="bg-indigo-50 rounded-xl p-8 md:p-0 m-3">
	<figure class=" md:p-8 text-center md:text-left space-y-4">
		<blockquote>
			<p class="text-sm max-w-sm font-medium text-justify">
				“{opinion.description}”
			</p>
		</blockquote>

		<figcaption class="font-medium">
			<div class="flex items-center justify-start">
				<img class="md:h-auto rounded-full" src={opinion?.picture} alt="" width="100px" />
				<div class="pl-5 text-left">
					<div class="text-indigo-500">{opinion.name}</div>
					<div class=" ">
						{opinion.position}, {opinion.company}
					</div>
				</div>
			</div>
		</figcaption>
	</figure>
</div>
