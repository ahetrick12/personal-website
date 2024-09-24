import SISection from './SISection';
import { skillsData, interestsData } from './siData';

const SkillsInterests = () => {
  return (
    <section
      id="skillsinterests"
      className="section"
    >
      <div className="is-centered container">
        <h1
          className="title right"
          data-aos="title-appear"
          data-aos-duration="1500"
          data-aos-anchor="#skillsinterests"
          data-aos-anchor-placement="top-center"
        >
          Skills / Interests
        </h1>
        <p
          className="subtitle right is-4"
          data-aos="fade-left"
          data-aos-duration="1800"
          data-aos-delay="200"
          data-aos-anchor="#skillsinterests"
          data-aos-anchor-placement="top-center"
        >
          Some of the things I do and like!
        </p>
      </div>
      <div className="columns is-desktop">
        <SISection
          title="Skills"
          data={skillsData}
          aosType="fade-up-right"
        />
        <SISection
          title="Interests"
          data={interestsData}
          aosType="fade-up-left"
        />
      </div>
      <hr
        className="primary"
        data-aos="lengthen"
        data-aos-duration="1300"
      />
    </section>
  );
};

export default SkillsInterests;
