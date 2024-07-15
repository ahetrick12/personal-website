import React from 'react';
import { faTwitter, faYoutube, faLinkedin, faGithub, faUnity, faArtstation } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkIcon = ({ index, icon, link }) => {
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

const SocialLinks = () => {
  return (
    <div>
      <LinkIcon
        index={0}
        icon={faLinkedin}
        link="https://www.linkedin.com/in/alex-hetrick-421a51157/"
      />
      <LinkIcon
        index={1}
        icon={faGithub}
        link="https://github.com/ahetrick12"
      />
      <LinkIcon
        index={2}
        icon={faUnity}
        link="https://assetstore.unity.com/publishers/36086"
      />
      <LinkIcon
        index={3}
        icon={faTwitter}
        link="https://twitter.com/Ventuargames"
      />
      <LinkIcon
        index={4}
        icon={faYoutube}
        link="https://www.youtube.com/channel/UCXvQbHsROTGAeKYoSc-wBUg/featured"
      />
      <LinkIcon
        index={5}
        icon={faArtstation}
        link="https://www.artstation.com/ventuar3d"
      />
    </div>
  );
};

export default SocialLinks;
