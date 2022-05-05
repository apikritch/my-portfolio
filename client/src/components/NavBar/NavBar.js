import React, { useState } from "react";
import "./NavBar.scss";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  const expandedHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const goToHome = (e) => {
    document.getElementById("Home").scrollIntoView({
      behavior: "smooth",
    });
    if (e.target.className === "menu_button_v") {
      expandedHandler();
    }
  };
  const goToAbout = (e) => {
    document.getElementById("About").scrollIntoView({
      behavior: "smooth",
    });
    if (e.target.className === "menu_button_v") {
      expandedHandler();
    }
  };
  const goToSkills = (e) => {
    document.getElementById("Skills").scrollIntoView({
      behavior: "smooth",
    });
    if (e.target.className === "menu_button_v") {
      expandedHandler();
    }
  };
  const goToProjects = (e) => {
    document.getElementById("Projects").scrollIntoView({
      behavior: "smooth",
    });
    if (e.target.className === "menu_button_v") {
      expandedHandler();
    }
  };
  const goToContact = (e) => {
    document.getElementById("Contact").scrollIntoView({
      behavior: "smooth",
    });
    if (e.target.className === "menu_button_v") {
      expandedHandler();
    }
  };
  return (
    <div>
      <div className="nav_bar">
        <div className="big_menu">
          <button onClick={goToHome} className="menu_button">
            Home
          </button>
          <button onClick={goToAbout} className="menu_button">
            About
          </button>
          <button onClick={goToSkills} className="menu_button">
            Skills
          </button>
          <button onClick={goToProjects} className="menu_button">
            Projects
          </button>
          <button onClick={goToContact} className="menu_button">
            Contact
          </button>
        </div>

        <div className="small_menu">
          <button onClick={expandedHandler}>
            <div className="hamburger"></div>
          </button>
        </div>
      </div>
      <div className="hidden_menu">
        <div
          className={[
            "responsive_menu",
            isExpanded === true && "expanded_menu",
            isExpanded === false && "not_expanded_menu",
          ].join(" ")}
        >
          <ul>
            <li>
              <button className="menu_button_v" onClick={goToHome}>
                Home
              </button>
            </li>
            <li>
              <button className="menu_button_v" onClick={goToAbout}>
                About
              </button>
            </li>
            <li>
              <button className="menu_button_v" onClick={goToSkills}>
                Skills
              </button>
            </li>
            <li>
              <button className="menu_button_v" onClick={goToProjects}>
                Projects
              </button>
            </li>
            <li className="last_li">
              <button className="menu_button_v" onClick={goToContact}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
