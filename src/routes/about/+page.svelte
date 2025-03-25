<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About me" />
</svelte:head>

<div
	class="container"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">About Me</h1>
	<div class="container-flex">
		<div class="column">
			<h2>Details</h2>
			<p>30 - f - any pronouns</p>

			<h2>Astrology</h2>
			<p>♒🔆♓🌙⛎⬆️</p>

			<h2>Personality Tests</h2>
			<p>INFP-T</p>

			<h2>Human Design</h2>
			<ol>
				<li>Manifesting Generator</li>
				<li>6/2 Profile</li>
				<li>Left Angle Cross of Informing (22/47 | 11/12)</li>
			</ol>
		</div>

		<div class="column">
			<h2>Hobbies</h2>
			<ol>
				<li>Listening to music</li>
				<li>Dancing and yoga</li>
				<li>Draws a lot of animals and trippy stuff</li>
				<li>Creates 3D models of animals and environments</li>
				<li>Makes stickers, prints, cards and stencils</li>
				<li>Likes to do natural arts and crafts, like carving, making jewelry, and painting shells</li>
			</ol>
		</div>
	</div>
</div>

<style>
	@import url('./about.css');
</style>
