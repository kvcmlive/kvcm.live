export const ssr = false;

import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { currentUser } from '$lib/admin/pocketbase';
import { get } from 'svelte/store';

export const load = (() => {
	if (!get(currentUser)) {
		throw redirect(307, '/admin/login');
	}
}) satisfies LayoutLoad;
