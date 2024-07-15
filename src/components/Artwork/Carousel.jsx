import { React, useLayoutEffect } from 'react';
import ArtworkDataset from './ArtworkDataset';
import ArtImage from './ArtImage';

import Flickity from 'react-flickity-component';

const Carousel = () => {
  const artwork = ArtworkDataset();

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // Single element
  const getElementByClassAsync = (className) => {
    return new Promise((resolve) => {
      const getElement = () => {
        const element = document.querySelector('.' + className);

        // Wait for elements to be findable and for them to have the correct height
        if (element) {
          resolve(element);
        } else {
          requestAnimationFrame(getElement);
        }
      };
      getElement();
    });
  };

  // Multiple elements
  const getElementsByClassAsync = (className) => {
    return new Promise((resolve) => {
      const getElement = () => {
        const elements = document.querySelectorAll('.' + className);

        // Wait for elements to be findable and for them to have the correct height
        if (elements.length > 0) {
          resolve(elements);
        } else {
          requestAnimationFrame(getElement);
        }
      };
      getElement();
    });
  };

  useLayoutEffect(() => {
    let dots = [];
    let prevButton;
    let nextButton;

    (async () => {
      // Dots
      dots = await getElementsByClassAsync('dot');
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.add('hidden');
      }

      // Buttons
      prevButton = await getElementByClassAsync('flickity-prev-next-button.previous');
      nextButton = await getElementByClassAsync('flickity-prev-next-button.next');

      prevButton.classList.add('hidden');
      nextButton.classList.add('hidden');

      window.addEventListener('scroll', onScroll);
      onScroll();
    })();

    const onScroll = () => {
      // Prev next buttons
      const buttonsBottom = prevButton.getBoundingClientRect().bottom;
      if (window.innerHeight - buttonsBottom > 40) {
        prevButton.classList.remove('hidden');
        nextButton.classList.remove('hidden');
      }

      // Dots
      const dotsBottom = dots[0].getBoundingClientRect().bottom;
      if (window.innerHeight - dotsBottom > 20) {
        (async () => {
          for (var i = 0; i < dots.length; i++) {
            //dots[i].style.transitionDelay = i * 20 + "ms";
            dots[i].classList.remove('hidden');
            await sleep(50);
          }
        })();
      }
    };
  }, []);

  return (
    <Flickity className="carousel">
      {artwork.map((art, index) => {
        return (
          <ArtImage
            key={index}
            art={art}
          />
        );
      })}
    </Flickity>
  );
};

export default Carousel;
