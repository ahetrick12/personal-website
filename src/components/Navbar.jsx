import { useState } from "react";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav className="navbar is-fixed-top" role="navigation">
			<div className="navbar-brand">
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
			<div
				id="navbar-menu"
				className={`navbar-menu ${isActive ? "is-active" : ""}`}
			>
				<div className="navbar-start">
					<p className="navbar-item">Home</p>
					<p className="navbar-item">About</p>
					<p className="navbar-item">Projects</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
