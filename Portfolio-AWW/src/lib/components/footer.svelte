<script lang="ts">

    import { onMount } from "svelte";
    import { letterSlideIn, maskSlideIn } from "$lib/animations";
    import { loadPagePromise, siteDataFetch } from "$lib/store";
    import { onScrolledIntoView } from "$lib/utils";
    import type { SiteData } from "$lib/types";

    let footerContainerElement: HTMLElement, logoElement: HTMLElement, creditsElement: HTMLElement, statusElement: HTMLElement, fullEmailLinkElement: HTMLElement;
    let signaturePath1: SVGPathElement, signaturePath2: SVGPathElement, signaturePath3: SVGPathElement, signaturePath4: SVGPathElement; 

    let siteData: SiteData = { availablity_date: "" };

    siteDataFetch.subscribe(val => {
        if (val !== undefined)
            siteData = val;
    });

    const currentYear = new Date().getFullYear();
    
    function introAnimations() {

        // Scroll activated animations powered by anime instead of svelte transitions
        const logoAnimate = maskSlideIn(logoElement, {});
        const fullEmailLinkAnimate = letterSlideIn(fullEmailLinkElement, { delay: 6, initDelay: 150 });
        const creditsAnimate = maskSlideIn(creditsElement, { delay: 150 });
        const statusAnimate = letterSlideIn(statusElement, { delay: 6, initDelay: 100 });

        // Intersection observer to run animations when footer is in scroll view
        onScrolledIntoView(footerContainerElement, () => {
            logoAnimate.anime();
            creditsAnimate.anime();
            fullEmailLinkAnimate.anime();
            statusAnimate.anime();

            // Signature SVG animation
            let animation = [{ strokeDashoffset: '0' }];

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
        })
    }

    onMount(async () => {
        await loadPagePromise;
        introAnimations();
    });

</script>



