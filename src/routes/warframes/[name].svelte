<script>
	// @ts-nocheck

	import { params } from '@roxi/routify';
	import { onMount } from 'svelte';
	const apiURL = 'https://api.warframestat.us';
	var state = [];
	var loaded = false;
	onMount(() => {
		async function fetchData() {
			const response = await fetch(apiURL + '/warframes/' + $params.name);
			let data = await response.json();
			state = data;
			loaded = true;
		}
		fetchData();
	});
</script>
<div class="pt-2">
	{#if loaded && state}
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
					<p class="text-sm text-yellow-700">WIP</p>
				</div>
			</div>
		</div>
		<div class="inline-grid  grid-cols-2 gap-0">
			<div class="bg-transparent w-full col-span-1 w-1/2">
				<img src="https://cdn.warframestat.us/img/{state['imageName']}" alt={state['name']} />
			</div>
			<div class="col-span-1  w-1/2">
				<div class="flex  grid  grid-cols-4 gap-0">
					<div class="grid grid-cols-2 bg-white rounded-2xl place-items-center h-20 w-25">
						<div class="i-mdi-shield-half-full text-blue-400 text-3xl h-full" />
						<div class=" w-1/3 h-full flex justify-center items-center">{state.armor}</div>
					</div>
					<div class="grid grid-cols-2 bg-white rounded-2xl place-items-center h-20 w-25">
						<div class="i-mdi-heart text-red-400 text-3xl    h-full" />
						<div class=" w-1/3 h-full flex justify-center items-center">{state.health}</div>
					</div>
					<div class="grid grid-cols-2 bg-white rounded-2xl place-items-center h-20 w-25">
						<div class="i-mdi-lightning-bolt text-yellow-400 text-3xl h-full" />
						<div class=" w-1/3 h-full flex justify-center items-center">{state.power}</div>
					</div>
					<div class="grid grid-cols-2 bg-white rounded-2xl place-items-center h-20 w-25">
						<div class="i-mdi-run-fast text-yellow-400 text-3xl    h-full" />
						<div class=" w-1/3 h-full flex justify-center items-center">{state.sprintSpeed}</div>
					</div>
				</div>

				<div class="block bg-white rounded-t-1">
					{state.description}
				</div>
				<div class="block bg-white rounded-b-1">
					<div class="i-mdi-calendar text-black text-l  text-center align-middle inline">r rrr</div>
					<span class=" justify-center items-center ">
						Added in Patch {state.introduced.parent} ({state.introduced.name}) on {state.introduced
							.date}
					</span>
				</div>
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
