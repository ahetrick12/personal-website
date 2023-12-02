import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

const ArtImage = (props) => {
	const artImage = useRef();
	const overlay = useRef();

	useLayoutEffect(() => {
		const updateImageBorder = () => {
			// Update image overlays to conform to image size when anything is changed
			let height = artImage.current.height;
			let width = artImage.current.width;

			overlay.current.style.transition =
				artImage.current.style.transition;
			overlay.current.style.height = height + 25 + "px";
			overlay.current.style.width = width + 25 + "px";
		};

		const resizeObserver = new ResizeObserver(updateImageBorder);
		resizeObserver.observe(artImage.current);

		// Cleanup function
		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			className="carousel-cell"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-anchor="#artwork"
			data-aos-anchor-placement="top-center"
		>
			<div ref={overlay} className="image-overlay">
				<div className="overlay-info p-6">
					<h2 className="title is-underlined">{props.art.title}</h2>
					<p className="description">{props.art.description}</p>
				</div>
			</div>
			<img
				ref={artImage}
				className="art-image"
				src={props.art.image}
				alt="artwork"
			/>
		</div>
	);
};

export default ArtImage;
