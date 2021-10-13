<script context="module">
	import '../libs/i18n.js';
	import { waitLocale } from 'svelte-i18n';
	export async function preload() {
		// awaits for the loading of the 'en-US' and 'en' dictionaries
		return waitLocale();
	}
</script>

<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	import { selectedlang, selectedplatform } from '../stores/pc';
	import { locale } from 'svelte-i18n';
	import '../app.postcss';
	import { setClient } from '@urql/svelte';
	import { client } from '../client';
	setClient(client);

	$: $selectedlang = $locale;
	if (!$selectedplatform) {
		$selectedplatform = 'pc';
	}
</script>

<div class="bg-box flex flex-col h-screen overflow-hidden">
	<Navbar />

	<slot>
		<!-- pages in this folder and subfolders
   will be rendered here -->
	</slot>
	<Footer />
</div>
