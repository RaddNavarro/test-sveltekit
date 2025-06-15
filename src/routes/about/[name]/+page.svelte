<script>
	import { page } from '$app/state';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	const { name } = page.params;
</script>

<h1>This is about {name}</h1>
