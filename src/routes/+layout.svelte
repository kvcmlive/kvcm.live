<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';
	import { mutableMediaState, metadata, type MetadataState } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import { browser } from '$app/environment';
	const state = mutableMediaState;

	$state.paused = true;
	$state.currentTime = 0;
	let player;
	function togglePause() {
		$state.paused = !$state.paused;
	}

	let muted = false;
	function toggleMute() {
		$state.muted = !$state.muted;
	}

	$: $metadata, updateMeta();

	$: if (browser && 'mediaSession' in navigator)
		navigator.mediaSession.playbackState = $state.paused ? 'paused' : 'playing';
	function updateMeta() {
		if (browser && $metadata && 'mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: $metadata.title,
				artist: $metadata.artist,
				artwork: [{ src: $metadata.albumart || '/placeholder.jpg' }]
			});
			console.log(navigator.mediaSession.metadata);
		}
	}
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<audio
	bind:this={player}
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
>
	<source src={PUBLIC_AUDIO_ENDPOINT} />
</audio>

<slot />
