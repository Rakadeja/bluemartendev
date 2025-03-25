<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;
	let projects = [];

	let projects3D = [];

	let toggle2D3DArt = false;

	// Toggle animation state
	function toggleAnimation() {
		animate = !animate;
	}

	// Use dynamic import so Vite watches the JSON file for updates
	async function loadProjects() {
		try {
			const data = await import('./projects.json');
			projects = data.default;
			console.log('Projects Data Loaded: ' + projects);
		} catch (error) {
			console.error('Failed to load JSON:', error);
		}
	}

	onMount(() => {
		loadProjects();
		animate = true;
	});
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Current projects, both active and inactive." />
</svelte:head>

<div
	class="text-column"
	in:fade={{ delay: 1000, duration: 2000 }}
	out:fly={{ y: 200, duration: 999 }}
>
	<h1 class="page-title">Projects</h1>
	<div class="text-column">
		<p>Here are my projects that have been developed enough for me to share here!</p>
	</div>

	<div class="card-box">
		{#each projects as project, index}
			<!-- Loop through the projects array -->
			<div
				class="card"
				transition:fly={{ y: animate ? -100 : 0, duration: 999, delay: index * 50 }}
			>
				<h2>{project.title}</h2>
				<h3>{project.subtitle}</h3>
				<a href={project.id}><img src={project.url} alt={project.title} /></a>
				<small>{project.category}</small>
				<p>{project.description}</p>
				<a href={project.id}>
					<button>View Project</button>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('./gallery.css');
</style>
