<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import { dev } from '$app/environment';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/">
			<div class="flex gap-2">
				<img class="h-10 w-auto" width="1196" height="252" src="/widelogo.svg" alt="kvcm.live" />
				<span class="chip variant-filled h-min place-self-center">2.0 beta</span>
			</div>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<div class="btn-group variant-filled-primary md:flex hidden">
			<a href="/shows">Shows</a>
			<a href="/schedule">Schedule</a>
			<a href="/about/staff">Staff</a>
			<a href="/about/alumni">Alumni</a>
			{#if dev}
				<a href="/debug">Debug</a>
			{/if}
		</div>
	</svelte:fragment>
</AppBar>
