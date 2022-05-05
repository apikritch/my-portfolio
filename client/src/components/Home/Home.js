import React from "react";
import "./Home.scss";
import Section from "../UI/Section/Section";

const Home = (props) => {
  return (
    <Section className="home_section d-flex align-items-center" id={props.id}>
      <div id="stars"></div>
      <div id="medium_stars"></div>
      <div id="small_stars"></div>
      <div>
        <div className="py-1">Hello World,</div>
        <div className="py-1">I'm Apikritch,</div>
        <div className="py-1">Web Developer</div>
      </div>
    </Section>
  );
};

export default Home;
