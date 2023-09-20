<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/">
			<div class="flex gap-2">
				<img class="h-10" src="/widelogo.svg" alt="kvcm.live" />
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
			<a href="/debug">Debug</a>
		</div>
	</svelte:fragment>
</AppBar>
