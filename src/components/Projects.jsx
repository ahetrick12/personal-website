import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const ProjectTile = ({ icon, href, title, description, index }) => {
	return (
		<a
			href={href}
			className="card column is-one-fourth"
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay={index * 200}
		>
			<div className="card-content has-text-centered">
				<FontAwesomeIcon
					className="image is-96x96 m-auto"
					icon={icon}
				/>
				<h2 className="repo-title is-underlined">{title}</h2>
				<p className=" repo-description">{description}</p>
			</div>
		</a>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="section is-medium">
			<h1 className="title">Projects</h1>
			<div className="columns is-multiline mx-0 is-centered">
				<ProjectTile
					icon={faLaptopCode}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					title="Title"
					description="Lemme tell you all bout this gurl"
					index={0}
				></ProjectTile>
				<ProjectTile
					icon={faLaptopCode}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					title="Title"
					description="Lemme tell you all bout this gurl"
					index={1}
				></ProjectTile>
				<ProjectTile
					icon={faLaptopCode}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					title="Title"
					description="Lemme tell you all bout this gurl"
					index={2}
				></ProjectTile>
			</div>
		</section>
	);
};

export default Projects;
