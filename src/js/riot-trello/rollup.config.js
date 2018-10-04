import svelte from 'rollup-plugin-svelte';

export default {
	input: 'src/index.js',
	plugins: [
		svelte()
	],
    output: {
        file: 'dist/riot-trello.js',
        format: 'iife',
		name: 'RiotTrello'
    }
}