import ProjectTile from './ProjectsTile';
import projects from './projectsData';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section">
        <h1
          className="title left"
          data-aos="title-appear"
          data-aos-duration="1500"
          data-aos-anchor="#projects"
          data-aos-anchor-placement="top-center"
        >
          Projects
        </h1>
        <p
          className="subtitle left is-4"
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-delay="200"
          data-aos-anchor="#projects"
          data-aos-anchor-placement="top-center"
        >
          A selection of the things I've made over the years.
        </p>
      </div>
      <div>
        <div
          id="projects-trigger"
          className="columns is-multiline is-centered"
        >
          {projects.map((project, index) => (
            <ProjectTile
              image={project.image}
              imagePos={project.imagePos}
              inverted={project.iconColInvert ?? false}
              href={project.link}
              title={project.title}
              description={project.description}
              tech={project.technology}
              wip={project.wip ?? false}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="shadow-wrapper top-cutoff">
        <div
          id="about-navtarget"
          className="banner-top"
        ></div>
      </div>
    </section>
  );
};

export default Projects;
