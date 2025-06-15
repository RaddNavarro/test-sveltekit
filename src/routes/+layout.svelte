<script>
	/** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
	let { data, children } = $props();
	import './app.css';
</script>

<div class="drawer lg:drawer-open fixed p-8 z-10 w-50">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content"></div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="underline list-inside p-0">
			<li><a href="/">Home</a></li>
			<li><a href="#about">About</a></li>
		</ul>
	</div>
</div>
{@render children()}

<style>
	/* .fa-bars {
		font-size: 30px;
	} */

	label {
		cursor: pointer;
	}
</style>
