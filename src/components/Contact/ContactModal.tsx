import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

interface ContactModalProps {
  active: boolean;
  toggle: () => void;
}

const ContactModal = (props: ContactModalProps) => {
  const className = 'modal ' + (props.active ? 'is-active' : '');

  return (
    <div className={className}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <FontAwesomeIcon
          className="image is-128x128"
          icon={faCheckSquare}
        />
        <header className="modal-card-head">
          <p className="modal-card-title">Success!</p>
        </header>
        <section className="modal-card-body">Your email has been sent</section>
        <footer className="modal-card-foot">
          <button
            className="button accent-button is-rounded"
            onClick={() => props.toggle()}
          >
            Sweeeeeet!
          </button>
        </footer>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => props.toggle()}
      ></button>
    </div>
  );
};

export default ContactModal;
