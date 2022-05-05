import React from "react";
import "./ContactInput.css";

const ContactInput = (props) => {
  const classes = "contact_content_position " + props.className;

  return (
    <div className={classes}>
      {props.contact_title === "Message" ? (
        <div>
          <div className="contact_title">{props.contact_title}</div>
          <div className="contact_textarea_frame">
            <div className="top_white_textarea_padding">
              <div className="top_white_textarea"></div>
            </div>

            <div className="side_white_input">
              <div className="side_black_textarea_padding">
                <div className="side_black_textarea">
                  <div className="puller"></div>
                  <textarea
                    name={props.contact_title}
                    id={props.contact_title}
                    rows="4"
                    className="contact_textarea"
                    value={props.value}
                    onChange={props.onChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="top_white_textarea_padding">
              <div className="top_white_textarea"></div>
            </div>

            <div className="top_black_textarea_padding">
              <div className="top_black_textarea"></div>
            </div>
            <div className="bottom_black_textarea_padding">
              <div className="bottom_black_textarea"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="contact_title">{props.contact_title}</div>
          <div className="contact_input_frame">
            <div className="top_white_input_padding">
              <div className="top_white_input"></div>
            </div>
            <div className="top_sec_white_input_padding">
              <div className="top_sec_white_input"></div>
            </div>
            <div className="side_white_input">
              <div className="side_black_input_padding">
                <div className="side_black_input">
                  <input
                    className="contact_input"
                    type={props.contact_title === "Email" ? "email" : "text"}
                    id={props.contact_title}
                    name={props.contact_title}
                    value={props.value}
                    onChange={props.onChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="top_sec_white_input_padding">
              <div className="top_sec_white_input"></div>
            </div>
            <div className="top_white_input_padding">
              <div className="top_white_input"></div>
            </div>
            <div className="top_black_input_padding">
              <div className="top_black_input"></div>
            </div>
            <div className="top_black_dot_padding">
              <div className="d-flex justify-content-between">
                <div className="small_black_dot"></div>
                <div className="small_black_dot"></div>
              </div>
            </div>
            <div className="bottom_black_dot_padding">
              <div className="d-flex justify-content-between">
                <div className="small_black_dot"></div>
                <div className="small_black_dot"></div>
              </div>
            </div>
            <div className="bottom_black_input_padding">
              <div className="bottom_black_input"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInput;
