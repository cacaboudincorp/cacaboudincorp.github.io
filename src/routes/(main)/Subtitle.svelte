<script lang="ts">
	let { text } = $props();
</script>

<p>{text}</p>

<style>
	p {
		color: var(--main-dark);

		font-size: 30px;
		font-weight: 600;
		margin: 0;

		margin-top: 0px;
		margin-bottom: 0px;

		text-shadow: 1px 4px 0 var(--transp-shad);
	}
</style>
