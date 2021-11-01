<script>
// @ts-nocheck

	export let invasions;
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

<div class="h-auto overflow-hidden border-transparent rounded md:max-w-md sm:max-w-sm xl:max-w-xl">
	<div class="pr-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:pr-6">
						<div class="i-mdi-sword-cross text-blue-400 text-2xl inline-block align-middle mb-1" />

		{$_('invasions.title', { default: 'Invasions' })}
	</div>
	<div class="pt-0 bg-box text-primary">
		{#if !invasions}
			<div class="text-primary">
				<div
					class="relative px-4 py-3 text-red-700 bg-transparent border border-red-400 rounded"
					role="alert"
				>
					<strong class="font-bold">
						{$_('invasions.noinvasions', { default: 'No Invasions today' })}
 					</strong>
				</div>
			</div>
		{:else}
				<div class="grid items-center grid-cols-2 px-2 py-2 pl-2 pr-4 border-b-4 border-gray-600">
					<div class="w-full h-auto">
						{$_('tracker2.type')}
						@ {$_('tracker2.location')}
					</div>
				</div>
				{#each invasions as activeChallenge, index (activeChallenge.id)}
					{#if !activeChallenge.completed}
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
					{/if}
				{/each}
		{/if}
	</div>
</div>
