import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="hero__topbar">
      <div className="container">
        <Logo />
        <Menu />
        <User />
      </div>
    </div>
  );
};

export default Topbar;
