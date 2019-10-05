import React from "react";

import "./index.scss";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const Home = () => {
  return(
    <div className="home-container">
      <Header/>
      <AboutUs/>
      <Footer/>
    </div>
  )
};

export default Home