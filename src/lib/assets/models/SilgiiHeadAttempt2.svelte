<script lang="ts">
	// import { onMount } from 'svelte';
	import { get, writable, type Writable } from 'svelte/store';
	import { T, useFrame } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import * as THREE from 'three';
	import { appState } from '../../stores/stateMachine.ts';

	$: if (get(appState) === 'animationTriggered') {
		actionIndexStore.set(1); // Change animation when the state is triggered
	}

	// ✅ Define props as writable stores
	export let positionStore: Writable<[number, number, number]> = writable([0, 0, 0]);
	export let scaleStore: Writable<[number, number, number]> = writable([1, 1, 1]);
	export let rotationStore: Writable<[number, number, number]> = writable([0, 0, 0]);
	export let actionIndexStore: Writable<number> = writable(0);

	// ✅ Reactive animation index
	$: actionIndex = $actionIndexStore;

	// ✅ Load GLTF model
	const gltf = useGltf('/models/LPSilgii/SilgiiHeadAttempt13.glb');

	let ref: THREE.Group | undefined;
	let mixer: THREE.AnimationMixer;
	let actions: Record<string, THREE.AnimationAction> = {};
	let animationKeys: string[] = [];

	gltf.promise.then((loadedGltf) => {
		ref = loadedGltf.scene;
		const model = ref;

		// ✅ Find animated object (Armature or Root)
		const animatedObject = model.getObjectByName('Armature') || model;
		mixer = new THREE.AnimationMixer(animatedObject);

		// ✅ Store animations
		loadedGltf.animations.forEach((clip) => {
			actions[clip.name] = mixer.clipAction(clip);
		});
		animationKeys = Object.keys(actions);

		// ✅ Play initial animation
		if (animationKeys.length > 0) {
			playAnimation(actionIndex);
		}
	});

	// ✅ Function to play animation
	function playAnimation(index: number) {
		if (animationKeys.length === 0) return;
		if (index < 0 || index >= animationKeys.length) return;

		Object.values(actions).forEach((action) => action.stop());
		const nextAction = actions[animationKeys[index]];
		nextAction.reset().setLoop(THREE.LoopRepeat, Infinity).play();
	}

	// ✅ Ensure mixer updates
	useFrame((_, delta) => mixer?.update(delta));

	// ✅ 🔥 Re-run playAnimation when actionIndex changes
	$: if (animationKeys.length > 0) {
		playAnimation(actionIndex);
	}
</script>

<!-- ✅ Ensure ref is loaded before rendering -->
{#if ref}
	<T
		is={ref}
		dispose={false}
		position={$positionStore}
		scale={$scaleStore}
		rotation={$rotationStore}
	/>
{/if}
