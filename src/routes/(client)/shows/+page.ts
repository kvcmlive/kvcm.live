import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load = (async () => {
	const shows = await pb.collection('shows').getFullList();

	return {
		shows
	};
}) satisfies PageLoad;
