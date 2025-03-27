<script lang="ts">
	import { get, writable, type Writable } from 'svelte/store';
	import { T, useFrame } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import * as THREE from 'three';
	// Define props as writable stores
	// TODO: Determine if we could do this any differently
	export let positionStore: Writable<[number, number, number]> = writable([0, 0, 0]);
	export let scaleStore: Writable<[number, number, number]> = writable([1, 1, 1]);
	export let rotationStore: Writable<[number, number, number]> = writable([0, 0, 0]);

	// Load GLTF model
	const gltf = useGltf('/models/LPWolf/Low Poly Wolf Posed.glb');

	let ref: THREE.Group | undefined;

	gltf.promise.then((loadedGltf) => {
		ref = loadedGltf.scene;
		const model = ref;
  });
</script>

<!-- Ensure ref is loaded before rendering -->
{#if ref}
	<T
		is={ref}
		dispose={false}
		position={$positionStore}
		scale={$scaleStore}
		rotation={$rotationStore}
	/>
{/if}
