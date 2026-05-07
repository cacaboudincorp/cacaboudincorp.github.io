<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: {
		children: Snippet<[]>;
	} = $props();
</script>

<div class="size-full pt-24 pb-10">
	{@render children?.()}
</div>	

<style>
</style>
