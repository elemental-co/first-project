import React from "react";

import Translator from "../../../../components/Translator";

const AlternativeDataV2 = () => {
  const serviceLogo = [
    {id: "point1", icon: "fas fa-university"},
    {id: "point2", icon: "fas fa-wallet"},
    {id: "point3", icon: "fas fa-shopping-bag"},
    {id: "point4", icon: "fas fa-car"},
    {id: "point5", icon: "fas fa-plane-departure"},
    {id: "point6", icon: null}
  ];
  return(
    <div className="alternative-data">
      <p className="declaration"><Translator id="home.alternativeData.header"/></p>
      <p className="declaration"><Translator id="home.alternativeData.title"/></p>
      <p className="declaration"><Translator id="home.alternativeData.subtitle"/></p>
      <div className="services-card-container">
        {serviceLogo.map(({id, icon}) => {
          return(
            <div key={id} className={icon ? "service-card" : "service-card empty-service-card"}>
              <div className="square-padding">
                <div className="square-padding-absolute">
                  {icon ? (
                    <React.Fragment>
                      <div className="card-top">
                        <p className="service-header"><Translator id={`home.alternativeData.version2.${id}.header`}/></p>
                        <i className={`service-icon ${icon}`}/>
                      </div>
                      <hr className="separator"/>
                      <div className="card-bottom">
                        <p className="service-subtile"><Translator id="home.alternativeData.version2.subtitleHeader"/></p>
                        <p className="service-content"><Translator id={`home.alternativeData.version2.${id}.content`}/></p>
                      </div>
                    </React.Fragment>
                  ) : (
                    <p className="service-content-others"><Translator id={`home.alternativeData.version2.${id}`}/></p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default AlternativeDataV2