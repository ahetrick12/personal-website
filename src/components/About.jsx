import Logo from "../images/logo.png";

const About = () => {
	return (
		<section id="about">
			<div className="about-container">
				<h2 className="title" data-aos="fade-up">
					About
				</h2>
				<div className="description columns mx-0">
					<div className="column is-5 m-auto p-6">
						<p data-aos="fade-right">
							Hi there! I’m Alex Hetrick, a developer and artist
							from Pittsburgh, Pennsylvania. I’m currently a
							second-year student at the Rochester Institute of
							Technology studying software engineering.
							<br />I often go by Ventuar online, and have built a
							brand around that name as a publisher on the Unity
							Asset Store and CGTrader, designing and developing
							tools and 3D art assets for other game developers to
							use in their projects.
						</p>
					</div>
					<figure class="image p-6 m-auto column is-3 py-0">
						<img
							className="standard-radius"
							src={Logo}
							alt="Alex"
							data-aos="fade-left"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default About;
