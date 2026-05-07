<script lang="ts">
	export var mainColor: String;
	export var secColor: String;
	export var shadColor: String;
	export var textColor: String;

	const defaultFunc = () => {};

	let {
		icon = '',
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
	<div class="button-container w-min">
		<div class="button shape-round" style={`border-radius: ${borderRadius}`}>
			{#if icon}
				<img class="icon" src={icon} {alt} />
			{/if}
		</div>
	</div>
{/snippet}

{#if href}
	<a class="container" href={href}>
		{@render buttonContent()}
	</a>
{:else}
	<button class="container" {onclick}>
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

		/* color: var(--textColor); */
		color: red;
	}

	.button {
		border: none;

		position: relative;
		display: inline-flex;

		width: 65px;
		height: 65px;

		align-items: center;
		justify-content: center;

		padding: 10px;

		/* background: gold; */
		color: black;
		text-decoration: none;
		font-weight: bold;

		-webkit-box-shadow: inset 0px 0px 0px 5px var(--secColor);
		-moz-box-shadow: inset 0px 0px 0px 5px var(--secColor);
		box-shadow:
			inset 0px 0px 0px 5px var(--secColor),
			0px 2px 0px var(--shadColor),
			0px 4px 0px var(--shadColor),
			0px 6px 0px var(--shadColor),
			0px 8px 0px var(--shadColor),
			0px 10px 0px var(--shadColor),
			2px 17px 0px var(--transp-shad);

		background-color: var(--mainColor);

		top: 0;

		transition:
			top 0.3s var(--ease-out-back),
			box-shadow 0.3s var(--ease-out-back);
	}

	.container:hover .button {
		top: -6px;

		box-shadow:
			inset 0px 0px 0px 5px var(--secColor),
			0px 3.2px 0px var(--shadColor),
			0px 6.4px 0px var(--shadColor),
			0px 9.6px 0px var(--shadColor),
			0px 12.8px 0px var(--shadColor),
			0px 16px 0px var(--shadColor),
			4px 28px 0px var(--transp-shad);
	}

	.container:active .button {
		top: 5px;

		box-shadow:
			inset 0px 0px 0px 5px var(--secColor),
			0px 1px 0px var(--shadColor),
			0px 2px 0px var(--shadColor),
			0px 3px 0px var(--shadColor),
			0px 4px 0px var(--shadColor),
			0px 5px 0px var(--shadColor),
			1px 8px 0px var(--transp-shad);
	}
</style>
