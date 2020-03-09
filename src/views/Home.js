import React, { Component } from 'react';
import MenuBar from '../components/MenuBar';
import Curve from '../img/svg/curve.svg';
import avatar from '../img/profil.jpg';
import converge from '../img/converge.png';
import conv from '../img/conv.png';
import ah from '../img/ah.png';
import artx from '../img/artx.png';
import Slider from '../components/Slider';
import js from '../img/js.jpeg';
import python from '../img/last_logo.png';
import htmlCss from '../img/html-css.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
        <MenuBar />
        <section className="welcome" id="home">
          <h1 className="welcome-header">
              Fullstack software developer, friend,
          </h1>
          <div className="welcome-body">
            <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end</p>
            <button className="btn-default">Get in touch</button>
          </div>
          <img className="wave" src={Curve} alt="" />
        </section>
        <div className="container">
        <section className="about txt" id="about">
        <img src={avatar} alt="" />
          <h2 className="title-primary">Hi, I’m Emile. Nice to meet you.</h2>
          <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
        </section>
        <section className="skills">
          <div className="skills__language">
            <h3 className="title-primary" style={{opacity: ".5"}}>Languages I speak</h3>
            <div style={{width: "25%", height: "80%", display: "inline-block"}}>
              <img style={{width: "100%", height: "40%", objectFit: "contain"}} src={js} alt="" />
              <h4 className="title-primary-sm">JavaScript</h4>
              <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end</p>
            </div>

            <div style={{width: "25%", height: "80%", display: "inline-block"}}>
              <img style={{width: "100%", height: "40%", objectFit: "contain"}} src={htmlCss} alt="" />
              <h4 className="title-primary-sm">HTML/CSS</h4>
              <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end </p>
            </div>

            <div style={{width: "25%", height: "80%", display: "inline-block"}}>
              <img style={{width: "100%", height: "40%", objectFit: "contain"}} src={python} alt="" />
              <h4 className="title-primary-sm">Python</h4>
              <p>I have been speaking this language for more than 3 years where It turned out to be my favority due to it's irresistable power on both front-end & back-end </p>
            </div>
          </div>
          <div className="skills__tools">
            <h3 className="title-primary" style={{opacity: ".5" }}>Dev Tools & FRAMEWORKS</h3>
            <Slider />
          </div>
        </section>

        <section className="project" id="project">
          <h3 className="title-primary" style={{opacity: ".5"}}>My project & Contibutions</h3>
          <div className="project-content">
            <div className="project-content__left">
              <img src={ah} alt="" />
            </div>
            <div className="project-content__right txt">
              <h3>AUTHORS HAVEN</h3><span>2019</span>
              <p>A Social platform for the creative at heart where a community of like-minded authors to foster inspiration and innovation by leveraging the modern web.</p>
              <a href="https://ah-lobos-frontend.herokuapp.com/" target="_blank" className="btn">Preview</a>
            </div>
          </div>
          <div className="project-content">
            <div className="project-content__left">
              <img src={converge} alt="" />
            </div>
            <div className="project-content__right txt">
              <h3>CONVERGE</h3><span>2019</span>
              <p> A meeting room management system whose vision is “managing meeting room availability to ensure optimized and beneficial use by and for all Andelans”</p>
              <a href="https://ah-lobos-frontend.herokuapp.com/" target="_blank" className="btn">Preview</a>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="chat-box" id="chat-box" style={{width: "25%", height: "20rem", backgroundColor: "white", position: "fixed", right: "2rem", top: "61vh", borderRadius: ".7rem", padding: "1rem", boxShadow: " .2rem .1rem .2rem .2rem rgba(5, 47, 82, .3)"}}>
          <div><a style={{fontSize: "35px", float: "right"}} href="/">&times;</a></div>
          <div style={{ borderBottom: "1px solid white", padding: "1rem", borderRadius: ".7rem", backgroundColor: "rgba(5, 47, 82, .4)"}}>
          Hi there 👋,
          </div>
          <textarea placeholder="Type your message here ..." style={{width: "100%", resize: "none", height: "80%",fontSize: "1.5rem", letterSpacing: ".2rem", backgroundColor: "white", color: "rgb(5, 47, 82)", borderRadius: ".7rem", border: "none", outline: "none", marginTop: ".1rem"}}></textarea>
        </div>
      </div>
      <a href="#chat-box" className="chat-avatar">
        <img src={avatar} alt="" />
        <FontAwesomeIcon className="chat-avatar-icon" icon={faCircle}/>
      </a>
      <footer className="footer">
      </footer>
    </>
  );
}

export default Home;
