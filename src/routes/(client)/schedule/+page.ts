import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load = (async () => {
	const schedule = await pb.collection('schedule').getFullList({
		sort: '+hour',
		expand: 'mon,tue,wed,thu,fri,sat,sun'
	});
	return {
		schedule
	};
}) satisfies PageLoad;
