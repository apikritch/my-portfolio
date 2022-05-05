import React from "react";
import "./ProjectButton.css";

const ProjectButton = () => {
  return (
    <div className="project_button d-flex">
      <div className="project_button_left d-flex align-items-center">
        <div className="black_dot"></div>
        <div>
          <div className="black_dot"></div>
          <div className="grey_dot"></div>
          <div className="black_dot"></div>
        </div>
        <div>
          <div className="black_dot"></div>
          <div className="white_space_1"></div>
          <div className="grey_dot"></div>
          <div className="black_dot"></div>
        </div>
        <div>
          <div className="black_dot"></div>
          <div className="white_space_2"></div>
          <div className="grey_dot"></div>
          <div className="black_dot"></div>
        </div>
        <div className="black_space"></div>
      </div>
      <div className="project_button_right d-flex align-items-center">
        <div className="black_space"></div>
        <div>
          <div className="black_dot"></div>
          <div className="white_space_2"></div>
          <div className="grey_dot"></div>
          <div className="black_dot"></div>
        </div>
        <div>
          <div className="black_dot"></div>
          <div className="white_space_1"></div>
          <div className="grey_dot"></div>
          <div className="black_dot"></div>
        </div>
        <div>
          <div className="black_dot"></div>
          <div className="grey_dot"></div>
          <div className="black_dot"></div>
        </div>
        <div className="black_dot"></div>
      </div>
    </div>
  );
};

export default ProjectButton;
