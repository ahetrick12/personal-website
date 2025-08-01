import { useRef, useState, useEffect, useLayoutEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faLinkSlash } from '@fortawesome/free-solid-svg-icons';

interface ProjectTileProps {
  image: string;
  imagePos: string;
  inverted: boolean;
  href: string;
  title: string;
  description: string;
  tech: string[];
  wip: boolean;
  index: number;
}

const ProjectTile = (props: ProjectTileProps) => {
  const { image, imagePos, inverted, href, title, description, tech, wip, index } = props;
  const [isActive, setIsActive] = useState(true);

  const tileRef = useRef<HTMLAnchorElement>(null);

  const onHover = () => {
    tileRef.current?.classList.add('not-fading-button');
  };

  useLayoutEffect(() => {
    setIsActive(href === '' ? false : true);
  }, [href]);

  // When setIsActive is asynchronously complete, add the class to the tileRef
  useEffect(() => {
    if (!isActive) {
      tileRef.current?.classList.add('disabled');
    }
  }, [isActive]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="tw-relative tw-max-w-full project-card tw-bg-secondary tw-p-3 tw-w-full lg:tw-w-1/3 xl:tw-w-1/4"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={index * 150}
      data-aos-anchor="#projects-trigger"
      data-aos-anchor-placement="top-center"
      onMouseOver={onHover}
      ref={tileRef}
    >
      <div className="project-card-content tw-text-center">
        <div className="shadow-wrapper">
          <div className="image-wrapper">
            <img
              src={image}
              alt="lpup"
              className="image card-image"
              style={{
                objectPosition: imagePos,
              }}
            />
          </div>
        </div>
        <h2 className="proj-title tw-underline">{title}</h2>
        <p className="proj-description">{description}</p>
        <div className="proj-tech">
          {tech.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        {wip === true && <p className="wip">WIP</p>}
        <FontAwesomeIcon
          className={`image go-to is-32x32 ${isActive ? 'active' : ''} ${inverted ? 'inverted' : ''}`}
          icon={href !== '' ? faUpRightFromSquare : faLinkSlash}
        />
      </div>
    </a>
  );
};

export default ProjectTile;
