<script>
	// @ts-nocheck

	import { onDestroy } from 'svelte';

	export let voidtrader = {};
	import Countdown from '@tenno-dev/svelte-countdown/src/index.js';
	import { _ } from 'svelte-i18n';
</script>

<div
	class="h-auto max-w-lg overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
>
	<div class="pr-4 pt-4 text-2xl font-bold bg-transparent text-primary  sm:pr-6">
		<div class="i-mdi-clock-outline text-blue-400 text-2xl inline-block align-middle mb-1" />
		Void Trader
	</div>
	<div class="pt-0 bg-box text-primary">
		<div>
			{#if !voidtrader.active}
			<div class="text-primary bg-box grid  grid-cols-4 py-2 px-2 border-b-4 border-gray-600">
					<div class="w-full h-auto col-span-3">{voidtrader.character} arrives at {voidtrader.location} in</div>
					<div class="w-full h-auto col-span-1 text-right">
						<Countdown
							from={voidtrader.activation}
							dateFormat="YYYY-MM-DD H:m:s"
							zone="Europe/Berlin"
							let:remaining
						>
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
								<!-- 	{#if earthCycle.state == 'day'}
								<div class="i-mdi-moon-waning-crescent text-blue-300 text-2xl" />
							{:else}
								<div class="i-mdi-weather-sunny text-yellow-400 text-2xl" />
							{/if}-->
							</div>
						</Countdown>
					</div>
				</div>
			{:else}
			<div class="text-primary bg-box grid  grid-cols-4 py-2 px-2 border-b-4 border-gray-600">
					<div class="w-full h-auto col-span-3">{voidtrader.character} leaves {voidtrader.location} in</div>
					<div class="w-full h-auto col-span-1 text-right">
						<Countdown
							from={voidtrader.expiry}
							dateFormat="YYYY-MM-DD H:m:s"
							zone="Europe/Berlin"
							let:remaining
						>
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
								<!-- 	{#if earthCycle.state == 'day'}
								<div class="i-mdi-moon-waning-crescent text-blue-300 text-2xl" />
							{:else}
								<div class="i-mdi-weather-sunny text-yellow-400 text-2xl" />
							{/if}-->
							</div>
						</Countdown>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
