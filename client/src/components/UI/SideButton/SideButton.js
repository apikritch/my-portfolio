import React from "react";
import "./SideButton.css";

const SideButton = (props) => {
  const linkToWebsite = () => {
    window.open(props.link);
  };
  return (
    <button
      className={[
        "side_button",
        props.color === "blue" && "button_p_blue",
        props.color === "red" && "button_p_red",
        props.color === "green" && "button_p_green",
        props.color === "yellow" && "button_p_yellow",
        props.color === "purple" && "button_p_purple",
        props.all === false && "margin_side_button",
      ].join(" ")}
      onClick={linkToWebsite}
    >
      {props.children}
    </button>
  );
};

export default SideButton;
