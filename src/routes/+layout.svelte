<script lang="ts">
	import '../app.postcss';
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';
	import { mutableMediaState, metadata, type MetadataState } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import { browser } from '$app/environment';
	import Player from '$lib/components/Player.svelte';
	const state = mutableMediaState;

	$state.paused = true;
	$state.currentTime = 0;
	let player: HTMLMediaElement;
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
	<meta name="description" content="95.1 KVCM, Monarch Radio, The Voice of Valley College." /><meta
		property="og:type"
		content="website"
	/>
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="kvcm.live" />
	<meta property="og:title" content="Home" />
	<meta property="og:url" content="http://kvcm.live/" />
	<meta
		property="og:description"
		content="95.1 KVCM, Monarch Radio, The Voice of Valley College."
	/>
	<meta property="og:image" content="http://kvcm.live/assets/images/square.jpg" />
	<meta name="twitter:site" content="@kvcmlive" />
	<meta name="twitter:title" content="Home" />
	<meta
		name="twitter:description"
		content="95.1 KVCM, Monarch Radio, The Voice of Valley College."
	/>
	<meta name="twitter:url" content="http://kvcm.live/" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:image" content="http://kvcm.live/assets/images/square.jpg" />
</svelte:head>

<Player {state} />

<slot />
