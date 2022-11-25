import React from "react";
import { Suspense } from "react";

const CarouselLazy = React.lazy(() => import("../Carousel"));

const Artwork = () => {
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
				<Suspense fallback={<div>Loading...</div>}>
					<CarouselLazy />
				</Suspense>
			</div>

			<div className="shadow-wrapper bottom-cutoff">
				<div className="banner-bottom"></div>
			</div>
		</section>
	);
};

export default Artwork;
