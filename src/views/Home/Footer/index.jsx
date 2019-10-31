import React, {Fragment, useState} from "react";
import {ResizeSensor} from "css-element-queries";

import {tablet} from "../../../assets/style/_regular.scss";
import {scrollToElement} from "../../../helpers";
import Translator from "Components/Translator";

const Footer = () => {
  const [screenResolution, setScreenResolution] = useState(null);
  new ResizeSensor(document.getElementsByTagName("body")[0], () => {
    setScreenResolution(window.innerWidth);
  });
  return(
    <footer className="footer-container">
      <div className="footer-content">
        <div className="left">
          {screenResolution > parseInt(tablet) ? (
            <div className="sitemap">
              <p name="home-link" onClick={scrollToElement}><Translator id="home.navbar0"/></p>
              <p name="who-we-are-link" onClick={scrollToElement}><Translator id="home.navbar1"/></p>
              <p name="what-we-do-link" onClick={scrollToElement}><Translator id="home.navbar2"/></p>
            </div>
          ) : null}
        </div>
        <div className="center">
          <p className="footer-title"><Translator id="text.email"/></p>
          <a href="mailto:admin@acuralabs.ai" className="footer-text">admin@acuralabs.ai</a>
          <img alt="Pattern" src={require("../../../assets/image/homeFooter1.svg")}/>
          {screenResolution > parseInt(tablet) ? (
            <img className="logo" alt="Logo" src={require("../../../assets/image/homeHeader9.svg")}/>
          ) : null}
        </div>
        <div className="right">
          <p className="footer-title"><Translator id="text.address"/></p>
          <p className="footer-text">Revenue Tower, 26th Floor, #132, SCBD, South Jakarta 12190</p>
          <img alt="Pattern" src={require("../../../assets/image/homeFooter1.svg")}/>
          {screenResolution <= parseInt(tablet) ? (
            <Fragment>
              <div className="sitemap-small">
                <p name="home-link" onClick={scrollToElement}><Translator id="home.navbar0"/></p>
                &bull;
                <p name="who-we-are-link" onClick={scrollToElement}><Translator id="home.navbar1"/></p>
                &bull;
                <p name="what-we-do-link" onClick={scrollToElement}><Translator id="home.navbar2"/></p>
              </div>
              <img className="logo-small" alt="Logo" src={require("../../../assets/image/homeHeader9.svg")}/>
            </Fragment>
          ) : null}
          <p className="copyright">&copy; {new Date().getFullYear()}. <Translator id="footer.copyright"/></p>
        </div>
      </div>
    </footer>
  )
};

export default Footer