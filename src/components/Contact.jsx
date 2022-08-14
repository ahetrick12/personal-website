import { React, useRef } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Contact = () => {
	const formRef = useRef(null);

	useEffect(() => {
		console.log("set");

		formRef.current.addEventListener("focusin", (event) => {
			event.target.parentNode.classList.add("focused");
		});

		formRef.current.addEventListener("focusout", (event) => {
			event.target.parentNode.classList.remove("focused");
		});
	}, []);

	return (
		<div id="contact" className="section">
			<h1
				className="title left"
				data-aos="title-appear"
				data-aos-duration="1500"
				data-aos-anchor="#contact"
				data-aos-anchor-placement="top-center"
			>
				Contact
			</h1>
			<p
				className="subtitle left is-4"
				data-aos="fade-right"
				data-aos-duration="1800"
				data-aos-delay="200"
				data-aos-anchor="#contact"
				data-aos-anchor-placement="top-center"
			>
				Get in touch with me!
			</p>
			<div
				className="section contact-container"
				data-aos="contact-box"
				data-aos-duration="2000"
				data-aos-anchor="#contact"
				data-aos-anchor-placement="top-center"
				ref={formRef}
			>
				{/* Name */}
				<div className="field is-horizontal">
					<div className="field-body">
						<div
							className="field"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-delay="300"
							data-aos-anchor="#contact"
							data-aos-anchor-placement="top-center"
						>
							<label className="label">First Name</label>
							<div
								className="control has-icons-left"
								id="first-name"
							>
								<input
									className="input is-rounded"
									type="text"
									placeholder="John"
									autoComplete="given-name"
								/>
								<span className="icon is-small is-left">
									<FontAwesomeIcon icon={faUser} />
								</span>
							</div>
						</div>
						<div
							className="field"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="600"
							data-aos-anchor="#contact"
							data-aos-anchor-placement="top-center"
						>
							<label className="label">Last Name</label>
							<div
								className="control has-icons-left"
								id="last-name"
							>
								<input
									className="input is-rounded"
									type="text"
									placeholder="Smith"
									autoComplete="family-name"
								/>
								<span className="icon is-small is-left">
									<FontAwesomeIcon icon={faUser} />
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* Email */}
				<div
					className="field"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="900"
					data-aos-anchor="#contact"
				>
					<label className="label">Email</label>
					<div
						className="control has-icons-left has-icons-right"
						id="email"
					>
						<input
							className="input is-rounded is-danger"
							type="email"
							autoComplete="email"
							placeholder="hello@gmail.com"
						/>
						<span className="icon is-small is-left">
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-exclamation-triangle"></i>
						</span>
					</div>
					<p className="help is-danger">This email is invalid</p>
				</div>
				{/* Message */}
				<div
					className="field"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="1200"
					data-aos-anchor="#contact"
				>
					<label className="label">Message</label>
					<div className="control" id="message">
						<textarea
							className="textarea is-rounded"
							rows="10"
							placeholder="Your message here"
						></textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
