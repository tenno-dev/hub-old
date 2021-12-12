<script>
	// @ts-nocheck
	import Countdown from '@tenno-dev/svelte-countdown/src/index.js';

	export let alerts = [];
	import { _ } from 'svelte-i18n';
	function getcolourfaction(prop) {
		let x = null;
		if (prop === 'Grineer') {
			x = 'bg-red-600';
		} else if (prop === 'Corpus') {
			x = 'bg-blue-600';
		} else if (prop === 'Infested') {
			x = 'bg-green-600';
		} else {
			x = 'bg-white';
		}
		return x;
	}
	let openedIndex = -1;
	function handleClick(index) {
		console.log(index);
		openedIndex == index ? (openedIndex = -1) : (openedIndex = index);
	}
</script>

<div
	class="h-auto max-w-lg overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl"
>
	<div class="pr-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:pr-6">
		<div class="i-mdi-alarm text-blue-400 text-2xl inline-block align-middle mb-1" />

		{$_('alerts.title', { default: 'Alerts' })}
	</div>
	<div class="pt-0 bg-box text-primary">
		<div
			class="text-primary bg-box grid  grid-cols-4 py-2 px-2  text-center border-b-4 border-gray-600"
		>
			<div class="col-span-1">{$_('alert.type')}</div>
			<div class="col-span-1">{$_('alert.location')}</div>
			<div class="col-span-1">{$_('alert.ends')}</div>
			<div class="col-span-1">{$_('alert.enemyfaction')}</div>
		</div>

		{#if alerts.length == 0}
			<div
				class="relative px-4 py-3 text-red-700 bg-transparent    rounded col-span-4 text-center  "
				role="alert"
			>
				<strong class="font-bold">{$_('noalerts')}</strong>
			</div>
		{:else}
			{#each alerts as activeChallenge, index (activeChallenge.id)}
				{#if activeChallenge.active == true}
					<div
						class="text-primary bg-box grid  grid-cols-4 py-2 px-2  text-center border-b-1 border-gray-600"
						id={activeChallenge.id}
						on:click={handleClick(activeChallenge.id)}
					>
						<div class="col-span-1">{activeChallenge.mission.type}</div>
						<div class="col-span-1">{activeChallenge.mission.node}</div>
						<div class="col-span-1">
							<Countdown
								from={activeChallenge.expiry}
								dateFormat="YYYY-MM-DD H:m:s"
								zone="Europe/Berlin"
								let:remaining
							>
								<div>
									<span class="text-xxs">
										{#if remaining.days > 0}
											<span class="text-base">{remaining.days}d </span>{/if}
										{#if remaining.hours > 0}
											<span class="text-base">{remaining.hours}:</span>{/if}
										{#if remaining.minutes > 0}
											<span class="text-base"> {remaining.minutes}:</span>
										{/if}
										{#if remaining.seconds > 0}
											<span class="text-base"> {remaining.seconds}s</span>
										{/if}
									</span>
								</div>
							</Countdown>
						</div>
						<div class="col-span-1">{activeChallenge.mission.faction}</div>
					</div>

					{#if openedIndex == activeChallenge.id}
						<div class="flex items-center border-b border-gray-600">
							<div class="w-full h-auto py-2 pl-2 bg-box">
								<div class="grid grid-cols-3 gap-0 px-2 py-1">
									{#if activeChallenge.mission.reward.countedItems.length > 0 || activeChallenge.mission.reward.items.length > 0}
										<div class="w-1/3">Rewards:</div>
										<div class="col-span-2  break-normal">
											{#each activeChallenge.mission.reward.items as attackerReward (activeChallenge.id)}
												{attackerReward}
											{/each}
											{#if activeChallenge.mission.reward.countedItems}
												{#each activeChallenge.mission.reward.countedItems as attackerReward (activeChallenge.id)}
													{attackerReward.count} x {attackerReward.key}
												{/each}
											{/if}
											{#if activeChallenge.mission.reward.credits > 0}
												<br />
												& {activeChallenge.mission.reward.credits}
												{$_('credits')}
											{/if}
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/if}
				{/if}
			{/each}
			<!-- 				{JSON.stringify(activeChallenge)}

						<div class=" relative max-w-xl  overflow-hidden">
							<div class="flex justify-between ...">
								<div>{activeChallenge.desc} on {activeChallenge.nodeKey}</div>
								<div />
								<div>
									{#if activeChallenge.vsInfestation}
										<div class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Infested</div>
									{/if}
								</div>
							</div>
							<div
								class="{getcolourfaction(activeChallenge.defender.factionKey)}  mb-2 h-6 z-10"
								role="progressbar"
								id={activeChallenge.id}
								on:click={handleClick(activeChallenge.id)}
								:aria-valuenow="width"
								aria-valuemin="0"
								aria-valuemax="100"
							>
								<div
									class="{getcolourfaction(
										activeChallenge.attacker.factionKey
									)} h-6 text-center text-white text-sm transition z-50"
									style="width: {activeChallenge.completion.toFixed(2)}%; transition: width 3s;"
									x-text="{activeChallenge.completion.toFixed(2)}%"
								>
									{activeChallenge.completion.toFixed(2)}%
								</div>
							</div>
							{#if openedIndex == activeChallenge.id}
								<div class="flex items-center border-b border-gray-600">
									<div class="w-full h-auto py-2 pl-2 bg-box">
										<div class="grid grid-cols-2 gap-0 px-2 py-1">
											{#if activeChallenge.attackerReward.countedItems.length > 0 || activeChallenge.attackerReward.items.length > 0}
												<div class="w-full">
													{$_('tracker.attacker')}
													{$_('tracker.rewards')}:
												</div>
												<div class="w-full break-normal">
													{#each activeChallenge.attackerReward.items as attackerReward (activeChallenge.id)}
														{attackerReward}
													{/each}
													{#if activeChallenge.attackerReward.countedItems}
														{#each activeChallenge.attackerReward.countedItems as attackerReward (activeChallenge.id)}
															{attackerReward.count} x {attackerReward.key}
														{/each}
													{/if}
													{#if activeChallenge.attackerReward.credits > 0}
														& {activeChallenge.attackerReward.credits} {$_('credits')}
													{/if}
												</div>
											{/if}
											{#if activeChallenge.defenderReward.countedItems.length > 0 || activeChallenge.defenderReward.items.length > 0}
												<div class="w-full">
													{$_('tracker.defender')}
													{$_('tracker.rewards')}:
												</div>
												<div class="w-full break-normal">
													{#each activeChallenge.defenderReward.items as defenderReward (activeChallenge.id)}
														{defenderReward}
													{/each}
													{#if activeChallenge.defenderReward.countedItems}
														{#each activeChallenge.defenderReward.countedItems as defenderReward (activeChallenge.id)}
															{defenderReward.count} x {defenderReward.key}
														{/each}
													{/if}
													{#if activeChallenge.defenderReward.credits > 0}
														& {activeChallenge.defenderReward.credits} {$_('credits')}
													{/if}
												</div>
											{/if}
										</div>
									</div>
								</div>
							{/if}
						</div>




			<badger-accordion v-else ref="myAccordion" icons="false">
				<badger-accordion-item v-for="alert in alerts" key="alert.id">
					<div slot="header" class="flex items-center px-3">
						<p class="w-full">
							<span>
								{alerts.MissionType}<br />tracker.on
								{alerts.MissionLocation}</span
							>
						</p>
						 
          vs
          <span class="getcolourfaction(inva.DefenderMissionInfo)">{{
            inva.DefenderMissionInfo
          }}</span>
        </p> 
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
			</badger-accordion>-->
		{/if}
	</div>
</div>
