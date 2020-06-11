import React from "react";
import htmlCss from "../img/html-css.png";
import javascript from "../img/js.jpeg";
import python from "../img/python.png";
import Tools from "./DevTools";
const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__language">
        <h3 className="title-primary">
          Languages I speak
        </h3>
        <div className="skill-container">
          <img
            style={{ width: "100%", height: "40%", objectFit: "contain" }}
            src={javascript}
            alt=""
          />
          <h4 className="title-primary-sm">JavaScript</h4>
          <ul>
            <li>+2 years</li>
            <li>+12 projects</li>
          </ul>
        </div>

        <div className="skill-container">
          <img src={htmlCss} alt="" />
          <h4 className="title-primary-sm">HTML/CSS</h4>
          <ul>
            <li>+4 years</li>
            <li>+20 projects</li>
          </ul>
        </div>

        <div className="skill-container">
          <img src={python} alt="" />
          <h4 className="title-primary-sm">Python</h4>
          <ul>
            <li>6 months</li>
            <li>2 projects</li>
          </ul>
        </div>
      </div>
      <div className="skills__tools">
        {/* <h3 className="title-primary">
          Dev Tools & FRAMEWORKS
        </h3> */}
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
