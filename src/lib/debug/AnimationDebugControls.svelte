<script lang="ts">
	import { writable } from 'svelte/store';

	// Receive writable stores, NOT values
	export let positionStore;
	export let scaleStore;
	export let rotationStore;
	export let actionIndexStore;

    function updateStore(store, index, event) {
	store.update(values => {
		// Ensure values is always an array
		if (!Array.isArray(values)) return [0, 0, 0]; 

		const newValues = [...values];
		newValues[index] = parseFloat(event.target.value) || 0;
		return newValues;
	});
}
</script>

<div class="debug-panel">
	<h3>Debug Controls</h3>

	<label>Position:
		<input type="number" bind:value={$positionStore[0]} on:input={(e) => updateStore(positionStore, 0, e)} />
		<input type="number" bind:value={$positionStore[1]} on:input={(e) => updateStore(positionStore, 1, e)} />
		<input type="number" bind:value={$positionStore[2]} on:input={(e) => updateStore(positionStore, 2, e)} />
	</label>

	<label>Scale:
		<input type="number" step="0.1" bind:value={$scaleStore[0]} on:input={(e) => updateStore(scaleStore, 0, e)} />
		<input type="number" step="0.1" bind:value={$scaleStore[1]} on:input={(e) => updateStore(scaleStore, 1, e)} />
		<input type="number" step="0.1" bind:value={$scaleStore[2]} on:input={(e) => updateStore(scaleStore, 2, e)} />
	</label>

	<label>Rotation:
		<input type="number" step="0.1" bind:value={$rotationStore[0]} on:input={(e) => updateStore(rotationStore, 0, e)} />
		<input type="number" step="0.1" bind:value={$rotationStore[1]} on:input={(e) => updateStore(rotationStore, 1, e)} />
		<input type="number" step="0.1" bind:value={$rotationStore[2]} on:input={(e) => updateStore(rotationStore, 2, e)} />
	</label>

	<label>Animation Index:
		<input type="number" min="0" max="10" bind:value={$actionIndexStore} />
	</label>
</div>

<style>
	@import url('./AnimationDebugControls.css');
</style>
