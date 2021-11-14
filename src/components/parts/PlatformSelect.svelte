<script>
	// export let getSelectionLabel = undefined;
	export let item = undefined;
 	function PlatformIcon(plat) {
		//console.log('select='+plat);
		switch (plat) {
			case 'pc':
				return 'i-mdi-microsoft-windows text-black text-xl';
			case 'ps4':
				return 'i-mdi-sony-playstation text-black text-xl';
			case 'xb1':
				return 'i-mdi-microsoft-xbox text-black text-xl';
			case 'swi':
				return 'i-mdi-nintendo-switch text-black text-xl';
			default:
				return plat;
		}
	}
		function PlatformName(plat) {
		//console.log(plat);
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
		<div class={PlatformIcon(item.value)} />
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
