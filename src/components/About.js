import React from 'react';
import avatar from '../img/profil.jpg';

const About = () => {
  return (
    <section className="about txt" id="about">
      <img src={avatar} alt="" />
      <h2 className="title-primary">Hi, I’m Emile. Nice to meet you.</h2>
      <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
    </section>
  )
};

export default About;
