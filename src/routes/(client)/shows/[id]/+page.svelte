<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	export let data;
</script>

<Title text={data.show.title} />

<div class="container m-auto p-2 flex flex-col gap-2">
	<h1>{data.show.title}</h1>
	<hr />
	<div class="flex flex-col md:flex-row gap-2">
		<div class="card overflow-clip w-full md:w-96">
			<div class="aspect-square w-full bg-red-500">
				<img src={data.cover} class="object-cover" />
			</div>
			<div class="p-2">
				<h3>Hosted by {data.show.hosts}</h3>
				<h3>{data.show.status}</h3>
			</div>
		</div>

		<p>{@html data.show.description}</p>
	</div>
</div>
