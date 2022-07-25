import { useLayoutEffect } from "react";
import ArtworkDataset from "./ArtworkDataset";
import Flickity from "react-flickity-component";

const Artwork = () => {
	const artwork = ArtworkDataset();

	// const sleep = (milliseconds) => {
	// 	return new Promise((resolve) => setTimeout(resolve, milliseconds));
	// };

	// useLayoutEffect(() => {
	// 	let dots = [];
	// 	sleep(1000).then(() => {
	// 		dots = document.querySelectorAll(".dot");
	// 		console.log(dots);

	// 		// for (var i = 0; i < dots.length; i++) {
	// 		// 	dots[i].setAttribute("data-aos", "fade");
	// 		// 	//dots[i].setAttribute("data-aos-delay", i * 100);
	// 		// 	dots[i].setAttribute("data-aos-duration", "200");
	// 		// 	dots[i].setAttribute("data-aos-anchor", "#projects");
	// 		// 	// dots[i].setAttribute("data-aos-anchor-placement", "top-bottom");
	// 		// }

	// 		const onScroll = () => {
	// 			//const scrollPos = window.scrollY + window.innerHeight;
	// 			const bottom = dots[0].getBoundingClientRect().bottom;

	// 			//console.log(scrollPos + " : " + bottom);
	// 			console.log(window.innerHeight - bottom);
	// 			if (window.innerHeight - bottom > 20) {
	// 				for (var i = 0; i < dots.length; i++) {
	// 					dots[i].style.transitionDelay = i * 50 + "ms";
	// 					dots[i].style.opacity = "0.45";
	// 				}
	// 			}
	// 		};

	// 		window.addEventListener("scroll", onScroll);
	// 		window.addEventListener("DOMContentLoaded", onScroll);
	// 	});
	// }, []);

	return (
		<section id="artwork" className="section is-medium">
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
						/>
					</div>
				))}
			</Flickity>
		</section>
	);
};

export default Artwork;
