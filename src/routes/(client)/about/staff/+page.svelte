<script lang="ts">
	import { pb } from '$lib/pocketbase.js';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;

	console.log(data);
</script>

<div class="container m-auto flex flex-col gap-4 py-4">
	<h1 class="h1">Shows</h1>

	<hr />

	<ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
		{#each data.staff as member}
			<div>
				<img src={pb.files.getUrl(member, member.avatar)} />
				<div>{member.name}</div>
				<div>{@html member.roles}</div>
			</div>
		{/each}
	</ul>
</div>
rge
