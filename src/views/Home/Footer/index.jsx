import React from "react";

import Translator from "Components/Translator";

const Footer = () => {
  return(
    <footer className="footer-container">
      <div className="footer-content">
        <div className="left">
          <p className="footer-title"><Translator id="text.phone"/></p>
          <p className="footer-text">+62 812 0000 0000</p>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </footer>
  )
};

export default Footer