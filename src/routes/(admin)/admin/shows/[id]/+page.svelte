<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">Go back</svelte:fragment>
	<h2>Shows</h2>
	<svelte:fragment slot="trail"><a class="btn variant-filled">Delete show</a></svelte:fragment>
</AppBar>
