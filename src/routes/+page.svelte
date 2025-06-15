<script>
	import { goto } from '$app/navigation';

	function handleClick() {
		goto(`#about`);
	}
</script>

<!-- <h1>
	Clicks: {count}
</h1>

{#each names as name}
	<h1>{name}</h1>
{/each}

<h1>Chosen Name: {name}</h1>

<button onclick={increment}> Click here to increment </button>
<button onclick={changeName}> Click here to change name </button>
<button onclick={handleClick}>Go to about page</button> -->
<section id="main">
	<div class="wrapper">
		<h1 class="text-3xl font-bold underline pb-8">Welcome, Friday!</h1>
		<div class="subtitle">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum reprehenderit
				ullam corporis fuga neque autem molestiae eligendi sed, corrupti a suscipit voluptates!
				Atque dolorem error autem quis dicta repellat.
			</p>
		</div>
	</div>

	<div class="wave">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			></path>
		</svg>
	</div>
</section>

<section id="about">
	<h1>About</h1>
</section>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100%;
		padding: 100px 20vw;
	}

	h1 {
		color: #e9e9e9;
	}

	p {
		color: #e9e9e9;
	}

	.subtitle {
		width: 70%;
	}

	#about {
		background-color: #1a1b26;
	}

	.wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
		-webkit-filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
		filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
	}

	.wave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 118px;
	}

	.wave .shape-fill {
		fill: #1a1b26;
	}
</style>
