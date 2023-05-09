<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/">
			<div class="flex gap-2">
				<img class="h-10" src="/widelogo.png" alt="kvcm.live" />
				<span class="chip variant-filled">2.0 beta</span>
			</div>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="btn-group variant-filled md:flex hidden">
			<a href="/shows">Shows</a>
			<a href="/schedule">Schedule</a>
			<a href="/debug">Debug</a>
		</div>
	</svelte:fragment>
</AppBar>
