import React from "react";

import Translator from "Components/Translator";

const AboutUs = () => {
  return(
    <div className="about-us-container">
      <div className="who-are-we">
        <div className="left">
          <p><Translator id="home.whoWeAre.header"/></p>
          <p><Translator id="home.whoWeAre.content[0]"/></p>
          <p><Translator id="home.whoWeAre.content[1]"/></p>
          <p><Translator id="home.whoWeAre.content[2]"/></p>
          <p><Translator id="home.whoWeAre.content[3]"/></p>
        </div>
        <div className="right">
          <div className="each-point">
            <p><Translator id="home.whoWeAre.point1.header"/></p>
            <p><Translator id="home.whoWeAre.point1.content"/></p>
          </div>
          <div className="each-point">
            <p><Translator id="home.whoWeAre.point2.header"/></p>
            <p><Translator id="home.whoWeAre.point2.content"/></p>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <p className="declaration"><Translator id="home.aboutUs.intro"/></p>
        <p className="declaration"><Translator id="home.aboutUs.title"/></p>
        <p className="declaration"><Translator id="home.aboutUs.subtitle"/></p>
        <div className="pipeline-works">
          <div className="each-item">
            <span className="numeric">
              <p>1</p>
            </span>
            <p className="item-header"><Translator id="home.aboutUs.point1.header"/></p>
            <p className="item-content"><Translator id="home.aboutUs.point1.content"/></p>
          </div>
          <div className="each-item">
            <span className="numeric">
              <p>2</p>
            </span>
            <p className="item-header"><Translator id="home.aboutUs.point2.header"/></p>
            <p className="item-content"><Translator id="home.aboutUs.point2.content"/></p>
          </div>
          <div className="each-item">
            <span className="numeric">
              <p>3</p>
            </span>
            <p className="item-header"><Translator id="home.aboutUs.point3.header"/></p>
            <p className="item-content"><Translator id="home.aboutUs.point3.content"/></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutUs