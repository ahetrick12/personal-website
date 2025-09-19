import { useLayoutEffect, useRef } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import MouseScroller from '../../media/intro/mouse-scroller.svg';
import Hero720p from '../../media/intro/hero-video720p.mp4';
import Hero1080p from '../../media/intro/hero-video1080p.webm';
import Hero1440p from '../../media/intro/hero-video1440p.webm';
import HeroPoster from '../../media/intro/hero-poster.webp';
import Resume from '../../media/about/resume.pdf';

const Introduction = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 5) {
        scrollRef.current?.classList.add('active');
      } else {
        scrollRef.current?.classList.remove('active');
      }
    };

    // Initial check, wait a bit to tell the user to scroll down if they are at the top of the page
    setTimeout(() => {
      onScroll();
    }, 2000);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const LinkIcon = (props: { index: number; icon: IconProp; link: string; ariaLabel: string }) => {
    const { index, icon, link } = props;
    return (
      <a
        className="icon-parent intro-icon-selectarea"
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={props.ariaLabel}
      >
        <FontAwesomeIcon
          className="icon is-large"
          icon={icon}
          style={{ animationDelay: index + 2 + 's' }}
        />
      </a>
    );
  };

  return (
    <div
      id="introduction"
      className="hero is-fullheight"
    >
      <div className="video-wrapper">
        <video
          id="video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HeroPoster}
        >
          <source
            src={Hero720p}
            type="video/mp4"
            media="(max-width: 1080px)"
          />
          <source
            src={Hero1080p}
            type="video/webm"
            media="(max-width: 1920px)"
          />
          <source
            src={Hero1440p}
            type="video/webm"
            media="(min-width: 1921px)"
          />
        </video>
      </div>
      <div className="hero-body has-text-centered">
        <div className="container is-fluid pt-6">
          <p
            className="title center"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            Hi, I'm Alex.
          </p>
          <div
            className="mx-auto my-1"
            style={{ width: 'fit-content' }}
          >
            <p className="subtitle typewriter is-4">Software Engineer, Game Developer, and 3D Artist studying at RIT</p>
          </div>
          <a
            href="#about"
            className="view-more button"
          >
            View More<span>→</span>
          </a>
          <hr
            className="primary mx-auto my-5"
            data-aos="lengthen"
            data-aos-duration="1300"
            data-aos-delay="3000"
          ></hr>
          <div className="columns is-centered is-multiline is-mobile">
            <div className="column is-1-desktop is-2-tablet">
              <LinkIcon
                index={0}
                icon={faLinkedin}
                link="http://www.linkedin.com/in/ahetrick12"
                ariaLabel="LinkedIn Profile"
              />
            </div>
            <div className="column is-1-desktop is-2-tablet">
              <LinkIcon
                index={1}
                icon={faGithub}
                link="https://github.com/ahetrick12"
                ariaLabel="GitHub Profile"
              />
            </div>
            <div className="column is-1-desktop is-2-tablet">
              <LinkIcon
                index={2}
                icon={faFileLines}
                link={Resume}
                ariaLabel="Resume PDF"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-behind"></div>
      <div className="shadow-wrapper top-cutoff">
        <div className="banner-top"></div>
      </div>
      <div
        className="scroll"
        ref={scrollRef}
      >
        <img
          src={MouseScroller}
          alt="scroll"
        ></img>
      </div>
    </div>
  );
};

export default Introduction;
