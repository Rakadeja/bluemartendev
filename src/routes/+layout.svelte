<script lang="ts">
	import '../styles/styles.css';

	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import ThrelteScene from '../lib/components/ThrelteScene.svelte'; // Import the 3D scene

	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { appState, timeSpent, changeState } from '../lib/stores/stateMachine.ts';

	let interval: NodeJS.Timeout;

	// import AnimationDebugControls from '../lib/debug/AnimationDebugControls.svelte';

	//  Define writable stores
	// export let positionStore = writable([0, 0, 0]);
	// export let scaleStore = writable([1, 1, 1]);
	// export let rotationStore = writable([0, 0, 0]);
	// export let actionIndexStore = writable(0);

	onMount(() => {
		changeState('active'); // Set initial state to active
		let seconds = 0;
		interval = setInterval(() => {
			seconds += 1;
			timeSpent.set(seconds);

			// If user is on the page for more than a minute, change animation
			if (seconds >= 60) {
				changeState('animationTriggered');
			}
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
		changeState('inactive');
	});
</script>

<div class="app">
	<Navbar />

	<main>
		<!-- {#key sceneKey} 😭 --> 
		<div class="frame-3d">
			<ThrelteScene />
		</div>
		<!-- {/key} -->
		<div class="frame-slot">
			<slot />
		</div>
	</main>

	<Footer />
	<!-- Debug UI modifies store values -->
	<!-- <AnimationDebugControls {positionStore} {scaleStore} {rotationStore} {actionIndexStore} /> -->
</div>
