import React from "react";
import Curve from '../img/svg/curve.svg';

const Welcome = () => {
  return (
    <section className="welcome" id="home">
      <h1 className="welcome-header">
        Fullstack software developer, friend,
          </h1>
      <div className="welcome-body">
        <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end</p>
        <a href="#popup-contact" className="btn-default">Get in touch</a>
      </div>
      <img className="wave" src={Curve} alt="" />
    </section>
  )
};

export default Welcome;




