<script lang="ts">
	import { onMount } from 'svelte';
	import { get, writable, type Writable } from 'svelte/store';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { appState } from '../../stores/stateMachine.ts';

	// Define writable stores for position, scale, rotation, and animation index
	export let positionStore: Writable<[number, number, number]> = writable([0, 0, 0]);
	export let scaleStore: Writable<[number, number, number]> = writable([0.25, 0.25, 0.25]);
	export let rotationStore: Writable<[number, number, number]> = writable([0, 0, 0]);
	export let actionIndexStore: Writable<number> = writable(0);

	let canvas: HTMLCanvasElement;
	let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
	let model: THREE.Group | null = null;
	let mixer: THREE.AnimationMixer | null = null;
	let actions: Record<string, THREE.AnimationAction> = {};
	let animationKeys: string[] = [];
	let animationFrameId: number;

	// Change animation when app state triggers it
	$: if (get(appState) === 'animationTriggered') {
		actionIndexStore.set(0); // Example: Switch to animation index 1
	}

	onMount(() => {
		// Set up Three.js scene
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
		camera.position.set(0, 1, 5);

		renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		// Add lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 2);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 5, 5);
		scene.add(ambientLight, directionalLight);

		// Load GLTF model
		const loader = new GLTFLoader();
		loader.load('/models/LPSilgii/SilgiiHeadAttempt13.glb', (gltf) => {
			model = gltf.scene;
			scene.add(model);

			console.log('Model loaded:', model);

			// Apply position, scale, and rotation
			updateTransform();

			// Find animated object (Armature or Root)
			const animatedObject = model.getObjectByName('Armature') || model;
			mixer = new THREE.AnimationMixer(animatedObject);

			// Store animations
			gltf.animations.forEach((clip) => {
				actions[clip.name] = mixer.clipAction(clip);
			});
			animationKeys = Object.keys(actions);

			// Play initial animation
			if (animationKeys.length > 0) {
				playAnimation(get(actionIndexStore));
			}

			console.log(renderer.domElement);
			console.log(canvas);
		});

		// Start render loop
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			if (mixer) mixer.update(1 / 60); // Ensure animation mixer updates
			renderer.render(scene, camera);
		};
		animate();

		// Cleanup on component unmount
		return () => {
			cancelAnimationFrame(animationFrameId);
			renderer.dispose();
			document.body.removeChild(renderer.domElement);
		};
	});

	// Function to play animation
	function playAnimation(index: number) {
		if (animationKeys.length === 0 || !mixer) return;
		if (index < 0 || index >= animationKeys.length) return;

		Object.values(actions).forEach((action) => action.stop());
		const nextAction = actions[animationKeys[index]];
		nextAction.reset().setLoop(THREE.LoopRepeat, Infinity).play();
	}

	// Watch for store updates and update animation
	$: if (animationKeys.length > 0) {
		playAnimation(get(actionIndexStore));
	}

	// Function to update model transform
	function updateTransform() {
		if (!model) return;
		model.position.set(...get(positionStore));
		model.scale.set(...get(scaleStore));
		model.rotation.set(...get(rotationStore).map(THREE.MathUtils.degToRad)); // Convert degrees to radians
	}

	// Watch for store updates and update transform
	$: {
    console.log('Updating model transform with values:');
    console.log('Position:', get(positionStore));
    console.log('Scale:', get(scaleStore));
    console.log('Rotation:', get(rotationStore));
    updateTransform();
}
</script>

<canvas class="frame-3d" bind:this={canvas}></canvas>