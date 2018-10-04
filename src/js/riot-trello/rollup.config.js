import svelte from 'rollup-plugin-svelte';

export default {
	input: 'src/index.js',
	plugins: [
		svelte({
			customElement: true
		})
	],
    output: {
        file: 'dist/riot-trello.js',
        format: 'iife',
		name: 'RiotTrello'
    }
}