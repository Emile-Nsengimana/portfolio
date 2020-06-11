import React from "react";
import MenuBar from "../components/MenuBar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Contact, Chat } from "../components/Popups";

const Home = () => {
  return (
    <>
      <MenuBar />
      <Welcome />
      <div className="container ">
        <About />
        <Skills />
        <Projects />
      </div>
      <Chat />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
