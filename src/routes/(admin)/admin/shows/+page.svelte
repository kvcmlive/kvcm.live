<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead"><h2>Shows</h2></svelte:fragment>
	<svelte:fragment slot="trail">
		<a class="btn variant-filled" href="/admin/shows/new">Add show</a>
	</svelte:fragment>
</AppBar>
