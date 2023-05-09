<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { AppBar, AppShell, Avatar } from '@skeletonlabs/skeleton';

	import { mutableMediaState, metadata, type MetadataState } from '$lib/GlobalStore';
	import { vol } from '$lib/VolumeStore';
	import MobileLinks from '$lib/components/MobileLinks.svelte';
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
		<div class="hidden sm:block">
			<AppBar
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
			>
				<svelte:fragment slot="lead">
					<button class="text-3xl" on:click={togglePause}>
						{$state.paused ? '▶️' : '⏸️'}
					</button>
				</svelte:fragment>

				<div class="flex place-items-center gap-2">
					<div>
						<Avatar src={$metadata.albumart} width="w-14" rounded="rounded-lg" />
					</div>
					<div class="flex flex-col">
						<p>{$metadata.title}</p>
						<p>{$metadata.artist}</p>
					</div>
				</div>

				<svelte:fragment slot="trail">
					<div class="place-items-center gap-2 flex">
						<span>{Math.floor($vol * 100)}% </span>
						<input
							type="range"
							class="max-w-32 w-32"
							min="0"
							max="1"
							step="0.01"
							bind:value={$vol}
						/>

						<button class="text-3xl" on:click={toggleMute}>
							{$state.muted ? '🔇' : '🔊'}
						</button>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>

		<div class="sm:hidden block">
			<AppBar>
				<svelte:fragment slot="lead">
					<button class="text-3xl" on:click={togglePause}>
						{$state.paused ? '▶️' : '⏸️'}
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