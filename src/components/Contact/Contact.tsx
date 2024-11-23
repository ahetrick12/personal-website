import React, { useState, useRef, RefObject, FormEvent } from 'react';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FieldValidationMessage, ContactModal } from './';

type HTMLFormField = HTMLInputElement | HTMLTextAreaElement;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const [modalActive, setModalActive] = useState(false);

  const validTextRegex = /(\S){1,30}/;
  const validEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  useEffect(() => {
    formRef.current?.addEventListener('focusin', (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target.parentElement) return;

      target.parentElement.classList.add('focused');
    });

    formRef.current?.addEventListener('focusout', (event) => {
      const target = event.target as HTMLElement;
      if (!target.parentElement) return;

      target.parentElement.classList.remove('focused');
    });
  }, []);

  const validateInput = (
    value: string,
    regex: RegExp,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setValid: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    let validationText = '';

    if (!regex.test(value)) {
      validationText = message;
    }

    setMessage(validationText);
    setValid(validationText === '');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const refList: RefObject<HTMLFormField>[] = [firstNameRef, lastNameRef, emailRef, messageRef];
    const validFLagList: boolean[] = [firstNameValid, lastNameValid, emailValid, messageValid];

    const isValid = submitValidation(refList, validFLagList);
    if (!isValid) return;

    // Send email
    submitButtonRef.current?.classList.add('is-loading');

    const emailData = {
      to_name: 'Alex',
    };

    const formData = Object.fromEntries(new FormData(formRef.current!));
    Object.assign(emailData, formData);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID ?? '',
        import.meta.env.VITE_TEMPLATE_ID ?? '',
        emailData,
        import.meta.env.VITE_PUBLIC_KEY ?? ''
      )
      .then(
        () => {
          formRef.current?.reset();
          submitButtonRef.current?.blur();
          submitButtonRef.current?.classList.remove('is-loading');

          setFirstNameValid(false);
          setLastNameValid(false);
          setEmailValid(false);
          setMessageValid(false);

          toggleModal();
        },
        (error: EmailJSResponseStatus) => {
          alert('An error occurred, Please try again\n' + error);
        }
      );

    submitButtonRef.current?.blur();
  };

  const submitValidation = (refs: RefObject<HTMLFormField>[], validFlags: boolean[]) => {
    let isValid = true;

    // refs.forEach((ref) => {
    //    ref.current.validate();
    // });

    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];
      const validFlag = validFlags[i];

      if (!validFlag) {
        ref.current?.focus();
        isValid = false;
        break;
      }
    }

    return isValid;
  };

  const toggleModal = () => {
    const html = document.querySelector('html');
    if (!html) return;

    html.style.overflow = !modalActive ? 'hidden' : 'auto';

    setModalActive(!modalActive);
  };

  return (
    <div
      id="contact"
      className="section"
    >
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
        onSubmit={(e) => handleSubmit(e)}
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
                setValid={setFirstNameValid}
                fieldRef={firstNameRef}
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
                setValid={setLastNameValid}
                fieldRef={lastNameRef}
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
            setValid={setEmailValid}
            fieldRef={emailRef}
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
            setValid={setMessageValid}
            fieldRef={messageRef}
            icon={undefined}
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
      <ContactModal
        active={modalActive}
        toggle={toggleModal}
      />
    </div>
  );
};

export default Contact;
