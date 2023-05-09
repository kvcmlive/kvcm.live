<script lang="ts">
	let email = '';
	let password = '';

	import { currentUser, pb } from '$lib/admin/pocketbase';

	async function login() {
		let r = await pb.collection('users').authWithPassword(email, password);
		console.log(r);
	}
</script>

<div class="h-full content-center flex">
	{#if $currentUser}
		<div class="card p-4 m-auto">
			<span>you are now logged in</span>
			<a class="btn btn-sm variant-filled" href="/admin">go to dashboard</a>
		</div>
	{:else}
		<form
			class="card p-4 m-auto w-72 flex flex-col gap-2 content-center"
			on:submit|preventDefault={login}
		>
			<input class="input" bind:value={email} placeholder="email/username" type="text" />
			<input class="input" bind:value={password} placeholder="password" type="password" />
			<input type="submit" class="btn variant-filled" />
		</form>
	{/if}
</div>
