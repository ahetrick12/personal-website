import { useContext, useRef } from 'react';
import Alex from '../../media/about/alex.webp';
import { SocialLinks } from '..';
import Resume from '../../media/about/resume.pdf';
import { Browser, BrowserContext } from '../../BrowserContext';

const About = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const browser = useContext(BrowserContext);

  const onHover = () => {
    if (!buttonRef.current) return;

    buttonRef.current.classList.add('not-fading-button');
  };

  return (
    <section id="about">
      <div className="tw-relative tw-bg-secondary tw-pt-4 tw-flex tw-justify-center">
        <div className="tw-max-w-[1200px]">
          <h1
            className="tw-title left"
            data-aos="title-appear"
            data-aos-duration="1500"
            data-aos-anchor="#about"
            data-aos-anchor-placement="top-center"
          >
            About
          </h1>
          <p
            className="subtitle left is-4"
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-delay="200"
            data-aos-anchor="#about"
            data-aos-anchor-placement="top-center"
          >
            A little bit about me.
          </p>
          <h2 className="tw-mt-8 tw-leading-[3rem] tw-text-[2rem] md:tw-text-[2.5rem] tw-p-0 md:tw-p-16 md:tw-pt-0 tw-align-bottom tw-text-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor="#about"
              data-aos-anchor-placement="top-center"
            >
              👋 Hi there! I’m Alex Hetrick, a software engineer who blends{' '}
              <code className="tw-text-accent tw-inline-block tw-w-fit tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-[0_0_16px_var(--accent)]">
                <span
                  className="tw-inline-block tw-align-middle tw-leading-8 tw-p-0 tw-pr-1"
                  data-aos="type"
                  data-aos-duration="0"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                >
                  code
                </span>
              </code>{' '}
              with{' '}
            </div>
            <div
              className="artistry"
              data-aos="fade-up"
              data-aos-anchor="#about"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1800"
              data-aos-delay="1600"
            >
              <span
                className="text"
                id="artistry-text"
              >
                Artistry
              </span>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <mask id="text-mask">
                    <text
                      x={browser == Browser.Safari ? '48.5%' : '50%'}
                      y="103%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="1.88rem"
                      fontFamily="Angelos"
                      fill="white"
                    >
                      Artistry
                    </text>
                  </mask>
                </defs>
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g
                  className="parallax"
                  mask="url(#text-mask)"
                >
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="2"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="7"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </h2>
          <div className="lg:tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 tw-mt-4">
            <div>
              <div className="tw-p-2 tw-pt-0 md:tw-px-20 md:tw-py-4 md:tw-pt-0 lg:tw-pl-20 lg:tw-pr-40 lg:tw-py-4 lg:tw-pt-0 tw-text-lg md:tw-text-[1.3rem]">
                <p
                  className="tw-pb-4"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2200"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                >
                  <span className="tw-inline-block tw-text-text-input-placeholder tw-mb-3">
                    {'──────  ──  ─  •   ·'}
                  </span>
                  <br />
                  Based in Pittsburgh and studying at{' '}
                  <a
                    href="https://www.rit.edu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    RIT
                  </a>
                  , I love approaching technical problems with an artistic mindset.
                </p>
                <p
                  className="tw-pb-4"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2400"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                >
                  As a fourth-year software engineering student, I've put theory into practice through internships at at
                  both{' '}
                  <a
                    href="https://www.mtb.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    M&T Bank
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.bmw.com/en/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BMW
                  </a>
                  . I'm passionate about creating beautiful, user-centered software that makes a real impact on people's
                  lives, and I'm constantly looking for new opportunities to learn and grow.
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2600"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                >
                  I also go by Ventuar online, and have built a brand as a 3D artist and game asset publisher on the{' '}
                  <a
                    href="https://assetstore.unity.com/publishers/36086"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unity Asset Store
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.cgtrader.com/ventuar3d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CGTrader
                  </a>
                  . Check out my work there!
                </p>
                <a
                  ref={buttonRef}
                  href={Resume}
                  className="tw-inline-flex tw-rounded-full accent-button"
                  rel="noreferrer"
                  target="_blank"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="3000"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                  onMouseEnter={onHover}
                >
                  View Resume
                </a>
                <hr
                  className="secondary"
                  data-aos="lengthen"
                  data-aos-duration="2000"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                />
                <SocialLinks />
              </div>
            </div>
            <div className="avatar tw-w-[50%] px-6-desktop px-0-touch">
              <figure className="image">
                <img
                  className="is-rounded"
                  src={Alex}
                  alt="Alex"
                  data-aos="about-image-slide"
                  data-aos-duration="2000"
                  data-aos-anchor="#about"
                  data-aos-anchor-placement="top-center"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-wrapper bottom-cutoff">
        <div className="banner-bottom"></div>
      </div>
    </section>
  );
};

export default About;
