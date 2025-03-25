<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
    });
</script>

<svelte:head>
	<title>Project Pawstone</title>
	<meta name="description" content="Pawstone - Collect, nurture and raise cats!" />
</svelte:head>

<div
	class="container"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Project Pawstone</h1>
	<h2>Story</h2>
	<p>A stylized, 3D cat rescue game that provides an empathetic storyline.</p>
</div>