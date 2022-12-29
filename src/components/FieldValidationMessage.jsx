import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useRef } from "react";

const FieldValidationMessage = (props) => {
	const [validationMessage, setValidationMessage] = useState(undefined);

	let fieldRef = useRef(props.tag + " is-rounded");

	let Wrapper = props.tag;
	let outputName = props.name.replace("_", " ");
	let classname = props.tag + " is-rounded";

	useEffect(() => {
		fieldRef.current.classList.remove("is-danger");

		if (validationMessage === undefined) return;

		if (validationMessage.length > 0) {
			fieldRef.current.classList.add("is-danger");
		}
	}, [validationMessage]);

	return (
		<div className="control has-icons-left" id={props.id}>
			<Wrapper
				className={classname}
				type={props.type}
				placeholder={props.placeholder}
				autoComplete={props.autoComplete}
				name={props.name}
				rows={props.rows}
				onChange={(event) =>
					props.validation(
						event,
						this,
						outputName,
						setValidationMessage
					)
				}
				ref={fieldRef}
			/>
			<span className="icon is-small is-left">
				<FontAwesomeIcon icon={props.icon} />
			</span>
			<p className="help is-danger">{validationMessage}</p>
		</div>
	);
};

export default FieldValidationMessage;
