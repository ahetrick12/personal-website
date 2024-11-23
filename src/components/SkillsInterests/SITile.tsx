import React, { type JSX } from 'react';

interface SkillInterestTileProps {
  name: string;
  icon: JSX.Element;
  aosType: string;
  index: number;
  anchor: string;
}

const SITile = React.memo((props: SkillInterestTileProps) => {
  const { name, icon, aosType, index, anchor } = props;

  return (
    <li
      className="column tile-column is-half-mobile is-one-third-tablet is-half-desktop is-one-third-fullhd"
      data-aos={aosType}
      data-aos-duration="500"
      data-aos-delay={index * 100}
      data-aos-anchor={anchor}
      data-aos-anchor-placement="top-center"
    >
      <div className="tile columns is-desktop">
        <div className="column icon-column is-one-quarter-widescreen">
          <div className="icon">{icon}</div>
        </div>
        <div className="column name-column">
          <span>{name}</span>
        </div>
      </div>
    </li>
  );
});

SITile.displayName = 'SITile';
export default SITile;
