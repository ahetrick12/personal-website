import {
  faYoutube,
  faLinkedin,
  faGithub,
  faUnity,
  faArtstation,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkIconProps {
  index: number;
  icon: IconDefinition;
  link: string;
}

const LinkIcon = ({ index, icon, link }: LinkIconProps) => {
  return (
    <a
      className="social icon-parent"
      href={link}
      target="_blank"
      rel="noreferrer"
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-delay={index * 300}
      data-aos-anchor="#about"
    >
      <FontAwesomeIcon
        className="icon"
        icon={icon}
      />
    </a>
  );
};

export const SocialLinks = () => {
  const linkMap = [
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/ahetrick12/',
    },
    {
      icon: faGithub,
      link: 'https://github.com/ahetrick12',
    },
    {
      icon: faUnity,
      link: 'https://assetstore.unity.com/publishers/36086',
    },
    {
      icon: faYoutube,
      link: 'https://www.youtube.com/channel/UCXvQbHsROTGAeKYoSc-wBUg/featured',
    },
    {
      icon: faArtstation,
      link: 'https://www.artstation.com/ventuar3d',
    },
  ];

  return (
    <>
      {linkMap.map((link, index) => (
        <LinkIcon
          key={index}
          index={index}
          icon={link.icon}
          link={link.link}
        />
      ))}
    </>
  );
};
