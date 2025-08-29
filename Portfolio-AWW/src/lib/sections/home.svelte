<script lang="ts">

	import anime from "animejs";
	import { onMount } from "svelte";
	import { homeAnchor, loadPagePromise, slickScrollInstance } from "$lib/store";
	import { loadImage } from "$lib/utils";

	// DOM Node Binds for animations
	let homeContainerElement: HTMLElement; // Container
	let backgroundContainerElement: HTMLElement, backgroundImageElement: HTMLElement; // Offsets
	let titleWord1Element: HTMLElement, titleWord2Element: HTMLElement, shortDetailsElement: HTMLElement, callToActionElement: HTMLElement; // Elements for animations
	let signaturePath1: SVGPathElement, signaturePath2: SVGPathElement, signaturePath3: SVGPathElement, signaturePath4: SVGPathElement; // SVG Paths

	onMount(async () => {
		await loadPagePromise;
		// Set navbar home link's y location to top of homeContainer
		$homeAnchor = homeContainerElement;

		// Add parallax scrolling offsets to slickScroll
		$slickScrollInstance!.addOffset({
			element: backgroundContainerElement,
			speedY: 0.8
		});

		introAnimations();
	})


	// Page load animations
	function introAnimations() {

		const animation = [{ strokeDashoffset: '0' }];

		// Signature animation using svg strokDashOffset
            signaturePath1.animate(animation, {
                duration: 1000,
                delay: 0,
                easing: 'cubic-bezier(.72,.3,.25,1)',
                fill: 'forwards' 
            });
            signaturePath2.animate(animation, {
                duration: 1200,
                delay: 1000,
                easing: 'cubic-bezier(.72,.3,.25,1)',
                fill: 'forwards' 
            });


		// Animate background image
		Object.assign(backgroundContainerElement.style, {
			height: "0",
			transform: "scale(1.3)",
		});
		backgroundImageElement.style.transform = "translateY(80%) scale(1.4)";

		anime({
			targets: backgroundContainerElement,
			height: "100%",
			scale: 1,
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 1500,
			delay: 500,
			complete: () => {
				backgroundContainerElement.style.boxShadow = "3px 9px 18px rgba(0, 0, 0, 0.2)";
			}
		});
		anime({
			targets: backgroundImageElement,
			translateY: "0",
			scale: 1,
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 1500,
			delay: 500
		});


		// Animate title elements
		const titleElements = [titleWord1Element, titleWord2Element, shortDetailsElement, callToActionElement];
		titleElements.forEach(e => {
			e.style.transform = "translateY(130%) rotate(10deg)";
		})
		anime({
			targets: titleElements,
			rotate: "0",
			translateY: "0%",
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 900,
			delay: anime.stagger(80, {start: 500})
		});
	}

</script>



