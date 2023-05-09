<script lang="ts">
	import { AppShell, AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header"><AppBar>kvcm.live admin</AppBar></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailTile label="Shows" value={0}>📻</AppRailTile>
			<AppRailTile label="Schedule" value={1}>⌚</AppRailTile>
			<AppRailTile label="Log out" value={2}>🚪</AppRailTile>
		</AppRail>
	</svelte:fragment>

	<slot />
</AppShell>
