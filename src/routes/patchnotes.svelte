<script>
	import { GET_PATCHES } from '../gql/getpatches';
	import { operationStore, query, gql } from '@urql/svelte';
	import { selectedplatform } from '../stores/pc.js';
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import { format, toDate } from 'date-fns';
	import xss from 'xss';
	let plat = 'pc';
	let x;
	let patchData = operationStore(
		GET_PATCHES,
		{ filter: { platform: { _eq: plat } } },
		{ requestPolicy: 'cache-and-network' }
	);
	function refresh() {
		patchData.reexecute();
	}
	function getplat(pplat) {
		//console.log(pplat);
		var plat = '';
		switch (pplat) {
			case 'pc':
				plat = 'pc';
				//console.log(plat);
				break;

			case 'ps4':
				plat = 'psn';
				//console.log(plat);
				break;

			case 'xb1':
				plat = 'xbox';
				//console.log(plat);
				break;

			case 'swi':
				plat = 'switch';
				//console.log(plat);
				break;

			default:
				plat = 'pc';
				break;
		}
		patchData.reexecute();

		return plat;
	}
	query(patchData);
	$: x = $patchData.data;
	$: $patchData.variables.filter.platform._eq = getplat($selectedplatform);
	//$: console.log($patchData);

	let openedIndex = -1;

	let test1 = 0;

	let headerindex =
		'https://cdn.tenno.dev/webp/https://n9e5v4d8.ssl.hwcdn.net/images/buildnotes/hotfix-large.jpg';

	function handleClick2(index) {
		openedIndex = -1;
		var text = x.patchversion[index].patchnotes.findIndex((x) => x.majorpatch === true);
		test1 = index;
		//console.log(x.patchversion[index].patchnotes);
		// console.log(text);
		if (x.patchversion[index].patchnotes[text] != undefined) {
			headerindex =
				'https://cdn.tenno.dev/webp/https:' + x.patchversion[index].patchnotes[text].src;
		} else {
			//console.log(x.patchversion[index].patchnotes);
			var sorted = x.patchversion[index].patchnotes.slice();
			sorted = sorted.sort(function (a, b) {
				if (a.release_date < b.release_date) return -1;
				if (a.release_date > b.release_date) return 1;
				return 0;
			});
			//console.log(sorted);
			headerindex = 'https://cdn.tenno.dev/webp/https:' + sorted[0].src;
		}
	}
	var y = [];
	var y2 = [];
	$: x = $patchData.data;
	//$: console.log($selectedplatform);
	function handleClick(index) {
		openedIndex == index ? (openedIndex = -1) : (openedIndex = index);
	}
	function updateimg(text) {
		var t = text;
		var imgproxy = 'https://cdn.tenno.dev/webp/';
		var html = xss(t, {
			onTagAttr: function (tag, name, value, isWhiteAttr) {
				if (tag === 'img' && name === 'src') {
					// Use the built-in friendlyAttrValue function to escape attribute
					// values. It supports converting entity tags such as &lt; to printable
					// characters such as <
					// program to check if a string starts with 'S' and ends with 'G'

					// check if the string starts with S and ends with G
					if (value.startsWith('https') || value.startsWith('http')) {
						//console.log('The string starts with S and ends with G');
						value = value;
					} else {
						value = 'https:' + value;
					}
					value = 'src=' + imgproxy + xss.friendlyAttrValue(value) + '';
					return value;
				}
				if (tag === 'a' && name === 'href') {
					// Use the built-in friendlyAttrValue function to escape attribute
					// values. It supports converting entity tags such as &lt; to printable
					// characters such as <
					if (value.endsWith('jpg') || value.endsWith('http')) {
						//console.log('The string starts with S and ends with G');
						value = imgproxy + value;
					} else {
						value = value;
					}
					value = 'href="' + imgproxy + xss.friendlyAttrValue(value) + '"';

					return imgproxy + xss.friendlyAttrValue(value);
				}
				// Return nothing, means keep the default handling measure
			}
		});
		//console.log(html);
		return html;
	} /**/
	var userData1 = false;
</script>

<svelte:head>
	<title>Warframe Info Hub • Patchnotes • WIP</title>
</svelte:head>

<div class=" container  flex-1 overflow-y-auto py-16 pt-0 bg-dark-400 mx-auto">
	{#if $patchData}
		{#if $patchData.fetching}
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
		{:else if $patchData.error}
			<div class=" bg-red-50 border-l-4 border-red-400 p-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<!-- Heroicon name: solid/x-circle -->
						<svg
							class="h-5 w-5 text-red-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<p class="text-sm text-red-700">
							Error: {patchData.error}
						</p>
					</div>
				</div>
			</div>
		{:else}
					<div class="bg-red-50 border-l-4 border-red-400 p-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<!-- Heroicon name: solid/exclamation -->
						<svg
							class="h-5 w-5 text-red-400"
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
						<p class="text-sm text-red-700">WIP- NOT UP2DATE</p>
					</div>
				</div>
			</div>
			<div
				class="pt-2 sm:h-1/4 md:h-1/2 lg:h-1/3 xl:h-2/3 h-1/4  w-min-full bg-center	bg-contain bg-no-repeat "
				style="background-image: url({headerindex});"
			/>
			<div>
				<Tabs class=" text-white">
					<TabList>
						{#each $patchData.data.patchversion as item, i}
							<Tab><span>{item['majorpatch'].replace(/^0+/, '')}.x</span></Tab>
						{/each}
					</TabList>
					{#each $patchData.data.patchversion as item2, i}
						<TabPanel>
							<div
								class="flex flex-wrap  container object-contain"
								on:focus|preventDefault={handleClick2(i)}
							/>

							{#each item2.patchnotes as item3, ii}
								<div class="text-primary bg-box cursor-default border-grey-200 border-b-2">
									<div
										id={ii}
										on:click|preventDefault={() => handleClick(ii)}
										class="grid  grid-cols-5 pl-2"
									>
										<div class="w-full p-2 text-left number-col col-span-2">
											{item3.title}
										</div>
										<div class="w-full p-2  number-col ">
											{#if item3.release_date}
												<span class="block md:hidden text-center">
													{format(new Date(item3.release_date), 'dd.MM yyyy')}
												</span>
												<span class="hidden md:block text-right">
													{format(new Date(item3.release_date), 'dd.MMMM yyyy')}
												</span>
											{/if}
										</div>
										{#if item3.majorpatch}
											<div class="w-full p-2  col-span-1">
												<div class="  items-center badge badge-primary">Major</div>
											</div>
										{/if}
										{#if item3.hotfix}
											<div class="w-full p-2 col-span-1">
												<span class=" items-center badge badge-warning"> Hotfix </span>
											</div>{/if}
									</div>
									{#if openedIndex == ii}
										<div class="flex items-center border-grey-200 border-b-2">
											<div class="w-full h-auto py-2 pl-2 bg-box">
												<p>{@html updateimg(item3.body)}</p>
											</div>
										</div>
									{/if}
								</div>{/each}
						</TabPanel>
					{/each}
				</Tabs>
			</div>
		{/if}
	{/if}
</div>

<style>
</style>
