<script lang="ts">
	import { pb } from '$lib/pocketbase';

	export let data;

	console.log('data:', data.shows);
</script>

<div class="container m-auto flex flex-col gap-4 py-4">
	<h1>Shows</h1>

	<hr />

	<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
		{#each data.shows as show}
			{#if true}
				<li>
					<a href="/shows/{show.id}" class="card card-hover">
						{#if show.cover}
							<div class="card card-hover variant-ghost overflow-clip">
								<img
									class="aspect-square w-full"
									src={pb.files.getUrl(show, show.cover)}
									alt={show.title}
								/>
							</div>
						{:else}
							<div
								class="flex w-full h-full aspect-square justify-center items-center card variant-ghost card-hover"
							>
								<h2 class="text-center">{show.title}</h2>
							</div>
						{/if}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
