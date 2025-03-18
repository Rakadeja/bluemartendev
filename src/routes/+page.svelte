<script>
	import { fade, fly } from 'svelte/transition';

    // function makeAbsolute(e) {
    // e.target.style.position = "absolute";
    // e.target.style.width = "100%";}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-column" in:fade={{delay: 1000, duration: 2000}} out:fly={{ y:200, duration:999}}>
<!-- <section class="text-column" in:fade={{delay: 1000, duration: 2000}} out:fly={{ y:200, duration:999}} on:outrostart={makeAbsolute}> -->
	
	<h1 class="page-title">Home</h1>
	<p class="page-description">
        This is the home page.
    </p>

	<div class="button-container">
        <a href="/about" class="button">About</a>
        <a href="/about" class="button">About</a>
        <a href="/about" class="button">About</a>
        <a href="/about" class="button">About</a>
    </div>

</section>