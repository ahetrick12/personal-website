import { ArtworkItem } from './ArtworkItem';

interface ArtImageProps {
  art: ArtworkItem;
}

const ArtImage = ({ art }: ArtImageProps) => {
  return (
    <div className="carousel-cell">
      <div className="art-wrapper">
        <div className="image-overlay">
          <div className="overlay-info p-6">
            <h2 className="title is-underlined">{art.title}</h2>
            <p className="description">{art.description}</p>
          </div>
        </div>
        <img
          className="art-image"
          src={art.image}
          alt="artwork"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ArtImage;
