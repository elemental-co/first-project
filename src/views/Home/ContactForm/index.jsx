import React, {useState} from "react";

import Translator from "../../../components/Translator";
import {postContactForm} from "./fetch";

const ContactForm = () => {
  const [isLoading, setLoadingStatus] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullname: {value: "", isValid: true},
    email: {value: "", isValid: true},
    content: {value: "", isValid: true}
  });
  const onChangeHandler = ({target}) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const elementName = target.getAttribute("name");
    switch(elementName){
      case "email":
        setContactForm({...contactForm, [elementName]: {value: target.value, isValid: emailRegex.test(target.value)}});
        break;
      case "fullname":
      case "content":
        setContactForm({...contactForm, [elementName]: {...contactForm[elementName], value: target.value}});
        break;
      default:
        return null;
    }
  };
  const submitContactForm = () => {
    const checkValidity = Object.values(contactForm).filter(each => {
      return each.value !== "" && each.isValid
    }).length === Object.values(contactForm).length;
    if(checkValidity){
      setLoadingStatus(!isLoading);
      postContactForm({
        fullname: contactForm.fullname.value,
        email: contactForm.email.value,
        content: contactForm.content.value
      }).then(() => setLoadingStatus(!isLoading));
    }
  };
  return(
    <div className="contact-form-container" id="home-contact-us">
      <div className="header">
        <p><Translator id="home.contactUs.intro"/></p>
        <p><Translator id="home.contactUs.title"/></p>
      </div>
      <div className="contact-form">
        <div className="contact-form-top">
          <input name="fullname" onChange={onChangeHandler} placeholder={Translator("home.contactUs.name")}/>
          <input name="email" onChange={onChangeHandler} placeholder={Translator("home.contactUs.email")}/>
        </div>
        <div className="contact-form-bottom">
          <input name="content" onChange={onChangeHandler} placeholder={Translator("home.contactUs.message")}/>
          <button disabled={isLoading} onClick={submitContactForm}>
            <Translator id="home.contactUs.button"/>
          </button>
        </div>
      </div>
    </div>
  )
};

export default ContactForm