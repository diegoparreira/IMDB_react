import React from "react";
import Topbar from './Topbar';
import Content from './Content';
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero">
      <Topbar />
      <Content />
    </header>
  );
};

export default Hero;
