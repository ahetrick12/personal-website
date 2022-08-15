// import { useEffect, useLayoutEffect, useRef } from "react";
import Carousel from "./Carousel";

const Artwork = () => {
	// useEffect(() => {
	// 	console.log(isLoaded);
	// }, [isLoaded]);

	// useEffect(() => {
	// let dots = [];
	// let prevButton;
	// let nextButton;
	// let artImages;
	// console.log(isLoaded);

	// if (isLoaded) {
	// 	console.log("here");

	// 	// Dots
	// 	dots = document.querySelectorAll(".dot");

	// 	for (var i = 0; i < dots.length; i++) {
	// 		dots[i].classList.add("hidden");
	// 	}

	// 	// Buttons
	// 	prevButton = document.querySelector(
	// 		".flickity-prev-next-button.previous"
	// 	);
	// 	nextButton = document.querySelector(
	// 		".flickity-prev-next-button.next"
	// 	);

	// 	prevButton.classList.add("hidden");
	// 	nextButton.classList.add("hidden");

	// 	// Images
	// 	artImages = document.querySelectorAll(".art-image");

	// 	const onScroll = () => {
	// 		//const scrollPos = window.scrollY + window.innerHeight;

	// 		// Prev next buttons
	// 		const buttonsTop = document
	// 			.querySelector(".flickity-prev-next-button")
	// 			.getBoundingClientRect().bottom;

	// 		if (window.innerHeight - buttonsTop > 20) {
	// 			prevButton.classList.remove("hidden");
	// 			nextButton.classList.remove("hidden");
	// 		}

	// 		// Dots
	// 		const dotsTop = document
	// 			.querySelector(".dot")
	// 			.getBoundingClientRect().top;

	// 		if (window.innerHeight - dotsTop > 20) {
	// 			for (var i = 0; i < dots.length; i++) {
	// 				dots[i].style.transitionDelay = i * 50 + "ms";
	// 				dots[i].classList.remove("hidden");
	// 			}
	// 		}
	// 	};

	// 	const onDOMChange = () => {
	// 		// Update image overlays to conform to image size when anything is changed
	// 		for (var j = 0; j < artImages.length; j++) {
	// 			let height = artImages[j].height;
	// 			let width = artImages[j].width;

	// 			let overlay =
	// 				artImages[j].parentElement.querySelector(
	// 					".image-overlay"
	// 				);
	// 			let transition = overlay.style.transition;

	// 			overlay.style.transition = "0s";

	// 			overlay.style.height = height + 25 + "px";
	// 			overlay.style.width = width + 25 + "px";

	// 			sleep(10).then(() => {
	// 				overlay.style.transition = transition;
	// 			});
	// 		}
	// 	};

	// 	window.addEventListener("scroll", onScroll);
	// 	window.addEventListener("resize", onDOMChange);

	// 	//onScroll();
	// 	onDOMChange();
	// }
	// }, [isLoaded]);

	return (
		<section id="artwork">
			<div className="artwork-container">
				<h1
					className="title right"
					data-aos="title-appear"
					data-aos-duration="1500"
					data-aos-anchor="#artwork"
					data-aos-anchor-placement="top-center"
				>
					Artwork
				</h1>
				<p
					className="subtitle right is-4"
					data-aos="fade-left"
					data-aos-duration="1800"
					data-aos-delay="200"
					data-aos-anchor="#artwork"
					data-aos-anchor-placement="top-center"
				>
					I make art from time to time. Here's a bit of what I've
					made!
				</p>
				<Carousel />
			</div>

			<div className="shadow-wrapper bottom-cutoff">
				<div className="banner-bottom"></div>
			</div>
		</section>
	);
};

export default Artwork;
