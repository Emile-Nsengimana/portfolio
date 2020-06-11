import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ah from "../img/ah.png";
import converge from "../img/converge.png";

const Projects = () => {
  return (
    <section className="project" id="project">
      <h3 className="title-primary">My recent projects & Contributions</h3>
      <div className="project-content">
        <div className="project-content__left">
          <img src={ah} alt="" />
        </div>
        <div className="project-content__right txt">
          <h3>AUTHORS HAVEN</h3><span>2019</span>
          <p className="txt">A Social platform for the creative at heart where a community of like-minded authors to foster inspiration and innovation by leveraging the modern web.</p>
          <a href="https://ah-lobos-frontend.herokuapp.com/" target="_blank" className="btn">Preview</a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-content__left">
          <img src={converge} alt="" />
        </div>
        <div className="project-content__right txt">
          <h3>CONVERGE</h3><span>2019</span>
          <p className="txt"> A meeting room management system whose vision is “managing meeting room availability to ensure optimized and beneficial use by and for all Andelans”</p>
          <a href="https://converge.andela.com" target="_blank" className="btn">Preview</a>
        </div>
      </div>
    </section>)
};

export default Projects;
