import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const show = await pb.collection('shows').getOne(params.id);

	return {
		show
	};
}) satisfies PageLoad;
