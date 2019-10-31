import React from "react";

import Translator from "../../../../components/Translator";

const HowItWorks = () => {
  const howItWorks = [
    {header: "home.aboutUs.point1.header", content: "home.aboutUs.point1.content"},
    {header: "home.aboutUs.point2.header", content: "home.aboutUs.point2.content"},
    {header: "home.aboutUs.point3.header", content: "home.aboutUs.point3.content"}
  ];
  return(
    <div className="how-it-works">
      <p className="declaration"><Translator id="home.aboutUs.intro"/></p>
      <p className="declaration"><Translator id="home.aboutUs.title"/></p>
      <p className="declaration"><Translator id="home.aboutUs.subtitle"/></p>
      <div className="pipeline-works">
        {howItWorks.map((each, i) => (
          <div className="each-item" key={i}>
            <div className="numeric-container">
              <hr/>
              <span className="numeric">
                  <p>{i + 1}</p>
                </span>
            </div>
            <div className="text-container">
              <p className="item-header"><Translator id={each.header}/></p>
              <p className="item-content"><Translator id={each.content}/></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default HowItWorks