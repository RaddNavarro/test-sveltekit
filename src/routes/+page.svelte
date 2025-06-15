<script>
	// import { goto } from '$app/navigation';
	// let count = $state(0);
	// let name = $state('');
	// let names = ['Bruh', 'Rad', 'Friday', 'Naidar'];

	// function increment() {
	// 	count += 1;
	// }

	// function changeName() {
	// 	name = names[Math.floor(Math.random() * names.length)];
	// }

	// function handleClick() {
	// 	goto(`/about/${name}`);
	// }
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
<div class="wrapper">
	<h1 class="title">Welcome, Friday!</h1>
	<div class="subtitle">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum reprehenderit ullam
			corporis fuga neque autem molestiae eligendi sed, corrupti a suscipit voluptates! Atque
			dolorem error autem quis dicta repellat.
		</p>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		max-height: 100%;
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
</style>
