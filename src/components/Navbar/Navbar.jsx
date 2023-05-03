import React, { useContext, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { GoThreeBars } from "react-icons/go";
import { RiCloseCircleFill } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const backgroundColor = "white";
  return (
    <div className="Nav-main" style={{ color: darkMode ? "white" : "",border:'1px solid red' }}>
      <div
        className="n-wrapper"
        id="Navbar"
        style={{
          color: darkMode ? "white" : "",
          backgroundColor: darkMode ? "#0f1624" : "white",
        }}
      >
        <div
          className="n-left"
          style={{
            color: darkMode ? "white" : "",
            backgroundColor: darkMode ? "#0f1624" : "white",
          }}
        >
          <Link to="intro" spy={true} smooth={true} className="list">
            <img
              style={{
                color: darkMode ? "white" : "",
                backgroundColor: backgroundColor === "white" ? "white" : "none"
              }}
              // style={{ color: darkMode ? "white" : "" , backgroundColor: backgroundColor === 'none' ? '' : 'white'}}
              src="https://i.pinimg.com/474x/02/be/9c/02be9cbf682bb531679ffa34099e13d4.jpg"
              alt="d"
              className="n-name"
              data-aos="slide-left"
            />
          </Link>
          <Toggle className="toggle" />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }} activeClass="active">
              <li>
                <Link to="intro" spy={true} smooth={true} className="list">
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} className="list">
                  About
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true} className="list">
                  Skills
                </Link>
              </li>
              {/* <li>
                <Link to="github" spy={true} smooth={true} className="list">
                  GitHub
                </Link>
              </li> */}
              <li>
                <Link to="portfolio" spy={true} smooth={true} className="list">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} className="list">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  style={{ color: darkMode ? "white" : "" }}
                  className="atageresume"
                  target="_blank"
                  href="https://drive.google.com/file/d/1ocxPH_LIE-0YQ1IpdjOiZccu5WsmrE5G/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="hide_menu">
            <GoThreeBars
              onClick={() => {
                setNav(!nav);
                // console.log(nav)
              }}
              style={{ transition: "2s", cursor: "pointer" }}
            />
          </div>

          <ul className={!nav ? "new_hide" : "Show_li"}>
            <RiCloseCircleFill
              onClick={() => {
                setNav(!nav)
              }}
              style={{ marginLeft: "180px", cursor: "pointer", top: "0"}}
            />
            {/* <h5
              onClick={() => {
                setNav(!nav)
              }}
              className="hide_name animate-bounce "
            >
              Md Shahbaj Alam
            </h5> */}
            <li>
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                className="list"
                onClick={() => {
                  setNav(!nav);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to="services"
                spy={true}
                smooth={true}
                className="list"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to="works"
                spy={true}
                smooth={true}
                className="list"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to="portfolio"
                spy={true}
                smooth={true}
                className="list"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to="contact"
                spy={true}
                smooth={true}
                className="list"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  setNav(!nav);
                }}
                className="atageresume"
                target="_blank"
                href="https://drive.google.com/file/d/1ocxPH_LIE-0YQ1IpdjOiZccu5WsmrE5G/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* <Link to="contact" spy={true} smooth={true}>
        <p className="button n-button">Contact</p>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
