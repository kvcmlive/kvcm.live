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
						<img class="aspect-square" src={pb.files.getUrl(show, show.cover)} />
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
