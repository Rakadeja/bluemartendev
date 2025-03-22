<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;
	let artGallery = [];
	
	let artGallery3D = [];

	let toggle2D3DArt = false;

	// // Toggle 2D/3D view
	// function toggle2D3D() {
    //     toggle2D3DArt =!toggle2D3DArt;
    // }

    // // Add new artwork to the gallery
    // function addArtwork(newArtwork) {
    //     artGallery.push(newArtwork);
    //     console.log('Artwork Added: ', newArtwork);
    // }

    // // Remove artwork from the gallery
    // function removeArtwork(artworkToRemove) {
    //     const index = artGallery.indexOf(artworkToRemove);
    //     if (index > -1) {
    //         artGallery.splice(index, 1);
    //         console.log('Artwork Removed: ', artworkToRemove);
    //     }
    // }

    // // Update artwork details
	// function updateArtworkDetails(updatedArtwork) {
    //     const index = artGallery.indexOf(updatedArtwork);
    //     if (index > -1) {
    //         artGallery[index] = updatedArtwork;
    //         console.log('Artwork Details Updated: ', updatedArtwork);
    //     }
    // }

    // // Sort artwork by artist or date
    // function sortArtwork(sortCriteria) {
    //     artGallery.sort((a, b) => {
    //         if (sortCriteria === 'artist') {
    //             return a.artist.localeCompare(b.artist);
    //         } else if (sortCriteria === 'date') {
    //             return new Date(b.date) - new Date(a.date);
    //         }
    //     });
    //     console.log('Artwork Sorted by'+ sortCriteria);
    // }

    // // Filter artwork by artist or year
	// function filterArtwork(filterCriteria, filterValue) {
    //     if (filterCriteria === 'artist') {
    //         artGallery = artGallery.filter((artwork) => artwork.artist === filterValue);
    //     } else if (filterCriteria === 'year') {
    //         artGallery = artGallery.filter((artwork) => new Date(artwork.date).getFullYear() === parseInt(filterValue));
    //     }
    //     console.log('Artwork Filtered by'+ filterCriteria + ':'+ filterValue);
    // }


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
		// const data = await import('./art_gallery.json').then((data) => {
		// 	artGallery = data.default;
		// });
		// artGallery = data.default; // JSON is exported as `default`
	}

	async function load3DArt() {
		// Add 3D functionality here
        console.log('Loading 3D Art...');

		try {
			const data = await import('./art_gallery3D.json');
			artGallery = data.default;
			console.log('3D Art Gallery Data Loaded: ' + artGallery);
		} catch (error) {
			console.error('Failed to load JSON:', error);
		}
	}

	onMount(() => {
		loadArt();
		animate = true;
	});
</script>

<style>
	@import url('./gallery.css');
</style>

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
	<div class="container">
		<button on:click={() => loadArt()}>2D</button>
		<button on:click={toggle2D3DArt}>3D</button>
		<!-- <button on:click={toggleAnimation}>Toggle Animation</button> -->
        <!-- <button on:click={() => loadArt()}>Load New Art</button> -->
        <!-- <button on:click={() => (animate =!animate)}>Toggle 2D/3D</button> -->
        <!-- <button on:click={() => (animate = false)}>Stop Animation</button> -->
	</div>
	<p>Welcome to my gallery! The buttons above toggle whether you're viewing 2D or 3D content.</p>
	<div class="gallery-box">
		{#each artGallery as piece, index}
			<!-- Loop through the artGallery array -->
			<div
				class="art-piece"
				transition:fly={{ y: animate ? -100 : 0, duration: 999, delay: index * 50 }}
			>
				<img class="gallery-image" src={piece.url} alt={piece.title} />
				<div class="gallery-caption">
					<h3>{piece.title}</h3>
					<p>{piece.category}</p>
					<small>{piece.description}</small>
				</div>
			</div>
		{/each}
	</div>
</div>
