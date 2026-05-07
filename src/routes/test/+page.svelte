<script>
	import Modal from "../Modal.svelte";

	let modalShown = $state(false);
</script>

<button onclick={() => (modalShown = true)}> show modal </button>

<Modal bind:modalShown>
	<span>SALUT</span>
	<br>
	<span>SALUT</span>
	<br>
	<span>SALUT</span>
	<br>
	<span>SALUT</span>
	<br>
	<span>SALUT</span>
	<br>
	<span>SALUT</span>
	<br>
	<span>SALUT</span>
	<br>
</Modal>