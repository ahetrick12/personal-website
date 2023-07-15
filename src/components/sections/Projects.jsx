import { useRef, useState, useEffect, useLayoutEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUpRightFromSquare,
	faLinkSlash,
} from "@fortawesome/free-solid-svg-icons";

import LPUP_Screnshot from "../../media/project-banners/lpup.webp";
import personal_website from "../../media/project-banners/personal-website.webp";
import powerup_hackathon from "../../media/project-banners/poweruptech.webp";
import notion_notetaker from "../../media/project-banners/notion-notetaker.webp";
import artist_corner from "../../media/project-banners/artist-corner.webp";
import gamejams from "../../media/project-banners/gamejams.webp";
import mabel from "../../media/project-banners/mabel.webp";

const ProjectTile = ({
	image,
	imagePos,
	inverted,
	href,
	title,
	description,
	tech,
	wip,
	index,
}) => {
	const [isActive, setIsActive] = useState(true);

	const tileRef = useRef(null);

	const onHover = () => {
		tileRef.current.classList.add("not-fading-button");
	};

	useLayoutEffect(() => {
		setIsActive(href === "" ? false : true);
	}, [href]);

	// When setIsActive is asynchronously complete, add the class to the tileRef
	useEffect(() => {
		if (!isActive) {
			tileRef.current.classList.add("disabled");
		}
	}, [isActive]);

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="card column is-full-touch is-one-third-desktop is-one-quarter-widescreen"
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay={index * 150}
			data-aos-anchor="#projects-trigger"
			data-aos-anchor-placement="top-center"
			onMouseOver={onHover}
			ref={tileRef}
		>
			<div className="card-content has-text-centered">
				<div className="shadow-wrapper">
					<div className="image-wrapper">
						<img
							src={image}
							alt="lpup"
							className="image card-image"
							style={{
								"objectPosition": imagePos,
							}}
						/>
					</div>
				</div>
				<h2 className="proj-title is-underlined">{title}</h2>
				<p className="proj-description">{description}</p>
				<div className="proj-tech">
					{tech.map((tech, index) => (
						<p key={index}>{tech}</p>
					))}
				</div>
				{wip === true && <p className="wip">WIP</p>}
				<FontAwesomeIcon
					className={`image go-to is-32x32 ${
						isActive ? "active" : ""
					} ${inverted ? "inverted" : ""}`}
					icon={href !== "" ? faUpRightFromSquare : faLinkSlash}
				/>
			</div>
		</a>
	);
};

const projects = [
	{
		image: mabel,
		imagePos: "50% 50%",
		iconColInvert: false,
		title: "Multi-Armed Bandit EvaLuator (MABEL)",
		description:
			"An NSF research project through the Rochester Institute of Technology to develop a tool to evaluate multi-armed bandit algorithms' ability to detect faulty sensor readings in autonomous connected vehicles",
		technology: ["Python", "Plotly Dash", "AI/ML"],
		link: "https://icmab.github.io/MABEL/",
		wip: false,
	},
	{
		image: LPUP_Screnshot,
		imagePos: "50% 60%",
		iconColInvert: false,
		title: "Low Poly Underwater Pack",
		description:
			"A vast collection of underwater-themed art, tools, and shaders in a beautiful low-poly art style that allows game developers easily create vast and stunning underwater worlds",
		technology: ["Unity3D", "C#", "HLSL", "Blender", "Inkscape"],
		link: "https://assetstore.unity.com/packages/3d/environments/landscapes/low-poly-underwater-pack-197874",
		wip: false,
	},
	{
		image: powerup_hackathon,
		imagePos: "50% 50%",
		iconColInvert: true,
		title: "Powerup Tech Buffalo Community Hackathon",
		description:
			"A service that allows the Say Yes Buffalo organization to quantitatively track alumni engagement in social media job postings fully autonomously",
		technology: [
			"React",
			"TailwindCSS",
			"NodeJS",
			"PostgreSQL",
			"Prisma",
			"Render",
		],
		link: "https://devpost.com/software/say-yes-buffalo-team-22?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team",
		wip: false,
	},
	{
		image: personal_website,
		imagePos: "50% 15%",
		iconColInvert: false,
		title: "Personal Website",
		description:
			"My personal website, the one you're on right now, built with React and Bulma.",
		technology: ["React", "Bulma", "EmailJS", "HTML", "SCSS", "JS"],
		link: "https://github.com/ahetrick12/personal-website",
		wip: false,
	},
	{
		image: artist_corner,
		imagePos: "50% 12%",
		iconColInvert: false,
		title: "Artist Corner E-store",
		description:
			"An online artist e-store webpage with a JSON-server backend made using Angular as a team project for SWEN-261",
		technology: [
			"Angular",
			"Java",
			"Spring Boot",
			"Typescript",
			"HTML",
			"CSS",
			"JS",
		],
		link: "https://github.com/ahetrick12/artist-corner-estore",
		wip: false,
	},
	{
		image: gamejams,
		imagePos: "50% 45%",
		iconColInvert: false,
		title: "Game Jam Games",
		description:
			"A collection of games I've made for game jams throughout my life, all hosted on itch.io",
		technology: ["Unity3D", "C#", "Blender", "Inkscape"],
		link: "https://ventuargames.itch.io/",
		wip: false,
	},
];

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
				<div
					id="projects-trigger"
					className="columns is-multiline is-centered"
				>
					{projects.map((project, index) => (
						<ProjectTile
							image={project.image}
							imagePos={project.imagePos}
							inverted={project.iconColInvert}
							href={project.link}
							title={project.title}
							description={project.description}
							tech={project.technology}
							wip={project.wip}
							index={index}
							key={index}
						/>
					))}
				</div>
			</div>
			<div className="shadow-wrapper top-cutoff">
				<div id="about-navtarget" className="banner-top"></div>
			</div>
		</section>
	);
};

export default Projects;
