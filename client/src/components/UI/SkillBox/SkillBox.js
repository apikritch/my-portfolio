import React from "react";
import "./SkillBox.css";

const SkillBox = (props) => {
  const classes = "skill_box " + props.className;
  return (
    <div
      className={[classes, props.text_1 === "Other" && "skill_box_l"].join(" ")}
    >
      <div className="t_border d-flex">
        <div className="t_border_1"></div>
        <div className="orange_white_text">
          <div className="orange_text d-inline">{props.text_1}</div>
          {props.text_2 && (
            <div className="white_text d-inline">{props.text_2}</div>
          )}
        </div>
        <div className="t_border_2 flex-grow-1"></div>
      </div>
      <div className="h_border d-flex align-items-center justify-content-around flex-wrap">
        {props.children}
      </div>

      <div className="b_border"></div>
    </div>
  );
};

export default SkillBox;
