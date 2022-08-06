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
				className="title"
				data-aos="title-appear"
				data-aos-duration="1500"
				data-aos-anchor="#contact"
				data-aos-anchor-placement="top-bottom"
			>
				Contact
			</h1>
			<div className="section contact-container" ref={formRef}>
				{/* Name */}
				<div className="field is-horizontal">
					<div className="field-body">
						<div className="field">
							<label class="label">First Name</label>
							<div class="control has-icons-left" id="first-name">
								<input
									class="input is-rounded"
									type="text"
									placeholder="John"
									autocomplete="given-name"
								/>
								<span class="icon is-small is-left">
									<FontAwesomeIcon icon={faUser} />
								</span>
							</div>
						</div>
						<div className="field">
							<label class="label">Last Name</label>
							<div class="control has-icons-left" id="last-name">
								<input
									class="input is-rounded"
									type="text"
									placeholder="Smith"
									autocomplete="family-name"
								/>
								<span class="icon is-small is-left">
									<FontAwesomeIcon icon={faUser} />
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* Email */}
				<div class="field">
					<label class="label">Email</label>
					<div
						class="control has-icons-left has-icons-right"
						id="email"
					>
						<input
							class="input is-rounded is-danger"
							type="email"
							autocomplete="email"
							placeholder="hello@gmail.com"
						/>
						<span class="icon is-small is-left">
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle"></i>
						</span>
					</div>
					<p class="help is-danger">This email is invalid</p>
				</div>
				{/* Message */}
				<div class="field">
					<label class="label">Message</label>
					<div class="control" id="message">
						<textarea
							class="textarea is-rounded"
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
