import React, { useState, Dispatch } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface FieldValidationMessageProps {
  id: string;
  tag: 'input' | 'textarea';
  rows?: number;
  placeholder: string;
  autoComplete: string;
  name: string;
  messageText: string;
  regex: RegExp;
  validation: (
    value: string,
    regex: RegExp,
    message: string,
    setMessage: Dispatch<React.SetStateAction<string>>,
    setValid: Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setValid: Dispatch<React.SetStateAction<boolean>>;
  fieldRef: React.RefObject<any>;
  icon?: IconDefinition;
}

const FieldValidationMessage = forwardRef((props: FieldValidationMessageProps, ref) => {
  const [validationMessage, setValidationMessage] = useState('');

  const fieldRef = props.fieldRef;

  const Wrapper: 'input' | 'textarea' = props.tag;
  const classname = props.tag + ' is-rounded is-medium';

  useImperativeHandle(ref, () => ({
    validate: () => {
      props.validation(fieldRef.current?.value, props.regex, props.messageText, setValidationMessage, props.setValid);
    },

    focus: () => {
      fieldRef.current?.focus();
    },
  }));

  useEffect(() => {
    fieldRef.current?.classList.remove('is-danger');

    if (validationMessage === undefined) return;

    if (validationMessage.length > 0) {
      fieldRef.current?.classList.add('is-danger');
    }
  }, [fieldRef, validationMessage]);

  return (
    <div
      className="control has-icons-left"
      id={props.id}
    >
      <Wrapper
        className={classname}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        name={props.name}
        rows={props.rows}
        onChange={(event) =>
          props.validation(event.target.value, props.regex, props.messageText, setValidationMessage, props.setValid)
        }
        ref={fieldRef}
      />
      {props.icon !== undefined && (
        <span className="icon form-icon is-small is-left">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      )}
      <p className="help is-danger">{validationMessage}</p>
    </div>
  );
});

FieldValidationMessage.displayName = 'FieldValidationMessage';
export default FieldValidationMessage;
