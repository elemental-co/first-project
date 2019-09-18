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
    </div>
  )
};

export default AboutUs