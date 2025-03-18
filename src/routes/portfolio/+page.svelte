<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
    });
</script>

<style>
	@import url('./portfolio.css');
</style>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Mahraka Pittman's portfolio!" />
</svelte:head>

<div class="text-column" in:fade={{delay: 1000, duration: 2000}} out:fly={{ y:200, duration:999}}>
	<h1 class="page-title">Portfolio</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>
</div>
