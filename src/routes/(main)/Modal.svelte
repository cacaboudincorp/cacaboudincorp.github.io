<script lang="ts">
	let { modalShown = $bindable(), children } = $props();

	let dialog: HTMLButtonElement | undefined = $state();

	function openModal() {
		modalShown = true;
	}
	
	function closeModal() {
		modalShown = false;
	}

	function handleBackdropClick(e: MouseEvent) {
        // If the click target is exactly the backdrop (and not a child)
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if modalShown}
	<div 
		onclick={handleBackdropClick}
		class="z-100 fixed size-full top-0 left-0 flex justify-center items-center bg-[#0004]"
		style="backdrop-filter: blur(4px)"
	>
		{@render children?.()}
	</div>
{/if}

<style>
</style>