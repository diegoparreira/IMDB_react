import React from "react";
import { Link } from "react-router-dom";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <ul className="footer__social">
      <li className="social__item twitter">
        <Link to="/" className="social__item__link">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </Link>
      </li>
      <li className="social__item facebook">
        <Link to="/" className="social__item__link">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </Link>
      </li>
      <li className="social__item instagram">
        <Link to="/" className="social__item__link">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
      </li>
      <li className="social__item github" >
        <Link to="/" className="social__item__link">
          <i className="fa fa-github" aria-hidden="true"></i>
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
