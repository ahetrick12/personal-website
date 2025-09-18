import Carousel from './Carousel';

const Artwork = () => {
  return (
    <section id="artwork">
      <div className="section">
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
          I make art from time to time. Here's a bit of what I've made!
        </p>
        <Carousel />
      </div>

      <div className="shadow-wrapper bottom-cutoff">
        <div className="banner-bottom"></div>
      </div>
    </section>
  );
};

export default Artwork;
