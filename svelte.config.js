import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess'; // Fallback preprocess

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess({ typescript: true }),
};

export default config;