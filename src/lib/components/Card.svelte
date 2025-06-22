<script>
	let { cardItems } = $props();
</script>

<main class="main flex gap-7">
	{#each cardItems as item}
		<div class="card p-8 flex flex-col gap-7">
			<!-- insert image here -->
			<img src={item.image} alt="images" />

			<!-- <hr /> -->
			<div class="label-container flex items-center justify-center">
				<p>{item.label}</p>
			</div>
		</div>
	{/each}
</main>

<style>
	.card {
		background-color: #1a1b26;
		max-width: 300px;
		min-width: 300px;
		border-radius: 8px;
		min-height: 190px;
		cursor: pointer;
		transition: 300ms ease;
		opacity: 1;
	}

	.card:hover {
		transform: translateY(-10px);
	}

	.main:has(.card:hover) .card:not(:hover) {
		opacity: 0.5;
	}
	/* hr { */
	/* color: rgba(65, 70, 81, 0.64); */
	/* } */

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
