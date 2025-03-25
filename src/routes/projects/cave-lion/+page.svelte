<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
    });
</script>

<svelte:head>
	<title>Cave Lion</title>
	<meta name="description" content="A fiction novel following the story of a young lion cub who becomes physically separated from her pride." />
</svelte:head>

<div
	class="container"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Cave Lion</h1>
	<h2>Story</h2>
	<p>A fiction novel following the story of a young lion cub who becomes physically separated from her pride.</p>
</div>