<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import { pb } from '$lib/pocketbase.js';

	export let data;
</script>

<Title text={data.show.title} />

<div class="container m-auto flex flex-col gap-4 py-4">
	<h1 class="h1">{data.show.title}</h1>
	<hr />
	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
		<div class="card overflow-clip w-full md:w-96 col-span-1 h-min">
			<div class="aspect-square w-full bg-red-500">
				{#if data.show.cover}
					<img
						class="aspect-square w-full"
						src={pb.files.getUrl(data.show, data.show.cover, { thumb: '256x256' })}
						srcset="{pb.files.getUrl(data.show, data.show.cover, { thumb: '128x128' })} 128w,
							{pb.files.getUrl(data.show, data.show.cover, { thumb: '256x256' })} 256w,
							{pb.files.getUrl(data.show, data.show.cover, { thumb: '512x512' })} 512w,
							{pb.files.getUrl(data.show, data.show.cover, { thumb: '1024x1024' })} 1024w "
						alt={data.show.title}
					/>
				{:else}
					<img class="aspect-square w-full" src="/placeholder.jpg" alt={data.show.title} />
				{/if}
			</div>
			<div class="p-2">
				{#if data.show.hosts}
					<h3 class="h3">Hosted by {data.show.hosts}</h3>
				{/if}
				{#if data.show.status}
					<h3 class="h3">{data.show.status}</h3>
				{/if}
			</div>
		</div>

		<p class="md:col-span-2 lg:col-span-3 p-2">{@html data.show.description}</p>
	</div>
</div>
