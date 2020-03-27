import React from "react";
import avatar from "../img/profil.jpg";

const About = () => {
  return (
    <section className="about txt" id="about">
      <img src={avatar} alt="" />
      <h2 className="title-primary">Hi, I’m Emile. Nice to meet you.</h2>
      <p>
        Over the past years I dedicated my life to computer networks and
        programming. This journey started in my secondary studies and now I hold
        a Bachelor degree in Information Technology. It has been now 2 years
        since I started software developmentent as a career at Andela as an
        associate software engineer.
      </p>
      <p>
        What I love most in software engineering is solving(contributing to
        solving) real-world problems through building software applications or
        tech in general and the joy that comes after.
      </p>
      <p>
        I had also an adventure in networks and communication systems which was
        my major in my university studies and this enabled me to win 2018 cyber
        star.
      </p>
      <p>
        Other than coding I like to watch movies, tv shows, comedy, music and
        enjoying family time.
      </p>
    </section>
  );
};

export default About;
