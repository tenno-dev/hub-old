<script>
	// @ts-nocheck
	import DarkMode from 'svelte-dark-mode';

	let theme;
	import { onMount } from 'svelte';
	import { wstate, selectedplatform } from '../stores/pc.js';
	const apiURL = 'https://api.warframestat.us/';

	import News from '../components/News.svelte';
	import Alerts from '../components/Alerts.svelte';
	import Nightwave from '../components/Nightwave.svelte';
	import Timers from '../components/Timers.svelte';
	import Invasions from '../components/Invasions.svelte';
	import Buildprocess from '../components/Buildprocess.svelte';
	import Darvo from '../components/Darvo.svelte';
	/*i*/
	let loaded = false;
	let data = [];
	var state = $wstate;
	var platform = $selectedplatform;
	function updateplatform(id) {
		platform = id;
		loaded = false;

		async function fetchData(type) {
			const response = await fetch(apiURL + type);
			data = await response.json();
			$wstate = data;
			loaded = true;
		}
		//console.log('plat update ' + id);
		fetchData(id);
	}
	onMount(() => {
		async function fetchData(type) {
			const response = await fetch(apiURL + type);
			data = await response.json();
			$wstate = data;
			loaded = true;
		}
		state = $wstate;
		const interval = setInterval(fetchData(platform), 60000);
		if (!$wstate) {
			//console.log('empty');
			fetchData(platform);
			loaded = true;
		} else {
			//console.log('full');
			state = $wstate;
			loaded = true;
		}

		return () => clearInterval(interval);
	});
	/*
	 */
	$: state = $wstate;
	$: updateplatform($selectedplatform);
</script>

<!----->
<svelte:head>
	<title>Warframe Info Hub • WIP</title>
</svelte:head>
<div class="flex-1 overflow-y-auto py-16 pt-0 bg-dark-400">
	{#if loaded && state}
		<div class="flex flex-wrap xl:px-1">
			<div class="w-full  sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/2 px-1 xl:px-2">
				<News news={state.news} />
			</div>
			<div class="w-full h-auto px-1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Nightwave nightwave={state.nightwave} />
			</div>
			<div class=" hidden xl:block w-full h-64 px-1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Timers
					earthCycle={state.earthCycle}
					cetusCycle={state.cetusCycle}
					cambionCycle={state.cambionCycle}
					vallisCycle={state.vallisCycle}
				/>
				<Darvo deals={state.dailyDeals} />
				
			</div>
			<div class="block md:hidden w-full h-auto px-1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Darvo deals={state.dailyDeals} />
			</div>
			<div class="block md:hidden w-full h-auto px-1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Timers
					earthCycle={state.earthCycle}
					cetusCycle={state.cetusCycle}
					cambionCycle={state.cambionCycle}
					vallisCycle={state.vallisCycle}
				/>
			</div>
		</div>
		<div class="flex flex-wrap xl:px-1">
			<div class="w-full h-auto px-1 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-1 xl:px-2">
				<Alerts alerts={state.alerts} />
			</div>

			<div class="w-full  sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-1 xl:px-2">
				<Invasions invasions={state.invasions} />
			</div>
			<div class="w-full h-auto px-1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
				<Buildprocess constructionProgress={state.constructionProgress} />
			</div>
		</div>
	{:else}
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
			<div class="flex">
				<div class="flex-shrink-0">
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
	{/if}
</div>
