<script lang="ts">
	export let data;

	console.log(data);

	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
</script>

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
						<td class="table-cell-fit sticky left-0 bg-surface-700">{hour.hour}</td>
						{#each days as day}
							<td>
								{#if hour.expand[day]}
									<a href="/shows/{hour.expand[day].id}">
										{hour.expand[day].title}<br />
										{hour.expand[day].hosts}
									</a>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
