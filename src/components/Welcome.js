import React from "react";
import Curve from "../img/svg/curve.svg";
import { Link } from "react-scroll";

const Welcome = () => {
  return (
    <section className="welcome" id="home">
      <h1 className="welcome-header">
        Hi, there! <span className="welcome-header_sm">welcome</span>
      </h1>
      <div className="welcome-body">
        <ul>
          <li>I am a full stack web developer</li>
          <li>
            Who is passionate about computer programming &amp; computer
            networks,
          </li>
          <li>Available world wide! (😀 the power of remote working)</li>
          <li>and a team player.</li>
          <li className="special">
            Want to Know more about me?&nbsp;
            <span id="more">
              <Link to="about" smooth offset={-210} duration={1000}>
                yes
              </Link>
            </span>
          </li>
        </ul>
        <a href="#popup-contact" className="btn-default">
          Get in touch
        </a>
      </div>
      <img className="wave" src={Curve} alt="" />
    </section>
  );
};

export default Welcome;
