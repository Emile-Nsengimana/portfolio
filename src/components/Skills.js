import React from "react";
import htmlCss from "../img/html-css.png";
import javascript from "../img/js.jpeg";
import python from "../img/python.png";
import Tools from "./DevTools";
const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__language">
        <h3 className="title-primary" style={{ opacity: ".5" }}>Languages I speak</h3>
        <div style={{ width: "25%", height: "80%", display: "inline-block" }}>
          <img style={{ width: "100%", height: "40%", objectFit: "contain" }} src={javascript} alt="" />
          <h4 className="title-primary-sm">JavaScript</h4>
          <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end</p>
        </div>

        <div style={{ width: "25%", height: "80%", display: "inline-block" }}>
          <img style={{ width: "100%", height: "40%", objectFit: "contain" }} src={htmlCss} alt="" />
          <h4 className="title-primary-sm">HTML/CSS</h4>
          <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end </p>
        </div>

        <div style={{ width: "25%", height: "80%", display: "inline-block" }}>
          <img style={{ width: "100%", height: "40%", objectFit: "contain" }} src={python} alt="" />
          <h4 className="title-primary-sm">Python</h4>
          <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end </p>
        </div>
      </div>
      <div className="skills__tools">
        <h3 className="title-primary" style={{ opacity: ".5" }}>Dev Tools & FRAMEWORKS</h3>
        <Tools />
      </div>
    </section>
  )
};

export default Skills;
