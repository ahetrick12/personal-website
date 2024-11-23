import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { ArtworkItem } from './ArtworkItem';

interface ArtImageProps {
  art: ArtworkItem;
}

const ArtImage = ({ art }: ArtImageProps) => {
  const artImage = useRef<HTMLImageElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const cell = useRef<HTMLDivElement>(null);
  const debounceTimeout = useRef<any>(null);

  useLayoutEffect(() => {
    const updateImageBorder = () => {
      if (!artImage.current || !overlay.current || !cell.current) return;

      // Update image overlays to conform to image size when anything is changed
      const height = artImage.current.height;
      const width = artImage.current.width;
      const borderOffset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--art-image-border-offset'),
        10
      );

      overlay.current.style.transition = artImage.current.style.transition;
      overlay.current.style.height = height + borderOffset + 'px';
      overlay.current.style.width = width + borderOffset + 'px';

      // Update cell height to maintain 16 by 9 aspect ratio
      const cellWidth = cell.current.clientWidth;
      const cellHeight = cellWidth / (16 / 9);
      cell.current.style.height = cellHeight + 'px';
    };

    const debouncedUpdateImageBorder = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(updateImageBorder, 300); // Adjust the delay as needed
    };

    if (!artImage.current || !cell.current) return;

    updateImageBorder();

    const resizeObserver = new ResizeObserver(debouncedUpdateImageBorder);
    resizeObserver.observe(cell.current);
    resizeObserver.observe(artImage.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={cell}
      className="carousel-cell"
    >
      <>
        <div
          ref={overlay}
          className="image-overlay"
        >
          <div className="overlay-info p-6">
            <h2 className="title is-underlined">{art.title}</h2>
            <p className="description">{art.description}</p>
          </div>
        </div>
        <img
          ref={artImage}
          className="art-image"
          src={art.image}
          alt="artwork"
          loading="lazy"
        />
      </>
    </div>
  );
};

export default ArtImage;
