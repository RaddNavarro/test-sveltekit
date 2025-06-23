<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import About from '../lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	let count = $state(0);

	function handleClick() {
		goto(`#about`);
	}

	function increment() {
		count += 1;
	}

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key.toLowerCase() === 'h') {
				goto('/');
			} else if (e.key.toLowerCase() === 'a') {
				document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else if (e.key.toLowerCase() === 'c') {
				document.getElementById('contacts').scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
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

<section class="w-full" id="main">
	<div class="wrapper">
		<pre class="font-bold z-10">
				
			
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗       ███████╗██████╗ ██╗██████╗  █████╗ ██╗   ██╗██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝       ██╔════╝██╔══██╗██║██╔══██╗██╔══██╗╚██╗ ██╔╝██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         █████╗  ██████╔╝██║██║  ██║███████║ ╚████╔╝ ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██╔══╝  ██╔══██╗██║██║  ██║██╔══██║  ╚██╔╝  ╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗▄█╗    ██║     ██║  ██║██║██████╔╝██║  ██║   ██║   ██╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝
                                                                                                                    

		</pre>
		<div class="subtitle wrap-break-word">
			<p>
				I'm Friday, and I like to develop shi like games, and websites. This is my personal website,
				so I would update this from time to time. That's it.
			</p>
		</div>
	</div>
	<div class="absolute inset-0" id="particles-js"></div>
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

<section id="about" class="z-100">
	<About />
</section>

<footer class="h-75" id="contacts">
	<Contact />
</footer>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100%;
		grid-template-rows: minmax(2.5rem, 12vmin) 1fr 5rem;
	}

	/* h1 {
		color: #e9e9e9;
	} */

	p {
		color: #58a0c5;
	}

	#contacts {
		overflow-x: scroll;
	}

	pre {
		color: #7aa2f7;
		font-size: max(0.2rem, 1.55vmin);
		overflow: hidden;
		pointer-events: none;
	}

	.subtitle {
		width: 70%;
	}

	#about {
		background-color: #1d1f31;
	}

	/* #skills {
		background-color: #1a1b26;
	} */

	.wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
		/* -webkit-filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7)); */
		/* filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7)); */
	}

	.wave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 118px;
	}

	.wave .shape-fill {
		fill: #1d1f31;
	}
</style>
