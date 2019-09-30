import React, {useState} from "react";

import Translator from "../../../../components/Translator";

const AlternativeData = () => {
  const [tabs, updateTab] = useState([
    {id: "banking", label: "Banking", value: true},
    {id: "riding", label: "Riding", value: false},
    {id: "shopping", label: "Shopping", value: false},
    {id: "traveling", label: "Traveling", value: false},
    {id: "lending", label: "Lending", value: false},
  ]);
  const selectTabHandler = id => {
    updateTab(tabs.map(each => ({...each, value: each.id === id})));
  };
  return(
    <div className="alternative-data">
      <p className="declaration"><Translator id="home.alternativeData.header"/></p>
      <p className="declaration"><Translator id="home.alternativeData.title"/></p>
      <p className="declaration"><Translator id="home.alternativeData.subtitle"/></p>
      <div className="services-container">
        <div className="tab-nav">
          <span className="tab-active-pointer" style={{left: `${tabs.map(each => each.value).indexOf(true) * 20}%`}}/>
          <ul>
            {tabs.map((each, i) => {
              const className = each.value ? {className: "active"} : {};
              return(
                <li key={each.id} {...className} onClick={() => selectTabHandler(each.id)}>
                  <Translator id={`home.alternativeData.point${i + 1}.header`}/>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="tab-content">
          <div className="services"></div>
          <div className="captured-data">
            <div className="content">
              <p><Translator id="home.alternativeData.capturedData"/></p>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus enim libero, porta maximus risus semper ut.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AlternativeData