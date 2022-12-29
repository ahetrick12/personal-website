import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FieldValidationMessage = (props) => {
	const [validationMessage, setValidationMessage] = useState("");

	let Wrapper = props.tag;
	let outputName = props.name.replace("_", " ");
	let classname = props.tag + " is-rounded";

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
			/>
			<span className="icon is-small is-left">
				<FontAwesomeIcon icon={props.icon} />
			</span>
			<p className="help is-danger">{validationMessage}</p>
		</div>
	);
};

export default FieldValidationMessage;
