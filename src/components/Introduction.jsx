import { Link } from "react-scroll";

const Introduction = () => {
	return (
		<div id="introduction" className="hero is-fullheight-with-navbar">
			<div className="hero-body has-text-centered">
				<div className="container">
					<p
						className="title is-1"
						data-aos="fade-up"
						data-aos-once="true"
						data-aos-duration="1500"
						data-aos-easing="ease-in-out"
					>
						Hi, I'm Alex.
					</p>
					<div className="typewriter">
						<p className="subtitle is-3">
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
				</div>
			</div>
			<div className="banner1"></div>
			<div id="about-navtarget" className="banner2"></div>
		</div>
	);
};

export default Introduction;
