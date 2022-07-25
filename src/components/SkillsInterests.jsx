import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const SkillInterestTile = ({ name, icon, aosType, index }) => {
	return (
		<li
			className="column is-one-third"
			data-aos={aosType}
			data-aos-duration="500"
			data-aos-delay={index * 100}
			data-aos-anchor="#skillsinterests"
			data-aos-anchor-placement="top-center"
		>
			<div className="box">
				<FontAwesomeIcon
					className="image is-32x32"
					icon={icon}
				></FontAwesomeIcon>
				<span>{name}</span>
			</div>
		</li>
	);
};

const SkillsInterests = () => {
	return (
		<section id="skillsinterests" className="section is-medium">
			<div className="is-centered">
				<h1
					className="title"
					data-aos="title-appear"
					data-aos-duration="1500"
					data-aos-anchor="#skillsinterests"
					data-aos-anchor-placement="top-center"
				>
					Skills / Interests
				</h1>
				<div class="field">
					<input
						id="switchRoundedDefault"
						type="checkbox"
						name="switchRoundedDefault"
						class="switch is-rounded"
						checked="checked"
					></input>
				</div>
			</div>
			<div className="columns">
				<div className="column is-half">
					<p
						className="subtitle"
						data-aos="fade-right"
						data-aos-duration="1800"
						data-aos-anchor="#skillsinterests"
						data-aos-anchor-placement="top-center"
					>
						Skills
					</p>
					<ul className="columns is-multiline mx-0 is-centered is-mobile">
						<SkillInterestTile
							name="Java"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={0}
						/>
						<SkillInterestTile
							name="Python"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={1}
						/>
						<SkillInterestTile
							name="Git"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={2}
						/>
						<SkillInterestTile
							name="C#"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={3}
						/>
						<SkillInterestTile
							name="C"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={4}
						/>
						<SkillInterestTile
							name="C++"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={5}
						/>
						<SkillInterestTile
							name="HTML/CSS/JS"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={6}
						/>
						<SkillInterestTile
							name="TypeScript"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={7}
						/>
						<SkillInterestTile
							name="React"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={8}
						/>
						<SkillInterestTile
							name="Angular"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={9}
						/>
						<SkillInterestTile
							name="Bulma"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={10}
						/>
						<SkillInterestTile
							name="Sass"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={11}
						/>
						<SkillInterestTile
							name="Node"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={12}
						/>
						<SkillInterestTile
							name="HLSL"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={13}
						/>
						<SkillInterestTile
							name="Unity3D"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={14}
						/>
						<SkillInterestTile
							name="Blender"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={15}
						/>
						<SkillInterestTile
							name="Inkscape"
							icon={faLaptopCode}
							aosType="fade-up-right"
							index={16}
						/>
					</ul>
				</div>
				<div className="column is-half">
					<p
						className="subtitle"
						data-aos="fade-left"
						data-aos-duration="1800"
						data-aos-anchor="#skillsinterests"
						data-aos-anchor-placement="top-center"
					>
						Interests
					</p>
					<ul className="columns is-multiline mx-0 is-centered is-mobile">
						<SkillInterestTile
							name="Web Development"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={0}
						/>
						<SkillInterestTile
							name="Game Development"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={1}
						/>
						<SkillInterestTile
							name="3D Art"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={2}
						/>
						<SkillInterestTile
							name="Design"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={3}
						/>
						<SkillInterestTile
							name="Philosophy"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={4}
						/>
						<SkillInterestTile
							name="Entrepreneurship"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={5}
						/>
						<SkillInterestTile
							name="Music"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={6}
						/>
						<SkillInterestTile
							name="Oboe"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={7}
						/>
						<SkillInterestTile
							name="Saxophone"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={8}
						/>
						<SkillInterestTile
							name="Piano"
							icon={faLaptopCode}
							aosType="fade-up-left"
							index={9}
						/>
					</ul>
				</div>
			</div>
			<hr
				className="primary"
				data-aos="lengthen"
				data-aos-duration="1300"
			/>
		</section>
	);
};

export default SkillsInterests;
