import React, {Fragment, useState} from "react";
import {ResizeSensor} from "css-element-queries";

import {tablet} from "../../../assets/style/_regular.scss";
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
          <p className="footer-title"><Translator id="text.phone"/></p>
          <p className="footer-text">+62 812 0000 0000</p>
          <img alt="Pattern" src={require("../../../assets/image/homeFooter1.svg")}/>
          {screenResolution > parseInt(tablet) ? (
            <div className="sitemap">
              <p><Translator id="home.home"/></p>
              <p><Translator id="home.navbar1"/></p>
              <p><Translator id="home.navbar2"/></p>
            </div>
          ) : null}
        </div>
        <div className="center">
          <p className="footer-title"><Translator id="text.email"/></p>
          <p className="footer-text">hello@acuralabs.ai</p>
          <img alt="Pattern" src={require("../../../assets/image/homeFooter1.svg")}/>
          {screenResolution > parseInt(tablet) ? (
            <img className="logo" alt="Logo" src={require("../../../assets/image/homeHeader3.svg")}/>
          ) : null}
        </div>
        <div className="right">
          <p className="footer-title"><Translator id="text.address"/></p>
          <p className="footer-text">Revenue Tower, 26th Floor, #132, SCBD, South Jakarta 12190</p>
          <img alt="Pattern" src={require("../../../assets/image/homeFooter1.svg")}/>
          {screenResolution <= parseInt(tablet) ? (
            <Fragment>
              <div className="sitemap-small">
                <p><Translator id="home.home"/></p>
                &bull;
                <p><Translator id="home.navbar1"/></p>
                &bull;
                <p><Translator id="home.navbar2"/></p>
              </div>
              <img className="logo-small" alt="Logo" src={require("../../../assets/image/homeHeader3.svg")}/>
            </Fragment>
          ) : null}
          <p className="copyright">&copy; {new Date().getFullYear()}. <Translator id="footer.copyright"/></p>
        </div>
      </div>
    </footer>
  )
};

export default Footer