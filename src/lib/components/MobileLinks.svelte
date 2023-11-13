<script lang="ts">
	import { CalendarDays, Disc3, UserSquare } from 'lucide-svelte';
	import MobileLinkTile from './MobileLinkTile.svelte';
</script>

<div class="w-screen h-full flex justify-between card py-2 unstyled rounded-none">
	<MobileLinkTile name="shows" href="/shows">
		<Disc3 />
	</MobileLinkTile>
	<MobileLinkTile name="schedule" href="/schedule">
		<CalendarDays />
	</MobileLinkTile>
	<MobileLinkTile name="staff" href="/about/staff">
		<UserSquare />
	</MobileLinkTile>
</div>
