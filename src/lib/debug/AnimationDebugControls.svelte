<script lang="ts">
    import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

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

    // Local reactive variable to hold DOM reference
    let panel;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Start dragging
    function handleMouseDown(event: MouseEvent) {
        isDragging = true;
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    }

    // Stop dragging
    function handleMouseUp() {
        isDragging = false;
    }

    // Move the panel
    function handleMouseMove(event: MouseEvent) {
        if (isDragging && panel) {
            // Update position of the panel
            panel.style.left = `${event.clientX - offsetX}px`;
            panel.style.top = `${event.clientY - offsetY}px`;
        }
    }

    // Add and remove global listeners
    onMount(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup listeners on unmount
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

<!-- <script lang="ts">
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

const panel = document.getElementById('anim-debug-panel');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Start dragging
panel.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

// Stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Move the panel
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        panel.style.left = `${e.clientX - offsetX}px`;
        panel.style.top = `${e.clientY - offsetY}px`;
    }
});
</script> -->

<div id="anim-debug-panel" bind:this={panel} on:mousedown={handleMouseDown} class="debug-panel" role="dialog" aria-label="Animation Debug Panel">
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
