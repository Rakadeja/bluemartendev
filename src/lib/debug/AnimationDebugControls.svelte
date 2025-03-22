<script lang="ts">
	import { writable } from 'svelte/store';

	// ✅ Receive writable stores, NOT values
	export let positionStore;
	export let scaleStore;
	export let rotationStore;
	export let actionIndexStore;

    function updateStore(store, index, event) {
	store.update(values => {
		// 🔥 FIX: Ensure values is always an array
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
.debug-panel {
	pointer-events: auto; /* Makes the element non-interactive */
    position: fixed; /* Ensures it stays in place even when scrolling */
    bottom: 10px; /* Positions it 10px from the bottom of the screen */
    left: 10px; /* Keeps it 10px from the left edge */
    background: rgba(0, 0, 0, 0.7); /* Keeps the semi-transparent background */
    color: white; /* Keeps the text color white */
    padding: 10px; /* Maintains the padding */
    border-radius: 5px; /* Keeps the rounded corners */
    z-index: 9999; /* Ensures it's above other elements */
}

	label {
		display: block;
		margin-top: 5px;
	}
	input {
		width: 50px;
		margin: 0 5px;
	}
</style>
