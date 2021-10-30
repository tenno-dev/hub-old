<script>
	export let alerts = [];
	import { _ } from 'svelte-i18n';
</script>

<div
	class="h-auto max-w-lg overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
>
	<div class="pr-4 pt-4 text-4xl font-bold bg-transparent text-primary sm:pr-6">
		<div class="i-mdi-alarm text-blue-400 text-3xl inline-block" />

		{$_('alerts.title', { default: 'Alerts' })}
	</div>
	<div class="pt-0 bg-box text-primary">
		<div
			class="text-primary bg-box grid  grid-cols-4 py-2 px-2  text-center border-b-4 border-gray-600"
		>
			<div class="col-span-1">{$_('alert.type')}</div>
			<div class="col-span-1">{$_('alert.location' )}</div>
			<div class="col-span-1">{$_('alert.ends')}</div>
			<div class="col-span-1">{$_('alert.enemyfaction')}</div>
		</div>

		{#if alerts.length == 0 || alerts.length != 0}
			<div
				class="relative px-4 py-3 text-red-700 bg-transparent    rounded col-span-4 text-center  "
				role="alert"
			>
				<strong class="font-bold">{$_('noalerts')}</strong>
			</div>
		{:else}
			<badger-accordion v-else ref="myAccordion" icons="false">
				<badger-accordion-item v-for="alert in alerts" key="alert.id">
					<div slot="header" class="flex items-center px-3">
						<p class="w-full">
							<span>
								{alerts.MissionType}<br />tracker.on
								{alerts.MissionLocation}</span
							>
						</p>
						<!--
          vs
          <span class="getcolourfaction(inva.DefenderMissionInfo)">{{
            inva.DefenderMissionInfo
          }}</span>
        </p>-->
						<span class="flex-shrink-0 p-2 pr-0"> alerts.Ends) left </span>
					</div>

					<div slot="content" class="break-all border-b border-gray-600 bg-box">
						<div class="flex items-center px-3">
							<p class="w-full ml-4">tracker.enemylevel</p>
							<span class="flex-shrink-0 p-2 ml-4 mr-2">
								{alerts.MinEnemyLevel}
								- {alert.MaxEnemyLevel}</span
							>
						</div>
						<div class="flex items-center px-3">
							<p class="w-full ml-4">tracker.enemyfaction</p>
							<span class="flex-shrink-0 p-2 ml-4 mr-2">
								<span class="getcolourfaction(alert.MissionFaction)"> {alerts.MissionFaction}</span>
							</span>
						</div>
						<div class="flex items-center px-3">
							<p class="w-full ml-4">Credits tracker.rewards</p>
							<span class="flex-shrink-0 p-2 ml-4 mr-2">
								{alerts.RewardCredits}
							</span>
						</div>
						<div v-if="alert.RewardItem" class="flex items-center px-3">
							<p class="w-full ml-4">Item tracker.rewards:</p>
							<span class="flex-shrink-0 p-2 ml-4 mr-2">
								<span v-if="alert.RewardItemManyCount">{alerts.RewardItemManyCount}x </span><span
									v-else
									>1x
								</span>
								{alert.RewardItem}
							</span>
						</div>
						<div v-if="alert.RewardItemMany" class="flex items-center px-3">
							<p class="w-full ml-4">Item tracker.rewards:</p>
							<span class="flex-shrink-0 p-2 ml-4 mr-2">
								<span v-if="alert.RewardItemManyCount">{alert.RewardItemManyCount}x </span><span
									v-else
									>1x
								</span>
								{alert.RewardItemMany}
							</span>
						</div>
					</div>
				</badger-accordion-item>
			</badger-accordion>
		{/if}
	</div>
</div>
