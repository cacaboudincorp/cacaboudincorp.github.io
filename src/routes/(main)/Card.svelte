<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		title = '',
		description = '',
		longDescription = '',
		img = '',
		imgAlt = '',
		carouselImg = '',
		carouselImgAlt = '',
		fillImage = true,

		titleTextSize = 'xl',
		descriptionTextSize = 'md',
		
		width='240px',
		height='280px',
		starred = false,
		showTitle = true,

		onclick = (() => {}),
	} = $props();

	let ref: HTMLElement;

	let initialCardRotation = (Math.random() - 0.5) * 0.1;
	let cardRotation = $state(initialCardRotation);
</script>

<button 
	class={cn('group')} 
	style={
		`max-width: ${width};` + 
		`height: ${height};`
	} 
	
	{onclick}
>
	<div
		bind:this={ref}
		class={cn(
			'relative size-full flex flex-col',
			'pointer-events-none',
			'rounded-2xl p-3',
			'transition-[all,box-shadow_200ms_ease]',
			'ease-(--ease-out-back) duration-300',

			'rotate-[var(--rotation-value)]',
			'shadow-[2px_8px_0px_var(--transp-shad)]',

			'group-hover:-translate-y-2',
			'group-hover:-rotate-2',
			'group-hover:shadow-[3px_16px_0px_var(--transp-shad)]',
		)}
		style={`background-color: ${starred ? '#fff4db' : '#fff'}`}
	>
		{#if img}
			<div class="flex-grow min-h-0">
				<img src={img} alt={imgAlt} class="size-full object-cover rounded-xl" style={`object-fit: ${fillImage ? 'cover' : 'contain'};`} />
			</div>
		{/if}
		{#if showTitle}
			<h2 class={`mt-3 text-${titleTextSize} font-black`}>
				{title}
			</h2>
		{/if}
		{#if description}
			<p class={`description flex-0 mt-2 text-${descriptionTextSize}`}>
				{@html description}
			</p>
		{/if}

		{#if starred}
			<img
				src="/assets/icons/star_outlined.png"
				alt="star"
				class="star w-10 absolute -top-4 -left-4"
			/>
		{/if}
	</div>
</button>

<style>
	.star {
		animation: constantRotation 8s linear infinite;
	}

	@keyframes constantRotation {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.description a {
		color: var(--pink-text);
		
		text-decoration: underline;
	}
</style>
