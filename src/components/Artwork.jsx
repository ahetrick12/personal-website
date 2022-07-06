import { useEffect } from "react";
import ArtworkDataset from "./ArtworkDataset";

const Artwork = () => {
	const artwork = ArtworkDataset();

	useEffect(() => {
		console.log(artwork);
	}, [artwork]);

	return (
		<section id="artwork" className="section is-medium">
			<h1 className="title">Artwork</h1>
			{artwork.map((artwork, i) => (
				<img src={artwork.image} alt="artwork" />
			))}
		</section>
	);
};

export default Artwork;
