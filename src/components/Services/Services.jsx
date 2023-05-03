import React, { useContext, useEffect } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import Svg1 from "./Svg";
import Aos from "aos";
import "aos/dist/aos.css";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="services"
      id="services"
      data-aos-duration="5000"
      data-aos-delay="600"
    >
      <span
        style={{ color: darkMode ? "white" : "" }}
        className="about_me anim"
        data-aos="flip-left"
      >
        {" "}
        All{" "}
        <span data-aos="flip-left" className="me">
          About
        </span>{" "}
        Me
      </span>
      <div className="grid_about ">
        <div className="awesome " data-aos="slide-right">
          <ul>
            {/* <li>
              Hello! My name is Md Shahbaj Alam and I enjoy creating things that
              live on the internet.
            </li>
            <br />
            <li>
              I'm a passionate Developer, with strong administrative and
              communication skills, good attention to detail and the ability to
              write efficient code using MERN Stack.
            </li>
            <br />
            <li>
              My interest in web development started back last year when I was
              trying to edit things on the web, that taught me a lot about HTML
              & CSS.
            </li>
            <br />
            <li>
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
            </li>
            <br />
            <li>
              Fast Forwarding to today, I built a number of web applications and
              5 major projects. and 20+ own Projects. Learned a great deal about
              teamwork, leadership, and communication. After months of rigorous
              training, here I am looking for an opportunity as a full stack web
              developer.
            </li>
            <br /> */}
            <div
              className="about_article anim"
              style={{ fontSize: "20px", marginTop: "80px" }}
            >
              As a Full Stack MERN Developer, I bring a unique blend of technical expertise and creative problem-solving skills to the table. With extensive experience in developing and implementing full-stack applications, I am proficient in all aspects of MERN stack development, including MongoDB, Express, React, and Node.js. My ability to work collaboratively with cross-functional teams, while also possessing a keen eye for detail, has allowed me to deliver high-quality software solutions that meet the unique needs of my clients. I am passionate about staying up-to-date with the latest technologies and trends in software development and am committed to delivering solutions that are scalable, maintainable, and of the highest quality.
              {/* I am a Full Stack Web Developer. I love exploring new technologies
              in the field of Web Development and always try to adapt to them. I
              believe in the concept of continuous learning by regularly
              upgrading my skills and enhancing my knowledge. I have learned
              MERN stack, data structures algorithms, and soft skills at Masai
              School. As a developer, my hunger for learning has drastically
              increased. And I want to centralize my skills and learning for the
              enhancement of an organization and more of it, to enhance my career. */}
              {/* career.I am also a bachelor in mechanical engineering, even though
              I hold a bachelor's degree in mechanical engineering but my
              passion for information technology and computer science drag me to
              become a full-stack web developer.I have cloned Kimaye,Tanishq
              ,and Bigbasket. Here I was also groomed with soft skills. */}
            </div>
          </ul>
        </div>

        <Svg1 className="svg" data-aos="slide-left" />
      </div>
    </div>
  );
};

export default Services;
