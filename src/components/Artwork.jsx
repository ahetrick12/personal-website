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
			<Flickity>
				{artwork.map((artwork, i) => (
					<img src={artwork.image} alt="artwork" />
				))}
			</Flickity>
		</section>
	);
};

export default Artwork;
