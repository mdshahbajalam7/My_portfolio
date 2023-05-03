import React from "react";
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <img
        src="https://debobrota-haldar.netlify.app/static/media/wave2.bf5c2da41eadeb1dea2a.png"
        alt=""
        style={{ width: "100%", height: "300px" }}
        className="wave"
      />
      <div className="f-content">
        <span>
          Designed and build by{" "}
          <a style={{ color: "white" }} href="#">
            Md Shahbaj Alam
          </a>{" "}
          | 2022 All rights reserved. 
          {/* <label style={{display:"flex"}}> */}
            {/* <BiCopyright />  */}
          {/* </label>{" "} */}
         
        </span>
      </div>
    </div>
  );
};

export default Footer;
