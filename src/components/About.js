import React from "react";
import avatar from "../img/profil.jpg";

const About = () => {
  return (
    <section className="about txt" id="about">
      <img src={avatar} alt="" />
      <h2 className="title-primary">Hi, nice to meet you</h2>
      <p>
        I am a software developer from Rwanda, Kigali with a demonstrated history of software development in NodeJs, React, React-native and Python-Flask. A strong believer in the power of positive thinking, team spirit and I define every challenge as an opportunity to grow.
      </p>
      <p>
      <span>▶</span>Outside of work, I like watching movies, coding, and enjoying family time. 
      </p>
      {/* <p>
        What I love most in software engineering is solving(contributing to
        solving) real-world problems through building software applications or
        tech in general and the joy that comes with it.
      </p>
      <p>
        I had also an adventure in networks and communication systems which was
        my major in my university studies and this enabled me to win 2018 cyber
        star.
      </p>
      <p>
        Other than coding I like to watch movies, tv shows, comedy, music and
        enjoying family time.
      </p> */}
    </section>
  );
};

export default About;
