<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
    });
</script>

<svelte:head>
	<title>Project Spectrum</title>
	<meta name="description" content="A 3D, stylized animal RPG!" />
</svelte:head>

<div
	class="container"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Project Spectrum</h1>
	<h2>Story</h2>
	<p>A stylized, 3D animal RPG game that follows the journey of two estranged characters.</p>
</div>