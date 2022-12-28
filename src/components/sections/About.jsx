import { useRef } from "react";
import Alex from "../../media/alex.webp";
import SocialLinks from "../SocialLinks";
import Resume from "../../media/resume.pdf";

const About = () => {
	const buttonRef = useRef(null);

	const onHover = () => {
		buttonRef.current.classList.add("not-fading-button");
	};

	return (
		<section id="about">
			<div className="about-container">
				<div className="columns is-desktop px-6">
					<div className="description column is-full-touch is-two-thirds-desktop">
						<h2
							className="title left"
							data-aos="title-appear"
							data-aos-duration="1500"
							data-aos-anchor="#about"
							data-aos-anchor-placement="top-center"
						>
							About
						</h2>
						<p
							className="subtitle left is-4"
							data-aos="fade-right"
							data-aos-duration="1800"
							data-aos-delay="200"
							data-aos-anchor="#about"
							data-aos-anchor-placement="top-center"
						>
							A little bit about me.
						</p>
						<div className="bio">
							<p
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-center"
							>
								Hi there! I’m Alex Hetrick, a software engineer
								and artist from Pittsburgh, Pennsylvania. I’m
								currently a second-year student studying
								software engineering at the{" "}
								<a
									href="https://www.rit.edu"
									target="_blank"
									rel="noreferrer"
								>
									Rochester Institute of Technology
								</a>
								.
							</p>
							<p
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="200"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-center"
							>
								I often go by Ventuar online, and have built a
								brand around that name as an asset publisher on
								the{" "}
								<a
									href="https://assetstore.unity.com/publishers/36086"
									target="_blank"
									rel="noreferrer"
								>
									Unity Asset Store
								</a>{" "}
								and{" "}
								<a
									href="https://www.cgtrader.com/ventuar3d"
									target="_blank"
									rel="noreferrer"
								>
									CGTrader
								</a>
								, designing and developing tools, 3D art assets,
								and resources to help other game developers
								fully realize their projects and ideas.
							</p>
							<a
								href={Resume}
								className="button accent-button is-rounded"
								rel="noreferrer"
								target="_blank"
								data-aos="fade-right"
								data-aos-duration="1500"
								data-aos-delay="400"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-center"
								ref={buttonRef}
								onMouseEnter={onHover}
							>
								View Resume
							</a>
						</div>
						<hr
							className="secondary"
							data-aos="lengthen"
							data-aos-duration="2000"
							data-aos-anchor="#about"
							data-aos-anchor-placement="top-center"
						/>
						<SocialLinks />
					</div>
					<div className="avatar column is-full-touch is-one-third-desktop">
						<figure className="image">
							<img
								className="is-rounded"
								src={Alex}
								alt="Alex"
								data-aos="about-image-slide"
								data-aos-duration="2000"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-center"
							/>
						</figure>
					</div>
				</div>
			</div>
			<div className="shadow-wrapper bottom-cutoff">
				<div className="banner-bottom"></div>
			</div>
		</section>
	);
};

export default About;
