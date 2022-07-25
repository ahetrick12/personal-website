import { useEffect } from "react";
import ArtworkDataset from "./ArtworkDataset";
import Flickity from "react-flickity-component";

const Artwork = () => {
	const artwork = ArtworkDataset();

	useEffect(() => {
		console.log(artwork);
	}, [artwork]);

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
							data-aos="fade-up"
							data-aos-duration="1000"
						/>
					</div>
				))}
			</Flickity>
		</section>
	);
};

export default Artwork;
