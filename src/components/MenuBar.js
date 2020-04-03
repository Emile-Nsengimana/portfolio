import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => (
  <nav className="navbar">
    <span>
      <Link className="logo" to="home" smooth offset={-200} duration={1000}>
        Emile Nnsegimana
      </Link>
      <span className="user user-status">
        <FontAwesomeIcon
          style={{ marginRight: "1rem", color: "green" }}
          icon={faCircle}
        />
        online
      </span>
      <span>
        <a className="user user-chat" href="#chat-box">
          chat now
        </a>
      </span>
    </span>
    <div className="navbar__menu">
      <Link to="home" smooth offset={-200} duration={1000}>
        HOME
      </Link>
      <Link to="about" smooth offset={-91} duration={1500}>
        ABOUT
      </Link>
      <Link to="project" smooth offset={-30} duration={1500}>
        PROJECT
      </Link>
      <a href="https://resume.io/r/dFfpsc4Gw" target="_blank">
        RESUME
      </a>
    </div>
  </nav>
);

export default MenuBar;
