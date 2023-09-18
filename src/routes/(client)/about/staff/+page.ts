import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load = (async () => {
	const staff = await pb.collection('staff').getFullList({
		sort: '+sort'
	});
	return {
		staff
	};
}) satisfies PageLoad;
