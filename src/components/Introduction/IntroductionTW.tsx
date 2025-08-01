import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import MouseScroller from '../../media/intro/mouse-scroller.svg';
import BackgroundVideo from '../../media/intro/intro-video.m4v';
import Resume from '../../media/about/resume.pdf';

const LinkIcon = (props: { index: number; icon: IconProp; link: string }) => {
  const { index, icon, link } = props;
  return (
    <a
      className="tw-text-foreground-primary"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className="tw-animate-intro-icon tw-icon tw-transition-all tw-duration-200 tw-ease-out"
        icon={icon}
        style={{ animationDelay: index + 2 + 's' }}
      />
    </a>
  );
};

const Introduction = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAtTop(true);
    }, 7000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const isNearTop = window.scrollY + window.innerHeight <= window.innerHeight + 20;

      if (isNearTop && !atTop) {
        timeoutRef.current = setTimeout(() => {
          setAtTop(true);
        }, 2000); // 2s delay
      } else if (!isNearTop && atTop) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setAtTop(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [atTop]);

  return (
    <div
      id="introduction"
      className="tw-h-[110lvh] tw-relative tw-flex tw-items-stretch tw-flex-col tw-justify-between"
    >
      <div className="tw-relative tw-block">
        <video
          className="tw-absolute tw-top-0 tw-h-screen tw-w-screen tw-object-cover [filter:saturate(1.15)_contrast(1.05)]"
          id="video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={BackgroundVideo}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="tw-align-middle tw-text-center">
        <div className="tw-relative tw-mx-auto tw-pl-8 tw-pr-8 is-fluid tw-pt-6">
          <p
            className="tw-title tw-center"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            Hi, I'm Alex.
          </p>
          <div className="tw-mx-auto tw-my-1 tw-w-fit">
            <p className="tw-subtitle tw-typewriter">
              Software Engineer, Game Developer, and 3D Artist studying at RIT
            </p>
          </div>
          <Link
            to="about"
            smooth={true}
            className="tw-inline-flex tw-animate-view-more tw-text-foreground-primary tw-border-2 tw-border-background-secondary-alt tw-bg-transparent tw-rounded-lg tw-px-4 tw-py-3 tw-mt-8 tw-text-base tw-transition-all tw-duration-300 tw-ease-out hover:tw-border-accent hover:tw-bg-accent-semitransparent hover:tw-scale-110"
          >
            View More
            <span className="tw-pl-2">→</span>
          </Link>
          <hr
            className="tw-mx-auto tw-my-6 tw-w-3/4 sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4"
            data-aos="lengthen"
            data-aos-duration="1300"
            data-aos-delay="3000"
          ></hr>
          <div className="tw-flex tw-justify-center tw-columns-3 tw-w-full sm:tw-w-1/2 tw-mx-auto">
            <div className="tw-w-full tw-flex tw-justify-end tw-flex-wrap">
              <LinkIcon
                index={0}
                icon={faLinkedin}
                link="http://www.linkedin.com/in/ahetrick12"
              />
            </div>
            <div className="tw-w-full tw-flex tw-justify-center">
              <LinkIcon
                index={1}
                icon={faGithub}
                link="https://github.com/ahetrick12"
              />
            </div>
            <div className="tw-w-full tw-flex tw-justify-start">
              <LinkIcon
                index={2}
                icon={faFileLines}
                link={Resume}
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
        className="tw-fixed tw-bottom-4 tw-left-1/2 tw-z-50 "
        ref={scrollRef}
      >
        <img
          className={`tw-h-14 tw-w-14 tw-ml-1/2 tw-transition-opacity tw-duration-700 tw-ease-in-out ${
            atTop ? 'tw-opacity-100' : 'tw-opacity-0'
          }`}
          src={MouseScroller}
          alt="scroll icon"
        ></img>
      </div>
    </div>
  );
};

export default Introduction;
