import { useLayoutEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

import MouseScroller from "../images/mouse-scroller.svg";
import BackgroundVideo from "../images/intro-video.mp4";
import Resume from "../images/Alex_Hetrick_Resume.pdf";

const Introduction = () => {
	const scrollRef = useRef(null);

	useLayoutEffect(() => {
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			if (scrollPos <= window.innerHeight) {
				scrollRef.current.classList.add("active");
			} else {
				scrollRef.current.classList.remove("active");
			}
		};

		window.addEventListener("scroll", onScroll);
		window.addEventListener("DOMContentLoaded", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("DOMContentLoaded", onScroll);
		};
	}, []);

	const LinkIcon = ({ index, icon, link }) => {
		return (
			<a
				className="icon-parent"
				href={link}
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					className="icon is-large"
					icon={icon}
					style={{ animationDelay: index + "s" }}
				/>
			</a>
		);
	};

	return (
		<div id="introduction" className="hero is-fullheight">
			<div className="video-wrapper">
				<video id="video" autoPlay loop muted playsInline>
					<source src={BackgroundVideo} type="video/mp4" />
				</video>
			</div>
			<div className="hero-body has-text-centered">
				<div className="container is-fluid pt-6">
					<p
						className="title center"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="200"
					>
						Hi, I'm Alex.
					</p>
					<div
						className="mx-auto my-1"
						style={{ width: "fit-content" }}
					>
						<p className="subtitle typewriter is-4">
							Software Engineer, Game Developer, and 3D Artist
							studying at RIT
						</p>
					</div>
					<Link
						to="about-navtarget"
						smooth={true}
						className="view-more button"
					>
						View More<span>→</span>
					</Link>
					<hr
						width="25%"
						className="primary mx-auto my-5"
						data-aos="lengthen"
						data-aos-duration="1300"
						data-aos-delay="3000"
					></hr>
					<div className="columns is-centered is-multiline is-mobile">
						<div className="column is-1-desktop is-2-tablet has-text-right">
							<LinkIcon
								index={0}
								icon={faLinkedin}
								link="http://www.linkedin.com/in/ahetrick12"
							/>
						</div>
						<div className="column is-1-desktop is-2-tablet">
							<LinkIcon
								index={1}
								icon={faGithub}
								link="https://github.com/ahetrick12"
							/>
						</div>
						<div className="column is-1-desktop is-2-tablet has-text-left">
							<LinkIcon
								index={2}
								icon={faFileLines}
								link={Resume}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-behind"></div>
			<div className="shadow-wrapper top-cutoff">
				<div id="about-navtarget" className="banner-top"></div>
			</div>
			<div className="scroll" ref={scrollRef}>
				<img src={MouseScroller} alt="scroll"></img>
			</div>
		</div>
	);
};

export default Introduction;
