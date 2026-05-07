<script lang="ts">
	import CardGrid from '../../CardGrid.svelte';

	let projects = [
		[
			{
				cardType : "large",
				starred : true,
				
				label : "Ninesliced",
				description : "",
				longDescription : `
				Ninesliced is a game-making band that I co-created in 2024 in sunny Montpellier with a 
				bunch of friends, under our common love for creating things.<br>

				It was made with the idea of having being borderless, in its team, but also in its ideas.<br><br>
				`,
				img : "/assets/images/projects/ninesliced/ninesliced_games_key.png",
				imgAlt : "",
				carouselImg : "/assets/images/projects/ninesliced/ninesliced_games_linkedin_intro_post.png",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{label: "Website", link: "https://ninesliced.net/"},
				]
			}, 
		],
		[
			{
				cardType : "normal",
				
				label : "Interactive Linear Algebra Lesson",
				description : "",
				longDescription : `
				An experiment made using p5.js to see how an interactive lesson could look like. 
				The idea is to let people play around with vectors and matrices and get an 
				intuitive feeling for how they work before tackling more complex ideas. 
				It's based on my own linear algebra classes at the lycée du Parc (MP2I) 
				and 3blue1brown's <a class='card-link' href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">
				excellent video series</a> on this topic. 
				`,
				img : "/assets/images/projects/algebra/linearalgebra.png",
				imgAlt : "",
				carouselImg : "/assets/images/projects/algebra/linearalgebra.png",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{label: "Discover experiment", link: "https://yolwoocle.com/linear_algebra/index.html"},
				]
			}, 
			{
				cardType : "normal",
				starred : true,				

				label : "Minecon Earth 2018 Costume Contest",
				description : "",
				longDescription : `
				When I was 13 years old, I participated in a Minecraft Cosplay Contest, won and got invited to 
				present it in Boston. This project took me in 3 months in total. All the moving mechanisms 
				use strings, which are pulled from the inside. I still have no idea how I managed to make 
				this pile of cardboard, colored paper and hot glue hold together. We even had to rebuild 
				all of it before heading off to Boston.<br>
				It definitely was an incredible experience that I got to remember for years to follow. 
				I even got to meet jeb!
				By the way, inside the costume is my little sister! She said it was really hot inside. 
				`,
				img : "/assets/images/projects/minecon/image.png",
				imgAlt : "",
				carouselImg : null,
				// carouselImgAlt : "",
				trailer : "https://www.youtube.com/embed/nxy_tsUrZUs",
				links: [],
				// 	{label: "Official website", link: "https://bugscraper.net/"},
				// 	{label: "Steam", link: "https://store.steampowered.com/app/2957130/Bugscraper/"},
				// 	{label: "itch.io", link: "https://yolwoocle.itch.io/bugscraper/"},
				// ]
			}, 
		],
	];
</script>

<div class="w-full flex flex-col items-center">
	<div class="max-w-215 px-5 text-center text-(--main-very-dark)">
		<h1 class="font-black text-4xl pt-6 pb-4">Projects</h1>
		<div class="flex flex-col gap-3 text-left">
			<p class="text-xl">
				Here are some projects that I've made over the years. 
				Projects I am particularily proud of have a
				<span>
					<img
						src="/assets/icons/star_outlined.png"
						alt="star"
						class="star w-8 relative"
					/>
				</span> attached.
			</p>
		</div>
		<CardGrid cards={projects} cardWidth="240px" cardHeight="320px" />
	</div>
</div>

<style>
	.star {
		animation: constantRotation 8s linear infinite;
        display: inline-block;
	}

	@keyframes constantRotation {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
