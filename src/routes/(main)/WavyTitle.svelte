<script lang="ts">
	import { cn } from '$lib/utils';

	let { text } = $props();
</script>

<p>
	{#each [...text] as letter, i}
		<span class="letter-container">
			<span
				class={cn(
					'letter',

					'mt-0 mb-0',

					'text-(--main-dark)',
					'text-[90px]',
					'font-[700]',

					'pointer-events-none'

					// "translate-y-0",
					// "hover:translate-y-1000",
					// "hover:text-red-400",
					// "ease-(--ease-out-back) transition-transform duration-300",
				)}
			>
				{letter}
			</span>
		</span>
	{/each}
</p>

<style>
	.letter-container {
		display: inline-block;

		height: auto;
	}

	.letter {
		display: inline-block;

		text-shadow:
			0px 2px 0px var(--main-dark-shad),
			0px 4px 0px var(--main-dark-shad),
			0px 6px 0px var(--main-dark-shad),
			0px 8px 0px var(--main-dark-shad),
			0px 10px 0px var(--main-dark-shad),
			2px 15px 0 var(--transp-shad);

		transform: translateY(0px);

		transition:
			transform 0.3s var(--ease-out-back),
			text-shadow 0.3s var(--ease-out-back);
	}

	.letter-container:hover .letter {
		text-shadow:
			0px 3.2px 0px var(--main-dark-shad),
			0px 6.4px 0px var(--main-dark-shad),
			0px 9.6px 0px var(--main-dark-shad),
			0px 12.8px 0px var(--main-dark-shad),
			0px 16px 0px var(--main-dark-shad),
			4px 24px 0px var(--transp-shad);

		transform: translateY(-6px);
	}

	.letter-container:active .letter {
		text-shadow:
			0px 1px 0px var(--main-dark-shad),
			0px 2px 0px var(--main-dark-shad),
			0px 3px 0px var(--main-dark-shad),
			0px 4px 0px var(--main-dark-shad),
			0px 7px 0px var(--main-dark-shad),
			1px 10px 0px var(--transp-shad);

		transform: translateY(3px);
	}
</style>
