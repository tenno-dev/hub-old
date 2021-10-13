<script>
	// export let getSelectionLabel = undefined;
	export let item = undefined;
	import Icon from '@iconify/svelte';
	function PlatformIcon(plat) {
		console.log('select='+plat);
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
		function PlatformName(plat) {
		console.log(plat);
		switch (plat) {
			case 'pc':
				return 'PC';
			case 'ps4':
				return 'Playstation 4';
			case 'xb1':
				return 'Xbox';
			case 'swi':
				return 'Switch';
			default:
				return plat;
		}
	}
</script>

<div class="customItem">
	<Icon class="text-black" icon={PlatformIcon(item.value)} />
	<div class="pl-1 customItem_title text-black">
		<div class="customItem_name">{PlatformName(item.value)}</div>
	</div>
</div>

<style>
	.customItem {
		display: flex;
		align-items: center;
	}

	.customItem_title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.customItem_name {
		display: inline-block;
		font-weight: 700;
		margin-right: 10px;
	}
</style>
