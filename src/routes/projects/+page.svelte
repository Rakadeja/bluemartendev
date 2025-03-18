<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import ProjectCard from './ProjectCard.svelte';

	let animate = false;

	onMount(() => {
		animate = true;
    });

</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Current projects and their status!" />
</svelte:head>

<style>
	@import url('./projects.css');
</style>

<section class="text-column" in:fade={{delay: 1000, duration: 2000}} out:fly={{ y:200, duration:999}}>
	<h1 class="page-title">Projects</h1>

	<div class="container flex-grid-container">
		<div class="container flex-grid-item">
			<ProjectCard 
				title="Project Spectrum"
				description="Stylized animal MMORPG!"
                imageURL="projects/project-spectrum.svg"
				id="project-spectrum"
			/>
		</div>
		<div class="container flex-grid-item">
			<ProjectCard 
				title="Pawstone"
				description="Rescue and nurture cats!"
                imageURL="projects/pawstone.svg"
				id="pawstone"
			/>
		</div>
		<div class="container flex-grid-item">
			<ProjectCard 
				title="Wild Midnight"
				description="Animal survival MMO!"
                imageURL="projects/wild-midnight.svg"
				id="wild-midnight"
			/>
		</div>
	</div>

</section>
