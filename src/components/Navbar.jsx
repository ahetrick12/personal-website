import { useState } from "react";
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
					<img src={Logo} alt="logo" className="image is-64x64 m-2" />
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
						<p className="navbar-item">Home</p>
						<p className="navbar-item">About</p>
						<p className="navbar-item">Projects</p>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
