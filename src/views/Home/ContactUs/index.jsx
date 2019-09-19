import React, {useState} from "react";

import Translator from "Components/Translator";

const ContactUs = () => {
  const [contactForm, updateContactForm] = useState({});
  const submitForm = () => {
    console.log('ok');
  };
  return(
    <div className="contact-us-container">
      <div className="contact-us-max-width">
        <p className="intro"><Translator id="home.contactUs.intro"/></p>
        <p className="title"><Translator id="home.contactUs.title"/></p>
        <div className="contact-card">
          <div className="identity-input">
            <input/>
            <input/>
          </div>
          <div className="content-input"></div>
          <button className="main-button" onClick={submitForm}>
            <Translator id="home.contactUs.button"/>
          </button>
        </div>
      </div>
    </div>
  )
};

export default ContactUs