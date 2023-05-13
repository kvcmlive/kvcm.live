<script lang="ts">
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';
	import type { MetadataState, PlaybackState } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import type { Writable } from 'svelte/store';

	// This is the global player element, and only one should be initialized for each session.

	export let state: Writable<PlaybackState>;
</script>

<div id="player">
	{#if !$state.paused}
		<audio
			bind:duration={$state.duration}
			bind:buffered={$state.buffered}
			bind:played={$state.played}
			bind:seekable={$state.seekable}
			bind:seeking={$state.seeking}
			bind:ended={$state.ended}
			bind:readyState={$state.readyState}
			bind:playbackRate={$state.playbackRate}
			bind:volume={$vol}
			bind:paused={$state.paused}
			bind:muted={$state.muted}
			preload="none"
		>
			<source src={PUBLIC_AUDIO_ENDPOINT} />
		</audio>
	{/if}
</div>
