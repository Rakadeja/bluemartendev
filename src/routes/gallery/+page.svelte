<script>
	import { fade, fly } from 'svelte/transition';

	import { onMount } from 'svelte';
	// import $art from './art_gallery.json';
	import png from './art/badge.png';

	let animate = false;

	onMount(() => {
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

<div class="text-column" in:fade={{delay: 1000, duration: 2000}} out:fly={{ y:200, duration:999}}>
	<h1 class="page-title">Gallery</h1>
	<div class="gallery-box">
		<div class="art-piece">
		<img src={png} alt="Badge" />
		<!-- {#each $art as piece, index}
			<div class="gallery-piece" transition:fly={{ y:animate? -100 : 0, duration: 999, delay: index * 50 }}>
				<img class="gallery-image" src={piece.url} alt={piece.title} />
				<div class="gallery-caption">{piece.title}</div>
			</div>
		{/each} -->
		</div>
		<div class="art-piece">
			<img src={png} alt="Badge" />
		</div>
		<div class="art-piece">
			<img src={png} alt="Badge" />
		</div>
		<div class="art-piece">
			<img src={png} alt="Badge" />
		</div>
	</div>
</div>
