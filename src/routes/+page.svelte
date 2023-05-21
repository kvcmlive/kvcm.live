<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { AppBar, AppShell, Avatar, ProgressBar } from '@skeletonlabs/skeleton';
	import { mutableMediaState, metadata, type MetadataState } from '../lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import MobileLinks from '$lib/components/MobileLinks.svelte';
	import Title from '$lib/components/Title.svelte';
	const state = mutableMediaState;

	function togglePause() {
		$state.paused = !$state.paused;
	}

	let muted = false;
	function toggleMute() {
		$state.muted = !$state.muted;
	}
</script>

<Title text={undefined} />

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
		{#if !$state.paused && $state.readyState < 3}
			<ProgressBar value={undefined} />
		{/if}
	</svelte:fragment>
	<div
		class="h-full flex flex-col md:flex-row text-center md:text-left place-content-center place-items-center gap-8"
	>
		<div>
			<img src={$metadata.albumart} class="w-96" alt={$metadata.title} />
		</div>
		<div class="flex flex-col gap-4">
			<div>
				<h1>{$metadata.title}</h1>
				<h2>{$metadata.artist}</h2>
			</div>
			<hr />
			<div>
				<button
					class="text-3xl"
					on:click={togglePause}
					aria-label={$state.paused ? 'Play' : 'Pause'}
				>
					{$state.paused ? '▶️' : '⏸️'}
				</button>
			</div>
			<div class="flex place-items-center gap-2">
				<span>{Math.floor($vol * 100)}% </span>
				<input
					type="range"
					class="max-w-32 w-32"
					min="0"
					max="1"
					step="0.01"
					bind:value={$vol}
					aria-label="Volume"
				/>

				<button class="text-3xl" on:click={toggleMute} aria-label="Mute">
					{$state.muted ? '🔇' : '🔊'}
				</button>
			</div>
		</div>
	</div>
	<svelte:fragment slot="footer">
		<div class="block md:hidden">
			<MobileLinks />
		</div>
	</svelte:fragment>
</AppShell>
