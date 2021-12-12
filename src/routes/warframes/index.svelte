<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	const apiURL = 'https://api.warframestat.us';
	var state = [];
	var loaded = false;

	onMount(() => {
		async function fetchData() {
			const response = await fetch(apiURL + '/warframes');
			let data = await response.json();
			var result = Object.keys(data).map(function (key) {
				return data[key];
			});
			var filtered = result.filter((warframe) => warframe.category === 'Warframes');
			{
				console.log(filtered);
			}

			state = filtered;
			loaded = true;
		}
		fetchData();
	});
</script>

<svelte:head>
	<title>Warframe Info Hub • Riven Data •WIP</title>
</svelte:head>
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
<div class="grid gap-px grid-cols-9 px-5.21  overflow-y-auto py-10 pt-0 bg-dark-400">

	{#each state as warframe, i (i)}
		<div
			class=" h-auto overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
		>
			<div class="pr-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:pr-6">
				{warframe.name}
				<a href="/warframes/{warframe.name}" class="text-primary">
 				<img
					src="https://cdn.warframestat.us/img/{warframe.imageName}"
					class="h-24 w-24 object-cover object-center"
					alt={warframe.name}
				/></a>
			</div>
		</div>
	{/each}
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
