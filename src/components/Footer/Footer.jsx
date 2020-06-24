import React from "react";
import Logo from "../Hero/Topbar/Logo";
import Credits from "./Credits";
import SocialMedia from "./SocialMedia";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Logo />
          <Credits />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
