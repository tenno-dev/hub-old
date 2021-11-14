<script>
	export let row;
</script>

{#if row.rerolled}
	<div class="i-mdi-check-circle text-green-400 text-2xl" />
{:else}
	<div class="i-mdi-cancel text-red-400 text-2xl" />
{/if}
