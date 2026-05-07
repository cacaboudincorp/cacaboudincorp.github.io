<script lang="ts">
	import { cn } from '$lib/utils';

	export var mainColor: String = 'var(--main-dark)';
	export var secColor: String = 'var(--main-dark-shad)';
	export var shadColor: String = 'var(--main-dark-shad)';
	export var textColor: String = 'var(--main-dark-text)';

	const defaultFunc = () => {};

	let {
		icon = '',
		iconSrc = '',
		alt = '',
		href = '',
		borderRadius = '100px',

		onclick = defaultFunc
	} = $props();

	if (href && onclick !== defaultFunc) {
		onclick = () => {
			location.href = href;
		};
	}
</script>

{#snippet buttonContent()}
	<div
		style={`
			background-color: ${mainColor};
			box-shadow:
			inset 0px 0px 0px 5px ${secColor},
			inset 0px 0px 0px 10px ${mainColor},
			inset 0px 0px 0px 15px ${secColor},
			0px 2px 0px ${shadColor},
			0px 4px 0px ${shadColor},
			0px 6px 0px ${shadColor},
			0px 8px 0px ${shadColor},
			0px 10px 0px ${shadColor},
			2px 17px 0px var(--transp-shad);
			color: ${textColor};
		`}
		class={cn(
			'relative',
			'p-6 pt-16',
			'text-2xl text-center',
			'rounded-b-3xl',
			'translate-y-0',

			'transition-transform',
			'ease-(--ease-out-back) duration-300',
			'group-hover:translate-y-3'
		)}
	>
		<div
			class="button-container w-full items-center justify-center"
			style={`border-radius: ${borderRadius}`}
		>
			<!--button-container-->

			<div class="flex flex-col w-full items-center justify-center">
				{#if icon}
					<img class="icon" src={icon} {alt} />
				{/if}
				{#if iconSrc}
					{@html iconSrc}
				{/if}
			</div>
		</div>
	</div>
{/snippet}

{#if href}
	<a class={cn('flex-0', 'group relative', 'h-fit', '-translate-y-14')} {href}>
		{@render buttonContent()}
	</a>
{:else}
	<button {onclick} class={cn('flex-0', 'group relative', 'h-fit', '-translate-y-14')}>
		{@render buttonContent()}
	</button>
{/if}

<style>
	.container {
		width: min-content;
	}

	.icon {
		min-width: 30px;
		width: 30px;
		height: 30px;
	}
</style>
