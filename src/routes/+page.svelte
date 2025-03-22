<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Blue Marten Development" />
</svelte:head>

<section
	class="text-column"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Home</h1>
	<p class="page-description">This is the home page.</p>

	<div class="button-container">
		<a href="/about" class="button">About</a>
	</div>
</section>
