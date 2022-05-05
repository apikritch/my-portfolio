import React from "react";
import "./SkillLogo.css";

const SkillLogo = (props) => {
  const skill_name = props.skill_name;
  return (
    <div className="skill_logo_row d-flex flex-column align-items-center">
      <img
        className={`skill_logo ${
          skill_name !== "MySQL" ? "" : "background_white"
        }
        `}
        src={props.image}
        alt=""
      />
      <div className="skill_text">{skill_name}</div>
    </div>
  );
};

export default SkillLogo;
