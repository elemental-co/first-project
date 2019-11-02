import React, {useState} from "react";
import {ResizeSensor} from "css-element-queries";

import Translator from "Components/Translator";
import {mobile, tablet} from "../../../assets/style/_regular.scss";
import AlternativeDataV2 from "./AlternativeDataV2";
import HowItWorks from "./HowItWorks";

const CreditScoring = () => {
  const whoWeAre = {
    top: ["home.whoWeAre.content[0]", "home.whoWeAre.content[1]", "home.whoWeAre.content[2]", "home.whoWeAre.content[3]"],
    bottom: [
      {header: "home.whoWeAre.point1.header", icon: "alt-data-1.svg", content: "home.whoWeAre.point1.content"},
      {header: "home.whoWeAre.point2.header", icon: "alt-data-2.svg", content: "home.whoWeAre.point2.content"},
      {header: "home.whoWeAre.point3.header", icon: "alt-data-3.svg", content: "home.whoWeAre.point3.content"}
    ]
  };
  const [screenResolution, setScreenResolution] = useState(null);
  new ResizeSensor(document.getElementsByTagName("html")[0], () => {
    setScreenResolution(window.innerWidth);
  });
  return(
    <div className="about-us-container" id="home-about-us">
      <div className="who-are-we">
        <div className="top">
          <p><Translator id="home.whoWeAre.header"/></p>
          {whoWeAre.top.map((each, i) => <p key={i}><Translator id={each}/></p>)}
        </div>
        <div className="bottom">
          {whoWeAre.bottom.map((each, i) => (
            <div className="each-point" key={i}>
              <img alt="Icon" src={require(`../../../assets/image/${each.icon}`)}/>
              <p><Translator id={each.header}/></p>
              <p><Translator id={each.content}/></p>
            </div>
          ))}
        </div>
      </div>
      <div className="what-we-do" id="home-what-we-do">
        {screenResolution > parseInt(mobile)
          ? <img src={require("../../../assets/image/homeAbout1.svg")} alt="Background"/>
          : <img src={require("../../../assets/image/homeAbout2.svg")} alt="Background"/>}
        <div className="header">
          <p className="title"><Translator id="home.creditScoring.whatWeDo.header"/></p>
          <div className="subtitle">
            {screenResolution > parseInt(tablet) ? Translator("home.creditScoring.whatWeDo.subtitle").map((each, i) => (
              <p key={i}>{each}</p>
            )) : (
              <p>{Translator("home.creditScoring.whatWeDo.subtitle").join(" ")}</p>
            )}
          </div>
        </div>
        <div className="content">
          <div className="content-card">
            <p className="header"><Translator id="home.creditScoring.whatWeDo.point1.header"/></p>
            <p className="content"><Translator id="home.creditScoring.whatWeDo.point1.content"/></p>
          </div>
          <div className="content-card">
            <p className="header"><Translator id="home.creditScoring.whatWeDo.point2.header"/></p>
            <p className="content"><Translator id="home.creditScoring.whatWeDo.point2.content"/></p>
          </div>
        </div>
      </div>
      <AlternativeDataV2/>
      <HowItWorks/>
      <div className="machine-learning">
        <div className="left">
          <p className="declaration"><Translator id="home.creditScoring.intro"/></p>
          <p className="declaration"><Translator id="home.creditScoring.title"/></p>
          <p className="declaration"><Translator id="home.creditScoring.subtitle"/></p>
        </div>
        <div className="right">
          {screenResolution <= parseInt(tablet) && screenResolution > parseInt(mobile) ? (
            <img alt="Process" src={require("../../../assets/image/homeAbout4.svg")}/>
          ) : screenResolution > parseInt(tablet) ? (
            <img alt="Process" src={require("../../../assets/image/homeAbout3.svg")}/>
          ) : (
            <img alt="Process" src={require("../../../assets/image/homeAbout5.svg")}/>
          )}
        </div>
      </div>
    </div>
  )
};

export default CreditScoring