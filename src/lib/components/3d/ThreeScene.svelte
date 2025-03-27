<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { writable } from 'svelte/store';

	import SilgiiHeadAttempt2 from '../../assets/models/SilgiiHeadAttempt2.svelte';
	import AnimationDebugControls from '../../debug/AnimationDebugControls.svelte';

	// Define writable stores
	export let positionStore = writable([-7, 2, 0]);
	export let scaleStore = writable([0.25, 0.25, 0.25]);
	export let rotationStore = writable([0.5, 1.2, 0]);
	export let actionIndexStore = writable(0);

	let canvasContainer;

	let scene, camera, renderer;
	let ambientLight, directionalLight;

	onMount(() => {
		// Scene setup
		scene = new THREE.Scene();

		// Camera setup
		camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);
		camera.position.set(0, 0, 5);
		scene.add(camera);

		// Renderer setup
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
		canvasContainer.appendChild(renderer.domElement);

		// Lights
		ambientLight = new THREE.AmbientLight(0xffffff, 4.32);
		scene.add(ambientLight);

		directionalLight = new THREE.DirectionalLight(0xffffff, 0.32);
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		// Model would go here?

		// Start the render loop
		const renderLoop = () => {
			renderer.render(scene, camera);
			requestAnimationFrame(renderLoop);
		};
		renderLoop();

		// Handle cleanup
		return () => {
			renderer.dispose();
			scene = null;
			camera = null;
		};
	});
</script>

<div bind:this={canvasContainer} style="frame-3d">

<!-- Pass the stores to child components -->
<SilgiiHeadAttempt2 {positionStore} {scaleStore} {rotationStore} {actionIndexStore} />
<AnimationDebugControls {positionStore} {scaleStore} {rotationStore} {actionIndexStore} />

</div>