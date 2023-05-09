<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead"><button>⬅️</button></svelte:fragment>
	<h2>Add a show</h2>
</AppBar>

<div class="p-4">
	<form>
		<label>
			Show Title
			<input class="input" name="title" />
		</label>
	</form>
</div>
