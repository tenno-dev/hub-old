<script>
	import ProgressBar from '@okrad/svelte-progressbar';
	export let constructionProgress = undefined;
	import { _ } from 'svelte-i18n'; // import translation function
	function round100(input) {
		if (input <= 100) {
			return [input];
		} else {
			return [100];
		}
	}
</script>

<div class="h-auto  overflow-hidden border-transparent md:max-w-md sm:max-w-sm xl:max-w-xl">
	<div class="pr-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:pr-6">
		<div class="i-mdi-progress-clock text-blue-400 text-2xl inline-block align-middle mb-1" />
		Build Progress
	</div>
	<div class="pt-0 bg-box text-primary">
		<div
			class="text-primary bg-box grid  grid-cols-2 py-2 px-2  text-center border-b-4 border-gray-600"
		>
			<div class="col-span-1">{$_('Fomorian')}</div>
			<div class="col-span-1">{$_('Razorback')}</div>
		</div>
		{#if !constructionProgress}
			<div class="relative px-4 py-3 text-red-700 bg-transparent border border-red-400 rounded">
				<strong class="font-bold">No Construction Progress active</strong>
			</div>
		{/if}
	</div>
	{#if constructionProgress}
		<div class="text-primary bg-box grid justify-items-center grid-cols-2 py-2 px-2">
			<div class="text-primary  col-span-1 items-center">
				<ProgressBar
					width={100}
					thickness={9}
					style="radial"
					labelColor="white"
					series={round100(constructionProgress.fomorianProgress)}
					thresholds={[
						{
							till: 50,
							color: '#800000'
						},
						{
							till: 75,
							color: '#FF834D'
						},
						{
							till: 90,
							color: '#26529A'
						},
						{
							till: 100,
							color: '#008000'
						}
					]}
				/>
			</div>
			<div class="text-primary col-span-1">
				<ProgressBar
					width={100}
					thickness={9}
					style="radial"
					labelColor="white"
					series={round100(constructionProgress.razorbackProgress)}
					thresholds={[
						{
							till: 50,
							color: '#800000'
						},
						{
							till: 75,
							color: '#FF834D'
						},
						{
							till: 90,
							color: '#26529A'
						},
						{
							till: 100,
							color: '#008000'
						}
					]}
				/>
			</div>
		</div>
	{/if}
</div>
