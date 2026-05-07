<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './reset.css';
	import './app.css';
	import Navbar from './Navbar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: {
		children: Snippet<[]>;
	} = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="page">
	<Navbar />
	{@render children?.()}
</div>

<style>
	:global(.page) {
		margin: 0;

		width: 100%;
		height: 100%;
		min-height: 100vh;

		background-position: 0px;
		background-image: linear-gradient(
			135deg,
			var(--green-main) 25%,
			var(--green-sec) 25%,
			var(--green-sec) 50%,
			var(--green-main) 50%,
			var(--green-main) 75%,
			var(--green-sec) 75%,
			var(--green-sec) 100%
		);
		background-size: 110px 110px;

		animation: constantMovement 7s linear infinite;
	}

	@keyframes constantMovement {
		0% {
			background-position: 0px 0px;
		}
		100% {
			background-position: 0px 110px;
		}
	}

	
	/* width */
	::-webkit-scrollbar {
		width: 20px;
		display: contents;
	}
	
	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f100;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.3);
		
		min-width: 100px;
		border: solid 6px rgba(0, 0, 0, 0);
		box-sizing: border-box;
		background-clip: content-box;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
