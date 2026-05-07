<script lang="ts">
	import CardGrid from '../../CardGrid.svelte';

	let projects = [
		[
			{
				cardType : "large",
				starred : true,
				
				label : "Bugscraper",
				description : "Rise to the top of a bug-filled skyscraper",
				longDescription : `Welcome to the Bugscraper.<br>
				Bugscraper is a solo or co-op roguelike shooter. As you climb toward your tyrannical boss's office, 
				you'll battle floor after floor of enemies. Using a wide arsenal of weapons and upgrades, mow 
				them down and aim for the top!<br><br>

				This game was made using LÖVE, a Lua game framework. It is the result of almost 3 years 
				of development. I was responsible for everything: code, art, design, marketing; except for music (made by <a class="card-link">OLX</a>) and sound design (made by <a class="card-link">Martin Domergue</a>).
				`,
				img : "/assets/images/games/bugscraper/thumbnail.png",
				imgAlt : "Bugscraper key art",
				carouselImg : "/assets/images/games/bugscraper/gameplay.gif",
				carouselImgAlt : "Bugscraper gameplay gif",
				trailer : "https://www.youtube.com/embed/9Jgcwcnraf0",
				links: [
					{label: "Official website", link: "https://bugscraper.net/"},
					{label: "Steam", link: "https://store.steampowered.com/app/2957130/Bugscraper/"},
					{label: "itch.io", link: "https://yolwoocle.itch.io/bugscraper/"},
					{label: "Github", link: "https://github.com/yolwoocle/bugscraper/"},
				]
			}, 
			{
				cardType : "large",
				starred : true,

				label : "Globs",
				description : "Meet the size-changing Globs in this colorful puzzle game",
				longDescription : ` Meet the size-changing Globs in this colorful puzzle game. Use the curious properties of their bodies at your advantage to solve a variety of puzzles, all in a expressive pixel art aesthetic and upbeat soundtrack.
				<br>
				The puzzles are designed to be approachable, but provide additional optional challenges for players wishing to put their puzzle-solving skills to the test.  
				Discover 40 levels across 4 different worlds.<br><br>
				
				This game was originally made for the <a href="https://itch.io/jam/gmtk-2024" class="card-link">GMTK Game Jam 2024</a>, but 
				we continued working on it afterwards. It was made using Godot. I was responsible for system and 
				gameplay programming and art. <br><br>
				`,
				img : "/assets/images/games/globs/thumbnail.png",
				imgAlt : "Globs key art",
				carouselImg : "./img/games/globs/screenshot.png",
				carouselImgAlt : "Globs screenshot",
				trailer : "https://www.youtube.com/embed/yNs8oIw1vEM?si=EH5uMefULzqRiaOH",
				links: [
					{label: "Android", link: "https://play.google.com/store/apps/details?id=com.yolwoocle.globs"},
					{label: "iOS", link: "https://apps.apple.com/us/app/globs-a-colorful-puzzle-game/id6738417089"},
					{label: "Steam", link: "https://s.team/a/3219110"},
					{label: "itch.io", link: "https://ninesliced.itch.io/globs/"},
					{label: "Github", link: "https://github.com/ARKANYOTA/gmtk2024/"},
				]
			}, 
		],
		[
			{
				cardType : "large",
				
				starred : true,

				label : "Birds With Guns",
				description : "Mess with the Flock, you get the Glock",
				longDescription : `Are you ready to have a quacking time? Toucan play this egg-citing game 
				right now! Made by an im-peck-able team of quail-ified developers, you're gonna have no egrets.<br><br> 
				
				Birds With Guns is a game I made with a friend over the course of a vacation using 
				<a class="card-link" href="https://www.lexaloffle.com/pico-8.php">PICO-8</a>.`,
				img : "/assets/images/games/bwg/bird_thumbnail.png",
				imgAlt : "",
				carouselImg : null, //"./img/games/bwg/gif/bwg_1.gif",
				carouselImgAlt : "",
				trailer : "https://www.youtube.com/embed/jb6uOKTxTlc",
				links : [
					{label: "PICO-8 Forums", link: "https://www.lexaloffle.com/bbs/?tid=45334"},
					{label: "itch.io", link: "https://yolwoocle.itch.io/birds-with-guns"},
				],
			}, 
			{
				cardType : "large",
				starred: true,

				label : "Pico Dino",
				description : "Reimagining Google Chrome's secret game",
				longDescription : `<b>Pico Dino</b> is what came out as I tried to make something simple, but as polished as possible. I really like complexity 
				that rises from simple things, so I found it very fun trying to come up with a complex moveset 
				from a very simple 2-button control scheme. I originally wanted to add different worlds, power-ups, more enemies, but at some point I had 
				to make something I could actually finish. Nonetherless, I'm quite pleased with how it turned out.<br><br>
				I sent my game by email to Edward Jung, one of the two creators of the original game, and he seemed to love it, which made me very happy.
				`,
				img : "/assets/images/games/picodino/thumbnail.png",
				imgAlt : "Pico Dino thumbnail. A dinosaur jumps over cacti in a black and white pixel art desert",
				carouselImg : "/assets/images/games/picodino/picodino_60fps.gif",
				carouselImgAlt : "Black and white pixel art video game set in a desert featuring a dinosaur jumping over cacti and pterodactyls",
				trailer: null, //"https://www.youtube.com/embed/XF79HG9XOaA",
				links: [
					{label: "PICO-8 Forums", link: "https://www.lexaloffle.com/bbs/?tid=40759"},
					{label: "itch.io", link: "https://yolwoocle.itch.io/pico-dino"},
				]
			}, 
		],
		
		[
			{
				cardType : "title",

				text : "Unfinished games",
			},		
		],

		[
			{
				cardType : "normal",
				starred : true,
				
				label : "Shotcave",
				description : "A Minecraft roguelike plugin",
				longDescription : `
				<b>Shotcave</b> is a cooperative or solo roguelike Minecraft Bukkit plugin. 
				It takes place in an abandoned mine composed of randomly generated levels. 
				Players must defeat enemies at every level to progress. To do so, they are 
				equipped with weapons like swords and guns. If all players die, the game ends 
				and all progress is lost permanently.<br><br>

				The plugin is currently unfinished and we're planning on continuing development at
				a later date, but you can take a look at the presentation document.
				`,
				img : "/assets/images/games/shotcave/image.png",
				imgAlt : "",
				// carouselImg : "./img/games/derailed/pico-8_unrailed_concept_thumbnail_wide.png",
				// carouselImgAlt : "",
				trailer: "https://www.youtube.com/embed/cx04yL7ZwMA",
				links: [
					{label: "Presentation Document", link: "https://github.com/ninesliced/shotcave-presentation/blob/main/README.md"},
				]
			},
			{
				cardType : "normal",
				starred : true,
				
				label : "Minesweeper Royale",
				description : "Minesweeper, but it's a battle royale.",
				longDescription : `<b>Minesweeper Royale</b> is what minesweeper would be like if it were
				a battle royale game. Multiple players compete to be the fastest to complete the
				same minesweeper board, or to be the last one alive. This game is complete with a chat
				system and a display showing all the player boards. This was my first ever attempt 
				at networking, using the L&Ouml;VE framework and luasocket. It was a project I made 
				for school, hence it's not available on itch.io and I didn't advertize it. <br><br>
				
				The source code is available on GitHub, but the little documentation I have provided
				is in French. <br><br>
				
				During my attempts to make it work, I have rarely managed to make it
				work across multiple computers, but it does work locally. I encourage you to take 
				a look at the source code.`,
				img : "/assets/images/games/minesweeper_royale/thumbnail.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/minesweeper_royale/gameplay.png",
				carouselImgAlt : "",
				trailer : null, //"https://www.youtube.com/embed/jb6uOKTxTlc",
				links : [
					{label: "GitHub", link: "https://github.com/Yolwoocle/Minesweeper_Royale"},
				],
			}, 
			{
				cardType : "normal",
				starred : true,
				
				label : "Derailed!",
				description : "A co-op game about building tracks",
				longDescription : `<b>Derailed!</b> is yet another PICO-8 game I made to challenge myself. 
				It's a co-op game where you need to communicate with a friend to bring a train to its 
				station. It's a fan-made demake of Unrailed!. After I made some concept art for a 
				PICO-8 demake of this game, I thought it would be fun to actually turn it into a 
				real thing. I hope that you'll have fun playing it, and maybe you can grab a friend 
				to try it out.<br><br>
				
				The game is unfinished, but it's playable nonetherless. 
				I don't plan to finish it.`,
				img : "/assets/images/games/derailed/pico-8_unrailed_concept_thumbnail.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/derailed/pico-8_unrailed_concept_thumbnail_wide.png",
				carouselImgAlt : "",
				trailer: null,
				links: [
					{label: "PICO-8 Forums", link: "https://www.lexaloffle.com/bbs/?pid=derailed"},
					{label: "itch.io", link: "https://yolwoocle.itch.io/derailed"},
				]
			},
		],

		[
			{
				cardType : "title",

				text : "Game jam games",
			},		
		],

		[

			{
				cardType : "small",
				
				label : "Bal Cosmique",
				description : "Create evil masks as a mischievous wizard",
				longDescription : `Bal Cosmique is a 2-player communication game inspired by 'Keep Talking And Nobody Explodes'.  <br><br>
				
				You play the role of a mischievous wizard, and with the help of your apprentice, you create masks. Alas, your customers are demanding, and so you wish to curse them. To do this, you must communicate with your friend to find out the right way to curse them using your trusty Manual.<br><br>
				
				This game is in French only. It was created for <a class="card-link" href="https://globalgamejam.org/games/2026">Global Game Jam 2026.</a>`,
				img : "/assets/images/games/bal_cosmique/itchio_thumbnail.png",
				// imgAlt : "____________",
				// carouselImg : "____________",
				// carouselImgAlt : "____________",
				trailer : null,
				links: [
					{label: "itch.io", link: "https://yithash.itch.io/bal-cosmique"},
					{label: "GGJ submission", link: "https://globalgamejam.org/games/2026/bal-cosmique-8"},
				],
			}, 

			{
				cardType : "small",
				
				label : "Moo Moo Ranch",
				description : "A game about cows and cow-boys",
				longDescription : `Sort your cows by looping around them like a true cowboy. (Teehaw!) <br>
				Sort your cows into the right colors. The more cows you capture, the higher your combo and multiplier.<br><br>
				
				This game was created for the <a class="card-link" href="https://itch.io/jam/gmtk-2025">GMTK Game Jam 2025</a>.`,
				img : "/assets/images/games/moomooranch/thumbnail_nologo.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/moomooranch/screenshot.png",
				carouselImgAlt : "____________",
				trailer : null,
				links: [
					{label: "itch.io", link: "https://yolwoocle.itch.io/moo-moo-ranch"},
					{label: "Jam submission", link: "https://itch.io/jam/gmtk-2025/rate/3783108"},
				]
			}, 

			{
				cardType : "small",
				
				label : "Gemchef",
				description : `Cook gems and earn money`,
				longDescription : `Mine through a dangerous cave system, collect gems, 
				then refine them to earn money.<br><br>
				
				This game was created for <a class="card-link" href="https://ldjam.com/events/ludum-dare/57">Ludum Dare 57</a>.
				`,
				img : "/assets/images/games/gemchef/thumbnail_nologo.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/gemchef/game.png",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{label: "itch.io", link: "https://ninesliced.itch.io/gemchef"},
					{label: "Ludum Dare submission", link: "https://ldjam.com/events/ludum-dare/57/gemchef"},					
				]
			}, 

			{
				cardType : "small",
				
				label : "The Legend of the Goldfish",
				description : `Dive to the bottom of the ocean`,
				longDescription : `You are a diver on a quest to find the legendary Goldfish at 
				the bottom of a trench. Carefully manage your oxygen as you use it to eliminate 
				enemies and get to the bottom of the ocean!<br><br>
				
				This game was created for <a class="card-link" href="https://globalgamejam.org/games/2025/">Global Game Jam 2025</a>`,
				img : "/assets/images/games/goldfish/thumbnail.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/goldfish/game.gif",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{label: "itch.io", link: "https://ninesliced.itch.io/the-legend-of-the-goldfish"},
					{label: "GGJ submission", link: "https://globalgamejam.org/games/2025/legend-goldfish-8"},
				]
			}, 

			{
				cardType : "small",
				starred : true,
				
				label : "Globs (GMTK Game Jam 2024 Edition)",
				description : "A colorful puzzle game",
				longDescription : `Meet the size-changing Globs in this colorful puzzle game. 
				Use the curious properties of their bodies at your advantage to solve a variety 
				of levels, all in a lively and expressive pixel art aesthetic and jazzy soundtrack.<br><br>
				
				This game was created for 
				<a class="card-link" href="https://itch.io/jam/gmtk-2024/">
				GMTK Game Jam 2024</a>, and we continued working on it and then released on PC and mobile,
				which you can learn more about on the corresponding slide on this page.`,
				img : "/assets/images/games/globs-gmtk/thumbnail_gamejam_animated.gif",
				imgAlt : "",
				carouselImg : "/assets/images/games/globs-gmtk/game.png",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{ label: "itch.io", link: "https://yolwoocle.itch.io/globs-gmtk2024" },
					{ label: "Jam Submission", link: "https://itch.io/jam/gmtk-2024/rate/2909871" },
				]
			}, 

			{
				cardType : "small",
				
				label : "Switch Job",
				description : "Switch your way into this puzzle platformer",
				longDescription : `People have been hearing strange things about the local warehouse. 
				You're an engineer given the task of inspecting this rusty old building.  
				By cleverly swapping building materials, reach the end of each level and discover 
				what's hiding at the end of the warehouse! <br><br>

				This game was created for 
				<a class="card-link" href="https://itch.io/jam/gmtk-2023">
				GMTK Game Jam 2023</a>`,
				img : "/assets/images/games/switchjob/thumb.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/switchjob/game.png",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{ label: "itch.io", link: "https://yolwoocle.itch.io/switch-job" },
					{ label: "Jam submission", link: "https://itch.io/jam/gmtk-2023/rate/2161889" },
				],
			}, 

			{
				cardType : "small",
				starred : true,
				
				label : "Oracle's Inn",
				description : "Practise Malpractice",
				longDescription : `Welcome to my potion shoppe! I'm glad to have you here. However, I can sense dark waters in your future. I know just the ingredients...
				In <b>Oracle's Inn</b>, you take the role of alchemist/doctor/oracle/bundle 
				of joy and happen to be just the person your customers need. Catch glimpses 
				into the futures of your customers, and prepare for them live-saving potions in advance!<br><br>

				This game was made in 3 days with Louie Chapman for the Mini Jam 112, 
				following the theme "Chrono" and limitation "Only three buttons".`,
				img : "/assets/images/games/oraclesInn/OraclesInnThumnail.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/oraclesInn/gameplay.gif",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{ label: "itch.io", link: "https://louiechapm.itch.io/oracles-inn"},
					{ label: "Jam submission", link: "itch.io/jam/mini-jam-112-chrono/rate/1653654"},
				],
			}, 

			{
				cardType : "small",
				
				label : "Dice Drop Dash",
				description : "A Dizzying Dance of Dropping Dice",
				longDescription : `When you drop a dice, its value will be subtracted from the value of 
				the highest in the stack, and the difference will grant you points. 
				Aim for the highest score without overflowing the stack! <br><br>
				
				This game was made within a tight ~6 hour period rather than the 50 hour 
				period of the <a class="card-link" href="https://itch.io/jam/gmtk-jam-2022">
				GMTK Game Jam 2022</a>, following the theme "Roll of the Dice"`,
				img : "/assets/images/games/dicedropdash/thumb.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/dicedropdash/game.gif",
				carouselImgAlt : "",
				trailer : null,
				links: [
					{ label: "itch.io", link: "https://yolwoocle.itch.io/dice-drop-dash"},
					{ label: "Jam submission", link: "https://itch.io/jam/gmtk-jam-2022/rate/1622042"},
				],
			}, 

			{
				cardType : "small",
				
				label : "Octoboom",
				description : "Ping, Pong, Boom.",
				longDescription : `<b>Octoboom</b> is a game I made with friends for 
				<a class="card-link" href="https://ldjam.com/events/ludum-dare/49">Ludum Dare 49</a> 
				in the span of 3 days. <br>An accident has occurred in the mine and 
				toxic gas is escaping! Flee! Your bomb is your weapon. Throw it on 
				enemies, and catch it before it explodes. The longer you let it 
				fly, the more points it’ll give you, but this is at your own risk.`,
				img : "/assets/images/games/octoboom/thumbnail.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/octoboom/screenshot2.png",
				carouselImgAlt : "",
				trailer : null, //"https://www.youtube.com/embed/jb6uOKTxTlc",
				links : [
					{ label: "itch.io", link: "https://yolwoocle.itch.io/octoboom" },
					{ label: "Ludum Dare 49 Submission", link: "https://ldjam.com/events/ludum-dare/49/octoboom" },
				],
			}, 
			{
				cardType : "small",
				
				label : "Anchors & Miners",
				description : "Mining deep down into caves with an anchor",
				longDescription : `Mine deep down into caves using an anchor! 
				Get gemstones and avoid red explosives, and get the best score! <br><br>

				
				Made for <a class="card-link" href="https://ldjam.com/events/ludum-dare/48">Ludum Dare 48</a> 
				based on the theme "Deeper and deeper".`,
				img : "/assets/images/games/anchorsAndMiners/thumbnail3.png",
				imgAlt : "",
				carouselImg : "/assets/images/games/anchorsAndMiners/screennormal.png",
				carouselImgAlt : "",
				trailer : null, //"https://www.youtube.com/embed/jb6uOKTxTlc",
				links : [
					{ label: "itch.io", link: "https://yolwoocle.itch.io/anchorsandminers" },
					{ label: "Ludum Dare 48 Submission", link: "https://ldjam.com/events/ludum-dare/48/anchors-miners" },
				],
			}, 
			{
				cardType : "small",
				
				label : "Chaser Of Dawn",
				description : "A game about looping around a planet",
				longDescription : `<b>Chaser Of Dawn</b> is a game that was made for the 
				<a class="card-link" href="https://ldjam.com/events/ludum-dare/47">Ludum Dare 47</a> game jam.
				We had 3 days to make a game based on the theme "Stuck in a loop", and we used the Pico-8 engine. <br>
				The game was inspired by exoplanets that don't rotate and have a very big difference in temperature
				between their two sides.<br>
				It was a lot of fun and we hope to do more games like this in the future!`,
				img : "/assets/images/games/chaserofdawn/chaserofdawn_miniature.png",
				imgAlt : "",
				carouselImg : null,//"./img/games/chaserofdawn/chaserofdawn_1.png",
				carouselImgAlt : "",
				trailer: "https://www.youtube.com/embed/XF79HG9XOaA",
				links: [
					{label: "itch.io", link: "https://yolwoocle.itch.io/chaser-of-dawn"},
					{label: "PICO-8 Forums", link: "https://www.lexaloffle.com/bbs/?tid=40733"},
					{label: "Ludum Dare 47 Submission", link: "https://ldjam.com/events/ludum-dare/47/chaser-of-dawn"},
				]
			}, 
		],

		// [
		// 	{
		// 		cardType : "title",

		// 		text : "Miscellaneous",
		// 	},		
		// ],

		// [
		// 	{
		// 		cardType : "small",
				
		// 		label : "Discord Simulator (100% accurate)",
		// 		description : "@everyone @everyone @everyone @everyone @everyone @everyone",
		// 		longDescription : `@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone`,
		// 		img : "/assets/images/games/discordsim/thumb.png",
		// 		imgAlt : "",
		// 		carouselImg : "/assets/images/games/discordsim/game.gif",
		// 		carouselImgAlt : "",
		// 		trailer: null,
		// 		links: [
		// 			{label: "PICO-8 Forums", link: "https://www.lexaloffle.com/bbs/?tid=44032"},
		// 			{label: "itch.io", link: "https://yolwoocle.itch.io/discord-sim-100-accurate"},
		// 		]
		// 	}, 
		// ],
	];
</script>

<div class="w-full flex flex-col items-center">
	<div class="max-w-215 px-5 text-center text-(--main-very-dark)">
		<h1 class="font-black text-4xl pt-6 pb-4">Games</h1>
		<div class="flex flex-col gap-3 text-left">
			<p class="text-xl">
				Making games has always been a part of my life. When I was little, 
				I started with doodling levels in sketchbooks and using Scratch to make my own little games.
			</p>
			<p class="text-xl">
				Now, I have made dozens of them, and co-founded a game dev band. 
				I believe that this medium is unique in its interactivty and ability to create emotions in people.  
			</p>
			<p class="text-xl">
				Projects I am particularily proud of have a
				<span>
					<img
					src="/assets/icons/star_outlined.png"
					alt="star"
					class="star w-8 relative"
					/>
				</span> attached.<br>
			</p>
			<p class="text-xl">
				You can find most projects on my <a class="card-link" href="https://yolwoocle.itch.io/">itch.io</a>.
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
