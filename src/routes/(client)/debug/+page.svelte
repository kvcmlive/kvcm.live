<script lang="ts">
	import { stringify } from 'postcss';
	import { onMount } from 'svelte';
	import { mediaState, metadata } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import Title from '$lib/components/Title.svelte';

	const state = mediaState;
</script>

<Title text="Debug" />

<p>buffered: {JSON.stringify($state.buffered)}</p>
<p>current time: {$state.currentTime}</p>
<p>duration: {$state.duration}</p>
<p>ended: {$state.ended}</p>
<p>muted: {$state.muted}</p>
<p>paused: {$state.paused}</p>
<p>playback rate: {$state.playbackRate}</p>
<p>played: {JSON.stringify($state.played)}</p>
<p>ready state: {JSON.stringify($state.readyState)}</p>
<p>seekable: {JSON.stringify($state.seekable)}</p>
<p>seeking: {$state.seeking}</p>
<p>volume: {$vol}</p>
<p>meta: {JSON.stringify($metadata)}</p>
