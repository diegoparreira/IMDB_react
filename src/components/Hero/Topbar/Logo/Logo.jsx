import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://i.ibb.co/j5VVgkz/imdb-logo.png"
        alt="imdb-logo"
        border="0"
        className="footer__logo"
      />
    </Link>
  );
};

export default Logo;
