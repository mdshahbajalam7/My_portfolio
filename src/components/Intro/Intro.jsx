import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import { Typewriter } from "react-simple-typewriter";
import SmoothList from "react-smooth-list";
import { BsGithub } from "react-icons/bs"
import resume from "./Md Shahbaj Alam Resume.pdf"
import { AiOutlineDownload, IconName } from "react-icons/ai";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleclick = () => {
    window.open(
      "https://drive.google.com/file/d/1ocxPH_LIE-0YQ1IpdjOiZccu5WsmrE5G/view?usp=sharing"
    );
  };
  return (
    <SmoothList transitionDuration={2500} animated={true}>
      <div className="Intro" id="intro">
        <div className="i-left">
          <div className="i-name ">
            <span style={{ color: darkMode ? "white" : "" }}>
              <div style={{ fontSize: "27px" }}>
                <h3 style={{ fontSize: "27px" }} className="helo anim">
                  Hello, My Name is
                </h3>
              </div>
            </span>

            <span className="animate-charcte name anim">Md Shahbaj Alam</span>
            <h2 className="full_stack_h2 anim">
              I'm a
              <span className="full_stack anim">
                <Typewriter
                  style={{ marginLeft: "10px" }}
                  words={[
                    "  MERN Stack Developer.",
                    "  Full Stack Web Developer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>

          <a
            href={resume}
            download
            className="resum anim"
          >
            <button className="resume shadow-lg shadow-cyan-500/50"
            onClick={handleclick}
            >
              Resume
              <AiOutlineDownload size={25}/>
            </button>
          </a>

          <div className="i-icons">
            <a
              href="https://github.com/mdshahbajalam7"
              target="_blank"
              rel="noopener noreferrer"
            >
              
               <BsGithub  fontSize={"100px"} color="black"/>
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahbaj-alam-7343a320a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ borderRadius: "50%" }}
                src="data:image/png;base64,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"
                alt="linkdin"
              />
            </a>
          </div>
        </div>

        <div className="i-right">
          <img
            src="https://ca.slack-edge.com/T03MLPV8XBQ-U0414QRLS2G-589d8cac38ef-512"
            alt="me"
            className="my_img anim"
          />
        </div>
      </div>
    </SmoothList>
  );
};

export default Intro;
