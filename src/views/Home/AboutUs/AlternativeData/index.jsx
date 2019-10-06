import React, {useState, Fragment} from "react";
import {ResizeSensor} from "css-element-queries";

import {desktopSm} from "../../../../assets/style/_regular.scss";
import Translator from "../../../../components/Translator";

const AlternativeData = () => {
  const [screenResolution, setScreenResolution] = useState(null);
  const [tabs, updateTab] = useState([
    {id: "banking", label: "home.alternativeData.point1.header", value: true, content: {
        logo: ["grayscale-bca.svg", "grayscale-mandiri.svg", "grayscale-ovo.svg", "grayscale-bri.svg"],
        text: "home.alternativeData.point1.content"
      }},
    {id: "riding", label: "home.alternativeData.point2.header", value: false, content: {
        logo: ["grayscale-gojek.svg", "grayscale-grab.svg"],
        text: "home.alternativeData.point2.content"
      }},
    {id: "shopping", label: "home.alternativeData.point3.header", value: false, content: {
        logo: ["grayscale-tokopedia.svg", "grayscale-bukalapak.svg", "grayscale-shopee.svg"],
        text: "home.alternativeData.point3.content"
      }},
    {id: "traveling", label: "home.alternativeData.point4.header", value: false, content: {
        logo: ["grayscale-traveloka.svg"],
        text: "home.alternativeData.point4.content"
      }},
    {id: "others", label: "home.alternativeData.point5.header", value: null, content: {
        logo: [],
        text: "home.alternativeData.point5.content"
      }},
  ]);
  const selectTabHandler = obj => {
    if(obj.value !== null){
      updateTab(tabs.map(each => ({...each, value: each.value === null ? null : each.id === obj.id})));
    }
  };
  const activeTabIndex = tabs.map(each => each.value).indexOf(true);
  new ResizeSensor(document.getElementsByTagName("html")[0], () => {
    setScreenResolution(window.innerWidth);
  });
  const activeTab = tabs.filter(({value}) => value)[0];
  return(
    <div className="alternative-data">
      <p className="declaration"><Translator id="home.alternativeData.header"/></p>
      <p className="declaration"><Translator id="home.alternativeData.title"/></p>
      <p className="declaration"><Translator id="home.alternativeData.subtitle"/></p>
      <div className="services-container">
        {screenResolution >= parseInt(desktopSm) ? (
          <Fragment>
            <div className="tab-nav">
              <span className="tab-active-pointer" style={{left: `${activeTabIndex * 20}%`}}/>
              <ul>
                {tabs.map((each, i) => {
                  const className = each.value ? {className: "active"} : {};
                  return(
                    <li key={each.id} {...className} onClick={() => selectTabHandler(each)}>
                      <Translator id={`home.alternativeData.point${i + 1}.header`}/>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={activeTab.content.logo.length <= 2 ? "tab-content content-sm" : "tab-content"}>
              <div className="services">
                <div className="images">
                  <div className="separator">
                    {activeTab.content.logo.slice(1).map(i => <hr key={i}/>)}
                  </div>
                  {activeTab.content.logo.map((each, i) => {
                    return (
                      <div key={i} image-width={`1/${activeTab.content.logo.length}`}>
                        <img src={require(`../../../../assets/logo/${each}`)} alt="Logo"/>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="captured-data">
                <p className="header"><Translator id="home.alternativeData.capturedData"/></p>
                <hr/>
                <p className="content"><Translator id={activeTab.content.text}/></p>
              </div>
            </div>
          </Fragment>
        ) : (
          <ul className="accordion-nav">
            {tabs.map((each, i) => {
              const servicesCount = each.content.logo.length;
              const verticalLine = servicesCount > 2 && servicesCount % 2 === 1 ? Math.ceil(servicesCount / 2) : 0;
              return (
                <li key={i}>
                  <div
                    onClick={() => selectTabHandler(each)}
                    className={each.value ? "accordion-head head-active" : "accordion-head"}>
                    <hr/>
                    <p className="label"><Translator id={each.label}/></p>
                    <i className="fas fa-chevron-up"/>
                  </div>
                  <div className={each.value ? "accordion-body body-active" : "accordion-body"}>
                    <div className="services">
                      {servicesCount >= 2 ? <hr className="vertical" style={{height: `${100 / verticalLine}%`}}/> : null}
                      {servicesCount >= 3 ? <hr className="horizontal"/> : null}
                      <div className="images">
                        {each.content.logo.map((eachService, j) => {
                          const eachServiceClassname = servicesCount > 1
                            ? "each-service"
                            : "each-service full-width";
                          return (
                            <div className={eachServiceClassname} key={j}>
                              <img src={require(`../../../../assets/logo/${eachService}`)} alt="Logo"/>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="captured-data">
                      <p className="header"><Translator id="home.alternativeData.capturedData"/></p>
                      <hr/>
                      <p className="content"><Translator id={each.content.text}/></p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
};

export default AlternativeData