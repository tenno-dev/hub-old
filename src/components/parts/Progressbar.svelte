<script>
	export let width;
	export let attacker;
	export let defender;
</script>

<div
	class="{defender} h-6 mt-5"
	role="progressbar"
	:aria-valuenow="width"
	aria-valuemin="0"
	aria-valuemax="100"
>
	<div
		class="{attacker} h-6 text-center text-white text-sm transition"
		style="width: {width}%; transition: width 3s;"
		x-text="{width}%"
	>
		<slot />
	</div>
</div>
