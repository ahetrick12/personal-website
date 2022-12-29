import { React, useRef, useState } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

import emailjs from "@emailjs/browser";
import FieldValidationMessage from "../FieldValidationMessage";

const Contact = () => {
	const formRef = useRef(null);

	const validTextRegex = /(\S){1,30}/;

	useEffect(() => {
		formRef.current.addEventListener("focusin", (event) => {
			event.target.parentNode.classList.add("focused");
		});

		formRef.current.addEventListener("focusout", (event) => {
			event.target.parentNode.classList.remove("focused");
		});
	}, []);

	const validateTextInput = (event, obj, prop, setStateFunction) => {
		const firstName = event.target.value;
		let validationText = "";

		if (!validTextRegex.test(firstName)) {
			validationText = "Please enter a " + prop;
		}

		setStateFunction(validationText);
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
							<FieldValidationMessage
								id="first-name"
								tag="input"
								type="text"
								placeholder="Joe"
								autoComplete="given-name"
								name="first_name"
								validation={validateTextInput}
								icon={faUser}
							/>
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
							<FieldValidationMessage
								id="last-name"
								tag="input"
								type="text"
								placeholder="Biden"
								autoComplete="given-name"
								name="last_name"
								validation={validateTextInput}
								icon={faUser}
							/>
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
					<FieldValidationMessage
						id="email"
						tag="input"
						type="email"
						placeholder="president@whitehouse.gov"
						autoComplete="email"
						name="email"
						validation={validateTextInput}
						icon={faEnvelope}
					/>
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
					<FieldValidationMessage
						id="message"
						tag="textarea"
						rows={10}
						type="text"
						placeholder="Your message here"
						autoComplete=""
						name="message"
						validation={validateTextInput}
						icon=""
					/>
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
