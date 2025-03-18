<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<style>
	@import url('./commissions.css');
</style>

<svelte:head>
	<title>Commissions</title>
	<meta name="description" content="2D and 3D digital art commissions." />
</svelte:head>

<div class="text-column" in:fade={{delay: 1000, duration: 2000}} out:fly={{ y:200, duration:999}}>
	<h1 class="page-title">Commissions</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>
</div>
