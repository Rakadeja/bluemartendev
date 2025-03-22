<script>
	import { T, Canvas } from '@threlte/core';
	// import { Motion } from '@threlte/motion';

	import { writable } from 'svelte/store';
	import SilgiiHeadAttempt2 from '../lib/assets/models/SilgiiHeadAttempt2.svelte';
	import AnimationDebugControls from '../lib/debug/AnimationDebugControls.svelte';

	// let myOpacity = 0;

	// ✅ Define writable stores
	// const position = writable([0, 0, 0]);
	// const scale = writable([1, 1, 1]);
	// const rotation = writable([0, 0, 0]);
	// const actionIndex = writable(0);

  	// ✅ Define writable stores here
    export let positionStore = writable([-7, 2, 0]);
	export let scaleStore = writable([0.25, 0.25, 0.25]);
	export let rotationStore = writable([0.5, 1.2, 0]);
	export let actionIndexStore = writable(0);
</script>

<Canvas>
	<T.AmbientLight intensity={4.32} />
	<T.DirectionalLight position={[5, 5, 5]} intensity={0.32} />
	<T.OrthographicCamera position={[0, 0, 5]} />

	<!-- ✅ Correctly pass store values -->
	<SilgiiHeadAttempt2
  positionStore={positionStore} 
  scaleStore={scaleStore} 
  rotationStore={rotationStore} 
  actionIndexStore={actionIndexStore}
	/>
</Canvas>

	<!-- ✅ Debug UI modifies store values -->
	<AnimationDebugControls
  positionStore={positionStore} 
  scaleStore={scaleStore} 
  rotationStore={rotationStore} 
  actionIndexStore={actionIndexStore}
	/>