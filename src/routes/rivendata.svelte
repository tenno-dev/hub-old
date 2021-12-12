<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import Select from 'svelte-select';
	import { _ } from 'svelte-i18n';

	import rerolled from '../components/parts/Rerolled.svelte';
	import { wstate, selectedlang, selectedplatform } from '../stores/pc.js';
	let rerolledstate = [
		{ label: $_('rolled'), value: true, icon: 'fa-brands:windows' },
		{ label: $_('unrolled'), value: false, icon: 'fa-brands:playstation' },
		{ label: $_('bothroll'), value: null, icon: 'fa-brands:playstation' }
	];
	let filter = { label: $_('bothroll'), value: null, icon: 'fa-brands:playstation' };
	let data = [];
	let loaded = false;
	let baseurl = 'https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivens';
	async function fetchData(plat) {
		loaded = false;
		switch (plat) {
			case 'pc':
				console.log(`${baseurl}PC.json`);
				const response1 = await fetch(`${baseurl}PC.json`);
				data = await response1.json();
				var x = data;

				loaded = true;
				break;
			case 'ps4':
				console.log(`${baseurl}PS4.json`);

				const response2 = await fetch(`${baseurl}PS4.json`);
				data = await response2.json();
				var x = data;

				loaded = true;
				break;
			case 'xb1':
				console.log(`${baseurl}XB1.json`);

				const response3 = await fetch(`${baseurl}XB1.json`);
				data = await response3.json();
				var x = data;
				loaded = true;
				break;
			case 'swi':
				console.log(`${baseurl}SWI.json`);

				const response4 = await fetch(`${baseurl}SWI.json`);
				data = await response4.json();
				var x = data;
				loaded = true;
				break;
		}
	}
	function toTitleCase(str) {
		if (str === null) {
			return 'Veiled';
		} else {
			return str.replace(
				/\w\S*/g,
				(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			);
		}
	}
	function toTitleCase2(str) {
		if (str === null) {
			return '1';
		} else {
			return str.replace(
				/\w\S*/g,
				(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			);
		}
	}
	onMount(async () => {
		data = fetchData($selectedplatform);
	});
	$: data = fetchData($selectedplatform);
	function handleSelect(event) {
		filter = event.detail;
	}
	import SvelteTable from 'svelte-table';
	let sortBy = 'compatibility';
	function filterdata(data) {
		if (filter.value === null) {
			return data;
		} else {
			return Object.values(data).filter((character) => character.rerolled === filter.value);
		}
	}
	$: rows = filterdata(data, filter);
	$: filterdata(data, filter);
	const columns = [
		{
			key: 'compatibility',
			title: $_('compatibility'),
			value: (v) => toTitleCase2(v.compatibility),
			renderValue: (v) => toTitleCase(v.compatibility) || 'Veiled',
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'rerolled',
			title: $_('rolled'),
			value: (v) => v.rerolled,
			renderComponent: rerolled,
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'avg',
			title: $_('avg'),
			value: (v) => v.avg,
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'stddev',
			title: $_('stddev'),
			value: (v) => v.stddev,
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'min',
			title: $_('min'),
			value: (v) => v.min,
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'max',
			title: $_('max'),
			value: (v) => v.max,
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'pop',
			title: $_('pop'),
			value: (v) => v.pop,
			sortable: true,
			class: 'text-center'
		},
		{
			key: 'median',
			title: $_('median'),
			value: (v) => v.median,
			sortable: true,
			class: 'text-center'
		}
	];
</script>

<svelte:head>
	<title>Warframe Info Hub • Riven Data •WIP</title>
</svelte:head>
<div class=" container  flex-1 overflow-y-auto py-16  pt-0 bg-gray-800  mx-auto">
	{#if !loaded}
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
			<div class="flex">
				<div class="flex-shrink-0">
					<!-- Heroicon name: solid/exclamation -->
					<svg
						class="h-5 w-5 text-yellow-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<p class="text-sm text-yellow-700">Loading...</p>
				</div>
			</div>
		</div>
	{:else}
		<Select
			items={rerolledstate}
			on:select={handleSelect}
			bind={filter}
			bind:value={filter}
			isClearable={false}
			class="px-2"
		/><br />
		<div class="text-white text-sm ">
			<SvelteTable {columns} {rows} bind:sortBy classNameThead="container " class="text-white" />
		</div>
	{/if}
</div>

<style>
	:global(.table1) {
		width: 100% !important;
		font-size: 0.75rem;
	}
	:global(table1) {
		max-width: 50% !important;
	}
</style>
