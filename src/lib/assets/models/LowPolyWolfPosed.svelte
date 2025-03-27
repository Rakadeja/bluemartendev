<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, get, type Writable } from 'svelte/store';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	// ✅ Define writable stores for position, scale, and rotation
	export let positionStore: Writable<[number, number, number]> = writable([0, 0, 0]);
	export let scaleStore: Writable<[number, number, number]> = writable([1, 1, 1]);
	export let rotationStore: Writable<[number, number, number]> = writable([0, 0, 0]);

	let canvas: HTMLCanvasElement;
	let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
	let model: THREE.Group | null = null;
	let animationFrameId: number;

	onMount(() => {
		// ✅ Set up Three.js scene
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
		camera.position.set(0, 1, 5);

		renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		// ✅ Add lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 2);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 5, 5);
		scene.add(ambientLight, directionalLight);

		// ✅ Load GLTF model
		const loader = new GLTFLoader();
		loader.load('/models/LPWolf/Low Poly Wolf Posed.glb', (gltf) => {
			model = gltf.scene;
			scene.add(model);
			updateTransform(); // Apply position, scale, and rotation
		});

		// ✅ Start render loop
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};
		animate();

		// ✅ Cleanup on component unmount
		return () => {
			cancelAnimationFrame(animationFrameId);
			renderer.dispose();
			document.body.removeChild(renderer.domElement);
		};
	});

	// ✅ Function to update model transform when store values change
	function updateTransform() {
		if (!model) return;
		model.position.set(...get(positionStore));
		model.scale.set(...get(scaleStore));
		model.rotation.set(...get(rotationStore).map(THREE.MathUtils.degToRad)); // Convert degrees to radians
	}

	// ✅ Watch for store updates
	$: updateTransform();
</script>

<canvas bind:this={canvas}></canvas>
