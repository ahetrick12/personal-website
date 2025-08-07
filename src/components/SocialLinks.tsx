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
  ariaLabel: string;
}

const LinkIcon = ({ index, icon, link, ariaLabel }: LinkIconProps) => {
  return (
    <a
      className="social icon-parent"
      href={link}
      target="_blank"
      aria-label={ariaLabel}
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
      ariaLabel: 'LinkedIn Profile',
    },
    {
      icon: faGithub,
      link: 'https://github.com/ahetrick12',
      ariaLabel: 'GitHub Profile',
    },
    {
      icon: faUnity,
      link: 'https://assetstore.unity.com/publishers/36086',
      ariaLabel: 'Unity Asset Store Profile',
    },
    {
      icon: faYoutube,
      link: 'https://www.youtube.com/channel/UCXvQbHsROTGAeKYoSc-wBUg/featured',
      ariaLabel: 'YouTube Channel',
    },
    {
      icon: faArtstation,
      link: 'https://www.artstation.com/ventuar3d',
      ariaLabel: 'ArtStation Profile',
    },
  ];

  return (
    <div>
      {linkMap.map((link, index) => (
        <LinkIcon
          key={index}
          index={index}
          icon={link.icon}
          link={link.link}
          ariaLabel={link.ariaLabel}
        />
      ))}
    </div>
  );
};
