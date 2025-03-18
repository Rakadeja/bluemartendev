<script>
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import '../styles/styles.css';
	import { Canvas } from '@threlte/core'
    // import ThrelteScene from './ThrelteScene.svelte';
	
    // import ThreeScene from './ThreeScene.svelte';
</script>

<div class="app">
	<Navbar />

	<main>
		<Canvas>
			<!-- <ThreeScene /> -->
			<!-- <ThrelteScene /> -->
		</Canvas>

		<slot />
		<!-- <div class="slot-frame">
			<slot />
		</div> -->
	</main>

	<Footer />
</div>

