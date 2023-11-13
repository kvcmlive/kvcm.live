<script>
	import { mutableMediaState, metadata } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import { VolumeX, Volume2 } from 'lucide-svelte';

	const state = mutableMediaState;

	let muted = false;
	function toggleMute() {
		$state.muted = !$state.muted;
	}
</script>

<div id="volume" class="flex place-items-center gap-2 my-4 md:my-0">
	<button class="text-3xl" on:click={toggleMute} aria-label="Mute">
		{#if $state.muted}
			<VolumeX />
		{:else}
			<Volume2 />
		{/if}
	</button>

	<input
		type="range"
		class="md:max-w-32 w-full"
		min="0"
		max="1"
		step="0.01"
		bind:value={$vol}
		aria-label="Volume"
	/>

	<span>{Math.floor($vol * 100)}%</span>
</div>
