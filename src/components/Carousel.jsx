import { React, useEffect, useLayoutEffect } from "react";
import ArtworkDataset from "./ArtworkDataset";

import Flickity from "react-flickity-component";

const Carousel = () => {
	const artwork = ArtworkDataset();

	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	// Single element
	const getElementByClassAsync = (className) => {
		return new Promise((resolve) => {
			const getElement = () => {
				const element = document.querySelector("." + className);

				// Wait for elements to be findable and for them to have the correct height
				if (element) {
					resolve(element);
				} else {
					requestAnimationFrame(getElement);
				}
			};
			getElement();
		});
	};

	// Multiple elements
	const getElementsByClassAsync = (className) => {
		return new Promise((resolve) => {
			const getElement = () => {
				const elements = document.querySelectorAll("." + className);

				// Wait for elements to be findable and for them to have the correct height
				if (elements.length > 0) {
					resolve(elements);
				} else {
					requestAnimationFrame(getElement);
				}
			};
			getElement();
		});
	};

	// Multiple elements with height check, only for images
	const getImagesByClassAsync = (className) => {
		return new Promise((resolve) => {
			const getElement = () => {
				const elements = document.querySelectorAll("." + className);

				// Wait for elements to be findable and for them to have the correct height
				if (elements.length > 0 && elements[0].height > 0) {
					resolve(elements);
				} else {
					requestAnimationFrame(getElement);
				}
			};
			getElement();
		});
	};

	useLayoutEffect(() => {
		let artImages;
		let dots = [];
		let prevButton;
		let nextButton;

		(async () => {
			artImages = await getImagesByClassAsync("art-image");

			// Dots
			dots = await getElementsByClassAsync("dot");
			for (var i = 0; i < dots.length; i++) {
				dots[i].classList.add("hidden");
			}

			// Buttons
			prevButton = await getElementByClassAsync(
				"flickity-prev-next-button.previous"
			);
			nextButton = await getElementByClassAsync(
				"flickity-prev-next-button.next"
			);

			prevButton.classList.add("hidden");
			nextButton.classList.add("hidden");

			window.addEventListener("resize", updateImageBorder);
			window.addEventListener("scroll", onScroll);

			onScroll();
			updateImageBorder();
		})();

		const updateImageBorder = () => {
			if (artImages) {
				// Update image overlays to conform to image size when anything is changed
				for (var j = 0; j < artImages.length; j++) {
					let height = artImages[j].height;
					let width = artImages[j].width;

					let overlay =
						artImages[j].parentElement.querySelector(
							".image-overlay"
						);
					let transition = overlay.style.transition;

					overlay.style.transition = "0s";

					overlay.style.height = height + 25 + "px";
					overlay.style.width = width + 25 + "px";

					// Wait a little bit for the 0s transition to finish before returning to normal
					sleep(10).then(() => {
						overlay.style.transition = transition;
					});
				}
			}
		};

		const onScroll = () => {
			// Prev next buttons
			const buttonsBottom = prevButton.getBoundingClientRect().bottom;
			if (window.innerHeight - buttonsBottom > 40) {
				prevButton.classList.remove("hidden");
				nextButton.classList.remove("hidden");
			}

			// Dots
			const dotsBottom = dots[0].getBoundingClientRect().bottom;
			if (window.innerHeight - dotsBottom > 20) {
				(async () => {
					for (var i = 0; i < dots.length; i++) {
						//dots[i].style.transitionDelay = i * 20 + "ms";
						dots[i].classList.remove("hidden");
						await sleep(50);
					}
				})();
			}
		};
	}, []);

	useEffect(() => {
		(async () => {})();
	}, []);

	return (
		<Flickity className="carousel">
			{artwork.map((art, index) => {
				return (
					<div
						className="carousel-cell"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-anchor="#artwork"
						data-aos-anchor-placement="top-center"
						key={index}
					>
						<div className="image-overlay">
							<div className="overlay-info p-6">
								<h2 className="title is-underlined">
									{art.title}
								</h2>
								<p className="description">{art.description}</p>
							</div>
						</div>
						<img
							className="art-image"
							src={art.image}
							alt="artwork"
						/>
					</div>
				);
			})}
		</Flickity>
	);
};

export default Carousel;
