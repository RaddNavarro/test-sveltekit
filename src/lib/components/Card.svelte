<script>
	let { cardItems } = $props();
</script>

<main class="main flex gap-7">
	{#each cardItems as item}
		<a href={item.url} target="_blank">
			<div class="card p-8 flex-col gap-7">
				<!-- insert image here -->
				<img src={item.image} alt="images" />

				<!-- <hr /> -->
				<div class="label-container flex items-center justify-center">
					<p>{item.label}</p>
				</div>
			</div>
		</a>
	{/each}
</main>

<style>
	main {
		max-width: 1284px;
		flex-wrap: wrap;
	}

	a {
		flex: 1;
	}
	.card {
		background-color: #1a1b26;
		max-width: 100%;
		min-width: 300px;
		border-radius: 8px;
		min-height: 190px;
		cursor: pointer;
		transition: 150ms ease;
		border-width: 2px;
		border-color: #7aa2f7;
		opacity: 1;
		border-style: none;
	}

	.card:hover {
		transform: translateY(-10px);
		border-style: solid;
	}

	.main:has(.card:hover) .card:not(:hover) {
		opacity: 0.5;
	}

	p {
		font-size: 18px;
	}

	.card img {
		height: 100px;
		width: 100px;
		object-fit: contain;
		align-self: center;
	}
</style>
