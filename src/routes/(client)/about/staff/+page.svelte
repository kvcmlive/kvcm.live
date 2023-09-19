<script lang="ts">
	import { pb } from '$lib/pocketbase.js';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;

	console.log(data);
</script>

<div class="container m-auto flex flex-col gap-4 py-4">
	<h1 class="h1">Staff</h1>

	<hr />

	<ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
		{#each data.staff as member}
			<li class="card flex overflow-clip">
				<Avatar
					src={pb.files.getUrl(member, member.avatar)}
					fallback="/static/placeholder.jpg"
					width="w-48"
					rounded="rounded-none"
				/>
				<div class="p-2 px-4">
					<p class="h3">{member.name}</p>
					<p>{@html member.roles}</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
