<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import { pb } from '$lib/pocketbase';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let data;

	console.log('data:', data.shows);

	let showType = 'show';
</script>

<Title text="Shows" />

<div class="container m-auto flex flex-col gap-4 py-4">
	<div class="flex place-items-center justify-between">
		<h1 class="h1">Shows</h1>

		<RadioGroup>
			<RadioItem bind:group={showType} name="filter" value="show">Shows</RadioItem>
			<RadioItem bind:group={showType} name="filter" value="podcast">Podcasts</RadioItem>
		</RadioGroup>
	</div>

	<hr />

	<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
		{#each data.shows as show}
			{#if show.type === showType}
				<li>
					<a href="/shows/{show.id}" class="card card-hover">
						{#if show.cover}
							<div class="card card-hover variant-ghost overflow-clip">
								<img
									class="aspect-square w-full"
									src={pb.files.getUrl(show, show.cover, { thumb: '256x256' })}
									srcset="{pb.files.getUrl(show, show.cover, { thumb: '128x128' })} 128w,
											{pb.files.getUrl(show, show.cover, { thumb: '256x256' })} 256w,
											{pb.files.getUrl(show, show.cover, { thumb: '512x512' })} 512w,
											{pb.files.getUrl(show, show.cover, { thumb: '1024x1024' })} 1024w "
									alt={show.title}
									loading=""
								/>
							</div>
						{:else}
							<div
								class="flex w-full h-full aspect-square justify-center items-center card variant-ghost card-hover"
							>
								<p class="text-center h2">{show.title}</p>
							</div>
						{/if}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
