import React from "react";

import "./index.scss";
import Header from "./Header";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Home = () => {
  return(
    <div className="home-container">
      <Header/>
      <AboutUs/>
      {/*<ContactUs/>*/}
      <Footer/>
    </div>
  )
};

export default Home