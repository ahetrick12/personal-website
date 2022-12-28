import { React, useRef, useState } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
	const [firstNameValidity, setFirstNameValidity] = useState(false);
	const [lastNameValidity, setLastNameValidity] = useState(false);
	const [emailValidity, setEmailValidity] = useState(false);
	const [messageValidity, setmessageValidity] = useState(false);

	const formRef = useRef(null);

	useEffect(() => {
		formRef.current.addEventListener("focusin", (event) => {
			event.target.parentNode.classList.add("focused");
		});

		formRef.current.addEventListener("focusout", (event) => {
			event.target.parentNode.classList.remove("focused");
		});
	}, []);

	const validateName = (event) => {
		const name = event.target.value;
		const nameRegex = /(\S){1,30}/;

		console.log(name + ": " + nameRegex.test(name));

		if (!nameRegex.test(name)) {
			event.target.setCustomValidity("Please enter a valid name");
		} else {
			event.target.setCustomValidity("");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const emailData = {
			to_name: "Alex",
		};

		const formData = Object.fromEntries(new FormData(formRef.current));
		Object.assign(emailData, formData);

		emailjs
			.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				emailData,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					alert(
						"Message Sent, We will get back to you shortly",
						result.text
					);
				},
				(error) => {
					alert("An error occurred, Please try again", error.text);
				}
			);
	};

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
			<form
				className="section contact-container"
				data-aos="contact-box"
				data-aos-duration="2000"
				data-aos-anchor="#contact"
				data-aos-anchor-placement="top-center"
				ref={formRef}
				onSubmit={handleSubmit}
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
									placeholder="Joe"
									autoComplete="given-name"
									name="first_name"
									onChange={validateName}
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
									placeholder="Biden"
									autoComplete="family-name"
									name="last_name"
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
							placeholder="president@whitehouse.gov"
							autoComplete="email"
							name="email"
						/>
						<p className="help is-danger">This email is invalid</p>
						<span className="icon is-small is-left">
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-exclamation-triangle"></i>
						</span>
					</div>
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
							name="message"
						></textarea>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button
							type="submit"
							className="button accent-button is-rounded"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
