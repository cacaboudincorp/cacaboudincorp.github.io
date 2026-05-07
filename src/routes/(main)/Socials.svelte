<script>
	import IconButton from './IconButton.svelte';
</script>

<div class="nav nav-socials">
	<IconButton
		icon="/assets/logos/email-white.svg"
		alt="email"
		href="mailto:leo@yolwoocle.com"
		--mainColor="var(--main-dark)"
		--secColor="var(--main-dark-shad)"
		--shadColor="var(--main-dark-shad)"
	/>
	<IconButton
		icon="/assets/logos/bluesky-white.svg"
		alt="bluesky"
		href="https://bsky.app/profile/yolwoocle.com/"
		--mainColor="var(--main-dark)"
		--secColor="var(--main-dark-shad)"
		--shadColor="var(--main-dark-shad)"
	/>
	<IconButton
		icon="/assets/logos/twitter-white.svg"
		alt="twitter/x"
		href="https://x.com/yolwoocle_/"
		--mainColor="var(--main-dark)"
		--secColor="var(--main-dark-shad)"
		--shadColor="var(--main-dark-shad)"
	/>
	<IconButton
		icon="/assets/logos/itchio-white.svg"
		alt="itchio"
		href="https://yolwoocle.itch.io/"
		--mainColor="var(--main-dark)"
		--secColor="var(--main-dark-shad)"
		--shadColor="var(--main-dark-shad)"
	/>
	<IconButton
		icon="/assets/logos/linkedin-white.svg"
		alt="linkedin"
		href="https://www.linkedin.com/in/yolwoocle/"
		--mainColor="var(--main-dark)"
		--secColor="var(--main-dark-shad)"
		--shadColor="var(--main-dark-shad)"
	/>
	<IconButton
		icon="/assets/logos/github-white.svg"
		alt="github"
		href="https://github.com/yolwoocle"
		--mainColor="var(--main-dark)"
		--secColor="var(--main-dark-shad)"
		--shadColor="var(--main-dark-shad)"
	/>
</div>

<style>
    
	.nav {
		display: flex;
		justify-content: center;

		flex-direction: row;
		gap: 20px;
	}

	.nav-socials {
		margin-top: 20px;
		gap: 10px;
	}
</style>