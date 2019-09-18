import React, {Fragment, useState} from "react";
import {ResizeSensor} from "css-element-queries";

import {mobile} from "../../../assets/style/_regular.scss"
import Translator from "Components/Translator";

const Header = () => {
  const [isMobile, setIsMobile] = useState(null);
  const body = document.getElementsByTagName("body")[0];
  new ResizeSensor(body, () => {
    setIsMobile(body.clientWidth <= parseInt(mobile));
  });
  return(
    <div className="header-container">
      <nav className="navigation-bar">
        <span className="navigation-bar-extend logo-container-extend"/>
        <div className="navigation-bar-main">
          <span className="logo-container"/>
          <div className="navigation-bar-item">
            {isMobile ? (
              <img className="brand-logo" alt="Logo" src={require("../../../assets/image/homeHeader6.svg")}/>
            ) : (
              <img className="brand-logo" alt="Logo" src={require("../../../assets/image/homeHeader3.svg")}/>
            )}
            <div className="right">
              {isMobile ? (
                <Fragment>
                  <button className="icon-button">
                    <img alt="Icon" src={require("../../../assets/image/homeHeader7.svg")}/>
                  </button>
                  <button className="icon-button">
                    <div className="hamburger-menu">
                      <span/>
                      <span/>
                      <span/>
                    </div>
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <p><Translator id="home.navbar1"/></p>
                  <p><Translator id="home.navbar2"/></p>
                  <button className="contact-button">
                    <Translator id="button.contact"/>
                  </button>
                </Fragment>
              )}
            </div>
          </div>
        </div>
        <span className="navigation-bar-extend"/>
      </nav>
      <div className="header-content">
        <div className="header-content-main">
          <div className="header-content-text">
            <p><Translator id="home.paas"/></p>
            <p><Translator id="home.transform"/></p>
            <p><Translator id="home.desc"/></p>
            <div className="button-container">
              <button>
                <Translator id="button.learn"/>
              </button>
              <img alt="Illustration" src={require("../../../assets/image/homeHeader5.svg")}/>
            </div>
          </div>
          <img alt="Illustration" className="header-illustration" src={require("../../../assets/image/homeHeader1.svg")}/>
        </div>
      </div>
    </div>
  )
};

export default Header