<script>
// @ts-nocheck

	export let nightwave = {};
	import Countdown from '@tenno-dev/svelte-countdown/src/index.js';

	let openedIndex = -1;
	function handleClick(index) {
		openedIndex == index ? (openedIndex = -1) : (openedIndex = index);
	}
</script>

<div class="h-auto max-w-lg overflow-hidden border-transparent md:max-w-md sm:max-w-sm xl:max-w-xl">
	<div class="px-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:px-6">
		Nightwave {#if nightwave.season}Season {nightwave.season - 1} {:else} not active !{/if}
	</div>
	<div class="pt-0 bg-box text-primary">
		{#if !nightwave}
			<div class="relative px-4 py-3 text-red-700 bg-transparent border border-red-400 rounded">
				<strong class="font-bold">No Nightwave active</strong>
			</div>
		{/if}
	</div>

	{#if nightwave.activeChallenges}
		<div
			class="text-primary bg-box grid items-center grid-cols-2 py-2 px-2 border-b-4 border-gray-600"
		>
			<div class="pl-2 w-full h-auto">
				Season {nightwave.season - 1}
			</div>
			<span class="w-full h-auto number-col text-right">
				<Countdown from={nightwave.expiry} dateFormat="YYYY-MM-DD H:m:s" let:remaining>
					<div class="whatever">
						Ends in:
								<span class="text-xxs">
										{#if remaining.days > 0}
											<span class="text-base"> {remaining.days}d:</span>{/if}
										{#if remaining.hours > 0}
											<span class="text-base"> {remaining.hours}h:</span>{/if}
										{#if remaining.minutes > 0}
											<span class="text-base"> {remaining.minutes}m:</span>
										{/if}
										{#if remaining.seconds > 0}
											<span class="text-base"> {remaining.seconds}s</span>
										{/if}
									</span>
					</div>
				</Countdown>
			</span>
		</div>
		{#each nightwave.activeChallenges as activeChallenge, i (activeChallenge.id)}
			<div class="text-primary bg-box cursor-default ">
				<div
					id={activeChallenge.id}
					on:click={handleClick(activeChallenge.id)}
					class="grid  grid-cols-2 pl-2"
				>
					<div class="w-full p-2 text-left number-col">
						{activeChallenge.title}
					</div>
					<div class="w-full p-2 text-right number-col">
						<Countdown from={activeChallenge.expiry} dateFormat="YYYY-MM-DD H:m:s" let:remaining>
							<div>
								<span class="text-xxs">
										{#if remaining.days > 0}
											<span class="text-base"> {remaining.days}d:</span>{/if}
										{#if remaining.hours > 0}
											<span class="text-base"> {remaining.hours}h:</span>{/if}
										{#if remaining.minutes > 0}
											<span class="text-base"> {remaining.minutes}m:</span>
										{/if}
										{#if remaining.seconds > 0}
											<span class="text-base"> {remaining.seconds}s</span>
										{/if}
									</span>
							</div>
						</Countdown>
					</div>
					<span
						class="{openedIndex} == {activeChallenge.id} ? 'fa-chevron-down' : 'fa-chevron-up'"
					/>
				</div>
				{#if openedIndex == activeChallenge.id}
					<div class="flex items-center border-b border-gray-600">
						<div class="w-full h-auto py-2 pl-2 bg-box">
							{activeChallenge.desc}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	{/if}
</div>

<style>
</style>
