import { useLayoutEffect, useRef } from "react";
import { Link } from "react-scroll";
import MouseScroller from "../images/mouse-scroller.svg";
import BackgroundVideo from "../images/intro-video.mp4";

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

	return (
		<div id="introduction" className="hero is-fullheight">
			<div className="video-wrapper">
				<video autoPlay loop muted id="video">
					<source src={BackgroundVideo} type="video/mp4" />
				</video>
			</div>
			<div className="hero-body has-text-centered">
				<div className="container">
					<p
						className="title is-1"
						data-aos="fade-up"
						data-aos-duration="2000"
						data-aos-delay="200"
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
