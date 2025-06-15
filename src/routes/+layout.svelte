<script>
	/** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
	let { data, children } = $props();
	import './app.css';
</script>

<div class="drawer fixed z-10 p-8">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<label for="my-drawer"><i class="fa-solid fa-bars"></i></label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a href="#about">About</a></li>
		</ul>
	</div>
</div>
{@render children()}

<style>
	.fa-bars {
		font-size: 30px;
	}

	label {
		cursor: pointer;
	}
</style>