<div id="content-container" style="padding-top: 23vh" bind:this={homeContainerElement}>
	<div class="content-wrapper">
		<div class="flex">
			<div class="flex-wrapper first">

				<svg id="signature" class="h-signature" x="0px" y="0px" viewBox="-20 -20 190 136.9">
					<g>
						<path
							bind:this={signaturePath1}
							class="path-1"
							transform="translate(0, 20)"
							style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
							d="M41.781 3.08602C43.6916 3.08602 38.0052 3.72698 36.1719 4.265C28.1917 6.60704 19.8682 9.87472 13.3427 15.1616C2.8357 23.6742 -0.591488 40.5423 5.41141 52.6744C9.29507 60.5235 18.2162 62.7335 26.3114 63.1066C33.9855 63.4602 39.5675 62.738 47.3901 61.4632C69.5646 57.8495 91.3419 51.7992 113.02 46.0293C155.421 34.7437 198.28 24.6196 240.42 12.4106C251.286 9.26261 261.963 5.49772 272.646 1.79987"/>
						<path
							
							bind:this={signaturePath2}
							class="path-2"
							transform="translate(60, -9)"
							style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
							d="M2.23029 106.963C2.23029 111.718 3.86929 97.59 4.9455 92.9582C9.7298 72.3675 14.1793 51.6685 16.6638 30.6511C17.5641 23.035 20.2748 7.83064 11.5192 2.85589C7.11408 0.35299 5.17386 7.15812 4.58824 10.0726C2.11129 22.3998 3.85593 36.4234 9.44704 47.6569C18.7374 66.3228 36.4604 78.7757 49.032 94.9589C53.1837 100.303 58.4543 108.55 54.1767 115.394C50.3906 121.452 36.5392 118.449 31.133 117.109C24.5038 115.467 19.3347 112.396 13.8771 108.606C9.25862 105.399 15.5142 103.944 18.593 101.926C33.468 92.1756 47.8984 79.4936 58.3924 65.0915C65.8918 54.7991 69.9676 42.7552 67.7885 30.0438C67.5524 28.6667 67.3405 22.2718 64.8589 25.185C61.1838 29.4992 59.8262 35.885 59.2855 41.3334C58.7794 46.4335 58.804 51.6199 59.1069 56.7315C59.2615 59.3406 58.9139 66.7018 61.0361 68.8785C62.071 69.9399 67.1276 63.86 68.0385 63.1623C69.6482 61.9293 70.89 64.0751 71.8256 65.1629C74.1895 67.9117 74.7793 66.8972 77.6133 67.8782C78.2582 68.1014 79.3172 69.2123 80.0427 69.0214C81.7714 68.5665 82.2547 63.6163 82.4721 62.2334C82.9452 59.2225 83.45 60.5915 84.044 62.9479C86.7921 73.8485 91.5395 84.0697 94.2618 94.9589C94.562 96.1597 94.9458 102.059 95.9767 103.319C96.1654 103.549 96.0236 102.723 96.0124 102.426C95.9568 100.952 95.5208 95.2701 95.4765 94.6016C94.8565 85.2397 94.1429 75.5343 95.4765 66.199C96.325 60.2598 95.8827 63.8768 98.9777 63.8768C100.089 63.8768 100.986 64.5199 102.3 64.5199C108.449 64.5199 115.552 60.2614 121.2 58.0891"/>
					</g>
				</svg>

			</div>
			
			<div class="flex-wrapper second">
				<h1 class = "title">
					<div class="title-mask">
						<div class="word" bind:this={titleWord1Element}>Ghanshyam</div>
					</div><br> 
					<div class="title-mask">
						<div class="word" bind:this={titleWord2Element}>Nair</div>
					</div>
				</h1>
				<div class="occupation mask">
					<p class = "paragraph" bind:this={shortDetailsElement}>
						Web Developer and an AI/ML Graduate from Bangalore,India 
					</p>
				</div>
				<div class="wrapper action-mask">
					<div class="action" bind:this={callToActionElement}>
						<div class="mask">
							{#await loadImage("assets/imgs/scroll_arrow.png") then src}
								<img src="{src}" alt="">
							{/await}
						</div>
						<div>
							scroll
						</div>
					</div>
				</div>
			</div>

			<div class="parallax-wrapper home-back" bind:this={backgroundContainerElement}>
				{#await loadImage("assets/imgs/home-back.jpg") then src}
					<img src="{src}" bind:this={backgroundImageElement} draggable="false" alt="Home Background" style="width:100%; height: 100%; object-fit: cover;">
				{/await}
			</div>
		</div>
	</div>
</div>



<style lang="sass">

@import "../consts"
@include textStyles()

#content-container
	height: 100vh
	width: 100vw
	padding: 12vh 7vw
	box-sizing: border-box
	position: relative

	.content-wrapper
		position: relative
		height: 100%
		box-sizing: border-box
		z-index: 2

	.flex
		z-index: 2
		width: 95%
		height: 100%
		display: flex
		flex-direction: row
		justify-content: space-between
		position: relative
		box-sizing: border-box

		.flex-wrapper
			position: relative
			height: 100%
			display: flex
			flex-direction: column
			justify-content: center

			&.second
				margin-right: 5vw 
				justify-content: flex-end

			h1
				font-weight: 400
				text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3)

			.title-mask
				overflow: visible
				display: inline-flex
				
				.word
					text-transform: capitalize

			.mask
				overflow: hidden

			.h-signature
				width: 35vh
				margin-left: -6vh

			.occupation
				position: relative
				margin-top: 8vh

			.action-mask
				margin-top: 10vh
				margin-right: 7vw
				display: inline-flex
				overflow: hidden

				.action
					font-size: 2vh
					letter-spacing: 0.5vh
					font-family: $font
					text-transform: uppercase
					color: white
					position: relative
					display: inline-flex
					flex-direction: row
					align-items: center

					.mask
						overflow: hidden
						height: 2vh

						img
							height: 2.3vh
							margin-right: 1.5vh
							animation: scrollArrowLoop 3s ease infinite

	.parallax-wrapper
		position: absolute
		left: 0
		z-index: -1
		width: 80%
		height: 100%
		margin-left: 5%
		border-radius: 1.5vh
		overflow: hidden
		box-sizing: border-box
		-webkit-touch-callout: none
		-webkit-user-select: none
		-moz-user-select: none
		-ms-user-select: none
		user-select: none
		transition: box-shadow 0.6s ease
		-webkit-transition: box-shadow 0.6s ease

		@media only screen and (max-width: 1250px)
			&
				opacity: 0.7

		@media only screen and (max-width: 750px)
			&
				opacity: 0.3

		img
			height: 100%
			width: 100%
			object-fit: cover
			border-radius: 1.5vh

@media only screen and (min-width: 1250px)
	.h-signature
		display: block

	.occupation
		width: 100%

	#content-container .flex *
		text-align: left

@media only screen and (max-width: 1250px)
	#content-container .flex *
		text-align: left

	.flex
		justify-content: center !important
		width: 100% !important

		.flex-wrapper 
			&.first
				display: none !important

			&.second
				justify-content: center !important
				margin: 0

	#content-container .flex .bottom
		text-align: left
		left: 5vw

	.parallax-wrapper
		width: 100% !important
		margin-left: 0 !important

@media only screen and (max-width: 750px)
	.occupation
		width: 70%


#signature
	.path-1
		stroke-dasharray: 365
		stroke-dashoffset: 365
	.path-2
		stroke-dasharray: 650
		stroke-dashoffset: 650


@keyframes scrollArrowLoop
	0%
		transform: translateY(-120%)
	
	30%
		transform: translateY(0%)
	
	70%
		transform: translateY(0%)
	
	100%
		transform: translateY(120%)

</style>