import { browser } from '$app/environment';
import { derived, readable, readonly, writable } from 'svelte/store';
import { addHours, differenceInMilliseconds, getDay, getHours, startOfHour, sub } from 'date-fns';
import { pb } from '$lib/pocketbase';

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

const numToRow: Record<number, string> = {
	1: 'mon',
	2: 'tue',
	3: 'wed',
	4: 'thu',
	5: 'fri',
	6: 'sat',
	0: 'sun'
};

export const metadata = readable<MetadataState>({}, (set) => {
	const updateMeta = async (day: string, hour: number) => {
		const record = await pb.collection('schedule').getFirstListItem(`hour="${hour}"`, {
			expand: `${day}`
		});

		const show = record.expand[day];

		if (!show) {
			set({
				title: 'No program information.',
				artist: 'No host information.',
				albumart: '/placeholder.jpg'
			});

			return;
		}

		const meta = {
			title: show.title || 'No program information.',
			artist: show.hosts || 'No host information.',
			albumart: pb.files.getUrl(show, show.cover) || '/placeholder.jpg'
		};

		set(meta);
	};

	let date = new Date(startOfHour(Date.now()));
	function initMetadata() {
		const day = numToRow[getDay(date)];
		const hour = getHours(date);

		updateMeta(day, hour);

		date = addHours(date, 1);
		const interval = differenceInMilliseconds(date, Date.now());

		setInterval(initMetadata, interval);
	}

	if (browser) initMetadata();
});
