import React, { useContext, useEffect } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

import Aos from "aos";
import 'aos/dist/aos.css';


const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(()=>{
    Aos.init({duration: 1500 });
  }, []);


  return (
    <div className="experience" id='experience'  data-aos="flip-up"  data-aos-duration="4000" data-aos-delay="300">
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>25+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
    </div>
  );
};

export default Experience;
