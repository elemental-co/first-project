import React from "react";

import Translator from "../../../components/Translator";

const ContactForm = () => {
  return(
    <div className="contact-form-container">
      <div className="header">
        <p><Translator id="home.contactUs.intro"/></p>
        <p><Translator id="home.contactUs.title"/></p>
      </div>
      <div className="contact-form">
        <div className="contact-form-top">
          <input placeholder={Translator("home.contactUs.name")}/>
          <input placeholder={Translator("home.contactUs.email")}/>
        </div>
        <div className="contact-form-bottom">
          <input placeholder={Translator("home.contactUs.message")}/>
          <button><Translator id="home.contactUs.button"/></button>
        </div>
      </div>
    </div>
  )
};

export default ContactForm