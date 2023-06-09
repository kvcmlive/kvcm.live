import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

console.log(pb);

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
	console.log('authStore changed', auth);
	currentUser.set(pb.authStore.model);
});
