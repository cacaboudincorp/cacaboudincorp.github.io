<script lang="ts">
	// TODO
	// fix weird bug where you can hover and click but it doesn't trigger the click func
	// accessibility
	// responsiveness
	// fix issue with pointer-events-auto/none where you can't click on buttons behind the invisible
	//   options when unopened

	// let { text } = $props();
	const mainColor = 'var(--main-dark)';
	const secColor = 'var(--main-dark-shad)';
	const shadColor = 'var(--main-dark-shad)';

	import IconButton from './IconButton.svelte';
	import IconButtonNavbar from './IconButtonNavbar.svelte';
	import TextButton from './TextButton.svelte';

	let selectedIndex = $state(0);

	// let {
	//   xDirection = 'end'
	// }: {
	//   xDirection?: 'start' | 'end';
	// } = $props();

	let {
		options,
		xDirection = 'end'
	}: {
		xDirection?: 'start' | 'end';
		options?: {
			value: string;
			label: string;
			disabled?: boolean;
		}[];
	} = $props();

	let optionsShown = $state(false);

	function onButtonClick() {
		optionsShown = !optionsShown;
	}

	function onOptionClick(index: number, option: any) {
		selectedIndex = index;
		console.log(option);

		// close();
	}

	function close() {
		optionsShown = false;
	}

	function clickOutside(node: HTMLElement, callback: () => void) {
		let handle = (event: MouseEvent) => {
			if (!node.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('click', handle, true);

		return {
			destroy() {
				document.removeEventListener('click', handle, true);
			}
		};
	}

	// todo do close behavior when clicking outside the select (cf chatgpt)
</script>

<div
	class="select relative flex flex-col items-{xDirection} pointer-events-none"
	use:clickOutside={close}
>
	<div class="pointer-events-auto">
		<IconButtonNavbar
			onclick={onButtonClick}
			iconSrc='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--main-dark-text)"><path d="M309.17-74.65q-80.13-34.57-140.04-94.48-59.91-59.91-94.48-140.04Q40.09-389.3 40.09-480q0-90.7 34.56-170.83 34.57-80.13 94.48-140.04 59.91-59.91 140.04-94.48Q389.3-919.91 480-919.91q90.7 0 170.83 34.56 80.13 34.57 140.04 94.48 59.91 59.91 94.48 140.04Q919.91-570.7 919.91-480q0 90.7-34.56 170.83-34.57 80.13-94.48 140.04-59.91 59.91-140.04 94.48Q570.7-40.09 480-40.09q-90.7 0-170.83-34.56Zm169.7-90.26q22.3-33.87 40.59-73.09 18.28-39.22 30.28-80.22H409.7q12 41 29.43 80.22 17.44 39.22 39.74 73.09Zm-107.78-17.44q-18.13-30-30.07-64.5-11.93-34.5-20.93-71.37H208.35q26.43 46.44 68.8 82.72t93.94 53.15Zm216.13 0q51.56-16.87 94.5-53.15 42.93-36.28 69.37-82.72H639.35q-9 36.87-21.5 71.37-12.5 34.5-30.63 64.5ZM172.04-403.13h131.18q-2.57-18.57-4.07-37.5-1.5-18.94-1.5-39.37 0-21 1.5-39.65t4.07-37.22H172.04q-4.43 18-6.71 36.94-2.29 18.93-2.29 39.93 0 20.43 2.29 39.65 2.28 19.22 6.71 37.22Zm218.22 0h178.91q3-18.57 3.94-37.5.93-18.94.93-39.37 0-21-.93-39.65-.94-18.65-3.94-37.22H390.26q-3 18.57-4.5 37.22t-1.5 39.65q0 20.43 1.5 39.37 1.5 18.93 4.5 37.5Zm265.96 0h130.61q4.43-18 6.71-37.22 2.29-19.22 2.29-39.65 0-21-2.29-39.93-2.28-18.94-6.71-36.94H656.22q2 18.57 3.21 37.22 1.22 18.65 1.22 39.65 0 20.43-1.22 39.37-1.21 18.93-3.21 37.5Zm-16.87-239.22h111.74q-26.44-46.43-69.37-82.43-42.94-36-94.5-52.87 18.13 30 30.63 64.22 12.5 34.21 21.5 71.08Zm-229.65 0h140.04q-10.87-40.43-29.15-79.15-18.29-38.72-41.72-76.89-22.3 38.17-39.74 76.89-17.43 38.72-29.43 79.15Zm-201.35 0h111.74q9-36.87 20.93-71.08 11.94-34.22 30.07-64.22-51.57 16.87-93.94 52.87t-68.8 82.43Z"/></svg>'
			alt="JSP"
			borderRadius="15px"
			--mainColor={mainColor}
			--secColor={secColor}
			--shadColor={shadColor}
		/>
	</div>

	<div
		class="options absolute top-[100%] {optionsShown
			? 'anim'
			: ''} flex flex-col items-center w-fit py-2 m-4 mt-0 rounded-xl z-[100] pointer-events-auto"
		style={`
            background-color: ${mainColor}; 
            box-shadow: 
              inset 0px 0px 0px 5px ${secColor},
              0px 4px 0px ${shadColor},
              2px 17px 0px var(--transp-shad);
        `}
	>
		{#each options as option, i}
			{#if i !== 0}
				<div
					class="w-4/5 h-[4px] my-0.5 rounded-full m-0 p-0"
					style={`background-color: ${secColor}`}
				></div>
			{/if}
			<div
				class="button-container {selectedIndex === i ? 'selected' : ''} 
        		w-full flex flex-col items-center px-2.5 mx-16 my-0.5"
			>
				<button
					class="button w-full rounded-lg py-1.5"
					onclick={() => {
						onOptionClick(i, option);
					}}
				>
					<div class="button-content flex flex-row justify-center items-center">
						{#if selectedIndex === i}
							<div class="indicator-dot w-2 h-2 rounded-full bg-white absolute left-5"></div>
						{/if}
						<span class="option-text text-xl font-[600]">
							{option.label}
						</span>
					</div>
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.options {
		opacity: 0;
		transform: translateY(10px);
		visibility: hidden;

		transition:
			opacity 0.3s ease,
			transform 0.3s var(--ease-out-back-strong),
			visibility 0s linear 0.1s;
	}

	.options.anim {
		opacity: 1;
		transform: translateY(0);
		visibility: visible;

		transition-delay: 0s;
	}

	.button {
		transform: translateY(0px);
		transition:
			background-color 0.1s ease,
			transform 0.2s var(--ease-out-back);
	}

	.button:hover {
		background-color: var(--main-dark-hightlight);
	}

	.option-text {
		display: inline-block;
		color: var(--main-dark-text);

		transition: color 0.3s ease;
	}

	.selected .option-text {
		color: var(--white-main);
	}

	.button-content {
		transform: translateY(0);
		text-shadow: 0px 0px 0px var(--transp-shad);

		transition:
			text-shadow 0.3s ease,
			transform 0.3s var(--ease-out-back);
	}

	.indicator-dot {
		box-shadow: 0px 0px 0px var(--transp-shad);
		transition: box-shadow 0.3s ease;
	}

	.button:hover .button-content {
		transform: translateY(-4px);

		text-shadow: 1px 5px 0px var(--transp-shad);
	}

	.button:hover .indicator-dot {
		box-shadow: 1px 5px 0px var(--transp-shad);
	}

	.button:hover .option-text {
		color: var(--white-main);
	}

	.button:active .button-content {
		transform: translateY(2px);

		text-shadow: 0px 0px 0px var(--transp-shad);
	}

	.button:active .indicator-dot {
		box-shadow: 0px 0px 0px var(--transp-shad);
	}

	.button:active {
		background-color: var(--main-dark-text);
		transform: translateY(2px);
	}

	@keyframes dissapear {
		0% {
			visibility: visible;
		}
		100% {
			visibility: hidden;
		}
	}
</style>
