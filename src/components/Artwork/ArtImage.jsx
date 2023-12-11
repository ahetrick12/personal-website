import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

const ArtImage = (props) => {
	const artImage = useRef();
	const overlay = useRef();
	const cell = useRef();

	useLayoutEffect(() => {
		const updateImageBorder = () => {
			// Update image overlays to conform to image size when anything is changed
			let height = artImage.current.height;
			let width = artImage.current.width;
			let borderOffset = getComputedStyle(
				document.documentElement
			).getPropertyValue("--art-image-border-offset");
			borderOffset = parseInt(borderOffset, 10);

			overlay.current.style.transition =
				artImage.current.style.transition;
			overlay.current.style.height = height + borderOffset + "px";
			overlay.current.style.width = width + borderOffset + "px";

			// Update cell height to maintain 16 by 9 aspect ratio
			let cellWidth = cell.current.clientWidth;
			let cellHeight = cellWidth / (16 / 9);
			cell.current.style.height = cellHeight + "px";
		};

		const resizeObserver = new ResizeObserver(updateImageBorder);
		resizeObserver.observe(cell.current);
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
			ref={cell}
		>
			{/* <div className="art-container"> */}
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
			{/* </div> */}
		</div>
	);
};

export default ArtImage;
