import SocialLinks from "../SocialLinks";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="content has-text-centered">
				<hr
					className="primary"
					data-aos="lengthen"
					data-aos-duration="1300"
				/>
				<div className="columns">
					<div className="column is-one-quarter" />
					<p className="column is-half">
						Powered using{" "}
						<a
							href="https://bulma.io"
							target="_blank"
							rel="noreferrer"
						>
							Bulma
						</a>{" "}
						and{" "}
						<a
							href="https://reactjs.org"
							target="_blank"
							rel="noreferrer"
						>
							React
						</a>
						.
						<br />
						Designed and developed by Alex Hetrick | © 2022 <br />
						All Rights Reserved.
					</p>
					<div className="column is-one-quarter links">
						<SocialLinks />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
