<script>
	export let deals = [];
	import { _ } from 'svelte-i18n';
	import { each } from 'svelte/internal';
	import Countdown from '@tenno-dev/svelte-countdown/src/index.js';
</script>

<div
	class="h-auto max-w-lg overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
>
	<div class="pr-4 pt-4 text-4xl font-bold bg-transparent text-primary sm:pr-6">
		<div class="i-mdi-cart text-blue-400 text-3xl inline-block" />

		{$_('Darvo.title', { default: 'Darvos Deals' })}
	</div>
	<div class="pt-0 bg-box text-primary">
		{#if deals.length == 0}
			<div v-if="!alerts" class="text-primary">
				<div
					class="relative px-4 py-3 text-red-700 bg-transparent border border-red-400 rounded"
					role="alert"
				>
					<strong class="font-bold">{$_('nodeals')}</strong>
				</div>
			</div>
		{:else}
			<div
				class="text-primary bg-box grid  grid-cols-6 py-2 px-2  text-center border-b-4 border-gray-600"
			>
				<div class="col-span-2">{$_('darvo.item')}</div>
				<div class="col-span-2">{$_('darvo.price')}/{$_('darvo.stock')}</div>
				<div class="col-span-2">{$_('darvo.timeleft')}</div>
			</div>
			{#each deals as deal}
				<div class="grid grid-cols-6 auto-rows-min text-center		">
					<div class="col-span-2">
						{deal.item}
					</div>
					<div class="col-span-2">
						<strike class="text-red-400 font-bold">{deal.originalPrice}</strike> -><b
							class="text-green-400"
						>
							{deal.salePrice}</b
						><br>
						{#if deal.total - deal.sold == 0}<span class="text-red-400 font-bold"
								>{$_('outofstock')}</span
							>
						{:else if deal.sold == 0}<span class="text-green-400 font-bold">
								{deal.total - deal.sold}
								{$_('left')}
								{deal.total}</span
							>
						{:else}
							{deal.total - deal.sold}
							{$_('left')}
							{deal.total}
						{/if}
					</div>
					<div class="col-span-2">
						<Countdown
							from={deal.expiry}
							dateFormat="YYYY-MM-DD H:m:s"
							zone="Europe/Berlin"
							let:remaining
						>
							<div class="whatever">
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
									{/if}<span class="text-base">&nbsp;{$_('lefttime')}</span>
								</span>
							</div>
						</Countdown>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
