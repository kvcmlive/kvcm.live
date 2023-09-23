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
		class="h-full flex flex-col md:flex-row text-center md:text-left place-content-center place-items-center gap-8 bg-gradient-to-br variant-gradient-primary-secondary"
	>
		<div class="aspect-square w-96">
			<img src={$metadata.albumart} class="w-96" width="500" height="500" alt={$metadata.title} />
		</div>
		<div class="flex flex-col gap-4">
			<div>
				<h1 class="h1">{$metadata.title}</h1>
				<h2 class="h2">{$metadata.artist}</h2>
			</div>
			<hr />
			<div class="flex w-full content-center md:justify-between flex-col md:flex-row">
				<button
					class="text-3xl"
					on:click={togglePause}
					aria-label={$state.paused ? 'Play' : 'Pause'}
				>
					{$state.paused ? '▶️' : '⏸️'}
				</button>

				<div class="flex place-items-center gap-2">
					<button class="text-3xl" on:click={toggleMute} aria-label="Mute">
						{$state.muted ? '🔇' : '🔊'}
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

					<span>{Math.floor($vol * 100)}% </span>
				</div>
			</div>
		</div>
	</div>
	<svelte:fragment slot="footer">
		<div class="block md:hidden">
			<MobileLinks />
		</div>
	</svelte:fragment>
</AppShell>
