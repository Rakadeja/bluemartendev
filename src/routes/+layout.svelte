<script lang="ts">
	import '../styles/styles.css';

	import Navbar from '../lib/components/navbar/Navbar.svelte';
	import Footer from '../lib/components/footer/Footer.svelte';
	// import ThreeScene from '../lib/components/3d/ThreeScene.svelte';
	import SilgiiHeadAttempt2 from '../lib/assets/models/SilgiiHeadAttempt2.svelte';
	import AnimationDebugControls from '../lib/debug/AnimationDebugControls.svelte';
	import DebugBorders from '../lib/debug/DebugBorders.svelte';

	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade, slide } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

	import { appState, timeSpent, changeState } from '../lib/stores/stateMachine.ts';

	let interval: NodeJS.Timeout;

	export let positionStore = writable([-4.5, 3.7, 0]);
	export let rotationStore = writable([24, 55, 0]);
	export let scaleStore = writable([0.25, 0.25, 0.25]);
	export let actionIndexStore = writable(0);

	onMount(() => {
		changeState('active');
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
		<!-- <ThreeScene /> -->
		<SilgiiHeadAttempt2 
		positionStore={positionStore}
		rotationStore={rotationStore}
		scaleStore={scaleStore}
		actionIndexStore={actionIndexStore}/>
		 <!-- <AnimationDebugControls 
		positionStore={positionStore}
		rotationStore={rotationStore}
		scaleStore={scaleStore}
		actionIndexStore={actionIndexStore} /> -->

		<!-- {/key} -->
		<div class="frame-slot" transition:slide>
			<slot />
			<DebugBorders />
		</div>
	</main>
	<Footer />
</div>
