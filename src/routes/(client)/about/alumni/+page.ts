import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	const alumni = await pb.collection('alumni').getFullList({
		sort: '-end_year'
	});
	return {
		alumni
	};
}) satisfies PageLoad;
