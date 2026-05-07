<script>
	import IconButton from './IconButton.svelte';

	const socials = [
		{
			icon: '/assets/logos/email-white.svg',
			alt: 'email',
			href: 'mailto:leo@yolwoocle.com',
		},
		{
			icon: '/assets/logos/bluesky-white.svg',
			alt: 'bluesky',
			href: 'https://bsky.app/profile/yolwoocle.com/',
		},
		{
			icon: '/assets/logos/twitter-white.svg',
			alt: 'twitter/x',
			href: 'https://x.com/yolwoocle_/',
		},
		{
			icon: '/assets/logos/itchio-white.svg',
			alt: 'itchio',
			href: 'https://yolwoocle.itch.io/',
		},
		{
			icon: '/assets/logos/linkedin-white.svg',
			alt: 'linkedin',
			href: 'https://www.linkedin.com/in/yolwoocle/',
		},
		{
			icon: '/assets/logos/github-white.svg',
			alt: 'github',
			href: 'https://github.com/yolwoocle',
		},
	];
</script>

<div class="nav nav-socials flex flex-row flex-wrap">
	{#each socials as social}
		<IconButton
			icon={social.icon}
			alt={social.alt}
			href={social.href}
			--mainColor="var(--main-dark)"
			--secColor="var(--main-dark-shad)"
			--shadColor="var(--main-dark-shad)"
		/>
	{/each}
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