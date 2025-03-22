<script>
	import { T, Canvas } from '@threlte/core';
	import { writable } from 'svelte/store';

	import SilgiiHeadAttempt2 from '../assets/models/SilgiiHeadAttempt2.svelte';
	import AnimationDebugControls from '../debug/AnimationDebugControls.svelte';

	// Define writable stores here
	export let positionStore = writable([-7, 2, 0]);
	export let scaleStore = writable([0.25, 0.25, 0.25]);
	export let rotationStore = writable([0.5, 1.2, 0]);
	export let actionIndexStore = writable(0);
</script>

<Canvas>
	<T.AmbientLight intensity={4.32} />
	<T.DirectionalLight position={[5, 5, 5]} intensity={0.32} />
	<T.OrthographicCamera position={[0, 0, 5]} />

	<!-- Correctly pass store values -->
	<SilgiiHeadAttempt2 {positionStore} {scaleStore} {rotationStore} {actionIndexStore} />
</Canvas>

<!-- Debug UI modifies store values -->
<AnimationDebugControls {positionStore} {scaleStore} {rotationStore} {actionIndexStore} />
