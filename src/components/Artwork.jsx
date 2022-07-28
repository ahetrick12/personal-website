import { useLayoutEffect } from "react";
import ArtworkDataset from "./ArtworkDataset";
import Flickity from "react-flickity-component";

const Artwork = () => {
	const artwork = ArtworkDataset();

	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	useLayoutEffect(() => {
		let dots = [];
		let prevButton;
		let nextButton;

		sleep(500).then(() => {
			dots = document.querySelectorAll(".dot");
			console.log(dots);

			prevButton = document.querySelector(
				".flickity-prev-next-button.previous"
			);
			nextButton = document.querySelector(
				".flickity-prev-next-button.next"
			);

			for (var i = 0; i < dots.length; i++) {
				dots[i].classList.add("hidden");
			}

			prevButton.classList.add("hidden");
			nextButton.classList.add("hidden");
		});

		const onScroll = () => {
			//const scrollPos = window.scrollY + window.innerHeight;

			// Prev next buttons
			const buttonsTop = document
				.querySelector(".flickity-prev-next-button")
				.getBoundingClientRect().bottom;

			if (window.innerHeight - buttonsTop > 20) {
				prevButton.classList.remove("hidden");
				nextButton.classList.remove("hidden");
			}

			// Dots
			const dotsTop = document
				.querySelector(".dot")
				.getBoundingClientRect().top; //dots[0].getBoundingClientRect().bottom;

			// console.log(scrollPos + " : " + dotsTop);
			// console.log(window.innerHeight - dotsTop);
			if (window.innerHeight - dotsTop > 20) {
				for (var i = 0; i < dots.length; i++) {
					dots[i].style.transitionDelay = i * 50 + "ms";
					dots[i].classList.remove("hidden");
				}
			}
		};

		window.addEventListener("scroll", onScroll);
		window.addEventListener("DOMContentLoaded", onScroll);
	}, []);

	return (
		<section id="artwork">
			<div className="artwork-container">
				<h1
					className="title"
					data-aos="title-appear"
					data-aos-duration="1500"
					data-aos-anchor="#artwork"
					data-aos-anchor-placement="top-bottom"
				>
					Artwork
				</h1>
				<Flickity className="carousel">
					{artwork.map((artwork, i) => (
						<div className="carousel-cell">
							<img
								className="image"
								src={artwork.image}
								alt="artwork"
								// data-aos="fade-up"
								// data-aos-duration="3000"
								// data-aos-anchor="#artwork"
							/>
						</div>
					))}
				</Flickity>
			</div>
			<div className="shadow-wrapper bottom-cutoff">
				<div className="banner-bottom"></div>
			</div>
		</section>
	);
};

export default Artwork;
