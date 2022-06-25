import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const ProjectTile = ({ icon, href, title, description, index }) => {
	const tileRef = useRef(null);

	const onHover = () => {
		tileRef.current.classList.add("not-fading");
	};

	return (
		<a
			href={href}
			className="card column is-one-quarter"
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay={index * 150}
			data-aos-once={true}
			onMouseOver={onHover}
			ref={tileRef}
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
			<div className="columns is-multiline is-centered is-mobile">
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
				<ProjectTile
					icon={faLaptopCode}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					title="Title"
					description="Lemme tell you all bout this gurl"
					index={3}
				></ProjectTile>
				<ProjectTile
					icon={faLaptopCode}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					title="Title"
					description="Lemme tell you all bout this gurl"
					index={4}
				></ProjectTile>
				<ProjectTile
					icon={faLaptopCode}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					title="Title"
					description="Lemme tell you all bout this gurl"
					index={5}
				></ProjectTile>
			</div>
		</section>
	);
};

export default Projects;
