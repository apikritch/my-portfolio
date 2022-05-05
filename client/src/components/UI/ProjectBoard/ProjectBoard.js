import React from "react";
import "./ProjectBoard.css";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const ProjectBoard = (props) => {
  console.log();
  return (
    <div>
      <div className="top_black_frame_padding">
        <div className="top_black_frame"></div>
      </div>
      <div className="top_sec_black_frame_padding">
        <div className="top_sec_black_frame"></div>
      </div>
      <div className="top_yellow_frame_padding">
        <div className="top_yellow_frame"></div>
      </div>
      <div className="side_black_frame">
        <div className="side_yellow_frame">
          <div className="yellow_space">
            <div className="project_content d-flex flex-column justify-content-center align-items-center">
              <ProjectDetail detail={props.detail} />
            </div>

            <div className="d-flex justify-content-start">
              <div className="yellow_dot"></div>
            </div>
            <div className="d-flex align-items-start flex-column h-100">
              <div className="mb-auto w-100">
                <div className="black_dot_padding d-flex justify-content-between">
                  <div className="black_dot"></div>
                  <div className="black_dot"></div>
                </div>
              </div>
              <div className="black_dot_2 w-100">
                <div className="black_dot_padding d-flex justify-content-between">
                  <div className="black_dot"></div>
                  <div className="black_dot"></div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="yellow_dot_2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_yellow_frame_padding">
        <div className="bottom_yellow_frame"></div>
      </div>
      <div className="bottom_sec_black_frame_padding">
        <div className="bottom_sec_black_frame"></div>
      </div>
      <div className="bottom_black_frame_padding">
        <div className="bottom_black_frame"></div>
      </div>
    </div>
  );
};

export default ProjectBoard;
