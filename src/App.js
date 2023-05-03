import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
// import {GitHub} from "./components/github/Github";
import Github from "./components/github/Github"


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#1e293b" : "",
        color: darkMode ? "white" : "", }}
    >

      <Navbar />
      <Intro />
      <Services />
      <Works />
      <Experience />
      <Github/>
      {/* <GitHub/> */}
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
 
    </div>
  );
}

export default App;