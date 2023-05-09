import { browser } from '$app/environment';
import { derived, readable, readonly, writable } from 'svelte/store';

export type PlaybackState = {
	duration: number | undefined;
	buffered: any | undefined;
	played: any | undefined;
	seekable: any | undefined;
	seeking: boolean | undefined;
	ended: boolean | undefined;
	readyState: number | undefined;
	currentTime: number | undefined;
	playbackRate: number | undefined;
	paused: boolean | undefined;
	volume: number | undefined;
	muted: boolean | undefined;
};

export const mutableMediaState = writable<PlaybackState>({
	duration: undefined,
	buffered: undefined,
	played: undefined,
	seekable: undefined,
	seeking: undefined,
	ended: undefined,
	readyState: undefined,
	currentTime: undefined,
	playbackRate: undefined,
	paused: undefined,
	volume: undefined,
	muted: undefined
});

export const mediaState = readonly(mutableMediaState);

export type MetadataState = {
	title?: string;
	artist?: string;
	albumart?: string;
};

export const metadata = readable<MetadataState>(undefined, (set) => {
	const updateMeta = async () => {
		set({
			title: 'Show title',
			artist: 'Example DJ',
			albumart: '/placeholder.jpg'
		});
	};

	if (browser) updateMeta();
});
