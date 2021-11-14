<script>
	// @ts-nocheck

	import { onDestroy } from 'svelte';

	export let earthCycle = {};
	export let cetusCycle = {};
	export let cambionCycle = {};
	export let vallisCycle = {};
	export let steelPath = {};
	import Countdown from '@tenno-dev/svelte-countdown/src/index.js';
	import { _ } from 'svelte-i18n';
</script>

<div
	class="h-auto max-w-lg overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
>
	<div class="pr-4 pt-4 text-2xl font-bold bg-transparent text-primary  sm:pr-6">
		<div class="i-mdi-clock-outline text-blue-400 text-2xl inline-block align-middle mb-1" />

		Timers
	</div>
	<div class="pt-0 bg-box text-primary">
		<div>
			<div class="text-primary bg-box grid  grid-cols-4 py-2 px-2 border-b-4 border-gray-600">
				<div class="w-full h-auto">Region</div>
				<span class="w-full h-auto text-left"> State: </span>
				<span class="w-full h-auto text-center number-col col-span-2"> Time left: </span>
			</div>
			<div class="grid  grid-cols-4 p-1  px-2 border-b border-gray-600">
				<div class="w-full h-auto col-span-1">Earth</div>
				<div class="w-full h-auto col-span-1 ">
					{#if earthCycle.state == 'day'}
						<div class="i-mdi-weather-sunny text-yellow-400 text-2xl" />
						{$_('timer.day')}
					{:else}
						<div class="i-mdi-moon-waning-crescent text-blue-300 text-2xl" />
						{$_('timer.night')}
					{/if}
				</div>
				<div class="w-full h-auto col-span-2 text-right">
					<div class="i-logos-vue text-3xl" />

					<Countdown
						from={earthCycle.expiry}
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
							{$_('timer.till')}
							{#if earthCycle.state == 'day'}
								<div class="i-mdi-moon-waning-crescent text-blue-300 text-2xl" />
							{:else}
								<div class="i-mdi-weather-sunny text-yellow-400 text-2xl" />
							{/if}
						</div>
					</Countdown>
				</div>
				<div class="w-full h-auto col-span-1">Cetus</div>
				<div class="w-full h-auto col-span-1 ">
					{#if cetusCycle.state == 'day'}
						<div class="i-mdi-weather-sunny text-yellow-400 text-2xl" />
						{$_('timer.day')}
					{:else}
						<div class="i-mdi-moon-waning-crescent text-blue-300 text-2xl" />
						{$_('timer.night')}
					{/if}
				</div>
				<div class="w-full h-auto col-span-2 text-right">
					<Countdown
						from={cetusCycle.expiry}
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
							{$_('timer.till')}
							{#if cetusCycle.state == 'day'}
								<div class="i-mdi-moon-waning-crescent text-blue-300 text-2xl" />
							{:else}
								<div class="i-mdi-weather-sunny text-yellow-400 text-2xl" />
							{/if}
						</div>
					</Countdown>
				</div>
				<!-- Valis -->
				<div class="w-full h-auto">Valis</div>
				<div class="w-full h-auto col-span-1 ">
					{#if vallisCycle.state == 'warm'}
						<div class="i-mdi-fire text-yellow-400 text-2xl" />
						{$_('timer.warm')}
					{:else}
						<div class="i-mdi-snowflake text-blue-300 text-2xl" />
						{$_('timer.cold')}
					{/if}
				</div>
				<div class="w-full h-auto col-span-2 text-right">
					<Countdown
						from={vallisCycle.expiry}
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
							{$_('timer.till')}
							{#if vallisCycle.state == 'warm'}
								<div class="i-mdi-snowflake text-blue-300 text-2xl" />
							{:else}
								<div class="i-mdi-fire text-yellow-400 text-2xl" />
							{/if}
						</div>
					</Countdown>
				</div>
				<!-- Cambion -->
				<div class="w-full h-auto">Cambion</div>
				<div class="w-full h-auto col-span-1 ">
					{cambionCycle.active}
				</div>
				<div class="w-full h-auto col-span-2 text-right">
					<Countdown
						from={cambionCycle.expiry}
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
							left
						</div>
					</Countdown>
				</div>
				<!-- Steel path -->
				<div class="w-full h-auto col-span-1 ">Steel Path</div>
				<div class="w-full h-auto col-span-1 ">
					{steelPath.currentReward.name}: {steelPath.currentReward.cost}
				</div>
				<div class="w-full h-auto col-span-2 text-right">
					<Countdown
						from={steelPath.expiry}
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
							left
						</div>
					</Countdown>
				</div>
			</div>
		</div>
	</div>
</div>
