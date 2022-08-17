import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../images/logo.png";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [lastScrollPos, setLastScrollPos] = useState(
		window.scrollY + window.innerHeight
	);
	const [scrollStatus, setScrollStatus] = useState("top");

	const navbarRef = useRef(null);

	const removeAllClasses = () => {
		navbarRef.current.classList.remove("at-top");
		navbarRef.current.classList.remove("scrolling-up");
		navbarRef.current.classList.remove("scrolling-down");
	};

	const addClass = (c) => {
		navbarRef.current.classList.add(c);
	};

	useLayoutEffect(() => {
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			// Being at top takes priority over scroll directionality
			if (scrollPos <= window.innerHeight) {
				// at top
				setScrollStatus("top");
			} else if (scrollPos > lastScrollPos) {
				// scrolling down
				setScrollStatus("down");
			} else {
				// scrolling up
				setScrollStatus("up");
			}

			setLastScrollPos(scrollPos);
		};

		window.addEventListener("scroll", onScroll);
		window.addEventListener("DOMContentLoaded", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("DOMContentLoaded", onScroll);
		};
	}, [lastScrollPos, scrollStatus]);

	// Fired when scroll status is asynchronously updated
	useEffect(() => {
		removeAllClasses();

		switch (scrollStatus) {
			case "top":
				addClass("at-top");
				break;
			case "down":
				addClass("scrolling-down");
				break;
			case "up":
				addClass("scrolling-up");
				break;
			default:
				addClass("at-top");
				break;
		}
	}, [scrollStatus]);

	return (
		<section className="section">
			<nav
				className="navbar is-transparent is-fixed-top at-top"
				role="navigation"
				aria-label="main navigation"
				ref={navbarRef}
			>
				<div className="navbar-brand">
					<Link to="introduction" smooth={true}>
						<img
							src={Logo}
							alt="logo"
							className="image is-64x64 m-2 is-icon"
						/>
					</Link>
					<button
						onClick={() => {
							setIsActive(!isActive);
						}}
						className={`navbar-burger ${
							isActive ? "is-active" : ""
						}`}
						aria-label="menu"
						aria-expanded="false"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>
				</div>
				<div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
					<div className="navbar-end" style={{ "flexGrow": 1 }}>
						<Link
							to="introduction"
							smooth={true}
							className="navbar-item"
						>
							Home
						</Link>
						<Link
							to="about-navtarget"
							smooth={true}
							className="navbar-item"
						>
							About
						</Link>
						<Link
							to="skillsinterests"
							smooth={true}
							className="navbar-item"
						>
							Skills/Interests
						</Link>
						<Link
							to="projects"
							smooth={true}
							className="navbar-item"
						>
							Projects
						</Link>
						<Link
							to="artwork"
							smooth={true}
							className="navbar-item"
						>
							Artwork
						</Link>
						<Link
							to="contact"
							smooth={true}
							className="navbar-item"
						>
							Contact
						</Link>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
