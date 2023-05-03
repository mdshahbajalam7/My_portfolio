import React, { useContext, useEffect } from "react";
import GitHubCalendar from 'react-github-calendar';
import { themeContext } from "../../Context";
import "./Github.css";

import Aos from "aos";
import "aos/dist/aos.css";


const GitHub = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div  className="github"
    id="github">
      <div
        className="github-section"
        id="github-section"
        data-aos-duration="5000"
        data-aos-delay="600"
      >
        <span
          style={{ color: darkMode ? "white" : "" }}
          className="about_me anim"
          data-aos="flip-left"
        >
          Git
          <span data-aos="flip-left" className="me">
            hub
          </span>{" "}

        </span>
        <div className="grid_about-section ">

          <img data-aos="slide-right" id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=mdshahbajalam7&theme=react&hide_border=false"
            alt="" />
          <img id="github-stats-card"
            data-aos="slide-left"
            src="https://github-readme-stats.vercel.app/api?username=mdshahbajalam7&theme=react&hide_border=false&include_all_commits=true&count_private=false"
            alt="" />
        </div>
        <div className="" data-aos="slide-up">
          <img id="github-top-langs"

            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mdshahbajalam7&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
            alt="" />
        </div>
        <div className="github-section-1" data-aos="slide-up">
          <GitHubCalendar
            fontSize={14}
            color="#4169el"
            blockRadius={1}
            blockMargin={6}
            blockSize={16}
            margin="auto"
            showWeekdayLabels
            className="react-activity-calendar" id="react-activity-calendar" username="mdshahbajalam7" />
        </div>
      </div>
    </div>
  );
};

export default GitHub;
