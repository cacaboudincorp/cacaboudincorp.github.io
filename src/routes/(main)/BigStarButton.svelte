<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		text,
		buttonStyle,
		href
	}: {
		text: string;
		buttonStyle: 1 | 2 | 3;
		href: string;
	} = $props();

	type StyleDef = {
		outerPath: string;
		innerPath: string;
		colorMain: string;
		colorSec: string;
		colorShad: string;
		colorText: string;
		outerStrokeWidth: number;
		innerStrokeWidth: number;
		textSize: string;
	};

	const styles: Record<1 | 2 | 3, StyleDef> = {
		1: {
			outerPath:
				'M151.016 14.0625C158.064 9.74885 166.936 9.74885 173.984 14.0625L183.87 20.1133C190.205 23.9902 197.636 25.6857 205.025 24.9414L216.558 23.7803C224.78 22.952 232.772 26.8007 237.251 33.7451L243.533 43.4854C247.559 49.7273 253.518 54.4799 260.499 57.0156L271.393 60.9727C279.16 63.7938 284.691 70.7295 285.713 78.9297L287.146 90.4307C288.065 97.801 291.372 104.668 296.562 109.981L304.66 118.273C310.434 124.185 312.409 132.834 309.771 140.666L306.072 151.65C303.702 158.689 303.702 166.311 306.072 173.35L309.771 184.334C312.409 192.166 310.434 200.815 304.66 206.727L296.562 215.019C291.372 220.332 288.065 227.199 287.146 234.569L285.713 246.07C284.691 254.271 279.16 261.206 271.393 264.027L260.499 267.984C253.518 270.52 247.559 275.273 243.533 281.515L237.251 291.255C232.772 298.199 224.78 302.048 216.558 301.22L205.025 300.059C197.636 299.314 190.205 301.01 183.87 304.887L173.984 310.938C166.936 315.251 158.064 315.251 151.016 310.938L141.13 304.887C134.795 301.01 127.364 299.314 119.975 300.059L108.442 301.22C100.22 302.048 92.2279 298.199 87.749 291.255L81.4668 281.515C77.4412 275.273 71.4822 270.52 64.501 267.984L53.6074 264.027C45.8402 261.206 40.3092 254.271 39.2871 246.07L37.8535 234.569C36.9349 227.199 33.628 220.332 28.4385 215.019L20.3398 206.727C14.5659 200.815 12.5914 192.166 15.2285 184.334L18.9277 173.35C21.2978 166.311 21.2978 158.689 18.9277 151.65L15.2285 140.666C12.5914 132.834 14.5659 124.185 20.3398 118.273L28.4385 109.981C33.628 104.668 36.9349 97.801 37.8535 90.4307L39.2871 78.9297C40.3092 70.7295 45.8402 63.7938 53.6074 60.9727L64.501 57.0156C71.4822 54.4799 77.4412 49.7273 81.4668 43.4854L87.749 33.7451C92.2279 26.8007 100.22 22.952 108.442 23.7803L119.975 24.9414C127.364 25.6857 134.795 23.9902 141.13 20.1133L151.016 14.0625Z',
			innerPath:
				'M156.173 33.525C160.106 31.3336 164.894 31.3336 168.827 33.525L186.017 43.102C188.181 44.3076 190.644 44.8698 193.117 44.7225L212.76 43.5523C217.254 43.2846 221.568 45.3617 224.161 49.0427L235.493 65.1296C236.919 67.1548 238.895 68.7302 241.187 69.6703L259.392 77.1387C263.558 78.8476 266.542 82.5905 267.282 87.0321L270.512 106.443C270.918 108.886 272.015 111.163 273.671 113.004L286.833 127.632C289.845 130.979 290.91 135.646 289.649 139.969L284.137 158.859C283.444 161.237 283.444 163.763 284.137 166.141L289.649 185.031C290.91 189.354 289.845 194.021 286.833 197.368L273.671 211.996C272.015 213.837 270.918 216.114 270.512 218.557L267.282 237.968C266.542 242.41 263.558 246.152 259.392 247.861L241.187 255.33C238.895 256.27 236.919 257.845 235.493 259.87L224.161 275.957C221.568 279.638 217.254 281.715 212.76 281.448L193.117 280.277C190.644 280.13 188.181 280.692 186.017 281.898L168.827 291.475C164.894 293.666 160.106 293.666 156.173 291.475L138.983 281.898C136.819 280.692 134.356 280.13 131.883 280.277L112.24 281.448C107.746 281.715 103.432 279.638 100.839 275.957L89.5072 259.87C88.0806 257.845 86.1051 256.27 83.8134 255.33L65.6081 247.861C61.4424 246.152 58.4575 242.41 57.7184 237.968L54.4883 218.557C54.0817 216.114 52.9854 213.837 51.3285 211.996L38.1665 197.368C35.1548 194.021 34.0896 189.354 35.3508 185.031L40.8625 166.141C41.5564 163.763 41.5564 161.237 40.8625 158.859L35.3508 139.969C34.0895 135.646 35.1548 130.979 38.1665 127.632L51.3285 113.004C52.9854 111.163 54.0817 108.886 54.4883 106.443L57.7184 87.0321C58.4575 82.5905 61.4424 78.8476 65.6081 77.1387L83.8134 69.6703C86.1052 68.7302 88.0806 67.1548 89.5072 65.1296L100.839 49.0427C103.432 45.3617 107.746 43.2846 112.24 43.5523L131.883 44.7225C134.356 44.8698 136.819 44.3076 138.983 43.102L156.173 33.525Z',

			colorMain: '--yellow-main',
			colorSec: '--yellow-sec',
			colorShad: '--yellow-shad',
			colorText: '--yellow-text',

			outerStrokeWidth: 12,
			innerStrokeWidth: 10,
			textSize: '3xl'
		},
		2: {
			outerPath:
				'M204.295 28.6641L205.176 29.1201L206.155 29.2686L253.249 36.4053L274.591 78.9893L275.035 79.875L275.74 80.5713L309.645 114.027L301.88 161.021L301.719 162L301.88 162.979L309.645 209.972L275.74 243.429L275.035 244.125L274.591 245.011L253.249 287.594L206.155 294.731L205.176 294.88L204.295 295.336L162 317.242L119.705 295.336L118.824 294.88L117.845 294.731L70.75 287.594L49.4092 245.011L48.9648 244.125L48.2598 243.429L14.3545 209.972L22.1201 162.979L22.2812 162L22.1201 161.021L14.3545 114.027L48.2598 80.5713L48.9648 79.875L49.4092 78.9893L70.75 36.4053L117.845 29.2686L118.824 29.1201L119.705 28.6641L162 6.75684L204.295 28.6641Z',
			innerPath:
				'M162 29L199.4 46.8936L240.175 54.4007L259.915 90.8604L288.491 120.901L283.03 162L288.491 203.099L259.915 233.14L240.175 269.599L199.4 277.106L162 295L124.6 277.106L83.8246 269.599L64.0847 233.14L35.5095 203.099L40.97 162L35.5095 120.901L64.0847 90.8604L83.8246 54.4007L124.6 46.8936L162 29Z',

			colorMain: '--blue-main',
			colorSec: '--blue-sec',
			colorShad: '--blue-shad',
			colorText: '--blue-text',

			outerStrokeWidth: 12,
			innerStrokeWidth: 10,
			textSize: '3xl'
		},
		3: {
			outerPath:
				'M147.5 19.9189C156.473 14.7386 167.527 14.7386 176.5 19.9189L277.796 78.4023C286.768 83.5827 292.296 93.1559 292.296 103.517V220.483C292.296 230.844 286.768 240.417 277.796 245.598L176.5 304.081C167.527 309.261 156.473 309.261 147.5 304.081L46.2041 245.598C37.2315 240.417 31.7041 230.844 31.7041 220.483V103.517C31.7041 93.1559 37.2315 83.5827 46.2041 78.4023L147.5 19.9189Z',
			innerPath:
				'M152.5 61.4848C158.379 58.0908 165.621 58.0908 171.5 61.4848L244.299 103.515C250.177 106.909 253.799 113.182 253.799 119.97V204.03C253.799 210.818 250.177 217.091 244.299 220.485L171.5 262.515C165.621 265.909 158.379 265.909 152.5 262.515L79.7013 220.485C73.8227 217.091 70.2013 210.818 70.2013 204.03V119.97C70.2013 113.182 73.8227 106.909 79.7013 103.515L152.5 61.4848Z',

			colorMain: '--pink-main',
			colorSec: '--pink-sec',
			colorShad: '--pink-shad',
			colorText: '--pink-text',

			outerStrokeWidth: 20,
			innerStrokeWidth: 15,
			textSize: '3xl'
		}
	};
