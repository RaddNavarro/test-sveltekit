<script>
	/** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
	let { data, children } = $props();
	import './app.css';
</script>

<nav>
	<ul class="w-full">
		<input type="checkbox" id="sidebar-active" />
		<label for="sidebar-active" class="open-sidebar-btn fixed p-4 z-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#e3e3e3"
				><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
			>
		</label>

		<label id="overlay" for="sidebar-active"></label>

		<div class="links-container fixed p-8 z-10">
			<label for="sidebar-active" class="close-sidebar-btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#e3e3e3"
					><path
						d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
					/></svg
				>
			</label>
			<li><a href="/">[H]ome </a></li>
			<li><a href="#about">[A]bout </a></li>
			<li><a href="#contacts">[C]ontacts </a></li>
		</div>
	</ul>
</nav>

{@render children()}

<style>
	/* .fa-bars {
		font-size: 30px;
	} */

	a:hover {
		background-color: #7aa2f7;
		color: #1a1b26;
	}
	a:focus {
		background-color: #7aa2f7;
		color: #1a1b26;
	}

	a {
		display: block;
		width: 150px;
		color: #fffcb0;
	}

	#sidebar-active {
		display: none;
	}

	.open-sidebar-btn,
	.close-sidebar-btn {
		display: none;
	}

	@media (max-width: 500px) {
		.links-container {
			left: -8%;
			opacity: 0%;
			flex-direction: column;
			padding: 16px;
			z-index: 10;

			transition: 0.1s ease-out;
		}
		.open-sidebar-btn,
		.close-sidebar-btn {
			display: block;
		}

		#sidebar-active:checked ~ .links-container {
			left: 0;
			opacity: 100%;
		}
		#sidebar-active:checked ~ .open-sidebar-btn {
			display: none;
		}

		#sidebar-active:checked ~ #overlay {
			height: 100%;
			width: 100%;
			position: fixed;
			top: 0;
			right: 0;
			z-index: 9;
		}
	}
</style>
