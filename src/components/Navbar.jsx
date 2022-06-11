import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/logo.png";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<section class="section">
			<nav
				className="navbar is-transparent is-fixed-top "
				role="navigation"
				aria-label="main navigation"
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
						class={`navbar-burger ${isActive ? "is-active" : ""}`}
						aria-label="menu"
						aria-expanded="false"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>
				</div>
				<div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
					<div
						className="navbar-end"
						style={{ "flex-grow": 1, "justify-content": "center" }}
					>
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
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
