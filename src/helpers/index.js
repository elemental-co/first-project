import {animateScroll as scroll} from "react-scroll";

export const scrollToElement = (e = null) => {
  const switchCase = e !== null
    ? typeof e === "string"
      ? e
      : e.target.getAttribute("name")
    : null;
  switch(switchCase){
    case "what-we-do-link":
      scroll.scrollTo(document.getElementById("home-what-we-do").offsetTop, {
        duration: 1500
      });
      break;
    case "who-we-are-link":
      scroll.scrollTo(document.getElementById("home-about-us").offsetTop);
      break;
    default:
      scroll.scrollTo(0, {
        duration: 3000
      });
  }
};