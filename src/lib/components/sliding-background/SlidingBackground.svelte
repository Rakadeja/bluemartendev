<script>
  import { onMount } from 'svelte';

  export let jsonPath = '/images.json';
  let images = [];

  onMount(async () => {
    try {
      const response = await fetch(jsonPath);
      images = await response.json();
    } catch (error) {
      console.error('ERROR loading images: ', error);
    }
  });
</script>

<style>
  @import url('./SlidingBackground.css');
</style>

{#if images.length > 0}
  <div class="background-container">
    <div class="background-track" style="width: {images.length * 200}vw;">
      {#each [...images, ...images] as image}
        <div class="background-image" style="background-image: url({image});" />
      {/each}
    </div>
  </div>
{/if}
