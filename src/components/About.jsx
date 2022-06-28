import Alex from "../images/Alex4.jpg";

import {
	faTwitter,
	faYoutube,
	faLinkedin,
	faGithub,
	faUnity,
	faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkIcon = ({ index, icon, link }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			data-aos="fade-right"
			data-aos-duration="500"
			data-aos-delay={index * 300}
			data-aos-anchor="#about"
			data-aos-anchor-placement="top-bottom"
		>
			<FontAwesomeIcon className="icon" icon={icon} />
		</a>
	);
};

const About = () => {
	return (
		<section id="about">
			<div className="about-container">
				<div className="columns px-6">
					<div className="description column is-two-thirds">
						<h2
							className="title underline"
							data-aos="title-appear"
							data-aos-duration="1500"
							data-aos-anchor="#about"
							data-aos-anchor-placement="top-bottom"
						>
							About
						</h2>
						<div>
							<p
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-bottom"
							>
								Hi there! I’m Alex Hetrick, a developer and
								artist from Pittsburgh, Pennsylvania. I’m
								currently a second-year student at the Rochester
								Institute of Technology studying software
								engineering.
							</p>
							<p
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="200"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-bottom"
							>
								I often go by Ventuar online, and have built a
								brand around that name as a publisher on the
								Unity Asset Store and CGTrader, designing and
								developing tools and 3D art assets for other
								game developers to use in their projects.
							</p>
						</div>
						<hr
							className="secondary"
							data-aos="lengthen"
							data-aos-duration="2000"
							data-aos-anchor="#about"
							data-aos-anchor-placement="top-bottom"
						/>
						<div>
							<LinkIcon
								index={0}
								icon={faTwitter}
								link="https://twitter.com/Ventuargames"
							/>
							<LinkIcon
								index={1}
								icon={faYoutube}
								link="https://www.youtube.com/channel/UCXvQbHsROTGAeKYoSc-wBUg/featured"
							/>
							<LinkIcon
								index={2}
								icon={faLinkedin}
								link="https://www.linkedin.com/in/alex-hetrick-421a51157/"
							/>
							<LinkIcon
								index={3}
								icon={faGithub}
								link="https://github.com/ahetrick12"
							/>
							<LinkIcon
								index={4}
								icon={faUnity}
								link="https://assetstore.unity.com/publishers/36086"
							/>
							<LinkIcon
								index={5}
								icon={faArtstation}
								link="https://www.artstation.com/ventuar3d"
							/>
						</div>
					</div>
					<div className="column is-one-third">
						<figure class="image">
							<img
								className="is-rounded"
								src={Alex}
								alt="Alex"
								data-aos="about-image-slide"
								data-aos-duration="2000"
								data-aos-anchor="#about"
								data-aos-anchor-placement="top-bottom"
							/>
						</figure>
					</div>
				</div>
			</div>
			<div className="shadow-wrapper">
				<div className="banner3"></div>
			</div>
		</section>
	);
};

export default About;
