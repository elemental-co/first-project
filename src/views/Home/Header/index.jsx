import React, {Fragment, useState} from "react";
import {ResizeSensor} from "css-element-queries";

import {tablet, desktopLg} from "../../../assets/style/_regular.scss";
import {scrollToElement} from "../../../helpers";
import Translator from "Components/Translator";

const Header = () => {
  const [screenResolution, setScreenResolution] = useState(null);
  const [contextMenuState, setContextMenuState] = useState(false);
  new ResizeSensor(document.getElementsByTagName("body")[0], () => {
    setScreenResolution(window.innerWidth);
  });
  const toggleContextMenu = () => {
    return new Promise(resolve => {
      if(contextMenuState){
        document.getElementsByTagName("html")[0].removeAttribute("style");
      }else{
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
      }
      setContextMenuState(!contextMenuState);
      setTimeout(() => resolve(), 300);
    });
  };
  const contextClassname = contextMenuState ? {style: {opacity: 1, visibility: "visible"}} : {};
  return(
    <div className="header-container">
      <nav className="navigation-bar">
        <span className="navigation-bar-extend logo-container-extend"/>
        <div className="navigation-bar-main">
          <span className="logo-container"/>
          <div className="navigation-bar-item">
            {screenResolution <= parseInt(tablet) ? (
              <img className="brand-logo" alt="Logo" src={require("../../../assets/image/homeHeader6.svg")}/>
            ) : (
              <img className="brand-logo" alt="Logo" src={require("../../../assets/image/homeHeader3.svg")}/>
            )}
            <div className="right">
              {screenResolution <= parseInt(tablet) ? (
                <Fragment>
                  <button name="contact-us-link" onClick={scrollToElement} className="icon-button">
                    <img alt="Icon" src={require("../../../assets/image/homeHeader7.svg")}/>
                  </button>
                  <button className="icon-button" onClick={toggleContextMenu}>
                    <div className={contextMenuState ? "hamburger-menu context-active" : "hamburger-menu"}>
                      <span/>
                      <span/>
                      <span/>
                    </div>
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <p name="who-we-are-link" onClick={scrollToElement}><Translator id="home.navbar1"/></p>
                  <p name="what-we-do-link" onClick={scrollToElement}><Translator id="home.navbar2"/></p>
                  <button name="contact-us-link" onClick={scrollToElement} className="contact-button">
                    <Translator id="button.contact"/>
                  </button>
                </Fragment>
              )}
            </div>
          </div>
        </div>
        <span className="navigation-bar-extend"/>
      </nav>
      {screenResolution <= parseInt(tablet)
        ? (
          <div className="mobile-context-menu" {...contextClassname}>
            <div className="context-content">
              <p onClick={() => toggleContextMenu().then(() => scrollToElement("who-we-are-link"))}>
                <Translator id="home.contextMenu.whoWeAre"/>
              </p>
              <hr/>
              <p onClick={() => toggleContextMenu().then(() => scrollToElement("what-we-do-link"))}>
                <Translator id="home.contextMenu.whatWeDo"/>
              </p>
            </div>
            <span className="foreground-layer" onClick={toggleContextMenu}/>
          </div>
        ) : null}
      <div className="header-content">
        <div className="header-content-main">
          <div className="header-content-text">
            <p><Translator id="home.paas"/></p>
            <p><Translator id="home.transform"/></p>
            <p><Translator id="home.desc"/></p>
            <div className="button-container">
              <button name="who-we-are-link" onClick={scrollToElement}>
                <Translator id="button.learn"/>
              </button>
              <img alt="Illustration" src={require("../../../assets/image/homeHeader5.svg")}/>
            </div>
          </div>
          {screenResolution >= parseInt(desktopLg)
            ? <img alt="Illustration" className="header-illustration" src={require("../../../assets/image/homeHeader1.svg")}/>
            : null}
        </div>
      </div>
    </div>
  )
};

export default Header