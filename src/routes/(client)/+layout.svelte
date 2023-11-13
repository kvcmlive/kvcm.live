<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { AppBar, AppShell, Avatar, ProgressBar } from '@skeletonlabs/skeleton';

	import { mutableMediaState, metadata, type MetadataState } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import MobileLinks from '$lib/components/MobileLinks.svelte';
	import { VolumeX, Volume2, Play, Pause, Maximize } from 'lucide-svelte';
	const state = mutableMediaState;

	function togglePause() {
		$state.paused = !$state.paused;
	}

	let muted = false;
	function toggleMute() {
		$state.muted = !$state.muted;
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<div>
		<slot />
	</div>
	<svelte:fragment slot="footer">
		{#if !$state.paused && $state.readyState < 3}
			<ProgressBar value={undefined} />
		{/if}
		<div class="hidden sm:block">
			<AppBar
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
			>
				<svelte:fragment slot="lead">
					<button
						class="text-3xl"
						on:click={togglePause}
						aria-label={$state.paused ? 'Play' : 'Pause'}
					>
						{#if $state.paused}
							<Play />
						{:else}
							<Pause />
						{/if}
					</button>
				</svelte:fragment>

				<div class="flex place-items-center gap-2">
					<div>
						<Avatar src={$metadata.albumart} width="w-14" rounded="rounded-lg" />
					</div>
					<div class="flex flex-col">
						<p class="font-bold">{$metadata.title}</p>
						<p>{$metadata.artist}</p>
					</div>
				</div>

				<svelte:fragment slot="trail">
					<div class="flex place-items-center gap-2">
						<button class="text-3xl" on:click={toggleMute} aria-label="Mute">
							{#if $state.muted}
								<VolumeX />
							{:else}
								<Volume2 />
							{/if}
						</button>

						<input
							type="range"
							class="max-w-32 w-32"
							min="0"
							max="1"
							step="0.01"
							bind:value={$vol}
							aria-label="Volume"
						/>

						<span>{Math.floor($vol * 100)}% </span>

						<a class="text-3xl" href="/" aria-label="Maximize">
							<Maximize />
						</a>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>

		<div class="sm:hidden block">
			<AppBar>
				<svelte:fragment slot="lead">
					<button
						class="text-3xl"
						on:click={togglePause}
						aria-label={$state.paused ? 'Play' : 'Pause'}
					>
						{#if $state.paused}
							<Play />
						{:else}
							<Pause />
						{/if}
					</button>
				</svelte:fragment>
				<a href="/" class="unstyled w-screen">
					<div class="place-items-center gap-2 flex">
						<div>
							<Avatar src={$metadata.albumart} width="w-14" rounded="rounded-lg" />
						</div>
						<div class="flex flex-col">
							<p>{$metadata.title}</p>
							<p>{$metadata.artist}</p>
						</div>
					</div>
				</a>
			</AppBar>
			<MobileLinks />
		</div>
	</svelte:fragment>
</AppShell>
