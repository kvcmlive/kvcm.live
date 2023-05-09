<script lang="ts">
	import MobileLinkTile from './MobileLinkTile.svelte';
</script>

<div class="w-screen h-full flex justify-between card py-2 unstyled rounded-none">
	<MobileLinkTile name="shows" href="/shows">💽</MobileLinkTile>
	<MobileLinkTile name="schedule" href="/schedule">🗓️</MobileLinkTile>
	<MobileLinkTile name="debug" href="/debug">🪰</MobileLinkTile>
</div>
