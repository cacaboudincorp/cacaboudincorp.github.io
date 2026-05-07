<script lang="ts">
	let { text } = $props();
</script>

<p>{text}</p>

<style>
	p {
		color: var(--main-dark);

		font-size: 90px;
		font-weight: 700;

		margin-top: 0px;
		margin-bottom: 0px;

		text-shadow:
			0px 2px 0 var(--main-dark-shad),
			0px 4px 0 var(--main-dark-shad),
			0px 6px 0 var(--main-dark-shad),
			0px 8px 0 var(--main-dark-shad),
			0px 10px 0 var(--main-dark-shad),
			2px 15px 0 var(--transp-shad);
	}
</style>
