import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Grass from "./components/Grass/Grass";
import Contact from "./components/Contact/Contact";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-124817393-2";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home id="Home" />
      <About id="About" />
      <Skills id="Skills" />
      <Projects id="Projects" />
      <Grass />
      <Contact id="Contact" />
    </div>
  );
};

export default App;
