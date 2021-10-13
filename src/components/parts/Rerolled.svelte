<script>
	export let row;
	import Icon from '@iconify/svelte';
</script>

{#if row.rerolled}
	<Icon class="inline" icon="fa-solid:check-circle" color="green" />
{:else}
	<Icon class="inline" icon="fa-solid:ban" color="red" />
{/if}
