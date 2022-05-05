import React from "react";
import "./ProjectDetail.css";
import SideButton from "../SideButton/SideButton";

const ProjectDetail = (props) => {
  const detail = props.detail;
  return (
    props && (
      <div className="project_board_padding">
        <div className="project_border">
          <div className="image_frame">
            <div className="row align-items-center h-100 justify-content-center">
              <img
                src={detail.image}
                alt=""
                className="images"
                style={detail.name === "UMD Chatbot" ? { width: "50%" } : {}}
              />
            </div>
          </div>
          <div className="project_details">
            <div className="detail_background">
              <div className="web_header">{detail.name}</div>
              <div className="web_details">{detail.project_details}</div>
            </div>
          </div>
        </div>
        <div className="project_side_button_frame">
          <div
            className={[
              "side_button_position",
              detail.customer_website &&
              detail.admin_website &&
              detail.password &&
              detail.github &&
              detail.figma
                ? "side_button_justify_a"
                : "side_button_justify_b",
            ].join(" ")}
          >
            {detail.customer_website && (
              <SideButton
                color="red"
                link={detail.customer_website}
                all={
                  detail.customer_website &&
                  detail.admin_website &&
                  detail.password &&
                  detail.github &&
                  detail.figma
                    ? true
                    : false
                }
              >
                Website
              </SideButton>
            )}
            {detail.admin_website && (
              <SideButton
                color="purple"
                link={detail.admin_website}
                all={
                  detail.customer_website &&
                  detail.admin_website &&
                  detail.password &&
                  detail.github &&
                  detail.figma
                    ? true
                    : false
                }
              >
                Admin
              </SideButton>
            )}
            {detail.password && (
              <SideButton
                color="yellow"
                link={detail.password}
                all={
                  detail.customer_website &&
                  detail.admin_website &&
                  detail.password &&
                  detail.github &&
                  detail.figma
                    ? true
                    : false
                }
              >
                Password
              </SideButton>
            )}
            {detail.github && (
              <SideButton
                color="blue"
                link={detail.github}
                all={
                  detail.customer_website &&
                  detail.admin_website &&
                  detail.password &&
                  detail.github &&
                  detail.figma
                    ? true
                    : false
                }
              >
                GitHub
              </SideButton>
            )}
            {detail.figma && (
              <SideButton
                color="green"
                link={detail.figma}
                all={
                  detail.customer_website &&
                  detail.admin_website &&
                  detail.password &&
                  detail.github &&
                  detail.figma
                    ? true
                    : false
                }
              >
                Figma
              </SideButton>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectDetail;
