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
						<li className="column is-one-third">Java</li>
						<li className="column is-one-third">Python</li>
						<li className="column is-one-third">Git</li>
						<li className="column is-one-third">C#</li>
						<li className="column is-one-third">C</li>
						<li className="column is-one-third">C++</li>
						<li className="column is-one-third">HTML/CSS/JS</li>
						<li className="column is-one-third">TypeScript</li>
						<li className="column is-one-third">React</li>
						<li className="column is-one-third">Angular</li>
						<li className="column is-one-third">Bulma</li>
						<li className="column is-one-third">Node</li>
						<li className="column is-one-third">HLSL</li>
						<li className="column is-one-third">Unity3D</li>
						<li className="column is-one-third">Blender</li>
						<li className="column is-one-third">Inkscape</li>
					</ul>
				</div>
				<div className="column is-half">
					<p className="subtitle">Interests</p>
					<ul className="columns is-multiline mx-0 is-centered is-mobile">
						<li className="column is-one-third">Web Development</li>
						<li className="column is-one-third">
							Game Development
						</li>
						<li className="column is-one-third">3D Art</li>
						<li className="column is-one-third">Design</li>
						<li className="column is-one-third">Philosophy</li>
						<li className="column is-one-third">
							Entrepreneurship
						</li>
						<li className="column is-one-third">
							Music Composition/Production
						</li>
						<li className="column is-one-third">Oboe</li>
						<li className="column is-one-third">Saxophone</li>
						<li className="column is-one-third">Piano</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default SkillsInterests;
