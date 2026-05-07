<script lang="ts">
	import { cn } from '$lib/utils';
	import IconButton from './IconButton.svelte';

	let { currentCardIndex = $bindable(0), cards = [] } = $props();

	// let currentCardIndex = $state(0);
	let currentCard = $derived(cards[currentCardIndex]);

	function previousCard() {
		currentCardIndex = Math.max(0, currentCardIndex - 1);
	}

	function nextCard() {
		currentCardIndex = Math.min(cards.length - 1, currentCardIndex + 1);
	}

	console.log(cards);
</script>

<div class="flex flex-col items-center h-full pointer-events-none">
	<div
		class="flex flex-row max-w-[800px] items-center gap-3 grow-1 pt-[32px] pb-[128px] overflow-hidden"
	>
		<div
			class={cn(
				'pointer-events-auto',
				'flex flex-col',
				'max-h-full',
				'w-full',
				'overflow-auto',
				'm-6 p-5 rounded-3xl',
				'shadow-[2px_8px_0px_var(--transp-shad)]'
			)}
			style={`background-color: ${currentCard?.starred ? '#fff4db' : '#fff'}`}
		>
			{#if currentCard?.trailer}
				<iframe 
					src={currentCard.trailer} 
					title="YouTube video player" 
					style="width:100%; aspect-ratio: 16/9;"
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowfullscreen>
				</iframe>
			{:else if currentCard?.carouselImg}
				<img
					class="rounded-xl font-black size-full min-h-[400px] object-contain mb-3"
					src={currentCard?.carouselImg}
					alt={currentCard?.carouselImgAlt}
				/>
			{:else}
				<img
					class="rounded-xl font-black size-full min-h-[400px] object-contain mb-3"
					src={currentCard?.img}
					alt={currentCard?.imgAlt}
				/>
			{/if}

			<div>
				<p class="text-md mt-3 w-full text-center text-(--white-text)">
					{currentCardIndex + 1} / {cards.length}
				</p>
				<div class="flex flex-row mt-1 gap-3 items-center justify-center">
					{#if currentCard?.starred}
						<img src="/assets/icons/star_outlined.png" alt="star" class="star w-8"/>
					{/if}
					<h2 class="text-2xl text-center">
						{currentCard?.label}
					</h2>
				</div>
				{#if currentCard?.description}
					<p class="text-xl mt-2 w-full text-center">
						{@html currentCard?.description}
					</p>
				{/if}
				{#if currentCard?.longDescription}
					<p class="long-description text-lg mt-2 w-full text-left">
						{@html currentCard?.longDescription}
					</p>
				{/if}
				{#if currentCard?.links}
					<div class="flex w-full gap-5 justify-center">
						{#each currentCard?.links as linkInfo}
							<a class="card-link text-lg mt-2 text-left" href={linkInfo.link}>
								{linkInfo.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div
		class="pointer-events-auto absolute bottom-0 flex flex-row items-center justify-center gap-3 grow-0 p-8"
	>
		<IconButton
			icon="/assets/icons/arrow_left.svg"
			alt="email"
			--mainColor="var(--main-dark)"
			--secColor="var(--main-dark-shad)"
			--shadColor="var(--main-dark-shad)"
			onclick={() => {
				previousCard();
			}}
		/>
		<IconButton
			icon="/assets/icons/arrow_right.svg"
			alt="email"
			--mainColor="var(--main-dark)"
			--secColor="var(--main-dark-shad)"
			--shadColor="var(--main-dark-shad)"
			--textColor="var(--main-dark-text)"
			onclick={() => {
				nextCard();
			}}
		/>
	</div>
</div> 


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
	.long-description a {
		color: var(--pink-text);
		
		text-decoration: underline;
	}
</style>