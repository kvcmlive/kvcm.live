import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const show = await pb.collection('shows').getOne(params.id);

	const cover = pb.files.getUrl(show, show.cover);

	return {
		show,
		cover
	};
}) satisfies PageLoad;
