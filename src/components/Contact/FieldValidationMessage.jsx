import { React, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

const FieldValidationMessage = forwardRef((props, ref) => {
  const [validationMessage, setValidationMessage] = useState(undefined);

  const fieldRef = useRef(null);

  let Wrapper = props.tag;
  let classname = props.tag + ' is-rounded is-medium';

  useImperativeHandle(ref, () => ({
    validate: () => {
      props.validation(fieldRef.current.value, props.regex, props.messageText, setValidationMessage, props.setState);
    },

    focus: () => {
      fieldRef.current.focus();
    },
  }));

  useEffect(() => {
    fieldRef.current.classList.remove('is-danger');

    if (validationMessage === undefined) return;

    if (validationMessage.length > 0) {
      fieldRef.current.classList.add('is-danger');
    }
  }, [fieldRef, validationMessage]);

  return (
    <div
      className="control has-icons-left"
      id={props.id}
    >
      <Wrapper
        className={classname}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        name={props.name}
        rows={props.rows}
        onChange={(event) =>
          props.validation(event.target.value, props.regex, props.messageText, setValidationMessage, props.setState)
        }
        ref={fieldRef}
      />
      {props.icon !== '' && (
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      )}
      <p className="help is-danger">{validationMessage}</p>
    </div>
  );
});

export default FieldValidationMessage;
