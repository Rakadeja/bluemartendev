<script lang="ts">
	import '../styles/styles.css';

	import Navbar from '../lib/components/navbar/Navbar.svelte';
	import Footer from '../lib/components/footer/Footer.svelte';
	import ThrelteScene from '../lib/components/3d/ThrelteScene.svelte'; // Import the 3D scene
	import DebugBorders from '../lib/debug/DebugBorders.svelte';

	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { appState, timeSpent, changeState } from '../lib/stores/stateMachine.ts';

	let interval: NodeJS.Timeout;

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

<div id="app" class="app">
	<Navbar />
	<main>
		<!-- {#key sceneKey} 😭 --> 
		<div class="frame-3d">
			<ThrelteScene />
		</div>
		<!-- {/key} -->
		<div class="frame-slot">
			<slot />
			<DebugBorders />
		</div>
	</main>
	<Footer />
</div>
