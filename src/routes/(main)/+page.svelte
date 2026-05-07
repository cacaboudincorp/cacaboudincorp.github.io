<script lang="ts">
	import Overtitle from './Overtitle.svelte';
	import Subtitle from './Subtitle.svelte';
	import WavyTitle from './WavyTitle.svelte';

	import BigStarButton from './BigStarButton.svelte';
	import IconButton from './IconButton.svelte';
	import TextButton from './TextButton.svelte';
	import LanguageSelect from './LanguageSelect.svelte';
	import Socials from './Socials.svelte';
</script>

<main class="flex flex-col gap-6 grow py-10 overflow-hidden min-h-screen">
	<div class="titles flex flex-col items-center -gap-1 m-4">
		<img src="/assets/images/hileo.gif" alt="Yolwoocle character" class="select-none" style="width: 30%; max-width:180px; aspect-ratio: 0.95; object-fit: cover; object-position: top left; position: relative; transform: translateY(50px); z-index: 0">
		<img src="/assets/images/yolwoocle_title.png" alt="Yolwoocle" class="select-none" style="width: 100%; max-width:600px; z-index: 1">
		<p style="font-size: 40px; font-weight: 800; margin-top: -6px; margin-bottom: 14px; text-shadow: 1px 4px 0 var(--transp-shad); color: var(--main-very-dark)">
			Léo Bernard • 曹宇
		</p>
		<p style="font-size: 30px; font-weight: 600; text-shadow: 1px 4px 0 var(--transp-shad); color: var(--main-dark)">
			French game developer and artist
		</p>
		<Socials />
	</div>

	<!-- <div class="nav nav-main">
		<BigStarButton href="projects" buttonStyle={1} text="Projects" />
		<BigStarButton href="art" buttonStyle={2} text="Art" />
	</div>

	<div class="nav nav-other pointer-events-none">
		<BigStarButton href="#" buttonStyle={3} text="Other" />
	</div> -->

</main>

<style>
	main {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}

	.titles {
		text-align: center;
	}

	.nav {
		display: flex;
		justify-content: center;

		flex-direction: row;
		gap: 20px;
	}

	.nav-main {
		display: flex;
		gap: 60px;

		margin-top: 40px;
	}

	.nav-other {
		position: relative;
		top: -60px;

		height: 130px;
	}

	.nav-socials {
		margin-top: 20px;
		gap: 10px;
	}
</style>
