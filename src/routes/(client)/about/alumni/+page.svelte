<script lang="ts">
	import { pb } from '$lib/pocketbase.js';

	export let data;

	console.log(data);
</script>

<div class="container m-auto flex flex-col gap-4 py-4">
	<h1 class="h1">Alumni</h1>

	<hr />

	<p>
		Welcome to our Alumni page of student DJs, station staff, and club officers who over the years
		have helped make the new 95.1 KVCM, Monarch Radio, the most successful lab on campus for
		students’ growth and creativity in Broadcasting.
	</p>

	<p>
		If you are a KVCM Alumni and had a radio show, staff position, were part of the Broadcasting
		club, and/or are a radio broadcasting department graduate, please fill out this
		<a class="anchor" href="https://forms.gle/m118i8NLmyNSYZ9f8">short form</a> so we can acknowledge
		your contributions.
	</p>

	<ul class="">
		{#each data.alumni as alum}
			<li class="">
				<div class="">
					<p class="h3">{alum.name}</p>
					<p class="h4">{alum.start_year}-{alum.end_year}</p>
					<p>{@html alum.description}</p>

					<hr class="p-2" />
				</div>
			</li>
		{/each}
	</ul>

	<p>
		To reach any of our KVCM alumni send an email to
		<a class="anchor" href="mailto:kvcm@lavc.edu">kvcm@lavc.edu</a>
		with the alum’s name in the subject line.
	</p>
</div>
