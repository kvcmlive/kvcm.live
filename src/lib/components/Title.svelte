<script lang="ts">
	import { mediaState, metadata } from '$lib/GlobalStore';
	export let text: String | undefined;
</script>

<svelte:head>
	<title>
		{$mediaState.paused ? '⏸️' : `▶️`}
		{!$mediaState.paused && !text && $metadata.title !== 'No program information.'
			? $metadata.title
			: ''}
		{' | '}
		{text ? text + ' | ' : ''} kvcm.live
	</title>
</svelte:head>
