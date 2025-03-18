<script lang="ts">
  import { T } from '@threlte/core'

  // import { SilgiiHead } from '../lib/assets/models/silgii/SilgiiHeadLP.svelte'

  import Model from '../lib/assets/models/LPSilgii/Head.svelte';

  // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  // import { useLoader } from '@threlte/core'

  // // Load a GLTF model from a file
  // const gltf = useLoader(GLTFLoader).load('../lib/assets/models/silgii_lowpoly_head.gltf')
</script>

<T.PerspectiveCamera
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>

<Model
  position.x={10}
  scale={1.5}
  rotation.y={Math.PI / 2}
/>
<!-- <SilgiiHead /> -->

<T.Mesh>
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshBasicMaterial color="red" />
</T.Mesh>
