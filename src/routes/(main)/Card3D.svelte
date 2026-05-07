<script lang="ts">
	import { cn } from '$lib/utils';

	let { title = '', img = '', imgAlt = '' } = $props();

	let ref: HTMLElement;

	let cardRotationX = $state(0);
	let cardRotationY = $state(0);
	let initialCardRotationZ = 0;// (Math.random() - 0.5) * 0.1;
	let cardRotationZ = $state(initialCardRotationZ);
	let cardTranslationY = $state(0);

	function onMouseMove(e: MouseEvent) {
		if (!ref) {
			return;
		}

		let rect = ref.getBoundingClientRect();
		let x = ((e.clientX - rect.x) / rect.width) * 2 - 1;
		let y = ((e.clientY - rect.y) / rect.height) * 2 - 1;

		console.log(x, y);

		cardRotationY = x * 0.2;
		cardRotationX = -y * 0.2;
		cardRotationZ = 0.0;

		cardTranslationY = -10;
	}

	function onMouseLeave() {
		cardRotationY = 0.0;
		cardRotationX = 0.0;
		cardRotationZ = initialCardRotationZ;

		cardTranslationY = 0;
	}
</script>

<button
	class={cn('size-60 group', 'pointer-event-none')}
	onmousemove={onMouseMove}
	onmouseleave={onMouseLeave}
>
	<div
		bind:this={ref}
		style={`transform: perspective(800px) rotateX(${cardRotationX}rad) rotateY(${cardRotationY}rad) rotateZ(${cardRotationZ}rad) translateY(${cardTranslationY}px);`}
		class={cn(
			'relative size-full flex flex-col',
			'pointer-event-none',
			'bg-white rounded-2xl p-3',
			'transition-transform',
			'ease-(--ease-out-back) duration-300'
		)}
	>
		{#if img}
			<img src={img} alt={imgAlt} class="size-full object-cover rounded-xl" />
		{/if}
		<span>
			{title}
		</span>
	</div>
</button>
