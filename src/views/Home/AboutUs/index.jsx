import React, {useState} from "react";
import {ResizeSensor} from "css-element-queries";

import {mobile, tablet} from "../../../assets/style/_regular.scss";
import Translator from "Components/Translator";
import AlternativeData from "./AlternativeData";

const AboutUs = () => {
  const [screenResolution, setScreenResolution] = useState(null);
  new ResizeSensor(document.getElementsByTagName("html")[0], () => {
    setScreenResolution(window.innerWidth);
  });
  const howItWorks = [
    {header: "home.aboutUs.point1.header", content: "home.aboutUs.point1.content"},
    {header: "home.aboutUs.point2.header", content: "home.aboutUs.point2.content"},
    {header: "home.aboutUs.point3.header", content: "home.aboutUs.point3.content"}
  ];
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
      <div className="what-we-do">
        {screenResolution > parseInt(mobile)
          ? <img src={require("../../../assets/image/homeAbout1.svg")} alt="Background"/>
          : <img src={require("../../../assets/image/homeAbout2.svg")} alt="Background"/>}
        <div className="header">
          <p className="title"><Translator id="home.aboutUs.whatWeDo.header"/></p>
          <div className="subtitle">
            {screenResolution > parseInt(tablet) ? Translator("home.aboutUs.whatWeDo.subtitle").map((each, i) => (
              <p key={i}>{each}</p>
            )) : (
              <p>{Translator("home.aboutUs.whatWeDo.subtitle").join(" ")}</p>
            )}
          </div>
        </div>
        <div className="content">
          <div className="content-card">
            <p className="header"><Translator id="home.aboutUs.whatWeDo.point1.header"/></p>
            <p className="content"><Translator id="home.aboutUs.whatWeDo.point1.content"/></p>
          </div>
          <div className="content-card">
            <p className="header"><Translator id="home.aboutUs.whatWeDo.point2.header"/></p>
            <p className="content"><Translator id="home.aboutUs.whatWeDo.point2.content"/></p>
          </div>
        </div>
      </div>
      <AlternativeData/>
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
    </div>
  )
};

export default AboutUs