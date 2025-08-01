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
      className="tile tw-flex tw-p-3 tw-flex-none tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/2 xl:tw-w-1/3"
      data-aos={aosType}
      data-aos-duration="500"
      data-aos-delay={index * 100}
      data-aos-anchor={anchor}
      data-aos-anchor-placement="top-center"
    >
      <div className="tw-flex tw-grow tw-border-[3px] tw-rounded-xl tw-border-background-secondary tw-border-tw-rounded-lg tw-p-4">
        <div className="tw-p-2 tw-flex tw-items-center tw-justify-center">
          <div className="icon">{icon}</div>
        </div>
        <div className="tw-p-2 tw-flex tw-items-center">
          <span>{name}</span>
        </div>
      </div>
    </li>
  );
});

SITile.displayName = 'SITile';
export default SITile;