</script>

<a {href} class="group star-button button-style-{buttonStyle} pointer-events-auto">
	<svg
		width="325"
		height="325"
		viewBox="0 0 325 325"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={cn(
			'star-shape ease-(--ease-out-back)',
			'pointer-events-none',
			'transition-transform duration-300',
			'group-active:translate-y-2.5 group-hover:-translate-y-3',
			'overflow-visible'
		)}
	>
		<!-- Shadow -->
		<path
			class={cn(
				'origin-center translate-x-[6px] translate-y-[calc(24px+20px)]',
				// hover
				'group-hover:rotate-[30deg] group-hover:translate-x-[10px] group-hover:translate-y-[calc(36px+30px)]',
				// active
				'group-active:rotate-[60deg] group-active:translate-x-[2px] group-active:translate-y-[calc(12px+8px)]',
				'[transition:rotate_600ms,translate_300ms_var(--ease-out-back)]'
			)}
			stroke-width={styles[buttonStyle].outerStrokeWidth}
			d={styles[buttonStyle].outerPath}
			fill="black"
			stroke="black"
			opacity={0.224}
		/>

		<!-- Extrusions -->
		{#each Array(6) as _, i}
			<path
				style={`--shadow-index: ${i + 1}`}
				class={cn(
					'origin-center translate-y-[calc(var(--shadow-index)*4px)]',
					// hover
					'group-hover:rotate-[30deg] group-hover:translate-y-[calc(var(--shadow-index)*6px)]',
					// active
					'group-active:rotate-[60deg] group-active:translate-y-[calc(var(--shadow-index)*2px)]',
					'[transition:rotate_600ms,translate_300ms_var(--ease-out-back)]'
				)}
				stroke-width={styles[buttonStyle].outerStrokeWidth}
				d={styles[buttonStyle].outerPath}
				fill={`var(${styles[buttonStyle].colorShad})`}
				stroke={`var(${styles[buttonStyle].colorShad})`}
			/>
		{/each}

		<!-- Top -->
		<g
			class={cn(
				'group-active:rotate-[60deg] group-hover:rotate-[30deg]',
				'origin-center ease-[ease] transition-transform duration-600'
			)}
		>
			<path
				d={styles[buttonStyle].outerPath}
				fill={`var(${styles[buttonStyle].colorMain})`}
				stroke={`var(${styles[buttonStyle].colorSec})`}
				stroke-width={styles[buttonStyle].outerStrokeWidth}
			/>
			<path
				d={styles[buttonStyle].innerPath}
				fill={`var(${styles[buttonStyle].colorMain}`}
				stroke={`var(${styles[buttonStyle].colorSec}`}
				stroke-width={styles[buttonStyle].innerStrokeWidth}
			/>
		</g>
	</svg>
	<span
		class={cn(
			`text-3xl font-black`,

			'absolute top-1/2 left-1/2',
			'-translate-x-1/2 -translate-y-1/2',

			'transition-[transform,text-shadow,translate,scale,rotate]',
			'ease-(--ease-out-back) duration-300 text-shadow-[1px_4px_0_var(--transp-shad)]',

			'group-hover:text-shadow-[2px_6px_0_var(--transp-shad)]',
			'group-hover:translate-y-[calc(-50%-18px)]',
			'group-active:text-shadow-[1px_1px_0_var(--transp-shad)]',
			'group-active:translate-y-[calc(-50%+10px)]'
		)}
		style={`color: var(${styles[buttonStyle].colorText})`}>{text}</span
	>
</a>

<style>
	.star-button {
		position: relative;

		width: 200px; /* size of the star button */
		height: 200px;

		color: black;
		text-decoration: none;
		font-weight: bold;
	}

	.button-style-3 {
		scale: 60%;
	}

	.star-shape {
		position: relative;
		top: 0;

		width: 100%;
		height: 100%;
	}
</style>
