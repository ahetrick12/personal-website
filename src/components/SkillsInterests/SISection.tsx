import type { JSX } from 'react';
import SITile from './SITile';

interface SISectionProps {
  title: string;
  data: Array<{ name: string; icon: () => JSX.Element }>;
  aosType: string;
}

const SISection = (props: SISectionProps) => {
  const { title, data, aosType } = props;
  return (
    <div className="tw-w-full lg:tw-w-1/2 tw-p-3">
      <p
        className={`${title.toLowerCase()} section-title`}
        data-aos={`${title.toLowerCase()}-subtitle`}
        data-aos-duration="1800"
        data-aos-anchor="#skillsinterests"
        data-aos-anchor-placement="top-center"
      >
        {title}
      </p>
      <ul className={`${title.toLowerCase()} tw-flex tw-flex-wrap`}>
        {data.map((item, index) => (
          <SITile
            key={item.name}
            name={item.name}
            icon={item.icon()}
            aosType={aosType}
            index={index}
            anchor={`.subtitle.${title.toLowerCase()}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default SISection;
