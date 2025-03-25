<script>
    // State to track whether debug borders are enabled
    import { onMount } from 'svelte';
    let isDebugEnabled = false; // Initially disabled

    // Toggles the debug mode when the button is clicked
    const toggleDebug = () => {
        isDebugEnabled = !isDebugEnabled;
        if (isDebugEnabled) {
            document.body.classList.add('debug-borders'); // Add the class globally
        } else {
            document.body.classList.remove('debug-borders'); // Remove the class globally
        }
    };

    // Optionally: Ensure the debug state persists or resets on page reload (reset to default state here)
    onMount(() => {
        document.body.classList.remove('debug-borders'); // Ensure clean start
    });
</script>

<button on:click={toggleDebug}>
    {isDebugEnabled ? "Disable Debug Borders" : "Enable Debug Borders"}
</button>

<style>
    @import url('./DebugBorders.css');
</style>