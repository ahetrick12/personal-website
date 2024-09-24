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
    <div className="column is-half-desktop is-full-touch">
      <p
        className={`subtitle ${title.toLowerCase()}`}
        data-aos={`${title.toLowerCase()}-subtitle`}
        data-aos-duration="1800"
        data-aos-anchor="#skillsinterests"
        data-aos-anchor-placement="top-center"
      >
        {title}
      </p>
      <ul className={`columns ${title.toLowerCase()} is-multiline is-centered is-mobile`}>
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
