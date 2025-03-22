import { writable } from 'svelte/store';

// Define possible states
export type AppState = 'idle' | 'active' | 'inactive' | 'animationTriggered';

// Create a store for the state
export const appState = writable<AppState>('idle');

// Timer store to track time spent on a page
export const timeSpent = writable(0);

// Function to change state
export function changeState(newState: AppState) {
    appState.set(newState);
}
