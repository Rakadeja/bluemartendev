<script lang="ts">
  import { tick, onMount, onDestroy } from 'svelte';
  import { Group, TextureLoader, MeshStandardMaterial, MeshBasicMaterial } from 'three';
  import { T, forwardEventHandlers } from '@threlte/core';
  import { useGltf, useGltfAnimations } from '@threlte/extras';
  import { getContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let position = [0, 0, 0];
  export let scale = 10;
  export let rotation = [0, 0, 0];

  const playAnimations2 = getContext('playAnimations2'); // Get animation control from context

  // ✅ Load GLTF
  const gltf = useGltf('/models/LPSilgii/Very Low Poly Silgii Head.gltf');
  const armatureRef = writable<Group | null>(null);
  let animationData = null;
  let stopAnimation = () => {}; // Cleanup function

  function loadTexture(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      new TextureLoader().load(
        url,
        (texture) => {
          console.log('🖼 Texture Loaded:', url);
          resolve(texture);
        },
        undefined,
        (error) => {
          console.error('🚨 Texture failed to load:', url, error);
          reject(error);
        }
      );
    });
  }

  onMount(async () => {
    console.log('⏳ Component mounted, waiting for GLTF...');

    let gltfData = await new Promise((resolve) => {
      const unsubscribe = gltf.subscribe((value) => {
        if (value) {
          unsubscribe();
          resolve(value);
        }
      });
    });

    console.log('✅ GLTF Loaded:', gltfData);

    // ✅ Debug model hierarchy
    console.log('🧐 Available Nodes:', Object.keys(gltfData.nodes || {}));

    // ✅ Load the texture asynchronously
    const texture = await loadTexture('/Silgii - Low Poly Head.png');

    await tick();

    // ✅ Find the correct mesh
    const headMesh = gltfData.scene.getObjectByName('SilgiiLP_Head');

    if (!headMesh) {
      console.warn('🚨 Mesh "SilgiiLP_Head" not found in GLTF!');
    } else {
      console.log('🎨 Assigning texture to head mesh...');
      if (!headMesh.material) {
        console.warn('🚨 No material found on head mesh! Creating a new material.');
        headMesh.material = new MeshStandardMaterial();
      }

      headMesh.material.map = texture;
      headMesh.material.needsUpdate = true;
      headMesh.visible = true; // Force visibility
      console.log('✅ Texture applied to head mesh.');
    }

    // ✅ Get the Armature from the GLTF scene
    const armatureNode = gltfData.scene?.getObjectByName('Armature');

    if (!armatureNode) {
      console.warn('🚨 Armature not found in GLTF scene! Check model structure.');
    } else {
      console.log('✅ Found Armature in GLTF:', armatureNode);
      armatureRef.set(armatureNode as Group);
    }
  });

  // ✅ Reactively handle animations based on playAnimations store
  $: if ($gltf && $gltf.animations.length > 0 && $armatureRef) {
    console.log('✅ FINAL REF:', $armatureRef);
    animationData = useGltfAnimations(gltf, $armatureRef);

    let checkInterval = setInterval(() => {
      if (animationData?.actions && Object.keys(animationData.actions).length > 0) {
        clearInterval(checkInterval);
        console.log('🎬 Subscribed Animation Data:', animationData.actions);

        // Subscribe to `playAnimations` store changes
        const unsubscribe = playAnimations2.subscribe((enabled) => {
          if (enabled) {
            console.log('▶ Playing animation...');
            animationData.actions?.Idle?.reset().play();
          } else {
            console.log('⏹ Stopping animation...');
            animationData.actions?.Idle?.stop();
          }
        });

        // Cleanup function to stop listening when component is destroyed
        stopAnimation = () => {
          unsubscribe();
        };
      } else {
        console.log('⏳ Waiting for animation actions...');
      }
    }, 100);
  } else {
    console.log('⏸ Animations disabled or waiting for required data.');
  }

  onDestroy(() => {
    stopAnimation(); // Ensure we clean up subscriptions when component is removed
  });

  const component = forwardEventHandlers();
</script>

{#if $gltf}
  {#if $component}
    <T bind:this={$component} {...$$restProps || {}}>
      <T.Group name="Scene" {position} {scale} {rotation} visible={true}>
        <T.Group name="Armature">
          {#if $armatureRef}
            {console.log('✅ armatureRef assigned:', $armatureRef)}
          {:else}
            {console.log('⏳ Waiting for armatureRef...')}
          {/if}

          {#if $gltf.nodes.Root}
            <T is={$gltf.nodes.Root} />
          {:else}
            {console.warn('🚨 Root node not found in GLTF!')}
          {/if}

          {#if $gltf.nodes?.SilgiiLP_Head}
          <T.Mesh
            name="SilgiiLP_Head"
            geometry={$gltf.nodes.SilgiiLP_Head.geometry}
            material={$gltf.materials.SilgiiMat}
            visible={true}
          >
            <!-- ✅ Ensure the material is inside the mesh -->
            <T.MeshBasicMaterial wireframe color="red" />
          </T.Mesh>
          {console.log('✅ GLTF Loaded:', $gltf)}
          {console.log('🦴 Armature:', $armatureRef)}
          {console.log('🎨 Materials:', $gltf.materials)}
        {:else}
          {console.warn('🚨 SilgiiLP_Head not found in GLTF!')}
        {/if}
        
        </T.Group>

        <T.Group name="Spiral" position={[0, 0, 0]} />
      </T.Group>

      <slot {armatureRef} />
    </T>
  {/if}
{:else}
  {console.log('⏳ Loading Model...')}
{/if}
