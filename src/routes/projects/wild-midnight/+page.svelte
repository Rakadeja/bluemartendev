<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
    });
</script>

<svelte:head>
	<title>Wild Midnight</title>
	<meta name="description" content="A stylized, 3D animal survival MMORPG that takes place in the distant future." />
</svelte:head>

<div
	class="container"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Wild Midnight</h1>
	<h2>Story</h2>
	<p>150 million years from now, the world is an utterly unrecognizable place.</p>
</div>