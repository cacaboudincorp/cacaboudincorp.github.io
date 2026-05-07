<script lang="ts">
	export var mainColor, secColor, shadColor, textColor;
	let { text = '' } = $props();
</script>

<div class="container">
	<button class="button shape-rect">
		<span class="text">{text}</span>
	</button>
</div>

<style>
	.button {
		border: none;
		border-radius: 100px;

		position: relative;
		display: inline-flex;

		align-items: center;
		justify-content: center;

		padding: 35px;

		/* background: gold; */
		color: black;
		text-decoration: none;
		font-weight: bold;

		-webkit-box-shadow: inset 0px 0px 0px 5px var(--secColor);
		-moz-box-shadow: inset 0px 0px 0px 5px var(--secColor);
		box-shadow:
			inset 0px 0px 0px 5px var(--secColor),
			inset 0px 0px 0px 10px var(--mainColor),
			inset 0px 0px 0px 15px var(--secColor),
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

	.shape-rect {
		min-width: 200px;
		height: 40px;
	}

	.container:hover .button {
		top: -6px;

		box-shadow:
			inset 0px 0px 0px 5px var(--secColor),
			inset 0px 0px 0px 10px var(--mainColor),
			inset 0px 0px 0px 15px var(--secColor),
			0px 3.2px 0px var(--shadColor),
			0px 6.4px 0px var(--shadColor),
			0px 9.6px 0px var(--shadColor),
			0px 12.8px 0px var(--shadColor),
			0px 16px 0px var(--shadColor),
			4px 28px 0px var(--transp-shad);
	}

	.container:active .button {
		top: 3px;

		box-shadow:
			inset 0px 0px 0px 5px var(--secColor),
			inset 0px 0px 0px 10px var(--mainColor),
			inset 0px 0px 0px 15px var(--secColor),
			0px 1px 0px var(--shadColor),
			0px 2px 0px var(--shadColor),
			0px 3px 0px var(--shadColor),
			0px 4px 0px var(--shadColor),
			0px 7px 0px var(--shadColor),
			1px 10px 0px var(--transp-shad);
	}

	.text {
		position: absolute;
		transform: translate(-50%, -50%);

		font-size: 25px;

		color: var(--textColor);

		top: calc(50% - 2px);
		left: 50%;

		transition:
			top 0.3s var(--ease-out-back),
			text-shadow 0.3s var(--ease-out-back-soft);
	}

	/********************************/
	/* Animation */
	/********************************/
</style>
