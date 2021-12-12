<script>
	// @ts-nocheck

	import { selectedplatform } from '../stores/pc';
	import Select from 'svelte-select';
	import { _, t } from 'svelte-i18n';
	import Item from './parts/PlatformItem.svelte';
	import Selection from './parts/PlatformSelect.svelte';
	let opennav = false;
	let p = $selectedplatform;
	let selectplatlabel = p;

	function PlatformIcon(plat) {
		console.log(plat);
		switch (plat) {
			case 'pc':
				return 'fa-brands:windows';
			case 'ps4':
				return 'fa-brands:playstation';
			case 'xb1':
				return 'fa-brands:xbox';
			case 'swi':
				return 'cib:nintendo-switch';
			default:
				return plat;
		}
	}
	let platformlist = [
		{ label: $_('pc'), value: 'pc', icon: 'fa-brands:windows' },
		{ label: $_('ps4'), value: 'ps4', icon: 'fa-brands:playstation' },
		{ label: $_('xb1'), value: 'xb1', icon: 'fa-brands:xbox' },
		{ label: $_('swi'), value: 'swi', icon: 'cib:nintendo-switch' }
	];
	function handleSelect(event) {
		$selectedplatform = event.detail.value;
		selectplatlabel = event.detail.value;
	}
	const getOptionLabel = (option) => option.label;
	const getSelectionLabel = (option) => option.label;
	function handleClick() {
		opennav = !opennav;
	}
</script>

<!-- <nav class="sticky top-0  z-10 w-full py-0 pin-t bg-navbar"> -->
<nav class="bg-gray-800 w-full border-b border-gray-700 text-white">
	<div class="mx-auto sm:px-6 lg:px-8">
		<div>
			<div class="flex items-center justify-between h-16 px-4 sm:px-0">
				<div class="flex items-center">
					<div class="flex-shrink-0 text-white">
						<div
							class=" py-2 pr-2 font-medium leading-5 text-white rounded-md duration-150 ease-in-out   focus:bg-gray-800 focus:text-white"
							style="transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;"
						>
							Warframe Info Hub
						</div>
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-center justify-between space-x-6 ">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<a
								href="/"
								class="hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
								aria-current="page">Home</a
							>

							<a
								href="/patchnotes"
								class="hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
								>Patchnotes</a
							>

							<a
								href="/rivendata"
								class=" hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
								>Rivendata</a
							>
							<a
								href="/warframes"
								class=" hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium"
								>Warframes</a
							>
							<div class="w-full ">
								<Select
									class="w-full"
									items={platformlist}
									on:select={handleSelect}
									bind="$selectedplatform"
									bind:value={selectplatlabel}
									{getOptionLabel}
									isClearable={false}
									listAutoWidth={false}
									{getSelectionLabel}
									{Item}
									{Selection}
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button
						on:click|preventDefault={() => handleClick()}
						type="button"
						class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
					Heroicon name: outline/menu
  
					Menu open: "hidden", Menu closed: "block"
				  -->
						<svg
							class:block={!opennav}
							class:hidden={opennav}
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<!--
					Heroicon name: outline/x
  
					Menu open: "block", Menu closed: "hidden"
				  -->
						<svg
							class:hidden={!opennav}
							class:block={opennav}
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class:hidden={!opennav} class="border-b border-gray-700 md:hidden" id="mobile-menu">
		<div class="px-2 py-3 space-y-1 sm:px-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
				href="/"
				class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
				aria-current="page">Home</a
			>
			<a
				href="/patchnotes"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>Patchnotes</a
			>

			<a
				href="/rivendata"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>Rivendata</a
			>
			<a
				href="/warframes"
				class=" hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium">Warframes</a
			>
			<Select
				class="w-full"
				items={platformlist}
				on:select={handleSelect}
				bind="$selectedplatform"
				bind:value={selectplatlabel}
				{getOptionLabel}
				isClearable={false}
				listAutoWidth={false}
				{getSelectionLabel}
				{Item}
				{Selection}
			/>
		</div>
	</div>
</nav>

<style>
	:global(.selectContainer) {
		width: 100% !important;
	}
</style>
