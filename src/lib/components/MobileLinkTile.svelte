<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<a {href} class="flex flex-col place-items-center card-hover w-full flex-grow unstyled">
	<div class="text-xl">
		<slot>(logo)</slot>
	</div>
	<span class="text-sm">{name}</span>
</a>
