import { React, useState, useRef } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import emailjs from "@emailjs/browser";
import FieldValidationMessage from "../FieldValidationMessage";

const Contact = () => {
	const formRef = useRef(null);
	const submitButtonRef = useRef(null);

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);

	const [firstNameValid, setFirstNameValid] = useState(null);
	const [lastNameValid, setLastNameValid] = useState(null);
	const [emailValid, setEmailValid] = useState(null);
	const [messageValid, setMessageValid] = useState(null);

	const validTextRegex = /(\S){1,30}/;
	const validEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

	useEffect(() => {
		formRef.current.addEventListener("focusin", (event) => {
			event.target.parentNode.classList.add("focused");
		});

		formRef.current.addEventListener("focusout", (event) => {
			event.target.parentNode.classList.remove("focused");
		});
	}, []);

	const validateInput = (value, regex, message, setMessage, setValid) => {
		let validationText = "";

		if (!regex.test(value)) {
			validationText = message;
		}

		setMessage(validationText);
		setValid(validationText === "");
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let refList = [firstNameRef, lastNameRef, emailRef, messageRef];
		let validFLagList = [
			firstNameValid,
			lastNameValid,
			emailValid,
			messageValid,
		];

		let isValid = submitValidation(refList, validFLagList);
		if (!isValid) return;

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
					formRef.current.reset();
					submitButtonRef.current.blur();

					setFirstNameValid(null);
					setLastNameValid(null);
					setEmailValid(null);
					setMessageValid(null);

					alert(
						"Message Sent, We will get back to you shortly",
						result.text
					);
				},
				(error) => {
					alert("An error occurred, Please try again", error.text);
				}
			);

		submitButtonRef.current.blur();
	};

	const submitValidation = (refs, validFlags) => {
		let isValid = true;

		refs.forEach((ref) => {
			ref.current.validate();
		});

		for (let i = 0; i < refs.length; i++) {
			const ref = refs[i];
			const validFlag = validFlags[i];

			if (!validFlag) {
				ref.current.focus();
				isValid = false;
				break;
			}
		}

		return isValid;
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
								placeholder="Joe"
								autoComplete="given-name"
								name="first_name"
								messageText="Please enter a first name"
								regex={validTextRegex}
								validation={validateInput}
								setState={setFirstNameValid}
								ref={firstNameRef}
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
								placeholder="Biden"
								autoComplete="given-name"
								name="last_name"
								messageText="Please enter a last name"
								regex={validTextRegex}
								validation={validateInput}
								setState={setLastNameValid}
								ref={lastNameRef}
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
						placeholder="president@whitehouse.gov"
						autoComplete="email"
						name="email"
						messageText="Please enter a valid email address"
						regex={validEmailRegex}
						validation={validateInput}
						setState={setEmailValid}
						ref={emailRef}
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
						placeholder="Your message here"
						autoComplete=""
						name="message"
						messageText="Please enter a message"
						regex={validTextRegex}
						validation={validateInput}
						setState={setMessageValid}
						ref={messageRef}
						icon=""
					/>
				</div>
				<div className="field">
					<div className="control">
						<button
							type="submit"
							className="button accent-button is-rounded"
							ref={submitButtonRef}
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
