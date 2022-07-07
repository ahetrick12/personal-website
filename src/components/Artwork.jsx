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
			<h1 className="title">Artwork</h1>
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
