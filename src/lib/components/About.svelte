<script>
	import Card from './Card.svelte';
	import reactImg from '../images/react.png';
	import cppImg from '../images/cpp.png';
	import svelteImg from '../images/svelte.png';
	import unityImg from '../images/unity.png';

	const cardItems = [
		{
			image: reactImg,
			label: 'React',
			url: 'https://react.dev/'
		},
		{
			image: cppImg,
			label: 'C++',
			url: 'https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170'
		},
		{
			image: svelteImg,
			label: 'Svelte',
			url: 'https://svelte.dev/'
		},
		{
			image: unityImg,
			label: 'Unity',
			url: 'https://unity.com/'
		}
	];
</script>

<main class="flex items-center justify-center flex-col gap-20">
	<h1>Made projects in these</h1>
	<div class="page-wrapper flex items-center justify-center">
		<div class="card-grid flex gap-8">
			<Card {cardItems} />
		</div>
	</div>
</main>

<style>
	.page-wrapper {
		padding: 0 32px;
		/* height: 100vh; */
		/* test comment */
	}

	.card-grid {
		max-width: 1284px;
		flex-wrap: wrap;
		display: flex;
	}
</style>
