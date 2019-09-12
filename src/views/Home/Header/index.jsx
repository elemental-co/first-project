import React from "react";

import Translator from "Components/Translator";

const Header = () => {
  return(
    <div className="header-container">
      <nav className="navigation-bar">
        <span className="navigation-bar-extend logo-container-extend"/>
        <div className="navigation-bar-main">
          <span className="logo-container"/>
          <div className="navigation-bar-item">
            <img alt="Logo" src={require("../../../assets/image/homeHeader3.svg")}/>
            <div className="right">
              <p><Translator id="home.navbar1"/></p>
              <p><Translator id="home.navbar2"/></p>
              <button>
                <Translator id="button.contact"/>
              </button>
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
            <button>
              <Translator id="button.learn"/>
            </button>
            <img alt="Illustration" src={require("../../../assets/image/homeHeader5.svg")}/>
          </div>
          <img alt="Illustration" className="header-illustration" src={require("../../../assets/image/homeHeader1.svg")}/>
        </div>
      </div>
    </div>
  )
};

export default Header