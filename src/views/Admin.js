import React from "react";
import MenuBar from "../components/MenuBar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Contact, Chat } from "../components/Popups";

const AdminPanel = () => {
  return (
    <>
      <div className="resume">
        <div className="">
          <h1>Emile Nsengimana</h1>
        </div>
        <div className="contact-info">
          <div className="left">CONTACT INFORMATION</div>
          <div className="right">
            Email: emilereas7@gmail.com Address: KK 270 st, Rubirizi, Kigali -
            Rwanda Phone: +250782057791
          </div>
        </div>
        <div className="bio">
          <div className="left">WHO AM I</div>
          <div className="right">
            <p>
              Experienced Software Engineer with a demonstrated history of
              working in the information technology and services industry.
              Skilled in Node.js, Databases, Java, JavaScript, Python,
              Python- ask, graphQL and React.js. Strong engineering professional
              with a Bachelor's degree focused in Information Technology from
              the Adventist University of Central Africa.
            </p>
          </div>
        </div>
        <div className="experience">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="education">
          <div className="left"></div>
          <div className="right">
            Bachelor's degree in Information Technology Adventist University of
            Central Africa
          </div>
          High school diplomat College ami des enfants(C.A.E)
        </div>
        <div className="language-skills">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="reference">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
