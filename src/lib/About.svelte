<script>
	import Card from './components/Card.svelte';
	import reactImg from '../images/react.png';
	import cppImg from '../images/cpp.png';
	import svelteImg from '../images/svelte.png';

	const cardItems = [
		{
			image: reactImg,
			label: 'React'
		},
		{
			image: cppImg,
			label: 'C++'
		},
		{
			image: svelteImg,
			label: 'Svelte'
		}
	];
</script>


<main class="flex items-center justify-center flex-col gap-20">
	<h1>Made projects in these</h1>
	<div class="page-wrapper flex items-center justify-center">
		<div class="card-grid flex gap-8">
			<Card {cardItems} class="card" />
		</div>
	</div>
</main>

<style>
	.page-wrapper {
		padding: 0 32px;
		/* height: 100vh; */
	}
</style>
