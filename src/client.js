import { createClient } from '@urql/svelte';

export const client = createClient({
	url: 'https://api.tenno.dev/graphql'
});
