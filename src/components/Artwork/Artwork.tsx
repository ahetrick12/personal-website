import Carousel from './Carousel';

// const CarouselLazy: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => import('./Carousel'));

const Artwork = () => {
  return (
    <section id="artwork">
      <div className="tw-bg-secondary">
        <div className="tw-p-12 tw-pb-16 tw-pt-0">
          <h1
            className="tw-title right"
            data-aos="title-appear"
            data-aos-duration="1500"
            data-aos-anchor="#artwork"
            data-aos-anchor-placement="top-center"
          >
            Artwork
          </h1>
          <p
            className="subtitle right"
            data-aos="fade-left"
            data-aos-duration="1800"
            data-aos-delay="200"
            data-aos-anchor="#artwork"
            data-aos-anchor-placement="top-center"
          >
            I make art from time to time. Here's a bit of what I've made!
          </p>
        </div>
        <Carousel />
      </div>

      <div className="shadow-wrapper bottom-cutoff">
        <div className="banner-bottom"></div>
      </div>
    </section>
  );
};

export default Artwork;
