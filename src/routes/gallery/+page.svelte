<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;
	let artGallery = [];

	let artGallery3D = [];

	let toggle2D3DArt = false;

	// Toggle animation state
	function toggleAnimation() {
		animate = !animate;
	}

	// Use dynamic import so Vite watches the JSON file for updates
	async function loadArt() {
		try {
			const data = await import('./art_gallery.json');
			artGallery = data.default;
			console.log('Art Gallery Data Loaded: ' + artGallery);
		} catch (error) {
			console.error('Failed to load JSON:', error);
		}
	}

	async function load3DArt() {
		// Add 3D functionality here
		// console.log('Loading 3D Art...');
		// try {
		// 	const data = await import('./art_gallery3D.json');
		// 	artGallery = data.default;
		// 	console.log('3D Art Gallery Data Loaded: ' + artGallery);
		// } catch (error) {
		// 	console.error('Failed to load JSON:', error);
		// }
	}

	onMount(() => {
		loadArt();
		animate = true;
	});
</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="Art, illustrations and photos." />
</svelte:head>

<div
	class="text-column"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Gallery</h1>

	<div class="text-column">
		<p>Welcome to my gallery! The button above toggles whether you're viewing 2D or 3D content.</p>
	</div>

	<div class="container gallery-container">
		<button class="button-narrow" on:click={() => loadArt()}>2D Art</button>
		<button class="button-narrow">3D Art</button>
		<button class="button-narrow">Sort By Name</button>
		<button class="button-narrow">Sort By Date</button>
		<!-- <button on:click={toggle2D3DArt}>3D</button> -->
	</div>

	<div class="card-box">
		{#each artGallery as piece, index}
			<!-- Loop through the artGallery array -->
			<div
				class="card"
				transition:fly={{ y: animate ? -100 : 0, duration: 999, delay: index * 50 }}
			>
				<img src={piece.url} alt={piece.title} />
				<h3>{piece.title}</h3>
				<p>{piece.category}</p>
				<small>{piece.description}</small>
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('./gallery.css');
</style>
