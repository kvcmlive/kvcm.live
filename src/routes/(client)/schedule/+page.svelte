<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import { pb } from '$lib/pocketbase';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { addHours, differenceInMilliseconds, getDay, getHours, startOfHour, sub } from 'date-fns';

	export let data;

	console.log(data);

	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

	function formatHour(hour: number) {
		if (hour == 0) {
			return '12:00 AM';
		} else if (hour <= 12) {
			return `${hour}:00 AM`;
		} else {
			return `${hour - 12}:00 PM`;
		}
	}

	let date = new Date(startOfHour(Date.now()));
	let highlight = { day: 7, hour: 24 };
	function highlightCurrent() {
		let day = getDay(date) - 1;
		day = day === -1 ? 6 : day; // sunday is returned as 0 for some reason, and gets shifted to -1
		let hour = getHours(date);

		highlight = { day, hour };
		console.log(highlight);

		date = addHours(date, 1);
		let interval = differenceInMilliseconds(date, Date.now());

		setInterval(highlightCurrent, interval);
	}
	highlightCurrent();
</script>

<Title text="Schedule" />

<div class="container m-auto flex flex-col gap-4 py-4">
	<h1>Schedule</h1>
	<hr />
	<div class="overflow-auto">
		<table class="table table-interactive h-full overflow-auto rounded-lg">
			<thead class="sticky top-0 max-h-full z-10">
				<tr>
					<th class="table-cell-fit sticky left-0 bg-surface-700">Hour</th>
					<th>Monday</th>
					<th>Tuesday</th>
					<th>Wednesday</th>
					<th>Thursday</th>
					<th>Friday</th>
					<th>Saturday</th>
					<th>Sunday</th>
				</tr>
			</thead>
			<tbody>
				{#each data.schedule as hour}
					<tr>
						<td class="table-cell-fit sticky left-0 bg-surface-700">{formatHour(hour.hour)}</td>
						{#each days as day, i}
							<td
								class={highlight.day === i && highlight.hour === hour.hour
									? 'table-row-checked'
									: ''}
							>
								{#if hour.expand[day]}
									<div class="flex gap-2 place-items-center">
										{#if hour.expand[day].cover}
											<Avatar
												src={pb.files.getUrl(hour.expand[day], hour.expand[day].cover, {
													thumb: '256x256'
												})}
												width="w-14"
												rounded="rounded-lg"
											/>
										{/if}
										<a href="/shows/{hour.expand[day].id}">
											{hour.expand[day].title}<br />
											{hour.expand[day].hosts}
										</a>
									</div>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
