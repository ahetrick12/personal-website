import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const SkillInterestTile = ({ name, icon }) => {
	return (
		<li className="column is-one-third">
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
				<h1 className="title">Skills / Interests</h1>
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
					<p className="subtitle">Skills</p>
					<ul className="columns is-multiline mx-0 is-centered is-mobile">
						<SkillInterestTile name="Java" icon={faLaptopCode} />
						<SkillInterestTile name="Python" icon={faLaptopCode} />
						<SkillInterestTile name="Git" icon={faLaptopCode} />
						<SkillInterestTile name="C#" icon={faLaptopCode} />
						<SkillInterestTile name="C" icon={faLaptopCode} />
						<SkillInterestTile name="C++" icon={faLaptopCode} />
						<SkillInterestTile
							name="HTML/CSS/JS"
							icon={faLaptopCode}
						/>
						<SkillInterestTile
							name="TypeScript"
							icon={faLaptopCode}
						/>
						<SkillInterestTile name="React" icon={faLaptopCode} />
						<SkillInterestTile name="Angular" icon={faLaptopCode} />
						<SkillInterestTile name="Bulma" icon={faLaptopCode} />
						<SkillInterestTile name="Sass" icon={faLaptopCode} />
						<SkillInterestTile name="Node" icon={faLaptopCode} />
						<SkillInterestTile name="HLSL" icon={faLaptopCode} />
						<SkillInterestTile name="Unity3D" icon={faLaptopCode} />
						<SkillInterestTile name="Blender" icon={faLaptopCode} />
						<SkillInterestTile
							name="Inkscape"
							icon={faLaptopCode}
						/>
					</ul>
				</div>
				<div className="column is-half">
					<p className="subtitle">Interests</p>
					<ul className="columns is-multiline mx-0 is-centered is-mobile">
						<SkillInterestTile
							name="Web Development"
							icon={faLaptopCode}
						/>
						<SkillInterestTile
							name="Game Development"
							icon={faLaptopCode}
						/>
						<SkillInterestTile name="3D Art" icon={faLaptopCode} />
						<SkillInterestTile name="Design" icon={faLaptopCode} />
						<SkillInterestTile
							name="Philosophy"
							icon={faLaptopCode}
						/>
						<SkillInterestTile
							name="Entrepreneurship"
							icon={faLaptopCode}
						/>
						<SkillInterestTile name="Music" icon={faLaptopCode} />
						<SkillInterestTile name="Oboe" icon={faLaptopCode} />
						<SkillInterestTile
							name="Saxophone"
							icon={faLaptopCode}
						/>
						<SkillInterestTile name="Piano" icon={faLaptopCode} />
					</ul>
				</div>
			</div>
			<hr />
		</section>
	);
};

export default SkillsInterests;
