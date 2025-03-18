<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement | null = null;

  onMount(() => {
    if (!container) return;

    // Basic Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) as THREE.PerspectiveCamera;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material) as THREE.Mesh;
    scene.add(cube);

    camera.position.set(0, 0, 5); // Use set method to define position

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      if (!container) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      // Clean up on component unmount
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.dispose();
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    overflow: hidden;
  }

  div {
    width: 100%;
    height: 100vh;
  }
</style>

<div bind:this={container}></div>
