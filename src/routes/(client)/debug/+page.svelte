<script lang="ts">
	import { onMount } from 'svelte';
	import { mediaState, metadata } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import Title from '$lib/components/Title.svelte';
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';

	$: state = $mediaState;
</script>

<Title text="Debug" />

<p>buffered: {JSON.stringify(state.buffered)}</p>
<p>current time: {state.currentTime}</p>
<p>duration: {state.duration}</p>
<p>ended: {state.ended}</p>
<p>muted: {state.muted}</p>
<p>paused: {state.paused}</p>
<p>playback rate: {state.playbackRate}</p>
<p>played: {JSON.stringify(state.played)}</p>
<p>ready state: {JSON.stringify(state.readyState)}</p>
<p>seekable: {JSON.stringify(state.seekable)}</p>
<p>seeking: {state.seeking}</p>
<p>volume: {$vol}</p>
<p>meta: {JSON.stringify($metadata)}</p>

{#if !state.played}
	{#if state.src === PUBLIC_AUDIO_ENDPOINT}
		<button
			class="btn variant-filled"
			on:click={() => {
				state.src = 'https://stream.gensokyoradio.net/3';
			}}>switch to gensokyo radio</button
		>
	{:else}
		<button
			class="btn variant-filled"
			on:click={() => {
				state.src = PUBLIC_AUDIO_ENDPOINT;
			}}>switch to kvcm radio</button
		>
	{/if}
{/if}
