import React from "react";
import "./Section.css";

const Section = (props) => {
  const classes = "section " + props.className;
  return (
    <div className={classes} id={props.id}>
      {props.children}
    </div>
  );
};

export default Section;