<div class="footer-wrapper" bind:this={footerContainerElement}>
    <!-- Left side -->
    <div class="flex-wrapper">
        <div class="logo-wrapper">
            <div class="inline-flex" bind:this={logoElement}>
                <img src="assets/imgs/logo.svg" alt="mh logo" class="logo">
            </div>
        </div>

        <div class="status-wrapper">
                {#if siteData.availablity_date === ""}
                    <p class="large-text" bind:this={statusElement}>
                        i am currently accepting freelance work, <br>you may reach me on my email.
                    </p>
                {:else}
                    <p class="large-text" bind:this={statusElement}>
                        i am available for freelance work after <br> {siteData.availablity_date}.
                    </p>
                {/if}
            <a class="button large-text" bind:this={fullEmailLinkElement} href="mailto:ghanusnair@gmail.com" target="_blank">ghanusnair@gmail.com</a>
        </div>
        
        <div class="credits-wrapper" bind:this={creditsElement}>
            <p class="year">© {currentYear}</p>
            <p class="credits">
                designed and developed by Ghanshyam S Nair with Reference to a template from awwwards.com<br>
                
                <!-- Support the project by keeping this line in your fork -->
                <a class="clickable button no-decor" href="https://github.com/GhanShyam-nair/Portfolio-AWW" target="_blank">
                    this website is open source on github
                </a>
            </p>
        </div>
    </div>

    <!-- Right side -->
	<div class="flex-wrapper decor">
        <!--Ghanshyam Signature -->
        <svg id="signature" class="name-signature" x="0px" y="0px" viewBox="-20 -20 190 150" style="stroke: rgb(79, 78, 85);">
            <g>
                <path
                    bind:this={signaturePath1}
                    class="path-1"
                    transform="translate(0, 20)"
                    style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
                    d="M41.781 3.08602C43.6916 3.08602 38.0052 3.72698 36.1719 4.265C28.1917 6.60704 19.8682 9.87472 13.3427 15.1616C2.8357 23.6742 -0.591488 40.5423 5.41141 52.6744C9.29507 60.5235 18.2162 62.7335 26.3114 63.1066C33.9855 63.4602 39.5675 62.738 47.3901 61.4632C69.5646 57.8495 91.3419 51.7992 113.02 46.0293C155.421 34.7437 198.28 24.6196 240.42 12.4106C251.286 9.26261 261.963 5.49772 272.646 1.79987"/>
                <path
                    
                    bind:this={signaturePath2}
                    class="path-2"
                    transform="translate(60, -9)"
                    style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
                    d="M2.23029 106.963C2.23029 111.718 3.86929 97.59 4.9455 92.9582C9.7298 72.3675 14.1793 51.6685 16.6638 30.6511C17.5641 23.035 20.2748 7.83064 11.5192 2.85589C7.11408 0.35299 5.17386 7.15812 4.58824 10.0726C2.11129 22.3998 3.85593 36.4234 9.44704 47.6569C18.7374 66.3228 36.4604 78.7757 49.032 94.9589C53.1837 100.303 58.4543 108.55 54.1767 115.394C50.3906 121.452 36.5392 118.449 31.133 117.109C24.5038 115.467 19.3347 112.396 13.8771 108.606C9.25862 105.399 15.5142 103.944 18.593 101.926C33.468 92.1756 47.8984 79.4936 58.3924 65.0915C65.8918 54.7991 69.9676 42.7552 67.7885 30.0438C67.5524 28.6667 67.3405 22.2718 64.8589 25.185C61.1838 29.4992 59.8262 35.885 59.2855 41.3334C58.7794 46.4335 58.804 51.6199 59.1069 56.7315C59.2615 59.3406 58.9139 66.7018 61.0361 68.8785C62.071 69.9399 67.1276 63.86 68.0385 63.1623C69.6482 61.9293 70.89 64.0751 71.8256 65.1629C74.1895 67.9117 74.7793 66.8972 77.6133 67.8782C78.2582 68.1014 79.3172 69.2123 80.0427 69.0214C81.7714 68.5665 82.2547 63.6163 82.4721 62.2334C82.9452 59.2225 83.45 60.5915 84.044 62.9479C86.7921 73.8485 91.5395 84.0697 94.2618 94.9589C94.562 96.1597 94.9458 102.059 95.9767 103.319C96.1654 103.549 96.0236 102.723 96.0124 102.426C95.9568 100.952 95.5208 95.2701 95.4765 94.6016C94.8565 85.2397 94.1429 75.5343 95.4765 66.199C96.325 60.2598 95.8827 63.8768 98.9777 63.8768C100.089 63.8768 100.986 64.5199 102.3 64.5199C108.449 64.5199 115.552 60.2614 121.2 58.0891"/>
            </g>
        </svg>
    </div>
</div>



<style lang="sass">

@import "../consts.sass"
@include textStyles()

.footer-wrapper
    width: 100vw
    background-color: #131314
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: 15vh 13vw
    margin-top: 25vh
    box-sizing: border-box

    @media only screen and (max-width: 950px)
        .flex-wrapper.decor
            display: none !important

    @media only screen and (max-width: 950px)
        flex-direction: column-reverse

        .flex-wrapper:not(:first-child)
            margin-bottom: 15vh

    .inline-flex
        flex-grow: 1
        display: flex
        flex-direction: row
        align-items: center


    .logo-wrapper
        margin-bottom: 5vh

        .logo
            display: inline-block
            height: 6vh

    .status-wrapper
        .button.large-text
            margin-top: 2vh

    .credits-wrapper
        margin-top: 5vh
        color: rgba(255,255,255,0.3)

        p.year
            margin-bottom: 1vh
            font-family: $font
            font-size: 1.8vh
            font-weight: normal
            color: rgba(255,255,255,0.3)

        .credits
            font-size: 1.5vh
            line-height: 125%
            white-space: nowrap
            color: rgba(255,255,255,0.3)

            .button
                color: rgba(255,255,255,0.3)

    .large-text
        font-size: 2.5vh

        @media only screen and (max-width: 950px)
            br
                display: none

    .flex-wrapper.decor
        display: flex
        flex-direction: column
        justify-content: center

        .name-signature
            width: 20vh

#signature
    .path-1
        stroke-dasharray: 365
        stroke-dashoffset: 365
    
    .path-2
        stroke-dasharray: 650
        stroke-dashoffset: 650

</style>